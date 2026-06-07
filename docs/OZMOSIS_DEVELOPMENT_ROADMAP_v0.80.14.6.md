# Ozmosis Development Roadmap v0.80.14.6

## Current Patch

`v0.80.14.6 - B1 Progress Path and Star-Gated Category System`

This patch is complete when:

- The current v0.80.14.5 addendum state is verified.
- The B1 Progress Path design source is inspected.
- A derived B1.1 to B1.18 path map appears in the app without adding new content banks.
- Home shows compact B1 Path progress cards below the recommended task and does not show giant progress tables.
- Learning Map shows the detailed B1 Path view.
- Stars are derived from repeated correct auto-graded, non-assisted evidence at target-family/practice-target level.
- Teach Me, reveal, hint, and assisted attempts do not count as normal correct stars.
- Production remains self-marked practised-only evidence.
- Recommended unlocks require both the 50% one-star threshold and task-type breadth.
- Manual unlock override is additive and does not mark previous categories complete.
- Export/import compatibility is preserved.
- A v0.80.14.6 static validation gate passes.
- A v0.80.14.6 browser smoke validates path rendering, star semantics, soft unlocks, responsiveness, and Arabic/LTR behaviour.
- Versioned README, changelog, source brief, roadmap, and QA report exist.

## Completed in v0.80.14.6

- Verified the starting v0.80.14.5 version and export metadata before release work.
- Added a B1 Path map based on the design source.
- Added compact Home `Your B1 Progress` cards with stacked star bars and category percentages.
- Added a Learning Map `B1 Path` section with detailed cards and star-ladder explanation.
- Added `b1PathProgressData(...)` and related helpers for target-family star calculation, task-type breadth, category summaries, and limitations.
- Added `ozmosis_b1_path_unlock_overrides_v1` as an additive localStorage key for manual path unlocks.
- Added soft unlock UI with `Keep practising` and `Unlock anyway`.
- Added B1 Path summary and unlock override data to `window.ozmosisB1Debug()`.
- Added additive export/import support for path unlock overrides.
- Added `_development-files/v080146_b1_progress_path_star_gate.cjs`.
- Added `_development-files/v080146_b1_progress_path_browser_smoke.cjs`.
- Added v0.80.14.6 README, changelog, source brief, roadmap, and QA report.

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
