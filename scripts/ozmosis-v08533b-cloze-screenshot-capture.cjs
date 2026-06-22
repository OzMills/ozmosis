const fs = require("fs");
const http = require("http");
const net = require("net");
const os = require("os");
const path = require("path");
const { spawn } = require("child_process");

const root = path.resolve(__dirname, "..");
const conceptDir = path.join(root, "_development-files", "ScreenConcepts");
const screenshotRoot = path.join(root, "docs", "qa", "screenshots", "v0.85.3.3b-duplicate-teach-me-hotfix");
const actualDir = path.join(screenshotRoot, "actual");
const resultPath = path.join(screenshotRoot, "v08533b_cloze_capture_result.json");
const comparisonPath = path.join(screenshotRoot, "comparison.html");
const measurementsPath = path.join(screenshotRoot, "screenconcept-measurements.json");
const contactSheetPath = path.join(screenshotRoot, "comparison-contact-sheet.png");
const keepProfile = process.argv.includes("--keep-profile");
const profileDir = fs.mkdtempSync(path.join(os.tmpdir(), "ozmosis-v08533b-capture-edge-profile-"));
const baseClozeId = "v080149_cat02_practice_family_cat02_pf_005";
const choiceId = "v080149_cat02_contrast_cat02_cs_013";
const correctionId = "b1_connector_v085_variable_weil_001";

const requiredStates = [
  "ClozeDefaultShortInline",
  "ClozeTypingShortInline",
  "ClozeFailShortInline",
  "ClozeSuccessShortInline",
  "ClozeDefaultWithCue",
  "ClozeTypingWithCue",
  "ClozeLongWrapDefault",
  "ClozeLongWrapTyping",
  "ChoiceDefault",
  "ChoiceFail",
  "CorrectionDefaultFilled"
];

const referenceByState = {
  ClozeDefaultShortInline:"ClozeDefault",
  ClozeTypingShortInline:"ClozeTyping",
  ClozeFailShortInline:"ClozeFail",
  ClozeSuccessShortInline:"ClozeSuccess",
  ClozeDefaultWithCue:"ClozeDefault",
  ClozeTypingWithCue:"ClozeTyping",
  ClozeLongWrapDefault:"ClozeDefault",
  ClozeLongWrapTyping:"ClozeTyping",
  ChoiceDefault:"ChoiceDefault",
  ChoiceFail:"ChoiceFail",
  CorrectionDefaultFilled:"CorrectionDefaultFilled"
};

const screenConceptMeasurements = {
  method:"ScreenConcept SVG and PNG references are retained as the strict visual family. v0.85.3.3b reuses the representative QA-only cloze fixtures to prove the duplicate Teach Me hotfix.",
  canvas:{ width:430, height:932 },
  clozeReference:{ exampleShape:"Welche [input] soll ich mitbringen?", input:{ x:130, y:110, width:258, height:34, radius:7 }, sentenceZone:{ x:26, y:110, width:378, height:58 } },
  cueDecision:"Cue is shown as a small secondary line below the cloze sentence in the existing support/cue slot. This preserves the ScreenConcept sentence zone and prevents under-context cues from pushing the sentence too low.",
  acceptedV08532Baseline:"docs/qa/v0.85.3.2_strict_layout_geometry_results.json"
};

const fixtures = {
  shortInline:{
    label:"Short inline noun/article-style cloze",
    prompt_de:"Welche ___ soll ich mitbringen?",
    answer:"Unterlagen",
    acceptedAnswers:["Unterlagen"],
    fullAnswer_de:"Welche Unterlagen soll ich mitbringen?",
    support_en:"Which documents should I bring?",
    hint_en:"Think about the documents for an appointment.",
    microRule:"Use Unterlagen for the documents you need to bring.",
    qaClozeWidthPx:164,
    _displayModel:{
      schemaVersion:"v0.85.1-prompt-cue-display-v1",
      stimulus_de:"Welche ___ soll ich mitbringen?",
      instruction_de:"Ergänze den Satz.",
      cueText:"",
      support_en:"Which documents should I bring?",
      supportVisibility:"after_answer",
      cueVisibility:"hidden",
      hint_en:"Think about the documents for an appointment.",
      hintVisibility:"reveal",
      displayStatus:"ok",
      issues:[]
    }
  },
  withCue:{
    label:"Short phrase cloze with cue",
    prompt_de:"Ich lerne Deutsch auf ___.",
    answer:"B1-Niveau",
    acceptedAnswers:["B1-Niveau", "B1 Niveau"],
    fullAnswer_de:"Ich lerne Deutsch auf B1-Niveau.",
    support_en:"You say your language level.",
    hint_en:"Use the level phrase, not only the number.",
    microRule:"Use auf + level phrase: auf B1-Niveau.",
    qaClozeWidthPx:126,
    _displayModel:{
      schemaVersion:"v0.85.1-prompt-cue-display-v1",
      stimulus_de:"Ich lerne Deutsch auf ___.",
      instruction_de:"Ergänze den Satz.",
      cueText:"Sie nennen Ihr Sprachniveau.",
      support_en:"You say your language level.",
      supportVisibility:"after_answer",
      cueVisibility:"before_answer",
      hint_en:"Use the level phrase, not only the number.",
      hintVisibility:"reveal",
      displayStatus:"ok",
      issues:[]
    }
  },
  longWrap:{
    label:"Longer B1 sentence that may wrap",
    prompt_de:"Ich möchte den Termin auf ___ verschieben.",
    answer:"nächsten Montag",
    acceptedAnswers:["nächsten Montag", "naechsten Montag"],
    fullAnswer_de:"Ich möchte den Termin auf nächsten Montag verschieben.",
    support_en:"I would like to move the appointment to next Monday.",
    hint_en:"Use the time phrase after auf.",
    microRule:"Use auf + time phrase when moving an appointment.",
    qaClozeWidthPx:218,
    _displayModel:{
      schemaVersion:"v0.85.1-prompt-cue-display-v1",
      stimulus_de:"Ich möchte den Termin auf ___ verschieben.",
      instruction_de:"Ergänze den Satz.",
      cueText:"",
      support_en:"I would like to move the appointment to next Monday.",
      supportVisibility:"after_answer",
      cueVisibility:"hidden",
      hint_en:"Use the time phrase after auf.",
      hintVisibility:"reveal",
      displayStatus:"ok",
      issues:[]
    }
  }
};

const choiceQaOverrides = {
  _displayModel:null,
  _choiceRenderState:null,
  choices:["zeigen", "finden", "erklären"],
  answer:"zeigen",
  correctChoice:"zeigen",
  correct_choice:"zeigen",
  hint_en:"Use the meaning first, then choose the natural German sentence."
};

const result = {
  ok:false,
  generatedAt:new Date().toISOString(),
  appVersion:"",
  exportVersion:"",
  qaFixturesUsed:Object.keys(fixtures).map(key => ({ key, label:fixtures[key].label, prompt_de:fixtures[key].prompt_de, answer:fixtures[key].answer })),
  screenshots:[],
  visibleTeachMeCounts:{},
  responsive:[],
  routeSmoke:[],
  arabicLtr:null,
  exportImport:null,
  keyboardFocus:null,
  comparison:"",
  contactSheet:"",
  consoleErrors:[],
  runtimeExceptions:[],
  errors:[]
};

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
  if (file.endsWith(".svg")) return "image/svg+xml; charset=utf-8";
  if (file.endsWith(".png")) return "image/png";
  return "application/octet-stream";
}
function edgeExecutable() {
  const candidates = [
    "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe",
    "C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe"
  ];
  const found = candidates.find(candidate => fs.existsSync(candidate));
  assert(found, "Microsoft Edge executable was not found.");
  return found;
}
function startServer() {
  const server = http.createServer((req, res) => {
    const url = new URL(req.url, "http://127.0.0.1");
    const rel = url.pathname === "/" ? "index.html" : decodeURIComponent(url.pathname.replace(/^\/+/, ""));
    const target = path.resolve(root, rel);
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
  const started = Date.now();
  let lastError;
  while (Date.now() - started < timeoutMs) {
    try { return await fetchJson(url); }
    catch (error) { lastError = error; await sleep(120); }
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
      }, timeoutMs || 10000);
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
  const started = Date.now();
  while (Date.now() - started < 30000) {
    const ready = await evaluate(cdp, "!!(window.ozmosisVersionInfo && window.ozmosisB1Debug && window.ozmosisBuildSavePayload)");
    if (ready) return true;
    await sleep(150);
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
  await sleep(180);
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
async function stage(cdp, fixtureKeyOrId, overrides) {
  const fixture = fixtures[fixtureKeyOrId];
  const id = fixture ? baseClozeId : fixtureKeyOrId;
  const payload = fixture ? Object.assign({}, fixture) : Object.assign({}, overrides || {});
  delete payload.label;
  await evaluate(cdp, `window.ozmosisB1Debug().qaStageItemById(${JSON.stringify(id)}, ${JSON.stringify(payload)})`, 30000);
  await sleep(180);
}
async function typeOnly(cdp, valueExpression) {
  await evaluate(cdp, `(() => {
    const input = document.getElementById("b1InlineInput") || document.getElementById("answerInput");
    if (!input) throw new Error("No input rendered.");
    input.focus();
    input.value = (${valueExpression});
    input.dispatchEvent(new Event("input", { bubbles:true }));
    return true;
  })()`);
  await sleep(120);
}
async function typeAndCheck(cdp, valueExpression) {
  await evaluate(cdp, `(() => {
    const input = document.getElementById("b1InlineInput") || document.getElementById("answerInput");
    if (!input) throw new Error("No input rendered.");
    input.focus();
    input.value = (${valueExpression});
    input.dispatchEvent(new Event("input", { bubbles:true }));
    const check = document.getElementById("checkBtn");
    if (!check || check.disabled) throw new Error("Check button unavailable.");
    check.click();
    return true;
  })()`);
  await sleep(280);
}
async function choose(cdp, correct) {
  await evaluate(cdp, `(() => {
    const item = window.kasusCurrent();
    const answer = String(item.answer || item.fullAnswer_de || "").trim();
    const buttons = Array.from(document.querySelectorAll("#connectorChoiceGrid button"));
    if (!buttons.length) throw new Error("No choice buttons rendered.");
    const target = buttons.find(btn => (btn.textContent.trim() === answer) === ${correct ? "true" : "false"}) || buttons[0];
    target.click();
    return true;
  })()`);
  await sleep(220);
}
async function screenshot(cdp, name) {
  await dismissFirstRun(cdp);
  await sleep(260);
  const check = await evaluate(cdp, `(() => {
    const rect = selector => {
      const node = document.querySelector(selector);
      if (!node) return null;
      const r = node.getBoundingClientRect();
      return { x:Math.round(r.x), y:Math.round(r.y), width:Math.round(r.width), height:Math.round(r.height), bottom:Math.round(r.bottom), text:node.textContent.trim().replace(/\\s+/g, " ").slice(0, 120) };
    };
    const star = document.getElementById("b1TaskStarStatus");
    const prompt = document.getElementById("promptValue");
    const input = document.getElementById("b1InlineInput");
    const hud = document.querySelector(".bottomHud");
    const visible = node => {
      if (!node || node.hidden) return false;
      const style = getComputedStyle(node);
      if (style.display === "none" || style.visibility === "hidden") return false;
      const rect = node.getBoundingClientRect();
      return rect.width > 0 && rect.height > 0;
    };
    const teachLikeControls = Array.from(document.querySelectorAll("button, [role='button']"))
      .filter(visible)
      .map(node => ({
        id:node.id || "",
        className:String(node.className || ""),
        text:node.textContent.trim().replace(/\s+/g, " "),
        disabled:!!node.disabled
      }))
      .filter(row => /^(teach me|hint)$/i.test(row.text));
    return {
      name:${JSON.stringify(name)},
      prompt:rect("#promptValue"),
      cue:rect("#englishGloss"),
      input:rect("#b1InlineInput"),
      feedback:rect("#correctionBlock.visible"),
      confidence:rect("#b1ConfidenceRow:not([hidden])"),
      hud:rect(".bottomHud"),
      state:document.body.getAttribute("data-b1-state"),
      surface:document.body.getAttribute("data-b1-surface"),
      bodyOverflow:document.documentElement.scrollWidth > window.innerWidth + 1,
      inputInsidePrompt:!!(prompt && input && prompt.contains(input)),
      visibleTeachMeCount:teachLikeControls.length,
      teachLikeControls,
      starHidden:star ? (star.hidden || getComputedStyle(star).display === "none" || star.getBoundingClientRect().height === 0) : true,
      largeTitleVisible:!!(rect(".header h1") && rect(".header h1").x >= 145),
      hudClear:!(input && hud && input.getBoundingClientRect().bottom > hud.getBoundingClientRect().top)
    };
  })()`);
  const capture = await cdp.send("Page.captureScreenshot", { format:"png", fromSurface:true }, 30000);
  const file = path.join(actualDir, `${name}.png`);
  fs.writeFileSync(file, Buffer.from(capture.data, "base64"));
  result.screenshots.push({ name, file:path.relative(root, file), check });
  result.visibleTeachMeCounts[name] = check.visibleTeachMeCount;
  if (/^ClozeDefault(ShortInline|WithCue)$/.test(name) || name === "ClozeLongWrapDefault") {
    assert(check.visibleTeachMeCount === 1, `${name}: expected exactly one Teach Me-like control, found ${check.visibleTeachMeCount}`);
  } else {
    assert(check.visibleTeachMeCount <= 1, `${name}: expected no duplicate Teach Me-like controls, found ${check.visibleTeachMeCount}`);
  }
  assert(!check.bodyOverflow, `${name}: horizontal overflow`);
  assert(check.starHidden, `${name}: pre-answer star/status strip is visible`);
  assert(!check.largeTitleVisible, `${name}: large centred title visible`);
  return check;
}
async function responsiveSmoke(cdp) {
  const viewports = [
    { width:320, height:568 },
    { width:390, height:844 },
    { width:430, height:932 },
    { width:768, height:1024 },
    { width:1365, height:599 },
    { width:1440, height:900 }
  ];
  for (const viewport of viewports) {
    await setViewport(cdp, viewport.width, viewport.height);
    await dismissFirstRun(cdp);
    await stage(cdp, viewport.width <= 390 ? "withCue" : "longWrap");
    await sleep(160);
    const check = await evaluate(cdp, `(() => {
      const prompt = document.getElementById("promptValue").getBoundingClientRect();
      const input = document.getElementById("b1InlineInput").getBoundingClientRect();
      const cue = document.getElementById("englishGloss").getBoundingClientRect();
      const hud = document.querySelector(".bottomHud").getBoundingClientRect();
      const visible = node => {
        if (!node || node.hidden) return false;
        const style = getComputedStyle(node);
        if (style.display === "none" || style.visibility === "hidden") return false;
        const rect = node.getBoundingClientRect();
        return rect.width > 0 && rect.height > 0;
      };
      const teachLikeControls = Array.from(document.querySelectorAll("button, [role='button']"))
        .filter(visible)
        .map(node => ({ text:node.textContent.trim().replace(/\s+/g, " "), rect:node.getBoundingClientRect() }))
        .filter(row => /^(teach me|hint)$/i.test(row.text));
      const teach = teachLikeControls[0] && teachLikeControls[0].rect || { height:0, bottom:0 };
      return {
        width:window.innerWidth,
        height:window.innerHeight,
        bodyOverflow:document.documentElement.scrollWidth > window.innerWidth + 1,
        promptTop:Math.round(prompt.top),
        promptHeight:Math.round(prompt.height),
        inputVisible:input.height > 24 && input.bottom < hud.top,
        inputWidth:Math.round(input.width),
        cueSecondary:cue.height === 0 || cue.top > prompt.top,
        visibleTeachMeCount:teachLikeControls.length,
        teachVisible:teachLikeControls.length === 1 && teach.height >= 40 && teach.bottom < hud.top,
        hudTop:Math.round(hud.top)
      };
    })()`);
    result.responsive.push(check);
    assert(!check.bodyOverflow, `Responsive overflow at ${viewport.width}x${viewport.height}`);
    assert(check.promptTop < Math.max(180, viewport.height * 0.3), `Prompt starts too low at ${viewport.width}x${viewport.height}`);
    assert(check.inputVisible, `Input clipped or HUD-covered at ${viewport.width}x${viewport.height}`);
    assert(check.cueSecondary, `Cue competes with sentence at ${viewport.width}x${viewport.height}`);
    assert(check.teachVisible, `Teach Me clipped or HUD-covered at ${viewport.width}x${viewport.height}`);
  }
  await setViewport(cdp, 430, 932);
}
async function arabicSmoke(cdp) {
  result.arabicLtr = await evaluate(cdp, `(() => {
    const ar = document.querySelector('.langBtn[data-lang="ar"]');
    if (ar) ar.click();
    window.ozmosisB1Debug().qaStageItemById(${JSON.stringify(baseClozeId)}, ${JSON.stringify(fixtures.withCue)});
    const prompt = document.getElementById("promptValue");
    const gloss = document.getElementById("englishGloss");
    const input = document.getElementById("b1InlineInput");
    const checkBefore = {
      promptDir:getComputedStyle(prompt).direction,
      glossDir:getComputedStyle(gloss).direction,
      inputDir:getComputedStyle(input).direction,
      promptText:prompt.textContent.trim().replace(/\\s+/g, " "),
      cueText:gloss.textContent.trim().replace(/\\s+/g, " ")
    };
    const beforeOk = checkBefore.promptDir === "ltr" && checkBefore.glossDir === "ltr" && checkBefore.inputDir === "ltr";
    input.focus();
    input.value = "falsch";
    input.dispatchEvent(new Event("input", { bubbles:true }));
    document.getElementById("checkBtn").click();
    const feedback = document.getElementById("correctionBlock");
    const checkAfter = {
      feedbackDir:getComputedStyle(feedback).direction,
      feedbackText:feedback.textContent.trim().replace(/\\s+/g, " ").slice(0, 120)
    };
    return Object.assign(checkBefore, checkAfter, {
      ok:beforeOk && checkAfter.feedbackDir === "ltr"
    });
  })()`, 30000);
  assert(result.arabicLtr.ok, "Arabic UI did not preserve German/support LTR on cloze practice.");
  await sleep(180);
}
async function exportImportSmoke(cdp) {
  result.exportImport = await evaluate(cdp, `(() => {
    const payload = window.ozmosisBuildSavePayload();
    const validation = window.ozmosisValidateSavePayload(payload);
    const applied = window.ozmosisApplyValidatedSave(validation);
    const malformed = window.ozmosisValidateSavePayload({ app:"Ozmosis", version:"bad", data:"not-object" });
    document.getElementById("homeOptionsBtn").click();
    const text = document.body.textContent;
    return {
      exportVersion:payload.version,
      payloadVersion:payload.version,
      expectedVersion:window.ozmosisVersionInfo().exportVersion,
      validationOk:!!(validation && validation.ok),
      applied:applied !== false,
      malformedRejected:!!(malformed && !malformed.ok),
      exportSaveVisible:/Export Save/.test(text),
      importSaveVisible:/Import Save/.test(text)
    };
  })()`);
  assert(result.exportImport.payloadVersion === result.exportImport.expectedVersion, "Export version mismatch.");
  assert(result.exportImport.validationOk && result.exportImport.applied, "Current export/import validation failed.");
  assert(result.exportImport.malformedRejected, "Malformed save was not rejected.");
  assert(result.exportImport.exportSaveVisible && result.exportImport.importSaveVisible, "Export Save / Import Save UI not visible.");
}
async function keyboardFocusSmoke(cdp) {
  await stage(cdp, "shortInline");
  result.keyboardFocus = await evaluate(cdp, `(() => {
    const input = document.getElementById("b1InlineInput");
    input.focus();
    const inputFocused = document.activeElement === input;
    input.value = "Unterlagen";
    input.dispatchEvent(new Event("input", { bubbles:true }));
    const check = document.getElementById("checkBtn");
    const checkVisible = check.offsetParent !== null && !check.disabled;
    check.focus();
    const checkFocused = document.activeElement === check;
    return { inputFocused, checkVisible, checkFocused };
  })()`);
  assert(result.keyboardFocus.inputFocused && result.keyboardFocus.checkVisible && result.keyboardFocus.checkFocused, "Keyboard/focus smoke failed.");
}
function htmlEscape(text) {
  return String(text == null ? "" : text)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
function buildComparison() {
  const geometryPath = path.join(screenshotRoot, "geometry-results.json");
  let geometry = null;
  if (fs.existsSync(geometryPath)) {
    try { geometry = JSON.parse(fs.readFileSync(geometryPath, "utf8")); } catch (_) {}
  }
  const cards = requiredStates.map(name => {
    const refName = referenceByState[name] || name;
    const ref = path.relative(screenshotRoot, path.join(conceptDir, `${refName}.png`)).replace(/\\/g, "/");
    const actual = `actual/${name}.png`;
    const screenshot = result.screenshots.find(row => row.name === name);
    const notes = screenshot ? screenshot.check : {};
    return `<section class="pair"><h2>${htmlEscape(name)}</h2><div class="compare"><figure><figcaption>ScreenConcept reference: ${htmlEscape(refName)}</figcaption><img src="${htmlEscape(ref)}" alt="${htmlEscape(refName)} reference"></figure><figure><figcaption>Actual v0.85.3.3b fixture</figcaption><img src="${htmlEscape(actual)}" alt="${htmlEscape(name)} actual"></figure></div><pre>${htmlEscape(JSON.stringify({ prompt:notes.prompt, cue:notes.cue, input:notes.input, state:notes.state, inputInsidePrompt:notes.inputInsidePrompt, visibleTeachMeCount:notes.visibleTeachMeCount, teachLikeControls:notes.teachLikeControls, starHidden:notes.starHidden }, null, 2))}</pre></section>`;
  }).join("\n");
  const geometrySummary = geometry ? geometry.checks.map(check => `${check.pass ? "PASS" : "FAIL"} - ${check.name}`).join("\n") : "Geometry gate not found.";
  const html = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>Ozmosis v0.85.3.3b Duplicate Teach Me Hotfix Comparison</title>
<style>
body{margin:0;padding:24px;background:#05070d;color:#dff7ff;font-family:Arial,sans-serif}
h1{margin:0 0 8px;font-size:24px}
p{margin:0 0 18px;color:#b8cfdf}
.pair{margin:0 0 28px;padding:16px;border:1px solid #274056;border-radius:14px;background:#08101c}
.pair h2{margin:0 0 12px;color:#7de3ff;font-size:18px}
.compare{display:grid;grid-template-columns:repeat(2,minmax(0,430px));gap:18px;align-items:start}
figure{margin:0}
figcaption{margin:0 0 8px;color:#a8c7d8;font-size:13px}
img{width:100%;max-width:430px;border:1px solid #1f3850;border-radius:10px;background:#05070d}
pre{white-space:pre-wrap;margin:12px 0 0;padding:12px;border-radius:10px;background:#050913;color:#cfeaf7;font-size:12px}
@media(max-width:920px){.compare{grid-template-columns:1fr}}
</style>
</head>
<body>
<h1>Ozmosis v0.85.3.3b Duplicate Teach Me Hotfix Comparison</h1>
<p>Reference images are ScreenConcept PNGs. Actual images are QA-only representative cloze fixtures captured from the live static app. The JSON beneath each image includes visible Teach Me-like controls. Geometry gate summary:</p>
<pre>${htmlEscape(geometrySummary)}</pre>
${cards}
</body>
</html>`;
  fs.writeFileSync(comparisonPath, html, "utf8");
  result.comparison = path.relative(root, comparisonPath);
}
async function contactSheet(cdp, serverPort) {
  try {
    await setViewport(cdp, 1320, 1800);
    await cdp.send("Page.navigate", { url:`http://127.0.0.1:${serverPort}/${path.relative(root, comparisonPath).replace(/\\/g, "/")}` });
    await sleep(700);
    const capture = await cdp.send("Page.captureScreenshot", { format:"png", fromSurface:true, captureBeyondViewport:true }, 30000);
    fs.writeFileSync(contactSheetPath, Buffer.from(capture.data, "base64"));
    result.contactSheet = path.relative(root, contactSheetPath);
  } catch (error) {
    result.contactSheet = `not generated: ${error && error.message || error}`;
  }
}

(async () => {
  let server;
  let edge;
  let cdp;
  try {
    fs.mkdirSync(actualDir, { recursive:true });
    fs.writeFileSync(measurementsPath, JSON.stringify(screenConceptMeasurements, null, 2), "utf8");
    ["ClozeDefault", "ClozeTyping", "ClozeFail", "ClozeSuccess", "ChoiceDefault", "ChoiceFail", "CorrectionDefaultFilled"].forEach(name => {
      assert(fs.existsSync(path.join(conceptDir, `${name}.png`)), `Missing reference PNG: ${name}`);
      assert(fs.existsSync(path.join(conceptDir, `${name}.svg`)), `Missing reference SVG: ${name}`);
    });
    server = await startServer();
    const remotePort = await freePort();
    const appUrl = `http://127.0.0.1:${server.address().port}/index.html`;
    edge = spawn(edgeExecutable(), [
      `--remote-debugging-port=${remotePort}`,
      `--user-data-dir=${profileDir}`,
      "--headless=new",
      "--disable-gpu",
      "--no-first-run",
      "--no-default-browser-check",
      appUrl
    ], { stdio:"ignore" });
    const version = await waitForJson(`http://127.0.0.1:${remotePort}/json/version`, 10000);
    const tabs = await waitForJson(`http://127.0.0.1:${remotePort}/json/list`, 10000);
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
    await cdp.send("Page.navigate", { url:appUrl });
    await waitForAppReady(cdp);
    await dismissFirstRun(cdp);
    const versions = await evaluate(cdp, "window.ozmosisVersionInfo()");
    result.appVersion = versions.appVersion;
    result.exportVersion = versions.exportVersion;
    assert(/^v0\.85\.3\.3\b|^v0\.85\.3\.3b\b/.test(result.appVersion), "Unexpected app version.");

    await stage(cdp, "shortInline");
    await screenshot(cdp, "ClozeDefaultShortInline");

    await stage(cdp, "shortInline");
    await typeOnly(cdp, "'Unterla'");
    await screenshot(cdp, "ClozeTypingShortInline");

    await stage(cdp, "shortInline");
    await typeAndCheck(cdp, "'Ausweis'");
    await screenshot(cdp, "ClozeFailShortInline");

    await stage(cdp, "shortInline");
    await typeAndCheck(cdp, "'Unterlagen'");
    await screenshot(cdp, "ClozeSuccessShortInline");

    await stage(cdp, "withCue");
    await screenshot(cdp, "ClozeDefaultWithCue");

    await stage(cdp, "withCue");
    await typeOnly(cdp, "'B1'");
    await screenshot(cdp, "ClozeTypingWithCue");

    await stage(cdp, "longWrap");
    await screenshot(cdp, "ClozeLongWrapDefault");

    await stage(cdp, "longWrap");
    await typeOnly(cdp, "'nächsten'");
    await screenshot(cdp, "ClozeLongWrapTyping");

    await stage(cdp, choiceId, choiceQaOverrides);
    await screenshot(cdp, "ChoiceDefault");

    await stage(cdp, choiceId, choiceQaOverrides);
    await choose(cdp, false);
    await screenshot(cdp, "ChoiceFail");

    await stage(cdp, correctionId, { seed:"v08533b-correction" });
    await typeOnly(cdp, "'Ich bleibe zu Hause weil ich krank bin.'");
    await screenshot(cdp, "CorrectionDefaultFilled");

    await responsiveSmoke(cdp);
    await arabicSmoke(cdp);
    await exportImportSmoke(cdp);
    await keyboardFocusSmoke(cdp);
    buildComparison();
    await contactSheet(cdp, server.address().port);

    assert(requiredStates.every(name => fs.existsSync(path.join(actualDir, `${name}.png`))), "Not all required state screenshots were generated.");
    assert(result.consoleErrors.length === 0, `Console errors: ${result.consoleErrors.join("; ")}`);
    assert(result.runtimeExceptions.length === 0, `Runtime exceptions: ${result.runtimeExceptions.join("; ")}`);
    result.ok = true;
  } catch (error) {
    result.errors.push(error && (error.stack || error.message) || String(error));
    process.exitCode = 1;
  } finally {
    try { if (cdp) cdp.close(); } catch (_) {}
    try { if (edge) edge.kill(); } catch (_) {}
    try { if (server) server.close(); } catch (_) {}
    if (!keepProfile) {
      try { fs.rmSync(profileDir, { recursive:true, force:true }); } catch (_) {}
    } else {
      console.error(`Kept browser profile for debugging: ${profileDir}`);
    }
    fs.mkdirSync(screenshotRoot, { recursive:true });
    fs.writeFileSync(resultPath, JSON.stringify(result, null, 2), "utf8");
    console.log(JSON.stringify({
      ok:result.ok,
      screenshots:result.screenshots.length,
      comparison:path.relative(root, comparisonPath),
      measurements:path.relative(root, measurementsPath),
      contactSheet:result.contactSheet,
      result:path.relative(root, resultPath),
      errors:result.errors
    }, null, 2));
    setTimeout(() => process.exit(result.ok ? 0 : 1), 50);
  }
})();
