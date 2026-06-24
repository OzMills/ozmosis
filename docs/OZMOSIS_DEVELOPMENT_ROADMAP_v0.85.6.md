# Ozmosis Development Roadmap v0.85.6 - Source Cleanup Batch 1: Internal Labels and Meaning Cues

## Current Baseline

Runtime baseline: `v0.85.6 - Source Cleanup Batch 1: Internal Labels and Meaning Cues`.

Export version: `v0.85.6-source-cleanup-internal-labels-meaning-cues`.

Gate result: `SOURCE_CLEANUP_BATCH1_ACCEPTED`.

## What v0.85.6 Completed

- Consumed the v0.85.5 runtime display contract source-cleanup queue and the relevant v0.85.4 prompt/cue rows.
- Selected 33 high-confidence queue rows: 30 meaning-choice cue rows and three findings attached to one internal-label item.
- Changed 31 actual content items.
- Added explicit source-level cues to 30 `wortschatz` meaning-choice rows.
- Cleaned one `show vs find` learner-facing internal-label row without changing its answer key, choices, or internal audit metadata.
- Deferred 4,118 source rows to later patches because they require broader imported-row review, cloze cleanup, or future source-safe rewrites.
- Preserved answer keys, accepted answers, item IDs, choices, scoring, evidence, storage, export/import, article-grid behaviour, shared-frame behaviour, and Satzbau behaviour.
- Kept active normal-practice runtime display-contract defect counts at zero.

## Next Allowed Sequence

- `v0.85.7` - Source Cleanup Batch 2: Under-Contextualised Clozes
- `v0.85.8` - Feedback Cleanup: Contrast Notes and Micro-rules
- `v0.85.9` - Metadata Manifest Migration
- `v0.85.10` - Review Queue Resolution Pass
- `v0.85.11` - Final Regression and Live Readiness Gate
- `v0.86` - Production Completion Pass, blocked until v0.85.11 reports `READY_FOR_V0.86`

## Guardrails

v0.85.7 may use the deferred cloze rows and v0.85.4 cloze cue queue, but it must not change answer keys, scoring semantics, evidence semantics, localStorage keys, export/import format, star earning logic, or active B1 scope.

Feedback/micro-rule cleanup remains deferred to v0.85.8.

## Required Next Patch

`v0.85.7 - Source Cleanup Batch 2: Under-Contextualised Clozes`.
