# Ozmosis Source Brief v0.80.14

## Current Version

- App version: `v0.80.14`
- Export version: `v0.80.14-b1-11-colleague-feedback-conflict`
- Current README: `README-v0_80_14.md`
- Current changelog: `CHANGELOG-v0_80_14.txt`
- Current QA report: `docs/qa/v0.80.14_b1_11_colleague_feedback_conflict.md`

## Scope

v0.80.14 imports B1-11 Colleague feedback / conflict as a narrow static module patch. It is not a route redesign, scheduler, generator feature, B1-12 review import, or v0.81 Cases and Articles pass.

## Files of Interest

- `index.html`
- `content/b1-m11-colleague-feedback-conflict.js`
- `_development-files/v0814_generate_b111_content.cjs`
- `_development-files/v0814_static_verify.cjs`
- `_development-files/v0814_b111_colleague_feedback_conflict_gate.cjs`
- `docs/Codex Building/b1_m02_m12_pipeline_execution_v0_1/ozmosis_b1_m11_colleague_feedback_conflict_phase3a_qa_approved_v0_1.md`
- `docs/Codex Building/b1_m02_m12_pipeline_execution_v0_1/ozmosis_b1_m11_colleague_feedback_conflict_final_inventory_v0_1.md`
- `docs/Codex Building/b1_m02_m12_pipeline_execution_v0_1/ozmosis_b1_m11_colleague_feedback_conflict_schema_mapping_v0_1.md`
- `docs/Codex Building/b1_m02_m12_pipeline_execution_v0_1/ozmosis_b1_m11_colleague_feedback_conflict_codex_import_plan_v0_1.md`
- `docs/qa/v0.80.14_b1_11_colleague_feedback_conflict.md`

## Content State

- B1-11 clean records: 18.
- B1-11 active practice items: 15.
- B1-11 notice/concept cards: 3.
- B1-11 self-marked production cards: 2.
- B1-11 is registered as bank `b1_m11`.
- B1-11 is excluded from Today's B1 Sprint and Diagnostic Sprint.
- Production remains self-marked practice evidence only.

## Renderer Mapping

- `Auswahl` uses existing multiple-choice rendering and shuffling.
- `Luecke` uses existing typed cloze rendering.
- `Satzbau` uses existing word-order typed rendering.
- `Reparatur` uses existing repair rendering.
- `Kontrast` uses existing typed cloze rendering with contrast metadata.
- `Produktion` uses existing self-marked production controls.

## Storage and Export

Protected localStorage keys are unchanged:

- `ozmosis_b1_sprint_progress_v1`
- `ozmosis_b1_progress_evidence_v1`

Export/import structure remains compatible. Export metadata now reports `v0.80.14-b1-11-colleague-feedback-conflict`.

B1-11 evidence records include existing additive module and target-family metadata:

- `displayModuleId`
- `moduleKey`
- `internalPlanningId`
- `moduleSlug`
- `moduleTitle`
- `targetFamilyId`
- `targetId`

## Architecture

The app remains a static browser app with no backend, framework, build step, package manager, dependency, external API call, or runtime AI.

## Next Planned Patch

`v0.81 - Cases and Articles Completion Pass`
