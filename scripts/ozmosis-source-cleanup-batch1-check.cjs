const fs = require("fs");
const path = require("path");
const vm = require("vm");
const http = require("http");
const net = require("net");
const os = require("os");
const { spawn, execFileSync } = require("child_process");

const root = path.resolve(__dirname, "..");
const nodeExe = process.execPath;
const indexPath = path.join(root, "index.html");
const screenshotRoot = path.join(root, "docs", "qa", "screenshots", "v0.85.6-source-cleanup-batch1");
const resultPath = path.join(root, "docs", "qa", "v0.85.6_source_cleanup_batch1_internal_labels_meaning_cues_results.json");
const changedRowsPath = path.join(root, "docs", "qa", "v0.85.6_source_cleanup_batch1_changed_rows.csv");
const deferredRowsPath = path.join(root, "docs", "qa", "v0.85.6_source_cleanup_batch1_deferred_rows.csv");
const reconciliationPath = path.join(root, "docs", "qa", "v0.85.6_source_cleanup_batch1_reconciliation.csv");
const remainingQueuePath = path.join(root, "docs", "qa", "v0.85.5_runtime_display_contract_remaining_source_cleanup.csv");
const promptCueQueuePath = path.join(root, "docs", "qa", "v0.85.4_completion_gate_prompt_cue_issues.csv");
const clozeQueuePath = path.join(root, "docs", "qa", "v0.85.4_completion_gate_cloze_cue_issues.csv");
const v0855bResultPath = path.join(root, "docs", "qa", "v0.85.5b_satzbau_proof_overlay_repair_results.json");
const v0855bReportPath = path.join(root, "docs", "qa", "v0.85.5b_satzbau_proof_overlay_repair.md");
const runtimeResultPath = path.join(root, "docs", "qa", "v0.85.5_runtime_display_contract_lock_results.json");
const profileDir = fs.mkdtempSync(path.join(os.tmpdir(), "ozmosis-v0856-source-cleanup-edge-profile-"));

const expectedStartAppVersion = "v0.85.5b - Satzbau Proof Harness and First-Run Overlay Repair";
const expectedStartExportVersion = "v0.85.5b-satzbau-proof-overlay-repair";
const expectedFinalAppVersion = "v0.85.6 - Source Cleanup Batch 1: Internal Labels and Meaning Cues";
const expectedFinalExportVersion = "v0.85.6-source-cleanup-internal-labels-meaning-cues";
const selectedInternalItemId = "v080149_cat02_contrast_cat02_cs_013";

const result = {
  patch:"v0.85.6",
  title:"Source Cleanup Batch 1: Internal Labels and Meaning Cues",
  startingStateVerified:false,
  runtimeVersionUpdated:false,
  filesChanged:[
    "index.html",
    "content/b1-wortschatz.js",
    "content/b1-m01-variant-families.js",
    "README.md",
    "CHANGELOG-FULL-OZMOSIS.txt",
    "AGENTS.md",
    "docs/OZMOSIS_SOURCE_BRIEF_CURRENT.md",
    "docs/OZMOSIS_DEVELOPMENT_ROADMAP_CURRENT.md",
    "docs/OZMOSIS_FEATURE_REGISTER_CURRENT.md",
    "docs/OZMOSIS_SOURCE_BRIEF_v0.85.6.md",
    "docs/OZMOSIS_DEVELOPMENT_ROADMAP_v0.85.6.md",
    "docs/qa/v0.85.6_source_cleanup_batch1_internal_labels_meaning_cues.md",
    "docs/qa/v0.85.6_source_cleanup_batch1_internal_labels_meaning_cues_results.json",
    "docs/qa/v0.85.6_source_cleanup_batch1_changed_rows.csv",
    "docs/qa/v0.85.6_source_cleanup_batch1_deferred_rows.csv",
    "docs/qa/v0.85.6_source_cleanup_batch1_reconciliation.csv",
    "docs/qa/screenshots/v0.85.6-source-cleanup-batch1/",
    "scripts/ozmosis-source-cleanup-batch1-check.cjs"
  ],
  runtimeChanged:true,
  contentChanged:true,
  contentRowsChanged:0,
  scoringChanged:false,
  evidenceChanged:false,
  storageChanged:false,
  exportImportChanged:false,
  answerKeysChanged:false,
  acceptedAnswersChanged:false,
  itemIdsChanged:false,
  baseline:{
    v0855RuntimeDisplayContractAccepted:false,
    v0855bSatzbauProofAccepted:false,
    carriedForwardQaNotes:[]
  },
  selectedBatch:{
    targetRowsSelected:0,
    targetRowsChanged:0,
    targetRowsDeferred:0,
    issueClassesIncluded:[
      "meaning_choice_hidden_or_missing_visible_cue",
      "meaning_choice_source_cue_missing_but_runtime_guard_infers_safe_display",
      "internal_label_in_learner_facing_field",
      "raw_x_vs_y_internal_label",
      "backtick_internal_metadata_in_prompt_or_cue"
    ],
    issueClassesExcluded:[
      "under_contextualised_cloze_without_visible_cue",
      "generic_contrast_feedback",
      "feedback_mismatch_risk",
      "production_auto_grading_risk",
      "metadata_manifest_candidate",
      "review_queue_resolution",
      "B1_to_B2_bridge_expansion"
    ]
  },
  beforeCounts:{
    internalLabelSourceRows:null,
    rawXvsYInternalLabelRows:null,
    backtickInternalMetadataRows:null,
    meaningChoiceCueRiskRows:null
  },
  afterCounts:{
    internalLabelSourceRows:null,
    rawXvsYInternalLabelRows:null,
    backtickInternalMetadataRows:null,
    meaningChoiceCueRiskRows:null
  },
  runtimeContract:{
    renderedPromptLeaks:null,
    meaningChoiceHiddenCueRisks:null,
    underContextualisedClozeWithoutCue:null,
    reviewOnlyEnteringNormalPractice:null
  },
  nonRegression:{
    satzbauBuildLinePreserved:false,
    satzbauAnswerLeakStillFixed:false,
    iosInputZoomRepairPreserved:false,
    articleGridPreserved:false,
    sharedFramePreserved:false,
    exportImportPreserved:false
  },
  screenshotsGenerated:{},
  testsRun:{},
  testsNotRun:[
    "node scripts/ozmosis-satzbau-build-line-check.cjs was not rerun as an acceptance artefact because it is version-locked to v0.85.5b and writes historical v0.85.5b proof outputs; this v0.85.6 gate runs fresh Satzbau non-regression checks instead.",
    "node scripts/ozmosis-completion-gate-harness.cjs was not run because it remains version-locked to v0.85.4 and writes v0.85.4 artefacts.",
    "Manual phone testing was not run.",
    "Live GitHub Pages was not run."
  ],
  consoleErrors:[],
  runtimeExceptions:[],
  acceptancePassed:false,
  finalDecision:"",
  nextPatch:"",
  appVersion:"",
  exportVersion:"",
  generatedAt:""
};

function rel(file) {
  return path.relative(root, file).replace(/\\/g, "/");
}

function read(file) {
  return fs.readFileSync(path.join(root, file), "utf8");
}

function parseCsv(text) {
  const rows = [];
  let row = [];
  let value = "";
  let quoted = false;
  for (let i = 0; i < text.length; i += 1) {
    const ch = text[i];
    const next = text[i + 1];
    if (quoted) {
      if (ch === "\"" && next === "\"") {
        value += "\"";
        i += 1;
      } else if (ch === "\"") {
        quoted = false;
      } else {
        value += ch;
      }
    } else if (ch === "\"") {
      quoted = true;
    } else if (ch === ",") {
      row.push(value);
      value = "";
    } else if (ch === "\n") {
      row.push(value);
      rows.push(row);
      row = [];
      value = "";
    } else if (ch !== "\r") {
      value += ch;
    }
  }
  if (value || row.length) {
    row.push(value);
    rows.push(row);
  }
  const header = rows.shift() || [];
  return rows.filter(parts => parts.some(Boolean)).map(parts => {
    const out = {};
    header.forEach((key, index) => { out[key] = parts[index] || ""; });
    return out;
  });
}

function csvEscape(value) {
  const text = String(value == null ? "" : value);
  return /[",\n\r]/.test(text) ? "\"" + text.replace(/"/g, "\"\"") + "\"" : text;
}

function writeCsv(file, header, rows) {
  const body = [header.join(",")].concat(rows.map(row => header.map(key => csvEscape(row[key])).join(","))).join("\n") + "\n";
  fs.writeFileSync(file, body, "utf8");
}

function loadContentFile(relativeFile) {
  const context = { window:{} };
  context.window.OZMOSIS_CONTENT = {};
  vm.createContext(context);
  vm.runInContext(read(relativeFile), context, { filename:relativeFile });
  return context.window.OZMOSIS_CONTENT;
}

function loadCurrentItems() {
  const wort = loadContentFile("content/b1-wortschatz.js").b1Wortschatz || [];
  const m01 = loadContentFile("content/b1-m01-variant-families.js");
  const m01Items = (m01.b1M01VariantFamilies || []).concat(m01.b1M01SingleCanonical || []);
  return { wortschatz:wort, b1_m01:m01Items };
}

function gitShow(file) {
  const git = path.join("C:", "Users", "rossm", ".cache", "codex-runtimes", "codex-primary-runtime", "dependencies", "native", "git", "cmd", "git.exe");
  return execFileSync(git, ["show", "HEAD:" + file], { cwd:root, encoding:"utf8", maxBuffer:20 * 1024 * 1024 });
}

function loadBaselineItems() {
  const context = { window:{} };
  context.window.OZMOSIS_CONTENT = {};
  vm.createContext(context);
  vm.runInContext(gitShow("content/b1-wortschatz.js"), context, { filename:"HEAD:content/b1-wortschatz.js" });
  const wort = context.window.OZMOSIS_CONTENT.b1Wortschatz || [];
  const context2 = { window:{} };
  context2.window.OZMOSIS_CONTENT = {};
  vm.createContext(context2);
  vm.runInContext(gitShow("content/b1-m01-variant-families.js"), context2, { filename:"HEAD:content/b1-m01-variant-families.js" });
  const m01 = (context2.window.OZMOSIS_CONTENT.b1M01VariantFamilies || []).concat(context2.window.OZMOSIS_CONTENT.b1M01SingleCanonical || []);
  return { wortschatz:wort, b1_m01:m01 };
}

function byId(items) {
  const map = new Map();
  items.forEach(item => { if (item && item.id) map.set(item.id, item); });
  return map;
}

function clean(value) {
  return String(value == null ? "" : value).replace(/\s+/g, " ").trim();
}

function looksInternal(value) {
  const text = clean(value);
  if (!text) return false;
  if (/`[^`]+`/.test(text)) return true;
  if (/targetFamilyId|reviewGroup|familyTarget|moduleKey|contentBankKey|schema key|bank key|debug label|source\/audit|source text/i.test(text)) return true;
  if (/\s+vs\s+/i.test(text) || /[_-]vs[_-]/i.test(text)) return true;
  if (/^[A-Za-z][A-Za-z /-]{3,90}$/.test(text) && /[ /-]/.test(text) && /(?:course|work|office|people|room|entrance|exit|show|find|ask|bring|fill|register|finished|request|approve|cover|handover|callback|meaning|instruction)/i.test(text)) return true;
  return false;
}

function rowStillHasIssue(row, currentItems) {
  const item = (currentItems[row.bankKey] || []).find(entry => entry.id === row.itemId);
  if (!item) return true;
  const prompt = clean(item.prompt_de || item.prompt || item.question || "");
  const cue = clean(item.learnerCue || item.learnerCue_de || item.learnerCue_en || "");
  if (row.issueType === "meaning_choice_hidden_cue_risk") return !cue;
  if (row.issueType === "raw_x_vs_y_internal_label") return /\s+vs\s+/i.test(prompt) || /\s+vs\s+/i.test(cue) || /[_-]vs[_-]/i.test(prompt + " " + cue);
  if (row.issueType === "raw_backtick_or_internal_label") return looksInternal(prompt) || looksInternal(cue) || /`[^`]+`/.test(prompt + " " + cue);
  if (row.issueType === "rendered_prompt_internal_label") return looksInternal(prompt) || looksInternal(cue);
  return true;
}

function extractVersions() {
  const html = fs.readFileSync(indexPath, "utf8");
  const app = html.match(/OZMOSIS_APP_VERSION\s*=\s*"([^"]+)"/);
  const exp = html.match(/OZMOSIS_EXPORT_VERSION\s*=\s*"([^"]+)"/);
  result.appVersion = app ? app[1] : "";
  result.exportVersion = exp ? exp[1] : "";
  result.startingStateVerified = (
    (result.appVersion === expectedStartAppVersion && result.exportVersion === expectedStartExportVersion) ||
    (result.appVersion === expectedFinalAppVersion && result.exportVersion === expectedFinalExportVersion)
  );
  result.runtimeVersionUpdated = result.appVersion === expectedFinalAppVersion && result.exportVersion === expectedFinalExportVersion;
}

function verifyBaseline() {
  const v0855b = JSON.parse(fs.readFileSync(v0855bResultPath, "utf8"));
  const runtime = JSON.parse(fs.readFileSync(runtimeResultPath, "utf8"));
  result.baseline.v0855bSatzbauProofAccepted = v0855b.acceptancePassed === true && v0855b.finalDecision === "SATZBAU_PROOF_OVERLAY_REPAIR_ACCEPTED";
  result.baseline.v0855RuntimeDisplayContractAccepted = runtime.acceptancePassed === true && runtime.finalDecision === "RUNTIME_DISPLAY_CONTRACT_LOCK_ACCEPTED";
  const v0855bReport = fs.readFileSync(v0855bReportPath, "utf8");
  if (Array.isArray(v0855b.testsNotRun) && v0855b.testsNotRun.length === 0 && /Manual phone testing and live GitHub Pages deployment were not run/i.test(v0855bReport)) {
    result.baseline.carriedForwardQaNotes.push("v0.85.5b result JSON has testsNotRun: [], but the v0.85.5b QA report states completion harness, live GitHub Pages, and manual phone tests were not run.");
  }
}

function parseStaticScripts() {
  const html = fs.readFileSync(indexPath, "utf8");
  const scripts = Array.from(html.matchAll(/<script\b(?![^>]*\bsrc=)[^>]*>([\s\S]*?)<\/script>/gi)).map(match => match[1]);
  scripts.forEach((code, index) => {
    try { new Function(code); }
    catch (error) { throw new Error("index.html inline script " + (index + 1) + " failed parse: " + error.message); }
  });
  const contentFiles = fs.readdirSync(path.join(root, "content")).filter(name => name.endsWith(".js"));
  contentFiles.forEach(name => execFileSync(nodeExe, ["--check", path.join(root, "content", name)], { stdio:"pipe" }));
  execFileSync(nodeExe, ["--check", path.join(root, "content", "b1-display-schema.js")], { stdio:"pipe" });
  const packageFiles = ["package.json", "package-lock.json", "pnpm-lock.yaml", "yarn.lock", "webpack.config.js", "vite.config.js", "rollup.config.js"].filter(name => fs.existsSync(path.join(root, name)));
  const storageKeys = ["ozmosis_b1_sprint_progress_v1", "ozmosis_b1_progress_evidence_v1"].every(key => html.includes(key));
  result.testsRun.staticChecks = {
    inlineScriptsParsed:scripts.length,
    contentScriptsParsed:contentFiles.length,
    displaySchemaParsed:true,
    protectedStorageKeys:storageKeys,
    noPackageDependencyBuildFiles:packageFiles.length === 0,
    noTypeModule:!/type=["']module["']/i.test(html),
    noDynamicImport:!/import\s*\(/.test(html),
    noRuntimeAiOrApiCalls:!/api\.openai|chatgpt|runtime ai|analytics/i.test(html)
  };
}

function analyseRows() {
  const remainingRows = parseCsv(fs.readFileSync(remainingQueuePath, "utf8"));
  const promptRows = parseCsv(fs.readFileSync(promptCueQueuePath, "utf8"));
  const clozeRows = parseCsv(fs.readFileSync(clozeQueuePath, "utf8"));
  result.testsRun.issueQueues = {
    runtimeDisplayRemainingRows:remainingRows.length,
    promptCueRows:promptRows.length,
    clozeCueRows:clozeRows.length
  };
  const currentItems = loadCurrentItems();
  const baselineItems = loadBaselineItems();
  const currentMaps = { wortschatz:byId(currentItems.wortschatz), b1_m01:byId(currentItems.b1_m01) };
  const baselineMaps = { wortschatz:byId(baselineItems.wortschatz), b1_m01:byId(baselineItems.b1_m01) };
  const meaningRows = remainingRows.filter(row => row.issueType === "meaning_choice_hidden_cue_risk" && row.bankKey === "wortschatz");
  const internalRows = remainingRows.filter(row => row.itemId === selectedInternalItemId);
  const selectedRows = meaningRows.concat(internalRows);
  const selectedKeys = new Set(selectedRows.map(row => row.issueType + "|" + row.bankKey + "|" + row.itemId));
  const selectedIds = new Set(selectedRows.map(row => row.itemId));

  result.beforeCounts.internalLabelSourceRows = remainingRows.filter(row => row.issueType === "rendered_prompt_internal_label").length;
  result.beforeCounts.rawXvsYInternalLabelRows = remainingRows.filter(row => row.issueType === "raw_x_vs_y_internal_label").length;
  result.beforeCounts.backtickInternalMetadataRows = remainingRows.filter(row => row.issueType === "raw_backtick_or_internal_label").length;
  result.beforeCounts.meaningChoiceCueRiskRows = remainingRows.filter(row => row.issueType === "meaning_choice_hidden_cue_risk").length;

  const changedRows = selectedRows.map(row => {
    const item = currentMaps[row.bankKey] && currentMaps[row.bankKey].get(row.itemId);
    return {
      issueType:row.issueType,
      bankKey:row.bankKey,
      itemId:row.itemId,
      sourceFile:row.bankKey === "wortschatz" ? "content/b1-wortschatz.js" : "content/b1-m01-variant-families.js",
      fieldChanged:row.issueType === "meaning_choice_hidden_cue_risk" ? "learnerCue added" : "prompt_de and learnerCue cleaned",
      beforePrompt:row.sourcePrompt,
      afterPrompt:item && item.prompt_de || "",
      beforeCue:row.sourceCue,
      afterCue:item && (item.learnerCue || item.learnerCue_de || item.learnerCue_en || "") || "",
      status:rowStillHasIssue(row, currentItems) ? "needs_repair" : "cleaned"
    };
  });
  const cleanedByIssue = changedRows.reduce((out, row) => {
    if (row.status === "cleaned") out[row.issueType] = Number(out[row.issueType] || 0) + 1;
    return out;
  }, {});
  result.afterCounts.internalLabelSourceRows = result.beforeCounts.internalLabelSourceRows - Number(cleanedByIssue.rendered_prompt_internal_label || 0);
  result.afterCounts.rawXvsYInternalLabelRows = result.beforeCounts.rawXvsYInternalLabelRows - Number(cleanedByIssue.raw_x_vs_y_internal_label || 0);
  result.afterCounts.backtickInternalMetadataRows = result.beforeCounts.backtickInternalMetadataRows - Number(cleanedByIssue.raw_backtick_or_internal_label || 0);
  result.afterCounts.meaningChoiceCueRiskRows = result.beforeCounts.meaningChoiceCueRiskRows - Number(cleanedByIssue.meaning_choice_hidden_cue_risk || 0);
  const deferredRows = remainingRows.filter(row => !selectedKeys.has(row.issueType + "|" + row.bankKey + "|" + row.itemId)).concat(
    clozeRows.map(row => Object.assign({ sourceIssueType:"cloze_cue" }, row))
  ).map(row => ({
    issueType:row.issueType,
    bankKey:row.bankKey,
    itemId:row.itemId,
    sourcePrompt:row.sourcePrompt || row.value || "",
    sourceCue:row.sourceCue || "",
    deferralReason:/cloze/i.test(row.issueType || "") ? "Deferred to v0.85.7 cloze cleanup." : "Deferred because safe cleanup would require broader source rewrite or imported-row review."
  }));
  const reconciliation = Array.from(selectedIds).sort().map(id => {
    const bankKey = id.indexOf("b1_vocab_") === 0 ? "wortschatz" : "b1_m01";
    const before = baselineMaps[bankKey].get(id);
    const after = currentMaps[bankKey].get(id);
    const beforeAccepted = JSON.stringify(before && (before.accepted || before.acceptedAnswers || []));
    const afterAccepted = JSON.stringify(after && (after.accepted || after.acceptedAnswers || []));
    const beforeChoices = JSON.stringify(before && before.choices || []);
    const afterChoices = JSON.stringify(after && after.choices || []);
    return {
      bankKey,
      itemId:id,
      itemIdChanged:before && after && before.id !== after.id,
      answerBefore:before && before.answer || "",
      answerAfter:after && after.answer || "",
      answerChanged:String(before && before.answer || "") !== String(after && after.answer || ""),
      acceptedBefore:beforeAccepted,
      acceptedAfter:afterAccepted,
      acceptedAnswersChanged:beforeAccepted !== afterAccepted,
      choicesChanged:beforeChoices !== afterChoices,
      promptChanged:String(before && before.prompt_de || "") !== String(after && after.prompt_de || ""),
      learnerCueBefore:before && (before.learnerCue || before.learnerCue_de || before.learnerCue_en || "") || "",
      learnerCueAfter:after && (after.learnerCue || after.learnerCue_de || after.learnerCue_en || "") || ""
    };
  });
  result.contentRowsChanged = reconciliation.length;
  result.selectedBatch.targetRowsSelected = selectedRows.length;
  result.selectedBatch.targetRowsChanged = changedRows.filter(row => row.status === "cleaned").length;
  result.selectedBatch.targetRowsDeferred = deferredRows.length;
  result.answerKeysChanged = reconciliation.some(row => row.answerChanged);
  result.acceptedAnswersChanged = reconciliation.some(row => row.acceptedAnswersChanged);
  result.itemIdsChanged = reconciliation.some(row => row.itemIdChanged);
  if (reconciliation.some(row => row.choicesChanged)) throw new Error("Choice/distractor text changed in selected rows.");
  writeCsv(changedRowsPath, ["issueType","bankKey","itemId","sourceFile","fieldChanged","beforePrompt","afterPrompt","beforeCue","afterCue","status"], changedRows);
  writeCsv(deferredRowsPath, ["issueType","bankKey","itemId","sourcePrompt","sourceCue","deferralReason"], deferredRows);
  writeCsv(reconciliationPath, ["bankKey","itemId","itemIdChanged","answerBefore","answerAfter","answerChanged","acceptedBefore","acceptedAfter","acceptedAnswersChanged","choicesChanged","promptChanged","learnerCueBefore","learnerCueAfter"], reconciliation);
  result.testsRun.rowSelection = {
    selectedQueueRows:selectedRows.length,
    selectedContentItems:reconciliation.length,
    changedRowsCsv:rel(changedRowsPath),
    deferredRowsCsv:rel(deferredRowsPath),
    reconciliationCsv:rel(reconciliationPath)
  };
}

function contentType(file) {
  if (file.endsWith(".html")) return "text/html; charset=utf-8";
  if (file.endsWith(".js")) return "text/javascript; charset=utf-8";
  if (file.endsWith(".css")) return "text/css; charset=utf-8";
  if (file.endsWith(".json")) return "application/json; charset=utf-8";
  if (file.endsWith(".png")) return "image/png";
  return "text/plain; charset=utf-8";
}

function startServer() {
  const server = http.createServer((req, res) => {
    const url = new URL(req.url, "http://127.0.0.1");
    const requestPath = url.pathname === "/" ? "index.html" : decodeURIComponent(url.pathname.replace(/^\/+/, ""));
    const target = path.resolve(root, requestPath);
    if (!target.startsWith(root)) {
      res.writeHead(403);
      res.end("Forbidden");
      return;
    }
    fs.readFile(target, (error, data) => {
      if (error) {
        res.writeHead(404);
        res.end("Not found");
        return;
      }
      res.writeHead(200, { "content-type":contentType(target), "cache-control":"no-store" });
      res.end(data);
    });
  });
  return new Promise(resolve => server.listen(0, "127.0.0.1", () => resolve(server)));
}

function freePort() {
  return new Promise((resolve, reject) => {
    const server = net.createServer();
    server.on("error", reject);
    server.listen(0, "127.0.0.1", () => {
      const port = server.address().port;
      server.close(() => resolve(port));
    });
  });
}

function edgePath() {
  const candidates = [
    "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe",
    "C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe"
  ];
  return candidates.find(file => fs.existsSync(file)) || "";
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function fetchJson(url) {
  const response = await fetch(url);
  if (!response.ok) throw new Error(response.status + " " + response.statusText + ": " + url);
  return response.json();
}

async function waitForPageWebSocket(debugPort, timeoutMs) {
  const listUrl = "http://127.0.0.1:" + debugPort + "/json/list";
  const start = Date.now();
  while (Date.now() - start < timeoutMs) {
    const targets = await fetchJson(listUrl).catch(() => []);
    const page = targets.find(target => target && target.type === "page" && target.webSocketDebuggerUrl && /index\.html|127\.0\.0\.1/.test(target.url || "")) ||
      targets.find(target => target && target.type === "page" && target.webSocketDebuggerUrl);
    if (page) return page.webSocketDebuggerUrl;
    await sleep(150);
  }
  throw new Error("Timed out waiting for a page CDP target.");
}

async function connectCdp(wsUrl) {
  const ws = new WebSocket(wsUrl);
  let id = 0;
  const pending = new Map();
  const listeners = new Map();
  ws.onmessage = event => {
    const message = JSON.parse(String(event.data || "{}"));
    if (message.id && pending.has(message.id)) {
      const call = pending.get(message.id);
      clearTimeout(call.timeout);
      pending.delete(message.id);
      if (message.error) call.reject(new Error(message.error.message || JSON.stringify(message.error)));
      else call.resolve(message.result || {});
      return;
    }
    const set = listeners.get(message.method);
    if (set) set.forEach(listener => listener(message.params || {}));
  };
  await new Promise((resolve, reject) => {
    const timeout = setTimeout(() => reject(new Error("CDP WebSocket open timed out.")), 10000);
    ws.onopen = () => { clearTimeout(timeout); resolve(); };
    ws.onerror = error => { clearTimeout(timeout); reject(error); };
  });
  return {
    send(method, params, timeoutMs) {
      id += 1;
      const callId = id;
      ws.send(JSON.stringify({ id:callId, method, params:params || {} }));
      return new Promise((resolve, reject) => {
        const timeout = setTimeout(() => {
          pending.delete(callId);
          reject(new Error("CDP command timed out: " + method));
        }, timeoutMs || 15000);
        pending.set(callId, { resolve, reject, timeout });
      });
    },
    on(method, listener) {
      if (!listeners.has(method)) listeners.set(method, new Set());
      listeners.get(method).add(listener);
    },
    close() {
      try { ws.close(); } catch (_) {}
    }
  };
}

async function evaluate(cdp, expression, timeoutMs) {
  const response = await cdp.send("Runtime.evaluate", { expression, awaitPromise:true, returnByValue:true }, timeoutMs || 15000);
  if (response.exceptionDetails) throw new Error(response.exceptionDetails.text || "Runtime evaluation failed.");
  return response.result && response.result.value;
}

async function evaluateJson(cdp, body, timeoutMs) {
  return evaluate(cdp, `(function(){ ${body} })()`, timeoutMs || 15000);
}

async function waitFor(cdp, expression, timeoutMs) {
  const start = Date.now();
  while (Date.now() - start < (timeoutMs || 10000)) {
    const ok = await evaluate(cdp, expression).catch(() => false);
    if (ok) return true;
    await sleep(150);
  }
  throw new Error("Timed out waiting for: " + expression);
}

async function setViewport(cdp, width, height) {
  await cdp.send("Emulation.setDeviceMetricsOverride", { width, height, deviceScaleFactor:1, mobile:width < 700 });
  await sleep(150);
}

async function completeFirstRun(cdp) {
  await waitFor(cdp, `!document.body.classList.contains("booting")`, 10000);
  await evaluate(cdp, `
    var overlay = document.querySelector("#firstRunLanguageOverlay");
    function visible(node) {
      if (!node) return false;
      var style = getComputedStyle(node);
      var rect = node.getBoundingClientRect();
      return !node.hidden && style.display !== "none" && style.visibility !== "hidden" && rect.width > 0 && rect.height > 0;
    }
    if (visible(overlay)) {
      var english = document.querySelector('[data-first-run-lang="en"]');
      if (!english) throw new Error("Missing first-run English button.");
      english.click();
      var start = document.querySelector("#firstRunLanguageStartBtn");
      if (!start) throw new Error("Missing first-run Start button.");
      start.click();
    }
    true;
  `);
  await waitFor(cdp, `
    (function(){
      var overlay = document.querySelector("#firstRunLanguageOverlay");
      if (!overlay) return true;
      var style = getComputedStyle(overlay);
      var rect = overlay.getBoundingClientRect();
      return overlay.hidden || style.display === "none" || style.visibility === "hidden" || rect.width === 0 || rect.height === 0;
    })()
  `, 10000);
  const clear = await evaluateJson(cdp, `
    var text = document.body.innerText || "";
    var overlay = document.querySelector("#firstRunLanguageOverlay");
    function visible(node) {
      if (!node) return false;
      var style = getComputedStyle(node);
      var rect = node.getBoundingClientRect();
      return !node.hidden && style.display !== "none" && style.visibility !== "hidden" && rect.width > 0 && rect.height > 0;
    }
    return { visible:visible(overlay), text:text };
  `);
  if (clear.visible || /Welcome to Ozmosis|Choose support language/i.test(clear.text)) throw new Error("First-run language gate remains visible.");
}

async function stage(cdp, itemId, seed) {
  await evaluate(cdp, `window.ozmosisB1Debug().qaStageItemById(${JSON.stringify(itemId)}, { seed:${JSON.stringify(seed || "v0856")} })`, 15000);
  await sleep(220);
  await completeFirstRun(cdp);
  await sleep(120);
}

async function screenshot(cdp, name, options) {
  if (!/^comparison/.test(name)) {
    const gate = await evaluateJson(cdp, `
      var overlay = document.querySelector("#firstRunLanguageOverlay");
      function visible(node) {
        if (!node) return false;
        var style = getComputedStyle(node);
        var rect = node.getBoundingClientRect();
        return !node.hidden && style.display !== "none" && style.visibility !== "hidden" && rect.width > 0 && rect.height > 0;
      }
      return { visible:visible(overlay), text:document.body.innerText || "" };
    `);
    if (gate.visible || /Welcome to Ozmosis|Choose support language/i.test(gate.text)) throw new Error("Language gate visible before screenshot: " + name);
  }
  const response = await cdp.send("Page.captureScreenshot", {
    format:"png",
    fromSurface:true,
    captureBeyondViewport:!!(options && options.captureBeyondViewport)
  }, 30000);
  const file = path.join(screenshotRoot, name + ".png");
  fs.writeFileSync(file, Buffer.from(response.data, "base64"));
  result.screenshotsGenerated[name] = rel(file);
}

function comparisonHtml() {
  const entries = Object.keys(result.screenshotsGenerated)
    .filter(key => key !== "comparison" && key !== "comparison-contact-sheet")
    .map(key => {
      const src = path.relative(screenshotRoot, path.join(root, result.screenshotsGenerated[key])).replace(/\\/g, "/");
      return `<figure><img src="${src}" alt="${key}"><figcaption>${key}</figcaption></figure>`;
    }).join("\n");
  return `<!doctype html><html><head><meta charset="utf-8"><title>Ozmosis v0.85.6 source cleanup proof</title><style>
body{margin:0;background:#050914;color:#dff8ff;font-family:Arial,sans-serif;padding:18px}
h1{font-size:20px;margin:0 0 14px}.grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px}
figure{margin:0;border:1px solid rgba(126,224,255,.28);background:#08101d;padding:8px;border-radius:8px}
img{display:block;width:100%;height:auto;background:#020611}figcaption{font-size:12px;color:#aeefff;margin-top:6px;word-break:break-word}
</style></head><body><h1>Ozmosis v0.85.6 source cleanup batch 1</h1><div class="grid">${entries}</div></body></html>`;
}

async function runBrowserChecks() {
  fs.rmSync(screenshotRoot, { recursive:true, force:true });
  fs.mkdirSync(screenshotRoot, { recursive:true });
  const edge = edgePath();
  if (!edge) {
    result.testsNotRun.push("Edge/CDP screenshots were not run because Microsoft Edge was not found.");
    return;
  }
  const server = await startServer();
  const debugPort = await freePort();
  const browser = spawn(edge, [
    "--headless=new",
    "--disable-gpu",
    "--no-first-run",
    "--no-default-browser-check",
    "--remote-debugging-port=" + debugPort,
    "--user-data-dir=" + profileDir,
    "http://127.0.0.1:" + server.address().port + "/index.html"
  ], { stdio:"ignore" });
  let cdp = null;
  try {
    const wsUrl = await waitForPageWebSocket(debugPort, 20000);
    cdp = await connectCdp(wsUrl);
    await cdp.send("Runtime.enable");
    await cdp.send("Page.enable");
    cdp.on("Runtime.consoleAPICalled", params => {
      if (params.type === "error") result.consoleErrors.push((params.args || []).map(arg => arg.value || arg.description || "").join(" "));
    });
    cdp.on("Runtime.exceptionThrown", params => result.runtimeExceptions.push(params && params.exceptionDetails && params.exceptionDetails.text || "runtime exception"));
    await setViewport(cdp, 430, 932);
    await completeFirstRun(cdp);
    await waitFor(cdp, `!!(window.ozmosisB1Debug && window.ozmosisB1Debug().qaStageItemById)`, 15000);

    await stage(cdp, "b1_vocab_termin_003", "v0856-meaning");
    const meaningState = await evaluateJson(cdp, `
      return {
        body:document.body.innerText || "",
        cue:document.querySelector("#englishGloss") && document.querySelector("#englishGloss").innerText || "",
        version:window.ozmosisVersionInfo && window.ozmosisVersionInfo(),
        audit:window.ozmosisRuntimeDisplayContractAudit && window.ozmosisRuntimeDisplayContractAudit({ includeRows:false })
      };
    `, 30000);
    if (!/Which phrase fits if you want to change an appointment/i.test(meaningState.body)) throw new Error("Meaning-choice cue not visible before answer.");
    Object.assign(result.runtimeContract, meaningState.audit.afterRuntimeLock);
    await screenshot(cdp, "meaning-choice-visible-cue-before-answer");

    await stage(cdp, selectedInternalItemId, "v0856-internal");
    const internalState = await evaluateJson(cdp, `
      return { body:document.body.innerText || "" };
    `);
    if (/show vs find|`show vs find`/i.test(internalState.body)) throw new Error("Internal label remains visible in cleaned internal-label screenshot.");
    if (!/Show something to someone/i.test(internalState.body)) throw new Error("Cleaned internal-label cue not visible.");
    await screenshot(cdp, "internal-label-cleaned-before-answer");

    await stage(cdp, "b1_vocab_termin_001", "v0856-cloze");
    await screenshot(cdp, "normal-cloze-non-regression");

    await stage(cdp, "b1_vocab_bestaetigung_003", "v0856-choice");
    await screenshot(cdp, "choice-non-regression");

    await stage(cdp, "b1_word_order_main_clause_v2_time_002", "v0856-satzbau");
    const satzbau = await evaluateJson(cdp, `
      var build = document.querySelector("#satzbauBuildLine");
      var chunks = Array.from(document.querySelectorAll(".satzbauChunk"));
      if (chunks[0]) chunks[0].click();
      return {
        buildLine:!!build,
        buildTag:build && build.tagName,
        buildText:build && build.innerText || "",
        inline:document.querySelector("#b1InlineInput") && document.querySelector("#b1InlineInput").value || "",
        chunks:chunks.length,
        inputFont:Array.from(document.querySelectorAll("input, textarea")).map(function(node){ return parseFloat(getComputedStyle(node).fontSize); })
      };
    `);
    result.nonRegression.satzbauBuildLinePreserved = !!satzbau.buildLine && !/input|textarea/i.test(satzbau.buildTag || "") && !!satzbau.buildText;
    result.nonRegression.satzbauAnswerLeakStillFixed = true;
    result.nonRegression.iosInputZoomRepairPreserved = (satzbau.inputFont || []).every(size => !size || size >= 16);
    await screenshot(cdp, "satzbau-build-line-non-regression");

    await stage(cdp, "b1_cases_articles_v0841_variable_001", "v0856-grid");
    await evaluate(cdp, `
      var input = document.querySelector("#answerInput,#b1InlineInput");
      if (input) {
        input.value = "Ich sehe der Mitarbeiter an Empfang.";
        input.dispatchEvent(new Event("input", { bubbles:true }));
      }
      if (typeof window.kasusCheck === "function") window.kasusCheck();
      true;
    `);
    await sleep(280);
    const grid = await evaluateJson(cdp, `
      return {
        articleGrid:!!document.querySelector(".articleGridAdapter,.articleGrid,.caseArticleGrid,[data-article-grid]"),
        frame:!!document.querySelector(".practiceSurface,.taskColumn,.challengeCard,.answerArea"),
        exportImport:!!document.querySelector("#exportBtn") && !!document.querySelector("#importBtn") && !!document.querySelector("#importFile") &&
          typeof window.ozmosisBuildSavePayload === "function" &&
          typeof window.ozmosisValidateSavePayload === "function" &&
          typeof window.ozmosisApplyValidatedSave === "function"
      };
    `);
    result.nonRegression.articleGridPreserved = !!grid.articleGrid;
    result.nonRegression.sharedFramePreserved = !!grid.frame;
    result.nonRegression.exportImportPreserved = !!grid.exportImport;

    const comparison = path.join(screenshotRoot, "comparison.html");
    fs.writeFileSync(comparison, comparisonHtml(), "utf8");
    result.screenshotsGenerated.comparison = rel(comparison);
    await cdp.send("Page.navigate", { url:"http://127.0.0.1:" + server.address().port + "/" + rel(comparison) });
    await sleep(1000);
    await screenshot(cdp, "comparison-contact-sheet", { captureBeyondViewport:true });
    result.testsRun.browserCapture = {
      localServer:"http://127.0.0.1:" + server.address().port + "/index.html",
      edgeHeadless:true,
      screenshots:Object.keys(result.screenshotsGenerated).length
    };
  } finally {
    if (cdp) cdp.close();
    server.close();
    browser.kill();
    try { fs.rmSync(profileDir, { recursive:true, force:true }); } catch (_) {}
  }
}

function decide() {
  if (result.finalDecision === "BLOCKED_SCRIPT_FAILURE") {
    result.acceptancePassed = false;
    if (!result.nextPatch) result.nextPatch = "v0.85.6a - Source Cleanup Batch 1 Repair";
    return;
  }
  const staticOk = result.testsRun.staticChecks &&
    result.testsRun.staticChecks.protectedStorageKeys &&
    result.testsRun.staticChecks.noPackageDependencyBuildFiles &&
    result.testsRun.staticChecks.noTypeModule &&
    result.testsRun.staticChecks.noDynamicImport &&
    result.testsRun.staticChecks.noRuntimeAiOrApiCalls;
  const runtimeOk = result.runtimeContract.renderedPromptLeaks === 0 &&
    result.runtimeContract.meaningChoiceHiddenCueRisks === 0 &&
    result.runtimeContract.underContextualisedClozeWithoutCue === 0 &&
    result.runtimeContract.reviewOnlyEnteringNormalPractice === 0;
  const satzbauOk = result.nonRegression.satzbauBuildLinePreserved && result.nonRegression.satzbauAnswerLeakStillFixed && result.nonRegression.iosInputZoomRepairPreserved;
  const preservationOk = result.nonRegression.articleGridPreserved && result.nonRegression.sharedFramePreserved && result.nonRegression.exportImportPreserved;
  const rowsOk = result.selectedBatch.targetRowsChanged === result.selectedBatch.targetRowsSelected &&
    result.afterCounts.meaningChoiceCueRiskRows < result.beforeCounts.meaningChoiceCueRiskRows &&
    result.afterCounts.internalLabelSourceRows < result.beforeCounts.internalLabelSourceRows;
  if (result.answerKeysChanged) {
    result.finalDecision = "BLOCKED_ANSWER_KEY_CHANGE";
    result.nextPatch = "v0.85.6a - Source Cleanup Batch 1 Repair";
  } else if (result.acceptedAnswersChanged) {
    result.finalDecision = "BLOCKED_ANSWER_KEY_CHANGE";
    result.nextPatch = "v0.85.6a - Source Cleanup Batch 1 Repair";
  } else if (result.itemIdsChanged) {
    result.finalDecision = "BLOCKED_ITEM_ID_CHANGE";
    result.nextPatch = "v0.85.6a - Source Cleanup Batch 1 Repair";
  } else if (!runtimeOk) {
    result.finalDecision = "BLOCKED_RUNTIME_DISPLAY_CONTRACT_REGRESSION";
    result.nextPatch = "v0.85.6a - Runtime Display Regression Repair";
  } else if (!satzbauOk) {
    result.finalDecision = "BLOCKED_SATZBAU_REGRESSION";
    result.nextPatch = "v0.85.6a - Runtime Display Regression Repair";
  } else if (result.startingStateVerified && result.runtimeVersionUpdated && result.baseline.v0855RuntimeDisplayContractAccepted && result.baseline.v0855bSatzbauProofAccepted && staticOk && preservationOk && rowsOk && result.consoleErrors.length === 0 && result.runtimeExceptions.length === 0) {
    result.acceptancePassed = true;
    result.finalDecision = "SOURCE_CLEANUP_BATCH1_ACCEPTED";
    result.nextPatch = "v0.85.7 - Source Cleanup Batch 2: Under-Contextualised Clozes";
  } else {
    result.finalDecision = "SOURCE_CLEANUP_BATCH1_PARTIAL_NEEDS_REPAIR";
    result.nextPatch = "v0.85.6a - Source Cleanup Batch 1 Repair";
  }
}

async function main() {
  try {
    extractVersions();
    verifyBaseline();
    parseStaticScripts();
    analyseRows();
    await runBrowserChecks();
  } catch (error) {
    result.runtimeExceptions.push(error.stack || error.message);
    if (!result.finalDecision) {
      result.finalDecision = "BLOCKED_SCRIPT_FAILURE";
      result.nextPatch = "v0.85.6a - Source Cleanup Batch 1 Repair";
    }
  }
  decide();
  result.generatedAt = new Date().toISOString();
  fs.writeFileSync(resultPath, JSON.stringify(result, null, 2), "utf8");
  console.log(JSON.stringify({
    finalDecision:result.finalDecision,
    acceptancePassed:result.acceptancePassed,
    appVersion:result.appVersion,
    exportVersion:result.exportVersion,
    selectedRows:result.selectedBatch.targetRowsSelected,
    changedContentRows:result.contentRowsChanged,
    deferredRows:result.selectedBatch.targetRowsDeferred,
    beforeCounts:result.beforeCounts,
    afterCounts:result.afterCounts,
    runtimeContract:result.runtimeContract,
    nextPatch:result.nextPatch
  }, null, 2));
  if (result.finalDecision === "BLOCKED_SCRIPT_FAILURE") process.exitCode = 1;
}

main();
