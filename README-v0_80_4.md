# Ozmosis v0.80.4

## B1-01 Extension Variant Families

Ozmosis v0.80.4 imports the approved B1-01 extension families into the existing static variant-family system.

This patch adds 5 approved extension families and 27 approved variants. It preserves the existing 9 B1-01 families, 54 variants, 9 retained single canonical items, and 3 notice cards.

Final B1-01 inventory:

- 14 active variant families.
- 81 clean active variants.
- 9 retained single canonical items.
- 3 notice/concept cards.

## Added

- `b1-01-ich-bin-entry-vf-010` with 5 variants.
- `b1-01-haben-materials-vf-011` with 5 variants.
- `b1-01-lernen-arbeiten-vf-012` with 6 variants.
- `b1-01-suchen-finden-vf-013` with 5 variants.
- `b1-01-statement-question-transform-vf-015` with 6 variants.

## Excluded

The cut `hier/dort` location family and all 8 cut variants remain excluded from active content.

Excluded IDs include:

- `b1-01-hier-dort-location-vf-014`
- `b1-01-ich-bin-entry-vf-010-var-003`
- `b1-01-haben-materials-vf-011-var-003`
- `b1-01-suchen-finden-vf-013-var-006`
- `b1-01-hier-dort-location-vf-014-var-001` through `var-005`

## Safety Notes

- `Umformen` rows are mapped to the existing full-sentence `error_repair` renderer while preserving `taskType: "Umformen"` and `taskDepth: "transformation"` in metadata/evidence.
- Formal `Haben` extension clozes require exact sentence-start capitalisation for full evidence.
- Statement-to-question transformation variants require the canonical question mark for full evidence.
- Given object phrases remain context only and are not treated as article/case proof.

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
- Existing v0.80.3/v0.80.3.1 B1-01 family behaviour.
- Multiple-choice shuffle identity handling.
- Production self-marking semantics.
- German LTR handling in Arabic UI contexts.

## Not Changed

- No B1-02 content.
- No v0.81 Cases and Articles work.
- No Genitive changes.
- No Satzi/mascot features.
- No runtime grammar generation.
- No random frame/slot assembly.
- No variant spacing or sequencing rules.
- No B2 active content.
- No mastery or readiness claims.

## QA

QA report: `docs/qa/v0.80.4_b1_01_extension_variant_families.md`

Current changelog: `CHANGELOG-v0_80_4.txt`

Current source brief: `docs/OZMOSIS_SOURCE_BRIEF_v0.80.4.md`

Current roadmap: `docs/OZMOSIS_DEVELOPMENT_ROADMAP_v0.80.4.md`
