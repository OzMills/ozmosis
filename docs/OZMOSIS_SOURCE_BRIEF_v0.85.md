# Ozmosis Source Brief v0.85

Patch: `v0.85 - Repair / Transformation Completion Pass`

## Runtime Baseline

The runtime baseline is now:

- App version: `v0.85 - Repair / Transformation Completion Pass`
- Export version: `v0.85-repair-transformation-completion`

## Source Of Truth

- Runtime: `index.html`, `content/*.js`, `data/*`
- Strategic current docs:
  - `docs/OZMOSIS_SOURCE_BRIEF_CURRENT.md`
  - `docs/OZMOSIS_DEVELOPMENT_ROADMAP_CURRENT.md`
  - `docs/OZMOSIS_FEATURE_REGISTER_CURRENT.md`
- Patch QA: `docs/qa/v0.85_repair_transformation_completion.md`

## Patch Scope

v0.85 is a focused B1 repair/transformation coverage pass.

The patch is deliberately limited:

- Added one mixed Grammar hub route: `Repair & Transformation`.
- Preserved connector-only repair access as `Connector Repair`.
- Added 14 original B1-safe v0.85 items across Cases & Articles, Prepositions, Word Order, and Connectors.
- Expanded variable-error repair only through authored error slots, capped at 6 new items.
- Added controlled transformation tasks as typed auto-graded evidence.
- Kept transformation separate from self-marked production.
- Kept all new v0.85 items out of Today's B1 Sprint and Diagnostic Sprint.

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

`repair_transformation_completion` is complete for this focused pass.

Next planned patch: `v0.86 - Production Completion Pass`.

Do not implement v0.87 or later before v0.86 is accepted.
