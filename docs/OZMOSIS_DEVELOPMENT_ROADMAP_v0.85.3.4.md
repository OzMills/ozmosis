# Ozmosis Development Roadmap v0.85.3.4

Patch: `v0.85.3.4 - Shared Practice Frame and Surface Inventory`

This roadmap snapshot records a QA/planning patch. Runtime remains v0.85.3.3b because no app behaviour changed.

## Current Baseline

- Current working/audit patch: `v0.85.3.4 - Shared Practice Frame and Surface Inventory`
- Current runtime baseline: `v0.85.3.3b - Duplicate Teach Me Button Hotfix`
- Current gate result: `SHARED_FRAME_INVENTORY_ACCEPTED`

## Current Finding

B1 practice surfaces are mostly unified through the B1 renderer and shared visible DOM slots. Case Trainer/article-grid typed-answer and result surfaces still diverge through legacy render ownership.

## Corrected Near-Term Sequence

- `v0.85.3.3b` - Duplicate Teach Me Button Hotfix
- `v0.85.3.4` - Shared Practice Frame and Surface Inventory
- `v0.85.3.5` - Shared Practice Frame Convergence Pass
- `v0.85.3.6` - Feedback Rhythm Pass
- `v0.85.4` - Completion Gate Harness

## Next Allowed Patch

`v0.85.3.5 - Shared Practice Frame Convergence Pass`

Scope:

- implement the shared frame adapter boundary;
- keep Case Trainer article grid protected;
- preserve full, compact highlighted, and optional reveal article-grid forms;
- keep route-specific item pools and labels only;
- do not change scoring, evidence, content, storage, export/import, or production semantics.

## Blocked Work

- Feedback Rhythm Pass is blocked until shared-frame convergence is handled or explicitly deferred.
- Completion Gate Harness is blocked until shared-frame convergence and feedback rhythm are handled or explicitly deferred.
- Production Completion Pass remains blocked until the later v0.85.x readiness gate reports `READY_FOR_V0.86`.

## Reference Artefacts

- Contract: `docs/OZMOSIS_SHARED_PRACTICE_FRAME_CONTRACT_v0.85.3.4.md`
- QA report: `docs/qa/v0.85.3.4_shared_practice_frame_inventory.md`
- Result JSON: `docs/qa/v0.85.3.4_shared_practice_frame_inventory_results.json`
- Screenshot evidence: `docs/qa/screenshots/v0.85.3.4-shared-practice-frame-inventory/`
