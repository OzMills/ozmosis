# Ozmosis B1-01 Extension — Six Additional Variant Families QA / Reject / Revise

Status: QA-approved extension-family set for row reconciliation and schema mapping.  
Scope: B1-01 — Getting started at work/course.  
Input: `Ozmosis B1-01 Extension — Six Additional Variant Families Draft`.  
Output file: `ozmosis_b1_m01_extension_variant_families_qa_approved_v0_1.md`.

## 1. Source Verification

| Source file/content | Available? | Used for | Reliability | Notes / caveats |
| --- | --- | --- | --- | --- |
| `Ozmosis B1-01 Extension — Six Additional Variant Families Draft` | Yes | Controlling extension draft | High | 6 proposed families, 35 proposed variants. |
| `ozmosis-v0_80_3_1.zip` | Yes | Current app package context | High | Not inspected for implementation; QA only. |
| `ozmosis_b1_m01_final_variant_family_inventory_v0_1.md` | Yes | Current 9-family B1-01 state and row integrity | High | Confirms existing B1-01 family and inventory state. |
| `ozmosis_b1_m01_variant_family_schema_mapping_v0_1.md` | Yes | Existing family IDs, target IDs, schema assumptions | High | Used to avoid duplicate family IDs and target drift. |
| `ozmosis_b1_m01_curated_variant_families_qa_approved_v0_1.md` | Yes | Prior variant-family QA constraints | High | Used for capping `brauchen`, V2, mechanics, and sibling evidence. |
| `ozmosis_phase3a_b1_m01_getting_started_qa_approved.md` | Yes | Original B1-01 QA caveats | High | Used for weak-evidence and A1/A2 caution. |
| `ozmosis_phase3_b1_m01_getting_started_draft_items.md` | Yes | Original B1-01 module target families | High | Used for B1-01 scope boundary. |
| `OZMOSIS_SOURCE_BRIEF_v0.80.3.md` | Yes | Product/evidence constraints | High | B1-first, no false mastery, static app constraints. |
| `OZMOSIS_DEVELOPMENT_ROADMAP_v0.80.3.md` | Yes | Current app/version guardrails | High | v0.80.3 completed; v0.81 remains separate. |
| TELC/Beruf/Aspekte files | Available | Structural inspiration only | Low for item text | No copied or paraphrased text used. |

## 2. Extension Draft Intake Check

| Check | Result |
| --- | --- |
| Draft file/content found | Yes |
| Expected family count | 6 |
| Actual family count | 6 |
| Expected variant count | 35 |
| Actual variant count | 35 |
| Missing / duplicated / malformed family IDs | None |
| Missing / duplicated / malformed variant IDs | None |
| Immediate blocker | None |

## 3. Batch-Level QA Summary

| Metric | Count |
| --- | --- |
| Variant families audited | 6 |
| Variants audited | 35 |
| Families approved as-is | 2 |
| Families revised and approved | 0 |
| Families approved with variant cuts | 3 |
| Families cut | 1 |
| Families deferred | 0 |
| Families needing human/tutor check | 0 |
| Variants approved as-is | 27 |
| Variants revised and approved | 0 |
| Variants cut | 8 |
| Variants deferred | 0 |
| Variants needing human/tutor check | 0 |
| Clean approved/revised families proceeding to row reconciliation/schema mapping | 5 |
| Clean approved/revised variants proceeding to row reconciliation/schema mapping | 27 |

B1-01 no longer feels too thin if these survivors are added. It should stop after this extension. The resulting family count would be 14 total: 9 existing + 5 extension families.

## 4. Issue Summary

| Issue | Severity | Affected families / variants | Decision | Required fix |
| --- | --- | --- | --- | --- |
| Too A1 / too thin | high | `b1-01-hier-dort-location-vf-014` | cut_family | Cut the entire location-adverb family; mostly here/there flashcard material. |
| Duplicate of existing V2 family | moderate | `vf-010-var-003`; `vf-011-var-003` | cut_variant | Remove fronted-time variants already handled by existing V2-family coverage. |
| Duplicate of existing W-question repair | moderate | `vf-013-var-006` | cut_variant | Existing W-question repair family already covers this error shape. |
| Hidden article/case target risk | moderate | `b1-01-suchen-finden-vf-013` | approve with caveat | Object phrases are context; do not infer accusative/article control. |
| Evidence too strong for baseline forms | moderate | `ich-bin-entry`, `haben-materials`, `lernen-arbeiten` | downgrade/keep conservative | Use `auto_supported` for weak baseline variants. |
| Cue/person mismatch | none | All survivor variants | approve | Cue alignment passes. |

## 5. Family-by-Family QA Table

| Variant family ID | Family target | Family type | Variants in draft | Family decision | Problems found | Required family-level fix | Evidence interpretation decision | ReviewGroup decision | Notes |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| b1-01-ich-bin-entry-vf-010 | Simple `sein` in course-entry state/location sentences | Type A | 6 | approve_family_with_variant_cuts | One variant duplicates existing V2 fronted-time coverage; family is useful but A1/A2 baseline. | Cut var-003. Keep evidence conservative. | Baseline `sein` control; mostly `auto_supported`. | rg-b1-01-ich-bin-entry | Keep as entry control, not B1-depth evidence. |
| b1-01-haben-materials-vf-011 | `haben` for simple course materials / availability | Type B | 6 | approve_family_with_variant_cuts | One fronted-time variant duplicates existing V2/haben material variants. | Cut var-003. Do not infer article/case control from object phrases. | Practical possession/availability; mostly `auto_supported`, formal question variants stronger. | rg-b1-01-haben-materials | Good extension if separated from `brauchen`. |
| b1-01-lernen-arbeiten-vf-012 | Distinguish course learning from simple working | Type B | 6 | approve_family_as_is | Minor work-topic drift risk, but variants stay generic. | None. | Simple present-tense verb contrast; no profession/job-search content. | rg-b1-01-lernen-arbeiten | Useful B1-01 bridge between course and work. |
| b1-01-suchen-finden-vf-013 | Distinguish 'look for' and 'find' in course orientation | Type B | 6 | approve_family_with_variant_cuts | One repair duplicates existing W-question repair. Object phrases may hide accusative article risk. | Cut var-006. Mark object phrases as context only. | Orientation verb-choice contrast; no case/article evidence. | rg-b1-01-suchen-finden | Good extension if evidence is not overclaimed. |
| b1-01-hier-dort-location-vf-014 | Simple location adverbs | Type B | 5 | cut_family | Too thin, too A1, too close to flashcard/location filler. | Cut entire family. | Excluded. | — | Do not create a `hier/dort` family in B1-01. |
| b1-01-statement-question-transform-vf-015 | Transform simple statements into yes/no questions | Type B | 6 | approve_family_as_is | None serious. | None. | Sentence-control transformation evidence; stronger than recognition. | rg-b1-01-statement-question-transform | Strongest proposed extension; keep all variants. |

## 6. Variant-by-Variant QA Table

| Variant ID | Family ID | Draft target answer | Severity | Decision | Problems found | Required fix | Revised variant if applicable | EvidenceType decision | SupportPolicy decision | Notes |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| b1-01-ich-bin-entry-vf-010-var-001 | vf-010 | bin | low | approve_variant_as_is | A1 baseline but useful. | — | — | auto_supported | scenario_visible | Keep. |
| b1-01-ich-bin-entry-vf-010-var-002 | vf-010 | bin | low | approve_variant_as_is | A1 baseline but useful. | — | — | auto_supported | scenario_visible | Keep. |
| b1-01-ich-bin-entry-vf-010-var-003 | vf-010 | bin | moderate | cut_variant | Duplicates existing V2/fronted-time family. | Cut. | — | excluded | scenario_visible | Existing V2 family already covers `Heute bin ich...`. |
| b1-01-ich-bin-entry-vf-010-var-004 | vf-010 | bin | low | approve_variant_as_is | Useful course-entry state. | — | — | auto_supported | scenario_visible | Keep. |
| b1-01-ich-bin-entry-vf-010-var-005 | vf-010 | Ich bin neu hier. | low | approve_variant_as_is | Short and useful. | — | — | auto_supported | scenario_visible | Keep. |
| b1-01-ich-bin-entry-vf-010-var-006 | vf-010 | Ich bin neu hier. | low | approve_variant_as_is | Plausible learner error. | — | — | auto_supported | scenario_visible | Keep. |
| b1-01-haben-materials-vf-011-var-001 | vf-011 | habe | low | approve_variant_as_is | Useful material possession. | — | — | auto_supported | scenario_visible | Object is context. |
| b1-01-haben-materials-vf-011-var-002 | vf-011 | habe | low | approve_variant_as_is | Useful material possession. | — | — | auto_supported | scenario_visible | Object is context. |
| b1-01-haben-materials-vf-011-var-003 | vf-011 | habe | moderate | cut_variant | Duplicates existing V2 time/material variants. | Cut. | — | excluded | scenario_visible | Existing V2 family already includes fronted-time + material possession. |
| b1-01-haben-materials-vf-011-var-004 | vf-011 | Haben | low | approve_variant_as_is | Useful formal yes/no availability question. | — | — | auto_core | scenario_visible | Sentence-start capitalisation caveat. |
| b1-01-haben-materials-vf-011-var-005 | vf-011 | Haben | low | approve_variant_as_is | Useful formal yes/no availability question. | — | — | auto_core | scenario_visible | Sentence-start capitalisation caveat. |
| b1-01-haben-materials-vf-011-var-006 | vf-011 | Ich habe die Unterlagen. | low | approve_variant_as_is | Plausible conjugation repair. | — | — | auto_supported | scenario_visible | Keep. |
| b1-01-lernen-arbeiten-vf-012-var-001 | vf-012 | lerne | low | approve_variant_as_is | Useful baseline. | — | — | auto_core | scenario_visible | Keep. |
| b1-01-lernen-arbeiten-vf-012-var-002 | vf-012 | lerne | medium | approve_variant_as_is | Some V2 overlap, but target is activity contrast. | — | — | auto_supported | scenario_visible | Do not overcount as V2 evidence. |
| b1-01-lernen-arbeiten-vf-012-var-003 | vf-012 | arbeite | low | approve_variant_as_is | Generic work activity, no profession drift. | — | — | auto_supported | scenario_visible | Keep. |
| b1-01-lernen-arbeiten-vf-012-var-004 | vf-012 | arbeite | low | approve_variant_as_is | Generic work activity, no profession drift. | — | — | auto_supported | scenario_visible | Keep. |
| b1-01-lernen-arbeiten-vf-012-var-005 | vf-012 | lerne | medium | approve_variant_as_is | Contrast cue is clear. | — | — | auto_supported | scenario_visible | Keep. |
| b1-01-lernen-arbeiten-vf-012-var-006 | vf-012 | Ich lerne Deutsch. | medium | approve_variant_as_is | Error is plausible enough for course-entry context. | — | — | auto_supported | scenario_visible | Keep. |
| b1-01-suchen-finden-vf-013-var-001 | vf-013 | suche | medium | approve_variant_as_is | Hidden accusative risk from `den Kursraum`. | Keep object as given context. | — | auto_supported | scenario_visible | Do not infer article/case skill. |
| b1-01-suchen-finden-vf-013-var-002 | vf-013 | finde | medium | approve_variant_as_is | Some overlap with W-question family. | Keep because target is `suchen` vs `finden`. | — | auto_supported | scenario_visible | Do not count as new W-question proof. |
| b1-01-suchen-finden-vf-013-var-003 | vf-013 | suche | low | approve_variant_as_is | Clear. | — | — | auto_supported | scenario_visible | Keep. |
| b1-01-suchen-finden-vf-013-var-004 | vf-013 | finde | medium | approve_variant_as_is | Some overlap with W-question family. | Keep as verb-contrast evidence only. | — | auto_supported | scenario_visible | Keep. |
| b1-01-suchen-finden-vf-013-var-005 | vf-013 | suche | low | approve_variant_as_is | Clear orientation verb use. | — | — | auto_supported | scenario_visible | Keep. |
| b1-01-suchen-finden-vf-013-var-006 | vf-013 | Wo finde ich die App? | moderate | cut_variant | Duplicate of existing W-question repair family. | Cut. | — | excluded | scenario_visible | Already covered by `b1-01-w-question-repair-vf-008`. |
| b1-01-hier-dort-location-vf-014-var-001 | vf-014 | hier | high | cut_variant | Too thin; location flashcard. | Cut. | — | excluded | scenario_visible | Weak learning value. |
| b1-01-hier-dort-location-vf-014-var-002 | vf-014 | hier | high | cut_variant | Too thin; location flashcard. | Cut. | — | excluded | scenario_visible | Weak learning value. |
| b1-01-hier-dort-location-vf-014-var-003 | vf-014 | dort | high | cut_variant | Artificial cue; poor value. | Cut. | — | excluded | scenario_visible | `over there` is too forced for B1-01. |
| b1-01-hier-dort-location-vf-014-var-004 | vf-014 | hier | high | cut_variant | Too thin; location flashcard. | Cut. | — | excluded | scenario_visible | Weak learning value. |
| b1-01-hier-dort-location-vf-014-var-005 | vf-014 | Die Unterlagen sind hier. | moderate | cut_variant | Useful agreement repair, but one survivor cannot justify a whole family. | Cut or re-home later as agreement repair. | — | excluded | scenario_visible | Do not keep this family for one item. |
| b1-01-statement-question-transform-vf-015-var-001 | vf-015 | Ist die App hier? | low | approve_variant_as_is | Strong simple transformation. | — | — | auto_core | scenario_visible | Keep. |
| b1-01-statement-question-transform-vf-015-var-002 | vf-015 | Ist das Heft hier? | low | approve_variant_as_is | Strong simple transformation. | — | — | auto_core | scenario_visible | Keep. |
| b1-01-statement-question-transform-vf-015-var-003 | vf-015 | Brauche ich ein Heft? | medium | approve_variant_as_is | Uses `brauchen`, but target is transformation. | Keep with evidence tied to question transformation. | — | auto_core | scenario_visible | Do not count as `brauchen` expansion. |
| b1-01-statement-question-transform-vf-015-var-004 | vf-015 | Habe ich die Unterlagen? | low | approve_variant_as_is | Strong transformation. | — | — | auto_core | scenario_visible | Keep. |
| b1-01-statement-question-transform-vf-015-var-005 | vf-015 | Haben Sie Informationen? | low | approve_variant_as_is | Useful formal question transformation. | — | — | auto_core | scenario_visible | Keep. |
| b1-01-statement-question-transform-vf-015-var-006 | vf-015 | Brauche ich ein Heft? | medium | approve_variant_as_is | Repair uses `brauchen`, but target is question order. | Keep with evidence tied to repair/transformation. | — | auto_core | scenario_visible | Keep. |

## 7. Clean Approved / Revised Variant Families


### b1-01-ich-bin-entry-vf-010

| Field | Value |
| --- | --- |
| proposedVariantFamilyId | b1-01-ich-bin-entry-vf-010 |
| family target | Simple `sein` in course-entry state/location sentences |
| family type | Type A |
| targetFamilyId | `TF-B1-01-LS01-01` / `TF-B1-01-LS01-02` / `TF-B1-01-LS08-01` as mapped by family |
| targetId | Mapped to the relevant B1-01 target ID during schema mapping |
| taskTypes supported | Luecke, Reparatur, Satzbau |
| evidence interpretation | Baseline `sein` control; mostly `auto_supported`. |
| reviewGroup recommendation | rg-b1-01-ich-bin-entry |
| supportPolicy default | `scenario_visible` |
| max same-session evidence | 1 |
| QA status | approve_family_with_variant_cuts |
| QA notes | Keep as entry control, not B1-depth evidence. |


| variantId | learner cue | prompt / sentence / chunks | given phrase if any | target answer | accepted answers | feedback micro-rule | taskType | taskDepth | evidenceType recommendation | supportPolicy | cueAlignmentCheck | QA status | QA notes |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| b1-01-ich-bin-entry-vf-010-var-001 | I am new here. | Ich ___ neu hier. | — | bin | bin | `Ich bin` is the first-person form of `sein`. | Luecke | cloze | auto_supported | scenario_visible | pass | approve_variant_as_is | Keep. |
| b1-01-ich-bin-entry-vf-010-var-002 | I am in the course. | Ich ___ im Kurs. | — | bin | bin | Use `bin` with `ich`: `Ich bin...` | Luecke | cloze | auto_supported | scenario_visible | pass | approve_variant_as_is | Keep. |
| b1-01-ich-bin-entry-vf-010-var-004 | I am in German class. | Ich ___ im Deutschunterricht. | — | bin | bin | `Ich bin...` gives a simple state or location. | Luecke | cloze | auto_supported | scenario_visible | pass | approve_variant_as_is | Keep. |
| b1-01-ich-bin-entry-vf-010-var-005 | Build: I am new here. | Chunks: `Ich / bin / neu / hier.` | — | Ich bin neu hier. | exact sentence | Keep `bin` directly after `Ich` in the basic statement. | Satzbau | sentence_building | auto_supported | scenario_visible | pass | approve_variant_as_is | Keep. |
| b1-01-ich-bin-entry-vf-010-var-006 | Fix the sentence. | Ich ist neu hier. | — | Ich bin neu hier. | exact sentence | `Ich` uses `bin`, not `ist`. | Reparatur | repair | auto_supported | scenario_visible | pass | approve_variant_as_is | Keep. |

### b1-01-haben-materials-vf-011

| Field | Value |
| --- | --- |
| proposedVariantFamilyId | b1-01-haben-materials-vf-011 |
| family target | `haben` for simple course materials / availability |
| family type | Type B |
| targetFamilyId | `TF-B1-01-LS01-01` / `TF-B1-01-LS01-02` / `TF-B1-01-LS08-01` as mapped by family |
| targetId | Mapped to the relevant B1-01 target ID during schema mapping |
| taskTypes supported | Luecke, Reparatur |
| evidence interpretation | Practical possession/availability; mostly `auto_supported`, formal question variants stronger. |
| reviewGroup recommendation | rg-b1-01-haben-materials |
| supportPolicy default | `scenario_visible` |
| max same-session evidence | 1 |
| QA status | approve_family_with_variant_cuts |
| QA notes | Good extension if separated from `brauchen`. |


| variantId | learner cue | prompt / sentence / chunks | given phrase if any | target answer | accepted answers | feedback micro-rule | taskType | taskDepth | evidenceType recommendation | supportPolicy | cueAlignmentCheck | QA status | QA notes |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| b1-01-haben-materials-vf-011-var-001 | I have the documents. | Ich ___ die Unterlagen. | [die Unterlagen] | habe | habe | `Ich habe...` means “I have...”. | Luecke | cloze | auto_supported | scenario_visible | pass | approve_variant_as_is | Object is context. |
| b1-01-haben-materials-vf-011-var-002 | I have a notebook. | Ich ___ ein Heft. | [ein Heft] | habe | habe | Use `habe` with `ich`. | Luecke | cloze | auto_supported | scenario_visible | pass | approve_variant_as_is | Object is context. |
| b1-01-haben-materials-vf-011-var-004 | Do you have information? | ___ Sie Informationen? | [Informationen] | Haben | Haben; lowercase only if correct-with-note supported | Yes/no questions start with the finite verb. | Luecke | cloze | auto_core | scenario_visible | pass | approve_variant_as_is | Sentence-start capitalisation caveat. |
| b1-01-haben-materials-vf-011-var-005 | Do you have the documents? | ___ Sie die Unterlagen? | [die Unterlagen] | Haben | Haben; lowercase only if correct-with-note supported | Formal yes/no question: `Haben Sie...?` | Luecke | cloze | auto_core | scenario_visible | pass | approve_variant_as_is | Sentence-start capitalisation caveat. |
| b1-01-haben-materials-vf-011-var-006 | Fix the sentence. | Ich haben die Unterlagen. | — | Ich habe die Unterlagen. | exact sentence | `Ich` uses `habe`, not `haben`. | Reparatur | repair | auto_supported | scenario_visible | pass | approve_variant_as_is | Keep. |

### b1-01-lernen-arbeiten-vf-012

| Field | Value |
| --- | --- |
| proposedVariantFamilyId | b1-01-lernen-arbeiten-vf-012 |
| family target | Distinguish course learning from simple working |
| family type | Type B |
| targetFamilyId | `TF-B1-01-LS01-01` / `TF-B1-01-LS01-02` / `TF-B1-01-LS08-01` as mapped by family |
| targetId | Mapped to the relevant B1-01 target ID during schema mapping |
| taskTypes supported | Kontrast, Luecke, Reparatur |
| evidence interpretation | Simple present-tense verb contrast; no profession/job-search content. |
| reviewGroup recommendation | rg-b1-01-lernen-arbeiten |
| supportPolicy default | `scenario_visible` |
| max same-session evidence | 1 |
| QA status | approve_family_as_is |
| QA notes | Useful B1-01 bridge between course and work. |


| variantId | learner cue | prompt / sentence / chunks | given phrase if any | target answer | accepted answers | feedback micro-rule | taskType | taskDepth | evidenceType recommendation | supportPolicy | cueAlignmentCheck | QA status | QA notes |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| b1-01-lernen-arbeiten-vf-012-var-001 | I learn German. | Ich ___ Deutsch. | [Deutsch] | lerne | lerne | `lernen` fits learning a language. | Luecke | cloze | auto_core | scenario_visible | pass | approve_variant_as_is | Keep. |
| b1-01-lernen-arbeiten-vf-012-var-002 | In the course I learn German. | Im Kurs ___ ich Deutsch. | [Deutsch] | lerne | lerne | After a fronted place phrase, the verb comes before `ich`. | Luecke | cloze | auto_supported | scenario_visible | pass | approve_variant_as_is | Do not overcount as V2 evidence. |
| b1-01-lernen-arbeiten-vf-012-var-003 | Today I work. | Heute ___ ich. | — | arbeite | arbeite | `arbeiten` means “to work”. | Luecke | cloze | auto_supported | scenario_visible | pass | approve_variant_as_is | Keep. |
| b1-01-lernen-arbeiten-vf-012-var-004 | On Monday I work. | Am Montag ___ ich. | — | arbeite | arbeite | After `Am Montag`, the verb stays in position 2. | Luecke | cloze | auto_supported | scenario_visible | pass | approve_variant_as_is | Keep. |
| b1-01-lernen-arbeiten-vf-012-var-005 | Choose the better verb: German class context. | Im Deutschunterricht ___ ich Deutsch. | — | lerne | lerne | In class/course context, `lerne` fits German. | Kontrast | contrast | auto_supported | scenario_visible | pass | approve_variant_as_is | Keep. |
| b1-01-lernen-arbeiten-vf-012-var-006 | Fix the sentence. | Ich arbeite Deutsch. | — | Ich lerne Deutsch. | exact sentence | For a language, use `Deutsch lernen`. | Reparatur | repair | auto_supported | scenario_visible | pass | approve_variant_as_is | Keep. |

### b1-01-suchen-finden-vf-013

| Field | Value |
| --- | --- |
| proposedVariantFamilyId | b1-01-suchen-finden-vf-013 |
| family target | Distinguish 'look for' and 'find' in course orientation |
| family type | Type B |
| targetFamilyId | `TF-B1-01-LS01-01` / `TF-B1-01-LS01-02` / `TF-B1-01-LS08-01` as mapped by family |
| targetId | Mapped to the relevant B1-01 target ID during schema mapping |
| taskTypes supported | Luecke |
| evidence interpretation | Orientation verb-choice contrast; no case/article evidence. |
| reviewGroup recommendation | rg-b1-01-suchen-finden |
| supportPolicy default | `scenario_visible` |
| max same-session evidence | 1 |
| QA status | approve_family_with_variant_cuts |
| QA notes | Good extension if evidence is not overclaimed. |


| variantId | learner cue | prompt / sentence / chunks | given phrase if any | target answer | accepted answers | feedback micro-rule | taskType | taskDepth | evidenceType recommendation | supportPolicy | cueAlignmentCheck | QA status | QA notes |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| b1-01-suchen-finden-vf-013-var-001 | I am looking for the course room. | Ich ___ den Kursraum. | [den Kursraum] | suche | suche | `suchen` means “to look for”. | Luecke | cloze | auto_supported | scenario_visible | pass | approve_variant_as_is | Do not infer article/case skill. |
| b1-01-suchen-finden-vf-013-var-002 | Where do I find the course room? | Wo ___ ich den Kursraum? | [den Kursraum] | finde | finde | `Wo finde ich...?` asks where to find something. | Luecke | cloze | auto_supported | scenario_visible | pass | approve_variant_as_is | Do not count as new W-question proof. |
| b1-01-suchen-finden-vf-013-var-003 | I am looking for the app. | Ich ___ die App. | [die App] | suche | suche | Use `suche` when you are looking for something. | Luecke | cloze | auto_supported | scenario_visible | pass | approve_variant_as_is | Keep. |
| b1-01-suchen-finden-vf-013-var-004 | Where do I find the app? | Wo ___ ich die App? | [die App] | finde | finde | `finden` is used in `Wo finde ich...?` | Luecke | cloze | auto_supported | scenario_visible | pass | approve_variant_as_is | Keep. |
| b1-01-suchen-finden-vf-013-var-005 | I am looking for the documents. | Ich ___ die Unterlagen. | [die Unterlagen] | suche | suche | `Ich suche...` = “I am looking for...”. | Luecke | cloze | auto_supported | scenario_visible | pass | approve_variant_as_is | Keep. |

### b1-01-statement-question-transform-vf-015

| Field | Value |
| --- | --- |
| proposedVariantFamilyId | b1-01-statement-question-transform-vf-015 |
| family target | Transform simple statements into yes/no questions |
| family type | Type B |
| targetFamilyId | `TF-B1-01-LS01-01` / `TF-B1-01-LS01-02` / `TF-B1-01-LS08-01` as mapped by family |
| targetId | Mapped to the relevant B1-01 target ID during schema mapping |
| taskTypes supported | Reparatur, Umformen |
| evidence interpretation | Sentence-control transformation evidence; stronger than recognition. |
| reviewGroup recommendation | rg-b1-01-statement-question-transform |
| supportPolicy default | `scenario_visible` |
| max same-session evidence | 1 |
| QA status | approve_family_as_is |
| QA notes | Strongest proposed extension; keep all variants. |


| variantId | learner cue | prompt / sentence / chunks | given phrase if any | target answer | accepted answers | feedback micro-rule | taskType | taskDepth | evidenceType recommendation | supportPolicy | cueAlignmentCheck | QA status | QA notes |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| b1-01-statement-question-transform-vf-015-var-001 | Turn the statement into a yes/no question. | Die App ist hier. | — | Ist die App hier? | exact sentence | Yes/no questions start with the finite verb. | Umformen | transformation | auto_core | scenario_visible | pass | approve_variant_as_is | Keep. |
| b1-01-statement-question-transform-vf-015-var-002 | Turn the statement into a yes/no question. | Das Heft ist hier. | — | Ist das Heft hier? | exact sentence | Move `ist` to the front. | Umformen | transformation | auto_core | scenario_visible | pass | approve_variant_as_is | Keep. |
| b1-01-statement-question-transform-vf-015-var-003 | Turn the statement into a yes/no question. | Ich brauche ein Heft. | — | Brauche ich ein Heft? | exact sentence | Move `brauche` to the front and keep `ich` after it. | Umformen | transformation | auto_core | scenario_visible | pass | approve_variant_as_is | Do not count as `brauchen` expansion. |
| b1-01-statement-question-transform-vf-015-var-004 | Turn the statement into a yes/no question. | Ich habe die Unterlagen. | — | Habe ich die Unterlagen? | exact sentence | Move `habe` to the front. | Umformen | transformation | auto_core | scenario_visible | pass | approve_variant_as_is | Keep. |
| b1-01-statement-question-transform-vf-015-var-005 | Turn the statement into a formal yes/no question. | Sie haben Informationen. | — | Haben Sie Informationen? | exact sentence | In a formal yes/no question, `Haben` comes before `Sie`. | Umformen | transformation | auto_core | scenario_visible | pass | approve_variant_as_is | Keep. |
| b1-01-statement-question-transform-vf-015-var-006 | Fix the question. | Ich brauche ein Heft? | — | Brauche ich ein Heft? | exact sentence | A yes/no question starts with the verb. | Reparatur | repair | auto_core | scenario_visible | pass | approve_variant_as_is | Keep. |

## 8. Cut / Deferred / Human-Check Ledger

| Family / variant ID | Final status | Reason | Replacement needed? | Notes |
| --- | --- | --- | --- | --- |
| b1-01-ich-bin-entry-vf-010-var-003 | cut_variant | Duplicates existing V2/fronted-time family. | No | Existing V2 family already covers `Heute bin ich...`. |
| b1-01-haben-materials-vf-011-var-003 | cut_variant | Duplicates existing V2 time/material variants. | No | Existing V2 family already includes fronted-time + material possession. |
| b1-01-suchen-finden-vf-013-var-006 | cut_variant | Duplicate of existing W-question repair family. | No | Already covered by `b1-01-w-question-repair-vf-008`. |
| b1-01-hier-dort-location-vf-014-var-001 | cut_variant | Too thin; location flashcard. | No | Weak learning value. |
| b1-01-hier-dort-location-vf-014-var-002 | cut_variant | Too thin; location flashcard. | No | Weak learning value. |
| b1-01-hier-dort-location-vf-014-var-003 | cut_variant | Artificial cue; poor value. | No | `over there` is too forced for B1-01. |
| b1-01-hier-dort-location-vf-014-var-004 | cut_variant | Too thin; location flashcard. | No | Weak learning value. |
| b1-01-hier-dort-location-vf-014-var-005 | cut_variant | Useful agreement repair, but one survivor cannot justify a whole family. | No | Do not keep this family for one item. |
| b1-01-hier-dort-location-vf-014 | cut_family | Too thin / too A1 / flashcard risk | No | Entire family cut. |

## 9. Evidence Inflation Safeguards

| Variant family | Same-session evidence risk | Review grouping rule | Evidence cap recommendation | Notes |
| --- | --- | --- | --- | --- |
| `b1-01-ich-bin-entry-vf-010` | Medium | `rg-b1-01-ich-bin-entry` | Max 1 same-session family evidence | Baseline A1/A2 remains weak evidence. |
| `b1-01-haben-materials-vf-011` | Medium | `rg-b1-01-haben-materials` | Max 1 same-session family evidence | No article/case proof from object phrases. |
| `b1-01-lernen-arbeiten-vf-012` | Medium | `rg-b1-01-lernen-arbeiten` | Max 1 same-session family evidence | Do not drift into professions/work duties. |
| `b1-01-suchen-finden-vf-013` | Medium | `rg-b1-01-suchen-finden` | Max 1 same-session family evidence | Verb-choice contrast only, not W-question proof. |
| `b1-01-statement-question-transform-vf-015` | Medium | `rg-b1-01-statement-question-transform` | Max 1 same-session family evidence | Strong sentence-control evidence, but not B1 readiness. |

Confirmed: same-family variants are sibling evidence; family attempts are not independent proof; weak A1/A2 baseline remains weak evidence; `brauchen` is not further expanded; B1-01 still does not imply B1 readiness.

## 10. Cue / Translation Alignment QA

| Variant ID | German prompt | English cue | Person alignment | Meaning alignment | Decision |
| --- | --- | --- | --- | --- | --- |
| b1-01-ich-bin-entry-vf-010-var-001 | Ich ___ neu hier. | I am new here. | pass | pass | keep |
| b1-01-ich-bin-entry-vf-010-var-002 | Ich ___ im Kurs. | I am in the course. | pass | pass | keep |
| b1-01-ich-bin-entry-vf-010-var-004 | Ich ___ im Deutschunterricht. | I am in German class. | pass | pass | keep |
| b1-01-ich-bin-entry-vf-010-var-005 | Chunks: `Ich / bin / neu / hier.` | Build: I am new here. | instruction | pass | keep |
| b1-01-ich-bin-entry-vf-010-var-006 | Ich ist neu hier. | Fix the sentence. | instruction | pass | keep |
| b1-01-haben-materials-vf-011-var-001 | Ich ___ die Unterlagen. | I have the documents. | pass | pass | keep |
| b1-01-haben-materials-vf-011-var-002 | Ich ___ ein Heft. | I have a notebook. | pass | pass | keep |
| b1-01-haben-materials-vf-011-var-004 | ___ Sie Informationen? | Do you have information? | pass | pass | keep |
| b1-01-haben-materials-vf-011-var-005 | ___ Sie die Unterlagen? | Do you have the documents? | pass | pass | keep |
| b1-01-haben-materials-vf-011-var-006 | Ich haben die Unterlagen. | Fix the sentence. | instruction | pass | keep |
| b1-01-lernen-arbeiten-vf-012-var-001 | Ich ___ Deutsch. | I learn German. | pass | pass | keep |
| b1-01-lernen-arbeiten-vf-012-var-002 | Im Kurs ___ ich Deutsch. | In the course I learn German. | pass | pass | keep |
| b1-01-lernen-arbeiten-vf-012-var-003 | Heute ___ ich. | Today I work. | pass | pass | keep |
| b1-01-lernen-arbeiten-vf-012-var-004 | Am Montag ___ ich. | On Monday I work. | pass | pass | keep |
| b1-01-lernen-arbeiten-vf-012-var-005 | Im Deutschunterricht ___ ich Deutsch. | Choose the better verb: German class context. | instruction | pass | keep |
| b1-01-lernen-arbeiten-vf-012-var-006 | Ich arbeite Deutsch. | Fix the sentence. | instruction | pass | keep |
| b1-01-suchen-finden-vf-013-var-001 | Ich ___ den Kursraum. | I am looking for the course room. | pass | pass | keep |
| b1-01-suchen-finden-vf-013-var-002 | Wo ___ ich den Kursraum? | Where do I find the course room? | pass | pass | keep |
| b1-01-suchen-finden-vf-013-var-003 | Ich ___ die App. | I am looking for the app. | pass | pass | keep |
| b1-01-suchen-finden-vf-013-var-004 | Wo ___ ich die App? | Where do I find the app? | pass | pass | keep |
| b1-01-suchen-finden-vf-013-var-005 | Ich ___ die Unterlagen. | I am looking for the documents. | pass | pass | keep |
| b1-01-statement-question-transform-vf-015-var-001 | Die App ist hier. | Turn the statement into a yes/no question. | instruction | pass | keep |
| b1-01-statement-question-transform-vf-015-var-002 | Das Heft ist hier. | Turn the statement into a yes/no question. | instruction | pass | keep |
| b1-01-statement-question-transform-vf-015-var-003 | Ich brauche ein Heft. | Turn the statement into a yes/no question. | instruction | pass | keep |
| b1-01-statement-question-transform-vf-015-var-004 | Ich habe die Unterlagen. | Turn the statement into a yes/no question. | instruction | pass | keep |
| b1-01-statement-question-transform-vf-015-var-005 | Sie haben Informationen. | Turn the statement into a formal yes/no question. | instruction | pass | keep |
| b1-01-statement-question-transform-vf-015-var-006 | Ich brauche ein Heft? | Fix the question. | instruction | pass | keep |

## 11. Fallback / Capitalisation / Ambiguity Ledger

| Variant ID | Issue | Canonical answer | Fallback / ambiguity | Decision | Evidence impact | Schema/import caveat |
| --- | --- | --- | --- | --- | --- | --- |
| `b1-01-haben-materials-vf-011-var-004` | Sentence-start capitalisation | `Haben` | `haben` | Exact for strong evidence; correct-with-note only if supported | Lowercase should not be full auto_core | Import must preserve canonical answer. |
| `b1-01-haben-materials-vf-011-var-005` | Sentence-start capitalisation | `Haben` | `haben` | Exact for strong evidence; correct-with-note only if supported | Lowercase should not be full auto_core | Import must preserve canonical answer. |
| `b1-01-suchen-finden-vf-013-var-001` | Article/case hidden risk | `suche` | Object phrase `den Kursraum` visible | Approve with caveat | Do not infer accusative/article control | Given object is context only. |
| `b1-01-suchen-finden-vf-013-var-002` | Article/case hidden risk | `finde` | Object phrase `den Kursraum` visible | Approve with caveat | Do not infer accusative/article control | Given object is context only. |
| `b1-01-statement-question-transform-vf-015-var-001..006` | Punctuation / transformation | Full question with `?` | Missing `?` | Exact preferred | Punctuation is part of transformation | Import should enforce full sentence if possible. |

## 12. Mobile UX QA

| Family | Sentence length OK? | One blank? | Typing burden | Cognitive load | Bus-ride fit | Recommendation |
| --- | --- | --- | --- | --- | --- | --- |
| `b1-01-ich-bin-entry-vf-010` | Yes | Mostly | Low | Low | Strong | Keep. |
| `b1-01-haben-materials-vf-011` | Yes | Yes | Low | Low-medium | Strong | Keep. |
| `b1-01-lernen-arbeiten-vf-012` | Yes | Yes | Low | Medium | Strong | Keep. |
| `b1-01-suchen-finden-vf-013` | Yes | Yes | Low | Medium | Strong | Keep. |
| `b1-01-statement-question-transform-vf-015` | Yes | No, transformation | Medium | Medium | Acceptable | Keep, but avoid long batches. |

## 13. Final Survivor Distribution

| Survivor families by targetFamilyId | Family count |
| --- | --- |
| `TF-B1-01-LS01-01` | 2 |
| `TF-B1-01-LS08-01` | 1 |
| `TF-B1-01-LS01-02` | 2 |


| Survivor variants by targetFamilyId | Variant count |
| --- | --- |
| `TF-B1-01-LS01-01` | 11 |
| `TF-B1-01-LS08-01` | 5 |
| `TF-B1-01-LS01-02` | 11 |


| Survivor variants by taskType | Count |
| --- | --- |
| Luecke | 19 |
| Satzbau | 1 |
| Reparatur | 3 |
| Kontrast | 1 |
| Umformen | 5 |


| Survivor variants by evidenceType recommendation | Count |
| --- | --- |
| auto_core | 8 |
| auto_supported | 19 |

Final B1-01 family count if added to the existing 9: **14**. This is still pedagogically defensible, but only if B1-01 stops after this extension. Do not add a 15th family unless a later audit identifies a specific real gap.

## 14. Final QA Checklist

| Check | Status |
| --- | --- |
| All 6 proposed families audited | Pass |
| All proposed variants audited | Pass |
| Cut/deferred/human-check variants excluded from clean survivor list | Pass |
| No app code / no app-ready JSON / no Codex prompt | Pass |
| No B1-02 / no v0.81 work | Pass |
| No notice cards / no lesson cards | Pass |
| No copied source text | Pass |
| No runtime generation / no random noun-verb combinations / no generated morphology | Pass |
| No B2 / no Genitive / no adjective-ending traps / no subordinate clauses | Pass |
| No more `brauchen` expansion | Pass |
| English cues align with German person | Pass |
| `Ich` never appears as “you” | Pass |
| Sibling variants are weak/sibling evidence only | Pass |
| German text remains LTR | Pass |
| Clean survivor set ready for row reconciliation/schema mapping | Pass |

## 15. Final Verdict

`READY_FOR_EXTENSION_ROW_RECONCILIATION`

Exact next recommended action: create the **B1-01 Extension Row Reconciliation / Final Inventory Addendum** before schema mapping or Codex work.
