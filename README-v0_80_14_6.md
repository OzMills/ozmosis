# Ozmosis v0.80.14.6

## B1 Progress Path and Star-Gated Category System

Ozmosis v0.80.14.6 adds a conservative B1 Progress Path layer on top of the completed v0.80.14.5 addendum state.

It gives the landing page and Learning Map a compact path view for B1 categories, repeated-correct star progress, task-type breadth, and soft category unlocks. It does not add B1-12, v0.81, Satzi, Genitive expansion, B2 active content, runtime German generation, runtime AI, backend/API/accounts/analytics, dependencies, a package manager, or a build step.

## What Changed

- Added a derived B1 Path map from `B1.1` through `B1.18`, based on `docs/design docs/OZMOSIS B1 Progress Path and Star-Gated Category System v0.1.md`.
- Added compact `Your B1 Progress` cards below the Home recommended task.
- Added a detailed `B1 Path` section in the Learning Map.
- Added repeated-correct star progress for practice targets:
  - 0 stars: not yet correct
  - 1 star: got right once
  - 2 stars: got right twice
  - 3 stars: got right 3 times
  - 4 stars: got right 4 times
  - 5 stars: got right 5 times
- Kept stars tied to target families/practice targets rather than raw item cards or variants.
- Added stacked category star bars and compact percentage summaries without placing giant progress tables on the landing page.
- Added task-type breadth checks before a category is recommended for continuation.
- Added a soft unlock dialogue with `Keep practising` and `Unlock anyway`.
- Added additive unlock override storage under `ozmosis_b1_path_unlock_overrides_v1`.
- Added B1 Path metadata to the debug summary.
- Added export/import support for the additive unlock override payload while preserving older imports.
- Added `_development-files/v080146_b1_progress_path_star_gate.cjs`.
- Added `_development-files/v080146_b1_progress_path_browser_smoke.cjs`.

## Preserved

- Static browser app architecture.
- Main deployed file: `index.html`.
- No backend, framework, build step, package manager, or dependency.
- Existing protected storage keys:
  - `ozmosis_b1_sprint_progress_v1`
  - `ozmosis_b1_progress_evidence_v1`
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

- Correct auto-graded, non-assisted attempts increment the relevant target's correct count.
- Teach Me, revealed, hinted, or assisted attempts do not count as normal correct star credit.
- Guessed correct answers may count, while retaining the confidence context.
- Wrong answers increase review priority signals but do not demote stars.
- Production cards remain self-marked practice only; they record practised counts, not correctness stars.
- Stars guide practice. They are not a mastery, fluency, certification, or exam-readiness score.

## QA

QA report: `docs/qa/v0.80.14.6_b1_progress_path_star_gate.md`

Local gates:

- `_development-files/v080146_b1_progress_path_star_gate.cjs`
- `_development-files/v080146_b1_progress_path_browser_smoke.cjs`
- `_development-files/v080145_b1_m03_admin_office_addendum_gate.cjs`
- `_development-files/v080144_b1_practice_flow_ux_gate.cjs`
- `_development-files/v080143_b1_question_quality_gate.cjs`
- `_development-files/v080141_beta_readiness_practice_ux_gate.cjs`

Current changelog: `CHANGELOG-v0_80_14_6.txt`

Current source brief: `docs/OZMOSIS_SOURCE_BRIEF_v0.80.14.6.md`

Current roadmap: `docs/OZMOSIS_DEVELOPMENT_ROADMAP_v0.80.14.6.md`
