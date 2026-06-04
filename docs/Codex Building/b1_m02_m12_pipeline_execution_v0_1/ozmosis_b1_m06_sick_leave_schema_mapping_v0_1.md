# Ozmosis B1-06 — Schema Mapping v0.1

Module: B1-06 — Sick leave  
Internal planning ID: `b1_m06_sick_leave`  
Status: schema-planning only. Not app-ready JSON.

## 1. Source Verification
| Source | Available? | Used for | Reliability | Notes |
| --- | --- | --- | --- | --- |
| ozmosis_b1_m06_sick_leave_final_inventory_v0_1.md | Yes | Clean final inventory | High | 20 rows. |
| ozmosis_b1_m06_sick_leave_phase3a_qa_approved_v0_1.md | Yes | QA decisions | High | All rows accounted for. |
| Pipeline core | Yes | Schema/evidence/support rules | High | Used for mapping assumptions. |

## 2. Schema Mapping Intake Check
| Check | Result |
| --- | --- |
| Clean survivor rows | 20 |
| Variant-family candidates | 2 |
| Cut rows included? | No |
| Production auto-graded? | No |
| Ready to map? | Yes |

## 3. Mapping Assumptions
| Field | Value |
| --- | --- |
| displayModuleId | B1-06 |
| moduleKey | b1-06 |
| internalPlanningId | b1_m06_sick_leave |
| moduleSlug | sick-leave |
| moduleTitle | Sick leave |
| levelTrack | B1 |
| cefrTarget | B1 |
| supportPolicy/supportPresentation | separated |
| sibling evidence | family groups are sibling evidence only |

## 4. Target-Family Mapping Summary
| targetFamilyId | Mapped item count | Review/evidence note |
| --- | --- | --- |
| TF-B1-06-LS03-01 | 1 | Candidate family if >=3 rows; otherwise retained single items |
| TF-B1-06-LS06-01 | 7 | Candidate family if >=3 rows; otherwise retained single items |
| TF-B1-06-LS07-01 | 5 | Candidate family if >=3 rows; otherwise retained single items |
| TF-B1-06-LS07-02 | 1 | Candidate family if >=3 rows; otherwise retained single items |
| TF-B1-06-LS08-01 | 2 | Candidate family if >=3 rows; otherwise retained single items |
| TF-B1-06-LS08-02 | 2 | Candidate family if >=3 rows; otherwise retained single items |
| TF-B1-06-LS10-01 | 2 | Candidate family if >=3 rows; otherwise retained single items |

## 5. Item Mapping Summary
| itemId | targetFamilyId | targetId | taskType | answerMode | answerShape | correctnessPolicy | canonicalAnswer | evidenceType | supportPolicy | supportPresentation | reviewEligibilityDefault |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| draft_b1_06_001 | TF-B1-06-LS07-01 | T-B1-06-LS07-01-01 | notice | model_only | model_only | excluded | — | excluded | None | no_english_needed | not_review_eligible |
| draft_b1_06_002 | TF-B1-06-LS06-01 | T-B1-06-LS06-01-01 | notice | model_only | model_only | excluded | — | excluded | None | no_english_needed | not_review_eligible |
| draft_b1_06_003 | TF-B1-06-LS08-01 | T-B1-06-LS08-01-01 | notice | model_only | model_only | excluded | — | excluded | None | no_english_needed | not_review_eligible |
| draft_b1_06_004 | TF-B1-06-LS08-01 | T-B1-06-LS08-01-01 | Auswahl | selected_choice_value | selected_choice_value | exact_or_normalised_if_supported | die Krankmeldung | auto_supported | None | english_visible_before_answer | weakly_eligible_after_delay |
| draft_b1_06_005 | TF-B1-06-LS07-02 | T-B1-06-LS07-02-02 | Auswahl | selected_choice_value | selected_choice_value | exact_or_normalised_if_supported | den Arbeitgeber | auto_supported | None | english_visible_before_answer | weakly_eligible_after_delay |
| draft_b1_06_006 | TF-B1-06-LS07-01 | T-B1-06-LS07-01-01 | Luecke | typed_short | short_answer | exact_or_normalised_if_supported | krank | auto_core | None | english_visible_before_answer | eligible_auto_after_delay |
| draft_b1_06_007 | TF-B1-06-LS07-01 | T-B1-06-LS07-01-02 | Luecke | typed_short | short_answer | exact_or_normalised_if_supported | kommen | auto_core | None | english_visible_before_answer | eligible_auto_after_delay |
| draft_b1_06_008 | TF-B1-06-LS06-01 | T-B1-06-LS06-01-01 | Luecke | typed_short | short_answer | exact_or_normalised_if_supported | bin | auto_core | None | english_visible_before_answer | eligible_auto_after_delay |
| draft_b1_06_009 | TF-B1-06-LS06-01 | T-B1-06-LS06-01-03 | Luecke | typed_short | short_answer | exact_or_normalised_if_supported | Deshalb | auto_core | None | english_visible_before_answer | eligible_auto_after_delay |
| draft_b1_06_010 | TF-B1-06-LS08-02 | T-B1-06-LS08-02-03 | Luecke | typed_short | short_answer | exact_or_normalised_if_supported | informieren | auto_core | None | english_visible_before_answer | eligible_auto_after_delay |
| draft_b1_06_011 | TF-B1-06-LS03-01 | T-B1-06-LS03-01-02 | Luecke | typed_short | short_answer | exact_or_normalised_if_supported | bis | auto_core | None | english_visible_before_answer | eligible_auto_after_delay |
| draft_b1_06_012 | TF-B1-06-LS07-01 | T-B1-06-LS07-01-02 | Satzbau | sentence_order | ordered_chunks | exact_or_normalised_if_supported | Ich kann heute nicht kommen. | auto_core | None | english_visible_before_answer | eligible_auto_after_delay |
| draft_b1_06_013 | TF-B1-06-LS06-01 | T-B1-06-LS06-01-01 | Satzbau | sentence_order | ordered_chunks | exact_or_normalised_if_supported | Ich komme nicht, weil ich krank bin. | auto_core | None | english_visible_before_answer | eligible_auto_after_delay |
| draft_b1_06_014 | TF-B1-06-LS06-01 | T-B1-06-LS06-01-01 | Reparatur | repair_text | repaired_sentence | exact_or_normalised_if_supported | Ich komme nicht, weil ich krank bin. | auto_core | None | english_visible_before_answer | eligible_auto_after_delay |
| draft_b1_06_015 | TF-B1-06-LS06-01 | T-B1-06-LS06-01-03 | Reparatur | repair_text | repaired_sentence | exact_or_normalised_if_supported | Deshalb komme ich heute nicht. | auto_core | None | english_visible_before_answer | eligible_auto_after_delay |
| draft_b1_06_016 | TF-B1-06-LS08-02 | T-B1-06-LS08-02-03 | Reparatur | repair_text | repaired_sentence | exact_or_normalised_if_supported | Ich informiere den Arbeitgeber. | auto_supported | None | english_visible_before_answer | weakly_eligible_after_delay |
| draft_b1_06_017 | TF-B1-06-LS07-01 | T-B1-06-LS07-01-01 | Kontrast | typed_short | short_answer | exact_or_normalised_if_supported | krank | auto_supported | None | english_visible_before_answer | weakly_eligible_after_delay |
| draft_b1_06_018 | TF-B1-06-LS06-01 | T-B1-06-LS06-01-01 | Kontrast | typed_short | short_answer | exact_or_normalised_if_supported | weil | auto_supported | None | english_visible_before_answer | weakly_eligible_after_delay |
| draft_b1_06_019 | TF-B1-06-LS10-01 | T-B1-06-LS10-01-01 | Produktion | self_marked | self_marked_response | self-marked | self-marked | self_marked_production | None | production_checklist_only | not_review_eligible |
| draft_b1_06_020 | TF-B1-06-LS10-01 | T-B1-06-LS10-01-02 | Produktion | self_marked | self_marked_response | self-marked | self-marked | self_marked_production | None | production_checklist_only | not_review_eligible |

## 6. Variant-Family Mapping, if any
| variantFamilyPlanningId | targetFamilyId | siblingVariantGroup | maxSameSessionEvidence | variantCount | evidence caveat |
| --- | --- | --- | --- | --- | --- |
| b1-06-tf-b1-06-ls07-01-vf-001 | TF-B1-06-LS07-01 | rg-b1-06-tf-b1-06-ls07-01-siblings | 1 | 4 | Sibling evidence only |
| b1-06-tf-b1-06-ls06-01-vf-001 | TF-B1-06-LS06-01 | rg-b1-06-tf-b1-06-ls06-01-siblings | 1 | 6 | Sibling evidence only |

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

`READY_FOR_B1_06_IMPORT_PLAN`

Exact next recommended action: create the Codex import plan for B1-06.
