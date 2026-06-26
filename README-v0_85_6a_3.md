# Ozmosis v0.85.6a.3 - Post-Apply Acceptance + Pool Integrity Gate

Ozmosis is a static, local-first German learning app. The deployed app remains `index.html`.

v0.85.6a.3 is a narrow acceptance and runtime-pool integrity gate after the v0.85.6a.2 v0.2 reconciliation apply patch.

- Runtime app version: `v0.85.6a.3`
- Runtime export version: `v0.85.6a.3-post-apply-pool-integrity`
- Gate result: `POST_APPLY_ACCEPTED_POOL_FIX_APPLIED`
- Core result: route-pool auditing found production/self-marked rows could still enter some normal auto-graded paths through mixed/imported selection and variant-family resolution. v0.85.6a.3 adds a narrow auto-graded eligibility helper and uses it only in normal auto-graded pools, while preserving explicit production-only access.
- QA report: `docs/qa/v0.85.6a.3_post_apply_acceptance_pool_integrity_gate.md`
- Route-pool audit CSV: `docs/qa/v0.85.6a.3_route_pool_integrity_audit.csv`
- Known problem row runtime CSV: `docs/qa/v0.85.6a.3_known_problem_rows_runtime_check.csv`
- Static result JSON: `docs/qa/v0.85.6a.3_post_apply_acceptance_results.json`
- Browser result JSON: `docs/qa/v0.85.6a.3_browser_acceptance_results.json`

v0.85.6a.3 preserves scoring, evidence semantics, protected storage keys, export/import compatibility, content IDs, quarantined rows, exception rows, production self-marking, Case Trainer, Learning Map, Settings, Dev Tools, GitHub Pages compatibility, and German LTR display rules.

Next planned patch: `v0.85.7 - Source Cleanup Batch 2: Under-Contextualised Clozes`.
