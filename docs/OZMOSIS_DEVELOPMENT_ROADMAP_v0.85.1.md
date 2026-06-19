# Ozmosis Development Roadmap v0.85.1

## Current Baseline

Current runtime baseline: `v0.85.1 - Prompt/Cue Schema Migration and Learner-Facing Cleanup`.

Runtime metadata:

- App version: `v0.85.1 - Prompt/Cue Schema Migration and Learner-Facing Cleanup`
- Export version: `v0.85.1-prompt-cue-schema-cleanup`

## v0.85.1 Result

Prompt/Cue Schema Migration and Learner-Facing Cleanup is implemented as a display-safety pass:

- Added a display-safe prompt/cue/hint resolver.
- Added `content/b1-display-schema.js` with 25 repeated display-default entries.
- Preserved imported content rows and source/provenance/audit metadata.
- Stopped learner-facing prompts from rendering source labels such as backtick contrast keys and `show vs find` style audit labels.
- Made meaning-choice cues visible before answer through the existing support area.
- Routed unresolved display-risk rows out of normal practice through existing eligibility safeguards.
- Added a review queue CSV at `docs/qa/v0.85.1_prompt_cue_review_queue.csv`.
- Preserved scoring, evidence semantics, save/export/import, storage keys, star logic, Today's B1 Sprint, Diagnostic Sprint, Learning Map, Skill Matrix, route isolation, B1-only scope, and static GitHub Pages compatibility.

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
- `v0.85.1` - Prompt/Cue Schema Migration and Learner-Facing Cleanup
- `v0.86` - Production Completion Pass
- `v0.87` - Redemittel Completion Pass
- `v0.88` - Wortschatz + Content QA Batch
- `v0.89` - B1 Coverage Stabilisation + Review Coverage Readiness
- `v0.90` - B1 Completion Gate Implementation
- `v0.91` - B1/B2 Separation Enforcement
- `v0.92+` - polish, stabilisation, accessibility, review preparation, and later B2 planning only after B1 gates permit it.
