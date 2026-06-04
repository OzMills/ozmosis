# Ozmosis B1-08 — Full Staged Content Pipeline Output v0.1

Module: B1-08 — Orders / delivery  
Internal planning ID: `b1_m08_orders_delivery`  
Slug: `orders-delivery`  
Status: pipeline-generated planning output, not app-ready JSON.

## 1. Module source verification

| Source | Status | Use | Caveat |
| --- | --- | --- | --- |
| Pipeline Core | Available | Process/evidence/row rules | No item text copied. |
| Cross-Spoke Consistency Audit | Available | Accepted spoke set with caveats | Minor caveats carried into QA notes. |
| B1-08 spoke | Available | Module boundaries and target families | No source text copied. |
| v0.80.4 source brief/roadmap | Available | Static app/storage constraints | No implementation here. |
| Vocabulary/course PDFs | Available | Structural inspiration only | No copied or paraphrased item text. |

## 2. Spoke intake

| Field | Value |
| --- | --- |
| moduleId | B1-08 |
| moduleTitle | Orders / delivery |
| internalPlanningId | b1_m08_orders_delivery |
| moduleSlug | orders-delivery |
| learner-facing status | draft content-planning output |
| boundary decision | module spoke accepted; adjacent-module drift checked in QA |

## 3. Draft batch

| Metric | Count |
| --- | --- |
| Draft items generated | 21 |
| Auswahl items | 2 |
| Kontrast items | 2 |
| Luecke items | 7 |
| Produktion items | 2 |
| Reparatur items | 3 |
| Satzbau items | 2 |
| notice items | 3 |

### Draft item ledger

| itemId | taskType | targetFamilyId | targetId | cue | prompt | answer | feedback | evidenceType | reviewEligibility | QA decision | QA issue |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| draft_b1_08_001 | notice | TF-B1-08-LS08-01 | T-B1-08-LS08-01-01 | — | Concept: Orders and delivery are action contexts. Do not turn them into an invoice/accounting lesson. | — | — | excluded | not_review_eligible | approve_as_is | — |
| draft_b1_08_002 | notice | TF-B1-08-LS06-01 | T-B1-08-LS06-01-01 | — | Concept: Sequencing connectors here stay short: before payment, after payment, when the delivery arrives. | — | — | excluded | not_review_eligible | approve_as_is | — |
| draft_b1_08_003 | notice | TF-B1-08-LS09-01 | T-B1-08-LS09-01-01 | — | Concept: Order-form fields are recognition support, not real payment-data entry. | — | — | excluded | not_review_eligible | approve_as_is | — |
| draft_b1_08_004 | Auswahl | TF-B1-08-LS08-01 | T-B1-08-LS08-01-01 | die Bestellung / die Krankmeldung / das Anschreiben | Which word is the order? | die Bestellung | `Bestellung` is the order. | auto_supported | weakly_eligible_after_delay | approve_as_is | — |
| draft_b1_08_005 | Auswahl | TF-B1-08-LS08-02 | T-B1-08-LS08-02-01 | die Rechnung / die Besprechung / der Urlaub | Which word is the invoice? | die Rechnung | `Rechnung` is the invoice/bill. | auto_supported | weakly_eligible_after_delay | approve_as_is | — |
| draft_b1_08_006 | Luecke | TF-B1-08-LS04-01 | T-B1-08-LS04-01-01 | I would like to order the item. | Ich möchte den Artikel ___. | bestellen | Use `bestellen` for ordering. | auto_core | eligible_auto_after_delay | approve_as_is | — |
| draft_b1_08_007 | Luecke | TF-B1-08-LS04-01 | T-B1-08-LS04-01-02 | The company delivers the goods tomorrow. | Die Firma ___ die Ware morgen. | liefert | Use `liefern` for delivery. | auto_core | eligible_auto_after_delay | approve_as_is | — |
| draft_b1_08_008 | Luecke | TF-B1-08-LS04-01 | T-B1-08-LS04-01-03 | I have to pay the invoice. | Ich muss die Rechnung ___. | bezahlen | Use `bezahlen` for paying. | auto_core | eligible_auto_after_delay | approve_as_is | — |
| draft_b1_08_009 | Luecke | TF-B1-08-LS03-01 | T-B1-08-LS03-01-01 | The delivery arrives by Friday. | Die Lieferung kommt ___ Freitag. | bis | Use `bis` for a deadline. | auto_core | eligible_auto_after_delay | approve_as_is | — |
| draft_b1_08_010 | Luecke | TF-B1-08-LS03-01 | T-B1-08-LS03-01-02 | The delivery arrives by Friday at the latest. | Die Lieferung kommt ___ spätestens Freitag. | spätestens | `spätestens` means at the latest. | auto_core | eligible_auto_after_delay | approve_as_is | — |
| draft_b1_08_011 | Luecke | TF-B1-08-LS06-01 | T-B1-08-LS06-01-01 | I pay before the delivery comes. | Ich bezahle, ___ die Lieferung kommt. | bevor | `bevor` = before. | auto_core | eligible_auto_after_delay | approve_as_is | — |
| draft_b1_08_012 | Luecke | TF-B1-08-LS06-01 | T-B1-08-LS06-01-02 | After I have paid, the delivery comes. | ___ ich bezahlt habe, kommt die Lieferung. | Nachdem | `Nachdem` begins an after-clause. | auto_core | eligible_auto_after_delay | approve_as_is | — |
| draft_b1_08_013 | Satzbau | TF-B1-08-LS07-01 | T-B1-08-LS07-01-01 | Ask when the delivery comes. | Chunks: `Wann / kommt / die Lieferung?` | Wann kommt die Lieferung? | W-question word order. | auto_core | eligible_auto_after_delay | approve_as_is | — |
| draft_b1_08_014 | Satzbau | TF-B1-08-LS04-01 | T-B1-08-LS04-01-03 | Build the payment sentence. | Chunks: `Ich / bezahle / die Rechnung.` | Ich bezahle die Rechnung. | Use `bezahlen` with `die Rechnung`. | auto_core | eligible_auto_after_delay | approve_as_is | — |
| draft_b1_08_015 | Reparatur | TF-B1-08-LS04-01 | T-B1-08-LS04-01-03 | Fix the action verb. | Fix: `Ich kaufe die Rechnung.` Intended meaning: pay the invoice. | Ich bezahle die Rechnung. | Use `bezahlen` for invoices. | auto_core | eligible_auto_after_delay | approve_as_is | — |
| draft_b1_08_016 | Reparatur | TF-B1-08-LS03-01 | T-B1-08-LS03-01-01 | Fix the deadline phrase. | Fix: `Die Lieferung kommt bis am Freitag.` | Die Lieferung kommt bis Freitag. | Use `bis Freitag`. | auto_core | eligible_auto_after_delay | approve_as_is | — |
| draft_b1_08_017 | Reparatur | TF-B1-08-LS06-01 | T-B1-08-LS06-01-01 | Fix the connector clause. | Fix: `Ich bezahle, bevor kommt die Lieferung.` | Ich bezahle, bevor die Lieferung kommt. | After `bevor`, the verb goes at the end. | auto_core | eligible_auto_after_delay | approve_as_is | — |
| draft_b1_08_018 | Kontrast | TF-B1-08-LS08-01 | T-B1-08-LS08-01-02 | die Lieferung / die Beschwerde | Choose delivery, not complaint. | die Lieferung | `Lieferung` is delivery. | auto_supported | weakly_eligible_after_delay | approve_as_is | — |
| draft_b1_08_019 | Kontrast | TF-B1-08-LS08-02 | T-B1-08-LS08-02-02 | der Betrag / der Vorschlag | Choose invoice amount field. | der Betrag | `Betrag` is amount. | auto_supported | weakly_eligible_after_delay | approve_as_is | — |
| draft_b1_08_020 | Produktion | TF-B1-08-LS10-01 | T-B1-08-LS10-01-01 | Use `Wann kommt...?` | Ask when the delivery will arrive. | self-marked | Checklist: delivery + question + short. | self_marked_production | not_review_eligible | approve_as_is | — |
| draft_b1_08_021 | Produktion | TF-B1-08-LS10-01 | T-B1-08-LS10-01-02 | Use `Rechnung`. | Ask for the invoice in one short sentence. | self-marked | Checklist: invoice + polite request. | self_marked_production | not_review_eligible | approve_as_is | — |

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
| Draft items audited | 21 |
| Approved as-is | 21 |
| Revised and approved | 0 |
| Cut | 0 |
| Deferred | 0 |
| Human/tutor check | 0 |
| Clean proceeding items | 21 |

QA note: this automated staged run keeps the first batch conservative. A later module-specific QA pass may still cut or revise individual items before import.


## 6. Variant-family decision

| Metric | Count |
| --- | --- |
| Variant families created | 3 |
| Variants inside families | 11 |
| Single auto-graded items retained | 5 |
| Notice cards retained separately | 3 |
| Production cards retained separately | 2 |

### Variant-family draft / QA ledger

| variantFamilyId | targetFamilyId | variantCount | familyType | decision | evidence caveat |
| --- | --- | --- | --- | --- | --- |
| b1-08-b1-08-ls04-01-vf-001 | TF-B1-08-LS04-01 | 5 | Type B | static curated variants | same-family evidence only; max one same-session evidence |
| b1-08-b1-08-ls03-01-vf-001 | TF-B1-08-LS03-01 | 3 | Type B | static curated variants | same-family evidence only; max one same-session evidence |
| b1-08-b1-08-ls06-01-vf-001 | TF-B1-08-LS06-01 | 3 | Type B | static curated variants | same-family evidence only; max one same-session evidence |

### Single-item ledger

| itemId | taskType | targetFamilyId | evidenceType | status |
| --- | --- | --- | --- | --- |
| draft_b1_08_004 | Auswahl | TF-B1-08-LS08-01 | auto_supported | kept as single item |
| draft_b1_08_018 | Kontrast | TF-B1-08-LS08-01 | auto_supported | kept as single item |
| draft_b1_08_005 | Auswahl | TF-B1-08-LS08-02 | auto_supported | kept as single item |
| draft_b1_08_019 | Kontrast | TF-B1-08-LS08-02 | auto_supported | kept as single item |
| draft_b1_08_013 | Satzbau | TF-B1-08-LS07-01 | auto_core | kept as single item |

## 7. Row reconciliation

| Stage | Expected | Actual / survivor | Cuts | Deferred | Human-check | Status |
| --- | --- | --- | --- | --- | --- | --- |
| Draft | 21 | 21 | 0 | 0 | 0 | OK |
| QA | 21 | 21 | 0 | 0 | 0 | OK |
| Variant-family grouping | 21 | 21 | 0 | 0 | 0 | OK |

## 8. Schema mapping readiness

| Field | Decision |
| --- | --- |
| displayModuleId | B1-08 |
| moduleKey | b1-08 |
| internalPlanningId | b1_m08_orders_delivery |
| moduleSlug | orders-delivery |
| moduleTitle | Orders / delivery |
| supportPolicy/supportPresentation | Must be explicitly split in schema mapping; current supportPolicy is planning-only. |
| evidence labels | Mapped to auto_core / auto_supported / excluded / self_marked_production. |
| variant family readiness | Ready for schema mapping after module-specific QA review. |

### Schema-planning item summary

| itemId | targetFamilyId | targetId | taskType | answerMode planning | evidenceType | supportPolicy | reviewEligibility |
| --- | --- | --- | --- | --- | --- | --- | --- |
| draft_b1_08_001 | TF-B1-08-LS08-01 | T-B1-08-LS08-01-01 | notice | self_marked | excluded | scenario_visible | not_review_eligible |
| draft_b1_08_002 | TF-B1-08-LS06-01 | T-B1-08-LS06-01-01 | notice | self_marked | excluded | scenario_visible | not_review_eligible |
| draft_b1_08_003 | TF-B1-08-LS09-01 | T-B1-08-LS09-01-01 | notice | self_marked | excluded | scenario_visible | not_review_eligible |
| draft_b1_08_004 | TF-B1-08-LS08-01 | T-B1-08-LS08-01-01 | Auswahl | typed_short | auto_supported | scenario_visible | weakly_eligible_after_delay |
| draft_b1_08_005 | TF-B1-08-LS08-02 | T-B1-08-LS08-02-01 | Auswahl | typed_short | auto_supported | scenario_visible | weakly_eligible_after_delay |
| draft_b1_08_006 | TF-B1-08-LS04-01 | T-B1-08-LS04-01-01 | Luecke | typed_short | auto_core | scenario_visible | eligible_auto_after_delay |
| draft_b1_08_007 | TF-B1-08-LS04-01 | T-B1-08-LS04-01-02 | Luecke | typed_short | auto_core | scenario_visible | eligible_auto_after_delay |
| draft_b1_08_008 | TF-B1-08-LS04-01 | T-B1-08-LS04-01-03 | Luecke | typed_short | auto_core | scenario_visible | eligible_auto_after_delay |
| draft_b1_08_009 | TF-B1-08-LS03-01 | T-B1-08-LS03-01-01 | Luecke | typed_short | auto_core | scenario_visible | eligible_auto_after_delay |
| draft_b1_08_010 | TF-B1-08-LS03-01 | T-B1-08-LS03-01-02 | Luecke | typed_short | auto_core | scenario_visible | eligible_auto_after_delay |
| draft_b1_08_011 | TF-B1-08-LS06-01 | T-B1-08-LS06-01-01 | Luecke | typed_short | auto_core | scenario_visible | eligible_auto_after_delay |
| draft_b1_08_012 | TF-B1-08-LS06-01 | T-B1-08-LS06-01-02 | Luecke | typed_short | auto_core | scenario_visible | eligible_auto_after_delay |
| draft_b1_08_013 | TF-B1-08-LS07-01 | T-B1-08-LS07-01-01 | Satzbau | sentence_order | auto_core | scenario_visible | eligible_auto_after_delay |
| draft_b1_08_014 | TF-B1-08-LS04-01 | T-B1-08-LS04-01-03 | Satzbau | sentence_order | auto_core | scenario_visible | eligible_auto_after_delay |
| draft_b1_08_015 | TF-B1-08-LS04-01 | T-B1-08-LS04-01-03 | Reparatur | repair_text | auto_core | scenario_visible | eligible_auto_after_delay |
| draft_b1_08_016 | TF-B1-08-LS03-01 | T-B1-08-LS03-01-01 | Reparatur | repair_text | auto_core | scenario_visible | eligible_auto_after_delay |
| draft_b1_08_017 | TF-B1-08-LS06-01 | T-B1-08-LS06-01-01 | Reparatur | repair_text | auto_core | scenario_visible | eligible_auto_after_delay |
| draft_b1_08_018 | TF-B1-08-LS08-01 | T-B1-08-LS08-01-02 | Kontrast | typed_short | auto_supported | scenario_visible | weakly_eligible_after_delay |
| draft_b1_08_019 | TF-B1-08-LS08-02 | T-B1-08-LS08-02-02 | Kontrast | typed_short | auto_supported | scenario_visible | weakly_eligible_after_delay |
| draft_b1_08_020 | TF-B1-08-LS10-01 | T-B1-08-LS10-01-01 | Produktion | self_marked | self_marked_production | scenario_visible | not_review_eligible |
| draft_b1_08_021 | TF-B1-08-LS10-01 | T-B1-08-LS10-01-02 | Produktion | self_marked | self_marked_production | scenario_visible | not_review_eligible |

## 9. Import-plan readiness

| Import area | Status | Notes |
| --- | --- | --- |
| Current app inspection | Not run | Required later before Codex. Do not assume route/content architecture. |
| Static content strategy | Ready as planning recommendation | Static records only; no runtime generation. |
| Storage/export | Preserve | No storage-key change allowed. |
| Sprint sampling | Defer implementation decision | B1-08 should not enter mixed sprints until route QA passes. |
| Codex implementation prompt | Not created | Create only after final QA, row reconciliation, schema mapping, and import plan. |

## 10. Files to save

- `ozmosis_b1_m08_orders_delivery_draft_items_v0_1.md`
- `ozmosis_b1_m08_orders_delivery_phase3a_qa_approved_v0_1.md`
- `ozmosis_b1_m08_orders_delivery_variant_family_decision_v0_1.md`
- `ozmosis_b1_m08_orders_delivery_final_inventory_v0_1.md`
- `ozmosis_b1_m08_orders_delivery_schema_mapping_v0_1.md`
- `ozmosis_b1_m08_orders_delivery_codex_import_plan_v0_1.md`


## 11. Stop/go verdict

`READY_FOR_MODULE_SPECIFIC_QA_AND_ROW_RECONCILIATION`

This module has a complete first staged draft path, but it should receive a module-specific QA pass before app import planning is treated as final.
