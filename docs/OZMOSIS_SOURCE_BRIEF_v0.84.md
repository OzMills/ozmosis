# Ozmosis Source Brief v0.84

Patch: `v0.84 - Connectors Completion Pass`

## Runtime Baseline

The runtime baseline is now:

- App version: `v0.84 - Connectors Completion Pass`
- Export version: `v0.84-connectors-completion`

## Source Of Truth

- Runtime: `index.html`, `content/*.js`, `data/*`
- Strategic current docs:
  - `docs/OZMOSIS_SOURCE_BRIEF_CURRENT.md`
  - `docs/OZMOSIS_DEVELOPMENT_ROADMAP_CURRENT.md`
  - `docs/OZMOSIS_FEATURE_REGISTER_CURRENT.md`
- Patch QA: `docs/qa/v0.84_connectors_completion.md`

## Patch Scope

v0.84 completes the focused B1 connector coverage pass on the existing Connector Sprint route.

The patch is deliberately narrow:

- 24 original B1-safe connector items added to `content/b1-connectors.js`.
- Existing route bank expanded from 120 to 144 connector items.
- Six connector families covered: reason, contrast, purpose/result, time, sequence/addition/alternative, and condition.
- Route-bank connector metadata normalised for Learning Map, Skill Matrix, review, and debug use.
- No new route, duplicate connector route, generator, B2/CAT18 activation, or broad grammar rewrite.

## Guardrails Preserved

- Static browser app.
- Repo-root `index.html`.
- No backend, framework, build step, package manager, database, accounts, analytics, API calls, runtime AI, runtime German generation, or new dependencies.
- Protected localStorage keys preserved.
- Export/import compatibility preserved.
- Scoring and star earning preserved.
- Today's B1 Sprint composition preserved.
- Diagnostic Sprint composition preserved.
- German learner text remains LTR under Arabic UI.

## Handoff

`connectors_completion` is complete and browser-accepted for this pass.

Next planned patch: `v0.85 - Repair / Transformation Completion Pass`.

Do not implement v0.86 or later before v0.85 is accepted.
