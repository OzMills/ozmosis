# Ozmosis B1-02 — Schema Mapping v0.1

Module: B1-02 — Appointments / callbacks  
Internal planning ID: `b1_m02_appointments_callbacks`  
Status: schema-planning only. Not app-ready JSON.

## 1. Source Verification
| Source | Available? | Used for | Reliability | Notes |
| --- | --- | --- | --- | --- |
| ozmosis_b1_m02_appointments_callbacks_final_inventory_v0_1.md | Yes | Clean final inventory | High | 30 rows. |
| ozmosis_b1_m02_appointments_callbacks_phase3a_qa_approved_v0_1.md | Yes | QA decisions | High | All rows accounted for. |
| Pipeline core | Yes | Schema/evidence/support rules | High | Used for mapping assumptions. |

## 2. Schema Mapping Intake Check
| Check | Result |
| --- | --- |
| Clean survivor rows | 30 |
| Variant-family candidates | 4 |
| Cut rows included? | No |
| Production auto-graded? | No |
| Ready to map? | Yes |

## 3. Mapping Assumptions
| Field | Value |
| --- | --- |
| displayModuleId | B1-02 |
| moduleKey | b1-02 |
| internalPlanningId | b1_m02_appointments_callbacks |
| moduleSlug | appointments-callbacks |
| moduleTitle | Appointments / callbacks |
| levelTrack | B1 |
| cefrTarget | B1 |
| supportPolicy/supportPresentation | separated |
| sibling evidence | family groups are sibling evidence only |

## 4. Target-Family Mapping Summary
| targetFamilyId | Mapped item count | Review/evidence note |
| --- | --- | --- |
| TF-B1-02-LS03-01 | 4 | Candidate family if >=3 rows; otherwise retained single items |
| TF-B1-02-LS03-02 | 2 | Candidate family if >=3 rows; otherwise retained single items |
| TF-B1-02-LS04-01 | 3 | Candidate family if >=3 rows; otherwise retained single items |
| TF-B1-02-LS07-01 | 2 | Candidate family if >=3 rows; otherwise retained single items |
| TF-B1-02-LS07-02 | 6 | Candidate family if >=3 rows; otherwise retained single items |
| TF-B1-02-LS08-01 | 10 | Candidate family if >=3 rows; otherwise retained single items |
| TF-B1-02-LS10-01 | 3 | Candidate family if >=3 rows; otherwise retained single items |

## 5. Item Mapping Summary
| itemId | targetFamilyId | targetId | taskType | answerMode | answerShape | correctnessPolicy | canonicalAnswer | evidenceType | supportPolicy | supportPresentation | reviewEligibilityDefault |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| draft_b1_02_001 | TF-B1-02-LS08-01 | T-B1-02-LS08-01-01 | notice | model_only | model_only | excluded | — | excluded | None | no_english_needed | not_review_eligible |
| draft_b1_02_002 | TF-B1-02-LS07-02 | T-B1-02-LS07-02-01 | notice | model_only | model_only | excluded | — | excluded | None | no_english_needed | not_review_eligible |
| draft_b1_02_003 | TF-B1-02-LS03-02 | T-B1-02-LS03-02-01 | notice | model_only | model_only | excluded | — | excluded | None | no_english_needed | not_review_eligible |
| draft_b1_02_004 | TF-B1-02-LS08-01 | T-B1-02-LS08-01-01 | Auswahl | selected_choice_value | selected_choice_value | exact_or_normalised_if_supported | vereinbaren | auto_supported | None | english_visible_before_answer | weakly_eligible_after_delay |
| draft_b1_02_005 | TF-B1-02-LS08-01 | T-B1-02-LS08-01-02 | Auswahl | selected_choice_value | selected_choice_value | exact_or_normalised_if_supported | verschieben | auto_supported | None | english_visible_before_answer | weakly_eligible_after_delay |
| draft_b1_02_006 | TF-B1-02-LS07-02 | T-B1-02-LS07-02-01 | Auswahl | selected_choice_value | selected_choice_value | exact_or_normalised_if_supported | um Rückruf bitten | auto_supported | None | english_visible_before_answer | weakly_eligible_after_delay |
| draft_b1_02_007 | TF-B1-02-LS08-01 | T-B1-02-LS08-01-01 | Luecke | typed_short | short_answer | exact_or_normalised_if_supported | vereinbaren | auto_core | None | english_visible_before_answer | eligible_auto_after_delay |
| draft_b1_02_008 | TF-B1-02-LS08-01 | T-B1-02-LS08-01-02 | Luecke | typed_short | short_answer | exact_or_normalised_if_supported | verschieben | auto_core | None | english_visible_before_answer | eligible_auto_after_delay |
| draft_b1_02_009 | TF-B1-02-LS08-01 | T-B1-02-LS08-01-03 | Luecke | typed_short | short_answer | exact_or_normalised_if_supported | absagen | auto_core | None | english_visible_before_answer | eligible_auto_after_delay |
| draft_b1_02_010 | TF-B1-02-LS07-02 | T-B1-02-LS07-02-01 | Luecke | typed_short | short_answer | exact_or_normalised_if_supported | Rückruf | auto_core | None | english_visible_before_answer | eligible_auto_after_delay |
| draft_b1_02_011 | TF-B1-02-LS04-01 | T-B1-02-LS04-01-01 | Luecke | typed_short | short_answer | exact_or_normalised_if_supported | Kann | auto_core | None | english_visible_before_answer | eligible_auto_after_delay |
| draft_b1_02_012 | TF-B1-02-LS03-01 | T-B1-02-LS03-01-01 | Luecke | typed_short | short_answer | exact_or_normalised_if_supported | um | auto_core | None | english_visible_before_answer | eligible_auto_after_delay |
| draft_b1_02_013 | TF-B1-02-LS03-01 | T-B1-02-LS03-01-01 | Luecke | typed_short | short_answer | exact_or_normalised_if_supported | am | auto_core | None | english_visible_before_answer | eligible_auto_after_delay |
| draft_b1_02_014 | TF-B1-02-LS03-02 | T-B1-02-LS03-02-01 | Luecke | typed_short | short_answer | exact_or_normalised_if_supported | bei | auto_supported | None | english_visible_before_answer | weakly_eligible_after_delay |
| draft_b1_02_015 | TF-B1-02-LS07-01 | T-B1-02-LS07-01-01 | Satzbau | sentence_order | ordered_chunks | exact_or_normalised_if_supported | Ich möchte einen Termin vereinbaren. | auto_core | None | english_visible_before_answer | eligible_auto_after_delay |
| draft_b1_02_016 | TF-B1-02-LS04-01 | T-B1-02-LS04-01-01 | Satzbau | sentence_order | ordered_chunks | exact_or_normalised_if_supported | Kann ich einen Termin bekommen? | auto_core | None | english_visible_before_answer | eligible_auto_after_delay |
| draft_b1_02_017 | TF-B1-02-LS07-02 | T-B1-02-LS07-02-01 | Satzbau | sentence_order | ordered_chunks | exact_or_normalised_if_supported | Ich bitte um Rückruf. | auto_core | None | english_visible_before_answer | eligible_auto_after_delay |
| draft_b1_02_018 | TF-B1-02-LS08-01 | T-B1-02-LS08-01-01 | Reparatur | repair_text | repaired_sentence | exact_or_normalised_if_supported | Ich möchte einen Termin vereinbaren. | auto_supported | None | english_visible_before_answer | weakly_eligible_after_delay |
| draft_b1_02_019 | TF-B1-02-LS08-01 | T-B1-02-LS08-01-02 | Reparatur | repair_text | repaired_sentence | exact_or_normalised_if_supported | Ich muss den Termin verschieben. | auto_core | None | english_visible_before_answer | eligible_auto_after_delay |
| draft_b1_02_020 | TF-B1-02-LS07-02 | T-B1-02-LS07-02-01 | Reparatur | repair_text | repaired_sentence | exact_or_normalised_if_supported | Ich bitte um Rückruf. | auto_core | None | english_visible_before_answer | eligible_auto_after_delay |
| draft_b1_02_021 | TF-B1-02-LS04-01 | T-B1-02-LS04-01-01 | Reparatur | repair_text | repaired_sentence | exact_or_normalised_if_supported | Kann ich einen Termin bekommen? | auto_core | None | english_visible_before_answer | eligible_auto_after_delay |
| draft_b1_02_022 | TF-B1-02-LS03-01 | T-B1-02-LS03-01-01 | Reparatur | repair_text | repaired_sentence | exact_or_normalised_if_supported | Der Termin ist um 10 Uhr. | auto_core | None | english_visible_before_answer | eligible_auto_after_delay |
| draft_b1_02_023 | TF-B1-02-LS07-01 | T-B1-02-LS07-01-02 | Umformen | transformation_text | transformed_sentence | exact_or_normalised_if_supported | Kann ich einen Termin bekommen? | auto_core | None | english_visible_before_answer | eligible_auto_after_delay |
| draft_b1_02_024 | TF-B1-02-LS08-01 | T-B1-02-LS08-01-02 | Kontrast | typed_short | short_answer | exact_or_normalised_if_supported | verschieben | auto_supported | None | english_visible_before_answer | weakly_eligible_after_delay |
| draft_b1_02_025 | TF-B1-02-LS08-01 | T-B1-02-LS08-01-03 | Kontrast | typed_short | short_answer | exact_or_normalised_if_supported | absagen | auto_supported | None | english_visible_before_answer | weakly_eligible_after_delay |
| draft_b1_02_026 | TF-B1-02-LS07-02 | T-B1-02-LS07-02-01 | Kontrast | typed_short | short_answer | exact_or_normalised_if_supported | Ich bitte um Rückruf. | auto_supported | None | english_visible_before_answer | weakly_eligible_after_delay |
| draft_b1_02_027 | TF-B1-02-LS10-01 | T-B1-02-LS10-01-01 | Produktion | self_marked | self_marked_response | self-marked | self-marked | self_marked_production | None | production_checklist_only | not_review_eligible |
| draft_b1_02_028 | TF-B1-02-LS10-01 | T-B1-02-LS10-01-02 | Produktion | self_marked | self_marked_response | self-marked | self-marked | self_marked_production | None | production_checklist_only | not_review_eligible |
| draft_b1_02_029 | TF-B1-02-LS10-01 | T-B1-02-LS10-01-01 | Produktion | self_marked | self_marked_response | self-marked | self-marked | self_marked_production | None | production_checklist_only | not_review_eligible |
| draft_b1_02_030 | TF-B1-02-LS03-01 | T-B1-02-LS03-01-02 | Auswahl | selected_choice_value | selected_choice_value | exact_or_normalised_if_supported | die Sprechzeit | auto_supported | None | english_visible_before_answer | weakly_eligible_after_delay |

## 6. Variant-Family Mapping, if any
| variantFamilyPlanningId | targetFamilyId | siblingVariantGroup | maxSameSessionEvidence | variantCount | evidence caveat |
| --- | --- | --- | --- | --- | --- |
| b1-02-tf-b1-02-ls08-01-vf-001 | TF-B1-02-LS08-01 | rg-b1-02-tf-b1-02-ls08-01-siblings | 1 | 9 | Sibling evidence only |
| b1-02-tf-b1-02-ls07-02-vf-001 | TF-B1-02-LS07-02 | rg-b1-02-tf-b1-02-ls07-02-siblings | 1 | 5 | Sibling evidence only |
| b1-02-tf-b1-02-ls04-01-vf-001 | TF-B1-02-LS04-01 | rg-b1-02-tf-b1-02-ls04-01-siblings | 1 | 3 | Sibling evidence only |
| b1-02-tf-b1-02-ls03-01-vf-001 | TF-B1-02-LS03-01 | rg-b1-02-tf-b1-02-ls03-01-siblings | 1 | 4 | Sibling evidence only |

## 7. Full Item-by-Item Metadata Mapping
All clean items are mapped in the item summary. Full app field names must be adapted to current code conventions during implementation planning.


## 8. Evidence / Review Integrity Ledger
| EvidenceType | Count | Review impact |
| --- | --- | --- |
| auto_core | 15 | eligible after delay if stable |
| auto_supported | 9 | weak/conservative after delay |
| excluded | 3 | not review eligible |
| self_marked_production | 3 | not review eligible |

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

`READY_FOR_B1_02_IMPORT_PLAN`

Exact next recommended action: create the Codex import plan for B1-02.
