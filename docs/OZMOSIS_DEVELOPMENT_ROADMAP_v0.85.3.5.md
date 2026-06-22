# Ozmosis Development Roadmap v0.85.3.5

Patch: `v0.85.3.5 - Shared Practice Frame Convergence Pass`

This roadmap snapshot records the accepted convergence layer after the v0.85.3.4 shared practice-frame inventory.

## Current Baseline

- Current working patch: `v0.85.3.5 - Shared Practice Frame Convergence Pass`
- Current runtime baseline: `v0.85.3.5 - Shared Practice Frame Convergence Pass`
- Current export version: `v0.85.3.5-shared-practice-frame-convergence`
- Current gate result: `SHARED_FRAME_CONVERGENCE_ACCEPTED`

## Current Result

B1 and Case Trainer typed-answer surfaces now expose shared frame metadata. The Case Trainer article grid is preserved as a protected component and has declared full, compact highlighted, and optional reveal adapter modes. B1 cases/articles wrong repair feedback can show a compact highlighted article grid where metadata is explicit.

## Corrected Near-Term Sequence

- `v0.85.3.3b` - Duplicate Teach Me Button Hotfix
- `v0.85.3.4` - Shared Practice Frame and Surface Inventory
- `v0.85.3.5` - Shared Practice Frame Convergence Pass
- `v0.85.3.6` - Feedback Rhythm Pass
- `v0.85.4` - Completion Gate Harness

## Next Allowed Patch

`v0.85.3.6 - Feedback Rhythm Pass`

Scope:

- inspect post-answer feedback hierarchy;
- keep answer -> feedback -> continue rhythm;
- keep Case Trainer article-grid feedback protected;
- do not change scoring, evidence, content, storage, export/import, or production semantics.

## Blocked Work

- Completion Gate Harness is blocked until feedback rhythm is handled or explicitly deferred.
- Production Completion Pass remains blocked until the later v0.85.x readiness gate reports `READY_FOR_V0.86`.
- Satzi, B2, broad content generation, schema cleanup, and large source refactors remain out of scope.

## Reference Artefacts

- Contract: `docs/OZMOSIS_SHARED_PRACTICE_FRAME_CONTRACT_v0.85.3.4.md`
- QA report: `docs/qa/v0.85.3.5_shared_practice_frame_convergence.md`
- Result JSON: `docs/qa/v0.85.3.5_shared_practice_frame_convergence_results.json`
- Screenshot evidence: `docs/qa/screenshots/v0.85.3.5-shared-practice-frame-convergence/`
- Convergence script: `scripts/ozmosis-practice-frame-convergence-check.cjs`
