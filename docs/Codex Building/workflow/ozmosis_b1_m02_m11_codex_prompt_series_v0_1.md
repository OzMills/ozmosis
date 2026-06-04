# Ozmosis B1-02 to B1-11 — Codex Sequential Implementation Prompt Series v0.1

Purpose: one safe Codex patch per module, starting with B1-02 and stopping for QA before moving on.

Do **not** ask Codex to implement all B1-02 to B1-11 modules in one pass. That would be too much surface area for route registration, content counts, evidence/export safety, visual checks, and regression testing.

The implementation order should be:

```txt
B1-02 → post-Codex QA → fix if needed → package
B1-03 → post-Codex QA → fix if needed → package
B1-04 → post-Codex QA → fix if needed → package
...
B1-11 → post-Codex QA → fix if needed → package
B1-12 stays deferred
```

---

## 0. Where to put files before using Codex

### App source

Use the current app repository or unzip the current app package so Codex sees the actual files.

Required app source:

```txt
repo-root index.html
content/ directory if present
docs/ directory if present
_development-files/ if present
README / CHANGELOG / QA docs if present
```

Current app package/source to use as baseline:

```txt
ozmosis-v0_80_4.zip
OZMOSIS_SOURCE_BRIEF_v0.80.4.md
OZMOSIS_DEVELOPMENT_ROADMAP_v0.80.4.md
```

### Planning/source docs

Unzip this package:

```txt
ozmosis_b1_m02_m12_prompt_pipeline_execution_outputs_v0_1.zip
```

Recommended location inside repo or Codex workspace:

```txt
docs/Codex Building/b1_m02_m12_pipeline_execution_v0_1/
```

For each module, Codex needs the four module files:

```txt
ozmosis_<internalPlanningId>_phase3a_qa_approved_v0_1.md
ozmosis_<internalPlanningId>_final_inventory_v0_1.md
ozmosis_<internalPlanningId>_schema_mapping_v0_1.md
ozmosis_<internalPlanningId>_codex_import_plan_v0_1.md
```

Also include these shared files:

```txt
ozmosis_b1_m02_m11_import_plan_readiness_audit_v0_1.md
ozmosis_b1_m12_b1_review_consolidation_deferred_planning_update_v0_1.md
ozmosis_b1_module_pipeline_core_v0_1.md
ozmosis_b1_m02_m12_spoke_set_cross_spoke_consistency_audit_v0_1.md
ozmosis_b1_m02_m12_full_staged_content_pipeline_run_master_report_v0_1.md
```

### Do not put these in the public repo

Do **not** add TELC/coursebook PDFs, vocabulary PDFs, Aspekte Beruf PDFs, or other copyrighted course material to the public GitHub repo. The generated module files are already source-safe planning outputs. Codex should implement from those, not from textbook PDFs.

---

## 1. How to use the prompts

For each module:

1. Paste the module's Codex implementation prompt into Codex.
2. Wait for Codex output.
3. Upload the returned package/output here.
4. Run the post-Codex QA prompt.
5. If QA fails, run the fix prompt.
6. Only move to the next module after the module is accepted or deliberately parked.

---


## B1-02 — Appointments / callbacks

### Codex implementation prompt — B1-02 / v0.80.5

```markdown
Title: Ozmosis v0.80.5 — Implement B1-02 Appointments / callbacks

Use British English. Be direct, strict, and practical.

You are implementing one narrow Ozmosis app patch.

Patch label:

`v0.80.5 — B1-02 Appointments / callbacks`

This is a single-module implementation task.

Do not redesign the app.
Do not rewrite the app.
Do not add a backend.
Do not add a framework.
Do not add a build step.
Do not add a package manager.
Do not add a database.
Do not add accounts.
Do not add analytics/tracking.
Do not add external API calls.
Do not add runtime AI generation.
Do not add dependencies unless explicitly required and justified.
Do not implement any module except `B1-02`.
Do not implement B1-12 review items.
Do not implement v0.81 unless explicitly instructed.
Do not implement Cases and Articles Completion Pass.
Do not implement Satzi/mascot features.
Do not add Genitive.
Do not add B2 active content.
Do not create runtime grammar generation.
Do not create uncontrolled Madlibs.
Do not randomly combine nouns and verbs.
Do not infer German case/articles dynamically.
Do not import TELC/textbook/coursebook text.
Do not change existing storage keys.
Do not break export/import compatibility.
Do not make mastery/readiness/certification claims.

Your job is to implement the already-approved `B1-02` planning outputs into the current Ozmosis app line as a safe sequential module patch.

---

# 1. Source of truth

Use this hierarchy:

1. Current repo/app files in this Codex task.
2. Current app package/source, expected v0.80.4 or later.
3. `OZMOSIS_SOURCE_BRIEF_v0.80.4.md`
4. `OZMOSIS_DEVELOPMENT_ROADMAP_v0.80.4.md`
5. `ozmosis_b1_m02_appointments_callbacks_codex_import_plan_v0_1.md`
6. `ozmosis_b1_m02_appointments_callbacks_schema_mapping_v0_1.md`
7. `ozmosis_b1_m02_appointments_callbacks_final_inventory_v0_1.md`
8. `ozmosis_b1_m02_appointments_callbacks_phase3a_qa_approved_v0_1.md`
9. `ozmosis_b1_m02_m11_import_plan_readiness_audit_v0_1.md`
10. `ozmosis_b1_m12_b1_review_consolidation_deferred_planning_update_v0_1.md`
11. Pipeline/core/audit docs if available.
12. Older chats/memory only as background.

If implementation files and planning files disagree:
- current app files win for architecture;
- `ozmosis_b1_m02_appointments_callbacks_codex_import_plan_v0_1.md` wins for implementation strategy;
- `ozmosis_b1_m02_appointments_callbacks_schema_mapping_v0_1.md` wins for item metadata;
- `ozmosis_b1_m02_appointments_callbacks_final_inventory_v0_1.md` wins for row counts;
- `ozmosis_b1_m02_appointments_callbacks_phase3a_qa_approved_v0_1.md` wins for approved item text and QA decisions.

Do not use TELC/Beruf/Aspekte/PDF source text as app content.

---

# 2. Required first action: inspect before editing

Before editing anything, inspect the current app source.

Verify:

- app version and current version labelling;
- where `index.html` is;
- whether B1 content is inline or in static content files;
- where B1 module registry/routes live;
- whether `B1-02` already exists as a placeholder;
- how B1-01 content/families are registered;
- how B1 evidence is recorded;
- where export/import is handled;
- where localStorage keys are used;
- whether task renderers support all `B1-02` task types;
- how production/self-marked cards are represented;
- how Today’s B1 Sprint and Diagnostic Sprint sample content;
- existing validation/test scripts.

If source cannot be inspected, stop with:

`BLOCKED_BY_SOURCE_INSPECTION`

---

# 3. Expected planning state

Module:

```txt
moduleId: B1-02
moduleTitle: Appointments / callbacks
internalPlanningId: b1_m02_appointments_callbacks
moduleSlug: appointments-callbacks
clean planned rows: 30
```

Planning files expected:

```txt
ozmosis_b1_m02_appointments_callbacks_phase3a_qa_approved_v0_1.md
ozmosis_b1_m02_appointments_callbacks_final_inventory_v0_1.md
ozmosis_b1_m02_appointments_callbacks_schema_mapping_v0_1.md
ozmosis_b1_m02_appointments_callbacks_codex_import_plan_v0_1.md
```

Do not implement if any required planning file is missing.

If counts differ from the planning files, use the files and document the discrepancy.

---

# 4. Patch goal

Implement `B1-02 — Appointments / callbacks` as a static module/content patch.

Required:

- import the clean rows from `ozmosis_b1_m02_appointments_callbacks_schema_mapping_v0_1.md` / `ozmosis_b1_m02_appointments_callbacks_final_inventory_v0_1.md`;
- preserve all approved item IDs or map them to stable app IDs without losing provenance;
- preserve targetFamilyId and targetId metadata where current app architecture supports it;
- preserve evidenceType;
- preserve production as self-marked only;
- preserve notice/concept cards as excluded from evidence;
- keep supportPolicy/supportPresentation semantics where possible;
- do not import cut/deferred rows if any appear in later files;
- keep `B1-02` out of broad mixed sprints unless current sampling can include it safely.

Recommended first exposure:

```txt
B1-02 module practice route first
```

Do not flood Today’s B1 Sprint or Diagnostic Sprint with the new module in this patch.

---

# 5. Architecture constraints

Preserve:

- static browser app;
- GitHub Pages compatibility;
- repo-root `index.html` unless current repo structure already uses static content modules;
- current dark neon console identity;
- mobile-first layout;
- existing storage keys:
  - `ozmosis_b1_sprint_progress_v1`
  - `ozmosis_b1_progress_evidence_v1`
- export/import compatibility;
- existing B1-01 behaviour;
- existing multiple-choice shuffling;
- German LTR in Arabic UI contexts;
- production self-marking.

No storage-key renaming.

No old-export breakage.

---

# 6. Implementation approach

Use the current app’s existing content conventions.

Expected approach:

```txt
static module records / static approved items / static variant-family-compatible metadata if supported
```

Do not create runtime grammar generation.

If the current app cannot represent one of the mapped task types safely, stop and report the renderer gap rather than inventing a new architecture.

Potential blocker verdicts:

```txt
BLOCKED_BY_SOURCE_INSPECTION
BLOCKED_BY_SOURCE_GAP
BLOCKED_BY_ROUTE_ARCHITECTURE
BLOCKED_BY_RENDERER_GAP
BLOCKED_BY_STORAGE_COMPATIBILITY
BLOCKED_BY_ROW_INTEGRITY
```

---

# 7. Tests Codex must run or explicitly mark blocked

Do not claim tests passed unless actually run.

Required tests:

- syntax/static check;
- content count gate: `30` clean `B1-02` records present;
- duplicate/malformed ID gate;
- route/module registration check;
- `B1-02` route smoke test;
- all imported task types render safely;
- short-answer/cloze grading smoke;
- repair/Satzbau/Umformen smoke if present;
- production card self-marking smoke;
- evidence record includes stable item ID and target/module metadata where current app supports it;
- export/import smoke;
- old-export tolerance smoke if fixture available;
- protected localStorage keys unchanged;
- multiple-choice shuffling regression;
- Arabic UI / German LTR smoke;
- responsive checks if browser available:
  - 320×568
  - 390×844
  - 430×932
  - 768×1024
  - 1365×599
  - 1440×900

Document blocked tests separately.

---

# 8. Documentation / changelog

Create/update docs using current repo conventions.

At minimum, provide a changelog draft for:

`v0.80.5 — B1-02 Appointments / callbacks`

Include:

- added module/content count;
- preserved storage/export;
- task types covered;
- production self-marked;
- tests actually run;
- tests blocked/not run;
- known limitations.

---

# 9. Deliverables

Return:

1. Source inspected
2. Architecture findings
3. Files changed
4. Implementation summary
5. Imported record count
6. Excluded/deferred records
7. Count validation result
8. Evidence/export/import safety result
9. localStorage safety result
10. Route/sampling decision
11. Tests actually run
12. Tests blocked/not run
13. Responsive/visual test status
14. Changelog draft
15. Known limitations
16. Final verdict
17. Modified package/files

Do not claim live GitHub Pages deployment unless actually deployed and tested.

---

# 10. Final verdict

Use exactly one:

- `B1_02_IMPLEMENTED_AND_TESTED`
- `B1_02_IMPLEMENTED_WITH_LIMITED_TESTING`
- `B1_02_IMPLEMENTED_BUT_NEEDS_FIXES`
- `BLOCKED_BY_SOURCE_INSPECTION`
- `BLOCKED_BY_SOURCE_GAP`
- `BLOCKED_BY_ROUTE_ARCHITECTURE`
- `BLOCKED_BY_RENDERER_GAP`
- `BLOCKED_BY_STORAGE_COMPATIBILITY`
- `BLOCKED_BY_ROW_INTEGRITY`
```

### Post-Codex QA prompt for B1-02

```markdown
Title: Ozmosis B1-02 — Post-Codex QA for v0.80.5

Use British English. Be direct, strict, and practical.

Audit the Codex output for `v0.80.5 — B1-02 Appointments / callbacks`.

Do not write app code.
Do not create new content.
Do not approve unrun tests.
Do not assume Codex’s claims are true without inspecting the returned files/report.

Check:

1. Source files changed
2. Implementation scope
3. Imported row count: expected `30`
4. No unrelated modules implemented
5. No B1-12 active review items
6. localStorage keys unchanged
7. export/import compatibility preserved
8. evidence semantics preserved
9. production self-marked only
10. route works
11. task renderers work
12. cut/deferred records absent
13. no copied source text
14. German LTR preserved
15. responsive / visual QA status
16. tests actually run vs claimed

Final verdict:

- `B1_02_PATCH_ACCEPTED`
- `B1_02_PATCH_ACCEPTED_WITH_CAVEATS`
- `B1_02_PATCH_NEEDS_FIXES`
- `B1_02_PATCH_REJECTED`
- `BLOCKED_BY_MISSING_CODEX_OUTPUT`

End with:
- final verdict
- exact next recommended action.
```

### Codex fix prompt if QA fails for B1-02

```markdown
Title: Ozmosis B1-02 — Fix Patch After Post-Codex QA

Use British English. Be direct, strict, and practical.

You are fixing the existing `v0.80.5 — B1-02 Appointments / callbacks` patch.

Do not add new scope.
Do not implement another module.
Do not redesign.
Do not change storage keys.
Do not create new content unless the QA report identifies a direct missing approved record.
Do not claim tests passed unless actually run.

Use:

1. The failed Codex output package.
2. The post-Codex QA report.
3. `ozmosis_b1_m02_appointments_callbacks_codex_import_plan_v0_1.md`
4. `ozmosis_b1_m02_appointments_callbacks_schema_mapping_v0_1.md`
5. `ozmosis_b1_m02_appointments_callbacks_final_inventory_v0_1.md`
6. `ozmosis_b1_m02_appointments_callbacks_phase3a_qa_approved_v0_1.md`
7. Current app files.

Fix only the issues listed in the QA report.

Return:

1. Fix summary
2. Files changed
3. Exact QA issues addressed
4. Tests run
5. Tests still blocked
6. Final verdict

Final verdict:

- `B1_02_FIXED_AND_TESTED`
- `B1_02_FIXED_WITH_LIMITED_TESTING`
- `B1_02_STILL_NEEDS_FIXES`
- `BLOCKED_BY_SOURCE_GAP`
- `BLOCKED_BY_ARCHITECTURE`
```

---

## B1-03 — Job search / offices

### Codex implementation prompt — B1-03 / v0.80.6

```markdown
Title: Ozmosis v0.80.6 — Implement B1-03 Job search / offices

Use British English. Be direct, strict, and practical.

You are implementing one narrow Ozmosis app patch.

Patch label:

`v0.80.6 — B1-03 Job search / offices`

This is a single-module implementation task.

Do not redesign the app.
Do not rewrite the app.
Do not add a backend.
Do not add a framework.
Do not add a build step.
Do not add a package manager.
Do not add a database.
Do not add accounts.
Do not add analytics/tracking.
Do not add external API calls.
Do not add runtime AI generation.
Do not add dependencies unless explicitly required and justified.
Do not implement any module except `B1-03`.
Do not implement B1-12 review items.
Do not implement v0.81 unless explicitly instructed.
Do not implement Cases and Articles Completion Pass.
Do not implement Satzi/mascot features.
Do not add Genitive.
Do not add B2 active content.
Do not create runtime grammar generation.
Do not create uncontrolled Madlibs.
Do not randomly combine nouns and verbs.
Do not infer German case/articles dynamically.
Do not import TELC/textbook/coursebook text.
Do not change existing storage keys.
Do not break export/import compatibility.
Do not make mastery/readiness/certification claims.

Your job is to implement the already-approved `B1-03` planning outputs into the current Ozmosis app line as a safe sequential module patch.

---

# 1. Source of truth

Use this hierarchy:

1. Current repo/app files in this Codex task.
2. Current app package/source, expected v0.80.4 or later.
3. `OZMOSIS_SOURCE_BRIEF_v0.80.4.md`
4. `OZMOSIS_DEVELOPMENT_ROADMAP_v0.80.4.md`
5. `ozmosis_b1_m03_job_search_offices_codex_import_plan_v0_1.md`
6. `ozmosis_b1_m03_job_search_offices_schema_mapping_v0_1.md`
7. `ozmosis_b1_m03_job_search_offices_final_inventory_v0_1.md`
8. `ozmosis_b1_m03_job_search_offices_phase3a_qa_approved_v0_1.md`
9. `ozmosis_b1_m02_m11_import_plan_readiness_audit_v0_1.md`
10. `ozmosis_b1_m12_b1_review_consolidation_deferred_planning_update_v0_1.md`
11. Pipeline/core/audit docs if available.
12. Older chats/memory only as background.

If implementation files and planning files disagree:
- current app files win for architecture;
- `ozmosis_b1_m03_job_search_offices_codex_import_plan_v0_1.md` wins for implementation strategy;
- `ozmosis_b1_m03_job_search_offices_schema_mapping_v0_1.md` wins for item metadata;
- `ozmosis_b1_m03_job_search_offices_final_inventory_v0_1.md` wins for row counts;
- `ozmosis_b1_m03_job_search_offices_phase3a_qa_approved_v0_1.md` wins for approved item text and QA decisions.

Do not use TELC/Beruf/Aspekte/PDF source text as app content.

---

# 2. Required first action: inspect before editing

Before editing anything, inspect the current app source.

Verify:

- app version and current version labelling;
- where `index.html` is;
- whether B1 content is inline or in static content files;
- where B1 module registry/routes live;
- whether `B1-03` already exists as a placeholder;
- how B1-01 content/families are registered;
- how B1 evidence is recorded;
- where export/import is handled;
- where localStorage keys are used;
- whether task renderers support all `B1-03` task types;
- how production/self-marked cards are represented;
- how Today’s B1 Sprint and Diagnostic Sprint sample content;
- existing validation/test scripts.

If source cannot be inspected, stop with:

`BLOCKED_BY_SOURCE_INSPECTION`

---

# 3. Expected planning state

Module:

```txt
moduleId: B1-03
moduleTitle: Job search / offices
internalPlanningId: b1_m03_job_search_offices
moduleSlug: job-search-offices
clean planned rows: 27
```

Planning files expected:

```txt
ozmosis_b1_m03_job_search_offices_phase3a_qa_approved_v0_1.md
ozmosis_b1_m03_job_search_offices_final_inventory_v0_1.md
ozmosis_b1_m03_job_search_offices_schema_mapping_v0_1.md
ozmosis_b1_m03_job_search_offices_codex_import_plan_v0_1.md
```

Do not implement if any required planning file is missing.

If counts differ from the planning files, use the files and document the discrepancy.

---

# 4. Patch goal

Implement `B1-03 — Job search / offices` as a static module/content patch.

Required:

- import the clean rows from `ozmosis_b1_m03_job_search_offices_schema_mapping_v0_1.md` / `ozmosis_b1_m03_job_search_offices_final_inventory_v0_1.md`;
- preserve all approved item IDs or map them to stable app IDs without losing provenance;
- preserve targetFamilyId and targetId metadata where current app architecture supports it;
- preserve evidenceType;
- preserve production as self-marked only;
- preserve notice/concept cards as excluded from evidence;
- keep supportPolicy/supportPresentation semantics where possible;
- do not import cut/deferred rows if any appear in later files;
- keep `B1-03` out of broad mixed sprints unless current sampling can include it safely.

Recommended first exposure:

```txt
B1-03 module practice route first
```

Do not flood Today’s B1 Sprint or Diagnostic Sprint with the new module in this patch.

---

# 5. Architecture constraints

Preserve:

- static browser app;
- GitHub Pages compatibility;
- repo-root `index.html` unless current repo structure already uses static content modules;
- current dark neon console identity;
- mobile-first layout;
- existing storage keys:
  - `ozmosis_b1_sprint_progress_v1`
  - `ozmosis_b1_progress_evidence_v1`
- export/import compatibility;
- existing B1-01 behaviour;
- existing multiple-choice shuffling;
- German LTR in Arabic UI contexts;
- production self-marking.

No storage-key renaming.

No old-export breakage.

---

# 6. Implementation approach

Use the current app’s existing content conventions.

Expected approach:

```txt
static module records / static approved items / static variant-family-compatible metadata if supported
```

Do not create runtime grammar generation.

If the current app cannot represent one of the mapped task types safely, stop and report the renderer gap rather than inventing a new architecture.

Potential blocker verdicts:

```txt
BLOCKED_BY_SOURCE_INSPECTION
BLOCKED_BY_SOURCE_GAP
BLOCKED_BY_ROUTE_ARCHITECTURE
BLOCKED_BY_RENDERER_GAP
BLOCKED_BY_STORAGE_COMPATIBILITY
BLOCKED_BY_ROW_INTEGRITY
```

---

# 7. Tests Codex must run or explicitly mark blocked

Do not claim tests passed unless actually run.

Required tests:

- syntax/static check;
- content count gate: `27` clean `B1-03` records present;
- duplicate/malformed ID gate;
- route/module registration check;
- `B1-03` route smoke test;
- all imported task types render safely;
- short-answer/cloze grading smoke;
- repair/Satzbau/Umformen smoke if present;
- production card self-marking smoke;
- evidence record includes stable item ID and target/module metadata where current app supports it;
- export/import smoke;
- old-export tolerance smoke if fixture available;
- protected localStorage keys unchanged;
- multiple-choice shuffling regression;
- Arabic UI / German LTR smoke;
- responsive checks if browser available:
  - 320×568
  - 390×844
  - 430×932
  - 768×1024
  - 1365×599
  - 1440×900

Document blocked tests separately.

---

# 8. Documentation / changelog

Create/update docs using current repo conventions.

At minimum, provide a changelog draft for:

`v0.80.6 — B1-03 Job search / offices`

Include:

- added module/content count;
- preserved storage/export;
- task types covered;
- production self-marked;
- tests actually run;
- tests blocked/not run;
- known limitations.

---

# 9. Deliverables

Return:

1. Source inspected
2. Architecture findings
3. Files changed
4. Implementation summary
5. Imported record count
6. Excluded/deferred records
7. Count validation result
8. Evidence/export/import safety result
9. localStorage safety result
10. Route/sampling decision
11. Tests actually run
12. Tests blocked/not run
13. Responsive/visual test status
14. Changelog draft
15. Known limitations
16. Final verdict
17. Modified package/files

Do not claim live GitHub Pages deployment unless actually deployed and tested.

---

# 10. Final verdict

Use exactly one:

- `B1_03_IMPLEMENTED_AND_TESTED`
- `B1_03_IMPLEMENTED_WITH_LIMITED_TESTING`
- `B1_03_IMPLEMENTED_BUT_NEEDS_FIXES`
- `BLOCKED_BY_SOURCE_INSPECTION`
- `BLOCKED_BY_SOURCE_GAP`
- `BLOCKED_BY_ROUTE_ARCHITECTURE`
- `BLOCKED_BY_RENDERER_GAP`
- `BLOCKED_BY_STORAGE_COMPATIBILITY`
- `BLOCKED_BY_ROW_INTEGRITY`
```

### Post-Codex QA prompt for B1-03

```markdown
Title: Ozmosis B1-03 — Post-Codex QA for v0.80.6

Use British English. Be direct, strict, and practical.

Audit the Codex output for `v0.80.6 — B1-03 Job search / offices`.

Do not write app code.
Do not create new content.
Do not approve unrun tests.
Do not assume Codex’s claims are true without inspecting the returned files/report.

Check:

1. Source files changed
2. Implementation scope
3. Imported row count: expected `27`
4. No unrelated modules implemented
5. No B1-12 active review items
6. localStorage keys unchanged
7. export/import compatibility preserved
8. evidence semantics preserved
9. production self-marked only
10. route works
11. task renderers work
12. cut/deferred records absent
13. no copied source text
14. German LTR preserved
15. responsive / visual QA status
16. tests actually run vs claimed

Final verdict:

- `B1_03_PATCH_ACCEPTED`
- `B1_03_PATCH_ACCEPTED_WITH_CAVEATS`
- `B1_03_PATCH_NEEDS_FIXES`
- `B1_03_PATCH_REJECTED`
- `BLOCKED_BY_MISSING_CODEX_OUTPUT`

End with:
- final verdict
- exact next recommended action.
```

### Codex fix prompt if QA fails for B1-03

```markdown
Title: Ozmosis B1-03 — Fix Patch After Post-Codex QA

Use British English. Be direct, strict, and practical.

You are fixing the existing `v0.80.6 — B1-03 Job search / offices` patch.

Do not add new scope.
Do not implement another module.
Do not redesign.
Do not change storage keys.
Do not create new content unless the QA report identifies a direct missing approved record.
Do not claim tests passed unless actually run.

Use:

1. The failed Codex output package.
2. The post-Codex QA report.
3. `ozmosis_b1_m03_job_search_offices_codex_import_plan_v0_1.md`
4. `ozmosis_b1_m03_job_search_offices_schema_mapping_v0_1.md`
5. `ozmosis_b1_m03_job_search_offices_final_inventory_v0_1.md`
6. `ozmosis_b1_m03_job_search_offices_phase3a_qa_approved_v0_1.md`
7. Current app files.

Fix only the issues listed in the QA report.

Return:

1. Fix summary
2. Files changed
3. Exact QA issues addressed
4. Tests run
5. Tests still blocked
6. Final verdict

Final verdict:

- `B1_03_FIXED_AND_TESTED`
- `B1_03_FIXED_WITH_LIMITED_TESTING`
- `B1_03_STILL_NEEDS_FIXES`
- `BLOCKED_BY_SOURCE_GAP`
- `BLOCKED_BY_ARCHITECTURE`
```

---

## B1-04 — Applications

### Codex implementation prompt — B1-04 / v0.80.7

```markdown
Title: Ozmosis v0.80.7 — Implement B1-04 Applications

Use British English. Be direct, strict, and practical.

You are implementing one narrow Ozmosis app patch.

Patch label:

`v0.80.7 — B1-04 Applications`

This is a single-module implementation task.

Do not redesign the app.
Do not rewrite the app.
Do not add a backend.
Do not add a framework.
Do not add a build step.
Do not add a package manager.
Do not add a database.
Do not add accounts.
Do not add analytics/tracking.
Do not add external API calls.
Do not add runtime AI generation.
Do not add dependencies unless explicitly required and justified.
Do not implement any module except `B1-04`.
Do not implement B1-12 review items.
Do not implement v0.81 unless explicitly instructed.
Do not implement Cases and Articles Completion Pass.
Do not implement Satzi/mascot features.
Do not add Genitive.
Do not add B2 active content.
Do not create runtime grammar generation.
Do not create uncontrolled Madlibs.
Do not randomly combine nouns and verbs.
Do not infer German case/articles dynamically.
Do not import TELC/textbook/coursebook text.
Do not change existing storage keys.
Do not break export/import compatibility.
Do not make mastery/readiness/certification claims.

Your job is to implement the already-approved `B1-04` planning outputs into the current Ozmosis app line as a safe sequential module patch.

---

# 1. Source of truth

Use this hierarchy:

1. Current repo/app files in this Codex task.
2. Current app package/source, expected v0.80.4 or later.
3. `OZMOSIS_SOURCE_BRIEF_v0.80.4.md`
4. `OZMOSIS_DEVELOPMENT_ROADMAP_v0.80.4.md`
5. `ozmosis_b1_m04_applications_codex_import_plan_v0_1.md`
6. `ozmosis_b1_m04_applications_schema_mapping_v0_1.md`
7. `ozmosis_b1_m04_applications_final_inventory_v0_1.md`
8. `ozmosis_b1_m04_applications_phase3a_qa_approved_v0_1.md`
9. `ozmosis_b1_m02_m11_import_plan_readiness_audit_v0_1.md`
10. `ozmosis_b1_m12_b1_review_consolidation_deferred_planning_update_v0_1.md`
11. Pipeline/core/audit docs if available.
12. Older chats/memory only as background.

If implementation files and planning files disagree:
- current app files win for architecture;
- `ozmosis_b1_m04_applications_codex_import_plan_v0_1.md` wins for implementation strategy;
- `ozmosis_b1_m04_applications_schema_mapping_v0_1.md` wins for item metadata;
- `ozmosis_b1_m04_applications_final_inventory_v0_1.md` wins for row counts;
- `ozmosis_b1_m04_applications_phase3a_qa_approved_v0_1.md` wins for approved item text and QA decisions.

Do not use TELC/Beruf/Aspekte/PDF source text as app content.

---

# 2. Required first action: inspect before editing

Before editing anything, inspect the current app source.

Verify:

- app version and current version labelling;
- where `index.html` is;
- whether B1 content is inline or in static content files;
- where B1 module registry/routes live;
- whether `B1-04` already exists as a placeholder;
- how B1-01 content/families are registered;
- how B1 evidence is recorded;
- where export/import is handled;
- where localStorage keys are used;
- whether task renderers support all `B1-04` task types;
- how production/self-marked cards are represented;
- how Today’s B1 Sprint and Diagnostic Sprint sample content;
- existing validation/test scripts.

If source cannot be inspected, stop with:

`BLOCKED_BY_SOURCE_INSPECTION`

---

# 3. Expected planning state

Module:

```txt
moduleId: B1-04
moduleTitle: Applications
internalPlanningId: b1_m04_applications
moduleSlug: applications
clean planned rows: 26
```

Planning files expected:

```txt
ozmosis_b1_m04_applications_phase3a_qa_approved_v0_1.md
ozmosis_b1_m04_applications_final_inventory_v0_1.md
ozmosis_b1_m04_applications_schema_mapping_v0_1.md
ozmosis_b1_m04_applications_codex_import_plan_v0_1.md
```

Do not implement if any required planning file is missing.

If counts differ from the planning files, use the files and document the discrepancy.

---

# 4. Patch goal

Implement `B1-04 — Applications` as a static module/content patch.

Required:

- import the clean rows from `ozmosis_b1_m04_applications_schema_mapping_v0_1.md` / `ozmosis_b1_m04_applications_final_inventory_v0_1.md`;
- preserve all approved item IDs or map them to stable app IDs without losing provenance;
- preserve targetFamilyId and targetId metadata where current app architecture supports it;
- preserve evidenceType;
- preserve production as self-marked only;
- preserve notice/concept cards as excluded from evidence;
- keep supportPolicy/supportPresentation semantics where possible;
- do not import cut/deferred rows if any appear in later files;
- keep `B1-04` out of broad mixed sprints unless current sampling can include it safely.

Recommended first exposure:

```txt
B1-04 module practice route first
```

Do not flood Today’s B1 Sprint or Diagnostic Sprint with the new module in this patch.

---

# 5. Architecture constraints

Preserve:

- static browser app;
- GitHub Pages compatibility;
- repo-root `index.html` unless current repo structure already uses static content modules;
- current dark neon console identity;
- mobile-first layout;
- existing storage keys:
  - `ozmosis_b1_sprint_progress_v1`
  - `ozmosis_b1_progress_evidence_v1`
- export/import compatibility;
- existing B1-01 behaviour;
- existing multiple-choice shuffling;
- German LTR in Arabic UI contexts;
- production self-marking.

No storage-key renaming.

No old-export breakage.

---

# 6. Implementation approach

Use the current app’s existing content conventions.

Expected approach:

```txt
static module records / static approved items / static variant-family-compatible metadata if supported
```

Do not create runtime grammar generation.

If the current app cannot represent one of the mapped task types safely, stop and report the renderer gap rather than inventing a new architecture.

Potential blocker verdicts:

```txt
BLOCKED_BY_SOURCE_INSPECTION
BLOCKED_BY_SOURCE_GAP
BLOCKED_BY_ROUTE_ARCHITECTURE
BLOCKED_BY_RENDERER_GAP
BLOCKED_BY_STORAGE_COMPATIBILITY
BLOCKED_BY_ROW_INTEGRITY
```

---

# 7. Tests Codex must run or explicitly mark blocked

Do not claim tests passed unless actually run.

Required tests:

- syntax/static check;
- content count gate: `26` clean `B1-04` records present;
- duplicate/malformed ID gate;
- route/module registration check;
- `B1-04` route smoke test;
- all imported task types render safely;
- short-answer/cloze grading smoke;
- repair/Satzbau/Umformen smoke if present;
- production card self-marking smoke;
- evidence record includes stable item ID and target/module metadata where current app supports it;
- export/import smoke;
- old-export tolerance smoke if fixture available;
- protected localStorage keys unchanged;
- multiple-choice shuffling regression;
- Arabic UI / German LTR smoke;
- responsive checks if browser available:
  - 320×568
  - 390×844
  - 430×932
  - 768×1024
  - 1365×599
  - 1440×900

Document blocked tests separately.

---

# 8. Documentation / changelog

Create/update docs using current repo conventions.

At minimum, provide a changelog draft for:

`v0.80.7 — B1-04 Applications`

Include:

- added module/content count;
- preserved storage/export;
- task types covered;
- production self-marked;
- tests actually run;
- tests blocked/not run;
- known limitations.

---

# 9. Deliverables

Return:

1. Source inspected
2. Architecture findings
3. Files changed
4. Implementation summary
5. Imported record count
6. Excluded/deferred records
7. Count validation result
8. Evidence/export/import safety result
9. localStorage safety result
10. Route/sampling decision
11. Tests actually run
12. Tests blocked/not run
13. Responsive/visual test status
14. Changelog draft
15. Known limitations
16. Final verdict
17. Modified package/files

Do not claim live GitHub Pages deployment unless actually deployed and tested.

---

# 10. Final verdict

Use exactly one:

- `B1_04_IMPLEMENTED_AND_TESTED`
- `B1_04_IMPLEMENTED_WITH_LIMITED_TESTING`
- `B1_04_IMPLEMENTED_BUT_NEEDS_FIXES`
- `BLOCKED_BY_SOURCE_INSPECTION`
- `BLOCKED_BY_SOURCE_GAP`
- `BLOCKED_BY_ROUTE_ARCHITECTURE`
- `BLOCKED_BY_RENDERER_GAP`
- `BLOCKED_BY_STORAGE_COMPATIBILITY`
- `BLOCKED_BY_ROW_INTEGRITY`
```

### Post-Codex QA prompt for B1-04

```markdown
Title: Ozmosis B1-04 — Post-Codex QA for v0.80.7

Use British English. Be direct, strict, and practical.

Audit the Codex output for `v0.80.7 — B1-04 Applications`.

Do not write app code.
Do not create new content.
Do not approve unrun tests.
Do not assume Codex’s claims are true without inspecting the returned files/report.

Check:

1. Source files changed
2. Implementation scope
3. Imported row count: expected `26`
4. No unrelated modules implemented
5. No B1-12 active review items
6. localStorage keys unchanged
7. export/import compatibility preserved
8. evidence semantics preserved
9. production self-marked only
10. route works
11. task renderers work
12. cut/deferred records absent
13. no copied source text
14. German LTR preserved
15. responsive / visual QA status
16. tests actually run vs claimed

Final verdict:

- `B1_04_PATCH_ACCEPTED`
- `B1_04_PATCH_ACCEPTED_WITH_CAVEATS`
- `B1_04_PATCH_NEEDS_FIXES`
- `B1_04_PATCH_REJECTED`
- `BLOCKED_BY_MISSING_CODEX_OUTPUT`

End with:
- final verdict
- exact next recommended action.
```

### Codex fix prompt if QA fails for B1-04

```markdown
Title: Ozmosis B1-04 — Fix Patch After Post-Codex QA

Use British English. Be direct, strict, and practical.

You are fixing the existing `v0.80.7 — B1-04 Applications` patch.

Do not add new scope.
Do not implement another module.
Do not redesign.
Do not change storage keys.
Do not create new content unless the QA report identifies a direct missing approved record.
Do not claim tests passed unless actually run.

Use:

1. The failed Codex output package.
2. The post-Codex QA report.
3. `ozmosis_b1_m04_applications_codex_import_plan_v0_1.md`
4. `ozmosis_b1_m04_applications_schema_mapping_v0_1.md`
5. `ozmosis_b1_m04_applications_final_inventory_v0_1.md`
6. `ozmosis_b1_m04_applications_phase3a_qa_approved_v0_1.md`
7. Current app files.

Fix only the issues listed in the QA report.

Return:

1. Fix summary
2. Files changed
3. Exact QA issues addressed
4. Tests run
5. Tests still blocked
6. Final verdict

Final verdict:

- `B1_04_FIXED_AND_TESTED`
- `B1_04_FIXED_WITH_LIMITED_TESTING`
- `B1_04_STILL_NEEDS_FIXES`
- `BLOCKED_BY_SOURCE_GAP`
- `BLOCKED_BY_ARCHITECTURE`
```

---

## B1-05 — First day / contract basics

### Codex implementation prompt — B1-05 / v0.80.8

```markdown
Title: Ozmosis v0.80.8 — Implement B1-05 First day / contract basics

Use British English. Be direct, strict, and practical.

You are implementing one narrow Ozmosis app patch.

Patch label:

`v0.80.8 — B1-05 First day / contract basics`

This is a single-module implementation task.

Do not redesign the app.
Do not rewrite the app.
Do not add a backend.
Do not add a framework.
Do not add a build step.
Do not add a package manager.
Do not add a database.
Do not add accounts.
Do not add analytics/tracking.
Do not add external API calls.
Do not add runtime AI generation.
Do not add dependencies unless explicitly required and justified.
Do not implement any module except `B1-05`.
Do not implement B1-12 review items.
Do not implement v0.81 unless explicitly instructed.
Do not implement Cases and Articles Completion Pass.
Do not implement Satzi/mascot features.
Do not add Genitive.
Do not add B2 active content.
Do not create runtime grammar generation.
Do not create uncontrolled Madlibs.
Do not randomly combine nouns and verbs.
Do not infer German case/articles dynamically.
Do not import TELC/textbook/coursebook text.
Do not change existing storage keys.
Do not break export/import compatibility.
Do not make mastery/readiness/certification claims.

Your job is to implement the already-approved `B1-05` planning outputs into the current Ozmosis app line as a safe sequential module patch.

---

# 1. Source of truth

Use this hierarchy:

1. Current repo/app files in this Codex task.
2. Current app package/source, expected v0.80.4 or later.
3. `OZMOSIS_SOURCE_BRIEF_v0.80.4.md`
4. `OZMOSIS_DEVELOPMENT_ROADMAP_v0.80.4.md`
5. `ozmosis_b1_m05_first_day_contract_basics_codex_import_plan_v0_1.md`
6. `ozmosis_b1_m05_first_day_contract_basics_schema_mapping_v0_1.md`
7. `ozmosis_b1_m05_first_day_contract_basics_final_inventory_v0_1.md`
8. `ozmosis_b1_m05_first_day_contract_basics_phase3a_qa_approved_v0_1.md`
9. `ozmosis_b1_m02_m11_import_plan_readiness_audit_v0_1.md`
10. `ozmosis_b1_m12_b1_review_consolidation_deferred_planning_update_v0_1.md`
11. Pipeline/core/audit docs if available.
12. Older chats/memory only as background.

If implementation files and planning files disagree:
- current app files win for architecture;
- `ozmosis_b1_m05_first_day_contract_basics_codex_import_plan_v0_1.md` wins for implementation strategy;
- `ozmosis_b1_m05_first_day_contract_basics_schema_mapping_v0_1.md` wins for item metadata;
- `ozmosis_b1_m05_first_day_contract_basics_final_inventory_v0_1.md` wins for row counts;
- `ozmosis_b1_m05_first_day_contract_basics_phase3a_qa_approved_v0_1.md` wins for approved item text and QA decisions.

Do not use TELC/Beruf/Aspekte/PDF source text as app content.

---

# 2. Required first action: inspect before editing

Before editing anything, inspect the current app source.

Verify:

- app version and current version labelling;
- where `index.html` is;
- whether B1 content is inline or in static content files;
- where B1 module registry/routes live;
- whether `B1-05` already exists as a placeholder;
- how B1-01 content/families are registered;
- how B1 evidence is recorded;
- where export/import is handled;
- where localStorage keys are used;
- whether task renderers support all `B1-05` task types;
- how production/self-marked cards are represented;
- how Today’s B1 Sprint and Diagnostic Sprint sample content;
- existing validation/test scripts.

If source cannot be inspected, stop with:

`BLOCKED_BY_SOURCE_INSPECTION`

---

# 3. Expected planning state

Module:

```txt
moduleId: B1-05
moduleTitle: First day / contract basics
internalPlanningId: b1_m05_first_day_contract_basics
moduleSlug: first-day-contract-basics
clean planned rows: 20
```

Planning files expected:

```txt
ozmosis_b1_m05_first_day_contract_basics_phase3a_qa_approved_v0_1.md
ozmosis_b1_m05_first_day_contract_basics_final_inventory_v0_1.md
ozmosis_b1_m05_first_day_contract_basics_schema_mapping_v0_1.md
ozmosis_b1_m05_first_day_contract_basics_codex_import_plan_v0_1.md
```

Do not implement if any required planning file is missing.

If counts differ from the planning files, use the files and document the discrepancy.

---

# 4. Patch goal

Implement `B1-05 — First day / contract basics` as a static module/content patch.

Required:

- import the clean rows from `ozmosis_b1_m05_first_day_contract_basics_schema_mapping_v0_1.md` / `ozmosis_b1_m05_first_day_contract_basics_final_inventory_v0_1.md`;
- preserve all approved item IDs or map them to stable app IDs without losing provenance;
- preserve targetFamilyId and targetId metadata where current app architecture supports it;
- preserve evidenceType;
- preserve production as self-marked only;
- preserve notice/concept cards as excluded from evidence;
- keep supportPolicy/supportPresentation semantics where possible;
- do not import cut/deferred rows if any appear in later files;
- keep `B1-05` out of broad mixed sprints unless current sampling can include it safely.

Recommended first exposure:

```txt
B1-05 module practice route first
```

Do not flood Today’s B1 Sprint or Diagnostic Sprint with the new module in this patch.

---

# 5. Architecture constraints

Preserve:

- static browser app;
- GitHub Pages compatibility;
- repo-root `index.html` unless current repo structure already uses static content modules;
- current dark neon console identity;
- mobile-first layout;
- existing storage keys:
  - `ozmosis_b1_sprint_progress_v1`
  - `ozmosis_b1_progress_evidence_v1`
- export/import compatibility;
- existing B1-01 behaviour;
- existing multiple-choice shuffling;
- German LTR in Arabic UI contexts;
- production self-marking.

No storage-key renaming.

No old-export breakage.

---

# 6. Implementation approach

Use the current app’s existing content conventions.

Expected approach:

```txt
static module records / static approved items / static variant-family-compatible metadata if supported
```

Do not create runtime grammar generation.

If the current app cannot represent one of the mapped task types safely, stop and report the renderer gap rather than inventing a new architecture.

Potential blocker verdicts:

```txt
BLOCKED_BY_SOURCE_INSPECTION
BLOCKED_BY_SOURCE_GAP
BLOCKED_BY_ROUTE_ARCHITECTURE
BLOCKED_BY_RENDERER_GAP
BLOCKED_BY_STORAGE_COMPATIBILITY
BLOCKED_BY_ROW_INTEGRITY
```

---

# 7. Tests Codex must run or explicitly mark blocked

Do not claim tests passed unless actually run.

Required tests:

- syntax/static check;
- content count gate: `20` clean `B1-05` records present;
- duplicate/malformed ID gate;
- route/module registration check;
- `B1-05` route smoke test;
- all imported task types render safely;
- short-answer/cloze grading smoke;
- repair/Satzbau/Umformen smoke if present;
- production card self-marking smoke;
- evidence record includes stable item ID and target/module metadata where current app supports it;
- export/import smoke;
- old-export tolerance smoke if fixture available;
- protected localStorage keys unchanged;
- multiple-choice shuffling regression;
- Arabic UI / German LTR smoke;
- responsive checks if browser available:
  - 320×568
  - 390×844
  - 430×932
  - 768×1024
  - 1365×599
  - 1440×900

Document blocked tests separately.

---

# 8. Documentation / changelog

Create/update docs using current repo conventions.

At minimum, provide a changelog draft for:

`v0.80.8 — B1-05 First day / contract basics`

Include:

- added module/content count;
- preserved storage/export;
- task types covered;
- production self-marked;
- tests actually run;
- tests blocked/not run;
- known limitations.

---

# 9. Deliverables

Return:

1. Source inspected
2. Architecture findings
3. Files changed
4. Implementation summary
5. Imported record count
6. Excluded/deferred records
7. Count validation result
8. Evidence/export/import safety result
9. localStorage safety result
10. Route/sampling decision
11. Tests actually run
12. Tests blocked/not run
13. Responsive/visual test status
14. Changelog draft
15. Known limitations
16. Final verdict
17. Modified package/files

Do not claim live GitHub Pages deployment unless actually deployed and tested.

---

# 10. Final verdict

Use exactly one:

- `B1_05_IMPLEMENTED_AND_TESTED`
- `B1_05_IMPLEMENTED_WITH_LIMITED_TESTING`
- `B1_05_IMPLEMENTED_BUT_NEEDS_FIXES`
- `BLOCKED_BY_SOURCE_INSPECTION`
- `BLOCKED_BY_SOURCE_GAP`
- `BLOCKED_BY_ROUTE_ARCHITECTURE`
- `BLOCKED_BY_RENDERER_GAP`
- `BLOCKED_BY_STORAGE_COMPATIBILITY`
- `BLOCKED_BY_ROW_INTEGRITY`
```

### Post-Codex QA prompt for B1-05

```markdown
Title: Ozmosis B1-05 — Post-Codex QA for v0.80.8

Use British English. Be direct, strict, and practical.

Audit the Codex output for `v0.80.8 — B1-05 First day / contract basics`.

Do not write app code.
Do not create new content.
Do not approve unrun tests.
Do not assume Codex’s claims are true without inspecting the returned files/report.

Check:

1. Source files changed
2. Implementation scope
3. Imported row count: expected `20`
4. No unrelated modules implemented
5. No B1-12 active review items
6. localStorage keys unchanged
7. export/import compatibility preserved
8. evidence semantics preserved
9. production self-marked only
10. route works
11. task renderers work
12. cut/deferred records absent
13. no copied source text
14. German LTR preserved
15. responsive / visual QA status
16. tests actually run vs claimed

Final verdict:

- `B1_05_PATCH_ACCEPTED`
- `B1_05_PATCH_ACCEPTED_WITH_CAVEATS`
- `B1_05_PATCH_NEEDS_FIXES`
- `B1_05_PATCH_REJECTED`
- `BLOCKED_BY_MISSING_CODEX_OUTPUT`

End with:
- final verdict
- exact next recommended action.
```

### Codex fix prompt if QA fails for B1-05

```markdown
Title: Ozmosis B1-05 — Fix Patch After Post-Codex QA

Use British English. Be direct, strict, and practical.

You are fixing the existing `v0.80.8 — B1-05 First day / contract basics` patch.

Do not add new scope.
Do not implement another module.
Do not redesign.
Do not change storage keys.
Do not create new content unless the QA report identifies a direct missing approved record.
Do not claim tests passed unless actually run.

Use:

1. The failed Codex output package.
2. The post-Codex QA report.
3. `ozmosis_b1_m05_first_day_contract_basics_codex_import_plan_v0_1.md`
4. `ozmosis_b1_m05_first_day_contract_basics_schema_mapping_v0_1.md`
5. `ozmosis_b1_m05_first_day_contract_basics_final_inventory_v0_1.md`
6. `ozmosis_b1_m05_first_day_contract_basics_phase3a_qa_approved_v0_1.md`
7. Current app files.

Fix only the issues listed in the QA report.

Return:

1. Fix summary
2. Files changed
3. Exact QA issues addressed
4. Tests run
5. Tests still blocked
6. Final verdict

Final verdict:

- `B1_05_FIXED_AND_TESTED`
- `B1_05_FIXED_WITH_LIMITED_TESTING`
- `B1_05_STILL_NEEDS_FIXES`
- `BLOCKED_BY_SOURCE_GAP`
- `BLOCKED_BY_ARCHITECTURE`
```

---

## B1-06 — Sick leave

### Codex implementation prompt — B1-06 / v0.80.9

```markdown
Title: Ozmosis v0.80.9 — Implement B1-06 Sick leave

Use British English. Be direct, strict, and practical.

You are implementing one narrow Ozmosis app patch.

Patch label:

`v0.80.9 — B1-06 Sick leave`

This is a single-module implementation task.

Do not redesign the app.
Do not rewrite the app.
Do not add a backend.
Do not add a framework.
Do not add a build step.
Do not add a package manager.
Do not add a database.
Do not add accounts.
Do not add analytics/tracking.
Do not add external API calls.
Do not add runtime AI generation.
Do not add dependencies unless explicitly required and justified.
Do not implement any module except `B1-06`.
Do not implement B1-12 review items.
Do not implement v0.81 unless explicitly instructed.
Do not implement Cases and Articles Completion Pass.
Do not implement Satzi/mascot features.
Do not add Genitive.
Do not add B2 active content.
Do not create runtime grammar generation.
Do not create uncontrolled Madlibs.
Do not randomly combine nouns and verbs.
Do not infer German case/articles dynamically.
Do not import TELC/textbook/coursebook text.
Do not change existing storage keys.
Do not break export/import compatibility.
Do not make mastery/readiness/certification claims.

Your job is to implement the already-approved `B1-06` planning outputs into the current Ozmosis app line as a safe sequential module patch.

---

# 1. Source of truth

Use this hierarchy:

1. Current repo/app files in this Codex task.
2. Current app package/source, expected v0.80.4 or later.
3. `OZMOSIS_SOURCE_BRIEF_v0.80.4.md`
4. `OZMOSIS_DEVELOPMENT_ROADMAP_v0.80.4.md`
5. `ozmosis_b1_m06_sick_leave_codex_import_plan_v0_1.md`
6. `ozmosis_b1_m06_sick_leave_schema_mapping_v0_1.md`
7. `ozmosis_b1_m06_sick_leave_final_inventory_v0_1.md`
8. `ozmosis_b1_m06_sick_leave_phase3a_qa_approved_v0_1.md`
9. `ozmosis_b1_m02_m11_import_plan_readiness_audit_v0_1.md`
10. `ozmosis_b1_m12_b1_review_consolidation_deferred_planning_update_v0_1.md`
11. Pipeline/core/audit docs if available.
12. Older chats/memory only as background.

If implementation files and planning files disagree:
- current app files win for architecture;
- `ozmosis_b1_m06_sick_leave_codex_import_plan_v0_1.md` wins for implementation strategy;
- `ozmosis_b1_m06_sick_leave_schema_mapping_v0_1.md` wins for item metadata;
- `ozmosis_b1_m06_sick_leave_final_inventory_v0_1.md` wins for row counts;
- `ozmosis_b1_m06_sick_leave_phase3a_qa_approved_v0_1.md` wins for approved item text and QA decisions.

Do not use TELC/Beruf/Aspekte/PDF source text as app content.

---

# 2. Required first action: inspect before editing

Before editing anything, inspect the current app source.

Verify:

- app version and current version labelling;
- where `index.html` is;
- whether B1 content is inline or in static content files;
- where B1 module registry/routes live;
- whether `B1-06` already exists as a placeholder;
- how B1-01 content/families are registered;
- how B1 evidence is recorded;
- where export/import is handled;
- where localStorage keys are used;
- whether task renderers support all `B1-06` task types;
- how production/self-marked cards are represented;
- how Today’s B1 Sprint and Diagnostic Sprint sample content;
- existing validation/test scripts.

If source cannot be inspected, stop with:

`BLOCKED_BY_SOURCE_INSPECTION`

---

# 3. Expected planning state

Module:

```txt
moduleId: B1-06
moduleTitle: Sick leave
internalPlanningId: b1_m06_sick_leave
moduleSlug: sick-leave
clean planned rows: 20
```

Planning files expected:

```txt
ozmosis_b1_m06_sick_leave_phase3a_qa_approved_v0_1.md
ozmosis_b1_m06_sick_leave_final_inventory_v0_1.md
ozmosis_b1_m06_sick_leave_schema_mapping_v0_1.md
ozmosis_b1_m06_sick_leave_codex_import_plan_v0_1.md
```

Do not implement if any required planning file is missing.

If counts differ from the planning files, use the files and document the discrepancy.

---

# 4. Patch goal

Implement `B1-06 — Sick leave` as a static module/content patch.

Required:

- import the clean rows from `ozmosis_b1_m06_sick_leave_schema_mapping_v0_1.md` / `ozmosis_b1_m06_sick_leave_final_inventory_v0_1.md`;
- preserve all approved item IDs or map them to stable app IDs without losing provenance;
- preserve targetFamilyId and targetId metadata where current app architecture supports it;
- preserve evidenceType;
- preserve production as self-marked only;
- preserve notice/concept cards as excluded from evidence;
- keep supportPolicy/supportPresentation semantics where possible;
- do not import cut/deferred rows if any appear in later files;
- keep `B1-06` out of broad mixed sprints unless current sampling can include it safely.

Recommended first exposure:

```txt
B1-06 module practice route first
```

Do not flood Today’s B1 Sprint or Diagnostic Sprint with the new module in this patch.

---

# 5. Architecture constraints

Preserve:

- static browser app;
- GitHub Pages compatibility;
- repo-root `index.html` unless current repo structure already uses static content modules;
- current dark neon console identity;
- mobile-first layout;
- existing storage keys:
  - `ozmosis_b1_sprint_progress_v1`
  - `ozmosis_b1_progress_evidence_v1`
- export/import compatibility;
- existing B1-01 behaviour;
- existing multiple-choice shuffling;
- German LTR in Arabic UI contexts;
- production self-marking.

No storage-key renaming.

No old-export breakage.

---

# 6. Implementation approach

Use the current app’s existing content conventions.

Expected approach:

```txt
static module records / static approved items / static variant-family-compatible metadata if supported
```

Do not create runtime grammar generation.

If the current app cannot represent one of the mapped task types safely, stop and report the renderer gap rather than inventing a new architecture.

Potential blocker verdicts:

```txt
BLOCKED_BY_SOURCE_INSPECTION
BLOCKED_BY_SOURCE_GAP
BLOCKED_BY_ROUTE_ARCHITECTURE
BLOCKED_BY_RENDERER_GAP
BLOCKED_BY_STORAGE_COMPATIBILITY
BLOCKED_BY_ROW_INTEGRITY
```

---

# 7. Tests Codex must run or explicitly mark blocked

Do not claim tests passed unless actually run.

Required tests:

- syntax/static check;
- content count gate: `20` clean `B1-06` records present;
- duplicate/malformed ID gate;
- route/module registration check;
- `B1-06` route smoke test;
- all imported task types render safely;
- short-answer/cloze grading smoke;
- repair/Satzbau/Umformen smoke if present;
- production card self-marking smoke;
- evidence record includes stable item ID and target/module metadata where current app supports it;
- export/import smoke;
- old-export tolerance smoke if fixture available;
- protected localStorage keys unchanged;
- multiple-choice shuffling regression;
- Arabic UI / German LTR smoke;
- responsive checks if browser available:
  - 320×568
  - 390×844
  - 430×932
  - 768×1024
  - 1365×599
  - 1440×900

Document blocked tests separately.

---

# 8. Documentation / changelog

Create/update docs using current repo conventions.

At minimum, provide a changelog draft for:

`v0.80.9 — B1-06 Sick leave`

Include:

- added module/content count;
- preserved storage/export;
- task types covered;
- production self-marked;
- tests actually run;
- tests blocked/not run;
- known limitations.

---

# 9. Deliverables

Return:

1. Source inspected
2. Architecture findings
3. Files changed
4. Implementation summary
5. Imported record count
6. Excluded/deferred records
7. Count validation result
8. Evidence/export/import safety result
9. localStorage safety result
10. Route/sampling decision
11. Tests actually run
12. Tests blocked/not run
13. Responsive/visual test status
14. Changelog draft
15. Known limitations
16. Final verdict
17. Modified package/files

Do not claim live GitHub Pages deployment unless actually deployed and tested.

---

# 10. Final verdict

Use exactly one:

- `B1_06_IMPLEMENTED_AND_TESTED`
- `B1_06_IMPLEMENTED_WITH_LIMITED_TESTING`
- `B1_06_IMPLEMENTED_BUT_NEEDS_FIXES`
- `BLOCKED_BY_SOURCE_INSPECTION`
- `BLOCKED_BY_SOURCE_GAP`
- `BLOCKED_BY_ROUTE_ARCHITECTURE`
- `BLOCKED_BY_RENDERER_GAP`
- `BLOCKED_BY_STORAGE_COMPATIBILITY`
- `BLOCKED_BY_ROW_INTEGRITY`
```

### Post-Codex QA prompt for B1-06

```markdown
Title: Ozmosis B1-06 — Post-Codex QA for v0.80.9

Use British English. Be direct, strict, and practical.

Audit the Codex output for `v0.80.9 — B1-06 Sick leave`.

Do not write app code.
Do not create new content.
Do not approve unrun tests.
Do not assume Codex’s claims are true without inspecting the returned files/report.

Check:

1. Source files changed
2. Implementation scope
3. Imported row count: expected `20`
4. No unrelated modules implemented
5. No B1-12 active review items
6. localStorage keys unchanged
7. export/import compatibility preserved
8. evidence semantics preserved
9. production self-marked only
10. route works
11. task renderers work
12. cut/deferred records absent
13. no copied source text
14. German LTR preserved
15. responsive / visual QA status
16. tests actually run vs claimed

Final verdict:

- `B1_06_PATCH_ACCEPTED`
- `B1_06_PATCH_ACCEPTED_WITH_CAVEATS`
- `B1_06_PATCH_NEEDS_FIXES`
- `B1_06_PATCH_REJECTED`
- `BLOCKED_BY_MISSING_CODEX_OUTPUT`

End with:
- final verdict
- exact next recommended action.
```

### Codex fix prompt if QA fails for B1-06

```markdown
Title: Ozmosis B1-06 — Fix Patch After Post-Codex QA

Use British English. Be direct, strict, and practical.

You are fixing the existing `v0.80.9 — B1-06 Sick leave` patch.

Do not add new scope.
Do not implement another module.
Do not redesign.
Do not change storage keys.
Do not create new content unless the QA report identifies a direct missing approved record.
Do not claim tests passed unless actually run.

Use:

1. The failed Codex output package.
2. The post-Codex QA report.
3. `ozmosis_b1_m06_sick_leave_codex_import_plan_v0_1.md`
4. `ozmosis_b1_m06_sick_leave_schema_mapping_v0_1.md`
5. `ozmosis_b1_m06_sick_leave_final_inventory_v0_1.md`
6. `ozmosis_b1_m06_sick_leave_phase3a_qa_approved_v0_1.md`
7. Current app files.

Fix only the issues listed in the QA report.

Return:

1. Fix summary
2. Files changed
3. Exact QA issues addressed
4. Tests run
5. Tests still blocked
6. Final verdict

Final verdict:

- `B1_06_FIXED_AND_TESTED`
- `B1_06_FIXED_WITH_LIMITED_TESTING`
- `B1_06_STILL_NEEDS_FIXES`
- `BLOCKED_BY_SOURCE_GAP`
- `BLOCKED_BY_ARCHITECTURE`
```

---

## B1-07 — Meetings / leave requests

### Codex implementation prompt — B1-07 / v0.80.10

```markdown
Title: Ozmosis v0.80.10 — Implement B1-07 Meetings / leave requests

Use British English. Be direct, strict, and practical.

You are implementing one narrow Ozmosis app patch.

Patch label:

`v0.80.10 — B1-07 Meetings / leave requests`

This is a single-module implementation task.

Do not redesign the app.
Do not rewrite the app.
Do not add a backend.
Do not add a framework.
Do not add a build step.
Do not add a package manager.
Do not add a database.
Do not add accounts.
Do not add analytics/tracking.
Do not add external API calls.
Do not add runtime AI generation.
Do not add dependencies unless explicitly required and justified.
Do not implement any module except `B1-07`.
Do not implement B1-12 review items.
Do not implement v0.81 unless explicitly instructed.
Do not implement Cases and Articles Completion Pass.
Do not implement Satzi/mascot features.
Do not add Genitive.
Do not add B2 active content.
Do not create runtime grammar generation.
Do not create uncontrolled Madlibs.
Do not randomly combine nouns and verbs.
Do not infer German case/articles dynamically.
Do not import TELC/textbook/coursebook text.
Do not change existing storage keys.
Do not break export/import compatibility.
Do not make mastery/readiness/certification claims.

Your job is to implement the already-approved `B1-07` planning outputs into the current Ozmosis app line as a safe sequential module patch.

---

# 1. Source of truth

Use this hierarchy:

1. Current repo/app files in this Codex task.
2. Current app package/source, expected v0.80.4 or later.
3. `OZMOSIS_SOURCE_BRIEF_v0.80.4.md`
4. `OZMOSIS_DEVELOPMENT_ROADMAP_v0.80.4.md`
5. `ozmosis_b1_m07_meetings_leave_requests_codex_import_plan_v0_1.md`
6. `ozmosis_b1_m07_meetings_leave_requests_schema_mapping_v0_1.md`
7. `ozmosis_b1_m07_meetings_leave_requests_final_inventory_v0_1.md`
8. `ozmosis_b1_m07_meetings_leave_requests_phase3a_qa_approved_v0_1.md`
9. `ozmosis_b1_m02_m11_import_plan_readiness_audit_v0_1.md`
10. `ozmosis_b1_m12_b1_review_consolidation_deferred_planning_update_v0_1.md`
11. Pipeline/core/audit docs if available.
12. Older chats/memory only as background.

If implementation files and planning files disagree:
- current app files win for architecture;
- `ozmosis_b1_m07_meetings_leave_requests_codex_import_plan_v0_1.md` wins for implementation strategy;
- `ozmosis_b1_m07_meetings_leave_requests_schema_mapping_v0_1.md` wins for item metadata;
- `ozmosis_b1_m07_meetings_leave_requests_final_inventory_v0_1.md` wins for row counts;
- `ozmosis_b1_m07_meetings_leave_requests_phase3a_qa_approved_v0_1.md` wins for approved item text and QA decisions.

Do not use TELC/Beruf/Aspekte/PDF source text as app content.

---

# 2. Required first action: inspect before editing

Before editing anything, inspect the current app source.

Verify:

- app version and current version labelling;
- where `index.html` is;
- whether B1 content is inline or in static content files;
- where B1 module registry/routes live;
- whether `B1-07` already exists as a placeholder;
- how B1-01 content/families are registered;
- how B1 evidence is recorded;
- where export/import is handled;
- where localStorage keys are used;
- whether task renderers support all `B1-07` task types;
- how production/self-marked cards are represented;
- how Today’s B1 Sprint and Diagnostic Sprint sample content;
- existing validation/test scripts.

If source cannot be inspected, stop with:

`BLOCKED_BY_SOURCE_INSPECTION`

---

# 3. Expected planning state

Module:

```txt
moduleId: B1-07
moduleTitle: Meetings / leave requests
internalPlanningId: b1_m07_meetings_leave_requests
moduleSlug: meetings-leave-requests
clean planned rows: 20
```

Planning files expected:

```txt
ozmosis_b1_m07_meetings_leave_requests_phase3a_qa_approved_v0_1.md
ozmosis_b1_m07_meetings_leave_requests_final_inventory_v0_1.md
ozmosis_b1_m07_meetings_leave_requests_schema_mapping_v0_1.md
ozmosis_b1_m07_meetings_leave_requests_codex_import_plan_v0_1.md
```

Do not implement if any required planning file is missing.

If counts differ from the planning files, use the files and document the discrepancy.

---

# 4. Patch goal

Implement `B1-07 — Meetings / leave requests` as a static module/content patch.

Required:

- import the clean rows from `ozmosis_b1_m07_meetings_leave_requests_schema_mapping_v0_1.md` / `ozmosis_b1_m07_meetings_leave_requests_final_inventory_v0_1.md`;
- preserve all approved item IDs or map them to stable app IDs without losing provenance;
- preserve targetFamilyId and targetId metadata where current app architecture supports it;
- preserve evidenceType;
- preserve production as self-marked only;
- preserve notice/concept cards as excluded from evidence;
- keep supportPolicy/supportPresentation semantics where possible;
- do not import cut/deferred rows if any appear in later files;
- keep `B1-07` out of broad mixed sprints unless current sampling can include it safely.

Recommended first exposure:

```txt
B1-07 module practice route first
```

Do not flood Today’s B1 Sprint or Diagnostic Sprint with the new module in this patch.

---

# 5. Architecture constraints

Preserve:

- static browser app;
- GitHub Pages compatibility;
- repo-root `index.html` unless current repo structure already uses static content modules;
- current dark neon console identity;
- mobile-first layout;
- existing storage keys:
  - `ozmosis_b1_sprint_progress_v1`
  - `ozmosis_b1_progress_evidence_v1`
- export/import compatibility;
- existing B1-01 behaviour;
- existing multiple-choice shuffling;
- German LTR in Arabic UI contexts;
- production self-marking.

No storage-key renaming.

No old-export breakage.

---

# 6. Implementation approach

Use the current app’s existing content conventions.

Expected approach:

```txt
static module records / static approved items / static variant-family-compatible metadata if supported
```

Do not create runtime grammar generation.

If the current app cannot represent one of the mapped task types safely, stop and report the renderer gap rather than inventing a new architecture.

Potential blocker verdicts:

```txt
BLOCKED_BY_SOURCE_INSPECTION
BLOCKED_BY_SOURCE_GAP
BLOCKED_BY_ROUTE_ARCHITECTURE
BLOCKED_BY_RENDERER_GAP
BLOCKED_BY_STORAGE_COMPATIBILITY
BLOCKED_BY_ROW_INTEGRITY
```

---

# 7. Tests Codex must run or explicitly mark blocked

Do not claim tests passed unless actually run.

Required tests:

- syntax/static check;
- content count gate: `20` clean `B1-07` records present;
- duplicate/malformed ID gate;
- route/module registration check;
- `B1-07` route smoke test;
- all imported task types render safely;
- short-answer/cloze grading smoke;
- repair/Satzbau/Umformen smoke if present;
- production card self-marking smoke;
- evidence record includes stable item ID and target/module metadata where current app supports it;
- export/import smoke;
- old-export tolerance smoke if fixture available;
- protected localStorage keys unchanged;
- multiple-choice shuffling regression;
- Arabic UI / German LTR smoke;
- responsive checks if browser available:
  - 320×568
  - 390×844
  - 430×932
  - 768×1024
  - 1365×599
  - 1440×900

Document blocked tests separately.

---

# 8. Documentation / changelog

Create/update docs using current repo conventions.

At minimum, provide a changelog draft for:

`v0.80.10 — B1-07 Meetings / leave requests`

Include:

- added module/content count;
- preserved storage/export;
- task types covered;
- production self-marked;
- tests actually run;
- tests blocked/not run;
- known limitations.

---

# 9. Deliverables

Return:

1. Source inspected
2. Architecture findings
3. Files changed
4. Implementation summary
5. Imported record count
6. Excluded/deferred records
7. Count validation result
8. Evidence/export/import safety result
9. localStorage safety result
10. Route/sampling decision
11. Tests actually run
12. Tests blocked/not run
13. Responsive/visual test status
14. Changelog draft
15. Known limitations
16. Final verdict
17. Modified package/files

Do not claim live GitHub Pages deployment unless actually deployed and tested.

---

# 10. Final verdict

Use exactly one:

- `B1_07_IMPLEMENTED_AND_TESTED`
- `B1_07_IMPLEMENTED_WITH_LIMITED_TESTING`
- `B1_07_IMPLEMENTED_BUT_NEEDS_FIXES`
- `BLOCKED_BY_SOURCE_INSPECTION`
- `BLOCKED_BY_SOURCE_GAP`
- `BLOCKED_BY_ROUTE_ARCHITECTURE`
- `BLOCKED_BY_RENDERER_GAP`
- `BLOCKED_BY_STORAGE_COMPATIBILITY`
- `BLOCKED_BY_ROW_INTEGRITY`
```

### Post-Codex QA prompt for B1-07

```markdown
Title: Ozmosis B1-07 — Post-Codex QA for v0.80.10

Use British English. Be direct, strict, and practical.

Audit the Codex output for `v0.80.10 — B1-07 Meetings / leave requests`.

Do not write app code.
Do not create new content.
Do not approve unrun tests.
Do not assume Codex’s claims are true without inspecting the returned files/report.

Check:

1. Source files changed
2. Implementation scope
3. Imported row count: expected `20`
4. No unrelated modules implemented
5. No B1-12 active review items
6. localStorage keys unchanged
7. export/import compatibility preserved
8. evidence semantics preserved
9. production self-marked only
10. route works
11. task renderers work
12. cut/deferred records absent
13. no copied source text
14. German LTR preserved
15. responsive / visual QA status
16. tests actually run vs claimed

Final verdict:

- `B1_07_PATCH_ACCEPTED`
- `B1_07_PATCH_ACCEPTED_WITH_CAVEATS`
- `B1_07_PATCH_NEEDS_FIXES`
- `B1_07_PATCH_REJECTED`
- `BLOCKED_BY_MISSING_CODEX_OUTPUT`

End with:
- final verdict
- exact next recommended action.
```

### Codex fix prompt if QA fails for B1-07

```markdown
Title: Ozmosis B1-07 — Fix Patch After Post-Codex QA

Use British English. Be direct, strict, and practical.

You are fixing the existing `v0.80.10 — B1-07 Meetings / leave requests` patch.

Do not add new scope.
Do not implement another module.
Do not redesign.
Do not change storage keys.
Do not create new content unless the QA report identifies a direct missing approved record.
Do not claim tests passed unless actually run.

Use:

1. The failed Codex output package.
2. The post-Codex QA report.
3. `ozmosis_b1_m07_meetings_leave_requests_codex_import_plan_v0_1.md`
4. `ozmosis_b1_m07_meetings_leave_requests_schema_mapping_v0_1.md`
5. `ozmosis_b1_m07_meetings_leave_requests_final_inventory_v0_1.md`
6. `ozmosis_b1_m07_meetings_leave_requests_phase3a_qa_approved_v0_1.md`
7. Current app files.

Fix only the issues listed in the QA report.

Return:

1. Fix summary
2. Files changed
3. Exact QA issues addressed
4. Tests run
5. Tests still blocked
6. Final verdict

Final verdict:

- `B1_07_FIXED_AND_TESTED`
- `B1_07_FIXED_WITH_LIMITED_TESTING`
- `B1_07_STILL_NEEDS_FIXES`
- `BLOCKED_BY_SOURCE_GAP`
- `BLOCKED_BY_ARCHITECTURE`
```

---

## B1-08 — Orders / delivery

### Codex implementation prompt — B1-08 / v0.80.11

```markdown
Title: Ozmosis v0.80.11 — Implement B1-08 Orders / delivery

Use British English. Be direct, strict, and practical.

You are implementing one narrow Ozmosis app patch.

Patch label:

`v0.80.11 — B1-08 Orders / delivery`

This is a single-module implementation task.

Do not redesign the app.
Do not rewrite the app.
Do not add a backend.
Do not add a framework.
Do not add a build step.
Do not add a package manager.
Do not add a database.
Do not add accounts.
Do not add analytics/tracking.
Do not add external API calls.
Do not add runtime AI generation.
Do not add dependencies unless explicitly required and justified.
Do not implement any module except `B1-08`.
Do not implement B1-12 review items.
Do not implement v0.81 unless explicitly instructed.
Do not implement Cases and Articles Completion Pass.
Do not implement Satzi/mascot features.
Do not add Genitive.
Do not add B2 active content.
Do not create runtime grammar generation.
Do not create uncontrolled Madlibs.
Do not randomly combine nouns and verbs.
Do not infer German case/articles dynamically.
Do not import TELC/textbook/coursebook text.
Do not change existing storage keys.
Do not break export/import compatibility.
Do not make mastery/readiness/certification claims.

Your job is to implement the already-approved `B1-08` planning outputs into the current Ozmosis app line as a safe sequential module patch.

---

# 1. Source of truth

Use this hierarchy:

1. Current repo/app files in this Codex task.
2. Current app package/source, expected v0.80.4 or later.
3. `OZMOSIS_SOURCE_BRIEF_v0.80.4.md`
4. `OZMOSIS_DEVELOPMENT_ROADMAP_v0.80.4.md`
5. `ozmosis_b1_m08_orders_delivery_codex_import_plan_v0_1.md`
6. `ozmosis_b1_m08_orders_delivery_schema_mapping_v0_1.md`
7. `ozmosis_b1_m08_orders_delivery_final_inventory_v0_1.md`
8. `ozmosis_b1_m08_orders_delivery_phase3a_qa_approved_v0_1.md`
9. `ozmosis_b1_m02_m11_import_plan_readiness_audit_v0_1.md`
10. `ozmosis_b1_m12_b1_review_consolidation_deferred_planning_update_v0_1.md`
11. Pipeline/core/audit docs if available.
12. Older chats/memory only as background.

If implementation files and planning files disagree:
- current app files win for architecture;
- `ozmosis_b1_m08_orders_delivery_codex_import_plan_v0_1.md` wins for implementation strategy;
- `ozmosis_b1_m08_orders_delivery_schema_mapping_v0_1.md` wins for item metadata;
- `ozmosis_b1_m08_orders_delivery_final_inventory_v0_1.md` wins for row counts;
- `ozmosis_b1_m08_orders_delivery_phase3a_qa_approved_v0_1.md` wins for approved item text and QA decisions.

Do not use TELC/Beruf/Aspekte/PDF source text as app content.

---

# 2. Required first action: inspect before editing

Before editing anything, inspect the current app source.

Verify:

- app version and current version labelling;
- where `index.html` is;
- whether B1 content is inline or in static content files;
- where B1 module registry/routes live;
- whether `B1-08` already exists as a placeholder;
- how B1-01 content/families are registered;
- how B1 evidence is recorded;
- where export/import is handled;
- where localStorage keys are used;
- whether task renderers support all `B1-08` task types;
- how production/self-marked cards are represented;
- how Today’s B1 Sprint and Diagnostic Sprint sample content;
- existing validation/test scripts.

If source cannot be inspected, stop with:

`BLOCKED_BY_SOURCE_INSPECTION`

---

# 3. Expected planning state

Module:

```txt
moduleId: B1-08
moduleTitle: Orders / delivery
internalPlanningId: b1_m08_orders_delivery
moduleSlug: orders-delivery
clean planned rows: 20
```

Planning files expected:

```txt
ozmosis_b1_m08_orders_delivery_phase3a_qa_approved_v0_1.md
ozmosis_b1_m08_orders_delivery_final_inventory_v0_1.md
ozmosis_b1_m08_orders_delivery_schema_mapping_v0_1.md
ozmosis_b1_m08_orders_delivery_codex_import_plan_v0_1.md
```

Do not implement if any required planning file is missing.

If counts differ from the planning files, use the files and document the discrepancy.

---

# 4. Patch goal

Implement `B1-08 — Orders / delivery` as a static module/content patch.

Required:

- import the clean rows from `ozmosis_b1_m08_orders_delivery_schema_mapping_v0_1.md` / `ozmosis_b1_m08_orders_delivery_final_inventory_v0_1.md`;
- preserve all approved item IDs or map them to stable app IDs without losing provenance;
- preserve targetFamilyId and targetId metadata where current app architecture supports it;
- preserve evidenceType;
- preserve production as self-marked only;
- preserve notice/concept cards as excluded from evidence;
- keep supportPolicy/supportPresentation semantics where possible;
- do not import cut/deferred rows if any appear in later files;
- keep `B1-08` out of broad mixed sprints unless current sampling can include it safely.

Recommended first exposure:

```txt
B1-08 module practice route first
```

Do not flood Today’s B1 Sprint or Diagnostic Sprint with the new module in this patch.

---

# 5. Architecture constraints

Preserve:

- static browser app;
- GitHub Pages compatibility;
- repo-root `index.html` unless current repo structure already uses static content modules;
- current dark neon console identity;
- mobile-first layout;
- existing storage keys:
  - `ozmosis_b1_sprint_progress_v1`
  - `ozmosis_b1_progress_evidence_v1`
- export/import compatibility;
- existing B1-01 behaviour;
- existing multiple-choice shuffling;
- German LTR in Arabic UI contexts;
- production self-marking.

No storage-key renaming.

No old-export breakage.

---

# 6. Implementation approach

Use the current app’s existing content conventions.

Expected approach:

```txt
static module records / static approved items / static variant-family-compatible metadata if supported
```

Do not create runtime grammar generation.

If the current app cannot represent one of the mapped task types safely, stop and report the renderer gap rather than inventing a new architecture.

Potential blocker verdicts:

```txt
BLOCKED_BY_SOURCE_INSPECTION
BLOCKED_BY_SOURCE_GAP
BLOCKED_BY_ROUTE_ARCHITECTURE
BLOCKED_BY_RENDERER_GAP
BLOCKED_BY_STORAGE_COMPATIBILITY
BLOCKED_BY_ROW_INTEGRITY
```

---

# 7. Tests Codex must run or explicitly mark blocked

Do not claim tests passed unless actually run.

Required tests:

- syntax/static check;
- content count gate: `20` clean `B1-08` records present;
- duplicate/malformed ID gate;
- route/module registration check;
- `B1-08` route smoke test;
- all imported task types render safely;
- short-answer/cloze grading smoke;
- repair/Satzbau/Umformen smoke if present;
- production card self-marking smoke;
- evidence record includes stable item ID and target/module metadata where current app supports it;
- export/import smoke;
- old-export tolerance smoke if fixture available;
- protected localStorage keys unchanged;
- multiple-choice shuffling regression;
- Arabic UI / German LTR smoke;
- responsive checks if browser available:
  - 320×568
  - 390×844
  - 430×932
  - 768×1024
  - 1365×599
  - 1440×900

Document blocked tests separately.

---

# 8. Documentation / changelog

Create/update docs using current repo conventions.

At minimum, provide a changelog draft for:

`v0.80.11 — B1-08 Orders / delivery`

Include:

- added module/content count;
- preserved storage/export;
- task types covered;
- production self-marked;
- tests actually run;
- tests blocked/not run;
- known limitations.

---

# 9. Deliverables

Return:

1. Source inspected
2. Architecture findings
3. Files changed
4. Implementation summary
5. Imported record count
6. Excluded/deferred records
7. Count validation result
8. Evidence/export/import safety result
9. localStorage safety result
10. Route/sampling decision
11. Tests actually run
12. Tests blocked/not run
13. Responsive/visual test status
14. Changelog draft
15. Known limitations
16. Final verdict
17. Modified package/files

Do not claim live GitHub Pages deployment unless actually deployed and tested.

---

# 10. Final verdict

Use exactly one:

- `B1_08_IMPLEMENTED_AND_TESTED`
- `B1_08_IMPLEMENTED_WITH_LIMITED_TESTING`
- `B1_08_IMPLEMENTED_BUT_NEEDS_FIXES`
- `BLOCKED_BY_SOURCE_INSPECTION`
- `BLOCKED_BY_SOURCE_GAP`
- `BLOCKED_BY_ROUTE_ARCHITECTURE`
- `BLOCKED_BY_RENDERER_GAP`
- `BLOCKED_BY_STORAGE_COMPATIBILITY`
- `BLOCKED_BY_ROW_INTEGRITY`
```

### Post-Codex QA prompt for B1-08

```markdown
Title: Ozmosis B1-08 — Post-Codex QA for v0.80.11

Use British English. Be direct, strict, and practical.

Audit the Codex output for `v0.80.11 — B1-08 Orders / delivery`.

Do not write app code.
Do not create new content.
Do not approve unrun tests.
Do not assume Codex’s claims are true without inspecting the returned files/report.

Check:

1. Source files changed
2. Implementation scope
3. Imported row count: expected `20`
4. No unrelated modules implemented
5. No B1-12 active review items
6. localStorage keys unchanged
7. export/import compatibility preserved
8. evidence semantics preserved
9. production self-marked only
10. route works
11. task renderers work
12. cut/deferred records absent
13. no copied source text
14. German LTR preserved
15. responsive / visual QA status
16. tests actually run vs claimed

Final verdict:

- `B1_08_PATCH_ACCEPTED`
- `B1_08_PATCH_ACCEPTED_WITH_CAVEATS`
- `B1_08_PATCH_NEEDS_FIXES`
- `B1_08_PATCH_REJECTED`
- `BLOCKED_BY_MISSING_CODEX_OUTPUT`

End with:
- final verdict
- exact next recommended action.
```

### Codex fix prompt if QA fails for B1-08

```markdown
Title: Ozmosis B1-08 — Fix Patch After Post-Codex QA

Use British English. Be direct, strict, and practical.

You are fixing the existing `v0.80.11 — B1-08 Orders / delivery` patch.

Do not add new scope.
Do not implement another module.
Do not redesign.
Do not change storage keys.
Do not create new content unless the QA report identifies a direct missing approved record.
Do not claim tests passed unless actually run.

Use:

1. The failed Codex output package.
2. The post-Codex QA report.
3. `ozmosis_b1_m08_orders_delivery_codex_import_plan_v0_1.md`
4. `ozmosis_b1_m08_orders_delivery_schema_mapping_v0_1.md`
5. `ozmosis_b1_m08_orders_delivery_final_inventory_v0_1.md`
6. `ozmosis_b1_m08_orders_delivery_phase3a_qa_approved_v0_1.md`
7. Current app files.

Fix only the issues listed in the QA report.

Return:

1. Fix summary
2. Files changed
3. Exact QA issues addressed
4. Tests run
5. Tests still blocked
6. Final verdict

Final verdict:

- `B1_08_FIXED_AND_TESTED`
- `B1_08_FIXED_WITH_LIMITED_TESTING`
- `B1_08_STILL_NEEDS_FIXES`
- `BLOCKED_BY_SOURCE_GAP`
- `BLOCKED_BY_ARCHITECTURE`
```

---

## B1-09 — Complaints / customer service

### Codex implementation prompt — B1-09 / v0.80.12

```markdown
Title: Ozmosis v0.80.12 — Implement B1-09 Complaints / customer service

Use British English. Be direct, strict, and practical.

You are implementing one narrow Ozmosis app patch.

Patch label:

`v0.80.12 — B1-09 Complaints / customer service`

This is a single-module implementation task.

Do not redesign the app.
Do not rewrite the app.
Do not add a backend.
Do not add a framework.
Do not add a build step.
Do not add a package manager.
Do not add a database.
Do not add accounts.
Do not add analytics/tracking.
Do not add external API calls.
Do not add runtime AI generation.
Do not add dependencies unless explicitly required and justified.
Do not implement any module except `B1-09`.
Do not implement B1-12 review items.
Do not implement v0.81 unless explicitly instructed.
Do not implement Cases and Articles Completion Pass.
Do not implement Satzi/mascot features.
Do not add Genitive.
Do not add B2 active content.
Do not create runtime grammar generation.
Do not create uncontrolled Madlibs.
Do not randomly combine nouns and verbs.
Do not infer German case/articles dynamically.
Do not import TELC/textbook/coursebook text.
Do not change existing storage keys.
Do not break export/import compatibility.
Do not make mastery/readiness/certification claims.

Your job is to implement the already-approved `B1-09` planning outputs into the current Ozmosis app line as a safe sequential module patch.

---

# 1. Source of truth

Use this hierarchy:

1. Current repo/app files in this Codex task.
2. Current app package/source, expected v0.80.4 or later.
3. `OZMOSIS_SOURCE_BRIEF_v0.80.4.md`
4. `OZMOSIS_DEVELOPMENT_ROADMAP_v0.80.4.md`
5. `ozmosis_b1_m09_complaints_customer_service_codex_import_plan_v0_1.md`
6. `ozmosis_b1_m09_complaints_customer_service_schema_mapping_v0_1.md`
7. `ozmosis_b1_m09_complaints_customer_service_final_inventory_v0_1.md`
8. `ozmosis_b1_m09_complaints_customer_service_phase3a_qa_approved_v0_1.md`
9. `ozmosis_b1_m02_m11_import_plan_readiness_audit_v0_1.md`
10. `ozmosis_b1_m12_b1_review_consolidation_deferred_planning_update_v0_1.md`
11. Pipeline/core/audit docs if available.
12. Older chats/memory only as background.

If implementation files and planning files disagree:
- current app files win for architecture;
- `ozmosis_b1_m09_complaints_customer_service_codex_import_plan_v0_1.md` wins for implementation strategy;
- `ozmosis_b1_m09_complaints_customer_service_schema_mapping_v0_1.md` wins for item metadata;
- `ozmosis_b1_m09_complaints_customer_service_final_inventory_v0_1.md` wins for row counts;
- `ozmosis_b1_m09_complaints_customer_service_phase3a_qa_approved_v0_1.md` wins for approved item text and QA decisions.

Do not use TELC/Beruf/Aspekte/PDF source text as app content.

---

# 2. Required first action: inspect before editing

Before editing anything, inspect the current app source.

Verify:

- app version and current version labelling;
- where `index.html` is;
- whether B1 content is inline or in static content files;
- where B1 module registry/routes live;
- whether `B1-09` already exists as a placeholder;
- how B1-01 content/families are registered;
- how B1 evidence is recorded;
- where export/import is handled;
- where localStorage keys are used;
- whether task renderers support all `B1-09` task types;
- how production/self-marked cards are represented;
- how Today’s B1 Sprint and Diagnostic Sprint sample content;
- existing validation/test scripts.

If source cannot be inspected, stop with:

`BLOCKED_BY_SOURCE_INSPECTION`

---

# 3. Expected planning state

Module:

```txt
moduleId: B1-09
moduleTitle: Complaints / customer service
internalPlanningId: b1_m09_complaints_customer_service
moduleSlug: complaints-customer-service
clean planned rows: 20
```

Planning files expected:

```txt
ozmosis_b1_m09_complaints_customer_service_phase3a_qa_approved_v0_1.md
ozmosis_b1_m09_complaints_customer_service_final_inventory_v0_1.md
ozmosis_b1_m09_complaints_customer_service_schema_mapping_v0_1.md
ozmosis_b1_m09_complaints_customer_service_codex_import_plan_v0_1.md
```

Do not implement if any required planning file is missing.

If counts differ from the planning files, use the files and document the discrepancy.

---

# 4. Patch goal

Implement `B1-09 — Complaints / customer service` as a static module/content patch.

Required:

- import the clean rows from `ozmosis_b1_m09_complaints_customer_service_schema_mapping_v0_1.md` / `ozmosis_b1_m09_complaints_customer_service_final_inventory_v0_1.md`;
- preserve all approved item IDs or map them to stable app IDs without losing provenance;
- preserve targetFamilyId and targetId metadata where current app architecture supports it;
- preserve evidenceType;
- preserve production as self-marked only;
- preserve notice/concept cards as excluded from evidence;
- keep supportPolicy/supportPresentation semantics where possible;
- do not import cut/deferred rows if any appear in later files;
- keep `B1-09` out of broad mixed sprints unless current sampling can include it safely.

Recommended first exposure:

```txt
B1-09 module practice route first
```

Do not flood Today’s B1 Sprint or Diagnostic Sprint with the new module in this patch.

---

# 5. Architecture constraints

Preserve:

- static browser app;
- GitHub Pages compatibility;
- repo-root `index.html` unless current repo structure already uses static content modules;
- current dark neon console identity;
- mobile-first layout;
- existing storage keys:
  - `ozmosis_b1_sprint_progress_v1`
  - `ozmosis_b1_progress_evidence_v1`
- export/import compatibility;
- existing B1-01 behaviour;
- existing multiple-choice shuffling;
- German LTR in Arabic UI contexts;
- production self-marking.

No storage-key renaming.

No old-export breakage.

---

# 6. Implementation approach

Use the current app’s existing content conventions.

Expected approach:

```txt
static module records / static approved items / static variant-family-compatible metadata if supported
```

Do not create runtime grammar generation.

If the current app cannot represent one of the mapped task types safely, stop and report the renderer gap rather than inventing a new architecture.

Potential blocker verdicts:

```txt
BLOCKED_BY_SOURCE_INSPECTION
BLOCKED_BY_SOURCE_GAP
BLOCKED_BY_ROUTE_ARCHITECTURE
BLOCKED_BY_RENDERER_GAP
BLOCKED_BY_STORAGE_COMPATIBILITY
BLOCKED_BY_ROW_INTEGRITY
```

---

# 7. Tests Codex must run or explicitly mark blocked

Do not claim tests passed unless actually run.

Required tests:

- syntax/static check;
- content count gate: `20` clean `B1-09` records present;
- duplicate/malformed ID gate;
- route/module registration check;
- `B1-09` route smoke test;
- all imported task types render safely;
- short-answer/cloze grading smoke;
- repair/Satzbau/Umformen smoke if present;
- production card self-marking smoke;
- evidence record includes stable item ID and target/module metadata where current app supports it;
- export/import smoke;
- old-export tolerance smoke if fixture available;
- protected localStorage keys unchanged;
- multiple-choice shuffling regression;
- Arabic UI / German LTR smoke;
- responsive checks if browser available:
  - 320×568
  - 390×844
  - 430×932
  - 768×1024
  - 1365×599
  - 1440×900

Document blocked tests separately.

---

# 8. Documentation / changelog

Create/update docs using current repo conventions.

At minimum, provide a changelog draft for:

`v0.80.12 — B1-09 Complaints / customer service`

Include:

- added module/content count;
- preserved storage/export;
- task types covered;
- production self-marked;
- tests actually run;
- tests blocked/not run;
- known limitations.

---

# 9. Deliverables

Return:

1. Source inspected
2. Architecture findings
3. Files changed
4. Implementation summary
5. Imported record count
6. Excluded/deferred records
7. Count validation result
8. Evidence/export/import safety result
9. localStorage safety result
10. Route/sampling decision
11. Tests actually run
12. Tests blocked/not run
13. Responsive/visual test status
14. Changelog draft
15. Known limitations
16. Final verdict
17. Modified package/files

Do not claim live GitHub Pages deployment unless actually deployed and tested.

---

# 10. Final verdict

Use exactly one:

- `B1_09_IMPLEMENTED_AND_TESTED`
- `B1_09_IMPLEMENTED_WITH_LIMITED_TESTING`
- `B1_09_IMPLEMENTED_BUT_NEEDS_FIXES`
- `BLOCKED_BY_SOURCE_INSPECTION`
- `BLOCKED_BY_SOURCE_GAP`
- `BLOCKED_BY_ROUTE_ARCHITECTURE`
- `BLOCKED_BY_RENDERER_GAP`
- `BLOCKED_BY_STORAGE_COMPATIBILITY`
- `BLOCKED_BY_ROW_INTEGRITY`
```

### Post-Codex QA prompt for B1-09

```markdown
Title: Ozmosis B1-09 — Post-Codex QA for v0.80.12

Use British English. Be direct, strict, and practical.

Audit the Codex output for `v0.80.12 — B1-09 Complaints / customer service`.

Do not write app code.
Do not create new content.
Do not approve unrun tests.
Do not assume Codex’s claims are true without inspecting the returned files/report.

Check:

1. Source files changed
2. Implementation scope
3. Imported row count: expected `20`
4. No unrelated modules implemented
5. No B1-12 active review items
6. localStorage keys unchanged
7. export/import compatibility preserved
8. evidence semantics preserved
9. production self-marked only
10. route works
11. task renderers work
12. cut/deferred records absent
13. no copied source text
14. German LTR preserved
15. responsive / visual QA status
16. tests actually run vs claimed

Final verdict:

- `B1_09_PATCH_ACCEPTED`
- `B1_09_PATCH_ACCEPTED_WITH_CAVEATS`
- `B1_09_PATCH_NEEDS_FIXES`
- `B1_09_PATCH_REJECTED`
- `BLOCKED_BY_MISSING_CODEX_OUTPUT`

End with:
- final verdict
- exact next recommended action.
```

### Codex fix prompt if QA fails for B1-09

```markdown
Title: Ozmosis B1-09 — Fix Patch After Post-Codex QA

Use British English. Be direct, strict, and practical.

You are fixing the existing `v0.80.12 — B1-09 Complaints / customer service` patch.

Do not add new scope.
Do not implement another module.
Do not redesign.
Do not change storage keys.
Do not create new content unless the QA report identifies a direct missing approved record.
Do not claim tests passed unless actually run.

Use:

1. The failed Codex output package.
2. The post-Codex QA report.
3. `ozmosis_b1_m09_complaints_customer_service_codex_import_plan_v0_1.md`
4. `ozmosis_b1_m09_complaints_customer_service_schema_mapping_v0_1.md`
5. `ozmosis_b1_m09_complaints_customer_service_final_inventory_v0_1.md`
6. `ozmosis_b1_m09_complaints_customer_service_phase3a_qa_approved_v0_1.md`
7. Current app files.

Fix only the issues listed in the QA report.

Return:

1. Fix summary
2. Files changed
3. Exact QA issues addressed
4. Tests run
5. Tests still blocked
6. Final verdict

Final verdict:

- `B1_09_FIXED_AND_TESTED`
- `B1_09_FIXED_WITH_LIMITED_TESTING`
- `B1_09_STILL_NEEDS_FIXES`
- `BLOCKED_BY_SOURCE_GAP`
- `BLOCKED_BY_ARCHITECTURE`
```

---

## B1-10 — Technical problems

### Codex implementation prompt — B1-10 / v0.80.13

```markdown
Title: Ozmosis v0.80.13 — Implement B1-10 Technical problems

Use British English. Be direct, strict, and practical.

You are implementing one narrow Ozmosis app patch.

Patch label:

`v0.80.13 — B1-10 Technical problems`

This is a single-module implementation task.

Do not redesign the app.
Do not rewrite the app.
Do not add a backend.
Do not add a framework.
Do not add a build step.
Do not add a package manager.
Do not add a database.
Do not add accounts.
Do not add analytics/tracking.
Do not add external API calls.
Do not add runtime AI generation.
Do not add dependencies unless explicitly required and justified.
Do not implement any module except `B1-10`.
Do not implement B1-12 review items.
Do not implement v0.81 unless explicitly instructed.
Do not implement Cases and Articles Completion Pass.
Do not implement Satzi/mascot features.
Do not add Genitive.
Do not add B2 active content.
Do not create runtime grammar generation.
Do not create uncontrolled Madlibs.
Do not randomly combine nouns and verbs.
Do not infer German case/articles dynamically.
Do not import TELC/textbook/coursebook text.
Do not change existing storage keys.
Do not break export/import compatibility.
Do not make mastery/readiness/certification claims.

Your job is to implement the already-approved `B1-10` planning outputs into the current Ozmosis app line as a safe sequential module patch.

---

# 1. Source of truth

Use this hierarchy:

1. Current repo/app files in this Codex task.
2. Current app package/source, expected v0.80.4 or later.
3. `OZMOSIS_SOURCE_BRIEF_v0.80.4.md`
4. `OZMOSIS_DEVELOPMENT_ROADMAP_v0.80.4.md`
5. `ozmosis_b1_m10_technical_problems_codex_import_plan_v0_1.md`
6. `ozmosis_b1_m10_technical_problems_schema_mapping_v0_1.md`
7. `ozmosis_b1_m10_technical_problems_final_inventory_v0_1.md`
8. `ozmosis_b1_m10_technical_problems_phase3a_qa_approved_v0_1.md`
9. `ozmosis_b1_m02_m11_import_plan_readiness_audit_v0_1.md`
10. `ozmosis_b1_m12_b1_review_consolidation_deferred_planning_update_v0_1.md`
11. Pipeline/core/audit docs if available.
12. Older chats/memory only as background.

If implementation files and planning files disagree:
- current app files win for architecture;
- `ozmosis_b1_m10_technical_problems_codex_import_plan_v0_1.md` wins for implementation strategy;
- `ozmosis_b1_m10_technical_problems_schema_mapping_v0_1.md` wins for item metadata;
- `ozmosis_b1_m10_technical_problems_final_inventory_v0_1.md` wins for row counts;
- `ozmosis_b1_m10_technical_problems_phase3a_qa_approved_v0_1.md` wins for approved item text and QA decisions.

Do not use TELC/Beruf/Aspekte/PDF source text as app content.

---

# 2. Required first action: inspect before editing

Before editing anything, inspect the current app source.

Verify:

- app version and current version labelling;
- where `index.html` is;
- whether B1 content is inline or in static content files;
- where B1 module registry/routes live;
- whether `B1-10` already exists as a placeholder;
- how B1-01 content/families are registered;
- how B1 evidence is recorded;
- where export/import is handled;
- where localStorage keys are used;
- whether task renderers support all `B1-10` task types;
- how production/self-marked cards are represented;
- how Today’s B1 Sprint and Diagnostic Sprint sample content;
- existing validation/test scripts.

If source cannot be inspected, stop with:

`BLOCKED_BY_SOURCE_INSPECTION`

---

# 3. Expected planning state

Module:

```txt
moduleId: B1-10
moduleTitle: Technical problems
internalPlanningId: b1_m10_technical_problems
moduleSlug: technical-problems
clean planned rows: 20
```

Planning files expected:

```txt
ozmosis_b1_m10_technical_problems_phase3a_qa_approved_v0_1.md
ozmosis_b1_m10_technical_problems_final_inventory_v0_1.md
ozmosis_b1_m10_technical_problems_schema_mapping_v0_1.md
ozmosis_b1_m10_technical_problems_codex_import_plan_v0_1.md
```

Do not implement if any required planning file is missing.

If counts differ from the planning files, use the files and document the discrepancy.

---

# 4. Patch goal

Implement `B1-10 — Technical problems` as a static module/content patch.

Required:

- import the clean rows from `ozmosis_b1_m10_technical_problems_schema_mapping_v0_1.md` / `ozmosis_b1_m10_technical_problems_final_inventory_v0_1.md`;
- preserve all approved item IDs or map them to stable app IDs without losing provenance;
- preserve targetFamilyId and targetId metadata where current app architecture supports it;
- preserve evidenceType;
- preserve production as self-marked only;
- preserve notice/concept cards as excluded from evidence;
- keep supportPolicy/supportPresentation semantics where possible;
- do not import cut/deferred rows if any appear in later files;
- keep `B1-10` out of broad mixed sprints unless current sampling can include it safely.

Recommended first exposure:

```txt
B1-10 module practice route first
```

Do not flood Today’s B1 Sprint or Diagnostic Sprint with the new module in this patch.

---

# 5. Architecture constraints

Preserve:

- static browser app;
- GitHub Pages compatibility;
- repo-root `index.html` unless current repo structure already uses static content modules;
- current dark neon console identity;
- mobile-first layout;
- existing storage keys:
  - `ozmosis_b1_sprint_progress_v1`
  - `ozmosis_b1_progress_evidence_v1`
- export/import compatibility;
- existing B1-01 behaviour;
- existing multiple-choice shuffling;
- German LTR in Arabic UI contexts;
- production self-marking.

No storage-key renaming.

No old-export breakage.

---

# 6. Implementation approach

Use the current app’s existing content conventions.

Expected approach:

```txt
static module records / static approved items / static variant-family-compatible metadata if supported
```

Do not create runtime grammar generation.

If the current app cannot represent one of the mapped task types safely, stop and report the renderer gap rather than inventing a new architecture.

Potential blocker verdicts:

```txt
BLOCKED_BY_SOURCE_INSPECTION
BLOCKED_BY_SOURCE_GAP
BLOCKED_BY_ROUTE_ARCHITECTURE
BLOCKED_BY_RENDERER_GAP
BLOCKED_BY_STORAGE_COMPATIBILITY
BLOCKED_BY_ROW_INTEGRITY
```

---

# 7. Tests Codex must run or explicitly mark blocked

Do not claim tests passed unless actually run.

Required tests:

- syntax/static check;
- content count gate: `20` clean `B1-10` records present;
- duplicate/malformed ID gate;
- route/module registration check;
- `B1-10` route smoke test;
- all imported task types render safely;
- short-answer/cloze grading smoke;
- repair/Satzbau/Umformen smoke if present;
- production card self-marking smoke;
- evidence record includes stable item ID and target/module metadata where current app supports it;
- export/import smoke;
- old-export tolerance smoke if fixture available;
- protected localStorage keys unchanged;
- multiple-choice shuffling regression;
- Arabic UI / German LTR smoke;
- responsive checks if browser available:
  - 320×568
  - 390×844
  - 430×932
  - 768×1024
  - 1365×599
  - 1440×900

Document blocked tests separately.

---

# 8. Documentation / changelog

Create/update docs using current repo conventions.

At minimum, provide a changelog draft for:

`v0.80.13 — B1-10 Technical problems`

Include:

- added module/content count;
- preserved storage/export;
- task types covered;
- production self-marked;
- tests actually run;
- tests blocked/not run;
- known limitations.

---

# 9. Deliverables

Return:

1. Source inspected
2. Architecture findings
3. Files changed
4. Implementation summary
5. Imported record count
6. Excluded/deferred records
7. Count validation result
8. Evidence/export/import safety result
9. localStorage safety result
10. Route/sampling decision
11. Tests actually run
12. Tests blocked/not run
13. Responsive/visual test status
14. Changelog draft
15. Known limitations
16. Final verdict
17. Modified package/files

Do not claim live GitHub Pages deployment unless actually deployed and tested.

---

# 10. Final verdict

Use exactly one:

- `B1_10_IMPLEMENTED_AND_TESTED`
- `B1_10_IMPLEMENTED_WITH_LIMITED_TESTING`
- `B1_10_IMPLEMENTED_BUT_NEEDS_FIXES`
- `BLOCKED_BY_SOURCE_INSPECTION`
- `BLOCKED_BY_SOURCE_GAP`
- `BLOCKED_BY_ROUTE_ARCHITECTURE`
- `BLOCKED_BY_RENDERER_GAP`
- `BLOCKED_BY_STORAGE_COMPATIBILITY`
- `BLOCKED_BY_ROW_INTEGRITY`
```

### Post-Codex QA prompt for B1-10

```markdown
Title: Ozmosis B1-10 — Post-Codex QA for v0.80.13

Use British English. Be direct, strict, and practical.

Audit the Codex output for `v0.80.13 — B1-10 Technical problems`.

Do not write app code.
Do not create new content.
Do not approve unrun tests.
Do not assume Codex’s claims are true without inspecting the returned files/report.

Check:

1. Source files changed
2. Implementation scope
3. Imported row count: expected `20`
4. No unrelated modules implemented
5. No B1-12 active review items
6. localStorage keys unchanged
7. export/import compatibility preserved
8. evidence semantics preserved
9. production self-marked only
10. route works
11. task renderers work
12. cut/deferred records absent
13. no copied source text
14. German LTR preserved
15. responsive / visual QA status
16. tests actually run vs claimed

Final verdict:

- `B1_10_PATCH_ACCEPTED`
- `B1_10_PATCH_ACCEPTED_WITH_CAVEATS`
- `B1_10_PATCH_NEEDS_FIXES`
- `B1_10_PATCH_REJECTED`
- `BLOCKED_BY_MISSING_CODEX_OUTPUT`

End with:
- final verdict
- exact next recommended action.
```

### Codex fix prompt if QA fails for B1-10

```markdown
Title: Ozmosis B1-10 — Fix Patch After Post-Codex QA

Use British English. Be direct, strict, and practical.

You are fixing the existing `v0.80.13 — B1-10 Technical problems` patch.

Do not add new scope.
Do not implement another module.
Do not redesign.
Do not change storage keys.
Do not create new content unless the QA report identifies a direct missing approved record.
Do not claim tests passed unless actually run.

Use:

1. The failed Codex output package.
2. The post-Codex QA report.
3. `ozmosis_b1_m10_technical_problems_codex_import_plan_v0_1.md`
4. `ozmosis_b1_m10_technical_problems_schema_mapping_v0_1.md`
5. `ozmosis_b1_m10_technical_problems_final_inventory_v0_1.md`
6. `ozmosis_b1_m10_technical_problems_phase3a_qa_approved_v0_1.md`
7. Current app files.

Fix only the issues listed in the QA report.

Return:

1. Fix summary
2. Files changed
3. Exact QA issues addressed
4. Tests run
5. Tests still blocked
6. Final verdict

Final verdict:

- `B1_10_FIXED_AND_TESTED`
- `B1_10_FIXED_WITH_LIMITED_TESTING`
- `B1_10_STILL_NEEDS_FIXES`
- `BLOCKED_BY_SOURCE_GAP`
- `BLOCKED_BY_ARCHITECTURE`
```

---

## B1-11 — Colleague feedback / conflict

### Codex implementation prompt — B1-11 / v0.80.14

```markdown
Title: Ozmosis v0.80.14 — Implement B1-11 Colleague feedback / conflict

Use British English. Be direct, strict, and practical.

You are implementing one narrow Ozmosis app patch.

Patch label:

`v0.80.14 — B1-11 Colleague feedback / conflict`

This is a single-module implementation task.

Do not redesign the app.
Do not rewrite the app.
Do not add a backend.
Do not add a framework.
Do not add a build step.
Do not add a package manager.
Do not add a database.
Do not add accounts.
Do not add analytics/tracking.
Do not add external API calls.
Do not add runtime AI generation.
Do not add dependencies unless explicitly required and justified.
Do not implement any module except `B1-11`.
Do not implement B1-12 review items.
Do not implement v0.81 unless explicitly instructed.
Do not implement Cases and Articles Completion Pass.
Do not implement Satzi/mascot features.
Do not add Genitive.
Do not add B2 active content.
Do not create runtime grammar generation.
Do not create uncontrolled Madlibs.
Do not randomly combine nouns and verbs.
Do not infer German case/articles dynamically.
Do not import TELC/textbook/coursebook text.
Do not change existing storage keys.
Do not break export/import compatibility.
Do not make mastery/readiness/certification claims.

Your job is to implement the already-approved `B1-11` planning outputs into the current Ozmosis app line as a safe sequential module patch.

---

# 1. Source of truth

Use this hierarchy:

1. Current repo/app files in this Codex task.
2. Current app package/source, expected v0.80.4 or later.
3. `OZMOSIS_SOURCE_BRIEF_v0.80.4.md`
4. `OZMOSIS_DEVELOPMENT_ROADMAP_v0.80.4.md`
5. `ozmosis_b1_m11_colleague_feedback_conflict_codex_import_plan_v0_1.md`
6. `ozmosis_b1_m11_colleague_feedback_conflict_schema_mapping_v0_1.md`
7. `ozmosis_b1_m11_colleague_feedback_conflict_final_inventory_v0_1.md`
8. `ozmosis_b1_m11_colleague_feedback_conflict_phase3a_qa_approved_v0_1.md`
9. `ozmosis_b1_m02_m11_import_plan_readiness_audit_v0_1.md`
10. `ozmosis_b1_m12_b1_review_consolidation_deferred_planning_update_v0_1.md`
11. Pipeline/core/audit docs if available.
12. Older chats/memory only as background.

If implementation files and planning files disagree:
- current app files win for architecture;
- `ozmosis_b1_m11_colleague_feedback_conflict_codex_import_plan_v0_1.md` wins for implementation strategy;
- `ozmosis_b1_m11_colleague_feedback_conflict_schema_mapping_v0_1.md` wins for item metadata;
- `ozmosis_b1_m11_colleague_feedback_conflict_final_inventory_v0_1.md` wins for row counts;
- `ozmosis_b1_m11_colleague_feedback_conflict_phase3a_qa_approved_v0_1.md` wins for approved item text and QA decisions.

Do not use TELC/Beruf/Aspekte/PDF source text as app content.

---

# 2. Required first action: inspect before editing

Before editing anything, inspect the current app source.

Verify:

- app version and current version labelling;
- where `index.html` is;
- whether B1 content is inline or in static content files;
- where B1 module registry/routes live;
- whether `B1-11` already exists as a placeholder;
- how B1-01 content/families are registered;
- how B1 evidence is recorded;
- where export/import is handled;
- where localStorage keys are used;
- whether task renderers support all `B1-11` task types;
- how production/self-marked cards are represented;
- how Today’s B1 Sprint and Diagnostic Sprint sample content;
- existing validation/test scripts.

If source cannot be inspected, stop with:

`BLOCKED_BY_SOURCE_INSPECTION`

---

# 3. Expected planning state

Module:

```txt
moduleId: B1-11
moduleTitle: Colleague feedback / conflict
internalPlanningId: b1_m11_colleague_feedback_conflict
moduleSlug: colleague-feedback-conflict
clean planned rows: 18
```

Planning files expected:

```txt
ozmosis_b1_m11_colleague_feedback_conflict_phase3a_qa_approved_v0_1.md
ozmosis_b1_m11_colleague_feedback_conflict_final_inventory_v0_1.md
ozmosis_b1_m11_colleague_feedback_conflict_schema_mapping_v0_1.md
ozmosis_b1_m11_colleague_feedback_conflict_codex_import_plan_v0_1.md
```

Do not implement if any required planning file is missing.

If counts differ from the planning files, use the files and document the discrepancy.

---

# 4. Patch goal

Implement `B1-11 — Colleague feedback / conflict` as a static module/content patch.

Required:

- import the clean rows from `ozmosis_b1_m11_colleague_feedback_conflict_schema_mapping_v0_1.md` / `ozmosis_b1_m11_colleague_feedback_conflict_final_inventory_v0_1.md`;
- preserve all approved item IDs or map them to stable app IDs without losing provenance;
- preserve targetFamilyId and targetId metadata where current app architecture supports it;
- preserve evidenceType;
- preserve production as self-marked only;
- preserve notice/concept cards as excluded from evidence;
- keep supportPolicy/supportPresentation semantics where possible;
- do not import cut/deferred rows if any appear in later files;
- keep `B1-11` out of broad mixed sprints unless current sampling can include it safely.

Recommended first exposure:

```txt
B1-11 module practice route first
```

Do not flood Today’s B1 Sprint or Diagnostic Sprint with the new module in this patch.

---

# 5. Architecture constraints

Preserve:

- static browser app;
- GitHub Pages compatibility;
- repo-root `index.html` unless current repo structure already uses static content modules;
- current dark neon console identity;
- mobile-first layout;
- existing storage keys:
  - `ozmosis_b1_sprint_progress_v1`
  - `ozmosis_b1_progress_evidence_v1`
- export/import compatibility;
- existing B1-01 behaviour;
- existing multiple-choice shuffling;
- German LTR in Arabic UI contexts;
- production self-marking.

No storage-key renaming.

No old-export breakage.

---

# 6. Implementation approach

Use the current app’s existing content conventions.

Expected approach:

```txt
static module records / static approved items / static variant-family-compatible metadata if supported
```

Do not create runtime grammar generation.

If the current app cannot represent one of the mapped task types safely, stop and report the renderer gap rather than inventing a new architecture.

Potential blocker verdicts:

```txt
BLOCKED_BY_SOURCE_INSPECTION
BLOCKED_BY_SOURCE_GAP
BLOCKED_BY_ROUTE_ARCHITECTURE
BLOCKED_BY_RENDERER_GAP
BLOCKED_BY_STORAGE_COMPATIBILITY
BLOCKED_BY_ROW_INTEGRITY
```

---

# 7. Tests Codex must run or explicitly mark blocked

Do not claim tests passed unless actually run.

Required tests:

- syntax/static check;
- content count gate: `18` clean `B1-11` records present;
- duplicate/malformed ID gate;
- route/module registration check;
- `B1-11` route smoke test;
- all imported task types render safely;
- short-answer/cloze grading smoke;
- repair/Satzbau/Umformen smoke if present;
- production card self-marking smoke;
- evidence record includes stable item ID and target/module metadata where current app supports it;
- export/import smoke;
- old-export tolerance smoke if fixture available;
- protected localStorage keys unchanged;
- multiple-choice shuffling regression;
- Arabic UI / German LTR smoke;
- responsive checks if browser available:
  - 320×568
  - 390×844
  - 430×932
  - 768×1024
  - 1365×599
  - 1440×900

Document blocked tests separately.

---

# 8. Documentation / changelog

Create/update docs using current repo conventions.

At minimum, provide a changelog draft for:

`v0.80.14 — B1-11 Colleague feedback / conflict`

Include:

- added module/content count;
- preserved storage/export;
- task types covered;
- production self-marked;
- tests actually run;
- tests blocked/not run;
- known limitations.

---

# 9. Deliverables

Return:

1. Source inspected
2. Architecture findings
3. Files changed
4. Implementation summary
5. Imported record count
6. Excluded/deferred records
7. Count validation result
8. Evidence/export/import safety result
9. localStorage safety result
10. Route/sampling decision
11. Tests actually run
12. Tests blocked/not run
13. Responsive/visual test status
14. Changelog draft
15. Known limitations
16. Final verdict
17. Modified package/files

Do not claim live GitHub Pages deployment unless actually deployed and tested.

---

# 10. Final verdict

Use exactly one:

- `B1_11_IMPLEMENTED_AND_TESTED`
- `B1_11_IMPLEMENTED_WITH_LIMITED_TESTING`
- `B1_11_IMPLEMENTED_BUT_NEEDS_FIXES`
- `BLOCKED_BY_SOURCE_INSPECTION`
- `BLOCKED_BY_SOURCE_GAP`
- `BLOCKED_BY_ROUTE_ARCHITECTURE`
- `BLOCKED_BY_RENDERER_GAP`
- `BLOCKED_BY_STORAGE_COMPATIBILITY`
- `BLOCKED_BY_ROW_INTEGRITY`
```

### Post-Codex QA prompt for B1-11

```markdown
Title: Ozmosis B1-11 — Post-Codex QA for v0.80.14

Use British English. Be direct, strict, and practical.

Audit the Codex output for `v0.80.14 — B1-11 Colleague feedback / conflict`.

Do not write app code.
Do not create new content.
Do not approve unrun tests.
Do not assume Codex’s claims are true without inspecting the returned files/report.

Check:

1. Source files changed
2. Implementation scope
3. Imported row count: expected `18`
4. No unrelated modules implemented
5. No B1-12 active review items
6. localStorage keys unchanged
7. export/import compatibility preserved
8. evidence semantics preserved
9. production self-marked only
10. route works
11. task renderers work
12. cut/deferred records absent
13. no copied source text
14. German LTR preserved
15. responsive / visual QA status
16. tests actually run vs claimed

Final verdict:

- `B1_11_PATCH_ACCEPTED`
- `B1_11_PATCH_ACCEPTED_WITH_CAVEATS`
- `B1_11_PATCH_NEEDS_FIXES`
- `B1_11_PATCH_REJECTED`
- `BLOCKED_BY_MISSING_CODEX_OUTPUT`

End with:
- final verdict
- exact next recommended action.
```

### Codex fix prompt if QA fails for B1-11

```markdown
Title: Ozmosis B1-11 — Fix Patch After Post-Codex QA

Use British English. Be direct, strict, and practical.

You are fixing the existing `v0.80.14 — B1-11 Colleague feedback / conflict` patch.

Do not add new scope.
Do not implement another module.
Do not redesign.
Do not change storage keys.
Do not create new content unless the QA report identifies a direct missing approved record.
Do not claim tests passed unless actually run.

Use:

1. The failed Codex output package.
2. The post-Codex QA report.
3. `ozmosis_b1_m11_colleague_feedback_conflict_codex_import_plan_v0_1.md`
4. `ozmosis_b1_m11_colleague_feedback_conflict_schema_mapping_v0_1.md`
5. `ozmosis_b1_m11_colleague_feedback_conflict_final_inventory_v0_1.md`
6. `ozmosis_b1_m11_colleague_feedback_conflict_phase3a_qa_approved_v0_1.md`
7. Current app files.

Fix only the issues listed in the QA report.

Return:

1. Fix summary
2. Files changed
3. Exact QA issues addressed
4. Tests run
5. Tests still blocked
6. Final verdict

Final verdict:

- `B1_11_FIXED_AND_TESTED`
- `B1_11_FIXED_WITH_LIMITED_TESTING`
- `B1_11_STILL_NEEDS_FIXES`
- `BLOCKED_BY_SOURCE_GAP`
- `BLOCKED_BY_ARCHITECTURE`
```

---

## Final sequence after B1-11

After B1-11 is accepted, do **not** immediately generate B1-12 review items.

Run a final ChatGPT-side audit first:

```markdown
Title: Ozmosis B1-02 to B1-11 — Post-Implementation Stability Audit Before B1-12

Use British English. Be direct, strict, and practical.

Audit whether B1-02 through B1-11 have stable app-implemented item IDs, target IDs, reviewGroups, evidence groups, route access, export/import compatibility, and QA reports.

Do not generate B1-12 items yet unless all prerequisites pass.

Check:
- all sequential modules implemented and accepted;
- route smoke passed for each;
- export/import passed after each;
- no storage keys changed;
- evidence IDs stable;
- no B1-12 active review content exists yet;
- no module-boundary drift or B2 content entered;
- production remains self-marked.

Final verdict:
- READY_FOR_B1_12_REVIEW_ITEM_PLANNING
- B1_12_STILL_DEFERRED
- BLOCKED_BY_MISSING_IMPLEMENTATION_QA
- BLOCKED_BY_STORAGE_OR_EVIDENCE_RISK

End with:
- final verdict
- exact next recommended action.
```
