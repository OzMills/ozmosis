# Ozmosis Development Roadmap v0.80.14.11

## Current Patch

`v0.80.14.11 - Source-Preserving Import Wiring and Runtime QA Pass`

This patch is complete when:

- Starting v0.80.14.10 version/export state is verified.
- Source packages and source CSV hashes are recorded before editing.
- Source packages and source CSV hashes are unchanged after editing.
- Normal learner routes use task-ready fields and do not use `meaning`, `gloss`, category labels, or source headings as learner prompts.
- Normal learner routes exclude human-review rows, raw/generic bank-generated rows, generated prompt/choice artefacts, CAT18 preview rows, and completed/max-star items.
- Today’s B1 Sprint, Review Practice, recommendations, B1 Path stars/progress, and normal evidence/progress summaries use the same safe filtering.
- Dev Tools Review Tests and Review Edit List remain available for excluded/review rows.
- Encoding corruption is fixed in runtime UI strings without rewriting source task content.
- Repair feedback does not render self-comparisons or duplicate corrected sentences.
- Home keeps the v0.80.14.10 grouped route collections.
- Protected storage keys and export/import compatibility remain unchanged.
- Static validation and browser validation pass.
- Versioned README, changelog, source brief, roadmap, QA report, and package exist.

## Completed in v0.80.14.11

- Verified current v0.80.14.10 app/export version and docs before editing.
- Created `_development-files/v0801411_source_preservation_manifest_before.csv`.
- Created `_development-files/v0801411_source_preservation_manifest_after.csv`.
- Added `_development-files/v0801411_source_preserving_runtime_qa_gate.cjs`.
- Added `_development-files/v0801411_source_preserving_runtime_qa_browser_smoke.cjs`.
- Added row classification, golden-row preservation, field-mapping, completed-item, encoding, and repair-feedback reports.
- Repaired runtime mojibake in `index.html`.
- Added completed/max-star item filtering helpers for normal practice selection.
- Applied completion-aware selection to normal routes, Today’s B1 Sprint, route pools, imported module pools, Review Practice, and repair candidate selection.
- Added a safe empty state for routes with no unfinished items.
- Added repair feedback renderer guards for self-comparison notes.
- Kept source content, source packages, content-bank source files, scoring, correctness rules, and storage keys intact.
- Added v0.80.14.11 README, changelog, source brief, roadmap, QA report, and release package.

## Deferred

- v0.81 Cases and Articles Completion Pass.
- Manual repair and activation of excluded `WORTSCHATZ_BANK`, `COLLOCATION_BANK`, and generic `REDEMITTEL_BANK` rows.
- Broad content-bank rewrite.
- CAT18/B2 activation.
- Satzi.
- Genitive expansion.
- Runtime morphology or runtime AI.
- Backend/API/accounts/analytics.
- Full Leitner scheduling.

## Next Planned Patch

`v0.81 - Cases and Articles Completion Pass`
