# Ozmosis Development Roadmap v0.85.3.3

## Current Baseline

Current runtime baseline: `v0.85.3.3 - Cloze Experience and Representative Fixture Pass`.

Runtime metadata:

- App version: `v0.85.3.3 - Cloze Experience and Representative Fixture Pass`
- Export version: `v0.85.3.3-cloze-experience-fixtures`

## v0.85.3.3 Result

The cloze experience pass is accepted.

- Proved a short natural inline cloze.
- Proved an under-contextualised cloze with visible cue.
- Proved a longer wrapping B1 cloze.
- Proved typing, fail, and success states.
- Regenerated choice and correction non-regression screenshots.
- Confirmed screenshot artefacts are stored under a trackable `docs/qa/` path.
- Preserved v0.85.3.2 strict geometry rules.
- Preserved scoring, evidence semantics, storage keys, save/import, star logic, Today Sprint, Diagnostic Sprint, route composition, B1-only scope, and static GitHub Pages compatibility.

Gate decision: `CLOZE_EXPERIENCE_ACCEPTED`.

## Next Patch

`v0.85.3.4 - Feedback Rhythm Pass`

Allowed scope:

- Improve post-answer feedback rhythm and hierarchy.
- Keep confidence/continue flow clear.
- Preserve cloze geometry, choice/correction non-regression, scoring, evidence, storage, content banks, and route composition.

Not allowed in v0.85.3.4 unless explicitly requested:

- Completion Gate Harness.
- Production Completion Pass.
- Source cleanup batches.
- Metadata manifest migration.
- Review queue resolution.
- Redemittel Completion Pass.
- Wortschatz Completion Pass.
- Satzi.
- B2/CAT18 activation.
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
- `v0.85.3` - Practice UI Reality and Completion Pass
- `v0.85.3.1` - Strict UI Proof and Screenshot Recovery Gate
- `v0.85.3.2` - Strict Layout Geometry Fix Pass
- `v0.85.3.3` - Cloze Experience and Representative Fixture Pass
- `v0.85.3.4` - Feedback Rhythm Pass
- `v0.85.4` - Completion Gate Harness
- `v0.85.5` - Runtime Display Contract Lock
- `v0.85.6` - Source Cleanup Batch 1: Internal Labels and Meaning Cues
- `v0.85.7` - Source Cleanup Batch 2: Under-Contextualised Clozes
- `v0.85.8` - Feedback Cleanup: Contrast Notes and Micro-rules
- `v0.85.9` - Metadata Manifest Migration
- `v0.85.10` - Review Queue Resolution Pass
- `v0.85.11` - Final Regression and Live Readiness Gate
- `v0.86` - Production Completion Pass, blocked until the final v0.85.x readiness gate reports `READY_FOR_V0.86`
- `v0.87` - Redemittel Completion Pass
- `v0.88` - Wortschatz + Content QA Batch
- `v0.89+` - B1 stabilisation, completion gates, polish, accessibility, review preparation, and later B2 planning only after B1 gates permit it.
