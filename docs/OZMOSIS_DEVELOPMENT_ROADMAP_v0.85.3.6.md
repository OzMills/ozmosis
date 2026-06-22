# Ozmosis Development Roadmap v0.85.3.6

Patch: `v0.85.3.6 - Feedback Rhythm Pass`

This roadmap snapshot records the accepted feedback rhythm pass after the v0.85.3.5 shared practice-frame convergence layer.

## Current Baseline

- Current working patch: `v0.85.3.6 - Feedback Rhythm Pass`
- Current runtime baseline: `v0.85.3.6 - Feedback Rhythm Pass`
- Current export version: `v0.85.3.6-feedback-rhythm`
- Current gate result: `FEEDBACK_RHYTHM_ACCEPTED`

## Current Result

Post-answer practice states now follow a clearer rhythm: compact result feedback, corrected answer or concise rule/support, full post-answer star/result area, then confidence or continue controls. The Case Trainer article grid remains protected in full, compact highlighted, and optional reveal forms.

## Corrected Near-Term Sequence

- `v0.85.3.3b` - Duplicate Teach Me Button Hotfix
- `v0.85.3.4` - Shared Practice Frame and Surface Inventory
- `v0.85.3.5` - Shared Practice Frame Convergence Pass
- `v0.85.3.6` - Feedback Rhythm Pass
- `v0.85.3.7` - Correction and Satzbau Surface Pass
- `v0.85.4` - Completion Gate Harness

## Next Allowed Patch

`v0.85.3.7 - Correction and Satzbau Surface Pass`

Scope:

- inspect correction and Satzbau-specific surfaces;
- preserve the v0.85.3.6 feedback rhythm;
- keep the protected article-grid adapter intact;
- do not change scoring, evidence, content, storage, export/import, or production semantics.

## Blocked Work

- Completion Gate Harness is blocked until correction/Satzbau surface pass is handled or explicitly deferred.
- Production Completion Pass remains blocked until the later v0.85.x readiness gate reports `READY_FOR_V0.86`.
- Satzi, B2, broad content generation, schema cleanup, and large source refactors remain out of scope.

## Reference Artefacts

- Contract: `docs/OZMOSIS_SHARED_PRACTICE_FRAME_CONTRACT_v0.85.3.4.md`
- Previous convergence QA report: `docs/qa/v0.85.3.5_shared_practice_frame_convergence.md`
- QA report: `docs/qa/v0.85.3.6_feedback_rhythm.md`
- Result JSON: `docs/qa/v0.85.3.6_feedback_rhythm_results.json`
- Screenshot evidence: `docs/qa/screenshots/v0.85.3.6-feedback-rhythm/`
- Feedback rhythm script: `scripts/ozmosis-feedback-rhythm-check.cjs`
