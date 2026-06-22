# Ozmosis Source Brief v0.85.3.4

Patch: `v0.85.3.4 - Shared Practice Frame and Surface Inventory`

This is a QA/planning source brief. It does not change runtime behaviour.

## Runtime Baseline

- Runtime app version remains: `v0.85.3.3b - Duplicate Teach Me Button Hotfix`
- Runtime export version remains: `v0.85.3.3b-duplicate-teach-me-hotfix`
- Main deployed app remains: `index.html`

## Patch Result

The shared practice-frame inventory is accepted.

Core finding:

`B1 practice is mostly unified through renderB1Question() and shared DOM slots, but Case Trainer/article-grid typed-answer and result surfaces still use separate legacy render ownership.`

## Source of Truth Used

- `index.html`
- `content/b1-display-schema.js`
- `content/*.js`
- `data/article-items.tsv`
- `docs/qa/v0.85.3.3b_duplicate_teach_me_hotfix.md`
- `docs/qa/v0.85.3.3b_duplicate_teach_me_hotfix_results.json`
- current screenshot artefacts under `docs/qa/screenshots/`
- `AGENTS.md`
- `README.md`
- `CHANGELOG-FULL-OZMOSIS.txt`
- `docs/OZMOSIS_SOURCE_BRIEF_CURRENT.md`
- `docs/OZMOSIS_DEVELOPMENT_ROADMAP_CURRENT.md`
- `docs/OZMOSIS_FEATURE_REGISTER_CURRENT.md`

## Deliverables

- Shared frame contract: `docs/OZMOSIS_SHARED_PRACTICE_FRAME_CONTRACT_v0.85.3.4.md`
- QA report: `docs/qa/v0.85.3.4_shared_practice_frame_inventory.md`
- Result JSON: `docs/qa/v0.85.3.4_shared_practice_frame_inventory_results.json`
- Screenshot evidence: `docs/qa/screenshots/v0.85.3.4-shared-practice-frame-inventory/`
- Inventory script: `scripts/ozmosis-practice-frame-inventory.cjs`

## Protected Semantics

This patch did not change:

- scoring;
- evidence semantics;
- answer keys;
- content banks;
- localStorage keys;
- export/import format;
- article-grid data;
- case/article correctness;
- practice item selection;
- feedback rhythm;
- production-card semantics.

## Next Patch

`v0.85.3.5 - Shared Practice Frame Convergence Pass`

Feedback Rhythm Pass is blocked until shared-frame convergence is handled or explicitly deferred.
