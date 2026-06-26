# Ozmosis Source Brief v0.85.6a.2 - v0.2 Reconciliation Apply Gate

## Status

Runtime baseline: `v0.85.6a.2`.

Export version: `v0.85.6a.2-v02-reconciliation-apply-gate`.

Gate result: `V02_RECONCILIATION_APPLY_GATE_ACCEPTED`.

Next required patch: `v0.85.7 - Source Cleanup Batch 2: Under-Contextualised Clozes`.

## Purpose

v0.85.6a.2 applies the corrected v0.85.6a.1 v0.2 reconciliation manifest. The goal is to stop known-bad imported rows from entering normal practice while preserving safe replacements, existing seed rows, storage, scoring, evidence semantics, and the static app structure.

The controlling manifest is `docs/qa/v0.85.6a.1_v02_apply_manifest.csv`.

The old missing-source conflict report is historical only:

`docs/qa/FILE_CONFLICT_REPORT_v0.85.6a.1_missing_v02_replacement_sources.md`

## Implementation Scope

- Applied schema-safe replacement fields for rows marked `CORE_SAFE_V02_REPLACEMENT`.
- Kept `CORE_SAFE_UNCHANGED` rows active.
- Excluded `QUARANTINE` rows from normal learner practice without deleting the source rows.
- Excluded `PRODUCTION_PRACTICE` rows from normal auto-graded practice.
- Kept `LEGACY_SEED_SAFE_CANDIDATE` rows active for now.
- Left `EXCEPTION_REVIEW` rows untouched and reported them.
- Added a Satzbau-scoped normaliser for capitalisation, final punctuation, and surrounding whitespace.
- Gated generic location/movement feedback so unrelated `wo` questions do not receive two-way-preposition explanations.

## Manifest Counts

- Manifest rows: 7,188
- Core-safe unchanged rows: 68
- Replaced rows: 859
- Quarantined rows: 4,459
- Production-isolated rows: 291
- Legacy seed rows kept: 567
- Exception review rows: 944

## Preservation Rules

v0.85.6a.2 preserves:

- stable item IDs;
- route set;
- protected localStorage keys;
- scoring semantics;
- evidence semantics;
- confidence values;
- export/import compatibility;
- Case Trainer behaviour;
- Settings and Dev Tools access;
- Learning Map and Skill Matrix access;
- Today B1 Sprint route availability;
- German LTR display rules, including under Arabic UI.

## QA Evidence

- QA report: `docs/qa/v0.85.6a.2_v02_reconciliation_apply_gate.md`
- Apply result JSON: `docs/qa/v0.85.6a.2_apply_gate_results.json`
- Static runtime gate result: `docs/qa/v0.85.6a.2_static_runtime_gate_results.json`
- Core-safe active rows: `docs/qa/v0.85.6a.2_core_safe_active_rows.csv`
- Replaced rows: `docs/qa/v0.85.6a.2_replaced_rows.csv`
- Quarantined rows: `docs/qa/v0.85.6a.2_quarantined_rows.csv`
- Production isolation rows: `docs/qa/v0.85.6a.2_production_isolation_rows.csv`
- Legacy seed rows kept: `docs/qa/v0.85.6a.2_legacy_seed_rows_kept.csv`
- Exceptions for review: `docs/qa/v0.85.6a.2_exceptions_for_review.csv`
- Known problem rows: `docs/qa/v0.85.6a.2_known_problem_rows_after_apply.csv`

## Required Next Patch

Proceed only to `v0.85.7 - Source Cleanup Batch 2: Under-Contextualised Clozes`.

Do not continue to v0.85.7 inside the v0.85.6a.2 run.
