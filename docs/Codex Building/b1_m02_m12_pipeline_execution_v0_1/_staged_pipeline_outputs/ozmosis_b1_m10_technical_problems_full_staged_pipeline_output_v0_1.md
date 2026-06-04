# Ozmosis B1-10 — Full Staged Content Pipeline Output v0.1

Module: B1-10 — Technical problems  
Internal planning ID: `b1_m10_technical_problems`  
Slug: `technical-problems`  
Status: pipeline-generated planning output, not app-ready JSON.

## 1. Module source verification

| Source | Status | Use | Caveat |
| --- | --- | --- | --- |
| Pipeline Core | Available | Process/evidence/row rules | No item text copied. |
| Cross-Spoke Consistency Audit | Available | Accepted spoke set with caveats | Minor caveats carried into QA notes. |
| B1-10 spoke | Available | Module boundaries and target families | No source text copied. |
| v0.80.4 source brief/roadmap | Available | Static app/storage constraints | No implementation here. |
| Vocabulary/course PDFs | Available | Structural inspiration only | No copied or paraphrased item text. |

## 2. Spoke intake

| Field | Value |
| --- | --- |
| moduleId | B1-10 |
| moduleTitle | Technical problems |
| internalPlanningId | b1_m10_technical_problems |
| moduleSlug | technical-problems |
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
| draft_b1_10_001 | notice | TF-B1-10-LS04-01 | T-B1-10-LS04-01-01 | — | Concept: Technical action verbs can be separable: `Schalten Sie das Gerät ein.` | — | — | excluded | not_review_eligible | approve_as_is | — |
| draft_b1_10_002 | notice | TF-B1-10-LS04-02 | T-B1-10-LS04-02-01 | — | Concept: Formal instructions use the `Sie` imperative: `Prüfen Sie...`, `Starten Sie...`. | — | — | excluded | not_review_eligible | approve_as_is | — |
| draft_b1_10_003 | notice | TF-B1-10-LS06-01 | T-B1-10-LS06-01-01 | — | Concept: Troubleshooting clauses stay short: if X happens, do Y. | — | — | excluded | not_review_eligible | approve_as_is | — |
| draft_b1_10_004 | Auswahl | TF-B1-10-LS08-01 | T-B1-10-LS08-01-01 | das Gerät / der Urlaub / der Lebenslauf | Which word means device? | das Gerät | `Gerät` is device. | auto_supported | weakly_eligible_after_delay | approve_as_is | — |
| draft_b1_10_005 | Auswahl | TF-B1-10-LS08-01 | T-B1-10-LS08-01-02 | die Fehlermeldung / die Besprechung / der Ersatz | Which word means error message? | die Fehlermeldung | `Fehlermeldung` is error message. | auto_supported | weakly_eligible_after_delay | approve_as_is | — |
| draft_b1_10_006 | Luecke | TF-B1-10-LS07-01 | T-B1-10-LS07-01-01 | The device does not work. | Das Gerät funktioniert ___. | nicht | `funktioniert nicht` reports the problem. | auto_core | eligible_auto_after_delay | approve_as_is | — |
| draft_b1_10_007 | Luecke | TF-B1-10-LS04-01 | T-B1-10-LS04-01-01 | Please switch the device on. | Bitte schalten Sie das Gerät ___. | ein | Separable prefix `ein` comes at the end. | auto_core | eligible_auto_after_delay | approve_as_is | — |
| draft_b1_10_008 | Luecke | TF-B1-10-LS04-01 | T-B1-10-LS04-01-01 | Please switch the device off. | Bitte schalten Sie das Gerät ___. | aus | Separable prefix `aus` comes at the end. | auto_core | eligible_auto_after_delay | approve_as_is | — |
| draft_b1_10_009 | Luecke | TF-B1-10-LS04-01 | T-B1-10-LS04-01-03 | Please restart the computer. | Bitte starten Sie den Computer ___. | neu | `neu starten` = restart. | auto_core | eligible_auto_after_delay | approve_as_is | — |
| draft_b1_10_010 | Luecke | TF-B1-10-LS04-02 | T-B1-10-LS04-02-01 | Check the plug. | ___ Sie den Stecker. | Prüfen | Formal imperative starts with the verb. | auto_core | eligible_auto_after_delay | approve_as_is | — |
| draft_b1_10_011 | Luecke | TF-B1-10-LS06-01 | T-B1-10-LS06-01-01 | If the device does not work, please call. | ___ das Gerät nicht funktioniert, rufen Sie bitte an. | Wenn | Use `wenn` for if/when. | auto_core | eligible_auto_after_delay | approve_as_is | — |
| draft_b1_10_012 | Satzbau | TF-B1-10-LS04-01 | T-B1-10-LS04-01-01 | Build the formal instruction. | Chunks: `Schalten / Sie / das Gerät / ein.` | Schalten Sie das Gerät ein. | The separable prefix goes at the end. | auto_core | eligible_auto_after_delay | approve_as_is | — |
| draft_b1_10_013 | Satzbau | TF-B1-10-LS04-02 | T-B1-10-LS04-02-01 | Build the formal imperative. | Chunks: `Prüfen / Sie / den Stecker.` | Prüfen Sie den Stecker. | Formal imperative: verb + Sie. | auto_core | eligible_auto_after_delay | approve_as_is | — |
| draft_b1_10_014 | Reparatur | TF-B1-10-LS04-01 | T-B1-10-LS04-01-01 | Fix the formal instruction. | Fix: `Sie einschalten das Gerät.` | Schalten Sie das Gerät ein. | Verb first; prefix at the end. | auto_core | eligible_auto_after_delay | approve_as_is | — |
| draft_b1_10_015 | Reparatur | TF-B1-10-LS04-02 | T-B1-10-LS04-02-01 | Fix the imperative. | Fix: `Sie prüfen den Stecker.` Intended instruction. | Prüfen Sie den Stecker. | Formal instruction starts with the verb. | auto_core | eligible_auto_after_delay | approve_as_is | — |
| draft_b1_10_016 | Reparatur | TF-B1-10-LS06-01 | T-B1-10-LS06-01-01 | Fix the `wenn` clause. | Fix: `Wenn funktioniert das Gerät nicht, rufen Sie an.` | Wenn das Gerät nicht funktioniert, rufen Sie an. | The verb goes at the end in the `wenn` clause. | auto_core | eligible_auto_after_delay | approve_as_is | — |
| draft_b1_10_017 | Kontrast | TF-B1-10-LS04-01 | T-B1-10-LS04-01-01 | einschalten / beschweren | Choose switch on. | einschalten | `einschalten` = switch on. | auto_supported | weakly_eligible_after_delay | approve_as_is | — |
| draft_b1_10_018 | Kontrast | TF-B1-10-LS08-01 | T-B1-10-LS08-01-02 | die Fehlermeldung / der Lebenslauf | Choose a technical problem word. | die Fehlermeldung | Error message = `Fehlermeldung`. | auto_supported | weakly_eligible_after_delay | approve_as_is | — |
| draft_b1_10_019 | Produktion | TF-B1-10-LS10-01 | T-B1-10-LS10-01-01 | Use `funktioniert nicht` or `Fehlermeldung`. | Report one simple technical problem. | self-marked | Checklist: object + problem + short. | self_marked_production | not_review_eligible | approve_as_is | — |
| draft_b1_10_020 | Produktion | TF-B1-10-LS10-01 | T-B1-10-LS10-01-02 | Use `Können Sie mir helfen?` | Ask for help with a technical problem. | self-marked | Checklist: help request + problem word. | self_marked_production | not_review_eligible | approve_as_is | — |

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
| Variant families created | 3 |
| Variants inside families | 12 |
| Single auto-graded items retained | 3 |
| Notice cards retained separately | 3 |
| Production cards retained separately | 2 |

### Variant-family draft / QA ledger

| variantFamilyId | targetFamilyId | variantCount | familyType | decision | evidence caveat |
| --- | --- | --- | --- | --- | --- |
| b1-10-b1-10-ls08-01-vf-001 | TF-B1-10-LS08-01 | 3 | Type B | static curated variants | same-family evidence only; max one same-session evidence |
| b1-10-b1-10-ls04-01-vf-001 | TF-B1-10-LS04-01 | 6 | Type B | static curated variants | same-family evidence only; max one same-session evidence |
| b1-10-b1-10-ls04-02-vf-001 | TF-B1-10-LS04-02 | 3 | Type B | static curated variants | same-family evidence only; max one same-session evidence |

### Single-item ledger

| itemId | taskType | targetFamilyId | evidenceType | status |
| --- | --- | --- | --- | --- |
| draft_b1_10_006 | Luecke | TF-B1-10-LS07-01 | auto_core | kept as single item |
| draft_b1_10_011 | Luecke | TF-B1-10-LS06-01 | auto_core | kept as single item |
| draft_b1_10_016 | Reparatur | TF-B1-10-LS06-01 | auto_core | kept as single item |

## 7. Row reconciliation

| Stage | Expected | Actual / survivor | Cuts | Deferred | Human-check | Status |
| --- | --- | --- | --- | --- | --- | --- |
| Draft | 20 | 20 | 0 | 0 | 0 | OK |
| QA | 20 | 20 | 0 | 0 | 0 | OK |
| Variant-family grouping | 20 | 20 | 0 | 0 | 0 | OK |

## 8. Schema mapping readiness

| Field | Decision |
| --- | --- |
| displayModuleId | B1-10 |
| moduleKey | b1-10 |
| internalPlanningId | b1_m10_technical_problems |
| moduleSlug | technical-problems |
| moduleTitle | Technical problems |
| supportPolicy/supportPresentation | Must be explicitly split in schema mapping; current supportPolicy is planning-only. |
| evidence labels | Mapped to auto_core / auto_supported / excluded / self_marked_production. |
| variant family readiness | Ready for schema mapping after module-specific QA review. |

### Schema-planning item summary

| itemId | targetFamilyId | targetId | taskType | answerMode planning | evidenceType | supportPolicy | reviewEligibility |
| --- | --- | --- | --- | --- | --- | --- | --- |
| draft_b1_10_001 | TF-B1-10-LS04-01 | T-B1-10-LS04-01-01 | notice | self_marked | excluded | scenario_visible | not_review_eligible |
| draft_b1_10_002 | TF-B1-10-LS04-02 | T-B1-10-LS04-02-01 | notice | self_marked | excluded | scenario_visible | not_review_eligible |
| draft_b1_10_003 | TF-B1-10-LS06-01 | T-B1-10-LS06-01-01 | notice | self_marked | excluded | scenario_visible | not_review_eligible |
| draft_b1_10_004 | TF-B1-10-LS08-01 | T-B1-10-LS08-01-01 | Auswahl | typed_short | auto_supported | scenario_visible | weakly_eligible_after_delay |
| draft_b1_10_005 | TF-B1-10-LS08-01 | T-B1-10-LS08-01-02 | Auswahl | typed_short | auto_supported | scenario_visible | weakly_eligible_after_delay |
| draft_b1_10_006 | TF-B1-10-LS07-01 | T-B1-10-LS07-01-01 | Luecke | typed_short | auto_core | scenario_visible | eligible_auto_after_delay |
| draft_b1_10_007 | TF-B1-10-LS04-01 | T-B1-10-LS04-01-01 | Luecke | typed_short | auto_core | scenario_visible | eligible_auto_after_delay |
| draft_b1_10_008 | TF-B1-10-LS04-01 | T-B1-10-LS04-01-01 | Luecke | typed_short | auto_core | scenario_visible | eligible_auto_after_delay |
| draft_b1_10_009 | TF-B1-10-LS04-01 | T-B1-10-LS04-01-03 | Luecke | typed_short | auto_core | scenario_visible | eligible_auto_after_delay |
| draft_b1_10_010 | TF-B1-10-LS04-02 | T-B1-10-LS04-02-01 | Luecke | typed_short | auto_core | scenario_visible | eligible_auto_after_delay |
| draft_b1_10_011 | TF-B1-10-LS06-01 | T-B1-10-LS06-01-01 | Luecke | typed_short | auto_core | scenario_visible | eligible_auto_after_delay |
| draft_b1_10_012 | TF-B1-10-LS04-01 | T-B1-10-LS04-01-01 | Satzbau | sentence_order | auto_core | scenario_visible | eligible_auto_after_delay |
| draft_b1_10_013 | TF-B1-10-LS04-02 | T-B1-10-LS04-02-01 | Satzbau | sentence_order | auto_core | scenario_visible | eligible_auto_after_delay |
| draft_b1_10_014 | TF-B1-10-LS04-01 | T-B1-10-LS04-01-01 | Reparatur | repair_text | auto_core | scenario_visible | eligible_auto_after_delay |
| draft_b1_10_015 | TF-B1-10-LS04-02 | T-B1-10-LS04-02-01 | Reparatur | repair_text | auto_core | scenario_visible | eligible_auto_after_delay |
| draft_b1_10_016 | TF-B1-10-LS06-01 | T-B1-10-LS06-01-01 | Reparatur | repair_text | auto_core | scenario_visible | eligible_auto_after_delay |
| draft_b1_10_017 | TF-B1-10-LS04-01 | T-B1-10-LS04-01-01 | Kontrast | typed_short | auto_supported | scenario_visible | weakly_eligible_after_delay |
| draft_b1_10_018 | TF-B1-10-LS08-01 | T-B1-10-LS08-01-02 | Kontrast | typed_short | auto_supported | scenario_visible | weakly_eligible_after_delay |
| draft_b1_10_019 | TF-B1-10-LS10-01 | T-B1-10-LS10-01-01 | Produktion | self_marked | self_marked_production | scenario_visible | not_review_eligible |
| draft_b1_10_020 | TF-B1-10-LS10-01 | T-B1-10-LS10-01-02 | Produktion | self_marked | self_marked_production | scenario_visible | not_review_eligible |

## 9. Import-plan readiness

| Import area | Status | Notes |
| --- | --- | --- |
| Current app inspection | Not run | Required later before Codex. Do not assume route/content architecture. |
| Static content strategy | Ready as planning recommendation | Static records only; no runtime generation. |
| Storage/export | Preserve | No storage-key change allowed. |
| Sprint sampling | Defer implementation decision | B1-10 should not enter mixed sprints until route QA passes. |
| Codex implementation prompt | Not created | Create only after final QA, row reconciliation, schema mapping, and import plan. |

## 10. Files to save

- `ozmosis_b1_m10_technical_problems_draft_items_v0_1.md`
- `ozmosis_b1_m10_technical_problems_phase3a_qa_approved_v0_1.md`
- `ozmosis_b1_m10_technical_problems_variant_family_decision_v0_1.md`
- `ozmosis_b1_m10_technical_problems_final_inventory_v0_1.md`
- `ozmosis_b1_m10_technical_problems_schema_mapping_v0_1.md`
- `ozmosis_b1_m10_technical_problems_codex_import_plan_v0_1.md`


## 11. Stop/go verdict

`READY_FOR_MODULE_SPECIFIC_QA_AND_ROW_RECONCILIATION`

This module has a complete first staged draft path, but it should receive a module-specific QA pass before app import planning is treated as final.
