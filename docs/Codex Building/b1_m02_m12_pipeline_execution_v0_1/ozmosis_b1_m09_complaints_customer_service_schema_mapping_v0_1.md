# Ozmosis B1-09 — Schema Mapping v0.1

Module: B1-09 — Complaints / customer service  
Internal planning ID: `b1_m09_complaints_customer_service`  
Status: schema-planning only. Not app-ready JSON.

## 1. Source Verification
| Source | Available? | Used for | Reliability | Notes |
| --- | --- | --- | --- | --- |
| ozmosis_b1_m09_complaints_customer_service_final_inventory_v0_1.md | Yes | Clean final inventory | High | 20 rows. |
| ozmosis_b1_m09_complaints_customer_service_phase3a_qa_approved_v0_1.md | Yes | QA decisions | High | All rows accounted for. |
| Pipeline core | Yes | Schema/evidence/support rules | High | Used for mapping assumptions. |

## 2. Schema Mapping Intake Check
| Check | Result |
| --- | --- |
| Clean survivor rows | 20 |
| Variant-family candidates | 3 |
| Cut rows included? | No |
| Production auto-graded? | No |
| Ready to map? | Yes |

## 3. Mapping Assumptions
| Field | Value |
| --- | --- |
| displayModuleId | B1-09 |
| moduleKey | b1-09 |
| internalPlanningId | b1_m09_complaints_customer_service |
| moduleSlug | complaints-customer-service |
| moduleTitle | Complaints / customer service |
| levelTrack | B1 |
| cefrTarget | B1 |
| supportPolicy/supportPresentation | separated |
| sibling evidence | family groups are sibling evidence only |

## 4. Target-Family Mapping Summary
| targetFamilyId | Mapped item count | Review/evidence note |
| --- | --- | --- |
| TF-B1-09-LS05-01 | 4 | Candidate family if >=3 rows; otherwise retained single items |
| TF-B1-09-LS06-01 | 5 | Candidate family if >=3 rows; otherwise retained single items |
| TF-B1-09-LS07-01 | 3 | Candidate family if >=3 rows; otherwise retained single items |
| TF-B1-09-LS07-02 | 1 | Candidate family if >=3 rows; otherwise retained single items |
| TF-B1-09-LS08-01 | 3 | Candidate family if >=3 rows; otherwise retained single items |
| TF-B1-09-LS08-02 | 2 | Candidate family if >=3 rows; otherwise retained single items |
| TF-B1-09-LS10-01 | 2 | Candidate family if >=3 rows; otherwise retained single items |

## 5. Item Mapping Summary
| itemId | targetFamilyId | targetId | taskType | answerMode | answerShape | correctnessPolicy | canonicalAnswer | evidenceType | supportPolicy | supportPresentation | reviewEligibilityDefault |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| draft_b1_09_001 | TF-B1-09-LS07-01 | T-B1-09-LS07-01-01 | notice | model_only | model_only | excluded | — | excluded | None | no_english_needed | not_review_eligible |
| draft_b1_09_002 | TF-B1-09-LS06-01 | T-B1-09-LS06-01-01 | notice | model_only | model_only | excluded | — | excluded | None | no_english_needed | not_review_eligible |
| draft_b1_09_003 | TF-B1-09-LS05-01 | T-B1-09-LS05-01-01 | notice | model_only | model_only | excluded | — | excluded | None | no_english_needed | not_review_eligible |
| draft_b1_09_004 | TF-B1-09-LS08-01 | T-B1-09-LS08-01-01 | Auswahl | selected_choice_value | selected_choice_value | exact_or_normalised_if_supported | beschädigt | auto_supported | None | english_visible_before_answer | weakly_eligible_after_delay |
| draft_b1_09_005 | TF-B1-09-LS08-02 | T-B1-09-LS08-02-01 | Auswahl | selected_choice_value | selected_choice_value | exact_or_normalised_if_supported | der Ersatz | auto_supported | None | english_visible_before_answer | weakly_eligible_after_delay |
| draft_b1_09_006 | TF-B1-09-LS07-01 | T-B1-09-LS07-01-01 | Luecke | typed_short | short_answer | exact_or_normalised_if_supported | Problem | auto_core | None | english_visible_before_answer | eligible_auto_after_delay |
| draft_b1_09_007 | TF-B1-09-LS08-01 | T-B1-09-LS08-01-01 | Luecke | typed_short | short_answer | exact_or_normalised_if_supported | beschädigt | auto_core | None | english_visible_before_answer | eligible_auto_after_delay |
| draft_b1_09_008 | TF-B1-09-LS08-01 | T-B1-09-LS08-01-02 | Luecke | typed_short | short_answer | exact_or_normalised_if_supported | fehlt | auto_core | None | english_visible_before_answer | eligible_auto_after_delay |
| draft_b1_09_009 | TF-B1-09-LS05-01 | T-B1-09-LS05-01-01 | Luecke | typed_short | short_answer | exact_or_normalised_if_supported | um | auto_core | None | english_visible_before_answer | eligible_auto_after_delay |
| draft_b1_09_010 | TF-B1-09-LS06-01 | T-B1-09-LS06-01-01 | Luecke | typed_short | short_answer | exact_or_normalised_if_supported | Obwohl | auto_core | None | english_visible_before_answer | eligible_auto_after_delay |
| draft_b1_09_011 | TF-B1-09-LS06-01 | T-B1-09-LS06-01-02 | Luecke | typed_short | short_answer | exact_or_normalised_if_supported | Trotzdem | auto_core | None | english_visible_before_answer | eligible_auto_after_delay |
| draft_b1_09_012 | TF-B1-09-LS07-02 | T-B1-09-LS07-02-01 | Satzbau | sentence_order | ordered_chunks | exact_or_normalised_if_supported | Können Sie mir bitte helfen? | auto_core | None | english_visible_before_answer | eligible_auto_after_delay |
| draft_b1_09_013 | TF-B1-09-LS05-01 | T-B1-09-LS05-01-01 | Satzbau | sentence_order | ordered_chunks | exact_or_normalised_if_supported | Ich bitte um Ersatz. | auto_core | None | english_visible_before_answer | eligible_auto_after_delay |
| draft_b1_09_014 | TF-B1-09-LS05-01 | T-B1-09-LS05-01-01 | Reparatur | repair_text | repaired_sentence | exact_or_normalised_if_supported | Ich bitte um Ersatz. | auto_core | None | english_visible_before_answer | eligible_auto_after_delay |
| draft_b1_09_015 | TF-B1-09-LS06-01 | T-B1-09-LS06-01-02 | Reparatur | repair_text | repaired_sentence | exact_or_normalised_if_supported | Trotzdem fehlt ein Artikel. | auto_core | None | english_visible_before_answer | eligible_auto_after_delay |
| draft_b1_09_016 | TF-B1-09-LS07-01 | T-B1-09-LS07-01-02 | Reparatur | repair_text | repaired_sentence | exact_or_normalised_if_supported | Leider gibt es ein Problem. Können Sie mir bitte helfen? | auto_supported | None | english_visible_before_answer | weakly_eligible_after_delay |
| draft_b1_09_017 | TF-B1-09-LS06-01 | T-B1-09-LS06-01-01 | Kontrast | typed_short | short_answer | exact_or_normalised_if_supported | obwohl | auto_supported | None | english_visible_before_answer | weakly_eligible_after_delay |
| draft_b1_09_018 | TF-B1-09-LS08-02 | T-B1-09-LS08-02-02 | Kontrast | typed_short | short_answer | exact_or_normalised_if_supported | die Erstattung | auto_supported | None | english_visible_before_answer | weakly_eligible_after_delay |
| draft_b1_09_019 | TF-B1-09-LS10-01 | T-B1-09-LS10-01-01 | Produktion | self_marked | self_marked_response | self-marked | self-marked | self_marked_production | None | production_checklist_only | not_review_eligible |
| draft_b1_09_020 | TF-B1-09-LS10-01 | T-B1-09-LS10-01-02 | Produktion | self_marked | self_marked_response | self-marked | self-marked | self_marked_production | None | production_checklist_only | not_review_eligible |

## 6. Variant-Family Mapping, if any
| variantFamilyPlanningId | targetFamilyId | siblingVariantGroup | maxSameSessionEvidence | variantCount | evidence caveat |
| --- | --- | --- | --- | --- | --- |
| b1-09-tf-b1-09-ls08-01-vf-001 | TF-B1-09-LS08-01 | rg-b1-09-tf-b1-09-ls08-01-siblings | 1 | 3 | Sibling evidence only |
| b1-09-tf-b1-09-ls05-01-vf-001 | TF-B1-09-LS05-01 | rg-b1-09-tf-b1-09-ls05-01-siblings | 1 | 3 | Sibling evidence only |
| b1-09-tf-b1-09-ls06-01-vf-001 | TF-B1-09-LS06-01 | rg-b1-09-tf-b1-09-ls06-01-siblings | 1 | 4 | Sibling evidence only |

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

`READY_FOR_B1_09_IMPORT_PLAN`

Exact next recommended action: create the Codex import plan for B1-09.
