# Ozmosis v0.80.14.4

## B1 Practice Flow UX Catch-up

Ozmosis v0.80.14.4 is a narrow B1 practice-flow UX patch on top of v0.80.14.3.

It fixes remaining interaction issues in the B1 renderer without redesigning the app, changing scoring, altering content banks, adding dependencies, adding runtime AI, or changing protected storage keys.

## What Changed

- Confidence guidance is now text, not a disabled `Weiter` button.
- Selecting confidence after a normal auto-graded B1 item now records the confidence and advances immediately.
- Production/self-marked cards remain outside the confidence auto-advance path.
- Typed B1 cloze items keep `Teach me` and `Prüfen` in one stable right-hand action slot.
- Translation/support labels now use clearer `Show translation`, `Hide translation`, `Translation`, and `Meaning / translation` wording.
- Removed the bare `Corrected.` repair fallback.
- Replaced vague learner-facing `Explain` disclosures with specific evidence/correction labels.
- Removed redundant `Selected answer:` choice feedback.
- Replaced the generic `Welche Form ist höflicher?` fallback with contextual wording.
- Added `_development-files/v080144_b1_practice_flow_ux_gate.cjs`.
- Added `_development-files/v080144_b1_practice_flow_browser_smoke.cjs`.

## Preserved

- Static browser app architecture.
- Main deployed file: `index.html`.
- No backend, framework, build step, package manager, or dependency.
- Existing storage keys:
  - `ozmosis_b1_sprint_progress_v1`
  - `ozmosis_b1_progress_evidence_v1`
- Export/import compatibility.
- Today B1 Sprint composition.
- Diagnostic Sprint composition.
- Content bank item IDs, answers, and statuses.
- Production self-marking semantics.
- Scoring and correctness rules.
- Choice shuffling safety.
- B1-only active scope.
- German learning content LTR, including Arabic UI contexts.

## QA

QA report: `docs/qa/v0.80.14.4_b1_practice_flow_ux_catchup.md`

Local gates:

- `_development-files/v080144_b1_practice_flow_ux_gate.cjs`
- `_development-files/v080144_b1_practice_flow_browser_smoke.cjs`
- `_development-files/v080143_b1_question_quality_gate.cjs`

Current changelog: `CHANGELOG-v0_80_14_4.txt`

Current source brief: `docs/OZMOSIS_SOURCE_BRIEF_v0.80.14.4.md`

Current roadmap: `docs/OZMOSIS_DEVELOPMENT_ROADMAP_v0.80.14.4.md`
