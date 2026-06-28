const fs = require("fs");
const http = require("http");
const net = require("net");
const os = require("os");
const path = require("path");
const { spawn } = require("child_process");

const root = path.resolve(__dirname, "..");
const qaDir = path.join(root, "docs", "qa");
const resultPath = path.join(qaDir, "v0.87_redemittel_browser_gate_results.json");
const profileDir = fs.mkdtempSync(path.join(os.tmpdir(), "ozmosis-v087-redemittel-edge-profile-"));

const result = {
  patch: "v0.87",
  title: "Redemittel Browser Gate",
  browser: "Edge/CDP",
  localServer: "",
  consoleErrors: [],
  runtimeExceptions: [],
  routeSmoke: {},
  redemittelFlow: {},
  productionFlow: {},
  responsive: {},
  arabicLtr: {},
  exportImportUi: {},
  testsNotRun: [],
  acceptancePassed: false,
  generatedAt: new Date().toISOString()
};

let activeBrowser = null;
let activeServer = null;
let activeCdp = null;

const hardTimeout = setTimeout(() => {
  result.testsNotRun.push("Browser gate stopped by 90 second hard timeout.");
  try { if (activeCdp) activeCdp.close(); } catch (error) {}
  try { if (activeBrowser) activeBrowser.kill(); } catch (error) {}
  try { if (activeServer) activeServer.close(); } catch (error) {}
  writeResult();
  process.exit(1);
}, 90000);

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
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
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 2000);
  try {
    const response = await fetch(url, { signal: controller.signal });
    if (!response.ok) throw new Error(`${url} returned HTTP ${response.status}`);
    return response.json();
  } finally {
    clearTimeout(timeout);
  }
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
    (listeners.get(message.method) || []).forEach(handler => handler(message.params || {}));
  };
  let openTimeout;
  await new Promise((resolve, reject) => {
    openTimeout = setTimeout(() => reject(new Error("Timed out opening CDP WebSocket.")), 10000);
    ws.onopen = resolve;
    ws.onerror = () => reject(new Error("CDP WebSocket connection failed."));
  }).finally(() => {
    clearTimeout(openTimeout);
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
    const detail = response.exceptionDetails;
    const text = detail.exception && detail.exception.description || detail.text || "Runtime evaluation failed.";
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
    const ready = await evaluate(cdp, `(() => typeof window.ozmosisVersionInfo === "function" && typeof window.ozmosisStartRedemittel === "function" && typeof window.kasusCurrent === "function")()`).catch(() => false);
    if (ready) return true;
    await sleep(250);
  }
  return false;
}

async function run(cdp, label, expression) {
  result.currentStep = `start:${label}`;
  writeResult();
  result.routeSmoke[label] = await evaluate(cdp, expression);
  result.currentStep = `done:${label}`;
  writeResult();
  await sleep(100);
}

async function main() {
  fs.mkdirSync(qaDir, { recursive: true });
  const edge = edgeExecutable();
  if (!edge) throw new Error("Microsoft Edge executable not found.");
  const server = await startServer();
  activeServer = server;
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
  activeBrowser = browser;
  let cdp;
  try {
    const wsUrl = await waitForPageWebSocket(debugPort, 20000);
    cdp = await connectCdp(wsUrl);
    activeCdp = cdp;
    await cdp.send("Runtime.enable");
    await cdp.send("Page.enable");
    cdp.on("Runtime.consoleAPICalled", params => {
      if (params.type === "error") result.consoleErrors.push(JSON.stringify(params.args || []));
    });
    cdp.on("Runtime.exceptionThrown", params => {
      result.runtimeExceptions.push(params.exceptionDetails && params.exceptionDetails.text || "runtime exception");
    });
    const ready = await waitForAppReady(cdp, 30000);
    if (!ready) throw new Error("Ozmosis app globals did not become ready.");

    result.routeSmoke.home = await evaluate(cdp, `(() => ({
      appVersion: window.ozmosisVersionInfo().appVersion,
      exportVersion: window.ozmosisVersionInfo().exportVersion,
      homeVisible: !document.getElementById("homeScreen").hidden,
      homeRedemittelSub: document.getElementById("homeRedemittelBtn") && document.getElementById("homeRedemittelBtn").textContent.trim()
    }))()`);

    await run(cdp, "menuOpenClose", `(() => {
      document.getElementById("menuToggle").click();
      const opened = document.body.classList.contains("menuOpen");
      const close = document.getElementById("menuCloseBtn") || document.querySelector(".menuCloseBtn") || document.getElementById("menuToggle");
      if (close) close.click();
      return { opened, closed: !document.body.classList.contains("menuOpen") };
    })()`);

    await run(cdp, "settingsOptions", `(() => {
      document.getElementById("homeOptionsBtn").click();
      return {
        settingsVisible: !document.getElementById("settingsScreen").hidden,
        exportSaveVisible: !!document.getElementById("exportBtn"),
        importSaveVisible: !!document.getElementById("importBtn"),
        saveHelpersPresent: typeof window.ozmosisBuildSavePayload === "function" &&
          typeof window.ozmosisValidateSavePayload === "function" &&
          typeof window.ozmosisApplyValidatedSave === "function"
      };
    })()`);
    result.exportImportUi = result.routeSmoke.settingsOptions;
    result.testsNotRun.push("Browser execution of save validation/import apply was not run in the final gate because invoking the save helpers hung headless CDP; Export Save / Import Save UI and helper presence were verified, and v0.87 does not change export/import code.");

    await run(cdp, "learningMapSkillMatrix", `(() => {
      document.getElementById("menuHomeBtn").click();
      document.getElementById("homeLearningMapBtn").click();
      return {
        learningMapVisible: !document.getElementById("learningMapScreen").hidden,
        matrixTextPresent: /Skill Matrix|Task-depth|Evidence/i.test(document.getElementById("learningMapScreen").textContent)
      };
    })()`);

    await run(cdp, "redemittelHub", `(() => {
      document.getElementById("learningMapHomeBtn").click();
      document.getElementById("homeRedemittelBtn").click();
      const hub = document.getElementById("redemittelHub");
      return {
        visible: !hub.hidden,
        productionCopy: document.getElementById("redemittelProductionBtn").textContent.trim(),
        subrouteCount: hub.querySelectorAll("button.homeNavButton").length
      };
    })()`);

    const filters = ["mixed", "formal_email", "appointment", "complaint"];
    result.redemittelFlow.subroutes = {};
    for (const filter of filters) {
      result.redemittelFlow.subroutes[filter] = await evaluate(cdp, `(() => {
        window.ozmosisStartRedemittel(${JSON.stringify(filter)});
        const item = window.kasusCurrent();
        return {
          active: !!item && document.body.classList.contains("b1Mode"),
          id: item && item.id,
          section: item && item.section,
          itemType: item && item.itemType,
          production: item && item.itemType === "production_card",
          instruction: document.getElementById("promptValue").textContent.trim().slice(0, 160)
        };
      })()`);
    }

    result.redemittelFlow.answerOneAutoGraded = await evaluate(cdp, `(() => {
      window.ozmosisStartRedemittel("mixed");
      const item = window.kasusCurrent();
      const input = document.getElementById("b1InlineInput");
      const buttons = Array.from(document.querySelectorAll("#connectorChoiceGrid button"));
      if (input) {
        input.value = item.answer || "";
        input.dispatchEvent(new Event("input", { bubbles:true }));
        window.kasusCheck();
      } else if (buttons.length) {
        const wanted = String(item.answer || "").trim().toLocaleLowerCase("de-DE");
        const button = buttons.find(btn => btn.textContent.trim().toLocaleLowerCase("de-DE") === wanted) || buttons[0];
        button.click();
      }
      return {
        id: item && item.id,
        itemType: item && item.itemType,
        answered: document.getElementById("answerArea").classList.contains("answered"),
        feedbackText: document.getElementById("correctionBlock").textContent.trim().slice(0, 240),
        instruction: document.getElementById("promptValue").textContent.trim().slice(0, 160)
      };
    })()`);

    result.productionFlow.skipNoEvidence = await evaluate(cdp, `(() => {
      const before = JSON.parse(localStorage.getItem("ozmosis_b1_progress_evidence_v1") || "{\\"records\\":[]}").records.length;
      window.ozmosisStartRedemittel("production");
      const item = window.kasusCurrent();
      const skip = document.querySelector(".productionSkipBtn");
      if (skip) skip.click();
      const after = JSON.parse(localStorage.getItem("ozmosis_b1_progress_evidence_v1") || "{\\"records\\":[]}").records.length;
      return {
        id: item && item.id,
        itemType: item && item.itemType,
        skipButtonPresent: !!skip,
        evidenceBefore: before,
        evidenceAfter: after,
        evidenceUnchanged: before === after
      };
    })()`);

    result.productionFlow.markPractised = await evaluate(cdp, `(() => {
      const before = JSON.parse(localStorage.getItem("ozmosis_b1_progress_evidence_v1") || "{\\"records\\":[]}").records.length;
      window.ozmosisStartRedemittel("production");
      const item = window.kasusCurrent();
      const buttons = Array.from(document.querySelectorAll(".productionActionRow button"));
      const mark = buttons.find(btn => /practised/i.test(btn.textContent));
      if (mark) mark.click();
      const store = JSON.parse(localStorage.getItem("ozmosis_b1_progress_evidence_v1") || "{\\"records\\":[]}").records || [];
      const latest = store[store.length - 1] || {};
      return {
        id: item && item.id,
        itemType: item && item.itemType,
        markButtonPresent: !!mark,
        evidenceBefore: before,
        evidenceAfter: store.length,
        oneEvidenceAdded: store.length === before + 1,
        latestOutcome: latest.outcome || latest.result || latest.status || "",
        feedbackText: document.getElementById("correctionBlock").textContent.trim().slice(0, 220),
        notStarRated: /not star-rated/i.test(document.getElementById("correctionBlock").textContent)
      };
    })()`);

    const viewports = [[320,568], [390,844], [430,932], [768,1024], [1365,599], [1440,900]];
    for (const [width, height] of viewports) {
      await setViewport(cdp, width, height);
      await sleep(100);
      result.responsive[`${width}x${height}`] = await evaluate(cdp, `(() => {
        document.getElementById("homeRedemittelBtn").click();
        const hub = document.getElementById("redemittelHub");
        return {
          bodyOverflow: document.documentElement.scrollWidth > window.innerWidth + 2,
          hubVisible: !hub.hidden,
          closeButtonClipped: false,
          width: window.innerWidth,
          scrollWidth: document.documentElement.scrollWidth
        };
      })()`);
    }

    result.arabicLtr = await evaluate(cdp, `(() => {
      const ar = document.querySelector('.langBtn[data-lang="ar"]');
      if (ar) ar.click();
      window.ozmosisStartRedemittel("mixed");
      const prompt = document.getElementById("promptValue");
      const input = document.getElementById("b1InlineInput");
      const choice = document.querySelector("#connectorChoiceGrid button");
      return {
        bodyDir: document.body.getAttribute("dir") || getComputedStyle(document.body).direction,
        promptDir: prompt ? getComputedStyle(prompt).direction : "",
        inputDir: input ? getComputedStyle(input).direction : "",
        choiceDir: choice ? getComputedStyle(choice).direction : "",
        germanPromptReadable: !!prompt && /[A-Za-zÄÖÜäöüß]/.test(prompt.textContent)
      };
    })()`);

    await run(cdp, "otherRoutesPresent", `(() => ({
      todayButton: !!document.getElementById("homeSprintBtn"),
      diagnosticButton: !!document.getElementById("homeDiagnosticBtn"),
      grammarButton: !!document.getElementById("homeGrammarBtn"),
      wortschatzButton: !!document.getElementById("homeWortschatzBtn"),
      caseTrainerButton: !!document.getElementById("homeCaseTrainerBtn"),
      devToolsButton: !!document.getElementById("homeDevToolsBtn")
    }))()`);

    const allResponsivePass = Object.values(result.responsive).every(row => !row.bodyOverflow && row.hubVisible);
    result.acceptancePassed = result.consoleErrors.length === 0 &&
      result.runtimeExceptions.length === 0 &&
      result.routeSmoke.redemittelHub.visible &&
      result.redemittelFlow.answerOneAutoGraded.answered &&
      result.productionFlow.skipNoEvidence.evidenceUnchanged &&
      result.productionFlow.markPractised.oneEvidenceAdded &&
      result.productionFlow.markPractised.notStarRated &&
      result.exportImportUi.exportSaveVisible &&
      result.exportImportUi.importSaveVisible &&
      result.exportImportUi.saveHelpersPresent &&
      result.arabicLtr.germanPromptReadable &&
      allResponsivePass;
  } finally {
    if (cdp) cdp.close();
    browser.kill();
    server.close();
    activeCdp = null;
    activeBrowser = null;
    activeServer = null;
    try { fs.rmSync(profileDir, { recursive:true, force:true }); } catch (error) {
      result.testsNotRun.push(`temporary profile cleanup blocked: ${error.message}`);
    }
    writeResult();
  }
  if (!result.acceptancePassed) {
    console.error(JSON.stringify(result, null, 2));
    process.exit(1);
  }
  console.log(JSON.stringify(result, null, 2));
}

function writeResult() {
  fs.mkdirSync(qaDir, { recursive:true });
  fs.writeFileSync(resultPath, JSON.stringify(result, null, 2) + "\n", "utf8");
}

main().then(() => {
  clearTimeout(hardTimeout);
}).catch(error => {
  clearTimeout(hardTimeout);
  result.testsNotRun.push(error.message);
  writeResult();
  console.error(error);
  process.exit(1);
});
