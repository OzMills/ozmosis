# Ozmosis B1-07 — Module-Specific QA / Reject / Revise v0.1

Module: B1-07 — Meetings / leave requests  
Internal planning ID: `b1_m07_meetings_leave_requests`  
Status: QA-approved planning output. No app code, app-ready JSON, copied source text, or readiness claim.

## 1. Source Verification

| Source | Available? | Used for | Reliability | Notes |
| --- | --- | --- | --- | --- |
| ozmosis_b1_m07_meetings_leave_requests_full_staged_pipeline_output_v0_1.md | Yes | Controlling staged draft batch | High | 20 rows parsed from staged output. |
| Prompt Queue workbook | Yes | Execution order | High | Step executed from Run=YES queue. |
| Pipeline core / cross-spoke audit | Yes | QA rules and caveats | High | Production self-marked, no source copying, no row loss. |

## 2. Intake Count Check

| Metric | Count |
| --- | --- |
| Draft items found | 20 |
| Auswahl items | 2 |
| Kontrast items | 2 |
| Luecke items | 5 |
| Produktion items | 2 |
| Reparatur items | 3 |
| Satzbau items | 3 |
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
| draft_b1_07_001 | notice | TF-B1-07-LS07-01 | T-B1-07-LS07-01-01 | — | Concept: Leave requests are not sick-leave messages. Use `Urlaub` or `frei nehmen`, not `krankmelden`. | — | — | excluded | not_review_eligible | approve_as_is | — |
| draft_b1_07_002 | notice | TF-B1-07-LS06-01 | T-B1-07-LS06-01-02 | — | Concept: `ob` introduces an indirect yes/no question and sends the verb to the end. | — | — | excluded | not_review_eligible | approve_as_is | — |
| draft_b1_07_003 | notice | TF-B1-07-LS04-01 | T-B1-07-LS04-01-01 | — | Concept: `Wir könnten...` is a simple suggestion frame, not full negotiation. | — | — | excluded | not_review_eligible | approve_as_is | — |
| draft_b1_07_004 | Auswahl | TF-B1-07-LS08-01 | T-B1-07-LS08-01-01 | die Besprechung / das Attest / die Rechnung | Which word is a meeting? | die Besprechung | `Besprechung` is a meeting/discussion. | auto_supported | weakly_eligible_after_delay | approve_as_is | — |
| draft_b1_07_005 | Auswahl | TF-B1-07-LS07-01 | T-B1-07-LS07-01-01 | Urlaub nehmen / krankmelden / Rechnung bezahlen | Which phrase asks for holiday/leave? | Urlaub nehmen | `Urlaub nehmen` belongs to leave, not sick leave. | auto_supported | weakly_eligible_after_delay | approve_as_is | — |
| draft_b1_07_006 | Luecke | TF-B1-07-LS07-01 | T-B1-07-LS07-01-01 | I would like to take holiday next week. | Ich möchte nächste Woche Urlaub ___. | nehmen | Use `Urlaub nehmen`. | auto_core | eligible_auto_after_delay | approve_as_is | — |
| draft_b1_07_007 | Luecke | TF-B1-07-LS07-01 | T-B1-07-LS07-01-02 | Can I take Friday off? | Kann ich am Freitag frei ___? | nehmen | Use `frei nehmen`. | auto_core | eligible_auto_after_delay | approve_as_is | — |
| draft_b1_07_008 | Luecke | TF-B1-07-LS06-01 | T-B1-07-LS06-01-02 | I ask whether the appointment suits tomorrow. | Ich frage, ob der Termin morgen ___. | passt | With `ob`, the finite verb goes to the end. | auto_core | eligible_auto_after_delay | approve_as_is | — |
| draft_b1_07_009 | Luecke | TF-B1-07-LS04-01 | T-B1-07-LS04-01-01 | We could move the appointment. | Wir ___ den Termin verschieben. | könnten | `Wir könnten...` is a proposal frame. | auto_core | eligible_auto_after_delay | approve_as_is | — |
| draft_b1_07_010 | Luecke | TF-B1-07-LS03-01 | T-B1-07-LS03-01-02 | The holiday is from Monday to Friday. | Der Urlaub ist ___ Montag bis Freitag. | von | Use `von ... bis ...`. | auto_core | eligible_auto_after_delay | approve_as_is | — |
| draft_b1_07_011 | Satzbau | TF-B1-07-LS07-01 | T-B1-07-LS07-01-01 | Build the leave request sentence. | Chunks: `Ich / möchte / Urlaub / nehmen.` | Ich möchte Urlaub nehmen. | Use `Urlaub nehmen`. | auto_core | eligible_auto_after_delay | approve_as_is | — |
| draft_b1_07_012 | Satzbau | TF-B1-07-LS04-01 | T-B1-07-LS04-01-01 | Build the proposal sentence. | Chunks: `Wir / könnten / den Termin / verschieben.` | Wir könnten den Termin verschieben. | `könnten` keeps the infinitive at the end. | auto_core | eligible_auto_after_delay | approve_as_is | — |
| draft_b1_07_013 | Satzbau | TF-B1-07-LS06-01 | T-B1-07-LS06-01-02 | Build the indirect question. | Chunks: `Ich / frage, / ob / der Termin / passt.` | Ich frage, ob der Termin passt. | After `ob`, the verb goes to the end. | auto_core | eligible_auto_after_delay | approve_as_is | — |
| draft_b1_07_014 | Reparatur | TF-B1-07-LS06-01 | T-B1-07-LS06-01-02 | Fix the `ob` clause. | Fix: `Ich frage, ob passt der Termin.` | Ich frage, ob der Termin passt. | Verb goes at the end in the `ob` clause. | auto_core | eligible_auto_after_delay | approve_as_is | — |
| draft_b1_07_015 | Reparatur | TF-B1-07-LS07-01 | T-B1-07-LS07-01-01 | Fix the leave-request phrase. | Fix: `Ich möchte Urlaub machen.` Intended workplace leave request. | Ich möchte Urlaub nehmen. | Use `Urlaub nehmen` in this workplace frame. | auto_supported | weakly_eligible_after_delay | approve_as_is | — |
| draft_b1_07_016 | Reparatur | TF-B1-07-LS04-01 | T-B1-07-LS04-01-01 | Fix modal word order. | Fix: `Wir könnten verschieben den Termin.` | Wir könnten den Termin verschieben. | The infinitive goes at the end. | auto_core | eligible_auto_after_delay | approve_as_is | — |
| draft_b1_07_017 | Kontrast | TF-B1-07-LS07-01 | T-B1-07-LS07-01-01 | Urlaub nehmen / krankmelden | Choose leave, not sickness. | Urlaub nehmen | Leave request: `Urlaub nehmen`. | auto_supported | weakly_eligible_after_delay | approve_as_is | — |
| draft_b1_07_018 | Kontrast | TF-B1-07-LS06-01 | T-B1-07-LS06-01-02 | ob / dass | Choose indirect yes/no connector. | ob | Use `ob` for whether/if in an indirect question. | auto_supported | weakly_eligible_after_delay | approve_as_is | — |
| draft_b1_07_019 | Produktion | TF-B1-07-LS10-01 | T-B1-07-LS10-01-01 | Use `Urlaub nehmen` or `frei nehmen`. | Write/say one short leave request. | self-marked | Checklist: date + request + polite tone. | self_marked_production | not_review_eligible | approve_as_is | — |
| draft_b1_07_020 | Produktion | TF-B1-07-LS10-01 | T-B1-07-LS10-01-02 | Use `Der Termin passt.` | Reply that a meeting time works for you. | self-marked | Checklist: meeting + time + works/doesn't work. | self_marked_production | not_review_eligible | approve_as_is | — |

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
| draft_b1_07_001 | notice | excluded | not_review_eligible |
| draft_b1_07_002 | notice | excluded | not_review_eligible |
| draft_b1_07_003 | notice | excluded | not_review_eligible |
| draft_b1_07_004 | Auswahl | auto_supported | weakly_eligible_after_delay |
| draft_b1_07_005 | Auswahl | auto_supported | weakly_eligible_after_delay |
| draft_b1_07_006 | Luecke | auto_core | eligible_auto_after_delay |
| draft_b1_07_007 | Luecke | auto_core | eligible_auto_after_delay |
| draft_b1_07_008 | Luecke | auto_core | eligible_auto_after_delay |
| draft_b1_07_009 | Luecke | auto_core | eligible_auto_after_delay |
| draft_b1_07_010 | Luecke | auto_core | eligible_auto_after_delay |
| draft_b1_07_011 | Satzbau | auto_core | eligible_auto_after_delay |
| draft_b1_07_012 | Satzbau | auto_core | eligible_auto_after_delay |
| draft_b1_07_013 | Satzbau | auto_core | eligible_auto_after_delay |
| draft_b1_07_014 | Reparatur | auto_core | eligible_auto_after_delay |
| draft_b1_07_015 | Reparatur | auto_supported | weakly_eligible_after_delay |
| draft_b1_07_016 | Reparatur | auto_core | eligible_auto_after_delay |
| draft_b1_07_017 | Kontrast | auto_supported | weakly_eligible_after_delay |
| draft_b1_07_018 | Kontrast | auto_supported | weakly_eligible_after_delay |
| draft_b1_07_019 | Produktion | self_marked_production | not_review_eligible |
| draft_b1_07_020 | Produktion | self_marked_production | not_review_eligible |

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

`READY_FOR_B1_07_ROW_RECONCILIATION`

Exact next recommended action: run row reconciliation / final inventory for B1-07.
