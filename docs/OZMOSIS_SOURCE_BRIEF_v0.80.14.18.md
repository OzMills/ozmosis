# Ozmosis Source Brief v0.80.14.18

## Current Version

`v0.80.14.18 - Star Card / Route Isolation Bugfix`

Current app file: `index.html`

Current export version: `v0.80.14.18-star-card-route-isolation-fix`

Current README: `README-v0_80_14_18.md`

Current changelog: `CHANGELOG-v0_80_14_18.txt`

Current roadmap: `docs/OZMOSIS_DEVELOPMENT_ROADMAP_v0.80.14.18.md`

Current QA report: `docs/qa/v0.80.14.18_star_card_route_isolation_bugfix.md`

## Source of Truth

The current repository files were used as source of truth:

- `index.html`
- `content/*.js`
- `data/article-items.tsv`
- `README-v0_80_14_17.md`
- `CHANGELOG-v0_80_14_17.txt`
- `docs/OZMOSIS_SOURCE_BRIEF_v0.80.14.17.md`
- `docs/OZMOSIS_DEVELOPMENT_ROADMAP_v0.80.14.17.md`
- `docs/qa/v0.80.14.17_compact_star_cards_learning_map.md`
- the v0.80.14.18 user prompt and screenshot notes

## Runtime Architecture

Ozmosis remains static, dependency-free, localStorage-backed, and GitHub Pages compatible.

No backend, framework, build step, package manager, dependency, analytics, account system, API call, runtime AI, or runtime German generation was added.

## v0.80.14.18 Scope

This patch changes only star-card display and route isolation:

- compact mini indicator visible text;
- large aggregate filled-star percentage;
- Learning Map B1 Path vertical list presentation;
- Home Settings route handling;
- version and documentation metadata.

## Star Progress Terms

- Large filled-star percentage means secured star points out of all possible star points.
- Mini star indicators remain threshold percentages.
- Star Threshold Overlay remains the existing threshold overlay bar.

## Preserved Storage Keys

- `ozmosis_b1_sprint_progress_v1`
- `ozmosis_b1_progress_evidence_v1`
- `ozmosis_b1_path_unlock_overrides_v1`
- `ozmosis_b1_review_edit_queue_v1`
- `ozmosis_b1_progress_summary_v1`

## Next Planned Patch

`v0.81 - Cases and Articles Completion Pass`
