# Ozmosis B1-02 to B1-11 Codex Input Package v0.1

Purpose: supply the files referenced by the Codex prompt series for sequential B1-02 through B1-11 app imports.

## What this package contains

```txt
_app_source_reference/
  ozmosis-v0_80_4.zip

docs/
  OZMOSIS_SOURCE_BRIEF_v0.80.4.md
  OZMOSIS_DEVELOPMENT_ROADMAP_v0.80.4.md

docs/Codex Building/workflow/
  ozmosis_b1_m02_m11_codex_prompt_series_v0_1.md
  ozmosis_b1_m02_m12_prompt_pipeline_control_workbook_v0_1.xlsx
  ozmosis_b1_module_pipeline_core_v0_1.md
  ozmosis_b1_m02_m12_spoke_set_cross_spoke_consistency_audit_v0_1.md
  ozmosis_b1_m02_m12_full_staged_content_pipeline_run_v0_1.zip
  ozmosis_b1_m02_m12_prompt_pipeline_execution_outputs_v0_1.zip

docs/Codex Building/b1_m02_m12_pipeline_execution_v0_1/
  Expanded QA / final inventory / schema mapping / import plan files for B1-02 through B1-11
  B1-12 deferred planning update
  final import-plan readiness audit
  execution log

docs/Codex Building/b1_m02_m12_pipeline_execution_v0_1/_staged_pipeline_outputs/
  Expanded staged pipeline outputs and master report
```

## Where to put it

Recommended:

1. Unzip this package into the root of the Codex workspace or local Ozmosis repo.
2. Keep the app source as the real source of truth.
3. Use the files under:

```txt
docs/Codex Building/b1_m02_m12_pipeline_execution_v0_1/
```

for the module-specific planning inputs.

## Running Codex

Start with:

```txt
docs/Codex Building/workflow/ozmosis_b1_m02_m11_codex_prompt_series_v0_1.md
```

Then use the B1-02 implementation prompt first.

Do **not** ask Codex to implement B1-02 through B1-11 in one pass.

## Important exclusions

- Excluded TELC/coursebook/PDF source files deliberately.
- The package contains generated, source-safe planning outputs only, plus the current app package/source briefs.
- Do not commit `_app_source_reference/ozmosis-v0_80_4.zip` to public GitHub unless you intentionally want the full app package stored there.

## Counts

- Expanded execution-output files: 43
- Expanded staged-output files: 12
- Top-level copied source/workflow files: 9
- Missing optional files at package time: 0

## Missing files noted at package time

None.
