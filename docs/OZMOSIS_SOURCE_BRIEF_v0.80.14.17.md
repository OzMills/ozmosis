# Ozmosis Source Brief v0.80.14.17

## Current Version

`v0.80.14.17 - Compact Star Indicators / Learning Map Card Unification`

Current app file: `index.html`

Current export version: `v0.80.14.17-compact-star-cards-learning-map`

Current README: `README-v0_80_14_17.md`

Current changelog: `CHANGELOG-v0_80_14_17.txt`

Current roadmap: `docs/OZMOSIS_DEVELOPMENT_ROADMAP_v0.80.14.17.md`

Current QA report: `docs/qa/v0.80.14.17_compact_star_cards_learning_map.md`

## Source of Truth

The current repository files were used as source of truth:

- `index.html`
- `content/*.js`
- `data/*.json` where present
- `docs/OZMOSIS_SOURCE_BRIEF_v0.80.14.16.md`
- `docs/OZMOSIS_DEVELOPMENT_ROADMAP_v0.80.14.16.md`
- `docs/qa/v0.80.14.16_save_file_workflow.md`
- `docs/qa/v0.80.14.15_star_threshold_overlay.md`

## Runtime Architecture

Ozmosis remains static, dependency-free, localStorage-backed, and GitHub Pages compatible.

No backend, framework, build step, package manager, dependency, analytics, account system, API call, runtime AI, or runtime German generation was added.

## v0.80.14.17 Scope

This patch changes only visual/progress-card presentation:

- compact star indicator colour and sizing;
- compact star indicator alignment;
- Learning Map B1 Path card layout;
- version and documentation metadata.

## Star Palette

The requested palette is used for visible compact indicators and star detail rows:

- 1 star: Bronze `#b87333`
- 2 stars: Silver `#b8c4d6`
- 3 stars: Gold `#f2c94c`
- 4 stars: Sky Blue `#38bdf8`
- 5 stars: Electric Cyan `#67e8f9`

## Star Threshold Overlay

The Star Threshold Overlay calculation remains threshold-based:

- 1 star width means targets with at least 1 star.
- 2 star width means targets with at least 2 stars.
- 3 star width means targets with at least 3 stars.
- 4 star width means targets with at least 4 stars.
- 5 star width means targets with at least 5 stars.

Higher layers still sit over lower layers. This patch does not change the calculation model.

## Preserved Storage Keys

- `ozmosis_b1_sprint_progress_v1`
- `ozmosis_b1_progress_evidence_v1`
- `ozmosis_b1_path_unlock_overrides_v1`
- `ozmosis_b1_review_edit_queue_v1`
- `ozmosis_b1_progress_summary_v1`

## Next Planned Patch

`v0.81 - Cases and Articles Completion Pass`
