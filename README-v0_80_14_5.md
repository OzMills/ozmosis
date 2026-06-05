# Ozmosis v0.80.14.5

## B1-03 Admin Office Candidate Addendum

Ozmosis v0.80.14.5 is a narrow B1-03 content-bank addendum on top of v0.80.14.4.

It adds ten approved official-office/job-search admin-language rows to `content/b1-m03-job-search-offices.js`. It does not redesign the app, change scoring, alter storage keys, add dependencies, add runtime AI, add runtime German generation, or implement v0.81.

## What Changed

- Added six B1-03 `Luecke` rows:
  - `ext_b1_03_001`: `einen Nachweis vorlegen`
  - `ext_b1_03_002`: `eine Bescheinigung beantragen`
  - `ext_b1_03_003`: `eine Kopie mitbringen`
  - `ext_b1_03_004`: `sich informieren über`
  - `ext_b1_03_005`: `einen Antrag auf ... stellen`
  - `ext_b1_03_006`: `innerhalb von + Zeitraum`
- Added two B1-03 `Satzbau` rows:
  - `ext_b1_03_007`: polite office help question
  - `ext_b1_03_008`: asking which documents are needed
- Added one B1-03 `Reparatur` row:
  - `ext_b1_03_011`: `sich melden bei`
- Added one B1-03 `Umformen` row:
  - `ext_b1_03_017`: yes/no office question order with modal verb
- Added `_development-files/v080145_b1_m03_admin_office_addendum_gate.cjs`.
- Added `_development-files/v080145_b1_m03_admin_office_browser_smoke.cjs`.

## Deferred Candidate Rows

- `ext_b1_03_009` and `ext_b1_03_010`: deferred to avoid same-target sibling crowding with the imported `über` and `innerhalb von` clozes.
- `ext_b1_03_012`: deferred as vocabulary recognition only and weak evidence.
- `ext_b1_03_013`: deferred because the original prompt gives away `Geburtsdatum`.
- `ext_b1_03_014`: deferred for rewrite before import.
- `ext_b1_03_015`: deferred to B1-02 unless an explicit B1-03 office context is added.
- `ext_b1_03_016`: deferred because existing B1-03 production already covers asking which documents are needed.
- `ext_b1_03_018`: deferred as vocabulary recognition only and weak evidence.

## Preserved

- Static browser app architecture.
- Main deployed file: `index.html`.
- No backend, framework, build step, package manager, or dependency.
- Existing storage keys:
  - `ozmosis_b1_sprint_progress_v1`
  - `ozmosis_b1_progress_evidence_v1`
- Export/import compatibility.
- Today B1 Sprint composition.
- Diagnostic Sprint composition.
- Existing content bank item IDs, answers, and statuses.
- Production self-marking semantics.
- Scoring and correctness rules.
- Choice shuffling safety.
- B1-only active scope.
- German learning content LTR, including Arabic UI contexts.

## QA

QA report: `docs/qa/v0.80.14.5_b1_m03_admin_office_candidate_addendum.md`

Local gates:

- `_development-files/v080145_b1_m03_admin_office_addendum_gate.cjs`
- `_development-files/v080145_b1_m03_admin_office_browser_smoke.cjs`
- `_development-files/v080144_b1_practice_flow_ux_gate.cjs`
- `_development-files/v080143_b1_question_quality_gate.cjs`
- `_development-files/v080141_beta_readiness_practice_ux_gate.cjs`

Current changelog: `CHANGELOG-v0_80_14_5.txt`

Current source brief: `docs/OZMOSIS_SOURCE_BRIEF_v0.80.14.5.md`

Current roadmap: `docs/OZMOSIS_DEVELOPMENT_ROADMAP_v0.80.14.5.md`
