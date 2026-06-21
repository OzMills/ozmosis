# Ozmosis Source Brief v0.85.3.2

Patch: `v0.85.3.2 - Strict Layout Geometry Fix Pass`

## Runtime Baseline

The runtime baseline is now:

- App version: `v0.85.3.2 - Strict Layout Geometry Fix Pass`
- Export version: `v0.85.3.2-strict-layout-geometry`

## Source Of Truth

- Runtime: `index.html`, `content/*.js`, `data/*`
- Display manifest: `content/b1-display-schema.js`
- ScreenConcept references:
  - `_development-files/ScreenConcepts/*.svg`
  - `_development-files/ScreenConcepts/*.png`
  - `_development-files/ScreenConcepts.zip`
- Canonical docs:
  - `README.md`
  - `CHANGELOG-FULL-OZMOSIS.txt`
- Strategic current docs:
  - `docs/OZMOSIS_SOURCE_BRIEF_CURRENT.md`
  - `docs/OZMOSIS_DEVELOPMENT_ROADMAP_CURRENT.md`
  - `docs/OZMOSIS_FEATURE_REGISTER_CURRENT.md`
- Patch QA:
  - `docs/qa/v0.85.3.2_strict_layout_geometry_fix.md`
  - `docs/qa/v0.85.3.2_strict_layout_geometry_results.json`
  - `docs/qa/screenshots/v0.85.3.2-strict-layout-geometry/comparison.html`
  - `docs/qa/screenshots/v0.85.3.2-strict-layout-geometry/geometry-results.json`

## Patch Scope

v0.85.3.2 is a narrow strict-geometry correction pass for the active B1 practice shell.

The patch is deliberately limited:

- Fixed the strict ScreenConcept geometry failures from v0.85.3.1.
- Brought choice, correction, feedback, and confidence surfaces to the strict `378px` content lane at `430x932`.
- Repositioned `Teach me` to the strict reference position.
- Moved the typed cloze prompt/input to the strict reference y-position.
- Set the typed cloze input to the strict reference width where safe.
- Preserved the absence of the pre-answer star/status strip.
- Preserved post-answer result/star feedback.
- Added v0.85.3.2 static, geometry, and capture harnesses.

## Acceptance Result

Gate decision:

`STRICT_GEOMETRY_ACCEPTED`

Accepted evidence:

- `_development-files/v08532_static_gate.cjs` passed.
- `_development-files/v08532_practice_ui_geometry_gate.cjs` passed `38` strict geometry checks with `0` failures.
- `_development-files/v08532_practice_ui_capture.cjs` generated `17` screenshots, comparison HTML, contact sheet, responsive smoke, Arabic/LTR smoke, keyboard/focus smoke, and export/import smoke.
- The old giant active-practice title remained absent in the measured strict pre-answer state.
- The pre-answer star/status strip remained absent in measured question states.

## Guardrails Preserved

- Static browser app.
- Repo-root `index.html`.
- No backend, framework, build step, package manager, database, accounts, analytics, API calls, runtime AI, runtime German generation, or new dependencies.
- Protected localStorage keys preserved.
- Export/import compatibility preserved.
- Scoring, evidence semantics, confidence values, and star earning preserved.
- Today's B1 Sprint composition preserved.
- Diagnostic Sprint composition preserved.
- Content banks unchanged.
- German learner text remains LTR under Arabic UI.

## Handoff

`practice_ui_reality_completion` is now accepted as a strict geometry baseline through v0.85.3.2.

Next planned patch: `v0.85.3.3 - Cloze Integration Pass`.

Do not implement v0.85.4, v0.85.5, v0.86, Production Completion Pass, source cleanup, schema ratchet work, Satzi, B2/CAT18 activation, or broader completion work before the cloze integration pass is handled or explicitly deferred.
