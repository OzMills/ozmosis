const fs = require("node:fs");
const path = require("node:path");
const { spawnSync } = require("node:child_process");

const root = path.resolve(__dirname, "..");
const node = process.execPath;
const captureScript = path.join(root, "scripts", "ozmosis-v08533b-cloze-screenshot-capture.cjs");
const resultPath = path.join(root, "docs", "qa", "screenshots", "v0.85.3.3b-duplicate-teach-me-hotfix", "v08533b_cloze_capture_result.json");

function readResult() {
  return JSON.parse(fs.readFileSync(resultPath, "utf8").replace(/^\uFEFF/, ""));
}

function visibleCount(result, name) {
  return Number(result.visibleTeachMeCounts && result.visibleTeachMeCounts[name] || 0);
}

function sourceHasDuplicatePath() {
  const source = fs.readFileSync(path.join(root, "index.html"), "utf8");
  return {
    hasOldClozeTeachPath:/noArticleBtn"\)\.textContent = inlineInput \? "Teach me"/.test(source),
    hasDisplayHintPath:/function renderB1DisplayHintButton\(\)[\s\S]*btn\.textContent = hasHint \? "Teach me"/.test(source),
    hasSuppressionHelper:/function b1CurrentDisplayHintIsRevealable\(\)/.test(source),
    hasSuppression:/teachBtn\.style\.display = \(hasTyped \|\| hasDisplayHintButton\) \? "none" : ""/.test(source)
  };
}

const capture = spawnSync(node, [captureScript], {
  cwd:root,
  encoding:"utf8",
  maxBuffer:1024 * 1024 * 20
});

let result = null;
let errors = [];
try {
  if (fs.existsSync(resultPath)) result = readResult();
} catch (error) {
  errors.push(`Could not read capture result: ${error.message}`);
}
if (capture.status !== 0) {
  errors.push(`Capture script exited ${capture.status}: ${capture.stderr || capture.stdout}`);
}
if (!result) {
  const output = {
    ok:false,
    browserCheck:false,
    staticSource:sourceHasDuplicatePath(),
    errors
  };
  console.log(JSON.stringify(output, null, 2));
  process.exit(1);
}

const counts = {
  ClozeDefaultShortInline:visibleCount(result, "ClozeDefaultShortInline"),
  ClozeDefaultWithCue:visibleCount(result, "ClozeDefaultWithCue"),
  ClozeLongWrapDefault:visibleCount(result, "ClozeLongWrapDefault"),
  ClozeTypingShortInline:visibleCount(result, "ClozeTypingShortInline"),
  ClozeFailShortInline:visibleCount(result, "ClozeFailShortInline"),
  ClozeSuccessShortInline:visibleCount(result, "ClozeSuccessShortInline"),
  ChoiceDefault:visibleCount(result, "ChoiceDefault"),
  CorrectionDefaultFilled:visibleCount(result, "CorrectionDefaultFilled")
};

const defaultOk = counts.ClozeDefaultShortInline === 1 &&
  counts.ClozeDefaultWithCue === 1 &&
  counts.ClozeLongWrapDefault === 1;
const noDuplicates = Object.keys(counts).every(key => counts[key] <= 1);
const staticSource = sourceHasDuplicatePath();
const ok = !!result.ok && defaultOk && noDuplicates && staticSource.hasSuppressionHelper && staticSource.hasSuppression;

console.log(JSON.stringify({
  ok,
  browserCheck:!!result.ok,
  screenshotResult:path.relative(root, resultPath).replace(/\\/g, "/"),
  visibleTeachMeCounts:counts,
  staticSource,
  consoleErrors:result.consoleErrors || [],
  runtimeExceptions:result.runtimeExceptions || [],
  screenshots:(result.screenshots || []).map(row => row.name),
  errors:errors.concat(result.errors || [])
}, null, 2));

process.exit(ok ? 0 : 1);
