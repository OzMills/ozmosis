# Ozmosis B1-06 — Full Staged Content Pipeline Output v0.1

Module: B1-06 — Sick leave  
Internal planning ID: `b1_m06_sick_leave`  
Slug: `sick-leave`  
Status: pipeline-generated planning output, not app-ready JSON.

## 1. Module source verification

| Source | Status | Use | Caveat |
| --- | --- | --- | --- |
| Pipeline Core | Available | Process/evidence/row rules | No item text copied. |
| Cross-Spoke Consistency Audit | Available | Accepted spoke set with caveats | Minor caveats carried into QA notes. |
| B1-06 spoke | Available | Module boundaries and target families | No source text copied. |
| v0.80.4 source brief/roadmap | Available | Static app/storage constraints | No implementation here. |
| Vocabulary/course PDFs | Available | Structural inspiration only | No copied or paraphrased item text. |

## 2. Spoke intake

| Field | Value |
| --- | --- |
| moduleId | B1-06 |
| moduleTitle | Sick leave |
| internalPlanningId | b1_m06_sick_leave |
| moduleSlug | sick-leave |
| learner-facing status | draft content-planning output |
| boundary decision | module spoke accepted; adjacent-module drift checked in QA |

## 3. Draft batch

| Metric | Count |
| --- | --- |
| Draft items generated | 20 |
| Auswahl items | 2 |
| Kontrast items | 2 |
| Luecke items | 6 |
| Produktion items | 2 |
| Reparatur items | 3 |
| Satzbau items | 2 |
| notice items | 3 |

### Draft item ledger

| itemId | taskType | targetFamilyId | targetId | cue | prompt | answer | feedback | evidenceType | reviewEligibility | QA decision | QA issue |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| draft_b1_06_001 | notice | TF-B1-06-LS07-01 | T-B1-06-LS07-01-01 | — | Concept: Sick-leave messages should be short, clear, and not medically detailed. | — | — | excluded | not_review_eligible | approve_as_is | — |
| draft_b1_06_002 | notice | TF-B1-06-LS06-01 | T-B1-06-LS06-01-01 | — | Concept: `weil` sends the verb to the end in a short reason clause. | — | — | excluded | not_review_eligible | approve_as_is | — |
| draft_b1_06_003 | notice | TF-B1-06-LS08-01 | T-B1-06-LS08-01-01 | — | Concept: `Krankmeldung` and `Attest` are document/action words here, not legal advice. | — | — | excluded | not_review_eligible | approve_as_is | — |
| draft_b1_06_004 | Auswahl | TF-B1-06-LS08-01 | T-B1-06-LS08-01-01 | die Krankmeldung / der Urlaub / die Bestellung | Which word means sick note / sickness report context? | die Krankmeldung | `Krankmeldung` belongs to sickness absence. | auto_supported | weakly_eligible_after_delay | approve_as_is | — |
| draft_b1_06_005 | Auswahl | TF-B1-06-LS07-02 | T-B1-06-LS07-02-02 | den Arbeitgeber / die Rechnung / den Gutschein | Who must you usually inform in this language item? | den Arbeitgeber | This item practises employer notification language, not legal advice. | auto_supported | weakly_eligible_after_delay | approve_as_is | — |
| draft_b1_06_006 | Luecke | TF-B1-06-LS07-01 | T-B1-06-LS07-01-01 | I am ill today. | Ich bin heute ___. | krank | Use `krank` for ill. | auto_core | eligible_auto_after_delay | approve_as_is | — |
| draft_b1_06_007 | Luecke | TF-B1-06-LS07-01 | T-B1-06-LS07-01-02 | I cannot come today. | Ich kann heute nicht ___. | kommen | Use `kommen` in this absence message. | auto_core | eligible_auto_after_delay | approve_as_is | — |
| draft_b1_06_008 | Luecke | TF-B1-06-LS06-01 | T-B1-06-LS06-01-01 | I am not coming because I am ill. | Ich komme nicht, weil ich krank ___. | bin | With `weil`, the finite verb goes to the end. | auto_core | eligible_auto_after_delay | approve_as_is | — |
| draft_b1_06_009 | Luecke | TF-B1-06-LS06-01 | T-B1-06-LS06-01-03 | I am ill. Therefore I am not coming today. | Ich bin krank. ___ komme ich heute nicht. | Deshalb | After `Deshalb`, the verb comes second. | auto_core | eligible_auto_after_delay | approve_as_is | — |
| draft_b1_06_010 | Luecke | TF-B1-06-LS08-02 | T-B1-06-LS08-02-03 | I have to inform the employer. | Ich muss den Arbeitgeber ___. | informieren | Use `informieren` for notify/inform. | auto_core | eligible_auto_after_delay | approve_as_is | — |
| draft_b1_06_011 | Luecke | TF-B1-06-LS03-01 | T-B1-06-LS03-01-02 | I am signed off sick until Friday. | Ich bin ___ Freitag krankgeschrieben. | bis | Use `bis` for until. | auto_core | eligible_auto_after_delay | approve_as_is | — |
| draft_b1_06_012 | Satzbau | TF-B1-06-LS07-01 | T-B1-06-LS07-01-02 | Build the absence sentence. | Chunks: `Ich / kann / heute / nicht / kommen.` | Ich kann heute nicht kommen. | Keep the infinitive `kommen` at the end. | auto_core | eligible_auto_after_delay | approve_as_is | — |
| draft_b1_06_013 | Satzbau | TF-B1-06-LS06-01 | T-B1-06-LS06-01-01 | Build the `weil` reason clause. | Chunks: `Ich / komme / nicht, / weil / ich / krank / bin.` | Ich komme nicht, weil ich krank bin. | In a `weil` clause, `bin` goes at the end. | auto_core | eligible_auto_after_delay | approve_as_is | — |
| draft_b1_06_014 | Reparatur | TF-B1-06-LS06-01 | T-B1-06-LS06-01-01 | Fix the `weil` word order. | Fix: `Ich komme nicht, weil ich bin krank.` | Ich komme nicht, weil ich krank bin. | The verb goes to the end after `weil`. | auto_core | eligible_auto_after_delay | approve_as_is | — |
| draft_b1_06_015 | Reparatur | TF-B1-06-LS06-01 | T-B1-06-LS06-01-03 | Fix V2 after `deshalb`. | Fix: `Deshalb ich komme heute nicht.` | Deshalb komme ich heute nicht. | After `deshalb`, the finite verb comes second. | auto_core | eligible_auto_after_delay | approve_as_is | — |
| draft_b1_06_016 | Reparatur | TF-B1-06-LS08-02 | T-B1-06-LS08-02-03 | Fix the recipient. | Fix: `Ich informiere die Rechnung.` Intended meaning: inform the employer. | Ich informiere den Arbeitgeber. | The employer is the recipient in this absence message. | auto_supported | weakly_eligible_after_delay | approve_as_is | — |
| draft_b1_06_017 | Kontrast | TF-B1-06-LS07-01 | T-B1-06-LS07-01-01 | krank / im Urlaub | Choose sickness, not holiday. | krank | This module practises sickness absence. | auto_supported | weakly_eligible_after_delay | approve_as_is | — |
| draft_b1_06_018 | Kontrast | TF-B1-06-LS06-01 | T-B1-06-LS06-01-01 | weil / denn | Choose the connector that sends the verb to the end. | weil | `weil` sends the verb to the end. | auto_supported | weakly_eligible_after_delay | approve_as_is | — |
| draft_b1_06_019 | Produktion | TF-B1-06-LS10-01 | T-B1-06-LS10-01-01 | Use `krank` and `nicht kommen`. | Write/say a short message: you are ill and cannot come today. | self-marked | Checklist: illness + cannot come + today. | self_marked_production | not_review_eligible | approve_as_is | — |
| draft_b1_06_020 | Produktion | TF-B1-06-LS10-01 | T-B1-06-LS10-01-02 | Use `Krankmeldung` or `Attest`. | Ask what to do with the sick note. | self-marked | Checklist: question + document word. | self_marked_production | not_review_eligible | approve_as_is | — |

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
| Draft items audited | 20 |
| Approved as-is | 20 |
| Revised and approved | 0 |
| Cut | 0 |
| Deferred | 0 |
| Human/tutor check | 0 |
| Clean proceeding items | 20 |

QA note: this automated staged run keeps the first batch conservative. A later module-specific QA pass may still cut or revise individual items before import.


## 6. Variant-family decision

| Metric | Count |
| --- | --- |
| Variant families created | 2 |
| Variants inside families | 10 |
| Single auto-graded items retained | 5 |
| Notice cards retained separately | 3 |
| Production cards retained separately | 2 |

### Variant-family draft / QA ledger

| variantFamilyId | targetFamilyId | variantCount | familyType | decision | evidence caveat |
| --- | --- | --- | --- | --- | --- |
| b1-06-b1-06-ls07-01-vf-001 | TF-B1-06-LS07-01 | 4 | Type B | static curated variants | same-family evidence only; max one same-session evidence |
| b1-06-b1-06-ls06-01-vf-001 | TF-B1-06-LS06-01 | 6 | Type B | static curated variants | same-family evidence only; max one same-session evidence |

### Single-item ledger

| itemId | taskType | targetFamilyId | evidenceType | status |
| --- | --- | --- | --- | --- |
| draft_b1_06_004 | Auswahl | TF-B1-06-LS08-01 | auto_supported | kept as single item |
| draft_b1_06_005 | Auswahl | TF-B1-06-LS07-02 | auto_supported | kept as single item |
| draft_b1_06_010 | Luecke | TF-B1-06-LS08-02 | auto_core | kept as single item |
| draft_b1_06_016 | Reparatur | TF-B1-06-LS08-02 | auto_supported | kept as single item |
| draft_b1_06_011 | Luecke | TF-B1-06-LS03-01 | auto_core | kept as single item |

## 7. Row reconciliation

| Stage | Expected | Actual / survivor | Cuts | Deferred | Human-check | Status |
| --- | --- | --- | --- | --- | --- | --- |
| Draft | 20 | 20 | 0 | 0 | 0 | OK |
| QA | 20 | 20 | 0 | 0 | 0 | OK |
| Variant-family grouping | 20 | 20 | 0 | 0 | 0 | OK |

## 8. Schema mapping readiness

| Field | Decision |
| --- | --- |
| displayModuleId | B1-06 |
| moduleKey | b1-06 |
| internalPlanningId | b1_m06_sick_leave |
| moduleSlug | sick-leave |
| moduleTitle | Sick leave |
| supportPolicy/supportPresentation | Must be explicitly split in schema mapping; current supportPolicy is planning-only. |
| evidence labels | Mapped to auto_core / auto_supported / excluded / self_marked_production. |
| variant family readiness | Ready for schema mapping after module-specific QA review. |

### Schema-planning item summary

| itemId | targetFamilyId | targetId | taskType | answerMode planning | evidenceType | supportPolicy | reviewEligibility |
| --- | --- | --- | --- | --- | --- | --- | --- |
| draft_b1_06_001 | TF-B1-06-LS07-01 | T-B1-06-LS07-01-01 | notice | self_marked | excluded | scenario_visible | not_review_eligible |
| draft_b1_06_002 | TF-B1-06-LS06-01 | T-B1-06-LS06-01-01 | notice | self_marked | excluded | scenario_visible | not_review_eligible |
| draft_b1_06_003 | TF-B1-06-LS08-01 | T-B1-06-LS08-01-01 | notice | self_marked | excluded | scenario_visible | not_review_eligible |
| draft_b1_06_004 | TF-B1-06-LS08-01 | T-B1-06-LS08-01-01 | Auswahl | typed_short | auto_supported | scenario_visible | weakly_eligible_after_delay |
| draft_b1_06_005 | TF-B1-06-LS07-02 | T-B1-06-LS07-02-02 | Auswahl | typed_short | auto_supported | scenario_visible | weakly_eligible_after_delay |
| draft_b1_06_006 | TF-B1-06-LS07-01 | T-B1-06-LS07-01-01 | Luecke | typed_short | auto_core | scenario_visible | eligible_auto_after_delay |
| draft_b1_06_007 | TF-B1-06-LS07-01 | T-B1-06-LS07-01-02 | Luecke | typed_short | auto_core | scenario_visible | eligible_auto_after_delay |
| draft_b1_06_008 | TF-B1-06-LS06-01 | T-B1-06-LS06-01-01 | Luecke | typed_short | auto_core | scenario_visible | eligible_auto_after_delay |
| draft_b1_06_009 | TF-B1-06-LS06-01 | T-B1-06-LS06-01-03 | Luecke | typed_short | auto_core | scenario_visible | eligible_auto_after_delay |
| draft_b1_06_010 | TF-B1-06-LS08-02 | T-B1-06-LS08-02-03 | Luecke | typed_short | auto_core | scenario_visible | eligible_auto_after_delay |
| draft_b1_06_011 | TF-B1-06-LS03-01 | T-B1-06-LS03-01-02 | Luecke | typed_short | auto_core | scenario_visible | eligible_auto_after_delay |
| draft_b1_06_012 | TF-B1-06-LS07-01 | T-B1-06-LS07-01-02 | Satzbau | sentence_order | auto_core | scenario_visible | eligible_auto_after_delay |
| draft_b1_06_013 | TF-B1-06-LS06-01 | T-B1-06-LS06-01-01 | Satzbau | sentence_order | auto_core | scenario_visible | eligible_auto_after_delay |
| draft_b1_06_014 | TF-B1-06-LS06-01 | T-B1-06-LS06-01-01 | Reparatur | repair_text | auto_core | scenario_visible | eligible_auto_after_delay |
| draft_b1_06_015 | TF-B1-06-LS06-01 | T-B1-06-LS06-01-03 | Reparatur | repair_text | auto_core | scenario_visible | eligible_auto_after_delay |
| draft_b1_06_016 | TF-B1-06-LS08-02 | T-B1-06-LS08-02-03 | Reparatur | repair_text | auto_supported | scenario_visible | weakly_eligible_after_delay |
| draft_b1_06_017 | TF-B1-06-LS07-01 | T-B1-06-LS07-01-01 | Kontrast | typed_short | auto_supported | scenario_visible | weakly_eligible_after_delay |
| draft_b1_06_018 | TF-B1-06-LS06-01 | T-B1-06-LS06-01-01 | Kontrast | typed_short | auto_supported | scenario_visible | weakly_eligible_after_delay |
| draft_b1_06_019 | TF-B1-06-LS10-01 | T-B1-06-LS10-01-01 | Produktion | self_marked | self_marked_production | scenario_visible | not_review_eligible |
| draft_b1_06_020 | TF-B1-06-LS10-01 | T-B1-06-LS10-01-02 | Produktion | self_marked | self_marked_production | scenario_visible | not_review_eligible |

## 9. Import-plan readiness

| Import area | Status | Notes |
| --- | --- | --- |
| Current app inspection | Not run | Required later before Codex. Do not assume route/content architecture. |
| Static content strategy | Ready as planning recommendation | Static records only; no runtime generation. |
| Storage/export | Preserve | No storage-key change allowed. |
| Sprint sampling | Defer implementation decision | B1-06 should not enter mixed sprints until route QA passes. |
| Codex implementation prompt | Not created | Create only after final QA, row reconciliation, schema mapping, and import plan. |

## 10. Files to save

- `ozmosis_b1_m06_sick_leave_draft_items_v0_1.md`
- `ozmosis_b1_m06_sick_leave_phase3a_qa_approved_v0_1.md`
- `ozmosis_b1_m06_sick_leave_variant_family_decision_v0_1.md`
- `ozmosis_b1_m06_sick_leave_final_inventory_v0_1.md`
- `ozmosis_b1_m06_sick_leave_schema_mapping_v0_1.md`
- `ozmosis_b1_m06_sick_leave_codex_import_plan_v0_1.md`


## 11. Stop/go verdict

`READY_FOR_MODULE_SPECIFIC_QA_AND_ROW_RECONCILIATION`

This module has a complete first staged draft path, but it should receive a module-specific QA pass before app import planning is treated as final.
