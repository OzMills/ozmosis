# Ozmosis Development Roadmap v0.80.14.4

## Current Patch

`v0.80.14.4 - B1 Practice Flow UX Catch-up`

This patch is complete when:

- The current v0.80.14.3 app state is verified.
- Confidence guidance is rendered as text rather than as a disabled `Weiter` button.
- Confidence selection auto-advances normal auto-graded B1 items.
- Production/self-marked practice is not pulled into confidence auto-advance.
- Typed B1 `Luecke` items keep `Teach me` and `Prüfen` in a stable right-hand slot.
- Translation/support labels are discoverable and not labelled only as `Meaning`.
- Bare `Corrected.` repair fallback is removed.
- Vague learner-facing `Explain` disclosures are replaced.
- Redundant `Selected answer:` choice feedback is removed.
- Generic `Welche Form ist höflicher?` fallback is replaced.
- Storage keys, export/import, scoring, content banks, and content statuses remain stable.
- A v0.80.14.4 validation gate passes.
- Browser validation is run where available and documented honestly.

## Completed in v0.80.14.4

- Added separate B1 confidence guidance text.
- Changed confidence selection to record and auto-advance normal auto-graded B1 `typed` and `choice` evidence.
- Excluded `mark_practised` production evidence from confidence auto-advance.
- Stabilised inline cloze action layout with a shared right-hand action slot.
- Updated translation/support labels.
- Replaced narrow learner-facing fallback copy called out in the UX prompt.
- Added `_development-files/v080144_b1_practice_flow_ux_gate.cjs`.
- Added `_development-files/v080144_b1_practice_flow_browser_smoke.cjs`.
- Added v0.80.14.4 README, changelog, source brief, roadmap, and QA report.
- Packaged the updated app as `ozmosis-v0_80_14_4.zip`.

## Deferred

- Broad visual redesign.
- Content-bank rewrite.
- B1-12.
- v0.81 Cases and Articles Completion Pass.
- Satzi.
- Genitive expansion.
- B2 active content.
- Runtime German morphology.
- Runtime AI.

## Next Planned Patch

`v0.81 - Cases and Articles Completion Pass`
