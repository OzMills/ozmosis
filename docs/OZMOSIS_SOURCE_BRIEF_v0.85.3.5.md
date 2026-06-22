# Ozmosis Source Brief v0.85.3.5

Patch: `v0.85.3.5 - Shared Practice Frame Convergence Pass`

This is a narrow implementation patch after the accepted v0.85.3.4 shared practice-frame inventory. It does not start the feedback rhythm pass.

## Runtime Baseline

- Starting runtime app version verified: `v0.85.3.3b - Duplicate Teach Me Button Hotfix`
- Starting runtime export version verified: `v0.85.3.3b-duplicate-teach-me-hotfix`
- Final runtime app version: `v0.85.3.5 - Shared Practice Frame Convergence Pass`
- Final runtime export version: `v0.85.3.5-shared-practice-frame-convergence`
- Main deployed app remains: `index.html`

## Patch Result

The shared practice-frame convergence pass is accepted.

Core result:

`B1 and Case Trainer typed-answer surfaces now expose shared frame metadata, and the protected article grid has full, compact highlighted, and optional reveal adapter modes.`

## Source of Truth Used

- `index.html`
- `docs/OZMOSIS_SHARED_PRACTICE_FRAME_CONTRACT_v0.85.3.4.md`
- `docs/qa/v0.85.3.4_shared_practice_frame_inventory.md`
- `docs/qa/v0.85.3.4_shared_practice_frame_inventory_results.json`
- `scripts/ozmosis-practice-frame-inventory.cjs`
- `content/*.js`
- `data/article-items.tsv`
- `AGENTS.md`
- `README.md`
- `CHANGELOG-FULL-OZMOSIS.txt`
- current strategic source brief, roadmap, and feature register

## Runtime Changes

- Added shared practice-frame metadata attributes for active practice surfaces:
  - `data-practice-frame`
  - `data-answer-surface`
  - `data-route-source`
  - `data-launch-source`
  - `data-feedback-surface`
  - `data-article-grid-mode`
- Added a protected article-grid adapter around the existing Case Trainer table data.
- Preserved full grid, compact highlighted grid, and optional reveal grid modes.
- Added compact article-grid feedback for B1 cases/articles wrong repair feedback when metadata explicitly identifies article family, case, and gender/number.

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
- production-card semantics;
- feedback rhythm beyond adding the protected article-grid feedback slot.

## Deliverables

- QA report: `docs/qa/v0.85.3.5_shared_practice_frame_convergence.md`
- Result JSON: `docs/qa/v0.85.3.5_shared_practice_frame_convergence_results.json`
- Screenshot evidence: `docs/qa/screenshots/v0.85.3.5-shared-practice-frame-convergence/`
- Convergence script: `scripts/ozmosis-practice-frame-convergence-check.cjs`

## Next Patch

`v0.85.3.6 - Feedback Rhythm Pass`

Feedback Rhythm Pass may now inspect post-answer hierarchy, but must still preserve scoring, evidence, content, storage, export/import, and production semantics.
