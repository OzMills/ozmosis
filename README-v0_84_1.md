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
