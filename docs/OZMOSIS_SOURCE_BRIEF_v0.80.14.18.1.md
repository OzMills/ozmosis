# Ozmosis Source Brief v0.80.14.18.1

## Current Version

`v0.80.14.18.1 - Route Isolation Acceptance Hotfix`

Current app file: `index.html`

Current export version: `v0.80.14.18.1-route-isolation-acceptance-hotfix`

Current README: `README-v0_80_14_18_1.md`

Current changelog: `CHANGELOG-v0_80_14_18_1.txt`

Current roadmap: `docs/OZMOSIS_DEVELOPMENT_ROADMAP_v0.80.14.18.1.md`

Current QA report: `docs/qa/v0.80.14.18.1_route_isolation_acceptance_hotfix.md`

## Source of Truth

- Current repository files.
- `index.html`.
- `README-v0_80_14_18.md`.
- `docs/OZMOSIS_SOURCE_BRIEF_v0.80.14.18.md`.
- `docs/OZMOSIS_DEVELOPMENT_ROADMAP_v0.80.14.18.md`.
- `docs/qa/v0.80.14.18_star_card_route_isolation_bugfix.md`.
- Manual acceptance result that Learning Map and Settings still appeared underneath Home after v0.80.14.18.

## Runtime Architecture

Ozmosis remains static, dependency-free, localStorage-backed, and GitHub Pages compatible.

No backend, framework, build step, package manager, dependency, analytics, account system, API call, runtime AI, or runtime German generation was added.

## Hotfix Scope

This patch changes only route-screen visibility and current-version documentation.

It does not change content, scoring, storage, export/import payloads, star earning, or Star Threshold Overlay semantics.

## Route Isolation Model

- Persistent top-level route screens are controlled through `setActiveScreen(...)`.
- Hidden route screens are also protected by a late CSS hidden guard so landing CSS cannot force Home visible.
- Dev Tools remains an overlay, but persistent route screens are hidden while it is open and restored when it closes.

## Preserved Storage Keys

- `ozmosis_b1_sprint_progress_v1`
- `ozmosis_b1_progress_evidence_v1`
- `ozmosis_b1_path_unlock_overrides_v1`
- `ozmosis_b1_review_edit_queue_v1`
- `ozmosis_b1_progress_summary_v1`

## Next Planned Patch

`v0.81 - Cases and Articles Completion Pass`
