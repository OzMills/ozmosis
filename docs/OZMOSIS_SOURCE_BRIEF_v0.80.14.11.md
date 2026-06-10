# Ozmosis Source Brief v0.80.14.11

## Current Version

- App version: `v0.80.14.11`
- Export version: `v0.80.14.11-source-preserving-import-wiring-runtime-qa`
- Current README: `README-v0_80_14_11.md`
- Current changelog: `CHANGELOG-v0_80_14_11.txt`
- Current QA report: `docs/qa/v0.80.14.11_source_preserving_import_wiring_runtime_qa.md`

## Scope

v0.80.14.11 is a narrow correction pass after v0.80.14.10. It verifies source preservation and fixes runtime/import wiring, route eligibility, completed-item filtering, encoding, translation/support display safety, repair feedback rendering, and validation gates.

This patch does not rewrite source content. It does not create replacement task rows, a second task set, runtime German generation, runtime morphology, or v0.81 Cases and Articles work.

## Source Preservation

Read-only source packages and CSVs are treated as immutable:

- `OZMOSIS_B1_CAT01-18_FULL_TASK_QUALITY_REWRITE_v0_2_FINAL_RECONCILED.zip`
- `_development-files/v080149_revised_categories/**`
- CAT source CSVs and historical reconciled/QA source packages

The source-preservation manifests are:

- `_development-files/v0801411_source_preservation_manifest_before.csv`
- `_development-files/v0801411_source_preservation_manifest_after.csv`

The v0.80.14.11 gate checked `248` read-only source files and found no changed hashes.

## Runtime Route Policy

Normal imported learner practice remains temporarily limited to route-ready:

- `PRACTICE_FAMILIES`
- `CONTRAST_SETS`

Excluded from normal learner routes:

- `move_to_human_review` rows
- `needsHumanReview` / `reviewFlag` rows
- generic `WORTSCHATZ_BANK` generated multiple-choice rows
- generic `COLLOCATION_BANK` generated multiple-choice rows
- generic `REDEMITTEL_BANK` phrase-choice rows
- CAT18 preview-only rows
- rows with generated prompt/choice artefacts
- rows without task-ready German stimulus
- completed/max-star items in ordinary practice contexts

Excluded rows remain preserved for Dev Tools Review Tests, source/debug views, Review Edit List workflows, and export/import metadata.

## Runtime Result

The v0.80.14.11 browser smoke reports:

- Normal practice eligible: `1691`
- Normal practice excluded: `5302`
- Normal practice selectable: `1691`
- Dev Review Tests eligible: `4951`
- CAT18 preview-only rows: `345`

The row-classification report covers `6969` runtime rows:

- `1667` active normal routeable imported rows
- `2306` Dev Review Tests only rows
- `2645` human-review preserved rows
- `345` preview-only preserved rows
- `6` not-active preserved rows

## Encoding and Renderer Safety

The runtime mojibake scan now hard-fails known corruption markers in `index.html`. Required decoded examples include `Prüfen`, `Könnten`, `zurückrufen`, `Lösung`, `Krankenkasse`, `Bewerbungsgespräch`, and German umlauts / `ß`.

Repair feedback is guarded by renderer logic rather than source edits. Source-bank self-comparison notes are preserved in source content but suppressed when rendered if both arrow sides normalise to the same text.

## Storage and Export

Protected localStorage keys are unchanged:

- `ozmosis_b1_sprint_progress_v1`
- `ozmosis_b1_progress_evidence_v1`

Additive compatible keys remain:

- `ozmosis_b1_path_unlock_overrides_v1`
- `ozmosis_b1_review_edit_queue_v1`

Export metadata reports `v0.80.14.11-source-preserving-import-wiring-runtime-qa`. Older imports remain accepted; no destructive migration is used.

## Deferred

- v0.81 Cases and Articles Completion Pass.
- Manual repair and activation of excluded bank-generated rows.
- CAT18/B2 activation.
- Satzi.
- Genitive expansion.
- Runtime morphology or runtime AI.
- Backend/API/accounts/analytics.
- Broad German task-text rewrite.
