const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const mode = process.argv.includes("--apply") ? "apply" : "dry-run";
if (!process.argv.includes("--dry-run") && !process.argv.includes("--apply")) {
  console.error("Usage: node scripts/ozmosis-clean-dev-artifacts.cjs --dry-run");
  console.error("   or: node scripts/ozmosis-clean-dev-artifacts.cjs --apply");
  process.exit(2);
}

function rel(full) {
  return path.relative(root, full).replace(/\\/g, "/");
}

function walk(dir) {
  const entries = [];
  const stack = [dir];
  while (stack.length) {
    const current = stack.pop();
    let children = [];
    try { children = fs.readdirSync(current, { withFileTypes:true }); } catch (_) { continue; }
    for (const child of children) {
      const full = path.join(current, child.name);
      entries.push({ full, rel:rel(full), isDirectory:child.isDirectory(), isFile:child.isFile() });
      if (child.isDirectory()) stack.push(full);
    }
  }
  return entries;
}

function sizeOf(full) {
  try {
    const stat = fs.statSync(full);
    if (stat.isFile()) return { bytes:stat.size, files:1 };
    if (!stat.isDirectory()) return { bytes:0, files:0 };
  } catch (_) {
    return { bytes:0, files:0 };
  }
  let bytes = 0;
  let files = 0;
  for (const item of walk(full)) {
    if (item.isFile) {
      try { bytes += fs.statSync(item.full).size; files += 1; } catch (_) {}
    }
  }
  return { bytes, files };
}

function isProtected(itemRel) {
  return itemRel === "_development-files/ScreenConcepts" ||
    itemRel.startsWith("_development-files/ScreenConcepts/") ||
    itemRel === "_development-files/ScreenConcepts.zip" ||
    /^_development-files\/[^/]+\.cjs$/i.test(itemRel) ||
    itemRel.startsWith("docs/") ||
    itemRel.startsWith("content/") ||
    itemRel.startsWith("data/") ||
    itemRel === "index.html" ||
    itemRel === "README.md" ||
    itemRel === "AGENTS.md" ||
    itemRel === "CHANGELOG-FULL-OZMOSIS.txt";
}

function isBrowserProfileTop(item) {
  if (!item.isDirectory) return false;
  if (!item.rel.startsWith("_development-files/")) return false;
  const parts = item.rel.split("/");
  if (parts.length !== 2) return false;
  return /(edge-profile|chrome-profile|browser-profile|cdp-profile)/i.test(parts[1]);
}

function isDisposableNestedDir(item) {
  if (!item.isDirectory) return false;
  const normal = item.rel.toLowerCase();
  if (!normal.startsWith("_development-files/")) return false;
  return /\/default\/(cache|code cache|gpucache|service worker)(\/|$)/.test(normal) ||
    /\/edge entity extraction(\/|$)/.test(normal);
}

function isDisposableFile(item) {
  if (!item.isFile) return false;
  if (!item.rel.startsWith("_development-files/")) return false;
  return /\.(ldb|log|db|db-wal|db-shm)$/i.test(item.rel);
}

function isDisposableRootDir(item) {
  return item.isDirectory && /^(test-results|playwright-report)$/.test(item.rel);
}

const all = walk(root);
const candidates = [];
for (const item of all) {
  if (isProtected(item.rel)) continue;
  if (isBrowserProfileTop(item) || isDisposableNestedDir(item) || isDisposableFile(item) || isDisposableRootDir(item)) {
    candidates.push(item);
  }
}

const filtered = [];
for (const item of candidates.sort((a, b) => a.rel.length - b.rel.length)) {
  if (filtered.some(parent => item.rel === parent.rel || item.rel.startsWith(parent.rel + "/"))) continue;
  filtered.push(item);
}

const rows = filtered.map(item => {
  const size = sizeOf(item.full);
  return {
    path:item.rel,
    type:item.isDirectory ? "directory" : "file",
    bytes:size.bytes,
    files:size.files,
    reason:isBrowserProfileTop(item) ? "browser profile folder" :
      isDisposableNestedDir(item) ? "browser cache/profile subfolder" :
      isDisposableRootDir(item) ? "test output folder" : "browser database/log scratch"
  };
});

const deleted = [];
const failed = [];
if (mode === "apply") {
  for (const row of rows) {
    const full = path.join(root, row.path);
    try {
      fs.rmSync(full, { recursive:true, force:true });
      deleted.push(row.path);
    } catch (error) {
      failed.push({ path:row.path, error:error.message });
    }
  }
}

console.log(JSON.stringify({
  mode,
  candidateCount:rows.length,
  candidateBytes:rows.reduce((sum, row) => sum + row.bytes, 0),
  candidates:rows,
  deleted,
  failed,
  preserved:["index.html", "content/", "data/", "docs/", "docs/qa/screenshots/", "_development-files/ScreenConcepts/", "_development-files/*.cjs"]
}, null, 2));
if (failed.length) process.exit(1);
