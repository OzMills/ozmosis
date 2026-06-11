# Ozmosis Development Roadmap v0.80.14.12

## Current Patch

`v0.80.14.12 - Verification / Learner-Facing Artefact Hotfix`

This patch is complete when:

- Starting v0.80.14.11 version/export state is verified.
- Source packages and source CSV hashes are unchanged.
- Normal learner routes do not show known source/generated artefacts.
- Learner-facing multiple-choice options do not visibly expose source `A`/`B`/`C` labels.
- Production cards render structured prompt metadata where safe.
- Rows that cannot be safely rendered remain excluded from normal learner routes and preserved for review/debug.
- Completed/max-star items are verified by seeded browser evidence to be excluded from ordinary practice.
- Dev Tools Review Tests and Review Edit List remain available.
- Export/import compatibility remains intact.
- Arabic UI does not reverse German learning content.
- Static validation and browser validation pass.
- Versioned README, changelog, source brief, roadmap, QA report, screenshots, and package exist.

## Completed in v0.80.14.12

- Verified current v0.80.14.11 app/export version and required docs before editing.
- Reproduced the reported `Beste Bitte um Lösung:` normal-route artefact.
- Reproduced raw source choice prefixes in normal-route candidates.
- Reproduced raw structured production prompt labels in source production-card prompts.
- Confirmed the v0.80.14.11 source-preservation gate path-fragility and patched separator normalisation.
- Added `b1NormaliseLearnerChoiceDisplay(...)`.
- Added route/rendering guards for source-shaped prompts and unsafe learner-facing choices.
- Added structured production prompt parsing and rendering.
- Added safe empty-state status copy to B1 module route starters.
- Added `_development-files/v0801412_verification_learner_facing_artefact_gate.cjs`.
- Added `_development-files/v0801412_browser_smoke.cjs`.
- Added source-preservation after-manifest and artefact-audit reports.
- Added browser screenshots under `docs/qa/screenshots/v0.80.14.12/`.
- Preserved source content, source packages, content-bank source files, scoring, correctness rules, production self-marking, and storage keys.

## Deferred

- v0.81 Cases and Articles Completion Pass.
- Manual review/repair of rows preserved in Dev Tools Review Tests.
- Manual activation of currently excluded generic bank rows after review.
- CAT18/B2 activation.
- Satzi.
- Genitive expansion.
- Runtime morphology or runtime AI.
- Backend/API/accounts/analytics.
- Full Leitner scheduling.
- Broad German task-text rewrite.

## Next Planned Patch

`v0.81 - Cases and Articles Completion Pass`
