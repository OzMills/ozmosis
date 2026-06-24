# Ozmosis Source Brief v0.85.5a - Satzbau Build-Line and Answer-Leak Repair

## Status

Current runtime baseline: `v0.85.5a - Satzbau Build-Line and Answer-Leak Repair`.

Current export version: `v0.85.5a-satzbau-build-line-answer-leak`.

Current gate result: `SATZBAU_BUILD_LINE_ANSWER_LEAK_ACCEPTED`.

Next required patch: `v0.85.6 - Source Cleanup Batch 1: Internal Labels and Meaning Cues`.

## Purpose

v0.85.5a is a narrow runtime hotfix after the accepted v0.85.5 Runtime Display Contract Lock.

It fixes two user-reported Satzbau issues: tapped chunks previously built inside the manual text-entry field, and the pre-answer gloss/support area could expose the correct sentence order.

## Implementation Scope

- Added a visible non-input Satzbau build line.
- Kept manual typing as a secondary fallback behind a disclosure.
- Suppressed pre-answer Satzbau cue/support text that revealed the correct answer order.
- Added `scripts/ozmosis-satzbau-build-line-check.cjs`.
- Updated `scripts/ozmosis-runtime-display-contract-check.cjs` so the v0.85.5 runtime display contract gate accepts the v0.85.5a successor.
- Generated QA report, result JSON, screenshots, and contact sheet for v0.85.5a.

## Preservation Rules

v0.85.5a preserves:

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
- v0.85.4a Satzbau chunk tapping, selected state, clear/reset, randomisation, and 16px+ mobile input sizing;
- v0.85.5 runtime display contract lock;
- B1-only active scope.

## QA Evidence

- QA report: `docs/qa/v0.85.5a_satzbau_build_line_answer_leak.md`
- Result JSON: `docs/qa/v0.85.5a_satzbau_build_line_answer_leak_results.json`
- Screenshot folder: `docs/qa/screenshots/v0.85.5a-satzbau-build-line-answer-leak/`
- Harness: `scripts/ozmosis-satzbau-build-line-check.cjs`
- Runtime display contract harness: `scripts/ozmosis-runtime-display-contract-check.cjs`

## Required Next Patch

Proceed only to `v0.85.6 - Source Cleanup Batch 1: Internal Labels and Meaning Cues`.

Do not start metadata migration, production completion, classic morphology Satzbauen, v0.86, or broad content-bank rewriting from this patch.
