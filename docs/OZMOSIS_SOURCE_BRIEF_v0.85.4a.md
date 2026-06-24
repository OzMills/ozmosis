# Ozmosis Source Brief v0.85.4a - Satzbau Interaction, Chunk Randomisation, and iOS Input Zoom Repair

## Status

Current runtime baseline: `v0.85.4a - Satzbau Interaction, Chunk Randomisation, and iOS Input Zoom Repair`.

Current export version: `v0.85.4a-satzbau-touch-ios-zoom`.

Current gate result: `SATZBAU_TOUCH_IOS_ZOOM_ACCEPTED`.

Next required patch: `v0.85.5 - Runtime Display Contract Lock`.

## Purpose

v0.85.4a repairs three manual-test findings after the accepted v0.85.4 completion gate:

- Satzbau/word-order chunks looked tappable but did not build the answer.
- Text-entry controls could trigger iOS/Safari zoom because some computed font sizes were below 16px.
- Satzbau chunks were displayed in correct or near-correct order, weakening the practice target.

## Implementation Scope

The patch keeps the existing single-file static app and adds only a narrow runtime interaction repair:

- Satzbau chunks render as real button controls.
- Tapping chunks builds the same existing typed answer field in tap order.
- Selected chunks show selected state and can be reset through Clear.
- Manual typing remains available and still uses the existing answer-checking path.
- Satzbau chunk order is shuffled per attempt and remains stable during the attempt.
- Mobile/touch text-entry controls use a 16px minimum computed font size.
- A dependency-free Edge/CDP harness verifies the repair and creates screenshots/contact-sheet evidence.

## Preservation Rules

v0.85.4a preserves:

- content banks;
- answer keys;
- German-learning content;
- scoring;
- evidence semantics;
- confidence values;
- star earning logic;
- localStorage key names;
- export/import format;
- article-grid behaviour;
- shared practice-frame behaviour;
- production-card self-marking semantics;
- B1-only active scope.

## QA Evidence

- QA report: `docs/qa/v0.85.4a_satzbau_touch_ios_zoom.md`
- Result JSON: `docs/qa/v0.85.4a_satzbau_touch_ios_zoom_results.json`
- Screenshot contact sheet: `docs/qa/screenshots/v0.85.4a-satzbau-touch-ios-zoom/comparison.html`
- Harness: `scripts/ozmosis-satzbau-touch-ios-zoom-check.cjs`

## Required Next Patch

Proceed only to `v0.85.5 - Runtime Display Contract Lock`.

Do not start source cleanup, metadata migration, production completion, v0.86, or broader prompt/cue cleanup from this patch.
