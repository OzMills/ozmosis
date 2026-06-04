# Ozmosis B1-05 — Schema Mapping v0.1

Module: B1-05 — First day / contract basics  
Internal planning ID: `b1_m05_first_day_contract_basics`  
Status: schema-planning only. Not app-ready JSON.

## 1. Source Verification
| Source | Available? | Used for | Reliability | Notes |
| --- | --- | --- | --- | --- |
| ozmosis_b1_m05_first_day_contract_basics_final_inventory_v0_1.md | Yes | Clean final inventory | High | 20 rows. |
| ozmosis_b1_m05_first_day_contract_basics_phase3a_qa_approved_v0_1.md | Yes | QA decisions | High | All rows accounted for. |
| Pipeline core | Yes | Schema/evidence/support rules | High | Used for mapping assumptions. |

## 2. Schema Mapping Intake Check
| Check | Result |
| --- | --- |
| Clean survivor rows | 20 |
| Variant-family candidates | 4 |
| Cut rows included? | No |
| Production auto-graded? | No |
| Ready to map? | Yes |

## 3. Mapping Assumptions
| Field | Value |
| --- | --- |
| displayModuleId | B1-05 |
| moduleKey | b1-05 |
| internalPlanningId | b1_m05_first_day_contract_basics |
| moduleSlug | first-day-contract-basics |
| moduleTitle | First day / contract basics |
| levelTrack | B1 |
| cefrTarget | B1 |
| supportPolicy/supportPresentation | separated |
| sibling evidence | family groups are sibling evidence only |

## 4. Target-Family Mapping Summary
| targetFamilyId | Mapped item count | Review/evidence note |
| --- | --- | --- |
| TF-B1-05-LS03-01 | 6 | Candidate family if >=3 rows; otherwise retained single items |
| TF-B1-05-LS04-01 | 4 | Candidate family if >=3 rows; otherwise retained single items |
| TF-B1-05-LS07-01 | 1 | Candidate family if >=3 rows; otherwise retained single items |
| TF-B1-05-LS08-01 | 4 | Candidate family if >=3 rows; otherwise retained single items |
| TF-B1-05-LS08-02 | 3 | Candidate family if >=3 rows; otherwise retained single items |
| TF-B1-05-LS10-01 | 2 | Candidate family if >=3 rows; otherwise retained single items |

## 5. Item Mapping Summary
| itemId | targetFamilyId | targetId | taskType | answerMode | answerShape | correctnessPolicy | canonicalAnswer | evidenceType | supportPolicy | supportPresentation | reviewEligibilityDefault |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| draft_b1_05_001 | TF-B1-05-LS08-01 | T-B1-05-LS08-01-01 | notice | model_only | model_only | excluded | — | excluded | None | no_english_needed | not_review_eligible |
| draft_b1_05_002 | TF-B1-05-LS03-01 | T-B1-05-LS03-01-01 | notice | model_only | model_only | excluded | — | excluded | None | no_english_needed | not_review_eligible |
| draft_b1_05_003 | TF-B1-05-LS04-01 | T-B1-05-LS04-01-01 | notice | model_only | model_only | excluded | — | excluded | None | no_english_needed | not_review_eligible |
| draft_b1_05_004 | TF-B1-05-LS08-01 | T-B1-05-LS08-01-01 | Auswahl | selected_choice_value | selected_choice_value | exact_or_normalised_if_supported | der Arbeitsvertrag | auto_supported | None | english_visible_before_answer | weakly_eligible_after_delay |
| draft_b1_05_005 | TF-B1-05-LS08-01 | T-B1-05-LS08-01-02 | Auswahl | selected_choice_value | selected_choice_value | exact_or_normalised_if_supported | die Probezeit | auto_supported | None | english_visible_before_answer | weakly_eligible_after_delay |
| draft_b1_05_006 | TF-B1-05-LS04-01 | T-B1-05-LS04-01-01 | Luecke | typed_short | short_answer | exact_or_normalised_if_supported | muss | auto_core | None | english_visible_before_answer | eligible_auto_after_delay |
| draft_b1_05_007 | TF-B1-05-LS08-02 | T-B1-05-LS08-02-01 | Luecke | typed_short | short_answer | exact_or_normalised_if_supported | mitbringen | auto_core | None | english_visible_before_answer | eligible_auto_after_delay |
| draft_b1_05_008 | TF-B1-05-LS08-02 | T-B1-05-LS08-02-02 | Luecke | typed_short | short_answer | exact_or_normalised_if_supported | unterschreiben | auto_core | None | english_visible_before_answer | eligible_auto_after_delay |
| draft_b1_05_009 | TF-B1-05-LS03-01 | T-B1-05-LS03-01-01 | Luecke | typed_short | short_answer | exact_or_normalised_if_supported | im | auto_core | None | english_visible_before_answer | eligible_auto_after_delay |
| draft_b1_05_010 | TF-B1-05-LS03-01 | T-B1-05-LS03-01-02 | Luecke | typed_short | short_answer | exact_or_normalised_if_supported | ins | auto_core | None | english_visible_before_answer | eligible_auto_after_delay |
| draft_b1_05_011 | TF-B1-05-LS07-01 | T-B1-05-LS07-01-01 | Satzbau | sentence_order | ordered_chunks | exact_or_normalised_if_supported | Wo ist das Personalbüro? | auto_core | None | english_visible_before_answer | eligible_auto_after_delay |
| draft_b1_05_012 | TF-B1-05-LS04-01 | T-B1-05-LS04-01-02 | Satzbau | sentence_order | ordered_chunks | exact_or_normalised_if_supported | Darf ich hier warten? | auto_core | None | english_visible_before_answer | eligible_auto_after_delay |
| draft_b1_05_013 | TF-B1-05-LS04-01 | T-B1-05-LS04-01-01 | Reparatur | repair_text | repaired_sentence | exact_or_normalised_if_supported | Ich muss den Vertrag unterschreiben. | auto_core | None | english_visible_before_answer | eligible_auto_after_delay |
| draft_b1_05_014 | TF-B1-05-LS03-01 | T-B1-05-LS03-01-02 | Reparatur | repair_text | repaired_sentence | exact_or_normalised_if_supported | Ich gehe ins Personalbüro. | auto_core | None | english_visible_before_answer | eligible_auto_after_delay |
| draft_b1_05_015 | TF-B1-05-LS08-02 | T-B1-05-LS08-02-02 | Reparatur | repair_text | repaired_sentence | exact_or_normalised_if_supported | Ich unterschreibe den Vertrag. | auto_core | None | english_visible_before_answer | eligible_auto_after_delay |
| draft_b1_05_016 | TF-B1-05-LS03-01 | T-B1-05-LS03-01-01 | Kontrast | typed_short | short_answer | exact_or_normalised_if_supported | im | auto_supported | None | english_visible_before_answer | weakly_eligible_after_delay |
| draft_b1_05_017 | TF-B1-05-LS03-01 | T-B1-05-LS03-01-02 | Kontrast | typed_short | short_answer | exact_or_normalised_if_supported | ins | auto_supported | None | english_visible_before_answer | weakly_eligible_after_delay |
| draft_b1_05_018 | TF-B1-05-LS08-01 | T-B1-05-LS08-01-02 | Kontrast | typed_short | short_answer | exact_or_normalised_if_supported | die Probezeit | auto_supported | None | english_visible_before_answer | weakly_eligible_after_delay |
| draft_b1_05_019 | TF-B1-05-LS10-01 | T-B1-05-LS10-01-01 | Produktion | self_marked | self_marked_response | self-marked | self-marked | self_marked_production | None | production_checklist_only | not_review_eligible |
| draft_b1_05_020 | TF-B1-05-LS10-01 | T-B1-05-LS10-01-02 | Produktion | self_marked | self_marked_response | self-marked | self-marked | self_marked_production | None | production_checklist_only | not_review_eligible |

## 6. Variant-Family Mapping, if any
| variantFamilyPlanningId | targetFamilyId | siblingVariantGroup | maxSameSessionEvidence | variantCount | evidence caveat |
| --- | --- | --- | --- | --- | --- |
| b1-05-tf-b1-05-ls08-01-vf-001 | TF-B1-05-LS08-01 | rg-b1-05-tf-b1-05-ls08-01-siblings | 1 | 3 | Sibling evidence only |
| b1-05-tf-b1-05-ls04-01-vf-001 | TF-B1-05-LS04-01 | rg-b1-05-tf-b1-05-ls04-01-siblings | 1 | 3 | Sibling evidence only |
| b1-05-tf-b1-05-ls08-02-vf-001 | TF-B1-05-LS08-02 | rg-b1-05-tf-b1-05-ls08-02-siblings | 1 | 3 | Sibling evidence only |
| b1-05-tf-b1-05-ls03-01-vf-001 | TF-B1-05-LS03-01 | rg-b1-05-tf-b1-05-ls03-01-siblings | 1 | 5 | Sibling evidence only |

## 7. Full Item-by-Item Metadata Mapping
All clean items are mapped in the item summary. Full app field names must be adapted to current code conventions during implementation planning.


## 8. Evidence / Review Integrity Ledger
| EvidenceType | Count | Review impact |
| --- | --- | --- |
| auto_core | 10 | eligible after delay if stable |
| auto_supported | 5 | weak/conservative after delay |
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

`READY_FOR_B1_05_IMPORT_PLAN`

Exact next recommended action: create the Codex import plan for B1-05.
