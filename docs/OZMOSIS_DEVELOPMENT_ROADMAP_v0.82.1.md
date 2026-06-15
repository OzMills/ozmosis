# Ozmosis Development Roadmap v0.82.1

## Current Baseline

Current accepted runtime baseline: `v0.82 - Prepositions Completion Pass`.

Acceptance gate completed: `v0.82.1 - Prepositions Browser Acceptance Gate`.

Runtime metadata remains:

- App version: `v0.82 - Prepositions Completion Pass`
- Export version: `v0.82-prepositions-completion`

## v0.82.1 Result

Prepositions is accepted for handoff:

- 92-item Prepositions bank present.
- Prepositions route opens from the Grammar hub.
- Actual item completion writes `prepositions` evidence.
- Feedback and confidence flow work.
- Route isolation holds after Prepositions.
- Export Save / Import Save remain reachable.
- Responsive and Arabic/LTR smoke passed through the browser gate.

## Next Patch

`v0.83 - Word Order Completion Pass`

Allowed scope:

- B1-safe word-order completion work.
- V2, subordinate-clause verb-final patterns, connector-driven word order, and related repair/contrast tasks where the v0.83 prompt explicitly permits them.

Not allowed in v0.83 unless explicitly requested:

- Connectors Completion Pass.
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
