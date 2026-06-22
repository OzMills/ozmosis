# Ozmosis Source Brief v0.85.3.7

Patch: `v0.85.3.7 - Correction and Satzbau Surface Pass`

This is a narrow visual and interaction patch after v0.85.3.6a. It does not start broad content cleanup, prompt/cue source cleanup, metadata migration, v0.85.4, v0.86, or the HUD/live mobile gate.

## Runtime Baseline

- Starting runtime app version verified: `v0.85.3.6a - Feedback Rhythm Repair and Proof Artefact Fix`
- Starting runtime export version verified: `v0.85.3.6a-feedback-rhythm-repair`
- Final runtime app version: `v0.85.3.7 - Correction and Satzbau Surface Pass`
- Final runtime export version: `v0.85.3.7-correction-satzbau-surface`
- Main deployed app remains: `index.html`

## Patch Result

The correction and Satzbau surface gate is accepted.

Core result:

`Correction/edit-text tasks now use a compact textarea, Satzbau/word-order tasks use distinct chunk chips, and the shared feedback rhythm, article-grid feedback, scoring, evidence, storage, export/import, and content banks remain preserved.`

## Source of Truth Used

- `index.html`
- `docs/qa/v0.85.3.6a_feedback_rhythm_repair.md`
- `docs/qa/v0.85.3.6a_feedback_rhythm_repair_results.json`
- `docs/qa/screenshots/v0.85.3.6a-feedback-rhythm-repair/`
- `docs/qa/v0.85.3.5_shared_practice_frame_convergence.md`
- `docs/OZMOSIS_SHARED_PRACTICE_FRAME_CONTRACT_v0.85.3.4.md`
- `content/b1-display-schema.js`
- `content/*.js`
- `data/article-items.tsv`
- `AGENTS.md`
- `README.md`
- `CHANGELOG-FULL-OZMOSIS.txt`
- `docs/OZMOSIS_SOURCE_BRIEF_CURRENT.md`
- `docs/OZMOSIS_DEVELOPMENT_ROADMAP_CURRENT.md`
- `docs/OZMOSIS_FEATURE_REGISTER_CURRENT.md`

## Runtime Changes

- Added correction-only textarea ownership for full-sentence correction, edit-text repair, and transformation surfaces.
- Kept cloze, choice, production, and Case Trainer answer controls on their existing input paths.
- Added a `satzbau` visual surface for `word_order_cloze` items.
- Rendered existing Satzbau learner cues as compact word-chunk chips.
- Preserved the existing typed answer checking, evidence, and scoring paths.

## QA Harness Changes

- Added `scripts/ozmosis-correction-satzbau-surface-check.cjs`.
- Generated screenshots under `docs/qa/screenshots/v0.85.3.7-correction-satzbau-surface/`.
- Added checks for correction textarea states, Satzbau chunk/input states, fail/success feedback rhythm, non-regression surfaces, responsive body overflow, Arabic/LTR, export/import, and contact-sheet image loading.

## Protected Semantics

This patch did not change:

- scoring;
- evidence semantics;
- star earning logic;
- answer keys;
- German-learning content banks;
- localStorage key names;
- export/import format;
- article-grid data;
- Case Trainer correctness;
- B1 item selection;
- production-card semantics.

## Deliverables

- QA report: `docs/qa/v0.85.3.7_correction_satzbau_surface.md`
- Result JSON: `docs/qa/v0.85.3.7_correction_satzbau_surface_results.json`
- Screenshot evidence: `docs/qa/screenshots/v0.85.3.7-correction-satzbau-surface/`
- QA script: `scripts/ozmosis-correction-satzbau-surface-check.cjs`

## Next Patch

`v0.85.3.8 - HUD, Keyboard, and Live Mobile Verification Gate`
