# Ozmosis B1-03 — Module-Specific QA / Reject / Revise v0.1

Module: B1-03 — Job search / offices  
Internal planning ID: `b1_m03_job_search_offices`  
Status: QA-approved planning output. No app code, app-ready JSON, copied source text, or readiness claim.

## 1. Source Verification

| Source | Available? | Used for | Reliability | Notes |
| --- | --- | --- | --- | --- |
| ozmosis_b1_m03_job_search_offices_full_staged_pipeline_output_v0_1.md | Yes | Controlling staged draft batch | High | 28 rows parsed from staged output. |
| Prompt Queue workbook | Yes | Execution order | High | Step executed from Run=YES queue. |
| Pipeline core / cross-spoke audit | Yes | QA rules and caveats | High | Production self-marked, no source copying, no row loss. |

## 2. Intake Count Check

| Metric | Count |
| --- | --- |
| Draft items found | 28 |
| Auswahl items | 3 |
| Kontrast items | 3 |
| Luecke items | 8 |
| Produktion items | 2 |
| Reparatur items | 5 |
| Satzbau items | 3 |
| Umformen items | 1 |
| notice items | 3 |

## 3. Batch-Level QA Summary

| Metric | Count |
| --- | --- |
| Draft items audited | 28 |
| Approved as-is | 28 |
| Revised and approved | 0 |
| Cut | 0 |
| Deferred | 0 |
| Needs human/tutor check | 0 |
| Clean proceeding items | 28 |

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
| draft_b1_03_001 | notice | TF-B1-03-LS08-02 | T-B1-03-LS08-02-01 | — | Concept: In office language, documents usually need an action: `ein Formular ausfüllen`, `Unterlagen einreichen`, `einen Antrag stellen`. | — | — | excluded | not_review_eligible | approve_as_is | — |
| draft_b1_03_002 | notice | TF-B1-03-LS05-01 | T-B1-03-LS05-01-01 | — | Concept: Learn office complement phrases as whole chunks first: `sich bei ... melden`, `zuständig sein für ...`, `sich informieren über ...`. | — | — | excluded | not_review_eligible | approve_as_is | — |
| draft_b1_03_003 | notice | TF-B1-03-LS03-01 | T-B1-03-LS03-01-02 | — | Concept: Deadline phrases such as `bis Freitag` and `bis zum Termin` are support phrases here, not a full preposition table. | — | — | excluded | not_review_eligible | approve_as_is | — |
| draft_b1_03_004 | Auswahl | TF-B1-03-LS08-01 | T-B1-03-LS08-01-01 | Choices: das Formular / der Rückruf / die Lieferung | German-first scenario: Sie bekommen ein Papier mit vielen Fragen. Which word fits? | das Formular | A `Formular` is a form. | auto_supported | weakly_eligible_after_delay | approve_as_is | — |
| draft_b1_03_005 | Auswahl | TF-B1-03-LS08-02 | T-B1-03-LS08-02-01 | stellen / trinken / schlafen | Which action fits with `Antrag` in formal admin German? | stellen | Use `einen Antrag stellen`. | auto_supported | weakly_eligible_after_delay | approve_as_is | — |
| draft_b1_03_006 | Auswahl | TF-B1-03-LS05-01 | T-B1-03-LS05-01-02 | Choices: Wer ist zuständig für...? / Wer ist krankgeschrieben? / Wer liefert morgen? | Which phrase asks who is responsible? | Wer ist zuständig für...? | `zuständig für` means responsible for. | auto_supported | weakly_eligible_after_delay | approve_as_is | — |
| draft_b1_03_007 | Luecke | TF-B1-03-LS08-02 | T-B1-03-LS08-02-01 | I have to submit/make an application. | Ich muss einen Antrag ___. | stellen | Use `einen Antrag stellen`. | auto_core | eligible_auto_after_delay | approve_as_is | — |
| draft_b1_03_008 | Luecke | TF-B1-03-LS08-02 | T-B1-03-LS08-02-02 | I have to fill in the form. | Ich muss das Formular ___. | ausfüllen | Use `ein Formular ausfüllen`. | auto_core | eligible_auto_after_delay | approve_as_is | — |
| draft_b1_03_009 | Luecke | TF-B1-03-LS08-02 | T-B1-03-LS08-02-03 | I have to submit the documents. | Ich muss die Unterlagen ___. | einreichen | Use `Unterlagen einreichen`. | auto_core | eligible_auto_after_delay | approve_as_is | — |
| draft_b1_03_010 | Luecke | TF-B1-03-LS04-01 | T-B1-03-LS04-01-01 | I have to hand in the documents today. | Ich ___ die Unterlagen heute abgeben. | muss | Use `muss` for obligation. | auto_core | eligible_auto_after_delay | approve_as_is | — |
| draft_b1_03_011 | Luecke | TF-B1-03-LS04-01 | T-B1-03-LS04-01-02 | Should I hand in the form here? | ___ ich das Formular hier abgeben? | Soll | Use `Soll ich...?` for asking what you should do. | auto_core | eligible_auto_after_delay | approve_as_is | — |
| draft_b1_03_012 | Luecke | TF-B1-03-LS05-01 | T-B1-03-LS05-01-01 | I contact/check in with counselling. | Ich melde mich ___ der Beratung. | bei | Use `sich bei ... melden`. | auto_core | eligible_auto_after_delay | approve_as_is | — |
| draft_b1_03_013 | Luecke | TF-B1-03-LS05-01 | T-B1-03-LS05-01-02 | Who is responsible for the application? | Wer ist zuständig ___ den Antrag? | für | Use `zuständig für`. | auto_core | eligible_auto_after_delay | approve_as_is | — |
| draft_b1_03_014 | Luecke | TF-B1-03-LS03-01 | T-B1-03-LS03-01-02 | Please hand in the documents by Friday. | Bitte geben Sie die Unterlagen ___ Freitag ab. | bis | Use `bis` for a deadline. | auto_core | eligible_auto_after_delay | approve_as_is | — |
| draft_b1_03_015 | Satzbau | TF-B1-03-LS07-01 | T-B1-03-LS07-01-01 | Build: Which documents do I need? | Chunks: `Welche / Unterlagen / brauche / ich?` | Welche Unterlagen brauche ich? | W-questions keep the finite verb in position 2. | auto_core | eligible_auto_after_delay | approve_as_is | — |
| draft_b1_03_016 | Satzbau | TF-B1-03-LS07-01 | T-B1-03-LS07-01-02 | Build: Where do I hand in the form? | Chunks: `Wo / gebe / ich / das Formular / ab?` | Wo gebe ich das Formular ab? | For separable verbs, the prefix can stand at the end. | auto_core | eligible_auto_after_delay | approve_as_is | — |
| draft_b1_03_017 | Satzbau | TF-B1-03-LS04-01 | T-B1-03-LS04-01-04 | Build: I have to submit the application. | Chunks: `Ich / muss / den Antrag / stellen.` | Ich muss den Antrag stellen. | Modal + infinitive: `muss ... stellen`. | auto_core | eligible_auto_after_delay | approve_as_is | — |
| draft_b1_03_018 | Reparatur | TF-B1-03-LS08-02 | T-B1-03-LS08-02-01 | Fix the collocation. | Fix: `Ich mache einen Antrag.` Intended formal admin meaning: submit an application. | Ich stelle einen Antrag. | Use `einen Antrag stellen`. | auto_supported | weakly_eligible_after_delay | approve_as_is | — |
| draft_b1_03_019 | Reparatur | TF-B1-03-LS08-02 | T-B1-03-LS08-02-02 | Fix the form action. | Fix: `Ich schreibe das Formular aus.` | Ich fülle das Formular aus. | Use `ein Formular ausfüllen`. | auto_core | eligible_auto_after_delay | approve_as_is | — |
| draft_b1_03_020 | Reparatur | TF-B1-03-LS05-01 | T-B1-03-LS05-01-02 | Fix the complement phrase. | Fix: `Wer ist zuständig über den Antrag?` | Wer ist zuständig für den Antrag? | Use `zuständig für`. | auto_core | eligible_auto_after_delay | approve_as_is | — |
| draft_b1_03_021 | Reparatur | TF-B1-03-LS04-01 | T-B1-03-LS04-01-01 | Fix the modal form. | Fix: `Ich müssen die Unterlagen abgeben.` | Ich muss die Unterlagen abgeben. | `Ich` uses `muss`, not `müssen`. | auto_core | eligible_auto_after_delay | approve_as_is | — |
| draft_b1_03_022 | Reparatur | TF-B1-03-LS03-01 | T-B1-03-LS03-01-02 | Fix the deadline phrase. | Fix: `Ich gebe die Unterlagen bis am Freitag ab.` | Ich gebe die Unterlagen bis Freitag ab. | Use `bis Freitag` for a simple deadline. | auto_core | eligible_auto_after_delay | approve_as_is | — |
| draft_b1_03_023 | Kontrast | TF-B1-03-LS08-01 | T-B1-03-LS08-01-01 | das Formular / der Termin | Choose the document you fill in. | das Formular | You fill in a form. | auto_supported | weakly_eligible_after_delay | approve_as_is | — |
| draft_b1_03_024 | Kontrast | TF-B1-03-LS08-01 | T-B1-03-LS08-01-02 | der Nachweis / der Vorschlag | Choose the phrase for proof/document evidence. | der Nachweis | A `Nachweis` is proof/evidence in admin contexts. | auto_supported | weakly_eligible_after_delay | approve_as_is | — |
| draft_b1_03_025 | Kontrast | TF-B1-03-LS08-02 | T-B1-03-LS08-02-03 | einreichen / besprechen | Choose the action for documents. | einreichen | Use `Unterlagen einreichen` for submitting documents. | auto_supported | weakly_eligible_after_delay | approve_as_is | — |
| draft_b1_03_026 | Umformen | TF-B1-03-LS07-01 | T-B1-03-LS07-01-01 | Ask which documents are needed. | Turn into an office question: `Ich brauche Unterlagen.` | Welche Unterlagen brauche ich? | Use `Welche Unterlagen...?` for this office question. | auto_core | eligible_auto_after_delay | approve_as_is | — |
| draft_b1_03_027 | Produktion | TF-B1-03-LS10-01 | T-B1-03-LS10-01-01 | Use `Welche Unterlagen...` | Write/say one short question asking which documents you need. | self-marked | Checklist: document + need + polite/clear question. | self_marked_production | not_review_eligible | approve_as_is | — |
| draft_b1_03_028 | Produktion | TF-B1-03-LS10-01 | T-B1-03-LS10-01-02 | Use `Wo gebe ich... ab?` | Write/say one short question asking where to hand in a form. | self-marked | Checklist: where + form + action. | self_marked_production | not_review_eligible | approve_as_is | — |

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
| auto_core | 16 | eligible after delay if stable |
| auto_supported | 7 | weak/conservative after delay |
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
| draft_b1_03_001 | notice | excluded | not_review_eligible |
| draft_b1_03_002 | notice | excluded | not_review_eligible |
| draft_b1_03_003 | notice | excluded | not_review_eligible |
| draft_b1_03_004 | Auswahl | auto_supported | weakly_eligible_after_delay |
| draft_b1_03_005 | Auswahl | auto_supported | weakly_eligible_after_delay |
| draft_b1_03_006 | Auswahl | auto_supported | weakly_eligible_after_delay |
| draft_b1_03_007 | Luecke | auto_core | eligible_auto_after_delay |
| draft_b1_03_008 | Luecke | auto_core | eligible_auto_after_delay |
| draft_b1_03_009 | Luecke | auto_core | eligible_auto_after_delay |
| draft_b1_03_010 | Luecke | auto_core | eligible_auto_after_delay |
| draft_b1_03_011 | Luecke | auto_core | eligible_auto_after_delay |
| draft_b1_03_012 | Luecke | auto_core | eligible_auto_after_delay |
| draft_b1_03_013 | Luecke | auto_core | eligible_auto_after_delay |
| draft_b1_03_014 | Luecke | auto_core | eligible_auto_after_delay |
| draft_b1_03_015 | Satzbau | auto_core | eligible_auto_after_delay |
| draft_b1_03_016 | Satzbau | auto_core | eligible_auto_after_delay |
| draft_b1_03_017 | Satzbau | auto_core | eligible_auto_after_delay |
| draft_b1_03_018 | Reparatur | auto_supported | weakly_eligible_after_delay |
| draft_b1_03_019 | Reparatur | auto_core | eligible_auto_after_delay |
| draft_b1_03_020 | Reparatur | auto_core | eligible_auto_after_delay |
| draft_b1_03_021 | Reparatur | auto_core | eligible_auto_after_delay |
| draft_b1_03_022 | Reparatur | auto_core | eligible_auto_after_delay |
| draft_b1_03_023 | Kontrast | auto_supported | weakly_eligible_after_delay |
| draft_b1_03_024 | Kontrast | auto_supported | weakly_eligible_after_delay |
| draft_b1_03_025 | Kontrast | auto_supported | weakly_eligible_after_delay |
| draft_b1_03_026 | Umformen | auto_core | eligible_auto_after_delay |
| draft_b1_03_027 | Produktion | self_marked_production | not_review_eligible |
| draft_b1_03_028 | Produktion | self_marked_production | not_review_eligible |

## 13. Row-Reconciliation Handoff Counts
| Input count | Approved/revised | Cuts | Deferred | Human-check | Proceeding |
| --- | --- | --- | --- | --- | --- |
| 28 | 28 | 0 | 0 | 0 | 28 |

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

`READY_FOR_B1_03_ROW_RECONCILIATION`

Exact next recommended action: run row reconciliation / final inventory for B1-03.
