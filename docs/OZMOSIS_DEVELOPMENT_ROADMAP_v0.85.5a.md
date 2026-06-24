# Ozmosis Development Roadmap v0.85.5a - Satzbau Build-Line and Answer-Leak Repair

## Current Baseline

Runtime baseline: `v0.85.5a - Satzbau Build-Line and Answer-Leak Repair`.

Export version: `v0.85.5a-satzbau-build-line-answer-leak`.

Gate result: `SATZBAU_BUILD_LINE_ANSWER_LEAK_ACCEPTED`.

## What v0.85.5a Completed

- Repaired Satzbau chunk-building so tapped chunks populate a visible non-input build line.
- Kept manual typing as a secondary fallback instead of the primary sentence-building surface.
- Removed the pre-answer Satzbau answer-order leak from gloss/support rendering.
- Preserved post-answer correct-answer visibility.
- Preserved v0.85.5 runtime display contract counts and v0.85.4a Satzbau/iOS input non-regressions.
- Preserved article-grid, shared-frame, scoring, evidence, storage, export/import, star logic, answer keys, and content banks.
- Added v0.85.5a Edge/CDP QA proof with screenshots and contact sheet.

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
