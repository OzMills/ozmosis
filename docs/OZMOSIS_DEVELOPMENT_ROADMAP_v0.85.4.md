# Ozmosis Development Roadmap v0.85.4 - Completion Gate Harness

## Current Baseline

Runtime baseline: `v0.85.4 - Completion Gate Harness`.

Export version: `v0.85.4-completion-gate-harness`.

Gate result: `COMPLETION_GATE_HARNESS_ACCEPTED`.

## What v0.85.4 Completed

- Added `scripts/ozmosis-completion-gate-harness.cjs`.
- Added JSON completion-gate output at `docs/qa/v0.85.4_completion_gate_harness_results.json`.
- Added CSV queues for prompt/cue issues, cloze cue issues, feedback issues, metadata manifest candidates, and review-queue status.
- Added QA documentation at `docs/qa/v0.85.4_completion_gate_harness.md`.
- Updated current docs and feature register so `v0.85.5 - Runtime Display Contract Lock` is the next allowed patch.

## Current Measured Ratchet

- Runtime item inventory is now machine-counted.
- Prompt/cue risks are now queued for later cleanup.
- Cloze cue risks are now queued for later cleanup.
- Feedback risks are now queued for later cleanup.
- Review-only leakage is measured and currently reports 0 review-only items entering normal practice.
- Metadata manifest readiness is measured and reports all runtime items as candidates for later manifest/default migration.
- Article-grid, shared practice-frame, export/import, and protected storage-key presence are checked statically.

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

No v0.85.4 work changed content, scoring, evidence, storage, export/import semantics, star earning logic, or UI layout.

## Required Next Patch

`v0.85.5 - Runtime Display Contract Lock`.
