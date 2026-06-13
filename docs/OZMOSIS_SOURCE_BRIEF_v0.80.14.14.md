# Ozmosis Source Brief v0.80.14.14

## Current Version

`v0.80.14.14 - Progress Summary Cache / Interaction Latency Hotfix`

Current app file: `index.html`

Current export version: `v0.80.14.14-progress-summary-cache-interaction-latency-hotfix`

Current README: `README-v0_80_14_14.md`

Current changelog: `CHANGELOG-v0_80_14_14.txt`

Current roadmap: `docs/OZMOSIS_DEVELOPMENT_ROADMAP_v0.80.14.14.md`

Current QA report: `docs/qa/v0.80.14.14_progress_summary_cache_latency_hotfix.md`

## Source of Truth

The current repository files are the source of truth for this patch.

The starting runtime baseline inspected for this hotfix was:

- `index.html`
- `content/*.js`
- `README-v0_80_14_13.md`
- `CHANGELOG-v0_80_14_13.txt`
- `docs/OZMOSIS_SOURCE_BRIEF_v0.80.14.13.md`
- `docs/OZMOSIS_DEVELOPMENT_ROADMAP_v0.80.14.13.md`
- existing QA reports and local validation scripts

## Runtime Architecture

Ozmosis remains:

- static;
- dependency-free;
- single deployed app file at `index.html`;
- GitHub Pages compatible;
- localStorage-backed;
- export/import compatible;
- B1-only for active learner scope.

No backend, framework, build step, package manager, dependency, external API call, account system, analytics, runtime AI, runtime German generation, or runtime morphology was added.

## v0.80.14.14 Scope

This patch adds a derived progress-summary cache and related runtime performance wiring:

- `ozmosis_b1_progress_summary_v1` stores compact rebuildable B1 progress state.
- Raw evidence under `ozmosis_b1_progress_evidence_v1` remains the audit trail.
- Missing, stale, corrupted, imported, or incompatible summary data is rebuilt from raw evidence.
- Evidence writes update the affected practice unit immediately.
- Heavier path aggregate refresh is deferred out of the immediate answer-submit path.
- Home rendering reads compact summary/path data instead of rebuilding major evidence views on every render.
- Review practice preview preparation is deferred until after Home renders or until the tool is opened.
- Export includes the summary as additive metadata.
- Import accepts older payloads without summary data and rebuilds the summary from raw evidence.

## Storage

Protected storage key names remain:

- `ozmosis_b1_sprint_progress_v1`
- `ozmosis_b1_progress_evidence_v1`
- `ozmosis_b1_path_unlock_overrides_v1`
- `ozmosis_b1_review_edit_queue_v1`

New additive cache key:

- `ozmosis_b1_progress_summary_v1`

The summary key may be deleted and rebuilt without losing learning history.

## Preserved Source and Content

The following remain unchanged:

- `content/b1-connectors.js`
- `content/b1-redemittel.js`
- `content/b1-wortschatz.js`
- other content bank files
- source CSV/source ZIP artefacts
- current scoring/correctness semantics
- production self-marking
- Today's B1 Sprint composition
- export/import schema compatibility

## QA

Static/cache validation used:

- `_development-files/v0801414_progress_summary_cache_gate.cjs`

The gate checks:

- UTF-8 readability;
- current app/export version markers;
- protected storage key strings;
- inline and external script parse;
- content index construction;
- summary rebuild from empty evidence;
- incremental summary update after correct and wrong answers;
- wrong answer does not increase stars;
- production practised updates production-practised summary only;
- production skip does not write evidence;
- daily candidate filtering returns a valid array;
- export contains additive summary data;
- import rebuild wiring is present.

Browser validation was not completed in this pass. The previously attempted in-app browser path was blocked by `CreateProcessAsUserW failed: 5`, so the substitute validation was static parsing plus local VM cache/evidence testing.

## Next Planned Patch

`v0.81 - Cases and Articles Completion Pass`
