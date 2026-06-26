# Ozmosis Development Roadmap v0.85.6a.3 - Post-Apply Acceptance + Pool Integrity Gate

## Current Baseline

Runtime baseline: `v0.85.6a.3`.

Export version: `v0.85.6a.3-post-apply-pool-integrity`.

Gate result: `POST_APPLY_ACCEPTED_POOL_FIX_APPLIED`.

## What v0.85.6a.3 Completed

- Verified the v0.85.6a.2 apply report against the current CSV outputs and content markers.
- Audited 188 route-pool rows across normal auto-graded pools, production-only pools, imported module pools, repair/transformation pools, and final queues.
- Confirmed all six known problem rows are either excluded/quarantined or replaced/eligible as expected.
- Fixed normal auto-graded practice so production/self-marked rows and production-isolated rows cannot enter normal scoring paths.
- Preserved explicit production-only routes and self-marked production semantics.
- Preserved Satzbau normalisation and the wrong-target location-feedback gate.
- Verified browser route smoke, responsive smoke, Arabic/LTR smoke, and browser export/import with Edge/CDP.

## Next Allowed Sequence

- `v0.85.7` - Source Cleanup Batch 2: Under-Contextualised Clozes
- `v0.85.8` - Feedback Cleanup: Contrast Notes and Micro-rules
- `v0.85.9` - Metadata Manifest Migration
- `v0.85.10` - Review Queue Resolution Pass
- `v0.85.11` - Final Regression and Live Readiness Gate
- `v0.86` - Production Completion Pass, blocked until v0.85.11 reports `READY_FOR_V0.86`

## Guardrails

The next patch may use the deferred cloze and exception reports, but it must not change protected storage keys, scoring semantics, evidence semantics, export/import compatibility, route availability, production self-marking semantics, or German LTR display rules.

Do not start v0.85.7 from this patch.

## Required Next Patch

`v0.85.7 - Source Cleanup Batch 2: Under-Contextualised Clozes`
