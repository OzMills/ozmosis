# Ozmosis v0.82.1 - Prepositions Browser Acceptance Gate

Ozmosis is a static, local-first German learning app. The deployed app remains `index.html`.

v0.82.1 accepts the v0.82 Prepositions route after browser validation. No runtime fix was needed, so the app metadata remains:

- App version: `v0.82 - Prepositions Completion Pass`
- Export version: `v0.82-prepositions-completion`

## What changed

- Added browser acceptance evidence for the Prepositions route.
- Confirmed a real Prepositions item can be opened, answered, corrected, and recorded as evidence.
- Confirmed confidence updates the same evidence record.
- Confirmed Learning Map, Settings, Dev Tools, Home, and Case Trainer setup remain route-isolated after Prepositions.
- Confirmed Export Save / Import Save remain visible and import validation is exposed.
- Confirmed responsive smoke for the required acceptance viewports.
- Confirmed Arabic UI smoke keeps German learner text LTR/readable.
- Updated the feature register so `word_order_completion` is allowed next as `v0.83`.

## What did not change

- No German-learning content changed.
- No scoring, star earning, storage key, save/export/import, Case Trainer, Today’s B1 Sprint, Learning Map, Skill Matrix, or route composition changed.
- No Word Order content or route was implemented.
- No backend, framework, build step, package manager, dependency, API, analytics, account system, runtime AI, or runtime German generation was added.

## Current docs

- Changelog: `CHANGELOG-v0_82_1.txt`
- Source brief: `docs/OZMOSIS_SOURCE_BRIEF_v0.82.1.md`
- Roadmap: `docs/OZMOSIS_DEVELOPMENT_ROADMAP_v0.82.1.md`
- QA report: `docs/qa/v0.82.1_prepositions_browser_acceptance.md`

Next planned patch: `v0.83 - Word Order Completion Pass`.
