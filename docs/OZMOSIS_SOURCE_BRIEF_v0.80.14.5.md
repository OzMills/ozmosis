# Ozmosis Source Brief v0.80.14.5

## Current Version

- App version: `v0.80.14.5`
- Export version: `v0.80.14.5-b1-m03-admin-office-candidate-addendum`
- Current README: `README-v0_80_14_5.md`
- Current changelog: `CHANGELOG-v0_80_14_5.txt`
- Current QA report: `docs/qa/v0.80.14.5_b1_m03_admin_office_candidate_addendum.md`

## Scope

v0.80.14.5 is a narrow B1-03 admin-office/job-search content addendum.

It imports ten original Ozmosis candidate rows into `content/b1-m03-job-search-offices.js`: six `Luecke`, two `Satzbau`, one `Reparatur`, and one `Umformen`. It does not add TELC, Klett, Hueber, Aspekte, coursebook, B1-12, v0.81, Satzi, Genitive expansion, B2, runtime German morphology, runtime AI, backend/API/accounts/analytics, dependencies, a package manager, a build step, or a redesign.

## Files of Interest

- `index.html`
- `content/b1-m03-job-search-offices.js`
- `_development-files/v080145_b1_m03_admin_office_addendum_gate.cjs`
- `_development-files/v080145_b1_m03_admin_office_browser_smoke.cjs`
- `README-v0_80_14_5.md`
- `CHANGELOG-v0_80_14_5.txt`
- `docs/OZMOSIS_SOURCE_BRIEF_v0.80.14.5.md`
- `docs/OZMOSIS_DEVELOPMENT_ROADMAP_v0.80.14.5.md`
- `docs/qa/v0.80.14.5_b1_m03_admin_office_candidate_addendum.md`

## Content State

B1-03 now contains 35 active practice items plus 3 notice cards.

Imported active rows:

- `ext_b1_03_001`
- `ext_b1_03_002`
- `ext_b1_03_003`
- `ext_b1_03_004`
- `ext_b1_03_005`
- `ext_b1_03_006`
- `ext_b1_03_007`
- `ext_b1_03_008`
- `ext_b1_03_011`
- `ext_b1_03_017`

Deferred rows:

- `ext_b1_03_009`
- `ext_b1_03_010`
- `ext_b1_03_012`
- `ext_b1_03_013`
- `ext_b1_03_014`
- `ext_b1_03_015`
- `ext_b1_03_016`
- `ext_b1_03_018`

No choice rows and no production rows were imported in this addendum.

## Storage and Export

Protected localStorage keys are unchanged:

- `ozmosis_b1_sprint_progress_v1`
- `ozmosis_b1_progress_evidence_v1`

Export/import structure remains compatible. Export metadata now reports `v0.80.14.5-b1-m03-admin-office-candidate-addendum`.

## Architecture

The app remains a static browser app with repo-root `index.html`, no backend, no framework, no build step, no package manager, no dependency, no external API call, and no runtime AI.

## Historical Docs

The v0.80.14.4 README, changelog, source brief, roadmap, and QA report are retained as historical/superseded documentation.

## Next Planned Patch

`v0.81 - Cases and Articles Completion Pass`
