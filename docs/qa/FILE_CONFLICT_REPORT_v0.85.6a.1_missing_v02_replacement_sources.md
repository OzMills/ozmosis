# FILE_CONFLICT_REPORT - v0.85.6a.1 Missing v0.2 Replacement Sources

## Result

The v0.85.6a.1 dry run is blocked. The required v0.2 replacement-source CSV files were not found, so no corrected apply-ready manifest was generated.

## Current Repo Verified

- Repo root checked: `C:\Users\rossm\Documents\German Learning\ozmosis-repo`
- `index.html`: found
- `content/`: found
- `docs/`: found
- `README.md`: found
- `AGENTS.md`: found
- Current app version: `v0.85.6 - Source Cleanup Batch 1: Internal Labels and Meaning Cues`
- Current export version: `v0.85.6-source-cleanup-internal-labels-meaning-cues`
- Protected storage keys present:
  - `ozmosis_b1_sprint_progress_v1`
  - `ozmosis_b1_progress_evidence_v1`

## Required Files Found

- `v0_2_source_rows.normalised.csv`
  - Loose file found at: `C:\Users\rossm\Documents\German Learning\legacy documentation\audits\content-lineage\v0_2_source_rows.normalised.csv`
  - ZIP entry found at: `C:\Users\rossm\Documents\German Learning\legacy documentation\audits\content-lineage\OZMOSIS CONTENT LINEAGE AUDIT.zip::v0_2_source_rows.normalised.csv`

## Required Files Missing

These required replacement/recovery files were not found as loose files or inside searched ZIP archives:

- `ozmosis_v02_vs_v0856_problem_comparison.csv`
- `ozmosis_v02_recovery_samples.csv`
- `ozmosis_v02_source_decision_counts_by_category.csv`
- `ozmosis_v02_source_decision_counts_by_task_type.csv`

The first two files are hard-stop inputs for this prompt.

## Where Searched

- Recursive loose-file search under:
  - `C:\Users\rossm\Documents\German Learning`
- Recursive `rg --files` filename scan under:
  - `C:\Users\rossm\Documents\German Learning`
- Exact ZIP-entry scan across ZIP files under:
  - `C:\Users\rossm\Documents\German Learning`
- Explicit likely archive checks:
  - `C:\Users\rossm\Documents\German Learning\legacy documentation\audits\content-lineage\OZMOSIS CONTENT LINEAGE AUDIT.zip`
  - `C:\Users\rossm\Documents\German Learning\OZMOSIS_TASKS_B1_CAT01-18_FULL_TASK_QUALITY_REWRITE_v0_2_FINAL_RECONCILED.zip`
  - `C:\Users\rossm\Documents\German Learning\ozmosis-repo\ozmosis-v0_85_6a.zip`

## Why the Previous Dry Run Is Incomplete Without Them

The previous dry run could use `current sourceRowId -> v0.2 source_row_id` as a lineage mapping path, but `v0_2_source_rows.normalised.csv` is not enough to prove the correct v0.2 replacement layer. It mostly establishes lineage, source row IDs, and QA/status context.

Without `ozmosis_v02_vs_v0856_problem_comparison.csv`, the dry run cannot verify current-vs-v0.2 learner-facing differences or determine which rows have safe replacement text.

Without `ozmosis_v02_recovery_samples.csv`, the dry run cannot verify known recoverable examples, known visible problem rows, or corrected learner-facing fields for the screenshot/problem rows.

Therefore the previous manifest is not apply-ready, and a corrected apply-ready manifest cannot be produced from the lineage CSV alone.

## Apply Patch Status

No apply patch should be run yet.

Do not implement Core Safe filtering, production isolation, quarantine routing, or v0.2 replacement application until the missing comparison/recovery CSVs are available and inspected.
