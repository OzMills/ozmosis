# Ozmosis Development Roadmap v0.82 - Prepositions Completion Pass

## Completed In v0.82

- Added B1 Prepositions content at `content/b1-prepositions.js`.
- Added Prepositions route access from the menu and Grammar hub.
- Added route/recommendation/debug wiring for the existing evidence spine.
- Kept Prepositions out of Today's B1 Sprint and Diagnostic Sprint.
- Preserved scoring, star logic, storage keys, save/export/import, Case Trainer, B1 Path, and B1-only active scope.

## Validation Status

Static and source gates passed:

- inline `index.html` script parses;
- all `content/*.js` files parse;
- the prepositions bank validates to 92 items with required metadata;
- route wiring is present in source;
- storage keys and Export Save / Import Save strings remain present;
- B1-18 remains preview-only and excluded from Daily/Diagnostic.

Browser route acceptance did not complete in this environment. Edge/CDP timed out waiting for the app route marker, and the in-app browser path was blocked by the Windows sandbox.

## Current Handoff

Next required patch:

`v0.82.1 - Prepositions Browser Acceptance Gate`

After v0.82.1 accepts the route, the next implementation patch may be:

`v0.83 - Word Order Completion Pass`

## Still Locked

- Word Order Completion Pass until v0.82 route acceptance exists.
- Connectors Completion Pass until Word Order is complete.
- Satzi remains planning-only.
- B2/CAT18 implementation remains locked.
- Genitive and adjective-ending expansion remain out of normal B1 flow.
