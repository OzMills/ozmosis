# Ozmosis Development Roadmap v0.84

## Current Baseline

Current runtime baseline: `v0.84 - Connectors Completion Pass`.

Runtime metadata:

- App version: `v0.84 - Connectors Completion Pass`
- Export version: `v0.84-connectors-completion`

## v0.84 Result

Connectors are implemented and accepted for handoff:

- Existing Connector route remains the single connector practice path.
- `content/b1-connectors.js` now contains 144 route-bank connector items.
- 24 original B1-safe connector items were added.
- Reason, contrast, purpose/result, time, sequence/addition/alternative, and condition families are represented.
- Route-bank connector metadata now supports connector target, family, clause type, word-order target, meaning function, target IDs, review groups, and contrast groups.
- Actual item completion writes `connectors` evidence.
- Correct and wrong feedback flows work.
- Confidence updates the existing evidence record.
- Learning Map and Skill Matrix continue to receive connector evidence without changing their evidence logic.
- Export Save / Import Save remain reachable.
- Responsive and Arabic/LTR smoke passed through the browser gates.

## Next Patch

`v0.85 - Repair / Transformation Completion Pass`

Allowed scope:

- Focused repair/transformation coverage only after v0.84 acceptance.
- Keep repair evidence distinct from recognition, cloze, connector, production, and diagnostic evidence.
- Preserve scoring, storage keys, save/export/import, Today's B1 Sprint composition, and B1-only scope.

Not allowed in v0.85 unless explicitly requested:

- Production Completion Pass.
- Satzi.
- B2/CAT18 activation.
- Genitive expansion outside existing controls.
- Adjective-ending expansion.
- Backend, framework, build step, package manager, dependencies, API calls, runtime AI, analytics, accounts, or runtime German generation.

## Corrected Roadmap Sequence

- `v0.81` - Cases and Articles Completion Pass
- `v0.81.1` - Cases & Articles Acceptance / Phase 2.5 Readiness
- `v0.82` - Prepositions Completion Pass
- `v0.82.1` - Prepositions Browser Acceptance Gate
- `v0.83` - Word Order Completion Pass
- `v0.84` - Connectors Completion Pass
- `v0.85` - Repair / Transformation Completion Pass
- `v0.86` - Production Completion Pass
- `v0.87` - Redemittel Completion Pass
- `v0.88` - Wortschatz + Content QA Batch
- `v0.89` - B1 Coverage Stabilisation + Review Coverage Readiness
- `v0.90` - B1 Completion Gate Implementation
- `v0.91` - B1/B2 Separation Enforcement
- `v0.92+` - polish, stabilisation, accessibility, review preparation, and later B2 planning only after B1 gates permit it.
