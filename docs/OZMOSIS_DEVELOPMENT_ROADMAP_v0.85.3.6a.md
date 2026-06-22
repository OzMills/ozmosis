# Ozmosis Development Roadmap v0.85.3.6a

Patch: `v0.85.3.6a - Feedback Rhythm Repair and Proof Artefact Fix`

This roadmap snapshot records the accepted repair gate after v0.85.3.6.

## Current Baseline

- Current working patch: `v0.85.3.6a - Feedback Rhythm Repair and Proof Artefact Fix`
- Current runtime baseline: `v0.85.3.6a - Feedback Rhythm Repair and Proof Artefact Fix`
- Current export version: `v0.85.3.6a-feedback-rhythm-repair`
- Current gate result: `FEEDBACK_RHYTHM_REPAIR_ACCEPTED`

## Current Result

The feedback rhythm proof artefacts and remaining visual issues have been repaired. The accepted proof now shows real screenshot thumbnails, aligned cloze feedback, a visibly distinct post-answer result/star section, answered-state confidence reachability, and preserved article-grid adapter forms.

## Corrected Near-Term Sequence

- `v0.85.3.3b` - Duplicate Teach Me Button Hotfix
- `v0.85.3.4` - Shared Practice Frame and Surface Inventory
- `v0.85.3.5` - Shared Practice Frame Convergence Pass
- `v0.85.3.6` - Feedback Rhythm Pass
- `v0.85.3.6a` - Feedback Rhythm Repair and Proof Artefact Fix
- `v0.85.3.7` - Correction and Satzbau Surface Pass
- `v0.85.4` - Completion Gate Harness

## Next Allowed Patch

`v0.85.3.7 - Correction and Satzbau Surface Pass`

Scope:

- inspect correction and Satzbau-specific surfaces;
- preserve the v0.85.3.6a feedback rhythm;
- keep the protected article-grid adapter intact;
- do not change scoring, evidence, content, storage, export/import, or production semantics.

## Blocked Work

- Completion Gate Harness is blocked until correction/Satzbau surface pass is handled or explicitly deferred.
- Production Completion Pass remains blocked until the later v0.85.x readiness gate reports `READY_FOR_V0.86`.
- Satzi, B2, broad content generation, schema cleanup, metadata migration, and large source refactors remain out of scope.

## Reference Artefacts

- Previous feedback rhythm QA report: `docs/qa/v0.85.3.6_feedback_rhythm.md`
- Repair QA report: `docs/qa/v0.85.3.6a_feedback_rhythm_repair.md`
- Result JSON: `docs/qa/v0.85.3.6a_feedback_rhythm_repair_results.json`
- Screenshot evidence: `docs/qa/screenshots/v0.85.3.6a-feedback-rhythm-repair/`
- Repair script: `scripts/ozmosis-feedback-rhythm-repair-check.cjs`
