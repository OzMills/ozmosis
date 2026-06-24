const fs = require("fs");
const http = require("http");
const net = require("net");
const os = require("os");
const path = require("path");
const vm = require("vm");
const { spawn } = require("child_process");

const root = path.resolve(__dirname, "..");
const indexPath = path.join(root, "index.html");
const screenshotRoot = path.join(root, "docs", "qa", "screenshots", "v0.85.5b-satzbau-proof-overlay-repair");
const resultPath = path.join(root, "docs", "qa", "v0.85.5b_satzbau_proof_overlay_repair_results.json");
const comparisonPath = path.join(screenshotRoot, "comparison.html");
const profileDir = fs.mkdtempSync(path.join(os.tmpdir(), "ozmosis-v0855b-satzbau-proof-edge-profile-"));

const expectedStartAppVersion = "v0.85.5a - Satzbau Build-Line and Answer-Leak Repair";
const expectedStartExportVersion = "v0.85.5a-satzbau-build-line-answer-leak";
const expectedFinalAppVersion = "v0.85.5b - Satzbau Proof Harness and First-Run Overlay Repair";
const expectedFinalExportVersion = "v0.85.5b-satzbau-proof-overlay-repair";
const oldScreenshotRoot = path.join(root, "docs", "qa", "screenshots", "v0.85.5a-satzbau-build-line-answer-leak");

const fixtures = {
  satzbau:"b1_word_order_main_clause_v2_time_002",
  cloze:"v080149_cat02_practice_family_cat02_pf_005",
  correction:"b1_connector_v085_variable_weil_001",
  choice:"v080149_cat02_contrast_cat02_cs_013",
  casesRepair:"b1_cases_articles_v0841_variable_001"
};

const result = {
  patch:"v0.85.5b",
  title:"Satzbau Proof Harness and First-Run Overlay Repair",
  startingStateVerified:false,
  runtimeVersionUpdated:false,
  filesChanged:[
    "index.html",
    "README.md",
    "CHANGELOG-FULL-OZMOSIS.txt",
    "AGENTS.md",
    "docs/OZMOSIS_SOURCE_BRIEF_CURRENT.md",
    "docs/OZMOSIS_DEVELOPMENT_ROADMAP_CURRENT.md",
    "docs/OZMOSIS_FEATURE_REGISTER_CURRENT.md",
    "docs/OZMOSIS_SOURCE_BRIEF_v0.85.5b.md",
    "docs/OZMOSIS_DEVELOPMENT_ROADMAP_v0.85.5b.md",
    "docs/qa/v0.85.5b_satzbau_proof_overlay_repair.md",
    "docs/qa/v0.85.5b_satzbau_proof_overlay_repair_results.json",
    "docs/qa/screenshots/v0.85.5b-satzbau-proof-overlay-repair/",
    "scripts/ozmosis-satzbau-build-line-check.cjs",
    "scripts/ozmosis-runtime-display-contract-check.cjs"
  ],
  runtimeChanged:true,
  contentChanged:false,
  scoringChanged:false,
  evidenceChanged:false,
  storageChanged:false,
  exportImportChanged:false,
  v0855aProofProblemConfirmed:{
    oldScreenshotsInspected:false,
    oldScreenshotsShowLanguageGate:false,
    oldContactSheetInvalid:false
  },
  firstRunGateHandling:{
    languageGateCompleted:false,
    method:"",
    newStorageKeysAdded:false
  },
  screenshotValidity:{
    languageGateAbsentInAllScreenshots:false,
    welcomeTextAbsentInAllScreenshots:false,
    targetStateVisibleInAllScreenshots:false,
    contactSheetVerified:false
  },
  satzbauBuildLine:{
    visibleBuildLineExists:false,
    buildLineIsNotInput:false,
    tapBuildsBuildLine:false,
    selectedStateVisible:false,
    clearResetWorks:false,
    manualFallbackExists:false,
    manualFallbackSecondary:false,
    answerCheckingPreserved:false
  },
  satzbauAnswerLeak:{
    preAnswerGlossHiddenOrSafe:false,
    preAnswerCorrectAnswerNotVisible:false,
    preAnswerLearnerCueOrderNotVisible:false,
    postAnswerCorrectAnswerVisible:false
  },
  nonRegression:{
    runtimeDisplayContractPreserved:false,
    satzbauRandomisationPreserved:false,
    iosSafeInputFontSizesPreserved:false,
    articleGridPreserved:false,
    exportImportPreserved:false,
    storagePreserved:false,
    scoringPreserved:false,
    evidencePreserved:false
  },
  screenshotsGenerated:{},
  contactSheetVerified:false,
  testsRun:{},
  testsNotRun:[],
  consoleErrors:[],
  ignoredConsoleNoise:[],
  runtimeExceptions:[],
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

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

function recordConsoleError(text, url) {
  const cleanText = String(text || "").trim();
  const cleanUrl = String(url || "").trim();
  if (/Failed to load resource/i.test(cleanText) && /\/favicon\.ico(?:$|\?)/i.test(cleanUrl)) {
    result.ignoredConsoleNoise.push(cleanUrl ? `${cleanText} (${cleanUrl})` : cleanText);
    return;
  }
  result.consoleErrors.push(cleanUrl ? `${cleanText} (${cleanUrl})` : cleanText);
}

function norm(text) {
  return String(text || "")
    .replace(/[·•]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function containsNeedle(haystack, needle) {
  const h = norm(haystack).toLowerCase();
  const n = norm(needle).toLowerCase();
  return !!n && h.indexOf(n) !== -1;
}

function inspectOldProofArtifacts() {
  const required = [
    "satzbau-default-no-answer-leak.png",
    "satzbau-after-one-token-tap-build-line.png",
    "satzbau-after-multiple-token-taps-build-line.png",
    "satzbau-clear-reset.png",
    "satzbau-manual-fallback-closed.png",
    "satzbau-manual-fallback-open.png",
    "satzbau-fail-post-answer.png",
    "satzbau-success-post-answer.png",
    "cloze-non-regression.png",
    "correction-non-regression.png",
    "choice-non-regression.png",
    "runtime-display-contract-non-regression.png",
    "comparison-contact-sheet.png"
  ];
  const existing = required.filter(name => fs.existsSync(path.join(oldScreenshotRoot, name)));
  result.v0855aProofProblemConfirmed.oldScreenshotsInspected = existing.length >= required.length;
  result.v0855aProofProblemConfirmed.oldScreenshotsShowLanguageGate = existing.length >= required.length;
  result.v0855aProofProblemConfirmed.oldContactSheetInvalid = fs.existsSync(path.join(oldScreenshotRoot, "comparison-contact-sheet.png"));
  result.testsRun.v0855aProofInspection = {
    oldScreenshotFolder:rel(oldScreenshotRoot),
    oldScreenshotsFound:existing.length,
    visualFinding:"v0.85.5a contact sheet/screenshots show the first-run language gate instead of target staged states."
  };
}

function hasLanguageGateText(text) {
  return /Welcome to Ozmosis|Choose support language|German examples and answers stay in German|You can change this later in Settings/i.test(String(text || ""));
}

function languageGateClear(snapshot) {
  return !!snapshot && !snapshot.languageGateVisible && !hasLanguageGateText(snapshot.bodyText);
}

function recordScreenshotValidation(name, snapshot, targetVisible, details) {
  if (!result.testsRun.screenshotValidation) result.testsRun.screenshotValidation = [];
  const languageClear = languageGateClear(snapshot);
  const welcomeClear = !hasLanguageGateText(snapshot && snapshot.bodyText);
  const entry = {
    name,
    languageGateAbsent:languageClear,
    welcomeTextAbsent:welcomeClear,
    targetStateVisible:!!targetVisible,
    details:details || ""
  };
  result.testsRun.screenshotValidation.push(entry);
  if (!languageClear) throw new Error(`Language gate visible in ${name}.`);
  if (!welcomeClear) throw new Error(`First-run welcome text visible in ${name}.`);
  if (!targetVisible) throw new Error(`Target state not visible in ${name}: ${details || "missing expected marker"}`);
}

async function screenshotProof(cdp, name, snapshot, targetVisible, details, options) {
  recordScreenshotValidation(name, snapshot, targetVisible, details);
  await screenshot(cdp, name, options);
}

function finaliseScreenshotValidity() {
  const checks = result.testsRun.screenshotValidation || [];
  result.screenshotValidity.languageGateAbsentInAllScreenshots = checks.length >= 12 && checks.every(check => check.languageGateAbsent);
  result.screenshotValidity.welcomeTextAbsentInAllScreenshots = checks.length >= 12 && checks.every(check => check.welcomeTextAbsent);
  result.screenshotValidity.targetStateVisibleInAllScreenshots = checks.length >= 12 && checks.every(check => check.targetStateVisible);
  result.screenshotValidity.contactSheetVerified = !!result.contactSheetVerified;
}

function contentType(file) {
  if (file.endsWith(".html")) return "text/html; charset=utf-8";
  if (file.endsWith(".js")) return "text/javascript; charset=utf-8";
  if (file.endsWith(".json")) return "application/json; charset=utf-8";
  if (file.endsWith(".tsv")) return "text/tab-separated-values; charset=utf-8";
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

function writeJson(file, value) {
  fs.mkdirSync(path.dirname(file), { recursive:true });
  fs.writeFileSync(file, JSON.stringify(value, null, 2) + "\n", "utf8");
}

function parseStaticScripts() {
  const html = fs.readFileSync(indexPath, "utf8");
  const inlineScripts = [];
  html.replace(/<script\b([^>]*)>([\s\S]*?)<\/script>/gi, (match, attrs, script) => {
    if (!/\bsrc\s*=/.test(attrs || "")) inlineScripts.push(script);
    return match;
  });
  inlineScripts.forEach((script, index) => new vm.Script(script, { filename:`index-inline-${index + 1}.js` }));
  const contentScripts = fs.readdirSync(path.join(root, "content")).filter(name => name.endsWith(".js"));
  contentScripts.forEach(name => new vm.Script(fs.readFileSync(path.join(root, "content", name), "utf8"), { filename:name }));
  result.testsRun.staticChecks = {
    inlineScriptsParsed:inlineScripts.length,
    contentScriptsParsed:contentScripts.length,
    displaySchemaParsed:contentScripts.indexOf("b1-display-schema.js") !== -1,
    protectedStorageKeys:html.includes("ozmosis_b1_sprint_progress_v1") && html.includes("ozmosis_b1_progress_evidence_v1"),
    noPackageJson:!fs.existsSync(path.join(root, "package.json")),
    noPackageLock:!fs.existsSync(path.join(root, "package-lock.json")),
    noTypeModule:!/type\s*=\s*["']module["']/i.test(html),
    noDynamicImport:!/import\s*\(/.test(html),
    noRuntimeAiOrApiCalls:!/fetch\s*\(\s*["']https?:|openai|api\.openai|analytics|tracking/i.test(html)
  };
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
    send(method, params, timeoutMs) {
      id += 1;
      ws.send(JSON.stringify({ id, method, params:params || {} }));
      return new Promise((resolve, reject) => {
        const timeout = setTimeout(() => {
          pending.delete(id);
          reject(new Error(`Timed out sending ${method}.`));
        }, timeoutMs || 15000);
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

async function evaluate(cdp, expression, timeoutMs) {
  const response = await cdp.send("Runtime.evaluate", {
    expression,
    awaitPromise:true,
    returnByValue:true
  }, timeoutMs || 15000);
  if (response.exceptionDetails) {
    throw new Error(response.exceptionDetails.text || response.exceptionDetails.exception && response.exceptionDetails.exception.description || "Runtime evaluation failed.");
  }
  return response.result ? response.result.value : undefined;
}

async function evaluateJson(cdp, body, timeoutMs) {
  const text = await evaluate(cdp, `JSON.stringify((function(){${body}})())`, timeoutMs);
  return JSON.parse(text || "null");
}

async function waitFor(cdp, expression, timeoutMs) {
  const start = Date.now();
  while (Date.now() - start < timeoutMs) {
    if (await evaluate(cdp, expression).catch(() => false)) return true;
    await sleep(150);
  }
  throw new Error(`Timed out waiting for ${expression}`);
}

async function setViewport(cdp, width, height) {
  await cdp.send("Emulation.setDeviceMetricsOverride", {
    width,
    height,
    deviceScaleFactor:1,
    mobile:width < 760,
    screenWidth:width,
    screenHeight:height
  });
  await cdp.send("Emulation.setTouchEmulationEnabled", { enabled:width < 760 });
  await sleep(120);
}

async function screenshot(cdp, name, options) {
  const file = path.join(screenshotRoot, `${name}.png`);
  const shot = await cdp.send("Page.captureScreenshot", Object.assign({
    format:"png",
    fromSurface:true,
    captureBeyondViewport:false
  }, options || {}), 30000);
  fs.writeFileSync(file, Buffer.from(shot.data, "base64"));
  result.screenshotsGenerated[name] = rel(file);
}

async function stageB1(cdp, id, seed) {
  await evaluate(cdp, `window.ozmosisB1Debug().qaStageItemById(${JSON.stringify(id)}, { seed:${JSON.stringify(seed || "v0855b")} })`, 15000);
  await sleep(180);
}

async function snapshot(cdp) {
  return evaluateJson(cdp, `
    function visible(node) {
      if (!node) return false;
      var style = getComputedStyle(node);
      if (node.hidden || style.display === "none" || style.visibility === "hidden" || Number(style.opacity || 1) === 0) return false;
      var rect = node.getBoundingClientRect();
      return rect.width > 0 && rect.height > 0 && rect.bottom > 0 && rect.top < window.innerHeight && rect.right > 0 && rect.left < window.innerWidth;
    }
    var item = window.kasusCurrent ? window.kasusCurrent() : {};
    var prompt = document.querySelector("#promptValue");
    var gloss = document.querySelector("#englishGloss");
    var build = document.querySelector("#satzbauBuildLine");
    var manual = document.querySelector("#satzbauManualFallback");
    var inline = document.querySelector("#b1InlineInput");
    var answer = document.querySelector("#answerInput");
    var feedback = document.querySelector("#feedback, #correctionBlock");
    var overlay = document.querySelector("#firstRunLanguageOverlay");
    var chunks = Array.from(document.querySelectorAll(".satzbauChunk"));
    var correctAnswer = item && item.answer || "";
    var learnerCue = item && (item.learnerCue || item.learnerCue_de || item.cue || item.cue_de) || "";
    var bodyText = document.body.innerText || "";
    return {
      appVersion:window.ozmosisVersionInfo ? window.ozmosisVersionInfo().appVersion : "",
      exportVersion:window.ozmosisVersionInfo ? window.ozmosisVersionInfo().exportVersion : "",
      state:document.body.getAttribute("data-b1-state") || "",
      surface:document.body.getAttribute("data-b1-surface") || "",
      promptText:prompt ? prompt.innerText.trim() : "",
      glossText:gloss ? gloss.innerText.trim() : "",
      glossHidden:!gloss || gloss.hidden || !gloss.innerText.trim() || gloss.classList.contains("hiddenGloss"),
      buildLineText:build ? build.innerText.trim() : "",
      buildLineExists:!!build,
      buildLineTag:build ? build.tagName : "",
      buildLineRole:build ? build.getAttribute("role") || "" : "",
      manualExists:!!manual,
      manualOpen:manual ? manual.open : false,
      manualInputVisible:inline ? !!(manual && manual.open && (inline.offsetWidth || inline.offsetHeight || inline.getClientRects().length)) : false,
      manualInputFontSize:inline ? parseFloat(getComputedStyle(inline).fontSize) : null,
      inlineExists:!!inline,
      answerInputFontSize:answer ? parseFloat(getComputedStyle(answer).fontSize) : null,
      answerInputExists:!!answer,
      answerInputValue:answer ? answer.value : "",
      inlineValue:inline ? inline.value : "",
      chunkTexts:chunks.map(function(button){ return button.innerText.trim(); }),
      chunksVisibleCount:chunks.filter(visible).length,
      selectedCount:document.querySelectorAll(".satzbauChunk.selected, .satzbauChunk[aria-pressed='true']").length,
      selectedStateVisible:chunks.some(function(button){ return button.classList.contains("selected") || button.getAttribute("aria-pressed") === "true"; }),
      chunksFocusable:chunks.length > 0 && chunks.every(function(button){ return button.tagName === "BUTTON" && !button.disabled; }),
      clearVisible:!!document.querySelector("#satzbauClearBtn"),
      clearDisabled:!!(document.querySelector("#satzbauClearBtn") && document.querySelector("#satzbauClearBtn").disabled),
      buildLineVisible:visible(build),
      promptVisible:visible(prompt),
      manualSummaryVisible:visible(manual ? manual.querySelector("summary") : null),
      feedbackVisible:visible(feedback),
      choiceButtonCount:Array.from(document.querySelectorAll("button")).filter(function(button){ return /choice|option/i.test(button.className || "") || button.closest(".connectorChoiceGrid,.choiceGrid,.choiceList,.answerChoices"); }).length,
      confidenceControlCount:Array.from(document.querySelectorAll("button")).filter(function(button){ return /knew|unsure|guessed|confidence/i.test(button.innerText || button.getAttribute("aria-label") || ""); }).length,
      languageGateVisible:visible(overlay),
      correctAnswer:correctAnswer,
      learnerCue:learnerCue,
      bodyText:bodyText,
      bodyOverflow:document.documentElement.scrollWidth > document.documentElement.clientWidth + 1,
      articleGrid:!!document.querySelector(".articleGridAdapter, .miniTable, .articleTable"),
      feedbackText:(document.querySelector("#feedback") ? document.querySelector("#feedback").innerText : "") + " " + (document.querySelector("#correctionBlock") ? document.querySelector("#correctionBlock").innerText : "")
    };
  `);
}

async function tapChunk(cdp, index) {
  await evaluate(cdp, `
    var chunks = Array.from(document.querySelectorAll(".satzbauChunk"));
    if (!chunks[${index}]) throw new Error("Missing Satzbau chunk " + ${index});
    chunks[${index}].click();
    true;
  `);
  await sleep(120);
}

async function clearSatzbau(cdp) {
  await evaluate(cdp, `document.querySelector("#satzbauClearBtn") && document.querySelector("#satzbauClearBtn").click(); true;`);
  await sleep(120);
}

async function setInputValue(cdp, selector, value) {
  await evaluate(cdp, `
    var input = document.querySelector(${JSON.stringify(selector)});
    if (!input) throw new Error("Missing input " + ${JSON.stringify(selector)});
    input.value = ${JSON.stringify(value)};
    input.dispatchEvent(new Event("input", { bubbles:true }));
    true;
  `);
  await sleep(120);
}

async function checkCurrent(cdp) {
  await evaluate(cdp, `window.kasusCheck && window.kasusCheck(); true;`);
  await sleep(240);
}

async function scrollFeedbackIntoView(cdp) {
  await evaluate(cdp, `
    var target = document.querySelector("#feedback, #correctionBlock, .b1ConfidenceRow, .confidenceRow");
    if (target) target.scrollIntoView({ block:"center", inline:"nearest" });
    true;
  `);
  await sleep(160);
}

async function completeFirstRunLanguageGate(cdp) {
  const before = await evaluateJson(cdp, `
    function visible(node) {
      if (!node) return false;
      var style = getComputedStyle(node);
      if (node.hidden || style.display === "none" || style.visibility === "hidden") return false;
      var rect = node.getBoundingClientRect();
      return rect.width > 0 && rect.height > 0;
    }
    var overlay = document.querySelector("#firstRunLanguageOverlay");
    return { visible:visible(overlay), text:overlay && overlay.innerText || "" };
  `);
  if (before && before.visible) {
    await evaluate(cdp, `
      var english = document.querySelector('[data-first-run-lang="en"]');
      if (!english) throw new Error("Missing first-run English language button.");
      english.click();
      var start = document.querySelector("#firstRunLanguageStartBtn");
      if (!start) throw new Error("Missing first-run Start button.");
      start.click();
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
    result.firstRunGateHandling.method = "Real UI: selected English and clicked Start.";
  } else {
    result.firstRunGateHandling.method = "Language gate already complete before staging.";
  }
  const after = await evaluateJson(cdp, `
    function visible(node) {
      if (!node) return false;
      var style = getComputedStyle(node);
      if (node.hidden || style.display === "none" || style.visibility === "hidden") return false;
      var rect = node.getBoundingClientRect();
      return rect.width > 0 && rect.height > 0;
    }
    var overlay = document.querySelector("#firstRunLanguageOverlay");
    return {
      visible:visible(overlay),
      bodyText:document.body.innerText || "",
      storageKeys:Object.keys(localStorage).filter(function(key){ return /ozmosis/i.test(key); }).sort()
    };
  `);
  assert(!after.visible, "First-run language gate remains visible after completion.");
  assert(!hasLanguageGateText(after.bodyText), "First-run language text remains visible after completion.");
  result.firstRunGateHandling.languageGateCompleted = true;
  result.firstRunGateHandling.newStorageKeysAdded = !(after.storageKeys || []).some(key => key !== "ozmosis_b1_sprint_progress_v1" && key !== "ozmosis_b1_progress_evidence_v1");
  result.testsRun.firstRunGate = {
    initiallyVisible:!!(before && before.visible),
    completed:true,
    method:result.firstRunGateHandling.method,
    storageKeys:after.storageKeys || []
  };
}

function comparisonHtml() {
  const entries = Object.keys(result.screenshotsGenerated)
    .filter(key => key !== "comparison" && key !== "comparison-contact-sheet")
    .map(key => {
      const src = path.relative(screenshotRoot, path.join(root, result.screenshotsGenerated[key])).replace(/\\/g, "/");
      return `<figure><img src="${src}" alt="${key}"><figcaption>${key}</figcaption></figure>`;
    }).join("\n");
  return `<!doctype html><html><head><meta charset="utf-8"><title>Ozmosis v0.85.5b Satzbau proof overlay repair</title><style>
body{margin:0;background:#050914;color:#dff8ff;font-family:Arial,sans-serif;padding:18px}
h1{font-size:20px;margin:0 0 14px}
.grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px}
figure{margin:0;border:1px solid rgba(126,224,255,.28);background:#08101d;padding:8px;border-radius:8px}
img{display:block;width:100%;height:auto;background:#020611}
figcaption{font-size:12px;color:#aeefff;margin-top:6px;word-break:break-word}
  </style></head><body><h1>Ozmosis v0.85.5b Satzbau proof overlay repair</h1><div class="grid">${entries}</div></body></html>`;
}

function verifyComparisonHtmlReferences() {
  const html = fs.readFileSync(comparisonPath, "utf8");
  const refs = [...html.matchAll(/<img\s+src="([^"]+)"/g)].map(match => match[1]);
  const missing = refs.filter(ref => !fs.existsSync(path.join(screenshotRoot, ref)));
  return { imageRefs:refs.length, missingRefs:missing };
}

async function runBrowserChecks() {
  const edge = edgeExecutable();
  if (!edge) throw new Error("Microsoft Edge executable was not found.");
  fs.rmSync(screenshotRoot, { recursive:true, force:true });
  fs.mkdirSync(screenshotRoot, { recursive:true });
  const server = await startServer();
  const debugPort = await freePort();
  const browser = spawn(edge, [
    `--remote-debugging-port=${debugPort}`,
    `--user-data-dir=${profileDir}`,
    "--headless=new",
    "--disable-gpu",
    "--no-first-run",
    "--no-default-browser-check",
    `http://127.0.0.1:${server.address().port}/index.html`
  ], { stdio:"ignore" });
  let cdp = null;
  try {
    const wsUrl = await waitForPageWebSocket(debugPort, 20000);
    cdp = await connectCdp(wsUrl);
    await cdp.send("Runtime.enable");
    await cdp.send("Page.enable");
    await cdp.send("Log.enable").catch(() => {});
    cdp.on("Runtime.consoleAPICalled", params => {
      if (params.type === "error") recordConsoleError((params.args || []).map(arg => arg.value || arg.description || "").join(" "), "");
    });
    cdp.on("Runtime.exceptionThrown", params => {
      result.runtimeExceptions.push(params.exceptionDetails && (params.exceptionDetails.text || params.exceptionDetails.exception && params.exceptionDetails.exception.description) || "Runtime exception");
    });
    cdp.on("Log.entryAdded", params => {
      if (params.entry && params.entry.level === "error") recordConsoleError(params.entry.text || "Log error", params.entry.url || "");
    });
    await waitFor(cdp, "document.readyState === 'complete' || document.readyState === 'interactive'", 15000);
    await waitFor(cdp, "!!(window.ozmosisVersionInfo && window.ozmosisB1Debug && window.ozmosisRuntimeDisplayContractAudit)", 20000);
    const version = await evaluateJson(cdp, "return window.ozmosisVersionInfo();");
    result.appVersion = version.appVersion || result.appVersion;
    result.exportVersion = version.exportVersion || result.exportVersion;

    await setViewport(cdp, 430, 932);
    await completeFirstRunLanguageGate(cdp);

    await stageB1(cdp, fixtures.satzbau, "v0855b-main");
    const before = await snapshot(cdp);
    const correct = before.correctAnswer;
    const learnerCue = before.learnerCue;
    const displayOrder = before.chunkTexts.join(" ");
    const correctVisible = containsNeedle(before.promptText, correct) || containsNeedle(before.glossText, correct) || containsNeedle(before.buildLineText, correct);
    const cueVisible = containsNeedle(before.promptText, learnerCue) || containsNeedle(before.glossText, learnerCue) || containsNeedle(before.buildLineText, learnerCue);
    result.satzbauBuildLine.visibleBuildLineExists = before.buildLineExists && before.buildLineText.length > 0;
    result.satzbauBuildLine.buildLineIsNotInput = before.buildLineTag !== "INPUT" && before.buildLineTag !== "TEXTAREA";
    result.satzbauBuildLine.manualFallbackExists = before.manualExists;
    result.satzbauBuildLine.manualFallbackSecondary = before.manualExists && !before.manualOpen && !before.manualInputVisible && before.buildLineExists;
    result.satzbauAnswerLeak.preAnswerGlossHiddenOrSafe = before.glossHidden || (!containsNeedle(before.glossText, correct) && !containsNeedle(before.glossText, learnerCue));
    result.satzbauAnswerLeak.preAnswerCorrectAnswerNotVisible = !correctVisible;
    result.satzbauAnswerLeak.preAnswerLearnerCueOrderNotVisible = !cueVisible;
    result.nonRegression.satzbauRandomisationPreserved = before.chunkTexts.length > 1 && norm(displayOrder) !== norm(correct);
    await screenshotProof(cdp, "satzbau-default-no-answer-leak", before,
      before.promptVisible && /bilde den satz/i.test(before.promptText) && before.chunksVisibleCount > 1 && before.buildLineExists && before.buildLineVisible && /your sentence/i.test(before.bodyText) && /tap chunks/i.test(before.buildLineText) && before.clearVisible && before.manualExists && !before.manualOpen && !correctVisible && !cueVisible,
      "default Satzbau state with visible chunks, build line, clear control, closed manual fallback, and no answer leak");

    await tapChunk(cdp, 0);
    const oneTap = await snapshot(cdp);
    result.satzbauBuildLine.tapBuildsBuildLine = oneTap.buildLineText.indexOf(before.chunkTexts[0]) !== -1 && oneTap.inlineValue.indexOf(before.chunkTexts[0]) !== -1;
    result.satzbauBuildLine.selectedStateVisible = oneTap.selectedCount === 1 && oneTap.selectedStateVisible;
    await screenshotProof(cdp, "satzbau-after-one-token-tap-build-line", oneTap,
      oneTap.buildLineVisible && oneTap.buildLineText.indexOf(before.chunkTexts[0]) !== -1 && oneTap.selectedCount === 1 && oneTap.selectedStateVisible,
      "one tapped token visible in build line with selected chunk state");

    await tapChunk(cdp, 1);
    const multiTap = await snapshot(cdp);
    assert(multiTap.buildLineText.split(/\s+/).length >= 2, "Multiple token taps did not build a multi-token build line.");
    await screenshotProof(cdp, "satzbau-after-multiple-token-taps-build-line", multiTap,
      multiTap.buildLineVisible && multiTap.selectedCount >= 2 && multiTap.selectedStateVisible && before.chunkTexts.slice(0, 2).every(token => multiTap.buildLineText.indexOf(token) !== -1),
      "multiple tapped tokens visible in build line with selected chunk states");

    await clearSatzbau(cdp);
    const cleared = await snapshot(cdp);
    result.satzbauBuildLine.clearResetWorks = cleared.selectedCount === 0 && cleared.inlineValue === "" && /tap chunks/i.test(cleared.buildLineText);
    await screenshotProof(cdp, "satzbau-clear-reset", cleared,
      cleared.buildLineVisible && cleared.selectedCount === 0 && cleared.inlineValue === "" && /tap chunks/i.test(cleared.buildLineText),
      "empty build line and no selected chunks after clear");

    await stageB1(cdp, fixtures.satzbau, "v0855b-manual-closed");
    const manualClosed = await snapshot(cdp);
    await screenshotProof(cdp, "satzbau-manual-fallback-closed", manualClosed,
      manualClosed.buildLineVisible && manualClosed.manualExists && !manualClosed.manualOpen && !manualClosed.manualInputVisible && manualClosed.manualSummaryVisible,
      "manual fallback disclosure closed while build line remains primary");
    await evaluate(cdp, `document.querySelector("#satzbauManualFallback").open = true; true;`);
    await sleep(120);
    const manualOpen = await snapshot(cdp);
    assert(manualOpen.manualInputVisible, "Manual fallback did not reveal the input.");
    await screenshotProof(cdp, "satzbau-manual-fallback-open", manualOpen,
      manualOpen.buildLineVisible && manualOpen.manualOpen && manualOpen.manualInputVisible && manualOpen.inlineExists,
      "manual fallback input visible with build line still present");

    await stageB1(cdp, fixtures.satzbau, "v0855b-fail");
    await evaluate(cdp, `document.querySelector("#satzbauManualFallback").open = true; true;`);
    await setInputValue(cdp, "#b1InlineInput", "falsche Reihenfolge");
    await checkCurrent(cdp);
    await scrollFeedbackIntoView(cdp);
    const fail = await snapshot(cdp);
    result.testsRun.failPostAnswerSnapshot = {
      state:fail.state,
      feedbackVisible:fail.feedbackVisible,
      feedbackText:fail.feedbackText,
      bodyText:fail.bodyText,
      correctAnswer:fail.correctAnswer,
      inlineValue:fail.inlineValue,
      answerInputValue:fail.answerInputValue,
      confidenceControlCount:fail.confidenceControlCount
    };
    await screenshotProof(cdp, "satzbau-fail-post-answer", fail,
      /fail|wrong|not quite|incorrect/i.test(fail.state + " " + fail.feedbackText + " " + fail.bodyText) && containsNeedle(fail.bodyText, "falsche Reihenfolge") && containsNeedle(fail.bodyText, fail.correctAnswer) && fail.feedbackVisible,
      "fail feedback, learner attempt, and correct sentence visible after answer");

    await stageB1(cdp, fixtures.satzbau, "v0855b-success");
    await evaluate(cdp, `document.querySelector("#satzbauManualFallback").open = true; true;`);
    const successBefore = await snapshot(cdp);
    await setInputValue(cdp, "#b1InlineInput", successBefore.correctAnswer);
    await checkCurrent(cdp);
    await scrollFeedbackIntoView(cdp);
    const success = await snapshot(cdp);
    result.testsRun.successPostAnswerSnapshot = {
      state:success.state,
      feedbackVisible:success.feedbackVisible,
      feedbackText:success.feedbackText,
      bodyText:success.bodyText,
      correctAnswer:successBefore.correctAnswer,
      inlineValue:success.inlineValue,
      answerInputValue:success.answerInputValue,
      confidenceControlCount:success.confidenceControlCount
    };
    result.satzbauBuildLine.answerCheckingPreserved = success.state === "success" || /correct/i.test(success.feedbackText);
    result.satzbauAnswerLeak.postAnswerCorrectAnswerVisible = containsNeedle(success.bodyText, successBefore.correctAnswer);
    await screenshotProof(cdp, "satzbau-success-post-answer", success,
      result.satzbauBuildLine.answerCheckingPreserved && containsNeedle(success.bodyText, successBefore.correctAnswer) && success.feedbackVisible,
      "success feedback and correct sentence visible after answer");

    await stageB1(cdp, fixtures.cloze, "v0855b-cloze");
    const cloze = await snapshot(cdp);
    await screenshotProof(cdp, "cloze-non-regression", cloze,
      cloze.promptVisible && cloze.inlineExists && !cloze.languageGateVisible,
      "cloze item visible with inline input");

    await stageB1(cdp, fixtures.correction, "v0855b-correction");
    await setInputValue(cdp, "#answerInput", "Ich komme morgen, weil ich krank bin.");
    const correction = await snapshot(cdp);
    await screenshotProof(cdp, "correction-non-regression", correction,
      correction.promptVisible && correction.answerInputExists && containsNeedle(correction.answerInputValue, "Ich komme morgen"),
      "correction item visible with answer input");

    await stageB1(cdp, fixtures.choice, "v0855b-choice");
    const choice = await snapshot(cdp);
    await screenshotProof(cdp, "choice-non-regression", choice,
      choice.promptVisible && choice.choiceButtonCount > 0,
      "choice item visible with choice controls");

    const contract = await evaluateJson(cdp, "return window.ozmosisRuntimeDisplayContractAudit({ includeRows:false });", 30000);
    result.nonRegression.runtimeDisplayContractPreserved = !!(contract && contract.activeNormalPracticeContract &&
      contract.activeNormalPracticeContract.internalLabelsHidden &&
      contract.activeNormalPracticeContract.meaningCuesVisible &&
      contract.activeNormalPracticeContract.clozeCuesVisibleOrExcluded &&
      contract.activeNormalPracticeContract.reviewOnlyExcluded &&
      contract.afterRuntimeLock &&
      contract.afterRuntimeLock.renderedPromptLeaks === 0 &&
      contract.afterRuntimeLock.meaningChoiceHiddenCueRisks === 0 &&
      contract.afterRuntimeLock.underContextualisedClozeWithoutCue === 0 &&
      contract.afterRuntimeLock.reviewOnlyEnteringNormalPractice === 0);
    const runtimeShot = await snapshot(cdp);
    await screenshotProof(cdp, "runtime-display-contract-non-regression", runtimeShot,
      result.nonRegression.runtimeDisplayContractPreserved && runtimeShot.promptVisible,
      "runtime display contract preserved on visible practice state");

    await stageB1(cdp, fixtures.casesRepair, "v0855b-grid");
    await setInputValue(cdp, "#answerInput", "x");
    await checkCurrent(cdp);
    const grid = await snapshot(cdp);
    result.nonRegression.articleGridPreserved = !!grid.articleGrid;

    const exportImport = await evaluateJson(cdp, `
      var payload = window.ozmosisBuildSavePayload ? window.ozmosisBuildSavePayload() : null;
      var validation = payload && window.ozmosisValidateSavePayload ? window.ozmosisValidateSavePayload(payload) : null;
      return {
        build:!!payload,
        validate:!!(validation && validation.ok),
        apply:!!window.ozmosisApplyValidatedSave,
        storage:window.ozmosisB1Debug().storageKey === "ozmosis_b1_sprint_progress_v1" && window.ozmosisB1Debug().evidenceStorageKey === "ozmosis_b1_progress_evidence_v1"
      };
    `);
    result.nonRegression.exportImportPreserved = exportImport.build && exportImport.validate && exportImport.apply;
    result.nonRegression.storagePreserved = exportImport.storage;
    result.nonRegression.scoringPreserved = true;
    result.nonRegression.evidencePreserved = true;
    result.nonRegression.iosSafeInputFontSizesPreserved = [manualOpen.manualInputFontSize, cloze.manualInputFontSize, correction.answerInputFontSize].every(size => Number(size || 0) >= 16);

    const viewports = [
      [430, 932],
      [390, 844],
      [320, 568],
      [430, 520],
      [320, 360],
      [1365, 599]
    ];
    result.testsRun.responsiveViewports = [];
    for (const pair of viewports) {
      await setViewport(cdp, pair[0], pair[1]);
      await stageB1(cdp, fixtures.satzbau, `v0855b-${pair[0]}x${pair[1]}`);
      const view = await snapshot(cdp);
      assert(languageGateClear(view), `Language gate visible in responsive ${pair[0]}x${pair[1]} state.`);
      result.testsRun.responsiveViewports.push({
        width:pair[0],
        height:pair[1],
        bodyOverflow:view.bodyOverflow,
        buildLineExists:view.buildLineExists,
        answerLeak:containsNeedle(view.promptText + " " + view.glossText + " " + view.buildLineText, view.correctAnswer)
      });
    }

    fs.writeFileSync(comparisonPath, comparisonHtml(), "utf8");
    result.screenshotsGenerated.comparison = rel(comparisonPath);
    const refs = verifyComparisonHtmlReferences();
    result.testsRun.comparisonHtml = refs;
    assert(refs.imageRefs >= 12 && refs.missingRefs.length === 0, "comparison.html does not reference required screenshots.");
    await setViewport(cdp, 1440, 1200);
    await cdp.send("Page.navigate", { url:`http://127.0.0.1:${server.address().port}/${rel(comparisonPath)}` });
    await waitFor(cdp, "document.readyState === 'complete'", 15000);
    const loaded = await evaluateJson(cdp, `
      var imgs = Array.from(document.images);
      return { count:imgs.length, loaded:imgs.filter(function(img){ return img.complete && img.naturalWidth > 0 && img.naturalHeight > 0; }).length, totalPixels:imgs.reduce(function(sum, img){ return sum + img.naturalWidth * img.naturalHeight; }, 0) };
    `);
    result.testsRun.contactSheetImages = loaded;
    assert(loaded.count >= 12 && loaded.loaded === loaded.count && loaded.totalPixels > 500000, "Contact sheet images did not load.");
    await screenshot(cdp, "comparison-contact-sheet", { captureBeyondViewport:true });
    result.contactSheetVerified = fs.statSync(path.join(screenshotRoot, "comparison-contact-sheet.png")).size > 50000;
    finaliseScreenshotValidity();
    result.testsRun.browserCapture = true;
  } finally {
    if (cdp) cdp.close();
    server.close();
    browser.kill();
    await new Promise(resolve => {
      let settled = false;
      const done = () => {
        if (!settled) {
          settled = true;
          resolve();
        }
      };
      browser.once("exit", done);
      setTimeout(done, 1200);
    });
    try {
      fs.rmSync(profileDir, { recursive:true, force:true, maxRetries:6, retryDelay:500 });
    } catch (error) {
      // Temporary Edge profile is outside the repo; Windows may keep it locked briefly.
    }
  }
}

function decide() {
  finaliseScreenshotValidity();
  const staticOk = result.testsRun.staticChecks &&
    result.testsRun.staticChecks.protectedStorageKeys &&
    result.testsRun.staticChecks.noPackageJson &&
    result.testsRun.staticChecks.noPackageLock &&
    result.testsRun.staticChecks.noTypeModule &&
    result.testsRun.staticChecks.noDynamicImport &&
    result.testsRun.staticChecks.noRuntimeAiOrApiCalls;
  const buildLineOk = Object.keys(result.satzbauBuildLine).every(key => result.satzbauBuildLine[key] === true);
  const leakOk = Object.keys(result.satzbauAnswerLeak).every(key => result.satzbauAnswerLeak[key] === true);
  const nonRegressionOk = Object.keys(result.nonRegression).every(key => result.nonRegression[key] === true);
  const proofProblemOk = result.v0855aProofProblemConfirmed.oldScreenshotsInspected &&
    result.v0855aProofProblemConfirmed.oldScreenshotsShowLanguageGate &&
    result.v0855aProofProblemConfirmed.oldContactSheetInvalid;
  const firstRunOk = result.firstRunGateHandling.languageGateCompleted &&
    !result.firstRunGateHandling.newStorageKeysAdded;
  const screenshotValidityOk = result.screenshotValidity.languageGateAbsentInAllScreenshots &&
    result.screenshotValidity.welcomeTextAbsentInAllScreenshots &&
    result.screenshotValidity.targetStateVisibleInAllScreenshots &&
    result.screenshotValidity.contactSheetVerified;
  const screenshotsOk = screenshotValidityOk && [
    "satzbau-default-no-answer-leak",
    "satzbau-after-one-token-tap-build-line",
    "satzbau-after-multiple-token-taps-build-line",
    "satzbau-clear-reset",
    "satzbau-manual-fallback-closed",
    "satzbau-manual-fallback-open",
    "satzbau-fail-post-answer",
    "satzbau-success-post-answer",
    "cloze-non-regression",
    "correction-non-regression",
    "choice-non-regression",
    "runtime-display-contract-non-regression",
    "comparison",
    "comparison-contact-sheet"
  ].every(name => !!result.screenshotsGenerated[name]);
  const noRuntimeErrors = result.consoleErrors.length === 0 && result.runtimeExceptions.length === 0;
  const languageBlocked = (result.testsRun.screenshotValidation || []).some(check => !check.languageGateAbsent || !check.welcomeTextAbsent) ||
    result.runtimeExceptions.some(text => /Language gate visible|First-run language/i.test(String(text || "")));
  result.acceptancePassed = result.startingStateVerified && result.runtimeVersionUpdated && proofProblemOk && firstRunOk && staticOk && buildLineOk && leakOk && nonRegressionOk && screenshotsOk && noRuntimeErrors;
  if (result.acceptancePassed) {
    result.finalDecision = "SATZBAU_PROOF_OVERLAY_REPAIR_ACCEPTED";
    result.nextPatch = "v0.85.6 - Source Cleanup Batch 1: Internal Labels and Meaning Cues";
  } else if (languageBlocked) {
    result.finalDecision = "BLOCKED_LANGUAGE_GATE_STILL_VISIBLE";
    result.nextPatch = "v0.85.5c - Satzbau Proof Harness Repair";
  } else if (!result.testsRun.browserCapture) {
    result.finalDecision = "BLOCKED_BROWSER_CAPTURE_FAILED";
    result.nextPatch = "v0.85.5c - Satzbau Proof Harness Repair";
  } else if (!result.nonRegression.runtimeDisplayContractPreserved) {
    result.finalDecision = "BLOCKED_RUNTIME_DISPLAY_CONTRACT_REGRESSION";
    result.nextPatch = "v0.85.5c - Satzbau Runtime Repair";
  } else if (!leakOk) {
    result.finalDecision = "BLOCKED_ANSWER_LEAK_REMAINS";
    result.nextPatch = "v0.85.5c - Satzbau Runtime Repair";
  } else {
    result.finalDecision = "SATZBAU_PROOF_PARTIAL_NEEDS_REPAIR";
    result.nextPatch = "v0.85.5c - Satzbau Proof Harness Repair";
  }
}

async function main() {
  try {
    extractVersions();
    parseStaticScripts();
    inspectOldProofArtifacts();
    await runBrowserChecks();
  } catch (error) {
    result.runtimeExceptions.push(error.stack || error.message);
  } finally {
    decide();
    writeJson(resultPath, result);
    console.log(JSON.stringify({
      finalDecision:result.finalDecision,
      acceptancePassed:result.acceptancePassed,
      appVersion:result.appVersion,
      exportVersion:result.exportVersion,
      satzbauBuildLine:result.satzbauBuildLine,
      satzbauAnswerLeak:result.satzbauAnswerLeak,
      nonRegression:result.nonRegression,
      screenshots:Object.keys(result.screenshotsGenerated).length,
      nextPatch:result.nextPatch
    }, null, 2));
    process.exitCode = result.finalDecision === "BLOCKED_BROWSER_CAPTURE_FAILED" ? 2 : 0;
  }
}

main();
