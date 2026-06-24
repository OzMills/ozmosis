# Ozmosis Development Roadmap v0.85.5b - Satzbau Proof Harness and First-Run Overlay Repair

## Current Baseline

Runtime baseline: `v0.85.5b - Satzbau Proof Harness and First-Run Overlay Repair`.

Export version: `v0.85.5b-satzbau-proof-overlay-repair`.

Gate result: `SATZBAU_PROOF_OVERLAY_REPAIR_ACCEPTED`.

## What v0.85.5b Completed

- Confirmed that the v0.85.5a screenshot artefacts were invalid because they showed the first-run language gate rather than the staged Satzbau proof states.
- Repaired the Satzbau proof harness so it completes the first-run language gate through the real UI before staging screenshots.
- Added screenshot assertions for language-gate absence and target-state visibility.
- Regenerated Satzbau proof screenshots and contact sheet under `docs/qa/screenshots/v0.85.5b-satzbau-proof-overlay-repair/`.
- Preserved the v0.85.5a visible Satzbau build line, tap-to-build flow, clear/reset, secondary manual fallback, and pre-answer answer-leak removal.
- Added a narrow Satzbau-only post-answer attempt line so fail and success screenshots show the learner attempt, the correct sentence, feedback, and confidence controls.
- Preserved v0.85.5 runtime display contract counts and v0.85.4a Satzbau/iOS input non-regressions.
- Preserved article-grid, shared-frame, scoring, evidence, storage, export/import, star logic, answer keys, and content banks.

## Next Allowed Sequence

- `v0.85.6` - Source Cleanup Batch 1: Internal Labels and Meaning Cues
- `v0.85.7` - Source Cleanup Batch 2: Under-Contextualised Clozes
- `v0.85.8` - Feedback Cleanup: Contrast Notes and Micro-rules
- `v0.85.9` - Metadata Manifest Migration
- `v0.85.10` - Review Queue Resolution Pass
- `v0.85.11` - Final Regression and Live Readiness Gate
- `v0.86` - Production Completion Pass, blocked until v0.85.11 reports `READY_FOR_V0.86`

## Guardrails

Source cleanup may use `docs/qa/v0.85.5_runtime_display_contract_remaining_source_cleanup.csv` as an input, but it must not change answer keys, scoring semantics, evidence semantics, localStorage keys, export/import format, star earning logic, or active B1 scope.

Classic morphology Satzbauen remains deferred.

## Required Next Patch

`v0.85.6 - Source Cleanup Batch 1: Internal Labels and Meaning Cues`.
