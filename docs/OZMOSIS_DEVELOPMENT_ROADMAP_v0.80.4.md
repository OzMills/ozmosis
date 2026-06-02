# Ozmosis Development Roadmap v0.80.4

## Current Patch

`v0.80.4 - B1-01 Extension Variant Families`

This patch is complete when:

- The approved 5 B1-01 extension families are active in the existing static variant-family system.
- The approved 27 B1-01 extension variants are active.
- The cut `hier/dort` family and all 8 cut variants are absent from active content.
- Existing 9 B1-01 families, 54 variants, 9 singles, and 3 notices remain available.
- Evidence retains parent family ID and exact variant ID.
- `Umformen` transformation rows render safely without creating a new renderer or runtime generator.
- Storage keys, evidence semantics, export/import, Today B1 Sprint, Diagnostic Sprint, and production self-marking remain unchanged.

## Completed in v0.80.4

- Imported `b1-01-ich-bin-entry-vf-010` with 5 variants.
- Imported `b1-01-haben-materials-vf-011` with 5 variants.
- Imported `b1-01-lernen-arbeiten-vf-012` with 6 variants.
- Imported `b1-01-suchen-finden-vf-013` with 5 variants.
- Imported `b1-01-statement-question-transform-vf-015` with 6 variants.
- Extended the B1-01 generator to read the approved extension addendum alongside the original mapping.
- Added strict cut-ledger validation and final 14-family / 81-variant count validation.
- Added strict surface answer handling for the new formal `Haben` and statement-to-question transformation caveats.
- Added `_development-files/v0804_b101_extension_variant_family_gate.cjs`.

## Deferred

- B1-02.
- v0.81 Cases and Articles Completion Pass.
- Genitive expansion.
- Satzi/mascot features.
- Variant spacing or sequencing rules.
- Runtime grammar generation.
- Dynamic frame/slot assembly.
- B2 active content.

## Next Planned Patch

`v0.81 - Cases and Articles Completion Pass`
