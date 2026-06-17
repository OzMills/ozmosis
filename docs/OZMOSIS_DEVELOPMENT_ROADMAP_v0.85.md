# Ozmosis Development Roadmap v0.85

## Current Baseline

Current runtime baseline: `v0.85 - Repair / Transformation Completion Pass`.

Runtime metadata:

- App version: `v0.85 - Repair / Transformation Completion Pass`
- Export version: `v0.85-repair-transformation-completion`

## v0.85 Result

Repair / Transformation Completion is implemented as a focused grammar-spine pass:

- Added the mixed Grammar hub `Repair & Transformation` route.
- Preserved connector-only repair as `Connector Repair`.
- Added 14 original B1-safe items:
  - 2 Cases & Articles transformations.
  - 2 Prepositions variable-error repairs.
  - 2 Word Order variable-error repairs.
  - 2 Word Order transformations.
  - 2 Connector variable-error repairs.
  - 4 Connector transformations.
- Kept variable-error repair authored and capped at 6 new items.
- Reused existing repair/edit-prefill and evidence systems.
- Added transformation answer, feedback, and evidence handling without changing scoring.
- Preserved save/export/import, storage keys, star logic, Today's B1 Sprint, Diagnostic Sprint, Learning Map, Skill Matrix, route isolation, B1-only scope, and static GitHub Pages compatibility.

## Next Patch

`v0.86 - Production Completion Pass`

Allowed scope:

- Production cards only.
- Preserve self-marked semantics.
- Do not auto-grade production.
- Do not infer correctness from self-marked production.
- Preserve scoring, storage keys, save/export/import, route isolation, and B1-only scope.

Not allowed in v0.86 unless explicitly requested:

- Redemittel Completion Pass.
- Wortschatz Completion Pass.
- Satzi.
- B2/CAT18 activation.
- Genitive or adjective-ending expansion.
- Backend, framework, build step, package manager, dependencies, API calls, runtime AI, analytics, accounts, or runtime German generation.

## Corrected Roadmap Sequence

- `v0.81` - Cases and Articles Completion Pass
- `v0.81.1` - Cases & Articles Acceptance / Phase 2.5 Readiness
- `v0.82` - Prepositions Completion Pass
- `v0.82.1` - Prepositions Browser Acceptance Gate
- `v0.83` - Word Order Completion Pass
- `v0.84` - Connectors Completion Pass
- `v0.84.1` - Cases & Articles Repair Editing Pilot
- `v0.85` - Repair / Transformation Completion Pass
- `v0.86` - Production Completion Pass
- `v0.87` - Redemittel Completion Pass
- `v0.88` - Wortschatz + Content QA Batch
- `v0.89` - B1 Coverage Stabilisation + Review Coverage Readiness
- `v0.90` - B1 Completion Gate Implementation
- `v0.91` - B1/B2 Separation Enforcement
- `v0.92+` - polish, stabilisation, accessibility, review preparation, and later B2 planning only after B1 gates permit it.
