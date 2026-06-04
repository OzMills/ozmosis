# Ozmosis B1-06 — Module-Specific QA / Reject / Revise v0.1

Module: B1-06 — Sick leave  
Internal planning ID: `b1_m06_sick_leave`  
Status: QA-approved planning output. No app code, app-ready JSON, copied source text, or readiness claim.

## 1. Source Verification

| Source | Available? | Used for | Reliability | Notes |
| --- | --- | --- | --- | --- |
| ozmosis_b1_m06_sick_leave_full_staged_pipeline_output_v0_1.md | Yes | Controlling staged draft batch | High | 20 rows parsed from staged output. |
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
| draft_b1_06_001 | notice | excluded | not_review_eligible |
| draft_b1_06_002 | notice | excluded | not_review_eligible |
| draft_b1_06_003 | notice | excluded | not_review_eligible |
| draft_b1_06_004 | Auswahl | auto_supported | weakly_eligible_after_delay |
| draft_b1_06_005 | Auswahl | auto_supported | weakly_eligible_after_delay |
| draft_b1_06_006 | Luecke | auto_core | eligible_auto_after_delay |
| draft_b1_06_007 | Luecke | auto_core | eligible_auto_after_delay |
| draft_b1_06_008 | Luecke | auto_core | eligible_auto_after_delay |
| draft_b1_06_009 | Luecke | auto_core | eligible_auto_after_delay |
| draft_b1_06_010 | Luecke | auto_core | eligible_auto_after_delay |
| draft_b1_06_011 | Luecke | auto_core | eligible_auto_after_delay |
| draft_b1_06_012 | Satzbau | auto_core | eligible_auto_after_delay |
| draft_b1_06_013 | Satzbau | auto_core | eligible_auto_after_delay |
| draft_b1_06_014 | Reparatur | auto_core | eligible_auto_after_delay |
| draft_b1_06_015 | Reparatur | auto_core | eligible_auto_after_delay |
| draft_b1_06_016 | Reparatur | auto_supported | weakly_eligible_after_delay |
| draft_b1_06_017 | Kontrast | auto_supported | weakly_eligible_after_delay |
| draft_b1_06_018 | Kontrast | auto_supported | weakly_eligible_after_delay |
| draft_b1_06_019 | Produktion | self_marked_production | not_review_eligible |
| draft_b1_06_020 | Produktion | self_marked_production | not_review_eligible |

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

`READY_FOR_B1_06_ROW_RECONCILIATION`

Exact next recommended action: run row reconciliation / final inventory for B1-06.
