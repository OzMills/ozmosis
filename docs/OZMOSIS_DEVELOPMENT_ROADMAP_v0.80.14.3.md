# Ozmosis Development Roadmap v0.80.14.3

## Current Patch

`v0.80.14.3 - B1 Question Quality Safe Fix Patch`

This patch is complete when:

- The current v0.80.14.2 app state is verified.
- The 09B safe-for-Codex CSV is reconciled.
- Only safe rows are applied.
- Human/native review rows remain untouched.
- No blind `Luecke` is introduced.
- No known unsafe repair remains as broad exact repair in the safe-row set.
- Choice tasks keep stable correct answer identity under shuffling.
- Production remains self-marked only.
- Storage keys, export/import, scoring, and content statuses remain stable.
- A v0.80.14.3 validation gate passes.
- Browser validation is run and documented.

## Completed in v0.80.14.3

- Applied 177 safe 09B revised rows.
- Reconciled all safe rows by item ID and source file.
- Converted approved fake repair and raw slash contrast rows into safer `Luecke`, `Kontrast`, or `Auswahl` contracts.
- Revised approved prompts, distractors, answers, accepted answers, and feedback.
- Confirmed the three human/native review rows stayed untouched.
- Added `_development-files/v080143_b1_question_quality_gate.cjs`.
- Updated current-era validation gates to recognise approved 09B safe conversions.
- Added v0.80.14.3 README, changelog, source brief, roadmap, and QA report.
- Packaged the updated app as `ozmosis-v0_80_14_3.zip`.

## Deferred

- Human/native review rows:
  - `draft_b1_03_022`
  - `draft_b1_04_018`
  - `draft_b1_08_016`
- Broad content-bank rewrite.
- B1-12.
- v0.81 Cases and Articles Completion Pass.
- Satzi.
- Genitive expansion.
- B2 active content.
- Runtime German morphology.
- Runtime AI.

## Next Planned Patch

`v0.81 - Cases and Articles Completion Pass`
