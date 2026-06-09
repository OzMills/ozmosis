# Ozmosis Source Brief v0.80.14.10

## Current Version

- App version: `v0.80.14.10`
- Export version: `v0.80.14.10-route-filtering-landing-cleanup`
- Current README: `README-v0_80_14_10.md`
- Current changelog: `CHANGELOG-v0_80_14_10.txt`
- Current QA report: `docs/qa/v0.80.14.10_route_filtering_landing_cleanup.md`

## Scope

v0.80.14.10 is a narrow safety and information-architecture patch after the v0.80.14.9 full B1 v0_2 content import.

The patch does not delete imported material. It keeps the v0.80.14.9 source rows and metadata available, but filters normal learner routes so only route-ready imported rows appear in learner practice for now.

Normal imported learner routes are temporarily limited to:

- `PRACTICE_FAMILIES`
- `CONTRAST_SETS`

Excluded from normal learner routes:

- `move_to_human_review` rows
- `needsHumanReview` / `reviewFlag` rows
- `WORTSCHATZ_BANK` generated multiple-choice rows
- `COLLOCATION_BANK` generated multiple-choice rows
- generic `REDEMITTEL_BANK` phrase-choice rows
- CAT18 preview-only rows
- rows with generated prompt/choice artefacts

Excluded rows remain available in Dev Tools Review Tests, source/debug views, Review Edit List workflows, and export/import metadata.

## Files of Interest

- `index.html`
- `content/b1-m01-variant-families.js`
- `content/b1-m03-job-search-offices.js`
- `content/b1-m08-orders-delivery.js`
- `_development-files/v0801410_route_filtering_landing_cleanup_gate.cjs`
- `_development-files/v0801410_route_filtering_landing_cleanup_browser_smoke.cjs`
- `_development-files/v080149_full_b1_v02_content_import_gate.cjs`
- `_development-files/v080149_content_import_summary.json`

## Route Filtering

Shared helpers now define route eligibility for:

- normal learner practice
- Today’s B1 Sprint
- Review Practice
- B1 Path stars/progress
- learner-facing Learning Map / Skill Matrix / recommendations
- normal evidence/progress records
- Dev Tools Review Tests

New evidence records include additive route-eligibility metadata. Existing protected storage keys are unchanged and old records are interpreted conservatively at read time.

## Source-Ready Row Correction

Six imported choice rows were inspected against the v0.80.14.9 source/audit ledgers. Five rows had letter-only or bare-answer visible correct choices and were corrected in place while preserving item IDs and `sourceRowAuditKey`; the sixth inspected contrast row was already rendered correctly.

Corrected content files:

- `content/b1-m01-variant-families.js`
- `content/b1-m03-job-search-offices.js`
- `content/b1-m08-orders-delivery.js`

No broad content-bank rewrite was performed.

## Landing Page

Home now uses grouped route collections:

- Learn
- Review
- Progress
- Production
- Tools
- Settings

Developer/QA links remain available but are collapsed under Settings as `Developer / QA`. Full B1 Progress detail remains in Learning Map; Home keeps only a compact preview.

## Storage and Export

Protected localStorage keys are unchanged:

- `ozmosis_b1_sprint_progress_v1`
- `ozmosis_b1_progress_evidence_v1`

Additive compatible keys remain:

- `ozmosis_b1_path_unlock_overrides_v1`
- `ozmosis_b1_review_edit_queue_v1`

Export metadata reports `v0.80.14.10-route-filtering-landing-cleanup`. Older imports remain accepted; no destructive migration is used.

## Deferred

- Manual repair of excluded bank-generated rows.
- Activating CAT18/B2 content.
- v0.81 Cases and Articles Completion Pass.
- Satzi.
- Genitive expansion.
- Runtime German morphology.
- Runtime AI.
- Backend/API/accounts/analytics.
