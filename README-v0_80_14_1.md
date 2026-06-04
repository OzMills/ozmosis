# Ozmosis v0.80.14.1

## Beta Readiness: Task Contract + Practice UX Repair

Ozmosis v0.80.14.1 is a narrow beta-readiness repair on top of v0.80.14.

It does not add B1-12, v0.81 Cases and Articles, Genitive expansion, Satzi, B2, runtime grammar generation, runtime AI, dependencies, a backend, or a redesign. It fixes current practice-contract and mobile UX blockers found after the B1-02 through B1-11 module imports.

## What Changed

- `Kontrast` slash-choice prompts now render as choice buttons instead of typed cloze inputs.
- Selected repair prompts that are really style/register contrasts now render as bounded choice tasks.
- Ordinary repair prompts now show the broken German sentence as the repair target, not English/source-planning wording.
- Pre-answer support that would give away repair or choice answers is hidden until after the answer.
- Typed cloze blanks use a standard compact width instead of expanding from answer length.
- Long answers, repair feedback, and correction text wrap safely.
- Button press feedback is visible for touch interaction.
- The practice HUD progress strip is thicker, while the fixed HUD is hidden only in very short landscape B1 practice states where it would cover controls.
- Repair feedback now prefers concrete micro-rules for `dass`, `weil`, `ob`, `wenn`, `bevor`, and V2-style connector repairs.
- Review Practice candidate ordering now anti-clumps nearby review clusters where possible without changing eligibility or scheduling semantics.

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
- Content bank item IDs, answers, and statuses.
- Production self-marking semantics.
- Scoring and correctness rules.
- B1-only active scope.
- German learning content LTR, including Arabic UI contexts.

## QA

QA report: `docs/qa/v0.80.14.1_beta_readiness_task_contract_practice_ux.md`

Local gates:

- `_development-files/v080141_task_contract_beta_readiness_gate.cjs`
- `_development-files/v080141_beta_readiness_practice_ux_gate.cjs`

Current changelog: `CHANGELOG-v0_80_14_1.txt`

Current source brief: `docs/OZMOSIS_SOURCE_BRIEF_v0.80.14.1.md`

Current roadmap: `docs/OZMOSIS_DEVELOPMENT_ROADMAP_v0.80.14.1.md`
