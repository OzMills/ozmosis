# Ozmosis Development Roadmap v0.80.14.7

## Current Patch

`v0.80.14.7 - B1 Progress Stars Task-Screen Integration Pass`

This patch is complete when:

- The current v0.80.14.6 path/star-gate state is verified.
- B1 task screens show current star progress for the current practice target.
- Correct, non-assisted auto-graded answers show post-answer star updates.
- Wrong, assisted, diagnostic, and production/self-marked paths clearly show that no correctness star was added.
- Learning Map B1 Path details show cumulative 1-5 star rows and subcategories without turning Home into a giant progress table.
- Category unlock copy lists missing requirements and says `Unlock anyway` does not mark the previous area complete.
- Debug output exposes B1 Path category summaries, target star levels, tag summaries, task-type breadth, and unlock overrides.
- Export/import compatibility is preserved.
- A v0.80.14.7 static validation gate passes.
- A v0.80.14.7 browser smoke validates task-screen star rendering, post-answer star updates, path rendering, soft unlocks, responsiveness, and Arabic/LTR behaviour.
- Versioned README, changelog, source brief, roadmap, and QA report exist.

## Completed in v0.80.14.7

- Verified the starting v0.80.14.6 version and export metadata before release work.
- Inspected the existing B1 Path map, Home path cards, Learning Map path details, star helpers, unlock logic, override logic, evidence-writing path, confidence path, production/self-marking path, export/import path, and debug helpers.
- Added `b1TaskStarStatus` task-screen rendering.
- Added `b1PathTaskStarSummary(...)`, `renderB1TaskStarStatus(...)`, and `b1PathTaskStarUpdateHtml(...)`.
- Added feedback lines for correct star increments, wrong answers, assisted attempts, Diagnostic Sprint evidence, and production/self-marked practice.
- Added cumulative Learning Map star rows and subcategory lists.
- Reworded learner-facing path copy from target/internal terms to practice-point and practice-progress language.
- Updated soft unlock copy and override metadata.
- Added `b1PathDebugSummary()`.
- Added `_development-files/v080147_b1_progress_stars_task_screen_gate.cjs`.
- Added `_development-files/v080147_b1_progress_stars_task_screen_browser_smoke.cjs`.
- Added v0.80.14.7 README, changelog, source brief, roadmap, and QA report.

## Deferred

- B1-12 active content.
- Full B1.12/B1.13/B1.16/B1.17/B1.18 content-bank implementation.
- v0.81 Cases and Articles Completion Pass.
- Satzi.
- Genitive expansion.
- B2 active content.
- Full Leitner scheduler.
- Automatic demotion.
- Due-date scheduling.
- Weakness repair queues beyond existing preserved functionality.
- Runtime German morphology.
- Runtime AI.
- Broad redesign.

## Next Planned Patch

`v0.81 - Cases and Articles Completion Pass`
