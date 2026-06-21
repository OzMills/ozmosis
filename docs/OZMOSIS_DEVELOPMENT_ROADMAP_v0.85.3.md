# Ozmosis Development Roadmap v0.85.3

## Current Baseline

Current runtime baseline: `v0.85.3 - Practice UI Reality and Completion Pass`.

Runtime metadata:

- App version: `v0.85.3 - Practice UI Reality and Completion Pass`
- Export version: `v0.85.3-practice-ui-completion`

## v0.85.3 Result

Practice UI Reality and Completion is implemented as a focused active-practice UI recovery pass:

- Verified ScreenConcept SVG and PNG references for choice, hint, cloze, and correction states.
- Recorded SVG-derived measurement notes for the canonical 430x932 form.
- Removed the large centred active-practice wordmark.
- Hid the pre-answer task star/status strip from above the task.
- Retained compact post-answer star feedback in the feedback block.
- Moved task content higher and tightened the active-practice hierarchy.
- Slimmed inline cloze input presentation.
- Kept B1 reveal hints as smaller `Teach me` secondary controls.
- Generated the required 11 actual screenshots, comparison HTML, contact sheet, and geometry JSON.
- Preserved scoring, evidence semantics, confidence values, storage keys, save/export/import, star logic, Today's B1 Sprint, Diagnostic Sprint, Learning Map, Skill Matrix, route isolation, B1-only scope, and static GitHub Pages compatibility.

## v0.85.3.1 Strict Proof Result

The v0.85.3.1 strict proof gate rechecked the v0.85.3 runtime against the supplied ScreenConcept target at 430x932.

Gate decision: `UI_NOT_ACCEPTED_NEEDS_V0.85.3.2`.

Accepted parts:

- old giant active-practice title is gone in the measured state;
- pre-answer star/status strip is absent in measured question states;
- screenshot recovery and comparison artefacts were generated.

Blocking strict-geometry misses:

- choice button width;
- Teach me vertical placement;
- cloze prompt/input vertical placement;
- cloze input width;
- correction textarea width;
- measured post-answer feedback/confidence width.

## Next Patch

`v0.85.3.2 - Header / Task Hierarchy / Star-Strip Removal Pass`

Allowed scope:

- Fix the strict ScreenConcept geometry failures documented in `docs/qa/v0.85.3.1_strict_ui_proof_gate.md`.
- Preserve the removal of the giant active-practice title.
- Preserve the absence of pre-answer star/status strips during question states.
- Keep full-size post-answer result/star feedback allowed after answer.
- Preserve scoring, storage keys, save/export/import, route isolation, content banks, B1-only scope, and current ScreenConcept reference intent.

Not allowed in v0.85.3.2 unless explicitly requested:

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
- `v0.85.3.2` - Header / Task Hierarchy / Star-Strip Removal Pass
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
