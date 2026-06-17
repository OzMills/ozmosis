# Ozmosis v0.85 - Repair / Transformation Completion Pass

Ozmosis is a static, local-first German learning app. The deployed app remains `index.html`.

v0.85 completes the focused B1 repair/transformation pass after the v0.84.1 Cases & Articles repair-editing pilot.

- App version: `v0.85 - Repair / Transformation Completion Pass`
- Export version: `v0.85-repair-transformation-completion`

## What changed

- Added a clear `Repair & Transformation` route under the Grammar hub.
- Kept the existing connector-only repair route, now labelled `Connector Repair`.
- Added 14 original B1-safe repair/transformation items across the current grammar spine:
  - 2 Cases & Articles transformations.
  - 2 Prepositions variable-error repairs.
  - 2 Word Order variable-error repairs.
  - 2 Word Order transformations.
  - 2 Connector variable-error repairs.
  - 4 Connector transformations.
- Kept variable-error repair capped at 6 new authored-slot items.
- Added transformation as typed, auto-graded controlled evidence, not production.
- Added route and evidence handling so repair and transformation map separately in Learning Map / Skill Matrix.
- Preserved scoring, star logic, storage keys, save/export/import compatibility, Today's B1 Sprint composition, Diagnostic Sprint composition, B1-only active scope, and GitHub Pages compatibility.

## What did not change

- No Production Completion Pass was implemented.
- No Redemittel Completion Pass was implemented.
- No Wortschatz Completion Pass was implemented.
- No Satzi, B2/CAT18 activation, genitive expansion, adjective-ending expansion, broad generator, backend, framework, build step, package manager, dependency, API, analytics, account system, runtime AI, or runtime German generation was added.
- No broad content-bank rewrite was performed.

## Current docs

- Changelog: `CHANGELOG-v0_85.txt`
- Source brief: `docs/OZMOSIS_SOURCE_BRIEF_v0.85.md`
- Roadmap: `docs/OZMOSIS_DEVELOPMENT_ROADMAP_v0.85.md`
- QA report: `docs/qa/v0.85_repair_transformation_completion.md`

Next planned patch: `v0.86 - Production Completion Pass`.
