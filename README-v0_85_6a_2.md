# Ozmosis v0.85.6a.2

Patch: `v0.85.6a.2 - v0.2 Reconciliation Apply Gate`

Runtime app version: `v0.85.6a.2`

Runtime export version: `v0.85.6a.2-v02-reconciliation-apply-gate`

## Summary

v0.85.6a.2 applies the corrected v0.85.6a.1 v0.2 reconciliation manifest so known-bad imported rows no longer enter normal Ozmosis practice.

The patch uses `docs/qa/v0.85.6a.1_v02_apply_manifest.csv` as the controlling source. The older missing-source conflict report is retained as historical evidence only and is not a blocker for this patch.

## What Changed

- Applied 859 schema-safe `CORE_SAFE_V02_REPLACEMENT` rows.
- Kept 68 `CORE_SAFE_UNCHANGED` rows active.
- Quarantined 4,459 `QUARANTINE` rows from normal practice without deleting them.
- Isolated 291 `PRODUCTION_PRACTICE` rows from normal auto-graded practice.
- Kept 567 `LEGACY_SEED_SAFE_CANDIDATE` rows active for now.
- Left 944 `EXCEPTION_REVIEW` rows untouched and reported them for later review.
- Fixed Satzbau answer normalisation for case, final punctuation, and surrounding whitespace.
- Gated generic location/movement feedback so ordinary `wo` questions do not receive two-way-preposition feedback unless the item explicitly targets that concept.

## Preservation

The patch preserves the static app architecture, `index.html` deployment, content files, route set, protected storage keys, scoring semantics, evidence semantics, export/import compatibility, Case Trainer, Settings, Dev Tools, Learning Map, Skill Matrix, Diagnostic Sprint, Connector/Grammar Sprint, Redemittel, Wortschatz, Today B1 Sprint, and German LTR display rules.

## QA Evidence

- QA report: `docs/qa/v0.85.6a.2_v02_reconciliation_apply_gate.md`
- Result JSON: `docs/qa/v0.85.6a.2_apply_gate_results.json`
- Static runtime gate result: `docs/qa/v0.85.6a.2_static_runtime_gate_results.json`
- Core-safe rows: `docs/qa/v0.85.6a.2_core_safe_active_rows.csv`
- Replaced rows: `docs/qa/v0.85.6a.2_replaced_rows.csv`
- Quarantined rows: `docs/qa/v0.85.6a.2_quarantined_rows.csv`
- Production isolation rows: `docs/qa/v0.85.6a.2_production_isolation_rows.csv`
- Legacy seed rows kept: `docs/qa/v0.85.6a.2_legacy_seed_rows_kept.csv`
- Exceptions for review: `docs/qa/v0.85.6a.2_exceptions_for_review.csv`
- Known problem rows after apply: `docs/qa/v0.85.6a.2_known_problem_rows_after_apply.csv`

## Next Patch

`v0.85.7 - Source Cleanup Batch 2: Under-Contextualised Clozes`
