# Ozmosis B1-08 — Module-Specific QA / Reject / Revise v0.1

Module: B1-08 — Orders / delivery  
Internal planning ID: `b1_m08_orders_delivery`  
Status: QA-approved planning output. No app code, app-ready JSON, copied source text, or readiness claim.

## 1. Source Verification

| Source | Available? | Used for | Reliability | Notes |
| --- | --- | --- | --- | --- |
| ozmosis_b1_m08_orders_delivery_full_staged_pipeline_output_v0_1.md | Yes | Controlling staged draft batch | High | 21 rows parsed from staged output. |
| Prompt Queue workbook | Yes | Execution order | High | Step executed from Run=YES queue. |
| Pipeline core / cross-spoke audit | Yes | QA rules and caveats | High | Production self-marked, no source copying, no row loss. |

## 2. Intake Count Check

| Metric | Count |
| --- | --- |
| Draft items found | 21 |
| Auswahl items | 2 |
| Kontrast items | 2 |
| Luecke items | 7 |
| Produktion items | 2 |
| Reparatur items | 3 |
| Satzbau items | 2 |
| notice items | 3 |

## 3. Batch-Level QA Summary

| Metric | Count |
| --- | --- |
| Draft items audited | 21 |
| Approved as-is | 21 |
| Revised and approved | 0 |
| Cut | 0 |
| Deferred | 0 |
| Needs human/tutor check | 0 |
| Clean proceeding items | 21 |

## 4. Issue Summary

| Issue | Severity | Affected items | Decision | Required safeguard |
| --- | --- | --- | --- | --- |
| Source safety | none | all rows | approve | Original micro-scenarios only; no copied source text identified. |
| Production correctness risk | moderate | Produktion rows | approve with safeguard | Keep as self_marked_production only. |
| Recognition/support weakness | minor | Auswahl/support-visible rows | approve with evidence caveat | Keep as auto_supported or weak review unless fixed and low support. |
| Future import naturalness QA | minor | all rows | document caveat | A later narrow module import prompt may still run visual/native-style checks. |

## 5. Item-by-Item QA Table

| Item ID | Task type | targetFamilyId | targetId | Cue | Prompt | Answer | Feedback | EvidenceType | Review eligibility | Decision | Problems found |
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

## 6. Revised Approved Item Ledger
No rows required text revision in this automated queue pass.


## 7. Cut / Deferred / Human-Check Ledger
| Status | Count | Rows |
| --- | --- | --- |
| cut | 0 | — |
| deferred | 0 | — |
| needs_human_tutor_check | 0 | — |

## 8. Evidence and Review Safety Ledger
| Evidence type | Count | Review implication |
| --- | --- | --- |
| auto_core | 12 | eligible after delay if stable |
| auto_supported | 4 | weak/conservative after delay |
| excluded | 3 | not review-eligible |
| self_marked_production | 2 | not review-eligible |

## 9. SupportPolicy / SupportPresentation Notes
Schema mapping must separate supportPolicy from learner-facing supportPresentation. Visible English support weakens evidence.


## 10. Cue / Translation Safety Check
| Check | Result |
| --- | --- |
| Ich/you mismatch | None detected in staged ledger. |
| Instruction prompts | Repair/Umformen/Produktion cues treated as instructions. |
| German LTR | Preserve in import. |

## 11. Mobile UX Check
Prompts are short enough for first-batch mobile QA. Longer production stays self-marked.


## 12. Final Clean QA Inventory
| Clean item ID | Task type | EvidenceType | Review eligibility |
| --- | --- | --- | --- |
| draft_b1_08_001 | notice | excluded | not_review_eligible |
| draft_b1_08_002 | notice | excluded | not_review_eligible |
| draft_b1_08_003 | notice | excluded | not_review_eligible |
| draft_b1_08_004 | Auswahl | auto_supported | weakly_eligible_after_delay |
| draft_b1_08_005 | Auswahl | auto_supported | weakly_eligible_after_delay |
| draft_b1_08_006 | Luecke | auto_core | eligible_auto_after_delay |
| draft_b1_08_007 | Luecke | auto_core | eligible_auto_after_delay |
| draft_b1_08_008 | Luecke | auto_core | eligible_auto_after_delay |
| draft_b1_08_009 | Luecke | auto_core | eligible_auto_after_delay |
| draft_b1_08_010 | Luecke | auto_core | eligible_auto_after_delay |
| draft_b1_08_011 | Luecke | auto_core | eligible_auto_after_delay |
| draft_b1_08_012 | Luecke | auto_core | eligible_auto_after_delay |
| draft_b1_08_013 | Satzbau | auto_core | eligible_auto_after_delay |
| draft_b1_08_014 | Satzbau | auto_core | eligible_auto_after_delay |
| draft_b1_08_015 | Reparatur | auto_core | eligible_auto_after_delay |
| draft_b1_08_016 | Reparatur | auto_core | eligible_auto_after_delay |
| draft_b1_08_017 | Reparatur | auto_core | eligible_auto_after_delay |
| draft_b1_08_018 | Kontrast | auto_supported | weakly_eligible_after_delay |
| draft_b1_08_019 | Kontrast | auto_supported | weakly_eligible_after_delay |
| draft_b1_08_020 | Produktion | self_marked_production | not_review_eligible |
| draft_b1_08_021 | Produktion | self_marked_production | not_review_eligible |

## 13. Row-Reconciliation Handoff Counts
| Input count | Approved/revised | Cuts | Deferred | Human-check | Proceeding |
| --- | --- | --- | --- | --- | --- |
| 21 | 21 | 0 | 0 | 0 | 21 |

## 14. Final QA Checklist
| Check | Status |
| --- | --- |
| source verified | Pass |
| all rows audited | Pass |
| no row loss | Pass |
| no app code | Pass |
| no app-ready JSON | Pass |
| production self-marked only | Pass |
| ready for row reconciliation | Pass |

## 15. Final Verdict

`READY_FOR_B1_08_ROW_RECONCILIATION`

Exact next recommended action: run row reconciliation / final inventory for B1-08.
