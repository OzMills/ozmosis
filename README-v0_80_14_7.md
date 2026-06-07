# Ozmosis v0.80.14.7

## B1 Progress Stars Task-Screen Integration Pass

Ozmosis v0.80.14.7 completes the v0.80.14.6 B1 Progress Path / star-gated category system by carrying the same star semantics into individual B1 task screens and post-answer feedback.

This is a narrow integration patch. It does not redesign the app, add B1-12 active content, add Satzi, expand Genitive, add B2 active content, add runtime German generation, add runtime AI, add dependencies, add a build step, change scoring, change protected storage keys, or change content-bank answers/statuses.

## What Changed

- Added a compact task-screen star strip for normal B1 practice tasks.
- Added current practice progress copy near the task header, for example `0/5 stars - not yet correct`.
- Added post-answer star update feedback:
  - correct, non-assisted auto-graded answers show the new star level;
  - wrong answers show that no star was added;
  - Teach Me / assisted answers show that the star is unchanged;
  - Diagnostic Sprint answers show snapshot-only star behaviour;
  - production cards show that speaking/writing practice is not star-rated.
- Kept the star rule conservative: `starLevel = min(5, nonAssistedCorrectCountForThisPracticeTarget)`.
- Kept production cards self-marked and practised-only.
- Kept diagnostic evidence snapshot-limited.
- Improved Learning Map B1 Path details with cumulative 1-5 star rows, subcategories, practice-point wording, and clearer recommended-unlock requirements.
- Improved soft unlock copy so `Unlock anyway` explicitly does not mark the previous area complete.
- Added additive debug output for B1 Path category summaries, target star levels, tag summaries, and unlock overrides.
- Added `_development-files/v080147_b1_progress_stars_task_screen_gate.cjs`.
- Added `_development-files/v080147_b1_progress_stars_task_screen_browser_smoke.cjs`.

## Preserved

- Static browser app architecture.
- Main deployed file: `index.html`.
- No backend, framework, build step, package manager, or dependency.
- Existing protected storage keys:
  - `ozmosis_b1_sprint_progress_v1`
  - `ozmosis_b1_progress_evidence_v1`
- Existing additive unlock key:
  - `ozmosis_b1_path_unlock_overrides_v1`
- Export/import compatibility.
- Today B1 Sprint composition.
- Diagnostic Sprint composition.
- Existing content bank item IDs, answers, and statuses.
- Production self-marking semantics.
- Scoring and correctness rules.
- Choice shuffling safety.
- B1-only active scope.
- German learning content LTR, including Arabic UI contexts.

## Evidence Semantics

- Correct auto-graded, non-assisted attempts increment the relevant practice target's correct count.
- Teach Me, revealed, hinted, or assisted attempts do not count as normal correct star credit.
- Diagnostic attempts do not increment B1 Path stars.
- Guessed correct answers may count, while retaining the confidence context.
- Wrong answers do not add stars.
- Production cards remain self-marked practice only; they record practised counts, not correctness stars.
- Stars guide practice. They are not a mastery, fluency, certification, or exam-readiness score.

## QA

QA report: `docs/qa/v0.80.14.7_b1_progress_stars_task_screen.md`

Local gates:

- `_development-files/v080147_b1_progress_stars_task_screen_gate.cjs`
- `_development-files/v080147_b1_progress_stars_task_screen_browser_smoke.cjs`
- `_development-files/v080146_b1_progress_path_star_gate.cjs`
- `_development-files/v080146_b1_progress_path_browser_smoke.cjs`
- `_development-files/v080145_b1_m03_admin_office_addendum_gate.cjs`
- `_development-files/v080144_b1_practice_flow_ux_gate.cjs`
- `_development-files/v080143_b1_question_quality_gate.cjs`
- `_development-files/v080141_beta_readiness_practice_ux_gate.cjs`

Current changelog: `CHANGELOG-v0_80_14_7.txt`

Current source brief: `docs/OZMOSIS_SOURCE_BRIEF_v0.80.14.7.md`

Current roadmap: `docs/OZMOSIS_DEVELOPMENT_ROADMAP_v0.80.14.7.md`
