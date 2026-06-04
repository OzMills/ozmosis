# Ozmosis B1-11 — Full Staged Content Pipeline Output v0.1

Module: B1-11 — Colleague feedback / conflict  
Internal planning ID: `b1_m11_colleague_feedback_conflict`  
Slug: `colleague-feedback-conflict`  
Status: pipeline-generated planning output, not app-ready JSON.

## 1. Module source verification

| Source | Status | Use | Caveat |
| --- | --- | --- | --- |
| Pipeline Core | Available | Process/evidence/row rules | No item text copied. |
| Cross-Spoke Consistency Audit | Available | Accepted spoke set with caveats | Minor caveats carried into QA notes. |
| B1-11 spoke | Available | Module boundaries and target families | No source text copied. |
| v0.80.4 source brief/roadmap | Available | Static app/storage constraints | No implementation here. |
| Vocabulary/course PDFs | Available | Structural inspiration only | No copied or paraphrased item text. |

## 2. Spoke intake

| Field | Value |
| --- | --- |
| moduleId | B1-11 |
| moduleTitle | Colleague feedback / conflict |
| internalPlanningId | b1_m11_colleague_feedback_conflict |
| moduleSlug | colleague-feedback-conflict |
| learner-facing status | draft content-planning output |
| boundary decision | module spoke accepted; adjacent-module drift checked in QA |

## 3. Draft batch

| Metric | Count |
| --- | --- |
| Draft items generated | 18 |
| Auswahl items | 2 |
| Kontrast items | 2 |
| Luecke items | 4 |
| Produktion items | 2 |
| Reparatur items | 3 |
| Satzbau items | 2 |
| notice items | 3 |

### Draft item ledger

| itemId | taskType | targetFamilyId | targetId | cue | prompt | answer | feedback | evidenceType | reviewEligibility | QA decision | QA issue |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| draft_b1_11_001 | notice | TF-B1-11-LS07-01 | T-B1-11-LS07-01-01 | — | Concept: Feedback should be clear but soft. This module practises mild workplace language, not HR/legal conflict. | — | — | excluded | not_review_eligible | approve_as_is | — |
| draft_b1_11_002 | notice | TF-B1-11-LS07-03 | T-B1-11-LS07-03-01 | — | Concept: `Aus meiner Sicht...` is a soft disagreement frame and keeps V2. | — | — | excluded | not_review_eligible | approve_as_is | — |
| draft_b1_11_003 | notice | TF-B1-11-LS10-01 | T-B1-11-LS10-01-01 | — | Concept: Conflict production is self-marked only; the app cannot judge social correctness. | — | — | excluded | not_review_eligible | approve_as_is | — |
| draft_b1_11_004 | Auswahl | TF-B1-11-LS08-01 | T-B1-11-LS08-01-02 | das Missverständnis / die Rechnung / der Urlaub | Which word means misunderstanding? | das Missverständnis | `Missverständnis` is misunderstanding. | auto_supported | weakly_eligible_after_delay | approve_as_is | — |
| draft_b1_11_005 | Auswahl | TF-B1-11-LS07-02 | T-B1-11-LS07-02-01 | Es tut mir leid. / Es ist geliefert. / Es ist bezahlt. | Which phrase is an apology? | Es tut mir leid. | `Es tut mir leid` is an apology. | auto_supported | weakly_eligible_after_delay | approve_as_is | — |
| draft_b1_11_006 | Luecke | TF-B1-11-LS07-02 | T-B1-11-LS07-02-01 | I am sorry. | Es tut mir ___. | leid | Fixed apology: `Es tut mir leid.` | auto_core | eligible_auto_after_delay | approve_as_is | — |
| draft_b1_11_007 | Luecke | TF-B1-11-LS07-03 | T-B1-11-LS07-03-01 | From my point of view, the plan is difficult. | ___ meiner Sicht ist der Plan schwierig. | Aus | Use `Aus meiner Sicht...`. | auto_core | eligible_auto_after_delay | approve_as_is | — |
| draft_b1_11_008 | Luecke | TF-B1-11-LS06-01 | T-B1-11-LS06-01-01 | I think that the plan is good. | Ich denke, dass der Plan gut ___. | ist | After `dass`, the verb goes to the end. | auto_core | eligible_auto_after_delay | approve_as_is | — |
| draft_b1_11_009 | Luecke | TF-B1-11-LS04-01 | T-B1-11-LS04-01-01 | We could find a solution. | Wir ___ eine Lösung finden. | könnten | `Wir könnten...` softens a proposal. | auto_core | eligible_auto_after_delay | approve_as_is | — |
| draft_b1_11_010 | Satzbau | TF-B1-11-LS07-03 | T-B1-11-LS07-03-01 | Build the soft disagreement sentence. | Chunks: `Aus meiner Sicht / ist / das / schwierig.` | Aus meiner Sicht ist das schwierig. | After the fronted phrase, verb comes second. | auto_core | eligible_auto_after_delay | approve_as_is | — |
| draft_b1_11_011 | Satzbau | TF-B1-11-LS04-01 | T-B1-11-LS04-01-01 | Build the proposal. | Chunks: `Wir / könnten / eine Lösung / finden.` | Wir könnten eine Lösung finden. | `könnten ... finden` frames a suggestion. | auto_core | eligible_auto_after_delay | approve_as_is | — |
| draft_b1_11_012 | Reparatur | TF-B1-11-LS06-01 | T-B1-11-LS06-01-01 | Fix the `dass` clause. | Fix: `Ich denke, dass ist der Plan gut.` | Ich denke, dass der Plan gut ist. | Verb goes at the end after `dass`. | auto_core | eligible_auto_after_delay | approve_as_is | — |
| draft_b1_11_013 | Reparatur | TF-B1-11-LS07-03 | T-B1-11-LS07-03-01 | Fix V2 after the fronted phrase. | Fix: `Aus meiner Sicht das ist falsch.` | Aus meiner Sicht ist das falsch. | Verb comes second. | auto_core | eligible_auto_after_delay | approve_as_is | — |
| draft_b1_11_014 | Reparatur | TF-B1-11-LS07-01 | T-B1-11-LS07-01-03 | Make the feedback softer. | Soften: `Das ist schlecht.` | Aus meiner Sicht ist das schwierig. | Softening is the target; production remains bounded. | auto_supported | weakly_eligible_after_delay | approve_as_is | — |
| draft_b1_11_015 | Kontrast | TF-B1-11-LS07-02 | T-B1-11-LS07-02-01 | Es tut mir leid. / Ich bitte um Ersatz. | Choose the apology. | Es tut mir leid. | This is apology language, not customer service. | auto_supported | weakly_eligible_after_delay | approve_as_is | — |
| draft_b1_11_016 | Kontrast | TF-B1-11-LS07-03 | T-B1-11-LS07-03-02 | Ich sehe das anders. / Du hast Unrecht. | Choose soft disagreement. | Ich sehe das anders. | Soft disagreement avoids blunt escalation. | auto_supported | weakly_eligible_after_delay | approve_as_is | — |
| draft_b1_11_017 | Produktion | TF-B1-11-LS10-01 | T-B1-11-LS10-01-01 | Use `Entschuldigung` or `Es tut mir leid`. | Write/say one short apology for a misunderstanding. | self-marked | Checklist: apology + simple reason optional. | self_marked_production | not_review_eligible | approve_as_is | — |
| draft_b1_11_018 | Produktion | TF-B1-11-LS10-01 | T-B1-11-LS10-01-03 | Use `Wir könnten...` | Suggest one simple solution politely. | self-marked | Checklist: proposal + polite/soft tone. | self_marked_production | not_review_eligible | approve_as_is | — |

## 4. Draft self-audit

| Audit area | Result | Notes |
| --- | --- | --- |
| Source safety | Pass | Original micro-scenarios and common B1 language only; no copied exercise text. |
| Module boundary | Pass | No adjacent module ownership intentionally crossed. |
| German naturalness | Pass with QA caveat | All items require later human-style QA before import; no obvious artificial grammar traps retained. |
| Single-target safety | Pass with caveat | Connector and repair items stay short; multi-skill risk documented. |
| Production safety | Pass | Production is self-marked only. |
| Evidence safety | Pass | Visible support and recognition are downgraded. |

## 5. QA / reject / revise result

| Metric | Count |
| --- | --- |
| Draft items audited | 18 |
| Approved as-is | 18 |
| Revised and approved | 0 |
| Cut | 0 |
| Deferred | 0 |
| Human/tutor check | 0 |
| Clean proceeding items | 18 |

QA note: this automated staged run keeps the first batch conservative. A later module-specific QA pass may still cut or revise individual items before import.


## 6. Variant-family decision

| Metric | Count |
| --- | --- |
| Variant families created | 2 |
| Variants inside families | 7 |
| Single auto-graded items retained | 6 |
| Notice cards retained separately | 3 |
| Production cards retained separately | 2 |

### Variant-family draft / QA ledger

| variantFamilyId | targetFamilyId | variantCount | familyType | decision | evidence caveat |
| --- | --- | --- | --- | --- | --- |
| b1-11-b1-11-ls07-02-vf-001 | TF-B1-11-LS07-02 | 3 | Type B | static curated variants | same-family evidence only; max one same-session evidence |
| b1-11-b1-11-ls07-03-vf-001 | TF-B1-11-LS07-03 | 4 | Type B | static curated variants | same-family evidence only; max one same-session evidence |

### Single-item ledger

| itemId | taskType | targetFamilyId | evidenceType | status |
| --- | --- | --- | --- | --- |
| draft_b1_11_004 | Auswahl | TF-B1-11-LS08-01 | auto_supported | kept as single item |
| draft_b1_11_008 | Luecke | TF-B1-11-LS06-01 | auto_core | kept as single item |
| draft_b1_11_012 | Reparatur | TF-B1-11-LS06-01 | auto_core | kept as single item |
| draft_b1_11_009 | Luecke | TF-B1-11-LS04-01 | auto_core | kept as single item |
| draft_b1_11_011 | Satzbau | TF-B1-11-LS04-01 | auto_core | kept as single item |
| draft_b1_11_014 | Reparatur | TF-B1-11-LS07-01 | auto_supported | kept as single item |

## 7. Row reconciliation

| Stage | Expected | Actual / survivor | Cuts | Deferred | Human-check | Status |
| --- | --- | --- | --- | --- | --- | --- |
| Draft | 18 | 18 | 0 | 0 | 0 | OK |
| QA | 18 | 18 | 0 | 0 | 0 | OK |
| Variant-family grouping | 18 | 18 | 0 | 0 | 0 | OK |

## 8. Schema mapping readiness

| Field | Decision |
| --- | --- |
| displayModuleId | B1-11 |
| moduleKey | b1-11 |
| internalPlanningId | b1_m11_colleague_feedback_conflict |
| moduleSlug | colleague-feedback-conflict |
| moduleTitle | Colleague feedback / conflict |
| supportPolicy/supportPresentation | Must be explicitly split in schema mapping; current supportPolicy is planning-only. |
| evidence labels | Mapped to auto_core / auto_supported / excluded / self_marked_production. |
| variant family readiness | Ready for schema mapping after module-specific QA review. |

### Schema-planning item summary

| itemId | targetFamilyId | targetId | taskType | answerMode planning | evidenceType | supportPolicy | reviewEligibility |
| --- | --- | --- | --- | --- | --- | --- | --- |
| draft_b1_11_001 | TF-B1-11-LS07-01 | T-B1-11-LS07-01-01 | notice | self_marked | excluded | scenario_visible | not_review_eligible |
| draft_b1_11_002 | TF-B1-11-LS07-03 | T-B1-11-LS07-03-01 | notice | self_marked | excluded | scenario_visible | not_review_eligible |
| draft_b1_11_003 | TF-B1-11-LS10-01 | T-B1-11-LS10-01-01 | notice | self_marked | excluded | scenario_visible | not_review_eligible |
| draft_b1_11_004 | TF-B1-11-LS08-01 | T-B1-11-LS08-01-02 | Auswahl | typed_short | auto_supported | scenario_visible | weakly_eligible_after_delay |
| draft_b1_11_005 | TF-B1-11-LS07-02 | T-B1-11-LS07-02-01 | Auswahl | typed_short | auto_supported | scenario_visible | weakly_eligible_after_delay |
| draft_b1_11_006 | TF-B1-11-LS07-02 | T-B1-11-LS07-02-01 | Luecke | typed_short | auto_core | scenario_visible | eligible_auto_after_delay |
| draft_b1_11_007 | TF-B1-11-LS07-03 | T-B1-11-LS07-03-01 | Luecke | typed_short | auto_core | scenario_visible | eligible_auto_after_delay |
| draft_b1_11_008 | TF-B1-11-LS06-01 | T-B1-11-LS06-01-01 | Luecke | typed_short | auto_core | scenario_visible | eligible_auto_after_delay |
| draft_b1_11_009 | TF-B1-11-LS04-01 | T-B1-11-LS04-01-01 | Luecke | typed_short | auto_core | scenario_visible | eligible_auto_after_delay |
| draft_b1_11_010 | TF-B1-11-LS07-03 | T-B1-11-LS07-03-01 | Satzbau | sentence_order | auto_core | scenario_visible | eligible_auto_after_delay |
| draft_b1_11_011 | TF-B1-11-LS04-01 | T-B1-11-LS04-01-01 | Satzbau | sentence_order | auto_core | scenario_visible | eligible_auto_after_delay |
| draft_b1_11_012 | TF-B1-11-LS06-01 | T-B1-11-LS06-01-01 | Reparatur | repair_text | auto_core | scenario_visible | eligible_auto_after_delay |
| draft_b1_11_013 | TF-B1-11-LS07-03 | T-B1-11-LS07-03-01 | Reparatur | repair_text | auto_core | scenario_visible | eligible_auto_after_delay |
| draft_b1_11_014 | TF-B1-11-LS07-01 | T-B1-11-LS07-01-03 | Reparatur | repair_text | auto_supported | scenario_visible | weakly_eligible_after_delay |
| draft_b1_11_015 | TF-B1-11-LS07-02 | T-B1-11-LS07-02-01 | Kontrast | typed_short | auto_supported | scenario_visible | weakly_eligible_after_delay |
| draft_b1_11_016 | TF-B1-11-LS07-03 | T-B1-11-LS07-03-02 | Kontrast | typed_short | auto_supported | scenario_visible | weakly_eligible_after_delay |
| draft_b1_11_017 | TF-B1-11-LS10-01 | T-B1-11-LS10-01-01 | Produktion | self_marked | self_marked_production | scenario_visible | not_review_eligible |
| draft_b1_11_018 | TF-B1-11-LS10-01 | T-B1-11-LS10-01-03 | Produktion | self_marked | self_marked_production | scenario_visible | not_review_eligible |

## 9. Import-plan readiness

| Import area | Status | Notes |
| --- | --- | --- |
| Current app inspection | Not run | Required later before Codex. Do not assume route/content architecture. |
| Static content strategy | Ready as planning recommendation | Static records only; no runtime generation. |
| Storage/export | Preserve | No storage-key change allowed. |
| Sprint sampling | Defer implementation decision | B1-11 should not enter mixed sprints until route QA passes. |
| Codex implementation prompt | Not created | Create only after final QA, row reconciliation, schema mapping, and import plan. |

## 10. Files to save

- `ozmosis_b1_m11_colleague_feedback_conflict_draft_items_v0_1.md`
- `ozmosis_b1_m11_colleague_feedback_conflict_phase3a_qa_approved_v0_1.md`
- `ozmosis_b1_m11_colleague_feedback_conflict_variant_family_decision_v0_1.md`
- `ozmosis_b1_m11_colleague_feedback_conflict_final_inventory_v0_1.md`
- `ozmosis_b1_m11_colleague_feedback_conflict_schema_mapping_v0_1.md`
- `ozmosis_b1_m11_colleague_feedback_conflict_codex_import_plan_v0_1.md`


## 11. Stop/go verdict

`READY_FOR_MODULE_SPECIFIC_QA_AND_ROW_RECONCILIATION`

This module has a complete first staged draft path, but it should receive a module-specific QA pass before app import planning is treated as final.
