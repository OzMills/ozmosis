# Ozmosis Source Brief v0.85.2

Patch: `v0.85.2 - Practice Screen Template Alignment Pass`

## Runtime Baseline

The runtime baseline is now:

- App version: `v0.85.2 - Practice Screen Template Alignment Pass`
- Export version: `v0.85.2-practice-screen-template-alignment`

## Source Of Truth

- Runtime: `index.html`, `content/*.js`, `data/*`
- Display manifest: `content/b1-display-schema.js`
- ScreenConcept references:
  - `_development-files/ScreenConcepts/`
  - `_development-files/ScreenConcepts.zip`
- Canonical docs:
  - `README.md`
  - `CHANGELOG-FULL-OZMOSIS.txt`
- Strategic current docs:
  - `docs/OZMOSIS_SOURCE_BRIEF_CURRENT.md`
  - `docs/OZMOSIS_DEVELOPMENT_ROADMAP_CURRENT.md`
  - `docs/OZMOSIS_FEATURE_REGISTER_CURRENT.md`
- Patch QA:
  - `docs/qa/v0.85.2_practice_screen_template_alignment.md`
  - `docs/qa/screenshots/v0.85.2-practice-screen-template-alignment/comparison.html`

## Patch Scope

v0.85.2 is a narrow visual and interaction alignment pass for the live B1 practice shell.

The patch is deliberately limited:

- Added runtime surface/state attributes for B1 practice QA and CSS targeting.
- Aligned live choice, hint, cloze, and correction screens to supplied ScreenConcept references.
- Removed learner-facing `Cue:` and `Hint:` prefixes from B1 support/hint text.
- Preserved the v0.85.1 prompt/cue display schema and content provenance.
- Added a local Edge/CDP capture harness for the required 11 actual screenshots.
- Added a static parser/metadata gate for script parsing, versions, storage keys, and dependency constraints.

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

`practice_screen_template_alignment` is complete for this focused pass.

Next planned patch: `v0.86 - Production Completion Pass`.

Do not implement v0.87 or later before v0.86 is accepted.
