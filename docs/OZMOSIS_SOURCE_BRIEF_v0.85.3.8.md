# Ozmosis Source Brief v0.85.3.8

Patch: v0.85.3.8 - HUD, Keyboard, and Live Mobile Verification Gate

## Source Of Truth

- Runtime app: `index.html`
- Canonical README: `README.md`
- Canonical changelog: `CHANGELOG-FULL-OZMOSIS.txt`
- Strategic source brief: `docs/OZMOSIS_SOURCE_BRIEF_CURRENT.md`
- Strategic roadmap: `docs/OZMOSIS_DEVELOPMENT_ROADMAP_CURRENT.md`
- Feature register: `docs/OZMOSIS_FEATURE_REGISTER_CURRENT.md`
- QA report: `docs/qa/v0.85.3.8_hud_keyboard_mobile_gate.md`
- Result JSON: `docs/qa/v0.85.3.8_hud_keyboard_mobile_gate_results.json`

## Runtime State

- App version: `v0.85.3.8 - HUD, Keyboard, and Live Mobile Verification Gate`
- Export version: `v0.85.3.8-hud-keyboard-mobile-gate`
- Gate result: `HUD_KEYBOARD_MOBILE_GATE_ACCEPTED`
- Next patch: `v0.85.4 - Completion Gate Harness`

## Patch Scope

v0.85.3.8 is a verification-first UI gate. It verifies fixed-HUD clearance, keyboard-like reduced-height behaviour, responsive viewports, screenshot/contact-sheet proof, live GitHub Pages version status, and manual phone readiness after the accepted v0.85.3.7 correction/Satzbau pass.

The only runtime repairs are scoped layout repairs:

- post-answer B1 feedback/confidence clearance above the fixed HUD;
- short-height answered Satzbau compaction that hides pre-answer chunks and English gloss after feedback appears.

## Preserved Semantics

- No content-bank changes.
- No answer-key changes.
- No scoring changes.
- No evidence semantics changes.
- No confidence-value changes.
- No star-earning logic changes.
- No localStorage key changes.
- No export/import format changes.
- No dependency, build, backend, analytics, account, API, or runtime AI addition.

## Live Status

The local Edge/CDP gate checked live GitHub Pages. The live URL was reachable but still served `v0.85.3.7 - Correction and Satzbau Surface Pass` at gate time. This is documented as stale deployment/cache state, not a local acceptance failure.
