# Ozmosis Development Roadmap v0.80.14.10

## Current Patch

`v0.80.14.10 - Learner Route Filtering and Landing Hub Cleanup`

This patch is complete when:

- Starting v0.80.14.9 version/export state is verified.
- Imported row metadata can distinguish source family, source row identity, review flags, and CAT18 preview status.
- Normal learner routes exclude human-review, `move_to_human_review`, preview, CAT18, generic bank-generated, and generated prompt/choice artefact rows.
- Today’s B1 Sprint, Review Practice, B1 Path stars/progress, recommendations, Learning Map, and normal progress summaries use the same safe learner-route filtering.
- Dev Tools Review Tests and Review Edit List remain available for excluded/review rows.
- Source-ready choice artefacts are corrected in place where the source ledger supports a safe correction.
- Home uses grouped route collections rather than scattered learner tiles.
- Developer/QA access is de-emphasised but preserved.
- Protected storage keys and export/import compatibility remain unchanged.
- v0.80.14.8/v0.80.14.9 medal/rank star visuals remain intact.
- Static validation passes.
- Browser validation is run or honestly reported blocked.
- Versioned README, changelog, source brief, roadmap, QA report, and package exist.

## Completed in v0.80.14.10

- Verified current v0.80.14.9 app/export version and docs before editing.
- Inspected import metadata, normal route selectors, Today’s B1 Sprint selection, Review Practice, B1 Path/star summaries, Diagnostic Sprint, Review Tests, Review Edit List, CAT18 preview gating, and Home rendering.
- Added central route-eligibility helpers in `index.html`.
- Applied route filtering to normal practice, Today’s B1 Sprint, Review Practice, B1 Path/progress, learner-facing progress records, Learning Map, Skill Matrix, recommendations, diagnostics, repair/error-pattern summaries, and evidence records.
- Preserved excluded rows for Dev Tools Review Tests and Review Edit List.
- Corrected source-ledger-backed visible choice fields in five imported rows while keeping item IDs and source audit keys.
- Reorganised Home into Learn, Review, Progress, Production, Tools, and Settings groups.
- Moved Developer/QA links under Settings.
- Kept B1 Progress compact on Home and full detail in Learning Map.
- Added `_development-files/v0801410_route_filtering_landing_cleanup_gate.cjs`.
- Added `_development-files/v0801410_route_filtering_landing_cleanup_browser_smoke.cjs`.
- Added v0.80.14.10 README, changelog, source brief, roadmap, and QA report.

## Deferred

- Manual repair and activation of excluded `WORTSCHATZ_BANK`, `COLLOCATION_BANK`, and generic `REDEMITTEL_BANK` rows.
- Broad content-bank rewrite.
- CAT18/B2 activation.
- v0.81 Cases and Articles Completion Pass.
- Satzi.
- Genitive expansion.
- Runtime morphology or runtime AI.
- Backend/API/accounts/analytics.
- Full Leitner scheduling.

## Next Planned Patch

`v0.81 - Cases and Articles Completion Pass`
