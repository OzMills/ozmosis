#!/usr/bin/env python3
import argparse
import csv
import json
import zipfile
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]

def classify(path):
    lower = path.lower().replace("\\", "/")
    if any(token in lower for token in ["edge-profile", "chrome-profile", "browser-profile", "cdp-profile"]):
        return ("browser_profile_or_cache", "exclude_from_future_zip")
    if any(token in lower for token in ["/default/cache/", "/default/code cache/", "/default/gpucache/", "/default/service worker/", "/edge entity extraction/"]):
        return ("browser_profile_or_cache", "exclude_from_future_zip")
    if lower.endswith((".ldb", ".log", ".db", ".db-wal", ".db-shm")) and "_development-files/" in lower:
        return ("browser_database_or_log", "exclude_from_future_zip")
    if "test-results/" in lower or "playwright-report/" in lower:
        return ("test_output", "exclude_from_future_zip")
    if "node_modules/" in lower:
        return ("dependency_folder", "exclude_from_future_zip")
    if lower.endswith(".zip"):
        return ("nested_zip", "remove_from_extracted_copy")
    return ("source_or_unknown", "keep")

def audit_zip(zip_path):
    rows = []
    entry_count = 0
    compressed = 0
    uncompressed = 0
    bad_count = 0
    with zipfile.ZipFile(zip_path, "r") as archive:
        for info in archive.infolist():
            entry_count += 1
            compressed += info.compress_size
            uncompressed += info.file_size
            reason, recommendation = classify(info.filename)
            if recommendation != "keep":
                bad_count += 1
            rows.append({
                "zipFile": str(zip_path),
                "entryPath": info.filename,
                "entryType": "directory" if info.is_dir() else "file",
                "reason": reason,
                "compressedBytes": info.compress_size,
                "uncompressedBytes": info.file_size,
                "recommendation": recommendation
            })
    overall = "keep"
    if bad_count:
        overall = "rebuild_cleanly"
    if bad_count > 100 or uncompressed > 100 * 1024 * 1024:
        overall = "delete_whole_zip_if_superseded"
    return {
        "zipFile": str(zip_path),
        "entryCount": entry_count,
        "compressedBytes": compressed,
        "uncompressedBytes": uncompressed,
        "flaggedEntryCount": bad_count,
        "recommendation": overall,
        "rows": rows
    }

def write_reports(results, csv_path, md_path):
    csv_path.parent.mkdir(parents=True, exist_ok=True)
    with csv_path.open("w", newline="", encoding="utf-8") as handle:
        writer = csv.DictWriter(handle, fieldnames=["zipFile", "entryPath", "entryType", "reason", "compressedBytes", "uncompressedBytes", "recommendation"])
        writer.writeheader()
        any_rows = False
        for result in results:
            for row in result["rows"]:
                if row["recommendation"] == "keep":
                    continue
                any_rows = True
                writer.writerow(row)
        if not any_rows:
            writer.writerow({
                "zipFile":"",
                "entryPath":"",
                "entryType":"",
                "reason":"no zip bloat entries found",
                "compressedBytes":0,
                "uncompressedBytes":0,
                "recommendation":"keep"
            })
    lines = [
        "# v0.85.3.3a old ZIP delete manifest",
        "",
        "This report tells you what to delete or exclude from old Ozmosis ZIP files. It does not delete ZIP files.",
        "",
        "## ZIPs found"
    ]
    if not results:
        lines += ["", "No ZIP files were found in the audited folder."]
    for result in results:
        lines += [
            "",
            f"- `{result['zipFile']}`",
            f"  - entries: {result['entryCount']}",
            f"  - compressed bytes: {result['compressedBytes']}",
            f"  - uncompressed bytes: {result['uncompressedBytes']}",
            f"  - flagged entries: {result['flaggedEntryCount']}",
            f"  - recommendation: `{result['recommendation']}`"
        ]
    lines += [
        "",
        "## ZIPs probably safe to delete entirely",
        "",
        "Delete an old ZIP only if it is superseded by a newer clean package or you no longer need that archive."
    ]
    for result in results:
        if result["recommendation"] == "delete_whole_zip_if_superseded":
            lines.append(f"- `{result['zipFile']}`")
    lines += [
        "",
        "## ZIPs to rebuild cleanly",
        "",
        "If you still want an archive of these versions, rebuild them from source using the clean packlist instead of editing the ZIP by hand."
    ]
    for result in results:
        if result["recommendation"] == "rebuild_cleanly":
            lines.append(f"- `{result['zipFile']}`")
    lines += [
        "",
        "## Exact internal paths to remove or exclude",
        ""
    ]
    count = 0
    for result in results:
        for row in result["rows"]:
            if row["recommendation"] == "keep":
                continue
            count += 1
            if count <= 250:
                lines.append(f"- `{row['zipFile']}` -> `{row['entryPath']}` ({row['reason']}; {row['recommendation']})")
    if count > 250:
        lines.append(f"- {count - 250} more entries are listed in the CSV manifest.")
    if count == 0:
        lines.append("- No removable internal paths were found.")
    lines += [
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
    ]
    md_path.write_text("\n".join(lines) + "\n", encoding="utf-8")

def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--zip-dir", required=True)
    parser.add_argument("--csv", default=str(ROOT / "docs" / "qa" / "v0.85.3.3a_old_zip_delete_manifest.csv"))
    parser.add_argument("--md", default=str(ROOT / "docs" / "qa" / "v0.85.3.3a_old_zip_delete_manifest.md"))
    args = parser.parse_args()
    zip_dir = Path(args.zip_dir).resolve()
    zips = sorted(zip_dir.glob("*.zip"))
    results = []
    for zip_path in zips:
      try:
        results.append(audit_zip(zip_path))
      except zipfile.BadZipFile:
        results.append({
            "zipFile": str(zip_path),
            "entryCount": 0,
            "compressedBytes": 0,
            "uncompressedBytes": 0,
            "flaggedEntryCount": 1,
            "recommendation": "uncertain_preserve",
            "rows": [{
                "zipFile": str(zip_path),
                "entryPath": "",
                "entryType": "zip",
                "reason": "bad zip file or unreadable zip",
                "compressedBytes": 0,
                "uncompressedBytes": 0,
                "recommendation": "uncertain_preserve"
            }]
        })
    write_reports(results, Path(args.csv), Path(args.md))
    print(json.dumps({
        "ok": True,
        "zipDir": str(zip_dir),
        "zipCount": len(zips),
        "csv": str(Path(args.csv)),
        "markdown": str(Path(args.md)),
        "results": [{k:v for k,v in result.items() if k != "rows"} for result in results]
    }, indent=2))

if __name__ == "__main__":
    main()
