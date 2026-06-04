# Ozmosis B1-04 — Module-Specific QA / Reject / Revise v0.1

Module: B1-04 — Applications  
Internal planning ID: `b1_m04_applications`  
Status: QA-approved planning output. No app code, app-ready JSON, copied source text, or readiness claim.

## 1. Source Verification

| Source | Available? | Used for | Reliability | Notes |
| --- | --- | --- | --- | --- |
| ozmosis_b1_m04_applications_full_staged_pipeline_output_v0_1.md | Yes | Controlling staged draft batch | High | 26 rows parsed from staged output. |
| Prompt Queue workbook | Yes | Execution order | High | Step executed from Run=YES queue. |
| Pipeline core / cross-spoke audit | Yes | QA rules and caveats | High | Production self-marked, no source copying, no row loss. |

## 2. Intake Count Check

| Metric | Count |
| --- | --- |
| Draft items found | 26 |
| Auswahl items | 3 |
| Kontrast items | 3 |
| Luecke items | 7 |
| Produktion items | 2 |
| Reparatur items | 4 |
| Satzbau items | 3 |
| Umformen items | 1 |
| notice items | 3 |

## 3. Batch-Level QA Summary

| Metric | Count |
| --- | --- |
| Draft items audited | 26 |
| Approved as-is | 26 |
| Revised and approved | 0 |
| Cut | 0 |
| Deferred | 0 |
| Needs human/tutor check | 0 |
| Clean proceeding items | 26 |

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
| draft_b1_04_001 | notice | TF-B1-04-LS05-01 | T-B1-04-LS05-01-01 | — | Concept: `Ich bewerbe mich um eine Stelle` is a controlled application frame. Do not treat it as a full reflexive-verb lesson. | — | — | excluded | not_review_eligible | approve_as_is | — |
| draft_b1_04_002 | notice | TF-B1-04-LS08-02 | T-B1-04-LS08-02-01 | — | Concept: Application documents are action objects: send the CV, attach certificates, upload documents. | — | — | excluded | not_review_eligible | approve_as_is | — |
| draft_b1_04_003 | notice | TF-B1-04-LS10-01 | T-B1-04-LS10-01-01 | — | Concept: Application writing in this module is self-marked practice only, not a polished cover-letter score. | — | — | excluded | not_review_eligible | approve_as_is | — |
| draft_b1_04_004 | Auswahl | TF-B1-04-LS08-01 | T-B1-04-LS08-01-01 | Choices: die Stellenanzeige / die Krankmeldung / die Lieferung | Which word means a job advert? | die Stellenanzeige | A `Stellenanzeige` is a job advert. | auto_supported | weakly_eligible_after_delay | approve_as_is | — |
| draft_b1_04_005 | Auswahl | TF-B1-04-LS08-02 | T-B1-04-LS08-02-01 | Choices: der Lebenslauf / der Rückruf / der Gutschein | Which document is a CV? | der Lebenslauf | `Lebenslauf` is CV. | auto_supported | weakly_eligible_after_delay | approve_as_is | — |
| draft_b1_04_006 | Auswahl | TF-B1-04-LS08-02 | T-B1-04-LS08-02-01 | Choices: das Anschreiben / die Sprechzeit / der Papierstau | Which document is usually the cover/application letter? | das Anschreiben | `Anschreiben` is the cover letter/application letter document. | auto_supported | weakly_eligible_after_delay | approve_as_is | — |
| draft_b1_04_007 | Luecke | TF-B1-04-LS05-01 | T-B1-04-LS05-01-01 | I am applying for the position. | Ich bewerbe mich ___ die Stelle. | um | Use `sich bewerben um` for the position. | auto_core | eligible_auto_after_delay | approve_as_is | — |
| draft_b1_04_008 | Luecke | TF-B1-04-LS05-01 | T-B1-04-LS05-01-02 | I am applying as a sales assistant. | Ich bewerbe mich ___ Verkäuferin. | als | Use `als` for the role. | auto_core | eligible_auto_after_delay | approve_as_is | — |
| draft_b1_04_009 | Luecke | TF-B1-04-LS05-01 | T-B1-04-LS05-01-03 | I am applying to/with the company Nordlicht. | Ich bewerbe mich ___ der Firma Nordlicht. | bei | Use `bei` for the company/place. | auto_core | eligible_auto_after_delay | approve_as_is | — |
| draft_b1_04_010 | Luecke | TF-B1-04-LS04-01 | T-B1-04-LS04-01-01 | I have experience with customers. | Ich habe Erfahrung ___ Kunden. | mit | Use `Erfahrung mit`. | auto_core | eligible_auto_after_delay | approve_as_is | — |
| draft_b1_04_011 | Luecke | TF-B1-04-LS04-01 | T-B1-04-LS04-01-03 | I can work well with the computer. | Ich ___ gut mit dem Computer arbeiten. | kann | Use `kann` with `ich`. | auto_core | eligible_auto_after_delay | approve_as_is | — |
| draft_b1_04_012 | Luecke | TF-B1-04-LS07-01 | T-B1-04-LS07-01-01 | I am interested in the position. | Ich interessiere mich ___ die Stelle. | für | Use `sich interessieren für`. | auto_core | eligible_auto_after_delay | approve_as_is | — |
| draft_b1_04_013 | Luecke | TF-B1-04-LS03-01 | T-B1-04-LS03-01-01 | I can start immediately. | Ich kann ___ sofort anfangen. | ab | Use `ab sofort`. | auto_core | eligible_auto_after_delay | approve_as_is | — |
| draft_b1_04_014 | Satzbau | TF-B1-04-LS05-01 | T-B1-04-LS05-01-01 | Build the application frame. | Chunks: `Ich / bewerbe / mich / um / die Stelle.` | Ich bewerbe mich um die Stelle. | Keep `mich` with `bewerbe`. | auto_core | eligible_auto_after_delay | approve_as_is | — |
| draft_b1_04_015 | Satzbau | TF-B1-04-LS04-01 | T-B1-04-LS04-01-03 | Build the skill sentence. | Chunks: `Ich / kann / gut / im Team / arbeiten.` | Ich kann gut im Team arbeiten. | Modal + infinitive: `kann ... arbeiten`. | auto_core | eligible_auto_after_delay | approve_as_is | — |
| draft_b1_04_016 | Satzbau | TF-B1-04-LS07-02 | T-B1-04-LS07-02-02 | Build the availability sentence. | Chunks: `Ich / kann / ab Juli / anfangen.` | Ich kann ab Juli anfangen. | `ab Juli` gives the starting time. | auto_core | eligible_auto_after_delay | approve_as_is | — |
| draft_b1_04_017 | Reparatur | TF-B1-04-LS05-01 | T-B1-04-LS05-01-01 | Fix the reflexive application frame. | Fix: `Ich bewerbe mir um die Stelle.` | Ich bewerbe mich um die Stelle. | Use `mich` with `ich bewerbe`. | auto_core | eligible_auto_after_delay | approve_as_is | — |
| draft_b1_04_018 | Reparatur | TF-B1-04-LS05-01 | T-B1-04-LS05-01-01 | Fix the application preposition. | Fix: `Ich bewerbe mich für die Stelle.` Intended target frame: applying for a position. | Ich bewerbe mich um die Stelle. | Use `um` for the position. | auto_supported | weakly_eligible_after_delay | approve_as_is | — |
| draft_b1_04_019 | Reparatur | TF-B1-04-LS04-01 | T-B1-04-LS04-01-01 | Fix the experience phrase. | Fix: `Ich habe Erfahrung über Kunden.` | Ich habe Erfahrung mit Kunden. | Use `Erfahrung mit`. | auto_core | eligible_auto_after_delay | approve_as_is | — |
| draft_b1_04_020 | Reparatur | TF-B1-04-LS04-01 | T-B1-04-LS04-01-03 | Fix the phrase. | Fix: `Ich kann gut mit Computer arbeiten.` | Ich kann gut mit dem Computer arbeiten. | Use `mit dem Computer` as a fixed support phrase. | auto_supported | weakly_eligible_after_delay | approve_as_is | — |
| draft_b1_04_021 | Kontrast | TF-B1-04-LS08-02 | T-B1-04-LS08-02-01 | der Lebenslauf / das Anschreiben | Choose the CV document. | der Lebenslauf | The CV is `der Lebenslauf`. | auto_supported | weakly_eligible_after_delay | approve_as_is | — |
| draft_b1_04_022 | Kontrast | TF-B1-04-LS05-01 | T-B1-04-LS05-01-02 | als / um | Choose the frame for a role: `Ich bewerbe mich ___ Verkäufer.` | als | Use `als` for the role. | auto_supported | weakly_eligible_after_delay | approve_as_is | — |
| draft_b1_04_023 | Kontrast | TF-B1-04-LS04-01 | T-B1-04-LS04-01-04 | Ich bin zuverlässig. / Ich bin zuverlässige Mitarbeiter. | Choose the sentence without adjective endings as target. | Ich bin zuverlässig. | Use predicative adjective here: `Ich bin zuverlässig`. | auto_supported | weakly_eligible_after_delay | approve_as_is | — |
| draft_b1_04_024 | Umformen | TF-B1-04-LS07-01 | T-B1-04-LS07-01-01 | Use the target frame. | Turn into an interest statement: `Die Stelle ist interessant für mich.` | Ich interessiere mich für die Stelle. | `sich interessieren für` is the interest frame. | auto_core | eligible_auto_after_delay | approve_as_is | — |
| draft_b1_04_025 | Produktion | TF-B1-04-LS10-01 | T-B1-04-LS10-01-01 | Use one application frame and one skill. | Write 2 short sentences for an application message. | self-marked | Checklist: position + one skill + simple language. | self_marked_production | not_review_eligible | approve_as_is | — |
| draft_b1_04_026 | Produktion | TF-B1-04-LS10-01 | T-B1-04-LS10-01-02 | Use `Ich kann ab... anfangen.` | Answer one interview question: When can you start? | self-marked | Checklist: start date + simple sentence. | self_marked_production | not_review_eligible | approve_as_is | — |

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
| auto_core | 13 | eligible after delay if stable |
| auto_supported | 8 | weak/conservative after delay |
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
| draft_b1_04_001 | notice | excluded | not_review_eligible |
| draft_b1_04_002 | notice | excluded | not_review_eligible |
| draft_b1_04_003 | notice | excluded | not_review_eligible |
| draft_b1_04_004 | Auswahl | auto_supported | weakly_eligible_after_delay |
| draft_b1_04_005 | Auswahl | auto_supported | weakly_eligible_after_delay |
| draft_b1_04_006 | Auswahl | auto_supported | weakly_eligible_after_delay |
| draft_b1_04_007 | Luecke | auto_core | eligible_auto_after_delay |
| draft_b1_04_008 | Luecke | auto_core | eligible_auto_after_delay |
| draft_b1_04_009 | Luecke | auto_core | eligible_auto_after_delay |
| draft_b1_04_010 | Luecke | auto_core | eligible_auto_after_delay |
| draft_b1_04_011 | Luecke | auto_core | eligible_auto_after_delay |
| draft_b1_04_012 | Luecke | auto_core | eligible_auto_after_delay |
| draft_b1_04_013 | Luecke | auto_core | eligible_auto_after_delay |
| draft_b1_04_014 | Satzbau | auto_core | eligible_auto_after_delay |
| draft_b1_04_015 | Satzbau | auto_core | eligible_auto_after_delay |
| draft_b1_04_016 | Satzbau | auto_core | eligible_auto_after_delay |
| draft_b1_04_017 | Reparatur | auto_core | eligible_auto_after_delay |
| draft_b1_04_018 | Reparatur | auto_supported | weakly_eligible_after_delay |
| draft_b1_04_019 | Reparatur | auto_core | eligible_auto_after_delay |
| draft_b1_04_020 | Reparatur | auto_supported | weakly_eligible_after_delay |
| draft_b1_04_021 | Kontrast | auto_supported | weakly_eligible_after_delay |
| draft_b1_04_022 | Kontrast | auto_supported | weakly_eligible_after_delay |
| draft_b1_04_023 | Kontrast | auto_supported | weakly_eligible_after_delay |
| draft_b1_04_024 | Umformen | auto_core | eligible_auto_after_delay |
| draft_b1_04_025 | Produktion | self_marked_production | not_review_eligible |
| draft_b1_04_026 | Produktion | self_marked_production | not_review_eligible |

## 13. Row-Reconciliation Handoff Counts
| Input count | Approved/revised | Cuts | Deferred | Human-check | Proceeding |
| --- | --- | --- | --- | --- | --- |
| 26 | 26 | 0 | 0 | 0 | 26 |

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

`READY_FOR_B1_04_ROW_RECONCILIATION`

Exact next recommended action: run row reconciliation / final inventory for B1-04.
