# Ozmosis Source Brief v0.85.3.3

Patch: `v0.85.3.3 - Cloze Experience and Representative Fixture Pass`

## Runtime Baseline

- App version: `v0.85.3.3 - Cloze Experience and Representative Fixture Pass`
- Export version: `v0.85.3.3-cloze-experience-fixtures`

## Source Of Truth

- Runtime: `index.html`, `content/*.js`, `data/*`
- Display manifest: `content/b1-display-schema.js`
- ScreenConcept references: `_development-files/ScreenConcepts/*.svg`, `_development-files/ScreenConcepts/*.png`, `_development-files/ScreenConcepts.zip`
- Canonical docs: `README.md`, `CHANGELOG-FULL-OZMOSIS.txt`
- Current strategic docs: `docs/OZMOSIS_SOURCE_BRIEF_CURRENT.md`, `docs/OZMOSIS_DEVELOPMENT_ROADMAP_CURRENT.md`, `docs/OZMOSIS_FEATURE_REGISTER_CURRENT.md`
- Patch QA: `docs/qa/v0.85.3.3_cloze_experience_fixture_pass.md`, `docs/qa/v0.85.3.3_cloze_experience_results.json`

## Patch Scope

v0.85.3.3 proves the cloze experience with natural QA-only B1 sentence fixtures:

- `Welche ___ soll ich mitbringen?`
- `Ich lerne Deutsch auf ___.` with visible cue
- `Ich möchte den Termin auf ___ verschieben.`

The runtime change is narrow:

- cloze width is answer-aware instead of globally forced to `258px`;
- QA-only width overrides remain possible for proof fixtures;
- the hidden typed-cloze instruction no longer leaves a visual break before the sentence.

## Acceptance Result

Gate decision: `CLOZE_EXPERIENCE_ACCEPTED`.

Evidence:

- static gate passed;
- cloze geometry gate passed `50` checks;
- capture gate generated `11` screenshots;
- comparison HTML, contact sheet, geometry JSON, and ScreenConcept measurement JSON were created;
- responsive, Arabic/LTR, keyboard/focus, and export/import smoke passed.

## Guardrails Preserved

- Static browser app.
- Repo-root `index.html`.
- No backend, framework, build step, package manager, dependencies, runtime AI, API calls, analytics, or accounts.
- No normal content-bank changes.
- No scoring, evidence, confidence, star earning, storage key, save/import, route, Today Sprint, or Diagnostic Sprint changes.
- German learner text remains LTR under Arabic UI.

## Handoff

Next planned patch: `v0.85.3.4 - Feedback Rhythm Pass`.

Do not implement v0.85.4, v0.86, Production Completion Pass, content cleanup, schema cleanup, Satzi, B2/CAT18 activation, or broad completion work before v0.85.3.4 is handled or explicitly deferred.
