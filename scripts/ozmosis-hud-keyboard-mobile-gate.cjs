const fs = require("fs");
const http = require("http");
const net = require("net");
const os = require("os");
const path = require("path");
const vm = require("vm");
const { spawn } = require("child_process");

const root = path.resolve(__dirname, "..");
const indexPath = path.join(root, "index.html");
const screenshotRoot = path.join(root, "docs", "qa", "screenshots", "v0.85.3.8-hud-keyboard-mobile-gate");
const resultPath = path.join(root, "docs", "qa", "v0.85.3.8_hud_keyboard_mobile_gate_results.json");
const comparisonPath = path.join(screenshotRoot, "comparison.html");
const profileDir = fs.mkdtempSync(path.join(os.tmpdir(), "ozmosis-v08538-hud-keyboard-edge-profile-"));
const keepProfile = process.argv.includes("--keep-profile");

const expectedStartAppVersion = "v0.85.3.7 - Correction and Satzbau Surface Pass";
const expectedStartExportVersion = "v0.85.3.7-correction-satzbau-surface";
const expectedFinalAppVersion = "v0.85.3.8 - HUD, Keyboard, and Live Mobile Verification Gate";
const expectedFinalExportVersion = "v0.85.3.8-hud-keyboard-mobile-gate";

const fixtureIds = {
  choice:"v080149_cat02_contrast_cat02_cs_013",
  cloze:"v080149_cat02_practice_family_cat02_pf_005",
  correction:"b1_connector_v085_variable_weil_001",
  satzbau:"b1_word_order_main_clause_v2_time_002",
  casesRepair:"b1_cases_articles_v0841_variable_001",
  production:"b1_redemittel_084"
};

const result = {
  patch:"v0.85.3.8",
  title:"HUD, Keyboard, and Live Mobile Verification Gate",
  startingStateVerified:false,
  runtimeVersionUpdated:false,
  docsSyncPreflight:{
    roadmapCurrentUpdated:false,
    featureRegisterUpdated:false,
    previousJsonTestsNotRunCorrectedOrDocumented:false
  },
  filesChanged:[
    "index.html",
    "AGENTS.md",
    "README.md",
    "CHANGELOG-FULL-OZMOSIS.txt",
    "docs/OZMOSIS_SOURCE_BRIEF_CURRENT.md",
    "docs/OZMOSIS_DEVELOPMENT_ROADMAP_CURRENT.md",
    "docs/OZMOSIS_FEATURE_REGISTER_CURRENT.md",
    "docs/OZMOSIS_SOURCE_BRIEF_v0.85.3.8.md",
    "docs/OZMOSIS_DEVELOPMENT_ROADMAP_v0.85.3.8.md",
    "docs/qa/v0.85.3.7_correction_satzbau_surface_results.json",
    "docs/qa/v0.85.3.8_hud_keyboard_mobile_gate.md",
    "docs/qa/v0.85.3.8_hud_keyboard_mobile_gate_results.json",
    "docs/qa/v0.85.3.8_manual_phone_test_checklist.md",
    "docs/qa/screenshots/v0.85.3.8-hud-keyboard-mobile-gate/",
    "scripts/ozmosis-hud-keyboard-mobile-gate.cjs"
  ],
  runtimeChangesMade:false,
  repairsMade:[
    "Added scoped B1 post-answer HUD-clearance scheduling so feedback and confidence controls can scroll above the fixed HUD.",
    "Added answered-state B1 bottom clearance for fixed-HUD safety.",
    "Added short-height answered Satzbau compaction by hiding pre-answer chunks and English gloss once feedback is shown."
  ],
  surfacesChecked:{
    choice:false,
    cloze:false,
    correction:false,
    satzbau:false,
    b1CasesArticlesGrid:false,
    caseTrainerGrid:false,
    optionsExportImport:false
  },
  keyboardLikeViewportsChecked:[],
  responsiveViewportsChecked:[],
  hudOverlapFailures:[],
  focusedControlVisibilityFailures:[],
  confidenceReachabilityFailures:[],
  horizontalOverflowFailures:[],
  articleGridPreserved:false,
  exportImportChanged:false,
  scoringChanged:false,
  evidenceChanged:false,
  storageChanged:false,
  contentChanged:false,
  liveGithubPages:{
    attempted:false,
    reachable:false,
    version:"",
    matchesCurrent:false,
    notes:""
  },
  manualPhoneChecklistCreated:false,
  screenshotsGenerated:{},
  contactSheetVerified:false,
  testsRun:{},
  testsNotRun:[
    "Manual physical-phone test was not run in Codex; checklist created at docs/qa/v0.85.3.8_manual_phone_test_checklist.md."
  ],
  warnings:[],
  consoleErrors:[],
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

function setRun(name, value) {
  result.testsRun[name] = value;
}

function assert(condition, message) {
  if (!condition) throw new Error(message);
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

function startServer() {
  const server = http.createServer((req, res) => {
    const url = new URL(req.url, "http://127.0.0.1");
    const relPath = url.pathname === "/" ? "index.html" : decodeURIComponent(url.pathname.replace(/^\/+/, ""));
    const target = path.resolve(root, relPath);
    if (!target.startsWith(root)) {
      res.writeHead(403);
      res.end("Forbidden");
      return;
    }
    fs.readFile(target, (err, data) => {
      if (err) {
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

async function fetchJson(url) {
  const response = await fetch(url);
  if (!response.ok) throw new Error(`${response.status} ${response.statusText}: ${url}`);
  return response.json();
}

async function waitForJson(url, timeoutMs) {
  const start = Date.now();
  let lastError = null;
  while (Date.now() - start < timeoutMs) {
    try { return await fetchJson(url); }
    catch (error) {
      lastError = error;
      await sleep(150);
    }
  }
  throw lastError || new Error(`Timed out waiting for ${url}`);
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
    ws.onerror = () => reject(new Error("CDP websocket failed"));
  });
  function send(method, params, timeoutMs) {
    const callId = ++id;
    ws.send(JSON.stringify({ id:callId, method, params:params || {} }));
    return new Promise((resolve, reject) => {
      const timeout = setTimeout(() => {
        pending.delete(callId);
        reject(new Error(`CDP timeout: ${method}`));
      }, timeoutMs || 15000);
      pending.set(callId, { resolve, reject, timeout });
    });
  }
  function on(method, listener) {
    if (!listeners.has(method)) listeners.set(method, new Set());
    listeners.get(method).add(listener);
  }
  return { send, on, close:() => ws.close() };
}

async function evaluate(cdp, expression, timeoutMs) {
  const response = await cdp.send("Runtime.evaluate", {
    expression,
    awaitPromise:true,
    returnByValue:true,
    userGesture:true
  }, timeoutMs);
  if (response.exceptionDetails) {
    const details = response.exceptionDetails;
    throw new Error(details.text || details.exception && details.exception.description || "Runtime evaluation failed");
  }
  return response.result ? response.result.value : undefined;
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
  await cdp.send("Emulation.setVisibleSize", { width, height }).catch(() => {});
}

async function waitForAppReady(cdp) {
  const start = Date.now();
  while (Date.now() - start < 15000) {
    const ready = await evaluate(cdp, "!!(window.ozmosisVersionInfo && window.ozmosisB1Debug && window.kasusCurrent)").catch(() => false);
    if (ready) return;
    await sleep(160);
  }
  throw new Error("Timed out waiting for Ozmosis runtime readiness.");
}

async function dismissFirstRun(cdp) {
  await evaluate(cdp, `(() => {
    const visible = node => !!(node && !node.hidden && getComputedStyle(node).visibility !== "hidden");
    const english = document.querySelector('[data-first-run-lang="en"], .langBtn[data-lang="en"]');
    if (english && visible(english)) english.click();
    const start = document.getElementById("firstRunLanguageStartBtn");
    if (start && visible(start)) start.click();
    const overlay = document.getElementById("firstRunLanguageOverlay");
    if (overlay && !overlay.hidden) overlay.hidden = true;
    return true;
  })()`);
  await sleep(220);
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
  await evaluate(cdp, `window.ozmosisB1Debug().qaStageItemById(${JSON.stringify(id)}, {seed:${JSON.stringify(seed || "v08538")}})`, 15000);
  await sleep(300);
}

async function rhythmSnapshot(cdp) {
  return evaluate(cdp, `(() => {
    const visible = node => !!(node && !node.hidden && getComputedStyle(node).display !== "none" && getComputedStyle(node).visibility !== "hidden");
    const rectInfo = node => {
      if (!node) return null;
      const r = node.getBoundingClientRect();
      return { top:r.top, bottom:r.bottom, left:r.left, right:r.right, width:r.width, height:r.height };
    };
    const block = document.getElementById("correctionBlock");
    const row = document.getElementById("b1ConfidenceRow");
    const star = document.getElementById("b1TaskStarStatus");
    const post = document.querySelector(".b1PostAnswerResultArea");
    const compact = document.querySelector(".articleGridAdapter.compact");
    const reveal = document.querySelector(".articleGridAdapter.reveal");
    const full = document.querySelector(".articleGridAdapter.full");
    const prompt = document.getElementById("promptValue");
    const answerInput = document.getElementById("answerInput");
    const inlineInput = document.getElementById("b1InlineInput");
    const focused = document.activeElement;
    const hud = document.querySelector(".bottomHud");
    const checkBtn = document.getElementById("checkBtn");
    const teachBtn = document.getElementById("noArticleBtn");
    const nextBtn = document.getElementById("nextBtn");
    const menuBtn = document.getElementById("devMenuBtn");
    const backButtons = Array.from(document.querySelectorAll("#practiceExitBtn, #caseTrainerBackBtn, #learningMapBackBtn, #grammarBackBtn, #hubBackBtn")).filter(visible);
    const chunkRow = document.querySelector(".satzbauChunkRow");
    const chunkNodes = Array.from(document.querySelectorAll(".satzbauChunk"));
    const miniCardNodes = Array.from(document.querySelectorAll(".correctionBlock.feedbackRhythmBlock .microRule, .correctionBlock.feedbackRhythmBlock .b1ChoiceFeedback, .correctionBlock.feedbackRhythmBlock .b1TransformationFeedback")).filter(node => {
      const style = getComputedStyle(node);
      const allSides = parseFloat(style.borderLeftWidth) > 0 || parseFloat(style.borderRightWidth) > 0 || parseFloat(style.borderBottomWidth) > 0;
      const filled = style.backgroundColor && style.backgroundColor !== "rgba(0, 0, 0, 0)" && style.backgroundColor !== "transparent";
      return allSides || filled;
    });
    const postStyle = post ? getComputedStyle(post) : null;
    const postRect = rectInfo(post);
    const confidenceRect = rectInfo(row);
    const hudRect = rectInfo(hud);
    const focusedRect = rectInfo(focused);
    const checkRect = rectInfo(checkBtn);
    const teachRect = rectInfo(teachBtn);
    const nextRect = rectInfo(nextBtn);
    const menuRect = rectInfo(menuBtn);
    const backRect = backButtons.length ? rectInfo(backButtons[0]) : null;
    const overlaps = (a, b) => !!(a && b && a.width > 0 && a.height > 0 && b.width > 0 && b.height > 0 && a.left < b.right && a.right > b.left && a.top < b.bottom && a.bottom > b.top);
    const inViewport = r => !!(r && r.width > 0 && r.height > 0 && r.bottom > 0 && r.top < window.innerHeight && r.right > 0 && r.left < window.innerWidth);
    return {
      viewport:{ width:window.innerWidth, height:window.innerHeight, visualWidth:window.visualViewport ? window.visualViewport.width : window.innerWidth, visualHeight:window.visualViewport ? window.visualViewport.height : window.innerHeight },
      blockVisible:visible(block),
      feedbackRhythm:!!(block && block.classList.contains("feedbackRhythmBlock")),
      resultLine:!!document.querySelector(".feedbackResultLine"),
      answerLine:!!document.querySelector(".feedbackAnswerLine, .repairAnswerLine, .clozeAnswerText"),
      postAnswerResult:!!post,
      postAnswerHeading:!!document.querySelector(".b1PostAnswerResultHeading"),
      postAnswerRect:postRect,
      postAnswerBorderLeft:postStyle ? parseFloat(postStyle.borderLeftWidth) : 0,
      starUpdate:!!document.querySelector(".b1PostAnswerResultArea .b1StarUpdateLine"),
      confidenceReachable:visible(row) && Array.from(row.querySelectorAll("button")).length >= 3,
      confidenceMode:row ? row.getAttribute("data-confidence-next") || "" : "",
      confidenceWithinViewport:!!(confidenceRect && confidenceRect.top >= 0 && confidenceRect.bottom <= window.innerHeight + 2),
      confidenceRect:confidenceRect,
      nextVisible:visible(document.getElementById("nextBtn")),
      nextRect:nextRect,
      nextInViewport:inViewport(nextRect),
      checkVisible:visible(checkBtn),
      checkRect:checkRect,
      checkInViewport:inViewport(checkRect),
      teachVisible:visible(teachBtn),
      teachRect:teachRect,
      teachInViewport:!visible(teachBtn) || inViewport(teachRect),
      menuVisible:visible(menuBtn),
      menuRect:menuRect,
      menuInViewport:!visible(menuBtn) || inViewport(menuRect),
      backRect:backRect,
      backInViewport:!backRect || inViewport(backRect),
      preAnswerStarVisible:visible(star),
      miniCardCount:miniCardNodes.length,
      compactGrid:!!compact,
      revealGrid:!!reveal,
      fullGrid:!!full,
      articleGridModes:Array.from(document.querySelectorAll(".articleGridAdapter")).map(node => node.getAttribute("data-article-grid-mode") || ""),
      promptHasClozeAnswer:!!(prompt && prompt.querySelector(".clozeAnswerText")),
      promptText:prompt ? prompt.textContent.replace(/\s+/g, " ").trim() : "",
      feedbackText:block ? block.textContent.replace(/\s+/g, " ").trim() : "",
      bodySurface:document.body.getAttribute("data-b1-surface") || "",
      bodyState:document.body.getAttribute("data-b1-state") || "",
      answerTag:answerInput ? String(answerInput.tagName || "").toLowerCase() : "",
      answerVisible:visible(answerInput),
      answerValueLength:answerInput ? answerInput.value.length : 0,
      answerRect:rectInfo(answerInput),
      inlineVisible:visible(inlineInput),
      inlineValueLength:inlineInput ? inlineInput.value.length : 0,
      inlineRect:rectInfo(inlineInput),
      satzbauChunkCount:chunkNodes.length,
      satzbauChunkText:chunkNodes.map(node => node.textContent.replace(/\s+/g, " ").trim()).join(" | "),
      satzbauChunkRect:rectInfo(chunkRow),
      hasSatzbauSurface:!!document.querySelector(".satzbauSurface"),
      bodyOverflow:document.documentElement.scrollWidth > window.innerWidth + 2,
      scrollRisk:document.scrollingElement ? document.scrollingElement.scrollHeight > window.innerHeight * 3.5 : false,
      hudVisible:visible(hud),
      hudRect:hudRect,
      focusedTag:focused ? String(focused.tagName || "").toLowerCase() : "",
      focusedId:focused ? focused.id || "" : "",
      focusedRect:focusedRect,
      focusedVisible:!focused || focused === document.body || inViewport(focusedRect),
      focusedOverlapsHud:overlaps(focusedRect, hudRect),
      checkOverlapsHud:overlaps(checkRect, hudRect),
      teachOverlapsHud:overlaps(teachRect, hudRect),
      nextOverlapsHud:overlaps(nextRect, hudRect),
      confidenceOverlapsHud:overlaps(confidenceRect, hudRect),
      blockOverlapsHud:overlaps(rectInfo(block), hudRect),
      germanDir:prompt ? getComputedStyle(prompt).direction : "",
      answerDir:answerInput ? getComputedStyle(answerInput).direction : "",
      inlineDir:inlineInput ? getComputedStyle(inlineInput).direction : "",
      selectedWrong:!!document.querySelector(".connectorChoiceGrid button.missed, #answerInput.missed, .inlineClozeInput.missed"),
      selectedCorrect:!!document.querySelector(".connectorChoiceGrid button.correct, #answerInput.correct, .inlineClozeInput.correct")
    };
  })()`);
}

async function b1Answer(cdp, mode) {
  return evaluate(cdp, `(() => {
    const current = window.kasusCurrent();
    const choices = Array.from(document.querySelectorAll("#connectorChoiceGrid button"));
    function clean(value){ return String(value || "").trim(); }
    if (choices.length) {
      let target = null;
      if (${JSON.stringify(mode)} === "correct") {
        target = choices.find(btn => {
          const id = btn.getAttribute("data-choice-id");
          const text = btn.getAttribute("data-choice-text") || btn.textContent;
          return (current.correctChoiceIds || []).includes(id) || (current.acceptedAnswers || [current.answer]).map(clean).includes(clean(text));
        }) || choices[0];
      } else {
        target = choices.find(btn => {
          const id = btn.getAttribute("data-choice-id");
          const text = btn.getAttribute("data-choice-text") || btn.textContent;
          return !(current.correctChoiceIds || []).includes(id) && !(current.acceptedAnswers || [current.answer]).map(clean).includes(clean(text));
        }) || choices[choices.length - 1];
      }
      target.click();
      if (!document.getElementById("correctionBlock").classList.contains("visible")) window.kasusCheck();
      return { surface:"choice", value:target.textContent };
    }
    const inline = document.getElementById("b1InlineInput");
    const input = inline || document.getElementById("answerInput");
    const answer = clean(current.answer || (current.acceptedAnswers || [])[0] || "");
    input.value = ${JSON.stringify(mode)} === "correct" ? answer : "zzzz";
    input.dispatchEvent(new Event("input", { bubbles:true }));
    window.kasusCheck();
    return { surface:inline ? "inline" : "typed", value:input.value, answer };
  })()`, 15000);
}

async function assertB1PostAnswer(cdp, key, options) {
  await sleep(760);
  const snap = await rhythmSnapshot(cdp);
  assert(snap.blockVisible, `${key}: feedback block not visible.`);
  assert(snap.feedbackRhythm, `${key}: feedback rhythm class missing.`);
  assert(snap.resultLine, `${key}: result line missing.`);
  assert(snap.postAnswerResult, `${key}: post-answer result/star area missing.`);
  assert(snap.postAnswerHeading, `${key}: post-answer result heading missing.`);
  assert(snap.postAnswerRect && snap.postAnswerRect.height >= 48 && snap.postAnswerBorderLeft >= 3, `${key}: post-answer result area still looks like a compact pill.`);
  assert(snap.starUpdate, `${key}: star update missing from post-answer area.`);
  assert(snap.confidenceReachable, `${key}: confidence row not reachable.`);
  assert(snap.miniCardCount === 0, `${key}: nested mini-card feedback clutter remains.`);
  if (options && options.compactGrid) assert(snap.compactGrid, `${key}: compact article grid missing.`);
  return snap;
}

function pushUnique(array, value) {
  if (array.indexOf(value) === -1) array.push(value);
}

function recordViewport(target, width, height) {
  const label = `${width}x${height}`;
  if (!result[target].some(entry => entry.width === width && entry.height === height)) {
    result[target].push({ width, height });
  }
  return label;
}

function recordLayoutCheck(name, snap, expectations) {
  expectations = expectations || {};
  if (snap.bodyOverflow) result.horizontalOverflowFailures.push(`${name}: body horizontal overflow`);
  if (expectations.focused && (!snap.focusedVisible || snap.focusedOverlapsHud)) {
    result.focusedControlVisibilityFailures.push(`${name}: focused ${snap.focusedId || snap.focusedTag || "control"} not safely visible`);
  }
  if (expectations.check && (!snap.checkVisible || !snap.checkInViewport || snap.checkOverlapsHud)) {
    result.hudOverlapFailures.push(`${name}: Prüfen not safely reachable`);
  }
  if (expectations.teach && snap.teachVisible && (!snap.teachInViewport || snap.teachOverlapsHud)) {
    result.hudOverlapFailures.push(`${name}: Teach me not safely reachable`);
  }
  if (expectations.feedback && (snap.blockOverlapsHud || !snap.blockVisible)) {
    if (!snap.blockVisible) result.hudOverlapFailures.push(`${name}: feedback not safely visible`);
    else if (snap.postAnswerRect && snap.hudRect && snap.postAnswerRect.bottom > snap.hudRect.top) result.hudOverlapFailures.push(`${name}: post-answer result hidden behind HUD`);
  }
  if (expectations.confidence && (!snap.confidenceReachable || !snap.confidenceWithinViewport || snap.confidenceOverlapsHud)) {
    result.confidenceReachabilityFailures.push(`${name}: confidence row not safely reachable`);
  }
  const confidenceRequiredBeforeNext = snap.confidenceMode === "required" && snap.confidenceReachable && !snap.nextVisible;
  if (expectations.continue && !confidenceRequiredBeforeNext && (!snap.nextVisible || !snap.nextInViewport || snap.nextOverlapsHud)) {
    result.hudOverlapFailures.push(`${name}: continue control not safely reachable`);
  }
  if (snap.hudVisible && snap.hudRect && snap.hudRect.height > Math.max(128, snap.viewport.height * 0.34)) {
    result.hudOverlapFailures.push(`${name}: HUD too tall for viewport`);
  }
  if (snap.germanDir && snap.germanDir !== "ltr") {
    result.testsRun.ltrFailures = result.testsRun.ltrFailures || [];
    result.testsRun.ltrFailures.push(`${name}: prompt direction ${snap.germanDir}`);
  }
}

async function focusActiveInput(cdp) {
  await evaluate(cdp, `(() => {
    const target = document.getElementById("b1InlineInput") || document.getElementById("answerInput");
    if (target) target.focus();
    return !!target;
  })()`, 15000);
  await sleep(220);
}

function runStaticChecks() {
  const html = fs.readFileSync(indexPath, "utf8");
  const scripts = [...html.matchAll(/<script(?![^>]*\bsrc=)[^>]*>([\s\S]*?)<\/script>/gi)].map(match => match[1]);
  scripts.forEach((script, index) => new vm.Script(script, { filename:`index.inline.${index}.js` }));
  const contentFiles = fs.readdirSync(path.join(root, "content")).filter(name => name.endsWith(".js")).sort();
  contentFiles.forEach(file => new vm.Script(fs.readFileSync(path.join(root, "content", file), "utf8"), { filename:`content/${file}` }));
  const appVersion = (html.match(/OZMOSIS_APP_VERSION\s*=\s*"([^"]+)"/) || [])[1] || "";
  const exportVersion = (html.match(/OZMOSIS_EXPORT_VERSION\s*=\s*"([^"]+)"/) || [])[1] || "";
  result.appVersion = appVersion;
  result.exportVersion = exportVersion;
  result.startingStateVerified = appVersion === expectedStartAppVersion && exportVersion === expectedStartExportVersion || appVersion === expectedFinalAppVersion && exportVersion === expectedFinalExportVersion;
  result.runtimeVersionUpdated = appVersion === expectedFinalAppVersion && exportVersion === expectedFinalExportVersion;
  result.runtimeChangesMade = result.runtimeVersionUpdated;
  const protectedKeys = ["ozmosis_b1_sprint_progress_v1", "ozmosis_b1_progress_evidence_v1"].every(key => html.includes(key));
  const currentRoadmap = fs.readFileSync(path.join(root, "docs", "OZMOSIS_DEVELOPMENT_ROADMAP_CURRENT.md"), "utf8");
  const featureRegister = fs.readFileSync(path.join(root, "docs", "OZMOSIS_FEATURE_REGISTER_CURRENT.md"), "utf8");
  const previousResult = fs.readFileSync(path.join(root, "docs", "qa", "v0.85.3.7_correction_satzbau_surface_results.json"), "utf8");
  result.docsSyncPreflight.roadmapCurrentUpdated = currentRoadmap.includes("v0.85.3.8 - HUD, Keyboard, and Live Mobile Verification Gate") && currentRoadmap.includes("v0.85.4 - Completion Gate Harness");
  const correctionLine = (featureRegister.match(/\| correction_satzbau_surface_pass \|[^\n]+/) || [""])[0];
  const hudLine = (featureRegister.match(/\| hud_keyboard_live_mobile_verification \|[^\n]+/) || [""])[0];
  const completionLine = (featureRegister.match(/\| completion_gate_harness \|[^\n]+/) || [""])[0];
  result.docsSyncPreflight.featureRegisterUpdated = correctionLine.includes("completed in v0.85.3.7") && hudLine.includes("completed in v0.85.3.8") && /\|\s*no\s*\|/.test(hudLine) && completionLine.includes("ready next") && /\|\s*yes\s*\|/.test(completionLine);
  result.docsSyncPreflight.previousJsonTestsNotRunCorrectedOrDocumented = previousResult.includes("Live GitHub Pages check was not run in v0.85.3.7") && previousResult.includes("Manual phone test was not run in v0.85.3.7");
  result.manualPhoneChecklistCreated = fs.existsSync(path.join(root, "docs", "qa", "v0.85.3.8_manual_phone_test_checklist.md"));
  assert(protectedKeys, "Protected storage keys missing.");
  assert(html.includes("Export Save") && html.includes("Import Save"), "Export Save / Import Save strings missing.");
  assert(!fs.existsSync(path.join(root, "package.json")), "package.json should not exist.");
  assert(!fs.existsSync(path.join(root, "package-lock.json")), "package-lock.json should not exist.");
  assert(!fs.existsSync(path.join(root, "pnpm-lock.yaml")), "pnpm-lock.yaml should not exist.");
  assert(!fs.existsSync(path.join(root, "yarn.lock")), "yarn.lock should not exist.");
  assert(!/\btype\s*=\s*["']module["']/i.test(html), "type=module found.");
  assert(!/\bimport\s*\(/.test(html), "dynamic import found in index.html.");
  setRun("staticChecks", {
    inlineScriptsParsed:scripts.length,
    contentScriptsParsed:contentFiles.length,
    protectedStorageKeys:protectedKeys,
    noPackageJson:true,
    noPackageLock:true,
    noTypeModule:true,
    noDynamicImport:true,
    docsSyncPreflight:Object.assign({}, result.docsSyncPreflight),
    manualPhoneChecklistCreated:result.manualPhoneChecklistCreated
  });
}

function comparisonHtml() {
  const entries = Object.keys(result.screenshotsGenerated)
    .filter(key => key !== "comparison" && key !== "comparison-contact-sheet")
    .map(key => {
      const src = path.relative(screenshotRoot, path.join(root, result.screenshotsGenerated[key])).replace(/\\/g, "/");
      return `<figure><img src="${src}" alt="${key}"><figcaption>${key}</figcaption></figure>`;
    }).join("\n");
  return `<!doctype html><html><head><meta charset="utf-8"><title>Ozmosis v0.85.3.8 HUD keyboard mobile gate contact sheet</title><style>
body{margin:0;background:#050914;color:#dff8ff;font-family:Arial,sans-serif;padding:18px}
h1{font-size:20px;margin:0 0 14px}.grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:16px;align-items:start}
figure{margin:0;border:1px solid #174052;background:#08111e;padding:8px;border-radius:10px}
img{width:100%;min-height:360px;height:auto;display:block;border-radius:6px;background:#020611;object-fit:contain;object-position:top center}
figcaption{font-size:12px;margin-top:7px;color:#7de3ff;word-break:break-word}
</style></head><body><h1>Ozmosis v0.85.3.8 HUD, Keyboard, and Mobile Gate</h1><div class="grid">${entries}</div></body></html>`;
}

function verifyComparisonHtmlReferences() {
  const html = fs.readFileSync(comparisonPath, "utf8");
  const refs = [...html.matchAll(/<img\s+src="([^"]+)"/g)].map(match => match[1]);
  const missing = refs.filter(ref => !fs.existsSync(path.join(screenshotRoot, ref)));
  return { imageRefs:refs.length, missingRefs:missing };
}

async function checkLiveGithubPages() {
  result.liveGithubPages.attempted = true;
  const url = "https://ozmills.github.io/ozmosis/";
  if (typeof fetch !== "function") {
    result.liveGithubPages.notes = "Node fetch is unavailable in this runtime.";
    result.testsNotRun.push("Live GitHub Pages check: Node fetch is unavailable.");
    return;
  }
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 10000);
  try {
    const response = await fetch(url, { signal:controller.signal });
    result.liveGithubPages.reachable = response.ok;
    if (!response.ok) {
      result.liveGithubPages.notes = `HTTP ${response.status} ${response.statusText}`;
      return;
    }
    const html = await response.text();
    const liveVersion = (html.match(/OZMOSIS_APP_VERSION\s*=\s*"([^"]+)"/) || [])[1] || "";
    result.liveGithubPages.version = liveVersion;
    result.liveGithubPages.matchesCurrent = liveVersion === expectedFinalAppVersion;
    result.liveGithubPages.notes = result.liveGithubPages.matchesCurrent ? "Live GitHub Pages matches the final runtime version." : "Live GitHub Pages is reachable but does not yet match the final local runtime version.";
  } catch (error) {
    result.liveGithubPages.reachable = false;
    result.liveGithubPages.notes = String(error && error.message || error);
    result.testsNotRun.push(`Live GitHub Pages version check could not complete: ${result.liveGithubPages.notes}`);
  } finally {
    clearTimeout(timeout);
  }
}

function hasViewport(list, width, height) {
  return list.some(entry => entry.width === width && entry.height === height);
}

function assertViewportSet(name, list, required) {
  const missing = required.filter(([width, height]) => !hasViewport(list, width, height)).map(([width, height]) => `${width}x${height}`);
  assert(missing.length === 0, `${name} missing viewport checks: ${missing.join(", ")}`);
}

async function runBrowserChecks() {
  const edge = edgeExecutable();
  if (!edge) {
    result.testsNotRun.push("Edge/CDP browser checks: Microsoft Edge executable not found.");
    return;
  }
  fs.rmSync(screenshotRoot, { recursive:true, force:true });
  fs.mkdirSync(screenshotRoot, { recursive:true });
  const server = await startServer();
  const port = server.address().port;
  const debugPort = await freePort();
  const browser = spawn(edge, [
    `--remote-debugging-port=${debugPort}`,
    `--user-data-dir=${profileDir}`,
    "--headless=new",
    "--disable-gpu",
    "--no-first-run",
    "--no-default-browser-check",
    `http://127.0.0.1:${port}/index.html`
  ], { stdio:"ignore" });

  let cdp;
  try {
    await waitForJson(`http://127.0.0.1:${debugPort}/json/version`, 12000);
    const targets = await waitForJson(`http://127.0.0.1:${debugPort}/json/list`, 12000);
    const pageTarget = targets.find(target => target.type === "page" && target.webSocketDebuggerUrl);
    assert(pageTarget, "No CDP page target found.");
    cdp = await connectCdp(pageTarget.webSocketDebuggerUrl);
    cdp.on("Runtime.exceptionThrown", params => result.runtimeExceptions.push(params.exceptionDetails && params.exceptionDetails.text || "runtime exception"));
    cdp.on("Runtime.consoleAPICalled", params => {
      if (params.type === "error") result.consoleErrors.push((params.args || []).map(arg => arg.value || arg.description || "").join(" "));
    });
    await cdp.send("Runtime.enable");
    await cdp.send("Page.enable");
    await setViewport(cdp, 430, 932);
    await cdp.send("Page.navigate", { url:`http://127.0.0.1:${port}/index.html` });
    await cdp.send("Page.loadEventFired", {}, 15000).catch(() => {});
    await waitForAppReady(cdp);
    await dismissFirstRun(cdp);

    const versionInfo = await evaluate(cdp, "window.ozmosisVersionInfo()");
    assert(versionInfo.appVersion === result.appVersion, "Browser app version mismatch.");
    assert(versionInfo.exportVersion === result.exportVersion, "Browser export version mismatch.");

    await setViewport(cdp, 430, 932);
    recordViewport("responsiveViewportsChecked", 430, 932);
    await stageB1(cdp, fixtureIds.choice, "choice-default");
    let snap = await rhythmSnapshot(cdp);
    recordLayoutCheck("choice-default-430x932", snap, { teach:true });
    await screenshot(cdp, "choice-default-430x932");

    await b1Answer(cdp, "wrong");
    snap = await assertB1PostAnswer(cdp, "choiceFail");
    recordLayoutCheck("choice-fail-430x932", snap, { feedback:true, confidence:true, continue:true });
    result.surfacesChecked.choice = true;
    await screenshot(cdp, "choice-fail-430x932");

    await stageB1(cdp, fixtureIds.cloze, "cloze-typing");
    await evaluate(cdp, `(() => {
      const input = document.getElementById("b1InlineInput");
      input.value = "falsch";
      input.dispatchEvent(new Event("input", { bubbles:true }));
      input.focus();
      return true;
    })()`, 15000);
    await focusActiveInput(cdp);
    snap = await rhythmSnapshot(cdp);
    recordLayoutCheck("cloze-typing-430x932", snap, { focused:true, check:true });
    result.surfacesChecked.cloze = true;
    await screenshot(cdp, "cloze-typing-430x932");

    await setViewport(cdp, 430, 520);
    recordViewport("keyboardLikeViewportsChecked", 430, 520);
    await focusActiveInput(cdp);
    snap = await rhythmSnapshot(cdp);
    recordLayoutCheck("cloze-typing-keyboard-430x520", snap, { focused:true, check:true });
    await screenshot(cdp, "cloze-typing-keyboard-430x520");
    await evaluate(cdp, "window.kasusCheck()", 15000);
    snap = await assertB1PostAnswer(cdp, "clozeFailKeyboard");
    recordLayoutCheck("cloze-fail-keyboard-430x520", snap, { feedback:true, confidence:true, continue:true });

    await setViewport(cdp, 430, 932);
    await stageB1(cdp, fixtureIds.correction, "correction-typing");
    await evaluate(cdp, `(() => {
      const input = document.getElementById("answerInput");
      input.value = "Morgen ich rufe die Praxis an, weil ich brauche dringend einen Termin.";
      input.dispatchEvent(new Event("input", { bubbles:true }));
      input.focus();
      return true;
    })()`, 15000);
    await focusActiveInput(cdp);
    snap = await rhythmSnapshot(cdp);
    recordLayoutCheck("correction-typing-430x932", snap, { focused:true, check:true });
    result.surfacesChecked.correction = true;
    await screenshot(cdp, "correction-typing-430x932");

    await setViewport(cdp, 430, 520);
    recordViewport("keyboardLikeViewportsChecked", 430, 520);
    await focusActiveInput(cdp);
    snap = await rhythmSnapshot(cdp);
    recordLayoutCheck("correction-typing-keyboard-430x520", snap, { focused:true, check:true });
    await screenshot(cdp, "correction-typing-keyboard-430x520");
    await evaluate(cdp, "window.kasusCheck()", 15000);
    snap = await assertB1PostAnswer(cdp, "correctionFailKeyboard");
    recordLayoutCheck("correction-fail-keyboard-430x520", snap, { feedback:true, confidence:true, continue:true });

    await setViewport(cdp, 430, 932);
    await stageB1(cdp, fixtureIds.satzbau, "satzbau-typing");
    await evaluate(cdp, `(() => {
      const input = document.getElementById("b1InlineInput");
      input.value = "Morgen ich rufe die Praxis an.";
      input.dispatchEvent(new Event("input", { bubbles:true }));
      input.focus();
      return true;
    })()`, 15000);
    await focusActiveInput(cdp);
    snap = await rhythmSnapshot(cdp);
    recordLayoutCheck("satzbau-typing-430x932", snap, { focused:true, check:true });
    result.surfacesChecked.satzbau = true;
    await screenshot(cdp, "satzbau-typing-430x932");

    await setViewport(cdp, 430, 520);
    recordViewport("keyboardLikeViewportsChecked", 430, 520);
    await focusActiveInput(cdp);
    snap = await rhythmSnapshot(cdp);
    recordLayoutCheck("satzbau-typing-keyboard-430x520", snap, { focused:true, check:true });
    await screenshot(cdp, "satzbau-typing-keyboard-430x520");
    await evaluate(cdp, "window.kasusCheck()", 15000);
    snap = await assertB1PostAnswer(cdp, "satzbauFailKeyboard");
    result.testsRun.satzbauFailKeyboardSnapshot = snap;
    recordLayoutCheck("satzbau-fail-keyboard-430x520", snap, { feedback:true, confidence:true, continue:true });
    await screenshot(cdp, "satzbau-fail-keyboard-430x520");

    await setViewport(cdp, 430, 932);
    await stageB1(cdp, fixtureIds.casesRepair, "cases-grid");
    await evaluate(cdp, `(() => {
      const input = document.getElementById("answerInput");
      input.value = "Ich sehe der Mitarbeiter am Empfang.";
      input.dispatchEvent(new Event("input", { bubbles:true }));
      window.kasusCheck();
      return true;
    })()`, 15000);
    await sleep(450);
    snap = await assertB1PostAnswer(cdp, "b1CasesArticlesGrid", { compactGrid:true });
    recordLayoutCheck("b1-cases-articles-grid-feedback-430x932", snap, { feedback:true, confidence:true, continue:true });
    result.surfacesChecked.b1CasesArticlesGrid = true;
    result.articleGridPreserved = true;
    await screenshot(cdp, "b1-cases-articles-grid-feedback-430x932");

    await evaluate(cdp, `(() => {
      window.kasusNewRound();
      const task = document.getElementById("taskType");
      const startTask = document.getElementById("startTaskType");
      const article = document.getElementById("articleType");
      const startArticle = document.getElementById("startArticleType");
      if (task) task.value = "table";
      if (startTask) startTask.value = "table";
      if (article) article.value = "definite";
      if (startArticle) startArticle.value = "definite";
      window.kasusStartRound();
      return true;
    })()`, 15000);
    await sleep(350);
    await evaluate(cdp, "window.kasusHint()", 15000);
    await sleep(300);
    snap = await rhythmSnapshot(cdp);
    assert(snap.revealGrid, "Case Trainer full/reveal grid missing.");
    result.articleGridPreserved = true;

    await evaluate(cdp, `(() => {
      const current = window.kasusCurrent();
      const accepted = [current.answer].concat(current.acceptedAnswers || []).map(value => String(value || "").trim().toLowerCase());
      const wrong = ["der", "den", "dem", "die", "das", "ein", "einen", "eine", "kein"].find(value => !accepted.includes(value)) || "xyz";
      document.getElementById("answerInput").value = wrong;
      window.kasusCheck();
      return { wrong };
    })()`, 15000);
    await sleep(450);
    snap = await rhythmSnapshot(cdp);
    assert(snap.compactGrid && snap.feedbackRhythm, "Case Trainer wrong grid/feedback rhythm missing.");
    recordLayoutCheck("case-trainer-grid-430x932", snap, { feedback:true, continue:true });
    result.surfacesChecked.caseTrainerGrid = true;
    result.articleGridPreserved = true;
    await screenshot(cdp, "case-trainer-grid-430x932");

    await evaluate(cdp, `(() => {
      if (window.ozmosisShowHome) window.ozmosisShowHome();
      const options = document.getElementById("homeOptionsBtn");
      if (options) options.click();
      return true;
    })()`, 15000);
    await sleep(350);
    const saveControls = await evaluate(cdp, `(() => {
      const visible = node => !!(node && !node.hidden && getComputedStyle(node).display !== "none" && getComputedStyle(node).visibility !== "hidden");
      return {
        exportVisible:visible(document.getElementById("exportBtn")),
        importVisible:visible(document.getElementById("importBtn")),
        importFilePresent:!!document.getElementById("importFile"),
        settingsVisible:visible(document.getElementById("optionsView")) || visible(document.getElementById("settingsView"))
      };
    })()`);
    assert(saveControls.exportVisible && saveControls.importVisible && saveControls.importFilePresent, "Settings/Data export/import controls are not reachable.");
    result.surfacesChecked.optionsExportImport = true;
    result.testsRun.saveControls = saveControls;

    result.exportImport = await evaluate(cdp, `(() => {
      const payload = window.ozmosisBuildSavePayload();
      const validation = window.ozmosisValidateSavePayload(payload);
      const applied = validation.ok ? window.ozmosisApplyValidatedSave(payload) : validation;
      const malformed = window.ozmosisValidateSavePayload({ app:"Not Ozmosis", data:{} });
      const oldPayload = Object.assign({}, payload, { version:"v0.85.3.7-correction-satzbau-surface", appVersion:"v0.85.3.7 - Correction and Satzbau Surface Pass" });
      const oldValidation = window.ozmosisValidateSavePayload(oldPayload);
      return {
        exportOk:payload && payload.app === "Ozmosis",
        validationOk:!!validation.ok,
        applyOk:!!applied.ok,
        malformedRejected:!malformed.ok,
        oldValidationOk:!!oldValidation.ok,
        appVersion:payload && payload.appVersion,
        exportVersion:payload && payload.version
      };
    })()`, 20000);
    assert(result.exportImport.exportOk && result.exportImport.validationOk && result.exportImport.applyOk && result.exportImport.malformedRejected && result.exportImport.oldValidationOk, "Export/import workflow failed.");
    setRun("exportImport", result.exportImport);

    await stageB1(cdp, fixtureIds.choice, "responsive-confidence");
    await b1Answer(cdp, "wrong");
    snap = await assertB1PostAnswer(cdp, "responsiveConfidence");
    recordLayoutCheck("responsive-confidence-base", snap, { feedback:true, confidence:true, continue:true });
    result.testsRun.confidenceReachabilityAfterAnswer = true;

    await stageB1(cdp, fixtureIds.choice, "continue-flow");
    await b1Answer(cdp, "wrong");
    await sleep(350);
    result.testsRun.continueFlow = await evaluate(cdp, `(() => new Promise(resolve => {
      const row = document.getElementById("b1ConfidenceRow");
      const first = row && row.querySelector("button[data-confidence]");
      const beforeMode = row ? row.getAttribute("data-confidence-next") || "" : "";
      if (first) first.click();
      setTimeout(() => {
        const currentRow = document.getElementById("b1ConfidenceRow");
        const waiting = !!(currentRow && !currentRow.hidden && currentRow.getAttribute("data-confidence-next") === "required" && currentRow.getAttribute("data-advancing") !== "true");
        resolve({
          confidenceButtonClicked:!!first,
          beforeMode,
          waitingForConfidenceAfterClick:waiting,
          bodyState:document.body.getAttribute("data-b1-state") || "",
          nextVisible:!!(document.getElementById("nextBtn") && document.getElementById("nextBtn").classList.contains("visible"))
        });
      }, 420);
    }))()`, 15000);
    assert(result.testsRun.continueFlow.confidenceButtonClicked && !result.testsRun.continueFlow.waitingForConfidenceAfterClick, "Confidence-as-next continue flow did not advance.");

    await stageB1(cdp, fixtureIds.choice, "responsive-loop");
    await b1Answer(cdp, "wrong");
    await sleep(350);

    const viewports = [[320,568], [390,844], [430,932], [768,1024], [1365,599], [1440,900]];
    result.testsRun.responsive = [];
    for (const [width, height] of viewports) {
      await setViewport(cdp, width, height);
      recordViewport("responsiveViewportsChecked", width, height);
      await stageB1(cdp, fixtureIds.choice, `responsive-${width}x${height}`);
      await b1Answer(cdp, "wrong");
      const check = await assertB1PostAnswer(cdp, `responsive-${width}x${height}`);
      check.width = width;
      check.height = height;
      result.testsRun.responsive.push(check);
      recordLayoutCheck(`responsive-${width}x${height}`, check, { feedback:true, confidence:true, continue:true });
      if (width === 320 && height === 568) await screenshot(cdp, "small-phone-320x568");
    }

    const keyboardViewports = [[390,500], [430,520], [320,360], [1365,360]];
    result.testsRun.keyboardLikeViewports = [];
    for (const [width, height] of keyboardViewports) {
      await setViewport(cdp, width, height);
      recordViewport("keyboardLikeViewportsChecked", width, height);
      await stageB1(cdp, fixtureIds.cloze, `keyboard-loop-${width}x${height}`);
      await evaluate(cdp, `(() => {
        const input = document.getElementById("b1InlineInput") || document.getElementById("answerInput");
        input.value = "falsch";
        input.dispatchEvent(new Event("input", { bubbles:true }));
        input.focus();
        return true;
      })()`, 15000);
      await focusActiveInput(cdp);
      const keyboardCheck = await rhythmSnapshot(cdp);
      keyboardCheck.width = width;
      keyboardCheck.height = height;
      result.testsRun.keyboardLikeViewports.push(keyboardCheck);
      recordLayoutCheck(`keyboard-cloze-${width}x${height}`, keyboardCheck, { focused:true, check:true });
      if (width === 1365 && height === 360) await screenshot(cdp, "short-height-1365x360");
    }

    await evaluate(cdp, `(() => {
      const ar = document.querySelector('[data-lang="ar"], .langBtn[data-lang="ar"]');
      if (ar) ar.click();
      return {
        bodyDir:getComputedStyle(document.body).direction,
        promptDir:getComputedStyle(document.getElementById("promptValue")).direction,
        inputDir:getComputedStyle(document.getElementById("answerInput")).direction
      };
    })()`);
    const ltr = await evaluate(cdp, `(() => ({
      promptDir:getComputedStyle(document.getElementById("promptValue")).direction,
      answerDir:getComputedStyle(document.getElementById("answerInput")).direction,
      gridDir:document.querySelector(".miniTable") ? getComputedStyle(document.querySelector(".miniTable")).direction : "ltr"
    }))()`);
    assert(ltr.promptDir === "ltr" && ltr.answerDir === "ltr", "Arabic/LTR smoke failed for German prompt or input.");
    result.testsRun.arabicLtr = ltr;

    fs.writeFileSync(comparisonPath, comparisonHtml());
    result.screenshotsGenerated.comparison = rel(comparisonPath);
    const comparisonRefs = verifyComparisonHtmlReferences();
    result.testsRun.comparisonHtml = comparisonRefs;
    assert(comparisonRefs.imageRefs >= 12 && comparisonRefs.missingRefs.length === 0, "comparison.html does not reference the required existing screenshots.");
    await setViewport(cdp, 1440, 1200);
    await cdp.send("Page.navigate", { url:`http://127.0.0.1:${port}/${rel(comparisonPath)}` });
    await evaluate(cdp, `new Promise(resolve => {
      const started = Date.now();
      function check(){
        const imgs = Array.from(document.images || []);
        const loaded = imgs.filter(img => img.complete && img.naturalWidth > 0 && img.naturalHeight > 0).length;
        if (imgs.length >= 12 && loaded === imgs.length) return resolve({ count:imgs.length, loaded, totalPixels:imgs.reduce((sum, img) => sum + img.naturalWidth * img.naturalHeight, 0) });
        if (Date.now() - started > 10000) return resolve({ count:imgs.length, loaded, totalPixels:imgs.reduce((sum, img) => sum + img.naturalWidth * img.naturalHeight, 0), timedOut:true });
        setTimeout(check, 160);
      }
      check();
    })`, 12000).then(load => {
      result.testsRun.contactSheetImages = load;
      assert(load.count >= 12 && load.loaded === load.count && load.totalPixels > 1000000, "Contact sheet images did not load before capture.");
    });
    await screenshot(cdp, "comparison-contact-sheet", { captureBeyondViewport:true });
    const contactSheetFile = path.join(screenshotRoot, "comparison-contact-sheet.png");
    const contactSheetSize = fs.statSync(contactSheetFile).size;
    result.testsRun.contactSheetFile = { bytes:contactSheetSize };
    assert(contactSheetSize > 50000, "Contact sheet PNG is too small and may be empty.");
    result.contactSheetVerified = true;
    setRun("browserCapture", true);
  } finally {
    if (cdp) cdp.close();
    server.close();
    browser.kill();
    await sleep(500);
    if (!keepProfile) {
      try { fs.rmSync(profileDir, { recursive:true, force:true }); }
      catch (error) { result.warnings.push(`Temporary Edge profile cleanup blocked by Windows file lock: ${profileDir}`); }
    }
  }
}

async function main() {
  try {
    runStaticChecks();
    await runBrowserChecks();
    await checkLiveGithubPages();
    assert(result.startingStateVerified, "Starting/final version state was not verified.");
    assert(Object.values(result.docsSyncPreflight).every(Boolean), "Stage 0 docs sync preflight did not pass.");
    assert(Object.values(result.surfacesChecked).every(Boolean), "Not all HUD/keyboard/mobile gate surfaces passed.");
    assertViewportSet("Responsive viewports", result.responsiveViewportsChecked, [[320,568], [390,844], [430,932], [768,1024], [1365,599], [1440,900]]);
    assertViewportSet("Keyboard-like viewports", result.keyboardLikeViewportsChecked, [[390,500], [430,520], [320,360], [1365,360]]);
    assert(result.hudOverlapFailures.length === 0, "HUD overlap failures captured.");
    assert(result.focusedControlVisibilityFailures.length === 0, "Focused control visibility failures captured.");
    assert(result.confidenceReachabilityFailures.length === 0, "Confidence reachability failures captured.");
    assert(result.horizontalOverflowFailures.length === 0, "Horizontal overflow failures captured.");
    assert(result.articleGridPreserved, "Article grid forms were not preserved.");
    assert(result.manualPhoneChecklistCreated, "Manual phone checklist was not created.");
    assert(result.contactSheetVerified, "Contact sheet was not verified.");
    assert(result.consoleErrors.length === 0, "Console errors captured.");
    assert(result.runtimeExceptions.length === 0, "Runtime exceptions captured.");
    if (!result.runtimeVersionUpdated) {
      result.finalDecision = "HUD_KEYBOARD_MOBILE_GATE_PARTIAL_NEEDS_REPAIR";
      result.nextPatch = "v0.85.3.8 - HUD, Keyboard, and Live Mobile Verification Gate";
      result.acceptancePassed = false;
      process.exitCode = 1;
      return;
    }
    result.finalDecision = "HUD_KEYBOARD_MOBILE_GATE_ACCEPTED";
    result.nextPatch = "v0.85.4 - Completion Gate Harness";
    result.acceptancePassed = true;
  } catch (error) {
    result.testsRun.error = error && error.stack || String(error);
    if (/Edge|CDP|browser|screenshot|contact sheet/i.test(String(error && error.message || error))) {
      result.finalDecision = "BLOCKED_BROWSER_CAPTURE_FAILED";
      result.nextPatch = "v0.85.3.8a - HUD, Keyboard, and Live Mobile Verification Retry";
    } else {
      result.finalDecision = "HUD_KEYBOARD_MOBILE_GATE_PARTIAL_NEEDS_REPAIR";
      result.nextPatch = "v0.85.3.8a - HUD, Keyboard, and Live Mobile Verification Retry";
    }
    result.acceptancePassed = false;
    process.exitCode = 1;
  } finally {
    fs.mkdirSync(path.dirname(resultPath), { recursive:true });
    fs.writeFileSync(resultPath, JSON.stringify(result, null, 2));
    console.log(JSON.stringify({
      acceptancePassed:result.acceptancePassed,
      finalDecision:result.finalDecision,
      appVersion:result.appVersion,
      exportVersion:result.exportVersion,
      screenshots:Object.keys(result.screenshotsGenerated).length,
      nextPatch:result.nextPatch
    }, null, 2));
  }
}

main();
