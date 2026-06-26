# Ozmosis Development Roadmap v0.85.7 - Source Cleanup Batch 2: Under-Contextualised Clozes

## Current Baseline

Runtime baseline: `v0.85.7`.

Export version: `v0.85.7-under-contextualised-cloze-cleanup`.

Gate result: `UNDER_CONTEXT_CLOZE_CLEANUP_ACCEPTED`.

## What v0.85.7 Completed

- Investigated 66 cloze candidates.
- Classified 23 as `FIX_SAFE`, 33 as false positives, 4 as deferred/quarantine-review, and 6 as exception-review.
- Applied 23 safe one-line prompt/stimulus cue repairs in `content/b1-wortschatz.js`.
- Preserved item IDs, answer keys, accepted answers, scoring, evidence semantics, storage keys, export/import compatibility, production isolation, and quarantine policy.
- Verified v0.85.6a.3 route-pool integrity remains intact.
- Verified known problem rows still pass.
- Verified Satzbau normalisation and wrong-target location-feedback gating remain intact.
- Verified route, responsive, Arabic/LTR, and export/import smoke through Edge/CDP.

## Next Allowed Sequence

- `v0.85.8` - Feedback Cleanup: Contrast Notes and Micro-rules
- `v0.85.9` - Metadata Manifest Migration
- `v0.85.10` - Review Queue Resolution Pass
- `v0.85.11` - Final Regression and Live Readiness Gate
- `v0.86` - Production Completion Pass, blocked until v0.85.11 reports `READY_FOR_V0.86`

## Guardrails

The next patch may use feedback and contrast-note issue reports, but it must not change protected storage keys, scoring semantics, evidence semantics, export/import compatibility, route availability, production self-marking semantics, or German LTR display rules.

Do not start v0.85.8 from this patch.

## Required Next Patch

`v0.85.8 - Feedback Cleanup: Contrast Notes and Micro-rules`
