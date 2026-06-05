# Ozmosis Development Roadmap v0.80.14.5

## Current Patch

`v0.80.14.5 - B1-03 Admin Office Candidate Addendum`

This patch is complete when:

- The current v0.80.14.4 app state is verified.
- B1-03 content location and schema are inspected before editing.
- Only approved, non-duplicate B1-03 addendum rows are activated.
- Weak or crowding-prone candidate rows are deferred or documented.
- No textbook/coursebook text is imported.
- No storage keys, export/import structure, scoring, or production self-marking semantics change.
- A v0.80.14.5 static validation gate passes.
- A v0.80.14.5 browser smoke validates new B1-03 row rendering where Edge/CDP is available.
- Versioned README, changelog, source brief, roadmap, and QA report exist.

## Completed in v0.80.14.5

- Verified the starting v0.80.14.4 version and export metadata before edits.
- Located active B1-03 content in `content/b1-m03-job-search-offices.js`.
- Added ten original B1-03 admin-office/job-search addendum rows.
- Kept optional same-target repair siblings deferred to avoid short-round crowding.
- Deferred vocabulary-only, prompt-giveaway, rewrite-needed, B1-02-adjacent, and duplicate production candidates.
- Added `_development-files/v080145_b1_m03_admin_office_addendum_gate.cjs`.
- Added `_development-files/v080145_b1_m03_admin_office_browser_smoke.cjs`.
- Added v0.80.14.5 README, changelog, source brief, roadmap, and QA report.

## Deferred

- `ext_b1_03_009` and `ext_b1_03_010` same-target repair siblings.
- `ext_b1_03_012` and `ext_b1_03_018` vocabulary-only recognition rows.
- `ext_b1_03_013` prompt-giveaway row.
- `ext_b1_03_014` signature row pending rewrite.
- `ext_b1_03_015` appointment phrase pending explicit B1-03 office context or B1-02 handling.
- `ext_b1_03_016` production card because existing B1-03 production already covers required-documents questions.
- Broad visual redesign.
- B1-12.
- v0.81 Cases and Articles Completion Pass.
- Satzi.
- Genitive expansion.
- B2 active content.
- Runtime German morphology.
- Runtime AI.

## Next Planned Patch

`v0.81 - Cases and Articles Completion Pass`
