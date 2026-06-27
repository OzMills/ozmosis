const fs = require("fs");
const http = require("http");
const net = require("net");
const os = require("os");
const path = require("path");
const { spawn } = require("child_process");

const root = path.resolve(__dirname, "..");
const qaDir = path.join(root, "docs", "qa");
const resultPath = path.join(qaDir, "v0.86_production_browser_gate_results.json");
const tracePath = path.join(qaDir, "v0.86_production_browser_gate_trace.log");
const profileDir = fs.mkdtempSync(path.join(os.tmpdir(), "ozmosis-v086-production-edge-profile-"));

const result = {
  patch: "v0.86",
  title: "Production Browser Gate",
  browser: "Edge/CDP",
  localServer: "",
  consoleErrors: [],
  runtimeExceptions: [],
  routeSmoke: {},
  productionFlow: {},
  responsive: {},
  exportImportUi: {},
  acceptancePassed: false,
  testsNotRun: [],
  generatedAt: new Date().toISOString()
};

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function traceStep(step) {
  fs.mkdirSync(qaDir, { recursive: true });
  fs.appendFileSync(tracePath, `${new Date().toISOString()} ${step}\n`, "utf8");
}

function edgeExecutable() {
  const candidates = [
    "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe",
    "C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe"
  ];
  return candidates.find(candidate => fs.existsSync(candidate)) || "";
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
    fs.readFile(target, (error, body) => {
      if (error) {
        res.writeHead(404);
        res.end("Not found");
        return;
      }
      res.writeHead(200, { "Content-Type": contentType(target) });
      res.end(body);
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
  if (!response.ok) throw new Error(`${url} returned HTTP ${response.status}`);
  return response.json();
}

async function waitForPageWebSocket(debugPort, timeoutMs) {
  const listUrl = `http://127.0.0.1:${debugPort}/json/list`;
  const start = Date.now();
  while (Date.now() - start < timeoutMs) {
    const targets = await fetchJson(listUrl).catch(() => []);
    const page = targets.find(target => target && target.type === "page" && target.webSocketDebuggerUrl) || null;
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
      const callbacks = pending.get(message.id);
      pending.delete(message.id);
      if (message.error) callbacks.reject(new Error(message.error.message || "CDP command failed"));
      else callbacks.resolve(message.result || {});
      return;
    }
    const handlers = listeners.get(message.method) || [];
    handlers.forEach(handler => handler(message.params || {}));
  };
  await new Promise((resolve, reject) => {
    ws.onopen = resolve;
    ws.onerror = () => reject(new Error("CDP WebSocket connection failed."));
  });
  return {
    send(method, params) {
      id += 1;
      ws.send(JSON.stringify({ id, method, params: params || {} }));
      return new Promise((resolve, reject) => {
        pending.set(id, { resolve, reject });
        setTimeout(() => {
          if (pending.has(id)) {
            pending.delete(id);
            reject(new Error(`Timed out waiting for ${method}`));
          }
        }, 10000);
      });
    },
    on(method, handler) {
      const handlers = listeners.get(method) || [];
      handlers.push(handler);
      listeners.set(method, handlers);
    },
    close() {
      ws.close();
    }
  };
}

async function evaluate(cdp, expression) {
  const response = await cdp.send("Runtime.evaluate", {
    expression,
    awaitPromise: true,
    returnByValue: true
  });
  if (response.exceptionDetails) {
    const text = response.exceptionDetails.exception && response.exceptionDetails.exception.description || response.exceptionDetails.text || "Runtime evaluation failed.";
    throw new Error(text);
  }
  return response.result ? response.result.value : undefined;
}

async function setViewport(cdp, width, height) {
  await cdp.send("Emulation.setDeviceMetricsOverride", {
    width,
    height,
    deviceScaleFactor: 2,
    mobile: width < 700
  });
}

async function waitForAppReady(cdp, timeoutMs) {
  const start = Date.now();
  while (Date.now() - start < timeoutMs) {
    const ready = await evaluate(cdp, `(() => typeof window.ozmosisVersionInfo === "function" && typeof window.ozmosisB1Debug === "function")()`).catch(() => false);
    if (ready) return true;
    await sleep(250);
  }
  return false;
}

async function main() {
  fs.mkdirSync(qaDir, { recursive: true });
  fs.writeFileSync(tracePath, "", "utf8");
  traceStep("start");
  const edge = edgeExecutable();
  if (!edge) throw new Error("Microsoft Edge executable not found.");
  traceStep("edge-found");
  const server = await startServer();
  traceStep("server-started");
  const serverPort = server.address().port;
  const debugPort = await freePort();
  result.localServer = `http://127.0.0.1:${serverPort}/index.html`;
  const browser = spawn(edge, [
    `--remote-debugging-port=${debugPort}`,
    `--user-data-dir=${profileDir}`,
    "--headless=new",
    "--disable-gpu",
    "--no-first-run",
    "--no-default-browser-check",
    result.localServer
  ], { stdio: "ignore" });
  let cdp;
  try {
    traceStep("browser-spawned");
    const wsUrl = await waitForPageWebSocket(debugPort, 20000);
    traceStep("websocket-found");
    cdp = await connectCdp(wsUrl);
    traceStep("cdp-connected");
    await cdp.send("Runtime.enable");
    await cdp.send("Page.enable");
    traceStep("domains-enabled");
    cdp.on("Runtime.consoleAPICalled", params => {
      if (params.type === "error") result.consoleErrors.push(JSON.stringify(params.args || []));
    });
    cdp.on("Runtime.exceptionThrown", params => {
      result.runtimeExceptions.push(params.exceptionDetails && params.exceptionDetails.text || "runtime exception");
    });
    const appReady = await waitForAppReady(cdp, 30000);
    if (!appReady) throw new Error("Ozmosis app globals did not become ready in browser gate.");
    traceStep("app-ready");

    result.routeSmoke.home = await evaluate(cdp, `(() => ({
      title: document.title,
      appVersion: window.ozmosisVersionInfo && window.ozmosisVersionInfo().appVersion,
      exportVersion: window.ozmosisVersionInfo && window.ozmosisVersionInfo().exportVersion,
      homeProductionButton: !!document.getElementById("homeProductionBtn"),
      menuProductionButton: !!document.getElementById("menuProductionBtn")
    }))()`);
    traceStep("home-smoke");

    result.routeSmoke.menu = await evaluate(cdp, `(() => {
      document.getElementById("menuToggle").click();
      const open = document.body.classList.contains("menuOpen") && document.getElementById("settingsPanel").classList.contains("open");
      document.getElementById("menuCloseBtn").click();
      return { opened: open, closed: !document.body.classList.contains("menuOpen") };
    })()`);
    traceStep("menu-smoke");

    result.exportImportUi = await evaluate(cdp, `(() => {
      const settings = document.getElementById("homeOptionsBtn");
      if (settings) settings.click();
      return {
        exportSaveVisible: !!document.getElementById("exportBtn"),
        importSaveVisible: !!document.getElementById("importBtn"),
        importInputPresent: !!document.getElementById("importFile")
      };
    })()`);
    traceStep("export-import-ui");

    result.routeSmoke.coreRoutes = await evaluate(cdp, `(() => {
      const ids = ["homeSprintBtn", "homeDiagnosticBtn", "homeGrammarBtn", "homeWortschatzBtn", "homeRedemittelBtn", "homeProductionBtn", "homeCaseTrainerBtn", "homeLearningMapBtn", "homeOptionsBtn", "homeDevToolsBtn"];
      return ids.reduce((checks, id) => {
        checks[id] = !!document.getElementById(id);
        return checks;
      }, {});
    })()`);
    traceStep("core-route-buttons");

    result.productionFlow.before = await evaluate(cdp, `(() => {
      localStorage.clear();
      window.ozmosisStartProduction();
      const details = Array.from(document.querySelectorAll(".productionReveal summary")).map(node => node.textContent.trim());
      const buttons = Array.from(document.querySelectorAll("#connectorChoiceGrid button")).map(node => node.textContent.trim());
      return {
        modeTitle: document.getElementById("modeTitle").textContent,
        prompt: document.getElementById("promptValue").textContent,
        cardVisible: !!document.querySelector(".productionEvidenceNote"),
        revealLabels: details,
        actionButtons: buttons,
        evidenceCount: (JSON.parse(localStorage.getItem("ozmosis_b1_progress_evidence_v1") || '{"records":[]}').records || []).length,
        confidenceHidden: document.getElementById("b1ConfidenceRow").hidden === true
      };
    })()`);
    traceStep("production-before");

    result.productionFlow.reveals = await evaluate(cdp, `(() => {
      Array.from(document.querySelectorAll(".productionReveal summary")).forEach(node => node.click());
      const model = Array.from(document.querySelectorAll("#connectorChoiceGrid button")).find(node => node.textContent.trim() === "Show example answer");
      if (model) model.click();
      return {
        usefulPhrasesShown: Array.from(document.querySelectorAll(".productionReveal")).some(node => node.open && /Useful phrases/.test(node.textContent)),
        checklistShown: Array.from(document.querySelectorAll(".productionReveal")).some(node => node.open && /Self-check/.test(node.textContent)),
        modelShown: /Example answer/.test(document.getElementById("correctionBlock").textContent || ""),
        exampleAnswerVisible: /Example answer/.test(document.getElementById("correctionBlock").textContent || "")
      };
    })()`);
    traceStep("production-reveals");

    result.productionFlow.markPractised = await evaluate(cdp, `(() => {
      const before = JSON.parse(localStorage.getItem("ozmosis_b1_progress_evidence_v1") || '{"records":[]}').records || [];
      const button = Array.from(document.querySelectorAll("#connectorChoiceGrid button")).find(node => node.textContent.trim() === "I practised this");
      if (button) button.click();
      const after = JSON.parse(localStorage.getItem("ozmosis_b1_progress_evidence_v1") || '{"records":[]}').records || [];
      const latest = after[after.length - 1] || {};
      return {
        beforeEvidenceCount: before.length,
        afterEvidenceCount: after.length,
        evidenceDelta: after.length - before.length,
        latestEvidence: {
          result: latest.result,
          evidenceType: latest.evidenceType,
          productionPractised: latest.productionPractised,
          confidence: latest.confidence,
          correct: latest.correct,
          scoreImpact: latest.scoreImpact,
          autoGraded: latest.autoGraded,
          productionAction: latest.productionAction
        },
        confidenceRowHidden: document.getElementById("b1ConfidenceRow").hidden === true,
        feedbackText: document.getElementById("correctionBlock").textContent,
        hudText: document.querySelector(".bottomHud") ? document.querySelector(".bottomHud").textContent : ""
      };
    })()`);
    traceStep("production-mark");

    result.productionFlow.nextCard = await evaluate(cdp, `(() => {
      const beforePrompt = document.getElementById("promptValue").textContent;
      document.getElementById("nextBtn").click();
      return {
        beforePrompt,
        afterPrompt: document.getElementById("promptValue").textContent,
        actions: Array.from(document.querySelectorAll("#connectorChoiceGrid button")).map(node => node.textContent.trim()),
        evidenceCount: (JSON.parse(localStorage.getItem("ozmosis_b1_progress_evidence_v1") || '{"records":[]}').records || []).length
      };
    })()`);
    traceStep("production-next");

    result.productionFlow.skip = await evaluate(cdp, `(() => {
      const before = JSON.parse(localStorage.getItem("ozmosis_b1_progress_evidence_v1") || '{"records":[]}').records || [];
      const button = Array.from(document.querySelectorAll("#connectorChoiceGrid button")).find(node => node.textContent.trim() === "I can't do this now");
      if (button) button.click();
      const after = JSON.parse(localStorage.getItem("ozmosis_b1_progress_evidence_v1") || '{"records":[]}').records || [];
      return {
        beforeEvidenceCount: before.length,
        afterEvidenceCount: after.length,
        evidenceDelta: after.length - before.length,
        skipFeedback: document.getElementById("correctionBlock").textContent
      };
    })()`);
    traceStep("production-skip");

    for (const [width, height] of [[320, 568], [390, 844], [430, 932], [768, 1024], [1365, 599], [1440, 900]]) {
      await setViewport(cdp, width, height);
      await sleep(150);
      result.responsive[`${width}x${height}`] = await evaluate(cdp, `(() => ({
        bodyOverflowX: document.documentElement.scrollWidth > window.innerWidth + 1,
        productionActionsVisible: !!document.querySelector(".productionActionRow"),
        viewport: { width: window.innerWidth, height: window.innerHeight }
      }))()`);
    }
    traceStep("responsive");

    result.productionFlow.summary = await evaluate(cdp, `(() => {
      return {
        resultSummaryConfigured: true,
        productionResultCopyPresentInSource: document.documentElement.innerHTML.indexOf("Production practice complete") !== -1
      };
    })()`);
    traceStep("production-summary");

    const mark = result.productionFlow.markPractised || {};
    const latest = mark.latestEvidence || {};
    const skip = result.productionFlow.skip || {};
    result.acceptancePassed =
      result.consoleErrors.length === 0 &&
      result.runtimeExceptions.length === 0 &&
      result.routeSmoke.home.appVersion &&
      /Writing|Speaking|Production/.test(result.productionFlow.before.modeTitle || "") &&
      result.productionFlow.before.cardVisible === true &&
      result.productionFlow.before.actionButtons.includes("I practised this") &&
      result.productionFlow.before.actionButtons.includes("I can't do this now") &&
      result.productionFlow.reveals.modelShown === true &&
      mark.evidenceDelta === 1 &&
      latest.evidenceType === "self_marked_production" &&
      latest.productionPractised === true &&
      latest.confidence === null &&
      latest.correct === null &&
      latest.scoreImpact === 0 &&
      latest.autoGraded === false &&
      skip.evidenceDelta === 0 &&
      Object.values(result.responsive).every(row => row && row.bodyOverflowX === false);
    traceStep("acceptance-evaluated");
  } finally {
    if (cdp) cdp.close();
    browser.kill();
    server.close();
    try {
      fs.rmSync(profileDir, { recursive: true, force: true });
    } catch (error) {
      result.testsNotRun.push(`Temporary Edge profile cleanup deferred: ${error.message}`);
    }
    fs.writeFileSync(resultPath, JSON.stringify(result, null, 2) + "\n", "utf8");
  }
  console.log(JSON.stringify({
    patch: result.patch,
    localServer: result.localServer,
    acceptancePassed: result.acceptancePassed,
    consoleErrors: result.consoleErrors.length,
    runtimeExceptions: result.runtimeExceptions.length,
    productionModeTitle: result.productionFlow.before && result.productionFlow.before.modeTitle,
    markEvidenceDelta: result.productionFlow.markPractised && result.productionFlow.markPractised.evidenceDelta,
    skipEvidenceDelta: result.productionFlow.skip && result.productionFlow.skip.evidenceDelta
  }, null, 2));
  if (!result.acceptancePassed) process.exitCode = 1;
}

main().catch(error => {
  result.testsNotRun.push(error.message);
  fs.mkdirSync(qaDir, { recursive: true });
  fs.writeFileSync(resultPath, JSON.stringify(result, null, 2) + "\n", "utf8");
  console.error(error && error.stack || error);
  process.exitCode = 1;
});
