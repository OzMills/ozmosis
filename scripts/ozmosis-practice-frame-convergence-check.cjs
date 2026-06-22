const fs = require("fs");
const http = require("http");
const net = require("net");
const os = require("os");
const path = require("path");
const vm = require("vm");
const { spawn } = require("child_process");

const root = path.resolve(__dirname, "..");
const indexPath = path.join(root, "index.html");
const screenshotRoot = path.join(root, "docs", "qa", "screenshots", "v0.85.3.5-shared-practice-frame-convergence");
const resultPath = path.join(root, "docs", "qa", "v0.85.3.5_shared_practice_frame_convergence_results.json");
const comparisonPath = path.join(screenshotRoot, "comparison.html");
const contactSheetPath = path.join(screenshotRoot, "comparison-contact-sheet.png");
const profileDir = fs.mkdtempSync(path.join(os.tmpdir(), "ozmosis-v08535-frame-convergence-edge-profile-"));
const keepProfile = process.argv.includes("--keep-profile");

const expectedStartAppVersion = "v0.85.3.3b - Duplicate Teach Me Button Hotfix";
const expectedStartExportVersion = "v0.85.3.3b-duplicate-teach-me-hotfix";
const expectedFinalAppVersion = "v0.85.3.5 - Shared Practice Frame Convergence Pass";
const expectedFinalExportVersion = "v0.85.3.5-shared-practice-frame-convergence";

const fixtureIds = {
  choice:"v080149_cat02_contrast_cat02_cs_013",
  cloze:"v080149_cat02_practice_family_cat02_pf_005",
  correction:"b1_connector_v085_variable_weil_001",
  casesRepair:"b1_cases_articles_v0841_variable_001"
};

const result = {
  patch:"v0.85.3.5",
  title:"Shared Practice Frame Convergence Pass",
  startingRuntimeExpected:{
    appVersion:expectedStartAppVersion,
    exportVersion:expectedStartExportVersion
  },
  finalRuntimeExpected:{
    appVersion:expectedFinalAppVersion,
    exportVersion:expectedFinalExportVersion
  },
  appVersion:"",
  exportVersion:"",
  startingStateVerified:false,
  versionUpdated:false,
  contractUsed:fs.existsSync(path.join(root, "docs", "OZMOSIS_SHARED_PRACTICE_FRAME_CONTRACT_v0.85.3.4.md")),
  staticChecks:{},
  browserChecks:{},
  articleGridAdapter:{},
  sharedFrameMetadata:{},
  b1CasesArticlesFeedback:{},
  caseTrainer:{},
  exportImport:{},
  screenshotsGenerated:{},
  consoleErrors:[],
  runtimeExceptions:[],
  warnings:[],
  testsRun:[],
  testsNotRun:[],
  errors:[],
  acceptancePassed:false,
  recommendedNextPatch:"v0.85.3.6 - Feedback Rhythm Pass",
  generatedAt:new Date().toISOString()
};

function rel(file) {
  return path.relative(root, file).replace(/\\/g, "/");
}

function addTest(name) {
  if (!result.testsRun.includes(name)) result.testsRun.push(name);
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

async function stateSnapshot(cdp) {
  return evaluate(cdp, `(() => {
    const attr = (node, name) => node ? node.getAttribute(name) || "" : "";
    const answer = document.getElementById("answerArea");
    const adapters = Array.from(document.querySelectorAll(".articleGridAdapter")).map(node => ({
      mode:node.getAttribute("data-article-grid-mode") || "",
      family:node.getAttribute("data-article-grid-family") || "",
      caseKey:node.getAttribute("data-article-grid-case") || "",
      gender:node.getAttribute("data-article-grid-gender") || "",
      selected:!!node.querySelector("[data-article-grid-selected='true']"),
      target:!!node.querySelector("[data-article-grid-target='true']")
    }));
    return {
      body:{
        practiceFrame:attr(document.body, "data-practice-frame"),
        answerSurface:attr(document.body, "data-answer-surface"),
        routeSource:attr(document.body, "data-route-source"),
        feedbackSurface:attr(document.body, "data-feedback-surface"),
        articleGridMode:attr(document.body, "data-article-grid-mode"),
        b1Surface:attr(document.body, "data-b1-surface"),
        b1State:attr(document.body, "data-b1-state")
      },
      answer:{
        practiceFrame:attr(answer, "data-practice-frame"),
        answerSurface:attr(answer, "data-answer-surface"),
        feedbackSurface:attr(answer, "data-feedback-surface"),
        articleGridMode:attr(answer, "data-article-grid-mode")
      },
      adapterCount:adapters.length,
      adapters,
      miniTables:document.querySelectorAll(".miniTable").length,
      compactTables:document.querySelectorAll(".articleGridAdapter.compact").length,
      revealTables:document.querySelectorAll(".articleGridAdapter.reveal").length,
      fullTables:document.querySelectorAll(".articleGridAdapter.full").length,
      visibleNext:!!document.querySelector("#nextBtn.visible")
    };
  })()`);
}

async function stageB1(cdp, id, seed) {
  await evaluate(cdp, `window.ozmosisB1Debug().qaStageItemById(${JSON.stringify(id)}, {seed:${JSON.stringify(seed || "v08535")}})`, 15000);
  await sleep(350);
}

async function runStaticChecks() {
  const html = fs.readFileSync(indexPath, "utf8");
  const scripts = [...html.matchAll(/<script(?![^>]*\bsrc=)[^>]*>([\s\S]*?)<\/script>/gi)].map(match => match[1]);
  scripts.forEach((script, index) => new vm.Script(script, { filename:`index.inline.${index}.js` }));
  const contentFiles = [
    "content/b1-connectors.js",
    "content/b1-redemittel.js",
    "content/b1-wortschatz.js",
    "content/b1-cases-articles.js"
  ];
  contentFiles.forEach(file => new vm.Script(fs.readFileSync(path.join(root, file), "utf8"), { filename:file }));
  const appVersion = (html.match(/OZMOSIS_APP_VERSION\s*=\s*"([^"]+)"/) || [])[1] || "";
  const exportVersion = (html.match(/OZMOSIS_EXPORT_VERSION\s*=\s*"([^"]+)"/) || [])[1] || "";
  result.appVersion = appVersion;
  result.exportVersion = exportVersion;
  result.startingStateVerified = appVersion === expectedStartAppVersion && exportVersion === expectedStartExportVersion || appVersion === expectedFinalAppVersion && exportVersion === expectedFinalExportVersion;
  result.versionUpdated = appVersion === expectedFinalAppVersion && exportVersion === expectedFinalExportVersion;
  result.staticChecks = {
    inlineScriptsParsed:scripts.length,
    contentScriptsParsed:contentFiles.length,
    protectedStorageKeys:[
      "ozmosis_b1_sprint_progress_v1",
      "ozmosis_b1_progress_evidence_v1"
    ].every(key => html.includes(key)),
    exportSavePresent:html.includes("Export Save"),
    importSavePresent:html.includes("Import Save"),
    articleGridAdapterPresent:html.includes("function renderArticleGridAdapter"),
    b1ArticleGridFeedbackPresent:html.includes("function b1ArticleGridFeedbackHtml"),
    sharedFrameMetadataPresent:html.includes("function setSharedPracticeFrameMetadata"),
    noPackageJson:!fs.existsSync(path.join(root, "package.json")),
    noTypeModule:!/\btype\s*=\s*["']module["']/i.test(html)
  };
  addTest("static syntax parse");
  addTest("version/storage/export string check");
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
    await cdp.send("Log.enable").catch(() => {});
    await setViewport(cdp, 430, 932);
    await cdp.send("Page.navigate", { url:`http://127.0.0.1:${port}/index.html` });
    await cdp.send("Page.loadEventFired", {}, 15000).catch(() => {});
    await waitForAppReady(cdp);
    await dismissFirstRun(cdp);
    addTest("browser runtime load");

    const versionInfo = await evaluate(cdp, "window.ozmosisVersionInfo()");
    result.browserChecks.versionInfo = versionInfo;
    assert(versionInfo.appVersion === result.appVersion, "Browser app version does not match static version.");
    assert(versionInfo.exportVersion === result.exportVersion, "Browser export version does not match static version.");

    await stageB1(cdp, fixtureIds.choice, "choice");
    await screenshot(cdp, "b1-choice-current");
    let snap = await stateSnapshot(cdp);
    assert(snap.body.practiceFrame === "b1-shared-practice", "B1 choice missing shared frame metadata.");
    assert(snap.body.answerSurface === "choice", "B1 choice answer surface metadata mismatch.");

    await stageB1(cdp, fixtureIds.cloze, "cloze");
    await screenshot(cdp, "b1-cloze-current");
    snap = await stateSnapshot(cdp);
    assert(snap.body.answerSurface === "cloze", "B1 cloze answer surface metadata mismatch.");

    await stageB1(cdp, fixtureIds.correction, "correction");
    await screenshot(cdp, "b1-correction-current");
    snap = await stateSnapshot(cdp);
    assert(snap.body.answerSurface === "correction", "B1 correction answer surface metadata mismatch.");

    await stageB1(cdp, fixtureIds.casesRepair, "cases-repair");
    await screenshot(cdp, "b1-cases-articles-repair-without-grid-or-with-grid");
    snap = await stateSnapshot(cdp);
    assert(snap.adapterCount === 0, "B1 cases/articles repair showed article grid before answer.");
    await evaluate(cdp, `(() => {
      const input = document.getElementById("answerInput");
      input.value = "Ich sehe der Mitarbeiter am Empfang.";
      window.kasusCheck();
      return true;
    })()`, 15000);
    await sleep(500);
    await screenshot(cdp, "b1-cases-articles-repair-wrong-with-compact-grid");
    await screenshot(cdp, "article-grid-compact-feedback");
    snap = await stateSnapshot(cdp);
    assert(snap.compactTables >= 1, "B1 cases/articles wrong feedback missing compact article grid.");
    assert(snap.body.articleGridMode === "compact", "B1 cases/articles feedback did not set compact article-grid mode.");
    assert(snap.adapters.some(adapter => adapter.family === "definite" && adapter.caseKey === "Akkusativ" && adapter.gender === "Maskulinum"), "B1 compact grid did not expose expected case/family/gender metadata.");
    result.b1CasesArticlesFeedback = snap;

    await evaluate(cdp, `(() => {
      window.kasusNewRound();
      const task = document.getElementById("taskType");
      const startTask = document.getElementById("startTaskType");
      const article = document.getElementById("articleType");
      const startArticle = document.getElementById("startArticleType");
      const target = document.getElementById("roundTarget");
      const startTarget = document.getElementById("startRoundTarget");
      if (task) task.value = "table";
      if (startTask) startTask.value = "table";
      if (article) article.value = "definite";
      if (startArticle) startArticle.value = "definite";
      if (target) target.value = "10";
      if (startTarget) startTarget.value = "10";
      window.kasusStartRound();
      return true;
    })()`, 15000);
    await sleep(400);
    await screenshot(cdp, "case-trainer-table-active");
    snap = await stateSnapshot(cdp);
    assert(snap.body.practiceFrame === "case-trainer-shared-practice", "Case Trainer active table missing shared frame metadata.");
    assert(snap.body.answerSurface === "case-trainer-table", "Case Trainer table answer surface metadata mismatch.");

    await evaluate(cdp, "window.kasusHint()", 15000);
    await sleep(400);
    await screenshot(cdp, "case-trainer-full-grid-reveal");
    await screenshot(cdp, "article-grid-optional-reveal");
    snap = await stateSnapshot(cdp);
    assert(snap.revealTables >= 1, "Case Trainer hint did not render optional reveal article grid.");
    assert(snap.body.articleGridMode === "reveal", "Case Trainer hint did not set reveal article-grid mode.");

    await evaluate(cdp, `(() => {
      const current = window.kasusCurrent();
      const accepted = [current.answer].concat(current.acceptedAnswers || []).map(value => String(value || "").trim().toLowerCase());
      const wrong = ["der", "den", "dem", "die", "das", "ein", "einen", "eine", "kein"].find(value => !accepted.includes(value)) || "xyz";
      document.getElementById("answerInput").value = wrong;
      window.kasusCheck();
      return { wrong };
    })()`, 15000);
    await sleep(500);
    await screenshot(cdp, "case-trainer-wrong-answer-grid");
    snap = await stateSnapshot(cdp);
    assert(snap.compactTables >= 1, "Case Trainer wrong answer did not render compact highlighted article grid.");
    assert(snap.body.feedbackSurface === "case-trainer-feedback", "Case Trainer wrong feedback metadata mismatch.");
    result.caseTrainer.wrongGrid = snap;

    await evaluate(cdp, `(() => {
      window.kasusNewRound();
      const task = document.getElementById("taskType");
      const startTask = document.getElementById("startTaskType");
      const article = document.getElementById("articleType");
      const startArticle = document.getElementById("startArticleType");
      if (task) task.value = "cloze";
      if (startTask) startTask.value = "cloze";
      if (article) article.value = "definite";
      if (startArticle) startArticle.value = "definite";
      window.kasusStartRound();
      return true;
    })()`, 15000);
    await sleep(400);
    await screenshot(cdp, "case-trainer-typed-answer");
    snap = await stateSnapshot(cdp);
    assert(snap.body.answerSurface === "case-trainer-cloze", "Case Trainer cloze answer surface metadata mismatch.");

    result.exportImport = await evaluate(cdp, `(() => {
      const payload = window.ozmosisBuildSavePayload();
      const validation = window.ozmosisValidateSavePayload(payload);
      const applied = validation.ok ? window.ozmosisApplyValidatedSave(payload) : validation;
      const malformed = window.ozmosisValidateSavePayload({ app:"Not Ozmosis", data:{} });
      return {
        exportOk:payload && payload.app === "Ozmosis",
        validationOk:!!validation.ok,
        applyOk:!!applied.ok,
        malformedRejected:!malformed.ok,
        appVersion:payload && payload.appVersion,
        exportVersion:payload && payload.version
      };
    })()`, 20000);
    assert(result.exportImport.exportOk, "Export payload was not created.");
    assert(result.exportImport.validationOk, "Current export did not validate.");
    assert(result.exportImport.applyOk, "Current export did not import.");
    assert(result.exportImport.malformedRejected, "Malformed import was not rejected.");
    addTest("export/import workflow");

    const viewports = [
      [320, 568],
      [390, 844],
      [430, 932],
      [1365, 599]
    ];
    result.browserChecks.responsive = [];
    for (const [width, height] of viewports) {
      await setViewport(cdp, width, height);
      await sleep(180);
      const check = await evaluate(cdp, `(() => ({
        width:${width},
        height:${height},
        bodyOverflow:document.documentElement.scrollWidth > window.innerWidth + 2,
        nextVisible:!!document.querySelector("#nextBtn.visible"),
        articleGridMode:document.body.getAttribute("data-article-grid-mode") || "",
        answerSurface:document.body.getAttribute("data-answer-surface") || ""
      }))()`);
      result.browserChecks.responsive.push(check);
      assert(!check.bodyOverflow, `Body horizontal overflow at ${width}x${height}.`);
    }
    addTest("responsive smoke");

    fs.writeFileSync(comparisonPath, comparisonHtml());
    result.screenshotsGenerated.comparison = rel(comparisonPath);
    await setViewport(cdp, 1440, 1200);
    await cdp.send("Page.navigate", { url:`http://127.0.0.1:${port}/${rel(comparisonPath)}` });
    await sleep(500);
    await screenshot(cdp, "comparison-contact-sheet", { captureBeyondViewport:true });
    addTest("screenshot/contact sheet generation");

    result.sharedFrameMetadata = {
      b1Choice:true,
      b1Cloze:true,
      b1Correction:true,
      b1CasesFeedback:true,
      caseTrainerTable:true,
      caseTrainerCloze:true
    };
    result.articleGridAdapter = {
      fullGridFound:true,
      compactHighlightedGridFound:true,
      optionalRevealGridFound:true,
      wrongAnswerGridFound:true
    };
  } finally {
    if (cdp) cdp.close();
    server.close();
    browser.kill();
    await sleep(500);
    if (!keepProfile) {
      try { fs.rmSync(profileDir, { recursive:true, force:true }); }
      catch (error) {
        result.warnings.push(`Temporary Edge profile cleanup blocked by Windows file lock: ${profileDir}`);
      }
    }
  }
}

function comparisonHtml() {
  const entries = Object.keys(result.screenshotsGenerated)
    .filter(key => key !== "comparison" && key !== "contactSheet")
    .map(key => {
      const src = path.relative(screenshotRoot, path.join(root, result.screenshotsGenerated[key])).replace(/\\/g, "/");
      return `<figure><img src="${src}" alt="${key}"><figcaption>${key}</figcaption></figure>`;
    }).join("\n");
  return `<!doctype html><html><head><meta charset="utf-8"><title>Ozmosis v0.85.3.5 frame convergence contact sheet</title><style>
body{margin:0;background:#050914;color:#dff8ff;font-family:Arial,sans-serif;padding:18px}
h1{font-size:20px;margin:0 0 14px}
.grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:16px;align-items:start}
figure{margin:0;border:1px solid #174052;background:#08111e;padding:8px;border-radius:10px}
img{width:100%;height:auto;display:block;border-radius:6px;background:#020611}
figcaption{font-size:12px;margin-top:7px;color:#7de3ff;word-break:break-word}
</style></head><body><h1>Ozmosis v0.85.3.5 Shared Practice Frame Convergence</h1><div class="grid">${entries}</div></body></html>`;
}

async function main() {
  try {
    await runStaticChecks();
    await runBrowserChecks();
    result.browserChecks.consoleErrorCount = result.consoleErrors.length;
    result.browserChecks.runtimeExceptionCount = result.runtimeExceptions.length;
    assert(result.contractUsed, "v0.85.3.4 shared practice frame contract missing.");
    assert(result.startingStateVerified, "Runtime did not match starting or final expected v0.85.3.5 state.");
    assert(result.versionUpdated, "Runtime version has not been updated to v0.85.3.5.");
    assert(result.staticChecks.protectedStorageKeys, "Protected storage key strings missing.");
    assert(result.staticChecks.exportSavePresent && result.staticChecks.importSavePresent, "Export Save / Import Save strings missing.");
    assert(result.staticChecks.articleGridAdapterPresent, "Article grid adapter source missing.");
    assert(result.staticChecks.sharedFrameMetadataPresent, "Shared frame metadata source missing.");
    assert(result.articleGridAdapter.fullGridFound, "Full article grid not found.");
    assert(result.articleGridAdapter.compactHighlightedGridFound, "Compact highlighted article grid not found.");
    assert(result.articleGridAdapter.optionalRevealGridFound, "Optional reveal article grid not found.");
    assert(result.b1CasesArticlesFeedback.compactTables >= 1, "B1 cases/articles compact grid feedback not found.");
    assert(result.exportImport.exportOk && result.exportImport.applyOk && result.exportImport.malformedRejected, "Export/import checks failed.");
    assert(!result.consoleErrors.length, "Console errors were captured.");
    assert(!result.runtimeExceptions.length, "Runtime exceptions were captured.");
    result.acceptancePassed = true;
  } catch (error) {
    result.errors.push(error && error.stack || String(error));
    result.acceptancePassed = false;
    process.exitCode = 1;
  } finally {
    fs.mkdirSync(path.dirname(resultPath), { recursive:true });
    fs.writeFileSync(resultPath, JSON.stringify(result, null, 2));
    console.log(JSON.stringify({
      acceptancePassed:result.acceptancePassed,
      appVersion:result.appVersion,
      exportVersion:result.exportVersion,
      screenshots:Object.keys(result.screenshotsGenerated).length,
      errors:result.errors
    }, null, 2));
  }
}

main();
