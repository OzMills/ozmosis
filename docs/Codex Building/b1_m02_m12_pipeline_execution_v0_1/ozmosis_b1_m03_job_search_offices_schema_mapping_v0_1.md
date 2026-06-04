# Ozmosis B1-03 — Schema Mapping v0.1

Module: B1-03 — Job search / offices  
Internal planning ID: `b1_m03_job_search_offices`  
Status: schema-planning only. Not app-ready JSON.

## 1. Source Verification
| Source | Available? | Used for | Reliability | Notes |
| --- | --- | --- | --- | --- |
| ozmosis_b1_m03_job_search_offices_final_inventory_v0_1.md | Yes | Clean final inventory | High | 28 rows. |
| ozmosis_b1_m03_job_search_offices_phase3a_qa_approved_v0_1.md | Yes | QA decisions | High | All rows accounted for. |
| Pipeline core | Yes | Schema/evidence/support rules | High | Used for mapping assumptions. |

## 2. Schema Mapping Intake Check
| Check | Result |
| --- | --- |
| Clean survivor rows | 28 |
| Variant-family candidates | 5 |
| Cut rows included? | No |
| Production auto-graded? | No |
| Ready to map? | Yes |

## 3. Mapping Assumptions
| Field | Value |
| --- | --- |
| displayModuleId | B1-03 |
| moduleKey | b1-03 |
| internalPlanningId | b1_m03_job_search_offices |
| moduleSlug | job-search-offices |
| moduleTitle | Job search / offices |
| levelTrack | B1 |
| cefrTarget | B1 |
| supportPolicy/supportPresentation | separated |
| sibling evidence | family groups are sibling evidence only |

## 4. Target-Family Mapping Summary
| targetFamilyId | Mapped item count | Review/evidence note |
| --- | --- | --- |
| TF-B1-03-LS03-01 | 3 | Candidate family if >=3 rows; otherwise retained single items |
| TF-B1-03-LS04-01 | 4 | Candidate family if >=3 rows; otherwise retained single items |
| TF-B1-03-LS05-01 | 5 | Candidate family if >=3 rows; otherwise retained single items |
| TF-B1-03-LS07-01 | 3 | Candidate family if >=3 rows; otherwise retained single items |
| TF-B1-03-LS08-01 | 3 | Candidate family if >=3 rows; otherwise retained single items |
| TF-B1-03-LS08-02 | 8 | Candidate family if >=3 rows; otherwise retained single items |
| TF-B1-03-LS10-01 | 2 | Candidate family if >=3 rows; otherwise retained single items |

## 5. Item Mapping Summary
| itemId | targetFamilyId | targetId | taskType | answerMode | answerShape | correctnessPolicy | canonicalAnswer | evidenceType | supportPolicy | supportPresentation | reviewEligibilityDefault |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| draft_b1_03_001 | TF-B1-03-LS08-02 | T-B1-03-LS08-02-01 | notice | model_only | model_only | excluded | — | excluded | None | no_english_needed | not_review_eligible |
| draft_b1_03_002 | TF-B1-03-LS05-01 | T-B1-03-LS05-01-01 | notice | model_only | model_only | excluded | — | excluded | None | no_english_needed | not_review_eligible |
| draft_b1_03_003 | TF-B1-03-LS03-01 | T-B1-03-LS03-01-02 | notice | model_only | model_only | excluded | — | excluded | None | no_english_needed | not_review_eligible |
| draft_b1_03_004 | TF-B1-03-LS08-01 | T-B1-03-LS08-01-01 | Auswahl | selected_choice_value | selected_choice_value | exact_or_normalised_if_supported | das Formular | auto_supported | None | english_visible_before_answer | weakly_eligible_after_delay |
| draft_b1_03_005 | TF-B1-03-LS08-02 | T-B1-03-LS08-02-01 | Auswahl | selected_choice_value | selected_choice_value | exact_or_normalised_if_supported | stellen | auto_supported | None | english_visible_before_answer | weakly_eligible_after_delay |
| draft_b1_03_006 | TF-B1-03-LS05-01 | T-B1-03-LS05-01-02 | Auswahl | selected_choice_value | selected_choice_value | exact_or_normalised_if_supported | Wer ist zuständig für...? | auto_supported | None | english_visible_before_answer | weakly_eligible_after_delay |
| draft_b1_03_007 | TF-B1-03-LS08-02 | T-B1-03-LS08-02-01 | Luecke | typed_short | short_answer | exact_or_normalised_if_supported | stellen | auto_core | None | english_visible_before_answer | eligible_auto_after_delay |
| draft_b1_03_008 | TF-B1-03-LS08-02 | T-B1-03-LS08-02-02 | Luecke | typed_short | short_answer | exact_or_normalised_if_supported | ausfüllen | auto_core | None | english_visible_before_answer | eligible_auto_after_delay |
| draft_b1_03_009 | TF-B1-03-LS08-02 | T-B1-03-LS08-02-03 | Luecke | typed_short | short_answer | exact_or_normalised_if_supported | einreichen | auto_core | None | english_visible_before_answer | eligible_auto_after_delay |
| draft_b1_03_010 | TF-B1-03-LS04-01 | T-B1-03-LS04-01-01 | Luecke | typed_short | short_answer | exact_or_normalised_if_supported | muss | auto_core | None | english_visible_before_answer | eligible_auto_after_delay |
| draft_b1_03_011 | TF-B1-03-LS04-01 | T-B1-03-LS04-01-02 | Luecke | typed_short | short_answer | exact_or_normalised_if_supported | Soll | auto_core | None | english_visible_before_answer | eligible_auto_after_delay |
| draft_b1_03_012 | TF-B1-03-LS05-01 | T-B1-03-LS05-01-01 | Luecke | typed_short | short_answer | exact_or_normalised_if_supported | bei | auto_core | None | english_visible_before_answer | eligible_auto_after_delay |
| draft_b1_03_013 | TF-B1-03-LS05-01 | T-B1-03-LS05-01-02 | Luecke | typed_short | short_answer | exact_or_normalised_if_supported | für | auto_core | None | english_visible_before_answer | eligible_auto_after_delay |
| draft_b1_03_014 | TF-B1-03-LS03-01 | T-B1-03-LS03-01-02 | Luecke | typed_short | short_answer | exact_or_normalised_if_supported | bis | auto_core | None | english_visible_before_answer | eligible_auto_after_delay |
| draft_b1_03_015 | TF-B1-03-LS07-01 | T-B1-03-LS07-01-01 | Satzbau | sentence_order | ordered_chunks | exact_or_normalised_if_supported | Welche Unterlagen brauche ich? | auto_core | None | english_visible_before_answer | eligible_auto_after_delay |
| draft_b1_03_016 | TF-B1-03-LS07-01 | T-B1-03-LS07-01-02 | Satzbau | sentence_order | ordered_chunks | exact_or_normalised_if_supported | Wo gebe ich das Formular ab? | auto_core | None | english_visible_before_answer | eligible_auto_after_delay |
| draft_b1_03_017 | TF-B1-03-LS04-01 | T-B1-03-LS04-01-04 | Satzbau | sentence_order | ordered_chunks | exact_or_normalised_if_supported | Ich muss den Antrag stellen. | auto_core | None | english_visible_before_answer | eligible_auto_after_delay |
| draft_b1_03_018 | TF-B1-03-LS08-02 | T-B1-03-LS08-02-01 | Reparatur | repair_text | repaired_sentence | exact_or_normalised_if_supported | Ich stelle einen Antrag. | auto_supported | None | english_visible_before_answer | weakly_eligible_after_delay |
| draft_b1_03_019 | TF-B1-03-LS08-02 | T-B1-03-LS08-02-02 | Reparatur | repair_text | repaired_sentence | exact_or_normalised_if_supported | Ich fülle das Formular aus. | auto_core | None | english_visible_before_answer | eligible_auto_after_delay |
| draft_b1_03_020 | TF-B1-03-LS05-01 | T-B1-03-LS05-01-02 | Reparatur | repair_text | repaired_sentence | exact_or_normalised_if_supported | Wer ist zuständig für den Antrag? | auto_core | None | english_visible_before_answer | eligible_auto_after_delay |
| draft_b1_03_021 | TF-B1-03-LS04-01 | T-B1-03-LS04-01-01 | Reparatur | repair_text | repaired_sentence | exact_or_normalised_if_supported | Ich muss die Unterlagen abgeben. | auto_core | None | english_visible_before_answer | eligible_auto_after_delay |
| draft_b1_03_022 | TF-B1-03-LS03-01 | T-B1-03-LS03-01-02 | Reparatur | repair_text | repaired_sentence | exact_or_normalised_if_supported | Ich gebe die Unterlagen bis Freitag ab. | auto_core | None | english_visible_before_answer | eligible_auto_after_delay |
| draft_b1_03_023 | TF-B1-03-LS08-01 | T-B1-03-LS08-01-01 | Kontrast | typed_short | short_answer | exact_or_normalised_if_supported | das Formular | auto_supported | None | english_visible_before_answer | weakly_eligible_after_delay |
| draft_b1_03_024 | TF-B1-03-LS08-01 | T-B1-03-LS08-01-02 | Kontrast | typed_short | short_answer | exact_or_normalised_if_supported | der Nachweis | auto_supported | None | english_visible_before_answer | weakly_eligible_after_delay |
| draft_b1_03_025 | TF-B1-03-LS08-02 | T-B1-03-LS08-02-03 | Kontrast | typed_short | short_answer | exact_or_normalised_if_supported | einreichen | auto_supported | None | english_visible_before_answer | weakly_eligible_after_delay |
| draft_b1_03_026 | TF-B1-03-LS07-01 | T-B1-03-LS07-01-01 | Umformen | transformation_text | transformed_sentence | exact_or_normalised_if_supported | Welche Unterlagen brauche ich? | auto_core | None | english_visible_before_answer | eligible_auto_after_delay |
| draft_b1_03_027 | TF-B1-03-LS10-01 | T-B1-03-LS10-01-01 | Produktion | self_marked | self_marked_response | self-marked | self-marked | self_marked_production | None | production_checklist_only | not_review_eligible |
| draft_b1_03_028 | TF-B1-03-LS10-01 | T-B1-03-LS10-01-02 | Produktion | self_marked | self_marked_response | self-marked | self-marked | self_marked_production | None | production_checklist_only | not_review_eligible |

## 6. Variant-Family Mapping, if any
| variantFamilyPlanningId | targetFamilyId | siblingVariantGroup | maxSameSessionEvidence | variantCount | evidence caveat |
| --- | --- | --- | --- | --- | --- |
| b1-03-tf-b1-03-ls08-01-vf-001 | TF-B1-03-LS08-01 | rg-b1-03-tf-b1-03-ls08-01-siblings | 1 | 3 | Sibling evidence only |
| b1-03-tf-b1-03-ls08-02-vf-001 | TF-B1-03-LS08-02 | rg-b1-03-tf-b1-03-ls08-02-siblings | 1 | 7 | Sibling evidence only |
| b1-03-tf-b1-03-ls05-01-vf-001 | TF-B1-03-LS05-01 | rg-b1-03-tf-b1-03-ls05-01-siblings | 1 | 4 | Sibling evidence only |
| b1-03-tf-b1-03-ls04-01-vf-001 | TF-B1-03-LS04-01 | rg-b1-03-tf-b1-03-ls04-01-siblings | 1 | 4 | Sibling evidence only |
| b1-03-tf-b1-03-ls07-01-vf-001 | TF-B1-03-LS07-01 | rg-b1-03-tf-b1-03-ls07-01-siblings | 1 | 3 | Sibling evidence only |

## 7. Full Item-by-Item Metadata Mapping
All clean items are mapped in the item summary. Full app field names must be adapted to current code conventions during implementation planning.


## 8. Evidence / Review Integrity Ledger
| EvidenceType | Count | Review impact |
| --- | --- | --- |
| auto_core | 16 | eligible after delay if stable |
| auto_supported | 7 | weak/conservative after delay |
| excluded | 3 | not review eligible |
| self_marked_production | 2 | not review eligible |

## 9. SupportPolicy / SupportPresentation Ledger
Visible English support maps to `english_visible_before_answer`; production maps to `production_checklist_only`; notice cards map to `no_english_needed` or equivalent.


## 10. Cue / Translation Alignment Ledger
No cue/person blockers detected in mapped rows. Instruction prompts remain instructions rather than translations.


## 11. Fallback / Capitalisation / Ambiguity Ledger
Capitalisation/punctuation flexibility must be exact-only unless current app supports correct-with-note. Ambiguous synonym rows remain weak until accepted-answer policy is explicit.


## 12. Cut / Exclusion Schema Ledger
No cut/deferred rows from QA are included in this clean mapping.


## 13. Import-Planning Caveats
Codex must inspect current app files before implementation. Do not assume routes, registries, renderers, or storage shape from planning files.


## 14. Final QA Checklist
| Check | Status |
| --- | --- |
| clean rows mapped | Pass |
| cuts excluded | Pass |
| production not auto-graded | Pass |
| support/evidence separated | Pass |
| no app-ready JSON | Pass |
| ready for import plan | Pass |

## 15. Final Verdict

`READY_FOR_B1_03_IMPORT_PLAN`

Exact next recommended action: create the Codex import plan for B1-03.
