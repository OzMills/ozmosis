# Ozmosis Development Roadmap v0.85.5 - Runtime Display Contract Lock

## Current Baseline

Runtime baseline: `v0.85.5 - Runtime Display Contract Lock`.

Export version: `v0.85.5-runtime-display-contract-lock`.

Gate result: `RUNTIME_DISPLAY_CONTRACT_LOCK_ACCEPTED`.

## What v0.85.5 Completed

- Locked active normal-practice runtime display safety.
- Added a runtime display-contract audit helper and Edge/CDP gate.
- Reduced active runtime display-contract risk counts to zero:
  - rendered prompt/internal-label leaks: 0;
  - meaning-choice hidden cue risks: 0;
  - under-contextualised cloze-without-cue risks: 0;
  - review-only entering normal practice: 0.
- Classified old v0.85.4 static issue rows against the current runtime.
- Carried forward 4,087 non-blocking source-cleanup candidates for v0.85.6+.
- Preserved the v0.85.4a Satzbau tap/randomisation and iOS-safe input-size fixes.
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

## Required Next Patch

`v0.85.6 - Source Cleanup Batch 1: Internal Labels and Meaning Cues`.
