# Ozmosis Source Brief v0.85.6 - Source Cleanup Batch 1: Internal Labels and Meaning Cues

## Status

Current runtime baseline: `v0.85.6 - Source Cleanup Batch 1: Internal Labels and Meaning Cues`.

Current export version: `v0.85.6-source-cleanup-internal-labels-meaning-cues`.

Current gate result: `SOURCE_CLEANUP_BATCH1_ACCEPTED`.

Next required patch: `v0.85.7 - Source Cleanup Batch 2: Under-Contextualised Clozes`.

## Purpose

v0.85.6 is the first controlled source-cleanup patch after the v0.85.5 runtime display contract lock and the v0.85.5b Satzbau proof repair.

It reduces source-level prompt/cue issues that were already protected at runtime, without changing German task stimuli broadly, answer keys, accepted answers, item IDs, scoring, evidence, storage, export/import, article-grid behaviour, shared-frame behaviour, or Satzbau behaviour.

## Implementation Scope

- Added explicit `learnerCue` source fields to 30 high-confidence `wortschatz` meaning-choice rows.
- Cleaned one high-confidence internal-label row, `v080149_cat02_contrast_cat02_cs_013`, by replacing the learner-facing `show vs find` prompt/cue with a safe meaning prompt/cue while keeping internal metadata fields intact.
- Preserved the `wortschatz` mapper so source-level `learnerCue` values reach the runtime display model.
- Added `scripts/ozmosis-source-cleanup-batch1-check.cjs`.
- Generated source-cleanup JSON, changed-row CSV, deferred-row CSV, reconciliation CSV, screenshots, and contact sheet.
- Updated the runtime display contract harness to accept v0.85.6 as a successor baseline.

## Preservation Rules

v0.85.6 preserves:

- content item IDs;
- answer keys;
- accepted answers;
- choices/distractors;
- German prompts except the single selected internal-label prompt cleanup;
- scoring;
- evidence semantics;
- confidence values;
- star earning logic;
- localStorage key names;
- export/import format;
- article-grid behaviour;
- shared practice-frame behaviour;
- production-card self-marking semantics;
- v0.85.5 runtime display contract lock;
- v0.85.5b Satzbau build-line, answer-leak, and first-run proof safeguards;
- B1-only active scope.

## QA Evidence

- QA report: `docs/qa/v0.85.6_source_cleanup_batch1_internal_labels_meaning_cues.md`
- Result JSON: `docs/qa/v0.85.6_source_cleanup_batch1_internal_labels_meaning_cues_results.json`
- Changed rows: `docs/qa/v0.85.6_source_cleanup_batch1_changed_rows.csv`
- Deferred rows: `docs/qa/v0.85.6_source_cleanup_batch1_deferred_rows.csv`
- Reconciliation: `docs/qa/v0.85.6_source_cleanup_batch1_reconciliation.csv`
- Screenshot folder: `docs/qa/screenshots/v0.85.6-source-cleanup-batch1/`
- Harness: `scripts/ozmosis-source-cleanup-batch1-check.cjs`

## Required Next Patch

Proceed only to `v0.85.7 - Source Cleanup Batch 2: Under-Contextualised Clozes`.

Do not start feedback cleanup, metadata migration, production completion, v0.86, or broad content-bank rewriting from this patch.
