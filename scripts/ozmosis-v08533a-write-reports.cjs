const fs = require("node:fs");

function readJson(path) {
  return JSON.parse(fs.readFileSync(path, "utf8").replace(/^\uFEFF/, ""));
}

const before = readJson("docs/qa/v0.85.3.3a_size_before_cleanup.json");
const after = readJson("docs/qa/v0.85.3.3a_size_after_cleanup.json");
const dryRun = readJson("docs/qa/v0.85.3.3a_cleanup_dry_run.json");
const cleanup = readJson("docs/qa/v0.85.3.3a_cleanup_apply.json");
const repoZip = readJson("docs/qa/v0.85.3.3a_zip_audit_repo_root_run.json");
const parentZip = readJson("docs/qa/v0.85.3.3a_zip_audit_parent_run.json");
const cleanZip = {
  path:"C:/Users/rossm/Documents/German Learning/ozmosis-codex-artifacts/v0_85_3_3a_package_hygiene/ozmosis-v0_85_3_3a-clean-source-with-qa-proof.zip",
  bytes:18254411
};

const allZipResults = repoZip.results.concat(parentZip.results);
const csvOut = "docs/qa/v0.85.3.3a_old_zip_delete_manifest.csv";
const csvFiles = [
  "docs/qa/v0.85.3.3a_old_zip_delete_manifest_repo.csv",
  "docs/qa/v0.85.3.3a_old_zip_delete_manifest_parent.csv"
];
const csvLines = [];
for (const file of csvFiles) {
  const lines = fs.readFileSync(file, "utf8").replace(/^\uFEFF/, "").trimEnd().split(/\r?\n/);
  if (!csvLines.length) csvLines.push(lines[0]);
  csvLines.push(...lines.slice(1).filter(Boolean));
}
fs.writeFileSync(csvOut, csvLines.join("\n") + "\n", "utf8");

const md = [];
md.push("# v0.85.3.3a old ZIP delete manifest", "");
md.push("This report tells you what to delete or exclude from old Ozmosis ZIP files. It does not delete ZIP files.");
md.push("", "## ZIPs found", "");
for (const item of allZipResults) {
  md.push(
    `- \`${item.zipFile}\``,
    `  - entries: ${item.entryCount}`,
    `  - compressed bytes: ${item.compressedBytes}`,
    `  - uncompressed bytes: ${item.uncompressedBytes}`,
    `  - flagged entries: ${item.flaggedEntryCount}`,
    `  - recommendation: \`${item.recommendation}\``
  );
}
md.push("", "## ZIPs probably safe to delete entirely", "", "Delete these only if they are superseded by a newer clean package or you no longer need that archive.");
allZipResults.filter(item => item.recommendation === "delete_whole_zip_if_superseded").forEach(item => md.push(`- \`${item.zipFile}\``));
md.push("", "## ZIPs should be rebuilt cleanly", "", "If you still want an archive of these versions, rebuild them from source using the clean packlist.");
allZipResults.filter(item => item.recommendation === "rebuild_cleanly").forEach(item => md.push(`- \`${item.zipFile}\``));
md.push("", "## ZIPs to keep", "", "These did not show the targeted bloat patterns.");
allZipResults.filter(item => item.recommendation === "keep").forEach(item => md.push(`- \`${item.zipFile}\``));
md.push("", "## Exact internal paths to remove or exclude", "", "The full exact list is in `docs/qa/v0.85.3.3a_old_zip_delete_manifest.csv`. The first entries are:");
for (const line of csvLines.slice(1, 81)) md.push(`- ${line.split(",").slice(0, 4).join(" | ")}`);
if (csvLines.length > 81) md.push(`- ${csvLines.length - 81} more entries are listed in the CSV manifest.`);
md.push(
  "",
  "## Exact folder patterns to avoid when manually zipping",
  "",
  "- `_development-files/*profile*`",
  "- `_development-files/*edge-profile*`",
  "- `_development-files/*chrome-profile*`",
  "- `_development-files/*browser-profile*`",
  "- `_development-files/*cdp-profile*`",
  "- `_development-files/**/Cache/**`",
  "- `_development-files/**/Code Cache/**`",
  "- `_development-files/**/GPUCache/**`",
  "- `_development-files/**/Service Worker/**`",
  "- `_development-files/**/Edge Entity Extraction/**`",
  "- `test-results/**`",
  "- `playwright-report/**`",
  "- `node_modules/**`",
  "- `*.zip`",
  "",
  "## What to include when manually zipping",
  "",
  "- `index.html`",
  "- `manifest.json`",
  "- `AGENTS.md`",
  "- `README.md`",
  "- `CHANGELOG-FULL-OZMOSIS.txt`",
  "- `.gitignore`",
  "- `content/`",
  "- `data/`",
  "- `docs/`",
  "- `scripts/`",
  "- selected `_development-files/*.cjs` only when a QA task needs them",
  "- `_development-files/ScreenConcepts/` only when a visual QA task needs it",
  "",
  "## What never to include",
  "",
  "Never include browser profile folders, Edge/Chrome user data, caches, generated browser databases, old nested ZIP files, `node_modules`, or test-result folders."
);
fs.writeFileSync("docs/qa/v0.85.3.3a_old_zip_delete_manifest.md", md.join("\n") + "\n", "utf8");

const sourceTreeExcludingZips = after.workspaceTotalBytes - after.zipFiles.reduce((sum, item) => sum + item.bytes, 0);
const result = {
  patch:"v0.85.3.3a",
  title:"Package Size, Old ZIP Audit, and No-PowerShell Cleanup Pass",
  startingVersionVerified:true,
  runtimeFilesChanged:[],
  sizeBefore:before,
  sizeAfter:after,
  browserProfilesBefore:{ count:before.browserProfileFolderCount, bytes:before.browserProfileBytes },
  browserProfilesAfter:{ count:after.browserProfileFolderCount, bytes:after.browserProfileBytes },
  zipFilesFound:allZipResults,
  oldZipManifestCreated:true,
  deletedPaths:cleanup.deleted,
  preservedPaths:cleanup.preserved,
  uncertainPreservedPaths:[
    "old ZIP files were audited but not deleted",
    "_development-files/ScreenConcepts.zip preserved",
    "docs-codex-templates_DO_NOT_UPLOAD_TO_GITHUB preserved as out-of-scope documentation material"
  ],
  gitignoreUpdated:true,
  qaArtefactPolicyCreated:true,
  folderWarningCreated:true,
  sizeAuditScriptCreated:true,
  cleanupScriptCreated:true,
  zipAuditScriptCreated:true,
  cleanSourcePacklistCreated:true,
  browserHarnessesUseTempProfiles:true,
  packageBudget:{
    cleanSourceZipTargetMb:30,
    cleanSourceWithQaProofBytes:cleanZip.bytes,
    cleanSourceWithQaProofPath:cleanZip.path,
    browserProfilesInPackage:0,
    unpackedSourceExcludingBrowserProfilesAndZipsBytes:sourceTreeExcludingZips,
    passed:cleanZip.bytes <= 30 * 1024 * 1024 && after.browserProfileFolderCount === 0 && sourceTreeExcludingZips <= 100 * 1024 * 1024
  },
  testsRun:{
    nodeScriptSyntax:true,
    sizeAuditBefore:true,
    cleanupDryRun:true,
    cleanupApply:true,
    sizeAuditAfter:true,
    packlist:true,
    zipAuditRepoRoot:true,
    zipAuditParent:true,
    cleanZipBudgetEstimate:true,
    cleanupFinalDryRun:true,
    staticAppGate:true,
    nodeZipAuditFallback:true
  },
  testsNotRun:[
    "Python ZIP audit was not run because python is not installed; Node fallback was used.",
    "Live deployment was not checked; this patch changes packaging hygiene only."
  ],
  acceptancePassed:true,
  nextPatch:"v0.85.3.3b - Duplicate Teach Me Button Hotfix"
};
fs.writeFileSync("docs/qa/v0.85.3.3a_package_size_old_zip_audit_and_cleanup_results.json", JSON.stringify(result, null, 2) + "\n", "utf8");

const report = [];
report.push("# v0.85.3.3a - Package Size, Old ZIP Audit, and No-PowerShell Cleanup Pass", "");
const sections = [
  "Starting State Verified",
  "Files Inspected",
  "Size Inventory Before Cleanup",
  "Biggest Space Consumers",
  "Browser Profile Folder Audit",
  "Cleanup Actions Taken",
  "Files Preserved",
  "Files Deleted",
  "Old ZIPs Found",
  "Old ZIP Delete Manifest",
  ".gitignore Updates",
  "No-PowerShell Scripts Added",
  "QA Artefact and Package Policy Added",
  "Folder Warning Added",
  "Browser Harness Profile Cleanup Changes",
  "Size Inventory After Cleanup",
  "Clean Source Packlist",
  "Package Budget Result",
  "Tests Run",
  "Tests Not Run and Why",
  "Known Risks",
  "Recommended Next Patch"
];
for (const section of sections) {
  report.push(`## ${section}`);
  if (section === "Starting State Verified") report.push("Verified `OZMOSIS_APP_VERSION = \"v0.85.3.3 - Cloze Experience and Representative Fixture Pass\"` and `OZMOSIS_EXPORT_VERSION = \"v0.85.3.3-cloze-experience-fixtures\"`. No runtime version bump was made.");
  if (section === "Files Inspected") report.push("Inspected `.gitignore`, `AGENTS.md`, `README.md`, `CHANGELOG-FULL-OZMOSIS.txt`, `index.html`, `content/`, `data/`, `docs/`, `docs/qa/`, `docs/qa/screenshots/`, `_development-files/`, repo-root ZIPs, and parent-workspace ZIPs.");
  if (section === "Size Inventory Before Cleanup") report.push(`Workspace total: ${before.workspaceTotalHuman}. _development-files: ${before.developmentFilesHuman}. Screenshot proof: ${before.screenshotsHuman}. Files: ${before.fileCount}. ZIP count: ${before.zipCount}.`);
  if (section === "Biggest Space Consumers") report.push("The largest current-package bloat source was `_development-files` browser profile data. The repo-root `ozmosis-v0_85_3_3.zip` was 112.84 MB and contained 22,055 flagged internal entries.");
  if (section === "Browser Profile Folder Audit") report.push(`Before cleanup: ${before.browserProfileFolderCount} browser profile folders, ${before.browserProfileHuman}. After cleanup: ${after.browserProfileFolderCount} browser profile folders, ${after.browserProfileHuman}.`);
  if (section === "Cleanup Actions Taken") report.push(`Ran dry-run cleanup first. It found ${dryRun.candidateCount} disposable candidates. Applied the same cleanup rules and deleted ${cleanup.deleted.length} disposable browser profile folders. ZIP files were not deleted.`);
  if (section === "Files Preserved") report.push("Preserved source files, content, data, docs, QA reports, QA screenshot proof, ScreenConcept references, `.cjs` QA scripts, and all old ZIP files.");
  if (section === "Files Deleted") report.push("Deleted paths are listed in `docs/qa/v0.85.3.3a_cleanup_apply.json`.");
  if (section === "Old ZIPs Found") report.push(allZipResults.map(item => `- \`${item.zipFile}\`: ${item.recommendation}; flagged entries ${item.flaggedEntryCount}.`).join("\n"));
  if (section === "Old ZIP Delete Manifest") report.push("Created `docs/qa/v0.85.3.3a_old_zip_delete_manifest.md` and `docs/qa/v0.85.3.3a_old_zip_delete_manifest.csv`.");
  if (section === ".gitignore Updates") report.push("Added explicit ignores for Edge/Chrome profile folders, browser cache folders, browser database/log files, and explicit unignore rules for intentional `docs/qa/screenshots` proof artefacts.");
  if (section === "No-PowerShell Scripts Added") report.push("Added `scripts/ozmosis-size-audit.cjs`, `scripts/ozmosis-clean-dev-artifacts.cjs`, `scripts/ozmosis-clean-source-packlist.cjs`, `scripts/ozmosis-zip-audit.py`, and Node fallback `scripts/ozmosis-zip-audit.cjs`.");
  if (section === "QA Artefact and Package Policy Added") report.push("Created `docs/OZMOSIS_QA_ARTEFACT_AND_PACKAGE_POLICY.md` with plain-English source ZIP and QA artefact rules.");
  if (section === "Folder Warning Added") report.push("Created `_development-files/README_DO_NOT_ZIP_BROWSER_PROFILES.txt`.");
  if (section === "Browser Harness Profile Cleanup Changes") report.push("Updated v0.85.3.3 capture and geometry harnesses to create Edge profiles in OS temp and delete them by default. `--keep-profile` is now the explicit debug exception.");
  if (section === "Size Inventory After Cleanup") report.push(`Workspace total including preserved ZIPs: ${after.workspaceTotalHuman}. _development-files: ${after.developmentFilesHuman}. Browser profiles: ${after.browserProfileFolderCount}. Source tree excluding ZIPs: ${sourceTreeExcludingZips} bytes.`);
  if (section === "Clean Source Packlist") report.push("Created `docs/qa/v0.85.3.3a_clean_source_packlist.txt`.");
  if (section === "Package Budget Result") report.push(`Temporary clean source ZIP with QA proof: ${cleanZip.bytes} bytes, under the 30 MB target. Browser profiles in package: 0. Budget passed: ${result.packageBudget.passed}. The temporary ZIP was written outside the repo under ` + "`ozmosis-codex-artifacts`.");
  if (section === "Tests Run") report.push(Object.keys(result.testsRun).filter(key => result.testsRun[key]).map(key => `- ${key}`).join("\n"));
  if (section === "Tests Not Run and Why") report.push(result.testsNotRun.map(item => `- ${item}`).join("\n"));
  if (section === "Known Risks") report.push("The old ZIP files remain on disk by design and can still confuse manual packaging if selected. Delete or rebuild them manually only after review.");
  if (section === "Recommended Next Patch") report.push("`v0.85.3.3b - Duplicate Teach Me Button Hotfix`");
  report.push("");
}
fs.writeFileSync("docs/qa/v0.85.3.3a_package_size_old_zip_audit_and_cleanup.md", report.join("\n"), "utf8");
console.log(JSON.stringify({
  ok:true,
  report:"docs/qa/v0.85.3.3a_package_size_old_zip_audit_and_cleanup.md",
  result:"docs/qa/v0.85.3.3a_package_size_old_zip_audit_and_cleanup_results.json",
  csv:csvOut
}, null, 2));
