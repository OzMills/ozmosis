# Ozmosis B1-10 — Module-Specific QA / Reject / Revise v0.1

Module: B1-10 — Technical problems  
Internal planning ID: `b1_m10_technical_problems`  
Status: QA-approved planning output. No app code, app-ready JSON, copied source text, or readiness claim.

## 1. Source Verification

| Source | Available? | Used for | Reliability | Notes |
| --- | --- | --- | --- | --- |
| ozmosis_b1_m10_technical_problems_full_staged_pipeline_output_v0_1.md | Yes | Controlling staged draft batch | High | 20 rows parsed from staged output. |
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
| auto_core | 11 | eligible after delay if stable |
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
| draft_b1_10_001 | notice | excluded | not_review_eligible |
| draft_b1_10_002 | notice | excluded | not_review_eligible |
| draft_b1_10_003 | notice | excluded | not_review_eligible |
| draft_b1_10_004 | Auswahl | auto_supported | weakly_eligible_after_delay |
| draft_b1_10_005 | Auswahl | auto_supported | weakly_eligible_after_delay |
| draft_b1_10_006 | Luecke | auto_core | eligible_auto_after_delay |
| draft_b1_10_007 | Luecke | auto_core | eligible_auto_after_delay |
| draft_b1_10_008 | Luecke | auto_core | eligible_auto_after_delay |
| draft_b1_10_009 | Luecke | auto_core | eligible_auto_after_delay |
| draft_b1_10_010 | Luecke | auto_core | eligible_auto_after_delay |
| draft_b1_10_011 | Luecke | auto_core | eligible_auto_after_delay |
| draft_b1_10_012 | Satzbau | auto_core | eligible_auto_after_delay |
| draft_b1_10_013 | Satzbau | auto_core | eligible_auto_after_delay |
| draft_b1_10_014 | Reparatur | auto_core | eligible_auto_after_delay |
| draft_b1_10_015 | Reparatur | auto_core | eligible_auto_after_delay |
| draft_b1_10_016 | Reparatur | auto_core | eligible_auto_after_delay |
| draft_b1_10_017 | Kontrast | auto_supported | weakly_eligible_after_delay |
| draft_b1_10_018 | Kontrast | auto_supported | weakly_eligible_after_delay |
| draft_b1_10_019 | Produktion | self_marked_production | not_review_eligible |
| draft_b1_10_020 | Produktion | self_marked_production | not_review_eligible |

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

`READY_FOR_B1_10_ROW_RECONCILIATION`

Exact next recommended action: run row reconciliation / final inventory for B1-10.
