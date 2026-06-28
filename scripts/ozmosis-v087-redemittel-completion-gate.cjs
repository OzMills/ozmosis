const fs = require("fs");
const path = require("path");
const vm = require("vm");

const root = path.resolve(__dirname, "..");
const indexPath = path.join(root, "index.html");
const contentDir = path.join(root, "content");
const dataDir = path.join(root, "data");
const qaDir = path.join(root, "docs", "qa");

const expectedStartAppVersion = "v0.86";
const expectedStartExportVersion = "v0.86-production-completion";
const expectedFinalAppVersion = "v0.87";
const expectedFinalExportVersion = "v0.87-redemittel-completion";

const requiredV086Qa = [
  "v0.86_production_completion_pass.md",
  "v0.86_production_inventory.csv",
  "v0.86_production_inventory_summary.json",
  "v0.86_production_browser_gate_results.json"
];

const protectedStorageKeys = [
  "ozmosis_b1_sprint_progress_v1",
  "ozmosis_b1_progress_evidence_v1",
  "ozmosis_b1_path_unlock_overrides_v1",
  "ozmosis_b1_review_edit_queue_v1",
  "ozmosis_b1_progress_summary_v1"
];

const routeFilters = [
  { filterKey:"mixed", routeLabel:"Mixed Redemittel", kind:"auto_graded", minSafeRows:10 },
  { filterKey:"formal_email", routeLabel:"Formal Email", kind:"auto_graded", minSafeRows:6 },
  { filterKey:"appointment", routeLabel:"Appointment", kind:"auto_graded", minSafeRows:6 },
  { filterKey:"request", routeLabel:"Request", kind:"auto_graded", minSafeRows:6 },
  { filterKey:"complaint", routeLabel:"Complaint", kind:"auto_graded", minSafeRows:6 },
  { filterKey:"application", routeLabel:"Application", kind:"auto_graded", minSafeRows:6 },
  { filterKey:"illness_absence", routeLabel:"Illness / Absence", kind:"auto_graded", minSafeRows:5 },
  { filterKey:"polite_requests", routeLabel:"Polite Requests", kind:"auto_graded", minSafeRows:5 },
  { filterKey:"production", routeLabel:"Self-marked Production", kind:"production", minSafeRows:1 }
];

const functionLabels = {
  formal_email:"email",
  appointment:"appointment",
  request:"request",
  complaint:"complaint",
  application:"application",
  illness_absence:"illness/absence",
  polite_requests:"polite request",
  production:"production"
};

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
  scripts.forEach((script, index) => {
    try {
      new Function(script);
    } catch (error) {
      throw new Error(`index.html inline script ${index + 1} failed parse: ${error.message}`);
    }
  });
  return scripts.length;
}

function parseTsv(file) {
  const text = read(file);
  const lines = text.trim() ? text.trim().split(/\r?\n/) : [];
  return {
    rows: Math.max(0, lines.length - 1),
    columns: lines.length ? lines[0].split("\t").length : 0
  };
}

function loadContent() {
  const context = { window:{ OZMOSIS_CONTENT:{} }, console };
  context.global = context;
  vm.createContext(context);
  const keySource = {};
  const files = fs.readdirSync(contentDir).filter((name) => name.endsWith(".js")).sort();
  files.forEach((name) => {
    const file = path.join(contentDir, name);
    const source = read(file);
    try {
      new Function(source);
      const before = new Set(Object.keys(context.window.OZMOSIS_CONTENT || {}));
      vm.runInContext(source, context, { filename:name });
      Object.keys(context.window.OZMOSIS_CONTENT || {}).forEach((key) => {
        if (!before.has(key) || !keySource[key]) keySource[key] = `content/${name}`;
      });
    } catch (error) {
      throw new Error(`${name} failed parse/execute: ${error.message}`);
    }
  });
  return {
    files,
    content: context.window.OZMOSIS_CONTENT || {},
    metadataManifest: context.window.OZMOSIS_B1_METADATA_MANIFEST_V1 || null,
    keySource
  };
}

function text(value) {
  if (Array.isArray(value)) return value.map(text).join(" ");
  if (value && typeof value === "object") return Object.values(value).map(text).join(" ");
  return value == null ? "" : String(value);
}

function cloneWithParent(variant, parent) {
  const row = Object.assign({}, parent || {}, variant || {});
  row.parentItemId = parent && (parent.id || parent.variantFamilyId) || "";
  row.variantFamilyId = row.variantFamilyId || parent && (parent.variantFamilyId || parent.id) || "";
  row.moduleKey = row.moduleKey || parent && parent.moduleKey || "";
  row.categoryId = row.categoryId || parent && parent.categoryId || "";
  row.sourceRowId = row.sourceRowId || row.sourceRowAuditKey || row.id || "";
  return row;
}

function flattenedContentRows(content, keySource) {
  const rows = [];
  Object.keys(content || {}).forEach((key) => {
    const value = content[key];
    if (!Array.isArray(value)) return;
    value.forEach((item) => {
      if (!item || typeof item !== "object") return;
      if (item.itemType === "variant_family" && Array.isArray(item.variants)) {
        item.variants.forEach((variant) => {
          rows.push({ contentKey:key, sourceFile:keySource[key] || "", item:cloneWithParent(variant, item) });
        });
      } else {
        rows.push({ contentKey:key, sourceFile:keySource[key] || "", item });
      }
    });
  });
  return rows;
}

function hasToken(item, token) {
  const wanted = String(token || "").toLowerCase();
  return Array.isArray(item && item.tags) && item.tags.some((tag) => String(tag || "").toLowerCase() === wanted);
}

function isExplicitProduction(item) {
  return !!(item && (
    item.itemType === "production_card" ||
    item.taskType === "production_card" ||
    item.answerMode === "mark_practised" ||
    item.responseSurface === "production" ||
    hasToken(item, "production")
  ));
}

function isPracticeSelectable(item) {
  if (!item || !item.id) return false;
  if (item.status && !/^active$/i.test(String(item.status))) return false;
  if (item.previewOnly) return false;
  if (item.activeB1Evidence === false) return false;
  if (item.reviewOnly === true) return false;
  if (item.quarantined === true) return false;
  if (item.needsHumanReview === true) return false;
  if (item.normalPracticeEligible === false) return false;
  return true;
}

function isAutoGradedEligible(item) {
  return isPracticeSelectable(item) && !isExplicitProduction(item) && item.normalAutoGradedPracticeEligible !== false;
}

function redemittelSignal(row) {
  const item = row.item || {};
  const source = row.sourceFile || "";
  const directRoutingBlob = [
    row.contentKey,
    source,
    item.contentBankKey,
    item.bankKey,
    item.routeKey,
    item.moduleKey,
    item.grammarDomain,
    item.itemType,
    item.taskType
  ].join(" ").toLowerCase();
  return row.contentKey === "b1Redemittel" || /b1-redemittel\.js/i.test(source) || /\bredemittel\b/.test(directRoutingBlob);
}

function communicativeFunction(item) {
  if (item.communicativeFunction) return String(item.communicativeFunction);
  const section = String(item.section || item.category || item.courseDomain || "");
  if (functionLabels[section]) return functionLabels[section];
  const tags = (item.tags || []).map((tag) => String(tag || "").toLowerCase());
  const options = ["appointment", "request", "complaint", "application", "illness", "absence", "email", "clarification", "agreement", "disagreement", "follow-up"];
  return options.find((option) => tags.indexOf(option) !== -1) || "";
}

function registerLabel(item) {
  if (item.register) return String(item.register);
  const section = String(item.section || "");
  const tags = (item.tags || []).map((tag) => String(tag || "").toLowerCase());
  if (section === "formal_email") return "formal email";
  if (section === "polite_requests") return "polite/formal";
  if (tags.indexOf("formal") !== -1 || tags.indexOf("email") !== -1) return "formal";
  if (tags.indexOf("polite") !== -1 || tags.indexOf("request") !== -1) return "polite";
  if (tags.indexOf("workplace") !== -1) return "workplace";
  return "neutral";
}

function routePool(items, filterKey) {
  return items.filter((item) => {
    if (filterKey === "production") return isPracticeSelectable(item) && isExplicitProduction(item);
    if (!isAutoGradedEligible(item)) return false;
    return filterKey === "mixed" || item.section === filterKey;
  });
}

function blockedReason(item, inDedicatedBank) {
  const reasons = [];
  if (!inDedicatedBank) reasons.push("not_dedicated_redemittel_route_bank");
  if (!item || !item.id) reasons.push("missing_id");
  if (item && item.status && !/^active$/i.test(String(item.status))) reasons.push(`status_${item.status}`);
  if (item && item.previewOnly) reasons.push("preview_only");
  if (item && item.activeB1Evidence === false) reasons.push("inactive_evidence");
  if (item && item.reviewOnly === true) reasons.push("review_only");
  if (item && item.quarantined === true) reasons.push("quarantined");
  if (item && item.needsHumanReview === true) reasons.push("human_review");
  if (item && item.normalPracticeEligible === false) reasons.push("normal_practice_excluded");
  if (item && item.normalAutoGradedPracticeEligible === false && !isExplicitProduction(item)) reasons.push("normal_auto_graded_excluded");
  if (!communicativeFunction(item)) reasons.push("missing_function_cue");
  if (!item || !String(item.prompt_de || item.learnerCue || "").trim()) reasons.push("missing_prompt");
  if (!isExplicitProduction(item) && !String(item.answer || "").trim()) reasons.push("missing_answer");
  if (!isExplicitProduction(item) && !String(item.microRule || item.feedback || "").trim()) reasons.push("missing_feedback");
  return reasons.join("|");
}

function recommendedAction(item, reason) {
  if (!reason) return "NO_ACTION";
  if (/production/.test(reason) && isExplicitProduction(item)) return "PRODUCTION_ONLY_WAIT";
  if (/missing_function_cue/.test(reason)) return "METADATA_FIX_SAFE";
  if (/missing_prompt/.test(reason)) return "PROMPT_FIX_SAFE";
  if (/missing_feedback/.test(reason)) return "FEEDBACK_FIX_SAFE";
  if (/human_review|quarantined|review_only|inactive_evidence/.test(reason)) return "HUMAN_REVIEW";
  return "DEFER";
}

function buildInventoryRows(allRows, manifest) {
  return allRows.filter(redemittelSignal).map((row) => {
    const item = row.item;
    const dedicated = row.contentKey === "b1Redemittel";
    const production = isExplicitProduction(item);
    const functionCue = communicativeFunction(item);
    const reason = blockedReason(item, dedicated);
    const manifestEntry = manifest && manifest.entriesById && manifest.entriesById[item.id] || {};
    return {
      itemId:item.id || "",
      sourceFile:row.sourceFile,
      sourceRowId:item.sourceRowId || item.sourceRowAuditKey || item.id || "",
      moduleKey:item.moduleKey || manifestEntry.moduleKey || (dedicated ? "redemittel" : row.contentKey),
      categoryId:item.categoryId || item.category || item.section || manifestEntry.categoryId || "",
      routeKey:item.routeKey || manifestEntry.routeKey || (dedicated ? "redemittel" : ""),
      taskType:item.taskType || item.itemType || "",
      answerMode:item.answerMode || (production ? "self_marked" : (item.choices ? "selected_or_typed" : "typed")),
      responseSurface:item.responseSurface || (production ? "production" : (item.choices ? "choice" : "cloze")),
      communicativeFunction:functionCue,
      register:registerLabel(item),
      targetFamily:item.targetFamily || item.variantFamilyId || "",
      reviewGroup:item.reviewGroup || "",
      normalPracticeEligible:item.normalPracticeEligible === false ? "false" : "true",
      normalAutoGradedPracticeEligible:item.normalAutoGradedPracticeEligible === false ? "false" : (!production ? "true" : "false"),
      activeB1Evidence:item.activeB1Evidence === false ? "false" : "true",
      reviewOnly:item.reviewOnly === true ? "true" : "false",
      v02ApplyGateStatus:item.v02ApplyGateStatus || "",
      productionFlag:production ? "true" : "false",
      hasPrompt:String(item.prompt_de || item.learnerCue || "").trim() ? "true" : "false",
      hasStimulus:String(item.prompt_de || item.stimulus_de || "").trim() ? "true" : "false",
      hasChoices:Array.isArray(item.choices) && item.choices.length ? "true" : "false",
      hasAnswer:String(item.answer || item.fullAnswer_de || "").trim() ? "true" : "false",
      hasFeedback:String(item.microRule || item.feedback || item.explanation || "").trim() ? "true" : "false",
      hasFunctionCue:functionCue ? "true" : "false",
      safeForAutoGradedRedemittel:dedicated && isAutoGradedEligible(item) ? "true" : "false",
      safeForProductionRoute:dedicated && isPracticeSelectable(item) && production ? "true" : "false",
      blockedReason:reason,
      recommendedAction:recommendedAction(item, reason)
    };
  });
}

function summariseInventory(inventory, redItems, routeRows, manifest) {
  const by = (field) => inventory.reduce((acc, row) => {
    const key = row[field] || "";
    acc[key] = (acc[key] || 0) + 1;
    return acc;
  }, {});
  return {
    totalRedemittelSignalRows: inventory.length,
    dedicatedRedemittelRows: redItems.length,
    autoGradedDedicatedRows: redItems.filter(isAutoGradedEligible).length,
    productionDedicatedRows: redItems.filter((item) => isPracticeSelectable(item) && isExplicitProduction(item)).length,
    routePools: routeRows.reduce((acc, row) => {
      acc[row.filterKey] = {
        safeRowCount: row.safeRowCount,
        blockedRowCount: row.blockedRowCount,
        productionLeakCount: row.productionLeakCount,
        autoGradedLeakCount: row.autoGradedLeakCount,
        verdict: row.verdict
      };
      return acc;
    }, {}),
    byTaskType: by("taskType"),
    byFunction: by("communicativeFunction"),
    byRegister: by("register"),
    rowsNeedingAction: inventory.filter((row) => row.recommendedAction !== "NO_ACTION" && row.safeForProductionRoute !== "true").length,
    manifest: {
      present: !!manifest,
      entryCount: manifest && manifest.entryCount || 0,
      duplicateItemIds: manifest && Array.isArray(manifest.duplicateItemIds) ? manifest.duplicateItemIds.length : null
    }
  };
}

function buildRouteRows(redItems) {
  return routeFilters.map((route) => {
    const pool = routePool(redItems, route.filterKey);
    const allForRoute = route.filterKey === "mixed" ? redItems : redItems.filter((item) => route.filterKey === "production" ? isExplicitProduction(item) : item.section === route.filterKey);
    const productionLeak = route.kind === "auto_graded" ? pool.filter(isExplicitProduction) : [];
    const autoLeak = route.kind === "production" ? pool.filter((item) => !isExplicitProduction(item)) : [];
    const blocked = allForRoute.filter((item) => pool.indexOf(item) === -1);
    const functions = Array.from(new Set(pool.map(communicativeFunction).filter(Boolean))).sort();
    const registers = Array.from(new Set(pool.map(registerLabel).filter(Boolean))).sort();
    const verdict = productionLeak.length || autoLeak.length ? "FAIL" : (pool.length >= route.minSafeRows ? "PASS" : "LIMITED");
    return {
      routeLabel:route.routeLabel,
      filterKey:route.filterKey,
      routeKind:route.kind,
      safeRowCount:pool.length,
      minSafeRows:route.minSafeRows,
      blockedRowCount:blocked.length,
      productionLeakCount:productionLeak.length,
      autoGradedLeakCount:autoLeak.length,
      functionCoverage:functions.join("|"),
      registerCoverage:registers.join("|"),
      sampleItemIds:pool.slice(0, 8).map((item) => item.id).join("|"),
      blockedItemIds:blocked.slice(0, 8).map((item) => item.id).join("|"),
      verdict,
      notes: verdict === "LIMITED" ? "Route starts, but coverage remains limited." : ""
    };
  });
}

function buildDecisionRows(inventory, routeRows) {
  const decisions = inventory.map((row) => ({
    itemId:row.itemId,
    sourceFile:row.sourceFile,
    issueClass:row.blockedReason || "none",
    classification:row.recommendedAction,
    reason:row.blockedReason || "No Redemittel completion action needed.",
    changedInV087:"false"
  }));
  routeRows.forEach((row) => {
    if (row.verdict === "LIMITED") {
      decisions.push({
        itemId:`route:${row.filterKey}`,
        sourceFile:"index.html",
        issueClass:"route_limited_coverage",
        classification:"DEFER",
        reason:`${row.routeLabel} has ${row.safeRowCount} safe rows; route remains usable but content expansion is future work.`,
        changedInV087:"false"
      });
    }
  });
  return decisions;
}

function assert(condition, message, failures) {
  if (!condition) failures.push(message);
}

function main() {
  fs.mkdirSync(qaDir, { recursive:true });
  const index = read(indexPath);
  const versions = parseVersions(index);
  const failures = [];
  const versionState = versions.appVersion === expectedStartAppVersion && versions.exportVersion === expectedStartExportVersion ? "starting" :
    versions.appVersion === expectedFinalAppVersion && versions.exportVersion === expectedFinalExportVersion ? "final" : "unexpected";

  assert(versionState !== "unexpected", `Unexpected app/export version: ${versions.appVersion} / ${versions.exportVersion}`, failures);
  assert(fs.existsSync(path.join(root, "README.md")), "README.md missing", failures);
  assert(fs.existsSync(path.join(root, "CHANGELOG-FULL-OZMOSIS.txt")), "CHANGELOG-FULL-OZMOSIS.txt missing", failures);
  assert(!fs.existsSync(path.join(root, "README-v0_87.md")), "Versioned v0.87 README must not be created", failures);
  assert(!fs.existsSync(path.join(root, "CHANGELOG-v0_87.txt")), "Versioned v0.87 changelog must not be created", failures);
  assert(!fs.existsSync(path.join(root, "docs", "OZMOSIS_SOURCE_BRIEF_v0.87.md")), "Versioned v0.87 source brief must not be created", failures);
  assert(!fs.existsSync(path.join(root, "docs", "OZMOSIS_DEVELOPMENT_ROADMAP_v0.87.md")), "Versioned v0.87 roadmap must not be created", failures);
  requiredV086Qa.forEach((name) => assert(fs.existsSync(path.join(qaDir, name)), `Required v0.86 QA file missing: ${name}`, failures));
  protectedStorageKeys.forEach((key) => assert(index.indexOf(key) !== -1, `Protected storage key missing: ${key}`, failures));
  assert(index.indexOf("type=\"module\"") === -1 && index.indexOf("type='module'") === -1, "type=module detected", failures);
  assert(!/\bimport\s*\(/.test(index), "dynamic import detected in index.html", failures);
  const inlineScriptCount = parseInlineScripts(index);
  const articleTsv = parseTsv(path.join(dataDir, "article-items.tsv"));
  const loaded = loadContent();
  const allRows = flattenedContentRows(loaded.content, loaded.keySource);
  const redItems = loaded.content.b1Redemittel || [];
  const routeRows = buildRouteRows(redItems);
  const inventoryRows = buildInventoryRows(allRows, loaded.metadataManifest);
  const decisionRows = buildDecisionRows(inventoryRows, routeRows);
  const summary = summariseInventory(inventoryRows, redItems, routeRows, loaded.metadataManifest);

  const redIds = redItems.map((item) => item.id).filter(Boolean);
  const uniqueRedIds = new Set(redIds);
  const duplicateRedIds = redIds.filter((id, index) => redIds.indexOf(id) !== index);
  assert(uniqueRedIds.size === redIds.length, `Duplicate Redemittel item IDs: ${Array.from(new Set(duplicateRedIds)).join(", ")}`, failures);
  assert(redItems.length >= 1, "No dedicated Redemittel items loaded", failures);
  routeRows.forEach((row) => {
    assert(row.verdict !== "FAIL", `Route pool failed: ${row.routeLabel}`, failures);
    assert(row.safeRowCount > 0, `Route has no safe rows: ${row.routeLabel}`, failures);
  });
  assert(summary.dedicatedRedemittelRows === 90, `Expected 90 dedicated Redemittel rows, found ${summary.dedicatedRedemittelRows}`, failures);
  assert(summary.autoGradedDedicatedRows === 83, `Expected 83 auto-graded Redemittel rows, found ${summary.autoGradedDedicatedRows}`, failures);
  assert(summary.productionDedicatedRows === 7, `Expected 7 production Redemittel rows, found ${summary.productionDedicatedRows}`, failures);
  assert(summary.manifest.present, "Metadata manifest missing", failures);
  assert(summary.manifest.duplicateItemIds === 0, "Metadata manifest duplicate IDs present", failures);

  const inventoryHeaders = [
    "itemId", "sourceFile", "sourceRowId", "moduleKey", "categoryId", "routeKey", "taskType", "answerMode",
    "responseSurface", "communicativeFunction", "register", "targetFamily", "reviewGroup",
    "normalPracticeEligible", "normalAutoGradedPracticeEligible", "activeB1Evidence", "reviewOnly",
    "v02ApplyGateStatus", "productionFlag", "hasPrompt", "hasStimulus", "hasChoices", "hasAnswer",
    "hasFeedback", "hasFunctionCue", "safeForAutoGradedRedemittel", "safeForProductionRoute",
    "blockedReason", "recommendedAction"
  ];
  const routeHeaders = [
    "routeLabel", "filterKey", "routeKind", "safeRowCount", "minSafeRows", "blockedRowCount",
    "productionLeakCount", "autoGradedLeakCount", "functionCoverage", "registerCoverage",
    "sampleItemIds", "blockedItemIds", "verdict", "notes"
  ];
  const decisionHeaders = ["itemId", "sourceFile", "issueClass", "classification", "reason", "changedInV087"];

  writeCsv(path.join(qaDir, "v0.87_redemittel_inventory.csv"), inventoryRows, inventoryHeaders);
  writeCsv(path.join(qaDir, "v0.87_redemittel_route_pool_audit.csv"), routeRows, routeHeaders);
  writeCsv(path.join(qaDir, "v0.87_redemittel_completion_decisions.csv"), decisionRows, decisionHeaders);
  writeJson(path.join(qaDir, "v0.87_redemittel_inventory_summary.json"), summary);

  const result = {
    patch:"v0.87",
    title:"Redemittel Completion Pass",
    appVersion:versions.appVersion,
    exportVersion:versions.exportVersion,
    versionState,
    inlineScriptCount,
    contentFilesParsed:loaded.files.length,
    articleTsv,
    requiredV086QaPresent:requiredV086Qa.every((name) => fs.existsSync(path.join(qaDir, name))),
    protectedStorageKeysPresent:protectedStorageKeys.every((key) => index.indexOf(key) !== -1),
    routePoolFailures:routeRows.filter((row) => row.verdict === "FAIL"),
    routePoolLimited:routeRows.filter((row) => row.verdict === "LIMITED"),
    inventory:summary,
    checks:{
      noVersionedV087Docs:true,
      noTypeModule:true,
      noDynamicImport:true,
      redemittelProductionIsolated:routeRows.every((row) => row.routeKind !== "auto_graded" || Number(row.productionLeakCount) === 0),
      redemittelProductionOnlySelfMarked:routeRows.find((row) => row.filterKey === "production").autoGradedLeakCount === 0,
      itemIdsUnique:uniqueRedIds.size === redIds.length,
      manifestPresent:summary.manifest.present,
      manifestDuplicateIds:summary.manifest.duplicateItemIds
    },
    outputs:[
      "docs/qa/v0.87_redemittel_inventory.csv",
      "docs/qa/v0.87_redemittel_inventory_summary.json",
      "docs/qa/v0.87_redemittel_route_pool_audit.csv",
      "docs/qa/v0.87_redemittel_completion_decisions.csv",
      "docs/qa/v0.87_redemittel_gate_results.json"
    ],
    failures,
    acceptancePassed:failures.length === 0
  };
  writeJson(path.join(qaDir, "v0.87_redemittel_gate_results.json"), result);
  if (failures.length) {
    console.error(JSON.stringify(result, null, 2));
    process.exit(1);
  }
  console.log(JSON.stringify(result, null, 2));
}

main();
