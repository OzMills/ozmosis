# Ozmosis Source Brief v0.80.4

## Current Version

- App version: `v0.80.4`
- Export version: `v0.80.4-b1-01-extension-variant-families`
- Current README: `README-v0_80_4.md`
- Current changelog: `CHANGELOG-v0_80_4.txt`
- Current QA report: `docs/qa/v0.80.4_b1_01_extension_variant_families.md`

## Scope

v0.80.4 imports the approved B1-01 extension variant families into the existing static B1-01 variant-family system. It is a content-extension patch, not a route redesign, scheduler, generator, or v0.81 Cases and Articles pass.

## Files of Interest

- `index.html`
- `content/b1-m01-variant-families.js`
- `_development-files/v0803_generate_b101_content.cjs`
- `_development-files/v0804_b101_extension_variant_family_gate.cjs`
- `docs/Codex Building/ozmosis_b1_m01_extension_schema_mapping_addendum_v0_1.md`
- `docs/Codex Building/ozmosis_b1_m01_extension_row_reconciliation_final_inventory_addendum_v0_1.md`
- `docs/Codex Building/ozmosis_b1_m01_extension_codex_import_plan_v0_1.md`
- `docs/qa/v0.80.4_b1_01_extension_variant_families.md`

## Content State

- B1-01 curated variant families: 14.
- B1-01 clean variants: 81.
- B1-01 retained single canonical items: 9.
- B1-01 notice/concept cards: 3.
- Existing baseline preserved: 9 families / 54 variants.
- Extension imported: 5 families / 27 variants.
- B1-01 remains excluded from Today's B1 Sprint and Diagnostic Sprint.
- Production remains self-marked practice evidence only.

## Extension Families

- `b1-01-ich-bin-entry-vf-010`
- `b1-01-haben-materials-vf-011`
- `b1-01-lernen-arbeiten-vf-012`
- `b1-01-suchen-finden-vf-013`
- `b1-01-statement-question-transform-vf-015`

## Renderer Mapping

- `Luecke` uses the existing typed cloze renderer.
- `Satzbau` uses the existing word-order cloze renderer.
- `Kontrast` uses the existing typed cloze renderer while retaining contrast task-depth metadata.
- `Reparatur` uses the existing repair renderer.
- `Umformen` uses the existing full-sentence repair renderer while retaining transformation metadata.

## Storage and Export

Protected localStorage keys are unchanged:

- `ozmosis_b1_sprint_progress_v1`
- `ozmosis_b1_progress_evidence_v1`

Export/import structure remains unchanged. Export metadata now reports `v0.80.4-b1-01-extension-variant-families`.

## Architecture

The app remains a static browser app with no backend, framework, build step, package manager, dependency, external API call, or runtime AI.

## Next Planned Patch

`v0.81 - Cases and Articles Completion Pass`
