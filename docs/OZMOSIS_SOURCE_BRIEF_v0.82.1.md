# Ozmosis Source Brief v0.82.1

Patch: `v0.82.1 - Prepositions Browser Acceptance Gate`

## Runtime Baseline

The runtime baseline remains:

- App version: `v0.82 - Prepositions Completion Pass`
- Export version: `v0.82-prepositions-completion`

No runtime fix was required in v0.82.1.

## Source Of Truth

- Runtime: `index.html`, `content/*.js`, `data/*`
- Strategic current docs:
  - `docs/OZMOSIS_SOURCE_BRIEF_CURRENT.md`
  - `docs/OZMOSIS_DEVELOPMENT_ROADMAP_CURRENT.md`
  - `docs/OZMOSIS_FEATURE_REGISTER_CURRENT.md`
- Patch QA: `docs/qa/v0.82.1_prepositions_browser_acceptance.md`

## Acceptance Result

The v0.82 Prepositions route is accepted by browser validation.

Confirmed:

- `content/b1-prepositions.js` loads through the deployed static app path.
- The Grammar hub Prepositions route enters B1 practice mode.
- Current items are drawn from `b1_prepositions_*`.
- One real item can be completed through answer, feedback, confidence, and evidence.
- Evidence uses the `prepositions` bank.
- Learning Map, Settings, Dev Tools, Home, and Case Trainer setup remain route-isolated after Prepositions.
- Export Save / Import Save remain reachable.
- Arabic UI smoke preserves German learner text LTR/readable.

## Guardrails Preserved

- Static browser app.
- Repo-root `index.html`.
- No backend, framework, build step, package manager, database, accounts, analytics, API calls, runtime AI, runtime German generation, or new dependencies.
- Protected localStorage keys preserved.
- Export/import compatibility preserved.
- German-learning content unchanged.
- Scoring, star logic, route composition, Today’s B1 Sprint, Case Trainer, Learning Map, and Skill Matrix unchanged.

## Handoff

`word_order_completion` is now allowed as the next implementation patch.

Next planned patch: `v0.83 - Word Order Completion Pass`.

Do not implement v0.84 or later before v0.83 is accepted.
