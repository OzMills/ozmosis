# Ozmosis Source Brief v0.83

Patch: `v0.83 - Word Order Completion Pass`

## Runtime Baseline

The runtime baseline is now:

- App version: `v0.83 - Word Order Completion Pass`
- Export version: `v0.83-word-order-completion`

## Source Of Truth

- Runtime: `index.html`, `content/*.js`, `data/*`
- Strategic current docs:
  - `docs/OZMOSIS_SOURCE_BRIEF_CURRENT.md`
  - `docs/OZMOSIS_DEVELOPMENT_ROADMAP_CURRENT.md`
  - `docs/OZMOSIS_FEATURE_REGISTER_CURRENT.md`
- Patch QA: `docs/qa/v0.83_word_order_completion.md`

## Patch Scope

v0.83 adds a routeable B1 Word Order bank and integrates it with existing route, evidence, Learning Map, Skill Matrix, recommendation, debug, and save-version surfaces.

The new bank is deliberately focused:

- 36 original B1-safe items.
- Nine word-order families.
- Recognition, sentence-build, repair, and contrast task-depth coverage.
- No production cards.
- No broad content-bank rewrite.

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

`word_order_completion` is complete and browser-accepted for this pass.

Next planned patch: `v0.84 - Connectors Completion Pass`.

Do not implement v0.85 or later before v0.84 is accepted.
