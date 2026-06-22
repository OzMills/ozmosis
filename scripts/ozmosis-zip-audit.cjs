const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");

function arg(name, fallback) {
  const index = process.argv.indexOf(name);
  return index >= 0 && process.argv[index + 1] ? process.argv[index + 1] : fallback;
}

const zipDir = path.resolve(process.cwd(), arg("--zip-dir", "."));
const csvPath = path.resolve(process.cwd(), arg("--csv", path.join(root, "docs", "qa", "v0.85.3.3a_old_zip_delete_manifest.csv")));
const mdPath = path.resolve(process.cwd(), arg("--md", path.join(root, "docs", "qa", "v0.85.3.3a_old_zip_delete_manifest.md")));

function classify(entryPath) {
  const lower = entryPath.toLowerCase().replace(/\\/g, "/");
  if (/(edge-profile|chrome-profile|browser-profile|cdp-profile)/.test(lower)) return ["browser_profile_or_cache", "exclude_from_future_zip"];
  if (/\/default\/(cache|code cache|gpucache|service worker)\//.test(lower)) return ["browser_profile_or_cache", "exclude_from_future_zip"];
  if (/\/edge entity extraction\//.test(lower)) return ["browser_profile_or_cache", "exclude_from_future_zip"];
  if (/\.(ldb|log|db|db-wal|db-shm)$/.test(lower) && lower.includes("_development-files/")) return ["browser_database_or_log", "exclude_from_future_zip"];
  if (lower.includes("test-results/") || lower.includes("playwright-report/")) return ["test_output", "exclude_from_future_zip"];
  if (lower.includes("node_modules/")) return ["dependency_folder", "exclude_from_future_zip"];
  if (lower.endsWith(".zip")) return ["nested_zip", "remove_from_extracted_copy"];
  return ["source_or_unknown", "keep"];
}

function findEndOfCentralDirectory(buffer) {
  const signature = 0x06054b50;
  const min = Math.max(0, buffer.length - 22 - 65535);
  for (let offset = buffer.length - 22; offset >= min; offset -= 1) {
    if (buffer.readUInt32LE(offset) === signature) return offset;
  }
  throw new Error("End of central directory not found");
}

function readZipEntries(zipPath) {
  const buffer = fs.readFileSync(zipPath);
  const eocd = findEndOfCentralDirectory(buffer);
  const entryCount = buffer.readUInt16LE(eocd + 10);
  const centralOffset = buffer.readUInt32LE(eocd + 16);
  const entries = [];
  let offset = centralOffset;
  for (let i = 0; i < entryCount; i += 1) {
    if (buffer.readUInt32LE(offset) !== 0x02014b50) throw new Error(`Bad central directory entry at ${offset}`);
    const compressedBytes = buffer.readUInt32LE(offset + 20);
    const uncompressedBytes = buffer.readUInt32LE(offset + 24);
    const nameLength = buffer.readUInt16LE(offset + 28);
    const extraLength = buffer.readUInt16LE(offset + 30);
    const commentLength = buffer.readUInt16LE(offset + 32);
    const name = buffer.slice(offset + 46, offset + 46 + nameLength).toString("utf8");
    entries.push({ name, compressedBytes, uncompressedBytes, isDirectory:name.endsWith("/") });
    offset += 46 + nameLength + extraLength + commentLength;
  }
  return entries;
}

function auditZip(zipPath) {
  const entries = readZipEntries(zipPath);
  const rows = entries.map(entry => {
    const [reason, recommendation] = classify(entry.name);
    return {
      zipFile:zipPath,
      entryPath:entry.name,
      entryType:entry.isDirectory ? "directory" : "file",
      reason,
      compressedBytes:entry.compressedBytes,
      uncompressedBytes:entry.uncompressedBytes,
      recommendation
    };
  });
  const flagged = rows.filter(row => row.recommendation !== "keep");
  const compressedBytes = rows.reduce((sum, row) => sum + row.compressedBytes, 0);
  const uncompressedBytes = rows.reduce((sum, row) => sum + row.uncompressedBytes, 0);
  let recommendation = "keep";
  if (flagged.length) recommendation = "rebuild_cleanly";
  if (flagged.length > 100 || uncompressedBytes > 100 * 1024 * 1024) recommendation = "delete_whole_zip_if_superseded";
  return { zipFile:zipPath, entryCount:rows.length, compressedBytes, uncompressedBytes, flaggedEntryCount:flagged.length, recommendation, rows };
}

function csvCell(value) {
  const text = String(value == null ? "" : value);
  return /[",\n]/.test(text) ? `"${text.replace(/"/g, '""')}"` : text;
}

function writeCsv(results) {
  const headers = ["zipFile", "entryPath", "entryType", "reason", "compressedBytes", "uncompressedBytes", "recommendation"];
  const lines = [headers.join(",")];
  let wrote = false;
  for (const result of results) {
    for (const row of result.rows) {
      if (row.recommendation === "keep") continue;
      wrote = true;
      lines.push(headers.map(header => csvCell(row[header])).join(","));
    }
  }
  if (!wrote) lines.push(["", "", "", "no zip bloat entries found", 0, 0, "keep"].map(csvCell).join(","));
  fs.mkdirSync(path.dirname(csvPath), { recursive:true });
  fs.writeFileSync(csvPath, lines.join("\n") + "\n", "utf8");
}

function writeMarkdown(results) {
  const lines = [
    "# v0.85.3.3a old ZIP delete manifest",
    "",
    "This report tells you what to delete or exclude from old Ozmosis ZIP files. It does not delete ZIP files.",
    "",
    "## ZIPs found"
  ];
  if (!results.length) lines.push("", "No ZIP files were found in the audited folder.");
  for (const result of results) {
    lines.push("", `- \`${result.zipFile}\``, `  - entries: ${result.entryCount}`, `  - compressed bytes: ${result.compressedBytes}`, `  - uncompressed bytes: ${result.uncompressedBytes}`, `  - flagged entries: ${result.flaggedEntryCount}`, `  - recommendation: \`${result.recommendation}\``);
  }
  lines.push("", "## ZIPs probably safe to delete entirely", "", "Delete an old ZIP only if it is superseded by a newer clean package or you no longer need that archive.");
  results.filter(result => result.recommendation === "delete_whole_zip_if_superseded").forEach(result => lines.push(`- \`${result.zipFile}\``));
  lines.push("", "## ZIPs to rebuild cleanly", "", "If you still want an archive of these versions, rebuild them from source using the clean packlist instead of editing the ZIP by hand.");
  results.filter(result => result.recommendation === "rebuild_cleanly").forEach(result => lines.push(`- \`${result.zipFile}\``));
  lines.push("", "## Exact internal paths to remove or exclude", "");
  let count = 0;
  for (const result of results) {
    for (const row of result.rows) {
      if (row.recommendation === "keep") continue;
      count += 1;
      if (count <= 250) lines.push(`- \`${row.zipFile}\` -> \`${row.entryPath}\` (${row.reason}; ${row.recommendation})`);
    }
  }
  if (!count) lines.push("- No removable internal paths were found.");
  if (count > 250) lines.push(`- ${count - 250} more entries are listed in the CSV manifest.`);
  lines.push(
    "",
    "## Folder patterns to avoid when manually zipping",
    "",
    "- `_development-files/*profile*`",
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
  fs.mkdirSync(path.dirname(mdPath), { recursive:true });
  fs.writeFileSync(mdPath, lines.join("\n") + "\n", "utf8");
}

const zipFiles = fs.existsSync(zipDir)
  ? fs.readdirSync(zipDir, { withFileTypes:true }).filter(entry => entry.isFile() && entry.name.toLowerCase().endsWith(".zip")).map(entry => path.join(zipDir, entry.name))
  : [];
const results = [];
for (const zipPath of zipFiles) {
  try {
    results.push(auditZip(zipPath));
  } catch (error) {
    results.push({
      zipFile:zipPath,
      entryCount:0,
      compressedBytes:0,
      uncompressedBytes:0,
      flaggedEntryCount:1,
      recommendation:"uncertain_preserve",
      rows:[{ zipFile:zipPath, entryPath:"", entryType:"zip", reason:`unreadable zip: ${error.message}`, compressedBytes:0, uncompressedBytes:0, recommendation:"uncertain_preserve" }]
    });
  }
}
writeCsv(results);
writeMarkdown(results);
console.log(JSON.stringify({
  ok:true,
  zipDir,
  zipCount:zipFiles.length,
  csv:path.relative(root, csvPath).replace(/\\/g, "/"),
  markdown:path.relative(root, mdPath).replace(/\\/g, "/"),
  results:results.map(({ rows, ...summary }) => summary)
}, null, 2));
