# Ozmosis Development Roadmap v0.80.14.16

## Current Patch

`v0.80.14.16 - Export Save / Import Save File Workflow`

This patch is complete when:

- starting v0.80.14.15 state is inspected;
- existing export/import code is inspected;
- existing localStorage keys are inspected;
- existing progress-summary rebuild path is inspected;
- `Export Save` and `Import Save` labels are present;
- export creates a local JSON save payload and filename;
- import validates before localStorage mutation;
- failed imports leave existing progress untouched;
- derived summary data is rebuilt after successful import;
- syntax and save-validator checks pass;
- versioned README, changelog, source brief, roadmap, and QA report exist.

## Completed in v0.80.14.16

- Updated app/export metadata.
- Re-labelled save controls to `Export Save` and `Import Save`.
- Added save workflow status messaging.
- Added a reusable save payload builder.
- Added an Ozmosis save payload validator.
- Added transaction-style import application with localStorage snapshot/restore handling.
- Kept older safe saves compatible when derived summary data is missing.
- Preserved protected storage key names.
- Preserved score, star, evidence, content, route, and Star Threshold Overlay semantics.

## Deferred

- Browser/native file-picker validation, because browser automation remains blocked by the environment before page load.
- v0.81 Cases and Articles Completion Pass.
- Any backend/API/account/sync save system.
- Any cloud save workflow.
- Any storage-key migration.
- Any German-learning content changes.

## Next Planned Patch

`v0.81 - Cases and Articles Completion Pass`
