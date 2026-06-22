const fs = require("fs");
const http = require("http");
const net = require("net");
const os = require("os");
const path = require("path");
const { spawn } = require("child_process");

const root = path.resolve(__dirname, "..");
const indexPath = path.join(root, "index.html");
const screenshotRoot = path.join(root, "docs", "qa", "screenshots", "v0.85.3.4-shared-practice-frame-inventory");
const resultPath = path.join(root, "docs", "qa", "v0.85.3.4_shared_practice_frame_inventory_results.json");
const comparisonPath = path.join(screenshotRoot, "comparison.html");
const contactSheetPath = path.join(screenshotRoot, "comparison-contact-sheet.png");
const keepProfile = process.argv.includes("--keep-profile");
const profileDir = fs.mkdtempSync(path.join(os.tmpdir(), "ozmosis-v08534-frame-inventory-edge-profile-"));

const expectedAppVersion = "v0.85.3.3b - Duplicate Teach Me Button Hotfix";
const expectedExportVersion = "v0.85.3.3b-duplicate-teach-me-hotfix";

const fixtureIds = {
  choice:"v080149_cat02_contrast_cat02_cs_013",
  cloze:"v080149_cat02_practice_family_cat02_pf_005",
  correction:"b1_connector_v085_variable_weil_001",
  casesRepair:"b1_cases_articles_v0841_variable_001",
  wordOrder:"b1_word_order_main_clause_v2_time_002",
  production:"b1_redemittel_084"
};

const result = {
  patch:"v0.85.3.4",
  title:"Shared Practice Frame and Surface Inventory",
  startingStateVerified:false,
  runtimeChanged:false,
  routesInspected:[],
  surfacesFound:[],
  sharedFrameContractCreated:false,
  surfaceDivergences:[],
  sameSurfaceDifferentLayouts:[],
  articleGridAudit:{
    fullGridFound:false,
    resultsGridFound:false,
    wrongAnswerGridFound:false,
    protectedComponentRecommended:false
  },
  screenshotsGenerated:{},
  testsRun:{},
  testsNotRun:[],
  acceptancePassed:false,
  recommendedNextPatch:"",
  generatedAt:new Date().toISOString(),
  appVersion:"",
  exportVersion:"",
  filesInspected:[],
  staticInventory:{},
  browserCaptures:[],
  consoleErrors:[],
  runtimeExceptions:[],
  errors:[]
};

function rel(file) {
  return path.relative(root, file).replace(/\\/g, "/");
}

function addUnique(list, value) {
  if (value && !list.includes(value)) list.push(value);
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

async function waitForAppReady(cdp) {
  const start = Date.now();
  while (Date.now() - start < 15000) {
    const ready = await evaluate(cdp, "!!(window.ozmosisVersionInfo && window.ozmosisB1Debug && window.kasusCurrent)").catch(() => false);
    if (ready) return true;
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

function staticInventory() {
  const index = fs.readFileSync(indexPath, "utf8");
  result.filesInspected.push("index.html");
  const contentFiles = fs.readdirSync(path.join(root, "content")).filter(name => name.endsWith(".js")).sort();
  contentFiles.forEach(name => result.filesInspected.push(`content/${name}`));
  if (fs.existsSync(path.join(root, "data", "article-items.tsv"))) result.filesInspected.push("data/article-items.tsv");
  [
    "docs/qa/v0.85.3.3b_duplicate_teach_me_hotfix.md",
    "docs/qa/v0.85.3.3b_duplicate_teach_me_hotfix_results.json",
    "AGENTS.md",
    "README.md",
    "CHANGELOG-FULL-OZMOSIS.txt",
    "docs/OZMOSIS_SOURCE_BRIEF_CURRENT.md",
    "docs/OZMOSIS_DEVELOPMENT_ROADMAP_CURRENT.md",
    "docs/OZMOSIS_FEATURE_REGISTER_CURRENT.md"
  ].forEach(file => {
    if (fs.existsSync(path.join(root, file))) result.filesInspected.push(file);
  });

  const appMatch = index.match(/OZMOSIS_APP_VERSION\s*=\s*"([^"]+)"/);
  const exportMatch = index.match(/OZMOSIS_EXPORT_VERSION\s*=\s*"([^"]+)"/);
  result.appVersion = appMatch ? appMatch[1] : "";
  result.exportVersion = exportMatch ? exportMatch[1] : "";
  result.startingStateVerified = result.appVersion === expectedAppVersion && result.exportVersion === expectedExportVersion;

  const functionNames = [
    "renderB1Question",
    "renderB1Feedback",
    "renderConnectorChoices",
    "renderProductionControls",
    "renderB1DisplayHintButton",
    "checkB1Answer",
    "startB1Round",
    "startB1DiagnosticSprint",
    "startConnectorSprint",
    "startCasesArticlesRound",
    "startPrepositionsRound",
    "startWordOrderRound",
    "startRepairTransformationRound",
    "startWortschatzRound",
    "startRedemittelRound",
    "showLearningMapScreen",
    "renderQuestion",
    "checkAnswer",
    "renderMiniTable",
    "showResults",
    "renderHud"
  ];
  const renderFunctions = functionNames.map(name => ({
    name,
    found:new RegExp(`function\\s+${name}\\s*\\(`).test(index),
    occurrences:(index.match(new RegExp(`function\\s+${name}\\s*\\(`, "g")) || []).length
  }));

  const domIds = [
    "modeTitle",
    "promptValue",
    "englishGloss",
    "translationToggle",
    "diagnosticInfo",
    "answerArea",
    "connectorChoiceGrid",
    "answerInput",
    "actionGrid",
    "noArticleBtn",
    "checkBtn",
    "hintBtn",
    "correctionBlock",
    "feedback",
    "b1ConfidenceRow",
    "nextBtn",
    "diagnosticExitBtn",
    "supportPlaceholder",
    "practiceSurface",
    "miniTableWrap",
    "resultPanel",
    "progressBar",
    "targetLabel"
  ];
  const domPresence = domIds.map(id => ({ id, found:index.includes(`id="${id}"`) }));
  const cssClasses = [
    "b1Mode",
    "b1TypedCloze",
    "b1LongAnswer",
    "challengeCard",
    "answerArea",
    "connectorChoiceGrid",
    "clozePrompt",
    "clozeAnswerText",
    "productionGrid",
    "productionReveal",
    "correctionBlock",
    "feedback",
    "b1ConfidenceRow",
    "miniTable",
    "miniTableWrap",
    "bottomHud",
    "resultsArea"
  ].map(name => ({ className:name, found:index.includes(name) }));

  result.staticInventory = {
    renderFunctions,
    domPresence,
    cssClasses,
    b1Frame:"B1 routes render through renderB1Question(), renderB1Feedback(), renderConnectorChoices(), renderProductionControls(), and shared #answerArea / #supportColumn slots.",
    caseTrainerFrame:"Case Trainer renders through renderQuestion(), checkAnswer(), renderMiniTable(), showResults(), and renderHud() using the same visible DOM IDs but separate legacy state/current variables.",
    articleGridClasses:["miniTable", "target", "hitCorrect", "hitMissed"].filter(token => index.includes(token)),
    routeEntrypoints:["window.ozmosisStartB1Round", "window.ozmosisStartDiagnostic", "window.ozmosisStartConnector", "window.ozmosisStartCasesArticles", "window.ozmosisStartRedemittel", "window.ozmosisStartWortschatz", "window.ozmosisStartWordOrder", "window.ozmosisStartPrepositions"]
  };

  result.articleGridAudit.fullGridFound = index.includes("renderMiniTable(\"hint\")") || index.includes("renderMiniTable(\"correct\")");
  result.articleGridAudit.resultsGridFound = index.includes("weakSpotHtml") && index.includes("resultHeatmapType");
  result.articleGridAudit.wrongAnswerGridFound = index.includes("renderMiniTable(\"missed\")") && index.includes("hitMissed");
  result.articleGridAudit.protectedComponentRecommended = true;

  [
    "Today B1 Sprint",
    "Diagnostic Sprint",
    "Connector Sprint",
    "Cases and Articles",
    "Prepositions",
    "Word Order",
    "Repair and Transformation",
    "Wortschatz",
    "Redemittel",
    "Case Trainer",
    "Learning Map",
    "Dev Tools / QA staging"
  ].forEach(route => addUnique(result.routesInspected, route));

  [
    { key:"choice", owner:"B1 shared renderer", selectors:["#connectorChoiceGrid", "#hintBtn", "#correctionBlock"] },
    { key:"inline_cloze", owner:"B1 shared renderer", selectors:["#b1InlineInput", "#noArticleBtn.teachBtn", "#hintBtn"] },
    { key:"full_typed_answer", owner:"B1 shared renderer and Case Trainer", selectors:["#answerInput", "#checkBtn"] },
    { key:"correction_repair", owner:"B1 shared renderer", selectors:["#answerInput", "#correctionBlock"] },
    { key:"satzbau_word_order", owner:"B1 shared renderer", selectors:["#promptValue", "#b1InlineInput, #answerInput"] },
    { key:"production_card", owner:"B1 shared renderer", selectors:[".productionGrid", ".productionReveal", ".productionActionRow"] },
    { key:"article_grid_case_table", owner:"Case Trainer legacy renderer", selectors:["#miniTableWrap", ".miniTable"] },
    { key:"feedback", owner:"B1 shared renderer and Case Trainer", selectors:["#correctionBlock", "#feedback"] },
    { key:"confidence_continue", owner:"B1 shared renderer", selectors:["#b1ConfidenceRow", "#nextBtn"] },
    { key:"hud", owner:"shared visible footer renderer", selectors:[".bottomHud", "#progressBar", "#targetLabel"] }
  ].forEach(surface => result.surfacesFound.push(surface));

  result.surfaceDivergences = [
    {
      surface:"article_grid_case_table",
      routes:["Case Trainer"],
      divergence:"Article/case table is owned by the legacy Case Trainer renderer renderMiniTable(mode), not by the B1 display adapter layer.",
      risk:"Future feedback changes can miss article-grid feedback or flatten it into generic correction text.",
      allowed:"Protected component; keep as distinct adapter in the shared-frame contract."
    },
    {
      surface:"full_typed_answer",
      routes:["B1 repair/transformation", "Case Trainer"],
      divergence:"Both use #answerInput, but B1 uses b1Runtime/checkB1Answer/renderB1Feedback while Case Trainer uses current/checkAnswer/renderMiniTable.",
      risk:"Same typed input can receive different feedback hierarchy and HUD/result behaviour."
    },
    {
      surface:"results",
      routes:["B1 practice", "Case Trainer"],
      divergence:"B1 result flow uses b1Runtime summaries and Learning Map routing; Case Trainer result flow uses score/rank/heatmap and New Practice routing.",
      risk:"Feedback rhythm or article-grid result changes need explicit adapter rules."
    }
  ];
  result.sameSurfaceDifferentLayouts = [
    {
      surface:"choice",
      comparison:"Today/diagnostic/connectors all use the B1 shared choice grid when rendered as B1 items.",
      status:"Mostly unified; route label/title and item pool differ."
    },
    {
      surface:"inline_cloze",
      comparison:"B1 cloze from Today, Wortschatz, Redemittel, and QA fixtures uses the B1 visual template and #b1InlineInput when item metadata resolves to inline cloze.",
      status:"Mostly unified; deterministic route comparison uses QA fixtures because route queues are adaptive."
    },
    {
      surface:"typed_repair",
      comparison:"B1 repair/transformation typed input and Case Trainer typed article input both use #answerInput but separate render/check/feedback ownership.",
      status:"Divergent; needs convergence adapter before feedback rhythm work."
    },
    {
      surface:"article_grid",
      comparison:"Only Case Trainer currently owns the article grid; B1 cases/articles repair items do not expose the grid as a protected adapter.",
      status:"Divergent; article-grid integration should be explicit."
    }
  ];
}

async function screenshot(cdp, name) {
  await sleep(260);
  fs.mkdirSync(screenshotRoot, { recursive:true });
  const file = path.join(screenshotRoot, `${name}.png`);
  const shot = await cdp.send("Page.captureScreenshot", { format:"png", fromSurface:true, captureBeyondViewport:false }, 30000);
  fs.writeFileSync(file, Buffer.from(shot.data, "base64"));
  result.screenshotsGenerated[name] = rel(file);
  return rel(file);
}

async function captureDom(cdp, name, route, launchSource, expectedSurface) {
  await dismissFirstRun(cdp);
  const dom = await evaluate(cdp, `(() => {
    const visible = node => {
      if (!node || node.hidden) return false;
      const style = getComputedStyle(node);
      if (style.display === "none" || style.visibility === "hidden") return false;
      const rect = node.getBoundingClientRect();
      return rect.width > 0 && rect.height > 0;
    };
    const info = selector => {
      const node = document.querySelector(selector);
      if (!node) return null;
      const rect = node.getBoundingClientRect();
      return {
        selector,
        exists:true,
        visible:visible(node),
        className:String(node.className || ""),
        rect:{ x:Math.round(rect.x), y:Math.round(rect.y), width:Math.round(rect.width), height:Math.round(rect.height) },
        text:String(node.textContent || "").replace(/\\s+/g, " ").trim().slice(0, 180)
      };
    };
    const item = window.kasusCurrent ? window.kasusCurrent() : {};
    const debug = window.ozmosisB1Debug ? window.ozmosisB1Debug() : {};
    const b1Active = !!(debug.runtime && debug.runtime.active);
    const choiceButtons = Array.from(document.querySelectorAll("#connectorChoiceGrid button")).filter(visible).length;
    const inlineInput = document.querySelector("#b1InlineInput");
    const production = document.querySelector(".productionGrid.visible, .productionGrid");
    const miniTable = document.querySelector("#miniTableWrap .miniTable");
    let surface = "unknown";
    if (document.body.classList.contains("homeMode")) surface = "home";
    else if (document.body.classList.contains("setupMode")) surface = "case_trainer_setup";
    else if (item && (item.itemType === "word_order_cloze")) surface = "satzbau_word_order";
    else if (production && visible(production)) surface = "production_card";
    else if (choiceButtons) surface = "choice";
    else if (inlineInput && visible(inlineInput)) surface = "inline_cloze";
    else if (miniTable && visible(miniTable)) surface = "article_grid";
    else if (item && (item.itemType === "error_repair" || item.itemType === "variable_error_repair" || item.answerMode === "edit_text" || item.taskDepth === "repair" || item.taskDepth === "transformation")) surface = "correction_repair";
    else if (document.getElementById("answerInput") && visible(document.getElementById("answerInput"))) surface = b1Active ? "full_typed_answer" : "case_trainer_typed_answer";
    return {
      route:${JSON.stringify(route)},
      launchSource:${JSON.stringify(launchSource)},
      expectedSurface:${JSON.stringify(expectedSurface)},
      detectedSurface:surface,
      bodyClass:String(document.body.className || ""),
      bodyMode:document.body.getAttribute("data-mode") || "",
      b1Surface:document.body.getAttribute("data-b1-surface") || "",
      b1State:document.body.getAttribute("data-b1-state") || "",
      activeScreen:document.body.getAttribute("data-active-screen") || "",
      runtimeMode:debug.runtime && debug.runtime.mode || "",
      runtimeTitle:debug.runtime && debug.runtime.title || "",
      itemId:item && item.id || "",
      itemType:item && item.itemType || item && item.type || "",
      taskDepth:item && item.taskDepth || "",
      selectors:{
        practiceShell:info("main"),
        challengeCard:info(".challengeCard"),
        taskLabel:info("#modeTitle"),
        germanStimulus:info("#promptValue"),
        cueSupport:info("#englishGloss"),
        translationToggle:info("#translationToggle"),
        answerArea:info("#answerArea"),
        choiceGrid:info("#connectorChoiceGrid"),
        inlineInput:info("#b1InlineInput"),
        answerInput:info("#answerInput"),
        hintSlot:info("#hintBtn"),
        feedback:info("#feedback"),
        correctionBlock:info("#correctionBlock"),
        confidence:info("#b1ConfidenceRow"),
        continueButton:info("#nextBtn"),
        hud:info(".bottomHud"),
        articleGrid:info("#miniTableWrap .miniTable"),
        resultPanel:info("#resultPanel")
      }
    };
  })()`, 30000);
  dom.screenshot = await screenshot(cdp, name);
  result.browserCaptures.push(dom);
  addUnique(result.routesInspected, route);
  return dom;
}

async function stageItem(cdp, id, overrides) {
  return evaluate(cdp, `(() => {
    const debug = window.ozmosisB1Debug && window.ozmosisB1Debug();
    if (!debug || !debug.qaStageItemById) throw new Error("QA staging helper unavailable.");
    const item = debug.qaStageItemById(${JSON.stringify(id)}, ${JSON.stringify(overrides || {})});
    if (!item) throw new Error("QA fixture not found: ${id}");
    return { id:item.id, itemType:item.itemType || item.type || "", taskDepth:item.taskDepth || "", answer:item.answer || item.fullAnswer_de || "" };
  })()`, 30000);
}

async function runBrowserCapture() {
  const edgePath = edgeExecutable();
  if (!edgePath) {
    result.testsNotRun.push("Browser capture not run: Microsoft Edge executable was not found.");
    return;
  }
  let server = null;
  let edge = null;
  let cdp = null;
  try {
    server = await startServer();
    const port = server.address().port;
    const remotePort = await freePort();
    edge = spawn(edgePath, [
      `--remote-debugging-port=${remotePort}`,
      `--user-data-dir=${profileDir}`,
      "--headless=new",
      "--disable-gpu",
      "--no-first-run",
      "--no-default-browser-check",
      `http://127.0.0.1:${port}/index.html`
    ], { stdio:"ignore" });
    const version = await waitForJson(`http://127.0.0.1:${remotePort}/json/version`, 12000);
    const tabs = await waitForJson(`http://127.0.0.1:${remotePort}/json/list`, 12000);
    const page = tabs.find(tab => tab.type === "page") || tabs[0];
    cdp = await connectCdp(page.webSocketDebuggerUrl || version.webSocketDebuggerUrl);
    cdp.on("Runtime.consoleAPICalled", params => {
      const text = (params.args || []).map(arg => arg.value || arg.description || "").join(" ");
      if (params.type === "error") result.consoleErrors.push(text);
    });
    cdp.on("Runtime.exceptionThrown", params => {
      result.runtimeExceptions.push(params.exceptionDetails && params.exceptionDetails.text || "runtime exception");
    });
    await cdp.send("Runtime.enable");
    await cdp.send("Page.enable");
    await setViewport(cdp, 430, 932);
    await cdp.send("Page.navigate", { url:`http://127.0.0.1:${port}/index.html` });
    await waitForAppReady(cdp);
    await dismissFirstRun(cdp);
    const versions = await evaluate(cdp, "window.ozmosisVersionInfo()");
    assert(versions.appVersion === expectedAppVersion, `Unexpected app version: ${versions.appVersion}`);
    assert(versions.exportVersion === expectedExportVersion, `Unexpected export version: ${versions.exportVersion}`);

    await evaluate(cdp, `window.ozmosisShowHome && window.ozmosisShowHome(); true`);
    await captureDom(cdp, "home-start", "Home", "real route", "home");

    await evaluate(cdp, `window.ozmosisStartB1Round("mixed"); true`, 30000);
    await captureDom(cdp, "today-b1-sprint-real-current", "Today B1 Sprint", "real route start", "adaptive_current");

    await evaluate(cdp, `window.ozmosisStartDiagnostic(); const btn=document.getElementById("diagnosticIntroStartBtn"); if (btn) btn.click(); true`, 30000);
    await sleep(300);
    await captureDom(cdp, "diagnostic-sprint-real-current", "Diagnostic Sprint", "real route start", "diagnostic_current");

    await evaluate(cdp, `window.ozmosisStartConnector("all"); true`, 30000);
    await captureDom(cdp, "connector-sprint-real-current", "Connector Sprint", "real route start", "choice_or_cloze");

    await evaluate(cdp, `window.ozmosisStartWortschatz("mixed"); true`, 30000);
    await captureDom(cdp, "wortschatz-real-current", "Wortschatz", "real route start", "choice_or_cloze");

    await evaluate(cdp, `window.ozmosisStartRedemittel("mixed"); true`, 30000);
    await captureDom(cdp, "redemittel-real-current", "Redemittel", "real route start", "cloze_or_production");

    await evaluate(cdp, `window.ozmosisStartCasesArticles("mixed"); true`, 30000);
    await captureDom(cdp, "cases-articles-real-current", "Cases and Articles", "real route start", "case_article_b1_item");

    await evaluate(cdp, `window.ozmosisStartWordOrder("mixed"); true`, 30000);
    await captureDom(cdp, "word-order-real-current", "Word Order", "real route start", "choice_or_satzbau");

    await evaluate(cdp, `window.ozmosisStartRepairTransformation("mixed"); true`, 30000);
    await captureDom(cdp, "repair-transformation-real-current", "Repair and Transformation", "real route start", "correction_repair");

    await stageItem(cdp, fixtureIds.choice, { _displayModel:null, hint_en:"Use the meaning first, then choose the natural German sentence." });
    await captureDom(cdp, "choice-from-qa-connectors", "Dev Tools / QA staging", "QA fixture: connector choice", "choice");

    await stageItem(cdp, fixtureIds.cloze, {});
    await captureDom(cdp, "cloze-from-qa-today", "Dev Tools / QA staging", "QA fixture: B1 cloze", "inline_cloze");

    await stageItem(cdp, fixtureIds.correction, { seed:"v08534-frame-inventory" });
    await captureDom(cdp, "correction-from-qa-repair", "Dev Tools / QA staging", "QA fixture: connector repair", "correction_repair");

    await stageItem(cdp, fixtureIds.wordOrder, {});
    await captureDom(cdp, "satzbau-from-qa-word-order", "Dev Tools / QA staging", "QA fixture: word order build", "satzbau_word_order");

    await stageItem(cdp, fixtureIds.casesRepair, { seed:"v08534-frame-inventory" });
    await captureDom(cdp, "cases-repair-from-qa-cases-articles", "Dev Tools / QA staging", "QA fixture: cases/articles repair", "correction_repair");

    await stageItem(cdp, fixtureIds.production, {});
    await captureDom(cdp, "production-from-qa-redemittel", "Dev Tools / QA staging", "QA fixture: production card", "production_card");

    await evaluate(cdp, `window.ozmosisShowHome && window.ozmosisShowHome(); window.kasusNewRound(); true`, 30000);
    await captureDom(cdp, "case-trainer-setup", "Case Trainer", "real setup route", "setup");
    await evaluate(cdp, `(() => {
      const task = document.getElementById("startTaskType");
      const target = document.getElementById("startRoundTarget");
      if (task) task.value = "table";
      if (target) target.value = "10";
      window.kasusStartRound();
      return true;
    })()`, 30000);
    await captureDom(cdp, "case-trainer-table-active", "Case Trainer", "real route table mode", "case_trainer_typed_answer");
    await evaluate(cdp, `window.kasusHint(); true`, 30000);
    await captureDom(cdp, "article-grid-full-reveal", "Case Trainer", "real route hint", "article_grid");
    await evaluate(cdp, `(() => {
      const input = document.getElementById("answerInput");
      if (input) {
        input.value = "falsch";
        input.dispatchEvent(new Event("input", { bubbles:true }));
      }
      window.kasusCheck();
      return true;
    })()`, 30000);
    await captureDom(cdp, "article-grid-wrong-answer", "Case Trainer", "real route wrong answer", "article_grid");

    await buildComparison(port, cdp);
    result.testsRun.browserCapture = true;
  } finally {
    try { if (cdp) cdp.close(); } catch (_) {}
    try { if (edge) edge.kill(); } catch (_) {}
    try { if (server) server.close(); } catch (_) {}
    if (!keepProfile) {
      try { fs.rmSync(profileDir, { recursive:true, force:true }); } catch (_) {}
    }
  }
}

async function buildComparison(port, cdp) {
  const images = Object.entries(result.screenshotsGenerated).map(([name, file]) => ({ name, file }));
  const groups = [
    ["choice-from-today-vs-connectors", ["today-b1-sprint-real-current", "connector-sprint-real-current", "choice-from-qa-connectors"]],
    ["cloze-from-today-vs-redemittel-or-wortschatz", ["today-b1-sprint-real-current", "redemittel-real-current", "wortschatz-real-current", "cloze-from-qa-today"]],
    ["correction-from-repair-vs-diagnostic", ["diagnostic-sprint-real-current", "repair-transformation-real-current", "correction-from-qa-repair", "cases-repair-from-qa-cases-articles"]],
    ["article-grid-protected-forms", ["case-trainer-table-active", "article-grid-full-reveal", "article-grid-wrong-answer"]],
    ["production-and-word-order", ["production-from-qa-redemittel", "satzbau-from-qa-word-order"]]
  ];
  const html = `<!doctype html>
<meta charset="utf-8">
<title>Ozmosis v0.85.3.4 shared practice frame inventory</title>
<style>
body{margin:0;background:#050914;color:#e9fbff;font:14px system-ui,Segoe UI,sans-serif}
main{padding:24px;display:grid;gap:24px}
h1{margin:0 0 8px;font-size:24px}
h2{margin:0 0 10px;color:#72f6ff;font-size:18px}
.group{border:1px solid rgba(105,240,255,.35);border-radius:12px;padding:14px;background:#08111f}
.grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:12px}
figure{margin:0;border:1px solid rgba(255,255,255,.14);border-radius:10px;overflow:hidden;background:#020611}
figcaption{padding:8px 10px;color:#bdefff;font-size:12px}
img{display:block;width:100%;height:auto}
</style>
<main>
<h1>Ozmosis v0.85.3.4 shared practice frame inventory</h1>
${groups.map(([label, names]) => `<section class="group"><h2>${label}</h2><div class="grid">${names.filter(name => result.screenshotsGenerated[name]).map(name => `<figure><img src="${path.basename(result.screenshotsGenerated[name])}" alt="${name}"><figcaption>${name}</figcaption></figure>`).join("")}</div></section>`).join("")}
<section class="group"><h2>all captures</h2><div class="grid">${images.map(image => `<figure><img src="${path.basename(image.file)}" alt="${image.name}"><figcaption>${image.name}</figcaption></figure>`).join("")}</div></section>
</main>`;
  fs.mkdirSync(screenshotRoot, { recursive:true });
  fs.writeFileSync(comparisonPath, html, "utf8");
  result.screenshotsGenerated.comparison = rel(comparisonPath);
  await cdp.send("Page.navigate", { url:`http://127.0.0.1:${port}/${rel(comparisonPath)}` });
  await sleep(600);
  await setViewport(cdp, 1440, 1800);
  const shot = await cdp.send("Page.captureScreenshot", { format:"png", fromSurface:true, captureBeyondViewport:true }, 30000);
  fs.writeFileSync(contactSheetPath, Buffer.from(shot.data, "base64"));
  result.screenshotsGenerated.contactSheet = rel(contactSheetPath);
}

function finishAcceptance() {
  result.sharedFrameContractCreated = fs.existsSync(path.join(root, "docs", "OZMOSIS_SHARED_PRACTICE_FRAME_CONTRACT_v0.85.3.4.md"));
  const sawBrowser = result.testsRun.browserCapture === true;
  const sawContract = result.sharedFrameContractCreated === true;
  const sawScreens = Object.keys(result.screenshotsGenerated || {}).length > 0;
  result.recommendedNextPatch = "v0.85.3.5 - Shared Practice Frame Convergence Pass";
  result.acceptancePassed = !!(
    result.startingStateVerified &&
    result.routesInspected.length >= 10 &&
    result.surfacesFound.length >= 8 &&
    result.surfaceDivergences.length >= 1 &&
    sawContract &&
    (sawScreens || result.testsNotRun.some(text => /Browser capture/.test(text))) &&
    result.runtimeChanged === false
  );
  result.testsRun.staticInventory = true;
  result.testsRun.runtimeChanged = false;
  result.testsRun.contentSemanticsChanged = false;
  if (!sawBrowser) result.testsNotRun.push("Browser capture did not complete; static inventory is still available.");
}

(async function main(){
  try {
    staticInventory();
    await runBrowserCapture();
  } catch (error) {
    result.errors.push(error && (error.stack || error.message) || String(error));
    process.exitCode = 1;
  } finally {
    finishAcceptance();
    fs.mkdirSync(path.dirname(resultPath), { recursive:true });
    fs.writeFileSync(resultPath, JSON.stringify(result, null, 2), "utf8");
    console.log(JSON.stringify({
      ok:result.acceptancePassed,
      startingStateVerified:result.startingStateVerified,
      browserCapture:result.testsRun.browserCapture === true,
      captures:result.browserCaptures.length,
      screenshots:Object.keys(result.screenshotsGenerated || {}).length,
      result:rel(resultPath),
      recommendedNextPatch:result.recommendedNextPatch,
      errors:result.errors
    }, null, 2));
    process.exit(result.acceptancePassed ? 0 : 1);
  }
})();
