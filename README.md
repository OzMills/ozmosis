# Ozmosis README

This is the canonical README for Ozmosis.

Future README updates should be made in this file. Do not create new `README-v*.md` files unless the user explicitly asks for a standalone historical export.

- Canonical changelog: `CHANGELOG-FULL-OZMOSIS.txt`
- Current app README source consolidated from: `README-v0_85.md`

## Current App

# Ozmosis v0.85.1 - Prompt/Cue Schema Migration and Learner-Facing Cleanup

Ozmosis is a static, local-first German learning app. The deployed app remains `index.html`.

v0.85.1 cleans up the learner-facing prompt/cue layer after the v0.85 Repair / Transformation Completion Pass.

- App version: `v0.85.1 - Prompt/Cue Schema Migration and Learner-Facing Cleanup`
- Export version: `v0.85.1-prompt-cue-schema-cleanup`

## What changed

- Added a display-safe prompt/cue/hint resolver for B1 practice items.
- Added `content/b1-display-schema.js` for repeated display defaults while preserving source/provenance/audit metadata on items.
- Stopped learner-facing prompts from showing source labels such as backtick-delimited contrast labels and `show vs find` style labels.
- Made meaning-choice cues visible before answer where the task otherwise lacked enough context.
- Cleaned production-card prompt rendering so source prompt scaffolding is not shown as the main task prompt.
- Added `docs/qa/v0.85.1_prompt_cue_review_queue.csv` for unresolved display-risk rows.
- Preserved scoring, star logic, storage keys, save/export/import compatibility, Today's B1 Sprint composition, Diagnostic Sprint composition, B1-only active scope, and GitHub Pages compatibility.

## What did not change

- No Production Completion Pass was implemented.
- No Redemittel Completion Pass was implemented.
- No Wortschatz Completion Pass was implemented.
- No broad content-bank rewrite was performed.
- No task answers, scoring semantics, star earning rules, storage keys, save/export/import format, Today's B1 Sprint composition, or Diagnostic Sprint composition changed.
- No Satzi, B2/CAT18 activation, genitive expansion, adjective-ending expansion, broad generator, backend, framework, build step, package manager, dependency, API, analytics, account system, runtime AI, or runtime German generation was added.

## Current docs

- Changelog: `CHANGELOG-FULL-OZMOSIS.txt`
- Source brief: `docs/OZMOSIS_SOURCE_BRIEF_v0.85.1.md`
- Roadmap: `docs/OZMOSIS_DEVELOPMENT_ROADMAP_v0.85.1.md`
- QA report: `docs/qa/v0.85.1_prompt_cue_schema_migration.md`
- Review queue: `docs/qa/v0.85.1_prompt_cue_review_queue.csv`

Next planned patch: `v0.86 - Production Completion Pass`.

## Historical README Archive

The following root versioned README files were consolidated here and removed from the repo root so future work has one README to maintain.

### Consolidated from `README-v0_84_1.md`

# Ozmosis v0.84.1 - Cases & Articles Repair Editing Pilot

Ozmosis is a static, local-first German learning app. The deployed app remains `index.html`.

v0.84.1 adds a narrow Cases & Articles repair-editing pilot before the full v0.85 Repair / Transformation Completion Pass.

- App version: `v0.84.1 - Cases & Articles Repair Editing Pilot`
- Export version: `v0.84.1-cases-articles-repair-editing-pilot`

## What changed

- Audited all 16 Cases & Articles multiple-choice items for answer-elimination risk.
- Found 4 high-risk, 10 medium-risk, and 2 low-risk multiple-choice items.
- Left multiple-choice content unchanged in this patch; high-risk items are documented for later repair/edit or tighter form-choice work.
- Added explicit edit-prefill metadata to selected existing Cases & Articles repair items.
- Added 3 pre-authored variable-error repair pilot items for Cases & Articles.
- Added a field-driven repair edit mode that pre-fills only explicitly marked flawed repair sentences.
- Added deterministic variable-error selection from authored error slots only; no runtime German generation was added.
- Added additive repair evidence metadata for edit-prefill and variable-error repair attempts.
- Added QA-only debug access for the Cases & Articles repair pilot.
- Preserved the v0.84 Connector route baseline.
- Validated the route with static checks, headless Edge browser gates, responsive checks, route-isolation checks, save checks, and Arabic/LTR smoke.

## What did not change

- No scoring semantics changed.
- No star earning logic changed.
- No localStorage keys changed.
- No save/export/import format changed.
- No Connector content changed.
- No Today's B1 Sprint composition changed.
- No Diagnostic Sprint composition changed.
- No production cards were added.
- No full Repair / Transformation Completion Pass was started.
- No Satzi, B2/CAT18 activation, genitive expansion, adjective-ending expansion, backend, framework, build step, package manager, dependency, API, analytics, account system, runtime AI, or runtime German generation was added.

## Current docs

- Changelog: `CHANGELOG-v0_84_1.txt`
- Source brief: `docs/OZMOSIS_SOURCE_BRIEF_v0.84.1.md`
- Roadmap: `docs/OZMOSIS_DEVELOPMENT_ROADMAP_v0.84.1.md`
- QA report: `docs/qa/v0.84.1_cases_articles_repair_editing_pilot.md`

Next planned patch: `v0.85 - Repair / Transformation Completion Pass`.

### Consolidated from `README-v0_84.md`

# Ozmosis v0.84 - Connectors Completion Pass

Ozmosis is a static, local-first German learning app. The deployed app remains `index.html`.

v0.84 completes a focused B1 connector coverage pass on the existing Connector Sprint route.

- App version: `v0.84 - Connectors Completion Pass`
- Export version: `v0.84-connectors-completion`

## What changed

- Expanded `content/b1-connectors.js` from 120 to 144 route-bank connector items.
- Added 24 original B1-safe connector items.
- Covered reason, contrast, purpose/result, time, sequence/addition/alternative, and condition connector families.
- Added focused coverage for `aber`, `sodass`, `dann`, `danach`, `außerdem`, `oder`, and `falls` without activating B2/CAT18 content.
- Added explicit route-bank metadata for connector target, family, clause type, word-order target, meaning function, target IDs, review groups, and contrast groups.
- Updated the Grammar hub and B1.14 labels so the existing Connector route reflects the broader connector scope.
- Kept new v0.84 items out of Today's B1 Sprint and Diagnostic Sprint.
- Validated the route with static checks, coverage audit, file-based headless Edge browser gates, responsive checks, save checks, route-isolation checks, and Arabic/LTR smoke.

## What did not change

- No scoring semantics changed.
- No star earning logic changed.
- No localStorage keys changed.
- No save/export/import format changed.
- No Case Trainer behaviour changed.
- No Today's B1 Sprint composition changed.
- No Diagnostic Sprint composition changed.
- No Word Order, Prepositions, Cases and Articles, Redemittel, Wortschatz, repair/transformation, production, or broad content banks were rewritten.
- No Repair / Transformation Completion Pass was started.
- No Production Completion Pass was started.
- No Satzi, B2/CAT18 activation, genitive expansion, adjective-ending expansion, backend, framework, build step, package manager, dependency, API, analytics, account system, runtime AI, or runtime German generation was added.

## Current docs

- Changelog: `CHANGELOG-v0_84.txt`
- Source brief: `docs/OZMOSIS_SOURCE_BRIEF_v0.84.md`
- Roadmap: `docs/OZMOSIS_DEVELOPMENT_ROADMAP_v0.84.md`
- QA report: `docs/qa/v0.84_connectors_completion.md`

Next planned patch: `v0.85 - Repair / Transformation Completion Pass`.

### Consolidated from `README-v0_83.md`

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

### Consolidated from `README-v0_82_1.md`

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

### Consolidated from `README-v0_82.md`

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

### Consolidated from `README-v0_81_1.md`

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
