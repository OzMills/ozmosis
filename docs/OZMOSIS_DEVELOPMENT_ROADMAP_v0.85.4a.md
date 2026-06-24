# Ozmosis Development Roadmap v0.85.4a - Satzbau Interaction, Chunk Randomisation, and iOS Input Zoom Repair

## Current Baseline

Runtime baseline: `v0.85.4a - Satzbau Interaction, Chunk Randomisation, and iOS Input Zoom Repair`.

Export version: `v0.85.4a-satzbau-touch-ios-zoom`.

Gate result: `SATZBAU_TOUCH_IOS_ZOOM_ACCEPTED`.

## What v0.85.4a Completed

- Repaired Satzbau/word-order chunks so they are genuine tappable/focusable controls.
- Preserved manual typing for Satzbau.
- Preserved existing answer checking, scoring, evidence, storage, export/import, article-grid, and feedback rhythm paths.
- Added attempt-stable Satzbau chunk randomisation so chunk order does not reveal the answer.
- Added mobile-safe text-entry font sizing to reduce iOS/Safari zoom risk.
- Added `scripts/ozmosis-satzbau-touch-ios-zoom-check.cjs`.
- Added QA documentation and screenshot/contact-sheet evidence.

## Next Allowed Sequence

- `v0.85.5` - Runtime Display Contract Lock
- `v0.85.6` - Source Cleanup Batch 1: Internal Labels and Meaning Cues
- `v0.85.7` - Source Cleanup Batch 2: Under-Contextualised Clozes
- `v0.85.8` - Feedback Cleanup: Contrast Notes and Micro-rules
- `v0.85.9` - Metadata Manifest Migration
- `v0.85.10` - Review Queue Resolution Pass
- `v0.85.11` - Final Regression and Live Readiness Gate
- `v0.86` - Production Completion Pass, blocked until v0.85.11 reports `READY_FOR_V0.86`

## Guardrails

Do not start source cleanup, prompt/cue rewriting, metadata migration, production completion, or v0.86 until the relevant gate in the sequence explicitly allows it.

No v0.85.4a work changed content, answer keys, scoring, evidence semantics, storage key names, export/import format, star earning logic, article-grid semantics, or production-card semantics.

## Required Next Patch

`v0.85.5 - Runtime Display Contract Lock`.
