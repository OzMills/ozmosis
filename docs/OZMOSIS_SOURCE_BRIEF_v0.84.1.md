# Ozmosis Source Brief v0.84.1

Patch: `v0.84.1 - Cases & Articles Repair Editing Pilot`

## Runtime Baseline

The runtime baseline is now:

- App version: `v0.84.1 - Cases & Articles Repair Editing Pilot`
- Export version: `v0.84.1-cases-articles-repair-editing-pilot`

## Source Of Truth

- Runtime: `index.html`, `content/*.js`, `data/*`
- Strategic current docs:
  - `docs/OZMOSIS_SOURCE_BRIEF_CURRENT.md`
  - `docs/OZMOSIS_DEVELOPMENT_ROADMAP_CURRENT.md`
  - `docs/OZMOSIS_FEATURE_REGISTER_CURRENT.md`
- Patch QA: `docs/qa/v0.84.1_cases_articles_repair_editing_pilot.md`

## Patch Scope

v0.84.1 is a narrow pilot for Cases & Articles repair editing.

The patch is deliberately limited:

- All 16 Cases & Articles multiple-choice items were audited for answer-elimination risk.
- Multiple-choice items were not rewritten in this patch.
- Selected existing Cases & Articles repair items now explicitly opt into edit-prefill mode.
- 3 pre-authored variable-error repair pilot items were added to `content/b1-cases-articles.js`.
- Variable-error repair uses authored error slots and deterministic selection only.
- Additive repair evidence metadata was added for QA and future analysis.
- Connector route/content from v0.84 remains the active connector baseline.

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

`cases_articles_repair_editing_pilot` is complete and browser-accepted for this narrow pass.

Next planned patch: `v0.85 - Repair / Transformation Completion Pass`.

Do not implement v0.86 or later before v0.85 is accepted.
