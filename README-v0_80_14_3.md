# Ozmosis v0.80.14.3

## B1 Question Quality Safe Fix Patch

Ozmosis v0.80.14.3 is a narrow B1 question-quality patch on top of v0.80.14.2.

It applies only the 177 safe, self-audited rows from the 09B safe-for-Codex CSV. It does not implement human/native review rows, cut/deferred rows, B1-12, v0.81 Cases and Articles, Satzi, Genitive expansion, B2 content, runtime grammar generation, runtime AI, dependencies, a backend, a framework, a build step, a package manager, or a redesign.

## What Changed

- Applied 177 safe 09B content fixes across Connector, Redemittel, Wortschatz, and B1-01 through B1-11 content banks.
- Revised approved prompts, distractors, accepted answers, answers, feedback, task types, and supported metadata where the current schema already represents it.
- Converted approved fake repair or raw slash contrast items into constrained `Luecke`, `Kontrast`, or `Auswahl` tasks.
- Preserved human/native review rows untouched:
  - `draft_b1_03_022`
  - `draft_b1_04_018`
  - `draft_b1_08_016`
- Added `_development-files/v080143_b1_question_quality_gate.cjs`.
- Updated current validation gates where their older assumptions conflicted with approved 09B conversions.

## Preserved

- Static browser app architecture.
- Main deployed file: `index.html`.
- No backend, framework, build step, package manager, or dependency.
- Existing storage keys:
  - `ozmosis_b1_sprint_progress_v1`
  - `ozmosis_b1_progress_evidence_v1`
- Export/import compatibility.
- Today B1 Sprint composition.
- Diagnostic Sprint composition.
- Content bank item IDs and statuses.
- Production self-marking semantics.
- Scoring and correctness rules.
- B1-only active scope.
- German learning content LTR, including Arabic UI contexts.

## QA

QA report: `docs/qa/v0.80.14.3_b1_question_quality_safe_fix_patch.md`

Local gates:

- `_development-files/v080143_b1_question_quality_gate.cjs`
- `_development-files/v080142_beta_ux_interaction_gate.cjs`
- `_development-files/v080141_task_contract_beta_readiness_gate.cjs`
- `_development-files/v080141_beta_readiness_practice_ux_gate.cjs`
- `_development-files/v0802_mc_choice_shuffle_gate.cjs`

Current changelog: `CHANGELOG-v0_80_14_3.txt`

Current source brief: `docs/OZMOSIS_SOURCE_BRIEF_v0.80.14.3.md`

Current roadmap: `docs/OZMOSIS_DEVELOPMENT_ROADMAP_v0.80.14.3.md`
