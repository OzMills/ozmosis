# Ozmosis v0.80.14.9

## Full B1 v0_2 Content Import with Review-Flagged Live QA

Ozmosis v0.80.14.9 imports the reconciled CAT01-CAT18 v0_2 B1 content package into the static app while preserving the v0.80.14.8 medal/rank star visual system.

This patch uses the revised category CSVs as the active item source and preserves source ledger metadata for import decisions, human-review flags, source file/row identity, and audit keys. It does not add a backend, framework, build step, package manager, dependency, runtime AI, runtime German generation, active B2 scoring, or a new storage model.

## What Changed

- Imported CAT01-CAT17 as active B1 practice content where renderer-compatible.
- Imported CAT18 as preview-only content:
  - `previewOnly: true`
  - `activeB1Evidence: false`
  - `importStatus: "preview_imported_not_active_b1"`
- Preserved imported row metadata including `categoryId`, `categoryTitle`, `sourceFile`, `sourceRowId`, `sourceRowNumber`, `sourceRowAuditKey`, `originalStage3Decision`, `issueCodes`, and `humanReviewReason`.
- Preserved review-flagged imported rows with:
  - `needsHumanReview: true`
  - `reviewFlag: true`
  - `reviewStatus: "review_flagged_imported"` for active review-flagged rows
  - `originalStage3Decision: "move_to_human_review"` where applicable
- Excluded renderer CSV rows with `cut` or `defer` decisions from active imported content arrays.
- Added CAT12-CAT17 route starters using existing practice rendering, scoring, evidence, and star semantics.
- Kept CAT18 out of active B1 scoring, B1 Path unlocks, Review Tests, and normal practice evidence by default.
- Added a Dev Tools-only Review Tests workflow for active review-flagged imported rows.
- Added a local Review Edit List using additive storage key `ozmosis_b1_review_edit_queue_v1`.
- Added export/import support for the Review Edit List without changing protected storage keys.
- Added debug metadata for review-flagged counts, review edit queue count, current review test item, and CAT12-CAT18 counts.
- Added validation gates:
  - `_development-files/v080149_full_b1_v02_content_import_gate.cjs`
  - `_development-files/v080149_full_b1_v02_content_import_browser_smoke.cjs`

## Import Totals

- Task CSV rows considered: `6613`
- Imported rows: `6609`
- Active imported B1 rows: `6264`
- Review-flagged imported rows: `2990`
- Active Review Tests candidates: `2645`
- CAT18 preview-only rows: `345`
- Renderer-pending rows: `0`
- Duplicate imported item IDs: `0`
- Duplicate source row audit keys: `0`

The master cut/defer ledger remains source documentation. Four `defer` rows appeared in renderer task CSVs and were excluded from active imported content.

## Review Tests

Review Tests are available from Dev Tools only. They start active, renderer-compatible, review-flagged imported rows and exclude CAT18 preview rows by default.

After normal task feedback and confidence/continue, Review Tests asks:

`Did the test need editing?`

Actions:

- `No`
- `Yes, add to edit list`

The edit queue is deduped by `sourceRowAuditKey`. Copy format:

`categoryId<TAB>taskType<TAB>sourceRowAuditKey<TAB>itemId<TAB>issueCodes<TAB>humanReviewReason`

## Preserved

- Static browser app architecture.
- Main deployed file: `index.html`.
- No backend, framework, build step, package manager, dependency, external API call, analytics, account system, or runtime AI.
- Protected storage keys:
  - `ozmosis_b1_sprint_progress_v1`
  - `ozmosis_b1_progress_evidence_v1`
- Existing additive key:
  - `ozmosis_b1_path_unlock_overrides_v1`
- New additive key:
  - `ozmosis_b1_review_edit_queue_v1`
- Export/import compatibility with older progress payloads.
- Today B1 Sprint composition.
- Diagnostic Sprint composition.
- B1 Path star logic and v0.80.14.8 medal/rank visuals.
- Production self-marking semantics.
- Scoring and correctness rules.
- Choice shuffling safety.
- German learning content LTR, including Arabic UI contexts.

## QA

QA report: `docs/qa/v0.80.14.9_full_b1_v02_content_import.md`

Local gates:

- `_development-files/v080149_full_b1_v02_content_import_gate.cjs`
- `_development-files/v080149_full_b1_v02_content_import_browser_smoke.cjs`

Current changelog: `CHANGELOG-v0_80_14_9.txt`

Current source brief: `docs/OZMOSIS_SOURCE_BRIEF_v0.80.14.9.md`

Current roadmap: `docs/OZMOSIS_DEVELOPMENT_ROADMAP_v0.80.14.9.md`
