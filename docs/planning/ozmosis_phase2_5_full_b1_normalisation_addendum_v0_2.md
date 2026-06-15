# Ozmosis Phase 2.5 Full B1 Normalisation Addendum v0.2

Status: completed as planning guidance in `v0.81.1`.

This is a planning addendum. It does not import content, generate new item banks, implement prepositions, or change runtime scoring.

## 1. Purpose

Phase 2.5 exists to stop broad B1 expansion from mixing planning language, runtime metadata, learner-facing labels, and evidence semantics.

Future content imports must be normalised before they are added to the runtime app.

## 2. Support Policy vs Support Presentation

Use separate fields.

`supportPolicy` means evidence/scoring/support metadata:

- `visible`: support was visible or scaffolded during the attempt.
- `after_answer`: support appears after the learner attempts the item.
- `collapsed`: support exists but is learner-controlled.
- `off`: no support is shown.

`supportPresentation` means learner-facing display behaviour:

- `german_first`: German prompt and answer remain primary.
- `meaning_reveal`: English/support text sits behind a reveal.
- `post_answer_note`: support appears only after checking.
- `table_visible`: a table or scaffold was visible during the attempt.

Future imports must not use `supportPolicy` to describe screen layout, and must not use `supportPresentation` to decide evidence strength.

## 3. Evidence-Label Bridge

Planning labels must map to runtime labels before import.

| Planning label | Runtime task/evidence label | Evidence rule |
|---|---|---|
| recognition | `recognition` / choice | Useful but shallow. Does not prove production. |
| cloze | `cloze` / typed short answer | Stronger than recognition when unassisted. |
| repair | `repair` / `error_repair` | Evidence for noticing and correcting a specific issue. |
| contrast | `contrast` / choice or short contrast | Evidence for distinction, not broad mastery. |
| transformation | `sentence_building` or future `transformation` | Must stay separate from simple cloze. |
| controlled production | `controlled_production` | Practice evidence unless auto-graded safely. |
| self-marked production | `self_marked_production` / `production_card` | Practice evidence only, not correctness. |
| diagnostic | `diagnostic` attempt context | Snapshot evidence only. |
| review | `review` attempt context | Review evidence only after delayed timing exists. |
| assisted/hint-used | `assisted` / support metadata | Useful practice, weaker evidence. |
| scaffolded/table-visible | `auto_supported` or `supportPolicy: visible` | Must not inflate unassisted progress. |

## 4. Module ID Lock

Future imports must keep these fields separate:

- `displayModuleId`: learner-facing or QA-facing module code.
- `moduleKey`: runtime bank/module key, for example `b1_m01`.
- `internalPlanningId`: planning identifier from source packages.
- `pathId`: course/path placement where available.
- `categoryId`: content/category ID such as CAT02.
- `slug`: URL- or file-safe descriptive slug.

Do not derive one of these fields by overwriting another. Import scripts must preserve all six where source data provides them.

## 5. B1-12 Deferral

B1-12 remains architecture/planning-ready but Phase 3-deferred.

Reason: B1-12 forms/admin/certificates content is high-risk because it can mix legal/admin language, document requirements, privacy-sensitive contexts, and source-shaped examples. It should wait until earlier module IDs, `reviewGroup`, `targetId`, and task-depth contracts are stable.

## 6. First-Batch Sizing

Use conservative first batches for high-risk modules.

| Module / area | First batch guidance |
|---|---|
| B1-01 | Audit and normalise before adding more. Start with a small metadata repair batch only. |
| B1-02 | 20-40 routeable items, with appointment/callback scope separated. |
| B1-03 | 20-40 items, avoid job-office multi-skill traps. |
| B1-04 | 20-35 items, keep application text source-safe and concise. |
| B1-06 | 20-35 items, avoid medical/legal overreach. |
| B1-12 | Defer broad import. Allow planning and small metadata tests only. |
| connector-heavy modules | 20-30 items per connector family, with explicit word-order metadata. |
| production-heavy modules | 10-20 self-marked cards first, with no correctness inference. |

## 7. Source-Safety Rule

External resources may be used only as coverage inspiration.

Do not import, copy, paraphrase, translate, or preserve the shape/order of textbook examples, course worksheets, online exercise sets, or copyrighted grouped Redemittel sets.

Standard German phrase overlap is acceptable when the phrase is ordinary language, but the exercise scenario, answer set, distractor pattern, and sequence must be original.

## 8. Import-Readiness Gate

Future content banks must prove:

- source-safe origin;
- metadata-complete IDs and grouping fields;
- task-type-safe rendering;
- one primary target where possible;
- mobile-safe prompt and choice length;
- no hidden multi-skill trap;
- no answer leaks in prompt/support;
- route-safe entry and exit;
- export/import safe metadata;
- no storage-key or scoring changes;
- no B2 activation unless explicitly in a later B2 phase.

## 9. Review and Evidence Safety

- Diagnostic evidence is not normal proof.
- Self-marked production is not auto-graded correctness.
- Scaffolded evidence must not inflate unassisted progress.
- Review/durability requires delayed evidence.
- Empty cells are not failure.
- Stars are practice progress, not mastery.
- Do not use mastery, fluency, readiness, pass/fail, or diagnosis language from thin evidence.

## 10. Phase 3 Handoff

Before a broad import patch starts, the next prompt should identify:

- exact source bank;
- exact module key;
- expected item count;
- task-depth mix;
- support policy;
- route target;
- acceptance tests;
- export/import impact;
- no-go conditions.

The first eligible implementation patch after this addendum is `v0.82 - Prepositions Completion Pass`, provided the feature register allows it.
