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

## Next Patch

`v0.85.4 - Completion Gate Harness`

Allowed scope:

- Acceptance gate / harness only.
- Verify current v0.85.3 practice UI and display contract.
- Preserve scoring, storage keys, save/export/import, route isolation, content banks, B1-only scope, and ScreenConcept-aligned B1 practice shell behaviour.

Not allowed in v0.85.4 unless explicitly requested:

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
