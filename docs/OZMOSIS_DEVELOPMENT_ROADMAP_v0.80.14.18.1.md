# Ozmosis Development Roadmap v0.80.14.18.1

## Current Patch

`v0.80.14.18.1 - Route Isolation Acceptance Hotfix`

This patch is complete when:

- v0.80.14.18 is treated as failed manual acceptance for route isolation;
- the root cause is identified;
- Home is hidden by computed style when Learning Map or Settings is active;
- Learning Map and Settings do not appear underneath Home;
- Dev Tools does not append under Home;
- Export Save and Import Save remain in Settings / Data;
- route-isolation DOM acceptance tests pass;
- syntax tests pass;
- versioned README, changelog, source brief, roadmap, and QA report exist.

## Completed in v0.80.14.18.1

- Added a late route-hidden CSS guard.
- Added `setActiveScreen(...)`.
- Routed persistent screens through the active-screen helper.
- Updated Dev Tools overlay isolation and restore behaviour.
- Preserved content, scoring, storage keys, star logic, and save workflow.

## Deferred

- Any German-learning content changes.
- Any scoring/star-earning rule changes.
- Any Star Threshold Overlay change.
- Any v0.81 Cases and Articles work.
- Any backend/API/account/sync system.
- Any broad navigation redesign.

## Next Planned Patch

`v0.81 - Cases and Articles Completion Pass`
