# Ozmosis v0.81.1 - Cases & Articles Acceptance / Phase 2.5 Readiness

Ozmosis is a static, local-first German learning app. The deployed app remains `index.html`.

This is a verification and planning patch after v0.81. It accepts the v0.81 Cases & Articles route after browser automation completed a real item, then records the planning and audit work needed before v0.82.

Runtime app metadata remains v0.81 because no runtime behaviour changed.

## What changed

- Ran a focused Edge/CDP acceptance gate for the v0.81 Cases & Articles route.
- Confirmed one real Cases & Articles item can be completed through the app route.
- Confirmed feedback, confidence selection, and `cases_articles` evidence writing.
- Confirmed route isolation across Home, Learning Map, Settings, Dev Tools, and Case Trainer.
- Confirmed Case Trainer remains separate from Cases & Articles.
- Confirmed Export Save, Import Save, and import validation remain reachable.
- Added the Phase 2.5 normalisation addendum v0.2.
- Added the B1-01 extension survival audit.
- Updated the feature register and roadmap handoff so v0.82 can start as Prepositions Completion Pass.

## What did not change

- No German-learning content was edited.
- No task answers were changed.
- No scoring, star, storage-key, export/import, or Today's B1 Sprint semantics changed.
- No Prepositions Completion Pass was implemented.
- No Satzi, B2, CAT18 activation, Genitive expansion, dependency, backend, framework, build step, runtime AI, or runtime German generation was added.

## Current docs

- Changelog: `CHANGELOG-v0_81_1.txt`
- Source brief: `docs/OZMOSIS_SOURCE_BRIEF_v0.81.1.md`
- Roadmap: `docs/OZMOSIS_DEVELOPMENT_ROADMAP_v0.81.1.md`
- QA report: `docs/qa/v0.81.1_cases_articles_acceptance_phase25_readiness.md`
- Phase 2.5 addendum: `docs/planning/ozmosis_phase2_5_full_b1_normalisation_addendum_v0_2.md`
- B1-01 survival audit: `docs/qa/v0.81.1_b1_01_extension_survival_audit.md`

The strategic source brief, roadmap, and feature register remain the current control documents.
