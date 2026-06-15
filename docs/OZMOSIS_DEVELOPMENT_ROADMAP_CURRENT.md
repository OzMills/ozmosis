# Ozmosis Development Roadmap Current

## 1. Current Baseline

Current runtime baseline: `v0.82 - Prepositions Completion Pass`.

Current acceptance status: v0.82 Prepositions passed the v0.82.1 browser acceptance gate. Runtime metadata remains v0.82 because no app fix was required.

Next required patch: `v0.83 - Word Order Completion Pass`.

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
- route isolation baseline.

This summary is not a replacement for `CHANGELOG-FULL-OZMOSIS.txt`.

## 3. Corrected Roadmap Sequence

- `v0.81` - Cases and Articles Completion Pass
- `v0.81.1` - Cases & Articles Acceptance / Phase 2.5 Readiness
- `v0.82` - Prepositions Completion Pass
- `v0.82.1` - Prepositions Browser Acceptance Gate
- `v0.83` - Word Order Completion Pass
- `v0.84` - Connectors Completion Pass
- `v0.85` - Repair / Transformation Completion Pass
- `v0.86` - Production Completion Pass
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
- Weakness repair must wait until Skill Matrix and task-depth evidence are stable.
- Durability/spaced review must wait until enough reviewable B1 coverage exists.
- External Review must wait until production cards and save/import are stable.
- Satzi must wait until recommendation logic is trustworthy.
- B2 planning can happen after B1 completion work is structured.
- B2 implementation must wait until the B1 functional completion gate passes.
