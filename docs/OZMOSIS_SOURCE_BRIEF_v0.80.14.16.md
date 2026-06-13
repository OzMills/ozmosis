# Ozmosis Source Brief v0.80.14.16

## Current Version

`v0.80.14.16 - Export Save / Import Save File Workflow`

Current app file: `index.html`

Current export version: `v0.80.14.16-save-file-workflow`

Current README: `README-v0_80_14_16.md`

Current changelog: `CHANGELOG-v0_80_14_16.txt`

Current roadmap: `docs/OZMOSIS_DEVELOPMENT_ROADMAP_v0.80.14.16.md`

Current QA report: `docs/qa/v0.80.14.16_save_file_workflow.md`

## Source of Truth

The current repository files were used as source of truth:

- `index.html`
- `content/*.js`
- `README-v0_80_14_15.md`
- `CHANGELOG-v0_80_14_15.txt`
- `docs/OZMOSIS_SOURCE_BRIEF_v0.80.14.15.md`
- `docs/OZMOSIS_DEVELOPMENT_ROADMAP_v0.80.14.15.md`
- `docs/qa/v0.80.14.15_star_threshold_overlay.md`

## Runtime Architecture

Ozmosis remains static, dependency-free, localStorage-backed, and GitHub Pages compatible.

No backend, framework, build step, package manager, dependency, analytics, account system, API call, runtime AI, or runtime German generation was added.

## v0.80.14.16 Scope

This patch changes only local save-file import/export workflow:

- `Export Save` creates a local JSON save download.
- `Import Save` opens the existing hidden JSON file input.
- Imports are parsed and validated in memory before any localStorage write.
- Failed imports do not clear or overwrite existing progress.
- Successful imports rebuild the derived B1 progress summary from raw evidence.

## Save Payload

The current save payload continues to include existing export fields:

- `app`
- `appVersion`
- `version`
- task-depth/support-level/star/progress-summary schema metadata
- `exportedAt`
- `sessionLog`
- `data`
- `leitner`
- `b1`
- `evidence`
- `b1ProgressSummary`
- `b1PathUnlocks`
- `b1ReviewEditQueue`

`b1ProgressSummary` remains derived and rebuildable. It is not trusted as the sole source of progress truth.

## Validation

`validateOzmosisSavePayload(...)` checks that a candidate payload:

- is an object;
- looks like an Ozmosis save;
- has compatible version metadata when present;
- has expected top-level save data;
- has structured sprint progress when present;
- has structured evidence records when present;
- has structured unlock override data when present;
- has structured review queue data when present;
- may omit derived progress-summary data.

## Preserved Storage Keys

- `ozmosis_b1_sprint_progress_v1`
- `ozmosis_b1_progress_evidence_v1`
- `ozmosis_b1_path_unlock_overrides_v1`
- `ozmosis_b1_review_edit_queue_v1`
- `ozmosis_b1_progress_summary_v1`

## Next Planned Patch

`v0.81 - Cases and Articles Completion Pass`
