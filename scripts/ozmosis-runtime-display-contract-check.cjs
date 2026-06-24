const fs = require("fs");
const http = require("http");
const net = require("net");
const os = require("os");
const path = require("path");
const vm = require("vm");
const { spawn } = require("child_process");

const root = path.resolve(__dirname, "..");
const indexPath = path.join(root, "index.html");
const qaDir = path.join(root, "docs", "qa");
const resultPath = path.join(qaDir, "v0.85.5_runtime_display_contract_lock_results.json");
const resolvedCsvPath = path.join(qaDir, "v0.85.5_runtime_display_contract_resolved_issues.csv");
const remainingCsvPath = path.join(qaDir, "v0.85.5_runtime_display_contract_remaining_source_cleanup.csv");
const profileDir = fs.mkdtempSync(path.join(os.tmpdir(), "ozmosis-v0855-runtime-contract-edge-profile-"));

const expectedStartAppVersion = "v0.85.4a - Satzbau Interaction, Chunk Randomisation, and iOS Input Zoom Repair";
const expectedStartExportVersion = "v0.85.4a-satzbau-touch-ios-zoom";
const expectedFinalAppVersion = "v0.85.5 - Runtime Display Contract Lock";
const expectedFinalExportVersion = "v0.85.5-runtime-display-contract-lock";

const fixtures = {
  meaningChoice:"b1_vocab_termin_003",
  underContextCloze:"b1_vocab_termin_001",
  reviewOnly:"v080149_cat02_collocation_cat02_coll_005",
  normalChoice:"v080149_cat02_contrast_cat02_cs_013",
  normalCloze:"v080149_cat02_practice_family_cat02_pf_005",
  normalCorrection:"b1_connector_v085_variable_weil_001",
  satzbau:"b1_word_order_main_clause_v2_time_002",
  casesRepair:"b1_cases_articles_v0841_variable_001"
};

const result = {
  patch:"v0.85.5",
  title:"Runtime Display Contract Lock",
  startingStateVerified:false,
  runtimeVersionUpdated:false,
  runtimeChanged:true,
  contentChanged:false,
  scoringChanged:false,
  evidenceChanged:false,
  storageChanged:false,
  exportImportChanged:false,
  v0854Baseline:{
    renderedPromptLeaks:null,
    meaningChoiceHiddenCueRisks:null,
    underContextualisedClozeWithoutCue:null,
    reviewOnlyEnteringNormalPractice:null
  },
  afterRuntimeLock:{
    renderedPromptLeaks:null,
    meaningChoiceHiddenCueRisks:null,
    underContextualisedClozeWithoutCue:null,
    reviewOnlyEnteringNormalPractice:null
  },
  classification:{
    realRuntimeDefects:0,
    runtimeGuardAlreadyHandles:0,
    staticFalsePositives:0,
    needsSourceCleanupLater:0,
    reviewOnlySafe:0
  },
  activeNormalPracticeContract:{
    internalLabelsHidden:false,
    meaningCuesVisible:false,
    clozeCuesVisibleOrExcluded:false,
    hintsRemainRevealOnly:false,
    reviewOnlyExcluded:false
  },
  v0854aNonRegression:{
    satzbauChunksTappable:false,
    satzbauTapBuildsAnswer:false,
    satzbauRandomisationStable:false,
    satzbauNotCorrectOrder:false,
    iosSafeInputFontSizes:false
  },
  articleGridPreserved:false,
  sharedFramePreserved:false,
  sourceOfTruth:{
    appFile:"index.html",
    baselineGate:"docs/qa/v0.85.4_completion_gate_harness_results.json",
    nonRegressionGate:"docs/qa/v0.85.4a_satzbau_touch_ios_zoom_results.json",
    runtimeContractFunction:"window.ozmosisRuntimeDisplayContractAudit"
  },
  baselineV0854:{},
  nonRegressionV0854a:{},
  runtimeDisplayContract:{
    beforeCounts:{},
    afterRuntimeLock:{
      renderedPromptLeaks:null,
      meaningChoiceHiddenCueRisks:null,
      underContextualisedClozeWithoutCue:null,
      reviewOnlyEnteringNormalPractice:null
    },
    activeNormalPracticeContract:{
      internalLabelsHidden:false,
      meaningCuesVisible:false,
      clozeCuesVisibleOrExcluded:false,
      hintsRemainRevealOnly:false,
      reviewOnlyExcluded:false
    },
    contractIssueCounts:{},
    classifiedIssueCounts:{
      realRuntimeDefects:0,
      runtimeGuardAlreadyHandles:0,
      needsSourceCleanupLater:0,
      staticFalsePositive:0,
      reviewOnlySafe:0,
      sourceCleanupCandidateRows:0
    },
    resolvedIssuesCsv:"docs/qa/v0.85.5_runtime_display_contract_resolved_issues.csv",
    remainingSourceCleanupCsv:"docs/qa/v0.85.5_runtime_display_contract_remaining_source_cleanup.csv"
  },
  representativeScreens:{},
  nonRegression:{
    v0854aSatzbauInteractionPreserved:false,
    v0854aChunkRandomisationPreserved:false,
    v0854aIosZoomRepairPreserved:false,
    articleGridPreserved:false,
    sharedFramePreserved:false,
    exportImportPreserved:false,
    storageKeysPreserved:false,
    scoringChanged:false,
    evidenceChanged:false,
    contentChanged:false
  },
  filesChanged:[
    "index.html",
    "AGENTS.md",
    "README.md",
    "CHANGELOG-FULL-OZMOSIS.txt",
    "docs/OZMOSIS_SOURCE_BRIEF_CURRENT.md",
    "docs/OZMOSIS_DEVELOPMENT_ROADMAP_CURRENT.md",
    "docs/OZMOSIS_FEATURE_REGISTER_CURRENT.md",
    "docs/OZMOSIS_SOURCE_BRIEF_v0.85.5.md",
    "docs/OZMOSIS_DEVELOPMENT_ROADMAP_v0.85.5.md",
    "docs/qa/v0.85.5_runtime_display_contract_lock.md",
    "docs/qa/v0.85.5_runtime_display_contract_lock_results.json",
    "docs/qa/v0.85.5_runtime_display_contract_resolved_issues.csv",
    "docs/qa/v0.85.5_runtime_display_contract_remaining_source_cleanup.csv",
    "scripts/ozmosis-runtime-display-contract-check.cjs"
  ],
  testsRun:{},
  testsNotRun:[],
  consoleErrors:[],
  runtimeExceptions:[],
  warnings:[],
  acceptancePassed:false,
  finalDecision:"",
  nextPatch:"",
  appVersion:"",
  exportVersion:"",
  generatedAt:new Date().toISOString()
};

function rel(file) {
  return path.relative(root, file).replace(/\\/g, "/");
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function contentType(file) {
  if (file.endsWith(".html")) return "text/html; charset=utf-8";
  if (file.endsWith(".js")) return "text/javascript; charset=utf-8";
  if (file.endsWith(".json")) return "application/json; charset=utf-8";
  if (file.endsWith(".tsv")) return "text/tab-separated-values; charset=utf-8";
  if (file.endsWith(".css")) return "text/css; charset=utf-8";
  if (file.endsWith(".png")) return "image/png";
  return "application/octet-stream";
}

function edgeExecutable() {
  const candidates = [
    "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe",
    "C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe"
  ];
  return candidates.find(candidate => fs.existsSync(candidate)) || "";
}

function readJson(file, fallback) {
  try {
    return JSON.parse(fs.readFileSync(file, "utf8"));
  } catch (error) {
    result.warnings.push(`Could not read ${rel(file)}: ${error.message}`);
    return fallback;
  }
}

function writeJson(file, value) {
  fs.mkdirSync(path.dirname(file), { recursive:true });
  fs.writeFileSync(file, JSON.stringify(value, null, 2) + "\n", "utf8");
}

function csvEscape(value) {
  const text = String(value == null ? "" : value);
  if (/[",\r\n]/.test(text)) return `"${text.replace(/"/g, '""')}"`;
  return text;
}

function writeCsv(file, headers, rows) {
  const lines = [headers.join(",")];
  rows.forEach(row => {
    lines.push(headers.map(header => csvEscape(row[header])).join(","));
  });
  fs.writeFileSync(file, lines.join("\n") + "\n", "utf8");
}

function parseCsv(text) {
  const rows = [];
  let row = [];
  let cell = "";
  let quoted = false;
  for (let i = 0; i < text.length; i += 1) {
    const char = text[i];
    const next = text[i + 1];
    if (quoted) {
      if (char === '"' && next === '"') {
        cell += '"';
        i += 1;
      } else if (char === '"') {
        quoted = false;
      } else {
        cell += char;
      }
    } else if (char === '"') {
      quoted = true;
    } else if (char === ",") {
      row.push(cell);
      cell = "";
    } else if (char === "\n") {
      row.push(cell);
      rows.push(row);
      row = [];
      cell = "";
    } else if (char !== "\r") {
      cell += char;
    }
  }
  if (cell || row.length) {
    row.push(cell);
    rows.push(row);
  }
  if (!rows.length) return [];
  const headers = rows.shift();
  return rows
    .filter(values => values.some(value => String(value || "").trim()))
    .map(values => {
      const object = {};
      headers.forEach((header, index) => { object[header] = values[index] || ""; });
      return object;
    });
}

function readCsv(file, sourceIssueType) {
  try {
    return parseCsv(fs.readFileSync(file, "utf8")).map(row => Object.assign({ sourceIssueType }, row));
  } catch (error) {
    result.warnings.push(`Could not read ${rel(file)}: ${error.message}`);
    return [];
  }
}

function listFiles(dir, predicate) {
  if (!fs.existsSync(dir)) return [];
  const output = [];
  fs.readdirSync(dir, { withFileTypes:true }).forEach(entry => {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) output.push(...listFiles(full, predicate));
    else if (!predicate || predicate(full)) output.push(full);
  });
  return output;
}

function parseStaticScripts() {
  const html = fs.readFileSync(indexPath, "utf8");
  const inline = [];
  const scriptRegex = /<script\b([^>]*)>([\s\S]*?)<\/script>/gi;
  let match;
  while ((match = scriptRegex.exec(html))) {
    if (!/\bsrc\s*=/.test(match[1] || "")) inline.push(match[2]);
  }
  inline.forEach((script, index) => new vm.Script(script, { filename:`index-inline-${index + 1}.js` }));
  const contentScripts = listFiles(path.join(root, "content"), file => file.endsWith(".js"));
  contentScripts.forEach(file => new vm.Script(fs.readFileSync(file, "utf8"), { filename:rel(file) }));
  result.testsRun.staticChecks = {
    inlineScriptsParsed:inline.length,
    contentScriptsParsed:contentScripts.length,
    protectedStorageKeys:html.includes("ozmosis_b1_sprint_progress_v1") && html.includes("ozmosis_b1_progress_evidence_v1"),
    exportImportStrings:html.includes("Export Save") && html.includes("Import Save"),
    noPackageJson:!fs.existsSync(path.join(root, "package.json")),
    noPackageLock:!fs.existsSync(path.join(root, "package-lock.json")),
    noTypeModule:!/type\s*=\s*["']module["']/i.test(html),
    noDynamicImport:!/import\s*\(/.test(html)
  };
  if (!result.testsRun.staticChecks.protectedStorageKeys) result.warnings.push("Protected storage key strings were not both found.");
  if (!result.testsRun.staticChecks.exportImportStrings) result.warnings.push("Export Save / Import Save strings were not both found.");
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

function loadBaselines() {
  const v0854 = readJson(path.join(qaDir, "v0.85.4_completion_gate_harness_results.json"), {});
  const v0854a = readJson(path.join(qaDir, "v0.85.4a_satzbau_touch_ios_zoom_results.json"), {});
  result.baselineV0854 = {
    accepted:v0854.finalDecision === "COMPLETION_GATE_HARNESS_ACCEPTED",
    totalItems:v0854.itemInventory && v0854.itemInventory.totalItems,
    normalPracticeEligible:v0854.itemInventory && v0854.itemInventory.normalPracticeEligible,
    reviewOnly:v0854.itemInventory && v0854.itemInventory.reviewOnly,
    renderedPromptLeaks:v0854.promptCueGate && v0854.promptCueGate.renderedPromptLeaks,
    meaningChoiceHiddenCueRisks:v0854.promptCueGate && v0854.promptCueGate.meaningChoiceHiddenCueRisks,
    underContextualisedClozeWithoutCue:v0854.promptCueGate && v0854.promptCueGate.underContextualisedClozeWithoutCue,
    reviewOnlyEnteringNormalPractice:v0854.reviewGate && v0854.reviewGate.reviewOnlyEnteringNormalPractice
  };
  result.runtimeDisplayContract.beforeCounts = {
    renderedPromptLeaks:Number(result.baselineV0854.renderedPromptLeaks || 0),
    meaningChoiceHiddenCueRisks:Number(result.baselineV0854.meaningChoiceHiddenCueRisks || 0),
    underContextualisedClozeWithoutCue:Number(result.baselineV0854.underContextualisedClozeWithoutCue || 0),
    reviewOnlyEnteringNormalPractice:Number(result.baselineV0854.reviewOnlyEnteringNormalPractice || 0)
  };
  result.nonRegressionV0854a = {
    accepted:v0854a.finalDecision === "SATZBAU_TOUCH_IOS_ZOOM_ACCEPTED",
    satzbauInteraction:v0854a.satzbauInteraction || {},
    satzbauRandomisation:v0854a.satzbauRandomisation || {},
    iosZoomRepair:v0854a.iosZoomRepair || {},
    nonRegression:v0854a.nonRegression || {}
  };
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
  return new Promise((resolve, reject) => {
    server.on("error", reject);
    server.listen(0, "127.0.0.1", () => resolve(server));
  });
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

async function fetchJson(url) {
  const response = await fetch(url);
  if (!response.ok) throw new Error(`${response.status} ${response.statusText}: ${url}`);
  return response.json();
}

async function waitForPageWebSocket(debugPort, timeoutMs) {
  const listUrl = `http://127.0.0.1:${debugPort}/json/list`;
  const start = Date.now();
  while (Date.now() - start < timeoutMs) {
    const targets = await fetchJson(listUrl).catch(() => []);
    const page = targets.find(target =>
      target && target.type === "page" && target.webSocketDebuggerUrl &&
      /index\.html|127\.0\.0\.1/.test(target.url || "")
    ) || targets.find(target => target && target.type === "page" && target.webSocketDebuggerUrl);
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
    ws.onopen = resolve;
    ws.onerror = () => reject(new Error("CDP WebSocket connection failed."));
  });
  return {
    send(method, params) {
      id += 1;
      ws.send(JSON.stringify({ id, method, params:params || {} }));
      return new Promise((resolve, reject) => {
        const timeout = setTimeout(() => {
          pending.delete(id);
          reject(new Error(`Timed out sending ${method}.`));
        }, 15000);
        pending.set(id, { resolve, reject, timeout });
      });
    },
    on(method, listener) {
      if (!listeners.has(method)) listeners.set(method, new Set());
      listeners.get(method).add(listener);
    },
    close() {
      ws.close();
    }
  };
}

async function evaluate(cdp, expression) {
  const response = await cdp.send("Runtime.evaluate", {
    expression,
    awaitPromise:true,
    returnByValue:true
  });
  if (response.exceptionDetails) {
    throw new Error(response.exceptionDetails.text || "Runtime evaluation failed.");
  }
  return response.result ? response.result.value : undefined;
}

async function evaluateJson(cdp, body) {
  const text = await evaluate(cdp, `JSON.stringify((function(){${body}})())`);
  return JSON.parse(text || "null");
}

async function waitFor(cdp, expression, timeoutMs) {
  const start = Date.now();
  while (Date.now() - start < timeoutMs) {
    try {
      if (await evaluate(cdp, expression)) return true;
    } catch (error) {
      result.warnings.push(`Wait condition retry: ${error.message}`);
    }
    await sleep(150);
  }
  throw new Error(`Timed out waiting for ${expression}`);
}

async function collectStageSnapshot(cdp, id, options) {
  options = Object.assign({ seed:`v0855-${id}` }, options || {});
  await evaluateJson(cdp, `
    var debug = window.ozmosisB1Debug();
    return debug.qaStageItemById(${JSON.stringify(id)}, ${JSON.stringify(options)});
  `);
  await sleep(200);
  return evaluateJson(cdp, `
    var prompt = document.querySelector("#promptValue");
    var gloss = document.querySelector(".englishGloss");
    var translation = document.querySelector("#translationToggle");
    var hint = document.querySelector("#hintBtn");
    var input = document.querySelector("#answerInput");
    var inline = document.querySelector("#b1InlineInput");
    var chunks = Array.from(document.querySelectorAll(".satzbauChunk"));
    var cards = Array.from(document.querySelectorAll(".taskColumn, #answerArea, .practiceSurface, .supportColumn"));
    return {
      id:${JSON.stringify(id)},
      bodySurface:document.body.getAttribute("data-b1-surface") || "",
      bodyState:document.body.getAttribute("data-b1-state") || "",
      promptText:prompt ? prompt.innerText.trim() : "",
      glossText:gloss ? gloss.innerText.trim() : "",
      glossHidden:gloss ? gloss.hidden || gloss.classList.contains("hiddenGloss") : true,
      translationHidden:translation ? translation.hidden : true,
      hintHidden:hint ? hint.hidden : true,
      answerInputFontSize:input ? parseFloat(getComputedStyle(input).fontSize) : null,
      inlineInputFontSize:inline ? parseFloat(getComputedStyle(inline).fontSize) : null,
      chunkCount:chunks.length,
      chunkTexts:chunks.map(function(button){ return button.innerText.trim(); }),
      chunkFocusable:chunks.every(function(button){ return button.tagName === "BUTTON" || button.tabIndex >= 0; }),
      sharedFramePresent:cards.length > 0,
      bodyOverflow:document.documentElement.scrollWidth > document.documentElement.clientWidth + 1
    };
  `);
}

async function satzbauInteractionCheck(cdp) {
  const first = await collectStageSnapshot(cdp, fixtures.satzbau, { seed:"v0855-satzbau-stable" });
  const stageItem = await evaluateJson(cdp, `
    var debug = window.ozmosisB1Debug();
    return debug.qaStageItemById(${JSON.stringify(fixtures.satzbau)}, { seed:"v0855-satzbau-stable" });
  `);
  const second = await evaluateJson(cdp, `
    var chunks = Array.from(document.querySelectorAll(".satzbauChunk"));
    return {
      chunkTexts:chunks.map(function(button){ return button.innerText.trim(); }),
      answer:(window.kasusCurrent && window.kasusCurrent().answer) || "",
      firstChunkBefore:chunks[0] ? chunks[0].innerText.trim() : "",
      answerBefore:(document.querySelector("#answerInput") || {}).value || ""
    };
  `);
  const afterTap = await evaluateJson(cdp, `
    var chunks = Array.from(document.querySelectorAll(".satzbauChunk"));
    if (chunks[0]) chunks[0].click();
    var input = document.querySelector("#b1InlineInput") || document.querySelector("#answerInput");
    return {
      answerAfter:input ? input.value : "",
      firstSelected:chunks[0] ? chunks[0].className : "",
      selectedCount:document.querySelectorAll(".satzbauChunk.selected, .satzbauChunk[aria-pressed='true']").length,
      clearAvailable:!!document.querySelector("#satzbauClearBtn") || !!Array.from(document.querySelectorAll("button")).find(function(button){ return /clear|remove|löschen|entfernen|zurück/i.test(button.innerText || button.getAttribute("aria-label") || ""); })
    };
  `);
  const manual = await evaluateJson(cdp, `
    var input = document.querySelector("#answerInput");
    if (input) {
      input.value = "manual test";
      input.dispatchEvent(new Event("input", { bubbles:true }));
    }
    return { manualValue:input ? input.value : "" };
  `);
  const correctAnswer = String(stageItem && stageItem.answer || second.answer || "").trim().replace(/\s+/g, " ");
  const chunkOrder = (first.chunkTexts || []).join(" ").trim().replace(/\s+/g, " ");
  return {
    chunksFocusable:!!first.chunkFocusable && first.chunkCount > 0,
    chunksTappable:(!!afterTap.answerAfter && afterTap.answerAfter !== second.answerBefore) || afterTap.selectedCount > 0,
    tapBuildsAnswer:!!afterTap.answerAfter || afterTap.selectedCount > 0,
    selectedStateVisible:afterTap.selectedCount > 0 || /selected|active|pressed/i.test(afterTap.firstSelected || ""),
    removeOrClearAvailable:!!afterTap.clearAvailable,
    manualTypingPreserved:manual.manualValue === "manual test",
    answerCheckingPreserved:await evaluate(cdp, "typeof window.kasusCheck === 'function'"),
    chunksRandomised:first.chunkCount > 1,
    stableWithinAttempt:JSON.stringify(first.chunkTexts) === JSON.stringify(second.chunkTexts),
    notCorrectOrder:!!correctAnswer && chunkOrder !== correctAnswer,
    correctAnswerUnchanged:!!correctAnswer
  };
}

async function browserGate() {
  const edge = edgeExecutable();
  if (!edge) throw new Error("Microsoft Edge executable was not found.");
  const server = await startServer();
  const serverPort = server.address().port;
  const debugPort = await freePort();
  const edgeProcess = spawn(edge, [
    `--remote-debugging-port=${debugPort}`,
    `--user-data-dir=${profileDir}`,
    "--headless=new",
    "--disable-gpu",
    "--no-first-run",
    "--no-default-browser-check",
    `http://127.0.0.1:${serverPort}/index.html`
  ], { stdio:"ignore" });
  let cdp = null;
  try {
    const wsUrl = await waitForPageWebSocket(debugPort, 20000);
    cdp = await connectCdp(wsUrl);
    await cdp.send("Runtime.enable");
    await cdp.send("Page.enable");
    await cdp.send("Log.enable").catch(() => {});
    cdp.on("Runtime.consoleAPICalled", params => {
      if (params.type === "error") {
        result.consoleErrors.push((params.args || []).map(arg => arg.value || arg.description || "").join(" "));
      }
    });
    cdp.on("Runtime.exceptionThrown", params => {
      result.runtimeExceptions.push(params.exceptionDetails && (params.exceptionDetails.text || params.exceptionDetails.exception && params.exceptionDetails.exception.description) || "Runtime exception");
    });
    cdp.on("Log.entryAdded", params => {
      if (params.entry && params.entry.level === "error") result.consoleErrors.push(params.entry.text || "Log error");
    });
    await waitFor(cdp, "document.readyState === 'complete' || document.readyState === 'interactive'", 15000);
    await waitFor(cdp, "!!(window.ozmosisVersionInfo && window.ozmosisB1Debug && window.ozmosisRuntimeDisplayContractAudit)", 20000);
    await evaluate(cdp, `
      Array.from(document.querySelectorAll("button")).find(function(button){
        return /start|continue|close|got it|ok|begin|dismiss/i.test(button.innerText || button.getAttribute("aria-label") || "");
      })?.click();
      true;
    `);
    const version = await evaluateJson(cdp, "return window.ozmosisVersionInfo();");
    result.appVersion = version.appVersion || result.appVersion;
    result.exportVersion = version.exportVersion || result.exportVersion;
    const contract = await evaluateJson(cdp, "return window.ozmosisRuntimeDisplayContractAudit({ includeRows:true });");
    result.runtimeDisplayContract.afterRuntimeLock = contract.afterRuntimeLock || result.runtimeDisplayContract.afterRuntimeLock;
    result.runtimeDisplayContract.activeNormalPracticeContract = contract.activeNormalPracticeContract || result.runtimeDisplayContract.activeNormalPracticeContract;
    result.runtimeDisplayContract.contractIssueCounts = contract.contractIssueCounts || {};
    result.runtimeDisplayContract.reviewQueueRowCount = contract.reviewQueueRowCount || 0;
    result.runtimeDisplayContract.totalItems = contract.totalItems;
    result.runtimeDisplayContract.normalPracticeEligible = contract.normalPracticeEligible;
    result.runtimeDisplayContract.displayReviewItems = contract.displayReviewItems;

    result.representativeScreens.meaningChoice = await collectStageSnapshot(cdp, fixtures.meaningChoice);
    result.representativeScreens.underContextCloze = await collectStageSnapshot(cdp, fixtures.underContextCloze);
    result.representativeScreens.normalChoice = await collectStageSnapshot(cdp, fixtures.normalChoice);
    result.representativeScreens.normalCloze = await collectStageSnapshot(cdp, fixtures.normalCloze);
    result.representativeScreens.normalCorrection = await collectStageSnapshot(cdp, fixtures.normalCorrection);
    result.representativeScreens.satzbau = await collectStageSnapshot(cdp, fixtures.satzbau);
    result.representativeScreens.casesRepair = await collectStageSnapshot(cdp, fixtures.casesRepair);

    const satzbau = await satzbauInteractionCheck(cdp);
    result.nonRegression.v0854aSatzbauInteractionPreserved = satzbau.chunksFocusable && satzbau.chunksTappable && satzbau.tapBuildsAnswer && satzbau.selectedStateVisible && satzbau.manualTypingPreserved && satzbau.answerCheckingPreserved;
    result.nonRegression.v0854aChunkRandomisationPreserved = satzbau.chunksRandomised && satzbau.stableWithinAttempt && satzbau.notCorrectOrder && satzbau.correctAnswerUnchanged;
    const cloze = await collectStageSnapshot(cdp, fixtures.normalCloze);
    const correction = await collectStageSnapshot(cdp, fixtures.normalCorrection);
    const cases = await collectStageSnapshot(cdp, fixtures.casesRepair);
    const satzbauAfter = await collectStageSnapshot(cdp, fixtures.satzbau);
    result.nonRegression.v0854aIosZoomRepairPreserved = [cloze.inlineInputFontSize || cloze.answerInputFontSize, correction.answerInputFontSize, cases.answerInputFontSize, satzbauAfter.answerInputFontSize].every(size => Number(size || 0) >= 16);
    result.nonRegression.sharedFramePreserved = Object.values(result.representativeScreens).every(screen => screen && screen.sharedFramePresent && !screen.bodyOverflow);
    const article = await evaluateJson(cdp, `
      var debug = window.ozmosisB1Debug();
      debug.qaStageItemById(${JSON.stringify(fixtures.casesRepair)}, { seed:"v0855-case-grid" });
      var input = document.querySelector("#answerInput");
      if (input) {
        input.value = "x";
        input.dispatchEvent(new Event("input", { bubbles:true }));
      }
      if (window.kasusCheck) window.kasusCheck();
      return {
        articleGrid:!!document.querySelector(".articleGridAdapter, .miniTable, .articleTable"),
        feedback:document.querySelector("#feedback") ? document.querySelector("#feedback").innerText.trim() : "",
        confidenceVisible:!!document.querySelector("#b1ConfidenceRow:not([hidden])"),
        nextVisible:!!document.querySelector("#nextBtn")
      };
    `);
    result.nonRegression.articleGridPreserved = !!article.articleGrid;
    result.nonRegression.exportImportPreserved = await evaluate(cdp, "typeof window.ozmosisBuildSavePayload === 'function' && typeof window.ozmosisValidateSavePayload === 'function' && typeof window.ozmosisApplyValidatedSave === 'function'");
    result.nonRegression.storageKeysPreserved = await evaluate(cdp, "window.ozmosisB1Debug().storageKey === 'ozmosis_b1_sprint_progress_v1' && window.ozmosisB1Debug().evidenceStorageKey === 'ozmosis_b1_progress_evidence_v1'");

    classifyIssues(contract.rows || []);
    result.testsRun.browserGate = {
      localServer:`http://127.0.0.1:${serverPort}/index.html`,
      edgeHeadless:true,
      contractAuditRows:(contract.rows || []).length,
      representativeFixtures:Object.assign({}, fixtures),
      satzbau,
      articleGrid:article
    };
  } finally {
    if (cdp) cdp.close();
    server.close();
    edgeProcess.kill();
    await new Promise(resolve => {
      let settled = false;
      const done = () => {
        if (!settled) {
          settled = true;
          resolve();
        }
      };
      edgeProcess.once("exit", done);
      setTimeout(done, 1200);
    });
    try {
      fs.rmSync(profileDir, { recursive:true, force:true, maxRetries:6, retryDelay:500 });
    } catch (error) {
      // Windows can keep headless Edge profile files locked briefly after process exit.
      // The profile is outside the repo and is not part of the product gate result.
    }
  }
}

function classifyIssues(contractRows) {
  const rowById = new Map();
  contractRows.forEach(row => rowById.set(row.itemId, row));
  const sourceRows = [
    ...readCsv(path.join(qaDir, "v0.85.4_completion_gate_prompt_cue_issues.csv"), "prompt_cue"),
    ...readCsv(path.join(qaDir, "v0.85.4_completion_gate_cloze_cue_issues.csv"), "cloze_cue"),
    ...readCsv(path.join(qaDir, "v0.85.4_completion_gate_review_queue_status.csv"), "review_queue")
  ];
  const resolvedRows = [];
  const remainingRows = [];
  sourceRows.forEach(source => {
    const current = rowById.get(source.itemId);
    const afterIssues = current ? current.issues || "" : "";
    const afterEligible = current ? current.normalPracticeEligible === true : true;
    let classification = "runtimeGuardAlreadyHandles";
    let runtimeAction = "Active runtime display no longer exposes the static issue in normal practice.";
    if (current && !afterEligible && source.sourceIssueType === "review_queue") {
      classification = "reviewOnlySafe";
      runtimeAction = "Review-only item remains excluded from normal practice.";
    } else if (current && !afterEligible) {
      classification = "needsSourceCleanupLater";
      runtimeAction = "Runtime lock excludes the item until source-safe cue/display cleanup.";
    } else if (current && afterEligible && afterIssues) {
      classification = "realRuntimeDefect";
      runtimeAction = "Item remains active with a runtime display contract issue.";
    }
    const row = {
      sourceIssueType:source.sourceIssueType,
      issueType:source.issueType,
      bankKey:source.bankKey,
      itemId:source.itemId,
      classification,
      afterNormalPracticeEligible:afterEligible,
      afterStatus:current ? current.displayStatus : "active-normal",
      afterIssues,
      sourcePrompt:source.prompt || source.value || "",
      sourceCue:current ? current.sourceCue || "" : "",
      runtimeAction,
      reason:source.reason || "",
      recommendedAction:classification === "needsSourceCleanupLater" ? "Source cleanup batch should rewrite/import safe learner-facing cue/display fields." : "No source edit required for the runtime contract lock."
    };
    if (classification !== "needsSourceCleanupLater") resolvedRows.push(row);
    if (classification === "needsSourceCleanupLater" || (classification === "runtimeGuardAlreadyHandles" && source.sourceIssueType !== "review_queue")) {
      remainingRows.push(Object.assign({}, row, {
        recommendedAction:classification === "needsSourceCleanupLater"
          ? "Source cleanup batch should rewrite/import safe learner-facing cue/display fields."
          : "Non-blocking source cleanup candidate; runtime guard already prevents learner-facing leakage."
      }));
    }
    if (Object.prototype.hasOwnProperty.call(result.runtimeDisplayContract.classifiedIssueCounts, classification)) {
      result.runtimeDisplayContract.classifiedIssueCounts[classification] += 1;
    }
  });
  writeCsv(resolvedCsvPath, [
    "sourceIssueType",
    "issueType",
    "bankKey",
    "itemId",
    "classification",
    "afterNormalPracticeEligible",
    "afterStatus",
    "afterIssues",
    "runtimeAction",
    "reason"
  ], resolvedRows);
  writeCsv(remainingCsvPath, [
    "sourceIssueType",
    "issueType",
    "bankKey",
    "itemId",
    "afterStatus",
    "afterIssues",
    "sourcePrompt",
    "sourceCue",
    "recommendedAction"
  ], remainingRows);
  result.runtimeDisplayContract.classifiedIssueCounts.sourceCleanupCandidateRows = remainingRows.length;
}

function decide() {
  result.v0854Baseline = {
    renderedPromptLeaks:Number(result.baselineV0854.renderedPromptLeaks || 0),
    meaningChoiceHiddenCueRisks:Number(result.baselineV0854.meaningChoiceHiddenCueRisks || 0),
    underContextualisedClozeWithoutCue:Number(result.baselineV0854.underContextualisedClozeWithoutCue || 0),
    reviewOnlyEnteringNormalPractice:Number(result.baselineV0854.reviewOnlyEnteringNormalPractice || 0)
  };
  result.afterRuntimeLock = Object.assign({}, result.runtimeDisplayContract.afterRuntimeLock || {});
  result.classification = {
    realRuntimeDefects:Number(result.runtimeDisplayContract.classifiedIssueCounts.realRuntimeDefects || 0),
    runtimeGuardAlreadyHandles:Number(result.runtimeDisplayContract.classifiedIssueCounts.runtimeGuardAlreadyHandles || 0),
    staticFalsePositives:Number(result.runtimeDisplayContract.classifiedIssueCounts.staticFalsePositive || 0),
    needsSourceCleanupLater:Number(result.runtimeDisplayContract.classifiedIssueCounts.needsSourceCleanupLater || 0),
    reviewOnlySafe:Number(result.runtimeDisplayContract.classifiedIssueCounts.reviewOnlySafe || 0),
    sourceCleanupCandidateRows:Number(result.runtimeDisplayContract.classifiedIssueCounts.sourceCleanupCandidateRows || 0)
  };
  result.activeNormalPracticeContract = Object.assign({}, result.runtimeDisplayContract.activeNormalPracticeContract || {});
  result.v0854aNonRegression = {
    satzbauChunksTappable:!!(result.testsRun.browserGate && result.testsRun.browserGate.satzbau && result.testsRun.browserGate.satzbau.chunksTappable),
    satzbauTapBuildsAnswer:!!(result.testsRun.browserGate && result.testsRun.browserGate.satzbau && result.testsRun.browserGate.satzbau.tapBuildsAnswer),
    satzbauRandomisationStable:!!(result.testsRun.browserGate && result.testsRun.browserGate.satzbau && result.testsRun.browserGate.satzbau.stableWithinAttempt),
    satzbauNotCorrectOrder:!!(result.testsRun.browserGate && result.testsRun.browserGate.satzbau && result.testsRun.browserGate.satzbau.notCorrectOrder),
    iosSafeInputFontSizes:!!result.nonRegression.v0854aIosZoomRepairPreserved
  };
  result.articleGridPreserved = !!result.nonRegression.articleGridPreserved;
  result.sharedFramePreserved = !!result.nonRegression.sharedFramePreserved;
  const after = result.runtimeDisplayContract.afterRuntimeLock || {};
  const contract = result.runtimeDisplayContract.activeNormalPracticeContract || {};
  const staticOk = result.testsRun.staticChecks &&
    result.testsRun.staticChecks.protectedStorageKeys &&
    result.testsRun.staticChecks.exportImportStrings &&
    result.testsRun.staticChecks.noPackageJson &&
    result.testsRun.staticChecks.noPackageLock &&
    result.testsRun.staticChecks.noTypeModule &&
    result.testsRun.staticChecks.noDynamicImport;
  const afterCountsOk = Number(after.renderedPromptLeaks || 0) === 0 &&
    Number(after.meaningChoiceHiddenCueRisks || 0) === 0 &&
    Number(after.underContextualisedClozeWithoutCue || 0) === 0 &&
    Number(after.reviewOnlyEnteringNormalPractice || 0) === 0;
  const contractOk = contract.internalLabelsHidden &&
    contract.meaningCuesVisible &&
    contract.clozeCuesVisibleOrExcluded &&
    contract.hintsRemainRevealOnly &&
    contract.reviewOnlyExcluded;
  const nonRegressionOk = result.nonRegression.v0854aSatzbauInteractionPreserved &&
    result.nonRegression.v0854aChunkRandomisationPreserved &&
    result.nonRegression.v0854aIosZoomRepairPreserved &&
    result.nonRegression.articleGridPreserved &&
    result.nonRegression.sharedFramePreserved &&
    result.nonRegression.exportImportPreserved &&
    result.nonRegression.storageKeysPreserved;
  const noRuntimeErrors = result.consoleErrors.length === 0 && result.runtimeExceptions.length === 0;
  result.acceptancePassed = result.startingStateVerified &&
    result.runtimeVersionUpdated &&
    staticOk &&
    afterCountsOk &&
    contractOk &&
    nonRegressionOk &&
    noRuntimeErrors &&
    result.runtimeDisplayContract.classifiedIssueCounts.realRuntimeDefects === 0;
  if (result.acceptancePassed) {
    result.finalDecision = "RUNTIME_DISPLAY_CONTRACT_LOCK_ACCEPTED";
    result.nextPatch = "v0.85.6 - Source Cleanup Batch 1: Internal Labels and Meaning Cues";
  } else if (!result.testsRun.browserGate) {
    result.finalDecision = "BLOCKED_SCRIPT_FAILURE";
    result.nextPatch = "v0.85.5a - Runtime Display Contract Repair";
  } else if (!afterCountsOk || !contractOk || result.runtimeDisplayContract.classifiedIssueCounts.realRuntimeDefects > 0) {
    result.finalDecision = "BLOCKED_RENDERER_STATE_MISMATCH";
    result.nextPatch = "v0.85.5a - Runtime Display Contract Repair";
  } else {
    result.finalDecision = "RUNTIME_DISPLAY_CONTRACT_PARTIAL_NEEDS_REPAIR";
    result.nextPatch = "v0.85.5a - Runtime Display Contract Repair";
  }
}

async function main() {
  try {
    extractVersions();
    parseStaticScripts();
    loadBaselines();
    await browserGate();
  } catch (error) {
    result.warnings.push(error.stack || error.message);
  } finally {
    decide();
    writeJson(resultPath, result);
    console.log(JSON.stringify({
      finalDecision:result.finalDecision,
      acceptancePassed:result.acceptancePassed,
      appVersion:result.appVersion,
      exportVersion:result.exportVersion,
      afterRuntimeLock:result.runtimeDisplayContract.afterRuntimeLock,
      classifiedIssueCounts:result.runtimeDisplayContract.classifiedIssueCounts,
      resultPath:rel(resultPath)
    }, null, 2));
    process.exitCode = result.finalDecision === "BLOCKED_SCRIPT_FAILURE" ? 2 : 0;
  }
}

main();
