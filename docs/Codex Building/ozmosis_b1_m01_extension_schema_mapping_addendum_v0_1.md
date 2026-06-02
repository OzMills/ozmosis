# Ozmosis B1-01 Extension — Schema Mapping Addendum

Status: Schema-planning and import-mapping preparation only.  
Scope: B1-01 — Getting started at work/course.  
Input: `ozmosis_b1_m01_extension_row_reconciliation_final_inventory_addendum_v0_1.md`.  
Output file: `ozmosis_b1_m01_extension_schema_mapping_addendum_v0_1.md`.

## 1. Source Verification

| Source file/content | Available? | Used for | Reliability | Notes / caveats |
| --- | --- | --- | --- | --- |
| `ozmosis_b1_m01_extension_row_reconciliation_final_inventory_addendum_v0_1.md` | Yes | Controlling row-reconciled extension source | High | 5 survivor families, 27 survivor variants, 1 cut family, 8 cut variants. |
| `ozmosis_b1_m01_extension_variant_families_qa_approved_v0_1.md` | Yes | Extension QA decisions and variant metadata | High | QA-approved extension set; B1-01 should stop after this extension. |
| `ozmosis_b1_m01_variant_family_schema_mapping_v0_1.md` | Yes | Existing schema mapping conventions | High | Used for consistency with previous 9-family mapping. |
| `ozmosis_b1_m01_final_variant_family_inventory_v0_1.md` | Yes | Existing B1-01 baseline inventory | High | Existing 9 families / 54 variants preserved. |
| `ozmosis_b1_m01_curated_variant_families_qa_approved_v0_1.md` | Yes | Existing B1-01 QA constraints | High | Used for sibling-evidence and weak-evidence rules. |
| `ozmosis_phase3a_b1_m01_getting_started_qa_approved.md` | Yes | Original B1-01 QA caveats | High | Used for fallback/capitalisation caution. |
| `ozmosis_phase3_b1_m01_getting_started_draft_items.md` | Yes | Original B1-01 target-family design | High | Used for module lock and scope boundary. |
| `ozmosis-v0_80_3_1.zip` | Yes | App context only | High | No code inspection or implementation in this schema-planning task. |
| `OZMOSIS_SOURCE_BRIEF_v0.80.3.md` | Yes | Product/evidence constraints | High | Static app, B1-first, no false mastery. |
| `OZMOSIS_DEVELOPMENT_ROADMAP_v0.80.3.md` | Yes | Version roadmap context | High | No v0.81 work here. |
| TELC/Beruf/Aspekte files | Available | Structural inspiration only | Low for item text | No copied text used. |

## 2. Extension Schema Mapping Intake Check

| Check | Result |
| --- | --- |
| Row reconciliation addendum found | Yes |
| Extension QA file found | Yes |
| Expected survivor families | 5 |
| Actual survivor families found | 5 |
| Expected survivor variants | 27 |
| Actual survivor variants found | 27 |
| Expected cut families | 1 |
| Expected cut variants | 8 |
| Existing B1-01 baseline | 9 families / 54 variants |
| Final projected B1-01 after extension | 14 families / 81 variants |
| Malformed IDs | None found |
| Duplicate IDs | None found |
| Cut variant appears in active mapping? | No |

## 3. Mapping Assumptions

| Assumption | Mapping decision |
| --- | --- |
| Module ID mapping | `displayModuleId=B1-01`, `moduleKey=b1-01`, `internalPlanningId=b1_m01_getting_started`, `moduleSlug=getting-started-work-course`. |
| Family/variant ID policy | Use stable QA-approved extension IDs as schema planning IDs; no new IDs created. |
| Evidence-label bridge | `auto_core` for fixed answer-safe sentence-control variants; `auto_supported` for baseline or support-visible variants. |
| SupportPolicy/supportPresentation separation | Use `supportPolicy=scenario_visible`; use `supportPresentation=english_visible_before_answer` for English cue support. |
| Review eligibility rule | Use `eligible_auto_after_delay` only for stronger fixed-answer variants; use `weakly_eligible_after_delay` for weak baseline variants. |
| Sibling evidence rule | Same-family same-session variants are sibling evidence only. |
| Transformation correctness policy | Full question string is canonical; question mark is part of the transformation unless import layer supports punctuation normalisation. |
| `Haben` sentence-start capitalisation policy | Canonical is `Haben`; lowercase `haben` can only be correct-with-note if supported. |
| Object-phrase article/case policy | Visible phrases such as `den Kursraum`, `die App`, `die Unterlagen` are context only, not article/case evidence. |
| No-production rule | No production variants are present in this extension. |

## 4. Extension Variant Family Schema Mapping Summary

| variantFamilyId | proposedSchemaFamilyId | familyStatus | familyType | familyTarget | targetFamilyId | targetId | taskTypesSupported | taskDepthSupported | evidenceInterpretation | reviewGroup | siblingVariantGroup | maxSameSessionEvidence | supportPolicyDefault | reviewEligibilityDefault | schemaRisk | notes |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| b1-01-ich-bin-entry-vf-010 | b1-01-ich-bin-entry-vf-010 | approved_with_variant_cuts | Type A | Simple `sein` in course-entry state/location sentences | TF-B1-01-LS01-01 | T-B1-01-LS01-01-02 | Luecke, Satzbau, Reparatur | cloze, sentence_building, repair | Baseline `sein` control; mostly auto_supported; not B1-depth evidence. | rg-b1-01-ich-bin-entry | b1-01-ich-bin-entry-siblings-010 | 1 | scenario_visible | weakly_eligible_after_delay | medium | Entry control only. Do not treat as B1 readiness. |
| b1-01-haben-materials-vf-011 | b1-01-haben-materials-vf-011 | approved_with_variant_cuts | Type B | `haben` for simple course materials / availability | TF-B1-01-LS08-01 | T-B1-01-LS08-01-03 | Luecke, Reparatur | cloze, repair | Practical possession/availability; object phrases are context, not article/case proof. | rg-b1-01-haben-materials | b1-01-haben-materials-siblings-011 | 1 | scenario_visible | weakly_eligible_after_delay / eligible_auto_after_delay for formal question variants | medium | Keep separate from `brauchen`; do not infer article/case control. |
| b1-01-lernen-arbeiten-vf-012 | b1-01-lernen-arbeiten-vf-012 | approved_as_is | Type B | Distinguish course learning from simple working | TF-B1-01-LS01-01 | T-B1-01-LS01-01-02 | Luecke, Kontrast, Reparatur | cloze, contrast, repair | Simple present-tense verb contrast; no profession/job-search content. | rg-b1-01-lernen-arbeiten | b1-01-lernen-arbeiten-siblings-012 | 1 | scenario_visible | weakly_eligible_after_delay | medium | Course/work bridge only. Do not drift into job-search or profession detail. |
| b1-01-suchen-finden-vf-013 | b1-01-suchen-finden-vf-013 | approved_with_variant_cuts | Type B | Distinguish “look for” and “find” in course orientation | TF-B1-01-LS01-02 | T-B1-01-LS01-02-01 | Luecke | cloze | Orientation verb-choice contrast; given object phrase is context, not case/article evidence. | rg-b1-01-suchen-finden | b1-01-suchen-finden-siblings-013 | 1 | scenario_visible | weakly_eligible_after_delay | medium | Do not count as new W-question proof or accusative article proof. |
| b1-01-statement-question-transform-vf-015 | b1-01-statement-question-transform-vf-015 | approved_as_is | Type B | Transform simple statements into yes/no questions | TF-B1-01-LS01-02 | T-B1-01-LS01-02-02 | Umformen, Reparatur | transformation, repair | Sentence-control transformation evidence; stronger than recognition but still bounded. | rg-b1-01-statement-question-transform | b1-01-statement-question-transform-siblings-015 | 1 | scenario_visible | eligible_auto_after_delay | medium | Strongest extension family. Full punctuation/exactness caveats apply. |

## 5. Extension Variant Schema Mapping Summary

| variantId | proposedSchemaVariantId | parentVariantFamilyId | targetFamilyId | targetId | taskType | taskDepth | answerMode | answerShape | correctnessPolicy | acceptedAnswerPolicy | canonicalAnswer | evidenceType | supportPolicy | supportPresentation | reviewGroup | reviewEligibilityDefault | fallbackDecision | schemaRisk | includedInCleanMapping |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| b1-01-ich-bin-entry-vf-010-var-001 | b1-01-ich-bin-entry-vf-010-var-001 | b1-01-ich-bin-entry-vf-010 | TF-B1-01-LS01-01 | T-B1-01-LS01-01-02 | Luecke | cloze | typed_short | single_token | exact | exact_only | bin | auto_supported | scenario_visible | english_visible_before_answer | rg-b1-01-ich-bin-entry | weakly_eligible_after_delay | exact-only | low | Yes |
| b1-01-ich-bin-entry-vf-010-var-002 | b1-01-ich-bin-entry-vf-010-var-002 | b1-01-ich-bin-entry-vf-010 | TF-B1-01-LS01-01 | T-B1-01-LS01-01-02 | Luecke | cloze | typed_short | single_token | exact | exact_only | bin | auto_supported | scenario_visible | english_visible_before_answer | rg-b1-01-ich-bin-entry | weakly_eligible_after_delay | exact-only | low | Yes |
| b1-01-ich-bin-entry-vf-010-var-004 | b1-01-ich-bin-entry-vf-010-var-004 | b1-01-ich-bin-entry-vf-010 | TF-B1-01-LS01-01 | T-B1-01-LS01-01-02 | Luecke | cloze | typed_short | single_token | exact | exact_only | bin | auto_supported | scenario_visible | english_visible_before_answer | rg-b1-01-ich-bin-entry | weakly_eligible_after_delay | exact-only | low | Yes |
| b1-01-ich-bin-entry-vf-010-var-005 | b1-01-ich-bin-entry-vf-010-var-005 | b1-01-ich-bin-entry-vf-010 | TF-B1-01-LS01-01 | T-B1-01-LS01-01-02 | Satzbau | sentence_building | sentence_order | ordered_chunks | exact | exact_only | Ich bin neu hier. | auto_supported | scenario_visible | english_visible_before_answer | rg-b1-01-ich-bin-entry | weakly_eligible_after_delay | exact chunk order | low | Yes |
| b1-01-ich-bin-entry-vf-010-var-006 | b1-01-ich-bin-entry-vf-010-var-006 | b1-01-ich-bin-entry-vf-010 | TF-B1-01-LS01-01 | T-B1-01-LS01-01-02 | Reparatur | repair | repair_text | repaired_sentence | exact | exact_only | Ich bin neu hier. | auto_supported | scenario_visible | english_visible_before_answer | rg-b1-01-ich-bin-entry | weakly_eligible_after_delay | exact sentence; punctuation normalisation only if supported | low | Yes |
| b1-01-haben-materials-vf-011-var-001 | b1-01-haben-materials-vf-011-var-001 | b1-01-haben-materials-vf-011 | TF-B1-01-LS08-01 | T-B1-01-LS08-01-03 | Luecke | cloze | typed_short | single_token | exact | exact_only | habe | auto_supported | scenario_visible | english_visible_before_answer | rg-b1-01-haben-materials | weakly_eligible_after_delay | exact-only | low | Yes |
| b1-01-haben-materials-vf-011-var-002 | b1-01-haben-materials-vf-011-var-002 | b1-01-haben-materials-vf-011 | TF-B1-01-LS08-01 | T-B1-01-LS08-01-03 | Luecke | cloze | typed_short | single_token | exact | exact_only | habe | auto_supported | scenario_visible | english_visible_before_answer | rg-b1-01-haben-materials | weakly_eligible_after_delay | exact-only | low | Yes |
| b1-01-haben-materials-vf-011-var-004 | b1-01-haben-materials-vf-011-var-004 | b1-01-haben-materials-vf-011 | TF-B1-01-LS08-01 | T-B1-01-LS08-01-03 | Luecke | cloze | typed_short | single_token | exact | normalised_if_supported | Haben | auto_core | scenario_visible | english_visible_before_answer | rg-b1-01-haben-materials | eligible_auto_after_delay | `haben` correct-with-note only if supported; otherwise not full evidence | medium | Yes |
| b1-01-haben-materials-vf-011-var-005 | b1-01-haben-materials-vf-011-var-005 | b1-01-haben-materials-vf-011 | TF-B1-01-LS08-01 | T-B1-01-LS08-01-03 | Luecke | cloze | typed_short | single_token | exact | normalised_if_supported | Haben | auto_core | scenario_visible | english_visible_before_answer | rg-b1-01-haben-materials | eligible_auto_after_delay | `haben` correct-with-note only if supported; otherwise not full evidence | medium | Yes |
| b1-01-haben-materials-vf-011-var-006 | b1-01-haben-materials-vf-011-var-006 | b1-01-haben-materials-vf-011 | TF-B1-01-LS08-01 | T-B1-01-LS08-01-03 | Reparatur | repair | repair_text | repaired_sentence | exact | exact_only | Ich habe die Unterlagen. | auto_supported | scenario_visible | english_visible_before_answer | rg-b1-01-haben-materials | weakly_eligible_after_delay | exact sentence; punctuation normalisation only if supported | low | Yes |
| b1-01-lernen-arbeiten-vf-012-var-001 | b1-01-lernen-arbeiten-vf-012-var-001 | b1-01-lernen-arbeiten-vf-012 | TF-B1-01-LS01-01 | T-B1-01-LS01-01-02 | Luecke | cloze | typed_short | single_token | exact | exact_only | lerne | auto_core | scenario_visible | english_visible_before_answer | rg-b1-01-lernen-arbeiten | eligible_auto_after_delay | exact-only | low | Yes |
| b1-01-lernen-arbeiten-vf-012-var-002 | b1-01-lernen-arbeiten-vf-012-var-002 | b1-01-lernen-arbeiten-vf-012 | TF-B1-01-LS01-01 | T-B1-01-LS01-01-02 | Luecke | cloze | typed_short | single_token | exact | exact_only | lerne | auto_supported | scenario_visible | english_visible_before_answer | rg-b1-01-lernen-arbeiten | weakly_eligible_after_delay | exact-only | medium | Yes |
| b1-01-lernen-arbeiten-vf-012-var-003 | b1-01-lernen-arbeiten-vf-012-var-003 | b1-01-lernen-arbeiten-vf-012 | TF-B1-01-LS01-01 | T-B1-01-LS01-01-02 | Luecke | cloze | typed_short | single_token | exact | exact_only | arbeite | auto_supported | scenario_visible | english_visible_before_answer | rg-b1-01-lernen-arbeiten | weakly_eligible_after_delay | exact-only | low | Yes |
| b1-01-lernen-arbeiten-vf-012-var-004 | b1-01-lernen-arbeiten-vf-012-var-004 | b1-01-lernen-arbeiten-vf-012 | TF-B1-01-LS01-01 | T-B1-01-LS01-01-02 | Luecke | cloze | typed_short | single_token | exact | exact_only | arbeite | auto_supported | scenario_visible | english_visible_before_answer | rg-b1-01-lernen-arbeiten | weakly_eligible_after_delay | exact-only | medium | Yes |
| b1-01-lernen-arbeiten-vf-012-var-005 | b1-01-lernen-arbeiten-vf-012-var-005 | b1-01-lernen-arbeiten-vf-012 | TF-B1-01-LS01-01 | T-B1-01-LS01-01-02 | Kontrast | contrast | typed_short | single_token | exact | exact_only | lerne | auto_supported | scenario_visible | english_visible_before_answer | rg-b1-01-lernen-arbeiten | weakly_eligible_after_delay | exact-only | medium | Yes |
| b1-01-lernen-arbeiten-vf-012-var-006 | b1-01-lernen-arbeiten-vf-012-var-006 | b1-01-lernen-arbeiten-vf-012 | TF-B1-01-LS01-01 | T-B1-01-LS01-01-02 | Reparatur | repair | repair_text | repaired_sentence | exact | exact_only | Ich lerne Deutsch. | auto_supported | scenario_visible | english_visible_before_answer | rg-b1-01-lernen-arbeiten | weakly_eligible_after_delay | exact sentence; punctuation normalisation only if supported | medium | Yes |
| b1-01-suchen-finden-vf-013-var-001 | b1-01-suchen-finden-vf-013-var-001 | b1-01-suchen-finden-vf-013 | TF-B1-01-LS01-02 | T-B1-01-LS01-02-01 | Luecke | cloze | typed_short | single_token | exact | exact_only | suche | auto_supported | scenario_visible | english_visible_before_answer | rg-b1-01-suchen-finden | weakly_eligible_after_delay | exact-only | medium | Yes |
| b1-01-suchen-finden-vf-013-var-002 | b1-01-suchen-finden-vf-013-var-002 | b1-01-suchen-finden-vf-013 | TF-B1-01-LS01-02 | T-B1-01-LS01-02-01 | Luecke | cloze | typed_short | single_token | exact | exact_only | finde | auto_supported | scenario_visible | english_visible_before_answer | rg-b1-01-suchen-finden | weakly_eligible_after_delay | exact-only | medium | Yes |
| b1-01-suchen-finden-vf-013-var-003 | b1-01-suchen-finden-vf-013-var-003 | b1-01-suchen-finden-vf-013 | TF-B1-01-LS01-02 | T-B1-01-LS01-02-01 | Luecke | cloze | typed_short | single_token | exact | exact_only | suche | auto_supported | scenario_visible | english_visible_before_answer | rg-b1-01-suchen-finden | weakly_eligible_after_delay | exact-only | low | Yes |
| b1-01-suchen-finden-vf-013-var-004 | b1-01-suchen-finden-vf-013-var-004 | b1-01-suchen-finden-vf-013 | TF-B1-01-LS01-02 | T-B1-01-LS01-02-01 | Luecke | cloze | typed_short | single_token | exact | exact_only | finde | auto_supported | scenario_visible | english_visible_before_answer | rg-b1-01-suchen-finden | weakly_eligible_after_delay | exact-only | medium | Yes |
| b1-01-suchen-finden-vf-013-var-005 | b1-01-suchen-finden-vf-013-var-005 | b1-01-suchen-finden-vf-013 | TF-B1-01-LS01-02 | T-B1-01-LS01-02-01 | Luecke | cloze | typed_short | single_token | exact | exact_only | suche | auto_supported | scenario_visible | english_visible_before_answer | rg-b1-01-suchen-finden | weakly_eligible_after_delay | exact-only | low | Yes |
| b1-01-statement-question-transform-vf-015-var-001 | b1-01-statement-question-transform-vf-015-var-001 | b1-01-statement-question-transform-vf-015 | TF-B1-01-LS01-02 | T-B1-01-LS01-02-02 | Umformen | transformation | transformation_text | transformed_sentence | exact | exact_only | Ist die App hier? | auto_core | scenario_visible | english_visible_before_answer | rg-b1-01-statement-question-transform | eligible_auto_after_delay | question-mark normalisation only if supported | medium | Yes |
| b1-01-statement-question-transform-vf-015-var-002 | b1-01-statement-question-transform-vf-015-var-002 | b1-01-statement-question-transform-vf-015 | TF-B1-01-LS01-02 | T-B1-01-LS01-02-02 | Umformen | transformation | transformation_text | transformed_sentence | exact | exact_only | Ist das Heft hier? | auto_core | scenario_visible | english_visible_before_answer | rg-b1-01-statement-question-transform | eligible_auto_after_delay | question-mark normalisation only if supported | medium | Yes |
| b1-01-statement-question-transform-vf-015-var-003 | b1-01-statement-question-transform-vf-015-var-003 | b1-01-statement-question-transform-vf-015 | TF-B1-01-LS01-02 | T-B1-01-LS01-02-02 | Umformen | transformation | transformation_text | transformed_sentence | exact | exact_only | Brauche ich ein Heft? | auto_core | scenario_visible | english_visible_before_answer | rg-b1-01-statement-question-transform | eligible_auto_after_delay | question-mark normalisation only if supported | medium | Yes |
| b1-01-statement-question-transform-vf-015-var-004 | b1-01-statement-question-transform-vf-015-var-004 | b1-01-statement-question-transform-vf-015 | TF-B1-01-LS01-02 | T-B1-01-LS01-02-02 | Umformen | transformation | transformation_text | transformed_sentence | exact | exact_only | Habe ich die Unterlagen? | auto_core | scenario_visible | english_visible_before_answer | rg-b1-01-statement-question-transform | eligible_auto_after_delay | question-mark normalisation only if supported | medium | Yes |
| b1-01-statement-question-transform-vf-015-var-005 | b1-01-statement-question-transform-vf-015-var-005 | b1-01-statement-question-transform-vf-015 | TF-B1-01-LS01-02 | T-B1-01-LS01-02-02 | Umformen | transformation | transformation_text | transformed_sentence | exact | exact_only | Haben Sie Informationen? | auto_core | scenario_visible | english_visible_before_answer | rg-b1-01-statement-question-transform | eligible_auto_after_delay | question-mark normalisation only if supported | medium | Yes |
| b1-01-statement-question-transform-vf-015-var-006 | b1-01-statement-question-transform-vf-015-var-006 | b1-01-statement-question-transform-vf-015 | TF-B1-01-LS01-02 | T-B1-01-LS01-02-02 | Reparatur | repair | repair_text | repaired_sentence | exact | exact_only | Brauche ich ein Heft? | auto_core | scenario_visible | english_visible_before_answer | rg-b1-01-statement-question-transform | eligible_auto_after_delay | question-mark normalisation only if supported | medium | Yes |

## 6. Full Family-by-Family Metadata Mapping


### b1-01-ich-bin-entry-vf-010

| Field | Value |
| --- | --- |
| variantFamilyId | b1-01-ich-bin-entry-vf-010 |
| proposedSchemaFamilyId | b1-01-ich-bin-entry-vf-010 |
| displayModuleId | B1-01 |
| moduleKey | b1-01 |
| internalPlanningId | b1_m01_getting_started |
| moduleSlug | getting-started-work-course |
| moduleTitle | Getting started at work/course |
| levelTrack | B1 |
| cefrTarget | B1 |
| primaryLanguageStrandId | LS01 |
| secondaryLanguageStrandIds | LS08 |
| targetFamilyId | TF-B1-01-LS01-01 |
| targetFamilyKey | basic-present-tense-main-clauses |
| targetFamilySlug | basic-present-tense-main-clauses |
| targetId | T-B1-01-LS01-01-02 |
| targetKey | simple-course-work-present-tense |
| targetSlug | simple-course-work-present-tense |
| familyType | Type A |
| familyTarget | Simple `sein` in course-entry state/location sentences |
| taskTypesSupported | Luecke, Satzbau, Reparatur |
| taskDepthSupported | cloze, sentence_building, repair |
| evidenceInterpretation | Baseline `sein` control; mostly auto_supported; not B1-depth evidence. |
| reviewGroup | rg-b1-01-ich-bin-entry |
| siblingVariantGroup | b1-01-ich-bin-entry-siblings-010 |
| maxSameSessionEvidence | 1 |
| supportPolicyDefault | scenario_visible |
| reviewEligibilityDefault | weakly_eligible_after_delay |
| familySchemaRisk | medium |
| learnerFacingAllowed | yes |
| schemaNotes | Entry control only. Do not treat as B1 readiness. |

### b1-01-haben-materials-vf-011

| Field | Value |
| --- | --- |
| variantFamilyId | b1-01-haben-materials-vf-011 |
| proposedSchemaFamilyId | b1-01-haben-materials-vf-011 |
| displayModuleId | B1-01 |
| moduleKey | b1-01 |
| internalPlanningId | b1_m01_getting_started |
| moduleSlug | getting-started-work-course |
| moduleTitle | Getting started at work/course |
| levelTrack | B1 |
| cefrTarget | B1 |
| primaryLanguageStrandId | LS08 |
| secondaryLanguageStrandIds | LS01 |
| targetFamilyId | TF-B1-01-LS08-01 |
| targetFamilyKey | course-work-orientation-vocabulary |
| targetFamilySlug | course-work-orientation-vocabulary |
| targetId | T-B1-01-LS08-01-03 |
| targetKey | course-materials-availability |
| targetSlug | course-materials-availability |
| familyType | Type B |
| familyTarget | `haben` for simple course materials / availability |
| taskTypesSupported | Luecke, Reparatur |
| taskDepthSupported | cloze, repair |
| evidenceInterpretation | Practical possession/availability; object phrases are context, not article/case proof. |
| reviewGroup | rg-b1-01-haben-materials |
| siblingVariantGroup | b1-01-haben-materials-siblings-011 |
| maxSameSessionEvidence | 1 |
| supportPolicyDefault | scenario_visible |
| reviewEligibilityDefault | weakly_eligible_after_delay / eligible_auto_after_delay for formal question variants |
| familySchemaRisk | medium |
| learnerFacingAllowed | yes |
| schemaNotes | Keep separate from `brauchen`; do not infer article/case control. |

### b1-01-lernen-arbeiten-vf-012

| Field | Value |
| --- | --- |
| variantFamilyId | b1-01-lernen-arbeiten-vf-012 |
| proposedSchemaFamilyId | b1-01-lernen-arbeiten-vf-012 |
| displayModuleId | B1-01 |
| moduleKey | b1-01 |
| internalPlanningId | b1_m01_getting_started |
| moduleSlug | getting-started-work-course |
| moduleTitle | Getting started at work/course |
| levelTrack | B1 |
| cefrTarget | B1 |
| primaryLanguageStrandId | LS01 |
| secondaryLanguageStrandIds | LS08 |
| targetFamilyId | TF-B1-01-LS01-01 |
| targetFamilyKey | basic-present-tense-main-clauses |
| targetFamilySlug | basic-present-tense-main-clauses |
| targetId | T-B1-01-LS01-01-02 |
| targetKey | simple-course-work-present-tense |
| targetSlug | simple-course-work-present-tense |
| familyType | Type B |
| familyTarget | Distinguish course learning from simple working |
| taskTypesSupported | Luecke, Kontrast, Reparatur |
| taskDepthSupported | cloze, contrast, repair |
| evidenceInterpretation | Simple present-tense verb contrast; no profession/job-search content. |
| reviewGroup | rg-b1-01-lernen-arbeiten |
| siblingVariantGroup | b1-01-lernen-arbeiten-siblings-012 |
| maxSameSessionEvidence | 1 |
| supportPolicyDefault | scenario_visible |
| reviewEligibilityDefault | weakly_eligible_after_delay |
| familySchemaRisk | medium |
| learnerFacingAllowed | yes |
| schemaNotes | Course/work bridge only. Do not drift into job-search or profession detail. |

### b1-01-suchen-finden-vf-013

| Field | Value |
| --- | --- |
| variantFamilyId | b1-01-suchen-finden-vf-013 |
| proposedSchemaFamilyId | b1-01-suchen-finden-vf-013 |
| displayModuleId | B1-01 |
| moduleKey | b1-01 |
| internalPlanningId | b1_m01_getting_started |
| moduleSlug | getting-started-work-course |
| moduleTitle | Getting started at work/course |
| levelTrack | B1 |
| cefrTarget | B1 |
| primaryLanguageStrandId | LS01 |
| secondaryLanguageStrandIds | LS08 |
| targetFamilyId | TF-B1-01-LS01-02 |
| targetFamilyKey | basic-orientation-questions |
| targetFamilySlug | basic-orientation-questions |
| targetId | T-B1-01-LS01-02-01 |
| targetKey | w-question-orientation |
| targetSlug | w-question-orientation |
| familyType | Type B |
| familyTarget | Distinguish “look for” and “find” in course orientation |
| taskTypesSupported | Luecke |
| taskDepthSupported | cloze |
| evidenceInterpretation | Orientation verb-choice contrast; given object phrase is context, not case/article evidence. |
| reviewGroup | rg-b1-01-suchen-finden |
| siblingVariantGroup | b1-01-suchen-finden-siblings-013 |
| maxSameSessionEvidence | 1 |
| supportPolicyDefault | scenario_visible |
| reviewEligibilityDefault | weakly_eligible_after_delay |
| familySchemaRisk | medium |
| learnerFacingAllowed | yes |
| schemaNotes | Do not count as new W-question proof or accusative article proof. |

### b1-01-statement-question-transform-vf-015

| Field | Value |
| --- | --- |
| variantFamilyId | b1-01-statement-question-transform-vf-015 |
| proposedSchemaFamilyId | b1-01-statement-question-transform-vf-015 |
| displayModuleId | B1-01 |
| moduleKey | b1-01 |
| internalPlanningId | b1_m01_getting_started |
| moduleSlug | getting-started-work-course |
| moduleTitle | Getting started at work/course |
| levelTrack | B1 |
| cefrTarget | B1 |
| primaryLanguageStrandId | LS01 |
| secondaryLanguageStrandIds | LS09 |
| targetFamilyId | TF-B1-01-LS01-02 |
| targetFamilyKey | basic-orientation-questions |
| targetFamilySlug | basic-orientation-questions |
| targetId | T-B1-01-LS01-02-02 |
| targetKey | yes-no-question-word-order |
| targetSlug | yes-no-question-word-order |
| familyType | Type B |
| familyTarget | Transform simple statements into yes/no questions |
| taskTypesSupported | Umformen, Reparatur |
| taskDepthSupported | transformation, repair |
| evidenceInterpretation | Sentence-control transformation evidence; stronger than recognition but still bounded. |
| reviewGroup | rg-b1-01-statement-question-transform |
| siblingVariantGroup | b1-01-statement-question-transform-siblings-015 |
| maxSameSessionEvidence | 1 |
| supportPolicyDefault | scenario_visible |
| reviewEligibilityDefault | eligible_auto_after_delay |
| familySchemaRisk | medium |
| learnerFacingAllowed | yes |
| schemaNotes | Strongest extension family. Full punctuation/exactness caveats apply. |

## 7. Full Variant-by-Variant Metadata Mapping


### b1-01-ich-bin-entry-vf-010-var-001

| Field | Value |
| --- | --- |
| variantId | b1-01-ich-bin-entry-vf-010-var-001 |
| proposedSchemaVariantId | b1-01-ich-bin-entry-vf-010-var-001 |
| parentVariantFamilyId | b1-01-ich-bin-entry-vf-010 |
| sourceQAStatus | approved_as_is |
| displayModuleId | B1-01 |
| moduleKey | b1-01 |
| internalPlanningId | b1_m01_getting_started |
| moduleSlug | getting-started-work-course |
| moduleTitle | Getting started at work/course |
| levelTrack | B1 |
| cefrTarget | B1 |
| primaryLanguageStrandId | LS01 |
| secondaryLanguageStrandIds | LS08 |
| targetFamilyId | TF-B1-01-LS01-01 |
| targetId | T-B1-01-LS01-01-02 |
| variantRole | extension_survivor_variant |
| taskType | Luecke |
| taskDepth | cloze |
| practiceType | Luecke |
| learnerCue | I am new here. |
| prompt / sentence / chunks | Ich ___ neu hier. |
| givenPhrase | — |
| canonicalAnswer | bin |
| acceptedAnswers | bin |
| answerMode | typed_short |
| answerShape | single_token |
| correctnessPolicy | exact |
| acceptedAnswerPolicy | exact_only |
| supportPolicy | scenario_visible |
| supportPresentation | english_visible_before_answer |
| supportPresentationNotes | English cue is visible before answer; repair/transform prompts are instructions, not translations. |
| planningEvidenceLabel | Practice Evidence |
| evidenceType | auto_supported |
| reviewGroup | rg-b1-01-ich-bin-entry |
| reviewEligibilityDefault | weakly_eligible_after_delay |
| skillTags | sein, entry_baseline, self_intro |
| grammarFocus | sein with ich |
| vocabularyFocus | neu hier |
| redemittelFocus | none |
| communicationGoal | B1-01 course/work entry support |
| difficultyBand | entry_baseline |
| sourceRisk | low |
| fallbackDecision | exact-only |
| fallbackNotes | Baseline A1/A2 support; not B1-depth evidence. |
| learnerFacingAllowed | yes |
| schemaNotes | Baseline A1/A2 support; not B1-depth evidence. |

### b1-01-ich-bin-entry-vf-010-var-002

| Field | Value |
| --- | --- |
| variantId | b1-01-ich-bin-entry-vf-010-var-002 |
| proposedSchemaVariantId | b1-01-ich-bin-entry-vf-010-var-002 |
| parentVariantFamilyId | b1-01-ich-bin-entry-vf-010 |
| sourceQAStatus | approved_as_is |
| displayModuleId | B1-01 |
| moduleKey | b1-01 |
| internalPlanningId | b1_m01_getting_started |
| moduleSlug | getting-started-work-course |
| moduleTitle | Getting started at work/course |
| levelTrack | B1 |
| cefrTarget | B1 |
| primaryLanguageStrandId | LS01 |
| secondaryLanguageStrandIds | LS08 |
| targetFamilyId | TF-B1-01-LS01-01 |
| targetId | T-B1-01-LS01-01-02 |
| variantRole | extension_survivor_variant |
| taskType | Luecke |
| taskDepth | cloze |
| practiceType | Luecke |
| learnerCue | I am in the course. |
| prompt / sentence / chunks | Ich ___ im Kurs. |
| givenPhrase | — |
| canonicalAnswer | bin |
| acceptedAnswers | bin |
| answerMode | typed_short |
| answerShape | single_token |
| correctnessPolicy | exact |
| acceptedAnswerPolicy | exact_only |
| supportPolicy | scenario_visible |
| supportPresentation | english_visible_before_answer |
| supportPresentationNotes | English cue is visible before answer; repair/transform prompts are instructions, not translations. |
| planningEvidenceLabel | Practice Evidence |
| evidenceType | auto_supported |
| reviewGroup | rg-b1-01-ich-bin-entry |
| reviewEligibilityDefault | weakly_eligible_after_delay |
| skillTags | sein, course_entry |
| grammarFocus | sein with ich |
| vocabularyFocus | im Kurs |
| redemittelFocus | none |
| communicationGoal | B1-01 course/work entry support |
| difficultyBand | entry_baseline |
| sourceRisk | low |
| fallbackDecision | exact-only |
| fallbackNotes | Course-entry baseline. |
| learnerFacingAllowed | yes |
| schemaNotes | Course-entry baseline. |

### b1-01-ich-bin-entry-vf-010-var-004

| Field | Value |
| --- | --- |
| variantId | b1-01-ich-bin-entry-vf-010-var-004 |
| proposedSchemaVariantId | b1-01-ich-bin-entry-vf-010-var-004 |
| parentVariantFamilyId | b1-01-ich-bin-entry-vf-010 |
| sourceQAStatus | approved_as_is |
| displayModuleId | B1-01 |
| moduleKey | b1-01 |
| internalPlanningId | b1_m01_getting_started |
| moduleSlug | getting-started-work-course |
| moduleTitle | Getting started at work/course |
| levelTrack | B1 |
| cefrTarget | B1 |
| primaryLanguageStrandId | LS01 |
| secondaryLanguageStrandIds | LS08 |
| targetFamilyId | TF-B1-01-LS01-01 |
| targetId | T-B1-01-LS01-01-02 |
| variantRole | extension_survivor_variant |
| taskType | Luecke |
| taskDepth | cloze |
| practiceType | Luecke |
| learnerCue | I am in German class. |
| prompt / sentence / chunks | Ich ___ im Deutschunterricht. |
| givenPhrase | — |
| canonicalAnswer | bin |
| acceptedAnswers | bin |
| answerMode | typed_short |
| answerShape | single_token |
| correctnessPolicy | exact |
| acceptedAnswerPolicy | exact_only |
| supportPolicy | scenario_visible |
| supportPresentation | english_visible_before_answer |
| supportPresentationNotes | English cue is visible before answer; repair/transform prompts are instructions, not translations. |
| planningEvidenceLabel | Practice Evidence |
| evidenceType | auto_supported |
| reviewGroup | rg-b1-01-ich-bin-entry |
| reviewEligibilityDefault | weakly_eligible_after_delay |
| skillTags | sein, course_entry, location_state |
| grammarFocus | sein with ich |
| vocabularyFocus | Deutschunterricht |
| redemittelFocus | none |
| communicationGoal | B1-01 course/work entry support |
| difficultyBand | entry_baseline |
| sourceRisk | low |
| fallbackDecision | exact-only |
| fallbackNotes | Course-entry state/location. |
| learnerFacingAllowed | yes |
| schemaNotes | Course-entry state/location. |

### b1-01-ich-bin-entry-vf-010-var-005

| Field | Value |
| --- | --- |
| variantId | b1-01-ich-bin-entry-vf-010-var-005 |
| proposedSchemaVariantId | b1-01-ich-bin-entry-vf-010-var-005 |
| parentVariantFamilyId | b1-01-ich-bin-entry-vf-010 |
| sourceQAStatus | approved_as_is |
| displayModuleId | B1-01 |
| moduleKey | b1-01 |
| internalPlanningId | b1_m01_getting_started |
| moduleSlug | getting-started-work-course |
| moduleTitle | Getting started at work/course |
| levelTrack | B1 |
| cefrTarget | B1 |
| primaryLanguageStrandId | LS01 |
| secondaryLanguageStrandIds | LS08 |
| targetFamilyId | TF-B1-01-LS01-01 |
| targetId | T-B1-01-LS01-01-02 |
| variantRole | extension_survivor_variant |
| taskType | Satzbau |
| taskDepth | sentence_building |
| practiceType | Satzbau |
| learnerCue | Build: I am new here. |
| prompt / sentence / chunks | Chunks: `Ich / bin / neu / hier.` |
| givenPhrase | — |
| canonicalAnswer | Ich bin neu hier. |
| acceptedAnswers | exact sentence |
| answerMode | sentence_order |
| answerShape | ordered_chunks |
| correctnessPolicy | exact |
| acceptedAnswerPolicy | exact_only |
| supportPolicy | scenario_visible |
| supportPresentation | english_visible_before_answer |
| supportPresentationNotes | English cue is visible before answer; repair/transform prompts are instructions, not translations. |
| planningEvidenceLabel | Practice Evidence |
| evidenceType | auto_supported |
| reviewGroup | rg-b1-01-ich-bin-entry |
| reviewEligibilityDefault | weakly_eligible_after_delay |
| skillTags | sentence_building, sein, entry_baseline |
| grammarFocus | basic main-clause order |
| vocabularyFocus | neu hier |
| redemittelFocus | none |
| communicationGoal | B1-01 course/work entry support |
| difficultyBand | entry_baseline |
| sourceRisk | low |
| fallbackDecision | exact chunk order |
| fallbackNotes | Short Satzbau baseline. |
| learnerFacingAllowed | yes |
| schemaNotes | Short Satzbau baseline. |

### b1-01-ich-bin-entry-vf-010-var-006

| Field | Value |
| --- | --- |
| variantId | b1-01-ich-bin-entry-vf-010-var-006 |
| proposedSchemaVariantId | b1-01-ich-bin-entry-vf-010-var-006 |
| parentVariantFamilyId | b1-01-ich-bin-entry-vf-010 |
| sourceQAStatus | approved_as_is |
| displayModuleId | B1-01 |
| moduleKey | b1-01 |
| internalPlanningId | b1_m01_getting_started |
| moduleSlug | getting-started-work-course |
| moduleTitle | Getting started at work/course |
| levelTrack | B1 |
| cefrTarget | B1 |
| primaryLanguageStrandId | LS01 |
| secondaryLanguageStrandIds | LS08 |
| targetFamilyId | TF-B1-01-LS01-01 |
| targetId | T-B1-01-LS01-01-02 |
| variantRole | extension_survivor_variant |
| taskType | Reparatur |
| taskDepth | repair |
| practiceType | Reparatur |
| learnerCue | Fix the sentence. |
| prompt / sentence / chunks | Ich ist neu hier. |
| givenPhrase | — |
| canonicalAnswer | Ich bin neu hier. |
| acceptedAnswers | exact sentence |
| answerMode | repair_text |
| answerShape | repaired_sentence |
| correctnessPolicy | exact |
| acceptedAnswerPolicy | exact_only |
| supportPolicy | scenario_visible |
| supportPresentation | english_visible_before_answer |
| supportPresentationNotes | English cue is visible before answer; repair/transform prompts are instructions, not translations. |
| planningEvidenceLabel | Practice Evidence |
| evidenceType | auto_supported |
| reviewGroup | rg-b1-01-ich-bin-entry |
| reviewEligibilityDefault | weakly_eligible_after_delay |
| skillTags | repair, sein, ich_bin |
| grammarFocus | sein conjugation |
| vocabularyFocus | neu hier |
| redemittelFocus | none |
| communicationGoal | B1-01 course/work entry support |
| difficultyBand | entry_baseline |
| sourceRisk | low |
| fallbackDecision | exact sentence; punctuation normalisation only if supported |
| fallbackNotes | Instruction cue, not a translation. |
| learnerFacingAllowed | yes |
| schemaNotes | Instruction cue, not a translation. |

### b1-01-haben-materials-vf-011-var-001

| Field | Value |
| --- | --- |
| variantId | b1-01-haben-materials-vf-011-var-001 |
| proposedSchemaVariantId | b1-01-haben-materials-vf-011-var-001 |
| parentVariantFamilyId | b1-01-haben-materials-vf-011 |
| sourceQAStatus | approved_as_is |
| displayModuleId | B1-01 |
| moduleKey | b1-01 |
| internalPlanningId | b1_m01_getting_started |
| moduleSlug | getting-started-work-course |
| moduleTitle | Getting started at work/course |
| levelTrack | B1 |
| cefrTarget | B1 |
| primaryLanguageStrandId | LS08 |
| secondaryLanguageStrandIds | LS01 |
| targetFamilyId | TF-B1-01-LS08-01 |
| targetId | T-B1-01-LS08-01-03 |
| variantRole | extension_survivor_variant |
| taskType | Luecke |
| taskDepth | cloze |
| practiceType | Luecke |
| learnerCue | I have the documents. |
| prompt / sentence / chunks | Ich ___ die Unterlagen. |
| givenPhrase | [die Unterlagen] |
| canonicalAnswer | habe |
| acceptedAnswers | habe |
| answerMode | typed_short |
| answerShape | single_token |
| correctnessPolicy | exact |
| acceptedAnswerPolicy | exact_only |
| supportPolicy | scenario_visible |
| supportPresentation | english_visible_before_answer |
| supportPresentationNotes | English cue is visible before answer; repair/transform prompts are instructions, not translations. |
| planningEvidenceLabel | Practice Evidence |
| evidenceType | auto_supported |
| reviewGroup | rg-b1-01-haben-materials |
| reviewEligibilityDefault | weakly_eligible_after_delay |
| skillTags | haben, course_materials |
| grammarFocus | haben with ich |
| vocabularyFocus | die Unterlagen |
| redemittelFocus | none |
| communicationGoal | B1-01 course/work entry support |
| difficultyBand | entry_baseline |
| sourceRisk | low |
| fallbackDecision | exact-only |
| fallbackNotes | Object phrase is context only. |
| learnerFacingAllowed | yes |
| schemaNotes | Object phrase is context only. |

### b1-01-haben-materials-vf-011-var-002

| Field | Value |
| --- | --- |
| variantId | b1-01-haben-materials-vf-011-var-002 |
| proposedSchemaVariantId | b1-01-haben-materials-vf-011-var-002 |
| parentVariantFamilyId | b1-01-haben-materials-vf-011 |
| sourceQAStatus | approved_as_is |
| displayModuleId | B1-01 |
| moduleKey | b1-01 |
| internalPlanningId | b1_m01_getting_started |
| moduleSlug | getting-started-work-course |
| moduleTitle | Getting started at work/course |
| levelTrack | B1 |
| cefrTarget | B1 |
| primaryLanguageStrandId | LS08 |
| secondaryLanguageStrandIds | LS01 |
| targetFamilyId | TF-B1-01-LS08-01 |
| targetId | T-B1-01-LS08-01-03 |
| variantRole | extension_survivor_variant |
| taskType | Luecke |
| taskDepth | cloze |
| practiceType | Luecke |
| learnerCue | I have a notebook. |
| prompt / sentence / chunks | Ich ___ ein Heft. |
| givenPhrase | [ein Heft] |
| canonicalAnswer | habe |
| acceptedAnswers | habe |
| answerMode | typed_short |
| answerShape | single_token |
| correctnessPolicy | exact |
| acceptedAnswerPolicy | exact_only |
| supportPolicy | scenario_visible |
| supportPresentation | english_visible_before_answer |
| supportPresentationNotes | English cue is visible before answer; repair/transform prompts are instructions, not translations. |
| planningEvidenceLabel | Practice Evidence |
| evidenceType | auto_supported |
| reviewGroup | rg-b1-01-haben-materials |
| reviewEligibilityDefault | weakly_eligible_after_delay |
| skillTags | haben, course_materials |
| grammarFocus | haben with ich |
| vocabularyFocus | ein Heft |
| redemittelFocus | none |
| communicationGoal | B1-01 course/work entry support |
| difficultyBand | entry_baseline |
| sourceRisk | low |
| fallbackDecision | exact-only |
| fallbackNotes | Object phrase is context only. |
| learnerFacingAllowed | yes |
| schemaNotes | Object phrase is context only. |

### b1-01-haben-materials-vf-011-var-004

| Field | Value |
| --- | --- |
| variantId | b1-01-haben-materials-vf-011-var-004 |
| proposedSchemaVariantId | b1-01-haben-materials-vf-011-var-004 |
| parentVariantFamilyId | b1-01-haben-materials-vf-011 |
| sourceQAStatus | approved_as_is |
| displayModuleId | B1-01 |
| moduleKey | b1-01 |
| internalPlanningId | b1_m01_getting_started |
| moduleSlug | getting-started-work-course |
| moduleTitle | Getting started at work/course |
| levelTrack | B1 |
| cefrTarget | B1 |
| primaryLanguageStrandId | LS08 |
| secondaryLanguageStrandIds | LS01 |
| targetFamilyId | TF-B1-01-LS08-01 |
| targetId | T-B1-01-LS08-01-03 |
| variantRole | extension_survivor_variant |
| taskType | Luecke |
| taskDepth | cloze |
| practiceType | Luecke |
| learnerCue | Do you have information? |
| prompt / sentence / chunks | ___ Sie Informationen? |
| givenPhrase | [Informationen] |
| canonicalAnswer | Haben |
| acceptedAnswers | Haben; lowercase only if correct-with-note supported |
| answerMode | typed_short |
| answerShape | single_token |
| correctnessPolicy | exact |
| acceptedAnswerPolicy | normalised_if_supported |
| supportPolicy | scenario_visible |
| supportPresentation | english_visible_before_answer |
| supportPresentationNotes | English cue is visible before answer; repair/transform prompts are instructions, not translations. |
| planningEvidenceLabel | Core Evidence |
| evidenceType | auto_core |
| reviewGroup | rg-b1-01-haben-materials |
| reviewEligibilityDefault | eligible_auto_after_delay |
| skillTags | haben, formal_question, yes_no_question |
| grammarFocus | formal yes/no question order |
| vocabularyFocus | Informationen |
| redemittelFocus | none |
| communicationGoal | B1-01 course/work entry support |
| difficultyBand | entry_sentence_control |
| sourceRisk | medium |
| fallbackDecision | `haben` correct-with-note only if supported; otherwise not full evidence |
| fallbackNotes | Sentence-start capitalisation caveat. |
| learnerFacingAllowed | yes |
| schemaNotes | Sentence-start capitalisation caveat. |

### b1-01-haben-materials-vf-011-var-005

| Field | Value |
| --- | --- |
| variantId | b1-01-haben-materials-vf-011-var-005 |
| proposedSchemaVariantId | b1-01-haben-materials-vf-011-var-005 |
| parentVariantFamilyId | b1-01-haben-materials-vf-011 |
| sourceQAStatus | approved_as_is |
| displayModuleId | B1-01 |
| moduleKey | b1-01 |
| internalPlanningId | b1_m01_getting_started |
| moduleSlug | getting-started-work-course |
| moduleTitle | Getting started at work/course |
| levelTrack | B1 |
| cefrTarget | B1 |
| primaryLanguageStrandId | LS08 |
| secondaryLanguageStrandIds | LS01 |
| targetFamilyId | TF-B1-01-LS08-01 |
| targetId | T-B1-01-LS08-01-03 |
| variantRole | extension_survivor_variant |
| taskType | Luecke |
| taskDepth | cloze |
| practiceType | Luecke |
| learnerCue | Do you have the documents? |
| prompt / sentence / chunks | ___ Sie die Unterlagen? |
| givenPhrase | [die Unterlagen] |
| canonicalAnswer | Haben |
| acceptedAnswers | Haben; lowercase only if correct-with-note supported |
| answerMode | typed_short |
| answerShape | single_token |
| correctnessPolicy | exact |
| acceptedAnswerPolicy | normalised_if_supported |
| supportPolicy | scenario_visible |
| supportPresentation | english_visible_before_answer |
| supportPresentationNotes | English cue is visible before answer; repair/transform prompts are instructions, not translations. |
| planningEvidenceLabel | Core Evidence |
| evidenceType | auto_core |
| reviewGroup | rg-b1-01-haben-materials |
| reviewEligibilityDefault | eligible_auto_after_delay |
| skillTags | haben, formal_question, yes_no_question |
| grammarFocus | formal yes/no question order |
| vocabularyFocus | die Unterlagen |
| redemittelFocus | none |
| communicationGoal | B1-01 course/work entry support |
| difficultyBand | entry_sentence_control |
| sourceRisk | medium |
| fallbackDecision | `haben` correct-with-note only if supported; otherwise not full evidence |
| fallbackNotes | Sentence-start capitalisation caveat. |
| learnerFacingAllowed | yes |
| schemaNotes | Sentence-start capitalisation caveat. |

### b1-01-haben-materials-vf-011-var-006

| Field | Value |
| --- | --- |
| variantId | b1-01-haben-materials-vf-011-var-006 |
| proposedSchemaVariantId | b1-01-haben-materials-vf-011-var-006 |
| parentVariantFamilyId | b1-01-haben-materials-vf-011 |
| sourceQAStatus | approved_as_is |
| displayModuleId | B1-01 |
| moduleKey | b1-01 |
| internalPlanningId | b1_m01_getting_started |
| moduleSlug | getting-started-work-course |
| moduleTitle | Getting started at work/course |
| levelTrack | B1 |
| cefrTarget | B1 |
| primaryLanguageStrandId | LS08 |
| secondaryLanguageStrandIds | LS01 |
| targetFamilyId | TF-B1-01-LS08-01 |
| targetId | T-B1-01-LS08-01-03 |
| variantRole | extension_survivor_variant |
| taskType | Reparatur |
| taskDepth | repair |
| practiceType | Reparatur |
| learnerCue | Fix the sentence. |
| prompt / sentence / chunks | Ich haben die Unterlagen. |
| givenPhrase | — |
| canonicalAnswer | Ich habe die Unterlagen. |
| acceptedAnswers | exact sentence |
| answerMode | repair_text |
| answerShape | repaired_sentence |
| correctnessPolicy | exact |
| acceptedAnswerPolicy | exact_only |
| supportPolicy | scenario_visible |
| supportPresentation | english_visible_before_answer |
| supportPresentationNotes | English cue is visible before answer; repair/transform prompts are instructions, not translations. |
| planningEvidenceLabel | Practice Evidence |
| evidenceType | auto_supported |
| reviewGroup | rg-b1-01-haben-materials |
| reviewEligibilityDefault | weakly_eligible_after_delay |
| skillTags | repair, haben, course_materials |
| grammarFocus | haben with ich |
| vocabularyFocus | die Unterlagen |
| redemittelFocus | none |
| communicationGoal | B1-01 course/work entry support |
| difficultyBand | entry_baseline |
| sourceRisk | low |
| fallbackDecision | exact sentence; punctuation normalisation only if supported |
| fallbackNotes | Instruction cue, not a translation. |
| learnerFacingAllowed | yes |
| schemaNotes | Instruction cue, not a translation. |

### b1-01-lernen-arbeiten-vf-012-var-001

| Field | Value |
| --- | --- |
| variantId | b1-01-lernen-arbeiten-vf-012-var-001 |
| proposedSchemaVariantId | b1-01-lernen-arbeiten-vf-012-var-001 |
| parentVariantFamilyId | b1-01-lernen-arbeiten-vf-012 |
| sourceQAStatus | approved_as_is |
| displayModuleId | B1-01 |
| moduleKey | b1-01 |
| internalPlanningId | b1_m01_getting_started |
| moduleSlug | getting-started-work-course |
| moduleTitle | Getting started at work/course |
| levelTrack | B1 |
| cefrTarget | B1 |
| primaryLanguageStrandId | LS01 |
| secondaryLanguageStrandIds | LS08 |
| targetFamilyId | TF-B1-01-LS01-01 |
| targetId | T-B1-01-LS01-01-02 |
| variantRole | extension_survivor_variant |
| taskType | Luecke |
| taskDepth | cloze |
| practiceType | Luecke |
| learnerCue | I learn German. |
| prompt / sentence / chunks | Ich ___ Deutsch. |
| givenPhrase | [Deutsch] |
| canonicalAnswer | lerne |
| acceptedAnswers | lerne |
| answerMode | typed_short |
| answerShape | single_token |
| correctnessPolicy | exact |
| acceptedAnswerPolicy | exact_only |
| supportPolicy | scenario_visible |
| supportPresentation | english_visible_before_answer |
| supportPresentationNotes | English cue is visible before answer; repair/transform prompts are instructions, not translations. |
| planningEvidenceLabel | Core Evidence |
| evidenceType | auto_core |
| reviewGroup | rg-b1-01-lernen-arbeiten |
| reviewEligibilityDefault | eligible_auto_after_delay |
| skillTags | lernen, present_tense, course_activity |
| grammarFocus | present tense activity verb |
| vocabularyFocus | Deutsch lernen |
| redemittelFocus | none |
| communicationGoal | B1-01 course/work entry support |
| difficultyBand | entry_sentence_control |
| sourceRisk | low |
| fallbackDecision | exact-only |
| fallbackNotes | Clear lexical verb target. |
| learnerFacingAllowed | yes |
| schemaNotes | Clear lexical verb target. |

### b1-01-lernen-arbeiten-vf-012-var-002

| Field | Value |
| --- | --- |
| variantId | b1-01-lernen-arbeiten-vf-012-var-002 |
| proposedSchemaVariantId | b1-01-lernen-arbeiten-vf-012-var-002 |
| parentVariantFamilyId | b1-01-lernen-arbeiten-vf-012 |
| sourceQAStatus | approved_as_is |
| displayModuleId | B1-01 |
| moduleKey | b1-01 |
| internalPlanningId | b1_m01_getting_started |
| moduleSlug | getting-started-work-course |
| moduleTitle | Getting started at work/course |
| levelTrack | B1 |
| cefrTarget | B1 |
| primaryLanguageStrandId | LS01 |
| secondaryLanguageStrandIds | LS08 |
| targetFamilyId | TF-B1-01-LS01-01 |
| targetId | T-B1-01-LS01-01-02 |
| variantRole | extension_survivor_variant |
| taskType | Luecke |
| taskDepth | cloze |
| practiceType | Luecke |
| learnerCue | In the course I learn German. |
| prompt / sentence / chunks | Im Kurs ___ ich Deutsch. |
| givenPhrase | [Deutsch] |
| canonicalAnswer | lerne |
| acceptedAnswers | lerne |
| answerMode | typed_short |
| answerShape | single_token |
| correctnessPolicy | exact |
| acceptedAnswerPolicy | exact_only |
| supportPolicy | scenario_visible |
| supportPresentation | english_visible_before_answer |
| supportPresentationNotes | English cue is visible before answer; repair/transform prompts are instructions, not translations. |
| planningEvidenceLabel | Practice Evidence |
| evidenceType | auto_supported |
| reviewGroup | rg-b1-01-lernen-arbeiten |
| reviewEligibilityDefault | weakly_eligible_after_delay |
| skillTags | lernen, course_activity, v2_support |
| grammarFocus | activity verb in place-fronted clause |
| vocabularyFocus | im Kurs, Deutsch |
| redemittelFocus | none |
| communicationGoal | B1-01 course/work entry support |
| difficultyBand | entry_baseline |
| sourceRisk | medium |
| fallbackDecision | exact-only |
| fallbackNotes | Do not overcount as new V2 evidence. |
| learnerFacingAllowed | yes |
| schemaNotes | Do not overcount as new V2 evidence. |

### b1-01-lernen-arbeiten-vf-012-var-003

| Field | Value |
| --- | --- |
| variantId | b1-01-lernen-arbeiten-vf-012-var-003 |
| proposedSchemaVariantId | b1-01-lernen-arbeiten-vf-012-var-003 |
| parentVariantFamilyId | b1-01-lernen-arbeiten-vf-012 |
| sourceQAStatus | approved_as_is |
| displayModuleId | B1-01 |
| moduleKey | b1-01 |
| internalPlanningId | b1_m01_getting_started |
| moduleSlug | getting-started-work-course |
| moduleTitle | Getting started at work/course |
| levelTrack | B1 |
| cefrTarget | B1 |
| primaryLanguageStrandId | LS01 |
| secondaryLanguageStrandIds | LS08 |
| targetFamilyId | TF-B1-01-LS01-01 |
| targetId | T-B1-01-LS01-01-02 |
| variantRole | extension_survivor_variant |
| taskType | Luecke |
| taskDepth | cloze |
| practiceType | Luecke |
| learnerCue | Today I work. |
| prompt / sentence / chunks | Heute ___ ich. |
| givenPhrase | — |
| canonicalAnswer | arbeite |
| acceptedAnswers | arbeite |
| answerMode | typed_short |
| answerShape | single_token |
| correctnessPolicy | exact |
| acceptedAnswerPolicy | exact_only |
| supportPolicy | scenario_visible |
| supportPresentation | english_visible_before_answer |
| supportPresentationNotes | English cue is visible before answer; repair/transform prompts are instructions, not translations. |
| planningEvidenceLabel | Practice Evidence |
| evidenceType | auto_supported |
| reviewGroup | rg-b1-01-lernen-arbeiten |
| reviewEligibilityDefault | weakly_eligible_after_delay |
| skillTags | arbeiten, present_tense, basic_work_context |
| grammarFocus | present tense activity verb |
| vocabularyFocus | arbeiten |
| redemittelFocus | none |
| communicationGoal | B1-01 course/work entry support |
| difficultyBand | entry_baseline |
| sourceRisk | low |
| fallbackDecision | exact-only |
| fallbackNotes | Generic work only; no profession/job-search content. |
| learnerFacingAllowed | yes |
| schemaNotes | Generic work only; no profession/job-search content. |

### b1-01-lernen-arbeiten-vf-012-var-004

| Field | Value |
| --- | --- |
| variantId | b1-01-lernen-arbeiten-vf-012-var-004 |
| proposedSchemaVariantId | b1-01-lernen-arbeiten-vf-012-var-004 |
| parentVariantFamilyId | b1-01-lernen-arbeiten-vf-012 |
| sourceQAStatus | approved_as_is |
| displayModuleId | B1-01 |
| moduleKey | b1-01 |
| internalPlanningId | b1_m01_getting_started |
| moduleSlug | getting-started-work-course |
| moduleTitle | Getting started at work/course |
| levelTrack | B1 |
| cefrTarget | B1 |
| primaryLanguageStrandId | LS01 |
| secondaryLanguageStrandIds | LS08 |
| targetFamilyId | TF-B1-01-LS01-01 |
| targetId | T-B1-01-LS01-01-02 |
| variantRole | extension_survivor_variant |
| taskType | Luecke |
| taskDepth | cloze |
| practiceType | Luecke |
| learnerCue | On Monday I work. |
| prompt / sentence / chunks | Am Montag ___ ich. |
| givenPhrase | — |
| canonicalAnswer | arbeite |
| acceptedAnswers | arbeite |
| answerMode | typed_short |
| answerShape | single_token |
| correctnessPolicy | exact |
| acceptedAnswerPolicy | exact_only |
| supportPolicy | scenario_visible |
| supportPresentation | english_visible_before_answer |
| supportPresentationNotes | English cue is visible before answer; repair/transform prompts are instructions, not translations. |
| planningEvidenceLabel | Practice Evidence |
| evidenceType | auto_supported |
| reviewGroup | rg-b1-01-lernen-arbeiten |
| reviewEligibilityDefault | weakly_eligible_after_delay |
| skillTags | arbeiten, present_tense, v2_support |
| grammarFocus | present tense activity verb with fronted time |
| vocabularyFocus | arbeiten, am Montag |
| redemittelFocus | none |
| communicationGoal | B1-01 course/work entry support |
| difficultyBand | entry_baseline |
| sourceRisk | medium |
| fallbackDecision | exact-only |
| fallbackNotes | Generic work only; do not overcount as V2 evidence. |
| learnerFacingAllowed | yes |
| schemaNotes | Generic work only; do not overcount as V2 evidence. |

### b1-01-lernen-arbeiten-vf-012-var-005

| Field | Value |
| --- | --- |
| variantId | b1-01-lernen-arbeiten-vf-012-var-005 |
| proposedSchemaVariantId | b1-01-lernen-arbeiten-vf-012-var-005 |
| parentVariantFamilyId | b1-01-lernen-arbeiten-vf-012 |
| sourceQAStatus | approved_as_is |
| displayModuleId | B1-01 |
| moduleKey | b1-01 |
| internalPlanningId | b1_m01_getting_started |
| moduleSlug | getting-started-work-course |
| moduleTitle | Getting started at work/course |
| levelTrack | B1 |
| cefrTarget | B1 |
| primaryLanguageStrandId | LS01 |
| secondaryLanguageStrandIds | LS08 |
| targetFamilyId | TF-B1-01-LS01-01 |
| targetId | T-B1-01-LS01-01-02 |
| variantRole | extension_survivor_variant |
| taskType | Kontrast |
| taskDepth | contrast |
| practiceType | Kontrast |
| learnerCue | Choose the better verb: German class context. |
| prompt / sentence / chunks | Im Deutschunterricht ___ ich Deutsch. |
| givenPhrase | — |
| canonicalAnswer | lerne |
| acceptedAnswers | lerne |
| answerMode | typed_short |
| answerShape | single_token |
| correctnessPolicy | exact |
| acceptedAnswerPolicy | exact_only |
| supportPolicy | scenario_visible |
| supportPresentation | english_visible_before_answer |
| supportPresentationNotes | English cue is visible before answer; repair/transform prompts are instructions, not translations. |
| planningEvidenceLabel | Practice Evidence |
| evidenceType | auto_supported |
| reviewGroup | rg-b1-01-lernen-arbeiten |
| reviewEligibilityDefault | weakly_eligible_after_delay |
| skillTags | lernen_vs_arbeiten, contrast |
| grammarFocus | verb-choice contrast |
| vocabularyFocus | Deutschunterricht, Deutsch lernen |
| redemittelFocus | none |
| communicationGoal | B1-01 course/work entry support |
| difficultyBand | entry_baseline |
| sourceRisk | medium |
| fallbackDecision | exact-only |
| fallbackNotes | Instruction cue, not translation. |
| learnerFacingAllowed | yes |
| schemaNotes | Instruction cue, not translation. |

### b1-01-lernen-arbeiten-vf-012-var-006

| Field | Value |
| --- | --- |
| variantId | b1-01-lernen-arbeiten-vf-012-var-006 |
| proposedSchemaVariantId | b1-01-lernen-arbeiten-vf-012-var-006 |
| parentVariantFamilyId | b1-01-lernen-arbeiten-vf-012 |
| sourceQAStatus | approved_as_is |
| displayModuleId | B1-01 |
| moduleKey | b1-01 |
| internalPlanningId | b1_m01_getting_started |
| moduleSlug | getting-started-work-course |
| moduleTitle | Getting started at work/course |
| levelTrack | B1 |
| cefrTarget | B1 |
| primaryLanguageStrandId | LS01 |
| secondaryLanguageStrandIds | LS08 |
| targetFamilyId | TF-B1-01-LS01-01 |
| targetId | T-B1-01-LS01-01-02 |
| variantRole | extension_survivor_variant |
| taskType | Reparatur |
| taskDepth | repair |
| practiceType | Reparatur |
| learnerCue | Fix the sentence. |
| prompt / sentence / chunks | Ich arbeite Deutsch. |
| givenPhrase | — |
| canonicalAnswer | Ich lerne Deutsch. |
| acceptedAnswers | exact sentence |
| answerMode | repair_text |
| answerShape | repaired_sentence |
| correctnessPolicy | exact |
| acceptedAnswerPolicy | exact_only |
| supportPolicy | scenario_visible |
| supportPresentation | english_visible_before_answer |
| supportPresentationNotes | English cue is visible before answer; repair/transform prompts are instructions, not translations. |
| planningEvidenceLabel | Practice Evidence |
| evidenceType | auto_supported |
| reviewGroup | rg-b1-01-lernen-arbeiten |
| reviewEligibilityDefault | weakly_eligible_after_delay |
| skillTags | repair, lernen_vs_arbeiten |
| grammarFocus | verb-choice repair |
| vocabularyFocus | Deutsch lernen |
| redemittelFocus | none |
| communicationGoal | B1-01 course/work entry support |
| difficultyBand | entry_baseline |
| sourceRisk | medium |
| fallbackDecision | exact sentence; punctuation normalisation only if supported |
| fallbackNotes | Instruction cue; plausible enough for B1-01. |
| learnerFacingAllowed | yes |
| schemaNotes | Instruction cue; plausible enough for B1-01. |

### b1-01-suchen-finden-vf-013-var-001

| Field | Value |
| --- | --- |
| variantId | b1-01-suchen-finden-vf-013-var-001 |
| proposedSchemaVariantId | b1-01-suchen-finden-vf-013-var-001 |
| parentVariantFamilyId | b1-01-suchen-finden-vf-013 |
| sourceQAStatus | approved_as_is |
| displayModuleId | B1-01 |
| moduleKey | b1-01 |
| internalPlanningId | b1_m01_getting_started |
| moduleSlug | getting-started-work-course |
| moduleTitle | Getting started at work/course |
| levelTrack | B1 |
| cefrTarget | B1 |
| primaryLanguageStrandId | LS01 |
| secondaryLanguageStrandIds | LS08 |
| targetFamilyId | TF-B1-01-LS01-02 |
| targetId | T-B1-01-LS01-02-01 |
| variantRole | extension_survivor_variant |
| taskType | Luecke |
| taskDepth | cloze |
| practiceType | Luecke |
| learnerCue | I am looking for the course room. |
| prompt / sentence / chunks | Ich ___ den Kursraum. |
| givenPhrase | [den Kursraum] |
| canonicalAnswer | suche |
| acceptedAnswers | suche |
| answerMode | typed_short |
| answerShape | single_token |
| correctnessPolicy | exact |
| acceptedAnswerPolicy | exact_only |
| supportPolicy | scenario_visible |
| supportPresentation | english_visible_before_answer |
| supportPresentationNotes | English cue is visible before answer; repair/transform prompts are instructions, not translations. |
| planningEvidenceLabel | Practice Evidence |
| evidenceType | auto_supported |
| reviewGroup | rg-b1-01-suchen-finden |
| reviewEligibilityDefault | weakly_eligible_after_delay |
| skillTags | suchen, orientation, verb_choice |
| grammarFocus | suchen vs finden |
| vocabularyFocus | den Kursraum |
| redemittelFocus | none |
| communicationGoal | B1-01 course/work entry support |
| difficultyBand | entry_baseline |
| sourceRisk | medium |
| fallbackDecision | exact-only |
| fallbackNotes | `den Kursraum` is a visible object phrase; no accusative/article evidence. |
| learnerFacingAllowed | yes |
| schemaNotes | `den Kursraum` is a visible object phrase; no accusative/article evidence. |

### b1-01-suchen-finden-vf-013-var-002

| Field | Value |
| --- | --- |
| variantId | b1-01-suchen-finden-vf-013-var-002 |
| proposedSchemaVariantId | b1-01-suchen-finden-vf-013-var-002 |
| parentVariantFamilyId | b1-01-suchen-finden-vf-013 |
| sourceQAStatus | approved_as_is |
| displayModuleId | B1-01 |
| moduleKey | b1-01 |
| internalPlanningId | b1_m01_getting_started |
| moduleSlug | getting-started-work-course |
| moduleTitle | Getting started at work/course |
| levelTrack | B1 |
| cefrTarget | B1 |
| primaryLanguageStrandId | LS01 |
| secondaryLanguageStrandIds | LS08 |
| targetFamilyId | TF-B1-01-LS01-02 |
| targetId | T-B1-01-LS01-02-01 |
| variantRole | extension_survivor_variant |
| taskType | Luecke |
| taskDepth | cloze |
| practiceType | Luecke |
| learnerCue | Where do I find the course room? |
| prompt / sentence / chunks | Wo ___ ich den Kursraum? |
| givenPhrase | [den Kursraum] |
| canonicalAnswer | finde |
| acceptedAnswers | finde |
| answerMode | typed_short |
| answerShape | single_token |
| correctnessPolicy | exact |
| acceptedAnswerPolicy | exact_only |
| supportPolicy | scenario_visible |
| supportPresentation | english_visible_before_answer |
| supportPresentationNotes | English cue is visible before answer; repair/transform prompts are instructions, not translations. |
| planningEvidenceLabel | Practice Evidence |
| evidenceType | auto_supported |
| reviewGroup | rg-b1-01-suchen-finden |
| reviewEligibilityDefault | weakly_eligible_after_delay |
| skillTags | finden, orientation, verb_choice |
| grammarFocus | suchen vs finden in W-question |
| vocabularyFocus | den Kursraum |
| redemittelFocus | none |
| communicationGoal | B1-01 course/work entry support |
| difficultyBand | entry_baseline |
| sourceRisk | medium |
| fallbackDecision | exact-only |
| fallbackNotes | Do not count as independent W-question proof or accusative/article proof. |
| learnerFacingAllowed | yes |
| schemaNotes | Do not count as independent W-question proof or accusative/article proof. |

### b1-01-suchen-finden-vf-013-var-003

| Field | Value |
| --- | --- |
| variantId | b1-01-suchen-finden-vf-013-var-003 |
| proposedSchemaVariantId | b1-01-suchen-finden-vf-013-var-003 |
| parentVariantFamilyId | b1-01-suchen-finden-vf-013 |
| sourceQAStatus | approved_as_is |
| displayModuleId | B1-01 |
| moduleKey | b1-01 |
| internalPlanningId | b1_m01_getting_started |
| moduleSlug | getting-started-work-course |
| moduleTitle | Getting started at work/course |
| levelTrack | B1 |
| cefrTarget | B1 |
| primaryLanguageStrandId | LS01 |
| secondaryLanguageStrandIds | LS08 |
| targetFamilyId | TF-B1-01-LS01-02 |
| targetId | T-B1-01-LS01-02-01 |
| variantRole | extension_survivor_variant |
| taskType | Luecke |
| taskDepth | cloze |
| practiceType | Luecke |
| learnerCue | I am looking for the app. |
| prompt / sentence / chunks | Ich ___ die App. |
| givenPhrase | [die App] |
| canonicalAnswer | suche |
| acceptedAnswers | suche |
| answerMode | typed_short |
| answerShape | single_token |
| correctnessPolicy | exact |
| acceptedAnswerPolicy | exact_only |
| supportPolicy | scenario_visible |
| supportPresentation | english_visible_before_answer |
| supportPresentationNotes | English cue is visible before answer; repair/transform prompts are instructions, not translations. |
| planningEvidenceLabel | Practice Evidence |
| evidenceType | auto_supported |
| reviewGroup | rg-b1-01-suchen-finden |
| reviewEligibilityDefault | weakly_eligible_after_delay |
| skillTags | suchen, orientation, verb_choice |
| grammarFocus | suchen vs finden |
| vocabularyFocus | die App |
| redemittelFocus | none |
| communicationGoal | B1-01 course/work entry support |
| difficultyBand | entry_baseline |
| sourceRisk | low |
| fallbackDecision | exact-only |
| fallbackNotes | Object phrase is context. |
| learnerFacingAllowed | yes |
| schemaNotes | Object phrase is context. |

### b1-01-suchen-finden-vf-013-var-004

| Field | Value |
| --- | --- |
| variantId | b1-01-suchen-finden-vf-013-var-004 |
| proposedSchemaVariantId | b1-01-suchen-finden-vf-013-var-004 |
| parentVariantFamilyId | b1-01-suchen-finden-vf-013 |
| sourceQAStatus | approved_as_is |
| displayModuleId | B1-01 |
| moduleKey | b1-01 |
| internalPlanningId | b1_m01_getting_started |
| moduleSlug | getting-started-work-course |
| moduleTitle | Getting started at work/course |
| levelTrack | B1 |
| cefrTarget | B1 |
| primaryLanguageStrandId | LS01 |
| secondaryLanguageStrandIds | LS08 |
| targetFamilyId | TF-B1-01-LS01-02 |
| targetId | T-B1-01-LS01-02-01 |
| variantRole | extension_survivor_variant |
| taskType | Luecke |
| taskDepth | cloze |
| practiceType | Luecke |
| learnerCue | Where do I find the app? |
| prompt / sentence / chunks | Wo ___ ich die App? |
| givenPhrase | [die App] |
| canonicalAnswer | finde |
| acceptedAnswers | finde |
| answerMode | typed_short |
| answerShape | single_token |
| correctnessPolicy | exact |
| acceptedAnswerPolicy | exact_only |
| supportPolicy | scenario_visible |
| supportPresentation | english_visible_before_answer |
| supportPresentationNotes | English cue is visible before answer; repair/transform prompts are instructions, not translations. |
| planningEvidenceLabel | Practice Evidence |
| evidenceType | auto_supported |
| reviewGroup | rg-b1-01-suchen-finden |
| reviewEligibilityDefault | weakly_eligible_after_delay |
| skillTags | finden, orientation, verb_choice |
| grammarFocus | suchen vs finden in W-question |
| vocabularyFocus | die App |
| redemittelFocus | none |
| communicationGoal | B1-01 course/work entry support |
| difficultyBand | entry_baseline |
| sourceRisk | medium |
| fallbackDecision | exact-only |
| fallbackNotes | Object phrase is context; do not overcount as W-question evidence. |
| learnerFacingAllowed | yes |
| schemaNotes | Object phrase is context; do not overcount as W-question evidence. |

### b1-01-suchen-finden-vf-013-var-005

| Field | Value |
| --- | --- |
| variantId | b1-01-suchen-finden-vf-013-var-005 |
| proposedSchemaVariantId | b1-01-suchen-finden-vf-013-var-005 |
| parentVariantFamilyId | b1-01-suchen-finden-vf-013 |
| sourceQAStatus | approved_as_is |
| displayModuleId | B1-01 |
| moduleKey | b1-01 |
| internalPlanningId | b1_m01_getting_started |
| moduleSlug | getting-started-work-course |
| moduleTitle | Getting started at work/course |
| levelTrack | B1 |
| cefrTarget | B1 |
| primaryLanguageStrandId | LS01 |
| secondaryLanguageStrandIds | LS08 |
| targetFamilyId | TF-B1-01-LS01-02 |
| targetId | T-B1-01-LS01-02-01 |
| variantRole | extension_survivor_variant |
| taskType | Luecke |
| taskDepth | cloze |
| practiceType | Luecke |
| learnerCue | I am looking for the documents. |
| prompt / sentence / chunks | Ich ___ die Unterlagen. |
| givenPhrase | [die Unterlagen] |
| canonicalAnswer | suche |
| acceptedAnswers | suche |
| answerMode | typed_short |
| answerShape | single_token |
| correctnessPolicy | exact |
| acceptedAnswerPolicy | exact_only |
| supportPolicy | scenario_visible |
| supportPresentation | english_visible_before_answer |
| supportPresentationNotes | English cue is visible before answer; repair/transform prompts are instructions, not translations. |
| planningEvidenceLabel | Practice Evidence |
| evidenceType | auto_supported |
| reviewGroup | rg-b1-01-suchen-finden |
| reviewEligibilityDefault | weakly_eligible_after_delay |
| skillTags | suchen, orientation, verb_choice |
| grammarFocus | suchen vs finden |
| vocabularyFocus | die Unterlagen |
| redemittelFocus | none |
| communicationGoal | B1-01 course/work entry support |
| difficultyBand | entry_baseline |
| sourceRisk | low |
| fallbackDecision | exact-only |
| fallbackNotes | Object phrase is context. |
| learnerFacingAllowed | yes |
| schemaNotes | Object phrase is context. |

### b1-01-statement-question-transform-vf-015-var-001

| Field | Value |
| --- | --- |
| variantId | b1-01-statement-question-transform-vf-015-var-001 |
| proposedSchemaVariantId | b1-01-statement-question-transform-vf-015-var-001 |
| parentVariantFamilyId | b1-01-statement-question-transform-vf-015 |
| sourceQAStatus | approved_as_is |
| displayModuleId | B1-01 |
| moduleKey | b1-01 |
| internalPlanningId | b1_m01_getting_started |
| moduleSlug | getting-started-work-course |
| moduleTitle | Getting started at work/course |
| levelTrack | B1 |
| cefrTarget | B1 |
| primaryLanguageStrandId | LS01 |
| secondaryLanguageStrandIds | LS09 |
| targetFamilyId | TF-B1-01-LS01-02 |
| targetId | T-B1-01-LS01-02-02 |
| variantRole | extension_survivor_variant |
| taskType | Umformen |
| taskDepth | transformation |
| practiceType | Umformen |
| learnerCue | Turn the statement into a yes/no question. |
| prompt / sentence / chunks | Die App ist hier. |
| givenPhrase | — |
| canonicalAnswer | Ist die App hier? |
| acceptedAnswers | exact sentence |
| answerMode | transformation_text |
| answerShape | transformed_sentence |
| correctnessPolicy | exact |
| acceptedAnswerPolicy | exact_only |
| supportPolicy | scenario_visible |
| supportPresentation | english_visible_before_answer |
| supportPresentationNotes | English cue is visible before answer; repair/transform prompts are instructions, not translations. |
| planningEvidenceLabel | Core Evidence |
| evidenceType | auto_core |
| reviewGroup | rg-b1-01-statement-question-transform |
| reviewEligibilityDefault | eligible_auto_after_delay |
| skillTags | yes_no_question, transformation, verb_first |
| grammarFocus | statement-to-question transformation |
| vocabularyFocus | die App, hier |
| redemittelFocus | none |
| communicationGoal | B1-01 course/work entry support |
| difficultyBand | entry_sentence_control |
| sourceRisk | medium |
| fallbackDecision | question-mark normalisation only if supported |
| fallbackNotes | Full question punctuation is part of transformation contract. |
| learnerFacingAllowed | yes |
| schemaNotes | Full question punctuation is part of transformation contract. |

### b1-01-statement-question-transform-vf-015-var-002

| Field | Value |
| --- | --- |
| variantId | b1-01-statement-question-transform-vf-015-var-002 |
| proposedSchemaVariantId | b1-01-statement-question-transform-vf-015-var-002 |
| parentVariantFamilyId | b1-01-statement-question-transform-vf-015 |
| sourceQAStatus | approved_as_is |
| displayModuleId | B1-01 |
| moduleKey | b1-01 |
| internalPlanningId | b1_m01_getting_started |
| moduleSlug | getting-started-work-course |
| moduleTitle | Getting started at work/course |
| levelTrack | B1 |
| cefrTarget | B1 |
| primaryLanguageStrandId | LS01 |
| secondaryLanguageStrandIds | LS09 |
| targetFamilyId | TF-B1-01-LS01-02 |
| targetId | T-B1-01-LS01-02-02 |
| variantRole | extension_survivor_variant |
| taskType | Umformen |
| taskDepth | transformation |
| practiceType | Umformen |
| learnerCue | Turn the statement into a yes/no question. |
| prompt / sentence / chunks | Das Heft ist hier. |
| givenPhrase | — |
| canonicalAnswer | Ist das Heft hier? |
| acceptedAnswers | exact sentence |
| answerMode | transformation_text |
| answerShape | transformed_sentence |
| correctnessPolicy | exact |
| acceptedAnswerPolicy | exact_only |
| supportPolicy | scenario_visible |
| supportPresentation | english_visible_before_answer |
| supportPresentationNotes | English cue is visible before answer; repair/transform prompts are instructions, not translations. |
| planningEvidenceLabel | Core Evidence |
| evidenceType | auto_core |
| reviewGroup | rg-b1-01-statement-question-transform |
| reviewEligibilityDefault | eligible_auto_after_delay |
| skillTags | yes_no_question, transformation, verb_first |
| grammarFocus | statement-to-question transformation |
| vocabularyFocus | das Heft, hier |
| redemittelFocus | none |
| communicationGoal | B1-01 course/work entry support |
| difficultyBand | entry_sentence_control |
| sourceRisk | medium |
| fallbackDecision | question-mark normalisation only if supported |
| fallbackNotes | Full question punctuation is part of transformation contract. |
| learnerFacingAllowed | yes |
| schemaNotes | Full question punctuation is part of transformation contract. |

### b1-01-statement-question-transform-vf-015-var-003

| Field | Value |
| --- | --- |
| variantId | b1-01-statement-question-transform-vf-015-var-003 |
| proposedSchemaVariantId | b1-01-statement-question-transform-vf-015-var-003 |
| parentVariantFamilyId | b1-01-statement-question-transform-vf-015 |
| sourceQAStatus | approved_as_is |
| displayModuleId | B1-01 |
| moduleKey | b1-01 |
| internalPlanningId | b1_m01_getting_started |
| moduleSlug | getting-started-work-course |
| moduleTitle | Getting started at work/course |
| levelTrack | B1 |
| cefrTarget | B1 |
| primaryLanguageStrandId | LS01 |
| secondaryLanguageStrandIds | LS09 |
| targetFamilyId | TF-B1-01-LS01-02 |
| targetId | T-B1-01-LS01-02-02 |
| variantRole | extension_survivor_variant |
| taskType | Umformen |
| taskDepth | transformation |
| practiceType | Umformen |
| learnerCue | Turn the statement into a yes/no question. |
| prompt / sentence / chunks | Ich brauche ein Heft. |
| givenPhrase | — |
| canonicalAnswer | Brauche ich ein Heft? |
| acceptedAnswers | exact sentence |
| answerMode | transformation_text |
| answerShape | transformed_sentence |
| correctnessPolicy | exact |
| acceptedAnswerPolicy | exact_only |
| supportPolicy | scenario_visible |
| supportPresentation | english_visible_before_answer |
| supportPresentationNotes | English cue is visible before answer; repair/transform prompts are instructions, not translations. |
| planningEvidenceLabel | Core Evidence |
| evidenceType | auto_core |
| reviewGroup | rg-b1-01-statement-question-transform |
| reviewEligibilityDefault | eligible_auto_after_delay |
| skillTags | yes_no_question, transformation, verb_first |
| grammarFocus | statement-to-question transformation |
| vocabularyFocus | ein Heft |
| redemittelFocus | none |
| communicationGoal | B1-01 course/work entry support |
| difficultyBand | entry_sentence_control |
| sourceRisk | medium |
| fallbackDecision | question-mark normalisation only if supported |
| fallbackNotes | Transformation target, not `brauchen` expansion. |
| learnerFacingAllowed | yes |
| schemaNotes | Transformation target, not `brauchen` expansion. |

### b1-01-statement-question-transform-vf-015-var-004

| Field | Value |
| --- | --- |
| variantId | b1-01-statement-question-transform-vf-015-var-004 |
| proposedSchemaVariantId | b1-01-statement-question-transform-vf-015-var-004 |
| parentVariantFamilyId | b1-01-statement-question-transform-vf-015 |
| sourceQAStatus | approved_as_is |
| displayModuleId | B1-01 |
| moduleKey | b1-01 |
| internalPlanningId | b1_m01_getting_started |
| moduleSlug | getting-started-work-course |
| moduleTitle | Getting started at work/course |
| levelTrack | B1 |
| cefrTarget | B1 |
| primaryLanguageStrandId | LS01 |
| secondaryLanguageStrandIds | LS09 |
| targetFamilyId | TF-B1-01-LS01-02 |
| targetId | T-B1-01-LS01-02-02 |
| variantRole | extension_survivor_variant |
| taskType | Umformen |
| taskDepth | transformation |
| practiceType | Umformen |
| learnerCue | Turn the statement into a yes/no question. |
| prompt / sentence / chunks | Ich habe die Unterlagen. |
| givenPhrase | — |
| canonicalAnswer | Habe ich die Unterlagen? |
| acceptedAnswers | exact sentence |
| answerMode | transformation_text |
| answerShape | transformed_sentence |
| correctnessPolicy | exact |
| acceptedAnswerPolicy | exact_only |
| supportPolicy | scenario_visible |
| supportPresentation | english_visible_before_answer |
| supportPresentationNotes | English cue is visible before answer; repair/transform prompts are instructions, not translations. |
| planningEvidenceLabel | Core Evidence |
| evidenceType | auto_core |
| reviewGroup | rg-b1-01-statement-question-transform |
| reviewEligibilityDefault | eligible_auto_after_delay |
| skillTags | yes_no_question, transformation, verb_first |
| grammarFocus | statement-to-question transformation |
| vocabularyFocus | die Unterlagen |
| redemittelFocus | none |
| communicationGoal | B1-01 course/work entry support |
| difficultyBand | entry_sentence_control |
| sourceRisk | medium |
| fallbackDecision | question-mark normalisation only if supported |
| fallbackNotes | Full question punctuation is part of transformation contract. |
| learnerFacingAllowed | yes |
| schemaNotes | Full question punctuation is part of transformation contract. |

### b1-01-statement-question-transform-vf-015-var-005

| Field | Value |
| --- | --- |
| variantId | b1-01-statement-question-transform-vf-015-var-005 |
| proposedSchemaVariantId | b1-01-statement-question-transform-vf-015-var-005 |
| parentVariantFamilyId | b1-01-statement-question-transform-vf-015 |
| sourceQAStatus | approved_as_is |
| displayModuleId | B1-01 |
| moduleKey | b1-01 |
| internalPlanningId | b1_m01_getting_started |
| moduleSlug | getting-started-work-course |
| moduleTitle | Getting started at work/course |
| levelTrack | B1 |
| cefrTarget | B1 |
| primaryLanguageStrandId | LS01 |
| secondaryLanguageStrandIds | LS09 |
| targetFamilyId | TF-B1-01-LS01-02 |
| targetId | T-B1-01-LS01-02-02 |
| variantRole | extension_survivor_variant |
| taskType | Umformen |
| taskDepth | transformation |
| practiceType | Umformen |
| learnerCue | Turn the statement into a formal yes/no question. |
| prompt / sentence / chunks | Sie haben Informationen. |
| givenPhrase | — |
| canonicalAnswer | Haben Sie Informationen? |
| acceptedAnswers | exact sentence |
| answerMode | transformation_text |
| answerShape | transformed_sentence |
| correctnessPolicy | exact |
| acceptedAnswerPolicy | exact_only |
| supportPolicy | scenario_visible |
| supportPresentation | english_visible_before_answer |
| supportPresentationNotes | English cue is visible before answer; repair/transform prompts are instructions, not translations. |
| planningEvidenceLabel | Core Evidence |
| evidenceType | auto_core |
| reviewGroup | rg-b1-01-statement-question-transform |
| reviewEligibilityDefault | eligible_auto_after_delay |
| skillTags | formal_question, yes_no_question, transformation |
| grammarFocus | formal statement-to-question transformation |
| vocabularyFocus | Informationen |
| redemittelFocus | none |
| communicationGoal | B1-01 course/work entry support |
| difficultyBand | entry_sentence_control |
| sourceRisk | medium |
| fallbackDecision | question-mark normalisation only if supported |
| fallbackNotes | Formal `Sie`; not second-person informal. |
| learnerFacingAllowed | yes |
| schemaNotes | Formal `Sie`; not second-person informal. |

### b1-01-statement-question-transform-vf-015-var-006

| Field | Value |
| --- | --- |
| variantId | b1-01-statement-question-transform-vf-015-var-006 |
| proposedSchemaVariantId | b1-01-statement-question-transform-vf-015-var-006 |
| parentVariantFamilyId | b1-01-statement-question-transform-vf-015 |
| sourceQAStatus | approved_as_is |
| displayModuleId | B1-01 |
| moduleKey | b1-01 |
| internalPlanningId | b1_m01_getting_started |
| moduleSlug | getting-started-work-course |
| moduleTitle | Getting started at work/course |
| levelTrack | B1 |
| cefrTarget | B1 |
| primaryLanguageStrandId | LS01 |
| secondaryLanguageStrandIds | LS09 |
| targetFamilyId | TF-B1-01-LS01-02 |
| targetId | T-B1-01-LS01-02-02 |
| variantRole | extension_survivor_variant |
| taskType | Reparatur |
| taskDepth | repair |
| practiceType | Reparatur |
| learnerCue | Fix the question. |
| prompt / sentence / chunks | Ich brauche ein Heft? |
| givenPhrase | — |
| canonicalAnswer | Brauche ich ein Heft? |
| acceptedAnswers | exact sentence |
| answerMode | repair_text |
| answerShape | repaired_sentence |
| correctnessPolicy | exact |
| acceptedAnswerPolicy | exact_only |
| supportPolicy | scenario_visible |
| supportPresentation | english_visible_before_answer |
| supportPresentationNotes | English cue is visible before answer; repair/transform prompts are instructions, not translations. |
| planningEvidenceLabel | Core Evidence |
| evidenceType | auto_core |
| reviewGroup | rg-b1-01-statement-question-transform |
| reviewEligibilityDefault | eligible_auto_after_delay |
| skillTags | yes_no_question, repair, verb_first |
| grammarFocus | yes/no question repair |
| vocabularyFocus | ein Heft |
| redemittelFocus | none |
| communicationGoal | B1-01 course/work entry support |
| difficultyBand | entry_sentence_control |
| sourceRisk | medium |
| fallbackDecision | question-mark normalisation only if supported |
| fallbackNotes | Question repair, not `brauchen` expansion. |
| learnerFacingAllowed | yes |
| schemaNotes | Question repair, not `brauchen` expansion. |

## 8. Extension Cut / Exclusion Schema Ledger

| familyOrVariantId | cut/deferred status | reason | schema ID assigned? | included in clean mapping? | replacement needed? | notes |
| --- | --- | --- | --- | --- | --- | --- |
| b1-01-hier-dort-location-vf-014 | cut_family | Too thin / too A1 / flashcard risk | NO | NO | NO | Entire family excluded. |
| b1-01-ich-bin-entry-vf-010-var-003 | cut_variant | Duplicate of existing V2 fronted-time family | NO | NO | NO | Excluded from clean mapping. |
| b1-01-haben-materials-vf-011-var-003 | cut_variant | Duplicate of existing V2/haben material variant | NO | NO | NO | Excluded from clean mapping. |
| b1-01-suchen-finden-vf-013-var-006 | cut_variant | Duplicate of existing W-question repair family | NO | NO | NO | Excluded from clean mapping. |
| b1-01-hier-dort-location-vf-014-var-001 | cut_variant | Too thin; location flashcard | NO | NO | NO | Excluded with family. |
| b1-01-hier-dort-location-vf-014-var-002 | cut_variant | Too thin; location flashcard | NO | NO | NO | Excluded with family. |
| b1-01-hier-dort-location-vf-014-var-003 | cut_variant | Artificial `dort` cue; poor value | NO | NO | NO | Excluded with family. |
| b1-01-hier-dort-location-vf-014-var-004 | cut_variant | Too thin; location flashcard | NO | NO | NO | Excluded with family. |
| b1-01-hier-dort-location-vf-014-var-005 | cut_variant | One agreement repair cannot justify family | NO | NO | NO | Excluded with family. |

## 9. Evidence / Review Integrity Ledger

| Group | Variants | Reason |
| --- | --- | --- |
| auto_core | b1-01-haben-materials-vf-011-var-004<br>b1-01-haben-materials-vf-011-var-005<br>b1-01-lernen-arbeiten-vf-012-var-001<br>b1-01-statement-question-transform-vf-015-var-001<br>b1-01-statement-question-transform-vf-015-var-002<br>b1-01-statement-question-transform-vf-015-var-003<br>b1-01-statement-question-transform-vf-015-var-004<br>b1-01-statement-question-transform-vf-015-var-005<br>b1-01-statement-question-transform-vf-015-var-006 | Fixed, low-support, answer-safe sentence-control or clear verb-choice variants. |
| auto_supported | b1-01-ich-bin-entry-vf-010-var-001<br>b1-01-ich-bin-entry-vf-010-var-002<br>b1-01-ich-bin-entry-vf-010-var-004<br>b1-01-ich-bin-entry-vf-010-var-005<br>b1-01-ich-bin-entry-vf-010-var-006<br>b1-01-haben-materials-vf-011-var-001<br>b1-01-haben-materials-vf-011-var-002<br>b1-01-haben-materials-vf-011-var-006<br>b1-01-lernen-arbeiten-vf-012-var-002<br>b1-01-lernen-arbeiten-vf-012-var-003<br>b1-01-lernen-arbeiten-vf-012-var-004<br>b1-01-lernen-arbeiten-vf-012-var-005<br>b1-01-lernen-arbeiten-vf-012-var-006<br>b1-01-suchen-finden-vf-013-var-001<br>b1-01-suchen-finden-vf-013-var-002<br>b1-01-suchen-finden-vf-013-var-003<br>b1-01-suchen-finden-vf-013-var-004<br>b1-01-suchen-finden-vf-013-var-005 | Baseline A1/A2 support, visible object/context support, or overlap with another family. |
| eligible_auto_after_delay | b1-01-haben-materials-vf-011-var-004<br>b1-01-haben-materials-vf-011-var-005<br>b1-01-lernen-arbeiten-vf-012-var-001<br>b1-01-statement-question-transform-vf-015-var-001<br>b1-01-statement-question-transform-vf-015-var-002<br>b1-01-statement-question-transform-vf-015-var-003<br>b1-01-statement-question-transform-vf-015-var-004<br>b1-01-statement-question-transform-vf-015-var-005<br>b1-01-statement-question-transform-vf-015-var-006 | Stable auto-graded variants that may become review candidates after delay. |
| weakly_eligible_after_delay | b1-01-ich-bin-entry-vf-010-var-001<br>b1-01-ich-bin-entry-vf-010-var-002<br>b1-01-ich-bin-entry-vf-010-var-004<br>b1-01-ich-bin-entry-vf-010-var-005<br>b1-01-ich-bin-entry-vf-010-var-006<br>b1-01-haben-materials-vf-011-var-001<br>b1-01-haben-materials-vf-011-var-002<br>b1-01-haben-materials-vf-011-var-006<br>b1-01-lernen-arbeiten-vf-012-var-002<br>b1-01-lernen-arbeiten-vf-012-var-003<br>b1-01-lernen-arbeiten-vf-012-var-004<br>b1-01-lernen-arbeiten-vf-012-var-005<br>b1-01-lernen-arbeiten-vf-012-var-006<br>b1-01-suchen-finden-vf-013-var-001<br>b1-01-suchen-finden-vf-013-var-002<br>b1-01-suchen-finden-vf-013-var-003<br>b1-01-suchen-finden-vf-013-var-004<br>b1-01-suchen-finden-vf-013-var-005 | Stable but weak/baseline/support-visible variants; weaker review evidence only. |
| ineligible_support_too_strong | None | No survivor is blocked solely for support strength, but support weakens evidence where noted. |
| other | None | No diagnostic, production, or external-review variants in this extension. |

## 10. Cue / Translation Alignment Ledger

| variantId | German prompt | English cue | person alignment | meaning alignment | mapping decision | import caveat, if any |
| --- | --- | --- | --- | --- | --- | --- |
| b1-01-ich-bin-entry-vf-010-var-001 | Ich ___ neu hier. | I am new here. | pass | pass | map | None |
| b1-01-ich-bin-entry-vf-010-var-002 | Ich ___ im Kurs. | I am in the course. | pass | pass | map | None |
| b1-01-ich-bin-entry-vf-010-var-004 | Ich ___ im Deutschunterricht. | I am in German class. | pass | pass | map | None |
| b1-01-ich-bin-entry-vf-010-var-005 | Chunks: `Ich / bin / neu / hier.` | Build: I am new here. | instruction | pass | map | None |
| b1-01-ich-bin-entry-vf-010-var-006 | Ich ist neu hier. | Fix the sentence. | instruction | pass | map | None |
| b1-01-haben-materials-vf-011-var-001 | Ich ___ die Unterlagen. | I have the documents. | pass | pass | map | None |
| b1-01-haben-materials-vf-011-var-002 | Ich ___ ein Heft. | I have a notebook. | pass | pass | map | None |
| b1-01-haben-materials-vf-011-var-004 | ___ Sie Informationen? | Do you have information? | formal-you pass | pass | map | None |
| b1-01-haben-materials-vf-011-var-005 | ___ Sie die Unterlagen? | Do you have the documents? | formal-you pass | pass | map | None |
| b1-01-haben-materials-vf-011-var-006 | Ich haben die Unterlagen. | Fix the sentence. | instruction | pass | map | None |
| b1-01-lernen-arbeiten-vf-012-var-001 | Ich ___ Deutsch. | I learn German. | pass | pass | map | None |
| b1-01-lernen-arbeiten-vf-012-var-002 | Im Kurs ___ ich Deutsch. | In the course I learn German. | pass | pass | map | None |
| b1-01-lernen-arbeiten-vf-012-var-003 | Heute ___ ich. | Today I work. | pass | pass | map | None |
| b1-01-lernen-arbeiten-vf-012-var-004 | Am Montag ___ ich. | On Monday I work. | pass | pass | map | None |
| b1-01-lernen-arbeiten-vf-012-var-005 | Im Deutschunterricht ___ ich Deutsch. | Choose the better verb: German class context. | instruction | pass | map | None |
| b1-01-lernen-arbeiten-vf-012-var-006 | Ich arbeite Deutsch. | Fix the sentence. | instruction | pass | map | None |
| b1-01-suchen-finden-vf-013-var-001 | Ich ___ den Kursraum. | I am looking for the course room. | pass | pass | map | None |
| b1-01-suchen-finden-vf-013-var-002 | Wo ___ ich den Kursraum? | Where do I find the course room? | pass | pass | map | None |
| b1-01-suchen-finden-vf-013-var-003 | Ich ___ die App. | I am looking for the app. | pass | pass | map | None |
| b1-01-suchen-finden-vf-013-var-004 | Wo ___ ich die App? | Where do I find the app? | pass | pass | map | None |
| b1-01-suchen-finden-vf-013-var-005 | Ich ___ die Unterlagen. | I am looking for the documents. | pass | pass | map | None |
| b1-01-statement-question-transform-vf-015-var-001 | Die App ist hier. | Turn the statement into a yes/no question. | instruction | pass | map | None |
| b1-01-statement-question-transform-vf-015-var-002 | Das Heft ist hier. | Turn the statement into a yes/no question. | instruction | pass | map | None |
| b1-01-statement-question-transform-vf-015-var-003 | Ich brauche ein Heft. | Turn the statement into a yes/no question. | instruction | pass | map | None |
| b1-01-statement-question-transform-vf-015-var-004 | Ich habe die Unterlagen. | Turn the statement into a yes/no question. | instruction | pass | map | None |
| b1-01-statement-question-transform-vf-015-var-005 | Sie haben Informationen. | Turn the statement into a formal yes/no question. | instruction | pass | map | None |
| b1-01-statement-question-transform-vf-015-var-006 | Ich brauche ein Heft? | Fix the question. | instruction | pass | map | None |

No `Ich` / “you” mismatch is present. If any appears during import, it must block the patch.

## 11. Fallback / Capitalisation / Ambiguity Ledger

| Affected variant(s) | Target being tested | Canonical answer | Fallback / ambiguity | Decision | Evidence impact | User/schema decision needed |
| --- | --- | --- | --- | --- | --- | --- |
| `b1-01-haben-materials-vf-011-var-004`; `b1-01-haben-materials-vf-011-var-005` | Formal yes/no question start | `Haben` | lowercase `haben` | Exact-only for strong evidence unless correct-with-note exists | Lowercase must not be full `auto_core` evidence | Decide in import whether correct-with-note exists. |
| `b1-01-suchen-finden-vf-013-var-001`; `b1-01-suchen-finden-vf-013-var-002` | Verb choice only | `suche` / `finde` | visible `den Kursraum` could imply accusative article evidence | Object phrase is context only | No article/case evidence | Visually mark object phrase as given context if possible. |
| `b1-01-suchen-finden-vf-013-var-003`; `b1-01-suchen-finden-vf-013-var-004` | Verb choice only | `suche` / `finde` | visible `die App` | Object phrase is context only | No article/case evidence | Visually mark object phrase as given context if possible. |
| `b1-01-suchen-finden-vf-013-var-005` | Verb choice only | `suche` | visible `die Unterlagen` | Object phrase is context only | No article/case evidence | Visually mark object phrase as given context if possible. |
| All `b1-01-statement-question-transform-vf-015` variants | Statement-to-question transformation | Full question with `?` | missing question mark | Exact preferred unless punctuation-normalised correctness exists | Missing punctuation weakens transformation evidence | Decide in import whether punctuation normalisation is supported. |

## 12. Combined B1-01 Projection After Extension

| Component | Count / status |
| --- | --- |
| Existing family count | 9 |
| Extension family count | 5 |
| Final projected family count | 14 |
| Existing variant count | 54 |
| Extension variant count | 27 |
| Final projected variant count | 81 |
| Retained single canonical items | 9 |
| Notice/concept cards | 3 |
| Cut extension families | 1 |
| Cut extension variants | 8 |

This schema addendum does not rewrite existing B1-01 families. It maps only the approved extension survivors.

## 13. Schema Issues / User Decisions Needed

| Issue | Affected item(s) | Risk | Recommended decision | Blocker status |
| --- | --- | --- | --- | --- |
| `Haben` lowercase correct-with-note | `vf-011-var-004`, `vf-011-var-005` | Lowercase sentence-start answer may be technically readable but should not be full strong evidence. | Exact-only unless app supports correct-with-note. | needs later Codex import decision |
| Question mark punctuation normalisation | All `vf-015` variants | Exact full-sentence transformation may be too strict if punctuation handling is not supported. | Prefer exact full sentence; allow punctuation-normalised only if existing grader supports it safely. | needs later Codex import decision |
| `weakly_eligible_after_delay` label support | Most baseline extension variants | App may not have this exact review label. | Map to existing weak/review-candidate semantics if needed without inflating evidence. | needs later Codex import decision |
| `transformation_text` / `transformed_sentence` support | `vf-015` variants | Existing import layer may use another answer-mode label. | Alias to existing transformation/repair answer shape during import. | needs later Codex import decision |
| Visual treatment of object phrases | `vf-013`, `vf-011` variants | Learner may think given object phrase is being tested. | Display as given context/bracketed phrase where possible. | needs later Codex import decision |
| Route placement | All 27 extension variants | B1-01 may become large if all appear in same route without pacing. | Use same B1-01 route but preserve family sibling caps; do not create separate route unless app architecture already supports it cleanly. | not blocker |
| Existing B1-01 downgrade/hiding | Existing weak families: `brauchen`, noun-capitalisation | Overbuilt B1-01 risk. | Do not hide now; keep evidence conservative and stop B1-01 after this extension. | not blocker |

## 14. Final QA Checklist

| Check | Status |
| --- | --- |
| 5 extension survivor families mapped. | Pass |
| 27 extension survivor variants mapped. | Pass |
| 1 cut family excluded. | Pass |
| 8 cut variants excluded. | Pass |
| Existing 9 B1-01 families preserved. | Pass |
| Existing 54 B1-01 variants preserved. | Pass |
| No silent row loss. | Pass |
| No app code. | Pass |
| No app-ready JSON. | Pass |
| No Codex prompt. | Pass |
| No import plan yet. | Pass |
| No B1-02. | Pass |
| No v0.81 work. | Pass |
| No copied TELC/textbook/coursebook text. | Pass |
| No runtime generation. | Pass |
| No random noun/verb combinations. | Pass |
| No generated morphology. | Pass |
| No B2. | Pass |
| No Genitive. | Pass |
| No adjective-ending traps. | Pass |
| No subordinate clauses. | Pass |
| No more `brauchen` expansion. | Pass |
| Cue/person safety preserved. | Pass |
| `Ich` never appears as “you”. | Pass |
| Sibling variants remain weak/sibling evidence only. | Pass |
| German text remains LTR. | Pass |
| Schema notes distinguish planning from app import. | Pass |

## 15. Final Verdict

`READY_FOR_EXTENSION_IMPORT_PLAN`

Exact next recommended action: create the **Ozmosis B1-01 Extension — Codex Import Plan**. It should decide how these 5 families / 27 variants are imported into the current v0.80.3.1 app line without changing storage keys or implementing unrelated v0.81 work.
