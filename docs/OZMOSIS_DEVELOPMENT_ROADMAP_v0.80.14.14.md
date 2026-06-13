# Ozmosis Development Roadmap v0.80.14.14

## Current Patch

`v0.80.14.14 - Progress Summary Cache / Interaction Latency Hotfix`

This patch is complete when:

- Starting v0.80.14.13 state is inspected.
- App/export metadata point to v0.80.14.14.
- A derived B1 progress summary cache exists under `ozmosis_b1_progress_summary_v1`.
- Raw evidence remains the source of truth.
- The summary can be rebuilt from raw evidence.
- Evidence writes update the affected practice unit without a full synchronous raw-evidence rebuild.
- Home rendering avoids rebuilding the full Learning Map, Skill Matrix, evidence summary, and recommendation model on every render.
- Review practice preview work is deferred from ordinary Home rendering.
- Export/import compatibility is preserved.
- Static/cache validation passes.
- Versioned README, changelog, source brief, roadmap, and QA report exist.

## Completed in v0.80.14.14

- Verified current repo source and v0.80.14.13 documentation layout.
- Updated app/export metadata to v0.80.14.14.
- Added `B1_PROGRESS_SUMMARY_STORAGE_KEY`.
- Added B1 progress summary rebuild, validation, storage, and incremental update helpers.
- Added a static in-memory B1 content index for repeated route/item lookups.
- Routed `b1PathProgressData()` through the valid summary cache where possible.
- Updated evidence append to update the summary and invalidate the Review practice preview cache.
- Deferred path aggregate refresh out of the immediate answer-submit path.
- Updated Home summary/recommendation rendering to read compact summary/path data.
- Deferred Review practice availability preview from initial Home rendering.
- Updated daily route candidate filtering to use the static content index.
- Updated export to include additive progress-summary data.
- Updated import to clear/rebuild the derived summary from raw evidence.
- Added Dev Tools/debug visibility for summary key, validity, fingerprint, and recent timings.
- Added `_development-files/v0801414_progress_summary_cache_gate.cjs`.
- Added `docs/qa/v0.80.14.14_progress_summary_cache_latency_hotfix.md`.
- Preserved content banks, source artefacts, storage key names, export/import, scoring, production self-marking, and current route behaviours.

## Deferred

- Browser screenshot/smoke validation for this patch, because the in-app browser path was previously blocked by `CreateProcessAsUserW failed: 5`.
- Further optimisation of the deferred aggregate refresh if live browser traces show it still competes with interaction work.
- Full Leitner scheduling.
- v0.81 Cases and Articles Completion Pass.
- Satzi.
- Runtime morphology or runtime AI.
- Backend/API/accounts/analytics.
- Broad German task-text rewrite.
- New German task generation.
- Any source CSV/source ZIP edits.

## Next Planned Patch

`v0.81 - Cases and Articles Completion Pass`
