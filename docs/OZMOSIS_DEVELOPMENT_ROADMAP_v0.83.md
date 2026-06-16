# Ozmosis Development Roadmap v0.83

## Current Baseline

Current runtime baseline: `v0.83 - Word Order Completion Pass`.

Runtime metadata:

- App version: `v0.83 - Word Order Completion Pass`
- Export version: `v0.83-word-order-completion`

## v0.83 Result

Word Order is implemented and accepted for handoff:

- 36-item Word Order bank present at `content/b1-word-order.js`.
- Word Order route opens from the menu and Grammar hub.
- Actual item completion writes `word_order` evidence.
- Correct and wrong feedback flows work.
- Confidence updates the existing evidence record.
- Learning Map and Skill Matrix include word-order evidence without changing their evidence logic.
- Export Save / Import Save remain reachable.
- Responsive and Arabic/LTR smoke passed through the browser gate.

## Next Patch

`v0.84 - Connectors Completion Pass`

Allowed scope:

- B1-safe connector completion work.
- Meaning and syntax contrasts for weil/denn/deshalb, obwohl/trotzdem, damit/um ... zu, temporal connectors, and B1-safe connector repair where the v0.84 prompt explicitly permits it.

Not allowed in v0.84 unless explicitly requested:

- Repair / Transformation Completion Pass.
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
