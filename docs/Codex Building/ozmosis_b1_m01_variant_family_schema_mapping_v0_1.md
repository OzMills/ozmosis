# Ozmosis B1-01 Curated Variant Families — Variant Schema Mapping

Status: Schema-planning and import-mapping preparation only.  
Scope: B1-01 — Getting started at work/course.  
Input: `ozmosis_b1_m01_curated_variant_families_qa_approved_v0_1.md`.  
Output: `ozmosis_b1_m01_variant_family_schema_mapping_v0_1.md`.

## 1. Source Verification

| Source file/content | Available? | Used for | Reliability | Notes / caveats |
|---|---:|---|---|---|
| `ozmosis_b1_m01_curated_variant_families_qa_approved_v0_1.md` | Yes | controlling QA-approved family and variant source | High | present in active `/mnt/data` source set |
| `ozmosis_b1_m01_curated_variant_families_draft_v0_1.md` | Yes | draft/provenance and cut-context cross-check | High | present in active `/mnt/data` source set |
| `ozmosis_b1_m01_total_inventory_after_topup_phase3a.md` | Yes | current B1-01 inventory baseline | High | present in active `/mnt/data` source set |
| `ozmosis_b1_m01_vocab_activity_coverage_audit.md` | Yes | over-testing/evidence-risk guardrails | High | present in active `/mnt/data` source set |
| `ozmosis_b1_m01_topup_phase3a_qa_approved.md` | Yes | top-up source provenance | High | present in active `/mnt/data` source set |
| `ozmosis_b1_m01_topup_40_candidate_batch.md` | Yes | top-up candidate background only | High | present in active `/mnt/data` source set |
| `ozmosis_phase3a_b1_m01_getting_started_qa_approved.md` | Yes | original Phase 3A caveats | High | present in active `/mnt/data` source set |
| `ozmosis_phase3_b1_m01_getting_started_draft_items.md` | Yes | original target-family design | High | present in active `/mnt/data` source set |
| `ozmosis_controlled_frame_slot_variant_system_v0_1.md` | No | searched/expected by prompt; not required for this mapping if absent | Not used | not found as file; concept remains background only from current chat and prior prompt work |
| `ozmosis_phase2_5_full_b1_normalisation_addendum_v0_2.md` | No | searched/expected by prompt; not required for this mapping if absent | Not used | not found as standalone active file; current QA-approved variant source is sufficient for this schema-planning pass, but import planning should re-check package contents if needed |
| `ozmosis_prompt0_content_schema_id_metadata_rules_lock.md` | No | searched/expected by prompt; not required for this mapping if absent | Not used | not found as standalone active file; current QA-approved variant source is sufficient for this schema-planning pass, but import planning should re-check package contents if needed |
| `ozmosis_phase2_5_b1_m01_getting_started_target_inventory.md` | No | searched/expected by prompt; not required for this mapping if absent | Not used | not found as standalone active file; current QA-approved variant source is sufficient for this schema-planning pass, but import planning should re-check package contents if needed |
| `ozmosis_phase2_5_full_12_module_consistency_audit.md` | Yes | module-boundary and schema-normalisation caveats | High | present in active `/mnt/data` source set |
| `ozmosis_unofficial_b1_course_spine_v1_1.md` | No | searched/expected by prompt; not required for this mapping if absent | Not used | not found as standalone active file; current QA-approved variant source is sufficient for this schema-planning pass, but import planning should re-check package contents if needed |
| `Ozmosis_B1_Context_Module_Language_Strand_Alignment_Matrix.xlsx` | No | searched/expected by prompt; not required for this mapping if absent | Not used | not found as standalone active file; current QA-approved variant source is sufficient for this schema-planning pass, but import planning should re-check package contents if needed |
| `OZMOSIS_SOURCE_BRIEF_v0.80.2.md` | Yes | B1-first/evidence constraints | High | present in active `/mnt/data` source set |
| `OZMOSIS_DEVELOPMENT_ROADMAP_v0.80.2.md` | Yes | static architecture and storage guardrails | High | present in active `/mnt/data` source set |
| `ozmosis-v0_80_2.zip` | Yes | current app package reference, not inspected for implementation here | High | present in active `/mnt/data` source set |
| TELC/Beruf/Aspekte files | Yes | Structural inspiration only | Low for item text | Not used for copied text. |

## 2. QA-Approved Variant Intake Check

| Check | Result |
|---|---|
| QA-approved file found | Yes |
| Expected family count | 9 |
| Actual clean family count | 9 |
| Expected clean variant count | 54 |
| Actual clean variant count | 54 |
| Cut variant count | 6 |
| Deferred count | 0 |
| Needs-human-check count | 0 |
| Discrepancy | None in clean mapping. The prior draft discrepancy was handled in QA: 60 real draft rows, 54 survivors. |
| Mapping can proceed? | Yes |

## 3. Mapping Assumptions

| Assumption | Mapping decision |
|---|---|
| Module lock | All records use `displayModuleId=B1-01`, `moduleKey=b1-01`, `internalPlanningId=b1_m01_getting_started`, `moduleSlug=getting-started-work-course`, `levelTrack=B1`, `cefrTarget=B1`. |
| Family/variant ID policy | Existing QA-approved `variantFamilyId` and `variantId` already meet lowercase ASCII kebab-case planning-ID rules, so proposed schema IDs match source IDs. |
| Type A / Type B evidence | Type A attaches to same target answer/frame; Type B attaches to family target/frame rather than one lexical answer. |
| Sibling evidence rule | Same-family same-session variants are sibling evidence only; they do not count as independent proof. |
| Review eligibility rule | Auto-graded variants can be review candidates only after delay. Production is ineligible. Mechanics-only variants are not strong review evidence. |
| supportPolicy/supportPresentation | Visible English learner cues are mapped as `supportPresentation=english_visible_before_answer`; evidence policy is schema-normalised to `scenario_visible` unless production support applies. Source `support_after_answer` remains noted via schema caveats. |
| Answer-shape policy | Luecke variants use `typed_short`; repair variants use `repair_text`; production variants use `self_marked`. |
| v0.80.2 choice-ID implication | No clean survivor variants require Auswahl/Kontrast choice-ID mapping. If later converted to choice form, stable choice IDs must be added. |
| Production self-marking | Production variants are `self_marked_production`, `self-marked`, and not review-eligible. |
| Fallback/capitalisation | Sentence-start and noun-capitalisation fallbacks are exact-only for strong evidence unless correct-with-note exists. |

## 4. Variant Family Schema Mapping Summary

| variantFamilyId | proposedSchemaFamilyId | familyStatus | familyType | familyTarget | sourceItemIds | targetFamilyId | targetId | taskTypesSupported | taskDepthSupported | evidenceInterpretation | reviewGroup | siblingVariantGroup | maxSameSessionEvidence | supportPolicyDefault | reviewEligibilityDefault | schemaRisk |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---:|---|---|---|
| b1-01-v2-fronted-time-vf-001 | b1-01-v2-fronted-time-vf-001 | approve_family_with_variant_cuts | Type B | V2 after fronted time phrase | draft_b1_m01_cloze_003; draft_b1_m01_satzbau_002; draft_b1_m01_repair_001; draft_b1_m01_transformation_001; draft_b1_m01_topup_cloze_001; draft_b1_m01_topup_cloze_002; draft_b1_m01_topup_satzbau_001; draft_b1_m01_topup_satzbau_003; draft_b1_m01_topup_repair_001 | TF-B1-01-LS01-01 | T-B1-01-LS01-01-03 | Luecke, Satzbau, Reparatur, Umformen | cloze, sentence_building, repair, transformation | Frame-level V2 evidence; exact verb differs by cue, so do not treat as one lexical verb target. | rg-b1-01-v2-fronted-time | b1-01-v2-fronted-time-siblings-001 | 1 | scenario_visible | eligible_family_review_after_delay | low |
| b1-01-v2-fronted-place-vf-002 | b1-01-v2-fronted-place-vf-002 | revise_family_and_approve | Type B | V2 after fronted place phrase | draft_b1_m01_topup_satzbau_002; draft_b1_m01_topup_repair_002; draft_b1_m01_topup_cloze_002 | TF-B1-01-LS01-01 | T-B1-01-LS01-01-03 | Luecke, Satzbau, Reparatur | cloze, sentence_building, repair | Frame-level V2 evidence for place-first main clauses. | rg-b1-01-v2-fronted-place | b1-01-v2-fronted-place-siblings-002 | 1 | scenario_visible | eligible_family_review_after_delay | low |
| b1-01-w-question-location-vf-003 | b1-01-w-question-location-vf-003 | approve_family_as_is | Type B | W-question word order for course orientation | draft_b1_m01_recognition_003; draft_b1_m01_repair_003; draft_b1_m01_satzbau_003; draft_b1_m01_topup_recognition_002; draft_b1_m01_topup_cloze_003; draft_b1_m01_topup_satzbau_004; draft_b1_m01_topup_repair_003; draft_b1_m01_topup_contrast_002 | TF-B1-01-LS01-02 | T-B1-01-LS01-02-01 | Auswahl, Luecke, Satzbau, Reparatur, Kontrast | recognition, cloze, sentence_building, repair, contrast | Question-frame evidence; some variants target ist, others finde. | rg-b1-01-w-question-orientation | b1-01-w-question-location-siblings-003 | 1 | scenario_visible | eligible_family_review_after_delay | low |
| b1-01-yes-no-question-vf-004 | b1-01-yes-no-question-vf-004 | approve_family_as_is | Type B | Yes/no question word order | draft_b1_m01_recognition_004; draft_b1_m01_cloze_008; draft_b1_m01_satzbau_004; draft_b1_m01_contrast_003; draft_b1_m01_topup_recognition_003; draft_b1_m01_topup_cloze_004; draft_b1_m01_topup_satzbau_005; draft_b1_m01_topup_satzbau_006 | TF-B1-01-LS01-02 | T-B1-01-LS01-02-02 | Auswahl, Luecke, Satzbau, Kontrast | recognition, cloze, sentence_building, contrast | Question-frame evidence; target answer varies by verb. | rg-b1-01-yes-no-question-order | b1-01-yes-no-question-siblings-004 | 1 | scenario_visible | eligible_family_review_after_delay | minor: sentence-start capitalisation fallback |
| b1-01-brauchen-acc-vf-005 | b1-01-brauchen-acc-vf-005 | revise_family_and_approve | Type A | brauchen as basic course/work survival frame | draft_b1_m01_recognition_006; draft_b1_m01_cloze_005; draft_b1_m01_cloze_007; draft_b1_m01_repair_005; draft_b1_m01_satzbau_005; draft_b1_m01_topup_recognition_004; draft_b1_m01_topup_cloze_005; draft_b1_m01_topup_satzbau_007 | TF-B1-01-LS04-01 | T-B1-01-LS04-01-01 | Auswahl, Luecke, Satzbau, Reparatur, Produktion support only | recognition, cloze, sentence_building, repair, controlled_production | Capped survival/scaffold evidence; not B1-depth proof. | rg-b1-01-brauchen-acc-survival | b1-01-brauchen-acc-siblings-005 | 1 | scenario_visible | eligible_family_review_after_delay | medium: A1/A2 survival scaffold; cap sibling evidence |
| b1-01-mein-meine-familiar-vf-006 | b1-01-mein-meine-familiar-vf-006 | revise_family_and_approve | Type B | mein/meine with familiar B1-01 nouns | draft_b1_m01_recognition_008; draft_b1_m01_cloze_006; draft_b1_m01_repair_004; draft_b1_m01_contrast_002; draft_b1_m01_topup_recognition_005; draft_b1_m01_topup_cloze_007; draft_b1_m01_topup_cloze_008; draft_b1_m01_topup_satzbau_008; draft_b1_m01_topup_satzbau_009; draft_b1_m01_topup_repair_007; draft_b1_m01_topup_repair_008 | TF-B1-01-LS02-01 | T-B1-01-LS02-01-02 | Auswahl, Luecke, Satzbau, Reparatur, Kontrast | recognition, cloze, sentence_building, repair, contrast | Familiar-noun possessive awareness only; not a full article/case table. | rg-b1-01-mein-meine-familiar-nouns | b1-01-mein-meine-familiar-siblings-006 | 1 | scenario_visible | eligible_family_review_after_delay | low |
| b1-01-noun-capitalisation-vf-007 | b1-01-noun-capitalisation-vf-007 | approve_family_with_variant_cuts | Type B | German noun capitalisation in B1-01 course words | draft_b1_m01_notice_002 excluded; draft_b1_m01_recognition_010; draft_b1_m01_repair_002; draft_b1_m01_topup_recognition_006; draft_b1_m01_topup_cloze_006; draft_b1_m01_topup_cloze_009; draft_b1_m01_topup_repair_006 | TF-B1-01-LS09-01 | T-B1-01-LS09-01-01 | Auswahl, Luecke, Reparatur | recognition, cloze, repair | Mechanics/support evidence; do not infer broad vocabulary or grammar control. | rg-b1-01-noun-capitalisation-course-words | b1-01-noun-capitalisation-siblings-007 | 1 | scenario_visible | ineligible_support_too_strong | medium: mechanics-only and fallback-sensitive |
| b1-01-w-question-repair-vf-008 | b1-01-w-question-repair-vf-008 | approve_family_as_is | Type B | Repair W-question word order | draft_b1_m01_repair_003; draft_b1_m01_topup_repair_003; draft_b1_m01_topup_contrast_002 | TF-B1-01-LS01-02 | T-B1-01-LS01-02-01 | Reparatur, Kontrast | repair, contrast | Repair-level evidence for W-question order, stronger than recognition. | rg-b1-01-w-question-repair | b1-01-w-question-repair-siblings-008 | 1 | scenario_visible | eligible_family_review_after_delay | low |
| b1-01-controlled-production-vf-009 | b1-01-controlled-production-vf-009 | approve_family_as_is | Type B | Controlled self-marked course-entry production | draft_b1_m01_production_001; draft_b1_m01_production_002; draft_b1_m01_production_003; draft_b1_m01_topup_production_001; draft_b1_m01_topup_production_002; draft_b1_m01_topup_production_003 | TF-B1-01-LS10-01 | T-B1-01-LS10-01-01 / T-B1-01-LS10-01-02 | Produktion | controlled_production | Self-marked production evidence only; no correctness. | none-production-only | b1-01-controlled-production-siblings-009 | 1 | checklist_visible or phrase_bank_collapsed | ineligible_self_marked_production | medium: self-marked only |

## 5. Variant-Level Schema Mapping Summary

| variantId | proposedSchemaVariantId | parentVariantFamilyId | sourceItemIds | targetFamilyId | targetId | taskType | taskDepth | answerMode | answerShape | correctnessPolicy | acceptedAnswerPolicy | canonicalAnswer | supportPolicy | supportPresentation | evidenceType | reviewGroup | siblingVariantGroup | reviewEligibilityDefault | schemaRisk |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| b1-01-v2-fronted-time-vf-001-var-001 | b1-01-v2-fronted-time-vf-001-var-001 | b1-01-v2-fronted-time-vf-001 | draft_b1_m01_cloze_003; draft_b1_m01_satzbau_002; draft_b1_m01_repair_001; draft_b1_m01_transformation_001; draft_b1_m01_topup_cloze_001; draft_b1_m01_topup_cloze_002; draft_b1_m01_topup_satzbau_001; draft_b1_m01_topup_satzbau_003; draft_b1_m01_topup_repair_001 | TF-B1-01-LS01-01 | T-B1-01-LS01-01-03 | Luecke | cloze | typed_short | single_token | exact | exact_only | bin | scenario_visible | english_visible_before_answer | auto_core | rg-b1-01-v2-fronted-time | b1-01-v2-fronted-time-siblings-001 | eligible_variant_review_after_delay | low |
| b1-01-v2-fronted-time-vf-001-var-002 | b1-01-v2-fronted-time-vf-001-var-002 | b1-01-v2-fronted-time-vf-001 | draft_b1_m01_cloze_003; draft_b1_m01_satzbau_002; draft_b1_m01_repair_001; draft_b1_m01_transformation_001; draft_b1_m01_topup_cloze_001; draft_b1_m01_topup_cloze_002; draft_b1_m01_topup_satzbau_001; draft_b1_m01_topup_satzbau_003; draft_b1_m01_topup_repair_001 | TF-B1-01-LS01-01 | T-B1-01-LS01-01-03 | Luecke | cloze | typed_short | single_token | exact | exact_only | bin | scenario_visible | english_visible_before_answer | auto_core | rg-b1-01-v2-fronted-time | b1-01-v2-fronted-time-siblings-001 | eligible_variant_review_after_delay | low |
| b1-01-v2-fronted-time-vf-001-var-003 | b1-01-v2-fronted-time-vf-001-var-003 | b1-01-v2-fronted-time-vf-001 | draft_b1_m01_cloze_003; draft_b1_m01_satzbau_002; draft_b1_m01_repair_001; draft_b1_m01_transformation_001; draft_b1_m01_topup_cloze_001; draft_b1_m01_topup_cloze_002; draft_b1_m01_topup_satzbau_001; draft_b1_m01_topup_satzbau_003; draft_b1_m01_topup_repair_001 | TF-B1-01-LS01-01 | T-B1-01-LS01-01-03 | Luecke | cloze | typed_short | single_token | exact | exact_only | bin | scenario_visible | english_visible_before_answer | auto_core | rg-b1-01-v2-fronted-time | b1-01-v2-fronted-time-siblings-001 | eligible_variant_review_after_delay | low |
| b1-01-v2-fronted-time-vf-001-var-004 | b1-01-v2-fronted-time-vf-001-var-004 | b1-01-v2-fronted-time-vf-001 | draft_b1_m01_cloze_003; draft_b1_m01_satzbau_002; draft_b1_m01_repair_001; draft_b1_m01_transformation_001; draft_b1_m01_topup_cloze_001; draft_b1_m01_topup_cloze_002; draft_b1_m01_topup_satzbau_001; draft_b1_m01_topup_satzbau_003; draft_b1_m01_topup_repair_001 | TF-B1-01-LS01-01 | T-B1-01-LS01-01-03 | Luecke | cloze | typed_short | single_token | exact | exact_only | lerne | scenario_visible | english_visible_before_answer | auto_core | rg-b1-01-v2-fronted-time | b1-01-v2-fronted-time-siblings-001 | eligible_variant_review_after_delay | low |
| b1-01-v2-fronted-time-vf-001-var-005 | b1-01-v2-fronted-time-vf-001-var-005 | b1-01-v2-fronted-time-vf-001 | draft_b1_m01_cloze_003; draft_b1_m01_satzbau_002; draft_b1_m01_repair_001; draft_b1_m01_transformation_001; draft_b1_m01_topup_cloze_001; draft_b1_m01_topup_cloze_002; draft_b1_m01_topup_satzbau_001; draft_b1_m01_topup_satzbau_003; draft_b1_m01_topup_repair_001 | TF-B1-01-LS01-01 | T-B1-01-LS01-01-03 | Luecke | cloze | typed_short | single_token | exact | exact_only | lerne | scenario_visible | english_visible_before_answer | auto_core | rg-b1-01-v2-fronted-time | b1-01-v2-fronted-time-siblings-001 | eligible_variant_review_after_delay | low |
| b1-01-v2-fronted-time-vf-001-var-006 | b1-01-v2-fronted-time-vf-001-var-006 | b1-01-v2-fronted-time-vf-001 | draft_b1_m01_cloze_003; draft_b1_m01_satzbau_002; draft_b1_m01_repair_001; draft_b1_m01_transformation_001; draft_b1_m01_topup_cloze_001; draft_b1_m01_topup_cloze_002; draft_b1_m01_topup_satzbau_001; draft_b1_m01_topup_satzbau_003; draft_b1_m01_topup_repair_001 | TF-B1-01-LS01-01 | T-B1-01-LS01-01-03 | Luecke | cloze | typed_short | single_token | exact | exact_only | lerne | scenario_visible | english_visible_before_answer | auto_core | rg-b1-01-v2-fronted-time | b1-01-v2-fronted-time-siblings-001 | eligible_variant_review_after_delay | low |
| b1-01-v2-fronted-time-vf-001-var-009 | b1-01-v2-fronted-time-vf-001-var-009 | b1-01-v2-fronted-time-vf-001 | draft_b1_m01_cloze_003; draft_b1_m01_satzbau_002; draft_b1_m01_repair_001; draft_b1_m01_transformation_001; draft_b1_m01_topup_cloze_001; draft_b1_m01_topup_cloze_002; draft_b1_m01_topup_satzbau_001; draft_b1_m01_topup_satzbau_003; draft_b1_m01_topup_repair_001 | TF-B1-01-LS01-01 | T-B1-01-LS01-01-03 | Luecke | cloze | typed_short | single_token | exact | exact_only | habe | scenario_visible | english_visible_before_answer | auto_core | rg-b1-01-v2-fronted-time | b1-01-v2-fronted-time-siblings-001 | eligible_variant_review_after_delay | low |
| b1-01-v2-fronted-time-vf-001-var-010 | b1-01-v2-fronted-time-vf-001-var-010 | b1-01-v2-fronted-time-vf-001 | draft_b1_m01_cloze_003; draft_b1_m01_satzbau_002; draft_b1_m01_repair_001; draft_b1_m01_transformation_001; draft_b1_m01_topup_cloze_001; draft_b1_m01_topup_cloze_002; draft_b1_m01_topup_satzbau_001; draft_b1_m01_topup_satzbau_003; draft_b1_m01_topup_repair_001 | TF-B1-01-LS01-01 | T-B1-01-LS01-01-03 | Luecke | cloze | typed_short | single_token | exact | exact_only | habe | scenario_visible | english_visible_before_answer | auto_core | rg-b1-01-v2-fronted-time | b1-01-v2-fronted-time-siblings-001 | eligible_variant_review_after_delay | low |
| b1-01-v2-fronted-place-vf-002-var-001 | b1-01-v2-fronted-place-vf-002-var-001 | b1-01-v2-fronted-place-vf-002 | draft_b1_m01_topup_satzbau_002; draft_b1_m01_topup_repair_002; draft_b1_m01_topup_cloze_002 | TF-B1-01-LS01-01 | T-B1-01-LS01-01-03 | Luecke | cloze | typed_short | single_token | exact | exact_only | lerne | scenario_visible | english_visible_before_answer | auto_core | rg-b1-01-v2-fronted-place | b1-01-v2-fronted-place-siblings-002 | eligible_variant_review_after_delay | low |
| b1-01-v2-fronted-place-vf-002-var-002 | b1-01-v2-fronted-place-vf-002-var-002 | b1-01-v2-fronted-place-vf-002 | draft_b1_m01_topup_satzbau_002; draft_b1_m01_topup_repair_002; draft_b1_m01_topup_cloze_002 | TF-B1-01-LS01-01 | T-B1-01-LS01-01-03 | Luecke | cloze | typed_short | single_token | exact | exact_only | lerne | scenario_visible | english_visible_before_answer | auto_core | rg-b1-01-v2-fronted-place | b1-01-v2-fronted-place-siblings-002 | eligible_variant_review_after_delay | low |
| b1-01-v2-fronted-place-vf-002-var-003 | b1-01-v2-fronted-place-vf-002-var-003 | b1-01-v2-fronted-place-vf-002 | draft_b1_m01_topup_satzbau_002; draft_b1_m01_topup_repair_002; draft_b1_m01_topup_cloze_002 | TF-B1-01-LS01-01 | T-B1-01-LS01-01-03 | Luecke | cloze | typed_short | single_token | exact | exact_only | brauche | scenario_visible | english_visible_before_answer | auto_supported | rg-b1-01-v2-fronted-place | b1-01-v2-fronted-place-siblings-002 | eligible_family_review_after_delay | low |
| b1-01-v2-fronted-place-vf-002-var-004 | b1-01-v2-fronted-place-vf-002-var-004 | b1-01-v2-fronted-place-vf-002 | draft_b1_m01_topup_satzbau_002; draft_b1_m01_topup_repair_002; draft_b1_m01_topup_cloze_002 | TF-B1-01-LS01-01 | T-B1-01-LS01-01-03 | Luecke | cloze | typed_short | single_token | exact | exact_only | habe | scenario_visible | english_visible_before_answer | auto_core | rg-b1-01-v2-fronted-place | b1-01-v2-fronted-place-siblings-002 | eligible_variant_review_after_delay | low |
| b1-01-v2-fronted-place-vf-002-var-005 | b1-01-v2-fronted-place-vf-002-var-005 | b1-01-v2-fronted-place-vf-002 | draft_b1_m01_topup_satzbau_002; draft_b1_m01_topup_repair_002; draft_b1_m01_topup_cloze_002 | TF-B1-01-LS01-01 | T-B1-01-LS01-01-03 | Luecke | cloze | typed_short | single_token | exact | exact_only | lerne | scenario_visible | english_visible_before_answer | auto_supported | rg-b1-01-v2-fronted-place | b1-01-v2-fronted-place-siblings-002 | eligible_family_review_after_delay | low |
| b1-01-v2-fronted-place-vf-002-var-007 | b1-01-v2-fronted-place-vf-002-var-007 | b1-01-v2-fronted-place-vf-002 | draft_b1_m01_topup_satzbau_002; draft_b1_m01_topup_repair_002; draft_b1_m01_topup_cloze_002 | TF-B1-01-LS01-01 | T-B1-01-LS01-01-03 | Luecke | cloze | typed_short | single_token | exact | exact_only | ist | scenario_visible | english_visible_before_answer | auto_core | rg-b1-01-v2-fronted-place | b1-01-v2-fronted-place-siblings-002 | eligible_variant_review_after_delay | low |
| b1-01-w-question-location-vf-003-var-001 | b1-01-w-question-location-vf-003-var-001 | b1-01-w-question-location-vf-003 | draft_b1_m01_recognition_003; draft_b1_m01_repair_003; draft_b1_m01_satzbau_003; draft_b1_m01_topup_recognition_002; draft_b1_m01_topup_cloze_003; draft_b1_m01_topup_satzbau_004; draft_b1_m01_topup_repair_003; draft_b1_m01_topup_contrast_002 | TF-B1-01-LS01-02 | T-B1-01-LS01-02-01 | Luecke | cloze | typed_short | single_token | exact | exact_only | ist | scenario_visible | english_visible_before_answer | auto_core | rg-b1-01-w-question-orientation | b1-01-w-question-location-siblings-003 | eligible_variant_review_after_delay | low |
| b1-01-w-question-location-vf-003-var-002 | b1-01-w-question-location-vf-003-var-002 | b1-01-w-question-location-vf-003 | draft_b1_m01_recognition_003; draft_b1_m01_repair_003; draft_b1_m01_satzbau_003; draft_b1_m01_topup_recognition_002; draft_b1_m01_topup_cloze_003; draft_b1_m01_topup_satzbau_004; draft_b1_m01_topup_repair_003; draft_b1_m01_topup_contrast_002 | TF-B1-01-LS01-02 | T-B1-01-LS01-02-01 | Luecke | cloze | typed_short | single_token | exact | exact_only | ist | scenario_visible | english_visible_before_answer | auto_core | rg-b1-01-w-question-orientation | b1-01-w-question-location-siblings-003 | eligible_variant_review_after_delay | low |
| b1-01-w-question-location-vf-003-var-003 | b1-01-w-question-location-vf-003-var-003 | b1-01-w-question-location-vf-003 | draft_b1_m01_recognition_003; draft_b1_m01_repair_003; draft_b1_m01_satzbau_003; draft_b1_m01_topup_recognition_002; draft_b1_m01_topup_cloze_003; draft_b1_m01_topup_satzbau_004; draft_b1_m01_topup_repair_003; draft_b1_m01_topup_contrast_002 | TF-B1-01-LS01-02 | T-B1-01-LS01-02-01 | Luecke | cloze | typed_short | single_token | exact | exact_only | ist | scenario_visible | english_visible_before_answer | auto_core | rg-b1-01-w-question-orientation | b1-01-w-question-location-siblings-003 | eligible_variant_review_after_delay | low |
| b1-01-w-question-location-vf-003-var-004 | b1-01-w-question-location-vf-003-var-004 | b1-01-w-question-location-vf-003 | draft_b1_m01_recognition_003; draft_b1_m01_repair_003; draft_b1_m01_satzbau_003; draft_b1_m01_topup_recognition_002; draft_b1_m01_topup_cloze_003; draft_b1_m01_topup_satzbau_004; draft_b1_m01_topup_repair_003; draft_b1_m01_topup_contrast_002 | TF-B1-01-LS01-02 | T-B1-01-LS01-02-01 | Luecke | cloze | typed_short | single_token | exact | exact_only | finde | scenario_visible | english_visible_before_answer | auto_core | rg-b1-01-w-question-orientation | b1-01-w-question-location-siblings-003 | eligible_variant_review_after_delay | low |
| b1-01-w-question-location-vf-003-var-005 | b1-01-w-question-location-vf-003-var-005 | b1-01-w-question-location-vf-003 | draft_b1_m01_recognition_003; draft_b1_m01_repair_003; draft_b1_m01_satzbau_003; draft_b1_m01_topup_recognition_002; draft_b1_m01_topup_cloze_003; draft_b1_m01_topup_satzbau_004; draft_b1_m01_topup_repair_003; draft_b1_m01_topup_contrast_002 | TF-B1-01-LS01-02 | T-B1-01-LS01-02-01 | Luecke | cloze | typed_short | single_token | exact | exact_only | finde | scenario_visible | english_visible_before_answer | auto_core | rg-b1-01-w-question-orientation | b1-01-w-question-location-siblings-003 | eligible_variant_review_after_delay | low |
| b1-01-w-question-location-vf-003-var-006 | b1-01-w-question-location-vf-003-var-006 | b1-01-w-question-location-vf-003 | draft_b1_m01_recognition_003; draft_b1_m01_repair_003; draft_b1_m01_satzbau_003; draft_b1_m01_topup_recognition_002; draft_b1_m01_topup_cloze_003; draft_b1_m01_topup_satzbau_004; draft_b1_m01_topup_repair_003; draft_b1_m01_topup_contrast_002 | TF-B1-01-LS01-02 | T-B1-01-LS01-02-01 | Luecke | cloze | typed_short | single_token | exact | exact_only | finde | scenario_visible | english_visible_before_answer | auto_core | rg-b1-01-w-question-orientation | b1-01-w-question-location-siblings-003 | eligible_variant_review_after_delay | low |
| b1-01-w-question-location-vf-003-var-007 | b1-01-w-question-location-vf-003-var-007 | b1-01-w-question-location-vf-003 | draft_b1_m01_recognition_003; draft_b1_m01_repair_003; draft_b1_m01_satzbau_003; draft_b1_m01_topup_recognition_002; draft_b1_m01_topup_cloze_003; draft_b1_m01_topup_satzbau_004; draft_b1_m01_topup_repair_003; draft_b1_m01_topup_contrast_002 | TF-B1-01-LS01-02 | T-B1-01-LS01-02-01 | Luecke | cloze | typed_short | single_token | exact | exact_only | finde | scenario_visible | english_visible_before_answer | auto_core | rg-b1-01-w-question-orientation | b1-01-w-question-location-siblings-003 | eligible_variant_review_after_delay | low |
| b1-01-yes-no-question-vf-004-var-001 | b1-01-yes-no-question-vf-004-var-001 | b1-01-yes-no-question-vf-004 | draft_b1_m01_recognition_004; draft_b1_m01_cloze_008; draft_b1_m01_satzbau_004; draft_b1_m01_contrast_003; draft_b1_m01_topup_recognition_003; draft_b1_m01_topup_cloze_004; draft_b1_m01_topup_satzbau_005; draft_b1_m01_topup_satzbau_006 | TF-B1-01-LS01-02 | T-B1-01-LS01-02-02 | Luecke | cloze | typed_short | single_token | normalised | normalised_if_supported | Brauche | scenario_visible | english_visible_before_answer | auto_core | rg-b1-01-yes-no-question-order | b1-01-yes-no-question-siblings-004 | eligible_variant_review_after_delay | minor: sentence-start capitalisation fallback; fallback policy needed |
| b1-01-yes-no-question-vf-004-var-002 | b1-01-yes-no-question-vf-004-var-002 | b1-01-yes-no-question-vf-004 | draft_b1_m01_recognition_004; draft_b1_m01_cloze_008; draft_b1_m01_satzbau_004; draft_b1_m01_contrast_003; draft_b1_m01_topup_recognition_003; draft_b1_m01_topup_cloze_004; draft_b1_m01_topup_satzbau_005; draft_b1_m01_topup_satzbau_006 | TF-B1-01-LS01-02 | T-B1-01-LS01-02-02 | Luecke | cloze | typed_short | single_token | normalised | normalised_if_supported | Brauche | scenario_visible | english_visible_before_answer | auto_core | rg-b1-01-yes-no-question-order | b1-01-yes-no-question-siblings-004 | eligible_variant_review_after_delay | minor: sentence-start capitalisation fallback; fallback policy needed |
| b1-01-yes-no-question-vf-004-var-003 | b1-01-yes-no-question-vf-004-var-003 | b1-01-yes-no-question-vf-004 | draft_b1_m01_recognition_004; draft_b1_m01_cloze_008; draft_b1_m01_satzbau_004; draft_b1_m01_contrast_003; draft_b1_m01_topup_recognition_003; draft_b1_m01_topup_cloze_004; draft_b1_m01_topup_satzbau_005; draft_b1_m01_topup_satzbau_006 | TF-B1-01-LS01-02 | T-B1-01-LS01-02-02 | Luecke | cloze | typed_short | single_token | normalised | normalised_if_supported | Brauche | scenario_visible | english_visible_before_answer | auto_core | rg-b1-01-yes-no-question-order | b1-01-yes-no-question-siblings-004 | eligible_variant_review_after_delay | minor: sentence-start capitalisation fallback; fallback policy needed |
| b1-01-yes-no-question-vf-004-var-004 | b1-01-yes-no-question-vf-004-var-004 | b1-01-yes-no-question-vf-004 | draft_b1_m01_recognition_004; draft_b1_m01_cloze_008; draft_b1_m01_satzbau_004; draft_b1_m01_contrast_003; draft_b1_m01_topup_recognition_003; draft_b1_m01_topup_cloze_004; draft_b1_m01_topup_satzbau_005; draft_b1_m01_topup_satzbau_006 | TF-B1-01-LS01-02 | T-B1-01-LS01-02-02 | Luecke | cloze | typed_short | single_token | normalised | normalised_if_supported | Ist | scenario_visible | english_visible_before_answer | auto_core | rg-b1-01-yes-no-question-order | b1-01-yes-no-question-siblings-004 | eligible_variant_review_after_delay | minor: sentence-start capitalisation fallback; fallback policy needed |
| b1-01-yes-no-question-vf-004-var-005 | b1-01-yes-no-question-vf-004-var-005 | b1-01-yes-no-question-vf-004 | draft_b1_m01_recognition_004; draft_b1_m01_cloze_008; draft_b1_m01_satzbau_004; draft_b1_m01_contrast_003; draft_b1_m01_topup_recognition_003; draft_b1_m01_topup_cloze_004; draft_b1_m01_topup_satzbau_005; draft_b1_m01_topup_satzbau_006 | TF-B1-01-LS01-02 | T-B1-01-LS01-02-02 | Luecke | cloze | typed_short | single_token | normalised | normalised_if_supported | Ist | scenario_visible | english_visible_before_answer | auto_core | rg-b1-01-yes-no-question-order | b1-01-yes-no-question-siblings-004 | eligible_variant_review_after_delay | minor: sentence-start capitalisation fallback; fallback policy needed |
| b1-01-yes-no-question-vf-004-var-006 | b1-01-yes-no-question-vf-004-var-006 | b1-01-yes-no-question-vf-004 | draft_b1_m01_recognition_004; draft_b1_m01_cloze_008; draft_b1_m01_satzbau_004; draft_b1_m01_contrast_003; draft_b1_m01_topup_recognition_003; draft_b1_m01_topup_cloze_004; draft_b1_m01_topup_satzbau_005; draft_b1_m01_topup_satzbau_006 | TF-B1-01-LS01-02 | T-B1-01-LS01-02-02 | Luecke | cloze | typed_short | single_token | normalised | normalised_if_supported | Haben | scenario_visible | english_visible_before_answer | auto_core | rg-b1-01-yes-no-question-order | b1-01-yes-no-question-siblings-004 | eligible_variant_review_after_delay | minor: sentence-start capitalisation fallback; fallback policy needed |
| b1-01-brauchen-acc-vf-005-var-001 | b1-01-brauchen-acc-vf-005-var-001 | b1-01-brauchen-acc-vf-005 | draft_b1_m01_recognition_006; draft_b1_m01_cloze_005; draft_b1_m01_cloze_007; draft_b1_m01_repair_005; draft_b1_m01_satzbau_005; draft_b1_m01_topup_recognition_004; draft_b1_m01_topup_cloze_005; draft_b1_m01_topup_satzbau_007 | TF-B1-01-LS04-01 | T-B1-01-LS04-01-01 | Luecke | cloze | typed_short | single_token | exact | exact_only | brauche | scenario_visible | english_visible_before_answer | auto_supported | rg-b1-01-brauchen-acc-survival | b1-01-brauchen-acc-siblings-005 | eligible_family_review_after_delay | medium: A1/A2 survival scaffold; cap sibling evidence |
| b1-01-brauchen-acc-vf-005-var-002 | b1-01-brauchen-acc-vf-005-var-002 | b1-01-brauchen-acc-vf-005 | draft_b1_m01_recognition_006; draft_b1_m01_cloze_005; draft_b1_m01_cloze_007; draft_b1_m01_repair_005; draft_b1_m01_satzbau_005; draft_b1_m01_topup_recognition_004; draft_b1_m01_topup_cloze_005; draft_b1_m01_topup_satzbau_007 | TF-B1-01-LS04-01 | T-B1-01-LS04-01-01 | Luecke | cloze | typed_short | single_token | exact | exact_only | brauche | scenario_visible | english_visible_before_answer | auto_supported | rg-b1-01-brauchen-acc-survival | b1-01-brauchen-acc-siblings-005 | eligible_family_review_after_delay | medium: A1/A2 survival scaffold; cap sibling evidence |
| b1-01-brauchen-acc-vf-005-var-003 | b1-01-brauchen-acc-vf-005-var-003 | b1-01-brauchen-acc-vf-005 | draft_b1_m01_recognition_006; draft_b1_m01_cloze_005; draft_b1_m01_cloze_007; draft_b1_m01_repair_005; draft_b1_m01_satzbau_005; draft_b1_m01_topup_recognition_004; draft_b1_m01_topup_cloze_005; draft_b1_m01_topup_satzbau_007 | TF-B1-01-LS04-01 | T-B1-01-LS04-01-01 | Luecke | cloze | typed_short | single_token | exact | exact_only | brauche | scenario_visible | english_visible_before_answer | auto_supported | rg-b1-01-brauchen-acc-survival | b1-01-brauchen-acc-siblings-005 | eligible_family_review_after_delay | medium: A1/A2 survival scaffold; cap sibling evidence |
| b1-01-brauchen-acc-vf-005-var-004 | b1-01-brauchen-acc-vf-005-var-004 | b1-01-brauchen-acc-vf-005 | draft_b1_m01_recognition_006; draft_b1_m01_cloze_005; draft_b1_m01_cloze_007; draft_b1_m01_repair_005; draft_b1_m01_satzbau_005; draft_b1_m01_topup_recognition_004; draft_b1_m01_topup_cloze_005; draft_b1_m01_topup_satzbau_007 | TF-B1-01-LS04-01 | T-B1-01-LS04-01-01 | Luecke | cloze | typed_short | single_token | exact | exact_only | brauche | scenario_visible | english_visible_before_answer | auto_supported | rg-b1-01-brauchen-acc-survival | b1-01-brauchen-acc-siblings-005 | eligible_family_review_after_delay | medium: A1/A2 survival scaffold; cap sibling evidence |
| b1-01-brauchen-acc-vf-005-var-005 | b1-01-brauchen-acc-vf-005-var-005 | b1-01-brauchen-acc-vf-005 | draft_b1_m01_recognition_006; draft_b1_m01_cloze_005; draft_b1_m01_cloze_007; draft_b1_m01_repair_005; draft_b1_m01_satzbau_005; draft_b1_m01_topup_recognition_004; draft_b1_m01_topup_cloze_005; draft_b1_m01_topup_satzbau_007 | TF-B1-01-LS04-01 | T-B1-01-LS04-01-01 | Luecke | cloze | typed_short | single_token | exact | exact_only | brauche | scenario_visible | english_visible_before_answer | auto_supported | rg-b1-01-brauchen-acc-survival | b1-01-brauchen-acc-siblings-005 | eligible_family_review_after_delay | medium: A1/A2 survival scaffold; cap sibling evidence |
| b1-01-mein-meine-familiar-vf-006-var-001 | b1-01-mein-meine-familiar-vf-006-var-001 | b1-01-mein-meine-familiar-vf-006 | draft_b1_m01_recognition_008; draft_b1_m01_cloze_006; draft_b1_m01_repair_004; draft_b1_m01_contrast_002; draft_b1_m01_topup_recognition_005; draft_b1_m01_topup_cloze_007; draft_b1_m01_topup_cloze_008; draft_b1_m01_topup_satzbau_008; draft_b1_m01_topup_satzbau_009; draft_b1_m01_topup_repair_007; draft_b1_m01_topup_repair_008 | TF-B1-01-LS02-01 | T-B1-01-LS02-01-02 | Luecke | cloze | typed_short | single_token | exact | exact_only | mein | scenario_visible | english_visible_before_answer | auto_core | rg-b1-01-mein-meine-familiar-nouns | b1-01-mein-meine-familiar-siblings-006 | eligible_variant_review_after_delay | low |
| b1-01-mein-meine-familiar-vf-006-var-002 | b1-01-mein-meine-familiar-vf-006-var-002 | b1-01-mein-meine-familiar-vf-006 | draft_b1_m01_recognition_008; draft_b1_m01_cloze_006; draft_b1_m01_repair_004; draft_b1_m01_contrast_002; draft_b1_m01_topup_recognition_005; draft_b1_m01_topup_cloze_007; draft_b1_m01_topup_cloze_008; draft_b1_m01_topup_satzbau_008; draft_b1_m01_topup_satzbau_009; draft_b1_m01_topup_repair_007; draft_b1_m01_topup_repair_008 | TF-B1-01-LS02-01 | T-B1-01-LS02-01-02 | Luecke | cloze | typed_short | single_token | exact | exact_only | meine | scenario_visible | english_visible_before_answer | auto_core | rg-b1-01-mein-meine-familiar-nouns | b1-01-mein-meine-familiar-siblings-006 | eligible_variant_review_after_delay | low |
| b1-01-mein-meine-familiar-vf-006-var-003 | b1-01-mein-meine-familiar-vf-006-var-003 | b1-01-mein-meine-familiar-vf-006 | draft_b1_m01_recognition_008; draft_b1_m01_cloze_006; draft_b1_m01_repair_004; draft_b1_m01_contrast_002; draft_b1_m01_topup_recognition_005; draft_b1_m01_topup_cloze_007; draft_b1_m01_topup_cloze_008; draft_b1_m01_topup_satzbau_008; draft_b1_m01_topup_satzbau_009; draft_b1_m01_topup_repair_007; draft_b1_m01_topup_repair_008 | TF-B1-01-LS02-01 | T-B1-01-LS02-01-02 | Luecke | cloze | typed_short | single_token | exact | exact_only | mein | scenario_visible | english_visible_before_answer | auto_core | rg-b1-01-mein-meine-familiar-nouns | b1-01-mein-meine-familiar-siblings-006 | eligible_variant_review_after_delay | low |
| b1-01-mein-meine-familiar-vf-006-var-004 | b1-01-mein-meine-familiar-vf-006-var-004 | b1-01-mein-meine-familiar-vf-006 | draft_b1_m01_recognition_008; draft_b1_m01_cloze_006; draft_b1_m01_repair_004; draft_b1_m01_contrast_002; draft_b1_m01_topup_recognition_005; draft_b1_m01_topup_cloze_007; draft_b1_m01_topup_cloze_008; draft_b1_m01_topup_satzbau_008; draft_b1_m01_topup_satzbau_009; draft_b1_m01_topup_repair_007; draft_b1_m01_topup_repair_008 | TF-B1-01-LS02-01 | T-B1-01-LS02-01-02 | Luecke | cloze | typed_short | single_token | exact | exact_only | meine | scenario_visible | english_visible_before_answer | auto_core | rg-b1-01-mein-meine-familiar-nouns | b1-01-mein-meine-familiar-siblings-006 | eligible_variant_review_after_delay | low |
| b1-01-mein-meine-familiar-vf-006-var-005 | b1-01-mein-meine-familiar-vf-006-var-005 | b1-01-mein-meine-familiar-vf-006 | draft_b1_m01_recognition_008; draft_b1_m01_cloze_006; draft_b1_m01_repair_004; draft_b1_m01_contrast_002; draft_b1_m01_topup_recognition_005; draft_b1_m01_topup_cloze_007; draft_b1_m01_topup_cloze_008; draft_b1_m01_topup_satzbau_008; draft_b1_m01_topup_satzbau_009; draft_b1_m01_topup_repair_007; draft_b1_m01_topup_repair_008 | TF-B1-01-LS02-01 | T-B1-01-LS02-01-02 | Luecke | cloze | typed_short | single_token | exact | exact_only | meine | scenario_visible | english_visible_before_answer | auto_core | rg-b1-01-mein-meine-familiar-nouns | b1-01-mein-meine-familiar-siblings-006 | eligible_variant_review_after_delay | low |
| b1-01-mein-meine-familiar-vf-006-var-006 | b1-01-mein-meine-familiar-vf-006-var-006 | b1-01-mein-meine-familiar-vf-006 | draft_b1_m01_recognition_008; draft_b1_m01_cloze_006; draft_b1_m01_repair_004; draft_b1_m01_contrast_002; draft_b1_m01_topup_recognition_005; draft_b1_m01_topup_cloze_007; draft_b1_m01_topup_cloze_008; draft_b1_m01_topup_satzbau_008; draft_b1_m01_topup_satzbau_009; draft_b1_m01_topup_repair_007; draft_b1_m01_topup_repair_008 | TF-B1-01-LS02-01 | T-B1-01-LS02-01-02 | Luecke | cloze | typed_short | single_token | exact | exact_only | meine | scenario_visible | english_visible_before_answer | auto_core | rg-b1-01-mein-meine-familiar-nouns | b1-01-mein-meine-familiar-siblings-006 | eligible_variant_review_after_delay | low |
| b1-01-mein-meine-familiar-vf-006-var-007 | b1-01-mein-meine-familiar-vf-006-var-007 | b1-01-mein-meine-familiar-vf-006 | draft_b1_m01_recognition_008; draft_b1_m01_cloze_006; draft_b1_m01_repair_004; draft_b1_m01_contrast_002; draft_b1_m01_topup_recognition_005; draft_b1_m01_topup_cloze_007; draft_b1_m01_topup_cloze_008; draft_b1_m01_topup_satzbau_008; draft_b1_m01_topup_satzbau_009; draft_b1_m01_topup_repair_007; draft_b1_m01_topup_repair_008 | TF-B1-01-LS02-01 | T-B1-01-LS02-01-02 | Luecke | cloze | typed_short | single_token | exact | exact_only | meine | scenario_visible | english_visible_before_answer | auto_core | rg-b1-01-mein-meine-familiar-nouns | b1-01-mein-meine-familiar-siblings-006 | eligible_variant_review_after_delay | low |
| b1-01-mein-meine-familiar-vf-006-var-008 | b1-01-mein-meine-familiar-vf-006-var-008 | b1-01-mein-meine-familiar-vf-006 | draft_b1_m01_recognition_008; draft_b1_m01_cloze_006; draft_b1_m01_repair_004; draft_b1_m01_contrast_002; draft_b1_m01_topup_recognition_005; draft_b1_m01_topup_cloze_007; draft_b1_m01_topup_cloze_008; draft_b1_m01_topup_satzbau_008; draft_b1_m01_topup_satzbau_009; draft_b1_m01_topup_repair_007; draft_b1_m01_topup_repair_008 | TF-B1-01-LS02-01 | T-B1-01-LS02-01-02 | Luecke | cloze | typed_short | single_token | exact | exact_only | mein | scenario_visible | english_visible_before_answer | auto_core | rg-b1-01-mein-meine-familiar-nouns | b1-01-mein-meine-familiar-siblings-006 | eligible_variant_review_after_delay | low |
| b1-01-noun-capitalisation-vf-007-var-001 | b1-01-noun-capitalisation-vf-007-var-001 | b1-01-noun-capitalisation-vf-007 | draft_b1_m01_notice_002 excluded; draft_b1_m01_recognition_010; draft_b1_m01_repair_002; draft_b1_m01_topup_recognition_006; draft_b1_m01_topup_cloze_006; draft_b1_m01_topup_cloze_009; draft_b1_m01_topup_repair_006 | TF-B1-01-LS09-01 | T-B1-01-LS09-01-01 | Luecke | cloze | typed_short | single_token | normalised | normalised_if_supported | Heft | scenario_visible | english_visible_before_answer | auto_supported | rg-b1-01-noun-capitalisation-course-words | b1-01-noun-capitalisation-siblings-007 | ineligible_support_too_strong | medium: mechanics-only and fallback-sensitive; fallback policy needed |
| b1-01-noun-capitalisation-vf-007-var-002 | b1-01-noun-capitalisation-vf-007-var-002 | b1-01-noun-capitalisation-vf-007 | draft_b1_m01_notice_002 excluded; draft_b1_m01_recognition_010; draft_b1_m01_repair_002; draft_b1_m01_topup_recognition_006; draft_b1_m01_topup_cloze_006; draft_b1_m01_topup_cloze_009; draft_b1_m01_topup_repair_006 | TF-B1-01-LS09-01 | T-B1-01-LS09-01-01 | Luecke | cloze | typed_short | single_token | normalised | normalised_if_supported | App | scenario_visible | english_visible_before_answer | auto_supported | rg-b1-01-noun-capitalisation-course-words | b1-01-noun-capitalisation-siblings-007 | ineligible_support_too_strong | medium: mechanics-only and fallback-sensitive; fallback policy needed |
| b1-01-noun-capitalisation-vf-007-var-003 | b1-01-noun-capitalisation-vf-007-var-003 | b1-01-noun-capitalisation-vf-007 | draft_b1_m01_notice_002 excluded; draft_b1_m01_recognition_010; draft_b1_m01_repair_002; draft_b1_m01_topup_recognition_006; draft_b1_m01_topup_cloze_006; draft_b1_m01_topup_cloze_009; draft_b1_m01_topup_repair_006 | TF-B1-01-LS09-01 | T-B1-01-LS09-01-01 | Luecke | cloze | typed_short | single_token | normalised | normalised_if_supported | Hilfe | scenario_visible | english_visible_before_answer | auto_supported | rg-b1-01-noun-capitalisation-course-words | b1-01-noun-capitalisation-siblings-007 | ineligible_support_too_strong | medium: mechanics-only and fallback-sensitive; fallback policy needed |
| b1-01-noun-capitalisation-vf-007-var-004 | b1-01-noun-capitalisation-vf-007-var-004 | b1-01-noun-capitalisation-vf-007 | draft_b1_m01_notice_002 excluded; draft_b1_m01_recognition_010; draft_b1_m01_repair_002; draft_b1_m01_topup_recognition_006; draft_b1_m01_topup_cloze_006; draft_b1_m01_topup_cloze_009; draft_b1_m01_topup_repair_006 | TF-B1-01-LS09-01 | T-B1-01-LS09-01-01 | Luecke | cloze | typed_short | single_token | normalised | normalised_if_supported | Unterlagen | scenario_visible | english_visible_before_answer | auto_supported | rg-b1-01-noun-capitalisation-course-words | b1-01-noun-capitalisation-siblings-007 | ineligible_support_too_strong | medium: mechanics-only and fallback-sensitive; fallback policy needed |
| b1-01-w-question-repair-vf-008-var-001 | b1-01-w-question-repair-vf-008-var-001 | b1-01-w-question-repair-vf-008 | draft_b1_m01_repair_003; draft_b1_m01_topup_repair_003; draft_b1_m01_topup_contrast_002 | TF-B1-01-LS01-02 | T-B1-01-LS01-02-01 | Reparatur | repair | repair_text | repaired_sentence | normalised | multi_answer_if_explicit | Wo ist der Kursraum? | scenario_visible | english_visible_before_answer | auto_core | rg-b1-01-w-question-repair | b1-01-w-question-repair-siblings-008 | eligible_variant_review_after_delay | fallback policy needed |
| b1-01-w-question-repair-vf-008-var-002 | b1-01-w-question-repair-vf-008-var-002 | b1-01-w-question-repair-vf-008 | draft_b1_m01_repair_003; draft_b1_m01_topup_repair_003; draft_b1_m01_topup_contrast_002 | TF-B1-01-LS01-02 | T-B1-01-LS01-02-01 | Reparatur | repair | repair_text | repaired_sentence | normalised | multi_answer_if_explicit | Wo finde ich die App? | scenario_visible | english_visible_before_answer | auto_core | rg-b1-01-w-question-repair | b1-01-w-question-repair-siblings-008 | eligible_variant_review_after_delay | fallback policy needed |
| b1-01-w-question-repair-vf-008-var-003 | b1-01-w-question-repair-vf-008-var-003 | b1-01-w-question-repair-vf-008 | draft_b1_m01_repair_003; draft_b1_m01_topup_repair_003; draft_b1_m01_topup_contrast_002 | TF-B1-01-LS01-02 | T-B1-01-LS01-02-01 | Reparatur | repair | repair_text | repaired_sentence | exact | exact_only | Wo finde ich die Unterlagen? | scenario_visible | english_visible_before_answer | auto_core | rg-b1-01-w-question-repair | b1-01-w-question-repair-siblings-008 | eligible_variant_review_after_delay | low |
| b1-01-w-question-repair-vf-008-var-004 | b1-01-w-question-repair-vf-008-var-004 | b1-01-w-question-repair-vf-008 | draft_b1_m01_repair_003; draft_b1_m01_topup_repair_003; draft_b1_m01_topup_contrast_002 | TF-B1-01-LS01-02 | T-B1-01-LS01-02-01 | Reparatur | repair | repair_text | repaired_sentence | exact | exact_only | Wo ist die App? | scenario_visible | english_visible_before_answer | auto_core | rg-b1-01-w-question-repair | b1-01-w-question-repair-siblings-008 | eligible_variant_review_after_delay | low |
| b1-01-w-question-repair-vf-008-var-005 | b1-01-w-question-repair-vf-008-var-005 | b1-01-w-question-repair-vf-008 | draft_b1_m01_repair_003; draft_b1_m01_topup_repair_003; draft_b1_m01_topup_contrast_002 | TF-B1-01-LS01-02 | T-B1-01-LS01-02-01 | Reparatur | repair | repair_text | repaired_sentence | exact | exact_only | Wo ist das Heft? | scenario_visible | english_visible_before_answer | auto_core | rg-b1-01-w-question-repair | b1-01-w-question-repair-siblings-008 | eligible_variant_review_after_delay | low |
| b1-01-w-question-repair-vf-008-var-006 | b1-01-w-question-repair-vf-008-var-006 | b1-01-w-question-repair-vf-008 | draft_b1_m01_repair_003; draft_b1_m01_topup_repair_003; draft_b1_m01_topup_contrast_002 | TF-B1-01-LS01-02 | T-B1-01-LS01-02-01 | Reparatur | repair | repair_text | repaired_sentence | exact | exact_only | Wo finde ich Informationen? | scenario_visible | english_visible_before_answer | auto_core | rg-b1-01-w-question-repair | b1-01-w-question-repair-siblings-008 | eligible_variant_review_after_delay | low |
| b1-01-controlled-production-vf-009-var-001 | b1-01-controlled-production-vf-009-var-001 | b1-01-controlled-production-vf-009 | draft_b1_m01_production_001; draft_b1_m01_production_002; draft_b1_m01_production_003; draft_b1_m01_topup_production_001; draft_b1_m01_topup_production_002; draft_b1_m01_topup_production_003 | TF-B1-01-LS10-01 | T-B1-01-LS10-01-01 / T-B1-01-LS10-01-02 | Produktion | controlled_production | self_marked | self_marked_response | self-marked | self_marked_only | self-marked | checklist_visible | production_checklist_only | self_marked_production | none-production-only | b1-01-controlled-production-siblings-009 | ineligible_self_marked_production | medium: self-marked only |
| b1-01-controlled-production-vf-009-var-002 | b1-01-controlled-production-vf-009-var-002 | b1-01-controlled-production-vf-009 | draft_b1_m01_production_001; draft_b1_m01_production_002; draft_b1_m01_production_003; draft_b1_m01_topup_production_001; draft_b1_m01_topup_production_002; draft_b1_m01_topup_production_003 | TF-B1-01-LS10-01 | T-B1-01-LS10-01-01 / T-B1-01-LS10-01-02 | Produktion | controlled_production | self_marked | self_marked_response | self-marked | self_marked_only | self-marked | phrase_bank_collapsed | production_checklist_only | self_marked_production | none-production-only | b1-01-controlled-production-siblings-009 | ineligible_self_marked_production | medium: self-marked only |
| b1-01-controlled-production-vf-009-var-003 | b1-01-controlled-production-vf-009-var-003 | b1-01-controlled-production-vf-009 | draft_b1_m01_production_001; draft_b1_m01_production_002; draft_b1_m01_production_003; draft_b1_m01_topup_production_001; draft_b1_m01_topup_production_002; draft_b1_m01_topup_production_003 | TF-B1-01-LS10-01 | T-B1-01-LS10-01-01 / T-B1-01-LS10-01-02 | Produktion | controlled_production | self_marked | self_marked_response | self-marked | self_marked_only | self-marked | checklist_visible | production_checklist_only | self_marked_production | none-production-only | b1-01-controlled-production-siblings-009 | ineligible_self_marked_production | medium: self-marked only |
| b1-01-controlled-production-vf-009-var-004 | b1-01-controlled-production-vf-009-var-004 | b1-01-controlled-production-vf-009 | draft_b1_m01_production_001; draft_b1_m01_production_002; draft_b1_m01_production_003; draft_b1_m01_topup_production_001; draft_b1_m01_topup_production_002; draft_b1_m01_topup_production_003 | TF-B1-01-LS10-01 | T-B1-01-LS10-01-01 / T-B1-01-LS10-01-02 | Produktion | controlled_production | self_marked | self_marked_response | self-marked | self_marked_only | self-marked | checklist_visible | production_checklist_only | self_marked_production | none-production-only | b1-01-controlled-production-siblings-009 | ineligible_self_marked_production | medium: self-marked only |

## 6. Full Family-by-Family Metadata Mapping

### b1-01-v2-fronted-time-vf-001

| Field | Value |
|---|---|
| variantFamilyId | b1-01-v2-fronted-time-vf-001 |
| proposedSchemaFamilyId | b1-01-v2-fronted-time-vf-001 |
| displayModuleId | B1-01 |
| moduleKey | b1-01 |
| internalPlanningId | b1_m01_getting_started |
| moduleSlug | getting-started-work-course |
| moduleTitle | Getting started at work/course |
| levelTrack | B1 |
| cefrTarget | B1 |
| sourceItemIds | draft_b1_m01_cloze_003; draft_b1_m01_satzbau_002; draft_b1_m01_repair_001; draft_b1_m01_transformation_001; draft_b1_m01_topup_cloze_001; draft_b1_m01_topup_cloze_002; draft_b1_m01_topup_satzbau_001; draft_b1_m01_topup_satzbau_003; draft_b1_m01_topup_repair_001 |
| targetFamilyId | TF-B1-01-LS01-01 |
| targetId | T-B1-01-LS01-01-03 |
| familyTarget | V2 after fronted time phrase |
| familyType | Type B |
| taskTypesSupported | Luecke, Satzbau, Reparatur, Umformen |
| taskDepthSupported | cloze, sentence_building, repair, transformation |
| familyEvidenceTypeDefault | auto_core |
| evidenceInterpretation | Frame-level V2 evidence; exact verb differs by cue, so do not treat as one lexical verb target. |
| siblingVariantGroup | b1-01-v2-fronted-time-siblings-001 |
| reviewGroup | rg-b1-01-v2-fronted-time |
| maxSameSessionEvidence | 1 |
| delayedReviewEligibility | eligible_family_review_after_delay |
| supportPolicyDefault | scenario_visible |
| supportPresentationDefault | english_visible_before_answer |
| qaStatus | approve_family_with_variant_cuts |
| learnerFacingAllowed | Yes |
| schemaNotes | Cut two brauchen/V2 cross-signal variants; keep clean V2 time/place verb-position set. |

### b1-01-v2-fronted-place-vf-002

| Field | Value |
|---|---|
| variantFamilyId | b1-01-v2-fronted-place-vf-002 |
| proposedSchemaFamilyId | b1-01-v2-fronted-place-vf-002 |
| displayModuleId | B1-01 |
| moduleKey | b1-01 |
| internalPlanningId | b1_m01_getting_started |
| moduleSlug | getting-started-work-course |
| moduleTitle | Getting started at work/course |
| levelTrack | B1 |
| cefrTarget | B1 |
| sourceItemIds | draft_b1_m01_topup_satzbau_002; draft_b1_m01_topup_repair_002; draft_b1_m01_topup_cloze_002 |
| targetFamilyId | TF-B1-01-LS01-01 |
| targetId | T-B1-01-LS01-01-03 |
| familyTarget | V2 after fronted place phrase |
| familyType | Type B |
| taskTypesSupported | Luecke, Satzbau, Reparatur |
| taskDepthSupported | cloze, sentence_building, repair |
| familyEvidenceTypeDefault | mixed_auto_core_auto_supported |
| evidenceInterpretation | Frame-level V2 evidence for place-first main clauses. |
| siblingVariantGroup | b1-01-v2-fronted-place-siblings-002 |
| reviewGroup | rg-b1-01-v2-fronted-place |
| maxSameSessionEvidence | 1 |
| delayedReviewEligibility | eligible_family_review_after_delay |
| supportPolicyDefault | scenario_visible |
| supportPresentationDefault | english_visible_before_answer |
| qaStatus | revise_family_and_approve |
| learnerFacingAllowed | Yes |
| schemaNotes | Cut two weak/unnatural variants and revise one place-fronted sentence. |

### b1-01-w-question-location-vf-003

| Field | Value |
|---|---|
| variantFamilyId | b1-01-w-question-location-vf-003 |
| proposedSchemaFamilyId | b1-01-w-question-location-vf-003 |
| displayModuleId | B1-01 |
| moduleKey | b1-01 |
| internalPlanningId | b1_m01_getting_started |
| moduleSlug | getting-started-work-course |
| moduleTitle | Getting started at work/course |
| levelTrack | B1 |
| cefrTarget | B1 |
| sourceItemIds | draft_b1_m01_recognition_003; draft_b1_m01_repair_003; draft_b1_m01_satzbau_003; draft_b1_m01_topup_recognition_002; draft_b1_m01_topup_cloze_003; draft_b1_m01_topup_satzbau_004; draft_b1_m01_topup_repair_003; draft_b1_m01_topup_contrast_002 |
| targetFamilyId | TF-B1-01-LS01-02 |
| targetId | T-B1-01-LS01-02-01 |
| familyTarget | W-question word order for course orientation |
| familyType | Type B |
| taskTypesSupported | Auswahl, Luecke, Satzbau, Reparatur, Kontrast |
| taskDepthSupported | recognition, cloze, sentence_building, repair, contrast |
| familyEvidenceTypeDefault | auto_core |
| evidenceInterpretation | Question-frame evidence; some variants target ist, others finde. |
| siblingVariantGroup | b1-01-w-question-location-siblings-003 |
| reviewGroup | rg-b1-01-w-question-orientation |
| maxSameSessionEvidence | 1 |
| delayedReviewEligibility | eligible_family_review_after_delay |
| supportPolicyDefault | scenario_visible |
| supportPresentationDefault | english_visible_before_answer |
| qaStatus | approve_family_as_is |
| learnerFacingAllowed | Yes |
| schemaNotes | Good W-question family; keep all variants. |

### b1-01-yes-no-question-vf-004

| Field | Value |
|---|---|
| variantFamilyId | b1-01-yes-no-question-vf-004 |
| proposedSchemaFamilyId | b1-01-yes-no-question-vf-004 |
| displayModuleId | B1-01 |
| moduleKey | b1-01 |
| internalPlanningId | b1_m01_getting_started |
| moduleSlug | getting-started-work-course |
| moduleTitle | Getting started at work/course |
| levelTrack | B1 |
| cefrTarget | B1 |
| sourceItemIds | draft_b1_m01_recognition_004; draft_b1_m01_cloze_008; draft_b1_m01_satzbau_004; draft_b1_m01_contrast_003; draft_b1_m01_topup_recognition_003; draft_b1_m01_topup_cloze_004; draft_b1_m01_topup_satzbau_005; draft_b1_m01_topup_satzbau_006 |
| targetFamilyId | TF-B1-01-LS01-02 |
| targetId | T-B1-01-LS01-02-02 |
| familyTarget | Yes/no question word order |
| familyType | Type B |
| taskTypesSupported | Auswahl, Luecke, Satzbau, Kontrast |
| taskDepthSupported | recognition, cloze, sentence_building, contrast |
| familyEvidenceTypeDefault | auto_core |
| evidenceInterpretation | Question-frame evidence; target answer varies by verb. |
| siblingVariantGroup | b1-01-yes-no-question-siblings-004 |
| reviewGroup | rg-b1-01-yes-no-question-order |
| maxSameSessionEvidence | 1 |
| delayedReviewEligibility | eligible_family_review_after_delay |
| supportPolicyDefault | scenario_visible |
| supportPresentationDefault | english_visible_before_answer |
| qaStatus | approve_family_as_is |
| learnerFacingAllowed | Yes |
| schemaNotes | Good yes/no question family; keep exact sentence-start forms with fallback caveats. |

### b1-01-brauchen-acc-vf-005

| Field | Value |
|---|---|
| variantFamilyId | b1-01-brauchen-acc-vf-005 |
| proposedSchemaFamilyId | b1-01-brauchen-acc-vf-005 |
| displayModuleId | B1-01 |
| moduleKey | b1-01 |
| internalPlanningId | b1_m01_getting_started |
| moduleSlug | getting-started-work-course |
| moduleTitle | Getting started at work/course |
| levelTrack | B1 |
| cefrTarget | B1 |
| sourceItemIds | draft_b1_m01_recognition_006; draft_b1_m01_cloze_005; draft_b1_m01_cloze_007; draft_b1_m01_repair_005; draft_b1_m01_satzbau_005; draft_b1_m01_topup_recognition_004; draft_b1_m01_topup_cloze_005; draft_b1_m01_topup_satzbau_007 |
| targetFamilyId | TF-B1-01-LS04-01 |
| targetId | T-B1-01-LS04-01-01 |
| familyTarget | brauchen as basic course/work survival frame |
| familyType | Type A |
| taskTypesSupported | Auswahl, Luecke, Satzbau, Reparatur, Produktion support only |
| taskDepthSupported | recognition, cloze, sentence_building, repair, controlled_production |
| familyEvidenceTypeDefault | auto_supported |
| evidenceInterpretation | Capped survival/scaffold evidence; not B1-depth proof. |
| siblingVariantGroup | b1-01-brauchen-acc-siblings-005 |
| reviewGroup | rg-b1-01-brauchen-acc-survival |
| maxSameSessionEvidence | 1 |
| delayedReviewEligibility | eligible_family_review_after_delay |
| supportPolicyDefault | scenario_visible |
| supportPresentationDefault | english_visible_before_answer |
| qaStatus | revise_family_and_approve |
| learnerFacingAllowed | Yes |
| schemaNotes | Keep the family but downgrade evidence and cut the V2 cross-signal variant; cap brauchen at 5. |

### b1-01-mein-meine-familiar-vf-006

| Field | Value |
|---|---|
| variantFamilyId | b1-01-mein-meine-familiar-vf-006 |
| proposedSchemaFamilyId | b1-01-mein-meine-familiar-vf-006 |
| displayModuleId | B1-01 |
| moduleKey | b1-01 |
| internalPlanningId | b1_m01_getting_started |
| moduleSlug | getting-started-work-course |
| moduleTitle | Getting started at work/course |
| levelTrack | B1 |
| cefrTarget | B1 |
| sourceItemIds | draft_b1_m01_recognition_008; draft_b1_m01_cloze_006; draft_b1_m01_repair_004; draft_b1_m01_contrast_002; draft_b1_m01_topup_recognition_005; draft_b1_m01_topup_cloze_007; draft_b1_m01_topup_cloze_008; draft_b1_m01_topup_satzbau_008; draft_b1_m01_topup_satzbau_009; draft_b1_m01_topup_repair_007; draft_b1_m01_topup_repair_008 |
| targetFamilyId | TF-B1-01-LS02-01 |
| targetId | T-B1-01-LS02-01-02 |
| familyTarget | mein/meine with familiar B1-01 nouns |
| familyType | Type B |
| taskTypesSupported | Auswahl, Luecke, Satzbau, Reparatur, Kontrast |
| taskDepthSupported | recognition, cloze, sentence_building, repair, contrast |
| familyEvidenceTypeDefault | auto_core |
| evidenceInterpretation | Familiar-noun possessive awareness only; not a full article/case table. |
| siblingVariantGroup | b1-01-mein-meine-familiar-siblings-006 |
| reviewGroup | rg-b1-01-mein-meine-familiar-nouns |
| maxSameSessionEvidence | 1 |
| delayedReviewEligibility | eligible_family_review_after_delay |
| supportPolicyDefault | scenario_visible |
| supportPresentationDefault | english_visible_before_answer |
| qaStatus | revise_family_and_approve |
| learnerFacingAllowed | Yes |
| schemaNotes | Keep all variants with two wording revisions to avoid sentence-start capitalisation traps. |

### b1-01-noun-capitalisation-vf-007

| Field | Value |
|---|---|
| variantFamilyId | b1-01-noun-capitalisation-vf-007 |
| proposedSchemaFamilyId | b1-01-noun-capitalisation-vf-007 |
| displayModuleId | B1-01 |
| moduleKey | b1-01 |
| internalPlanningId | b1_m01_getting_started |
| moduleSlug | getting-started-work-course |
| moduleTitle | Getting started at work/course |
| levelTrack | B1 |
| cefrTarget | B1 |
| sourceItemIds | draft_b1_m01_notice_002 excluded; draft_b1_m01_recognition_010; draft_b1_m01_repair_002; draft_b1_m01_topup_recognition_006; draft_b1_m01_topup_cloze_006; draft_b1_m01_topup_cloze_009; draft_b1_m01_topup_repair_006 |
| targetFamilyId | TF-B1-01-LS09-01 |
| targetId | T-B1-01-LS09-01-01 |
| familyTarget | German noun capitalisation in B1-01 course words |
| familyType | Type B |
| taskTypesSupported | Auswahl, Luecke, Reparatur |
| taskDepthSupported | recognition, cloze, repair |
| familyEvidenceTypeDefault | auto_supported |
| evidenceInterpretation | Mechanics/support evidence; do not infer broad vocabulary or grammar control. |
| siblingVariantGroup | b1-01-noun-capitalisation-siblings-007 |
| reviewGroup | rg-b1-01-noun-capitalisation-course-words |
| maxSameSessionEvidence | 1 |
| delayedReviewEligibility | ineligible_support_too_strong |
| supportPolicyDefault | scenario_visible |
| supportPresentationDefault | english_visible_before_answer |
| qaStatus | approve_family_with_variant_cuts |
| learnerFacingAllowed | Yes |
| schemaNotes | Keep four mechanics variants; cut Kurs overlap. |

### b1-01-w-question-repair-vf-008

| Field | Value |
|---|---|
| variantFamilyId | b1-01-w-question-repair-vf-008 |
| proposedSchemaFamilyId | b1-01-w-question-repair-vf-008 |
| displayModuleId | B1-01 |
| moduleKey | b1-01 |
| internalPlanningId | b1_m01_getting_started |
| moduleSlug | getting-started-work-course |
| moduleTitle | Getting started at work/course |
| levelTrack | B1 |
| cefrTarget | B1 |
| sourceItemIds | draft_b1_m01_repair_003; draft_b1_m01_topup_repair_003; draft_b1_m01_topup_contrast_002 |
| targetFamilyId | TF-B1-01-LS01-02 |
| targetId | T-B1-01-LS01-02-01 |
| familyTarget | Repair W-question word order |
| familyType | Type B |
| taskTypesSupported | Reparatur, Kontrast |
| taskDepthSupported | repair, contrast |
| familyEvidenceTypeDefault | auto_core |
| evidenceInterpretation | Repair-level evidence for W-question order, stronger than recognition. |
| siblingVariantGroup | b1-01-w-question-repair-siblings-008 |
| reviewGroup | rg-b1-01-w-question-repair |
| maxSameSessionEvidence | 1 |
| delayedReviewEligibility | eligible_family_review_after_delay |
| supportPolicyDefault | scenario_visible |
| supportPresentationDefault | english_visible_before_answer |
| qaStatus | approve_family_as_is |
| learnerFacingAllowed | Yes |
| schemaNotes | Repair family is strong and focused. |

### b1-01-controlled-production-vf-009

| Field | Value |
|---|---|
| variantFamilyId | b1-01-controlled-production-vf-009 |
| proposedSchemaFamilyId | b1-01-controlled-production-vf-009 |
| displayModuleId | B1-01 |
| moduleKey | b1-01 |
| internalPlanningId | b1_m01_getting_started |
| moduleSlug | getting-started-work-course |
| moduleTitle | Getting started at work/course |
| levelTrack | B1 |
| cefrTarget | B1 |
| sourceItemIds | draft_b1_m01_production_001; draft_b1_m01_production_002; draft_b1_m01_production_003; draft_b1_m01_topup_production_001; draft_b1_m01_topup_production_002; draft_b1_m01_topup_production_003 |
| targetFamilyId | TF-B1-01-LS10-01 |
| targetId | T-B1-01-LS10-01-01 / T-B1-01-LS10-01-02 |
| familyTarget | Controlled self-marked course-entry production |
| familyType | Type B |
| taskTypesSupported | Produktion |
| taskDepthSupported | controlled_production |
| familyEvidenceTypeDefault | self_marked_production |
| evidenceInterpretation | Self-marked production evidence only; no correctness. |
| siblingVariantGroup | b1-01-controlled-production-siblings-009 |
| reviewGroup | none-production-only |
| maxSameSessionEvidence | 1 |
| delayedReviewEligibility | ineligible_self_marked_production |
| supportPolicyDefault | checklist_visible or phrase_bank_collapsed |
| supportPresentationDefault | production_checklist_only |
| qaStatus | approve_family_as_is |
| learnerFacingAllowed | Yes |
| schemaNotes | Production remains self-marked only; no correctness evidence. |

## 7. Full Variant-by-Variant Metadata Mapping

### b1-01-v2-fronted-time-vf-001-var-001

| Field | Value |
|---|---|
| variantId | b1-01-v2-fronted-time-vf-001-var-001 |
| proposedSchemaVariantId | b1-01-v2-fronted-time-vf-001-var-001 |
| parentVariantFamilyId | b1-01-v2-fronted-time-vf-001 |
| proposedSchemaFamilyId | b1-01-v2-fronted-time-vf-001 |
| displayModuleId | B1-01 |
| moduleKey | b1-01 |
| internalPlanningId | b1_m01_getting_started |
| moduleSlug | getting-started-work-course |
| moduleTitle | Getting started at work/course |
| levelTrack | B1 |
| cefrTarget | B1 |
| sourceItemIds | draft_b1_m01_cloze_003; draft_b1_m01_satzbau_002; draft_b1_m01_repair_001; draft_b1_m01_transformation_001; draft_b1_m01_topup_cloze_001; draft_b1_m01_topup_cloze_002; draft_b1_m01_topup_satzbau_001; draft_b1_m01_topup_satzbau_003; draft_b1_m01_topup_repair_001 |
| targetFamilyId | TF-B1-01-LS01-01 |
| targetId | T-B1-01-LS01-01-03 |
| learner cue | Today I am in the course. |
| prompt / sentence / chunks | Heute ___ ich im Kurs. |
| givenPhrase | — |
| target answer | bin |
| accepted answers | bin |
| feedback micro-rule | Heute bin ich im Kurs. After a fronted time phrase, the verb comes second. |
| taskType | Luecke |
| taskDepth | cloze |
| answerMode | typed_short |
| answerShape | single_token |
| correctnessPolicy | exact |
| acceptedAnswerPolicy | exact_only |
| supportPolicy | scenario_visible |
| supportPresentation | english_visible_before_answer |
| planningEvidenceLabel | Core Evidence |
| evidenceType | auto_core |
| reviewGroup | rg-b1-01-v2-fronted-time |
| siblingVariantGroup | b1-01-v2-fronted-time-siblings-001 |
| reviewEligibilityDefault | eligible_variant_review_after_delay |
| grammarFocus | V2 after fronted time phrase |
| vocabularyFocus | B1-01 course/work entry vocabulary |
| redemittelFocus | course-entry sentence pattern |
| skillTags | sentence_control |
| errorCategories | wrong_word_order |
| sourceRisk | low; QA-approved survivor |
| schemaRisk | low |
| qaStatus | approved_as_is |
| learnerFacingAllowed | Yes |
| schemaNotes | — |

### b1-01-v2-fronted-time-vf-001-var-002

| Field | Value |
|---|---|
| variantId | b1-01-v2-fronted-time-vf-001-var-002 |
| proposedSchemaVariantId | b1-01-v2-fronted-time-vf-001-var-002 |
| parentVariantFamilyId | b1-01-v2-fronted-time-vf-001 |
| proposedSchemaFamilyId | b1-01-v2-fronted-time-vf-001 |
| displayModuleId | B1-01 |
| moduleKey | b1-01 |
| internalPlanningId | b1_m01_getting_started |
| moduleSlug | getting-started-work-course |
| moduleTitle | Getting started at work/course |
| levelTrack | B1 |
| cefrTarget | B1 |
| sourceItemIds | draft_b1_m01_cloze_003; draft_b1_m01_satzbau_002; draft_b1_m01_repair_001; draft_b1_m01_transformation_001; draft_b1_m01_topup_cloze_001; draft_b1_m01_topup_cloze_002; draft_b1_m01_topup_satzbau_001; draft_b1_m01_topup_satzbau_003; draft_b1_m01_topup_repair_001 |
| targetFamilyId | TF-B1-01-LS01-01 |
| targetId | T-B1-01-LS01-01-03 |
| learner cue | Tomorrow I am in the course. |
| prompt / sentence / chunks | Morgen ___ ich im Kurs. |
| givenPhrase | — |
| target answer | bin |
| accepted answers | bin |
| feedback micro-rule | Morgen bin ich im Kurs. The verb stays in position 2. |
| taskType | Luecke |
| taskDepth | cloze |
| answerMode | typed_short |
| answerShape | single_token |
| correctnessPolicy | exact |
| acceptedAnswerPolicy | exact_only |
| supportPolicy | scenario_visible |
| supportPresentation | english_visible_before_answer |
| planningEvidenceLabel | Core Evidence |
| evidenceType | auto_core |
| reviewGroup | rg-b1-01-v2-fronted-time |
| siblingVariantGroup | b1-01-v2-fronted-time-siblings-001 |
| reviewEligibilityDefault | eligible_variant_review_after_delay |
| grammarFocus | V2 after fronted time phrase |
| vocabularyFocus | B1-01 course/work entry vocabulary |
| redemittelFocus | course-entry sentence pattern |
| skillTags | sentence_control |
| errorCategories | wrong_word_order |
| sourceRisk | low; QA-approved survivor |
| schemaRisk | low |
| qaStatus | approved_as_is |
| learnerFacingAllowed | Yes |
| schemaNotes | — |

### b1-01-v2-fronted-time-vf-001-var-003

| Field | Value |
|---|---|
| variantId | b1-01-v2-fronted-time-vf-001-var-003 |
| proposedSchemaVariantId | b1-01-v2-fronted-time-vf-001-var-003 |
| parentVariantFamilyId | b1-01-v2-fronted-time-vf-001 |
| proposedSchemaFamilyId | b1-01-v2-fronted-time-vf-001 |
| displayModuleId | B1-01 |
| moduleKey | b1-01 |
| internalPlanningId | b1_m01_getting_started |
| moduleSlug | getting-started-work-course |
| moduleTitle | Getting started at work/course |
| levelTrack | B1 |
| cefrTarget | B1 |
| sourceItemIds | draft_b1_m01_cloze_003; draft_b1_m01_satzbau_002; draft_b1_m01_repair_001; draft_b1_m01_transformation_001; draft_b1_m01_topup_cloze_001; draft_b1_m01_topup_cloze_002; draft_b1_m01_topup_satzbau_001; draft_b1_m01_topup_satzbau_003; draft_b1_m01_topup_repair_001 |
| targetFamilyId | TF-B1-01-LS01-01 |
| targetId | T-B1-01-LS01-01-03 |
| learner cue | On Monday I am in the course. |
| prompt / sentence / chunks | Am Montag ___ ich im Kurs. |
| givenPhrase | — |
| target answer | bin |
| accepted answers | bin |
| feedback micro-rule | Am Montag bin ich im Kurs. Time first, verb second. |
| taskType | Luecke |
| taskDepth | cloze |
| answerMode | typed_short |
| answerShape | single_token |
| correctnessPolicy | exact |
| acceptedAnswerPolicy | exact_only |
| supportPolicy | scenario_visible |
| supportPresentation | english_visible_before_answer |
| planningEvidenceLabel | Core Evidence |
| evidenceType | auto_core |
| reviewGroup | rg-b1-01-v2-fronted-time |
| siblingVariantGroup | b1-01-v2-fronted-time-siblings-001 |
| reviewEligibilityDefault | eligible_variant_review_after_delay |
| grammarFocus | V2 after fronted time phrase |
| vocabularyFocus | B1-01 course/work entry vocabulary |
| redemittelFocus | course-entry sentence pattern |
| skillTags | sentence_control |
| errorCategories | wrong_word_order |
| sourceRisk | low; QA-approved survivor |
| schemaRisk | low |
| qaStatus | approved_as_is |
| learnerFacingAllowed | Yes |
| schemaNotes | — |

### b1-01-v2-fronted-time-vf-001-var-004

| Field | Value |
|---|---|
| variantId | b1-01-v2-fronted-time-vf-001-var-004 |
| proposedSchemaVariantId | b1-01-v2-fronted-time-vf-001-var-004 |
| parentVariantFamilyId | b1-01-v2-fronted-time-vf-001 |
| proposedSchemaFamilyId | b1-01-v2-fronted-time-vf-001 |
| displayModuleId | B1-01 |
| moduleKey | b1-01 |
| internalPlanningId | b1_m01_getting_started |
| moduleSlug | getting-started-work-course |
| moduleTitle | Getting started at work/course |
| levelTrack | B1 |
| cefrTarget | B1 |
| sourceItemIds | draft_b1_m01_cloze_003; draft_b1_m01_satzbau_002; draft_b1_m01_repair_001; draft_b1_m01_transformation_001; draft_b1_m01_topup_cloze_001; draft_b1_m01_topup_cloze_002; draft_b1_m01_topup_satzbau_001; draft_b1_m01_topup_satzbau_003; draft_b1_m01_topup_repair_001 |
| targetFamilyId | TF-B1-01-LS01-01 |
| targetId | T-B1-01-LS01-01-03 |
| learner cue | Today I learn German. |
| prompt / sentence / chunks | Heute ___ ich Deutsch. |
| givenPhrase | — |
| target answer | lerne |
| accepted answers | lerne |
| feedback micro-rule | Heute lerne ich Deutsch. The finite verb comes after Heute. |
| taskType | Luecke |
| taskDepth | cloze |
| answerMode | typed_short |
| answerShape | single_token |
| correctnessPolicy | exact |
| acceptedAnswerPolicy | exact_only |
| supportPolicy | scenario_visible |
| supportPresentation | english_visible_before_answer |
| planningEvidenceLabel | Core Evidence |
| evidenceType | auto_core |
| reviewGroup | rg-b1-01-v2-fronted-time |
| siblingVariantGroup | b1-01-v2-fronted-time-siblings-001 |
| reviewEligibilityDefault | eligible_variant_review_after_delay |
| grammarFocus | V2 after fronted time phrase |
| vocabularyFocus | B1-01 course/work entry vocabulary |
| redemittelFocus | course-entry sentence pattern |
| skillTags | sentence_control |
| errorCategories | wrong_word_order |
| sourceRisk | low; QA-approved survivor |
| schemaRisk | low |
| qaStatus | approved_as_is |
| learnerFacingAllowed | Yes |
| schemaNotes | — |

### b1-01-v2-fronted-time-vf-001-var-005

| Field | Value |
|---|---|
| variantId | b1-01-v2-fronted-time-vf-001-var-005 |
| proposedSchemaVariantId | b1-01-v2-fronted-time-vf-001-var-005 |
| parentVariantFamilyId | b1-01-v2-fronted-time-vf-001 |
| proposedSchemaFamilyId | b1-01-v2-fronted-time-vf-001 |
| displayModuleId | B1-01 |
| moduleKey | b1-01 |
| internalPlanningId | b1_m01_getting_started |
| moduleSlug | getting-started-work-course |
| moduleTitle | Getting started at work/course |
| levelTrack | B1 |
| cefrTarget | B1 |
| sourceItemIds | draft_b1_m01_cloze_003; draft_b1_m01_satzbau_002; draft_b1_m01_repair_001; draft_b1_m01_transformation_001; draft_b1_m01_topup_cloze_001; draft_b1_m01_topup_cloze_002; draft_b1_m01_topup_satzbau_001; draft_b1_m01_topup_satzbau_003; draft_b1_m01_topup_repair_001 |
| targetFamilyId | TF-B1-01-LS01-01 |
| targetId | T-B1-01-LS01-01-03 |
| learner cue | Tomorrow I learn German. |
| prompt / sentence / chunks | Morgen ___ ich Deutsch. |
| givenPhrase | — |
| target answer | lerne |
| accepted answers | lerne |
| feedback micro-rule | Morgen lerne ich Deutsch. The verb is still second. |
| taskType | Luecke |
| taskDepth | cloze |
| answerMode | typed_short |
| answerShape | single_token |
| correctnessPolicy | exact |
| acceptedAnswerPolicy | exact_only |
| supportPolicy | scenario_visible |
| supportPresentation | english_visible_before_answer |
| planningEvidenceLabel | Core Evidence |
| evidenceType | auto_core |
| reviewGroup | rg-b1-01-v2-fronted-time |
| siblingVariantGroup | b1-01-v2-fronted-time-siblings-001 |
| reviewEligibilityDefault | eligible_variant_review_after_delay |
| grammarFocus | V2 after fronted time phrase |
| vocabularyFocus | B1-01 course/work entry vocabulary |
| redemittelFocus | course-entry sentence pattern |
| skillTags | sentence_control |
| errorCategories | wrong_word_order |
| sourceRisk | low; QA-approved survivor |
| schemaRisk | low |
| qaStatus | approved_as_is |
| learnerFacingAllowed | Yes |
| schemaNotes | — |

### b1-01-v2-fronted-time-vf-001-var-006

| Field | Value |
|---|---|
| variantId | b1-01-v2-fronted-time-vf-001-var-006 |
| proposedSchemaVariantId | b1-01-v2-fronted-time-vf-001-var-006 |
| parentVariantFamilyId | b1-01-v2-fronted-time-vf-001 |
| proposedSchemaFamilyId | b1-01-v2-fronted-time-vf-001 |
| displayModuleId | B1-01 |
| moduleKey | b1-01 |
| internalPlanningId | b1_m01_getting_started |
| moduleSlug | getting-started-work-course |
| moduleTitle | Getting started at work/course |
| levelTrack | B1 |
| cefrTarget | B1 |
| sourceItemIds | draft_b1_m01_cloze_003; draft_b1_m01_satzbau_002; draft_b1_m01_repair_001; draft_b1_m01_transformation_001; draft_b1_m01_topup_cloze_001; draft_b1_m01_topup_cloze_002; draft_b1_m01_topup_satzbau_001; draft_b1_m01_topup_satzbau_003; draft_b1_m01_topup_repair_001 |
| targetFamilyId | TF-B1-01-LS01-01 |
| targetId | T-B1-01-LS01-01-03 |
| learner cue | In the morning I learn German. |
| prompt / sentence / chunks | Am Vormittag ___ ich Deutsch. |
| givenPhrase | — |
| target answer | lerne |
| accepted answers | lerne |
| feedback micro-rule | Am Vormittag lerne ich Deutsch. The time phrase takes position 1. |
| taskType | Luecke |
| taskDepth | cloze |
| answerMode | typed_short |
| answerShape | single_token |
| correctnessPolicy | exact |
| acceptedAnswerPolicy | exact_only |
| supportPolicy | scenario_visible |
| supportPresentation | english_visible_before_answer |
| planningEvidenceLabel | Core Evidence |
| evidenceType | auto_core |
| reviewGroup | rg-b1-01-v2-fronted-time |
| siblingVariantGroup | b1-01-v2-fronted-time-siblings-001 |
| reviewEligibilityDefault | eligible_variant_review_after_delay |
| grammarFocus | V2 after fronted time phrase |
| vocabularyFocus | B1-01 course/work entry vocabulary |
| redemittelFocus | course-entry sentence pattern |
| skillTags | sentence_control |
| errorCategories | wrong_word_order |
| sourceRisk | low; QA-approved survivor |
| schemaRisk | low |
| qaStatus | approved_as_is |
| learnerFacingAllowed | Yes |
| schemaNotes | — |

### b1-01-v2-fronted-time-vf-001-var-009

| Field | Value |
|---|---|
| variantId | b1-01-v2-fronted-time-vf-001-var-009 |
| proposedSchemaVariantId | b1-01-v2-fronted-time-vf-001-var-009 |
| parentVariantFamilyId | b1-01-v2-fronted-time-vf-001 |
| proposedSchemaFamilyId | b1-01-v2-fronted-time-vf-001 |
| displayModuleId | B1-01 |
| moduleKey | b1-01 |
| internalPlanningId | b1_m01_getting_started |
| moduleSlug | getting-started-work-course |
| moduleTitle | Getting started at work/course |
| levelTrack | B1 |
| cefrTarget | B1 |
| sourceItemIds | draft_b1_m01_cloze_003; draft_b1_m01_satzbau_002; draft_b1_m01_repair_001; draft_b1_m01_transformation_001; draft_b1_m01_topup_cloze_001; draft_b1_m01_topup_cloze_002; draft_b1_m01_topup_satzbau_001; draft_b1_m01_topup_satzbau_003; draft_b1_m01_topup_repair_001 |
| targetFamilyId | TF-B1-01-LS01-01 |
| targetId | T-B1-01-LS01-01-03 |
| learner cue | Today I have the documents. |
| prompt / sentence / chunks | Heute ___ ich [die Unterlagen]. |
| givenPhrase | die Unterlagen |
| target answer | habe |
| accepted answers | habe |
| feedback micro-rule | Heute habe ich die Unterlagen. The verb comes second. |
| taskType | Luecke |
| taskDepth | cloze |
| answerMode | typed_short |
| answerShape | single_token |
| correctnessPolicy | exact |
| acceptedAnswerPolicy | exact_only |
| supportPolicy | scenario_visible |
| supportPresentation | english_visible_before_answer |
| planningEvidenceLabel | Core Evidence |
| evidenceType | auto_core |
| reviewGroup | rg-b1-01-v2-fronted-time |
| siblingVariantGroup | b1-01-v2-fronted-time-siblings-001 |
| reviewEligibilityDefault | eligible_variant_review_after_delay |
| grammarFocus | V2 after fronted time phrase |
| vocabularyFocus | B1-01 course/work entry vocabulary |
| redemittelFocus | course-entry sentence pattern |
| skillTags | sentence_control |
| errorCategories | wrong_word_order |
| sourceRisk | low; QA-approved survivor |
| schemaRisk | low |
| qaStatus | approved_as_is |
| learnerFacingAllowed | Yes |
| schemaNotes | — |

### b1-01-v2-fronted-time-vf-001-var-010

| Field | Value |
|---|---|
| variantId | b1-01-v2-fronted-time-vf-001-var-010 |
| proposedSchemaVariantId | b1-01-v2-fronted-time-vf-001-var-010 |
| parentVariantFamilyId | b1-01-v2-fronted-time-vf-001 |
| proposedSchemaFamilyId | b1-01-v2-fronted-time-vf-001 |
| displayModuleId | B1-01 |
| moduleKey | b1-01 |
| internalPlanningId | b1_m01_getting_started |
| moduleSlug | getting-started-work-course |
| moduleTitle | Getting started at work/course |
| levelTrack | B1 |
| cefrTarget | B1 |
| sourceItemIds | draft_b1_m01_cloze_003; draft_b1_m01_satzbau_002; draft_b1_m01_repair_001; draft_b1_m01_transformation_001; draft_b1_m01_topup_cloze_001; draft_b1_m01_topup_cloze_002; draft_b1_m01_topup_satzbau_001; draft_b1_m01_topup_satzbau_003; draft_b1_m01_topup_repair_001 |
| targetFamilyId | TF-B1-01-LS01-01 |
| targetId | T-B1-01-LS01-01-03 |
| learner cue | Tomorrow I have a notebook. |
| prompt / sentence / chunks | Morgen ___ ich [ein Heft]. |
| givenPhrase | ein Heft |
| target answer | habe |
| accepted answers | habe |
| feedback micro-rule | Morgen habe ich ein Heft. The time phrase is first; the verb is second. |
| taskType | Luecke |
| taskDepth | cloze |
| answerMode | typed_short |
| answerShape | single_token |
| correctnessPolicy | exact |
| acceptedAnswerPolicy | exact_only |
| supportPolicy | scenario_visible |
| supportPresentation | english_visible_before_answer |
| planningEvidenceLabel | Core Evidence |
| evidenceType | auto_core |
| reviewGroup | rg-b1-01-v2-fronted-time |
| siblingVariantGroup | b1-01-v2-fronted-time-siblings-001 |
| reviewEligibilityDefault | eligible_variant_review_after_delay |
| grammarFocus | V2 after fronted time phrase |
| vocabularyFocus | B1-01 course/work entry vocabulary |
| redemittelFocus | course-entry sentence pattern |
| skillTags | sentence_control |
| errorCategories | wrong_word_order |
| sourceRisk | low; QA-approved survivor |
| schemaRisk | low |
| qaStatus | approved_as_is |
| learnerFacingAllowed | Yes |
| schemaNotes | — |

### b1-01-v2-fronted-place-vf-002-var-001

| Field | Value |
|---|---|
| variantId | b1-01-v2-fronted-place-vf-002-var-001 |
| proposedSchemaVariantId | b1-01-v2-fronted-place-vf-002-var-001 |
| parentVariantFamilyId | b1-01-v2-fronted-place-vf-002 |
| proposedSchemaFamilyId | b1-01-v2-fronted-place-vf-002 |
| displayModuleId | B1-01 |
| moduleKey | b1-01 |
| internalPlanningId | b1_m01_getting_started |
| moduleSlug | getting-started-work-course |
| moduleTitle | Getting started at work/course |
| levelTrack | B1 |
| cefrTarget | B1 |
| sourceItemIds | draft_b1_m01_topup_satzbau_002; draft_b1_m01_topup_repair_002; draft_b1_m01_topup_cloze_002 |
| targetFamilyId | TF-B1-01-LS01-01 |
| targetId | T-B1-01-LS01-01-03 |
| learner cue | In the course I learn German. |
| prompt / sentence / chunks | Im Kurs ___ ich Deutsch. |
| givenPhrase | — |
| target answer | lerne |
| accepted answers | lerne |
| feedback micro-rule | Im Kurs lerne ich Deutsch. The verb comes after the place phrase. |
| taskType | Luecke |
| taskDepth | cloze |
| answerMode | typed_short |
| answerShape | single_token |
| correctnessPolicy | exact |
| acceptedAnswerPolicy | exact_only |
| supportPolicy | scenario_visible |
| supportPresentation | english_visible_before_answer |
| planningEvidenceLabel | Core Evidence |
| evidenceType | auto_core |
| reviewGroup | rg-b1-01-v2-fronted-place |
| siblingVariantGroup | b1-01-v2-fronted-place-siblings-002 |
| reviewEligibilityDefault | eligible_variant_review_after_delay |
| grammarFocus | V2 after fronted place phrase |
| vocabularyFocus | B1-01 course/work entry vocabulary |
| redemittelFocus | course-entry sentence pattern |
| skillTags | sentence_control |
| errorCategories | wrong_word_order |
| sourceRisk | low; QA-approved survivor |
| schemaRisk | low |
| qaStatus | approved_as_is |
| learnerFacingAllowed | Yes |
| schemaNotes | — |

### b1-01-v2-fronted-place-vf-002-var-002

| Field | Value |
|---|---|
| variantId | b1-01-v2-fronted-place-vf-002-var-002 |
| proposedSchemaVariantId | b1-01-v2-fronted-place-vf-002-var-002 |
| parentVariantFamilyId | b1-01-v2-fronted-place-vf-002 |
| proposedSchemaFamilyId | b1-01-v2-fronted-place-vf-002 |
| displayModuleId | B1-01 |
| moduleKey | b1-01 |
| internalPlanningId | b1_m01_getting_started |
| moduleSlug | getting-started-work-course |
| moduleTitle | Getting started at work/course |
| levelTrack | B1 |
| cefrTarget | B1 |
| sourceItemIds | draft_b1_m01_topup_satzbau_002; draft_b1_m01_topup_repair_002; draft_b1_m01_topup_cloze_002 |
| targetFamilyId | TF-B1-01-LS01-01 |
| targetId | T-B1-01-LS01-01-03 |
| learner cue | In the course room I learn German. |
| prompt / sentence / chunks | Im Kursraum ___ ich Deutsch. |
| givenPhrase | — |
| target answer | lerne |
| accepted answers | lerne |
| feedback micro-rule | Im Kursraum lerne ich Deutsch. The verb is in position 2. |
| taskType | Luecke |
| taskDepth | cloze |
| answerMode | typed_short |
| answerShape | single_token |
| correctnessPolicy | exact |
| acceptedAnswerPolicy | exact_only |
| supportPolicy | scenario_visible |
| supportPresentation | english_visible_before_answer |
| planningEvidenceLabel | Core Evidence |
| evidenceType | auto_core |
| reviewGroup | rg-b1-01-v2-fronted-place |
| siblingVariantGroup | b1-01-v2-fronted-place-siblings-002 |
| reviewEligibilityDefault | eligible_variant_review_after_delay |
| grammarFocus | V2 after fronted place phrase |
| vocabularyFocus | B1-01 course/work entry vocabulary |
| redemittelFocus | course-entry sentence pattern |
| skillTags | sentence_control |
| errorCategories | wrong_word_order |
| sourceRisk | low; QA-approved survivor |
| schemaRisk | low |
| qaStatus | approved_as_is |
| learnerFacingAllowed | Yes |
| schemaNotes | — |

### b1-01-v2-fronted-place-vf-002-var-003

| Field | Value |
|---|---|
| variantId | b1-01-v2-fronted-place-vf-002-var-003 |
| proposedSchemaVariantId | b1-01-v2-fronted-place-vf-002-var-003 |
| parentVariantFamilyId | b1-01-v2-fronted-place-vf-002 |
| proposedSchemaFamilyId | b1-01-v2-fronted-place-vf-002 |
| displayModuleId | B1-01 |
| moduleKey | b1-01 |
| internalPlanningId | b1_m01_getting_started |
| moduleSlug | getting-started-work-course |
| moduleTitle | Getting started at work/course |
| levelTrack | B1 |
| cefrTarget | B1 |
| sourceItemIds | draft_b1_m01_topup_satzbau_002; draft_b1_m01_topup_repair_002; draft_b1_m01_topup_cloze_002 |
| targetFamilyId | TF-B1-01-LS01-01 |
| targetId | T-B1-01-LS01-01-03 |
| learner cue | In the course I need the app. |
| prompt / sentence / chunks | Im Kurs ___ ich [die App]. |
| givenPhrase | die App |
| target answer | brauche |
| accepted answers | brauche |
| feedback micro-rule | Im Kurs brauche ich die App. The given phrase is context, not the target. |
| taskType | Luecke |
| taskDepth | cloze |
| answerMode | typed_short |
| answerShape | single_token |
| correctnessPolicy | exact |
| acceptedAnswerPolicy | exact_only |
| supportPolicy | scenario_visible |
| supportPresentation | english_visible_before_answer |
| planningEvidenceLabel | Practice Evidence |
| evidenceType | auto_supported |
| reviewGroup | rg-b1-01-v2-fronted-place |
| siblingVariantGroup | b1-01-v2-fronted-place-siblings-002 |
| reviewEligibilityDefault | eligible_family_review_after_delay |
| grammarFocus | V2 after fronted place phrase |
| vocabularyFocus | B1-01 course/work entry vocabulary |
| redemittelFocus | course-entry sentence pattern |
| skillTags | sentence_control |
| errorCategories | wrong_word_order |
| sourceRisk | low; QA-approved survivor |
| schemaRisk | low |
| qaStatus | approved_as_is |
| learnerFacingAllowed | Yes |
| schemaNotes | — |

### b1-01-v2-fronted-place-vf-002-var-004

| Field | Value |
|---|---|
| variantId | b1-01-v2-fronted-place-vf-002-var-004 |
| proposedSchemaVariantId | b1-01-v2-fronted-place-vf-002-var-004 |
| parentVariantFamilyId | b1-01-v2-fronted-place-vf-002 |
| proposedSchemaFamilyId | b1-01-v2-fronted-place-vf-002 |
| displayModuleId | B1-01 |
| moduleKey | b1-01 |
| internalPlanningId | b1_m01_getting_started |
| moduleSlug | getting-started-work-course |
| moduleTitle | Getting started at work/course |
| levelTrack | B1 |
| cefrTarget | B1 |
| sourceItemIds | draft_b1_m01_topup_satzbau_002; draft_b1_m01_topup_repair_002; draft_b1_m01_topup_cloze_002 |
| targetFamilyId | TF-B1-01-LS01-01 |
| targetId | T-B1-01-LS01-01-03 |
| learner cue | In the course room I have the documents. |
| prompt / sentence / chunks | Im Kursraum ___ ich [die Unterlagen]. |
| givenPhrase | die Unterlagen |
| target answer | habe |
| accepted answers | habe |
| feedback micro-rule | Im Kursraum habe ich die Unterlagen. Place first, verb second. |
| taskType | Luecke |
| taskDepth | cloze |
| answerMode | typed_short |
| answerShape | single_token |
| correctnessPolicy | exact |
| acceptedAnswerPolicy | exact_only |
| supportPolicy | scenario_visible |
| supportPresentation | english_visible_before_answer |
| planningEvidenceLabel | Core Evidence |
| evidenceType | auto_core |
| reviewGroup | rg-b1-01-v2-fronted-place |
| siblingVariantGroup | b1-01-v2-fronted-place-siblings-002 |
| reviewEligibilityDefault | eligible_variant_review_after_delay |
| grammarFocus | V2 after fronted place phrase |
| vocabularyFocus | B1-01 course/work entry vocabulary |
| redemittelFocus | course-entry sentence pattern |
| skillTags | sentence_control |
| errorCategories | wrong_word_order |
| sourceRisk | low; QA-approved survivor |
| schemaRisk | low |
| qaStatus | approved_as_is |
| learnerFacingAllowed | Yes |
| schemaNotes | — |

### b1-01-v2-fronted-place-vf-002-var-005

| Field | Value |
|---|---|
| variantId | b1-01-v2-fronted-place-vf-002-var-005 |
| proposedSchemaVariantId | b1-01-v2-fronted-place-vf-002-var-005 |
| parentVariantFamilyId | b1-01-v2-fronted-place-vf-002 |
| proposedSchemaFamilyId | b1-01-v2-fronted-place-vf-002 |
| displayModuleId | B1-01 |
| moduleKey | b1-01 |
| internalPlanningId | b1_m01_getting_started |
| moduleSlug | getting-started-work-course |
| moduleTitle | Getting started at work/course |
| levelTrack | B1 |
| cefrTarget | B1 |
| sourceItemIds | draft_b1_m01_topup_satzbau_002; draft_b1_m01_topup_repair_002; draft_b1_m01_topup_cloze_002 |
| targetFamilyId | TF-B1-01-LS01-01 |
| targetId | T-B1-01-LS01-01-03 |
| learner cue | In German class I learn German. |
| prompt / sentence / chunks | Im Deutschunterricht ___ ich Deutsch. |
| givenPhrase | — |
| target answer | lerne |
| accepted answers | lerne |
| feedback micro-rule | Im Deutschunterricht lerne ich Deutsch. The verb follows the fronted place/context phrase. |
| taskType | Luecke |
| taskDepth | cloze |
| answerMode | typed_short |
| answerShape | single_token |
| correctnessPolicy | exact |
| acceptedAnswerPolicy | exact_only |
| supportPolicy | scenario_visible |
| supportPresentation | english_visible_before_answer |
| planningEvidenceLabel | Practice Evidence |
| evidenceType | auto_supported |
| reviewGroup | rg-b1-01-v2-fronted-place |
| siblingVariantGroup | b1-01-v2-fronted-place-siblings-002 |
| reviewEligibilityDefault | eligible_family_review_after_delay |
| grammarFocus | V2 after fronted place phrase |
| vocabularyFocus | B1-01 course/work entry vocabulary |
| redemittelFocus | course-entry sentence pattern |
| skillTags | sentence_control |
| errorCategories | wrong_word_order |
| sourceRisk | low; QA-approved survivor |
| schemaRisk | low |
| qaStatus | approved_as_is |
| learnerFacingAllowed | Yes |
| schemaNotes | — |

### b1-01-v2-fronted-place-vf-002-var-007

| Field | Value |
|---|---|
| variantId | b1-01-v2-fronted-place-vf-002-var-007 |
| proposedSchemaVariantId | b1-01-v2-fronted-place-vf-002-var-007 |
| parentVariantFamilyId | b1-01-v2-fronted-place-vf-002 |
| proposedSchemaFamilyId | b1-01-v2-fronted-place-vf-002 |
| displayModuleId | B1-01 |
| moduleKey | b1-01 |
| internalPlanningId | b1_m01_getting_started |
| moduleSlug | getting-started-work-course |
| moduleTitle | Getting started at work/course |
| levelTrack | B1 |
| cefrTarget | B1 |
| sourceItemIds | draft_b1_m01_topup_satzbau_002; draft_b1_m01_topup_repair_002; draft_b1_m01_topup_cloze_002 |
| targetFamilyId | TF-B1-01-LS01-01 |
| targetId | T-B1-01-LS01-01-03 |
| learner cue | The app is in the course room. |
| prompt / sentence / chunks | Im Kursraum ___ die App. |
| givenPhrase | — |
| target answer | ist |
| accepted answers | ist |
| feedback micro-rule | Im Kursraum ist die App. After the fronted place phrase, the verb comes second. |
| taskType | Luecke |
| taskDepth | cloze |
| answerMode | typed_short |
| answerShape | single_token |
| correctnessPolicy | exact |
| acceptedAnswerPolicy | exact_only |
| supportPolicy | scenario_visible |
| supportPresentation | english_visible_before_answer |
| planningEvidenceLabel | Core Evidence |
| evidenceType | auto_core |
| reviewGroup | rg-b1-01-v2-fronted-place |
| siblingVariantGroup | b1-01-v2-fronted-place-siblings-002 |
| reviewEligibilityDefault | eligible_variant_review_after_delay |
| grammarFocus | V2 after fronted place phrase |
| vocabularyFocus | B1-01 course/work entry vocabulary |
| redemittelFocus | course-entry sentence pattern |
| skillTags | sentence_control |
| errorCategories | wrong_word_order |
| sourceRisk | low; QA-approved survivor |
| schemaRisk | low |
| qaStatus | revised_and_approved |
| learnerFacingAllowed | Yes |
| schemaNotes | Revised to remove the redundant “hier” and make the German more natural. |

### b1-01-w-question-location-vf-003-var-001

| Field | Value |
|---|---|
| variantId | b1-01-w-question-location-vf-003-var-001 |
| proposedSchemaVariantId | b1-01-w-question-location-vf-003-var-001 |
| parentVariantFamilyId | b1-01-w-question-location-vf-003 |
| proposedSchemaFamilyId | b1-01-w-question-location-vf-003 |
| displayModuleId | B1-01 |
| moduleKey | b1-01 |
| internalPlanningId | b1_m01_getting_started |
| moduleSlug | getting-started-work-course |
| moduleTitle | Getting started at work/course |
| levelTrack | B1 |
| cefrTarget | B1 |
| sourceItemIds | draft_b1_m01_recognition_003; draft_b1_m01_repair_003; draft_b1_m01_satzbau_003; draft_b1_m01_topup_recognition_002; draft_b1_m01_topup_cloze_003; draft_b1_m01_topup_satzbau_004; draft_b1_m01_topup_repair_003; draft_b1_m01_topup_contrast_002 |
| targetFamilyId | TF-B1-01-LS01-02 |
| targetId | T-B1-01-LS01-02-01 |
| learner cue | Where is the course room? |
| prompt / sentence / chunks | Wo ___ der Kursraum? |
| givenPhrase | — |
| target answer | ist |
| accepted answers | ist |
| feedback micro-rule | Wo ist der Kursraum? In a W-question, the verb comes after the question word. |
| taskType | Luecke |
| taskDepth | cloze |
| answerMode | typed_short |
| answerShape | single_token |
| correctnessPolicy | exact |
| acceptedAnswerPolicy | exact_only |
| supportPolicy | scenario_visible |
| supportPresentation | english_visible_before_answer |
| planningEvidenceLabel | Core Evidence |
| evidenceType | auto_core |
| reviewGroup | rg-b1-01-w-question-orientation |
| siblingVariantGroup | b1-01-w-question-location-siblings-003 |
| reviewEligibilityDefault | eligible_variant_review_after_delay |
| grammarFocus | W-question word order for course orientation |
| vocabularyFocus | B1-01 course/work entry vocabulary |
| redemittelFocus | course-entry sentence pattern |
| skillTags | sentence_control |
| errorCategories | question_word_order |
| sourceRisk | low; QA-approved survivor |
| schemaRisk | low |
| qaStatus | approved_as_is |
| learnerFacingAllowed | Yes |
| schemaNotes | — |

### b1-01-w-question-location-vf-003-var-002

| Field | Value |
|---|---|
| variantId | b1-01-w-question-location-vf-003-var-002 |
| proposedSchemaVariantId | b1-01-w-question-location-vf-003-var-002 |
| parentVariantFamilyId | b1-01-w-question-location-vf-003 |
| proposedSchemaFamilyId | b1-01-w-question-location-vf-003 |
| displayModuleId | B1-01 |
| moduleKey | b1-01 |
| internalPlanningId | b1_m01_getting_started |
| moduleSlug | getting-started-work-course |
| moduleTitle | Getting started at work/course |
| levelTrack | B1 |
| cefrTarget | B1 |
| sourceItemIds | draft_b1_m01_recognition_003; draft_b1_m01_repair_003; draft_b1_m01_satzbau_003; draft_b1_m01_topup_recognition_002; draft_b1_m01_topup_cloze_003; draft_b1_m01_topup_satzbau_004; draft_b1_m01_topup_repair_003; draft_b1_m01_topup_contrast_002 |
| targetFamilyId | TF-B1-01-LS01-02 |
| targetId | T-B1-01-LS01-02-01 |
| learner cue | Where is the app? |
| prompt / sentence / chunks | Wo ___ die App? |
| givenPhrase | — |
| target answer | ist |
| accepted answers | ist |
| feedback micro-rule | Wo ist die App? Question word first, verb second. |
| taskType | Luecke |
| taskDepth | cloze |
| answerMode | typed_short |
| answerShape | single_token |
| correctnessPolicy | exact |
| acceptedAnswerPolicy | exact_only |
| supportPolicy | scenario_visible |
| supportPresentation | english_visible_before_answer |
| planningEvidenceLabel | Core Evidence |
| evidenceType | auto_core |
| reviewGroup | rg-b1-01-w-question-orientation |
| siblingVariantGroup | b1-01-w-question-location-siblings-003 |
| reviewEligibilityDefault | eligible_variant_review_after_delay |
| grammarFocus | W-question word order for course orientation |
| vocabularyFocus | B1-01 course/work entry vocabulary |
| redemittelFocus | course-entry sentence pattern |
| skillTags | sentence_control |
| errorCategories | question_word_order |
| sourceRisk | low; QA-approved survivor |
| schemaRisk | low |
| qaStatus | approved_as_is |
| learnerFacingAllowed | Yes |
| schemaNotes | — |

### b1-01-w-question-location-vf-003-var-003

| Field | Value |
|---|---|
| variantId | b1-01-w-question-location-vf-003-var-003 |
| proposedSchemaVariantId | b1-01-w-question-location-vf-003-var-003 |
| parentVariantFamilyId | b1-01-w-question-location-vf-003 |
| proposedSchemaFamilyId | b1-01-w-question-location-vf-003 |
| displayModuleId | B1-01 |
| moduleKey | b1-01 |
| internalPlanningId | b1_m01_getting_started |
| moduleSlug | getting-started-work-course |
| moduleTitle | Getting started at work/course |
| levelTrack | B1 |
| cefrTarget | B1 |
| sourceItemIds | draft_b1_m01_recognition_003; draft_b1_m01_repair_003; draft_b1_m01_satzbau_003; draft_b1_m01_topup_recognition_002; draft_b1_m01_topup_cloze_003; draft_b1_m01_topup_satzbau_004; draft_b1_m01_topup_repair_003; draft_b1_m01_topup_contrast_002 |
| targetFamilyId | TF-B1-01-LS01-02 |
| targetId | T-B1-01-LS01-02-01 |
| learner cue | Where is the notebook? |
| prompt / sentence / chunks | Wo ___ das Heft? |
| givenPhrase | — |
| target answer | ist |
| accepted answers | ist |
| feedback micro-rule | Wo ist das Heft? The verb comes directly after Wo. |
| taskType | Luecke |
| taskDepth | cloze |
| answerMode | typed_short |
| answerShape | single_token |
| correctnessPolicy | exact |
| acceptedAnswerPolicy | exact_only |
| supportPolicy | scenario_visible |
| supportPresentation | english_visible_before_answer |
| planningEvidenceLabel | Core Evidence |
| evidenceType | auto_core |
| reviewGroup | rg-b1-01-w-question-orientation |
| siblingVariantGroup | b1-01-w-question-location-siblings-003 |
| reviewEligibilityDefault | eligible_variant_review_after_delay |
| grammarFocus | W-question word order for course orientation |
| vocabularyFocus | B1-01 course/work entry vocabulary |
| redemittelFocus | course-entry sentence pattern |
| skillTags | sentence_control |
| errorCategories | question_word_order |
| sourceRisk | low; QA-approved survivor |
| schemaRisk | low |
| qaStatus | approved_as_is |
| learnerFacingAllowed | Yes |
| schemaNotes | — |

### b1-01-w-question-location-vf-003-var-004

| Field | Value |
|---|---|
| variantId | b1-01-w-question-location-vf-003-var-004 |
| proposedSchemaVariantId | b1-01-w-question-location-vf-003-var-004 |
| parentVariantFamilyId | b1-01-w-question-location-vf-003 |
| proposedSchemaFamilyId | b1-01-w-question-location-vf-003 |
| displayModuleId | B1-01 |
| moduleKey | b1-01 |
| internalPlanningId | b1_m01_getting_started |
| moduleSlug | getting-started-work-course |
| moduleTitle | Getting started at work/course |
| levelTrack | B1 |
| cefrTarget | B1 |
| sourceItemIds | draft_b1_m01_recognition_003; draft_b1_m01_repair_003; draft_b1_m01_satzbau_003; draft_b1_m01_topup_recognition_002; draft_b1_m01_topup_cloze_003; draft_b1_m01_topup_satzbau_004; draft_b1_m01_topup_repair_003; draft_b1_m01_topup_contrast_002 |
| targetFamilyId | TF-B1-01-LS01-02 |
| targetId | T-B1-01-LS01-02-01 |
| learner cue | Where do I find the app? |
| prompt / sentence / chunks | Wo ___ ich [die App]? |
| givenPhrase | die App |
| target answer | finde |
| accepted answers | finde |
| feedback micro-rule | Wo finde ich die App? The object phrase is given; type the verb. |
| taskType | Luecke |
| taskDepth | cloze |
| answerMode | typed_short |
| answerShape | single_token |
| correctnessPolicy | exact |
| acceptedAnswerPolicy | exact_only |
| supportPolicy | scenario_visible |
| supportPresentation | english_visible_before_answer |
| planningEvidenceLabel | Core Evidence |
| evidenceType | auto_core |
| reviewGroup | rg-b1-01-w-question-orientation |
| siblingVariantGroup | b1-01-w-question-location-siblings-003 |
| reviewEligibilityDefault | eligible_variant_review_after_delay |
| grammarFocus | W-question word order for course orientation |
| vocabularyFocus | B1-01 course/work entry vocabulary |
| redemittelFocus | course-entry sentence pattern |
| skillTags | sentence_control |
| errorCategories | question_word_order |
| sourceRisk | low; QA-approved survivor |
| schemaRisk | low |
| qaStatus | approved_as_is |
| learnerFacingAllowed | Yes |
| schemaNotes | — |

### b1-01-w-question-location-vf-003-var-005

| Field | Value |
|---|---|
| variantId | b1-01-w-question-location-vf-003-var-005 |
| proposedSchemaVariantId | b1-01-w-question-location-vf-003-var-005 |
| parentVariantFamilyId | b1-01-w-question-location-vf-003 |
| proposedSchemaFamilyId | b1-01-w-question-location-vf-003 |
| displayModuleId | B1-01 |
| moduleKey | b1-01 |
| internalPlanningId | b1_m01_getting_started |
| moduleSlug | getting-started-work-course |
| moduleTitle | Getting started at work/course |
| levelTrack | B1 |
| cefrTarget | B1 |
| sourceItemIds | draft_b1_m01_recognition_003; draft_b1_m01_repair_003; draft_b1_m01_satzbau_003; draft_b1_m01_topup_recognition_002; draft_b1_m01_topup_cloze_003; draft_b1_m01_topup_satzbau_004; draft_b1_m01_topup_repair_003; draft_b1_m01_topup_contrast_002 |
| targetFamilyId | TF-B1-01-LS01-02 |
| targetId | T-B1-01-LS01-02-01 |
| learner cue | Where do I find the documents? |
| prompt / sentence / chunks | Wo ___ ich [die Unterlagen]? |
| givenPhrase | die Unterlagen |
| target answer | finde |
| accepted answers | finde |
| feedback micro-rule | Wo finde ich die Unterlagen? W-question: Wo + verb + subject. |
| taskType | Luecke |
| taskDepth | cloze |
| answerMode | typed_short |
| answerShape | single_token |
| correctnessPolicy | exact |
| acceptedAnswerPolicy | exact_only |
| supportPolicy | scenario_visible |
| supportPresentation | english_visible_before_answer |
| planningEvidenceLabel | Core Evidence |
| evidenceType | auto_core |
| reviewGroup | rg-b1-01-w-question-orientation |
| siblingVariantGroup | b1-01-w-question-location-siblings-003 |
| reviewEligibilityDefault | eligible_variant_review_after_delay |
| grammarFocus | W-question word order for course orientation |
| vocabularyFocus | B1-01 course/work entry vocabulary |
| redemittelFocus | course-entry sentence pattern |
| skillTags | sentence_control |
| errorCategories | question_word_order |
| sourceRisk | low; QA-approved survivor |
| schemaRisk | low |
| qaStatus | approved_as_is |
| learnerFacingAllowed | Yes |
| schemaNotes | — |

### b1-01-w-question-location-vf-003-var-006

| Field | Value |
|---|---|
| variantId | b1-01-w-question-location-vf-003-var-006 |
| proposedSchemaVariantId | b1-01-w-question-location-vf-003-var-006 |
| parentVariantFamilyId | b1-01-w-question-location-vf-003 |
| proposedSchemaFamilyId | b1-01-w-question-location-vf-003 |
| displayModuleId | B1-01 |
| moduleKey | b1-01 |
| internalPlanningId | b1_m01_getting_started |
| moduleSlug | getting-started-work-course |
| moduleTitle | Getting started at work/course |
| levelTrack | B1 |
| cefrTarget | B1 |
| sourceItemIds | draft_b1_m01_recognition_003; draft_b1_m01_repair_003; draft_b1_m01_satzbau_003; draft_b1_m01_topup_recognition_002; draft_b1_m01_topup_cloze_003; draft_b1_m01_topup_satzbau_004; draft_b1_m01_topup_repair_003; draft_b1_m01_topup_contrast_002 |
| targetFamilyId | TF-B1-01-LS01-02 |
| targetId | T-B1-01-LS01-02-01 |
| learner cue | Where do I find information? |
| prompt / sentence / chunks | Wo ___ ich [Informationen]? |
| givenPhrase | Informationen |
| target answer | finde |
| accepted answers | finde |
| feedback micro-rule | Wo finde ich Informationen? The given phrase is not tested. |
| taskType | Luecke |
| taskDepth | cloze |
| answerMode | typed_short |
| answerShape | single_token |
| correctnessPolicy | exact |
| acceptedAnswerPolicy | exact_only |
| supportPolicy | scenario_visible |
| supportPresentation | english_visible_before_answer |
| planningEvidenceLabel | Core Evidence |
| evidenceType | auto_core |
| reviewGroup | rg-b1-01-w-question-orientation |
| siblingVariantGroup | b1-01-w-question-location-siblings-003 |
| reviewEligibilityDefault | eligible_variant_review_after_delay |
| grammarFocus | W-question word order for course orientation |
| vocabularyFocus | B1-01 course/work entry vocabulary |
| redemittelFocus | course-entry sentence pattern |
| skillTags | sentence_control |
| errorCategories | question_word_order |
| sourceRisk | low; QA-approved survivor |
| schemaRisk | low |
| qaStatus | approved_as_is |
| learnerFacingAllowed | Yes |
| schemaNotes | — |

### b1-01-w-question-location-vf-003-var-007

| Field | Value |
|---|---|
| variantId | b1-01-w-question-location-vf-003-var-007 |
| proposedSchemaVariantId | b1-01-w-question-location-vf-003-var-007 |
| parentVariantFamilyId | b1-01-w-question-location-vf-003 |
| proposedSchemaFamilyId | b1-01-w-question-location-vf-003 |
| displayModuleId | B1-01 |
| moduleKey | b1-01 |
| internalPlanningId | b1_m01_getting_started |
| moduleSlug | getting-started-work-course |
| moduleTitle | Getting started at work/course |
| levelTrack | B1 |
| cefrTarget | B1 |
| sourceItemIds | draft_b1_m01_recognition_003; draft_b1_m01_repair_003; draft_b1_m01_satzbau_003; draft_b1_m01_topup_recognition_002; draft_b1_m01_topup_cloze_003; draft_b1_m01_topup_satzbau_004; draft_b1_m01_topup_repair_003; draft_b1_m01_topup_contrast_002 |
| targetFamilyId | TF-B1-01-LS01-02 |
| targetId | T-B1-01-LS01-02-01 |
| learner cue | Where do I find the course room? |
| prompt / sentence / chunks | Wo ___ ich [den Kursraum]? |
| givenPhrase | den Kursraum |
| target answer | finde |
| accepted answers | finde |
| feedback micro-rule | Wo finde ich den Kursraum? The target is the verb, not den Kursraum. |
| taskType | Luecke |
| taskDepth | cloze |
| answerMode | typed_short |
| answerShape | single_token |
| correctnessPolicy | exact |
| acceptedAnswerPolicy | exact_only |
| supportPolicy | scenario_visible |
| supportPresentation | english_visible_before_answer |
| planningEvidenceLabel | Core Evidence |
| evidenceType | auto_core |
| reviewGroup | rg-b1-01-w-question-orientation |
| siblingVariantGroup | b1-01-w-question-location-siblings-003 |
| reviewEligibilityDefault | eligible_variant_review_after_delay |
| grammarFocus | W-question word order for course orientation |
| vocabularyFocus | B1-01 course/work entry vocabulary |
| redemittelFocus | course-entry sentence pattern |
| skillTags | sentence_control |
| errorCategories | question_word_order |
| sourceRisk | low; QA-approved survivor |
| schemaRisk | low |
| qaStatus | approved_as_is |
| learnerFacingAllowed | Yes |
| schemaNotes | — |

### b1-01-yes-no-question-vf-004-var-001

| Field | Value |
|---|---|
| variantId | b1-01-yes-no-question-vf-004-var-001 |
| proposedSchemaVariantId | b1-01-yes-no-question-vf-004-var-001 |
| parentVariantFamilyId | b1-01-yes-no-question-vf-004 |
| proposedSchemaFamilyId | b1-01-yes-no-question-vf-004 |
| displayModuleId | B1-01 |
| moduleKey | b1-01 |
| internalPlanningId | b1_m01_getting_started |
| moduleSlug | getting-started-work-course |
| moduleTitle | Getting started at work/course |
| levelTrack | B1 |
| cefrTarget | B1 |
| sourceItemIds | draft_b1_m01_recognition_004; draft_b1_m01_cloze_008; draft_b1_m01_satzbau_004; draft_b1_m01_contrast_003; draft_b1_m01_topup_recognition_003; draft_b1_m01_topup_cloze_004; draft_b1_m01_topup_satzbau_005; draft_b1_m01_topup_satzbau_006 |
| targetFamilyId | TF-B1-01-LS01-02 |
| targetId | T-B1-01-LS01-02-02 |
| learner cue | Do I need a notebook? |
| prompt / sentence / chunks | ___ ich [ein Heft]? |
| givenPhrase | ein Heft |
| target answer | Brauche |
| accepted answers | Brauche; brauche only correct-with-note if sentence-start fallback supported |
| feedback micro-rule | Brauche ich ein Heft? A yes/no question starts with the verb. |
| taskType | Luecke |
| taskDepth | cloze |
| answerMode | typed_short |
| answerShape | single_token |
| correctnessPolicy | normalised |
| acceptedAnswerPolicy | normalised_if_supported |
| supportPolicy | scenario_visible |
| supportPresentation | english_visible_before_answer |
| planningEvidenceLabel | Core Evidence |
| evidenceType | auto_core |
| reviewGroup | rg-b1-01-yes-no-question-order |
| siblingVariantGroup | b1-01-yes-no-question-siblings-004 |
| reviewEligibilityDefault | eligible_variant_review_after_delay |
| grammarFocus | Yes/no question word order |
| vocabularyFocus | B1-01 course/work entry vocabulary |
| redemittelFocus | course-entry sentence pattern |
| skillTags | sentence_control |
| errorCategories | question_word_order |
| sourceRisk | minor: sentence-start capitalisation fallback; fallback policy needed |
| schemaRisk | minor: sentence-start capitalisation fallback; fallback policy needed |
| qaStatus | approved_as_is |
| learnerFacingAllowed | Yes |
| schemaNotes | — |

### b1-01-yes-no-question-vf-004-var-002

| Field | Value |
|---|---|
| variantId | b1-01-yes-no-question-vf-004-var-002 |
| proposedSchemaVariantId | b1-01-yes-no-question-vf-004-var-002 |
| parentVariantFamilyId | b1-01-yes-no-question-vf-004 |
| proposedSchemaFamilyId | b1-01-yes-no-question-vf-004 |
| displayModuleId | B1-01 |
| moduleKey | b1-01 |
| internalPlanningId | b1_m01_getting_started |
| moduleSlug | getting-started-work-course |
| moduleTitle | Getting started at work/course |
| levelTrack | B1 |
| cefrTarget | B1 |
| sourceItemIds | draft_b1_m01_recognition_004; draft_b1_m01_cloze_008; draft_b1_m01_satzbau_004; draft_b1_m01_contrast_003; draft_b1_m01_topup_recognition_003; draft_b1_m01_topup_cloze_004; draft_b1_m01_topup_satzbau_005; draft_b1_m01_topup_satzbau_006 |
| targetFamilyId | TF-B1-01-LS01-02 |
| targetId | T-B1-01-LS01-02-02 |
| learner cue | Do I need the app? |
| prompt / sentence / chunks | ___ ich [die App]? |
| givenPhrase | die App |
| target answer | Brauche |
| accepted answers | Brauche; brauche only correct-with-note if supported |
| feedback micro-rule | Brauche ich die App? The finite verb comes first. |
| taskType | Luecke |
| taskDepth | cloze |
| answerMode | typed_short |
| answerShape | single_token |
| correctnessPolicy | normalised |
| acceptedAnswerPolicy | normalised_if_supported |
| supportPolicy | scenario_visible |
| supportPresentation | english_visible_before_answer |
| planningEvidenceLabel | Core Evidence |
| evidenceType | auto_core |
| reviewGroup | rg-b1-01-yes-no-question-order |
| siblingVariantGroup | b1-01-yes-no-question-siblings-004 |
| reviewEligibilityDefault | eligible_variant_review_after_delay |
| grammarFocus | Yes/no question word order |
| vocabularyFocus | B1-01 course/work entry vocabulary |
| redemittelFocus | course-entry sentence pattern |
| skillTags | sentence_control |
| errorCategories | question_word_order |
| sourceRisk | minor: sentence-start capitalisation fallback; fallback policy needed |
| schemaRisk | minor: sentence-start capitalisation fallback; fallback policy needed |
| qaStatus | approved_as_is |
| learnerFacingAllowed | Yes |
| schemaNotes | — |

### b1-01-yes-no-question-vf-004-var-003

| Field | Value |
|---|---|
| variantId | b1-01-yes-no-question-vf-004-var-003 |
| proposedSchemaVariantId | b1-01-yes-no-question-vf-004-var-003 |
| parentVariantFamilyId | b1-01-yes-no-question-vf-004 |
| proposedSchemaFamilyId | b1-01-yes-no-question-vf-004 |
| displayModuleId | B1-01 |
| moduleKey | b1-01 |
| internalPlanningId | b1_m01_getting_started |
| moduleSlug | getting-started-work-course |
| moduleTitle | Getting started at work/course |
| levelTrack | B1 |
| cefrTarget | B1 |
| sourceItemIds | draft_b1_m01_recognition_004; draft_b1_m01_cloze_008; draft_b1_m01_satzbau_004; draft_b1_m01_contrast_003; draft_b1_m01_topup_recognition_003; draft_b1_m01_topup_cloze_004; draft_b1_m01_topup_satzbau_005; draft_b1_m01_topup_satzbau_006 |
| targetFamilyId | TF-B1-01-LS01-02 |
| targetId | T-B1-01-LS01-02-02 |
| learner cue | Do I need the documents? |
| prompt / sentence / chunks | ___ ich [die Unterlagen]? |
| givenPhrase | die Unterlagen |
| target answer | Brauche |
| accepted answers | Brauche; brauche only correct-with-note if supported |
| feedback micro-rule | Brauche ich die Unterlagen? Verb first in a yes/no question. |
| taskType | Luecke |
| taskDepth | cloze |
| answerMode | typed_short |
| answerShape | single_token |
| correctnessPolicy | normalised |
| acceptedAnswerPolicy | normalised_if_supported |
| supportPolicy | scenario_visible |
| supportPresentation | english_visible_before_answer |
| planningEvidenceLabel | Core Evidence |
| evidenceType | auto_core |
| reviewGroup | rg-b1-01-yes-no-question-order |
| siblingVariantGroup | b1-01-yes-no-question-siblings-004 |
| reviewEligibilityDefault | eligible_variant_review_after_delay |
| grammarFocus | Yes/no question word order |
| vocabularyFocus | B1-01 course/work entry vocabulary |
| redemittelFocus | course-entry sentence pattern |
| skillTags | sentence_control |
| errorCategories | question_word_order |
| sourceRisk | minor: sentence-start capitalisation fallback; fallback policy needed |
| schemaRisk | minor: sentence-start capitalisation fallback; fallback policy needed |
| qaStatus | approved_as_is |
| learnerFacingAllowed | Yes |
| schemaNotes | — |

### b1-01-yes-no-question-vf-004-var-004

| Field | Value |
|---|---|
| variantId | b1-01-yes-no-question-vf-004-var-004 |
| proposedSchemaVariantId | b1-01-yes-no-question-vf-004-var-004 |
| parentVariantFamilyId | b1-01-yes-no-question-vf-004 |
| proposedSchemaFamilyId | b1-01-yes-no-question-vf-004 |
| displayModuleId | B1-01 |
| moduleKey | b1-01 |
| internalPlanningId | b1_m01_getting_started |
| moduleSlug | getting-started-work-course |
| moduleTitle | Getting started at work/course |
| levelTrack | B1 |
| cefrTarget | B1 |
| sourceItemIds | draft_b1_m01_recognition_004; draft_b1_m01_cloze_008; draft_b1_m01_satzbau_004; draft_b1_m01_contrast_003; draft_b1_m01_topup_recognition_003; draft_b1_m01_topup_cloze_004; draft_b1_m01_topup_satzbau_005; draft_b1_m01_topup_satzbau_006 |
| targetFamilyId | TF-B1-01-LS01-02 |
| targetId | T-B1-01-LS01-02-02 |
| learner cue | Is the app here? |
| prompt / sentence / chunks | ___ die App hier? |
| givenPhrase | — |
| target answer | Ist |
| accepted answers | Ist; ist only correct-with-note if supported |
| feedback micro-rule | Ist die App hier? A yes/no question starts with the finite verb. |
| taskType | Luecke |
| taskDepth | cloze |
| answerMode | typed_short |
| answerShape | single_token |
| correctnessPolicy | normalised |
| acceptedAnswerPolicy | normalised_if_supported |
| supportPolicy | scenario_visible |
| supportPresentation | english_visible_before_answer |
| planningEvidenceLabel | Core Evidence |
| evidenceType | auto_core |
| reviewGroup | rg-b1-01-yes-no-question-order |
| siblingVariantGroup | b1-01-yes-no-question-siblings-004 |
| reviewEligibilityDefault | eligible_variant_review_after_delay |
| grammarFocus | Yes/no question word order |
| vocabularyFocus | B1-01 course/work entry vocabulary |
| redemittelFocus | course-entry sentence pattern |
| skillTags | sentence_control |
| errorCategories | question_word_order |
| sourceRisk | minor: sentence-start capitalisation fallback; fallback policy needed |
| schemaRisk | minor: sentence-start capitalisation fallback; fallback policy needed |
| qaStatus | approved_as_is |
| learnerFacingAllowed | Yes |
| schemaNotes | — |

### b1-01-yes-no-question-vf-004-var-005

| Field | Value |
|---|---|
| variantId | b1-01-yes-no-question-vf-004-var-005 |
| proposedSchemaVariantId | b1-01-yes-no-question-vf-004-var-005 |
| parentVariantFamilyId | b1-01-yes-no-question-vf-004 |
| proposedSchemaFamilyId | b1-01-yes-no-question-vf-004 |
| displayModuleId | B1-01 |
| moduleKey | b1-01 |
| internalPlanningId | b1_m01_getting_started |
| moduleSlug | getting-started-work-course |
| moduleTitle | Getting started at work/course |
| levelTrack | B1 |
| cefrTarget | B1 |
| sourceItemIds | draft_b1_m01_recognition_004; draft_b1_m01_cloze_008; draft_b1_m01_satzbau_004; draft_b1_m01_contrast_003; draft_b1_m01_topup_recognition_003; draft_b1_m01_topup_cloze_004; draft_b1_m01_topup_satzbau_005; draft_b1_m01_topup_satzbau_006 |
| targetFamilyId | TF-B1-01-LS01-02 |
| targetId | T-B1-01-LS01-02-02 |
| learner cue | Is the notebook here? |
| prompt / sentence / chunks | ___ das Heft hier? |
| givenPhrase | — |
| target answer | Ist |
| accepted answers | Ist; ist only correct-with-note if supported |
| feedback micro-rule | Ist das Heft hier? The verb comes before the subject. |
| taskType | Luecke |
| taskDepth | cloze |
| answerMode | typed_short |
| answerShape | single_token |
| correctnessPolicy | normalised |
| acceptedAnswerPolicy | normalised_if_supported |
| supportPolicy | scenario_visible |
| supportPresentation | english_visible_before_answer |
| planningEvidenceLabel | Core Evidence |
| evidenceType | auto_core |
| reviewGroup | rg-b1-01-yes-no-question-order |
| siblingVariantGroup | b1-01-yes-no-question-siblings-004 |
| reviewEligibilityDefault | eligible_variant_review_after_delay |
| grammarFocus | Yes/no question word order |
| vocabularyFocus | B1-01 course/work entry vocabulary |
| redemittelFocus | course-entry sentence pattern |
| skillTags | sentence_control |
| errorCategories | question_word_order |
| sourceRisk | minor: sentence-start capitalisation fallback; fallback policy needed |
| schemaRisk | minor: sentence-start capitalisation fallback; fallback policy needed |
| qaStatus | approved_as_is |
| learnerFacingAllowed | Yes |
| schemaNotes | — |

### b1-01-yes-no-question-vf-004-var-006

| Field | Value |
|---|---|
| variantId | b1-01-yes-no-question-vf-004-var-006 |
| proposedSchemaVariantId | b1-01-yes-no-question-vf-004-var-006 |
| parentVariantFamilyId | b1-01-yes-no-question-vf-004 |
| proposedSchemaFamilyId | b1-01-yes-no-question-vf-004 |
| displayModuleId | B1-01 |
| moduleKey | b1-01 |
| internalPlanningId | b1_m01_getting_started |
| moduleSlug | getting-started-work-course |
| moduleTitle | Getting started at work/course |
| levelTrack | B1 |
| cefrTarget | B1 |
| sourceItemIds | draft_b1_m01_recognition_004; draft_b1_m01_cloze_008; draft_b1_m01_satzbau_004; draft_b1_m01_contrast_003; draft_b1_m01_topup_recognition_003; draft_b1_m01_topup_cloze_004; draft_b1_m01_topup_satzbau_005; draft_b1_m01_topup_satzbau_006 |
| targetFamilyId | TF-B1-01-LS01-02 |
| targetId | T-B1-01-LS01-02-02 |
| learner cue | Do you have information? |
| prompt / sentence / chunks | ___ Sie [Informationen]? |
| givenPhrase | Informationen |
| target answer | Haben |
| accepted answers | Haben; haben only correct-with-note if supported |
| feedback micro-rule | Haben Sie Informationen? With Sie, the verb starts the question. |
| taskType | Luecke |
| taskDepth | cloze |
| answerMode | typed_short |
| answerShape | single_token |
| correctnessPolicy | normalised |
| acceptedAnswerPolicy | normalised_if_supported |
| supportPolicy | scenario_visible |
| supportPresentation | english_visible_before_answer |
| planningEvidenceLabel | Core Evidence |
| evidenceType | auto_core |
| reviewGroup | rg-b1-01-yes-no-question-order |
| siblingVariantGroup | b1-01-yes-no-question-siblings-004 |
| reviewEligibilityDefault | eligible_variant_review_after_delay |
| grammarFocus | Yes/no question word order |
| vocabularyFocus | B1-01 course/work entry vocabulary |
| redemittelFocus | course-entry sentence pattern |
| skillTags | sentence_control |
| errorCategories | question_word_order |
| sourceRisk | minor: sentence-start capitalisation fallback; fallback policy needed |
| schemaRisk | minor: sentence-start capitalisation fallback; fallback policy needed |
| qaStatus | approved_as_is |
| learnerFacingAllowed | Yes |
| schemaNotes | — |

### b1-01-brauchen-acc-vf-005-var-001

| Field | Value |
|---|---|
| variantId | b1-01-brauchen-acc-vf-005-var-001 |
| proposedSchemaVariantId | b1-01-brauchen-acc-vf-005-var-001 |
| parentVariantFamilyId | b1-01-brauchen-acc-vf-005 |
| proposedSchemaFamilyId | b1-01-brauchen-acc-vf-005 |
| displayModuleId | B1-01 |
| moduleKey | b1-01 |
| internalPlanningId | b1_m01_getting_started |
| moduleSlug | getting-started-work-course |
| moduleTitle | Getting started at work/course |
| levelTrack | B1 |
| cefrTarget | B1 |
| sourceItemIds | draft_b1_m01_recognition_006; draft_b1_m01_cloze_005; draft_b1_m01_cloze_007; draft_b1_m01_repair_005; draft_b1_m01_satzbau_005; draft_b1_m01_topup_recognition_004; draft_b1_m01_topup_cloze_005; draft_b1_m01_topup_satzbau_007 |
| targetFamilyId | TF-B1-01-LS04-01 |
| targetId | T-B1-01-LS04-01-01 |
| learner cue | I need the app. |
| prompt / sentence / chunks | Ich ___ [die App]. |
| givenPhrase | die App |
| target answer | brauche |
| accepted answers | brauche |
| feedback micro-rule | Ich brauche die App. The phrase in brackets is given; type the verb. |
| taskType | Luecke |
| taskDepth | cloze |
| answerMode | typed_short |
| answerShape | single_token |
| correctnessPolicy | exact |
| acceptedAnswerPolicy | exact_only |
| supportPolicy | scenario_visible |
| supportPresentation | english_visible_before_answer |
| planningEvidenceLabel | Practice Evidence |
| evidenceType | auto_supported |
| reviewGroup | rg-b1-01-brauchen-acc-survival |
| siblingVariantGroup | b1-01-brauchen-acc-siblings-005 |
| reviewEligibilityDefault | eligible_family_review_after_delay |
| grammarFocus | brauchen as basic course/work survival frame |
| vocabularyFocus | B1-01 course/work entry vocabulary |
| redemittelFocus | course-entry sentence pattern |
| skillTags | course_survival |
| errorCategories | wrong_verb_or_need_frame |
| sourceRisk | medium: A1/A2 survival scaffold; cap sibling evidence |
| schemaRisk | medium: A1/A2 survival scaffold; cap sibling evidence |
| qaStatus | approved_as_is |
| learnerFacingAllowed | Yes |
| schemaNotes | Evidence downgraded: brauchen is survival scaffolding, not B1-depth proof. |

### b1-01-brauchen-acc-vf-005-var-002

| Field | Value |
|---|---|
| variantId | b1-01-brauchen-acc-vf-005-var-002 |
| proposedSchemaVariantId | b1-01-brauchen-acc-vf-005-var-002 |
| parentVariantFamilyId | b1-01-brauchen-acc-vf-005 |
| proposedSchemaFamilyId | b1-01-brauchen-acc-vf-005 |
| displayModuleId | B1-01 |
| moduleKey | b1-01 |
| internalPlanningId | b1_m01_getting_started |
| moduleSlug | getting-started-work-course |
| moduleTitle | Getting started at work/course |
| levelTrack | B1 |
| cefrTarget | B1 |
| sourceItemIds | draft_b1_m01_recognition_006; draft_b1_m01_cloze_005; draft_b1_m01_cloze_007; draft_b1_m01_repair_005; draft_b1_m01_satzbau_005; draft_b1_m01_topup_recognition_004; draft_b1_m01_topup_cloze_005; draft_b1_m01_topup_satzbau_007 |
| targetFamilyId | TF-B1-01-LS04-01 |
| targetId | T-B1-01-LS04-01-01 |
| learner cue | I need a notebook. |
| prompt / sentence / chunks | Ich ___ [ein Heft]. |
| givenPhrase | ein Heft |
| target answer | brauche |
| accepted answers | brauche |
| feedback micro-rule | Ich brauche ein Heft. Only the verb is tested here. |
| taskType | Luecke |
| taskDepth | cloze |
| answerMode | typed_short |
| answerShape | single_token |
| correctnessPolicy | exact |
| acceptedAnswerPolicy | exact_only |
| supportPolicy | scenario_visible |
| supportPresentation | english_visible_before_answer |
| planningEvidenceLabel | Practice Evidence |
| evidenceType | auto_supported |
| reviewGroup | rg-b1-01-brauchen-acc-survival |
| siblingVariantGroup | b1-01-brauchen-acc-siblings-005 |
| reviewEligibilityDefault | eligible_family_review_after_delay |
| grammarFocus | brauchen as basic course/work survival frame |
| vocabularyFocus | B1-01 course/work entry vocabulary |
| redemittelFocus | course-entry sentence pattern |
| skillTags | course_survival |
| errorCategories | wrong_verb_or_need_frame |
| sourceRisk | medium: A1/A2 survival scaffold; cap sibling evidence |
| schemaRisk | medium: A1/A2 survival scaffold; cap sibling evidence |
| qaStatus | approved_as_is |
| learnerFacingAllowed | Yes |
| schemaNotes | Evidence downgraded: brauchen is survival scaffolding, not B1-depth proof. |

### b1-01-brauchen-acc-vf-005-var-003

| Field | Value |
|---|---|
| variantId | b1-01-brauchen-acc-vf-005-var-003 |
| proposedSchemaVariantId | b1-01-brauchen-acc-vf-005-var-003 |
| parentVariantFamilyId | b1-01-brauchen-acc-vf-005 |
| proposedSchemaFamilyId | b1-01-brauchen-acc-vf-005 |
| displayModuleId | B1-01 |
| moduleKey | b1-01 |
| internalPlanningId | b1_m01_getting_started |
| moduleSlug | getting-started-work-course |
| moduleTitle | Getting started at work/course |
| levelTrack | B1 |
| cefrTarget | B1 |
| sourceItemIds | draft_b1_m01_recognition_006; draft_b1_m01_cloze_005; draft_b1_m01_cloze_007; draft_b1_m01_repair_005; draft_b1_m01_satzbau_005; draft_b1_m01_topup_recognition_004; draft_b1_m01_topup_cloze_005; draft_b1_m01_topup_satzbau_007 |
| targetFamilyId | TF-B1-01-LS04-01 |
| targetId | T-B1-01-LS04-01-01 |
| learner cue | I need the documents. |
| prompt / sentence / chunks | Ich ___ [die Unterlagen]. |
| givenPhrase | die Unterlagen |
| target answer | brauche |
| accepted answers | brauche |
| feedback micro-rule | Ich brauche die Unterlagen. The object phrase is given context. |
| taskType | Luecke |
| taskDepth | cloze |
| answerMode | typed_short |
| answerShape | single_token |
| correctnessPolicy | exact |
| acceptedAnswerPolicy | exact_only |
| supportPolicy | scenario_visible |
| supportPresentation | english_visible_before_answer |
| planningEvidenceLabel | Practice Evidence |
| evidenceType | auto_supported |
| reviewGroup | rg-b1-01-brauchen-acc-survival |
| siblingVariantGroup | b1-01-brauchen-acc-siblings-005 |
| reviewEligibilityDefault | eligible_family_review_after_delay |
| grammarFocus | brauchen as basic course/work survival frame |
| vocabularyFocus | B1-01 course/work entry vocabulary |
| redemittelFocus | course-entry sentence pattern |
| skillTags | course_survival |
| errorCategories | wrong_verb_or_need_frame |
| sourceRisk | medium: A1/A2 survival scaffold; cap sibling evidence |
| schemaRisk | medium: A1/A2 survival scaffold; cap sibling evidence |
| qaStatus | approved_as_is |
| learnerFacingAllowed | Yes |
| schemaNotes | Evidence downgraded: brauchen is survival scaffolding, not B1-depth proof. |

### b1-01-brauchen-acc-vf-005-var-004

| Field | Value |
|---|---|
| variantId | b1-01-brauchen-acc-vf-005-var-004 |
| proposedSchemaVariantId | b1-01-brauchen-acc-vf-005-var-004 |
| parentVariantFamilyId | b1-01-brauchen-acc-vf-005 |
| proposedSchemaFamilyId | b1-01-brauchen-acc-vf-005 |
| displayModuleId | B1-01 |
| moduleKey | b1-01 |
| internalPlanningId | b1_m01_getting_started |
| moduleSlug | getting-started-work-course |
| moduleTitle | Getting started at work/course |
| levelTrack | B1 |
| cefrTarget | B1 |
| sourceItemIds | draft_b1_m01_recognition_006; draft_b1_m01_cloze_005; draft_b1_m01_cloze_007; draft_b1_m01_repair_005; draft_b1_m01_satzbau_005; draft_b1_m01_topup_recognition_004; draft_b1_m01_topup_cloze_005; draft_b1_m01_topup_satzbau_007 |
| targetFamilyId | TF-B1-01-LS04-01 |
| targetId | T-B1-01-LS04-01-01 |
| learner cue | I need information. |
| prompt / sentence / chunks | Ich ___ [Informationen]. |
| givenPhrase | Informationen |
| target answer | brauche |
| accepted answers | brauche |
| feedback micro-rule | Ich brauche Informationen. The target is brauche. |
| taskType | Luecke |
| taskDepth | cloze |
| answerMode | typed_short |
| answerShape | single_token |
| correctnessPolicy | exact |
| acceptedAnswerPolicy | exact_only |
| supportPolicy | scenario_visible |
| supportPresentation | english_visible_before_answer |
| planningEvidenceLabel | Practice Evidence |
| evidenceType | auto_supported |
| reviewGroup | rg-b1-01-brauchen-acc-survival |
| siblingVariantGroup | b1-01-brauchen-acc-siblings-005 |
| reviewEligibilityDefault | eligible_family_review_after_delay |
| grammarFocus | brauchen as basic course/work survival frame |
| vocabularyFocus | B1-01 course/work entry vocabulary |
| redemittelFocus | course-entry sentence pattern |
| skillTags | course_survival |
| errorCategories | wrong_verb_or_need_frame |
| sourceRisk | medium: A1/A2 survival scaffold; cap sibling evidence |
| schemaRisk | medium: A1/A2 survival scaffold; cap sibling evidence |
| qaStatus | approved_as_is |
| learnerFacingAllowed | Yes |
| schemaNotes | Evidence downgraded: brauchen is survival scaffolding, not B1-depth proof. |

### b1-01-brauchen-acc-vf-005-var-005

| Field | Value |
|---|---|
| variantId | b1-01-brauchen-acc-vf-005-var-005 |
| proposedSchemaVariantId | b1-01-brauchen-acc-vf-005-var-005 |
| parentVariantFamilyId | b1-01-brauchen-acc-vf-005 |
| proposedSchemaFamilyId | b1-01-brauchen-acc-vf-005 |
| displayModuleId | B1-01 |
| moduleKey | b1-01 |
| internalPlanningId | b1_m01_getting_started |
| moduleSlug | getting-started-work-course |
| moduleTitle | Getting started at work/course |
| levelTrack | B1 |
| cefrTarget | B1 |
| sourceItemIds | draft_b1_m01_recognition_006; draft_b1_m01_cloze_005; draft_b1_m01_cloze_007; draft_b1_m01_repair_005; draft_b1_m01_satzbau_005; draft_b1_m01_topup_recognition_004; draft_b1_m01_topup_cloze_005; draft_b1_m01_topup_satzbau_007 |
| targetFamilyId | TF-B1-01-LS04-01 |
| targetId | T-B1-01-LS04-01-01 |
| learner cue | I need help. |
| prompt / sentence / chunks | Ich ___ [Hilfe]. |
| givenPhrase | Hilfe |
| target answer | brauche |
| accepted answers | brauche |
| feedback micro-rule | Ich brauche Hilfe. Hilfe is given; the verb is tested. |
| taskType | Luecke |
| taskDepth | cloze |
| answerMode | typed_short |
| answerShape | single_token |
| correctnessPolicy | exact |
| acceptedAnswerPolicy | exact_only |
| supportPolicy | scenario_visible |
| supportPresentation | english_visible_before_answer |
| planningEvidenceLabel | Practice Evidence |
| evidenceType | auto_supported |
| reviewGroup | rg-b1-01-brauchen-acc-survival |
| siblingVariantGroup | b1-01-brauchen-acc-siblings-005 |
| reviewEligibilityDefault | eligible_family_review_after_delay |
| grammarFocus | brauchen as basic course/work survival frame |
| vocabularyFocus | B1-01 course/work entry vocabulary |
| redemittelFocus | course-entry sentence pattern |
| skillTags | course_survival |
| errorCategories | wrong_verb_or_need_frame |
| sourceRisk | medium: A1/A2 survival scaffold; cap sibling evidence |
| schemaRisk | medium: A1/A2 survival scaffold; cap sibling evidence |
| qaStatus | approved_as_is |
| learnerFacingAllowed | Yes |
| schemaNotes | Evidence downgraded: brauchen is survival scaffolding, not B1-depth proof. |

### b1-01-mein-meine-familiar-vf-006-var-001

| Field | Value |
|---|---|
| variantId | b1-01-mein-meine-familiar-vf-006-var-001 |
| proposedSchemaVariantId | b1-01-mein-meine-familiar-vf-006-var-001 |
| parentVariantFamilyId | b1-01-mein-meine-familiar-vf-006 |
| proposedSchemaFamilyId | b1-01-mein-meine-familiar-vf-006 |
| displayModuleId | B1-01 |
| moduleKey | b1-01 |
| internalPlanningId | b1_m01_getting_started |
| moduleSlug | getting-started-work-course |
| moduleTitle | Getting started at work/course |
| levelTrack | B1 |
| cefrTarget | B1 |
| sourceItemIds | draft_b1_m01_recognition_008; draft_b1_m01_cloze_006; draft_b1_m01_repair_004; draft_b1_m01_contrast_002; draft_b1_m01_topup_recognition_005; draft_b1_m01_topup_cloze_007; draft_b1_m01_topup_cloze_008; draft_b1_m01_topup_satzbau_008; draft_b1_m01_topup_satzbau_009; draft_b1_m01_topup_repair_007; draft_b1_m01_topup_repair_008 |
| targetFamilyId | TF-B1-01-LS02-01 |
| targetId | T-B1-01-LS02-01-02 |
| learner cue | This is my course. |
| prompt / sentence / chunks | Das ist ___ Kurs. |
| givenPhrase | — |
| target answer | mein |
| accepted answers | mein |
| feedback micro-rule | Das ist mein Kurs. Use mein with der Kurs. |
| taskType | Luecke |
| taskDepth | cloze |
| answerMode | typed_short |
| answerShape | single_token |
| correctnessPolicy | exact |
| acceptedAnswerPolicy | exact_only |
| supportPolicy | scenario_visible |
| supportPresentation | english_visible_before_answer |
| planningEvidenceLabel | Core Evidence |
| evidenceType | auto_core |
| reviewGroup | rg-b1-01-mein-meine-familiar-nouns |
| siblingVariantGroup | b1-01-mein-meine-familiar-siblings-006 |
| reviewEligibilityDefault | eligible_variant_review_after_delay |
| grammarFocus | mein/meine with familiar B1-01 nouns |
| vocabularyFocus | B1-01 course/work entry vocabulary |
| redemittelFocus | course-entry sentence pattern |
| skillTags | possessive_awareness |
| errorCategories | wrong_possessive_form |
| sourceRisk | low; QA-approved survivor |
| schemaRisk | low |
| qaStatus | approved_as_is |
| learnerFacingAllowed | Yes |
| schemaNotes | — |

### b1-01-mein-meine-familiar-vf-006-var-002

| Field | Value |
|---|---|
| variantId | b1-01-mein-meine-familiar-vf-006-var-002 |
| proposedSchemaVariantId | b1-01-mein-meine-familiar-vf-006-var-002 |
| parentVariantFamilyId | b1-01-mein-meine-familiar-vf-006 |
| proposedSchemaFamilyId | b1-01-mein-meine-familiar-vf-006 |
| displayModuleId | B1-01 |
| moduleKey | b1-01 |
| internalPlanningId | b1_m01_getting_started |
| moduleSlug | getting-started-work-course |
| moduleTitle | Getting started at work/course |
| levelTrack | B1 |
| cefrTarget | B1 |
| sourceItemIds | draft_b1_m01_recognition_008; draft_b1_m01_cloze_006; draft_b1_m01_repair_004; draft_b1_m01_contrast_002; draft_b1_m01_topup_recognition_005; draft_b1_m01_topup_cloze_007; draft_b1_m01_topup_cloze_008; draft_b1_m01_topup_satzbau_008; draft_b1_m01_topup_satzbau_009; draft_b1_m01_topup_repair_007; draft_b1_m01_topup_repair_008 |
| targetFamilyId | TF-B1-01-LS02-01 |
| targetId | T-B1-01-LS02-01-02 |
| learner cue | This is my work. |
| prompt / sentence / chunks | Das ist ___ Arbeit. |
| givenPhrase | — |
| target answer | meine |
| accepted answers | meine |
| feedback micro-rule | Das ist meine Arbeit. Use meine with die Arbeit. |
| taskType | Luecke |
| taskDepth | cloze |
| answerMode | typed_short |
| answerShape | single_token |
| correctnessPolicy | exact |
| acceptedAnswerPolicy | exact_only |
| supportPolicy | scenario_visible |
| supportPresentation | english_visible_before_answer |
| planningEvidenceLabel | Core Evidence |
| evidenceType | auto_core |
| reviewGroup | rg-b1-01-mein-meine-familiar-nouns |
| siblingVariantGroup | b1-01-mein-meine-familiar-siblings-006 |
| reviewEligibilityDefault | eligible_variant_review_after_delay |
| grammarFocus | mein/meine with familiar B1-01 nouns |
| vocabularyFocus | B1-01 course/work entry vocabulary |
| redemittelFocus | course-entry sentence pattern |
| skillTags | possessive_awareness |
| errorCategories | wrong_possessive_form |
| sourceRisk | low; QA-approved survivor |
| schemaRisk | low |
| qaStatus | approved_as_is |
| learnerFacingAllowed | Yes |
| schemaNotes | — |

### b1-01-mein-meine-familiar-vf-006-var-003

| Field | Value |
|---|---|
| variantId | b1-01-mein-meine-familiar-vf-006-var-003 |
| proposedSchemaVariantId | b1-01-mein-meine-familiar-vf-006-var-003 |
| parentVariantFamilyId | b1-01-mein-meine-familiar-vf-006 |
| proposedSchemaFamilyId | b1-01-mein-meine-familiar-vf-006 |
| displayModuleId | B1-01 |
| moduleKey | b1-01 |
| internalPlanningId | b1_m01_getting_started |
| moduleSlug | getting-started-work-course |
| moduleTitle | Getting started at work/course |
| levelTrack | B1 |
| cefrTarget | B1 |
| sourceItemIds | draft_b1_m01_recognition_008; draft_b1_m01_cloze_006; draft_b1_m01_repair_004; draft_b1_m01_contrast_002; draft_b1_m01_topup_recognition_005; draft_b1_m01_topup_cloze_007; draft_b1_m01_topup_cloze_008; draft_b1_m01_topup_satzbau_008; draft_b1_m01_topup_satzbau_009; draft_b1_m01_topup_repair_007; draft_b1_m01_topup_repair_008 |
| targetFamilyId | TF-B1-01-LS02-01 |
| targetId | T-B1-01-LS02-01-02 |
| learner cue | This is my notebook. |
| prompt / sentence / chunks | Das ist ___ Heft. |
| givenPhrase | — |
| target answer | mein |
| accepted answers | mein |
| feedback micro-rule | Das ist mein Heft. Use mein with das Heft. |
| taskType | Luecke |
| taskDepth | cloze |
| answerMode | typed_short |
| answerShape | single_token |
| correctnessPolicy | exact |
| acceptedAnswerPolicy | exact_only |
| supportPolicy | scenario_visible |
| supportPresentation | english_visible_before_answer |
| planningEvidenceLabel | Core Evidence |
| evidenceType | auto_core |
| reviewGroup | rg-b1-01-mein-meine-familiar-nouns |
| siblingVariantGroup | b1-01-mein-meine-familiar-siblings-006 |
| reviewEligibilityDefault | eligible_variant_review_after_delay |
| grammarFocus | mein/meine with familiar B1-01 nouns |
| vocabularyFocus | B1-01 course/work entry vocabulary |
| redemittelFocus | course-entry sentence pattern |
| skillTags | possessive_awareness |
| errorCategories | wrong_possessive_form |
| sourceRisk | low; QA-approved survivor |
| schemaRisk | low |
| qaStatus | approved_as_is |
| learnerFacingAllowed | Yes |
| schemaNotes | — |

### b1-01-mein-meine-familiar-vf-006-var-004

| Field | Value |
|---|---|
| variantId | b1-01-mein-meine-familiar-vf-006-var-004 |
| proposedSchemaVariantId | b1-01-mein-meine-familiar-vf-006-var-004 |
| parentVariantFamilyId | b1-01-mein-meine-familiar-vf-006 |
| proposedSchemaFamilyId | b1-01-mein-meine-familiar-vf-006 |
| displayModuleId | B1-01 |
| moduleKey | b1-01 |
| internalPlanningId | b1_m01_getting_started |
| moduleSlug | getting-started-work-course |
| moduleTitle | Getting started at work/course |
| levelTrack | B1 |
| cefrTarget | B1 |
| sourceItemIds | draft_b1_m01_recognition_008; draft_b1_m01_cloze_006; draft_b1_m01_repair_004; draft_b1_m01_contrast_002; draft_b1_m01_topup_recognition_005; draft_b1_m01_topup_cloze_007; draft_b1_m01_topup_cloze_008; draft_b1_m01_topup_satzbau_008; draft_b1_m01_topup_satzbau_009; draft_b1_m01_topup_repair_007; draft_b1_m01_topup_repair_008 |
| targetFamilyId | TF-B1-01-LS02-01 |
| targetId | T-B1-01-LS02-01-02 |
| learner cue | This is my app. |
| prompt / sentence / chunks | Das ist ___ App. |
| givenPhrase | — |
| target answer | meine |
| accepted answers | meine |
| feedback micro-rule | Das ist meine App. Use meine with die App. |
| taskType | Luecke |
| taskDepth | cloze |
| answerMode | typed_short |
| answerShape | single_token |
| correctnessPolicy | exact |
| acceptedAnswerPolicy | exact_only |
| supportPolicy | scenario_visible |
| supportPresentation | english_visible_before_answer |
| planningEvidenceLabel | Core Evidence |
| evidenceType | auto_core |
| reviewGroup | rg-b1-01-mein-meine-familiar-nouns |
| siblingVariantGroup | b1-01-mein-meine-familiar-siblings-006 |
| reviewEligibilityDefault | eligible_variant_review_after_delay |
| grammarFocus | mein/meine with familiar B1-01 nouns |
| vocabularyFocus | B1-01 course/work entry vocabulary |
| redemittelFocus | course-entry sentence pattern |
| skillTags | possessive_awareness |
| errorCategories | wrong_possessive_form |
| sourceRisk | low; QA-approved survivor |
| schemaRisk | low |
| qaStatus | approved_as_is |
| learnerFacingAllowed | Yes |
| schemaNotes | — |

### b1-01-mein-meine-familiar-vf-006-var-005

| Field | Value |
|---|---|
| variantId | b1-01-mein-meine-familiar-vf-006-var-005 |
| proposedSchemaVariantId | b1-01-mein-meine-familiar-vf-006-var-005 |
| parentVariantFamilyId | b1-01-mein-meine-familiar-vf-006 |
| proposedSchemaFamilyId | b1-01-mein-meine-familiar-vf-006 |
| displayModuleId | B1-01 |
| moduleKey | b1-01 |
| internalPlanningId | b1_m01_getting_started |
| moduleSlug | getting-started-work-course |
| moduleTitle | Getting started at work/course |
| levelTrack | B1 |
| cefrTarget | B1 |
| sourceItemIds | draft_b1_m01_recognition_008; draft_b1_m01_cloze_006; draft_b1_m01_repair_004; draft_b1_m01_contrast_002; draft_b1_m01_topup_recognition_005; draft_b1_m01_topup_cloze_007; draft_b1_m01_topup_cloze_008; draft_b1_m01_topup_satzbau_008; draft_b1_m01_topup_satzbau_009; draft_b1_m01_topup_repair_007; draft_b1_m01_topup_repair_008 |
| targetFamilyId | TF-B1-01-LS02-01 |
| targetId | T-B1-01-LS02-01-02 |
| learner cue | These are my documents. |
| prompt / sentence / chunks | Das sind ___ Unterlagen. |
| givenPhrase | — |
| target answer | meine |
| accepted answers | meine |
| feedback micro-rule | Das sind meine Unterlagen. Use meine with plural Unterlagen. |
| taskType | Luecke |
| taskDepth | cloze |
| answerMode | typed_short |
| answerShape | single_token |
| correctnessPolicy | exact |
| acceptedAnswerPolicy | exact_only |
| supportPolicy | scenario_visible |
| supportPresentation | english_visible_before_answer |
| planningEvidenceLabel | Core Evidence |
| evidenceType | auto_core |
| reviewGroup | rg-b1-01-mein-meine-familiar-nouns |
| siblingVariantGroup | b1-01-mein-meine-familiar-siblings-006 |
| reviewEligibilityDefault | eligible_variant_review_after_delay |
| grammarFocus | mein/meine with familiar B1-01 nouns |
| vocabularyFocus | B1-01 course/work entry vocabulary |
| redemittelFocus | course-entry sentence pattern |
| skillTags | possessive_awareness |
| errorCategories | wrong_possessive_form |
| sourceRisk | low; QA-approved survivor |
| schemaRisk | low |
| qaStatus | approved_as_is |
| learnerFacingAllowed | Yes |
| schemaNotes | — |

### b1-01-mein-meine-familiar-vf-006-var-006

| Field | Value |
|---|---|
| variantId | b1-01-mein-meine-familiar-vf-006-var-006 |
| proposedSchemaVariantId | b1-01-mein-meine-familiar-vf-006-var-006 |
| parentVariantFamilyId | b1-01-mein-meine-familiar-vf-006 |
| proposedSchemaFamilyId | b1-01-mein-meine-familiar-vf-006 |
| displayModuleId | B1-01 |
| moduleKey | b1-01 |
| internalPlanningId | b1_m01_getting_started |
| moduleSlug | getting-started-work-course |
| moduleTitle | Getting started at work/course |
| levelTrack | B1 |
| cefrTarget | B1 |
| sourceItemIds | draft_b1_m01_recognition_008; draft_b1_m01_cloze_006; draft_b1_m01_repair_004; draft_b1_m01_contrast_002; draft_b1_m01_topup_recognition_005; draft_b1_m01_topup_cloze_007; draft_b1_m01_topup_cloze_008; draft_b1_m01_topup_satzbau_008; draft_b1_m01_topup_satzbau_009; draft_b1_m01_topup_repair_007; draft_b1_m01_topup_repair_008 |
| targetFamilyId | TF-B1-01-LS02-01 |
| targetId | T-B1-01-LS02-01-02 |
| learner cue | I need my documents. |
| prompt / sentence / chunks | Ich brauche ___ Unterlagen. |
| givenPhrase | — |
| target answer | meine |
| accepted answers | meine |
| feedback micro-rule | Ich brauche meine Unterlagen. The target is meine, not brauchen. |
| taskType | Luecke |
| taskDepth | cloze |
| answerMode | typed_short |
| answerShape | single_token |
| correctnessPolicy | exact |
| acceptedAnswerPolicy | exact_only |
| supportPolicy | scenario_visible |
| supportPresentation | english_visible_before_answer |
| planningEvidenceLabel | Core Evidence |
| evidenceType | auto_core |
| reviewGroup | rg-b1-01-mein-meine-familiar-nouns |
| siblingVariantGroup | b1-01-mein-meine-familiar-siblings-006 |
| reviewEligibilityDefault | eligible_variant_review_after_delay |
| grammarFocus | mein/meine with familiar B1-01 nouns |
| vocabularyFocus | B1-01 course/work entry vocabulary |
| redemittelFocus | course-entry sentence pattern |
| skillTags | possessive_awareness |
| errorCategories | wrong_possessive_form |
| sourceRisk | low; QA-approved survivor |
| schemaRisk | low |
| qaStatus | approved_as_is |
| learnerFacingAllowed | Yes |
| schemaNotes | — |

### b1-01-mein-meine-familiar-vf-006-var-007

| Field | Value |
|---|---|
| variantId | b1-01-mein-meine-familiar-vf-006-var-007 |
| proposedSchemaVariantId | b1-01-mein-meine-familiar-vf-006-var-007 |
| parentVariantFamilyId | b1-01-mein-meine-familiar-vf-006 |
| proposedSchemaFamilyId | b1-01-mein-meine-familiar-vf-006 |
| displayModuleId | B1-01 |
| moduleKey | b1-01 |
| internalPlanningId | b1_m01_getting_started |
| moduleSlug | getting-started-work-course |
| moduleTitle | Getting started at work/course |
| levelTrack | B1 |
| cefrTarget | B1 |
| sourceItemIds | draft_b1_m01_recognition_008; draft_b1_m01_cloze_006; draft_b1_m01_repair_004; draft_b1_m01_contrast_002; draft_b1_m01_topup_recognition_005; draft_b1_m01_topup_cloze_007; draft_b1_m01_topup_cloze_008; draft_b1_m01_topup_satzbau_008; draft_b1_m01_topup_satzbau_009; draft_b1_m01_topup_repair_007; draft_b1_m01_topup_repair_008 |
| targetFamilyId | TF-B1-01-LS02-01 |
| targetId | T-B1-01-LS02-01-02 |
| learner cue | Here is my app. |
| prompt / sentence / chunks | Hier ist ___ App. |
| givenPhrase | — |
| target answer | meine |
| accepted answers | meine |
| feedback micro-rule | Hier ist meine App. Use meine with die App. |
| taskType | Luecke |
| taskDepth | cloze |
| answerMode | typed_short |
| answerShape | single_token |
| correctnessPolicy | exact |
| acceptedAnswerPolicy | exact_only |
| supportPolicy | scenario_visible |
| supportPresentation | english_visible_before_answer |
| planningEvidenceLabel | Core Evidence |
| evidenceType | auto_core |
| reviewGroup | rg-b1-01-mein-meine-familiar-nouns |
| siblingVariantGroup | b1-01-mein-meine-familiar-siblings-006 |
| reviewEligibilityDefault | eligible_variant_review_after_delay |
| grammarFocus | mein/meine with familiar B1-01 nouns |
| vocabularyFocus | B1-01 course/work entry vocabulary |
| redemittelFocus | course-entry sentence pattern |
| skillTags | possessive_awareness |
| errorCategories | wrong_possessive_form |
| sourceRisk | low; QA-approved survivor |
| schemaRisk | low |
| qaStatus | revised_and_approved |
| learnerFacingAllowed | Yes |
| schemaNotes | Revised to avoid sentence-start capitalisation becoming a hidden target. |

### b1-01-mein-meine-familiar-vf-006-var-008

| Field | Value |
|---|---|
| variantId | b1-01-mein-meine-familiar-vf-006-var-008 |
| proposedSchemaVariantId | b1-01-mein-meine-familiar-vf-006-var-008 |
| parentVariantFamilyId | b1-01-mein-meine-familiar-vf-006 |
| proposedSchemaFamilyId | b1-01-mein-meine-familiar-vf-006 |
| displayModuleId | B1-01 |
| moduleKey | b1-01 |
| internalPlanningId | b1_m01_getting_started |
| moduleSlug | getting-started-work-course |
| moduleTitle | Getting started at work/course |
| levelTrack | B1 |
| cefrTarget | B1 |
| sourceItemIds | draft_b1_m01_recognition_008; draft_b1_m01_cloze_006; draft_b1_m01_repair_004; draft_b1_m01_contrast_002; draft_b1_m01_topup_recognition_005; draft_b1_m01_topup_cloze_007; draft_b1_m01_topup_cloze_008; draft_b1_m01_topup_satzbau_008; draft_b1_m01_topup_satzbau_009; draft_b1_m01_topup_repair_007; draft_b1_m01_topup_repair_008 |
| targetFamilyId | TF-B1-01-LS02-01 |
| targetId | T-B1-01-LS02-01-02 |
| learner cue | Here is my notebook. |
| prompt / sentence / chunks | Hier ist ___ Heft. |
| givenPhrase | — |
| target answer | mein |
| accepted answers | mein |
| feedback micro-rule | Hier ist mein Heft. Use mein with das Heft. |
| taskType | Luecke |
| taskDepth | cloze |
| answerMode | typed_short |
| answerShape | single_token |
| correctnessPolicy | exact |
| acceptedAnswerPolicy | exact_only |
| supportPolicy | scenario_visible |
| supportPresentation | english_visible_before_answer |
| planningEvidenceLabel | Core Evidence |
| evidenceType | auto_core |
| reviewGroup | rg-b1-01-mein-meine-familiar-nouns |
| siblingVariantGroup | b1-01-mein-meine-familiar-siblings-006 |
| reviewEligibilityDefault | eligible_variant_review_after_delay |
| grammarFocus | mein/meine with familiar B1-01 nouns |
| vocabularyFocus | B1-01 course/work entry vocabulary |
| redemittelFocus | course-entry sentence pattern |
| skillTags | possessive_awareness |
| errorCategories | wrong_possessive_form |
| sourceRisk | low; QA-approved survivor |
| schemaRisk | low |
| qaStatus | revised_and_approved |
| learnerFacingAllowed | Yes |
| schemaNotes | Revised to avoid sentence-start capitalisation becoming a hidden target. |

### b1-01-noun-capitalisation-vf-007-var-001

| Field | Value |
|---|---|
| variantId | b1-01-noun-capitalisation-vf-007-var-001 |
| proposedSchemaVariantId | b1-01-noun-capitalisation-vf-007-var-001 |
| parentVariantFamilyId | b1-01-noun-capitalisation-vf-007 |
| proposedSchemaFamilyId | b1-01-noun-capitalisation-vf-007 |
| displayModuleId | B1-01 |
| moduleKey | b1-01 |
| internalPlanningId | b1_m01_getting_started |
| moduleSlug | getting-started-work-course |
| moduleTitle | Getting started at work/course |
| levelTrack | B1 |
| cefrTarget | B1 |
| sourceItemIds | draft_b1_m01_notice_002 excluded; draft_b1_m01_recognition_010; draft_b1_m01_repair_002; draft_b1_m01_topup_recognition_006; draft_b1_m01_topup_cloze_006; draft_b1_m01_topup_cloze_009; draft_b1_m01_topup_repair_006 |
| targetFamilyId | TF-B1-01-LS09-01 |
| targetId | T-B1-01-LS09-01-01 |
| learner cue | You need a notebook. |
| prompt / sentence / chunks | Ich brauche ein ___. |
| givenPhrase | — |
| target answer | Heft |
| accepted answers | Heft; heft correct-with-note only if supported |
| feedback micro-rule | Ich brauche ein Heft. German nouns are capitalised. |
| taskType | Luecke |
| taskDepth | cloze |
| answerMode | typed_short |
| answerShape | single_token |
| correctnessPolicy | normalised |
| acceptedAnswerPolicy | normalised_if_supported |
| supportPolicy | scenario_visible |
| supportPresentation | english_visible_before_answer |
| planningEvidenceLabel | Practice Evidence |
| evidenceType | auto_supported |
| reviewGroup | rg-b1-01-noun-capitalisation-course-words |
| siblingVariantGroup | b1-01-noun-capitalisation-siblings-007 |
| reviewEligibilityDefault | ineligible_support_too_strong |
| grammarFocus | German noun capitalisation in B1-01 course words |
| vocabularyFocus | B1-01 course/work entry vocabulary |
| redemittelFocus | course-entry sentence pattern |
| skillTags | capitalisation |
| errorCategories | noun_not_capitalised |
| sourceRisk | medium: mechanics-only and fallback-sensitive; fallback policy needed |
| schemaRisk | medium: mechanics-only and fallback-sensitive; fallback policy needed |
| qaStatus | approved_as_is |
| learnerFacingAllowed | Yes |
| schemaNotes | — |

### b1-01-noun-capitalisation-vf-007-var-002

| Field | Value |
|---|---|
| variantId | b1-01-noun-capitalisation-vf-007-var-002 |
| proposedSchemaVariantId | b1-01-noun-capitalisation-vf-007-var-002 |
| parentVariantFamilyId | b1-01-noun-capitalisation-vf-007 |
| proposedSchemaFamilyId | b1-01-noun-capitalisation-vf-007 |
| displayModuleId | B1-01 |
| moduleKey | b1-01 |
| internalPlanningId | b1_m01_getting_started |
| moduleSlug | getting-started-work-course |
| moduleTitle | Getting started at work/course |
| levelTrack | B1 |
| cefrTarget | B1 |
| sourceItemIds | draft_b1_m01_notice_002 excluded; draft_b1_m01_recognition_010; draft_b1_m01_repair_002; draft_b1_m01_topup_recognition_006; draft_b1_m01_topup_cloze_006; draft_b1_m01_topup_cloze_009; draft_b1_m01_topup_repair_006 |
| targetFamilyId | TF-B1-01-LS09-01 |
| targetId | T-B1-01-LS09-01-01 |
| learner cue | The app is here. |
| prompt / sentence / chunks | Die ___ ist hier. |
| givenPhrase | — |
| target answer | App |
| accepted answers | App; app correct-with-note only if supported |
| feedback micro-rule | Die App ist hier. App is a noun, so it is capitalised. |
| taskType | Luecke |
| taskDepth | cloze |
| answerMode | typed_short |
| answerShape | single_token |
| correctnessPolicy | normalised |
| acceptedAnswerPolicy | normalised_if_supported |
| supportPolicy | scenario_visible |
| supportPresentation | english_visible_before_answer |
| planningEvidenceLabel | Practice Evidence |
| evidenceType | auto_supported |
| reviewGroup | rg-b1-01-noun-capitalisation-course-words |
| siblingVariantGroup | b1-01-noun-capitalisation-siblings-007 |
| reviewEligibilityDefault | ineligible_support_too_strong |
| grammarFocus | German noun capitalisation in B1-01 course words |
| vocabularyFocus | B1-01 course/work entry vocabulary |
| redemittelFocus | course-entry sentence pattern |
| skillTags | capitalisation |
| errorCategories | noun_not_capitalised |
| sourceRisk | medium: mechanics-only and fallback-sensitive; fallback policy needed |
| schemaRisk | medium: mechanics-only and fallback-sensitive; fallback policy needed |
| qaStatus | approved_as_is |
| learnerFacingAllowed | Yes |
| schemaNotes | — |

### b1-01-noun-capitalisation-vf-007-var-003

| Field | Value |
|---|---|
| variantId | b1-01-noun-capitalisation-vf-007-var-003 |
| proposedSchemaVariantId | b1-01-noun-capitalisation-vf-007-var-003 |
| parentVariantFamilyId | b1-01-noun-capitalisation-vf-007 |
| proposedSchemaFamilyId | b1-01-noun-capitalisation-vf-007 |
| displayModuleId | B1-01 |
| moduleKey | b1-01 |
| internalPlanningId | b1_m01_getting_started |
| moduleSlug | getting-started-work-course |
| moduleTitle | Getting started at work/course |
| levelTrack | B1 |
| cefrTarget | B1 |
| sourceItemIds | draft_b1_m01_notice_002 excluded; draft_b1_m01_recognition_010; draft_b1_m01_repair_002; draft_b1_m01_topup_recognition_006; draft_b1_m01_topup_cloze_006; draft_b1_m01_topup_cloze_009; draft_b1_m01_topup_repair_006 |
| targetFamilyId | TF-B1-01-LS09-01 |
| targetId | T-B1-01-LS09-01-01 |
| learner cue | You need help. |
| prompt / sentence / chunks | Ich brauche ___. |
| givenPhrase | — |
| target answer | Hilfe |
| accepted answers | Hilfe; hilfe correct-with-note only if supported |
| feedback micro-rule | Ich brauche Hilfe. Hilfe is a noun, so it is capitalised. |
| taskType | Luecke |
| taskDepth | cloze |
| answerMode | typed_short |
| answerShape | single_token |
| correctnessPolicy | normalised |
| acceptedAnswerPolicy | normalised_if_supported |
| supportPolicy | scenario_visible |
| supportPresentation | english_visible_before_answer |
| planningEvidenceLabel | Practice Evidence |
| evidenceType | auto_supported |
| reviewGroup | rg-b1-01-noun-capitalisation-course-words |
| siblingVariantGroup | b1-01-noun-capitalisation-siblings-007 |
| reviewEligibilityDefault | ineligible_support_too_strong |
| grammarFocus | German noun capitalisation in B1-01 course words |
| vocabularyFocus | B1-01 course/work entry vocabulary |
| redemittelFocus | course-entry sentence pattern |
| skillTags | capitalisation |
| errorCategories | noun_not_capitalised |
| sourceRisk | medium: mechanics-only and fallback-sensitive; fallback policy needed |
| schemaRisk | medium: mechanics-only and fallback-sensitive; fallback policy needed |
| qaStatus | approved_as_is |
| learnerFacingAllowed | Yes |
| schemaNotes | — |

### b1-01-noun-capitalisation-vf-007-var-004

| Field | Value |
|---|---|
| variantId | b1-01-noun-capitalisation-vf-007-var-004 |
| proposedSchemaVariantId | b1-01-noun-capitalisation-vf-007-var-004 |
| parentVariantFamilyId | b1-01-noun-capitalisation-vf-007 |
| proposedSchemaFamilyId | b1-01-noun-capitalisation-vf-007 |
| displayModuleId | B1-01 |
| moduleKey | b1-01 |
| internalPlanningId | b1_m01_getting_started |
| moduleSlug | getting-started-work-course |
| moduleTitle | Getting started at work/course |
| levelTrack | B1 |
| cefrTarget | B1 |
| sourceItemIds | draft_b1_m01_notice_002 excluded; draft_b1_m01_recognition_010; draft_b1_m01_repair_002; draft_b1_m01_topup_recognition_006; draft_b1_m01_topup_cloze_006; draft_b1_m01_topup_cloze_009; draft_b1_m01_topup_repair_006 |
| targetFamilyId | TF-B1-01-LS09-01 |
| targetId | T-B1-01-LS09-01-01 |
| learner cue | The documents are here. |
| prompt / sentence / chunks | Die ___ sind hier. |
| givenPhrase | — |
| target answer | Unterlagen |
| accepted answers | Unterlagen; unterlagen correct-with-note only if supported |
| feedback micro-rule | Die Unterlagen sind hier. Unterlagen is a noun. |
| taskType | Luecke |
| taskDepth | cloze |
| answerMode | typed_short |
| answerShape | single_token |
| correctnessPolicy | normalised |
| acceptedAnswerPolicy | normalised_if_supported |
| supportPolicy | scenario_visible |
| supportPresentation | english_visible_before_answer |
| planningEvidenceLabel | Practice Evidence |
| evidenceType | auto_supported |
| reviewGroup | rg-b1-01-noun-capitalisation-course-words |
| siblingVariantGroup | b1-01-noun-capitalisation-siblings-007 |
| reviewEligibilityDefault | ineligible_support_too_strong |
| grammarFocus | German noun capitalisation in B1-01 course words |
| vocabularyFocus | B1-01 course/work entry vocabulary |
| redemittelFocus | course-entry sentence pattern |
| skillTags | capitalisation |
| errorCategories | noun_not_capitalised |
| sourceRisk | medium: mechanics-only and fallback-sensitive; fallback policy needed |
| schemaRisk | medium: mechanics-only and fallback-sensitive; fallback policy needed |
| qaStatus | approved_as_is |
| learnerFacingAllowed | Yes |
| schemaNotes | — |

### b1-01-w-question-repair-vf-008-var-001

| Field | Value |
|---|---|
| variantId | b1-01-w-question-repair-vf-008-var-001 |
| proposedSchemaVariantId | b1-01-w-question-repair-vf-008-var-001 |
| parentVariantFamilyId | b1-01-w-question-repair-vf-008 |
| proposedSchemaFamilyId | b1-01-w-question-repair-vf-008 |
| displayModuleId | B1-01 |
| moduleKey | b1-01 |
| internalPlanningId | b1_m01_getting_started |
| moduleSlug | getting-started-work-course |
| moduleTitle | Getting started at work/course |
| levelTrack | B1 |
| cefrTarget | B1 |
| sourceItemIds | draft_b1_m01_repair_003; draft_b1_m01_topup_repair_003; draft_b1_m01_topup_contrast_002 |
| targetFamilyId | TF-B1-01-LS01-02 |
| targetId | T-B1-01-LS01-02-01 |
| learner cue | Fix the question. |
| prompt / sentence / chunks | Wo der Kursraum ist? |
| givenPhrase | — |
| target answer | Wo ist der Kursraum? |
| accepted answers | exact; punctuation variant may be accepted after QA |
| feedback micro-rule | W-question: Wo + verb + subject/complement. |
| taskType | Reparatur |
| taskDepth | repair |
| answerMode | repair_text |
| answerShape | repaired_sentence |
| correctnessPolicy | normalised |
| acceptedAnswerPolicy | multi_answer_if_explicit |
| supportPolicy | scenario_visible |
| supportPresentation | english_visible_before_answer |
| planningEvidenceLabel | Core Evidence |
| evidenceType | auto_core |
| reviewGroup | rg-b1-01-w-question-repair |
| siblingVariantGroup | b1-01-w-question-repair-siblings-008 |
| reviewEligibilityDefault | eligible_variant_review_after_delay |
| grammarFocus | Repair W-question word order |
| vocabularyFocus | B1-01 course/work entry vocabulary |
| redemittelFocus | course-entry sentence pattern |
| skillTags | sentence_control |
| errorCategories | question_word_order |
| sourceRisk | fallback policy needed |
| schemaRisk | fallback policy needed |
| qaStatus | approved_as_is |
| learnerFacingAllowed | Yes |
| schemaNotes | — |

### b1-01-w-question-repair-vf-008-var-002

| Field | Value |
|---|---|
| variantId | b1-01-w-question-repair-vf-008-var-002 |
| proposedSchemaVariantId | b1-01-w-question-repair-vf-008-var-002 |
| parentVariantFamilyId | b1-01-w-question-repair-vf-008 |
| proposedSchemaFamilyId | b1-01-w-question-repair-vf-008 |
| displayModuleId | B1-01 |
| moduleKey | b1-01 |
| internalPlanningId | b1_m01_getting_started |
| moduleSlug | getting-started-work-course |
| moduleTitle | Getting started at work/course |
| levelTrack | B1 |
| cefrTarget | B1 |
| sourceItemIds | draft_b1_m01_repair_003; draft_b1_m01_topup_repair_003; draft_b1_m01_topup_contrast_002 |
| targetFamilyId | TF-B1-01-LS01-02 |
| targetId | T-B1-01-LS01-02-01 |
| learner cue | Fix the question. |
| prompt / sentence / chunks | Wo ich finde die App? |
| givenPhrase | — |
| target answer | Wo finde ich die App? |
| accepted answers | exact; punctuation variant after QA |
| feedback micro-rule | In a W-question, the verb comes after Wo. |
| taskType | Reparatur |
| taskDepth | repair |
| answerMode | repair_text |
| answerShape | repaired_sentence |
| correctnessPolicy | normalised |
| acceptedAnswerPolicy | multi_answer_if_explicit |
| supportPolicy | scenario_visible |
| supportPresentation | english_visible_before_answer |
| planningEvidenceLabel | Core Evidence |
| evidenceType | auto_core |
| reviewGroup | rg-b1-01-w-question-repair |
| siblingVariantGroup | b1-01-w-question-repair-siblings-008 |
| reviewEligibilityDefault | eligible_variant_review_after_delay |
| grammarFocus | Repair W-question word order |
| vocabularyFocus | B1-01 course/work entry vocabulary |
| redemittelFocus | course-entry sentence pattern |
| skillTags | sentence_control |
| errorCategories | question_word_order |
| sourceRisk | fallback policy needed |
| schemaRisk | fallback policy needed |
| qaStatus | approved_as_is |
| learnerFacingAllowed | Yes |
| schemaNotes | — |

### b1-01-w-question-repair-vf-008-var-003

| Field | Value |
|---|---|
| variantId | b1-01-w-question-repair-vf-008-var-003 |
| proposedSchemaVariantId | b1-01-w-question-repair-vf-008-var-003 |
| parentVariantFamilyId | b1-01-w-question-repair-vf-008 |
| proposedSchemaFamilyId | b1-01-w-question-repair-vf-008 |
| displayModuleId | B1-01 |
| moduleKey | b1-01 |
| internalPlanningId | b1_m01_getting_started |
| moduleSlug | getting-started-work-course |
| moduleTitle | Getting started at work/course |
| levelTrack | B1 |
| cefrTarget | B1 |
| sourceItemIds | draft_b1_m01_repair_003; draft_b1_m01_topup_repair_003; draft_b1_m01_topup_contrast_002 |
| targetFamilyId | TF-B1-01-LS01-02 |
| targetId | T-B1-01-LS01-02-01 |
| learner cue | Fix the question. |
| prompt / sentence / chunks | Wo ich finde die Unterlagen? |
| givenPhrase | — |
| target answer | Wo finde ich die Unterlagen? |
| accepted answers | exact |
| feedback micro-rule | Wo finde ich die Unterlagen? Verb second after Wo. |
| taskType | Reparatur |
| taskDepth | repair |
| answerMode | repair_text |
| answerShape | repaired_sentence |
| correctnessPolicy | exact |
| acceptedAnswerPolicy | exact_only |
| supportPolicy | scenario_visible |
| supportPresentation | english_visible_before_answer |
| planningEvidenceLabel | Core Evidence |
| evidenceType | auto_core |
| reviewGroup | rg-b1-01-w-question-repair |
| siblingVariantGroup | b1-01-w-question-repair-siblings-008 |
| reviewEligibilityDefault | eligible_variant_review_after_delay |
| grammarFocus | Repair W-question word order |
| vocabularyFocus | B1-01 course/work entry vocabulary |
| redemittelFocus | course-entry sentence pattern |
| skillTags | sentence_control |
| errorCategories | question_word_order |
| sourceRisk | low; QA-approved survivor |
| schemaRisk | low |
| qaStatus | approved_as_is |
| learnerFacingAllowed | Yes |
| schemaNotes | — |

### b1-01-w-question-repair-vf-008-var-004

| Field | Value |
|---|---|
| variantId | b1-01-w-question-repair-vf-008-var-004 |
| proposedSchemaVariantId | b1-01-w-question-repair-vf-008-var-004 |
| parentVariantFamilyId | b1-01-w-question-repair-vf-008 |
| proposedSchemaFamilyId | b1-01-w-question-repair-vf-008 |
| displayModuleId | B1-01 |
| moduleKey | b1-01 |
| internalPlanningId | b1_m01_getting_started |
| moduleSlug | getting-started-work-course |
| moduleTitle | Getting started at work/course |
| levelTrack | B1 |
| cefrTarget | B1 |
| sourceItemIds | draft_b1_m01_repair_003; draft_b1_m01_topup_repair_003; draft_b1_m01_topup_contrast_002 |
| targetFamilyId | TF-B1-01-LS01-02 |
| targetId | T-B1-01-LS01-02-01 |
| learner cue | Fix the question. |
| prompt / sentence / chunks | Wo die App ist? |
| givenPhrase | — |
| target answer | Wo ist die App? |
| accepted answers | exact |
| feedback micro-rule | W-question order: Wo ist die App? |
| taskType | Reparatur |
| taskDepth | repair |
| answerMode | repair_text |
| answerShape | repaired_sentence |
| correctnessPolicy | exact |
| acceptedAnswerPolicy | exact_only |
| supportPolicy | scenario_visible |
| supportPresentation | english_visible_before_answer |
| planningEvidenceLabel | Core Evidence |
| evidenceType | auto_core |
| reviewGroup | rg-b1-01-w-question-repair |
| siblingVariantGroup | b1-01-w-question-repair-siblings-008 |
| reviewEligibilityDefault | eligible_variant_review_after_delay |
| grammarFocus | Repair W-question word order |
| vocabularyFocus | B1-01 course/work entry vocabulary |
| redemittelFocus | course-entry sentence pattern |
| skillTags | sentence_control |
| errorCategories | question_word_order |
| sourceRisk | low; QA-approved survivor |
| schemaRisk | low |
| qaStatus | approved_as_is |
| learnerFacingAllowed | Yes |
| schemaNotes | — |

### b1-01-w-question-repair-vf-008-var-005

| Field | Value |
|---|---|
| variantId | b1-01-w-question-repair-vf-008-var-005 |
| proposedSchemaVariantId | b1-01-w-question-repair-vf-008-var-005 |
| parentVariantFamilyId | b1-01-w-question-repair-vf-008 |
| proposedSchemaFamilyId | b1-01-w-question-repair-vf-008 |
| displayModuleId | B1-01 |
| moduleKey | b1-01 |
| internalPlanningId | b1_m01_getting_started |
| moduleSlug | getting-started-work-course |
| moduleTitle | Getting started at work/course |
| levelTrack | B1 |
| cefrTarget | B1 |
| sourceItemIds | draft_b1_m01_repair_003; draft_b1_m01_topup_repair_003; draft_b1_m01_topup_contrast_002 |
| targetFamilyId | TF-B1-01-LS01-02 |
| targetId | T-B1-01-LS01-02-01 |
| learner cue | Fix the question. |
| prompt / sentence / chunks | Wo das Heft ist? |
| givenPhrase | — |
| target answer | Wo ist das Heft? |
| accepted answers | exact |
| feedback micro-rule | The finite verb comes after the question word. |
| taskType | Reparatur |
| taskDepth | repair |
| answerMode | repair_text |
| answerShape | repaired_sentence |
| correctnessPolicy | exact |
| acceptedAnswerPolicy | exact_only |
| supportPolicy | scenario_visible |
| supportPresentation | english_visible_before_answer |
| planningEvidenceLabel | Core Evidence |
| evidenceType | auto_core |
| reviewGroup | rg-b1-01-w-question-repair |
| siblingVariantGroup | b1-01-w-question-repair-siblings-008 |
| reviewEligibilityDefault | eligible_variant_review_after_delay |
| grammarFocus | Repair W-question word order |
| vocabularyFocus | B1-01 course/work entry vocabulary |
| redemittelFocus | course-entry sentence pattern |
| skillTags | sentence_control |
| errorCategories | question_word_order |
| sourceRisk | low; QA-approved survivor |
| schemaRisk | low |
| qaStatus | approved_as_is |
| learnerFacingAllowed | Yes |
| schemaNotes | — |

### b1-01-w-question-repair-vf-008-var-006

| Field | Value |
|---|---|
| variantId | b1-01-w-question-repair-vf-008-var-006 |
| proposedSchemaVariantId | b1-01-w-question-repair-vf-008-var-006 |
| parentVariantFamilyId | b1-01-w-question-repair-vf-008 |
| proposedSchemaFamilyId | b1-01-w-question-repair-vf-008 |
| displayModuleId | B1-01 |
| moduleKey | b1-01 |
| internalPlanningId | b1_m01_getting_started |
| moduleSlug | getting-started-work-course |
| moduleTitle | Getting started at work/course |
| levelTrack | B1 |
| cefrTarget | B1 |
| sourceItemIds | draft_b1_m01_repair_003; draft_b1_m01_topup_repair_003; draft_b1_m01_topup_contrast_002 |
| targetFamilyId | TF-B1-01-LS01-02 |
| targetId | T-B1-01-LS01-02-01 |
| learner cue | Fix the question. |
| prompt / sentence / chunks | Wo Informationen finde ich? |
| givenPhrase | — |
| target answer | Wo finde ich Informationen? |
| accepted answers | exact |
| feedback micro-rule | Use Wo + finde + ich. |
| taskType | Reparatur |
| taskDepth | repair |
| answerMode | repair_text |
| answerShape | repaired_sentence |
| correctnessPolicy | exact |
| acceptedAnswerPolicy | exact_only |
| supportPolicy | scenario_visible |
| supportPresentation | english_visible_before_answer |
| planningEvidenceLabel | Core Evidence |
| evidenceType | auto_core |
| reviewGroup | rg-b1-01-w-question-repair |
| siblingVariantGroup | b1-01-w-question-repair-siblings-008 |
| reviewEligibilityDefault | eligible_variant_review_after_delay |
| grammarFocus | Repair W-question word order |
| vocabularyFocus | B1-01 course/work entry vocabulary |
| redemittelFocus | course-entry sentence pattern |
| skillTags | sentence_control |
| errorCategories | question_word_order |
| sourceRisk | low; QA-approved survivor |
| schemaRisk | low |
| qaStatus | approved_as_is |
| learnerFacingAllowed | Yes |
| schemaNotes | — |

### b1-01-controlled-production-vf-009-var-001

| Field | Value |
|---|---|
| variantId | b1-01-controlled-production-vf-009-var-001 |
| proposedSchemaVariantId | b1-01-controlled-production-vf-009-var-001 |
| parentVariantFamilyId | b1-01-controlled-production-vf-009 |
| proposedSchemaFamilyId | b1-01-controlled-production-vf-009 |
| displayModuleId | B1-01 |
| moduleKey | b1-01 |
| internalPlanningId | b1_m01_getting_started |
| moduleSlug | getting-started-work-course |
| moduleTitle | Getting started at work/course |
| levelTrack | B1 |
| cefrTarget | B1 |
| sourceItemIds | draft_b1_m01_production_001; draft_b1_m01_production_002; draft_b1_m01_production_003; draft_b1_m01_topup_production_001; draft_b1_m01_topup_production_002; draft_b1_m01_topup_production_003 |
| targetFamilyId | TF-B1-01-LS10-01 |
| targetId | T-B1-01-LS10-01-01 / T-B1-01-LS10-01-02 |
| learner cue | Introduce yourself in two short sentences. |
| prompt / sentence / chunks | Write your name and one course sentence. |
| givenPhrase | — |
| target answer | self-marked |
| accepted answers | self-marked only |
| feedback micro-rule | Model after attempt: Ich heiße Mina. Ich bin im Deutschkurs. |
| taskType | Produktion |
| taskDepth | controlled_production |
| answerMode | self_marked |
| answerShape | self_marked_response |
| correctnessPolicy | self-marked |
| acceptedAnswerPolicy | self_marked_only |
| supportPolicy | checklist_visible |
| supportPresentation | production_checklist_only |
| planningEvidenceLabel | Self-marked Production Evidence |
| evidenceType | self_marked_production |
| reviewGroup | none-production-only |
| siblingVariantGroup | b1-01-controlled-production-siblings-009 |
| reviewEligibilityDefault | ineligible_self_marked_production |
| grammarFocus | Controlled self-marked course-entry production |
| vocabularyFocus | course-entry language |
| redemittelFocus | controlled self-introduction / course-entry production |
| skillTags | controlled_production |
| errorCategories | controlled_production |
| sourceRisk | medium: self-marked only |
| schemaRisk | medium: self-marked only |
| qaStatus | approved_as_is |
| learnerFacingAllowed | Yes |
| schemaNotes | — |

### b1-01-controlled-production-vf-009-var-002

| Field | Value |
|---|---|
| variantId | b1-01-controlled-production-vf-009-var-002 |
| proposedSchemaVariantId | b1-01-controlled-production-vf-009-var-002 |
| parentVariantFamilyId | b1-01-controlled-production-vf-009 |
| proposedSchemaFamilyId | b1-01-controlled-production-vf-009 |
| displayModuleId | B1-01 |
| moduleKey | b1-01 |
| internalPlanningId | b1_m01_getting_started |
| moduleSlug | getting-started-work-course |
| moduleTitle | Getting started at work/course |
| levelTrack | B1 |
| cefrTarget | B1 |
| sourceItemIds | draft_b1_m01_production_001; draft_b1_m01_production_002; draft_b1_m01_production_003; draft_b1_m01_topup_production_001; draft_b1_m01_topup_production_002; draft_b1_m01_topup_production_003 |
| targetFamilyId | TF-B1-01-LS10-01 |
| targetId | T-B1-01-LS10-01-01 / T-B1-01-LS10-01-02 |
| learner cue | Write one sentence about what you need today. |
| prompt / sentence / chunks | Use Ich brauche ... |
| givenPhrase | — |
| target answer | self-marked |
| accepted answers | self-marked only |
| feedback micro-rule | Model after attempt: Ich brauche die App. |
| taskType | Produktion |
| taskDepth | controlled_production |
| answerMode | self_marked |
| answerShape | self_marked_response |
| correctnessPolicy | self-marked |
| acceptedAnswerPolicy | self_marked_only |
| supportPolicy | phrase_bank_collapsed |
| supportPresentation | production_checklist_only |
| planningEvidenceLabel | Self-marked Production Evidence |
| evidenceType | self_marked_production |
| reviewGroup | none-production-only |
| siblingVariantGroup | b1-01-controlled-production-siblings-009 |
| reviewEligibilityDefault | ineligible_self_marked_production |
| grammarFocus | Controlled self-marked course-entry production |
| vocabularyFocus | course-entry language |
| redemittelFocus | controlled self-introduction / course-entry production |
| skillTags | controlled_production |
| errorCategories | controlled_production |
| sourceRisk | medium: self-marked only |
| schemaRisk | medium: self-marked only |
| qaStatus | approved_as_is |
| learnerFacingAllowed | Yes |
| schemaNotes | — |

### b1-01-controlled-production-vf-009-var-003

| Field | Value |
|---|---|
| variantId | b1-01-controlled-production-vf-009-var-003 |
| proposedSchemaVariantId | b1-01-controlled-production-vf-009-var-003 |
| parentVariantFamilyId | b1-01-controlled-production-vf-009 |
| proposedSchemaFamilyId | b1-01-controlled-production-vf-009 |
| displayModuleId | B1-01 |
| moduleKey | b1-01 |
| internalPlanningId | b1_m01_getting_started |
| moduleSlug | getting-started-work-course |
| moduleTitle | Getting started at work/course |
| levelTrack | B1 |
| cefrTarget | B1 |
| sourceItemIds | draft_b1_m01_production_001; draft_b1_m01_production_002; draft_b1_m01_production_003; draft_b1_m01_topup_production_001; draft_b1_m01_topup_production_002; draft_b1_m01_topup_production_003 |
| targetFamilyId | TF-B1-01-LS10-01 |
| targetId | T-B1-01-LS10-01-01 / T-B1-01-LS10-01-02 |
| learner cue | Write one sentence that starts with Heute. |
| prompt / sentence / chunks | Use a course/work sentence. |
| givenPhrase | — |
| target answer | self-marked |
| accepted answers | self-marked only |
| feedback micro-rule | Model after attempt: Heute bin ich im Kurs. |
| taskType | Produktion |
| taskDepth | controlled_production |
| answerMode | self_marked |
| answerShape | self_marked_response |
| correctnessPolicy | self-marked |
| acceptedAnswerPolicy | self_marked_only |
| supportPolicy | checklist_visible |
| supportPresentation | production_checklist_only |
| planningEvidenceLabel | Self-marked Production Evidence |
| evidenceType | self_marked_production |
| reviewGroup | none-production-only |
| siblingVariantGroup | b1-01-controlled-production-siblings-009 |
| reviewEligibilityDefault | ineligible_self_marked_production |
| grammarFocus | Controlled self-marked course-entry production |
| vocabularyFocus | course-entry language |
| redemittelFocus | controlled self-introduction / course-entry production |
| skillTags | controlled_production |
| errorCategories | controlled_production |
| sourceRisk | medium: self-marked only |
| schemaRisk | medium: self-marked only |
| qaStatus | approved_as_is |
| learnerFacingAllowed | Yes |
| schemaNotes | — |

### b1-01-controlled-production-vf-009-var-004

| Field | Value |
|---|---|
| variantId | b1-01-controlled-production-vf-009-var-004 |
| proposedSchemaVariantId | b1-01-controlled-production-vf-009-var-004 |
| parentVariantFamilyId | b1-01-controlled-production-vf-009 |
| proposedSchemaFamilyId | b1-01-controlled-production-vf-009 |
| displayModuleId | B1-01 |
| moduleKey | b1-01 |
| internalPlanningId | b1_m01_getting_started |
| moduleSlug | getting-started-work-course |
| moduleTitle | Getting started at work/course |
| levelTrack | B1 |
| cefrTarget | B1 |
| sourceItemIds | draft_b1_m01_production_001; draft_b1_m01_production_002; draft_b1_m01_production_003; draft_b1_m01_topup_production_001; draft_b1_m01_topup_production_002; draft_b1_m01_topup_production_003 |
| targetFamilyId | TF-B1-01-LS10-01 |
| targetId | T-B1-01-LS10-01-01 / T-B1-01-LS10-01-02 |
| learner cue | Write two short sentences for the first course day. |
| prompt / sentence / chunks | Include where you are and what you need. |
| givenPhrase | — |
| target answer | self-marked |
| accepted answers | self-marked only |
| feedback micro-rule | Model after attempt: Ich bin im Kurs. Ich brauche ein Heft. |
| taskType | Produktion |
| taskDepth | controlled_production |
| answerMode | self_marked |
| answerShape | self_marked_response |
| correctnessPolicy | self-marked |
| acceptedAnswerPolicy | self_marked_only |
| supportPolicy | checklist_visible |
| supportPresentation | production_checklist_only |
| planningEvidenceLabel | Self-marked Production Evidence |
| evidenceType | self_marked_production |
| reviewGroup | none-production-only |
| siblingVariantGroup | b1-01-controlled-production-siblings-009 |
| reviewEligibilityDefault | ineligible_self_marked_production |
| grammarFocus | Controlled self-marked course-entry production |
| vocabularyFocus | course-entry language |
| redemittelFocus | controlled self-introduction / course-entry production |
| skillTags | controlled_production |
| errorCategories | controlled_production |
| sourceRisk | medium: self-marked only |
| schemaRisk | medium: self-marked only |
| qaStatus | approved_as_is |
| learnerFacingAllowed | Yes |
| schemaNotes | — |

## 8. Multiple-Choice Choice-ID Mapping

There are no clean survivor variants whose current authored form is an Auswahl or Kontrast choice item. The variant families may later be rendered as choices only if a later import plan creates stable choice IDs and keeps correctness independent of display order.

## 9. Sibling Evidence / Review Ledger

| variantFamilyId | siblingVariantGroup | reviewGroup | same-session rule | delayed-review rule | maxSameSessionEvidence | evidence cap | notes |
|---|---|---|---|---|---:|---|---|
| b1-01-v2-fronted-time-vf-001 | b1-01-v2-fronted-time-siblings-001 | rg-b1-01-v2-fronted-time | Same-family variants are sibling evidence only. | Delayed review requires a later timestamp/session and preferably task-depth change. | 1 | family-level cap; do not add raw variant attempts as independent proof | Frame-level V2 evidence; exact verb differs by cue, so do not treat as one lexical verb target. |
| b1-01-v2-fronted-place-vf-002 | b1-01-v2-fronted-place-siblings-002 | rg-b1-01-v2-fronted-place | Same-family variants are sibling evidence only. | Delayed review requires a later timestamp/session and preferably task-depth change. | 1 | family-level cap; do not add raw variant attempts as independent proof | Frame-level V2 evidence for place-first main clauses. |
| b1-01-w-question-location-vf-003 | b1-01-w-question-location-siblings-003 | rg-b1-01-w-question-orientation | Same-family variants are sibling evidence only. | Delayed review requires a later timestamp/session and preferably task-depth change. | 1 | family-level cap; do not add raw variant attempts as independent proof | Question-frame evidence; some variants target ist, others finde. |
| b1-01-yes-no-question-vf-004 | b1-01-yes-no-question-siblings-004 | rg-b1-01-yes-no-question-order | Same-family variants are sibling evidence only. | Delayed review requires a later timestamp/session and preferably task-depth change. | 1 | family-level cap; do not add raw variant attempts as independent proof | Question-frame evidence; target answer varies by verb. |
| b1-01-brauchen-acc-vf-005 | b1-01-brauchen-acc-siblings-005 | rg-b1-01-brauchen-acc-survival | Same-family variants are sibling evidence only. | Delayed review requires a later timestamp/session and preferably task-depth change. | 1 | capped survival evidence; not B1-depth proof by itself | Capped survival/scaffold evidence; not B1-depth proof. |
| b1-01-mein-meine-familiar-vf-006 | b1-01-mein-meine-familiar-siblings-006 | rg-b1-01-mein-meine-familiar-nouns | Same-family variants are sibling evidence only. | Delayed review requires a later timestamp/session and preferably task-depth change. | 1 | family-level cap; do not add raw variant attempts as independent proof | Familiar-noun possessive awareness only; not a full article/case table. |
| b1-01-noun-capitalisation-vf-007 | b1-01-noun-capitalisation-siblings-007 | rg-b1-01-noun-capitalisation-course-words | Same-family variants are sibling evidence only. | Delayed review requires a later timestamp/session and preferably task-depth change. | 1 | family-level cap; do not add raw variant attempts as independent proof | Mechanics/support evidence; do not infer broad vocabulary or grammar control. |
| b1-01-w-question-repair-vf-008 | b1-01-w-question-repair-siblings-008 | rg-b1-01-w-question-repair | Same-family variants are sibling evidence only. | Delayed review requires a later timestamp/session and preferably task-depth change. | 1 | family-level cap; do not add raw variant attempts as independent proof | Repair-level evidence for W-question order, stronger than recognition. |
| b1-01-controlled-production-vf-009 | b1-01-controlled-production-siblings-009 | none-production-only | Same-family variants are sibling evidence only. | Delayed review requires a later timestamp/session and preferably task-depth change. | 1 | self-marked only; no correctness/review evidence | Self-marked production evidence only; no correctness. |

## 10. Fallback / Capitalisation / Ambiguity Ledger

| variantId | issue | canonicalAnswer | fallback / ambiguity | decision | evidence impact | schema/import caveat |
|---|---|---|---|---|---|---|
| b1-01-w-question-location-vf-003-var-006 | bare plural/naturalness | finde | — | accepted as exact; no synonym expansion | No extra accepted answers. | Preserve no-synonym policy. |
| b1-01-yes-no-question-vf-004-var-001 | sentence-start capitalisation | Brauche | brauche | correct_with_note_if_supported; otherwise exact_only | Do not award full-strength evidence for fallback. | Import layer must support correct-with-note or reject fallback as incorrect. |
| b1-01-yes-no-question-vf-004-var-002 | sentence-start capitalisation | Brauche | brauche | correct_with_note_if_supported; otherwise exact_only | Do not award full-strength evidence for fallback. | Import layer must support correct-with-note or reject fallback as incorrect. |
| b1-01-yes-no-question-vf-004-var-003 | sentence-start capitalisation | Brauche | brauche | correct_with_note_if_supported; otherwise exact_only | Do not award full-strength evidence for fallback. | Import layer must support correct-with-note or reject fallback as incorrect. |
| b1-01-yes-no-question-vf-004-var-004 | sentence-start capitalisation | Ist | ist | correct_with_note_if_supported; otherwise exact_only | Do not award full-strength evidence for fallback. | Import layer must support correct-with-note or reject fallback as incorrect. |
| b1-01-yes-no-question-vf-004-var-005 | sentence-start capitalisation | Ist | ist | correct_with_note_if_supported; otherwise exact_only | Do not award full-strength evidence for fallback. | Import layer must support correct-with-note or reject fallback as incorrect. |
| b1-01-yes-no-question-vf-004-var-006 | sentence-start capitalisation | Haben | haben | correct_with_note_if_supported; otherwise exact_only | Do not award full-strength evidence for fallback. | Import layer must support correct-with-note or reject fallback as incorrect. |
| b1-01-noun-capitalisation-vf-007-var-001 | sentence-start capitalisation | Heft | heft | correct_with_note_if_supported; otherwise exact_only | Do not award full-strength evidence for fallback. | Import layer must support correct-with-note or reject fallback as incorrect. |
| b1-01-noun-capitalisation-vf-007-var-002 | sentence-start capitalisation | App | app | correct_with_note_if_supported; otherwise exact_only | Do not award full-strength evidence for fallback. | Import layer must support correct-with-note or reject fallback as incorrect. |
| b1-01-noun-capitalisation-vf-007-var-003 | sentence-start capitalisation | Hilfe | hilfe | correct_with_note_if_supported; otherwise exact_only | Do not award full-strength evidence for fallback. | Import layer must support correct-with-note or reject fallback as incorrect. |
| b1-01-noun-capitalisation-vf-007-var-004 | sentence-start capitalisation | Unterlagen | unterlagen | correct_with_note_if_supported; otherwise exact_only | Do not award full-strength evidence for fallback. | Import layer must support correct-with-note or reject fallback as incorrect. |
| b1-01-w-question-repair-vf-008-var-001 | punctuation variant | Wo ist der Kursraum? | terminal punctuation optional only if explicitly supported | multi_answer_if_explicit; otherwise exact_only | Punctuation fallback must not obscure repair target. | Import layer must encode accepted punctuation variant explicitly. |
| b1-01-w-question-repair-vf-008-var-002 | punctuation variant | Wo finde ich die App? | terminal punctuation optional only if explicitly supported | multi_answer_if_explicit; otherwise exact_only | Punctuation fallback must not obscure repair target. | Import layer must encode accepted punctuation variant explicitly. |
| b1-01-w-question-repair-vf-008-var-006 | bare plural/naturalness | Wo finde ich Informationen? | — | accepted as exact; no synonym expansion | No extra accepted answers. | Preserve no-synonym policy. |

## 11. Production Safeguard Ledger

| variantId | answerMode | evidenceType | correctnessPolicy | reviewEligibilityDefault | model/phrase support | safe? | notes |
|---|---|---|---|---|---|---:|---|
| b1-01-controlled-production-vf-009-var-001 | self_marked | self_marked_production | self-marked | ineligible_self_marked_production | checklist_visible / model after attempt in feedback | Yes | Production is practice only; no correctness, mastery, B1-ready, or review claim. |
| b1-01-controlled-production-vf-009-var-002 | self_marked | self_marked_production | self-marked | ineligible_self_marked_production | phrase_bank_collapsed / model after attempt in feedback | Yes | Production is practice only; no correctness, mastery, B1-ready, or review claim. |
| b1-01-controlled-production-vf-009-var-003 | self_marked | self_marked_production | self-marked | ineligible_self_marked_production | checklist_visible / model after attempt in feedback | Yes | Production is practice only; no correctness, mastery, B1-ready, or review claim. |
| b1-01-controlled-production-vf-009-var-004 | self_marked | self_marked_production | self-marked | ineligible_self_marked_production | checklist_visible / model after attempt in feedback | Yes | Production is practice only; no correctness, mastery, B1-ready, or review claim. |

## 12. Cut / Deferred / Human-Check Exclusion Confirmation

| family / variant ID | final status | reason | schema ID assigned? | included in clean mapping? |
|---|---|---|---:|---:|
| b1-01-v2-fronted-time-vf-001-var-007 | cut_variant | Duplicate/cross-signal brauchen+V2; use brauchen family or V2 family separately. | NO | NO |
| b1-01-v2-fronted-time-vf-001-var-008 | cut_variant | Duplicate/cross-signal brauchen+V2 with Unterlagen; too much boundary/evidence risk. | NO | NO |
| b1-01-v2-fronted-place-vf-002-var-006 | cut_variant | Slightly artificial: “Im Kurs bin ich hier” is grammatical but weak/nonnatural as a practice sentence. | NO | NO |
| b1-01-v2-fronted-place-vf-002-var-008 | cut_variant | “Im Kurs ist das Heft hier” is clumsy and less natural than “Das Heft ist im Kurs.” | NO | NO |
| b1-01-brauchen-acc-vf-005-var-006 | cut_variant | Already covered by V2/needs overlap; cuts helfen keep brauchen capped at 5 variants. | NO | NO |
| b1-01-noun-capitalisation-vf-007-var-005 | cut_variant | Existing-item overlap plus hidden accusative exposure; too much for a mechanics family. | NO | NO |

## 13. Schema Issues / User Decisions Needed

| Issue | Affected families / variants | Risk | Recommended decision | Blocker status |
|---|---|---|---|---|
| correct-with-note support | yes/no sentence-start variants; noun-capitalisation variants | Fallbacks could be treated as full correctness or rejected inconsistently. | If current app supports correct-with-note, use it as weak/caveated evidence; otherwise exact-only for strong evidence. | needs import-plan decision |
| supportPolicy for visible English learner cues | all non-production variants | English cue is visible before answer, while source support often says support_after_answer. | Represent visible cue as `supportPresentation=english_visible_before_answer`; decide whether schema `supportPolicy` should be `scenario_visible` or `meaning_visible` during import. | needs import-plan decision |
| same-family evidence cap representation | all variant families | Raw variant attempts could inflate progress. | Store both `variantFamilyId` and `variantId`; apply cap in evidence/recommendation layer. | blocker for Codex import, not for schema mapping |
| replace vs supplement old fixed items | all families | Keeping all old fixed items plus variants may over-test B1-01. | Prefer replacement/rotation rather than additive duplication for matching old items. | needs import-plan decision |
| family-level random selection storage | all families | App must know exact rendered variant for evidence/debug/export. | Store exact `variantId` in attempt evidence and export metadata. | needs import-plan decision |
| production review handling | b1-01-controlled-production-vf-009 | Production could be accidentally routed into auto review. | Keep ineligible for auto review; optionally route to future external review only. | not blocker |

## 14. Final Survivor Distribution

### Families by targetFamilyId

| Label | Count |
|---|---:|
| TF-B1-01-LS01-01 | 2 |
| TF-B1-01-LS01-02 | 3 |
| TF-B1-01-LS04-01 | 1 |
| TF-B1-01-LS02-01 | 1 |
| TF-B1-01-LS09-01 | 1 |
| TF-B1-01-LS10-01 | 1 |

### Variants by targetFamilyId

| Label | Count |
|---|---:|
| TF-B1-01-LS01-01 | 14 |
| TF-B1-01-LS01-02 | 19 |
| TF-B1-01-LS04-01 | 5 |
| TF-B1-01-LS02-01 | 8 |
| TF-B1-01-LS09-01 | 4 |
| TF-B1-01-LS10-01 | 4 |

### Variants by taskType

| Label | Count |
|---|---:|
| Luecke | 44 |
| Reparatur | 6 |
| Produktion | 4 |

### Variants by taskDepth

| Label | Count |
|---|---:|
| cloze | 44 |
| repair | 6 |
| controlled_production | 4 |

### Variants by familyType

| Label | Count |
|---|---:|
| Type B | 49 |
| Type A | 5 |

### Variants by evidenceType

| Label | Count |
|---|---:|
| auto_core | 39 |
| auto_supported | 11 |
| self_marked_production | 4 |

### Variants by reviewEligibilityDefault

| Label | Count |
|---|---:|
| eligible_variant_review_after_delay | 39 |
| eligible_family_review_after_delay | 7 |
| ineligible_support_too_strong | 4 |
| ineligible_self_marked_production | 4 |

### Variants by supportPolicy

| Label | Count |
|---|---:|
| scenario_visible | 50 |
| checklist_visible | 3 |
| phrase_bank_collapsed | 1 |

The survivor set is balanced enough for schema mapping. It intentionally favours V2 and question-order families because B1-01 is the course-entry/sentence-control module. `brauchen` remains capped and downgraded. Variant families should replace/rotate with matching old fixed items rather than simply supplementing them.

## 15. Final QA Checklist

| Check | Result |
|---|---|
| QA-approved source used. | Confirmed |
| All clean survivor families mapped. | Confirmed |
| All clean survivor variants mapped. | Confirmed |
| Cut/deferred/human-check variants excluded. | Confirmed |
| No app code. | Confirmed |
| No app-ready JSON. | Confirmed |
| No Codex prompt. | Confirmed |
| No B1-02 generation. | Confirmed |
| No new lesson cards. | Confirmed |
| No new notice cards. | Confirmed |
| No source text copied. | Confirmed |
| No runtime generation. | Confirmed |
| No random noun/verb combinations. | Confirmed |
| No generated German morphology. | Confirmed |
| No B2 active content. | Confirmed |
| No Genitive. | Confirmed |
| No adjective-ending traps. | Confirmed |
| No subordinate clauses. | Confirmed |
| No over-expansion of `Ich brauche ...`. | Confirmed |
| Sibling variants are marked as sibling evidence. | Confirmed |
| Given phrases are not treated as tested answers. | Confirmed |
| Variant family IDs are stable planning IDs. | Confirmed |
| Variant IDs are stable planning IDs. | Confirmed |
| German text remains LTR. | Confirmed |
| Production remains self-marked. | Confirmed |
| Choice variants use stable choice IDs if later rendered as choices; no current survivor variant has choice tables. | Confirmed |
| Schema notes distinguish planning from app import. | Confirmed |

## 16. Final Verdict

`READY_FOR_VARIANT_CODEX_IMPORT_PLAN`

Exact next recommended action: create a Codex import-plan prompt for static family records + static approved variants, including `variantFamilyId`, exact `variantId`, evidence cap handling, and replace-vs-supplement decisions for old B1-01 items.
