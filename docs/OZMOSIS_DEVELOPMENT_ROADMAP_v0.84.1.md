# Ozmosis Development Roadmap v0.84.1

## Current Baseline

Current runtime baseline: `v0.84.1 - Cases & Articles Repair Editing Pilot`.

Runtime metadata:

- App version: `v0.84.1 - Cases & Articles Repair Editing Pilot`
- Export version: `v0.84.1-cases-articles-repair-editing-pilot`

## v0.84.1 Result

Cases & Articles repair editing is implemented and accepted as a narrow pilot:

- All 16 Cases & Articles multiple-choice items were audited for answer-elimination risk.
- 4 high-risk multiple-choice items were identified and documented for later repair/edit or tighter form-choice work.
- Existing multiple-choice items were not rewritten in this patch.
- Selected existing Cases & Articles repair items now use explicit edit-prefill metadata.
- 3 Cases & Articles variable-error repair pilot items were added.
- Variable-error repair uses pre-authored error slots, not generated German.
- Edit-prefill and variable-error repair attempts write additive evidence metadata without changing scoring.
- Export Save / Import Save remain reachable.
- Responsive and Arabic/LTR smoke passed through the browser gates.
- Connector content and route behaviour from v0.84 remain preserved.

## Next Patch

`v0.85 - Repair / Transformation Completion Pass`

Allowed scope:

- Focused repair/transformation coverage only after v0.84.1 acceptance.
- Keep repair evidence distinct from recognition, cloze, connector, production, and diagnostic evidence.
- Decide whether the v0.84.1 variable-error pilot should be expanded, revised, or left limited.
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
- `v0.84.1` - Cases & Articles Repair Editing Pilot
- `v0.85` - Repair / Transformation Completion Pass
- `v0.86` - Production Completion Pass
- `v0.87` - Redemittel Completion Pass
- `v0.88` - Wortschatz + Content QA Batch
- `v0.89` - B1 Coverage Stabilisation + Review Coverage Readiness
- `v0.90` - B1 Completion Gate Implementation
- `v0.91` - B1/B2 Separation Enforcement
- `v0.92+` - polish, stabilisation, accessibility, review preparation, and later B2 planning only after B1 gates permit it.
