# Ozmosis v0.80.14.2

## Beta UX Interaction Pass

Ozmosis v0.80.14.2 is a narrow beta-readiness UX patch on top of v0.80.14.1.

It does not add B1-12, v0.81 Cases and Articles, Genitive expansion, Satzi, B2, runtime grammar generation, runtime AI, dependencies, a backend, a framework, a build step, or a redesign. It fixes practice-flow friction reported during beta UX review.

## What Changed

- Choice-button B1 tasks now submit on one click or tap through the existing answer/evidence path.
- Typed cloze, repair text, Satzbau, and Case Trainer input still require explicit `Prüfen`.
- Auto-graded and assisted B1 answers now require a confidence selection before continuing.
- Confidence buttons appear in the requested order: `I GUESSED`, `I WAS UNSURE`, `I KNEW IT`.
- The blocked continuation copy is now `Select answer confidence to continue`.
- Inline cloze practice now switches the main action area from `Teach me` to `Prüfen` once the learner types.
- Teach Me feedback now says: `Practice answer — This will reappear at the end of the session for recall.`
- B1 practice scroll behaviour was relaxed so Edge/Chromium mouse-wheel scrolling can use the document instead of being trapped in a nested pane.
- Practice prompt size and choice spacing were tightened.
- Inline cloze punctuation spacing was normalised so punctuation after a blank does not float awkwardly.
- Typed cloze input outlines were made lighter while preserving focus visibility.
- Button tap/press feedback and HUD progress-bar visibility were reinforced.

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

QA report: `docs/qa/v0.80.14.2_beta_ux_interaction_pass.md`

Local gates:

- `_development-files/v080141_task_contract_beta_readiness_gate.cjs`
- `_development-files/v080141_beta_readiness_practice_ux_gate.cjs`
- `_development-files/v080142_beta_ux_interaction_gate.cjs`

Current changelog: `CHANGELOG-v0_80_14_2.txt`

Current source brief: `docs/OZMOSIS_SOURCE_BRIEF_v0.80.14.2.md`

Current roadmap: `docs/OZMOSIS_DEVELOPMENT_ROADMAP_v0.80.14.2.md`
