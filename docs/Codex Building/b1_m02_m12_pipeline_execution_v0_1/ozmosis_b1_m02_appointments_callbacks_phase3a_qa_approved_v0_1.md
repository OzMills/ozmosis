# Ozmosis B1-02 — Module-Specific QA / Reject / Revise v0.1

Module: B1-02 — Appointments / callbacks  
Internal planning ID: `b1_m02_appointments_callbacks`  
Status: QA-approved planning output. No app code, app-ready JSON, copied source text, or readiness claim.

## 1. Source Verification

| Source | Available? | Used for | Reliability | Notes |
| --- | --- | --- | --- | --- |
| ozmosis_b1_m02_appointments_callbacks_full_staged_pipeline_output_v0_1.md | Yes | Controlling staged draft batch | High | 30 rows parsed from staged output. |
| Prompt Queue workbook | Yes | Execution order | High | Step executed from Run=YES queue. |
| Pipeline core / cross-spoke audit | Yes | QA rules and caveats | High | Production self-marked, no source copying, no row loss. |

## 2. Intake Count Check

| Metric | Count |
| --- | --- |
| Draft items found | 30 |
| Auswahl items | 4 |
| Kontrast items | 3 |
| Luecke items | 8 |
| Produktion items | 3 |
| Reparatur items | 5 |
| Satzbau items | 3 |
| Umformen items | 1 |
| notice items | 3 |

## 3. Batch-Level QA Summary

| Metric | Count |
| --- | --- |
| Draft items audited | 30 |
| Approved as-is | 30 |
| Revised and approved | 0 |
| Cut | 0 |
| Deferred | 0 |
| Needs human/tutor check | 0 |
| Clean proceeding items | 30 |

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
| auto_core | 15 | eligible after delay if stable |
| auto_supported | 9 | weak/conservative after delay |
| excluded | 3 | not review-eligible |
| self_marked_production | 3 | not review-eligible |

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
| draft_b1_02_001 | notice | excluded | not_review_eligible |
| draft_b1_02_002 | notice | excluded | not_review_eligible |
| draft_b1_02_003 | notice | excluded | not_review_eligible |
| draft_b1_02_004 | Auswahl | auto_supported | weakly_eligible_after_delay |
| draft_b1_02_005 | Auswahl | auto_supported | weakly_eligible_after_delay |
| draft_b1_02_006 | Auswahl | auto_supported | weakly_eligible_after_delay |
| draft_b1_02_007 | Luecke | auto_core | eligible_auto_after_delay |
| draft_b1_02_008 | Luecke | auto_core | eligible_auto_after_delay |
| draft_b1_02_009 | Luecke | auto_core | eligible_auto_after_delay |
| draft_b1_02_010 | Luecke | auto_core | eligible_auto_after_delay |
| draft_b1_02_011 | Luecke | auto_core | eligible_auto_after_delay |
| draft_b1_02_012 | Luecke | auto_core | eligible_auto_after_delay |
| draft_b1_02_013 | Luecke | auto_core | eligible_auto_after_delay |
| draft_b1_02_014 | Luecke | auto_supported | weakly_eligible_after_delay |
| draft_b1_02_015 | Satzbau | auto_core | eligible_auto_after_delay |
| draft_b1_02_016 | Satzbau | auto_core | eligible_auto_after_delay |
| draft_b1_02_017 | Satzbau | auto_core | eligible_auto_after_delay |
| draft_b1_02_018 | Reparatur | auto_supported | weakly_eligible_after_delay |
| draft_b1_02_019 | Reparatur | auto_core | eligible_auto_after_delay |
| draft_b1_02_020 | Reparatur | auto_core | eligible_auto_after_delay |
| draft_b1_02_021 | Reparatur | auto_core | eligible_auto_after_delay |
| draft_b1_02_022 | Reparatur | auto_core | eligible_auto_after_delay |
| draft_b1_02_023 | Umformen | auto_core | eligible_auto_after_delay |
| draft_b1_02_024 | Kontrast | auto_supported | weakly_eligible_after_delay |
| draft_b1_02_025 | Kontrast | auto_supported | weakly_eligible_after_delay |
| draft_b1_02_026 | Kontrast | auto_supported | weakly_eligible_after_delay |
| draft_b1_02_027 | Produktion | self_marked_production | not_review_eligible |
| draft_b1_02_028 | Produktion | self_marked_production | not_review_eligible |
| draft_b1_02_029 | Produktion | self_marked_production | not_review_eligible |
| draft_b1_02_030 | Auswahl | auto_supported | weakly_eligible_after_delay |

## 13. Row-Reconciliation Handoff Counts
| Input count | Approved/revised | Cuts | Deferred | Human-check | Proceeding |
| --- | --- | --- | --- | --- | --- |
| 30 | 30 | 0 | 0 | 0 | 30 |

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

`READY_FOR_B1_02_ROW_RECONCILIATION`

Exact next recommended action: run row reconciliation / final inventory for B1-02.
