# Ozmosis v0.83 - Word Order Completion Pass

Ozmosis is a static, local-first German learning app. The deployed app remains `index.html`.

v0.83 adds a focused B1 Word Order route and content bank.

- App version: `v0.83 - Word Order Completion Pass`
- Export version: `v0.83-word-order-completion`

## What changed

- Added `content/b1-word-order.js`.
- Added 36 original B1-safe word-order items.
- Covered nine word-order families with recognition, sentence-build, repair, and contrast practice.
- Added Word Order to the menu and Grammar hub.
- Routed Word Order evidence into the existing Learning Map and Skill Matrix word-order node.
- Added debug counts and exact recommendation routing for Word Order.
- Kept the new route out of Today's B1 Sprint and Diagnostic Sprint.
- Validated the route with static checks and file-based headless Edge browser gates.

## What did not change

- No scoring semantics changed.
- No star earning logic changed.
- No localStorage keys changed.
- No save/export/import format changed.
- No Case Trainer behaviour changed.
- No Today's B1 Sprint composition changed.
- No Prepositions, Cases and Articles, Connectors, Redemittel, Wortschatz, or broad content banks were rewritten.
- No backend, framework, build step, package manager, dependency, API, analytics, account system, runtime AI, or runtime German generation was added.

## Current docs

- Changelog: `CHANGELOG-v0_83.txt`
- Source brief: `docs/OZMOSIS_SOURCE_BRIEF_v0.83.md`
- Roadmap: `docs/OZMOSIS_DEVELOPMENT_ROADMAP_v0.83.md`
- QA report: `docs/qa/v0.83_word_order_completion.md`

Next planned patch: `v0.84 - Connectors Completion Pass`.
