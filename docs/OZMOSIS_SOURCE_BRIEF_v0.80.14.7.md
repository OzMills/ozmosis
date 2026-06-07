# Ozmosis Source Brief v0.80.14.7

## Current Version

- App version: `v0.80.14.7`
- Export version: `v0.80.14.7-b1-progress-stars-task-screen`
- Current README: `README-v0_80_14_7.md`
- Current changelog: `CHANGELOG-v0_80_14_7.txt`
- Current QA report: `docs/qa/v0.80.14.7_b1_progress_stars_task_screen.md`

## Scope

v0.80.14.7 completes the v0.80.14.6 B1 Progress Path and star-gated category layer by integrating star progress into individual task screens and post-answer feedback.

This patch is a narrow integration pass. It does not rewrite the evidence model, change scoring, alter protected storage keys, add new German content, activate B1-12, implement v0.81, add Satzi, expand Genitive, add B2 active content, add runtime German morphology, add runtime AI, add backend/API/accounts/analytics, add dependencies, introduce a package manager, add a build step, or redesign the app.

## Files of Interest

- `index.html`
- `_development-files/v080147_b1_progress_stars_task_screen_gate.cjs`
- `_development-files/v080147_b1_progress_stars_task_screen_browser_smoke.cjs`
- `_development-files/v080146_b1_progress_path_star_gate.cjs`
- `_development-files/v080146_b1_progress_path_browser_smoke.cjs`
- `README-v0_80_14_7.md`
- `CHANGELOG-v0_80_14_7.txt`
- `docs/OZMOSIS_SOURCE_BRIEF_v0.80.14.7.md`
- `docs/OZMOSIS_DEVELOPMENT_ROADMAP_v0.80.14.7.md`
- `docs/qa/v0.80.14.7_b1_progress_stars_task_screen.md`

## B1 Path State

The B1 Path remains derived from the existing registry and maps B1.1 through B1.18. Active categories route only to existing routes. Preview/deferred categories do not add B2 content or new practice banks.

v0.80.14.7 adds subcategory lists and clearer practice-point copy in the Learning Map detail view, but it does not change the underlying category map or add active B1-12 content.

## Task-Screen Star State

Normal B1 practice tasks now show a small task-screen star strip for the current practice target:

- `0/5 stars - not yet correct`
- `1/5 stars - got right once`
- `2/5 stars - got right twice`
- `3/5 stars - got right 3 times`
- `4/5 stars - got right 4 times`
- `5/5 stars - got right 5 times`

Post-answer feedback reports whether the star level changed. Assisted, diagnostic, wrong, and production/self-marked paths explicitly state that no correctness star was added.

## Star Semantics

Stars are derived from existing local evidence records:

- Correct auto-graded, non-assisted attempts increment the relevant practice target's correct count.
- Teach Me, reveal, hint, and assisted attempts do not count as normal correct stars.
- Diagnostic attempts remain snapshot evidence and do not increment B1 Path stars.
- Guessed correct answers may count, while retaining the confidence context.
- Wrong answers do not add stars.
- Production cards remain self-marked practice only; they record practised counts, not correctness stars.

The internal cap remains `starLevel = min(5, nonAssistedCorrectCountForThisPracticeTarget)`.

## Unlock Semantics

Recommended continuation still requires:

- at least 50% of current category core practice points at one star or more;
- required task types represented at one star or more where auto-graded;
- production practised at least once where production exists as a required/present task type.

Unlocks remain soft. `Unlock anyway` writes only additive override metadata to `ozmosis_b1_path_unlock_overrides_v1`; it does not mark the previous area complete.

## Storage and Export

Protected localStorage keys are unchanged:

- `ozmosis_b1_sprint_progress_v1`
- `ozmosis_b1_progress_evidence_v1`

Existing additive key:

- `ozmosis_b1_path_unlock_overrides_v1`

Export metadata reports `v0.80.14.7-b1-progress-stars-task-screen` and continues to include `b1PathStarSchemaVersion:"v1"` plus `b1PathUnlocks` when present. Imports without this additive field remain compatible.

## Architecture

The app remains a static browser app with repo-root `index.html`, no backend, no framework, no build step, no package manager, no dependency, no external API call, and no runtime AI.

## Historical Docs

The v0.80.14.6 README, changelog, source brief, roadmap, and QA report are retained as historical/superseded documentation.

## Next Planned Patch

`v0.81 - Cases and Articles Completion Pass`
