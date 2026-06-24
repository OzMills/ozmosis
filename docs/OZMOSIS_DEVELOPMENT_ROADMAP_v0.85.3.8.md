# Ozmosis Development Roadmap v0.85.3.8

Patch: v0.85.3.8 - HUD, Keyboard, and Live Mobile Verification Gate

## Current Baseline

Current runtime baseline: `v0.85.3.8 - HUD, Keyboard, and Live Mobile Verification Gate`.

Current strict UI gate result: `HUD_KEYBOARD_MOBILE_GATE_ACCEPTED`.

Next required patch: `v0.85.4 - Completion Gate Harness`.

## Completed In This Patch

- Synced current planning docs from the accepted v0.85.3.7 baseline to the v0.85.3.8 gate.
- Added a no-dependency Edge/CDP QA gate at `scripts/ozmosis-hud-keyboard-mobile-gate.cjs`.
- Verified required normal, reduced-height, keyboard-like, responsive, and screenshot states.
- Verified Settings/Data Export Save and Import Save reachability.
- Verified export/import validation, malformed save rejection, and recent older save compatibility.
- Verified article-grid preservation for B1 cases/articles and Case Trainer feedback.
- Verified no body-level horizontal overflow in required viewports.
- Verified German learning content remains LTR under the Arabic/LTR smoke path.
- Generated required screenshots and contact sheet under `docs/qa/screenshots/v0.85.3.8-hud-keyboard-mobile-gate/`.
- Created `docs/qa/v0.85.3.8_manual_phone_test_checklist.md`.
- Documented live GitHub Pages as reachable but still serving v0.85.3.7 before deployment/cache update.

## Runtime Repairs

- Added a scoped post-answer HUD-clearance helper for B1 practice states.
- Added answered-state bottom clearance for the B1 answer area.
- Added short-height Satzbau answered-state compaction so feedback/confidence controls remain clear of the fixed HUD.

## Preserved

- Content banks.
- Answer keys.
- Scoring.
- Evidence semantics.
- Confidence values.
- Star earning logic.
- localStorage keys.
- Export/import format.
- Today's route and item composition.
- Article-grid semantics.
- Production-card semantics.

## Roadmap Position

v0.85.3.8 completes the HUD/keyboard/live/mobile handoff gate.

v0.85.4 may now start as the Completion Gate Harness. v0.86 remains blocked until the later final v0.85.x readiness gate reports `READY_FOR_V0.86`.
