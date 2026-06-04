# Ozmosis B1-09 — Full Staged Content Pipeline Output v0.1

Module: B1-09 — Complaints / customer service  
Internal planning ID: `b1_m09_complaints_customer_service`  
Slug: `complaints-customer-service`  
Status: pipeline-generated planning output, not app-ready JSON.

## 1. Module source verification

| Source | Status | Use | Caveat |
| --- | --- | --- | --- |
| Pipeline Core | Available | Process/evidence/row rules | No item text copied. |
| Cross-Spoke Consistency Audit | Available | Accepted spoke set with caveats | Minor caveats carried into QA notes. |
| B1-09 spoke | Available | Module boundaries and target families | No source text copied. |
| v0.80.4 source brief/roadmap | Available | Static app/storage constraints | No implementation here. |
| Vocabulary/course PDFs | Available | Structural inspiration only | No copied or paraphrased item text. |

## 2. Spoke intake

| Field | Value |
| --- | --- |
| moduleId | B1-09 |
| moduleTitle | Complaints / customer service |
| internalPlanningId | b1_m09_complaints_customer_service |
| moduleSlug | complaints-customer-service |
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
| draft_b1_09_001 | notice | TF-B1-09-LS07-01 | T-B1-09-LS07-01-01 | — | Concept: A useful complaint is polite and clear: problem + consequence + requested solution. | — | — | excluded | not_review_eligible | approve_as_is | — |
| draft_b1_09_002 | notice | TF-B1-09-LS06-01 | T-B1-09-LS06-01-01 | — | Concept: `obwohl` and `trotzdem` express contrast, but the word order differs. | — | — | excluded | not_review_eligible | approve_as_is | — |
| draft_b1_09_003 | notice | TF-B1-09-LS05-01 | T-B1-09-LS05-01-01 | — | Concept: `Ich bitte um...` is a clean request frame for customer service. | — | — | excluded | not_review_eligible | approve_as_is | — |
| draft_b1_09_004 | Auswahl | TF-B1-09-LS08-01 | T-B1-09-LS08-01-01 | beschädigt / pünktlich / zuständig | Which word means damaged? | beschädigt | `beschädigt` means damaged. | auto_supported | weakly_eligible_after_delay | approve_as_is | — |
| draft_b1_09_005 | Auswahl | TF-B1-09-LS08-02 | T-B1-09-LS08-02-01 | der Ersatz / die Probezeit / der Rückruf | Which word means replacement? | der Ersatz | `Ersatz` is replacement. | auto_supported | weakly_eligible_after_delay | approve_as_is | — |
| draft_b1_09_006 | Luecke | TF-B1-09-LS07-01 | T-B1-09-LS07-01-01 | Unfortunately there is a problem. | Leider gibt es ein ___. | Problem | `Problem` is capitalised as a noun. | auto_core | eligible_auto_after_delay | approve_as_is | — |
| draft_b1_09_007 | Luecke | TF-B1-09-LS08-01 | T-B1-09-LS08-01-01 | The delivery is damaged. | Die Lieferung ist ___. | beschädigt | Use predicative adjective without endings here. | auto_core | eligible_auto_after_delay | approve_as_is | — |
| draft_b1_09_008 | Luecke | TF-B1-09-LS08-01 | T-B1-09-LS08-01-02 | One item is missing from the delivery. | In der Lieferung ___ ein Artikel. | fehlt | `fehlt` means is missing. | auto_core | eligible_auto_after_delay | approve_as_is | — |
| draft_b1_09_009 | Luecke | TF-B1-09-LS05-01 | T-B1-09-LS05-01-01 | I ask for a replacement. | Ich bitte ___ Ersatz. | um | Use `bitten um`. | auto_core | eligible_auto_after_delay | approve_as_is | — |
| draft_b1_09_010 | Luecke | TF-B1-09-LS06-01 | T-B1-09-LS06-01-01 | Although the delivery is paid for, one item is missing. | ___ die Lieferung bezahlt ist, fehlt ein Artikel. | Obwohl | `obwohl` introduces a contrast clause. | auto_core | eligible_auto_after_delay | approve_as_is | — |
| draft_b1_09_011 | Luecke | TF-B1-09-LS06-01 | T-B1-09-LS06-01-02 | The delivery is paid. Nevertheless, one item is missing. | Die Lieferung ist bezahlt. ___ fehlt ein Artikel. | Trotzdem | After `Trotzdem`, the verb comes second. | auto_core | eligible_auto_after_delay | approve_as_is | — |
| draft_b1_09_012 | Satzbau | TF-B1-09-LS07-02 | T-B1-09-LS07-02-01 | Build the polite help request. | Chunks: `Können / Sie / mir / bitte / helfen?` | Können Sie mir bitte helfen? | Formal yes/no question starts with the verb. | auto_core | eligible_auto_after_delay | approve_as_is | — |
| draft_b1_09_013 | Satzbau | TF-B1-09-LS05-01 | T-B1-09-LS05-01-01 | Build the solution request. | Chunks: `Ich / bitte / um / Ersatz.` | Ich bitte um Ersatz. | Use `um` in this fixed request frame. | auto_core | eligible_auto_after_delay | approve_as_is | — |
| draft_b1_09_014 | Reparatur | TF-B1-09-LS05-01 | T-B1-09-LS05-01-01 | Fix the request phrase. | Fix: `Ich bitte für Ersatz.` | Ich bitte um Ersatz. | Use `bitten um`. | auto_core | eligible_auto_after_delay | approve_as_is | — |
| draft_b1_09_015 | Reparatur | TF-B1-09-LS06-01 | T-B1-09-LS06-01-02 | Fix the `trotzdem` word order. | Fix: `Trotzdem ein Artikel fehlt.` | Trotzdem fehlt ein Artikel. | After `trotzdem`, the verb comes second. | auto_core | eligible_auto_after_delay | approve_as_is | — |
| draft_b1_09_016 | Reparatur | TF-B1-09-LS07-01 | T-B1-09-LS07-01-02 | Make the complaint polite and clear. | Fix the tone: `Das ist schlecht. Machen Sie das sofort!` | Leider gibt es ein Problem. Können Sie mir bitte helfen? | Polite tone is part of the target. | auto_supported | weakly_eligible_after_delay | approve_as_is | — |
| draft_b1_09_017 | Kontrast | TF-B1-09-LS06-01 | T-B1-09-LS06-01-01 | obwohl / deshalb | Choose contrast connector with verb-final clause. | obwohl | `obwohl` sends the verb to the end. | auto_supported | weakly_eligible_after_delay | approve_as_is | — |
| draft_b1_09_018 | Kontrast | TF-B1-09-LS08-02 | T-B1-09-LS08-02-02 | die Erstattung / die Besprechung | Choose money-back solution word. | die Erstattung | `Erstattung` is refund/reimbursement. | auto_supported | weakly_eligible_after_delay | approve_as_is | — |
| draft_b1_09_019 | Produktion | TF-B1-09-LS10-01 | T-B1-09-LS10-01-01 | Use `Leider...` and `bitte`. | Write/say a short polite complaint about a damaged delivery. | self-marked | Checklist: problem + polite request + no aggression. | self_marked_production | not_review_eligible | approve_as_is | — |
| draft_b1_09_020 | Produktion | TF-B1-09-LS10-01 | T-B1-09-LS10-01-02 | Use `Ersatz`. | Ask for a replacement in one short sentence. | self-marked | Checklist: request + solution word. | self_marked_production | not_review_eligible | approve_as_is | — |

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
| Variants inside families | 10 |
| Single auto-graded items retained | 5 |
| Notice cards retained separately | 3 |
| Production cards retained separately | 2 |

### Variant-family draft / QA ledger

| variantFamilyId | targetFamilyId | variantCount | familyType | decision | evidence caveat |
| --- | --- | --- | --- | --- | --- |
| b1-09-b1-09-ls08-01-vf-001 | TF-B1-09-LS08-01 | 3 | Type B | static curated variants | same-family evidence only; max one same-session evidence |
| b1-09-b1-09-ls05-01-vf-001 | TF-B1-09-LS05-01 | 3 | Type B | static curated variants | same-family evidence only; max one same-session evidence |
| b1-09-b1-09-ls06-01-vf-001 | TF-B1-09-LS06-01 | 4 | Type B | static curated variants | same-family evidence only; max one same-session evidence |

### Single-item ledger

| itemId | taskType | targetFamilyId | evidenceType | status |
| --- | --- | --- | --- | --- |
| draft_b1_09_005 | Auswahl | TF-B1-09-LS08-02 | auto_supported | kept as single item |
| draft_b1_09_018 | Kontrast | TF-B1-09-LS08-02 | auto_supported | kept as single item |
| draft_b1_09_006 | Luecke | TF-B1-09-LS07-01 | auto_core | kept as single item |
| draft_b1_09_016 | Reparatur | TF-B1-09-LS07-01 | auto_supported | kept as single item |
| draft_b1_09_012 | Satzbau | TF-B1-09-LS07-02 | auto_core | kept as single item |

## 7. Row reconciliation

| Stage | Expected | Actual / survivor | Cuts | Deferred | Human-check | Status |
| --- | --- | --- | --- | --- | --- | --- |
| Draft | 20 | 20 | 0 | 0 | 0 | OK |
| QA | 20 | 20 | 0 | 0 | 0 | OK |
| Variant-family grouping | 20 | 20 | 0 | 0 | 0 | OK |

## 8. Schema mapping readiness

| Field | Decision |
| --- | --- |
| displayModuleId | B1-09 |
| moduleKey | b1-09 |
| internalPlanningId | b1_m09_complaints_customer_service |
| moduleSlug | complaints-customer-service |
| moduleTitle | Complaints / customer service |
| supportPolicy/supportPresentation | Must be explicitly split in schema mapping; current supportPolicy is planning-only. |
| evidence labels | Mapped to auto_core / auto_supported / excluded / self_marked_production. |
| variant family readiness | Ready for schema mapping after module-specific QA review. |

### Schema-planning item summary

| itemId | targetFamilyId | targetId | taskType | answerMode planning | evidenceType | supportPolicy | reviewEligibility |
| --- | --- | --- | --- | --- | --- | --- | --- |
| draft_b1_09_001 | TF-B1-09-LS07-01 | T-B1-09-LS07-01-01 | notice | self_marked | excluded | scenario_visible | not_review_eligible |
| draft_b1_09_002 | TF-B1-09-LS06-01 | T-B1-09-LS06-01-01 | notice | self_marked | excluded | scenario_visible | not_review_eligible |
| draft_b1_09_003 | TF-B1-09-LS05-01 | T-B1-09-LS05-01-01 | notice | self_marked | excluded | scenario_visible | not_review_eligible |
| draft_b1_09_004 | TF-B1-09-LS08-01 | T-B1-09-LS08-01-01 | Auswahl | typed_short | auto_supported | scenario_visible | weakly_eligible_after_delay |
| draft_b1_09_005 | TF-B1-09-LS08-02 | T-B1-09-LS08-02-01 | Auswahl | typed_short | auto_supported | scenario_visible | weakly_eligible_after_delay |
| draft_b1_09_006 | TF-B1-09-LS07-01 | T-B1-09-LS07-01-01 | Luecke | typed_short | auto_core | scenario_visible | eligible_auto_after_delay |
| draft_b1_09_007 | TF-B1-09-LS08-01 | T-B1-09-LS08-01-01 | Luecke | typed_short | auto_core | scenario_visible | eligible_auto_after_delay |
| draft_b1_09_008 | TF-B1-09-LS08-01 | T-B1-09-LS08-01-02 | Luecke | typed_short | auto_core | scenario_visible | eligible_auto_after_delay |
| draft_b1_09_009 | TF-B1-09-LS05-01 | T-B1-09-LS05-01-01 | Luecke | typed_short | auto_core | scenario_visible | eligible_auto_after_delay |
| draft_b1_09_010 | TF-B1-09-LS06-01 | T-B1-09-LS06-01-01 | Luecke | typed_short | auto_core | scenario_visible | eligible_auto_after_delay |
| draft_b1_09_011 | TF-B1-09-LS06-01 | T-B1-09-LS06-01-02 | Luecke | typed_short | auto_core | scenario_visible | eligible_auto_after_delay |
| draft_b1_09_012 | TF-B1-09-LS07-02 | T-B1-09-LS07-02-01 | Satzbau | sentence_order | auto_core | scenario_visible | eligible_auto_after_delay |
| draft_b1_09_013 | TF-B1-09-LS05-01 | T-B1-09-LS05-01-01 | Satzbau | sentence_order | auto_core | scenario_visible | eligible_auto_after_delay |
| draft_b1_09_014 | TF-B1-09-LS05-01 | T-B1-09-LS05-01-01 | Reparatur | repair_text | auto_core | scenario_visible | eligible_auto_after_delay |
| draft_b1_09_015 | TF-B1-09-LS06-01 | T-B1-09-LS06-01-02 | Reparatur | repair_text | auto_core | scenario_visible | eligible_auto_after_delay |
| draft_b1_09_016 | TF-B1-09-LS07-01 | T-B1-09-LS07-01-02 | Reparatur | repair_text | auto_supported | scenario_visible | weakly_eligible_after_delay |
| draft_b1_09_017 | TF-B1-09-LS06-01 | T-B1-09-LS06-01-01 | Kontrast | typed_short | auto_supported | scenario_visible | weakly_eligible_after_delay |
| draft_b1_09_018 | TF-B1-09-LS08-02 | T-B1-09-LS08-02-02 | Kontrast | typed_short | auto_supported | scenario_visible | weakly_eligible_after_delay |
| draft_b1_09_019 | TF-B1-09-LS10-01 | T-B1-09-LS10-01-01 | Produktion | self_marked | self_marked_production | scenario_visible | not_review_eligible |
| draft_b1_09_020 | TF-B1-09-LS10-01 | T-B1-09-LS10-01-02 | Produktion | self_marked | self_marked_production | scenario_visible | not_review_eligible |

## 9. Import-plan readiness

| Import area | Status | Notes |
| --- | --- | --- |
| Current app inspection | Not run | Required later before Codex. Do not assume route/content architecture. |
| Static content strategy | Ready as planning recommendation | Static records only; no runtime generation. |
| Storage/export | Preserve | No storage-key change allowed. |
| Sprint sampling | Defer implementation decision | B1-09 should not enter mixed sprints until route QA passes. |
| Codex implementation prompt | Not created | Create only after final QA, row reconciliation, schema mapping, and import plan. |

## 10. Files to save

- `ozmosis_b1_m09_complaints_customer_service_draft_items_v0_1.md`
- `ozmosis_b1_m09_complaints_customer_service_phase3a_qa_approved_v0_1.md`
- `ozmosis_b1_m09_complaints_customer_service_variant_family_decision_v0_1.md`
- `ozmosis_b1_m09_complaints_customer_service_final_inventory_v0_1.md`
- `ozmosis_b1_m09_complaints_customer_service_schema_mapping_v0_1.md`
- `ozmosis_b1_m09_complaints_customer_service_codex_import_plan_v0_1.md`


## 11. Stop/go verdict

`READY_FOR_MODULE_SPECIFIC_QA_AND_ROW_RECONCILIATION`

This module has a complete first staged draft path, but it should receive a module-specific QA pass before app import planning is treated as final.
