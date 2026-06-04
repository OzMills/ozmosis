# Ozmosis B1-09 — Module-Specific QA / Reject / Revise v0.1

Module: B1-09 — Complaints / customer service  
Internal planning ID: `b1_m09_complaints_customer_service`  
Status: QA-approved planning output. No app code, app-ready JSON, copied source text, or readiness claim.

## 1. Source Verification

| Source | Available? | Used for | Reliability | Notes |
| --- | --- | --- | --- | --- |
| ozmosis_b1_m09_complaints_customer_service_full_staged_pipeline_output_v0_1.md | Yes | Controlling staged draft batch | High | 20 rows parsed from staged output. |
| Prompt Queue workbook | Yes | Execution order | High | Step executed from Run=YES queue. |
| Pipeline core / cross-spoke audit | Yes | QA rules and caveats | High | Production self-marked, no source copying, no row loss. |

## 2. Intake Count Check

| Metric | Count |
| --- | --- |
| Draft items found | 20 |
| Auswahl items | 2 |
| Kontrast items | 2 |
| Luecke items | 6 |
| Produktion items | 2 |
| Reparatur items | 3 |
| Satzbau items | 2 |
| notice items | 3 |

## 3. Batch-Level QA Summary

| Metric | Count |
| --- | --- |
| Draft items audited | 20 |
| Approved as-is | 20 |
| Revised and approved | 0 |
| Cut | 0 |
| Deferred | 0 |
| Needs human/tutor check | 0 |
| Clean proceeding items | 20 |

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
| auto_core | 10 | eligible after delay if stable |
| auto_supported | 5 | weak/conservative after delay |
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
| draft_b1_09_001 | notice | excluded | not_review_eligible |
| draft_b1_09_002 | notice | excluded | not_review_eligible |
| draft_b1_09_003 | notice | excluded | not_review_eligible |
| draft_b1_09_004 | Auswahl | auto_supported | weakly_eligible_after_delay |
| draft_b1_09_005 | Auswahl | auto_supported | weakly_eligible_after_delay |
| draft_b1_09_006 | Luecke | auto_core | eligible_auto_after_delay |
| draft_b1_09_007 | Luecke | auto_core | eligible_auto_after_delay |
| draft_b1_09_008 | Luecke | auto_core | eligible_auto_after_delay |
| draft_b1_09_009 | Luecke | auto_core | eligible_auto_after_delay |
| draft_b1_09_010 | Luecke | auto_core | eligible_auto_after_delay |
| draft_b1_09_011 | Luecke | auto_core | eligible_auto_after_delay |
| draft_b1_09_012 | Satzbau | auto_core | eligible_auto_after_delay |
| draft_b1_09_013 | Satzbau | auto_core | eligible_auto_after_delay |
| draft_b1_09_014 | Reparatur | auto_core | eligible_auto_after_delay |
| draft_b1_09_015 | Reparatur | auto_core | eligible_auto_after_delay |
| draft_b1_09_016 | Reparatur | auto_supported | weakly_eligible_after_delay |
| draft_b1_09_017 | Kontrast | auto_supported | weakly_eligible_after_delay |
| draft_b1_09_018 | Kontrast | auto_supported | weakly_eligible_after_delay |
| draft_b1_09_019 | Produktion | self_marked_production | not_review_eligible |
| draft_b1_09_020 | Produktion | self_marked_production | not_review_eligible |

## 13. Row-Reconciliation Handoff Counts
| Input count | Approved/revised | Cuts | Deferred | Human-check | Proceeding |
| --- | --- | --- | --- | --- | --- |
| 20 | 20 | 0 | 0 | 0 | 20 |

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

`READY_FOR_B1_09_ROW_RECONCILIATION`

Exact next recommended action: run row reconciliation / final inventory for B1-09.
