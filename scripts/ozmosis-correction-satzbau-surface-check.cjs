const fs = require("fs");
const http = require("http");
const net = require("net");
const os = require("os");
const path = require("path");
const vm = require("vm");
const { spawn } = require("child_process");

const root = path.resolve(__dirname, "..");
const indexPath = path.join(root, "index.html");
const screenshotRoot = path.join(root, "docs", "qa", "screenshots", "v0.85.3.7-correction-satzbau-surface");
const resultPath = path.join(root, "docs", "qa", "v0.85.3.7_correction_satzbau_surface_results.json");
const comparisonPath = path.join(screenshotRoot, "comparison.html");
const profileDir = fs.mkdtempSync(path.join(os.tmpdir(), "ozmosis-v08537-correction-satzbau-edge-profile-"));
const keepProfile = process.argv.includes("--keep-profile");

const expectedStartAppVersion = "v0.85.3.6a - Feedback Rhythm Repair and Proof Artefact Fix";
const expectedStartExportVersion = "v0.85.3.6a-feedback-rhythm-repair";
const expectedFinalAppVersion = "v0.85.3.7 - Correction and Satzbau Surface Pass";
const expectedFinalExportVersion = "v0.85.3.7-correction-satzbau-surface";

const fixtureIds = {
  choice:"v080149_cat02_contrast_cat02_cs_013",
  cloze:"v080149_cat02_practice_family_cat02_pf_005",
  correction:"b1_connector_v085_variable_weil_001",
  satzbau:"b1_word_order_main_clause_v2_time_002",
  casesRepair:"b1_cases_articles_v0841_variable_001",
  production:"b1_redemittel_084"
};

const result = {
  patch:"v0.85.3.7",
  title:"Correction and Satzbau Surface Pass",
  startingStateVerified:false,
  runtimeVersionUpdated:false,
  filesChanged:[
    "index.html",
    "AGENTS.md",
    "README.md",
    "CHANGELOG-FULL-OZMOSIS.txt",
    "docs/OZMOSIS_SOURCE_BRIEF_v0.85.3.7.md",
    "docs/OZMOSIS_DEVELOPMENT_ROADMAP_v0.85.3.7.md",
    "docs/qa/v0.85.3.7_correction_satzbau_surface.md",
    "docs/qa/v0.85.3.7_correction_satzbau_surface_results.json",
    "docs/qa/screenshots/v0.85.3.7-correction-satzbau-surface/",
    "scripts/ozmosis-correction-satzbau-surface-check.cjs"
  ],
  surfaceIssuesChecked:{
    correctionUsesTextarea:false,
    correctionLongTypingReadable:false,
    correctionFeedbackRhythmPreserved:false,
    satzbauUsesChunkRows:false,
    satzbauInlineAnswerReadable:false,
    satzbauLongWrapReadable:false,
    choiceNonRegression:false,
    clozeNonRegression:false,
    b1CasesArticlesGridPreserved:false,
    caseTrainerGridPreserved:false
  },
  surfacesChecked:{
    correctionDefaultEmpty:false,
    correctionDefaultFilled:false,
    correctionTypingLong:false,
    correctionFail:false,
    correctionSuccess:false,
    satzbauDefault:false,
    satzbauTyping:false,
    satzbauFail:false,
    satzbauSuccess:false,
    satzbauLongWrap:false,
    choiceFailNonRegression:false,
    clozeFailNonRegression:false,
    b1CasesArticlesCompactGrid:false,
    caseTrainerWrongGrid:false
  },
  preAnswerStarStatusAbsent:false,
  postAnswerFullResultShown:false,
  articleGridPreserved:false,
  compactGridPreserved:false,
  optionalRevealGridPreserved:false,
  practiceFramePreserved:false,
  contentChanged:false,
  contentChangesDocumented:[],
  scoringChanged:false,
  evidenceChanged:false,
  storageChanged:false,
  exportImportChanged:false,
  screenshotsGenerated:{},
  contactSheetVerified:false,
  testsRun:{},
  testsNotRun:[],
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
  await evaluate(cdp, `window.ozmosisB1Debug().qaStageItemById(${JSON.stringify(id)}, {seed:${JSON.stringify(seed || "v08537")}})`, 15000);
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
    return {
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
      confidenceWithinViewport:!!(confidenceRect && confidenceRect.top >= 0 && confidenceRect.bottom <= window.innerHeight + 2),
      confidenceRect:confidenceRect,
      nextVisible:visible(document.getElementById("nextBtn")),
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
  await sleep(420);
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
  result.practiceFramePreserved = true;
  result.postAnswerFullResultShown = true;
  return snap;
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
  const protectedKeys = ["ozmosis_b1_sprint_progress_v1", "ozmosis_b1_progress_evidence_v1"].every(key => html.includes(key));
  assert(protectedKeys, "Protected storage keys missing.");
  assert(html.includes("Export Save") && html.includes("Import Save"), "Export Save / Import Save strings missing.");
  assert(!fs.existsSync(path.join(root, "package.json")), "package.json should not exist.");
  assert(!/\btype\s*=\s*["']module["']/i.test(html), "type=module found.");
  assert(!/\bimport\s*\(/.test(html), "dynamic import found in index.html.");
  setRun("staticChecks", {
    inlineScriptsParsed:scripts.length,
    contentScriptsParsed:contentFiles.length,
    protectedStorageKeys:protectedKeys,
    noPackageJson:true,
    noTypeModule:true,
    noDynamicImport:true
  });
}

function comparisonHtml() {
  const entries = Object.keys(result.screenshotsGenerated)
    .filter(key => key !== "comparison" && key !== "comparison-contact-sheet")
    .map(key => {
      const src = path.relative(screenshotRoot, path.join(root, result.screenshotsGenerated[key])).replace(/\\/g, "/");
      return `<figure><img src="${src}" alt="${key}"><figcaption>${key}</figcaption></figure>`;
    }).join("\n");
  return `<!doctype html><html><head><meta charset="utf-8"><title>Ozmosis v0.85.3.7 correction and Satzbau surface contact sheet</title><style>
body{margin:0;background:#050914;color:#dff8ff;font-family:Arial,sans-serif;padding:18px}
h1{font-size:20px;margin:0 0 14px}.grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:16px;align-items:start}
figure{margin:0;border:1px solid #174052;background:#08111e;padding:8px;border-radius:10px}
img{width:100%;min-height:360px;height:auto;display:block;border-radius:6px;background:#020611;object-fit:contain;object-position:top center}
figcaption{font-size:12px;margin-top:7px;color:#7de3ff;word-break:break-word}
</style></head><body><h1>Ozmosis v0.85.3.7 Correction and Satzbau Surface</h1><div class="grid">${entries}</div></body></html>`;
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

    await stageB1(cdp, fixtureIds.correction, "correction-default-empty");
    let pre = await rhythmSnapshot(cdp);
    assert(!pre.preAnswerStarVisible, "Pre-answer star/status visible.");
    assert(pre.bodySurface === "correction", "Correction item did not use correction surface.");
    assert(pre.answerTag === "textarea" && pre.answerVisible, "Correction surface did not use a visible textarea.");
    assert(pre.answerRect && pre.answerRect.height >= 80, "Correction textarea is too short.");
    assert(!pre.bodyOverflow, "Correction default state has body horizontal overflow.");
    result.preAnswerStarStatusAbsent = true;
    result.surfaceIssuesChecked.correctionUsesTextarea = true;
    result.surfacesChecked.correctionDefaultEmpty = true;
    await screenshot(cdp, "correction-default-empty");

    await evaluate(cdp, `(() => {
      const input = document.getElementById("answerInput");
      input.value = (window.kasusCurrent().answer || "").split(" ").slice(0, 4).join(" ");
      input.dispatchEvent(new Event("input", { bubbles:true }));
      return true;
    })()`, 15000);
    let snap = await rhythmSnapshot(cdp);
    assert(snap.bodyState === "typing", "Correction filled state did not switch to typing.");
    assert(snap.answerTag === "textarea" && snap.answerValueLength > 8, "Correction filled state did not retain textarea value.");
    result.surfacesChecked.correctionDefaultFilled = true;
    await screenshot(cdp, "correction-default-filled");

    await evaluate(cdp, `(() => {
      const input = document.getElementById("answerInput");
      input.value = "Morgen ich rufe die Praxis an, weil ich brauche dringend einen Termin und die Unterlagen fehlen noch.";
      input.dispatchEvent(new Event("input", { bubbles:true }));
      return true;
    })()`, 15000);
    snap = await rhythmSnapshot(cdp);
    assert(snap.bodyState === "typing" && snap.answerRect && snap.answerRect.height >= 96, "Long correction typing state is not readable.");
    assert(!snap.bodyOverflow, "Long correction typing state has body horizontal overflow.");
    result.surfaceIssuesChecked.correctionLongTypingReadable = true;
    result.surfacesChecked.correctionTypingLong = true;
    await screenshot(cdp, "correction-typing-long");

    await stageB1(cdp, fixtureIds.correction, "correction-fail");
    await b1Answer(cdp, "wrong");
    snap = await assertB1PostAnswer(cdp, "correctionFail");
    assert(snap.answerTag === "textarea", "Correction fail did not preserve textarea control.");
    result.surfaceIssuesChecked.correctionFeedbackRhythmPreserved = true;
    result.surfacesChecked.correctionFail = true;
    await screenshot(cdp, "correction-fail");

    await stageB1(cdp, fixtureIds.correction, "correction-success");
    await b1Answer(cdp, "correct");
    await assertB1PostAnswer(cdp, "correctionSuccess");
    result.surfacesChecked.correctionSuccess = true;
    await screenshot(cdp, "correction-success");

    await stageB1(cdp, fixtureIds.satzbau, "satzbau-default");
    snap = await rhythmSnapshot(cdp);
    assert(snap.bodySurface === "satzbau", "Satzbau item did not use Satzbau surface.");
    assert(snap.hasSatzbauSurface && snap.satzbauChunkCount >= 4, "Satzbau chunk row missing or too thin.");
    assert(snap.inlineVisible, "Satzbau inline answer is not visible.");
    assert(!snap.answerVisible, "Satzbau leaked the fallback answer input.");
    assert(!snap.bodyOverflow, "Satzbau default state has body horizontal overflow.");
    result.surfaceIssuesChecked.satzbauUsesChunkRows = true;
    result.surfaceIssuesChecked.satzbauInlineAnswerReadable = true;
    result.surfacesChecked.satzbauDefault = true;
    await screenshot(cdp, "satzbau-default");

    await evaluate(cdp, `(() => {
      const inline = document.getElementById("b1InlineInput");
      inline.value = "Morgen ich rufe die Praxis an.";
      inline.dispatchEvent(new Event("input", { bubbles:true }));
      return true;
    })()`, 15000);
    snap = await rhythmSnapshot(cdp);
    assert(snap.bodyState === "typing" && snap.inlineValueLength > 8, "Satzbau typing state did not retain inline value.");
    result.surfacesChecked.satzbauTyping = true;
    await screenshot(cdp, "satzbau-typing");

    await stageB1(cdp, fixtureIds.satzbau, "satzbau-fail");
    await b1Answer(cdp, "wrong");
    snap = await assertB1PostAnswer(cdp, "satzbauFail");
    assert(snap.promptHasClozeAnswer && snap.hasSatzbauSurface, "Satzbau fail did not preserve chunked prompt with answer state.");
    result.surfacesChecked.satzbauFail = true;
    await screenshot(cdp, "satzbau-fail");

    await stageB1(cdp, fixtureIds.satzbau, "satzbau-success");
    await b1Answer(cdp, "correct");
    snap = await assertB1PostAnswer(cdp, "satzbauSuccess");
    assert(snap.promptHasClozeAnswer && snap.hasSatzbauSurface, "Satzbau success did not preserve chunked prompt with answer state.");
    result.surfacesChecked.satzbauSuccess = true;
    await screenshot(cdp, "satzbau-success");

    await setViewport(cdp, 320, 568);
    await stageB1(cdp, fixtureIds.satzbau, "satzbau-long-wrap");
    snap = await rhythmSnapshot(cdp);
    assert(snap.bodySurface === "satzbau" && snap.satzbauChunkCount >= 4, "Satzbau wrap state missing chunks at 320px.");
    assert(!snap.bodyOverflow, "Satzbau wrap state has body horizontal overflow at 320px.");
    result.surfaceIssuesChecked.satzbauLongWrapReadable = true;
    result.surfacesChecked.satzbauLongWrap = true;
    await screenshot(cdp, "satzbau-long-wrap");
    await setViewport(cdp, 430, 932);

    await stageB1(cdp, fixtureIds.choice, "choice-fail-non-regression");
    await b1Answer(cdp, "wrong");
    snap = await assertB1PostAnswer(cdp, "choiceFailNonRegression");
    assert(snap.bodySurface === "choice", "Choice non-regression did not use choice surface.");
    result.surfaceIssuesChecked.choiceNonRegression = true;
    result.surfacesChecked.choiceFailNonRegression = true;
    await screenshot(cdp, "choice-fail-non-regression");

    await stageB1(cdp, fixtureIds.cloze, "cloze-fail-non-regression");
    await b1Answer(cdp, "wrong");
    snap = await assertB1PostAnswer(cdp, "clozeFailNonRegression");
    assert(snap.bodySurface === "cloze" && snap.promptHasClozeAnswer, "Cloze non-regression did not use cloze answer state.");
    result.surfaceIssuesChecked.clozeNonRegression = true;
    result.surfacesChecked.clozeFailNonRegression = true;
    await screenshot(cdp, "cloze-fail-non-regression");

    await stageB1(cdp, fixtureIds.casesRepair, "cases-compact");
    pre = await rhythmSnapshot(cdp);
    assert(!pre.compactGrid, "B1 cases/articles compact grid visible before answer.");
    await evaluate(cdp, `(() => {
      const input = document.getElementById("answerInput");
      input.value = "Ich sehe der Mitarbeiter am Empfang.";
      window.kasusCheck();
      return true;
    })()`, 15000);
    await sleep(450);
    snap = await assertB1PostAnswer(cdp, "b1CasesArticlesCompactGrid", { compactGrid:true });
    result.surfaceIssuesChecked.b1CasesArticlesGridPreserved = true;
    result.surfacesChecked.b1CasesArticlesCompactGrid = true;
    result.compactGridPreserved = true;
    await screenshot(cdp, "b1-cases-articles-wrong-compact-grid-non-regression");

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
    result.optionalRevealGridPreserved = true;
    result.articleGridPreserved = true;
    await screenshot(cdp, "case-trainer-full-grid-reveal");

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
    result.surfaceIssuesChecked.caseTrainerGridPreserved = true;
    result.surfacesChecked.caseTrainerWrongGrid = true;
    result.articleGridPreserved = true;
    await screenshot(cdp, "case-trainer-wrong-grid-non-regression");

    result.exportImport = await evaluate(cdp, `(() => {
      const payload = window.ozmosisBuildSavePayload();
      const validation = window.ozmosisValidateSavePayload(payload);
      const applied = validation.ok ? window.ozmosisApplyValidatedSave(payload) : validation;
      const malformed = window.ozmosisValidateSavePayload({ app:"Not Ozmosis", data:{} });
      const oldPayload = Object.assign({}, payload, { version:"v0.85.3.6a-feedback-rhythm-repair", appVersion:"v0.85.3.6a - Feedback Rhythm Repair and Proof Artefact Fix" });
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

    await stageB1(cdp, fixtureIds.choice, "responsive-confidence");
    await b1Answer(cdp, "wrong");
    await assertB1PostAnswer(cdp, "responsiveConfidence");
    result.testsRun.confidenceReachabilityAfterAnswer = true;

    const viewports = [[430,932], [390,844], [320,568], [1365,599], [768,1024], [1440,900]];
    result.testsRun.responsive = [];
    for (const [width, height] of viewports) {
      await setViewport(cdp, width, height);
      await sleep(150);
      const check = await evaluate(cdp, `(() => ({
        width:${width},
        height:${height},
        bodyOverflow:document.documentElement.scrollWidth > window.innerWidth + 2,
        confidenceReachableAfterB1Answer:!!(document.getElementById("b1ConfidenceRow") && !document.getElementById("b1ConfidenceRow").hidden && getComputedStyle(document.getElementById("b1ConfidenceRow")).display !== "none" && document.querySelectorAll("#b1ConfidenceRow button").length >= 3),
        germanDir:getComputedStyle(document.getElementById("promptValue")).direction
      }))()`);
      result.testsRun.responsive.push(check);
      assert(!check.bodyOverflow, `Body horizontal overflow at ${width}x${height}.`);
      assert(check.confidenceReachableAfterB1Answer, `Confidence row not reachable after B1 answer at ${width}x${height}.`);
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
    assert(result.startingStateVerified, "Starting/final version state was not verified.");
    assert(Object.values(result.surfaceIssuesChecked).every(Boolean), "Not all correction/Satzbau surface issues were verified.");
    assert(Object.values(result.surfacesChecked).every(Boolean), "Not all correction/Satzbau screenshots and non-regression surfaces passed.");
    assert(result.preAnswerStarStatusAbsent, "Pre-answer star/status absence was not verified.");
    assert(result.postAnswerFullResultShown, "Post-answer full result/star area was not verified.");
    assert(result.articleGridPreserved && result.compactGridPreserved && result.optionalRevealGridPreserved, "Article grid forms were not preserved.");
    assert(result.practiceFramePreserved, "Shared practice frame was not preserved.");
    assert(result.contactSheetVerified, "Contact sheet was not verified.");
    assert(result.consoleErrors.length === 0, "Console errors captured.");
    assert(result.runtimeExceptions.length === 0, "Runtime exceptions captured.");
    if (!result.runtimeVersionUpdated) {
      result.finalDecision = "CORRECTION_SATZBAU_SURFACE_FUNCTIONAL_ACCEPTED_VERSION_PENDING";
      result.nextPatch = "v0.85.3.7 - Correction and Satzbau Surface Pass";
      result.acceptancePassed = false;
      process.exitCode = 1;
      return;
    }
    result.finalDecision = "CORRECTION_SATZBAU_SURFACE_ACCEPTED";
    result.nextPatch = "v0.85.3.8 - HUD, Keyboard, and Live Mobile Verification Gate";
    result.acceptancePassed = true;
  } catch (error) {
    result.testsRun.error = error && error.stack || String(error);
    if (/article grid/i.test(String(error && error.message || error))) {
      result.finalDecision = "BLOCKED_ARTICLE_GRID_REGRESSION";
      result.nextPatch = "v0.85.3.7a - Correction and Satzbau Surface Retry";
    } else if (/Edge|CDP|browser/i.test(String(error && error.message || error))) {
      result.finalDecision = "BLOCKED_BROWSER_CAPTURE_FAILED";
      result.nextPatch = "v0.85.3.7a - Browser Proof Retry";
    } else {
      result.finalDecision = "CORRECTION_SATZBAU_SURFACE_PARTIAL_NEEDS_RETRY";
      result.nextPatch = "v0.85.3.7a - Correction and Satzbau Surface Retry";
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
