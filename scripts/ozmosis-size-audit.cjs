const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");

function formatBytes(bytes) {
  const units = ["B", "KB", "MB", "GB"];
  let value = Number(bytes || 0);
  let index = 0;
  while (value >= 1024 && index < units.length - 1) {
    value /= 1024;
    index += 1;
  }
  return `${value.toFixed(index === 0 ? 0 : 2)} ${units[index]}`;
}

function safeStat(target) {
  try { return fs.statSync(target); } catch (_) { return null; }
}

function walk(dir, options = {}) {
  const files = [];
  const dirs = [];
  const stack = [dir];
  while (stack.length) {
    const current = stack.pop();
    let entries = [];
    try { entries = fs.readdirSync(current, { withFileTypes:true }); } catch (_) { continue; }
    for (const entry of entries) {
      const full = path.join(current, entry.name);
      const rel = path.relative(root, full).replace(/\\/g, "/");
      if (options.skipGit && (rel === ".git" || rel.startsWith(".git/"))) continue;
      if (entry.isDirectory()) {
        dirs.push(full);
        stack.push(full);
      } else if (entry.isFile()) {
        const stat = safeStat(full);
        files.push({ full, rel, size:stat ? stat.size : 0 });
      }
    }
  }
  return { files, dirs };
}

function dirSize(dir) {
  if (!fs.existsSync(dir)) return { bytes:0, files:0 };
  const { files } = walk(dir);
  return { bytes:files.reduce((sum, file) => sum + file.size, 0), files:files.length };
}

function directorySizes() {
  const all = walk(root, { skipGit:true });
  const map = new Map();
  for (const file of all.files) {
    let current = path.dirname(file.full);
    while (current.startsWith(root)) {
      const rel = path.relative(root, current).replace(/\\/g, "/") || ".";
      map.set(rel, (map.get(rel) || 0) + file.size);
      if (current === root) break;
      current = path.dirname(current);
    }
  }
  return Array.from(map.entries())
    .map(([rel, bytes]) => ({ path:rel, bytes }))
    .sort((a, b) => b.bytes - a.bytes);
}

function isBrowserProfileRel(rel) {
  const lower = rel.toLowerCase();
  return /(^|\/)[^/]*(edge-profile|chrome-profile|browser-profile|cdp-profile)[^/]*(\/|$)/.test(lower);
}

function browserProfileFolders() {
  const dev = path.join(root, "_development-files");
  if (!fs.existsSync(dev)) return [];
  const { dirs } = walk(dev);
  const top = new Map();
  for (const dir of dirs) {
    const rel = path.relative(root, dir).replace(/\\/g, "/");
    if (!isBrowserProfileRel(rel)) continue;
    const parts = rel.split("/");
    const index = parts.findIndex(part => /(edge-profile|chrome-profile|browser-profile|cdp-profile)/i.test(part));
    if (index >= 0) {
      const profileRel = parts.slice(0, index + 1).join("/");
      top.set(profileRel, path.join(root, profileRel));
    }
  }
  return Array.from(top.entries()).map(([rel, full]) => {
    const size = dirSize(full);
    return { path:rel, bytes:size.bytes, files:size.files };
  }).sort((a, b) => b.bytes - a.bytes);
}

function zipFiles() {
  return walk(root, { skipGit:true }).files.filter(file => file.rel.toLowerCase().endsWith(".zip"));
}

function packageBudgetEstimate() {
  const includeRoots = ["index.html", "manifest.json", "AGENTS.md", "README.md", "CHANGELOG-FULL-OZMOSIS.txt", ".gitignore", "content", "data", "docs", "scripts"];
  let bytes = 0;
  let files = 0;
  for (const rel of includeRoots) {
    const full = path.join(root, rel);
    const stat = safeStat(full);
    if (!stat) continue;
    if (stat.isFile()) {
      bytes += stat.size;
      files += 1;
    } else if (stat.isDirectory()) {
      const size = dirSize(full);
      bytes += size.bytes;
      files += size.files;
    }
  }
  const screenConcepts = dirSize(path.join(root, "_development-files", "ScreenConcepts"));
  return { bytes, files, withScreenConceptsBytes:bytes + screenConcepts.bytes, screenConceptsBytes:screenConcepts.bytes };
}

const all = walk(root, { skipGit:true });
const total = all.files.reduce((sum, file) => sum + file.size, 0);
const dev = dirSize(path.join(root, "_development-files"));
const screenshots = dirSize(path.join(root, "docs", "qa", "screenshots"));
const profiles = browserProfileFolders();
const profileBytes = profiles.reduce((sum, item) => sum + item.bytes, 0);
const zips = zipFiles();
const largestFiles = all.files.slice().sort((a, b) => b.size - a.size).slice(0, 30);
const largestDirs = directorySizes().slice(0, 20);
const budget = packageBudgetEstimate();

const result = {
  root,
  generatedAt:new Date().toISOString(),
  workspaceTotalBytes:total,
  workspaceTotalHuman:formatBytes(total),
  fileCount:all.files.length,
  developmentFilesBytes:dev.bytes,
  developmentFilesHuman:formatBytes(dev.bytes),
  developmentFilesFileCount:dev.files,
  screenshotsBytes:screenshots.bytes,
  screenshotsHuman:formatBytes(screenshots.bytes),
  browserProfileFolderCount:profiles.length,
  browserProfileBytes:profileBytes,
  browserProfileHuman:formatBytes(profileBytes),
  zipCount:zips.length,
  zipFiles:zips.map(file => ({ path:file.rel, bytes:file.size, human:formatBytes(file.size) })),
  largestFiles:largestFiles.map(file => ({ path:file.rel, bytes:file.size, human:formatBytes(file.size) })),
  largestDirectories:largestDirs.map(dir => ({ path:dir.path, bytes:dir.bytes, human:formatBytes(dir.bytes) })),
  packageBudgetEstimate:{
    cleanSourceBytes:budget.bytes,
    cleanSourceHuman:formatBytes(budget.bytes),
    cleanSourceWithScreenConceptsBytes:budget.withScreenConceptsBytes,
    cleanSourceWithScreenConceptsHuman:formatBytes(budget.withScreenConceptsBytes),
    targetWithQaProofBytes:30 * 1024 * 1024,
    targetWithoutQaProofBytes:10 * 1024 * 1024,
    unpackedSourceTargetBytes:100 * 1024 * 1024,
    browserProfilesInPackage:0
  }
};

console.log(JSON.stringify(result, null, 2));
