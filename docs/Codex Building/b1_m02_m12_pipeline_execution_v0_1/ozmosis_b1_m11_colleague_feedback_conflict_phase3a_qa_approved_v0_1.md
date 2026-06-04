# Ozmosis B1-11 — Module-Specific QA / Reject / Revise v0.1

Module: B1-11 — Colleague feedback / conflict  
Internal planning ID: `b1_m11_colleague_feedback_conflict`  
Status: QA-approved planning output. No app code, app-ready JSON, copied source text, or readiness claim.

## 1. Source Verification

| Source | Available? | Used for | Reliability | Notes |
| --- | --- | --- | --- | --- |
| ozmosis_b1_m11_colleague_feedback_conflict_full_staged_pipeline_output_v0_1.md | Yes | Controlling staged draft batch | High | 18 rows parsed from staged output. |
| Prompt Queue workbook | Yes | Execution order | High | Step executed from Run=YES queue. |
| Pipeline core / cross-spoke audit | Yes | QA rules and caveats | High | Production self-marked, no source copying, no row loss. |

## 2. Intake Count Check

| Metric | Count |
| --- | --- |
| Draft items found | 18 |
| Auswahl items | 2 |
| Kontrast items | 2 |
| Luecke items | 4 |
| Produktion items | 2 |
| Reparatur items | 3 |
| Satzbau items | 2 |
| notice items | 3 |

## 3. Batch-Level QA Summary

| Metric | Count |
| --- | --- |
| Draft items audited | 18 |
| Approved as-is | 18 |
| Revised and approved | 0 |
| Cut | 0 |
| Deferred | 0 |
| Needs human/tutor check | 0 |
| Clean proceeding items | 18 |

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
| draft_b1_11_001 | notice | TF-B1-11-LS07-01 | T-B1-11-LS07-01-01 | — | Concept: Feedback should be clear but soft. This module practises mild workplace language, not HR/legal conflict. | — | — | excluded | not_review_eligible | approve_as_is | — |
| draft_b1_11_002 | notice | TF-B1-11-LS07-03 | T-B1-11-LS07-03-01 | — | Concept: `Aus meiner Sicht...` is a soft disagreement frame and keeps V2. | — | — | excluded | not_review_eligible | approve_as_is | — |
| draft_b1_11_003 | notice | TF-B1-11-LS10-01 | T-B1-11-LS10-01-01 | — | Concept: Conflict production is self-marked only; the app cannot judge social correctness. | — | — | excluded | not_review_eligible | approve_as_is | — |
| draft_b1_11_004 | Auswahl | TF-B1-11-LS08-01 | T-B1-11-LS08-01-02 | das Missverständnis / die Rechnung / der Urlaub | Which word means misunderstanding? | das Missverständnis | `Missverständnis` is misunderstanding. | auto_supported | weakly_eligible_after_delay | approve_as_is | — |
| draft_b1_11_005 | Auswahl | TF-B1-11-LS07-02 | T-B1-11-LS07-02-01 | Es tut mir leid. / Es ist geliefert. / Es ist bezahlt. | Which phrase is an apology? | Es tut mir leid. | `Es tut mir leid` is an apology. | auto_supported | weakly_eligible_after_delay | approve_as_is | — |
| draft_b1_11_006 | Luecke | TF-B1-11-LS07-02 | T-B1-11-LS07-02-01 | I am sorry. | Es tut mir ___. | leid | Fixed apology: `Es tut mir leid.` | auto_core | eligible_auto_after_delay | approve_as_is | — |
| draft_b1_11_007 | Luecke | TF-B1-11-LS07-03 | T-B1-11-LS07-03-01 | From my point of view, the plan is difficult. | ___ meiner Sicht ist der Plan schwierig. | Aus | Use `Aus meiner Sicht...`. | auto_core | eligible_auto_after_delay | approve_as_is | — |
| draft_b1_11_008 | Luecke | TF-B1-11-LS06-01 | T-B1-11-LS06-01-01 | I think that the plan is good. | Ich denke, dass der Plan gut ___. | ist | After `dass`, the verb goes to the end. | auto_core | eligible_auto_after_delay | approve_as_is | — |
| draft_b1_11_009 | Luecke | TF-B1-11-LS04-01 | T-B1-11-LS04-01-01 | We could find a solution. | Wir ___ eine Lösung finden. | könnten | `Wir könnten...` softens a proposal. | auto_core | eligible_auto_after_delay | approve_as_is | — |
| draft_b1_11_010 | Satzbau | TF-B1-11-LS07-03 | T-B1-11-LS07-03-01 | Build the soft disagreement sentence. | Chunks: `Aus meiner Sicht / ist / das / schwierig.` | Aus meiner Sicht ist das schwierig. | After the fronted phrase, verb comes second. | auto_core | eligible_auto_after_delay | approve_as_is | — |
| draft_b1_11_011 | Satzbau | TF-B1-11-LS04-01 | T-B1-11-LS04-01-01 | Build the proposal. | Chunks: `Wir / könnten / eine Lösung / finden.` | Wir könnten eine Lösung finden. | `könnten ... finden` frames a suggestion. | auto_core | eligible_auto_after_delay | approve_as_is | — |
| draft_b1_11_012 | Reparatur | TF-B1-11-LS06-01 | T-B1-11-LS06-01-01 | Fix the `dass` clause. | Fix: `Ich denke, dass ist der Plan gut.` | Ich denke, dass der Plan gut ist. | Verb goes at the end after `dass`. | auto_core | eligible_auto_after_delay | approve_as_is | — |
| draft_b1_11_013 | Reparatur | TF-B1-11-LS07-03 | T-B1-11-LS07-03-01 | Fix V2 after the fronted phrase. | Fix: `Aus meiner Sicht das ist falsch.` | Aus meiner Sicht ist das falsch. | Verb comes second. | auto_core | eligible_auto_after_delay | approve_as_is | — |
| draft_b1_11_014 | Reparatur | TF-B1-11-LS07-01 | T-B1-11-LS07-01-03 | Make the feedback softer. | Soften: `Das ist schlecht.` | Aus meiner Sicht ist das schwierig. | Softening is the target; production remains bounded. | auto_supported | weakly_eligible_after_delay | approve_as_is | — |
| draft_b1_11_015 | Kontrast | TF-B1-11-LS07-02 | T-B1-11-LS07-02-01 | Es tut mir leid. / Ich bitte um Ersatz. | Choose the apology. | Es tut mir leid. | This is apology language, not customer service. | auto_supported | weakly_eligible_after_delay | approve_as_is | — |
| draft_b1_11_016 | Kontrast | TF-B1-11-LS07-03 | T-B1-11-LS07-03-02 | Ich sehe das anders. / Du hast Unrecht. | Choose soft disagreement. | Ich sehe das anders. | Soft disagreement avoids blunt escalation. | auto_supported | weakly_eligible_after_delay | approve_as_is | — |
| draft_b1_11_017 | Produktion | TF-B1-11-LS10-01 | T-B1-11-LS10-01-01 | Use `Entschuldigung` or `Es tut mir leid`. | Write/say one short apology for a misunderstanding. | self-marked | Checklist: apology + simple reason optional. | self_marked_production | not_review_eligible | approve_as_is | — |
| draft_b1_11_018 | Produktion | TF-B1-11-LS10-01 | T-B1-11-LS10-01-03 | Use `Wir könnten...` | Suggest one simple solution politely. | self-marked | Checklist: proposal + polite/soft tone. | self_marked_production | not_review_eligible | approve_as_is | — |

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
| auto_core | 8 | eligible after delay if stable |
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
| draft_b1_11_001 | notice | excluded | not_review_eligible |
| draft_b1_11_002 | notice | excluded | not_review_eligible |
| draft_b1_11_003 | notice | excluded | not_review_eligible |
| draft_b1_11_004 | Auswahl | auto_supported | weakly_eligible_after_delay |
| draft_b1_11_005 | Auswahl | auto_supported | weakly_eligible_after_delay |
| draft_b1_11_006 | Luecke | auto_core | eligible_auto_after_delay |
| draft_b1_11_007 | Luecke | auto_core | eligible_auto_after_delay |
| draft_b1_11_008 | Luecke | auto_core | eligible_auto_after_delay |
| draft_b1_11_009 | Luecke | auto_core | eligible_auto_after_delay |
| draft_b1_11_010 | Satzbau | auto_core | eligible_auto_after_delay |
| draft_b1_11_011 | Satzbau | auto_core | eligible_auto_after_delay |
| draft_b1_11_012 | Reparatur | auto_core | eligible_auto_after_delay |
| draft_b1_11_013 | Reparatur | auto_core | eligible_auto_after_delay |
| draft_b1_11_014 | Reparatur | auto_supported | weakly_eligible_after_delay |
| draft_b1_11_015 | Kontrast | auto_supported | weakly_eligible_after_delay |
| draft_b1_11_016 | Kontrast | auto_supported | weakly_eligible_after_delay |
| draft_b1_11_017 | Produktion | self_marked_production | not_review_eligible |
| draft_b1_11_018 | Produktion | self_marked_production | not_review_eligible |

## 13. Row-Reconciliation Handoff Counts
| Input count | Approved/revised | Cuts | Deferred | Human-check | Proceeding |
| --- | --- | --- | --- | --- | --- |
| 18 | 18 | 0 | 0 | 0 | 18 |

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

`READY_FOR_B1_11_ROW_RECONCILIATION`

Exact next recommended action: run row reconciliation / final inventory for B1-11.
