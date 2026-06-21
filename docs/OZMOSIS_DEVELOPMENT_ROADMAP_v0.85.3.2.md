# Ozmosis Development Roadmap v0.85.3.2

## Current Baseline

Current runtime baseline: `v0.85.3.2 - Strict Layout Geometry Fix Pass`.

Runtime metadata:

- App version: `v0.85.3.2 - Strict Layout Geometry Fix Pass`
- Export version: `v0.85.3.2-strict-layout-geometry`

## v0.85.3.2 Result

The strict layout geometry fix is accepted.

- Fixed the v0.85.3.1 strict ScreenConcept geometry misses.
- Preserved the removed old giant active-practice title.
- Preserved the absence of the pre-answer star/status strip.
- Preserved post-answer result/star feedback.
- Brought choice, correction, feedback, and confidence widths to the strict reference lane.
- Repositioned `Teach me` to the strict reference.
- Repositioned and widened the typed cloze input for the strict ScreenConcept target.
- Generated accepted screenshot, comparison, geometry, responsive, Arabic/LTR, keyboard/focus, and export/import evidence.
- Preserved scoring, evidence semantics, confidence values, storage keys, save/export/import, star logic, Today's B1 Sprint, Diagnostic Sprint, Learning Map, Skill Matrix, route isolation, B1-only scope, and static GitHub Pages compatibility.

Gate decision: `STRICT_GEOMETRY_ACCEPTED`.

## Next Patch

`v0.85.3.3 - Cloze Integration Pass`

Allowed scope:

- Make real authored cloze prompts and blanks integrate cleanly with the strict ScreenConcept geometry.
- Keep sentence wrapping readable.
- Preserve the accepted v0.85.3.2 lane, header, pre-answer star/status absence, and post-answer feedback rules.
- Preserve scoring, storage keys, save/export/import, route isolation, content banks, B1-only scope, and current ScreenConcept reference intent.

Not allowed in v0.85.3.3 unless explicitly requested:

- Completion Gate Harness.
- Production Completion Pass.
- Source cleanup batches.
- Metadata manifest migration.
- Review queue resolution.
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
- `v0.85.3` - Practice UI Reality and Completion Pass
- `v0.85.3.1` - Strict UI Proof and Screenshot Recovery Gate
- `v0.85.3.2` - Strict Layout Geometry Fix Pass
- `v0.85.3.3` - Cloze Integration Pass
- `v0.85.4` - Completion Gate Harness
- `v0.85.5` - Runtime Display Contract Lock
- `v0.85.6` - Source Cleanup Batch 1: Internal Labels and Meaning Cues
- `v0.85.7` - Source Cleanup Batch 2: Under-Contextualised Clozes
- `v0.85.8` - Feedback Cleanup: Contrast Notes and Micro-rules
- `v0.85.9` - Metadata Manifest Migration
- `v0.85.10` - Review Queue Resolution Pass
- `v0.85.11` - Final Regression and Live Readiness Gate
- `v0.86` - Production Completion Pass, blocked until v0.85.11 reports `READY_FOR_V0.86`
- `v0.87` - Redemittel Completion Pass
- `v0.88` - Wortschatz + Content QA Batch
- `v0.89` - B1 Coverage Stabilisation + Review Coverage Readiness
- `v0.90` - B1 Completion Gate Implementation
- `v0.91` - B1/B2 Separation Enforcement
- `v0.92+` - polish, stabilisation, accessibility, review preparation, and later B2 planning only after B1 gates permit it.
