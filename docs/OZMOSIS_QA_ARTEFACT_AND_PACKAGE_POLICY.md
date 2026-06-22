# Ozmosis QA Artefact and Package Policy

This policy keeps Ozmosis source packages small and clear.

## What belongs in source ZIPs

Include source files, content, data, docs, and scripts:

- `index.html`
- `manifest.json`
- `AGENTS.md`
- `README.md`
- `CHANGELOG-FULL-OZMOSIS.txt`
- `.gitignore`
- `content/`
- `data/`
- `docs/`
- `scripts/`

Do not zip the whole working folder.

## What belongs in docs/qa

Use `docs/qa` for durable QA evidence:

- accepted QA reports
- machine-readable QA result JSON
- small CSV reports
- intentional screenshot proof
- comparison pages and contact sheets that prove an accepted UI gate

Keep screenshot proof focused. Do not save large exploratory screenshot dumps.

## What belongs in _development-files

Use `_development-files` for local QA helpers:

- selected `.cjs` gate scripts
- ScreenConcept references
- temporary local harness files

`_development-files` is not a package root. Do not include it wholesale in manual ZIPs.

## What must never be packaged

Never package:

- browser profile folders
- Edge or Chrome user data
- `Cache`, `Code Cache`, `GPUCache`, or `Service Worker` folders
- `Edge Entity Extraction`
- `test-results/`
- `playwright-report/`
- `node_modules/`
- old nested ZIP files
- temporary logs and browser databases

## Screenshot proof budget

Clean source ZIP with accepted QA screenshot proof should target 30 MB or less.

Clean source ZIP without screenshot proof should target 10 MB or less.

Unpacked source tree excluding browser profiles should target 100 MB or less.

Browser profile folders in final packages must be exactly 0.

## Browser profile cleanup requirement

Browser harnesses should create profiles in the operating-system temp folder and delete them after tests.

If a profile must be preserved for debugging, the script must require an explicit debug flag such as `--keep-profile`.

## Clean manual ZIP method

Use `node scripts/ozmosis-clean-source-packlist.cjs` to generate the current packlist.

Use that packlist as the source for a manual ZIP. Do not select the full working folder.

Run `node scripts/ozmosis-size-audit.cjs` before packaging.

Run `node scripts/ozmosis-clean-dev-artifacts.cjs --dry-run` before cleanup.

Run `node scripts/ozmosis-clean-dev-artifacts.cjs --apply` only when the dry run lists disposable browser or test scratch.

## How to audit old ZIPs

Put old Ozmosis ZIPs into a folder such as `zip-audit-inbox/`, or audit the parent Ozmosis workspace if the ZIPs are already there.

Run:

`python scripts/ozmosis-zip-audit.py --zip-dir ./zip-audit-inbox`

or:

`python scripts/ozmosis-zip-audit.py --zip-dir ..`

The audit writes a Markdown checklist and a CSV manifest under `docs/qa`.

## What the user should delete from old ZIPs

Do not edit a ZIP by hand unless you know exactly what you are doing.

If a ZIP contains browser profiles or caches and is superseded by a newer clean package, delete the old ZIP.

If you still need that version, rebuild it cleanly from source using the clean packlist.

## Manual ZIP Rules for Oz

Do not zip the whole working folder.

Do not include `_development-files` wholesale.

Do include source files, content, data, docs, and scripts.

Only include `_development-files/ScreenConcepts` when the current task needs it.

Only include selected `_development-files/*.cjs` scripts when the current task needs them.

Never include browser profile/cache folders.
