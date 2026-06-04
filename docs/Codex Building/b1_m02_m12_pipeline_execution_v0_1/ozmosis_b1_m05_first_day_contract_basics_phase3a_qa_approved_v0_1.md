# Ozmosis B1-05 — Module-Specific QA / Reject / Revise v0.1

Module: B1-05 — First day / contract basics  
Internal planning ID: `b1_m05_first_day_contract_basics`  
Status: QA-approved planning output. No app code, app-ready JSON, copied source text, or readiness claim.

## 1. Source Verification

| Source | Available? | Used for | Reliability | Notes |
| --- | --- | --- | --- | --- |
| ozmosis_b1_m05_first_day_contract_basics_full_staged_pipeline_output_v0_1.md | Yes | Controlling staged draft batch | High | 20 rows parsed from staged output. |
| Prompt Queue workbook | Yes | Execution order | High | Step executed from Run=YES queue. |
| Pipeline core / cross-spoke audit | Yes | QA rules and caveats | High | Production self-marked, no source copying, no row loss. |

## 2. Intake Count Check

| Metric | Count |
| --- | --- |
| Draft items found | 20 |
| Auswahl items | 2 |
| Kontrast items | 3 |
| Luecke items | 5 |
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
| draft_b1_05_001 | notice | excluded | not_review_eligible |
| draft_b1_05_002 | notice | excluded | not_review_eligible |
| draft_b1_05_003 | notice | excluded | not_review_eligible |
| draft_b1_05_004 | Auswahl | auto_supported | weakly_eligible_after_delay |
| draft_b1_05_005 | Auswahl | auto_supported | weakly_eligible_after_delay |
| draft_b1_05_006 | Luecke | auto_core | eligible_auto_after_delay |
| draft_b1_05_007 | Luecke | auto_core | eligible_auto_after_delay |
| draft_b1_05_008 | Luecke | auto_core | eligible_auto_after_delay |
| draft_b1_05_009 | Luecke | auto_core | eligible_auto_after_delay |
| draft_b1_05_010 | Luecke | auto_core | eligible_auto_after_delay |
| draft_b1_05_011 | Satzbau | auto_core | eligible_auto_after_delay |
| draft_b1_05_012 | Satzbau | auto_core | eligible_auto_after_delay |
| draft_b1_05_013 | Reparatur | auto_core | eligible_auto_after_delay |
| draft_b1_05_014 | Reparatur | auto_core | eligible_auto_after_delay |
| draft_b1_05_015 | Reparatur | auto_core | eligible_auto_after_delay |
| draft_b1_05_016 | Kontrast | auto_supported | weakly_eligible_after_delay |
| draft_b1_05_017 | Kontrast | auto_supported | weakly_eligible_after_delay |
| draft_b1_05_018 | Kontrast | auto_supported | weakly_eligible_after_delay |
| draft_b1_05_019 | Produktion | self_marked_production | not_review_eligible |
| draft_b1_05_020 | Produktion | self_marked_production | not_review_eligible |

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

`READY_FOR_B1_05_ROW_RECONCILIATION`

Exact next recommended action: run row reconciliation / final inventory for B1-05.
