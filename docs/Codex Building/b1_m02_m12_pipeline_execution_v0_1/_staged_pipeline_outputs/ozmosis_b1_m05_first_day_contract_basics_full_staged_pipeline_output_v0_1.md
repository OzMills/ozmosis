# Ozmosis B1-05 — Full Staged Content Pipeline Output v0.1

Module: B1-05 — First day / contract basics  
Internal planning ID: `b1_m05_first_day_contract_basics`  
Slug: `first-day-contract-basics`  
Status: pipeline-generated planning output, not app-ready JSON.

## 1. Module source verification

| Source | Status | Use | Caveat |
| --- | --- | --- | --- |
| Pipeline Core | Available | Process/evidence/row rules | No item text copied. |
| Cross-Spoke Consistency Audit | Available | Accepted spoke set with caveats | Minor caveats carried into QA notes. |
| B1-05 spoke | Available | Module boundaries and target families | No source text copied. |
| v0.80.4 source brief/roadmap | Available | Static app/storage constraints | No implementation here. |
| Vocabulary/course PDFs | Available | Structural inspiration only | No copied or paraphrased item text. |

## 2. Spoke intake

| Field | Value |
| --- | --- |
| moduleId | B1-05 |
| moduleTitle | First day / contract basics |
| internalPlanningId | b1_m05_first_day_contract_basics |
| moduleSlug | first-day-contract-basics |
| learner-facing status | draft content-planning output |
| boundary decision | module spoke accepted; adjacent-module drift checked in QA |

## 3. Draft batch

| Metric | Count |
| --- | --- |
| Draft items generated | 20 |
| Auswahl items | 2 |
| Kontrast items | 3 |
| Luecke items | 5 |
| Produktion items | 2 |
| Reparatur items | 3 |
| Satzbau items | 2 |
| notice items | 3 |

### Draft item ledger

| itemId | taskType | targetFamilyId | targetId | cue | prompt | answer | feedback | evidenceType | reviewEligibility | QA decision | QA issue |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| draft_b1_05_001 | notice | TF-B1-05-LS08-01 | T-B1-05-LS08-01-01 | — | Concept: Contract words are survival vocabulary here, not legal advice. | — | — | excluded | not_review_eligible | approve_as_is | — |
| draft_b1_05_002 | notice | TF-B1-05-LS03-01 | T-B1-05-LS03-01-01 | — | Concept: Workplace `wo/wohin` phrases are controlled first-day orientation, not a full case table. | — | — | excluded | not_review_eligible | approve_as_is | — |
| draft_b1_05_003 | notice | TF-B1-05-LS04-01 | T-B1-05-LS04-01-01 | — | Concept: `muss`, `soll`, and `darf` express simple first-day obligations and permissions. | — | — | excluded | not_review_eligible | approve_as_is | — |
| draft_b1_05_004 | Auswahl | TF-B1-05-LS08-01 | T-B1-05-LS08-01-01 | der Arbeitsvertrag / die Lieferung / der Rückruf | Which word is the work contract? | der Arbeitsvertrag | `Arbeitsvertrag` is the employment contract. | auto_supported | weakly_eligible_after_delay | approve_as_is | — |
| draft_b1_05_005 | Auswahl | TF-B1-05-LS08-01 | T-B1-05-LS08-01-02 | die Probezeit / die Sprechzeit / die Rechnung | Which word means probationary period? | die Probezeit | `Probezeit` is a contract/onboarding term. | auto_supported | weakly_eligible_after_delay | approve_as_is | — |
| draft_b1_05_006 | Luecke | TF-B1-05-LS04-01 | T-B1-05-LS04-01-01 | I have to sign the contract. | Ich ___ den Vertrag unterschreiben. | muss | Use `muss` for obligation. | auto_core | eligible_auto_after_delay | approve_as_is | — |
| draft_b1_05_007 | Luecke | TF-B1-05-LS08-02 | T-B1-05-LS08-02-01 | I have to bring the documents. | Ich muss die Unterlagen ___. | mitbringen | Use `mitbringen` for bring along. | auto_core | eligible_auto_after_delay | approve_as_is | — |
| draft_b1_05_008 | Luecke | TF-B1-05-LS08-02 | T-B1-05-LS08-02-02 | I have to sign the contract. | Ich muss den Vertrag ___. | unterschreiben | Use `unterschreiben` for sign. | auto_core | eligible_auto_after_delay | approve_as_is | — |
| draft_b1_05_009 | Luecke | TF-B1-05-LS03-01 | T-B1-05-LS03-01-01 | I am in the HR/personnel office. | Ich bin ___ Personalbüro. | im | Use `im` for location in this fixed phrase. | auto_core | eligible_auto_after_delay | approve_as_is | — |
| draft_b1_05_010 | Luecke | TF-B1-05-LS03-01 | T-B1-05-LS03-01-02 | I am going to the HR/personnel office. | Ich gehe ___ Personalbüro. | ins | Use `ins` for movement into. | auto_core | eligible_auto_after_delay | approve_as_is | — |
| draft_b1_05_011 | Satzbau | TF-B1-05-LS07-01 | T-B1-05-LS07-01-01 | Ask where the HR/personnel office is. | Chunks: `Wo / ist / das Personalbüro?` | Wo ist das Personalbüro? | W-question order: question word + verb. | auto_core | eligible_auto_after_delay | approve_as_is | — |
| draft_b1_05_012 | Satzbau | TF-B1-05-LS04-01 | T-B1-05-LS04-01-02 | Ask permission. | Chunks: `Darf / ich / hier / warten?` | Darf ich hier warten? | Yes/no question starts with modal. | auto_core | eligible_auto_after_delay | approve_as_is | — |
| draft_b1_05_013 | Reparatur | TF-B1-05-LS04-01 | T-B1-05-LS04-01-01 | Fix the modal. | Fix: `Ich müssen den Vertrag unterschreiben.` | Ich muss den Vertrag unterschreiben. | `Ich` uses `muss`. | auto_core | eligible_auto_after_delay | approve_as_is | — |
| draft_b1_05_014 | Reparatur | TF-B1-05-LS03-01 | T-B1-05-LS03-01-02 | Fix movement phrase. | Fix: `Ich gehe im Personalbüro.` Intended meaning: I go to the personnel office. | Ich gehe ins Personalbüro. | Use `ins` for movement into. | auto_core | eligible_auto_after_delay | approve_as_is | — |
| draft_b1_05_015 | Reparatur | TF-B1-05-LS08-02 | T-B1-05-LS08-02-02 | Fix the verb. | Fix: `Ich schreibe den Vertrag unter.` | Ich unterschreibe den Vertrag. | Use `unterschreiben` here. | auto_core | eligible_auto_after_delay | approve_as_is | — |
| draft_b1_05_016 | Kontrast | TF-B1-05-LS03-01 | T-B1-05-LS03-01-01 | im / ins | Choose location: `Ich bin ___ Büro.` | im | Static location uses `im`. | auto_supported | weakly_eligible_after_delay | approve_as_is | — |
| draft_b1_05_017 | Kontrast | TF-B1-05-LS03-01 | T-B1-05-LS03-01-02 | im / ins | Choose direction: `Ich gehe ___ Büro.` | ins | Movement/destination uses `ins`. | auto_supported | weakly_eligible_after_delay | approve_as_is | — |
| draft_b1_05_018 | Kontrast | TF-B1-05-LS08-01 | T-B1-05-LS08-01-02 | die Probezeit / der Papierstau | Choose contract-basics word. | die Probezeit | `Probezeit` belongs to contract/onboarding context. | auto_supported | weakly_eligible_after_delay | approve_as_is | — |
| draft_b1_05_019 | Produktion | TF-B1-05-LS10-01 | T-B1-05-LS10-01-01 | Use `Wo...?` | Ask one short first-day question about where to go. | self-marked | Checklist: where + workplace place. | self_marked_production | not_review_eligible | approve_as_is | — |
| draft_b1_05_020 | Produktion | TF-B1-05-LS10-01 | T-B1-05-LS10-01-02 | Use `Ich muss... mitbringen.` | Say one document you must bring. | self-marked | Checklist: document + obligation. | self_marked_production | not_review_eligible | approve_as_is | — |

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
| Variant families created | 4 |
| Variants inside families | 14 |
| Single auto-graded items retained | 1 |
| Notice cards retained separately | 3 |
| Production cards retained separately | 2 |

### Variant-family draft / QA ledger

| variantFamilyId | targetFamilyId | variantCount | familyType | decision | evidence caveat |
| --- | --- | --- | --- | --- | --- |
| b1-05-b1-05-ls08-01-vf-001 | TF-B1-05-LS08-01 | 3 | Type B | static curated variants | same-family evidence only; max one same-session evidence |
| b1-05-b1-05-ls04-01-vf-001 | TF-B1-05-LS04-01 | 3 | Type B | static curated variants | same-family evidence only; max one same-session evidence |
| b1-05-b1-05-ls08-02-vf-001 | TF-B1-05-LS08-02 | 3 | Type B | static curated variants | same-family evidence only; max one same-session evidence |
| b1-05-b1-05-ls03-01-vf-001 | TF-B1-05-LS03-01 | 5 | Type B | static curated variants | same-family evidence only; max one same-session evidence |

### Single-item ledger

| itemId | taskType | targetFamilyId | evidenceType | status |
| --- | --- | --- | --- | --- |
| draft_b1_05_011 | Satzbau | TF-B1-05-LS07-01 | auto_core | kept as single item |

## 7. Row reconciliation

| Stage | Expected | Actual / survivor | Cuts | Deferred | Human-check | Status |
| --- | --- | --- | --- | --- | --- | --- |
| Draft | 20 | 20 | 0 | 0 | 0 | OK |
| QA | 20 | 20 | 0 | 0 | 0 | OK |
| Variant-family grouping | 20 | 20 | 0 | 0 | 0 | OK |

## 8. Schema mapping readiness

| Field | Decision |
| --- | --- |
| displayModuleId | B1-05 |
| moduleKey | b1-05 |
| internalPlanningId | b1_m05_first_day_contract_basics |
| moduleSlug | first-day-contract-basics |
| moduleTitle | First day / contract basics |
| supportPolicy/supportPresentation | Must be explicitly split in schema mapping; current supportPolicy is planning-only. |
| evidence labels | Mapped to auto_core / auto_supported / excluded / self_marked_production. |
| variant family readiness | Ready for schema mapping after module-specific QA review. |

### Schema-planning item summary

| itemId | targetFamilyId | targetId | taskType | answerMode planning | evidenceType | supportPolicy | reviewEligibility |
| --- | --- | --- | --- | --- | --- | --- | --- |
| draft_b1_05_001 | TF-B1-05-LS08-01 | T-B1-05-LS08-01-01 | notice | self_marked | excluded | scenario_visible | not_review_eligible |
| draft_b1_05_002 | TF-B1-05-LS03-01 | T-B1-05-LS03-01-01 | notice | self_marked | excluded | scenario_visible | not_review_eligible |
| draft_b1_05_003 | TF-B1-05-LS04-01 | T-B1-05-LS04-01-01 | notice | self_marked | excluded | scenario_visible | not_review_eligible |
| draft_b1_05_004 | TF-B1-05-LS08-01 | T-B1-05-LS08-01-01 | Auswahl | typed_short | auto_supported | scenario_visible | weakly_eligible_after_delay |
| draft_b1_05_005 | TF-B1-05-LS08-01 | T-B1-05-LS08-01-02 | Auswahl | typed_short | auto_supported | scenario_visible | weakly_eligible_after_delay |
| draft_b1_05_006 | TF-B1-05-LS04-01 | T-B1-05-LS04-01-01 | Luecke | typed_short | auto_core | scenario_visible | eligible_auto_after_delay |
| draft_b1_05_007 | TF-B1-05-LS08-02 | T-B1-05-LS08-02-01 | Luecke | typed_short | auto_core | scenario_visible | eligible_auto_after_delay |
| draft_b1_05_008 | TF-B1-05-LS08-02 | T-B1-05-LS08-02-02 | Luecke | typed_short | auto_core | scenario_visible | eligible_auto_after_delay |
| draft_b1_05_009 | TF-B1-05-LS03-01 | T-B1-05-LS03-01-01 | Luecke | typed_short | auto_core | scenario_visible | eligible_auto_after_delay |
| draft_b1_05_010 | TF-B1-05-LS03-01 | T-B1-05-LS03-01-02 | Luecke | typed_short | auto_core | scenario_visible | eligible_auto_after_delay |
| draft_b1_05_011 | TF-B1-05-LS07-01 | T-B1-05-LS07-01-01 | Satzbau | sentence_order | auto_core | scenario_visible | eligible_auto_after_delay |
| draft_b1_05_012 | TF-B1-05-LS04-01 | T-B1-05-LS04-01-02 | Satzbau | sentence_order | auto_core | scenario_visible | eligible_auto_after_delay |
| draft_b1_05_013 | TF-B1-05-LS04-01 | T-B1-05-LS04-01-01 | Reparatur | repair_text | auto_core | scenario_visible | eligible_auto_after_delay |
| draft_b1_05_014 | TF-B1-05-LS03-01 | T-B1-05-LS03-01-02 | Reparatur | repair_text | auto_core | scenario_visible | eligible_auto_after_delay |
| draft_b1_05_015 | TF-B1-05-LS08-02 | T-B1-05-LS08-02-02 | Reparatur | repair_text | auto_core | scenario_visible | eligible_auto_after_delay |
| draft_b1_05_016 | TF-B1-05-LS03-01 | T-B1-05-LS03-01-01 | Kontrast | typed_short | auto_supported | scenario_visible | weakly_eligible_after_delay |
| draft_b1_05_017 | TF-B1-05-LS03-01 | T-B1-05-LS03-01-02 | Kontrast | typed_short | auto_supported | scenario_visible | weakly_eligible_after_delay |
| draft_b1_05_018 | TF-B1-05-LS08-01 | T-B1-05-LS08-01-02 | Kontrast | typed_short | auto_supported | scenario_visible | weakly_eligible_after_delay |
| draft_b1_05_019 | TF-B1-05-LS10-01 | T-B1-05-LS10-01-01 | Produktion | self_marked | self_marked_production | scenario_visible | not_review_eligible |
| draft_b1_05_020 | TF-B1-05-LS10-01 | T-B1-05-LS10-01-02 | Produktion | self_marked | self_marked_production | scenario_visible | not_review_eligible |

## 9. Import-plan readiness

| Import area | Status | Notes |
| --- | --- | --- |
| Current app inspection | Not run | Required later before Codex. Do not assume route/content architecture. |
| Static content strategy | Ready as planning recommendation | Static records only; no runtime generation. |
| Storage/export | Preserve | No storage-key change allowed. |
| Sprint sampling | Defer implementation decision | B1-05 should not enter mixed sprints until route QA passes. |
| Codex implementation prompt | Not created | Create only after final QA, row reconciliation, schema mapping, and import plan. |

## 10. Files to save

- `ozmosis_b1_m05_first_day_contract_basics_draft_items_v0_1.md`
- `ozmosis_b1_m05_first_day_contract_basics_phase3a_qa_approved_v0_1.md`
- `ozmosis_b1_m05_first_day_contract_basics_variant_family_decision_v0_1.md`
- `ozmosis_b1_m05_first_day_contract_basics_final_inventory_v0_1.md`
- `ozmosis_b1_m05_first_day_contract_basics_schema_mapping_v0_1.md`
- `ozmosis_b1_m05_first_day_contract_basics_codex_import_plan_v0_1.md`


## 11. Stop/go verdict

`READY_FOR_MODULE_SPECIFIC_QA_AND_ROW_RECONCILIATION`

This module has a complete first staged draft path, but it should receive a module-specific QA pass before app import planning is treated as final.
