# Ozmosis Development Roadmap v0.85.2

## Current Baseline

Current runtime baseline: `v0.85.2 - Practice Screen Template Alignment Pass`.

Runtime metadata:

- App version: `v0.85.2 - Practice Screen Template Alignment Pass`
- Export version: `v0.85.2-practice-screen-template-alignment`

## v0.85.2 Result

Practice Screen Template Alignment is implemented as a focused UI alignment pass:

- Verified ScreenConcept PNG/SVG references for choice, hint, cloze, and correction states.
- Added B1 practice-surface/state attributes for QA and scoped CSS.
- Aligned choice default, hint, fail, and success states.
- Aligned cloze default, typing, fail, and success states.
- Aligned correction default-filled, fail, and success states.
- Removed visible `Cue:` / `Hint:` prefixes from learner-facing B1 support/hint text.
- Preserved production self-marking and Case Trainer logic.
- Generated the required actual screenshots and comparison page.
- Preserved scoring, evidence semantics, confidence values, storage keys, save/export/import, star logic, Today's B1 Sprint, Diagnostic Sprint, Learning Map, Skill Matrix, route isolation, B1-only scope, and static GitHub Pages compatibility.

## Next Patch

`v0.86 - Production Completion Pass`

Allowed scope:

- Production cards only.
- Preserve self-marked semantics.
- Do not auto-grade production.
- Do not infer correctness from self-marked production.
- Preserve scoring, storage keys, save/export/import, route isolation, B1-only scope, and ScreenConcept-aligned B1 practice shell behaviour.

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
- `v0.85.1` - Prompt/Cue Schema Migration and Learner-Facing Cleanup
- `v0.85.2` - Practice Screen Template Alignment Pass
- `v0.86` - Production Completion Pass
- `v0.87` - Redemittel Completion Pass
- `v0.88` - Wortschatz + Content QA Batch
- `v0.89` - B1 Coverage Stabilisation + Review Coverage Readiness
- `v0.90` - B1 Completion Gate Implementation
- `v0.91` - B1/B2 Separation Enforcement
- `v0.92+` - polish, stabilisation, accessibility, review preparation, and later B2 planning only after B1 gates permit it.
