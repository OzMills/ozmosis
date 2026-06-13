# Ozmosis Source Brief v0.80.14.15

## Current Version

`v0.80.14.15 - Star Palette / Star Threshold Overlay`

Current app file: `index.html`

Current export version: `v0.80.14.15-star-palette-threshold-overlay`

Current README: `README-v0_80_14_15.md`

Current changelog: `CHANGELOG-v0_80_14_15.txt`

Current roadmap: `docs/OZMOSIS_DEVELOPMENT_ROADMAP_v0.80.14.15.md`

Current QA report: `docs/qa/v0.80.14.15_star_threshold_overlay.md`

## Source of Truth

The current repository files were used as source of truth:

- `index.html`
- `content/*.js`
- `README-v0_80_14_14.md`
- `CHANGELOG-v0_80_14_14.txt`
- `docs/OZMOSIS_SOURCE_BRIEF_v0.80.14.14.md`
- `docs/OZMOSIS_DEVELOPMENT_ROADMAP_v0.80.14.14.md`

## Runtime Architecture

Ozmosis remains static, dependency-free, localStorage-backed, and GitHub Pages compatible.

No backend, framework, build step, package manager, dependency, analytics, account system, API call, runtime AI, runtime German generation, or runtime morphology was added.

## v0.80.14.15 Scope

This patch changes only star palette and progress-bar visualisation:

- five-star palette updated to Bronze, Silver, Gold, Sky Blue, and Electric Cyan;
- B1 Path/Home path progress bars now render threshold overlay layers;
- existing threshold percentage calculations are preserved;
- score/evidence/localStorage/export/import semantics are unchanged.

## Star Threshold Overlay Model

The display model uses threshold coverage:

- 1-star layer width = targets with star level at least 1;
- 2-star layer width = targets with star level at least 2;
- 3-star layer width = targets with star level at least 3;
- 4-star layer width = targets with star level at least 4;
- 5-star layer width = targets with star level at least 5.

Layers render from lowest to highest, with higher-star layers visually above lower-star layers.

## Preserved Source and Content

Content bank files and German-learning content were not changed.

Protected storage key names remain unchanged.

## Next Planned Patch

`v0.81 - Cases and Articles Completion Pass`
