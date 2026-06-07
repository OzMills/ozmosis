# Ozmosis Source Brief v0.80.14.6

## Current Version

- App version: `v0.80.14.6`
- Export version: `v0.80.14.6-b1-progress-path-star-gate`
- Current README: `README-v0_80_14_6.md`
- Current changelog: `CHANGELOG-v0_80_14_6.txt`
- Current QA report: `docs/qa/v0.80.14.6_b1_progress_path_star_gate.md`

## Scope

v0.80.14.6 implements the first B1 Progress Path and star-gated category layer from `docs/design docs/OZMOSIS B1 Progress Path and Star-Gated Category System v0.1.md`.

This is a derived progress/navigation layer. It does not rewrite the evidence model, change scoring, alter protected storage keys, add new German content, activate B1-12, implement v0.81, add Satzi, expand Genitive, add B2 active content, add runtime German morphology, add runtime AI, add backend/API/accounts/analytics, add dependencies, introduce a package manager, add a build step, or redesign the app.

## Files of Interest

- `index.html`
- `docs/design docs/OZMOSIS B1 Progress Path and Star-Gated Category System v0.1.md`
- `_development-files/v080146_b1_progress_path_star_gate.cjs`
- `_development-files/v080146_b1_progress_path_browser_smoke.cjs`
- `README-v0_80_14_6.md`
- `CHANGELOG-v0_80_14_6.txt`
- `docs/OZMOSIS_SOURCE_BRIEF_v0.80.14.6.md`
- `docs/OZMOSIS_DEVELOPMENT_ROADMAP_v0.80.14.6.md`
- `docs/qa/v0.80.14.6_b1_progress_path_star_gate.md`

## B1 Path State

The app now derives a B1 Path from the existing registry:

- B1.1 Practical Admin and Appointments
- B1.2 Course and Work Starting Point
- B1.3 Job Search and Offices
- B1.4 Applications and Interviews
- B1.5 First Day and Contract Basics
- B1.6 Sick Leave, Doctor, and Insurance
- B1.7 Meetings and Leave Requests
- B1.8 Orders and Delivery
- B1.9 Complaints and Customer Service
- B1.10 Technical Problems
- B1.11 Colleague Feedback and Conflict
- B1.12 Forms, Admin, and Certificates, preview only
- B1.13 Learning and Exam Language, preview only
- B1.14 Connectors and Sentence Functions
- B1.15 Time, Place, and Movement
- B1.16 Money, Payment, and Contracts, preview only
- B1.17 Home, Family, and Daily Life Support, preview only
- B1.18 B1 to B2 Bridge Preview, preview only

Active categories route only to existing routes. Preview/deferred categories do not add B2 content or new practice banks.

## Star Semantics

Stars are derived from existing local evidence records:

- 0 stars: not yet correct
- 1 star: got right once
- 2 stars: got right twice
- 3 stars: got right 3 times
- 4 stars: got right 4 times
- 5 stars: got right 5 times

Stars belong to target families/practice targets, not raw item cards or variants. A target with repeated correct attempts gains stars; repeated variants do not inflate the denominator.

## Unlock Semantics

Recommended continuation requires:

- at least 50% of current category core targets at one star or more;
- required task types represented at one star or more where auto-graded;
- production practised at least once where production exists as a required/present task type.

Unlocks are soft. `Unlock anyway` writes only additive override metadata to `ozmosis_b1_path_unlock_overrides_v1`; it does not mark the previous category complete.

## Storage and Export

Protected localStorage keys are unchanged:

- `ozmosis_b1_sprint_progress_v1`
- `ozmosis_b1_progress_evidence_v1`

New additive key:

- `ozmosis_b1_path_unlock_overrides_v1`

Export metadata reports `v0.80.14.6-b1-progress-path-star-gate` and includes `b1PathStarSchemaVersion:"v1"` plus `b1PathUnlocks` when present. Imports without this additive field remain compatible.

## Architecture

The app remains a static browser app with repo-root `index.html`, no backend, no framework, no build step, no package manager, no dependency, no external API call, and no runtime AI.

## Historical Docs

The v0.80.14.5 README, changelog, source brief, roadmap, and QA report are retained as historical/superseded documentation.

## Next Planned Patch

`v0.81 - Cases and Articles Completion Pass`
