# Ozmosis Source Brief v0.80.14.2

## Current Version

- App version: `v0.80.14.2`
- Export version: `v0.80.14.2-beta-ux-interaction-pass`
- Current README: `README-v0_80_14_2.md`
- Current changelog: `CHANGELOG-v0_80_14_2.txt`
- Current QA report: `docs/qa/v0.80.14.2_beta_ux_interaction_pass.md`

## Scope

v0.80.14.2 is a narrow beta UX interaction pass on the v0.80.14.1 app line.

This patch does not add B1-12, v0.81 Cases and Articles, Genitive expansion, Satzi, B2, runtime grammar generation, runtime AI, backend/API/accounts/analytics, dependencies, a package manager, a build step, or a broad redesign.

## Files of Interest

- `index.html`
- `_development-files/v080141_task_contract_beta_readiness_gate.cjs`
- `_development-files/v080141_beta_readiness_practice_ux_gate.cjs`
- `_development-files/v080142_beta_ux_interaction_gate.cjs`
- `README-v0_80_14_2.md`
- `CHANGELOG-v0_80_14_2.txt`
- `docs/OZMOSIS_SOURCE_BRIEF_v0.80.14.2.md`
- `docs/OZMOSIS_DEVELOPMENT_ROADMAP_v0.80.14.2.md`
- `docs/qa/v0.80.14.2_beta_ux_interaction_pass.md`

## Interaction State

- Choice-button B1 tasks submit on one click/tap.
- Typed cloze, repair text, Satzbau, and Case Trainer text input still require explicit `Prüfen`.
- Auto-graded and assisted B1 submissions require confidence before continuation.
- Confidence values are unchanged: `guessed`, `unsure`, `sure`.
- Production remains self-marked only and keeps skip-without-evidence semantics.
- Teach Me remains an assisted support path and uses the existing evidence support metadata.
- Multiple-choice shuffling is preserved.

## Storage and Export

Protected localStorage keys are unchanged:

- `ozmosis_b1_sprint_progress_v1`
- `ozmosis_b1_progress_evidence_v1`

Export/import structure remains compatible. Export metadata now reports `v0.80.14.2-beta-ux-interaction-pass`.

## Content State

No content bank files were intentionally changed. B1-02 through B1-11 content remains present and active through existing module routes. Today B1 Sprint and Diagnostic Sprint composition remain unchanged. B1-12 remains deferred.

## Architecture

The app remains a static browser app with repo-root `index.html`, no backend, no framework, no build step, no package manager, no dependency, no external API call, and no runtime AI.

## Next Planned Patch

`v0.81 - Cases and Articles Completion Pass`
