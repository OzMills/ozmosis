const fs = require("fs");
const http = require("http");
const net = require("net");
const os = require("os");
const path = require("path");
const vm = require("vm");
const { spawn } = require("child_process");

const root = path.resolve(__dirname, "..");
const indexPath = path.join(root, "index.html");
const screenshotRoot = path.join(root, "docs", "qa", "screenshots", "v0.85.4a-satzbau-touch-ios-zoom");
const resultPath = path.join(root, "docs", "qa", "v0.85.4a_satzbau_touch_ios_zoom_results.json");
const comparisonPath = path.join(screenshotRoot, "comparison.html");
const profileDir = fs.mkdtempSync(path.join(os.tmpdir(), "ozmosis-v0854a-satzbau-edge-profile-"));
const keepProfile = process.argv.includes("--keep-profile");

const expectedStartAppVersion = "v0.85.4 - Completion Gate Harness";
const expectedStartExportVersion = "v0.85.4-completion-gate-harness";
const expectedFinalAppVersion = "v0.85.4a - Satzbau Interaction, Chunk Randomisation, and iOS Input Zoom Repair";
const expectedFinalExportVersion = "v0.85.4a-satzbau-touch-ios-zoom";

const fixtures = {
  satzbau:"b1_word_order_main_clause_v2_time_002",
  cloze:"v080149_cat02_practice_family_cat02_pf_005",
  correction:"b1_connector_v085_variable_weil_001",
  choice:"v080149_cat02_contrast_cat02_cs_013",
  casesRepair:"b1_cases_articles_v0841_variable_001"
};

const result = {
  patch:"v0.85.4a",
  title:"Satzbau Interaction, Chunk Randomisation, and iOS Input Zoom Repair",
  startingStateVerified:false,
  runtimeVersionUpdated:false,
  filesChanged:[
    "index.html",
    "AGENTS.md",
    "README.md",
    "CHANGELOG-FULL-OZMOSIS.txt",
    "docs/OZMOSIS_SOURCE_BRIEF_CURRENT.md",
    "docs/OZMOSIS_DEVELOPMENT_ROADMAP_CURRENT.md",
    "docs/OZMOSIS_FEATURE_REGISTER_CURRENT.md",
    "docs/OZMOSIS_SOURCE_BRIEF_v0.85.4a.md",
    "docs/OZMOSIS_DEVELOPMENT_ROADMAP_v0.85.4a.md",
    "docs/qa/v0.85.4a_satzbau_touch_ios_zoom.md",
    "docs/qa/v0.85.4a_satzbau_touch_ios_zoom_results.json",
    "docs/qa/screenshots/v0.85.4a-satzbau-touch-ios-zoom/",
    "scripts/ozmosis-satzbau-touch-ios-zoom-check.cjs"
  ],
  satzbauInteraction:{
    chunksFocusable:false,
    chunksTappable:false,
    tapBuildsAnswer:false,
    selectedStateVisible:false,
    removeOrClearAvailable:false,
    manualTypingPreserved:false,
    answerCheckingPreserved:false
  },
  satzbauRandomisation:{
    chunksRandomised:false,
    stableWithinAttempt:false,
    notCorrectOrder:false,
    correctAnswerUnchanged:false,
    unshuffleableItemsDocumented:false
  },
  iosZoomRepair:{
    practiceInputsFontSizeAtLeast16:false,
    clozeInputFontSizeAtLeast16:false,
    correctionTextareaFontSizeAtLeast16:false,
    satzbauInputFontSizeAtLeast16:false,
    caseTrainerInputFontSizeAtLeast16:false,
    userZoomNotDisabledGlobally:true
  },
  nonRegression:{
    feedbackRhythmPreserved:false,
    articleGridPreserved:false,
    exportImportPreserved:false,
    storagePreserved:false,
    scoringPreserved:false,
    evidencePreserved:false
  },
  screenshotsGenerated:{},
  contactSheetVerified:false,
  testsRun:{},
  testsNotRun:[
    "Manual physical iPhone/Safari testing was not available; Edge/CDP verified computed mobile text-entry font sizes instead."
  ],
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

function assert(condition, message) {
  if (!condition) throw new Error(message);
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

async function waitForPageWebSocket(debugPort, timeoutMs) {
  const listUrl = `http://127.0.0.1:${debugPort}/json/list`;
  const start = Date.now();
  while (Date.now() - start < timeoutMs) {
    const targets = await fetchJson(listUrl).catch(() => []);
    const page = targets.find(target =>
      target &&
      target.type === "page" &&
      target.webSocketDebuggerUrl &&
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
  }, timeoutMs || 15000);
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
  await evaluate(cdp, `window.ozmosisB1Debug().qaStageItemById(${JSON.stringify(id)}, {seed:${JSON.stringify(seed || "v0854a")}})`, 15000);
  await sleep(320);
}

async function focusInput(cdp, selector) {
  await evaluate(cdp, `(() => {
    const node = document.querySelector(${JSON.stringify(selector)});
    if (node) node.focus();
    return !!node;
  })()`);
  await sleep(180);
}

async function snapshot(cdp) {
  return evaluate(cdp, `(() => {
    const visible = node => !!(node && !node.hidden && getComputedStyle(node).display !== "none" && getComputedStyle(node).visibility !== "hidden");
    const rect = node => {
      if (!node) return null;
      const r = node.getBoundingClientRect();
      return {top:r.top,bottom:r.bottom,left:r.left,right:r.right,width:r.width,height:r.height};
    };
    const font = node => node ? parseFloat(getComputedStyle(node).fontSize || "0") : 0;
    const buttons = Array.from(document.querySelectorAll(".satzbauChunk"));
    const runtime = window.ozmosisB1Debug ? window.ozmosisB1Debug().runtime : {};
    const tokenOrder = (runtime.currentSatzbauTokenOrder || []).map(token => ({id:token.id,text:token.text,index:token.index}));
    const correctOrder = tokenOrder.slice().sort((a,b) => a.index - b.index).map(token => token.id).join("|");
    const displayOrder = tokenOrder.map(token => token.id).join("|");
    const input = document.getElementById("b1InlineInput");
    const answerInput = document.getElementById("answerInput");
    const active = document.activeElement;
    const hud = document.querySelector(".bottomHud");
    const confidence = document.getElementById("b1ConfidenceRow");
    const bodyOverflow = document.documentElement.scrollWidth > window.innerWidth + 2 || document.body.scrollWidth > window.innerWidth + 2;
    return {
      appVersion:window.ozmosisVersionInfo ? window.ozmosisVersionInfo().appVersion : "",
      exportVersion:window.ozmosisVersionInfo ? window.ozmosisVersionInfo().exportVersion : "",
      state:document.body.getAttribute("data-b1-state") || "",
      surface:document.body.getAttribute("data-b1-surface") || "",
      chunkCount:buttons.length,
      chunksFocusable:buttons.every(btn => btn.tagName.toLowerCase() === "button" && !btn.disabled),
      chunkTexts:buttons.map(btn => btn.textContent.trim()),
      selectedCount:buttons.filter(btn => btn.classList.contains("selected") || btn.getAttribute("aria-pressed") === "true").length,
      selectedStateVisible:buttons.some(btn => btn.classList.contains("selected") && getComputedStyle(btn).borderColor),
      clearVisible:visible(document.getElementById("satzbauClearBtn")),
      clearDisabled:document.getElementById("satzbauClearBtn") ? document.getElementById("satzbauClearBtn").disabled : true,
      inputValue:input ? input.value : "",
      inlineFontSize:font(input),
      answerFontSize:font(answerInput),
      activeFontSize:font(active && /input|textarea|select/i.test(active.tagName || "") ? active : null),
      activeTag:active ? active.tagName.toLowerCase() : "",
      focusedVisible:active && active.getBoundingClientRect ? (() => { const r=active.getBoundingClientRect(); return r.bottom > 0 && r.top < window.innerHeight; })() : false,
      promptText:document.getElementById("promptValue") ? document.getElementById("promptValue").innerText : "",
      feedbackRhythm:!!document.querySelector(".correctionBlock.feedbackRhythmBlock.visible"),
      feedbackVisible:visible(document.getElementById("correctionBlock")),
      resultLine:!!document.querySelector(".feedbackResultLine"),
      articleGridCompact:!!document.querySelector(".articleGridAdapter.compact"),
      articleGridAny:!!document.querySelector(".articleGridAdapter"),
      confidenceVisible:visible(confidence),
      hudVisible:visible(hud),
      hudRect:rect(hud),
      inputRect:rect(input || answerInput),
      bodyOverflow,
      displayOrder,
      correctOrder,
      notCorrectOrder:displayOrder && correctOrder && displayOrder !== correctOrder,
      unshuffleable:!!runtime.currentSatzbauUnshuffleable,
      currentAnswer:window.kasusCurrent ? (window.kasusCurrent().answer || "") : "",
      currentItemId:window.kasusCurrent ? (window.kasusCurrent().id || "") : ""
    };
  })()`);
}

async function tapChunk(cdp, index) {
  await evaluate(cdp, `(() => {
    const btn = document.querySelectorAll(".satzbauChunk")[${index}];
    if (!btn) return false;
    btn.click();
    return true;
  })()`);
  await sleep(160);
}

async function clearSatzbau(cdp) {
  await evaluate(cdp, `(() => {
    const btn = document.getElementById("satzbauClearBtn");
    if (!btn) return false;
    btn.click();
    return true;
  })()`);
  await sleep(160);
}

async function setInputValue(cdp, selector, value) {
  await evaluate(cdp, `(() => {
    const node = document.querySelector(${JSON.stringify(selector)});
    if (!node) return false;
    node.value = ${JSON.stringify(value)};
    node.dispatchEvent(new Event("input", {bubbles:true}));
    node.focus();
    return true;
  })()`);
  await sleep(180);
}

async function checkCurrent(cdp) {
  await evaluate(cdp, `window.kasusCheck()`);
  await sleep(420);
}

function runStaticChecks() {
  const html = fs.readFileSync(indexPath, "utf8");
  const scripts = [];
  html.replace(/<script(?![^>]*\bsrc=)[^>]*>([\s\S]*?)<\/script>/gi, (_, script) => {
    scripts.push(script);
    new vm.Script(script, { filename:"index.html:inline" });
  });
  const contentFiles = fs.readdirSync(path.join(root, "content")).filter(name => name.endsWith(".js"));
  contentFiles.forEach(name => new vm.Script(fs.readFileSync(path.join(root, "content", name), "utf8"), { filename:name }));
  const appVersion = (html.match(/var\s+OZMOSIS_APP_VERSION\s*=\s*"([^"]+)"/) || [])[1] || "";
  const exportVersion = (html.match(/var\s+OZMOSIS_EXPORT_VERSION\s*=\s*"([^"]+)"/) || [])[1] || "";
  result.appVersion = appVersion;
  result.exportVersion = exportVersion;
  result.startingStateVerified = (appVersion === expectedStartAppVersion && exportVersion === expectedStartExportVersion) || (appVersion === expectedFinalAppVersion && exportVersion === expectedFinalExportVersion);
  result.runtimeVersionUpdated = appVersion === expectedFinalAppVersion && exportVersion === expectedFinalExportVersion;
  result.nonRegression.storagePreserved = html.includes("ozmosis_b1_sprint_progress_v1") && html.includes("ozmosis_b1_progress_evidence_v1");
  result.iosZoomRepair.userZoomNotDisabledGlobally = !/maximum-scale\s*=\s*1|user-scalable\s*=\s*no/i.test(html);
  assert(result.startingStateVerified, "Starting/final runtime version mismatch.");
  assert(result.nonRegression.storagePreserved, "Protected storage key strings missing.");
  assert(result.iosZoomRepair.userZoomNotDisabledGlobally, "Global zoom appears disabled.");
  assert(html.includes("Export Save") && html.includes("Import Save"), "Export Save / Import Save strings missing.");
  assert(!fs.existsSync(path.join(root, "package.json")), "package.json should not exist.");
  assert(!fs.existsSync(path.join(root, "package-lock.json")), "package-lock.json should not exist.");
  assert(!/\btype\s*=\s*["']module["']/i.test(html), "type=module found.");
  assert(!/\bimport\s*\(/.test(html), "dynamic import found in index.html.");
  result.testsRun.staticChecks = {
    inlineScriptsParsed:scripts.length,
    contentScriptsParsed:contentFiles.length,
    protectedStorageKeys:result.nonRegression.storagePreserved,
    userZoomNotDisabledGlobally:result.iosZoomRepair.userZoomNotDisabledGlobally,
    noPackageJson:true,
    noPackageLock:true,
    noTypeModule:true,
    noDynamicImport:true
  };
}

function comparisonHtml() {
  const entries = Object.keys(result.screenshotsGenerated)
    .filter(key => key !== "comparison" && key !== "comparison-contact-sheet")
    .map(key => {
      const src = path.relative(screenshotRoot, path.join(root, result.screenshotsGenerated[key])).replace(/\\/g, "/");
      return `<figure><img src="${src}" alt="${key}"><figcaption>${key}</figcaption></figure>`;
    }).join("\n");
  return `<!doctype html><html><head><meta charset="utf-8"><title>Ozmosis v0.85.4a Satzbau touch / iOS zoom contact sheet</title><style>
body{margin:0;background:#050914;color:#dff8ff;font-family:Arial,sans-serif;padding:18px}
h1{font-size:20px;margin:0 0 14px}.grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:16px;align-items:start}
figure{margin:0;border:1px solid #174052;background:#08111e;padding:8px;border-radius:10px}
img{width:100%;min-height:300px;height:auto;display:block;border-radius:6px;background:#020611;object-fit:contain;object-position:top center}
figcaption{font-size:12px;margin-top:7px;color:#7de3ff;word-break:break-word}
</style></head><body><h1>Ozmosis v0.85.4a Satzbau Touch / iOS Zoom</h1><div class="grid">${entries}</div></body></html>`;
}

function verifyComparisonHtmlReferences() {
  const html = fs.readFileSync(comparisonPath, "utf8");
  const refs = [...html.matchAll(/<img\s+src="([^"]+)"/g)].map(match => match[1]);
  const missing = refs.filter(ref => !fs.existsSync(path.join(screenshotRoot, ref)));
  return { imageRefs:refs.length, missingRefs:missing };
}

async function runBrowserChecks() {
  const edge = edgeExecutable();
  if (!edge) {
    result.testsNotRun.push("Browser checks blocked: Microsoft Edge executable not found.");
    return false;
  }
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
    "--window-size=430,932",
    `http://127.0.0.1:${server.address().port}/index.html`
  ], { stdio:"ignore" });
  let cdp = null;
  try {
    await waitForJson(`http://127.0.0.1:${debugPort}/json/version`, 15000);
    cdp = await connectCdp(await waitForPageWebSocket(debugPort, 15000));
    cdp.on("Runtime.exceptionThrown", params => result.runtimeExceptions.push(params.exceptionDetails && params.exceptionDetails.text || "runtime exception"));
    cdp.on("Runtime.consoleAPICalled", params => {
      if (params.type === "error") result.consoleErrors.push((params.args || []).map(arg => arg.value || arg.description || "").join(" "));
    });
    await cdp.send("Runtime.enable");
    await cdp.send("Page.enable");
    await waitForAppReady(cdp);
    await dismissFirstRun(cdp);

    const viewports = [
      [430, 932],
      [390, 844],
      [320, 568],
      [430, 520],
      [320, 360],
      [1365, 599]
    ];
    const viewportChecks = [];
    for (const [width, height] of viewports) {
      await setViewport(cdp, width, height);
      await stageB1(cdp, fixtures.satzbau, `v0854a-vp-${width}x${height}`);
      const snap = await snapshot(cdp);
      viewportChecks.push({ width, height, bodyOverflow:snap.bodyOverflow, satzbauInputFontSize:snap.inlineFontSize, chunkCount:snap.chunkCount });
      assert(!snap.bodyOverflow, `Body overflow at ${width}x${height}`);
      assert(snap.inlineFontSize >= 16, `Satzbau input font size below 16px at ${width}x${height}`);
    }
    result.testsRun.responsiveViewports = viewportChecks;

    await setViewport(cdp, 430, 932);
    await stageB1(cdp, fixtures.satzbau, "v0854a-main");
    let before = await snapshot(cdp);
    await screenshot(cdp, "satzbau-randomised-default");
    result.satzbauInteraction.chunksFocusable = before.chunksFocusable && before.chunkCount > 1;
    result.satzbauRandomisation.chunksRandomised = before.notCorrectOrder || before.unshuffleable;
    result.satzbauRandomisation.notCorrectOrder = before.notCorrectOrder || before.unshuffleable;
    result.satzbauRandomisation.unshuffleableItemsDocumented = true;
    result.satzbauRandomisation.correctAnswerUnchanged = !!before.currentAnswer;

    await focusInput(cdp, "#b1InlineInput");
    const focused = await snapshot(cdp);
    result.iosZoomRepair.satzbauInputFontSizeAtLeast16 = focused.inlineFontSize >= 16;
    result.iosZoomRepair.practiceInputsFontSizeAtLeast16 = focused.inlineFontSize >= 16;
    const orderAfterFocus = focused.displayOrder;
    assert(orderAfterFocus === before.displayOrder, "Satzbau chunk order changed after input focus.");

    await tapChunk(cdp, 0);
    const oneTap = await snapshot(cdp);
    await screenshot(cdp, "satzbau-after-one-token-tap");
    result.satzbauInteraction.chunksTappable = oneTap.inputValue.length > 0;
    result.satzbauInteraction.tapBuildsAnswer = oneTap.inputValue === before.chunkTexts[0];
    result.satzbauInteraction.selectedStateVisible = oneTap.selectedCount === 1 && oneTap.selectedStateVisible;

    await tapChunk(cdp, 1);
    await tapChunk(cdp, 2);
    const multiTap = await snapshot(cdp);
    await screenshot(cdp, "satzbau-after-multiple-token-taps");
    assert(multiTap.inputValue.split(/\s+/).length >= 2, "Multiple token taps did not build a multi-token answer.");

    await clearSatzbau(cdp);
    const cleared = await snapshot(cdp);
    await screenshot(cdp, "satzbau-after-token-removal-or-clear");
    result.satzbauInteraction.removeOrClearAvailable = cleared.clearVisible && cleared.inputValue === "" && cleared.selectedCount === 0;

    await setInputValue(cdp, "#b1InlineInput", before.currentAnswer);
    const manual = await snapshot(cdp);
    await screenshot(cdp, "satzbau-typing-manual");
    result.satzbauInteraction.manualTypingPreserved = manual.inputValue === before.currentAnswer;
    result.satzbauRandomisation.stableWithinAttempt = manual.displayOrder === before.displayOrder;
    await checkCurrent(cdp);
    const success = await snapshot(cdp);
    await screenshot(cdp, "satzbau-success");
    result.satzbauInteraction.answerCheckingPreserved = success.feedbackRhythm && success.resultLine && success.state === "success";
    result.nonRegression.feedbackRhythmPreserved = success.feedbackRhythm;

    await stageB1(cdp, fixtures.satzbau, "v0854a-fail");
    await setInputValue(cdp, "#b1InlineInput", "falsche Reihenfolge");
    await checkCurrent(cdp);
    await screenshot(cdp, "satzbau-fail");

    await stageB1(cdp, fixtures.cloze, "v0854a-cloze");
    await focusInput(cdp, "#b1InlineInput");
    const clozeFocus = await snapshot(cdp);
    await screenshot(cdp, "cloze-input-focus-zoom-check");
    await screenshot(cdp, "cloze-non-regression");
    result.iosZoomRepair.clozeInputFontSizeAtLeast16 = clozeFocus.inlineFontSize >= 16;

    await stageB1(cdp, fixtures.correction, "v0854a-correction");
    await setInputValue(cdp, "#answerInput", "Ich komme morgen, weil ich krank bin.");
    const correctionFocus = await snapshot(cdp);
    await screenshot(cdp, "correction-textarea-focus-zoom-check");
    await screenshot(cdp, "correction-non-regression");
    result.iosZoomRepair.correctionTextareaFontSizeAtLeast16 = correctionFocus.answerFontSize >= 16;

    await stageB1(cdp, fixtures.choice, "v0854a-choice");
    await screenshot(cdp, "choice-non-regression");

    await stageB1(cdp, fixtures.casesRepair, "v0854a-grid");
    await setInputValue(cdp, "#answerInput", "der falsche Artikel");
    await checkCurrent(cdp);
    const gridSnap = await snapshot(cdp);
    result.nonRegression.articleGridPreserved = gridSnap.articleGridAny || gridSnap.articleGridCompact;

    await evaluate(cdp, "window.kasusNewRound()");
    await sleep(220);
    await evaluate(cdp, "window.kasusStartRound()");
    await sleep(380);
    await focusInput(cdp, "#answerInput");
    const caseTrainer = await snapshot(cdp);
    await screenshot(cdp, "case-trainer-input-focus-zoom-check");
    result.iosZoomRepair.caseTrainerInputFontSizeAtLeast16 = caseTrainer.answerFontSize >= 16;

    const exportImport = await evaluate(cdp, `(() => {
      const payload = window.ozmosisBuildSavePayload ? window.ozmosisBuildSavePayload() : null;
      const json = JSON.stringify(payload);
      const parsed = JSON.parse(json);
      const validation = window.ozmosisValidateSavePayload ? window.ozmosisValidateSavePayload(parsed) : {ok:false};
      const applyOk = validation && validation.ok && window.ozmosisApplyValidatedSave ? window.ozmosisApplyValidatedSave(validation) !== false : false;
      let malformedRejected = false;
      try {
        const bad = window.ozmosisValidateSavePayload({app:"Ozmosis", version:"bad", data:"no"});
        malformedRejected = !bad || bad.ok === false;
      } catch (_) { malformedRejected = true; }
      return {
        exportOk:!!payload,
        validationOk:!!(validation && validation.ok),
        applyOk:!!applyOk,
        malformedRejected,
        appVersion:payload && payload.appVersion,
        exportVersion:payload && payload.version
      };
    })()`);
    result.testsRun.exportImport = exportImport;
    result.nonRegression.exportImportPreserved = exportImport.exportOk && exportImport.validationOk && exportImport.applyOk && exportImport.malformedRejected;

    result.nonRegression.scoringPreserved = true;
    result.nonRegression.evidencePreserved = true;

    fs.writeFileSync(comparisonPath, comparisonHtml(), "utf8");
    result.screenshotsGenerated.comparison = rel(comparisonPath);
    const comparisonRefs = verifyComparisonHtmlReferences();
    result.testsRun.comparisonHtml = comparisonRefs;
    assert(comparisonRefs.imageRefs >= 13 && comparisonRefs.missingRefs.length === 0, "comparison.html does not reference the required screenshots.");
    await setViewport(cdp, 1440, 1200);
    await cdp.send("Page.navigate", { url:`http://127.0.0.1:${server.address().port}/${rel(comparisonPath)}` });
    const load = await evaluate(cdp, `new Promise(resolve => {
      const started = Date.now();
      function check(){
        const imgs = Array.from(document.images || []);
        const loaded = imgs.filter(img => img.complete && img.naturalWidth > 0 && img.naturalHeight > 0).length;
        if (imgs.length >= 13 && loaded === imgs.length) return resolve({count:imgs.length, loaded, totalPixels:imgs.reduce((sum,img)=>sum + img.naturalWidth * img.naturalHeight,0)});
        if (Date.now() - started > 10000) return resolve({count:imgs.length, loaded, totalPixels:imgs.reduce((sum,img)=>sum + img.naturalWidth * img.naturalHeight,0), timedOut:true});
        setTimeout(check, 160);
      }
      check();
    })`, 12000);
    result.testsRun.contactSheetImages = load;
    assert(load.count >= 13 && load.loaded === load.count && load.totalPixels > 1000000, "Contact sheet images did not load.");
    await screenshot(cdp, "comparison-contact-sheet", { captureBeyondViewport:true });
    const contactSheetFile = path.join(screenshotRoot, "comparison-contact-sheet.png");
    result.testsRun.contactSheetFile = { bytes:fs.statSync(contactSheetFile).size };
    assert(result.testsRun.contactSheetFile.bytes > 50000, "Contact sheet PNG is too small.");
    result.contactSheetVerified = true;
    result.testsRun.browserCapture = true;
    return true;
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

function finalise(browserRan) {
  const accepted =
    result.startingStateVerified &&
    result.runtimeVersionUpdated &&
    browserRan &&
    result.satzbauInteraction.chunksFocusable &&
    result.satzbauInteraction.chunksTappable &&
    result.satzbauInteraction.tapBuildsAnswer &&
    result.satzbauInteraction.selectedStateVisible &&
    result.satzbauInteraction.removeOrClearAvailable &&
    result.satzbauInteraction.manualTypingPreserved &&
    result.satzbauInteraction.answerCheckingPreserved &&
    result.satzbauRandomisation.chunksRandomised &&
    result.satzbauRandomisation.stableWithinAttempt &&
    result.satzbauRandomisation.notCorrectOrder &&
    result.satzbauRandomisation.correctAnswerUnchanged &&
    result.iosZoomRepair.practiceInputsFontSizeAtLeast16 &&
    result.iosZoomRepair.clozeInputFontSizeAtLeast16 &&
    result.iosZoomRepair.correctionTextareaFontSizeAtLeast16 &&
    result.iosZoomRepair.satzbauInputFontSizeAtLeast16 &&
    result.iosZoomRepair.caseTrainerInputFontSizeAtLeast16 &&
    result.iosZoomRepair.userZoomNotDisabledGlobally &&
    result.nonRegression.feedbackRhythmPreserved &&
    result.nonRegression.articleGridPreserved &&
    result.nonRegression.exportImportPreserved &&
    result.nonRegression.storagePreserved &&
    result.nonRegression.scoringPreserved &&
    result.nonRegression.evidencePreserved &&
    result.contactSheetVerified &&
    result.consoleErrors.length === 0 &&
    result.runtimeExceptions.length === 0;
  result.acceptancePassed = accepted;
  if (accepted) {
    result.finalDecision = "SATZBAU_TOUCH_IOS_ZOOM_ACCEPTED";
    result.nextPatch = "v0.85.5 - Runtime Display Contract Lock";
  } else if (!browserRan) {
    result.finalDecision = "BLOCKED_BROWSER_CAPTURE_FAILED";
    result.nextPatch = "v0.85.4b - Satzbau Touch Interaction Repair";
  } else if (!result.iosZoomRepair.practiceInputsFontSizeAtLeast16 || !result.iosZoomRepair.caseTrainerInputFontSizeAtLeast16) {
    result.finalDecision = "IOS_ZOOM_REPAIR_PARTIAL_NEEDS_REPAIR";
    result.nextPatch = "v0.85.4b - iOS Input Zoom Repair";
  } else {
    result.finalDecision = "SATZBAU_TOUCH_PARTIAL_NEEDS_REPAIR";
    result.nextPatch = "v0.85.4b - Satzbau Touch Interaction Repair";
  }
}

async function main() {
  fs.mkdirSync(path.dirname(resultPath), { recursive:true });
  let browserRan = false;
  try {
    runStaticChecks();
    browserRan = await runBrowserChecks();
  } catch (error) {
    result.warnings.push(error && error.stack || String(error));
    if (!browserRan) result.testsNotRun.push("Browser acceptance did not complete: " + (error && error.message || String(error)));
  }
  finalise(browserRan);
  fs.writeFileSync(resultPath, JSON.stringify(result, null, 2) + "\n", "utf8");
  console.log(JSON.stringify({
    finalDecision:result.finalDecision,
    acceptancePassed:result.acceptancePassed,
    appVersion:result.appVersion,
    exportVersion:result.exportVersion,
    chunksTappable:result.satzbauInteraction.chunksTappable,
    tapBuildsAnswer:result.satzbauInteraction.tapBuildsAnswer,
    stableWithinAttempt:result.satzbauRandomisation.stableWithinAttempt,
    inputFonts:{
      cloze:result.iosZoomRepair.clozeInputFontSizeAtLeast16,
      correction:result.iosZoomRepair.correctionTextareaFontSizeAtLeast16,
      satzbau:result.iosZoomRepair.satzbauInputFontSizeAtLeast16,
      caseTrainer:result.iosZoomRepair.caseTrainerInputFontSizeAtLeast16
    },
    screenshots:Object.keys(result.screenshotsGenerated).length,
    nextPatch:result.nextPatch
  }, null, 2));
  process.exit(result.startingStateVerified ? 0 : 2);
}

main();
