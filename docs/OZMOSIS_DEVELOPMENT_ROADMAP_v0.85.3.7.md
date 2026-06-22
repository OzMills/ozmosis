# Ozmosis Development Roadmap v0.85.3.7

Patch: `v0.85.3.7 - Correction and Satzbau Surface Pass`

This roadmap snapshot records the accepted correction and Satzbau surface gate after v0.85.3.6a.

## Current Baseline

- Current working patch: `v0.85.3.7 - Correction and Satzbau Surface Pass`
- Current runtime baseline: `v0.85.3.7 - Correction and Satzbau Surface Pass`
- Current export version: `v0.85.3.7-correction-satzbau-surface`
- Current gate result: `CORRECTION_SATZBAU_SURFACE_ACCEPTED`

## Current Result

The correction/repair and Satzbau/word-order surfaces have been tightened without changing the learning model. Correction surfaces now use a styled textarea where a full sentence must be edited, and Satzbau surfaces now show existing word chunks as distinct chips before the inline answer control. The accepted proof confirms the v0.85.3.6a feedback rhythm and article-grid integration remain intact.

## Corrected Near-Term Sequence

- `v0.85.3.3b` - Duplicate Teach Me Button Hotfix
- `v0.85.3.4` - Shared Practice Frame and Surface Inventory
- `v0.85.3.5` - Shared Practice Frame Convergence Pass
- `v0.85.3.6` - Feedback Rhythm Pass
- `v0.85.3.6a` - Feedback Rhythm Repair and Proof Artefact Fix
- `v0.85.3.7` - Correction and Satzbau Surface Pass
- `v0.85.3.8` - HUD, Keyboard, and Live Mobile Verification Gate
- `v0.85.4` - Completion Gate Harness

## Next Allowed Patch

`v0.85.3.8 - HUD, Keyboard, and Live Mobile Verification Gate`

Scope:

- verify HUD and keyboard behaviour on live mobile-like surfaces;
- preserve the v0.85.3.7 correction and Satzbau surfaces;
- preserve the v0.85.3.6a feedback rhythm;
- preserve the v0.85.3.5 article-grid adapter;
- do not change scoring, evidence, content, storage, export/import, or production semantics.

## Blocked Work

- Completion Gate Harness is blocked until the HUD, keyboard, and live mobile verification gate is handled or explicitly deferred.
- Production Completion Pass remains blocked until the later v0.85.x readiness gate reports `READY_FOR_V0.86`.
- Satzi, B2, broad content generation, schema cleanup, metadata migration, and large source refactors remain out of scope.

## Reference Artefacts

- Source brief: `docs/OZMOSIS_SOURCE_BRIEF_v0.85.3.7.md`
- QA report: `docs/qa/v0.85.3.7_correction_satzbau_surface.md`
- Result JSON: `docs/qa/v0.85.3.7_correction_satzbau_surface_results.json`
- Screenshot evidence: `docs/qa/screenshots/v0.85.3.7-correction-satzbau-surface/`
- QA script: `scripts/ozmosis-correction-satzbau-surface-check.cjs`
