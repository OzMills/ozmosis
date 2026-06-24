#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const vm = require("vm");

const ROOT = path.resolve(__dirname, "..");
const INDEX_PATH = path.join(ROOT, "index.html");
const CONTENT_DIR = path.join(ROOT, "content");
const DATA_DIR = path.join(ROOT, "data");
const QA_DIR = path.join(ROOT, "docs", "qa");
const PREVIOUS_RESULT_PATH = path.join(QA_DIR, "v0.85.3.8_hud_keyboard_mobile_gate_results.json");
const MANUAL_PHONE_CHECKLIST_PATH = path.join(QA_DIR, "v0.85.3.8_manual_phone_test_checklist.md");

const TARGET_APP_VERSION = "v0.85.4 - Completion Gate Harness";
const TARGET_EXPORT_VERSION = "v0.85.4-completion-gate-harness";
const START_APP_VERSION = "v0.85.3.8 - HUD, Keyboard, and Live Mobile Verification Gate";
const START_EXPORT_VERSION = "v0.85.3.8-hud-keyboard-mobile-gate";
const STORAGE_KEY = "ozmosis_b1_sprint_progress_v1";
const EVIDENCE_STORAGE_KEY = "ozmosis_b1_progress_evidence_v1";

const OUTPUTS = {
  json: path.join(QA_DIR, "v0.85.4_completion_gate_harness_results.json"),
  promptCueCsv: path.join(QA_DIR, "v0.85.4_completion_gate_prompt_cue_issues.csv"),
  clozeCueCsv: path.join(QA_DIR, "v0.85.4_completion_gate_cloze_cue_issues.csv"),
  feedbackCsv: path.join(QA_DIR, "v0.85.4_completion_gate_feedback_issues.csv"),
  metadataCsv: path.join(QA_DIR, "v0.85.4_completion_gate_metadata_manifest_candidates.csv"),
  reviewCsv: path.join(QA_DIR, "v0.85.4_completion_gate_review_queue_status.csv")
};

function readText(filePath) {
  return fs.readFileSync(filePath, "utf8");
}

function fileExists(filePath) {
  try {
    return fs.existsSync(filePath);
  } catch (_) {
    return false;
  }
}

function ensureDir(dirPath) {
  fs.mkdirSync(dirPath, { recursive: true });
}

function normalise(value) {
  return String(value == null ? "" : value).trim();
}

function lower(value) {
  return normalise(value).toLowerCase();
}

function asArray(value) {
  return Array.isArray(value) ? value : [];
}

function unique(values) {
  return Array.from(new Set(values.filter(Boolean)));
}

function inc(map, key, by) {
  const safeKey = normalise(key) || "unknown";
  map[safeKey] = (map[safeKey] || 0) + (by || 1);
}

function csvCell(value) {
  const text = normalise(value).replace(/\r?\n/g, " ");
  if (/[",\r\n]/.test(text)) return '"' + text.replace(/"/g, '""') + '"';
  return text;
}

function writeCsv(filePath, headers, rows) {
  const lines = [headers.join(",")];
  rows.forEach((row) => {
    lines.push(headers.map((header) => csvCell(row[header])).join(","));
  });
  fs.writeFileSync(filePath, lines.join("\n") + "\n", "utf8");
}

function parseJsonIfPresent(filePath) {
  if (!fileExists(filePath)) return null;
  return JSON.parse(readText(filePath));
}

function extractVersion(html, name) {
  const re = new RegExp("var\\s+" + name + "\\s*=\\s*\"([^\"]+)\"");
  const match = html.match(re);
  return match ? match[1] : "";
}

function scriptSourcesFromIndex(html) {
  const sources = [];
  const re = /<script\s+src="([^"]+)"><\/script>/g;
  let match;
  while ((match = re.exec(html))) {
    if (match[1].startsWith("content/")) sources.push(match[1]);
  }
  return sources;
}

function inlineScriptsFromIndex(html) {
  const scripts = [];
  const re = /<script(?![^>]*\bsrc=)[^>]*>([\s\S]*?)<\/script>/gi;
  let match;
  while ((match = re.exec(html))) {
    scripts.push(match[1]);
  }
  return scripts;
}

function parseScriptsOnly(html, contentFiles) {
  const failures = [];
  inlineScriptsFromIndex(html).forEach((script, index) => {
    try {
      new vm.Script(script, { filename: "index.html:inline-" + (index + 1) });
    } catch (error) {
      failures.push({ file: "index.html", detail: error.message });
    }
  });
  contentFiles.forEach((filePath) => {
    try {
      new vm.Script(readText(filePath), { filename: path.relative(ROOT, filePath) });
    } catch (error) {
      failures.push({ file: path.relative(ROOT, filePath), detail: error.message });
    }
  });
  return failures;
}

function extractArrayLiteral(source, marker) {
  const markerIndex = source.indexOf(marker);
  if (markerIndex === -1) throw new Error("Marker not found: " + marker);
  const start = source.indexOf("[", markerIndex);
  if (start === -1) throw new Error("Array start not found for marker: " + marker);
  let depth = 0;
  let quote = "";
  let escaped = false;
  let lineComment = false;
  let blockComment = false;
  for (let i = start; i < source.length; i += 1) {
    const char = source[i];
    const next = source[i + 1] || "";
    if (lineComment) {
      if (char === "\n") lineComment = false;
      continue;
    }
    if (blockComment) {
      if (char === "*" && next === "/") {
        blockComment = false;
        i += 1;
      }
      continue;
    }
    if (quote) {
      if (escaped) {
        escaped = false;
        continue;
      }
      if (char === "\\") {
        escaped = true;
        continue;
      }
      if (char === quote) quote = "";
      continue;
    }
    if (char === "/" && next === "/") {
      lineComment = true;
      i += 1;
      continue;
    }
    if (char === "/" && next === "*") {
      blockComment = true;
      i += 1;
      continue;
    }
    if (char === '"' || char === "'" || char === "`") {
      quote = char;
      continue;
    }
    if (char === "[") depth += 1;
    if (char === "]") {
      depth -= 1;
      if (depth === 0) return source.slice(start, i + 1);
    }
  }
  throw new Error("Array end not found for marker: " + marker);
}

function evaluateLiteral(literal, filename) {
  const sandbox = { value: null };
  vm.createContext(sandbox);
  new vm.Script("value = " + literal + ";", { filename }).runInContext(sandbox);
  return sandbox.value;
}

function loadContentGlobals(html) {
  const sandbox = {
    console: {
      log() {},
      warn() {},
      error() {}
    },
    setTimeout,
    clearTimeout
  };
  sandbox.window = {};
  sandbox.window.window = sandbox.window;
  sandbox.window.self = sandbox.window;
  sandbox.self = sandbox.window;
  sandbox.globalThis = sandbox.window;
  vm.createContext(sandbox);
  const loaded = [];
  const sources = scriptSourcesFromIndex(html);
  sources.forEach((src) => {
    const filePath = path.join(ROOT, src);
    if (!fileExists(filePath)) return;
    const script = readText(filePath);
    new vm.Script(script, { filename: src }).runInContext(sandbox, { timeout: 30000 });
    loaded.push(src);
  });
  return {
    loaded,
    content: sandbox.window.OZMOSIS_CONTENT || {},
    manifests: sandbox.window.OZMOSIS_CONTENT_MANIFESTS || {}
  };
}

function contentArray(content, key) {
  return asArray(content[key]);
}

function buildRegistry(html, content) {
  const coreItems = evaluateLiteral(extractArrayLiteral(html, "const B1_ITEMS ="), "index.html:B1_ITEMS");
  return [
    { key: "core", label: "B1 Basics", source: "index.html", items: coreItems },
    { key: "connectors", label: "Connector Sprint", source: "content/b1-connectors.js", items: contentArray(content, "b1Connectors") },
    { key: "cases_articles", label: "Cases & Articles", source: "content/b1-cases-articles.js", items: contentArray(content, "b1CasesArticles") },
    { key: "prepositions", label: "Prepositions", source: "content/b1-prepositions.js", items: contentArray(content, "b1Prepositions") },
    { key: "word_order", label: "Word Order", source: "content/b1-word-order.js", items: contentArray(content, "b1WordOrder") },
    { key: "redemittel", label: "Redemittel", source: "content/b1-redemittel.js", items: contentArray(content, "b1Redemittel") },
    { key: "wortschatz", label: "Wortschatz", source: "content/b1-wortschatz.js", items: contentArray(content, "b1Wortschatz") },
    { key: "b1_m01", label: "B1-01 Getting Started", source: "content/b1-m01-variant-families.js", items: contentArray(content, "b1M01VariantFamilies").concat(contentArray(content, "b1M01SingleCanonical")) },
    { key: "b1_m02", label: "B1-02 Appointments / callbacks", source: "content/b1-m02-appointments-callbacks.js", items: contentArray(content, "b1M02AppointmentsCallbacks") },
    { key: "b1_m03", label: "B1-03 Job search / offices", source: "content/b1-m03-job-search-offices.js", items: contentArray(content, "b1M03JobSearchOffices") },
    { key: "b1_m04", label: "B1-04 Applications", source: "content/b1-m04-applications.js", items: contentArray(content, "b1M04Applications") },
    { key: "b1_m05", label: "B1-05 First day / contract basics", source: "content/b1-m05-first-day-contract-basics.js", items: contentArray(content, "b1M05FirstDayContractBasics") },
    { key: "b1_m06", label: "B1-06 Sick leave", source: "content/b1-m06-sick-leave.js", items: contentArray(content, "b1M06SickLeave") },
    { key: "b1_m07", label: "B1-07 Meetings / leave requests", source: "content/b1-m07-meetings-leave-requests.js", items: contentArray(content, "b1M07MeetingsLeaveRequests") },
    { key: "b1_m08", label: "B1-08 Orders / delivery", source: "content/b1-m08-orders-delivery.js", items: contentArray(content, "b1M08OrdersDelivery") },
    { key: "b1_m09", label: "B1-09 Complaints / customer service", source: "content/b1-m09-complaints-customer-service.js", items: contentArray(content, "b1M09ComplaintsCustomerService") },
    { key: "b1_m10", label: "B1-10 Technical problems", source: "content/b1-m10-technical-problems.js", items: contentArray(content, "b1M10TechnicalProblems") },
    { key: "b1_m11", label: "B1-11 Colleague feedback / conflict", source: "content/b1-m11-colleague-feedback-conflict.js", items: contentArray(content, "b1M11ColleagueFeedbackConflict") },
    { key: "b1_m12", label: "B1-12 Forms / admin / certificates", source: "content/b1-m12-forms-admin-certificates.js", items: contentArray(content, "b1M12FormsAdminCertificates") },
    { key: "b1_m13", label: "B1-13 Learning / exam language", source: "content/b1-m13-learning-exam-language.js", items: contentArray(content, "b1M13LearningExamLanguage") },
    { key: "b1_m14", label: "B1-14 Connectors / sentence functions", source: "content/b1-m14-connectors-sentence-functions.js", items: contentArray(content, "b1M14ConnectorsSentenceFunctions") },
    { key: "b1_m15", label: "B1-15 Time / place / movement", source: "content/b1-m15-time-place-movement.js", items: contentArray(content, "b1M15TimePlaceMovement") },
    { key: "b1_m16", label: "B1-16 Money / payment / contracts", source: "content/b1-m16-money-payment-contracts.js", items: contentArray(content, "b1M16MoneyPaymentContracts") },
    { key: "b1_m17", label: "B1-17 Home / family / daily life support", source: "content/b1-m17-home-family-daily-life-support.js", items: contentArray(content, "b1M17HomeFamilyDailyLifeSupport") },
    { key: "b1_m18", label: "B1-18 B1 to B2 bridge preview", source: "content/b1-m18-b1-b2-bridge-preview.js", items: contentArray(content, "b1M18B1B2BridgePreview"), previewOnly: true }
  ];
}

function flattenRegistry(registry) {
  const records = [];
  registry.forEach((bank) => {
    asArray(bank.items).forEach((item, index) => {
      if (!item || typeof item !== "object") return;
      records.push({
        bankKey: bank.key,
        bankLabel: bank.label,
        sourceFile: bank.source,
        index,
        item
      });
    });
  });
  return records;
}

function itemId(record) {
  const item = record.item;
  return normalise(item.id || item.itemId || item.sourceId || item.variantId || item.promptId || record.bankKey + "#" + record.index);
}

function routeKey(record) {
  const item = record.item;
  return normalise(item.routeKey || item.contentBankKey || item.bankKey || record.bankKey || "unknown");
}

function statusText(record) {
  const item = record.item;
  return lower([
    item.status,
    item.reviewStatus,
    item.rendererImportStatus,
    item.importStatus,
    item.lifecycleStatus,
    item.displayStatus
  ].filter(Boolean).join(" "));
}

function isRetiredOrBlocked(record) {
  const text = statusText(record);
  return /\b(retired|blocked|disabled|inactive|archived)\b/.test(text);
}

function isReviewOnly(record) {
  const item = record.item;
  const text = statusText(record) + " " + lower([
    item.reviewFlagReason,
    item.humanReviewReason,
    asArray(item.issueCodes).join(" "),
    item.qaStatus
  ].filter(Boolean).join(" "));
  return item.reviewFlag === true ||
    item.needsHumanReview === true ||
    item.reviewOnly === true ||
    item.normalPracticeEligible === false ||
    /\b(review_only|review-only|needs_review|human_review|quarantine|unsafe|manual_review)\b/.test(text);
}

function isNormalPracticeEligible(record) {
  const item = record.item;
  if (!item || typeof item !== "object") return false;
  if (item.noticeOnly === true || item.type === "notice") return false;
  if (item.previewOnly === true || record.previewOnly === true) return false;
  if (isRetiredOrBlocked(record)) return false;
  if (isReviewOnly(record)) return false;
  return true;
}

function fieldText(item, field) {
  const value = item[field];
  if (Array.isArray(value)) return value.join(" | ");
  if (value && typeof value === "object") return JSON.stringify(value);
  return normalise(value);
}

function itemText(record, fields) {
  return fields.map((field) => fieldText(record.item, field)).filter(Boolean).join(" | ");
}

function allSearchableText(record) {
  return itemText(record, [
    "prompt_de",
    "prompt",
    "learnerCue",
    "displayPrompt",
    "question",
    "cue",
    "support_en",
    "fullAnswer_de",
    "answer",
    "modelAnswer_de",
    "microRule",
    "feedback",
    "contrastNote",
    "targetRule",
    "hint_de",
    "hint_en",
    "reviewFlagReason",
    "humanReviewReason"
  ]);
}

function hasVisibleCue(record) {
  const item = record.item;
  const cueFields = [
    "learnerCue",
    "displayPrompt",
    "cue",
    "support_en",
    "microRule",
    "targetRule",
    "hint_de",
    "hint_en",
    "scenario_de",
    "situation_de"
  ];
  return cueFields.some((field) => normalise(item[field]).length >= 8);
}

function inferSurface(record) {
  const item = record.item;
  const text = lower([
    item.answerSurface,
    item.practiceSurface,
    item.itemType,
    item.taskType,
    item.taskDepth,
    item.answerMode,
    item.renderer,
    asArray(item.tags).join(" "),
    asArray(item.skillTags).join(" ")
  ].join(" "));
  if (text.includes("production") || item.itemType === "production_card" || item.answerMode === "mark_practised") return "production";
  if (text.includes("satzbau") || text.includes("word_order") || text.includes("sentence_build") || Array.isArray(item.wordOrderChunks)) return "satzbau";
  if (text.includes("repair") || text.includes("correction") || text.includes("transformation") || item.prefillRepairText || item.errorSentence_de) return "correction";
  if (text.includes("contrast")) return "contrast";
  if (text.includes("cloze") || /_{2,}|---/.test(fieldText(item, "prompt_de")) || item.clozeAnswer) return "cloze";
  if (asArray(item.choices).length || asArray(item.choiceOptions).length || asArray(item.options).length) return "choice";
  if (text.includes("case") || text.includes("article")) return "case_article";
  return "typed";
}

function isMeaningChoiceRisk(record) {
  if (!isNormalPracticeEligible(record)) return false;
  const surface = inferSurface(record);
  const item = record.item;
  const text = lower(allSearchableText(record));
  if (surface !== "choice") return false;
  const meaningLike = /\b(meaning|bedeutung|show something|related word|nearby contrast|vocabulary|wortschatz)\b/.test(text) ||
    routeKey(record) === "wortschatz" ||
    lower(item.taskType).includes("meaning");
  if (!meaningLike) return false;
  return !hasVisibleCue(record) || /^welche form passt zur bedeutung\??$/i.test(normalise(item.prompt_de || item.prompt || item.displayPrompt));
}

function isUnderContextualisedCloze(record) {
  if (!isNormalPracticeEligible(record)) return false;
  const surface = inferSurface(record);
  if (surface !== "cloze") return false;
  const prompt = normalise(record.item.prompt_de || record.item.displayPrompt || record.item.prompt || "");
  const answer = normalise(record.item.answer || record.item.correctAnswer || "");
  const words = prompt.split(/\s+/).filter(Boolean).length;
  const hasBlank = /_{2,}|---/.test(prompt);
  const shortPrompt = prompt.length < 55 || words < 7;
  return hasBlank && shortPrompt && !hasVisibleCue(record) && answer.length < 18;
}

function isCueExcludedReview(record) {
  if (!isReviewOnly(record)) return false;
  if (inferSurface(record) !== "cloze") return false;
  const text = lower([
    record.item.reviewFlagReason,
    record.item.humanReviewReason,
    asArray(record.item.issueCodes).join(" "),
    record.item.displayStatus,
    record.item.rendererImportStatus
  ].filter(Boolean).join(" "));
  return /\b(cue|context|prompt|under.?context|unsafe|ambiguous|missing)\b/.test(text);
}

function hasInternalLabel(text) {
  return /`[^`]+`/.test(text) ||
    /\bCAT\d{1,2}\b/.test(text) ||
    /\bB1[-_.]?\d{1,2}\b/.test(text) ||
    /\b(sourceRow|row[_ -]?\d+|variantFamily|auditKey|internal|rendererImportStatus|keep_as_is|approved_keep|canonical_id)\b/i.test(text);
}

function hasVsLabel(text) {
  return /\b[A-Za-zÄÖÜäöüß]+[\s_-]+vs\.?[\s_-]+[A-Za-zÄÖÜäöüß]+\b/.test(text) ||
    /\b[A-Za-zÄÖÜäöüß]+-vs-[A-Za-zÄÖÜäöüß]+\b/.test(text);
}

function isRenderedPromptLeak(record) {
  const text = itemText(record, ["prompt_de", "prompt", "learnerCue", "displayPrompt", "question", "cue"]);
  return !!text && hasInternalLabel(text);
}

function isRawBacktickInternal(record) {
  return hasInternalLabel(allSearchableText(record));
}

function isRawVsInternal(record) {
  return hasVsLabel(allSearchableText(record));
}

function isGenericContrastFeedback(record) {
  if (!isNormalPracticeEligible(record)) return false;
  const text = lower(itemText(record, ["microRule", "feedback", "contrastNote", "targetRule"]));
  return /check the nearby contrast|not just a related word|nearby contrast|related word|compare the pair|contrast pair/.test(text);
}

function isFeedbackMismatchRisk(record) {
  if (!isNormalPracticeEligible(record)) return false;
  const item = record.item;
  const surface = inferSurface(record);
  const feedback = itemText(record, ["microRule", "feedback", "contrastNote", "targetRule", "fullAnswer_de", "modelAnswer_de"]);
  if ((surface === "correction" || surface === "contrast") && !normalise(feedback)) return true;
  if (normalise(item.fullAnswer_de) && normalise(item.answer) && !lower(item.fullAnswer_de).includes(lower(item.answer))) return true;
  if (normalise(item.correctAnswer) && normalise(item.answer) && lower(item.correctAnswer) !== lower(item.answer)) return true;
  return false;
}

function reviewOnlyEnteringNormalPractice(record) {
  const item = record.item;
  if (!isReviewOnly(record)) return false;
  return item.normalPracticeEligible === true || item.forceIncludeInPractice === true || item.includeInDaily === true;
}

function productionAutoGradingRisk(record) {
  if (!isNormalPracticeEligible(record)) return false;
  if (inferSurface(record) !== "production") return false;
  const item = record.item;
  return !!(normalise(item.answer) || normalise(item.correctAnswer) || asArray(item.acceptedAnswers).length || asArray(item.choices).length || asArray(item.correctChoiceIds).length);
}

function articleGridMetadataComplete(record) {
  const item = record.item;
  const family = normalise(item.articleFamily || item.articleFamilies);
  const caseTarget = normalise(item.caseTarget || item.caseTargets || item.caseKey);
  const gender = normalise(item.genderNumber || item.genderNumberTargets || item.genderKey);
  return !!(family && caseTarget && gender);
}

function metadataMissingFields(record) {
  const item = record.item;
  const required = ["contentBankKey", "routeKey", "moduleKey", "sourceRowAuditKey", "reviewStatus", "rendererImportStatus"];
  return required.filter((field) => !normalise(item[field]));
}

function repeatedDefaultFields(record, bankDefaults) {
  const defaults = bankDefaults[record.bankKey] || {};
  return Object.keys(defaults).filter((field) => normalise(record.item[field]) && normalise(record.item[field]) === normalise(defaults[field]));
}

function hasSourceProvenance(record) {
  const item = record.item;
  return [
    "sourceFile",
    "sourceCsv",
    "sourceTaskCsv",
    "sourceRow",
    "sourceRowAuditKey",
    "originalId",
    "importBatch",
    "rendererImportStatus"
  ].some((field) => normalise(item[field]));
}

function rowBase(record, issueType, reason) {
  return {
    issueType,
    bankKey: record.bankKey,
    itemId: itemId(record),
    status: normalise(record.item.status || record.item.reviewStatus || record.item.rendererImportStatus),
    routeKey: routeKey(record),
    surface: inferSurface(record),
    reason
  };
}

function articleDataSummary() {
  const tsvPath = path.join(DATA_DIR, "article-items.tsv");
  if (!fileExists(tsvPath)) return { filePresent: false, rows: 0 };
  const text = readText(tsvPath);
  const lines = text.split(/\r?\n/).filter((line) => line.trim());
  return { filePresent: true, rows: Math.max(0, lines.length - 1) };
}

function buildResult() {
  ensureDir(QA_DIR);
  const html = readText(INDEX_PATH);
  const contentFilePaths = fs.readdirSync(CONTENT_DIR)
    .filter((name) => name.endsWith(".js"))
    .sort()
    .map((name) => path.join(CONTENT_DIR, name));
  const parseFailures = parseScriptsOnly(html, contentFilePaths);
  const appVersion = extractVersion(html, "OZMOSIS_APP_VERSION");
  const exportVersion = extractVersion(html, "OZMOSIS_EXPORT_VERSION");
  const startingStateVerified = (appVersion === START_APP_VERSION || appVersion === TARGET_APP_VERSION) &&
    (exportVersion === START_EXPORT_VERSION || exportVersion === TARGET_EXPORT_VERSION) &&
    html.includes(STORAGE_KEY) &&
    html.includes(EVIDENCE_STORAGE_KEY) &&
    parseFailures.length === 0;
  const runtimeVersionUpdated = appVersion === TARGET_APP_VERSION && exportVersion === TARGET_EXPORT_VERSION;
  const { loaded, content, manifests } = loadContentGlobals(html);
  const registry = buildRegistry(html, content);
  const records = flattenRegistry(registry);
  const bankDefaults = manifests.b1DisplaySchema && manifests.b1DisplaySchema.bankDefaults || {};
  const previous = parseJsonIfPresent(PREVIOUS_RESULT_PATH) || {};
  const articleData = articleDataSummary();

  const itemInventory = {
    totalItems: records.length,
    normalPracticeEligible: 0,
    reviewOnly: 0,
    retiredOrBlocked: 0,
    byRoute: {},
    byBank: {},
    bySurface: {}
  };

  const promptRows = [];
  const clozeRows = [];
  const feedbackRows = [];
  const metadataRows = [];
  const reviewRows = [];
  let renderedPromptLeaks = 0;
  let rawBacktickInternalLabels = 0;
  let rawVsInternalLabels = 0;
  let meaningChoiceHiddenCueRisks = 0;
  let underContextualisedClozeWithoutCue = 0;
  let clozesExcludedReviewOnlyCueUnsafe = 0;
  let genericContrastFeedbackActive = 0;
  let feedbackMismatchRisks = 0;
  let reviewOnlyNormal = 0;
  let productionAutoGrading = 0;
  let casesArticlesCompactGridTotal = 0;
  let casesArticlesCompactGridCovered = 0;
  let metadataCandidates = 0;
  let repeatedModuleDefaultFields = 0;
  let sourceProvenanceCount = 0;

  const knownSurfaces = new Set(["choice", "cloze", "correction", "contrast", "satzbau", "production", "typed", "case_article"]);
  const surfacesWithoutSharedFrameMetadata = [];
  const unsupportedRouteRenderDivergences = [];

  records.forEach((record) => {
    const active = isNormalPracticeEligible(record);
    const review = isReviewOnly(record);
    const retired = isRetiredOrBlocked(record);
    const surface = inferSurface(record);
    inc(itemInventory.byBank, record.bankKey, 1);
    if (active) {
      itemInventory.normalPracticeEligible += 1;
      inc(itemInventory.byRoute, routeKey(record), 1);
      inc(itemInventory.bySurface, surface, 1);
    }
    if (review) itemInventory.reviewOnly += 1;
    if (retired) itemInventory.retiredOrBlocked += 1;
    if (!knownSurfaces.has(surface)) {
      surfacesWithoutSharedFrameMetadata.push(rowBase(record, "unknown_surface", "Inferred answer surface is not in the shared frame measurement allow-list."));
    }
    if (!routeKey(record) || routeKey(record) === "unknown") {
      unsupportedRouteRenderDivergences.push(rowBase(record, "unknown_route", "Item has no clear route key for route/render inventory."));
    }
    if (isRenderedPromptLeak(record)) {
      renderedPromptLeaks += 1;
      promptRows.push(Object.assign(rowBase(record, "rendered_prompt_internal_label", "Likely learner-rendered prompt/cue contains source or internal label."), {
        field: "prompt/cue",
        value: itemText(record, ["prompt_de", "prompt", "learnerCue", "displayPrompt", "question", "cue"])
      }));
    }
    if (isRawBacktickInternal(record)) {
      rawBacktickInternalLabels += 1;
      promptRows.push(Object.assign(rowBase(record, "raw_backtick_or_internal_label", "Raw item text contains backtick or internal label pattern."), {
        field: "raw_text",
        value: allSearchableText(record).slice(0, 400)
      }));
    }
    if (isRawVsInternal(record)) {
      rawVsInternalLabels += 1;
      promptRows.push(Object.assign(rowBase(record, "raw_x_vs_y_internal_label", "Raw item text contains X-vs-Y style internal label."), {
        field: "raw_text",
        value: allSearchableText(record).slice(0, 400)
      }));
    }
    if (isMeaningChoiceRisk(record)) {
      meaningChoiceHiddenCueRisks += 1;
      promptRows.push(Object.assign(rowBase(record, "meaning_choice_hidden_cue_risk", "Meaning-choice item may not expose enough visible learner cue before the answer."), {
        field: "prompt/support",
        value: itemText(record, ["prompt_de", "learnerCue", "support_en", "microRule"])
      }));
    }
    if (isUnderContextualisedCloze(record)) {
      underContextualisedClozeWithoutCue += 1;
      clozeRows.push(Object.assign(rowBase(record, "under_contextualised_cloze_without_cue", "Short cloze prompt has no visible cue field."), {
        prompt: fieldText(record.item, "prompt_de") || fieldText(record.item, "prompt"),
        answer: fieldText(record.item, "answer")
      }));
    }
    if (isCueExcludedReview(record)) {
      clozesExcludedReviewOnlyCueUnsafe += 1;
      clozeRows.push(Object.assign(rowBase(record, "review_only_cloze_cue_unsafe_or_missing", "Review-only cloze appears excluded for cue/context/prompt safety."), {
        prompt: fieldText(record.item, "prompt_de") || fieldText(record.item, "prompt"),
        answer: fieldText(record.item, "answer")
      }));
    }
    if (isGenericContrastFeedback(record)) {
      genericContrastFeedbackActive += 1;
      feedbackRows.push(Object.assign(rowBase(record, "generic_contrast_feedback_active", "Active normal-practice feedback contains generic contrast wording."), {
        field: "feedback/rule",
        value: itemText(record, ["microRule", "feedback", "contrastNote", "targetRule"])
      }));
    }
    if (isFeedbackMismatchRisk(record)) {
      feedbackMismatchRisks += 1;
      feedbackRows.push(Object.assign(rowBase(record, "feedback_mismatch_risk", "Static check found missing or potentially mismatched answer/feedback fields."), {
        field: "answer/feedback",
        value: itemText(record, ["answer", "correctAnswer", "fullAnswer_de", "microRule", "feedback"])
      }));
    }
    if (reviewOnlyEnteringNormalPractice(record)) {
      reviewOnlyNormal += 1;
      reviewRows.push(Object.assign(rowBase(record, "review_only_entering_normal_practice", "Review-only item also carries an inclusion flag."), {
        reviewStatus: fieldText(record.item, "reviewStatus"),
        reviewFlagReason: fieldText(record.item, "reviewFlagReason"),
        humanReviewReason: fieldText(record.item, "humanReviewReason"),
        issueCodes: fieldText(record.item, "issueCodes")
      }));
    }
    if (review) {
      reviewRows.push(Object.assign(rowBase(record, "review_queue_item", "Item is excluded or marked for review."), {
        reviewStatus: fieldText(record.item, "reviewStatus"),
        reviewFlagReason: fieldText(record.item, "reviewFlagReason"),
        humanReviewReason: fieldText(record.item, "humanReviewReason"),
        issueCodes: fieldText(record.item, "issueCodes")
      }));
    }
    if (productionAutoGradingRisk(record)) {
      productionAutoGrading += 1;
      feedbackRows.push(Object.assign(rowBase(record, "production_auto_grading_risk", "Production card has answer/choice fields that could be confused with auto-grading."), {
        field: "production_answer_fields",
        value: itemText(record, ["answer", "correctAnswer", "acceptedAnswers", "choices"])
      }));
    }
    if (active && record.bankKey === "cases_articles") {
      casesArticlesCompactGridTotal += 1;
      if (articleGridMetadataComplete(record)) casesArticlesCompactGridCovered += 1;
    }
    const missing = metadataMissingFields(record);
    const repeated = repeatedDefaultFields(record, bankDefaults);
    if (missing.length || repeated.length) {
      metadataCandidates += 1;
      repeatedModuleDefaultFields += repeated.length ? 1 : 0;
      metadataRows.push(Object.assign(rowBase(record, "metadata_manifest_candidate", "Item has fields suitable for manifest/default migration or is missing manifest-ready fields."), {
        missingFields: missing.join("|"),
        repeatedFields: repeated.join("|")
      }));
    }
    if (hasSourceProvenance(record)) sourceProvenanceCount += 1;
  });

  const articleGridFull = /data-article-grid-mode[^]*full|displayMode:"full"|displayMode:\s*"full"|mode:"full"/.test(html);
  const articleGridCompact = /\.articleGridAdapter\.compact|displayMode:"compact"|displayMode:\s*"compact"/.test(html);
  const articleGridReveal = /\.articleGridAdapter\.reveal|displayMode:"reveal"|displayMode:\s*"reveal"/.test(html);
  const sharedFrameMetadataCoverage = {
    setterPresent: /function\s+setSharedPracticeFrameMetadata/.test(html),
    b1HelperPresent: /function\s+b1SharedPracticeFrameMetadata/.test(html),
    practiceFrameAttributePresent: /data-practice-frame/.test(html),
    answerSurfaceAttributePresent: /data-answer-surface/.test(html),
    feedbackSurfaceAttributePresent: /data-feedback-surface/.test(html),
    surfacesMeasured: Object.assign({}, itemInventory.bySurface),
    surfacesWithoutKnownMapping: surfacesWithoutSharedFrameMetadata.length
  };

  const reviewReasonsMissing = reviewRows.filter((row) => row.issueType === "review_queue_item" &&
    !normalise(row.reviewStatus || row.reviewFlagReason || row.humanReviewReason || row.issueCodes)).length;

  const filesChanged = [
    "index.html",
    "README.md",
    "CHANGELOG-FULL-OZMOSIS.txt",
    "AGENTS.md",
    "docs/OZMOSIS_SOURCE_BRIEF_CURRENT.md",
    "docs/OZMOSIS_DEVELOPMENT_ROADMAP_CURRENT.md",
    "docs/OZMOSIS_FEATURE_REGISTER_CURRENT.md",
    "docs/OZMOSIS_SOURCE_BRIEF_v0.85.4.md",
    "docs/OZMOSIS_DEVELOPMENT_ROADMAP_v0.85.4.md",
    "docs/qa/v0.85.4_completion_gate_harness.md",
    "docs/qa/v0.85.4_completion_gate_harness_results.json",
    "docs/qa/v0.85.4_completion_gate_prompt_cue_issues.csv",
    "docs/qa/v0.85.4_completion_gate_cloze_cue_issues.csv",
    "docs/qa/v0.85.4_completion_gate_feedback_issues.csv",
    "docs/qa/v0.85.4_completion_gate_metadata_manifest_candidates.csv",
    "docs/qa/v0.85.4_completion_gate_review_queue_status.csv",
    "scripts/ozmosis-completion-gate-harness.cjs"
  ];

  const outputFilesReady = Object.values(OUTPUTS).every(fileExists);
  const acceptancePassed = startingStateVerified && runtimeVersionUpdated && parseFailures.length === 0;
  const result = {
    patch: "v0.85.4",
    title: "Completion Gate Harness",
    startingStateVerified,
    runtimeVersionUpdated,
    filesChanged,
    runtimeChanged: false,
    contentChanged: false,
    scoringChanged: false,
    evidenceChanged: false,
    storageChanged: false,
    exportImportChanged: false,
    itemInventory,
    promptCueGate: {
      renderedPromptLeaks,
      rawBacktickInternalLabels,
      rawVsInternalLabels,
      meaningChoiceHiddenCueRisks,
      underContextualisedClozeWithoutCue
    },
    clozeCueGate: {
      clozesExcludedReviewOnlyCueUnsafe,
      clozeCueIssueRows: clozeRows.length
    },
    feedbackGate: {
      genericContrastFeedbackActive,
      feedbackMismatchRisks,
      productionAutoGradingRisks: productionAutoGrading,
      articleGridFeedbackPreserved: !!(articleGridCompact && /b1ArticleGridFeedbackHtml/.test(html))
    },
    reviewGate: {
      reviewOnlyEnteringNormalPractice: reviewOnlyNormal,
      reviewQueueRows: reviewRows.filter((row) => row.issueType === "review_queue_item").length,
      reviewQueueReasonsMissing: reviewReasonsMissing
    },
    metadataGate: {
      manifestFilesPresent: Object.keys(manifests),
      manifestMigrationCandidates: metadataCandidates,
      repeatedModuleDefaultFields,
      sourceProvenanceFieldsPreserved: sourceProvenanceCount > 0,
      sourceProvenanceRows: sourceProvenanceCount,
      casesArticlesCompactGridMetadataCoverage: {
        covered: casesArticlesCompactGridCovered,
        total: casesArticlesCompactGridTotal,
        missing: Math.max(0, casesArticlesCompactGridTotal - casesArticlesCompactGridCovered)
      },
      articleDataRows: articleData.rows,
      articleDataFilePresent: articleData.filePresent
    },
    uiGate: {
      sharedFrameMetadataCoverage,
      articleGridFull,
      articleGridCompact,
      articleGridReveal,
      caseTrainerGridPreserved: /paradigms|miniTable|case trainer|renderMiniTable/i.test(html),
      hudKeyboardGateAccepted: previous.acceptancePassed === true && previous.finalDecision === "HUD_KEYBOARD_MOBILE_GATE_ACCEPTED",
      liveGithubPagesCurrent: !!(previous.liveGithubPages && previous.liveGithubPages.matchesCurrent),
      liveGithubPagesStatus: previous.liveGithubPages || null,
      manualPhoneChecklistExists: fileExists(MANUAL_PHONE_CHECKLIST_PATH),
      manualPhoneTestRun: false,
      unsupportedRouteRenderDivergences: unsupportedRouteRenderDivergences.length
    },
    exportImportGate: {
      protectedStorageKeysPresent: html.includes(STORAGE_KEY) && html.includes(EVIDENCE_STORAGE_KEY),
      exportFunctionPresent: /ozmosisBuildSavePayload|function\s+buildOzmosisSavePayload/.test(html),
      importFunctionPresent: /ozmosisValidateSavePayload|ozmosisApplyValidatedSave|function\s+validateOzmosisSavePayload/.test(html),
      exportSaveLabelPresent: html.includes("Export Save"),
      importSaveLabelPresent: html.includes("Import Save"),
      recentOlderExportAcceptedIfTested: previous.exportImport ? !!previous.exportImport.oldValidationOk : null
    },
    testsRun: {
      indexHtmlParsed: parseFailures.filter((failure) => failure.file === "index.html").length === 0,
      contentScriptsParsed: contentFilePaths.length - parseFailures.filter((failure) => failure.file !== "index.html").length,
      contentScriptsLoaded: loaded.length,
      contentRegistryFlattened: true,
      embeddedCoreItemsExtracted: registry.find((bank) => bank.key === "core").items.length,
      articleItemsTsvInspected: articleData.filePresent,
      previousHudKeyboardGateJsonRead: !!previous.patch,
      csvOutputsWritten: true,
      parseFailures
    },
    testsNotRun: [
      "Browser automation was not run by v0.85.4; this harness is a static/content measurement gate and carries forward the accepted v0.85.3.8 Edge/CDP status.",
      "Manual physical-phone testing was not run in Codex; v0.85.3.8 manual checklist status is carried forward.",
      "Live GitHub Pages was not retested by v0.85.4; v0.85.3.8 live status is carried forward."
    ],
    acceptancePassed,
    finalDecision: acceptancePassed ? "COMPLETION_GATE_HARNESS_ACCEPTED" : (startingStateVerified ? "COMPLETION_GATE_HARNESS_PARTIAL_NEEDS_REPAIR" : "BLOCKED_BASELINE_MISMATCH"),
    nextPatch: acceptancePassed ? "v0.85.5 - Runtime Display Contract Lock" : "v0.85.4a - Completion Gate Harness Repair",
    appVersion,
    exportVersion,
    generatedAt: new Date().toISOString(),
    outputFilesReady
  };

  writeCsv(OUTPUTS.promptCueCsv, ["issueType", "bankKey", "itemId", "status", "routeKey", "surface", "field", "value", "reason"], promptRows);
  writeCsv(OUTPUTS.clozeCueCsv, ["issueType", "bankKey", "itemId", "status", "routeKey", "surface", "prompt", "answer", "reason"], clozeRows);
  writeCsv(OUTPUTS.feedbackCsv, ["issueType", "bankKey", "itemId", "status", "routeKey", "surface", "field", "value", "reason"], feedbackRows);
  writeCsv(OUTPUTS.metadataCsv, ["issueType", "bankKey", "itemId", "status", "routeKey", "surface", "missingFields", "repeatedFields", "reason"], metadataRows);
  writeCsv(OUTPUTS.reviewCsv, ["issueType", "bankKey", "itemId", "status", "routeKey", "surface", "reviewStatus", "reviewFlagReason", "humanReviewReason", "issueCodes", "reason"], reviewRows);
  fs.writeFileSync(OUTPUTS.json, JSON.stringify(result, null, 2) + "\n", "utf8");
  return result;
}

if (require.main === module) {
  try {
    const result = buildResult();
    console.log(JSON.stringify({
      finalDecision: result.finalDecision,
      acceptancePassed: result.acceptancePassed,
      appVersion: result.appVersion,
      exportVersion: result.exportVersion,
      totalItems: result.itemInventory.totalItems,
      normalPracticeEligible: result.itemInventory.normalPracticeEligible,
      promptCueRows: result.promptCueGate.renderedPromptLeaks + result.promptCueGate.rawBacktickInternalLabels + result.promptCueGate.rawVsInternalLabels,
      clozeRows: result.clozeCueGate.clozeCueIssueRows,
      feedbackRows: result.feedbackGate.genericContrastFeedbackActive + result.feedbackGate.feedbackMismatchRisks + result.feedbackGate.productionAutoGradingRisks,
      metadataCandidates: result.metadataGate.manifestMigrationCandidates,
      reviewRows: result.reviewGate.reviewQueueRows,
      output: path.relative(ROOT, OUTPUTS.json)
    }, null, 2));
    process.exit(result.startingStateVerified ? 0 : 2);
  } catch (error) {
    console.error(error && error.stack || error);
    process.exit(1);
  }
}
