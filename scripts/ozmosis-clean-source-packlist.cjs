const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const output = path.join(root, "docs", "qa", "v0.85.3.3a_clean_source_packlist.txt");

const lines = [
  "Ozmosis clean source ZIP packlist",
  "Patch: v0.85.3.3a",
  "",
  "Use this list when making a clean manual ZIP. Do not zip the whole working folder.",
  "",
  "Include:",
  "index.html",
  "manifest.json",
  "AGENTS.md",
  "README.md",
  "CHANGELOG-FULL-OZMOSIS.txt",
  ".gitignore",
  "content/**",
  "data/**",
  "docs/**",
  "scripts/**",
  "_development-files/ScreenConcepts/** only if the current task needs visual references",
  "_development-files/*.cjs only if the current task needs QA scripts",
  "",
  "Do not include:",
  "_development-files/*profile*",
  "_development-files/*edge-profile*",
  "_development-files/*chrome-profile*",
  "_development-files/*browser-profile*",
  "_development-files/*cdp-profile*",
  "_development-files/**/Cache/**",
  "_development-files/**/Code Cache/**",
  "_development-files/**/GPUCache/**",
  "_development-files/**/Service Worker/**",
  "_development-files/**/Edge Entity Extraction/**",
  "test-results/**",
  "playwright-report/**",
  "node_modules/**",
  "*.zip",
  "*.tmp",
  "*.bak",
  "",
  "Plain rule:",
  "Package source files, content, data, docs, and scripts. Do not package browser profiles or caches."
];

fs.mkdirSync(path.dirname(output), { recursive:true });
fs.writeFileSync(output, lines.join("\n") + "\n", "utf8");
console.log(JSON.stringify({ ok:true, output:path.relative(root, output).replace(/\\/g, "/") }, null, 2));
