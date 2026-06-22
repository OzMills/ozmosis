# Ozmosis Source Brief v0.85.3.6

Patch: `v0.85.3.6 - Feedback Rhythm Pass`

This is a narrow visual/interaction patch after the accepted v0.85.3.5 shared practice-frame convergence layer. It does not start correction/Satzbau surface work, source cleanup, metadata migration, v0.85.4, or v0.86.

## Runtime Baseline

- Starting runtime app version verified: `v0.85.3.5 - Shared Practice Frame Convergence Pass`
- Starting runtime export version verified: `v0.85.3.5-shared-practice-frame-convergence`
- Final runtime app version: `v0.85.3.6 - Feedback Rhythm Pass`
- Final runtime export version: `v0.85.3.6-feedback-rhythm`
- Main deployed app remains: `index.html`

## Patch Result

The feedback rhythm pass is accepted.

Core result:

`Answered states now present compact result feedback first, then the full post-answer star/result area, then confidence or continue controls.`

## Source of Truth Used

- `index.html`
- `docs/qa/v0.85.3.5_shared_practice_frame_convergence.md`
- `docs/qa/v0.85.3.5_shared_practice_frame_convergence_results.json`
- `docs/OZMOSIS_SHARED_PRACTICE_FRAME_CONTRACT_v0.85.3.4.md`
- `scripts/ozmosis-practice-frame-convergence-check.cjs`
- `content/*.js`
- `data/article-items.tsv`
- `AGENTS.md`
- `README.md`
- `CHANGELOG-FULL-OZMOSIS.txt`
- current strategic source brief, roadmap, and feature register

## Runtime Changes

- Added a `feedbackRhythmBlock` feedback surface style.
- Added a dedicated post-answer result/star wrapper.
- Updated B1 feedback rendering to place result, answer/rule/support, article grid where applicable, and post-answer star/result in a clearer order.
- Updated Case Trainer feedback cards to use the feedback rhythm class and compact result/answer/rule hierarchy.
- Updated production skipped/practised feedback to use the same post-answer rhythm without changing production evidence semantics.
- Added a feedback-rhythm browser QA harness.

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

- QA report: `docs/qa/v0.85.3.6_feedback_rhythm.md`
- Result JSON: `docs/qa/v0.85.3.6_feedback_rhythm_results.json`
- Screenshot evidence: `docs/qa/screenshots/v0.85.3.6-feedback-rhythm/`
- Feedback rhythm script: `scripts/ozmosis-feedback-rhythm-check.cjs`

## Next Patch

`v0.85.3.7 - Correction and Satzbau Surface Pass`

That patch may inspect correction and Satzbau-specific surfaces, but must still preserve scoring, evidence, content, storage, export/import, article-grid, and production semantics.
