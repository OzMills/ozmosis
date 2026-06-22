# Ozmosis Development Roadmap Current

## 1. Current Baseline

Current runtime baseline: `v0.85.3.3b - Duplicate Teach Me Button Hotfix`.

Current acceptance status: v0.85.3.3b fixed the duplicate B1 inline cloze Teach Me controls. The newer smaller secondary `Teach me` reveal button is the surviving control, the older `#noArticleBtn.teachBtn` B1 cloze duplicate is suppressed when the reveal hint is available, and normal content banks remain unchanged.

Next required patch: `v0.85.3.4 - Feedback Rhythm Pass`.

## 2. Completed Foundation

The current foundation includes:

- static content extraction;
- B1 content registry;
- progress evidence;
- confidence/guess tracking;
- Learning Map;
- Skill Matrix;
- Diagnostic Sprint;
- Suggested Next Practice;
- task-depth, support, production, repair, and contrast metadata;
- repair/contrast feedback;
- UX stabilisation;
- B1 Path/star progress;
- import/export save workflow;
- route isolation baseline;
- focused route-bank coverage for Cases and Articles, Prepositions, Word Order, and Connectors.

This summary is not a replacement for `CHANGELOG-FULL-OZMOSIS.txt`.

## 3. Corrected Roadmap Sequence

- `v0.81` - Cases and Articles Completion Pass
- `v0.81.1` - Cases & Articles Acceptance / Phase 2.5 Readiness
- `v0.82` - Prepositions Completion Pass
- `v0.82.1` - Prepositions Browser Acceptance Gate
- `v0.83` - Word Order Completion Pass
- `v0.84` - Connectors Completion Pass
- `v0.84.1` - Cases & Articles Repair Editing Pilot
- `v0.85` - Repair / Transformation Completion Pass
- `v0.85.1` - Prompt/Cue Schema Migration and Learner-Facing Cleanup
- `v0.85.2` - Practice Screen Template Alignment Pass
- `v0.85.3` - Practice UI Reality and Completion Pass
- `v0.85.3.1` - Strict UI Proof and Screenshot Recovery Gate
- `v0.85.3.2` - Strict Layout Geometry Fix Pass
- `v0.85.3.3` - Cloze Experience and Representative Fixture Pass
- `v0.85.3.3a` - Package Size, Old ZIP Audit, and No-PowerShell Cleanup Pass
- `v0.85.3.3b` - Duplicate Teach Me Button Hotfix
- `v0.85.3.4` - Feedback Rhythm Pass
- `v0.85.4` - Completion Gate Harness
- `v0.85.5` - Runtime Display Contract Lock
- `v0.85.6` - Source Cleanup Batch 1: Internal Labels and Meaning Cues
- `v0.85.7` - Source Cleanup Batch 2: Under-Contextualised Clozes
- `v0.85.8` - Feedback Cleanup: Contrast Notes and Micro-rules
- `v0.85.9` - Metadata Manifest Migration
- `v0.85.10` - Review Queue Resolution Pass
- `v0.85.11` - Final Regression and Live Readiness Gate
- `v0.86` - Production Completion Pass, blocked until v0.85.11 reports `READY_FOR_V0.86`
- `v0.87` - Redemittel Completion Pass
- `v0.88` - Wortschatz + Content QA Batch
- `v0.89` - B1 Coverage Stabilisation + Review Coverage Readiness
- `v0.90` - B1 Completion Gate Implementation
- `v0.91` - B1/B2 Separation Enforcement
- `v0.92` - Learning Map Polish
- `v0.93` - Skill Matrix Polish
- `v0.94` - Diagnostic UX + Weakness Repair Preparation
- `v0.95` - Review UX / Durability Preparation
- `v0.96` - Language and Register Polish
- `v0.97` - Accessibility and Responsiveness Pass
- `v0.98` - B1 Source Brief Audit
- `v0.99` - B1 Functional Completion Candidate
- `v0.100-v0.109` - B1 stabilisation after candidate
- `v0.110-v0.119` - B2 planning only
- `v0.120+` - B2 implementation only if the B1 gate passes

## 4. Patch-Size Discipline

- One large feature per prompt maximum.
- Two medium spokes maximum with strict hub gates.
- No broad "while we are here" refactors.
- Content, routing, save/import, progress, and evidence systems require separate acceptance gates.

## 5. Hub-And-Spoke Rule

Run hub checks before and after each spoke:

- version/docs/source check;
- changed-file scope check;
- syntax/static parse;
- storage/export/import check;
- route isolation check;
- browser smoke where available;
- responsive smoke where available;
- documentation/changelog check.

Stop if the hub fails.

## 6. Roadmap Feature Dependencies

- Phase 2.5 normalisation addendum v0.2 is complete and must be followed before broad module generation.
- B1-01 extension survival audit is complete with `SURVIVED_WITH_METADATA_GAPS`; do not claim B1-01 is clean or complete until those gaps are repaired.
- Connectors Completion Pass is complete and accepted as v0.84.
- Cases & Articles Repair Editing Pilot is complete and accepted as v0.84.1.
- Repair / Transformation Completion Pass is complete as v0.85.
- Practice UI Reality and Completion Pass reached runtime v0.85.3, and strict proof gate v0.85.3.1 did not accept it for the content ratchet.
- Strict Layout Geometry Fix Pass is implemented and accepted as v0.85.3.2.
- Cloze Experience and Representative Fixture Pass is implemented and accepted as v0.85.3.3.
- Package Size, Old ZIP Audit, and No-PowerShell Cleanup Pass is complete as v0.85.3.3a.
- Duplicate Teach Me Button Hotfix is implemented and accepted as v0.85.3.3b.
- Feedback Rhythm Pass is the next allowed implementation patch as v0.85.3.4.
- Completion Gate Harness is blocked until v0.85.3.4 is handled or explicitly deferred.
- Production Completion Pass is blocked until v0.85.11 reports `READY_FOR_V0.86`.
- Weakness repair must wait until Skill Matrix and task-depth evidence are stable.
- Durability/spaced review must wait until enough reviewable B1 coverage exists.
- External Review must wait until production cards and save/import are stable.
- Satzi must wait until recommendation logic is trustworthy.
- B2 planning can happen after B1 completion work is structured.
- B2 implementation must wait until the B1 functional completion gate passes.
