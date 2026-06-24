# Ozmosis Source Brief v0.85.5b - Satzbau Proof Harness and First-Run Overlay Repair

## Status

Current runtime baseline: `v0.85.5b - Satzbau Proof Harness and First-Run Overlay Repair`.

Current export version: `v0.85.5b-satzbau-proof-overlay-repair`.

Current gate result: `SATZBAU_PROOF_OVERLAY_REPAIR_ACCEPTED`.

Next required patch: `v0.85.6 - Source Cleanup Batch 1: Internal Labels and Meaning Cues`.

## Purpose

v0.85.5b is a narrow proof and harness repair after v0.85.5a.

It exists because the v0.85.5a screenshot artefacts were invalid: the contact sheet and staged screenshots showed the first-run language gate instead of the target Satzbau proof states. The repaired harness now completes the first-run language gate through the real UI, asserts that the language gate is absent from every staged screenshot, and verifies that each screenshot shows the state named by its filename.

The repaired proof also exposed one real runtime display gap: post-answer Satzbau feedback showed the correct sentence but did not show the learner's attempted sentence. v0.85.5b adds a narrow Satzbau-only post-answer attempt line.

## Implementation Scope

- Repaired `scripts/ozmosis-satzbau-build-line-check.cjs` so it completes the first-run language gate through the real UI before staging screenshots.
- Added screenshot validity assertions for language-gate absence and target-state visibility.
- Regenerated the Satzbau proof screenshots and contact sheet under `docs/qa/screenshots/v0.85.5b-satzbau-proof-overlay-repair/`.
- Added `docs/qa/v0.85.5b_satzbau_proof_overlay_repair_results.json`.
- Added `docs/qa/v0.85.5b_satzbau_proof_overlay_repair.md`.
- Added Satzbau-only post-answer display of `Your attempt` and `Correct sentence`.
- Updated `scripts/ozmosis-runtime-display-contract-check.cjs` so the v0.85.5 runtime display contract gate accepts the v0.85.5b successor.

## Preservation Rules

v0.85.5b preserves:

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
- v0.85.5a visible build-line, secondary manual fallback, and pre-answer answer-leak removal;
- B1-only active scope.

## QA Evidence

- QA report: `docs/qa/v0.85.5b_satzbau_proof_overlay_repair.md`
- Result JSON: `docs/qa/v0.85.5b_satzbau_proof_overlay_repair_results.json`
- Screenshot folder: `docs/qa/screenshots/v0.85.5b-satzbau-proof-overlay-repair/`
- Harness: `scripts/ozmosis-satzbau-build-line-check.cjs`
- Runtime display contract harness: `scripts/ozmosis-runtime-display-contract-check.cjs`

## Required Next Patch

Proceed only to `v0.85.6 - Source Cleanup Batch 1: Internal Labels and Meaning Cues`.

Do not start metadata migration, production completion, classic morphology Satzbauen, v0.86, or broad content-bank rewriting from this patch.
