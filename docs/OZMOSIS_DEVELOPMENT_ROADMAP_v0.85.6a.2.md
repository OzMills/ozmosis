# Ozmosis Development Roadmap v0.85.6a.2 - v0.2 Reconciliation Apply Gate

## Current Baseline

Runtime baseline: `v0.85.6a.2`.

Export version: `v0.85.6a.2-v02-reconciliation-apply-gate`.

Gate result: `V02_RECONCILIATION_APPLY_GATE_ACCEPTED`.

## What v0.85.6a.2 Completed

- Applied the corrected v0.85.6a.1 v0.2 reconciliation manifest.
- Applied 859 schema-safe replacements.
- Quarantined 4,459 unsafe imported rows from normal practice without deleting them.
- Isolated 291 production-practice rows from normal auto-graded practice.
- Preserved 68 core-safe unchanged rows and 567 legacy seed rows.
- Left 944 exception-review rows untouched and exported them for later human review.
- Confirmed known problem rows are either replaced or excluded.
- Fixed Satzbau false negatives caused by capitalisation, final punctuation, or surrounding whitespace.
- Gated generic location/movement feedback so it does not appear on unrelated `wo` questions.

## Next Allowed Sequence

- `v0.85.7` - Source Cleanup Batch 2: Under-Contextualised Clozes
- `v0.85.8` - Feedback Cleanup: Contrast Notes and Micro-rules
- `v0.85.9` - Metadata Manifest Migration
- `v0.85.10` - Review Queue Resolution Pass
- `v0.85.11` - Final Regression and Live Readiness Gate
- `v0.86` - Production Completion Pass, blocked until v0.85.11 reports `READY_FOR_V0.86`

## Guardrails

The next patch may use the deferred cloze and exception reports, but it must not change protected storage keys, scoring semantics, evidence semantics, export/import compatibility, route availability, or German LTR display rules.

Do not start v0.85.7 from this patch.

## Required Next Patch

`v0.85.7 - Source Cleanup Batch 2: Under-Contextualised Clozes`
