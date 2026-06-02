# Ozmosis B1-01 Curated Variant Families — Phase QA / Reject / Revise

Status: QA-approved variant-family set for schema mapping.  
Scope: B1-01 — Getting started at work/course.  
Output file: `ozmosis_b1_m01_curated_variant_families_qa_approved_v0_1.md`.

## 1. Source Verification

| Source file/content | Available? | Used for | Reliability | Notes / caveats |
| --- | --- | --- | --- | --- |
| ozmosis_b1_m01_curated_variant_families_draft_v0_1.md | Yes | Draft families and variants | High | Controlling source for this QA pass. The file states 9 families and “expected” 62 variants, but the actual variant rows in Section 5 total 60. |
| ozmosis_b1_m01_total_inventory_after_topup_phase3a.md | Yes | Current B1-01 inventory | High | Used for current 70-piece / 67 practice-production / 3 notice baseline. |
| ozmosis_b1_m01_vocab_activity_coverage_audit.md | Yes | Coverage and over-testing cautions | High | Used to cap brauchen, V2 repetition, and mechanics evidence. |
| ozmosis_b1_m01_topup_phase3a_qa_approved.md | Yes | Top-up survivor and cut context | High | Used to avoid reviving weak items. |
| ozmosis_phase3a_b1_m01_getting_started_qa_approved.md | Yes | Original Phase 3A caveats | High | Used for original quality risks: thin recognition, lower-case noun fallbacks, production overclaiming. |
| ozmosis_phase3_b1_m01_getting_started_draft_items.md | Yes | Original B1-01 target-family design | High | Used for module boundaries and deferred scope. |
| OZMOSIS_SOURCE_BRIEF_v0.80.2.md | Yes | Product/evidence constraints | High | B1-first, no false mastery, static-app constraints. |
| OZMOSIS_DEVELOPMENT_ROADMAP_v0.80.2.md | Yes | Architecture guardrails | High | Static browser app, no backend/API/runtime AI, preserve storage and LTR German. |
| TELC/Beruf/Aspekte files | Available | Structural inspiration only | Low for item text | No copied text used. |
| ozmosis_controlled_frame_slot_variant_system_v0_1.md | Not found as source file | Background concept only | Medium | Concept exists in chat context but was not used as a controlling file. |

## 2. Variant Draft Intake Check

| Check | Result |
| --- | --- |
| Draft file found | Yes |
| Family count found | 9 |
| Variant rows found | 60 |
| Expected family count | 9 |
| Expected variant count stated by draft | 62 |
| Discrepancy | The draft summary says 62 variants, but Section 5 contains 60 actual variant rows. This QA audits the 60 concrete rows. |
| Malformed IDs | None found |
| Duplicate variant IDs | None in Section 5 variant rows |
| Immediate blocker | None |

## 3. Batch-Level QA Summary

| Metric | Count |
| --- | --- |
| Variant families audited | 9 |
| Variants audited | 60 |
| Families approved as-is | 4 |
| Families revised and approved | 3 |
| Families approved with variant cuts | 2 |
| Families cut | 0 |
| Families deferred | 0 |
| Families needing human/tutor check | 0 |
| Variants approved as-is | 51 |
| Variants revised and approved | 3 |
| Variants cut | 6 |
| Variants deferred | 0 |
| Variants needing human/tutor check | 0 |
| Clean approved/revised families proceeding to schema mapping | 9 |
| Clean approved/revised variants proceeding to schema mapping | 54 |

Final survivor count is acceptable. No family is unusable. The only over-expanded target was `brauchen`, corrected by cutting one cross-signal variant and downgrading the family to `auto_supported`.

## 4. Issue Summary

| Issue | Severity | Affected families / variants | Decision | Required fix |
| --- | --- | --- | --- | --- |
| Actual variant-count discrepancy | minor | Whole draft | Use actual rows | Audit 60 concrete variants, not the stated 62. |
| Over-expanded `brauchen` / false B1 depth | moderate | b1-01-brauchen-acc-vf-005; b1-01-v2-fronted-time-vf-001-var-007/008; b1-01-v2-fronted-place-vf-002-var-003 | revise/cut/downgrade | Cap the family at 5 variants and mark simple brauchen variants as `auto_supported`. |
| V2 over-saturation | minor/moderate | b1-01-v2-fronted-time-vf-001; b1-01-v2-fronted-place-vf-002 | approve with caps/cuts | Use families as replacement/rotation, not extra independent evidence. |
| Unnatural or weak place-fronting | moderate | b1-01-v2-fronted-place-vf-002-var-006/007/008 | cut/revise | Cut weak variants; revise var-007 to remove redundant `hier`. |
| Sentence-start capitalisation hidden target | minor/moderate | b1-01-mein-meine-familiar-vf-006-var-007/008 | revise | Move blank away from sentence start. |
| Noun capitalisation fallback | moderate | b1-01-noun-capitalisation-vf-007 survivors | approve with caveat | Lowercase noun answers are not full correctness. Use correct-with-note only if supported. |
| Sibling evidence inflation | high | All survivor families | approve with safeguard | Same-family same-session attempts are sibling evidence only. |
| Production overclaim risk | moderate | b1-01-controlled-production-vf-009 | approve with safeguard | Self-marked production only; no correctness or review evidence. |

## 5. Family-by-Family QA Table

| Variant family ID | Family target | Family type | Source item IDs | Variants in draft | Family decision | Problems found | Required family-level fix | Evidence interpretation decision | ReviewGroup decision | Notes |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| b1-01-v2-fronted-time-vf-001 | V2 after fronted time phrase | Type B | draft_b1_m01_cloze_003; draft_b1_m01_satzbau_002; draft_b1_m01_repair_001; draft_b1_m01_transformation_001; draft_b1_m01_topup_cloze_001; draft_b1_m01_topup_cloze_002; draft_b1_m01_topup_satzbau_001; draft_b1_m01_topup_satzbau_003; draft_b1_m01_topup_repair_001 | 10 | approve_family_with_variant_cuts | Some variants were redundant, over-scaffolded, or overlapped existing items. | Remove cut variants before schema mapping. | Frame-level V2 evidence; exact verb differs by cue, so do not treat as one lexical verb target. | rg-b1-01-v2-fronted-time | Cut two brauchen/V2 cross-signal variants; keep clean V2 time/place verb-position set. |
| b1-01-v2-fronted-place-vf-002 | V2 after fronted place phrase | Type B | draft_b1_m01_topup_satzbau_002; draft_b1_m01_topup_repair_002; draft_b1_m01_topup_cloze_002 | 8 | revise_family_and_approve | Family is valid but required wording/evidence/naturalness revisions. | Use revised variant rows and updated evidence notes. | Frame-level V2 evidence for place-first main clauses. | rg-b1-01-v2-fronted-place | Cut two weak/unnatural variants and revise one place-fronted sentence. |
| b1-01-w-question-location-vf-003 | W-question word order for course orientation | Type B | draft_b1_m01_recognition_003; draft_b1_m01_repair_003; draft_b1_m01_satzbau_003; draft_b1_m01_topup_recognition_002; draft_b1_m01_topup_cloze_003; draft_b1_m01_topup_satzbau_004; draft_b1_m01_topup_repair_003; draft_b1_m01_topup_contrast_002 | 7 | approve_family_as_is | — | None. | Question-frame evidence; some variants target ist, others finde. | rg-b1-01-w-question-orientation | Good W-question family; keep all variants. |
| b1-01-yes-no-question-vf-004 | Yes/no question word order | Type B | draft_b1_m01_recognition_004; draft_b1_m01_cloze_008; draft_b1_m01_satzbau_004; draft_b1_m01_contrast_003; draft_b1_m01_topup_recognition_003; draft_b1_m01_topup_cloze_004; draft_b1_m01_topup_satzbau_005; draft_b1_m01_topup_satzbau_006 | 6 | approve_family_as_is | — | None. | Question-frame evidence; target answer varies by verb. | rg-b1-01-yes-no-question-order | Good yes/no question family; keep exact sentence-start forms with fallback caveats. |
| b1-01-brauchen-acc-vf-005 | brauchen as basic course/work survival frame | Type A | draft_b1_m01_recognition_006; draft_b1_m01_cloze_005; draft_b1_m01_cloze_007; draft_b1_m01_repair_005; draft_b1_m01_satzbau_005; draft_b1_m01_topup_recognition_004; draft_b1_m01_topup_cloze_005; draft_b1_m01_topup_satzbau_007 | 6 | revise_family_and_approve | Family is valid but required wording/evidence/naturalness revisions. | Use revised variant rows and updated evidence notes. | Capped verb-frame evidence; not broad B1 evidence. | rg-b1-01-brauchen-acc-survival | Keep the family but downgrade evidence and cut the V2 cross-signal variant; cap brauchen at 5. |
| b1-01-mein-meine-familiar-vf-006 | mein/meine with familiar B1-01 nouns | Type B | draft_b1_m01_recognition_008; draft_b1_m01_cloze_006; draft_b1_m01_repair_004; draft_b1_m01_contrast_002; draft_b1_m01_topup_recognition_005; draft_b1_m01_topup_cloze_007; draft_b1_m01_topup_cloze_008; draft_b1_m01_topup_satzbau_008; draft_b1_m01_topup_satzbau_009; draft_b1_m01_topup_repair_007; draft_b1_m01_topup_repair_008 | 8 | revise_family_and_approve | Family is valid but required wording/evidence/naturalness revisions. | Use revised variant rows and updated evidence notes. | Familiar-noun possessive awareness only; not a full article/case table. | rg-b1-01-mein-meine-familiar-nouns | Keep all variants with two wording revisions to avoid sentence-start capitalisation traps. |
| b1-01-noun-capitalisation-vf-007 | German noun capitalisation in B1-01 course words | Type B | draft_b1_m01_notice_002 excluded; draft_b1_m01_recognition_010; draft_b1_m01_repair_002; draft_b1_m01_topup_recognition_006; draft_b1_m01_topup_cloze_006; draft_b1_m01_topup_cloze_009; draft_b1_m01_topup_repair_006 | 5 | approve_family_with_variant_cuts | Some variants were redundant, over-scaffolded, or overlapped existing items. | Remove cut variants before schema mapping. | Mechanics/support evidence; do not infer broad vocabulary or grammar control. | rg-b1-01-noun-capitalisation-course-words | Keep four mechanics variants; cut Kurs overlap. |
| b1-01-w-question-repair-vf-008 | Repair W-question word order | Type B | draft_b1_m01_repair_003; draft_b1_m01_topup_repair_003; draft_b1_m01_topup_contrast_002 | 6 | approve_family_as_is | — | None. | Repair-level evidence for W-question order, stronger than recognition. | rg-b1-01-w-question-repair | Repair family is strong and focused. |
| b1-01-controlled-production-vf-009 | Controlled self-marked course-entry production | Type B | draft_b1_m01_production_001; draft_b1_m01_production_002; draft_b1_m01_production_003; draft_b1_m01_topup_production_001; draft_b1_m01_topup_production_002; draft_b1_m01_topup_production_003 | 4 | approve_family_as_is | — | None. | Self-marked production evidence only; no correctness. | none-production-only | Production remains self-marked only; no correctness evidence. |

## 6. Variant-by-Variant QA Table

| Variant ID | Family ID | Draft target answer | Severity | Decision | Problems found | Required fix | Revised variant if applicable | EvidenceType decision | SupportPolicy decision | Notes |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| b1-01-v2-fronted-time-vf-001-var-001 | b1-01-v2-fronted-time-vf-001 | bin | none | approve_variant_as_is | — | — | — | auto_core | support_after_answer | — |
| b1-01-v2-fronted-time-vf-001-var-002 | b1-01-v2-fronted-time-vf-001 | bin | none | approve_variant_as_is | — | — | — | auto_core | support_after_answer | — |
| b1-01-v2-fronted-time-vf-001-var-003 | b1-01-v2-fronted-time-vf-001 | bin | none | approve_variant_as_is | — | — | — | auto_core | support_after_answer | — |
| b1-01-v2-fronted-time-vf-001-var-004 | b1-01-v2-fronted-time-vf-001 | lerne | none | approve_variant_as_is | — | — | — | auto_core | support_after_answer | — |
| b1-01-v2-fronted-time-vf-001-var-005 | b1-01-v2-fronted-time-vf-001 | lerne | none | approve_variant_as_is | — | — | — | auto_core | support_after_answer | — |
| b1-01-v2-fronted-time-vf-001-var-006 | b1-01-v2-fronted-time-vf-001 | lerne | none | approve_variant_as_is | — | — | — | auto_core | support_after_answer | — |
| b1-01-v2-fronted-time-vf-001-var-007 | b1-01-v2-fronted-time-vf-001 | brauche | moderate | cut_variant | Duplicate/cross-signal brauchen+V2; use brauchen family or V2 family separately. | Remove from clean survivor set. | — | excluded | support_after_answer | No replacement needed. |
| b1-01-v2-fronted-time-vf-001-var-008 | b1-01-v2-fronted-time-vf-001 | brauche | moderate | cut_variant | Duplicate/cross-signal brauchen+V2 with Unterlagen; too much boundary/evidence risk. | Remove from clean survivor set. | — | excluded | support_after_answer | No replacement needed. |
| b1-01-v2-fronted-time-vf-001-var-009 | b1-01-v2-fronted-time-vf-001 | habe | minor | approve_variant_as_is | — | — | — | auto_core | support_after_answer | Approved with existing caveat. |
| b1-01-v2-fronted-time-vf-001-var-010 | b1-01-v2-fronted-time-vf-001 | habe | none | approve_variant_as_is | — | — | — | auto_core | support_after_answer | — |
| b1-01-v2-fronted-place-vf-002-var-001 | b1-01-v2-fronted-place-vf-002 | lerne | none | approve_variant_as_is | — | — | — | auto_core | support_after_answer | — |
| b1-01-v2-fronted-place-vf-002-var-002 | b1-01-v2-fronted-place-vf-002 | lerne | none | approve_variant_as_is | — | — | — | auto_core | support_after_answer | — |
| b1-01-v2-fronted-place-vf-002-var-003 | b1-01-v2-fronted-place-vf-002 | brauche | minor | approve_variant_as_is | — | — | — | auto_supported | support_after_answer | Approved with existing caveat. |
| b1-01-v2-fronted-place-vf-002-var-004 | b1-01-v2-fronted-place-vf-002 | habe | minor | approve_variant_as_is | — | — | — | auto_core | support_after_answer | Approved with existing caveat. |
| b1-01-v2-fronted-place-vf-002-var-005 | b1-01-v2-fronted-place-vf-002 | lerne | minor | approve_variant_as_is | — | — | — | auto_supported | support_after_answer | Approved with existing caveat. |
| b1-01-v2-fronted-place-vf-002-var-006 | b1-01-v2-fronted-place-vf-002 | bin | moderate | cut_variant | Slightly artificial: “Im Kurs bin ich hier” is grammatical but weak/nonnatural as a practice sentence. | Remove from clean survivor set. | — | excluded | support_after_answer | No replacement needed. |
| b1-01-v2-fronted-place-vf-002-var-007 | b1-01-v2-fronted-place-vf-002 | ist | minor | revise_variant_and_approve | Wording/naturalness or hidden capitalisation issue. | Use revised version. | cue=The app is in the course room.; prompt=Im Kursraum ___ die App.; target=ist; accepted=ist; feedback=Im Kursraum ist die App. After the fronted place phrase, the verb comes second. | auto_core | support_after_answer | Revised to remove the redundant “hier” and make the German more natural. |
| b1-01-v2-fronted-place-vf-002-var-008 | b1-01-v2-fronted-place-vf-002 | ist | moderate | cut_variant | “Im Kurs ist das Heft hier” is clumsy and less natural than “Das Heft ist im Kurs.” | Remove from clean survivor set. | — | excluded | support_after_answer | No replacement needed. |
| b1-01-w-question-location-vf-003-var-001 | b1-01-w-question-location-vf-003 | ist | none | approve_variant_as_is | — | — | — | auto_core | support_after_answer | — |
| b1-01-w-question-location-vf-003-var-002 | b1-01-w-question-location-vf-003 | ist | none | approve_variant_as_is | — | — | — | auto_core | support_after_answer | — |
| b1-01-w-question-location-vf-003-var-003 | b1-01-w-question-location-vf-003 | ist | none | approve_variant_as_is | — | — | — | auto_core | support_after_answer | — |
| b1-01-w-question-location-vf-003-var-004 | b1-01-w-question-location-vf-003 | finde | none | approve_variant_as_is | — | — | — | auto_core | support_after_answer | — |
| b1-01-w-question-location-vf-003-var-005 | b1-01-w-question-location-vf-003 | finde | none | approve_variant_as_is | — | — | — | auto_core | support_after_answer | — |
| b1-01-w-question-location-vf-003-var-006 | b1-01-w-question-location-vf-003 | finde | minor | approve_variant_as_is | — | — | — | auto_core | support_after_answer | Approved with existing caveat. |
| b1-01-w-question-location-vf-003-var-007 | b1-01-w-question-location-vf-003 | finde | minor | approve_variant_as_is | — | — | — | auto_core | support_after_answer | Approved with existing caveat. |
| b1-01-yes-no-question-vf-004-var-001 | b1-01-yes-no-question-vf-004 | Brauche | minor | approve_variant_as_is | — | — | — | auto_core exact | support_after_answer | Approved with existing caveat. |
| b1-01-yes-no-question-vf-004-var-002 | b1-01-yes-no-question-vf-004 | Brauche | minor | approve_variant_as_is | — | — | — | auto_core exact | support_after_answer | Approved with existing caveat. |
| b1-01-yes-no-question-vf-004-var-003 | b1-01-yes-no-question-vf-004 | Brauche | minor | approve_variant_as_is | — | — | — | auto_core exact | support_after_answer | Approved with existing caveat. |
| b1-01-yes-no-question-vf-004-var-004 | b1-01-yes-no-question-vf-004 | Ist | none | approve_variant_as_is | — | — | — | auto_core exact | support_after_answer | — |
| b1-01-yes-no-question-vf-004-var-005 | b1-01-yes-no-question-vf-004 | Ist | none | approve_variant_as_is | — | — | — | auto_core exact | support_after_answer | — |
| b1-01-yes-no-question-vf-004-var-006 | b1-01-yes-no-question-vf-004 | Haben | minor | approve_variant_as_is | — | — | — | auto_core exact | support_after_answer | Approved with existing caveat. |
| b1-01-brauchen-acc-vf-005-var-001 | b1-01-brauchen-acc-vf-005 | brauche | none | approve_variant_as_is | — | — | — | auto_supported | support_after_answer | — |
| b1-01-brauchen-acc-vf-005-var-002 | b1-01-brauchen-acc-vf-005 | brauche | none | approve_variant_as_is | — | — | — | auto_supported | support_after_answer | — |
| b1-01-brauchen-acc-vf-005-var-003 | b1-01-brauchen-acc-vf-005 | brauche | minor | approve_variant_as_is | — | — | — | auto_supported | support_after_answer | Approved with existing caveat. |
| b1-01-brauchen-acc-vf-005-var-004 | b1-01-brauchen-acc-vf-005 | brauche | none | approve_variant_as_is | — | — | — | auto_supported | support_after_answer | — |
| b1-01-brauchen-acc-vf-005-var-005 | b1-01-brauchen-acc-vf-005 | brauche | minor | approve_variant_as_is | — | — | — | auto_supported | support_after_answer | Approved with existing caveat. |
| b1-01-brauchen-acc-vf-005-var-006 | b1-01-brauchen-acc-vf-005 | brauche | moderate | cut_variant | Already covered by V2/needs overlap; cuts helfen keep brauchen capped at 5 variants. | Remove from clean survivor set. | — | excluded | support_after_answer | No replacement needed. |
| b1-01-mein-meine-familiar-vf-006-var-001 | b1-01-mein-meine-familiar-vf-006 | mein | none | approve_variant_as_is | — | — | — | auto_core | support_after_answer | — |
| b1-01-mein-meine-familiar-vf-006-var-002 | b1-01-mein-meine-familiar-vf-006 | meine | none | approve_variant_as_is | — | — | — | auto_core | support_after_answer | — |
| b1-01-mein-meine-familiar-vf-006-var-003 | b1-01-mein-meine-familiar-vf-006 | mein | none | approve_variant_as_is | — | — | — | auto_core | support_after_answer | — |
| b1-01-mein-meine-familiar-vf-006-var-004 | b1-01-mein-meine-familiar-vf-006 | meine | none | approve_variant_as_is | — | — | — | auto_core | support_after_answer | — |
| b1-01-mein-meine-familiar-vf-006-var-005 | b1-01-mein-meine-familiar-vf-006 | meine | minor | approve_variant_as_is | — | — | — | auto_core | support_after_answer | Approved with existing caveat. |
| b1-01-mein-meine-familiar-vf-006-var-006 | b1-01-mein-meine-familiar-vf-006 | meine | minor | approve_variant_as_is | — | — | — | auto_core | support_after_answer | Approved with existing caveat. |
| b1-01-mein-meine-familiar-vf-006-var-007 | b1-01-mein-meine-familiar-vf-006 | Meine | minor | revise_variant_and_approve | Wording/naturalness or hidden capitalisation issue. | Use revised version. | cue=Here is my app.; prompt=Hier ist ___ App.; target=meine; accepted=meine; feedback=Hier ist meine App. Use meine with die App. | auto_core | support_after_answer | Revised to avoid sentence-start capitalisation becoming a hidden target. |
| b1-01-mein-meine-familiar-vf-006-var-008 | b1-01-mein-meine-familiar-vf-006 | Mein | minor | revise_variant_and_approve | Wording/naturalness or hidden capitalisation issue. | Use revised version. | cue=Here is my notebook.; prompt=Hier ist ___ Heft.; target=mein; accepted=mein; feedback=Hier ist mein Heft. Use mein with das Heft. | auto_core | support_after_answer | Revised to avoid sentence-start capitalisation becoming a hidden target. |
| b1-01-noun-capitalisation-vf-007-var-001 | b1-01-noun-capitalisation-vf-007 | Heft | minor | approve_variant_as_is | — | — | — | auto_supported | support_after_answer | Approved with existing caveat. |
| b1-01-noun-capitalisation-vf-007-var-002 | b1-01-noun-capitalisation-vf-007 | App | minor | approve_variant_as_is | — | — | — | auto_supported | support_after_answer | Approved with existing caveat. |
| b1-01-noun-capitalisation-vf-007-var-003 | b1-01-noun-capitalisation-vf-007 | Hilfe | minor | approve_variant_as_is | — | — | — | auto_supported | support_after_answer | Approved with existing caveat. |
| b1-01-noun-capitalisation-vf-007-var-004 | b1-01-noun-capitalisation-vf-007 | Unterlagen | minor | approve_variant_as_is | — | — | — | auto_supported | support_after_answer | Approved with existing caveat. |
| b1-01-noun-capitalisation-vf-007-var-005 | b1-01-noun-capitalisation-vf-007 | Kurs | moderate | cut_variant | Existing-item overlap plus hidden accusative exposure; too much for a mechanics family. | Remove from clean survivor set. | — | excluded | support_after_answer | No replacement needed. |
| b1-01-w-question-repair-vf-008-var-001 | b1-01-w-question-repair-vf-008 | Wo ist der Kursraum? | none | approve_variant_as_is | — | — | — | auto_core | support_after_answer | — |
| b1-01-w-question-repair-vf-008-var-002 | b1-01-w-question-repair-vf-008 | Wo finde ich die App? | none | approve_variant_as_is | — | — | — | auto_core | support_after_answer | — |
| b1-01-w-question-repair-vf-008-var-003 | b1-01-w-question-repair-vf-008 | Wo finde ich die Unterlagen? | none | approve_variant_as_is | — | — | — | auto_core | support_after_answer | — |
| b1-01-w-question-repair-vf-008-var-004 | b1-01-w-question-repair-vf-008 | Wo ist die App? | none | approve_variant_as_is | — | — | — | auto_core | support_after_answer | — |
| b1-01-w-question-repair-vf-008-var-005 | b1-01-w-question-repair-vf-008 | Wo ist das Heft? | none | approve_variant_as_is | — | — | — | auto_core | support_after_answer | — |
| b1-01-w-question-repair-vf-008-var-006 | b1-01-w-question-repair-vf-008 | Wo finde ich Informationen? | minor | approve_variant_as_is | — | — | — | auto_core | support_after_answer | Approved with existing caveat. |
| b1-01-controlled-production-vf-009-var-001 | b1-01-controlled-production-vf-009 | self-marked | none | approve_variant_as_is | — | — | — | self_marked_production | checklist_visible | — |
| b1-01-controlled-production-vf-009-var-002 | b1-01-controlled-production-vf-009 | self-marked | none | approve_variant_as_is | — | — | — | self_marked_production | phrase_bank_collapsed | — |
| b1-01-controlled-production-vf-009-var-003 | b1-01-controlled-production-vf-009 | self-marked | none | approve_variant_as_is | — | — | — | self_marked_production | checklist_visible | — |
| b1-01-controlled-production-vf-009-var-004 | b1-01-controlled-production-vf-009 | self-marked | minor | approve_variant_as_is | — | — | — | self_marked_production | checklist_visible | Approved with existing caveat. |

## 7. Clean Approved / Revised Variant Families


### b1-01-v2-fronted-time-vf-001

| Field | Value |
| --- | --- |
| variantFamilyId | b1-01-v2-fronted-time-vf-001 |
| source item IDs | draft_b1_m01_cloze_003; draft_b1_m01_satzbau_002; draft_b1_m01_repair_001; draft_b1_m01_transformation_001; draft_b1_m01_topup_cloze_001; draft_b1_m01_topup_cloze_002; draft_b1_m01_topup_satzbau_001; draft_b1_m01_topup_satzbau_003; draft_b1_m01_topup_repair_001 |
| targetFamilyId | TF-B1-01-LS01-01 |
| targetId | T-B1-01-LS01-01-03 |
| family target | V2 after fronted time phrase |
| family type | Type B |
| taskTypes supported | Luecke, Satzbau, Reparatur, Umformen |
| taskDepth supported | cloze, sentence_building, repair, transformation |
| evidence interpretation | Frame-level V2 evidence; exact verb differs by cue, so do not treat as one lexical verb target. |
| reviewGroup recommendation | rg-b1-01-v2-fronted-time |
| supportPolicy default | support_after_answer / no_english_needed |
| max same-session evidence | Maximum 1 frame-level evidence contribution per same-session round; later attempts count better after delay or task-depth change. |
| QA status | approve_family_with_variant_cuts |
| QA notes | Cut two brauchen/V2 cross-signal variants; keep clean V2 time/place verb-position set. |

| variantId | learner cue | prompt / sentence / chunks | given phrase if any | target answer | accepted answers | feedback micro-rule | evidenceType recommendation | supportPolicy | QA status | QA notes |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| b1-01-v2-fronted-time-vf-001-var-001 | Today I am in the course. | Heute ___ ich im Kurs. | — | bin | bin | Heute bin ich im Kurs. After a fronted time phrase, the verb comes second. | auto_core | support_after_answer | approved_as_is | — |
| b1-01-v2-fronted-time-vf-001-var-002 | Tomorrow I am in the course. | Morgen ___ ich im Kurs. | — | bin | bin | Morgen bin ich im Kurs. The verb stays in position 2. | auto_core | support_after_answer | approved_as_is | — |
| b1-01-v2-fronted-time-vf-001-var-003 | On Monday I am in the course. | Am Montag ___ ich im Kurs. | — | bin | bin | Am Montag bin ich im Kurs. Time first, verb second. | auto_core | support_after_answer | approved_as_is | — |
| b1-01-v2-fronted-time-vf-001-var-004 | Today I learn German. | Heute ___ ich Deutsch. | — | lerne | lerne | Heute lerne ich Deutsch. The finite verb comes after Heute. | auto_core | support_after_answer | approved_as_is | — |
| b1-01-v2-fronted-time-vf-001-var-005 | Tomorrow I learn German. | Morgen ___ ich Deutsch. | — | lerne | lerne | Morgen lerne ich Deutsch. The verb is still second. | auto_core | support_after_answer | approved_as_is | — |
| b1-01-v2-fronted-time-vf-001-var-006 | In the morning I learn German. | Am Vormittag ___ ich Deutsch. | — | lerne | lerne | Am Vormittag lerne ich Deutsch. The time phrase takes position 1. | auto_core | support_after_answer | approved_as_is | — |
| b1-01-v2-fronted-time-vf-001-var-009 | Today I have the documents. | Heute ___ ich [die Unterlagen]. | die Unterlagen | habe | habe | Heute habe ich die Unterlagen. The verb comes second. | auto_core | support_after_answer | approved_as_is | — |
| b1-01-v2-fronted-time-vf-001-var-010 | Tomorrow I have a notebook. | Morgen ___ ich [ein Heft]. | ein Heft | habe | habe | Morgen habe ich ein Heft. The time phrase is first; the verb is second. | auto_core | support_after_answer | approved_as_is | — |

### b1-01-v2-fronted-place-vf-002

| Field | Value |
| --- | --- |
| variantFamilyId | b1-01-v2-fronted-place-vf-002 |
| source item IDs | draft_b1_m01_topup_satzbau_002; draft_b1_m01_topup_repair_002; draft_b1_m01_topup_cloze_002 |
| targetFamilyId | TF-B1-01-LS01-01 |
| targetId | T-B1-01-LS01-01-03 |
| family target | V2 after fronted place phrase |
| family type | Type B |
| taskTypes supported | Luecke, Satzbau, Reparatur |
| taskDepth supported | cloze, sentence_building, repair |
| evidence interpretation | Frame-level V2 evidence for place-first main clauses. |
| reviewGroup recommendation | rg-b1-01-v2-fronted-place |
| supportPolicy default | support_after_answer / no_english_needed |
| max same-session evidence | Maximum 1 same-session evidence contribution unless task depth changes. |
| QA status | revise_family_and_approve |
| QA notes | Cut two weak/unnatural variants and revise one place-fronted sentence. |

| variantId | learner cue | prompt / sentence / chunks | given phrase if any | target answer | accepted answers | feedback micro-rule | evidenceType recommendation | supportPolicy | QA status | QA notes |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| b1-01-v2-fronted-place-vf-002-var-001 | In the course I learn German. | Im Kurs ___ ich Deutsch. | — | lerne | lerne | Im Kurs lerne ich Deutsch. The verb comes after the place phrase. | auto_core | support_after_answer | approved_as_is | — |
| b1-01-v2-fronted-place-vf-002-var-002 | In the course room I learn German. | Im Kursraum ___ ich Deutsch. | — | lerne | lerne | Im Kursraum lerne ich Deutsch. The verb is in position 2. | auto_core | support_after_answer | approved_as_is | — |
| b1-01-v2-fronted-place-vf-002-var-003 | In the course I need the app. | Im Kurs ___ ich [die App]. | die App | brauche | brauche | Im Kurs brauche ich die App. The given phrase is context, not the target. | auto_supported | support_after_answer | approved_as_is | — |
| b1-01-v2-fronted-place-vf-002-var-004 | In the course room I have the documents. | Im Kursraum ___ ich [die Unterlagen]. | die Unterlagen | habe | habe | Im Kursraum habe ich die Unterlagen. Place first, verb second. | auto_core | support_after_answer | approved_as_is | — |
| b1-01-v2-fronted-place-vf-002-var-005 | In German class I learn German. | Im Deutschunterricht ___ ich Deutsch. | — | lerne | lerne | Im Deutschunterricht lerne ich Deutsch. The verb follows the fronted place/context phrase. | auto_supported | support_after_answer | approved_as_is | — |
| b1-01-v2-fronted-place-vf-002-var-007 | The app is in the course room. | Im Kursraum ___ die App. | — | ist | ist | Im Kursraum ist die App. After the fronted place phrase, the verb comes second. | auto_core | support_after_answer | revised_and_approved | Revised to remove the redundant “hier” and make the German more natural. |

### b1-01-w-question-location-vf-003

| Field | Value |
| --- | --- |
| variantFamilyId | b1-01-w-question-location-vf-003 |
| source item IDs | draft_b1_m01_recognition_003; draft_b1_m01_repair_003; draft_b1_m01_satzbau_003; draft_b1_m01_topup_recognition_002; draft_b1_m01_topup_cloze_003; draft_b1_m01_topup_satzbau_004; draft_b1_m01_topup_repair_003; draft_b1_m01_topup_contrast_002 |
| targetFamilyId | TF-B1-01-LS01-02 |
| targetId | T-B1-01-LS01-02-01 |
| family target | W-question word order for course orientation |
| family type | Type B |
| taskTypes supported | Auswahl, Luecke, Satzbau, Reparatur, Kontrast |
| taskDepth supported | recognition, cloze, sentence_building, repair, contrast |
| evidence interpretation | Question-frame evidence; some variants target ist, others finde. |
| reviewGroup recommendation | rg-b1-01-w-question-orientation |
| supportPolicy default | support_after_answer / no_english_needed |
| max same-session evidence | Maximum 1 same-session frame contribution per task depth. |
| QA status | approve_family_as_is |
| QA notes | Good W-question family; keep all variants. |

| variantId | learner cue | prompt / sentence / chunks | given phrase if any | target answer | accepted answers | feedback micro-rule | evidenceType recommendation | supportPolicy | QA status | QA notes |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| b1-01-w-question-location-vf-003-var-001 | Where is the course room? | Wo ___ der Kursraum? | — | ist | ist | Wo ist der Kursraum? In a W-question, the verb comes after the question word. | auto_core | support_after_answer | approved_as_is | — |
| b1-01-w-question-location-vf-003-var-002 | Where is the app? | Wo ___ die App? | — | ist | ist | Wo ist die App? Question word first, verb second. | auto_core | support_after_answer | approved_as_is | — |
| b1-01-w-question-location-vf-003-var-003 | Where is the notebook? | Wo ___ das Heft? | — | ist | ist | Wo ist das Heft? The verb comes directly after Wo. | auto_core | support_after_answer | approved_as_is | — |
| b1-01-w-question-location-vf-003-var-004 | Where do I find the app? | Wo ___ ich [die App]? | die App | finde | finde | Wo finde ich die App? The object phrase is given; type the verb. | auto_core | support_after_answer | approved_as_is | — |
| b1-01-w-question-location-vf-003-var-005 | Where do I find the documents? | Wo ___ ich [die Unterlagen]? | die Unterlagen | finde | finde | Wo finde ich die Unterlagen? W-question: Wo + verb + subject. | auto_core | support_after_answer | approved_as_is | — |
| b1-01-w-question-location-vf-003-var-006 | Where do I find information? | Wo ___ ich [Informationen]? | Informationen | finde | finde | Wo finde ich Informationen? The given phrase is not tested. | auto_core | support_after_answer | approved_as_is | — |
| b1-01-w-question-location-vf-003-var-007 | Where do I find the course room? | Wo ___ ich [den Kursraum]? | den Kursraum | finde | finde | Wo finde ich den Kursraum? The target is the verb, not den Kursraum. | auto_core | support_after_answer | approved_as_is | — |

### b1-01-yes-no-question-vf-004

| Field | Value |
| --- | --- |
| variantFamilyId | b1-01-yes-no-question-vf-004 |
| source item IDs | draft_b1_m01_recognition_004; draft_b1_m01_cloze_008; draft_b1_m01_satzbau_004; draft_b1_m01_contrast_003; draft_b1_m01_topup_recognition_003; draft_b1_m01_topup_cloze_004; draft_b1_m01_topup_satzbau_005; draft_b1_m01_topup_satzbau_006 |
| targetFamilyId | TF-B1-01-LS01-02 |
| targetId | T-B1-01-LS01-02-02 |
| family target | Yes/no question word order |
| family type | Type B |
| taskTypes supported | Auswahl, Luecke, Satzbau, Kontrast |
| taskDepth supported | recognition, cloze, sentence_building, contrast |
| evidence interpretation | Question-frame evidence; target answer varies by verb. |
| reviewGroup recommendation | rg-b1-01-yes-no-question-order |
| supportPolicy default | support_after_answer / no_english_needed |
| max same-session evidence | Maximum 1 same-session frame contribution per task depth. |
| QA status | approve_family_as_is |
| QA notes | Good yes/no question family; keep exact sentence-start forms with fallback caveats. |

| variantId | learner cue | prompt / sentence / chunks | given phrase if any | target answer | accepted answers | feedback micro-rule | evidenceType recommendation | supportPolicy | QA status | QA notes |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| b1-01-yes-no-question-vf-004-var-001 | Do I need a notebook? | ___ ich [ein Heft]? | ein Heft | Brauche | Brauche; brauche only correct-with-note if sentence-start fallback supported | Brauche ich ein Heft? A yes/no question starts with the verb. | auto_core exact | support_after_answer | approved_as_is | — |
| b1-01-yes-no-question-vf-004-var-002 | Do I need the app? | ___ ich [die App]? | die App | Brauche | Brauche; brauche only correct-with-note if supported | Brauche ich die App? The finite verb comes first. | auto_core exact | support_after_answer | approved_as_is | — |
| b1-01-yes-no-question-vf-004-var-003 | Do I need the documents? | ___ ich [die Unterlagen]? | die Unterlagen | Brauche | Brauche; brauche only correct-with-note if supported | Brauche ich die Unterlagen? Verb first in a yes/no question. | auto_core exact | support_after_answer | approved_as_is | — |
| b1-01-yes-no-question-vf-004-var-004 | Is the app here? | ___ die App hier? | — | Ist | Ist; ist only correct-with-note if supported | Ist die App hier? A yes/no question starts with the finite verb. | auto_core exact | support_after_answer | approved_as_is | — |
| b1-01-yes-no-question-vf-004-var-005 | Is the notebook here? | ___ das Heft hier? | — | Ist | Ist; ist only correct-with-note if supported | Ist das Heft hier? The verb comes before the subject. | auto_core exact | support_after_answer | approved_as_is | — |
| b1-01-yes-no-question-vf-004-var-006 | Do you have information? | ___ Sie [Informationen]? | Informationen | Haben | Haben; haben only correct-with-note if supported | Haben Sie Informationen? With Sie, the verb starts the question. | auto_core exact | support_after_answer | approved_as_is | — |

### b1-01-brauchen-acc-vf-005

| Field | Value |
| --- | --- |
| variantFamilyId | b1-01-brauchen-acc-vf-005 |
| source item IDs | draft_b1_m01_recognition_006; draft_b1_m01_cloze_005; draft_b1_m01_cloze_007; draft_b1_m01_repair_005; draft_b1_m01_satzbau_005; draft_b1_m01_topup_recognition_004; draft_b1_m01_topup_cloze_005; draft_b1_m01_topup_satzbau_007 |
| targetFamilyId | TF-B1-01-LS04-01 |
| targetId | T-B1-01-LS04-01-01 |
| family target | brauchen as basic course/work survival frame |
| family type | Type A |
| taskTypes supported | Auswahl, Luecke, Satzbau, Reparatur, Produktion support only |
| taskDepth supported | recognition, cloze, sentence_building, repair, controlled_production |
| evidence interpretation | Capped survival/scaffold evidence; not B1-depth proof. |
| reviewGroup recommendation | rg-b1-01-brauchen-acc-survival |
| supportPolicy default | scenario_visible or support_after_answer |
| max same-session evidence | Maximum 1 same-session evidence contribution; simple recognition/cloze should be auto_supported if too scaffolded. |
| QA status | revise_family_and_approve |
| QA notes | Keep the family but downgrade evidence and cut the V2 cross-signal variant; cap brauchen at 5. |

| variantId | learner cue | prompt / sentence / chunks | given phrase if any | target answer | accepted answers | feedback micro-rule | evidenceType recommendation | supportPolicy | QA status | QA notes |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| b1-01-brauchen-acc-vf-005-var-001 | I need the app. | Ich ___ [die App]. | die App | brauche | brauche | Ich brauche die App. The phrase in brackets is given; type the verb. | auto_supported | support_after_answer | approved_as_is | Evidence downgraded: brauchen is survival scaffolding, not B1-depth proof. |
| b1-01-brauchen-acc-vf-005-var-002 | I need a notebook. | Ich ___ [ein Heft]. | ein Heft | brauche | brauche | Ich brauche ein Heft. Only the verb is tested here. | auto_supported | support_after_answer | approved_as_is | Evidence downgraded: brauchen is survival scaffolding, not B1-depth proof. |
| b1-01-brauchen-acc-vf-005-var-003 | I need the documents. | Ich ___ [die Unterlagen]. | die Unterlagen | brauche | brauche | Ich brauche die Unterlagen. The object phrase is given context. | auto_supported | support_after_answer | approved_as_is | Evidence downgraded: brauchen is survival scaffolding, not B1-depth proof. |
| b1-01-brauchen-acc-vf-005-var-004 | I need information. | Ich ___ [Informationen]. | Informationen | brauche | brauche | Ich brauche Informationen. The target is brauche. | auto_supported | support_after_answer | approved_as_is | Evidence downgraded: brauchen is survival scaffolding, not B1-depth proof. |
| b1-01-brauchen-acc-vf-005-var-005 | I need help. | Ich ___ [Hilfe]. | Hilfe | brauche | brauche | Ich brauche Hilfe. Hilfe is given; the verb is tested. | auto_supported | support_after_answer | approved_as_is | Evidence downgraded: brauchen is survival scaffolding, not B1-depth proof. |

### b1-01-mein-meine-familiar-vf-006

| Field | Value |
| --- | --- |
| variantFamilyId | b1-01-mein-meine-familiar-vf-006 |
| source item IDs | draft_b1_m01_recognition_008; draft_b1_m01_cloze_006; draft_b1_m01_repair_004; draft_b1_m01_contrast_002; draft_b1_m01_topup_recognition_005; draft_b1_m01_topup_cloze_007; draft_b1_m01_topup_cloze_008; draft_b1_m01_topup_satzbau_008; draft_b1_m01_topup_satzbau_009; draft_b1_m01_topup_repair_007; draft_b1_m01_topup_repair_008 |
| targetFamilyId | TF-B1-01-LS02-01 |
| targetId | T-B1-01-LS02-01-02 |
| family target | mein/meine with familiar B1-01 nouns |
| family type | Type B |
| taskTypes supported | Auswahl, Luecke, Satzbau, Reparatur, Kontrast |
| taskDepth supported | recognition, cloze, sentence_building, repair, contrast |
| evidence interpretation | Familiar-noun possessive awareness only; not a full article/case table. |
| reviewGroup recommendation | rg-b1-01-mein-meine-familiar-nouns |
| supportPolicy default | support_after_answer / english_hidden_until_feedback |
| max same-session evidence | Maximum 1 same-session contribution per task depth. |
| QA status | revise_family_and_approve |
| QA notes | Keep all variants with two wording revisions to avoid sentence-start capitalisation traps. |

| variantId | learner cue | prompt / sentence / chunks | given phrase if any | target answer | accepted answers | feedback micro-rule | evidenceType recommendation | supportPolicy | QA status | QA notes |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| b1-01-mein-meine-familiar-vf-006-var-001 | This is my course. | Das ist ___ Kurs. | — | mein | mein | Das ist mein Kurs. Use mein with der Kurs. | auto_core | support_after_answer | approved_as_is | — |
| b1-01-mein-meine-familiar-vf-006-var-002 | This is my work. | Das ist ___ Arbeit. | — | meine | meine | Das ist meine Arbeit. Use meine with die Arbeit. | auto_core | support_after_answer | approved_as_is | — |
| b1-01-mein-meine-familiar-vf-006-var-003 | This is my notebook. | Das ist ___ Heft. | — | mein | mein | Das ist mein Heft. Use mein with das Heft. | auto_core | support_after_answer | approved_as_is | — |
| b1-01-mein-meine-familiar-vf-006-var-004 | This is my app. | Das ist ___ App. | — | meine | meine | Das ist meine App. Use meine with die App. | auto_core | support_after_answer | approved_as_is | — |
| b1-01-mein-meine-familiar-vf-006-var-005 | These are my documents. | Das sind ___ Unterlagen. | — | meine | meine | Das sind meine Unterlagen. Use meine with plural Unterlagen. | auto_core | support_after_answer | approved_as_is | — |
| b1-01-mein-meine-familiar-vf-006-var-006 | I need my documents. | Ich brauche ___ Unterlagen. | — | meine | meine | Ich brauche meine Unterlagen. The target is meine, not brauchen. | auto_core | support_after_answer | approved_as_is | — |
| b1-01-mein-meine-familiar-vf-006-var-007 | Here is my app. | Hier ist ___ App. | — | meine | meine | Hier ist meine App. Use meine with die App. | auto_core | support_after_answer | revised_and_approved | Revised to avoid sentence-start capitalisation becoming a hidden target. |
| b1-01-mein-meine-familiar-vf-006-var-008 | Here is my notebook. | Hier ist ___ Heft. | — | mein | mein | Hier ist mein Heft. Use mein with das Heft. | auto_core | support_after_answer | revised_and_approved | Revised to avoid sentence-start capitalisation becoming a hidden target. |

### b1-01-noun-capitalisation-vf-007

| Field | Value |
| --- | --- |
| variantFamilyId | b1-01-noun-capitalisation-vf-007 |
| source item IDs | draft_b1_m01_notice_002 excluded; draft_b1_m01_recognition_010; draft_b1_m01_repair_002; draft_b1_m01_topup_recognition_006; draft_b1_m01_topup_cloze_006; draft_b1_m01_topup_cloze_009; draft_b1_m01_topup_repair_006 |
| targetFamilyId | TF-B1-01-LS09-01 |
| targetId | T-B1-01-LS09-01-01 |
| family target | German noun capitalisation in B1-01 course words |
| family type | Type B |
| taskTypes supported | Auswahl, Luecke, Reparatur |
| taskDepth supported | recognition, cloze, repair |
| evidence interpretation | Mechanics/support evidence; do not infer broad vocabulary or grammar control. |
| reviewGroup recommendation | rg-b1-01-noun-capitalisation-course-words |
| supportPolicy default | support_after_answer |
| max same-session evidence | No more than 1 same-session mechanics signal; not strong progress alone. |
| QA status | approve_family_with_variant_cuts |
| QA notes | Keep four mechanics variants; cut Kurs overlap. |

| variantId | learner cue | prompt / sentence / chunks | given phrase if any | target answer | accepted answers | feedback micro-rule | evidenceType recommendation | supportPolicy | QA status | QA notes |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| b1-01-noun-capitalisation-vf-007-var-001 | You need a notebook. | Ich brauche ein ___. | — | Heft | Heft; heft correct-with-note only if supported | Ich brauche ein Heft. German nouns are capitalised. | auto_supported | support_after_answer | approved_as_is | — |
| b1-01-noun-capitalisation-vf-007-var-002 | The app is here. | Die ___ ist hier. | — | App | App; app correct-with-note only if supported | Die App ist hier. App is a noun, so it is capitalised. | auto_supported | support_after_answer | approved_as_is | — |
| b1-01-noun-capitalisation-vf-007-var-003 | You need help. | Ich brauche ___. | — | Hilfe | Hilfe; hilfe correct-with-note only if supported | Ich brauche Hilfe. Hilfe is a noun, so it is capitalised. | auto_supported | support_after_answer | approved_as_is | — |
| b1-01-noun-capitalisation-vf-007-var-004 | The documents are here. | Die ___ sind hier. | — | Unterlagen | Unterlagen; unterlagen correct-with-note only if supported | Die Unterlagen sind hier. Unterlagen is a noun. | auto_supported | support_after_answer | approved_as_is | — |

### b1-01-w-question-repair-vf-008

| Field | Value |
| --- | --- |
| variantFamilyId | b1-01-w-question-repair-vf-008 |
| source item IDs | draft_b1_m01_repair_003; draft_b1_m01_topup_repair_003; draft_b1_m01_topup_contrast_002 |
| targetFamilyId | TF-B1-01-LS01-02 |
| targetId | T-B1-01-LS01-02-01 |
| family target | Repair W-question word order |
| family type | Type B |
| taskTypes supported | Reparatur, Kontrast |
| taskDepth supported | repair, contrast |
| evidence interpretation | Repair-level evidence for W-question order, stronger than recognition. |
| reviewGroup recommendation | rg-b1-01-w-question-repair |
| supportPolicy default | support_after_answer / no_english_needed |
| max same-session evidence | 1 same-session repair signal; stronger after delay. |
| QA status | approve_family_as_is |
| QA notes | Repair family is strong and focused. |

| variantId | learner cue | prompt / sentence / chunks | given phrase if any | target answer | accepted answers | feedback micro-rule | evidenceType recommendation | supportPolicy | QA status | QA notes |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| b1-01-w-question-repair-vf-008-var-001 | Fix the question. | Wo der Kursraum ist? | — | Wo ist der Kursraum? | exact; punctuation variant may be accepted after QA | W-question: Wo + verb + subject/complement. | auto_core | support_after_answer | approved_as_is | — |
| b1-01-w-question-repair-vf-008-var-002 | Fix the question. | Wo ich finde die App? | — | Wo finde ich die App? | exact; punctuation variant after QA | In a W-question, the verb comes after Wo. | auto_core | support_after_answer | approved_as_is | — |
| b1-01-w-question-repair-vf-008-var-003 | Fix the question. | Wo ich finde die Unterlagen? | — | Wo finde ich die Unterlagen? | exact | Wo finde ich die Unterlagen? Verb second after Wo. | auto_core | support_after_answer | approved_as_is | — |
| b1-01-w-question-repair-vf-008-var-004 | Fix the question. | Wo die App ist? | — | Wo ist die App? | exact | W-question order: Wo ist die App? | auto_core | support_after_answer | approved_as_is | — |
| b1-01-w-question-repair-vf-008-var-005 | Fix the question. | Wo das Heft ist? | — | Wo ist das Heft? | exact | The finite verb comes after the question word. | auto_core | support_after_answer | approved_as_is | — |
| b1-01-w-question-repair-vf-008-var-006 | Fix the question. | Wo Informationen finde ich? | — | Wo finde ich Informationen? | exact | Use Wo + finde + ich. | auto_core | support_after_answer | approved_as_is | — |

### b1-01-controlled-production-vf-009

| Field | Value |
| --- | --- |
| variantFamilyId | b1-01-controlled-production-vf-009 |
| source item IDs | draft_b1_m01_production_001; draft_b1_m01_production_002; draft_b1_m01_production_003; draft_b1_m01_topup_production_001; draft_b1_m01_topup_production_002; draft_b1_m01_topup_production_003 |
| targetFamilyId | TF-B1-01-LS10-01 |
| targetId | T-B1-01-LS10-01-01 / T-B1-01-LS10-01-02 |
| family target | Controlled self-marked course-entry production |
| family type | Type B |
| taskTypes supported | Produktion |
| taskDepth supported | controlled_production |
| evidence interpretation | Self-marked production evidence only; no correctness. |
| reviewGroup recommendation | none-production-only |
| supportPolicy default | checklist_visible or phrase_bank_collapsed |
| max same-session evidence | No correctness or review evidence; record practice only. |
| QA status | approve_family_as_is |
| QA notes | Production remains self-marked only; no correctness evidence. |

| variantId | learner cue | prompt / sentence / chunks | given phrase if any | target answer | accepted answers | feedback micro-rule | evidenceType recommendation | supportPolicy | QA status | QA notes |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| b1-01-controlled-production-vf-009-var-001 | Introduce yourself in two short sentences. | Write your name and one course sentence. | — | self-marked | self-marked only | Model after attempt: Ich heiße Mina. Ich bin im Deutschkurs. | self_marked_production | checklist_visible | approved_as_is | — |
| b1-01-controlled-production-vf-009-var-002 | Write one sentence about what you need today. | Use Ich brauche ... | — | self-marked | self-marked only | Model after attempt: Ich brauche die App. | self_marked_production | phrase_bank_collapsed | approved_as_is | — |
| b1-01-controlled-production-vf-009-var-003 | Write one sentence that starts with Heute. | Use a course/work sentence. | — | self-marked | self-marked only | Model after attempt: Heute bin ich im Kurs. | self_marked_production | checklist_visible | approved_as_is | — |
| b1-01-controlled-production-vf-009-var-004 | Write two short sentences for the first course day. | Include where you are and what you need. | — | self-marked | self-marked only | Model after attempt: Ich bin im Kurs. Ich brauche ein Heft. | self_marked_production | checklist_visible | approved_as_is | — |

## 8. Cut / Deferred / Human-Check Ledger

| Family / variant ID | Final status | Reason | Replacement needed? | Notes |
| --- | --- | --- | --- | --- |
| b1-01-v2-fronted-time-vf-001-var-007 | cut_variant | Duplicate/cross-signal brauchen+V2; use brauchen family or V2 family separately. | No | Surplus variant-family draft; no replacement required. |
| b1-01-v2-fronted-time-vf-001-var-008 | cut_variant | Duplicate/cross-signal brauchen+V2 with Unterlagen; too much boundary/evidence risk. | No | Surplus variant-family draft; no replacement required. |
| b1-01-v2-fronted-place-vf-002-var-006 | cut_variant | Slightly artificial: “Im Kurs bin ich hier” is grammatical but weak/nonnatural as a practice sentence. | No | Surplus variant-family draft; no replacement required. |
| b1-01-v2-fronted-place-vf-002-var-008 | cut_variant | “Im Kurs ist das Heft hier” is clumsy and less natural than “Das Heft ist im Kurs.” | No | Surplus variant-family draft; no replacement required. |
| b1-01-brauchen-acc-vf-005-var-006 | cut_variant | Already covered by V2/needs overlap; cuts helfen keep brauchen capped at 5 variants. | No | Surplus variant-family draft; no replacement required. |
| b1-01-noun-capitalisation-vf-007-var-005 | cut_variant | Existing-item overlap plus hidden accusative exposure; too much for a mechanics family. | No | Surplus variant-family draft; no replacement required. |

Deferred variants: none. Needs-human/tutor-check variants: none. Cut families: none.

## 9. Evidence Inflation Safeguards

| Variant family | Same-session evidence risk | Review grouping rule | Evidence cap recommendation | Notes |
| --- | --- | --- | --- | --- |
| b1-01-v2-fronted-time-vf-001 | medium | rg-b1-01-v2-fronted-time | Maximum 1 same-session family-level contribution; stronger evidence requires delay, task-depth change, or lower support. | Record parent variantFamilyId and exact variantId. Same-family attempts are sibling evidence, not independent proof. |
| b1-01-v2-fronted-place-vf-002 | medium | rg-b1-01-v2-fronted-place | Maximum 1 same-session family-level contribution; stronger evidence requires delay, task-depth change, or lower support. | Record parent variantFamilyId and exact variantId. Same-family attempts are sibling evidence, not independent proof. |
| b1-01-w-question-location-vf-003 | low-medium | rg-b1-01-w-question-orientation | Maximum 1 same-session family-level contribution; stronger evidence requires delay, task-depth change, or lower support. | Record parent variantFamilyId and exact variantId. Same-family attempts are sibling evidence, not independent proof. |
| b1-01-yes-no-question-vf-004 | low-medium | rg-b1-01-yes-no-question-order | Maximum 1 same-session family-level contribution; stronger evidence requires delay, task-depth change, or lower support. | Record parent variantFamilyId and exact variantId. Same-family attempts are sibling evidence, not independent proof. |
| b1-01-brauchen-acc-vf-005 | high | rg-b1-01-brauchen-acc-survival | Maximum 1 same-session family-level contribution; stronger evidence requires delay, task-depth change, or lower support. | Record parent variantFamilyId and exact variantId. Same-family attempts are sibling evidence, not independent proof. |
| b1-01-mein-meine-familiar-vf-006 | medium | rg-b1-01-mein-meine-familiar-nouns | Maximum 1 same-session family-level contribution; stronger evidence requires delay, task-depth change, or lower support. | Record parent variantFamilyId and exact variantId. Same-family attempts are sibling evidence, not independent proof. |
| b1-01-noun-capitalisation-vf-007 | high | rg-b1-01-noun-capitalisation-course-words | Maximum 1 same-session family-level contribution; stronger evidence requires delay, task-depth change, or lower support. | Record parent variantFamilyId and exact variantId. Same-family attempts are sibling evidence, not independent proof. |
| b1-01-w-question-repair-vf-008 | low-medium | rg-b1-01-w-question-repair | Maximum 1 same-session family-level contribution; stronger evidence requires delay, task-depth change, or lower support. | Record parent variantFamilyId and exact variantId. Same-family attempts are sibling evidence, not independent proof. |
| b1-01-controlled-production-vf-009 | low-medium | none-production-only | No correctness or review evidence; record practice only. | Record parent variantFamilyId and exact variantId. Same-family attempts are sibling evidence, not independent proof. |

## 10. Fallback / Capitalisation / Ambiguity Ledger

| Variant ID | Issue | Canonical answer | Fallback / ambiguity | Decision | Evidence impact | Schema/import caveat |
| --- | --- | --- | --- | --- | --- | --- |
| b1-01-w-question-location-vf-003-var-006 | bare plural/naturalness | finde | — | accepted as exact; no synonym expansion | No extra accepted answers. | Import layer must preserve fallback caveat. |
| b1-01-yes-no-question-vf-004-var-001 | sentence-start capitalisation | Brauche | brauche | exact only unless correct-with-note exists | Do not award full-strength evidence for fallback. | Import layer must preserve fallback caveat. |
| b1-01-yes-no-question-vf-004-var-002 | sentence-start capitalisation | Brauche | brauche | exact only unless correct-with-note exists | Do not award full-strength evidence for fallback. | Import layer must preserve fallback caveat. |
| b1-01-yes-no-question-vf-004-var-003 | sentence-start capitalisation | Brauche | brauche | exact only unless correct-with-note exists | Do not award full-strength evidence for fallback. | Import layer must preserve fallback caveat. |
| b1-01-yes-no-question-vf-004-var-004 | sentence-start capitalisation | Ist | ist | exact only unless correct-with-note exists | Do not award full-strength evidence for fallback. | Import layer must preserve fallback caveat. |
| b1-01-yes-no-question-vf-004-var-005 | sentence-start capitalisation | Ist | ist | exact only unless correct-with-note exists | Do not award full-strength evidence for fallback. | Import layer must preserve fallback caveat. |
| b1-01-yes-no-question-vf-004-var-006 | sentence-start capitalisation | Haben | haben | exact only unless correct-with-note exists | Do not award full-strength evidence for fallback. | Import layer must preserve fallback caveat. |
| b1-01-noun-capitalisation-vf-007-var-001 | noun capitalisation | Heft | heft | exact only unless correct-with-note exists | Do not award full-strength evidence for fallback. | Import layer must preserve fallback caveat. |
| b1-01-noun-capitalisation-vf-007-var-002 | noun capitalisation | App | app | exact only unless correct-with-note exists | Do not award full-strength evidence for fallback. | Import layer must preserve fallback caveat. |
| b1-01-noun-capitalisation-vf-007-var-003 | noun capitalisation | Hilfe | hilfe | exact only unless correct-with-note exists | Do not award full-strength evidence for fallback. | Import layer must preserve fallback caveat. |
| b1-01-noun-capitalisation-vf-007-var-004 | noun capitalisation | Unterlagen | unterlagen | exact only unless correct-with-note exists | Do not award full-strength evidence for fallback. | Import layer must preserve fallback caveat. |
| b1-01-w-question-repair-vf-008-var-006 | bare plural/naturalness | Wo finde ich Informationen? | — | accepted as exact; no synonym expansion | No extra accepted answers. | Import layer must preserve fallback caveat. |

## 11. Mobile UX QA

| Variant family | Sentence length OK? | One blank? | Typing burden | Tap burden | Bus-ride fit | Risk | Recommendation |
| --- | --- | --- | --- | --- | --- | --- | --- |
| b1-01-v2-fronted-time-vf-001 | Yes | Yes | low | low | strong fit | Evidence inflation if repeated; production typing burden where applicable | Approved for schema mapping with evidence caps. |
| b1-01-v2-fronted-place-vf-002 | Yes | Yes | low | low | strong fit | Evidence inflation if repeated; production typing burden where applicable | Approved for schema mapping with evidence caps. |
| b1-01-w-question-location-vf-003 | Yes | Yes | low | low | strong fit | Evidence inflation if repeated; production typing burden where applicable | Approved for schema mapping with evidence caps. |
| b1-01-yes-no-question-vf-004 | Yes | Yes | low | low | strong fit | Evidence inflation if repeated; production typing burden where applicable | Approved for schema mapping with evidence caps. |
| b1-01-brauchen-acc-vf-005 | Yes | Yes | low | low | strong fit | Evidence inflation if repeated; production typing burden where applicable | Approved for schema mapping with evidence caps. |
| b1-01-mein-meine-familiar-vf-006 | Yes | Yes | low | low | strong fit | Evidence inflation if repeated; production typing burden where applicable | Approved for schema mapping with evidence caps. |
| b1-01-noun-capitalisation-vf-007 | Yes | Yes | low | low | strong fit | Evidence inflation if repeated; production typing burden where applicable | Approved for schema mapping with evidence caps. |
| b1-01-w-question-repair-vf-008 | Yes | Yes | low | low | strong fit | Evidence inflation if repeated; production typing burden where applicable | Approved for schema mapping with evidence caps. |
| b1-01-controlled-production-vf-009 | Yes | No; production prompt | high/self-marked | low | acceptable fit | Evidence inflation if repeated; production typing burden where applicable | Approved for schema mapping with evidence caps. |

## 12. Final Survivor Distribution

### Survivor variant families by targetFamilyId

| targetFamilyId | families |
| --- | --- |
| TF-B1-01-LS01-01 | b1-01-v2-fronted-time-vf-001; b1-01-v2-fronted-place-vf-002 |
| TF-B1-01-LS01-02 | b1-01-w-question-location-vf-003; b1-01-yes-no-question-vf-004; b1-01-w-question-repair-vf-008 |
| TF-B1-01-LS04-01 | b1-01-brauchen-acc-vf-005 |
| TF-B1-01-LS02-01 | b1-01-mein-meine-familiar-vf-006 |
| TF-B1-01-LS09-01 | b1-01-noun-capitalisation-vf-007 |
| TF-B1-01-LS10-01 | b1-01-controlled-production-vf-009 |

### Survivor variants by family

| variantFamilyId | survivor variants |
| --- | --- |
| b1-01-brauchen-acc-vf-005 | 5 |
| b1-01-controlled-production-vf-009 | 4 |
| b1-01-mein-meine-familiar-vf-006 | 8 |
| b1-01-noun-capitalisation-vf-007 | 4 |
| b1-01-v2-fronted-place-vf-002 | 6 |
| b1-01-v2-fronted-time-vf-001 | 8 |
| b1-01-w-question-location-vf-003 | 7 |
| b1-01-w-question-repair-vf-008 | 6 |
| b1-01-yes-no-question-vf-004 | 6 |

### Survivor variants by evidenceType recommendation

| evidenceType | count |
| --- | --- |
| auto_core | 33 |
| auto_core exact | 6 |
| auto_supported | 11 |
| self_marked_production | 4 |

### Survivor families by family type

| family type | families |
| --- | --- |
| Type A | 1 |
| Type B | 8 |

The final survivor set is balanced enough for schema mapping. It still strongly favours V2 and question-order practice, but those are legitimate B1-01 sentence-control priorities. `brauchen` is now capped and downgraded. Noun capitalisation remains limited and weak-evidence only.

## 13. Final QA Checklist

| Check | Result |
| --- | --- |
| All draft families audited. | Confirmed |
| All draft variants audited. | Confirmed |
| Cut/deferred/human-check variants excluded from clean survivor list. | Confirmed |
| No app code. | Confirmed |
| No app-ready JSON. | Confirmed |
| No Codex prompt. | Confirmed |
| No schema mapping. | Confirmed |
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
| Clean survivor families are ready for schema mapping. | Confirmed |

## 14. Final Verdict

`READY_FOR_VARIANT_SCHEMA_MAPPING`

Exact next recommended action: run **B1-01 Curated Variant Families — Schema Mapping** against this clean QA-approved file, then create the Codex import plan for static family records + static variants.
