# Ozmosis Source Brief v0.80.14.9

## Current Version

- App version: `v0.80.14.9`
- Export version: `v0.80.14.9-full-b1-v02-content-import`
- Current README: `README-v0_80_14_9.md`
- Current changelog: `CHANGELOG-v0_80_14_9.txt`
- Current QA report: `docs/qa/v0.80.14.9_full_b1_v02_content_import.md`

## Scope

v0.80.14.9 imports the reconciled CAT01-CAT18 v0_2 B1 content package into the static Ozmosis app.

The revised category CSVs are the active item source. The master audit, readiness, human-review, cut/defer, and import ledgers are used to preserve decision and review metadata.

The patch activates renderer-compatible CAT01-CAT17 imported rows. CAT18 is imported as preview-only B1/B2 bridge content and remains outside active B1 scoring, B1 Path progress, unlocks, Review Tests, and normal review evidence.

This patch does not add runtime German generation, runtime AI, B2 active scoring, a backend, framework, build step, package manager, dependency, external API call, account system, analytics, or a new evidence model.

## Imported Content

- Task CSV rows considered: `6613`
- Imported rows: `6609`
- Active imported B1 rows: `6264`
- Review-flagged imported rows: `2990`
- Active Review Tests candidates: `2645`
- CAT18 preview-only rows: `345`
- Renderer-pending rows: `0`
- Duplicate imported item IDs: `0`
- Duplicate source row audit keys: `0`

Imported decision counts:

- `keep_as_is`: `1443`
- `revise_light`: `2153`
- `rewrite_heavy`: `15`
- `convert_task_shape`: `1`
- `downgrade_evidence`: `352`
- `move_to_human_review`: `2645`

CAT18 contributes additional preview-only review-flagged rows, bringing total review-flagged imported rows to `2990`.

## Files of Interest

- `index.html`
- `content/b1-m01-variant-families.js`
- `content/b1-m02-appointments-callbacks.js`
- `content/b1-m03-job-search-offices.js`
- `content/b1-m04-applications.js`
- `content/b1-m05-first-day-contract-basics.js`
- `content/b1-m06-sick-leave.js`
- `content/b1-m07-meetings-leave-requests.js`
- `content/b1-m08-orders-delivery.js`
- `content/b1-m09-complaints-customer-service.js`
- `content/b1-m10-technical-problems.js`
- `content/b1-m11-colleague-feedback-conflict.js`
- `content/b1-m12-forms-admin-certificates.js`
- `content/b1-m13-learning-exam-language.js`
- `content/b1-m14-connectors-sentence-functions.js`
- `content/b1-m15-time-place-movement.js`
- `content/b1-m16-money-payment-contracts.js`
- `content/b1-m17-home-family-daily-life-support.js`
- `content/b1-m18-b1-b2-bridge-preview.js`
- `_development-files/v080149_import_b1_v02_content.cjs`
- `_development-files/v080149_content_import_summary.json`
- `_development-files/v080149_full_b1_v02_content_import_gate.cjs`
- `_development-files/v080149_full_b1_v02_content_import_browser_smoke.cjs`

## Review Tests

Review Tests are Dev Tools-only. They start active, renderer-compatible, review-flagged imported rows from CAT01-CAT17 and exclude CAT18 by default.

The workflow preserves normal answer -> feedback -> confidence/continue rhythm, then asks whether the test needs editing. Marked rows are stored under the additive key `ozmosis_b1_review_edit_queue_v1`, deduped by `sourceRowAuditKey`.

The copied edit-list format is:

`categoryId<TAB>taskType<TAB>sourceRowAuditKey<TAB>itemId<TAB>issueCodes<TAB>humanReviewReason`

## Storage and Export

Protected localStorage keys are unchanged:

- `ozmosis_b1_sprint_progress_v1`
- `ozmosis_b1_progress_evidence_v1`

Existing additive key:

- `ozmosis_b1_path_unlock_overrides_v1`

New additive key:

- `ozmosis_b1_review_edit_queue_v1`

Export metadata reports `v0.80.14.9-full-b1-v02-content-import`. Older imports remain accepted because the Review Edit List is optional/additive.

## Star Visual State

The v0.80.14.8 medal/rank star visual system is preserved. This patch does not reintroduce green progress stars or the old large `Practice progress` task banner.

## Architecture

Ozmosis remains a static browser app with repo-root `index.html`, no backend, no framework, no build step, no package manager, no dependency, no external API call, and no runtime AI.

## Historical Docs

The v0.80.14.8 README, changelog, source brief, roadmap, and QA report are retained as historical/superseded documentation.

## Next Planned Patch

`v0.81 - Cases and Articles Completion Pass`
