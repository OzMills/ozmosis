# Ozmosis v0.82 - Prepositions Completion Pass

Ozmosis is a static, local-first German learning app. The deployed app remains `index.html`.

v0.82 adds a focused B1 Prepositions practice route under Grammar. It covers fixed dative prepositions, fixed accusative prepositions, two-way prepositions, and common temporal preposition phrases.

## What changed

- Added `content/b1-prepositions.js` with 92 original B1-safe preposition items.
- Added a Prepositions route from the menu and Grammar hub.
- Routed preposition evidence into the existing Learning Map / Skill Matrix prepositions node.
- Added preposition route hints for recommendation, review, repair/debug, and tester surfaces where the current architecture supports them.
- Kept the bank out of Today's B1 Sprint and Diagnostic Sprint.

## What did not change

- No scoring, star logic, Star Threshold Overlay, storage key, save/export/import, Case Trainer, B1 Path, or Today’s Sprint semantics changed.
- No Word Order Completion Pass was started.
- No Connectors Completion Pass, Satzi, B2/CAT18 activation, Genitive expansion, adjective-ending expansion, dependency, backend, build step, API, runtime AI, or runtime German generation was added.

## Acceptance status

Static validation passed. Local browser validation did not complete in this environment: Edge/CDP timed out waiting for the app route marker, and the in-app browser path was blocked by the Windows sandbox.

Next required patch: `v0.82.1 - Prepositions Browser Acceptance Gate`.

## Current docs

- Changelog: `CHANGELOG-v0_82.txt`
- Source brief: `docs/OZMOSIS_SOURCE_BRIEF_v0.82.md`
- Roadmap: `docs/OZMOSIS_DEVELOPMENT_ROADMAP_v0.82.md`
- QA report: `docs/qa/v0.82_prepositions_completion.md`

The strategic source brief, roadmap, and feature register remain the current control documents.
