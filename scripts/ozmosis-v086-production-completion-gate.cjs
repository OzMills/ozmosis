const fs = require("fs");
const path = require("path");
const vm = require("vm");

const root = path.resolve(__dirname, "..");
const indexPath = path.join(root, "index.html");
const contentDir = path.join(root, "content");
const dataDir = path.join(root, "data");
const qaDir = path.join(root, "docs", "qa");
const inventoryPath = path.join(qaDir, "v0.86_production_inventory.csv");
const summaryPath = path.join(qaDir, "v0.86_production_inventory_summary.json");

const expectedStartAppVersion = "v0.85.11";
const expectedStartExportVersion = "v0.85.11-final-regression-live-readiness";
const expectedFinalAppVersion = "v0.86";
const expectedFinalExportVersion = "v0.86-production-completion";

const protectedStorageKeys = [
  "ozmosis_b1_sprint_progress_v1",
  "ozmosis_b1_progress_evidence_v1",
  "ozmosis_b1_path_unlock_overrides_v1",
  "ozmosis_b1_review_edit_queue_v1",
  "ozmosis_b1_progress_summary_v1"
];

const requiredQaFiles = [
  "v0.85.11-live-url_canonical_live_url_pages_path_decision.md",
  "v0.85.11-live-url_canonical_url_decision.md",
  "v0.85.11-live-url_current_url_decision_check.json"
];

const optionalRegressionFiles = [
  "v0.85.10_review_queue_production_wait_rows.csv",
  "v0.85.10_review_queue_resolution_summary.json",
  "v0.85.11_regression_chain_results.json"
];

function read(file) {
  return fs.readFileSync(file, "utf8");
}

function writeJson(file, value) {
  fs.writeFileSync(file, JSON.stringify(value, null, 2) + "\n", "utf8");
}

function csvCell(value) {
  const text = value == null ? "" : String(value);
  return /[",\r\n]/.test(text) ? '"' + text.replace(/"/g, '""') + '"' : text;
}

function writeCsv(file, rows, headers) {
  const lines = [headers.join(",")];
  rows.forEach((row) => {
    lines.push(headers.map((header) => csvCell(row[header])).join(","));
  });
  fs.writeFileSync(file, lines.join("\n") + "\n", "utf8");
}

function parseVersions(index) {
  const app = index.match(/OZMOSIS_APP_VERSION\s*=\s*"([^"]+)"/);
  const exp = index.match(/OZMOSIS_EXPORT_VERSION\s*=\s*"([^"]+)"/);
  return {
    appVersion: app ? app[1] : "",
    exportVersion: exp ? exp[1] : ""
  };
}

function parseInlineScripts(index) {
  const scripts = [];
  const scriptRe = /<script\b(?![^>]*\bsrc=)[^>]*>([\s\S]*?)<\/script>/gi;
  let match;
  while ((match = scriptRe.exec(index))) scripts.push(match[1]);
  scripts.forEach((script, idx) => {
    try {
      new Function(script);
    } catch (error) {
      throw new Error(`index.html inline script ${idx + 1} does not parse: ${error.message}`);
    }
  });
  return scripts.length;
}

function parseTsv(file) {
  const text = read(file);
  const rows = text.trim() ? text.trim().split(/\r?\n/) : [];
  const header = rows.length ? rows[0].split("\t") : [];
  return { rows: Math.max(0, rows.length - 1), columns: header.length };
}

function loadContent() {
  const context = {
    window: { OZMOSIS_CONTENT: {} },
    console
  };
  context.global = context;
  vm.createContext(context);

  const keySource = {};
  const files = fs.readdirSync(contentDir).filter((name) => name.endsWith(".js")).sort();
  files.forEach((name) => {
    const file = path.join(contentDir, name);
    const before = new Set(Object.keys(context.window.OZMOSIS_CONTENT || {}));
    const source = read(file);
    try {
      new Function(source);
      vm.runInContext(source, context, { filename: name });
    } catch (error) {
      throw new Error(`${name} does not parse/execute as a content file: ${error.message}`);
    }
    Object.keys(context.window.OZMOSIS_CONTENT || {}).forEach((key) => {
      if (!before.has(key) || !keySource[key]) keySource[key] = `content/${name}`;
    });
  });
  return {
    files,
    content: context.window.OZMOSIS_CONTENT || {},
    metadataManifest: context.window.OZMOSIS_B1_METADATA_MANIFEST_V1 || null,
    keySource
  };
}

function text(value) {
  if (Array.isArray(value)) return value.map(text).filter(Boolean).join(" ");
  if (value && typeof value === "object") return Object.values(value).map(text).filter(Boolean).join(" ");
  return value == null ? "" : String(value);
}

function listHas(value) {
  if (Array.isArray(value)) return value.some((line) => String(line || "").trim());
  return !!String(value || "").trim();
}

function promptSegments(raw) {
  const source = String(raw || "");
  const result = {
    scenario: "",
    usefulPhrases: "",
    checklist: "",
    modelAnswer: "",
    hasStructuredLabels: false
  };
  const pattern = /(Scenario|Useful phrases|Checklist|Optional model answer|Model answer):/ig;
  const labels = [];
  let match;
  while ((match = pattern.exec(source))) {
    labels.push({ label: match[1].toLowerCase(), index: match.index, bodyStart: pattern.lastIndex });
  }
  result.hasStructuredLabels = labels.length > 0;
  labels.forEach((entry, index) => {
    const end = labels[index + 1] ? labels[index + 1].index : source.length;
    const body = source.slice(entry.bodyStart, end).trim();
    if (entry.label === "scenario") result.scenario = body;
    else if (entry.label === "useful phrases") result.usefulPhrases = body;
    else if (entry.label === "checklist") result.checklist = body;
    else result.modelAnswer = body;
  });
  return result;
}

function isExplicitProduction(item) {
  return !!(item && (
    item.itemType === "production_card" ||
    item.taskType === "production_card" ||
    item.type === "production_card" ||
    item.answerMode === "mark_practised" ||
    item.responseSurface === "production"
  ));
}

function cloneWithParent(variant, parent) {
  const row = Object.assign({}, parent || {}, variant || {});
  if (parent) {
    row.parentItemId = parent.id || parent.variantFamilyId || "";
    row.variantFamilyId = parent.variantFamilyId || parent.id || row.variantFamilyId || "";
    row.moduleKey = row.moduleKey || parent.moduleKey || "";
    row.categoryId = row.categoryId || parent.categoryId || "";
    row.sourceRowId = row.sourceRowId || variant && (variant.sourceRowId || variant.sourceRowAuditKey || variant.id) || "";
  }
  return row;
}

function productionRowsForItem(item) {
  if (!item || typeof item !== "object") return [];
  if (item.itemType === "variant_family" && Array.isArray(item.variants)) {
    return item.variants.filter(isExplicitProduction).map((variant) => cloneWithParent(variant, item));
  }
  return isExplicitProduction(item) ? [item] : [];
}

function exclusionReasons(item) {
  const reasons = [];
  if (!item || !item.id) reasons.push("missing_item");
  if (item && item.status && !/^active$/i.test(String(item.status))) reasons.push(`status_${item.status}`);
  if (item && item.previewOnly) reasons.push("preview_only");
  if (item && item.categoryId === "CAT18") reasons.push("preview_or_inactive_import");
  if (item && item.activeB1Evidence === false) reasons.push("inactive_evidence");
  if (item && item.reviewOnly === true) reasons.push("review_only");
  if (item && item.normalPracticeEligible === false) reasons.push("manifest_gate_excluded");
  if (item && item.needsHumanReview === true) reasons.push("human_review");
  if (item && item.quarantined === true) reasons.push("quarantined");
  return reasons;
}

function routeKeyFor(contentKey, item) {
  const key = String(contentKey || item.moduleKey || "");
  if (/Redemittel/i.test(key)) return "redemittel";
  if (/Wortschatz/i.test(key)) return "wortschatz";
  if (/Connectors/i.test(key)) return "connectors";
  if (/CasesArticles/i.test(key)) return "cases_articles";
  if (/Prepositions/i.test(key)) return "prepositions";
  if (/WordOrder/i.test(key)) return "word_order";
  const rawModule = String(item.moduleKey || key);
  const numbered = rawModule.match(/^b1[-_]?m?(\d{1,2})/i) || rawModule.match(/^b1M(\d{1,2})/);
  if (numbered) return `b1_m${numbered[1].padStart(2, "0")}`;
  const module = rawModule.replace(/^b1/i, "b1_").toLowerCase();
  return module || "production";
}

function fieldValue(item, keys) {
  for (const key of keys) {
    if (item && item[key] != null && String(text(item[key])).trim()) return item[key];
  }
  return "";
}

function makeInventory(content, keySource) {
  const rows = [];
  Object.keys(content).sort().forEach((contentKey) => {
    const items = Array.isArray(content[contentKey]) ? content[contentKey] : [];
    items.forEach((item) => {
      productionRowsForItem(item).forEach((row) => {
        const segments = promptSegments(row.prompt_de || row.prompt || "");
        const hasPrompt = !!String(fieldValue(row, ["prompt_de", "prompt", "question", "instruction", "sentence"]) || "").trim();
        const hasUsefulPhrases = listHas(row.usefulPhrases) || listHas(row.useful_phrases) || !!segments.usefulPhrases;
        const hasChecklist = listHas(row.productionChecklist) || listHas(row.checklist) || !!segments.checklist;
        const hasModelAnswer = !!String(fieldValue(row, ["modelAnswer_de", "model_answer", "modelAnswer", "fullAnswer_de", "example_de"]) || segments.modelAnswer || "").trim();
        const hasScenario = !!String(fieldValue(row, ["scenario", "scenario_de", "learnerCue", "meaningCue", "support_de", "support_en"]) || segments.scenario || "").trim();
        const reasons = exclusionReasons(row);
        if (!hasPrompt) reasons.push("missing_prompt");
        if (!hasModelAnswer) reasons.push("missing_model_answer");
        const normalPracticeEligible = reasons.length === 0;
        const normalAutoGradedPracticeEligible = false;
        const safeForProductionRoute = normalPracticeEligible && isExplicitProduction(row) && hasPrompt && hasModelAnswer;
        rows.push({
          itemId: row.id || row.variantId || "",
          sourceFile: row.sourceFile || row.sourceTaskCsv || keySource[contentKey] || "",
          sourceRowId: row.sourceRowId || row.sourceRowAuditKey || row.source_row_id || row.id || "",
          moduleKey: row.moduleKey || contentKey,
          categoryId: row.categoryId || row.category || "",
          routeKey: routeKeyFor(contentKey, row),
          taskType: row.taskType || row.itemType || row.type || "",
          answerMode: row.answerMode || "",
          responseSurface: row.responseSurface || "",
          productionFlag: isExplicitProduction(row),
          normalPracticeEligible,
          normalAutoGradedPracticeEligible,
          activeB1Evidence: row.activeB1Evidence !== false,
          reviewOnly: row.reviewOnly === true,
          v02ApplyGateStatus: row.v02ApplyGateStatus || row.applyGateStatus || row.originalStage3Decision || "",
          hasPrompt,
          hasUsefulPhrases,
          hasChecklist,
          hasModelAnswer,
          hasScenario,
          safeForProductionRoute,
          blockedReason: safeForProductionRoute ? "" : reasons.join("|") || "not_route_eligible"
        });
      });
    });
  });
  return rows;
}

function countBy(rows, key) {
  return rows.reduce((acc, row) => {
    const value = String(row[key] || "");
    acc[value] = (acc[value] || 0) + 1;
    return acc;
  }, {});
}

function parseMetadataManifest(content, loadedManifest) {
  const manifest = loadedManifest || content.b1MetadataManifest || content.b1MetadataManifestEntries || content.b1MetadataManifestRows || null;
  if (manifest && manifest.entriesById && typeof manifest.entriesById === "object") {
    const keys = Object.keys(manifest.entriesById);
    return {
      schemaVersion: manifest.schemaVersion || "",
      manifestVersion: manifest.manifestVersion || "",
      entryCount: Number(manifest.entryCount || keys.length),
      entries: keys.length,
      itemIds: keys.length,
      duplicateIds: Array.isArray(manifest.duplicateItemIds) ? manifest.duplicateItemIds.length : keys.length - new Set(keys).size
    };
  }
  if (Array.isArray(manifest)) {
    const ids = manifest.map((row) => row && (row.itemId || row.id)).filter(Boolean);
    return { entries: manifest.length, itemIds: ids.length, duplicateIds: ids.length - new Set(ids).size };
  }
  if (manifest && typeof manifest === "object") {
    const keys = Object.keys(manifest);
    return { entries: keys.length, itemIds: keys.length, duplicateIds: keys.length - new Set(keys).size };
  }
  return { entries: 0, itemIds: 0, duplicateIds: 0 };
}

function main() {
  fs.mkdirSync(qaDir, { recursive: true });
  const index = read(indexPath);
  const versions = parseVersions(index);
  const versionState = versions.appVersion === expectedFinalAppVersion && versions.exportVersion === expectedFinalExportVersion ? "final" :
    versions.appVersion === expectedStartAppVersion && versions.exportVersion === expectedStartExportVersion ? "starting" : "unexpected";
  const inlineScriptCount = parseInlineScripts(index);
  const loaded = loadContent();
  const inventory = makeInventory(loaded.content, loaded.keySource);
  const headers = [
    "itemId",
    "sourceFile",
    "sourceRowId",
    "moduleKey",
    "categoryId",
    "routeKey",
    "taskType",
    "answerMode",
    "responseSurface",
    "productionFlag",
    "normalPracticeEligible",
    "normalAutoGradedPracticeEligible",
    "activeB1Evidence",
    "reviewOnly",
    "v02ApplyGateStatus",
    "hasPrompt",
    "hasUsefulPhrases",
    "hasChecklist",
    "hasModelAnswer",
    "hasScenario",
    "safeForProductionRoute",
    "blockedReason"
  ];
  writeCsv(inventoryPath, inventory, headers);

  const storageKeysPresent = protectedStorageKeys.reduce((acc, key) => {
    acc[key] = index.includes(key);
    return acc;
  }, {});
  const qaFiles = requiredQaFiles.reduce((acc, name) => {
    acc[name] = fs.existsSync(path.join(qaDir, name));
    return acc;
  }, {});
  const optionalFiles = optionalRegressionFiles.reduce((acc, name) => {
    acc[name] = fs.existsSync(path.join(qaDir, name));
    return acc;
  }, {});
  const articleTsv = fs.existsSync(path.join(dataDir, "article-items.tsv")) ? parseTsv(path.join(dataDir, "article-items.tsv")) : null;
  const metadata = parseMetadataManifest(loaded.content, loaded.metadataManifest);
  const unsafeAutoGraded = inventory.filter((row) => row.normalAutoGradedPracticeEligible === true);
  const safeRows = inventory.filter((row) => row.safeForProductionRoute === true);
  const skippedRows = inventory.filter((row) => row.safeForProductionRoute !== true);

  const result = {
    patch: "v0.86",
    title: "Production Completion Pass",
    versionState,
    appVersion: versions.appVersion,
    exportVersion: versions.exportVersion,
    expectedStartAppVersion,
    expectedStartExportVersion,
    expectedFinalAppVersion,
    expectedFinalExportVersion,
    startingOrFinalVersionVerified: versionState !== "unexpected",
    inlineScriptCount,
    contentFileCount: loaded.files.length,
    contentFilesParsed: loaded.files,
    articleItemsTsv: articleTsv,
    requiredQaFiles: qaFiles,
    optionalRegressionFiles: optionalFiles,
    storageKeysPresent,
    metadataManifest: metadata,
    productionInventoryPath: path.relative(root, inventoryPath).replace(/\\/g, "/"),
    productionInventoryRows: inventory.length,
    productionRowsSafeForRoute: safeRows.length,
    productionRowsBlockedOrDeferred: skippedRows.length,
    productionRowsByRoute: countBy(inventory, "routeKey"),
    productionRowsBySourceFile: countBy(inventory, "sourceFile"),
    productionRowsByBlockedReason: countBy(skippedRows, "blockedReason"),
    unsafeAutoGradedProductionRows: unsafeAutoGraded.length,
    evidenceSemanticsMarkersPresent: {
      evidenceTypeSelfMarkedProduction: index.includes('record.evidenceType = "self_marked_production"'),
      productionPractisedFlag: index.includes("record.productionPractised"),
      autoGradedFalse: index.includes("record.autoGraded = false"),
      scoreImpactZero: index.includes("record.scoreImpact = 0"),
      correctNull: index.includes("record.correct = null"),
      noNormalProgress: index.includes("noNormalProgress:true"),
      productionSkipSessionOnly: index.includes("productionSkipped = Number")
    },
    routeMarkersPresent: {
      homeProductionButton: index.includes('id="homeProductionBtn"'),
      menuProductionButton: index.includes('id="menuProductionBtn"'),
      startB1ProductionRound: index.includes("function startB1ProductionRound"),
      productionQaSummary: index.includes("function b1ProductionQaSummary"),
      debugProductionSummary: index.includes("productionSummary:b1ProductionQaSummary()")
    },
    forbiddenRuntimePatterns: {
      typeModule: /<script[^>]+type=["']module["']/i.test(index),
      dynamicImport: /\bimport\s*\(/.test(index),
      runtimeFetch: /\bfetch\s*\(/.test(index),
      packageJsonAdded: fs.existsSync(path.join(root, "package.json")),
      packageLockAdded: fs.existsSync(path.join(root, "package-lock.json"))
    },
    versionedV086DocsCreated: {
      readme: fs.existsSync(path.join(root, "README-v0_86.md")),
      changelog: fs.existsSync(path.join(root, "CHANGELOG-v0_86.txt")),
      sourceBrief: fs.existsSync(path.join(root, "docs", "OZMOSIS_SOURCE_BRIEF_v0.86.md")),
      roadmap: fs.existsSync(path.join(root, "docs", "OZMOSIS_DEVELOPMENT_ROADMAP_v0.86.md"))
    },
    acceptancePassed: versionState !== "unexpected" &&
      Object.values(qaFiles).every(Boolean) &&
      Object.values(storageKeysPresent).every(Boolean) &&
      inventory.length > 0 &&
      safeRows.length > 0 &&
      unsafeAutoGraded.length === 0 &&
      Object.values({
        evidenceTypeSelfMarkedProduction: index.includes('record.evidenceType = "self_marked_production"'),
        productionPractisedFlag: index.includes("record.productionPractised"),
        autoGradedFalse: index.includes("record.autoGraded = false"),
        scoreImpactZero: index.includes("record.scoreImpact = 0"),
        correctNull: index.includes("record.correct = null"),
        noNormalProgress: index.includes("noNormalProgress:true"),
        productionSkipSessionOnly: index.includes("productionSkipped = Number"),
        homeProductionButton: index.includes('id="homeProductionBtn"'),
        menuProductionButton: index.includes('id="menuProductionBtn"'),
        startB1ProductionRound: index.includes("function startB1ProductionRound")
      }).every(Boolean)
  };
  writeJson(summaryPath, result);
  console.log(JSON.stringify({
    patch: result.patch,
    versionState: result.versionState,
    productionInventoryRows: result.productionInventoryRows,
    productionRowsSafeForRoute: result.productionRowsSafeForRoute,
    productionRowsBlockedOrDeferred: result.productionRowsBlockedOrDeferred,
    unsafeAutoGradedProductionRows: result.unsafeAutoGradedProductionRows,
    acceptancePassed: result.acceptancePassed
  }, null, 2));
  if (!result.acceptancePassed) process.exitCode = 1;
}

main();
