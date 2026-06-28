# Ozmosis Strategic Source Brief Current

## Current Patch Status

Current runtime baseline: `v0.87`.

Current gate result: `REDEMITTEL_COMPLETION_ACCEPTED`.

Next required patch: `v0.88 - Wortschatz + Content QA Batch`.

Current patch summary: v0.87 completes and stabilises the dedicated Redemittel practice layer. The routed Redemittel bank has 90 rows: 83 normal auto-graded phrase/cloze/choice rows and 7 explicit self-marked production cards. All Redemittel subroutes pass the route-pool gate, normal Redemittel practice excludes production rows, and production Redemittel remains self-marked only. Redemittel practice now shows compact function/register task instructions without changing scoring, evidence semantics, storage keys, content-bank IDs, answer keys, accepted answers, or Today’s B1 Sprint composition.

## 1. Project Identity

Ozmosis is a static German-learning web app and a B1-first learning instrument.

It should feel like a calm diagnostic tutor: precise, compact, adult, mobile-first, and honest about evidence. It is not engagement bait, an XP treadmill, a fake mastery app, or a certification system.

Ozmosis exists to help learners improve German through structured practice, sentence control, grammar awareness, repair, vocabulary activation, practical workplace/admin German, transparent progress evidence, and targeted next practice.

## 2. Source-of-Truth Hierarchy

Runtime source of truth:

1. Current repo/package in the active task.
2. Repo-root `index.html`.
3. `content/*.js` and `data/*`.

Strategic source of truth:

1. `docs/OZMOSIS_SOURCE_BRIEF_CURRENT.md`.
2. `docs/OZMOSIS_DEVELOPMENT_ROADMAP_CURRENT.md`.
3. `docs/OZMOSIS_FEATURE_REGISTER_CURRENT.md`.

Patch-local source of truth:

1. Current canonical `README.md`.
2. Current canonical `CHANGELOG-FULL-OZMOSIS.txt`.
3. Current versioned source brief and roadmap.
4. Current QA report.

Supporting sources:

- content contracts when present;
- `CHANGELOG-FULL-OZMOSIS.txt`;
- QA reports;
- older docs as history only.

Patch-local source briefs explain one patch. They must not overwrite or flatten the strategic source truth.

## 3. Architecture Guardrails

- Static browser app.
- Repo-root `index.html` remains the deployed app unless explicitly changed.
- No backend.
- No framework.
- No build step.
- No database.
- No accounts.
- No analytics or tracking.
- No external API calls.
- No runtime AI.
- No runtime German generation.
- No dependencies unless explicitly approved.
- Preserve GitHub Pages compatibility.
- Preserve localStorage compatibility.
- Preserve export/import compatibility.
- German prompts, examples, answers, input text, cloze blanks, choices, model answers, article forms, and heatmaps remain LTR, including under RTL UI languages.

## 4. B1-First / B2-Second Rule

B1 must be functionally complete before B2 implementation.

B2 may be planned before the B1 gate, but B2 content, B2 skill maps, B2 diagnostics, and B2 progress scoring must not be mixed into the active learner-facing B1 flow.

CAT18/B2 bridge content remains preview-only unless explicitly activated later. Preview material must not count as active B1 evidence, B1 scoring, B1 progress, or B1 unlocks.

## 5. B1 Product Spine

B1 must include:

- cases and articles;
- prepositions;
- word order;
- connectors;
- repair;
- transformation;
- controlled production;
- short free production;
- Redemittel;
- Wortschatz;
- workplace/practical German;
- Learning Map;
- Skill Matrix;
- Diagnostic Sprint;
- weakness repair;
- spaced review/durability;
- local save/export/import;
- content QA and source safety.

B1 is not complete because questions exist. B1 is complete when Ozmosis can show a meaningful, evidence-based picture of the learner's B1 progress.

## 6. Evidence Model

Stars guide practice. They are not mastery, fluency, certification, or exam-readiness claims.

Evidence must distinguish task type and support context. Task-type breadth matters. A learner answering one supported cloze correctly is not the same as unassisted repair, transformation, or production.

Production is self-marked unless a future external review system exists. Self-marked production is practice evidence, not correctness evidence.

Scaffolded/support evidence must not inflate progress claims. Diagnostic evidence informs recommendations but does not prove ability alone. Thin evidence must not create strong conclusions.

Avoid active learner-facing claims such as "exam ready", "fluent", "mastered", "passed", "failed", or "certified".

## 7. Content Design Rules

Reference contracts:

- `OZMOSIS_TASK_STIMULUS_CONTENT_RULES_v0_1.md`
- `OZMOSIS_PROMPT_TEXT_CONTENT_RULES_v0_1.md`
- `OZMOSIS_EXPLAIN_TEXT_CONTENT_RULES_v0_1.md`

If those files are not present in the current repo, this brief still preserves their contract:

- natural Hochdeutsch;
- B1-safe unless explicitly labelled otherwise;
- one primary target where possible;
- answerable without clairvoyance;
- source-safe and not copied from textbook examples;
- prompt cues the task, not the answer;
- feedback is concise and target-specific;
- no source table order, copied exercise scenarios, or copied grouped Redemittel sets.

## 8. Save / Import / Export

Export Save and Import Save are local file-based.

Import must validate before localStorage mutation. Failed import must not overwrite current progress.

Protected storage keys remain protected:

- `ozmosis_b1_sprint_progress_v1`
- `ozmosis_b1_progress_evidence_v1`
- `ozmosis_b1_path_unlock_overrides_v1`
- `ozmosis_b1_review_edit_queue_v1`
- `ozmosis_b1_progress_summary_v1`

Derived summaries are rebuildable and are not the primary source of truth.

## 9. Strategic Deferred Features

Deferred features must not be forgotten or implemented early:

- Phase 2.5 normalisation addendum v0.2.
- B1-01 extension / variant-family survival audit.
- External Review Handoff / Tutor Review Code.
- Satzi recommended-action guide.
- Durability/spaced review.
- Weakness repair.
- B2 planning.
- B2 implementation only after the B1 gate.

## 10. Do-Not-Implement-Before Rules

- No Satzi before recommendation surfaces are stable.
- No External Review before production cards and save/import are stable.
- No full Leitner or durability system before enough reviewable B1 coverage exists.
- No B2 before B1 functional completion candidate.
- No broad `index.html` split before a structure audit and no-behaviour cleanup.

## 11. Current Baseline

Current runtime baseline: `v0.87`.

Current acceptance status: v0.87 Redemittel Completion Pass accepted. Redemittel subroutes are route-pool audited, normal Redemittel practice remains auto-graded only, and Redemittel production remains self-marked only.

Next required patch: `v0.88 - Wortschatz + Content QA Batch`.

Current planning handoff:

- Phase 2.5 normalisation addendum v0.2 is complete.
- B1-01 survival audit status is `SURVIVED_WITH_METADATA_GAPS`.
- Prepositions Completion Pass has been implemented as v0.82 and accepted by v0.82.1 browser validation.
- Word Order Completion Pass has been implemented and accepted as v0.83.
- Connectors Completion Pass has been implemented and accepted as v0.84.
- Cases & Articles Repair Editing Pilot has been implemented and accepted as v0.84.1.
- Repair / Transformation Completion Pass has been implemented as v0.85.
- Prompt/Cue Schema Migration and Learner-Facing Cleanup has been implemented as v0.85.1.
- Practice Screen Template Alignment Pass was attempted as v0.85.2.
- Practice UI Reality and Completion Pass reached runtime v0.85.3.
- Strict UI Proof and Screenshot Recovery Gate v0.85.3.1 did not accept the current practice UI for the content ratchet.
- Strict Layout Geometry Fix Pass has been implemented and accepted as v0.85.3.2.
- Cloze Experience and Representative Fixture Pass has been implemented and accepted as v0.85.3.3.
- Package Size, Old ZIP Audit, and No-PowerShell Cleanup Pass has been completed as v0.85.3.3a without changing runtime behaviour.
- Duplicate Teach Me Button Hotfix has been implemented and accepted as v0.85.3.3b.
- Shared Practice Frame and Surface Inventory has been completed as v0.85.3.4 without changing runtime behaviour.
- Shared Practice Frame Convergence Pass has been implemented and accepted as v0.85.3.5.
- Feedback Rhythm Pass has been implemented as v0.85.3.6 and repaired/accepted as v0.85.3.6a.
- Correction and Satzbau Surface Pass has been implemented and accepted as v0.85.3.7.
- HUD, Keyboard, and Live Mobile Verification Gate has been implemented and accepted as v0.85.3.8.
- Completion Gate Harness has been implemented and accepted as v0.85.4.
- Satzbau Interaction, Chunk Randomisation, and iOS Input Zoom Repair has been implemented and accepted as v0.85.4a.
- Runtime Display Contract Lock has been implemented and accepted as v0.85.5.
- Satzbau Build-Line and Answer-Leak Repair has been implemented and accepted as v0.85.5a, but its screenshot artefacts were later superseded.
- Satzbau Proof Harness and First-Run Overlay Repair has been implemented and accepted as v0.85.5b.
- Source Cleanup Batch 1: Internal Labels and Meaning Cues has been implemented and accepted as v0.85.6.
- Source Cleanup Batch 2: Under-Contextualised Clozes has been implemented and accepted as v0.85.7.
- Feedback Cleanup: Contrast Notes and Micro-rules has been implemented and accepted as v0.85.8.
- Metadata Manifest Migration has been implemented and accepted as v0.85.9.
- Review Queue Resolution Pass has been implemented and accepted as v0.85.10.
- Final Regression and Live Readiness Gate has been implemented as v0.85.11.
- Deployment / Live Check Follow-up has been implemented as v0.85.11-live. The current app is live at `/ozmosis/`, while `/kasuskonsole/` returns 404.
- Canonical Live URL / Pages Path Decision has been implemented as v0.85.11-live-url, with missing QA artefacts backfilled in v0.85.11-live-url-a. `/ozmosis/` is accepted as canonical.
- Production Completion Pass has been implemented as v0.86.
- Redemittel Completion Pass has been implemented and accepted as v0.87.
