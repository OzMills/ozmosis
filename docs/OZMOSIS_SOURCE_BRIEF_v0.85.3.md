# Ozmosis Source Brief v0.85.3

Patch: `v0.85.3 - Practice UI Reality and Completion Pass`

## Runtime Baseline

The runtime baseline is now:

- App version: `v0.85.3 - Practice UI Reality and Completion Pass`
- Export version: `v0.85.3-practice-ui-completion`

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
  - `docs/qa/v0.85.3_practice_ui_reality_completion.md`
  - `docs/qa/screenshots/v0.85.3-practice-ui-completion/screenconcept_measurements.json`
  - `docs/qa/screenshots/v0.85.3-practice-ui-completion/comparison.html`

## Patch Scope

v0.85.3 is a focused recovery pass for the active B1 practice UI.

The patch is deliberately limited:

- Treated v0.85.2 as an attempted alignment, not accepted final UI proof.
- Used ScreenConcept SVGs as the canonical 430x932 measurement source and PNGs as visual confirmation.
- Removed the large centred active-practice Ozmosis title.
- Hid the pre-answer task star/status strip from above the task.
- Retained post-answer star feedback inside the compact feedback block.
- Moved B1 task content higher.
- Tightened choice, cloze, correction, hint, feedback, confidence, and HUD spacing.
- Made B1 reveal hints use the smaller `Teach me` secondary action.
- Added v0.85.3 static, geometry, and capture harnesses.

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

`practice_ui_reality_completion` is complete for this focused pass.

Next planned patch: `v0.85.4 - Completion Gate Harness`.

Do not implement v0.85.5, v0.86, Production Completion Pass, source cleanup, schema ratchet work, Satzi, B2/CAT18 activation, or broader completion work before v0.85.4 is accepted.
