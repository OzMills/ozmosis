# Ozmosis Source Brief v0.85.3.6a

Patch: `v0.85.3.6a - Feedback Rhythm Repair and Proof Artefact Fix`

This is a narrow repair patch after v0.85.3.6. It does not start the Correction and Satzbau Surface Pass, source cleanup, metadata migration, v0.85.4, or v0.86.

## Runtime Baseline

- Starting runtime app version verified: `v0.85.3.6 - Feedback Rhythm Pass`
- Starting runtime export version verified: `v0.85.3.6-feedback-rhythm`
- Final runtime app version: `v0.85.3.6a - Feedback Rhythm Repair and Proof Artefact Fix`
- Final runtime export version: `v0.85.3.6a-feedback-rhythm-repair`
- Main deployed app remains: `index.html`

## Patch Result

The feedback rhythm repair gate is accepted.

Core result:

`The v0.85.3.6 proof issues were repaired: nested feedback mini-cards were reduced, the post-answer result/star area is visibly distinct, the cloze proof feedback matches the staged item, the contact sheet shows real thumbnails, and confidence reachability is measured on an answered B1 state.`

## Source of Truth Used

- `index.html`
- `docs/qa/screenshots/v0.85.3.6-feedback-rhythm/`
- `docs/qa/v0.85.3.6_feedback_rhythm_results.json`
- `docs/qa/v0.85.3.6_feedback_rhythm.md`
- `scripts/ozmosis-feedback-rhythm-check.cjs`
- `docs/qa/v0.85.3.5_shared_practice_frame_convergence.md`
- `docs/OZMOSIS_SHARED_PRACTICE_FRAME_CONTRACT_v0.85.3.4.md`
- `content/*.js`
- `data/article-items.tsv`
- `AGENTS.md`
- `README.md`
- `CHANGELOG-FULL-OZMOSIS.txt`

## Runtime Changes

- Strengthened feedback-rhythm CSS so older compact feedback rules do not turn micro-rules and answer notes into nested bordered mini-cards.
- Made `.b1PostAnswerResultArea` a larger, visibly distinct post-answer result section with a heading and left accent.
- Removed raw submitted answer text from contrast-group detection so wrong answers such as `falsch` cannot accidentally trigger unrelated `als` contrast feedback.
- Preserved B1 feedback rhythm, Case Trainer article-grid support, and production-card behaviour.

## QA Harness Changes

- Added `scripts/ozmosis-feedback-rhythm-repair-check.cjs`.
- Generated screenshots under `docs/qa/screenshots/v0.85.3.6a-feedback-rhythm-repair/`.
- Added checks for:
  - nested feedback clutter;
  - post-answer result area scale;
  - cloze feedback alignment;
  - contact sheet image loading;
  - confidence reachability on an answered B1 state.

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

- QA report: `docs/qa/v0.85.3.6a_feedback_rhythm_repair.md`
- Result JSON: `docs/qa/v0.85.3.6a_feedback_rhythm_repair_results.json`
- Screenshot evidence: `docs/qa/screenshots/v0.85.3.6a-feedback-rhythm-repair/`
- Repair script: `scripts/ozmosis-feedback-rhythm-repair-check.cjs`

## Next Patch

`v0.85.3.7 - Correction and Satzbau Surface Pass`
