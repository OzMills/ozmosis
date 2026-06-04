# Ozmosis Source Brief v0.80.14.3

## Current Version

- App version: `v0.80.14.3`
- Export version: `v0.80.14.3-b1-question-quality-safe-fix-patch`
- Current README: `README-v0_80_14_3.md`
- Current changelog: `CHANGELOG-v0_80_14_3.txt`
- Current QA report: `docs/qa/v0.80.14.3_b1_question_quality_safe_fix_patch.md`

## Scope

v0.80.14.3 applies the 09B safe-for-Codex B1 question-quality fixes.

This patch does not add B1-12, v0.81 Cases and Articles, Genitive expansion, Satzi, B2, runtime grammar generation, runtime AI, backend/API/accounts/analytics, dependencies, a package manager, a build step, or a broad redesign.

## Files of Interest

- `index.html`
- `content/b1-connectors.js`
- `content/b1-redemittel.js`
- `content/b1-wortschatz.js`
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
- `_development-files/audits/v0.80.14.3/ozmosis_v080143_09b_safe_for_codex_revised_items.csv`
- `_development-files/v080143_b1_question_quality_gate.cjs`
- `README-v0_80_14_3.md`
- `CHANGELOG-v0_80_14_3.txt`
- `docs/OZMOSIS_SOURCE_BRIEF_v0.80.14.3.md`
- `docs/OZMOSIS_DEVELOPMENT_ROADMAP_v0.80.14.3.md`
- `docs/qa/v0.80.14.3_b1_question_quality_safe_fix_patch.md`

## Content State

- Safe CSV rows expected: 177.
- Safe CSV rows applied: 177.
- Safe CSV rows skipped: 0.
- Safe CSV rows rejected by final guardrail: 0.
- Human/native review rows left untouched: `draft_b1_03_022`, `draft_b1_04_018`, `draft_b1_08_016`.
- Wortschatz raw `evidenceType` metadata remains unsupported by the current Wortschatz adapter; the content fixes were applied and the unsupported metadata warning is documented in QA.

## Storage and Export

Protected localStorage keys are unchanged:

- `ozmosis_b1_sprint_progress_v1`
- `ozmosis_b1_progress_evidence_v1`

Export/import structure remains compatible. Export metadata now reports `v0.80.14.3-b1-question-quality-safe-fix-patch`.

## Architecture

The app remains a static browser app with repo-root `index.html`, no backend, no framework, no build step, no package manager, no dependency, no external API call, and no runtime AI.

## Next Planned Patch

`v0.81 - Cases and Articles Completion Pass`
