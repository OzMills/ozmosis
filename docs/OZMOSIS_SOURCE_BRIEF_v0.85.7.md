# Ozmosis Source Brief v0.85.7 - Source Cleanup Batch 2: Under-Contextualised Clozes

## Status

Runtime baseline: `v0.85.7`.

Export version: `v0.85.7-under-contextualised-cloze-cleanup`.

Gate result: `UNDER_CONTEXT_CLOZE_CLEANUP_ACCEPTED`.

Next required patch: `v0.85.8 - Feedback Cleanup: Contrast Notes and Micro-rules`.

## Purpose

v0.85.7 performs a narrow source cleanup of under-contextualised cloze rows after the accepted v0.85.6a.3 pool integrity gate. It targets rows where the German sentence was too broad or relied on hidden topic context, while preserving item IDs, answer keys, accepted answers, scoring, evidence semantics, production isolation, quarantine policy, and storage keys.

## Implementation Scope

- Investigated 66 candidate cloze rows from current active Wortschatz typed clozes and the historical v0.85.4 cloze cue queue.
- Applied 23 safe one-line German cue repairs in `content/b1-wortschatz.js`.
- Added `sourceCleanupBatch: "v0.85.7-under-contextualised-clozes"` to each changed row.
- Left 33 false positives unchanged because the visible German sentence already sufficiently cued the answer.
- Deferred 10 rows for later review because they were review-only/imported rows or needed broader judgement.
- Did not convert task types or add accepted answers.

## Preservation Rules

v0.85.7 preserves:

- item IDs;
- answer keys;
- accepted answers;
- scoring semantics;
- evidence semantics;
- protected localStorage keys;
- export/import compatibility;
- v0.85.6a.3 normal auto-graded pool integrity;
- explicit production-only self-marking;
- quarantined and exception rows;
- Satzbau normalisation;
- wrong-target location-feedback gating;
- German LTR display rules, including under Arabic UI.

## QA Evidence

- QA report: `docs/qa/v0.85.7_under_contextualised_cloze_cleanup.md`
- Candidate CSV: `docs/qa/v0.85.7_under_contextualised_cloze_candidates.csv`
- Decision CSV: `docs/qa/v0.85.7_under_contextualised_cloze_decisions.csv`
- Changed rows CSV: `docs/qa/v0.85.7_under_contextualised_cloze_changed_rows.csv`
- Deferred rows CSV: `docs/qa/v0.85.7_under_contextualised_cloze_deferred_rows.csv`
- Changed-row result JSON: `docs/qa/v0.85.7_under_contextualised_cloze_gate_results.json`
- Runtime gate JSON: `docs/qa/v0.85.7_under_contextualised_cloze_runtime_gate_results.json`
- Route-pool audit CSV: `docs/qa/v0.85.7_route_pool_integrity_audit.csv`
- Known-row check CSV: `docs/qa/v0.85.7_known_problem_rows_runtime_check.csv`
- Browser result JSON: `docs/qa/v0.85.7_browser_acceptance_results.json`

## Required Next Patch

Proceed only to `v0.85.8 - Feedback Cleanup: Contrast Notes and Micro-rules`.
