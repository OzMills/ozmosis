# Ozmosis Source Brief v0.85.6a.3 - Post-Apply Acceptance + Pool Integrity Gate

## Status

Runtime baseline: `v0.85.6a.3`.

Export version: `v0.85.6a.3-post-apply-pool-integrity`.

Gate result: `POST_APPLY_ACCEPTED_POOL_FIX_APPLIED`.

Next required patch: `v0.85.7 - Source Cleanup Batch 2: Under-Contextualised Clozes`.

## Purpose

v0.85.6a.3 verifies that the v0.85.6a.2 v0.2 reconciliation apply gate is safe in actual runtime pools, not only in CSV reports. The patch found that some normal auto-graded paths could still admit production/self-marked rows through mixed/imported selection or variant-family resolution, then applied a narrow runtime fix.

## Implementation Scope

- Added and applied an auto-graded practice eligibility path for normal pools.
- Excluded production cards, `mark_practised` rows, production-isolated rows, quarantined rows, review-only rows, inactive-evidence rows, and `normalAutoGradedPracticeEligible === false` rows from normal auto-graded practice.
- Preserved explicit production-only access and self-marked production semantics.
- Guarded variant-family resolution so normal practice resolves only auto-graded variants unless a production route explicitly requests production variants.
- Updated daily-sprint, imported-module, repair/transformation, connector, module, Wortschatz, and Redemittel pool paths to respect the normal auto-graded guard.
- Removed the duplicate main-menu binding introduced during the gate work while keeping the Dev Tools menu button binding.

## Apply Report Reflection

The v0.85.6a.2 output counts still match the expected reconciliation report:

- Core-safe active rows: 68
- Replaced rows: 859
- Quarantined rows: 4,459
- Production-isolated rows: 291
- Legacy seed rows kept: 567
- Exception review rows: 944
- Known problem rows: 6

## Preservation Rules

v0.85.6a.3 preserves:

- stable item IDs;
- content banks and German-learning source text;
- protected localStorage keys;
- scoring semantics;
- evidence semantics;
- confidence values;
- export/import compatibility;
- Case Trainer behaviour;
- Settings and Dev Tools access;
- Learning Map and Skill Matrix access;
- explicit production self-marking;
- German LTR display rules, including under Arabic UI.

## QA Evidence

- QA report: `docs/qa/v0.85.6a.3_post_apply_acceptance_pool_integrity_gate.md`
- Route-pool audit CSV: `docs/qa/v0.85.6a.3_route_pool_integrity_audit.csv`
- Known problem row runtime CSV: `docs/qa/v0.85.6a.3_known_problem_rows_runtime_check.csv`
- Static result JSON: `docs/qa/v0.85.6a.3_post_apply_acceptance_results.json`
- Browser result JSON: `docs/qa/v0.85.6a.3_browser_acceptance_results.json`

## Required Next Patch

Proceed only to `v0.85.7 - Source Cleanup Batch 2: Under-Contextualised Clozes`.

Do not continue to v0.85.7 inside the v0.85.6a.3 run.
