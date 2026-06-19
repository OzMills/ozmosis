# Ozmosis Source Brief v0.85.1

Patch: `v0.85.1 - Prompt/Cue Schema Migration and Learner-Facing Cleanup`

## Runtime Baseline

The runtime baseline is now:

- App version: `v0.85.1 - Prompt/Cue Schema Migration and Learner-Facing Cleanup`
- Export version: `v0.85.1-prompt-cue-schema-cleanup`

## Source Of Truth

- Runtime: `index.html`, `content/*.js`, `data/*`
- Display manifest: `content/b1-display-schema.js`
- Strategic current docs:
  - `docs/OZMOSIS_SOURCE_BRIEF_CURRENT.md`
  - `docs/OZMOSIS_DEVELOPMENT_ROADMAP_CURRENT.md`
  - `docs/OZMOSIS_FEATURE_REGISTER_CURRENT.md`
- Patch QA:
  - `docs/qa/v0.85.1_prompt_cue_schema_migration.md`
  - `docs/qa/v0.85.1_prompt_cue_review_queue.csv`

## Patch Scope

v0.85.1 is a narrow display-schema and learner-facing cleanup pass after v0.85.

The patch is deliberately limited:

- Added a display-safe prompt/cue/hint model on top of existing content rows.
- Added `content/b1-display-schema.js` for repeated non-audit display defaults.
- Kept source/provenance/audit metadata on the original items.
- Hid internal source labels from learner-facing prompt rendering.
- Made meaning-choice cues visible before answer where required.
- Marked unresolved display-risk items for review instead of rewriting content banks.
- Produced a CSV review queue for items needing human/source-safe follow-up.

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

`prompt_cue_schema_cleanup` is complete for this focused pass.

Next planned patch: `v0.86 - Production Completion Pass`.

Do not implement v0.87 or later before v0.86 is accepted.
