# Ozmosis Development Roadmap v0.80.14.2

## Current Patch

`v0.80.14.2 - Beta UX Interaction Pass`

This patch is complete when:

- Edge/Chromium mouse-wheel scrolling works on long B1 practice screens without breaking mobile touch scrolling.
- Choice-button B1 tasks submit on one click/tap.
- Typed cloze, repair text, Satzbau, and Case Trainer inputs still require `Prüfen`.
- Auto-graded and assisted B1 submissions require confidence before continuation.
- Confidence buttons are ordered `I GUESSED`, `I WAS UNSURE`, `I KNEW IT`.
- Teach Me is integrated with the inline cloze action area and uses the requested support copy.
- Practice prompt size, prompt-to-answer spacing, inline cloze punctuation, input styling, button press feedback, and HUD progress visibility are improved.
- Storage keys, export/import, scoring, evidence semantics, Today B1 Sprint, Diagnostic Sprint, and content banks remain stable.

## Completed in v0.80.14.2

- Added one-tap choice submission through the existing answer/evidence path.
- Added confidence-required continuation for normal B1 auto-graded and assisted evidence records.
- Updated confidence button order and blocked continuation copy.
- Added inline cloze Teach Me/Prüfen action switching.
- Updated Teach Me support copy.
- Added B1 scroll overrides to avoid nested scroll trapping in Edge/Chromium.
- Reduced practice prompt scale and tightened choice spacing.
- Added inline cloze punctuation normalisation.
- Standardised pre-answer cloze input width and thinned the input outline.
- Reinforced button tap/press feedback and HUD progress-bar thickness.
- Added `_development-files/v080142_beta_ux_interaction_gate.cjs`.
- Added v0.80.14.2 README, changelog, source brief, roadmap, and QA report.

## Deferred Beta UX Backlog

- Full main-screen redesign.
- Full learning-map redesign.
- Learning-map summary table.
- Percentage checker with non-mastery caveat.
- Automatic capability progression.
- Every-word vocabulary/cloze expansion.
- Broad code cleanup/refactor.
- Satzi.
- B1-12.
- v0.81 Cases and Articles Completion Pass.

## Next Planned Patch

`v0.81 - Cases and Articles Completion Pass`
