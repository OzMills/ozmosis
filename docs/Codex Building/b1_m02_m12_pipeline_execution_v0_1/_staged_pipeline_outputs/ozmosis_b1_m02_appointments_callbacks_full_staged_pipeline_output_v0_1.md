# Ozmosis B1-02 — Full Staged Content Pipeline Output v0.1

Module: B1-02 — Appointments / callbacks  
Internal planning ID: `b1_m02_appointments_callbacks`  
Slug: `appointments-callbacks`  
Status: pipeline-generated planning output, not app-ready JSON.

## 1. Module source verification

| Source | Status | Use | Caveat |
| --- | --- | --- | --- |
| Pipeline Core | Available | Process/evidence/row rules | No item text copied. |
| Cross-Spoke Consistency Audit | Available | Accepted spoke set with caveats | Minor caveats carried into QA notes. |
| B1-02 spoke | Available | Module boundaries and target families | No source text copied. |
| v0.80.4 source brief/roadmap | Available | Static app/storage constraints | No implementation here. |
| Vocabulary/course PDFs | Available | Structural inspiration only | No copied or paraphrased item text. |

## 2. Spoke intake

| Field | Value |
| --- | --- |
| moduleId | B1-02 |
| moduleTitle | Appointments / callbacks |
| internalPlanningId | b1_m02_appointments_callbacks |
| moduleSlug | appointments-callbacks |
| learner-facing status | draft content-planning output |
| boundary decision | module spoke accepted; adjacent-module drift checked in QA |

## 3. Draft batch

| Metric | Count |
| --- | --- |
| Draft items generated | 30 |
| Auswahl items | 4 |
| Kontrast items | 3 |
| Luecke items | 8 |
| Produktion items | 3 |
| Reparatur items | 5 |
| Satzbau items | 3 |
| Umformen items | 1 |
| notice items | 3 |

### Draft item ledger

| itemId | taskType | targetFamilyId | targetId | cue | prompt | answer | feedback | evidenceType | reviewEligibility | QA decision | QA issue |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| draft_b1_02_001 | notice | TF-B1-02-LS08-01 | T-B1-02-LS08-01-01 | — | Concept: Use `vereinbaren` for making an appointment, `verschieben` for moving it, and `absagen` for cancelling it. | — | — | excluded | not_review_eligible | approve_as_is | — |
| draft_b1_02_002 | notice | TF-B1-02-LS07-02 | T-B1-02-LS07-02-01 | — | Concept: `um Rückruf bitten` is a compact formal way to ask for a callback. | — | — | excluded | not_review_eligible | approve_as_is | — |
| draft_b1_02_003 | notice | TF-B1-02-LS03-02 | T-B1-02-LS03-02-01 | — | Concept: In appointment phrases, `bei der Berufsberatung` can be learned as a fixed phrase first. Do not treat it as full dative mastery. | — | — | excluded | not_review_eligible | approve_as_is | — |
| draft_b1_02_004 | Auswahl | TF-B1-02-LS08-01 | T-B1-02-LS08-01-01 | Choices: vereinbaren / absagen / schlafen | German-first scenario: Sie brauchen einen neuen Termin. Which verb best fits? | vereinbaren | Use `vereinbaren` when you make an appointment. | auto_supported | weakly_eligible_after_delay | approve_as_is | — |
| draft_b1_02_005 | Auswahl | TF-B1-02-LS08-01 | T-B1-02-LS08-01-02 | Choices: verschieben / bestellen / unterschreiben | German-first scenario: Der Termin ist morgen, aber Sie können nicht. Which action fits? | verschieben | `verschieben` means moving an appointment. | auto_supported | weakly_eligible_after_delay | approve_as_is | — |
| draft_b1_02_006 | Auswahl | TF-B1-02-LS07-02 | T-B1-02-LS07-02-01 | Choices: um Rückruf bitten / eine Rechnung bezahlen / einen Lebenslauf schicken | Which phrase asks for a callback? | um Rückruf bitten | `Rückruf` is the callback noun. | auto_supported | weakly_eligible_after_delay | approve_as_is | — |
| draft_b1_02_007 | Luecke | TF-B1-02-LS08-01 | T-B1-02-LS08-01-01 | I would like to make an appointment. | Ich möchte einen Termin ___. | vereinbaren | `einen Termin vereinbaren` = make an appointment. | auto_core | eligible_auto_after_delay | approve_as_is | — |
| draft_b1_02_008 | Luecke | TF-B1-02-LS08-01 | T-B1-02-LS08-01-02 | I have to move the appointment. | Ich muss den Termin ___. | verschieben | `verschieben` means move/postpone. | auto_core | eligible_auto_after_delay | approve_as_is | — |
| draft_b1_02_009 | Luecke | TF-B1-02-LS08-01 | T-B1-02-LS08-01-03 | I unfortunately have to cancel the appointment. | Ich muss den Termin leider ___. | absagen | `absagen` means cancel. | auto_core | eligible_auto_after_delay | approve_as_is | — |
| draft_b1_02_010 | Luecke | TF-B1-02-LS07-02 | T-B1-02-LS07-02-01 | I am asking for a callback. | Ich bitte um ___. | Rückruf | `Rückruf` is a noun, so it is capitalised. | auto_core | eligible_auto_after_delay | approve_as_is | — |
| draft_b1_02_011 | Luecke | TF-B1-02-LS04-01 | T-B1-02-LS04-01-01 | Can I get an appointment? | ___ ich einen Termin bekommen? | Kann | Yes/no questions start with the finite verb. | auto_core | eligible_auto_after_delay | approve_as_is | — |
| draft_b1_02_012 | Luecke | TF-B1-02-LS03-01 | T-B1-02-LS03-01-01 | The appointment is at 10 o’clock. | Der Termin ist ___ 10 Uhr. | um | Use `um` for clock times. | auto_core | eligible_auto_after_delay | approve_as_is | — |
| draft_b1_02_013 | Luecke | TF-B1-02-LS03-01 | T-B1-02-LS03-01-01 | The appointment is on Monday. | Der Termin ist ___ Montag. | am | Use `am` for weekdays. | auto_core | eligible_auto_after_delay | approve_as_is | — |
| draft_b1_02_014 | Luecke | TF-B1-02-LS03-02 | T-B1-02-LS03-02-01 | I have an appointment at careers counselling. | Ich habe einen Termin ___ der Berufsberatung. | bei | Learn `bei der Berufsberatung` as a fixed appointment phrase. | auto_supported | weakly_eligible_after_delay | approve_as_is | — |
| draft_b1_02_015 | Satzbau | TF-B1-02-LS07-01 | T-B1-02-LS07-01-01 | Build: I would like to make an appointment. | Chunks: `Ich / möchte / einen Termin / vereinbaren.` | Ich möchte einen Termin vereinbaren. | Keep the modal-like request frame together. | auto_core | eligible_auto_after_delay | approve_as_is | — |
| draft_b1_02_016 | Satzbau | TF-B1-02-LS04-01 | T-B1-02-LS04-01-01 | Build: Can I get an appointment? | Chunks: `Kann / ich / einen Termin / bekommen?` | Kann ich einen Termin bekommen? | In yes/no questions, the verb comes first. | auto_core | eligible_auto_after_delay | approve_as_is | — |
| draft_b1_02_017 | Satzbau | TF-B1-02-LS07-02 | T-B1-02-LS07-02-01 | Build: I ask for a callback. | Chunks: `Ich / bitte / um / Rückruf.` | Ich bitte um Rückruf. | `um Rückruf bitten` is a formal callback phrase. | auto_core | eligible_auto_after_delay | approve_as_is | — |
| draft_b1_02_018 | Reparatur | TF-B1-02-LS08-01 | T-B1-02-LS08-01-01 | Fix the formal appointment phrase. | Fix: `Ich möchte einen Termin machen.` Intended formal meaning: make an appointment. | Ich möchte einen Termin vereinbaren. | Use `vereinbaren` for a formal appointment. | auto_supported | weakly_eligible_after_delay | approve_as_is | — |
| draft_b1_02_019 | Reparatur | TF-B1-02-LS08-01 | T-B1-02-LS08-01-02 | Fix the appointment verb. | Fix: `Ich muss den Termin bewegen.` Intended meaning: move/postpone the appointment. | Ich muss den Termin verschieben. | `verschieben` is used for moving appointments. | auto_core | eligible_auto_after_delay | approve_as_is | — |
| draft_b1_02_020 | Reparatur | TF-B1-02-LS07-02 | T-B1-02-LS07-02-01 | Fix the phrase. | Fix: `Ich bitte für Rückruf.` | Ich bitte um Rückruf. | `bitten um` is the useful fixed phrase here. | auto_core | eligible_auto_after_delay | approve_as_is | — |
| draft_b1_02_021 | Reparatur | TF-B1-02-LS04-01 | T-B1-02-LS04-01-01 | Fix the yes/no question order. | Fix: `Ich kann einen Termin bekommen?` | Kann ich einen Termin bekommen? | Put the finite verb first in a yes/no question. | auto_core | eligible_auto_after_delay | approve_as_is | — |
| draft_b1_02_022 | Reparatur | TF-B1-02-LS03-01 | T-B1-02-LS03-01-01 | Fix the time preposition. | Fix: `Der Termin ist an 10 Uhr.` | Der Termin ist um 10 Uhr. | Use `um` for clock times. | auto_core | eligible_auto_after_delay | approve_as_is | — |
| draft_b1_02_023 | Umformen | TF-B1-02-LS07-01 | T-B1-02-LS07-01-02 | Transform the statement into a polite question. | Turn into a polite question: `Ich bekomme einen Termin.` | Kann ich einen Termin bekommen? | Use `Kann ich...?` for a simple polite request. | auto_core | eligible_auto_after_delay | approve_as_is | — |
| draft_b1_02_024 | Kontrast | TF-B1-02-LS08-01 | T-B1-02-LS08-01-02 | verschieben / bestehen | Choose the better verb: `den Termin ___` when you cannot come tomorrow. | verschieben | `Termin verschieben` means move the appointment. | auto_supported | weakly_eligible_after_delay | approve_as_is | — |
| draft_b1_02_025 | Kontrast | TF-B1-02-LS08-01 | T-B1-02-LS08-01-03 | absagen / beraten | Choose the better verb: `den Termin ___` when you cannot attend at all. | absagen | `absagen` means cancel. | auto_supported | weakly_eligible_after_delay | approve_as_is | — |
| draft_b1_02_026 | Kontrast | TF-B1-02-LS07-02 | T-B1-02-LS07-02-01 | Ich bitte um Rückruf. / Ich bitte um Rechnung. | Choose the callback phrase. | Ich bitte um Rückruf. | `Rückruf` is callback. | auto_supported | weakly_eligible_after_delay | approve_as_is | — |
| draft_b1_02_027 | Produktion | TF-B1-02-LS10-01 | T-B1-02-LS10-01-01 | Use: `Ich möchte...` or `Kann ich...?` | Write or say one short sentence asking for an appointment. | self-marked | Checklist: need + appointment + polite phrase. | self_marked_production | not_review_eligible | approve_as_is | — |
| draft_b1_02_028 | Produktion | TF-B1-02-LS10-01 | T-B1-02-LS10-01-02 | Use: `Rückruf`. | Write or say one short sentence asking for a callback. | self-marked | Checklist: callback + your need + polite tone. | self_marked_production | not_review_eligible | approve_as_is | — |
| draft_b1_02_029 | Produktion | TF-B1-02-LS10-01 | T-B1-02-LS10-01-01 | Use: `verschieben`. | Say that you need to move an appointment. | self-marked | Checklist: appointment + move/postpone + short reason optional. | self_marked_production | not_review_eligible | approve_as_is | — |
| draft_b1_02_030 | Auswahl | TF-B1-02-LS03-01 | T-B1-02-LS03-01-02 | Choices: die Sprechzeit / die Rechnung / die Lieferung | Which phrase means office hours? | die Sprechzeit | `Sprechzeit` is the time when an office/person is available. | auto_supported | weakly_eligible_after_delay | approve_as_is | — |

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
| Draft items audited | 30 |
| Approved as-is | 30 |
| Revised and approved | 0 |
| Cut | 0 |
| Deferred | 0 |
| Human/tutor check | 0 |
| Clean proceeding items | 30 |

QA note: this automated staged run keeps the first batch conservative. A later module-specific QA pass may still cut or revise individual items before import.


## 6. Variant-family decision

| Metric | Count |
| --- | --- |
| Variant families created | 4 |
| Variants inside families | 21 |
| Single auto-graded items retained | 3 |
| Notice cards retained separately | 3 |
| Production cards retained separately | 3 |

### Variant-family draft / QA ledger

| variantFamilyId | targetFamilyId | variantCount | familyType | decision | evidence caveat |
| --- | --- | --- | --- | --- | --- |
| b1-02-b1-02-ls08-01-vf-001 | TF-B1-02-LS08-01 | 9 | Type B | static curated variants | same-family evidence only; max one same-session evidence |
| b1-02-b1-02-ls07-02-vf-001 | TF-B1-02-LS07-02 | 5 | Type B | static curated variants | same-family evidence only; max one same-session evidence |
| b1-02-b1-02-ls04-01-vf-001 | TF-B1-02-LS04-01 | 3 | Type B | static curated variants | same-family evidence only; max one same-session evidence |
| b1-02-b1-02-ls03-01-vf-001 | TF-B1-02-LS03-01 | 4 | Type B | static curated variants | same-family evidence only; max one same-session evidence |

### Single-item ledger

| itemId | taskType | targetFamilyId | evidenceType | status |
| --- | --- | --- | --- | --- |
| draft_b1_02_014 | Luecke | TF-B1-02-LS03-02 | auto_supported | kept as single item |
| draft_b1_02_015 | Satzbau | TF-B1-02-LS07-01 | auto_core | kept as single item |
| draft_b1_02_023 | Umformen | TF-B1-02-LS07-01 | auto_core | kept as single item |

## 7. Row reconciliation

| Stage | Expected | Actual / survivor | Cuts | Deferred | Human-check | Status |
| --- | --- | --- | --- | --- | --- | --- |
| Draft | 30 | 30 | 0 | 0 | 0 | OK |
| QA | 30 | 30 | 0 | 0 | 0 | OK |
| Variant-family grouping | 30 | 30 | 0 | 0 | 0 | OK |

## 8. Schema mapping readiness

| Field | Decision |
| --- | --- |
| displayModuleId | B1-02 |
| moduleKey | b1-02 |
| internalPlanningId | b1_m02_appointments_callbacks |
| moduleSlug | appointments-callbacks |
| moduleTitle | Appointments / callbacks |
| supportPolicy/supportPresentation | Must be explicitly split in schema mapping; current supportPolicy is planning-only. |
| evidence labels | Mapped to auto_core / auto_supported / excluded / self_marked_production. |
| variant family readiness | Ready for schema mapping after module-specific QA review. |

### Schema-planning item summary

| itemId | targetFamilyId | targetId | taskType | answerMode planning | evidenceType | supportPolicy | reviewEligibility |
| --- | --- | --- | --- | --- | --- | --- | --- |
| draft_b1_02_001 | TF-B1-02-LS08-01 | T-B1-02-LS08-01-01 | notice | self_marked | excluded | scenario_visible | not_review_eligible |
| draft_b1_02_002 | TF-B1-02-LS07-02 | T-B1-02-LS07-02-01 | notice | self_marked | excluded | scenario_visible | not_review_eligible |
| draft_b1_02_003 | TF-B1-02-LS03-02 | T-B1-02-LS03-02-01 | notice | self_marked | excluded | scenario_visible | not_review_eligible |
| draft_b1_02_004 | TF-B1-02-LS08-01 | T-B1-02-LS08-01-01 | Auswahl | typed_short | auto_supported | scenario_visible | weakly_eligible_after_delay |
| draft_b1_02_005 | TF-B1-02-LS08-01 | T-B1-02-LS08-01-02 | Auswahl | typed_short | auto_supported | scenario_visible | weakly_eligible_after_delay |
| draft_b1_02_006 | TF-B1-02-LS07-02 | T-B1-02-LS07-02-01 | Auswahl | typed_short | auto_supported | scenario_visible | weakly_eligible_after_delay |
| draft_b1_02_007 | TF-B1-02-LS08-01 | T-B1-02-LS08-01-01 | Luecke | typed_short | auto_core | scenario_visible | eligible_auto_after_delay |
| draft_b1_02_008 | TF-B1-02-LS08-01 | T-B1-02-LS08-01-02 | Luecke | typed_short | auto_core | scenario_visible | eligible_auto_after_delay |
| draft_b1_02_009 | TF-B1-02-LS08-01 | T-B1-02-LS08-01-03 | Luecke | typed_short | auto_core | scenario_visible | eligible_auto_after_delay |
| draft_b1_02_010 | TF-B1-02-LS07-02 | T-B1-02-LS07-02-01 | Luecke | typed_short | auto_core | scenario_visible | eligible_auto_after_delay |
| draft_b1_02_011 | TF-B1-02-LS04-01 | T-B1-02-LS04-01-01 | Luecke | typed_short | auto_core | scenario_visible | eligible_auto_after_delay |
| draft_b1_02_012 | TF-B1-02-LS03-01 | T-B1-02-LS03-01-01 | Luecke | typed_short | auto_core | scenario_visible | eligible_auto_after_delay |
| draft_b1_02_013 | TF-B1-02-LS03-01 | T-B1-02-LS03-01-01 | Luecke | typed_short | auto_core | scenario_visible | eligible_auto_after_delay |
| draft_b1_02_014 | TF-B1-02-LS03-02 | T-B1-02-LS03-02-01 | Luecke | typed_short | auto_supported | scenario_visible | weakly_eligible_after_delay |
| draft_b1_02_015 | TF-B1-02-LS07-01 | T-B1-02-LS07-01-01 | Satzbau | sentence_order | auto_core | scenario_visible | eligible_auto_after_delay |
| draft_b1_02_016 | TF-B1-02-LS04-01 | T-B1-02-LS04-01-01 | Satzbau | sentence_order | auto_core | scenario_visible | eligible_auto_after_delay |
| draft_b1_02_017 | TF-B1-02-LS07-02 | T-B1-02-LS07-02-01 | Satzbau | sentence_order | auto_core | scenario_visible | eligible_auto_after_delay |
| draft_b1_02_018 | TF-B1-02-LS08-01 | T-B1-02-LS08-01-01 | Reparatur | repair_text | auto_supported | scenario_visible | weakly_eligible_after_delay |
| draft_b1_02_019 | TF-B1-02-LS08-01 | T-B1-02-LS08-01-02 | Reparatur | repair_text | auto_core | scenario_visible | eligible_auto_after_delay |
| draft_b1_02_020 | TF-B1-02-LS07-02 | T-B1-02-LS07-02-01 | Reparatur | repair_text | auto_core | scenario_visible | eligible_auto_after_delay |
| draft_b1_02_021 | TF-B1-02-LS04-01 | T-B1-02-LS04-01-01 | Reparatur | repair_text | auto_core | scenario_visible | eligible_auto_after_delay |
| draft_b1_02_022 | TF-B1-02-LS03-01 | T-B1-02-LS03-01-01 | Reparatur | repair_text | auto_core | scenario_visible | eligible_auto_after_delay |
| draft_b1_02_023 | TF-B1-02-LS07-01 | T-B1-02-LS07-01-02 | Umformen | transformation_text | auto_core | scenario_visible | eligible_auto_after_delay |
| draft_b1_02_024 | TF-B1-02-LS08-01 | T-B1-02-LS08-01-02 | Kontrast | typed_short | auto_supported | scenario_visible | weakly_eligible_after_delay |
| draft_b1_02_025 | TF-B1-02-LS08-01 | T-B1-02-LS08-01-03 | Kontrast | typed_short | auto_supported | scenario_visible | weakly_eligible_after_delay |
| draft_b1_02_026 | TF-B1-02-LS07-02 | T-B1-02-LS07-02-01 | Kontrast | typed_short | auto_supported | scenario_visible | weakly_eligible_after_delay |
| draft_b1_02_027 | TF-B1-02-LS10-01 | T-B1-02-LS10-01-01 | Produktion | self_marked | self_marked_production | scenario_visible | not_review_eligible |
| draft_b1_02_028 | TF-B1-02-LS10-01 | T-B1-02-LS10-01-02 | Produktion | self_marked | self_marked_production | scenario_visible | not_review_eligible |
| draft_b1_02_029 | TF-B1-02-LS10-01 | T-B1-02-LS10-01-01 | Produktion | self_marked | self_marked_production | scenario_visible | not_review_eligible |
| draft_b1_02_030 | TF-B1-02-LS03-01 | T-B1-02-LS03-01-02 | Auswahl | typed_short | auto_supported | scenario_visible | weakly_eligible_after_delay |

## 9. Import-plan readiness

| Import area | Status | Notes |
| --- | --- | --- |
| Current app inspection | Not run | Required later before Codex. Do not assume route/content architecture. |
| Static content strategy | Ready as planning recommendation | Static records only; no runtime generation. |
| Storage/export | Preserve | No storage-key change allowed. |
| Sprint sampling | Defer implementation decision | B1-02 should not enter mixed sprints until route QA passes. |
| Codex implementation prompt | Not created | Create only after final QA, row reconciliation, schema mapping, and import plan. |

## 10. Files to save

- `ozmosis_b1_m02_appointments_callbacks_draft_items_v0_1.md`
- `ozmosis_b1_m02_appointments_callbacks_phase3a_qa_approved_v0_1.md`
- `ozmosis_b1_m02_appointments_callbacks_variant_family_decision_v0_1.md`
- `ozmosis_b1_m02_appointments_callbacks_final_inventory_v0_1.md`
- `ozmosis_b1_m02_appointments_callbacks_schema_mapping_v0_1.md`
- `ozmosis_b1_m02_appointments_callbacks_codex_import_plan_v0_1.md`


## 11. Stop/go verdict

`READY_FOR_MODULE_SPECIFIC_QA_AND_ROW_RECONCILIATION`

This module has a complete first staged draft path, but it should receive a module-specific QA pass before app import planning is treated as final.
