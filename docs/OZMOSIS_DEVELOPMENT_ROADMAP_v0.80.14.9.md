# Ozmosis Development Roadmap v0.80.14.9

## Current Patch

`v0.80.14.9 - Full B1 v0_2 Content Import with Review-Flagged Live QA`

This patch is complete when:

- The starting v0.80.14.8 version/export state is verified.
- The CAT01-CAT18 v0_2 reconciled package is inspected.
- Revised category CSV rows are imported as the active renderer source.
- Normal decision rows are imported.
- Renderer-compatible `move_to_human_review` rows are imported with review metadata.
- `cut` and `defer` rows are excluded from active imported content.
- CAT18 is imported preview-only and kept outside active B1 evidence/scoring/unlocks/review tests.
- Review Tests exist in Dev Tools only.
- The Review Edit List is stored additively and can be copied in the required tab-delimited format.
- Export/import remains backward-compatible.
- Protected storage keys remain unchanged.
- v0.80.14.8 medal/rank star visuals remain intact.
- Static validation passes.
- Browser smoke passes through Edge/CDP where available.
- Versioned README, changelog, source brief, roadmap, QA report, and package exist.

## Completed in v0.80.14.9

- Verified current v0.80.14.8 version and docs before editing.
- Inspected the source bundle and reconciled CAT01-CAT18 package.
- Generated static content files for CAT01-CAT18 from revised category CSVs.
- Preserved source ledger metadata on imported rows.
- Imported `keep_as_is`, `revise_light`, `rewrite_heavy`, `convert_task_shape`, `downgrade_evidence`, and renderer-compatible `move_to_human_review` rows.
- Excluded renderer CSV `defer` rows and preserved broader cut/defer ledgers as source documentation.
- Imported CAT18 preview-only with `activeB1Evidence: false`.
- Added CAT12-CAT17 route starters using the existing practice renderer.
- Added Review Tests in Dev Tools for active review-flagged imported rows.
- Added Review Edit List storage, popup, copy, clear, export, and import support.
- Added review/debug metadata to `ozmosisB1Debug()`.
- Added `_development-files/v080149_import_b1_v02_content.cjs`.
- Added `_development-files/v080149_full_b1_v02_content_import_gate.cjs`.
- Added `_development-files/v080149_full_b1_v02_content_import_browser_smoke.cjs`.
- Added v0.80.14.9 README, changelog, source brief, roadmap, and QA report.
- Created `ozmosis-v0_80_14_9-full-b1-v02-content-import.zip`.

## Deferred

- Manual review resolution for review-flagged imported rows.
- Activating CAT18 as normal B1/B2 scored content.
- v0.81 Cases and Articles Completion Pass.
- Satzi.
- Genitive expansion.
- B2 active content.
- Runtime German morphology.
- Runtime AI.
- Backend/API/accounts/analytics.
- Broad redesign.
- Full Leitner scheduler.
- Automatic demotion or due-date scheduling.

## Next Planned Patch

`v0.81 - Cases and Articles Completion Pass`
