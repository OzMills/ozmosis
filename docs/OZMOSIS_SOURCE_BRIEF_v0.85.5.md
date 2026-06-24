# Ozmosis Source Brief v0.85.5 - Runtime Display Contract Lock

## Status

Current runtime baseline: `v0.85.5 - Runtime Display Contract Lock`.

Current export version: `v0.85.5-runtime-display-contract-lock`.

Current gate result: `RUNTIME_DISPLAY_CONTRACT_LOCK_ACCEPTED`.

Next required patch: `v0.85.6 - Source Cleanup Batch 1: Internal Labels and Meaning Cues`.

## Purpose

v0.85.5 locks runtime display safety before broad source cleanup begins.

The v0.85.4 completion gate measured source and render risks. v0.85.4a then fixed Satzbau tap/randomisation and iOS input zoom behaviour. v0.85.5 keeps those fixes and prevents active normal practice from showing internal labels, hidden meaning-choice cue states, under-contextualised clozes without a cue, or review-only items.

## Implementation Scope

- Added runtime display-contract checks around the display model.
- Added `b1RuntimeDisplayContractAudit(...)`.
- Exposed `window.ozmosisRuntimeDisplayContractAudit(...)`.
- Added contract metadata to the B1 debug snapshot.
- Added `scripts/ozmosis-runtime-display-contract-check.cjs`.
- Generated result JSON and classification CSVs under `docs/qa/`.

## Baseline Counts

The accepted v0.85.4 gate measured:

- 226 rendered prompt/internal-label leak risks.
- 30 meaning-choice hidden cue risks.
- 58 under-contextualised cloze-without-cue risks.
- 0 review-only items entering normal practice.

The accepted v0.85.5 runtime lock reports:

- 0 active normal-practice rendered prompt/internal-label leaks.
- 0 active normal-practice meaning-choice hidden cue risks.
- 0 active normal-practice under-contextualised cloze-without-cue risks.
- 0 review-only items entering normal practice.
- 552 old static prompt/cue rows already handled by runtime guards.
- 3,535 unsafe source rows excluded for later cleanup.
- 4,087 non-blocking source-cleanup candidates carried forward.
- 2,990 review-only rows safely excluded.

## Preservation Rules

v0.85.5 preserves:

- content banks;
- answer keys;
- German-learning content;
- scoring;
- evidence semantics;
- confidence values;
- star earning logic;
- localStorage key names;
- export/import format;
- article-grid behaviour;
- shared practice-frame behaviour;
- production-card self-marking semantics;
- v0.85.4a Satzbau tap/randomisation behaviour;
- v0.85.4a 16px+ mobile text-entry input sizing;
- B1-only active scope.

## QA Evidence

- QA report: `docs/qa/v0.85.5_runtime_display_contract_lock.md`
- Result JSON: `docs/qa/v0.85.5_runtime_display_contract_lock_results.json`
- Resolved issue CSV: `docs/qa/v0.85.5_runtime_display_contract_resolved_issues.csv`
- Remaining source cleanup CSV: `docs/qa/v0.85.5_runtime_display_contract_remaining_source_cleanup.csv`
- Harness: `scripts/ozmosis-runtime-display-contract-check.cjs`

## Required Next Patch

Proceed only to `v0.85.6 - Source Cleanup Batch 1: Internal Labels and Meaning Cues`.

Do not start metadata migration, production completion, v0.86, or broader content-bank rewriting from this patch.
