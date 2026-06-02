# Ozmosis B1-01 Final Variant-Family Inventory — Row Reconciliation / Keep-Replace-Exclude Ledger

Status: Final row-integrity checkpoint before Codex implementation prompt.
Scope: B1-01 — Getting started at work/course.
Output file: `ozmosis_b1_m01_final_variant_family_inventory_v0_1.md`.

## 1. Source Verification
| Source file/content | Available? | Used for | Reliability | Notes / caveats |
| --- | --- | --- | --- | --- |
| ozmosis_b1_m01_variant_family_codex_import_plan_v0_1.md | Yes | Import approach / old-item strategy / v0.80.3 planning | High | Present in /mnt/data. |
| ozmosis_b1_m01_variant_family_schema_mapping_v0_1.md | Yes | Schema-mapped families and variants | High | Present in /mnt/data. |
| ozmosis_b1_m01_curated_variant_families_qa_approved_v0_1.md | Yes | QA-approved variants and cuts | High | Present in /mnt/data. |
| ozmosis_b1_m01_curated_variant_families_draft_v0_1.md | Yes | Draft/provenance and 62 vs 60 discrepancy | High | Present in /mnt/data. |
| ozmosis_b1_m01_total_inventory_after_topup_phase3a.md | Yes | Combined original + top-up inventory | High | Present in /mnt/data. |
| ozmosis_b1_m01_vocab_activity_coverage_audit.md | Yes | Coverage/evidence risk context | High | Present in /mnt/data. |
| ozmosis_b1_m01_topup_phase3a_qa_approved.md | Yes | Top-up survivor/cut QA | High | Present in /mnt/data. |
| ozmosis_b1_m01_topup_40_candidate_batch.md | Yes | Top-up 40 source rows | High | Present in /mnt/data. |
| ozmosis_phase3a_b1_m01_getting_started_qa_approved.md | Yes | Original Phase 3A survivor/cut QA | High | Present in /mnt/data. |
| ozmosis_phase3_b1_m01_getting_started_draft_items.md | Yes | Original Phase 3 draft rows | High | Present in /mnt/data. |
| OZMOSIS_SOURCE_BRIEF_v0.80.2.md | Yes | Product/evidence constraints | High | Present in /mnt/data. |
| OZMOSIS_DEVELOPMENT_ROADMAP_v0.80.2.md | Yes | Architecture/storage/version guardrails | High | Present in /mnt/data. |
| ozmosis-v0_80_2.zip | Yes | Current app package reference; code inspection still for Codex | High | Present in /mnt/data. |
| TELC/Beruf/Aspekte files | Yes | Structural inspiration only, no copied text | Low for item text | Available in source set; explicitly not used for copied app text. |

Exact files used: `ozmosis_b1_m01_variant_family_codex_import_plan_v0_1.md`, `ozmosis_b1_m01_variant_family_schema_mapping_v0_1.md`, `ozmosis_b1_m01_curated_variant_families_qa_approved_v0_1.md`, `ozmosis_b1_m01_curated_variant_families_draft_v0_1.md`, `ozmosis_b1_m01_total_inventory_after_topup_phase3a.md`, `ozmosis_b1_m01_topup_phase3a_qa_approved.md`, `ozmosis_b1_m01_topup_40_candidate_batch.md`, `ozmosis_phase3a_b1_m01_getting_started_qa_approved.md`, `ozmosis_phase3_b1_m01_getting_started_draft_items.md`, `OZMOSIS_SOURCE_BRIEF_v0.80.2.md`, `OZMOSIS_DEVELOPMENT_ROADMAP_v0.80.2.md`. TELC/Beruf/Aspekte files were not used for copied text.

## 2. Executive Reconciliation Verdict

`ROW_INTEGRITY_OK_WITH_CAVEATS`

- Codex implementation prompt can proceed after this file is saved as the final inventory source.
- The missing standalone final inventory has now been resolved by this ledger.
- No silent row-loss issue remains.
- Caveat: the final inventory was backfilled after schema mapping/import planning, and Codex still must inspect the actual v0.80.2 app source before implementation.

## 3. Full Count Chain Reconciliation
| Stage | Expected count | Actual found count | Approved/revised/survivor count | Cut count | Excluded count | Deferred count | Human-check count | Count discrepancy? | Reconciliation status | Notes |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Original Phase 3 draft | 39 | 39 | 39 source rows | 0 | 0 | 0 | 0 | No | OK | Original draft states 39 total: 3 notice, 10 recognition, 8 cloze, 6 repair, 5 Satzbau, 3 contrast, 1 transformation, 3 production. |
| Original Phase 3A QA | 39 | 39 | 36 proceeding | 3 | 0 | 0 | 0 | No | OK | 28 approved as-is + 8 revised = 36; 3 documented cuts. |
| Top-up candidate batch | 40 | 40 | 40 source rows | 0 | 0 | 0 | 0 | No | OK | 40 unique candidate IDs found. |
| Top-up Phase 3A QA | 40 | 40 | 34 clean survivors | 6 | 0 | 0 | 0 | No | OK | 34 survivor rows and 6 cut rows in combined inventory. |
| Combined inventory after top-up | 70 | 70 | 70 clean pieces | 0 | 0 | 0 | 0 | No | OK | 67 practice/production + 3 notice/concept cards. |
| Variant-family draft | 62 claimed | 60 concrete variant rows | 60 draft variant rows | 0 | 0 | 0 | 0 | Yes | OK_WITH_DOCUMENTED_DISCREPANCY | Draft summary claims 62, but QA found 60 concrete variant rows. Two claimed rows do not exist as concrete rows. |
| Variant-family QA | 60 | 60 | 54 clean survivor variants | 6 | 0 | 0 | 0 | No | OK | 6 documented cut variants; 9 families survive. |
| Variant-family schema mapping | 54 | 54 | 54 mapped variants | 6 cut variants excluded | 0 | 0 | 0 | No | OK | 9 clean families and 54 variants mapped; cut variants excluded. |
| Variant-family import plan | 1 plan | 1 plan | Option B selected | 0 | 0 | 0 | 0 | No | OK | Plan recommends static family records + static approved variants and v0.80.3. |

## 4. Row Discrepancy Ledger
| Source/stage | Claimed count | Actual count | Difference | Cause | Resolved? | Action |
| --- | --- | --- | --- | --- | --- | --- |
| Curated variant-family draft | 62 variants | 60 concrete variant rows | 2 | Draft summary/count error; only 60 rows exist in Section 5 and QA table. | Yes | Proceed with 60 actual rows; keep 62→60 discrepancy in Codex notes. |
| Variant-family QA survivors | 54 survivors | 54 schema-mapped variants | 0 | No discrepancy after QA cuts. | Yes | Proceed. |
| Original Phase 3A | 36 proceeding | 36 in combined inventory | 0 | No discrepancy. | Yes | Proceed. |
| Top-up Phase 3A | 34 survivors | 34 in combined inventory | 0 | No discrepancy. | Yes | Proceed. |

## 5. Original Phase 3A Item Ledger
| Source item ID | Original QA status | Task type | Target family | Target ID | Final inventory decision | Replacement/variant family if any | Evidence status | Notes |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| draft_b1_m01_notice_001 | approved/revised notice | Notice | TF-B1-01-LS01-01 | T-B1-01-LS01-01-03 | keep_notice_concept | — | non-evidence notice/concept | V2 main-clause notice: Heute lerne ich Deutsch. |
| draft_b1_m01_notice_002 | approved/revised notice | Notice | TF-B1-01-LS09-01 | T-B1-01-LS09-01-01 | keep_notice_concept | — | non-evidence notice/concept | Noun-capitalisation notice: der Kurs, die Arbeit, die Hilfe. |
| draft_b1_m01_notice_003 | approved/revised notice | Notice | TF-B1-01-LS02-01 | T-B1-01-LS02-01-02 | keep_notice_concept | — | non-evidence notice/concept | mein/meine familiar-noun awareness: mein Kurs, meine Arbeit. |
| draft_b1_m01_recognition_001 | clean_survivor | Auswahl / recognition | TF-B1-01-LS01-01 | T-B1-01-LS01-01-01 | keep_single_canonical | — | auto_core | Recognise name-giving sentence: Ich heiße Mina. |
| draft_b1_m01_recognition_002 | clean_survivor | Auswahl / recognition | TF-B1-01-LS01-01 | T-B1-01-LS01-01-02 | keep_single_canonical | — | auto_core | Recognise learning-German sentence: Ich lerne Deutsch. |
| draft_b1_m01_recognition_003 | clean_survivor | Auswahl / recognition | TF-B1-01-LS01-02 | T-B1-01-LS01-02-01 | rotate_with_variant_family | b1-01-w-question-location-vf-003 | auto_core | Recognise W-question order: Wo ist der Kursraum? |
| draft_b1_m01_recognition_004 | clean_survivor | Auswahl / recognition | TF-B1-01-LS01-02 | T-B1-01-LS01-02-02 | rotate_with_variant_family | b1-01-yes-no-question-vf-004 | auto_core | Recognise yes/no question order: Brauche ich ein Heft? |
| draft_b1_m01_recognition_005 | clean_survivor | Auswahl / recognition | TF-B1-01-LS08-01 | T-B1-01-LS08-01-01 | keep_single_canonical | — | practice_only / auto_supported-style | German-first scenario: der Kurs vs Beruf/Arbeit. |
| draft_b1_m01_recognition_006 | clean_survivor | Auswahl / recognition | TF-B1-01-LS08-01 | T-B1-01-LS08-01-03 | rotate_with_variant_family | b1-01-brauchen-acc-vf-005 | auto_core | Recognise survival phrase: Ich brauche Hilfe. |
| draft_b1_m01_recognition_007 | clean_survivor | Auswahl / recognition | TF-B1-01-LS02-01 | T-B1-01-LS02-01-01 | keep_single_canonical | — | auto_supported | Recognise phrase: die Arbeit. |
| draft_b1_m01_recognition_008 | clean_survivor | Auswahl / recognition | TF-B1-01-LS02-01 | T-B1-01-LS02-01-02 | rotate_with_variant_family | b1-01-mein-meine-familiar-vf-006 | auto_core | Recognise possessive phrase: mein Kurs. |
| draft_b1_m01_recognition_010 | clean_survivor | Auswahl / recognition | TF-B1-01-LS09-01 | T-B1-01-LS09-01-01 | rotate_with_variant_family | b1-01-noun-capitalisation-vf-007 | practice_only / auto_supported-style | Recognise noun capitalisation in: Ich mache einen Kurs. |
| draft_b1_m01_cloze_001 | clean_survivor | Luecke / cloze | TF-B1-01-LS01-01 | T-B1-01-LS01-01-01 | keep_single_canonical | — | auto_core exact; heisse caveat | Complete identity verb: Ich ___ Mina. → heiße. |
| draft_b1_m01_cloze_002 | clean_survivor | Luecke / cloze | TF-B1-01-LS01-01 | T-B1-01-LS01-01-02 | keep_single_canonical | — | auto_core | Complete learning sentence with lerne. |
| draft_b1_m01_cloze_003 | clean_survivor | Luecke / cloze | TF-B1-01-LS01-01 | T-B1-01-LS01-01-03 | rotate_with_variant_family | b1-01-v2-fronted-time-vf-001 | auto_core | Complete V2 sentence: Heute ___ ich Deutsch. |
| draft_b1_m01_cloze_004 | clean_survivor | Luecke / cloze | TF-B1-01-LS08-01 | T-B1-01-LS08-01-01 | keep_single_canonical | — | auto_supported; noun capitalisation caveat | Complete course noun: Ich mache einen ___. → Kurs. |
| draft_b1_m01_cloze_005 | clean_survivor | Luecke / cloze | TF-B1-01-LS08-01 | T-B1-01-LS08-01-03 | rotate_with_variant_family | b1-01-brauchen-acc-vf-005 | auto_core exact; lower-case caveat | Complete Hilfe phrase: Ich brauche ___. → Hilfe. |
| draft_b1_m01_cloze_006 | clean_survivor | Luecke / cloze | TF-B1-01-LS02-01 | T-B1-01-LS02-01-02 | rotate_with_variant_family | b1-01-mein-meine-familiar-vf-006 | auto_core | Complete possessive: ___ Arbeit. → meine. |
| draft_b1_m01_cloze_007 | clean_survivor | Luecke / cloze | TF-B1-01-LS04-01 | T-B1-01-LS04-01-01 | rotate_with_variant_family | b1-01-brauchen-acc-vf-005 | auto_core | Complete brauchen phrase: Ich ___ Informationen. |
| draft_b1_m01_cloze_008 | clean_survivor | Luecke / cloze | TF-B1-01-LS01-02 | T-B1-01-LS01-02-02 | rotate_with_variant_family | b1-01-yes-no-question-vf-004 | auto_core | Complete yes/no question: Brauche ___ ein Heft? → ich. |
| draft_b1_m01_repair_001 | clean_survivor | Reparatur / repair | TF-B1-01-LS01-01 | T-B1-01-LS01-01-03 | rotate_with_variant_family | b1-01-v2-fronted-time-vf-001 | auto_core | Repair V2 order: Heute ich lerne Deutsch. |
| draft_b1_m01_repair_002 | clean_survivor | Reparatur / repair | TF-B1-01-LS09-01 | T-B1-01-LS09-01-01 | rotate_with_variant_family | b1-01-noun-capitalisation-vf-007 | auto_supported / mechanics | Repair noun capitalisation: Ich brauche hilfe. |
| draft_b1_m01_repair_003 | clean_survivor | Reparatur / repair | TF-B1-01-LS01-02 | T-B1-01-LS01-02-01 | rotate_with_variant_family | b1-01-w-question-location-vf-003, b1-01-w-question-repair-vf-008 | auto_core | Repair W-question order: Wo der Kursraum ist? |
| draft_b1_m01_repair_004 | clean_survivor | Reparatur / repair | TF-B1-01-LS02-01 | T-B1-01-LS02-01-02 | rotate_with_variant_family | b1-01-mein-meine-familiar-vf-006 | auto_core | Repair possessive: Mein/Meine Arbeit begins today. |
| draft_b1_m01_repair_005 | clean_survivor | Reparatur / repair | TF-B1-01-LS04-01 | T-B1-01-LS04-01-01 | rotate_with_variant_family | b1-01-brauchen-acc-vf-005 | auto_core | Repair brauchen/Hilfe collocation. |
| draft_b1_m01_satzbau_001 | clean_survivor | Satzbau / sentence_building | TF-B1-01-LS01-01 | T-B1-01-LS01-01-01 | keep_single_canonical | — | auto_core | Build identity sentence. |
| draft_b1_m01_satzbau_002 | clean_survivor | Satzbau / sentence_building | TF-B1-01-LS01-01 | T-B1-01-LS01-01-03 | rotate_with_variant_family | b1-01-v2-fronted-time-vf-001 | auto_core | Build V2 sentence: Heute lerne ich Deutsch. |
| draft_b1_m01_satzbau_003 | clean_survivor | Satzbau / sentence_building | TF-B1-01-LS01-02 | T-B1-01-LS01-02-01 | rotate_with_variant_family | b1-01-w-question-location-vf-003 | auto_core | Build W-question: Wo ist der Kursraum? |
| draft_b1_m01_satzbau_004 | clean_survivor | Satzbau / sentence_building | TF-B1-01-LS01-02 | T-B1-01-LS01-02-02 | rotate_with_variant_family | b1-01-yes-no-question-vf-004 | auto_core | Build yes/no question: Brauche ich ein Heft? |
| draft_b1_m01_satzbau_005 | clean_survivor | Satzbau / sentence_building | TF-B1-01-LS04-01 | T-B1-01-LS04-01-01 | rotate_with_variant_family | b1-01-brauchen-acc-vf-005 | auto_core | Build need phrase: Ich brauche Informationen. |
| draft_b1_m01_contrast_002 | clean_survivor | Kontrast / contrast | TF-B1-01-LS02-01 | T-B1-01-LS02-01-02 | rotate_with_variant_family | b1-01-mein-meine-familiar-vf-006 | auto_core | Contrast mein/meine: meine Arbeit vs nearby wrong forms. |
| draft_b1_m01_contrast_003 | clean_survivor | Kontrast / contrast | TF-B1-01-LS01-02 | T-B1-01-LS01-02-02 | rotate_with_variant_family | b1-01-yes-no-question-vf-004 | auto_core | Contrast yes/no question vs statement. |
| draft_b1_m01_transformation_001 | clean_survivor | Umformen / transformation | TF-B1-01-LS01-01 | T-B1-01-LS01-01-03 | rotate_with_variant_family | b1-01-v2-fronted-time-vf-001 | auto_core | Transform sentence with Heute; preserve V2. |
| draft_b1_m01_production_001 | clean_survivor | Produktion / controlled_production | TF-B1-01-LS10-01 | T-B1-01-LS10-01-01 | rotate_with_variant_family | b1-01-controlled-production-vf-009 | self_marked_production only | Self-marked short self-introduction. |
| draft_b1_m01_production_002 | clean_survivor | Produktion / controlled_production | TF-B1-01-LS10-01 | T-B1-01-LS10-01-02 | rotate_with_variant_family | b1-01-controlled-production-vf-009 | self_marked_production only | Self-marked simple need sentence. |
| draft_b1_m01_production_003 | clean_survivor | Produktion / controlled_production | TF-B1-01-LS10-01 | T-B1-01-LS10-01-01 | rotate_with_variant_family | b1-01-controlled-production-vf-009 | self_marked_production only | Self-marked Heute/V2 sentence. |
| draft_b1_m01_recognition_009 | cut | — | — | — | exclude_cut | — | not imported; no evidence | Thin learning-vocabulary recognition |
| draft_b1_m01_repair_006 | cut | — | — | — | exclude_cut | — | not imported; no evidence | Punctuation-only repair |
| draft_b1_m01_contrast_001 | cut | — | — | — | exclude_cut | — | not imported; no evidence | Too obvious / duplicates revised recognition_005 |

## 6. Top-Up Phase 3A Item Ledger
| Source item ID | Top-up QA status | Task type | Target family | Target ID | Final inventory decision | Replacement/variant family if any | Evidence status | Notes |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| draft_b1_m01_topup_recognition_001 | clean_survivor | Auswahl / recognition | TF-B1-01-LS01-01 | T-B1-01-LS01-01-03 | keep_single_canonical | — | auto_core; revised distractor | Recognise V2 after Am Montag. |
| draft_b1_m01_topup_recognition_002 | clean_survivor | Auswahl / recognition | TF-B1-01-LS01-02 | T-B1-01-LS01-02-01 | rotate_with_variant_family | b1-01-w-question-location-vf-003 | auto_core | Recognise W-question: Wo finde ich die App? |
| draft_b1_m01_topup_recognition_003 | clean_survivor | Auswahl / recognition | TF-B1-01-LS01-02 | T-B1-01-LS01-02-02 | rotate_with_variant_family | b1-01-yes-no-question-vf-004 | auto_core; revised prompt | Recognise standard written yes/no question: Ist die App hier? |
| draft_b1_m01_topup_recognition_004 | clean_survivor | Auswahl / recognition | TF-B1-01-LS04-01 | T-B1-01-LS04-01-01 | rotate_with_variant_family | b1-01-brauchen-acc-vf-005 | auto_core; revised distractor | Recognise need phrase: Ich brauche die Unterlagen. |
| draft_b1_m01_topup_recognition_005 | clean_survivor | Auswahl / recognition | TF-B1-01-LS02-01 | T-B1-01-LS02-01-02 | rotate_with_variant_family | b1-01-mein-meine-familiar-vf-006 | auto_core | Recognise possessive phrase: mein Heft. |
| draft_b1_m01_topup_recognition_006 | clean_survivor | Auswahl / recognition | TF-B1-01-LS09-01 | T-B1-01-LS09-01-01 | rotate_with_variant_family | b1-01-noun-capitalisation-vf-007 | auto_supported / mechanics | Recognise noun capitalisation: Die Unterlagen sind hier. |
| draft_b1_m01_topup_cloze_001 | clean_survivor | Luecke / cloze | TF-B1-01-LS01-01 | T-B1-01-LS01-01-03 | rotate_with_variant_family | b1-01-v2-fronted-time-vf-001 | auto_core | Morgen ___ ich im Kurs. → bin. |
| draft_b1_m01_topup_cloze_002 | clean_survivor | Luecke / cloze | TF-B1-01-LS01-01 | T-B1-01-LS01-01-03 | rotate_with_variant_family | b1-01-v2-fronted-time-vf-001, b1-01-v2-fronted-place-vf-002 | auto_core; revised body | Am Vormittag ___ ich Deutsch. → lerne. |
| draft_b1_m01_topup_cloze_003 | clean_survivor | Luecke / cloze | TF-B1-01-LS01-02 | T-B1-01-LS01-02-01 | rotate_with_variant_family | b1-01-w-question-location-vf-003 | auto_core | Wo ___ ich die App? → finde. |
| draft_b1_m01_topup_cloze_004 | clean_survivor | Luecke / cloze | TF-B1-01-LS01-02 | T-B1-01-LS01-02-02 | rotate_with_variant_family | b1-01-yes-no-question-vf-004 | auto_core exact only; lower-case caveat | ___ ich die Unterlagen? → Brauche. |
| draft_b1_m01_topup_cloze_005 | clean_survivor | Luecke / cloze | TF-B1-01-LS04-01 | T-B1-01-LS04-01-01 | rotate_with_variant_family | b1-01-brauchen-acc-vf-005 | auto_core | Ich ___ die App. → brauche. |
| draft_b1_m01_topup_cloze_006 | clean_survivor | Luecke / cloze | TF-B1-01-LS04-01 | T-B1-01-LS04-01-01 | rotate_with_variant_family | b1-01-noun-capitalisation-vf-007 | auto_supported; noun capitalisation caveat | Ich brauche ein ___. → Heft. |
| draft_b1_m01_topup_cloze_007 | clean_survivor | Luecke / cloze | TF-B1-01-LS02-01 | T-B1-01-LS02-01-02 | rotate_with_variant_family | b1-01-mein-meine-familiar-vf-006 | auto_core | Das ist ___ App. → meine. |
| draft_b1_m01_topup_cloze_008 | clean_survivor | Luecke / cloze | TF-B1-01-LS02-01 | T-B1-01-LS02-01-02 | rotate_with_variant_family | b1-01-mein-meine-familiar-vf-006 | auto_core | Ich brauche ___ Unterlagen. → meine. |
| draft_b1_m01_topup_cloze_009 | clean_survivor | Luecke / cloze | TF-B1-01-LS09-01 | T-B1-01-LS09-01-01 | rotate_with_variant_family | b1-01-noun-capitalisation-vf-007 | auto_supported; noun capitalisation caveat | Die ___ ist hier. → App. |
| draft_b1_m01_topup_satzbau_001 | clean_survivor | Satzbau / sentence_building | TF-B1-01-LS01-01 | T-B1-01-LS01-01-03 | rotate_with_variant_family | b1-01-v2-fronted-time-vf-001 | auto_core | Build: Heute bin ich im Kurs. |
| draft_b1_m01_topup_satzbau_002 | clean_survivor | Satzbau / sentence_building | TF-B1-01-LS01-01 | T-B1-01-LS01-01-03 | rotate_with_variant_family | b1-01-v2-fronted-place-vf-002 | auto_core | Build: Im Kurs lerne ich Deutsch. |
| draft_b1_m01_topup_satzbau_003 | clean_survivor | Satzbau / sentence_building | TF-B1-01-LS01-01 | T-B1-01-LS01-01-03 | rotate_with_variant_family | b1-01-v2-fronted-time-vf-001 | auto_core | Build: Am Montag brauche ich die App. |
| draft_b1_m01_topup_satzbau_004 | clean_survivor | Satzbau / sentence_building | TF-B1-01-LS01-02 | T-B1-01-LS01-02-01 | rotate_with_variant_family | b1-01-w-question-location-vf-003 | auto_core | Build: Wo finde ich die Unterlagen? |
| draft_b1_m01_topup_satzbau_005 | clean_survivor | Satzbau / sentence_building | TF-B1-01-LS01-02 | T-B1-01-LS01-02-02 | rotate_with_variant_family | b1-01-yes-no-question-vf-004 | auto_core | Build: Ist die App hier? |
| draft_b1_m01_topup_satzbau_006 | clean_survivor | Satzbau / sentence_building | TF-B1-01-LS01-02 | T-B1-01-LS01-02-02 | rotate_with_variant_family | b1-01-yes-no-question-vf-004 | auto_core | Build: Haben Sie Informationen? |
| draft_b1_m01_topup_satzbau_007 | clean_survivor | Satzbau / sentence_building | TF-B1-01-LS04-01 | T-B1-01-LS04-01-01 | rotate_with_variant_family | b1-01-brauchen-acc-vf-005 | auto_core | Build: Ich brauche ein Heft. |
| draft_b1_m01_topup_satzbau_008 | clean_survivor | Satzbau / sentence_building | TF-B1-01-LS02-01 | T-B1-01-LS02-01-02 | rotate_with_variant_family | b1-01-mein-meine-familiar-vf-006 | auto_core | Build: Das ist meine App. |
| draft_b1_m01_topup_satzbau_009 | clean_survivor | Satzbau / sentence_building | TF-B1-01-LS02-01 | T-B1-01-LS02-01-02 | rotate_with_variant_family | b1-01-mein-meine-familiar-vf-006 | auto_core | Build: Meine Unterlagen sind hier. |
| draft_b1_m01_topup_repair_001 | clean_survivor | Reparatur / repair | TF-B1-01-LS01-01 | T-B1-01-LS01-01-03 | rotate_with_variant_family | b1-01-v2-fronted-time-vf-001 | auto_core | Repair: Heute ich bin im Kurs. → Heute bin ich im Kurs. |
| draft_b1_m01_topup_repair_002 | clean_survivor | Reparatur / repair | TF-B1-01-LS01-01 | T-B1-01-LS01-01-03 | rotate_with_variant_family | b1-01-v2-fronted-place-vf-002 | auto_core | Repair: Im Kurs ich lerne Deutsch. → Im Kurs lerne ich Deutsch. |
| draft_b1_m01_topup_repair_003 | clean_survivor | Reparatur / repair | TF-B1-01-LS01-02 | T-B1-01-LS01-02-01 | rotate_with_variant_family | b1-01-w-question-location-vf-003, b1-01-w-question-repair-vf-008 | auto_core | Repair: Wo ich finde die App? → Wo finde ich die App? |
| draft_b1_m01_topup_repair_006 | clean_survivor | Reparatur / repair | TF-B1-01-LS09-01 | T-B1-01-LS09-01-01 | rotate_with_variant_family | b1-01-noun-capitalisation-vf-007 | auto_supported / mechanics | Repair: Ich brauche ein heft. → Ich brauche ein Heft. |
| draft_b1_m01_topup_repair_007 | clean_survivor | Reparatur / repair | TF-B1-01-LS02-01 | T-B1-01-LS02-01-02 | rotate_with_variant_family | b1-01-mein-meine-familiar-vf-006 | auto_core | Repair: Das ist mein App. → Das ist meine App. |
| draft_b1_m01_topup_repair_008 | clean_survivor | Reparatur / repair | TF-B1-01-LS02-01 | T-B1-01-LS02-01-02 | rotate_with_variant_family | b1-01-mein-meine-familiar-vf-006 | auto_core | Repair: Ich brauche mein Unterlagen. → Ich brauche meine Unterlagen. |
| draft_b1_m01_topup_contrast_002 | clean_survivor | Kontrast / contrast | TF-B1-01-LS01-02 | T-B1-01-LS01-02-01 | rotate_with_variant_family | b1-01-w-question-location-vf-003, b1-01-w-question-repair-vf-008 | auto_core | Contrast W-question order: Wo finde ich die App? |
| draft_b1_m01_topup_production_001 | clean_survivor | Produktion / controlled_production | TF-B1-01-LS10-01 | T-B1-01-LS10-01-01 | rotate_with_variant_family | b1-01-controlled-production-vf-009 | self_marked_production only | Self-marked two-sentence course self-introduction. |
| draft_b1_m01_topup_production_002 | clean_survivor | Produktion / controlled_production | TF-B1-01-LS10-01 | T-B1-01-LS10-01-02 | rotate_with_variant_family | b1-01-controlled-production-vf-009 | self_marked_production only | Self-marked need sentence for course. |
| draft_b1_m01_topup_production_003 | clean_survivor | Produktion / controlled_production | TF-B1-01-LS10-01 | T-B1-01-LS10-01-01 | rotate_with_variant_family | b1-01-controlled-production-vf-009 | self_marked_production only | Self-marked Heute sentence. |
| draft_b1_m01_topup_recognition_007 | cut | — | — | — | exclude_cut | — | not imported; no evidence | Thin vocabulary recognition / flashcard-like |
| draft_b1_m01_topup_cloze_010 | cut | — | — | — | exclude_cut | — | not imported; no evidence | Deutschunterricht compound too vocabulary/spelling-heavy |
| draft_b1_m01_topup_repair_004 | cut | — | — | — | exclude_cut | — | not imported; no evidence | Ambiguous spoken/declarative question |
| draft_b1_m01_topup_repair_005 | cut | — | — | — | exclude_cut | — | not imported; no evidence | Tests register/style rather than a clear error |
| draft_b1_m01_topup_contrast_001 | cut | — | — | — | exclude_cut | — | not imported; no evidence | Duplicates recognition_005 |
| draft_b1_m01_topup_contrast_003 | cut | — | — | — | exclude_cut | — | not imported; no evidence | Marked-order distractor too subtle/possible |

## 7. Variant Family Final Inventory
| Variant family ID | Family target | Family type | Source item IDs | Clean variant count | Final inventory role | Replaces/rotates old items? | Evidence interpretation | Review group | Same-session cap | Notes |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| b1-01-v2-fronted-time-vf-001 | V2 after fronted time phrase | Type B | draft_b1_m01_cloze_003; draft_b1_m01_satzbau_002; draft_b1_m01_repair_001; draft_b1_m01_transformation_001; draft_b1_m01_topup_cloze_001; draft_b1_m01_topup_cloze_002; draft_b1_m01_topup_satzbau_001; draft_b1_m01_topup_satzbau_003; draft_b1_m01_topup_repair_001 | 8 | import_family | Yes: replace/rotate selected source items | Frame-level V2 evidence; exact verb differs by cue, so do not treat as one lexical verb target. | rg-b1-01-v2-fronted-time | 1 | low |
| b1-01-v2-fronted-place-vf-002 | V2 after fronted place phrase | Type B | draft_b1_m01_topup_satzbau_002; draft_b1_m01_topup_repair_002; draft_b1_m01_topup_cloze_002 | 6 | import_family | Yes: replace/rotate selected source items | Frame-level V2 evidence for place-first main clauses. | rg-b1-01-v2-fronted-place | 1 | low |
| b1-01-w-question-location-vf-003 | W-question word order for course orientation | Type B | draft_b1_m01_recognition_003; draft_b1_m01_repair_003; draft_b1_m01_satzbau_003; draft_b1_m01_topup_recognition_002; draft_b1_m01_topup_cloze_003; draft_b1_m01_topup_satzbau_004; draft_b1_m01_topup_repair_003; draft_b1_m01_topup_contrast_002 | 7 | import_family | Yes: replace/rotate selected source items | Question-frame evidence; some variants target ist, others finde. | rg-b1-01-w-question-orientation | 1 | low |
| b1-01-yes-no-question-vf-004 | Yes/no question word order | Type B | draft_b1_m01_recognition_004; draft_b1_m01_cloze_008; draft_b1_m01_satzbau_004; draft_b1_m01_contrast_003; draft_b1_m01_topup_recognition_003; draft_b1_m01_topup_cloze_004; draft_b1_m01_topup_satzbau_005; draft_b1_m01_topup_satzbau_006 | 6 | import_family | Yes: replace/rotate selected source items | Question-frame evidence; target answer varies by verb. | rg-b1-01-yes-no-question-order | 1 | minor: sentence-start capitalisation fallback |
| b1-01-brauchen-acc-vf-005 | brauchen as basic course/work survival frame | Type A | draft_b1_m01_recognition_006; draft_b1_m01_cloze_005; draft_b1_m01_cloze_007; draft_b1_m01_repair_005; draft_b1_m01_satzbau_005; draft_b1_m01_topup_recognition_004; draft_b1_m01_topup_cloze_005; draft_b1_m01_topup_satzbau_007 | 5 | import_family | Yes: replace/rotate selected source items | Capped survival/scaffold evidence; not B1-depth proof. | rg-b1-01-brauchen-acc-survival | 1 | medium: A1/A2 survival scaffold; cap sibling evidence |
| b1-01-mein-meine-familiar-vf-006 | mein/meine with familiar B1-01 nouns | Type B | draft_b1_m01_recognition_008; draft_b1_m01_cloze_006; draft_b1_m01_repair_004; draft_b1_m01_contrast_002; draft_b1_m01_topup_recognition_005; draft_b1_m01_topup_cloze_007; draft_b1_m01_topup_cloze_008; draft_b1_m01_topup_satzbau_008; draft_b1_m01_topup_satzbau_009; draft_b1_m01_topup_repair_007; draft_b1_m01_topup_repair_008 | 8 | import_family | Yes: replace/rotate selected source items | Familiar-noun possessive awareness only; not a full article/case table. | rg-b1-01-mein-meine-familiar-nouns | 1 | low |
| b1-01-noun-capitalisation-vf-007 | German noun capitalisation in B1-01 course words | Type B | draft_b1_m01_notice_002 excluded; draft_b1_m01_recognition_010; draft_b1_m01_repair_002; draft_b1_m01_topup_recognition_006; draft_b1_m01_topup_cloze_006; draft_b1_m01_topup_cloze_009; draft_b1_m01_topup_repair_006 | 4 | import_family | Yes: replace/rotate selected source items | Mechanics/support evidence; do not infer broad vocabulary or grammar control. | rg-b1-01-noun-capitalisation-course-words | 1 | medium: mechanics-only and fallback-sensitive |
| b1-01-w-question-repair-vf-008 | Repair W-question word order | Type B | draft_b1_m01_repair_003; draft_b1_m01_topup_repair_003; draft_b1_m01_topup_contrast_002 | 6 | import_family | Yes: replace/rotate selected source items | Repair-level evidence for W-question order, stronger than recognition. | rg-b1-01-w-question-repair | 1 | low |
| b1-01-controlled-production-vf-009 | Controlled self-marked course-entry production | Type B | draft_b1_m01_production_001; draft_b1_m01_production_002; draft_b1_m01_production_003; draft_b1_m01_topup_production_001; draft_b1_m01_topup_production_002; draft_b1_m01_topup_production_003 | 4 | import_family | Yes: replace/rotate selected source items | Self-marked production evidence only; no correctness. | none-production-only | 1 | medium: self-marked only |

## 8. Variant Row Final Inventory
| Variant ID | Parent family ID | QA status | Task type | Task depth | Target answer | Final inventory role | Evidence type | Review eligibility | Notes |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| b1-01-v2-fronted-time-vf-001-var-001 | b1-01-v2-fronted-time-vf-001 | approve_variant_as_is | Luecke | cloze | bin | import_variant | auto_core | eligible_variant_review_after_delay | low |
| b1-01-v2-fronted-time-vf-001-var-002 | b1-01-v2-fronted-time-vf-001 | approve_variant_as_is | Luecke | cloze | bin | import_variant | auto_core | eligible_variant_review_after_delay | low |
| b1-01-v2-fronted-time-vf-001-var-003 | b1-01-v2-fronted-time-vf-001 | approve_variant_as_is | Luecke | cloze | bin | import_variant | auto_core | eligible_variant_review_after_delay | low |
| b1-01-v2-fronted-time-vf-001-var-004 | b1-01-v2-fronted-time-vf-001 | approve_variant_as_is | Luecke | cloze | lerne | import_variant | auto_core | eligible_variant_review_after_delay | low |
| b1-01-v2-fronted-time-vf-001-var-005 | b1-01-v2-fronted-time-vf-001 | approve_variant_as_is | Luecke | cloze | lerne | import_variant | auto_core | eligible_variant_review_after_delay | low |
| b1-01-v2-fronted-time-vf-001-var-006 | b1-01-v2-fronted-time-vf-001 | approve_variant_as_is | Luecke | cloze | lerne | import_variant | auto_core | eligible_variant_review_after_delay | low |
| b1-01-v2-fronted-time-vf-001-var-009 | b1-01-v2-fronted-time-vf-001 | approve_variant_as_is | Luecke | cloze | habe | import_variant | auto_core | eligible_variant_review_after_delay | low |
| b1-01-v2-fronted-time-vf-001-var-010 | b1-01-v2-fronted-time-vf-001 | approve_variant_as_is | Luecke | cloze | habe | import_variant | auto_core | eligible_variant_review_after_delay | low |
| b1-01-v2-fronted-place-vf-002-var-001 | b1-01-v2-fronted-place-vf-002 | approve_variant_as_is | Luecke | cloze | lerne | import_variant | auto_core | eligible_variant_review_after_delay | low |
| b1-01-v2-fronted-place-vf-002-var-002 | b1-01-v2-fronted-place-vf-002 | approve_variant_as_is | Luecke | cloze | lerne | import_variant | auto_core | eligible_variant_review_after_delay | low |
| b1-01-v2-fronted-place-vf-002-var-003 | b1-01-v2-fronted-place-vf-002 | approve_variant_as_is | Luecke | cloze | brauche | import_variant | auto_supported | eligible_family_review_after_delay | low |
| b1-01-v2-fronted-place-vf-002-var-004 | b1-01-v2-fronted-place-vf-002 | approve_variant_as_is | Luecke | cloze | habe | import_variant | auto_core | eligible_variant_review_after_delay | low |
| b1-01-v2-fronted-place-vf-002-var-005 | b1-01-v2-fronted-place-vf-002 | approve_variant_as_is | Luecke | cloze | lerne | import_variant | auto_supported | eligible_family_review_after_delay | low |
| b1-01-v2-fronted-place-vf-002-var-007 | b1-01-v2-fronted-place-vf-002 | revise_variant_and_approve | Luecke | cloze | ist | import_variant | auto_core | eligible_variant_review_after_delay | low |
| b1-01-w-question-location-vf-003-var-001 | b1-01-w-question-location-vf-003 | approve_variant_as_is | Luecke | cloze | ist | import_variant | auto_core | eligible_variant_review_after_delay | low |
| b1-01-w-question-location-vf-003-var-002 | b1-01-w-question-location-vf-003 | approve_variant_as_is | Luecke | cloze | ist | import_variant | auto_core | eligible_variant_review_after_delay | low |
| b1-01-w-question-location-vf-003-var-003 | b1-01-w-question-location-vf-003 | approve_variant_as_is | Luecke | cloze | ist | import_variant | auto_core | eligible_variant_review_after_delay | low |
| b1-01-w-question-location-vf-003-var-004 | b1-01-w-question-location-vf-003 | approve_variant_as_is | Luecke | cloze | finde | import_variant | auto_core | eligible_variant_review_after_delay | low |
| b1-01-w-question-location-vf-003-var-005 | b1-01-w-question-location-vf-003 | approve_variant_as_is | Luecke | cloze | finde | import_variant | auto_core | eligible_variant_review_after_delay | low |
| b1-01-w-question-location-vf-003-var-006 | b1-01-w-question-location-vf-003 | approve_variant_as_is | Luecke | cloze | finde | import_variant | auto_core | eligible_variant_review_after_delay | low |
| b1-01-w-question-location-vf-003-var-007 | b1-01-w-question-location-vf-003 | approve_variant_as_is | Luecke | cloze | finde | import_variant | auto_core | eligible_variant_review_after_delay | low |
| b1-01-yes-no-question-vf-004-var-001 | b1-01-yes-no-question-vf-004 | approve_variant_as_is | Luecke | cloze | Brauche | import_variant | auto_core | eligible_variant_review_after_delay | minor: sentence-start capitalisation fallback; fallback policy needed |
| b1-01-yes-no-question-vf-004-var-002 | b1-01-yes-no-question-vf-004 | approve_variant_as_is | Luecke | cloze | Brauche | import_variant | auto_core | eligible_variant_review_after_delay | minor: sentence-start capitalisation fallback; fallback policy needed |
| b1-01-yes-no-question-vf-004-var-003 | b1-01-yes-no-question-vf-004 | approve_variant_as_is | Luecke | cloze | Brauche | import_variant | auto_core | eligible_variant_review_after_delay | minor: sentence-start capitalisation fallback; fallback policy needed |
| b1-01-yes-no-question-vf-004-var-004 | b1-01-yes-no-question-vf-004 | approve_variant_as_is | Luecke | cloze | Ist | import_variant | auto_core | eligible_variant_review_after_delay | minor: sentence-start capitalisation fallback; fallback policy needed |
| b1-01-yes-no-question-vf-004-var-005 | b1-01-yes-no-question-vf-004 | approve_variant_as_is | Luecke | cloze | Ist | import_variant | auto_core | eligible_variant_review_after_delay | minor: sentence-start capitalisation fallback; fallback policy needed |
| b1-01-yes-no-question-vf-004-var-006 | b1-01-yes-no-question-vf-004 | approve_variant_as_is | Luecke | cloze | Haben | import_variant | auto_core | eligible_variant_review_after_delay | minor: sentence-start capitalisation fallback; fallback policy needed |
| b1-01-brauchen-acc-vf-005-var-001 | b1-01-brauchen-acc-vf-005 | approve_variant_as_is | Luecke | cloze | brauche | import_variant | auto_supported | eligible_family_review_after_delay | medium: A1/A2 survival scaffold; cap sibling evidence |
| b1-01-brauchen-acc-vf-005-var-002 | b1-01-brauchen-acc-vf-005 | approve_variant_as_is | Luecke | cloze | brauche | import_variant | auto_supported | eligible_family_review_after_delay | medium: A1/A2 survival scaffold; cap sibling evidence |
| b1-01-brauchen-acc-vf-005-var-003 | b1-01-brauchen-acc-vf-005 | approve_variant_as_is | Luecke | cloze | brauche | import_variant | auto_supported | eligible_family_review_after_delay | medium: A1/A2 survival scaffold; cap sibling evidence |
| b1-01-brauchen-acc-vf-005-var-004 | b1-01-brauchen-acc-vf-005 | approve_variant_as_is | Luecke | cloze | brauche | import_variant | auto_supported | eligible_family_review_after_delay | medium: A1/A2 survival scaffold; cap sibling evidence |
| b1-01-brauchen-acc-vf-005-var-005 | b1-01-brauchen-acc-vf-005 | approve_variant_as_is | Luecke | cloze | brauche | import_variant | auto_supported | eligible_family_review_after_delay | medium: A1/A2 survival scaffold; cap sibling evidence |
| b1-01-mein-meine-familiar-vf-006-var-001 | b1-01-mein-meine-familiar-vf-006 | approve_variant_as_is | Luecke | cloze | mein | import_variant | auto_core | eligible_variant_review_after_delay | low |
| b1-01-mein-meine-familiar-vf-006-var-002 | b1-01-mein-meine-familiar-vf-006 | approve_variant_as_is | Luecke | cloze | meine | import_variant | auto_core | eligible_variant_review_after_delay | low |
| b1-01-mein-meine-familiar-vf-006-var-003 | b1-01-mein-meine-familiar-vf-006 | approve_variant_as_is | Luecke | cloze | mein | import_variant | auto_core | eligible_variant_review_after_delay | low |
| b1-01-mein-meine-familiar-vf-006-var-004 | b1-01-mein-meine-familiar-vf-006 | approve_variant_as_is | Luecke | cloze | meine | import_variant | auto_core | eligible_variant_review_after_delay | low |
| b1-01-mein-meine-familiar-vf-006-var-005 | b1-01-mein-meine-familiar-vf-006 | approve_variant_as_is | Luecke | cloze | meine | import_variant | auto_core | eligible_variant_review_after_delay | low |
| b1-01-mein-meine-familiar-vf-006-var-006 | b1-01-mein-meine-familiar-vf-006 | approve_variant_as_is | Luecke | cloze | meine | import_variant | auto_core | eligible_variant_review_after_delay | low |
| b1-01-mein-meine-familiar-vf-006-var-007 | b1-01-mein-meine-familiar-vf-006 | revise_variant_and_approve | Luecke | cloze | meine | import_variant | auto_core | eligible_variant_review_after_delay | low |
| b1-01-mein-meine-familiar-vf-006-var-008 | b1-01-mein-meine-familiar-vf-006 | revise_variant_and_approve | Luecke | cloze | mein | import_variant | auto_core | eligible_variant_review_after_delay | low |
| b1-01-noun-capitalisation-vf-007-var-001 | b1-01-noun-capitalisation-vf-007 | approve_variant_as_is | Luecke | cloze | Heft | import_variant | auto_supported | ineligible_support_too_strong | medium: mechanics-only and fallback-sensitive; fallback policy needed |
| b1-01-noun-capitalisation-vf-007-var-002 | b1-01-noun-capitalisation-vf-007 | approve_variant_as_is | Luecke | cloze | App | import_variant | auto_supported | ineligible_support_too_strong | medium: mechanics-only and fallback-sensitive; fallback policy needed |
| b1-01-noun-capitalisation-vf-007-var-003 | b1-01-noun-capitalisation-vf-007 | approve_variant_as_is | Luecke | cloze | Hilfe | import_variant | auto_supported | ineligible_support_too_strong | medium: mechanics-only and fallback-sensitive; fallback policy needed |
| b1-01-noun-capitalisation-vf-007-var-004 | b1-01-noun-capitalisation-vf-007 | approve_variant_as_is | Luecke | cloze | Unterlagen | import_variant | auto_supported | ineligible_support_too_strong | medium: mechanics-only and fallback-sensitive; fallback policy needed |
| b1-01-w-question-repair-vf-008-var-001 | b1-01-w-question-repair-vf-008 | approve_variant_as_is | Reparatur | repair | Wo ist der Kursraum? | import_variant | auto_core | eligible_variant_review_after_delay | fallback policy needed |
| b1-01-w-question-repair-vf-008-var-002 | b1-01-w-question-repair-vf-008 | approve_variant_as_is | Reparatur | repair | Wo finde ich die App? | import_variant | auto_core | eligible_variant_review_after_delay | fallback policy needed |
| b1-01-w-question-repair-vf-008-var-003 | b1-01-w-question-repair-vf-008 | approve_variant_as_is | Reparatur | repair | Wo finde ich die Unterlagen? | import_variant | auto_core | eligible_variant_review_after_delay | low |
| b1-01-w-question-repair-vf-008-var-004 | b1-01-w-question-repair-vf-008 | approve_variant_as_is | Reparatur | repair | Wo ist die App? | import_variant | auto_core | eligible_variant_review_after_delay | low |
| b1-01-w-question-repair-vf-008-var-005 | b1-01-w-question-repair-vf-008 | approve_variant_as_is | Reparatur | repair | Wo ist das Heft? | import_variant | auto_core | eligible_variant_review_after_delay | low |
| b1-01-w-question-repair-vf-008-var-006 | b1-01-w-question-repair-vf-008 | approve_variant_as_is | Reparatur | repair | Wo finde ich Informationen? | import_variant | auto_core | eligible_variant_review_after_delay | low |
| b1-01-controlled-production-vf-009-var-001 | b1-01-controlled-production-vf-009 | approve_variant_as_is | Produktion | controlled_production | self-marked | import_variant | self_marked_production | ineligible_self_marked_production | medium: self-marked only |
| b1-01-controlled-production-vf-009-var-002 | b1-01-controlled-production-vf-009 | approve_variant_as_is | Produktion | controlled_production | self-marked | import_variant | self_marked_production | ineligible_self_marked_production | medium: self-marked only |
| b1-01-controlled-production-vf-009-var-003 | b1-01-controlled-production-vf-009 | approve_variant_as_is | Produktion | controlled_production | self-marked | import_variant | self_marked_production | ineligible_self_marked_production | medium: self-marked only |
| b1-01-controlled-production-vf-009-var-004 | b1-01-controlled-production-vf-009 | approve_variant_as_is | Produktion | controlled_production | self-marked | import_variant | self_marked_production | ineligible_self_marked_production | medium: self-marked only |

### Cut variants
| Cut variant ID | Parent family ID | Reason cut | Included in import? |
| --- | --- | --- | --- |
| b1-01-v2-fronted-time-vf-001-var-007 | b1-01-v2-fronted-time-vf-001 | Duplicate/cross-signal brauchen+V2; use brauchen family or V2 family separately. | No |
| b1-01-v2-fronted-time-vf-001-var-008 | b1-01-v2-fronted-time-vf-001 | Duplicate/cross-signal brauchen+V2 with Unterlagen; too much boundary/evidence risk. | No |
| b1-01-v2-fronted-place-vf-002-var-006 | b1-01-v2-fronted-place-vf-002 | Slightly artificial: “Im Kurs bin ich hier” is grammatical but weak/nonnatural as a practice sentence. | No |
| b1-01-v2-fronted-place-vf-002-var-008 | b1-01-v2-fronted-place-vf-002 | “Im Kurs ist das Heft hier” is clumsy and less natural than “Das Heft ist im Kurs.” | No |
| b1-01-brauchen-acc-vf-005-var-006 | b1-01-brauchen-acc-vf-005 | Already covered by V2/needs overlap; cuts helfen keep brauchen capped at 5 variants. | No |
| b1-01-noun-capitalisation-vf-007-var-005 | b1-01-noun-capitalisation-vf-007 | Existing-item overlap plus hidden accusative exposure; too much for a mechanics family. | No |

## 9. Keep / Replace / Exclude Summary

### A. Kept single canonical items
| Source item ID | Reason kept | Evidence handling | Notes |
| --- | --- | --- | --- |
| draft_b1_m01_recognition_001 | Useful baseline not covered better by a variant family | auto_core | Recognise name-giving sentence: Ich heiße Mina. |
| draft_b1_m01_recognition_002 | Useful baseline not covered better by a variant family | auto_core | Recognise learning-German sentence: Ich lerne Deutsch. |
| draft_b1_m01_recognition_005 | Useful baseline not covered better by a variant family | practice_only / auto_supported-style | German-first scenario: der Kurs vs Beruf/Arbeit. |
| draft_b1_m01_recognition_007 | Useful baseline not covered better by a variant family | auto_supported | Recognise phrase: die Arbeit. |
| draft_b1_m01_cloze_001 | Useful baseline not covered better by a variant family | auto_core exact; heisse caveat | Complete identity verb: Ich ___ Mina. → heiße. |
| draft_b1_m01_cloze_002 | Useful baseline not covered better by a variant family | auto_core | Complete learning sentence with lerne. |
| draft_b1_m01_cloze_004 | Useful baseline not covered better by a variant family | auto_supported; noun capitalisation caveat | Complete course noun: Ich mache einen ___. → Kurs. |
| draft_b1_m01_satzbau_001 | Useful baseline not covered better by a variant family | auto_core | Build identity sentence. |
| draft_b1_m01_topup_recognition_001 | Useful baseline not covered better by a variant family | auto_core; revised distractor | Recognise V2 after Am Montag. |

### B. Items replaced or rotated by variant families
| Source item ID | Variant family ID | Replace or rotate? | Reason | Duplicate-risk note |
| --- | --- | --- | --- | --- |
| draft_b1_m01_recognition_003 | b1-01-w-question-location-vf-003 | rotate | Covered by approved variant family; prevent duplicate fixed-item exposure | Do not also expose as standalone normal practice unless dev/QA-only |
| draft_b1_m01_recognition_004 | b1-01-yes-no-question-vf-004 | rotate | Covered by approved variant family; prevent duplicate fixed-item exposure | Do not also expose as standalone normal practice unless dev/QA-only |
| draft_b1_m01_recognition_006 | b1-01-brauchen-acc-vf-005 | rotate | Covered by approved variant family; prevent duplicate fixed-item exposure | Do not also expose as standalone normal practice unless dev/QA-only |
| draft_b1_m01_recognition_008 | b1-01-mein-meine-familiar-vf-006 | rotate | Covered by approved variant family; prevent duplicate fixed-item exposure | Do not also expose as standalone normal practice unless dev/QA-only |
| draft_b1_m01_recognition_010 | b1-01-noun-capitalisation-vf-007 | rotate | Covered by approved variant family; prevent duplicate fixed-item exposure | Do not also expose as standalone normal practice unless dev/QA-only |
| draft_b1_m01_cloze_003 | b1-01-v2-fronted-time-vf-001 | rotate | Covered by approved variant family; prevent duplicate fixed-item exposure | Do not also expose as standalone normal practice unless dev/QA-only |
| draft_b1_m01_cloze_005 | b1-01-brauchen-acc-vf-005 | rotate | Covered by approved variant family; prevent duplicate fixed-item exposure | Do not also expose as standalone normal practice unless dev/QA-only |
| draft_b1_m01_cloze_006 | b1-01-mein-meine-familiar-vf-006 | rotate | Covered by approved variant family; prevent duplicate fixed-item exposure | Do not also expose as standalone normal practice unless dev/QA-only |
| draft_b1_m01_cloze_007 | b1-01-brauchen-acc-vf-005 | rotate | Covered by approved variant family; prevent duplicate fixed-item exposure | Do not also expose as standalone normal practice unless dev/QA-only |
| draft_b1_m01_cloze_008 | b1-01-yes-no-question-vf-004 | rotate | Covered by approved variant family; prevent duplicate fixed-item exposure | Do not also expose as standalone normal practice unless dev/QA-only |
| draft_b1_m01_repair_001 | b1-01-v2-fronted-time-vf-001 | rotate | Covered by approved variant family; prevent duplicate fixed-item exposure | Do not also expose as standalone normal practice unless dev/QA-only |
| draft_b1_m01_repair_002 | b1-01-noun-capitalisation-vf-007 | rotate | Covered by approved variant family; prevent duplicate fixed-item exposure | Do not also expose as standalone normal practice unless dev/QA-only |
| draft_b1_m01_repair_003 | b1-01-w-question-location-vf-003, b1-01-w-question-repair-vf-008 | rotate | Covered by approved variant family; prevent duplicate fixed-item exposure | Do not also expose as standalone normal practice unless dev/QA-only |
| draft_b1_m01_repair_004 | b1-01-mein-meine-familiar-vf-006 | rotate | Covered by approved variant family; prevent duplicate fixed-item exposure | Do not also expose as standalone normal practice unless dev/QA-only |
| draft_b1_m01_repair_005 | b1-01-brauchen-acc-vf-005 | rotate | Covered by approved variant family; prevent duplicate fixed-item exposure | Do not also expose as standalone normal practice unless dev/QA-only |
| draft_b1_m01_satzbau_002 | b1-01-v2-fronted-time-vf-001 | rotate | Covered by approved variant family; prevent duplicate fixed-item exposure | Do not also expose as standalone normal practice unless dev/QA-only |
| draft_b1_m01_satzbau_003 | b1-01-w-question-location-vf-003 | rotate | Covered by approved variant family; prevent duplicate fixed-item exposure | Do not also expose as standalone normal practice unless dev/QA-only |
| draft_b1_m01_satzbau_004 | b1-01-yes-no-question-vf-004 | rotate | Covered by approved variant family; prevent duplicate fixed-item exposure | Do not also expose as standalone normal practice unless dev/QA-only |
| draft_b1_m01_satzbau_005 | b1-01-brauchen-acc-vf-005 | rotate | Covered by approved variant family; prevent duplicate fixed-item exposure | Do not also expose as standalone normal practice unless dev/QA-only |
| draft_b1_m01_contrast_002 | b1-01-mein-meine-familiar-vf-006 | rotate | Covered by approved variant family; prevent duplicate fixed-item exposure | Do not also expose as standalone normal practice unless dev/QA-only |
| draft_b1_m01_contrast_003 | b1-01-yes-no-question-vf-004 | rotate | Covered by approved variant family; prevent duplicate fixed-item exposure | Do not also expose as standalone normal practice unless dev/QA-only |
| draft_b1_m01_transformation_001 | b1-01-v2-fronted-time-vf-001 | rotate | Covered by approved variant family; prevent duplicate fixed-item exposure | Do not also expose as standalone normal practice unless dev/QA-only |
| draft_b1_m01_production_001 | b1-01-controlled-production-vf-009 | rotate | Covered by approved variant family; prevent duplicate fixed-item exposure | Do not also expose as standalone normal practice unless dev/QA-only |
| draft_b1_m01_production_002 | b1-01-controlled-production-vf-009 | rotate | Covered by approved variant family; prevent duplicate fixed-item exposure | Do not also expose as standalone normal practice unless dev/QA-only |
| draft_b1_m01_production_003 | b1-01-controlled-production-vf-009 | rotate | Covered by approved variant family; prevent duplicate fixed-item exposure | Do not also expose as standalone normal practice unless dev/QA-only |
| draft_b1_m01_topup_recognition_002 | b1-01-w-question-location-vf-003 | rotate | Covered by approved variant family; prevent duplicate fixed-item exposure | Do not also expose as standalone normal practice unless dev/QA-only |
| draft_b1_m01_topup_recognition_003 | b1-01-yes-no-question-vf-004 | rotate | Covered by approved variant family; prevent duplicate fixed-item exposure | Do not also expose as standalone normal practice unless dev/QA-only |
| draft_b1_m01_topup_recognition_004 | b1-01-brauchen-acc-vf-005 | rotate | Covered by approved variant family; prevent duplicate fixed-item exposure | Do not also expose as standalone normal practice unless dev/QA-only |
| draft_b1_m01_topup_recognition_005 | b1-01-mein-meine-familiar-vf-006 | rotate | Covered by approved variant family; prevent duplicate fixed-item exposure | Do not also expose as standalone normal practice unless dev/QA-only |
| draft_b1_m01_topup_recognition_006 | b1-01-noun-capitalisation-vf-007 | rotate | Covered by approved variant family; prevent duplicate fixed-item exposure | Do not also expose as standalone normal practice unless dev/QA-only |
| draft_b1_m01_topup_cloze_001 | b1-01-v2-fronted-time-vf-001 | rotate | Covered by approved variant family; prevent duplicate fixed-item exposure | Do not also expose as standalone normal practice unless dev/QA-only |
| draft_b1_m01_topup_cloze_002 | b1-01-v2-fronted-time-vf-001, b1-01-v2-fronted-place-vf-002 | rotate | Covered by approved variant family; prevent duplicate fixed-item exposure | Do not also expose as standalone normal practice unless dev/QA-only |
| draft_b1_m01_topup_cloze_003 | b1-01-w-question-location-vf-003 | rotate | Covered by approved variant family; prevent duplicate fixed-item exposure | Do not also expose as standalone normal practice unless dev/QA-only |
| draft_b1_m01_topup_cloze_004 | b1-01-yes-no-question-vf-004 | rotate | Covered by approved variant family; prevent duplicate fixed-item exposure | Do not also expose as standalone normal practice unless dev/QA-only |
| draft_b1_m01_topup_cloze_005 | b1-01-brauchen-acc-vf-005 | rotate | Covered by approved variant family; prevent duplicate fixed-item exposure | Do not also expose as standalone normal practice unless dev/QA-only |
| draft_b1_m01_topup_cloze_006 | b1-01-noun-capitalisation-vf-007 | rotate | Covered by approved variant family; prevent duplicate fixed-item exposure | Do not also expose as standalone normal practice unless dev/QA-only |
| draft_b1_m01_topup_cloze_007 | b1-01-mein-meine-familiar-vf-006 | rotate | Covered by approved variant family; prevent duplicate fixed-item exposure | Do not also expose as standalone normal practice unless dev/QA-only |
| draft_b1_m01_topup_cloze_008 | b1-01-mein-meine-familiar-vf-006 | rotate | Covered by approved variant family; prevent duplicate fixed-item exposure | Do not also expose as standalone normal practice unless dev/QA-only |
| draft_b1_m01_topup_cloze_009 | b1-01-noun-capitalisation-vf-007 | rotate | Covered by approved variant family; prevent duplicate fixed-item exposure | Do not also expose as standalone normal practice unless dev/QA-only |
| draft_b1_m01_topup_satzbau_001 | b1-01-v2-fronted-time-vf-001 | rotate | Covered by approved variant family; prevent duplicate fixed-item exposure | Do not also expose as standalone normal practice unless dev/QA-only |
| draft_b1_m01_topup_satzbau_002 | b1-01-v2-fronted-place-vf-002 | rotate | Covered by approved variant family; prevent duplicate fixed-item exposure | Do not also expose as standalone normal practice unless dev/QA-only |
| draft_b1_m01_topup_satzbau_003 | b1-01-v2-fronted-time-vf-001 | rotate | Covered by approved variant family; prevent duplicate fixed-item exposure | Do not also expose as standalone normal practice unless dev/QA-only |
| draft_b1_m01_topup_satzbau_004 | b1-01-w-question-location-vf-003 | rotate | Covered by approved variant family; prevent duplicate fixed-item exposure | Do not also expose as standalone normal practice unless dev/QA-only |
| draft_b1_m01_topup_satzbau_005 | b1-01-yes-no-question-vf-004 | rotate | Covered by approved variant family; prevent duplicate fixed-item exposure | Do not also expose as standalone normal practice unless dev/QA-only |
| draft_b1_m01_topup_satzbau_006 | b1-01-yes-no-question-vf-004 | rotate | Covered by approved variant family; prevent duplicate fixed-item exposure | Do not also expose as standalone normal practice unless dev/QA-only |
| draft_b1_m01_topup_satzbau_007 | b1-01-brauchen-acc-vf-005 | rotate | Covered by approved variant family; prevent duplicate fixed-item exposure | Do not also expose as standalone normal practice unless dev/QA-only |
| draft_b1_m01_topup_satzbau_008 | b1-01-mein-meine-familiar-vf-006 | rotate | Covered by approved variant family; prevent duplicate fixed-item exposure | Do not also expose as standalone normal practice unless dev/QA-only |
| draft_b1_m01_topup_satzbau_009 | b1-01-mein-meine-familiar-vf-006 | rotate | Covered by approved variant family; prevent duplicate fixed-item exposure | Do not also expose as standalone normal practice unless dev/QA-only |
| draft_b1_m01_topup_repair_001 | b1-01-v2-fronted-time-vf-001 | rotate | Covered by approved variant family; prevent duplicate fixed-item exposure | Do not also expose as standalone normal practice unless dev/QA-only |
| draft_b1_m01_topup_repair_002 | b1-01-v2-fronted-place-vf-002 | rotate | Covered by approved variant family; prevent duplicate fixed-item exposure | Do not also expose as standalone normal practice unless dev/QA-only |
| draft_b1_m01_topup_repair_003 | b1-01-w-question-location-vf-003, b1-01-w-question-repair-vf-008 | rotate | Covered by approved variant family; prevent duplicate fixed-item exposure | Do not also expose as standalone normal practice unless dev/QA-only |
| draft_b1_m01_topup_repair_006 | b1-01-noun-capitalisation-vf-007 | rotate | Covered by approved variant family; prevent duplicate fixed-item exposure | Do not also expose as standalone normal practice unless dev/QA-only |
| draft_b1_m01_topup_repair_007 | b1-01-mein-meine-familiar-vf-006 | rotate | Covered by approved variant family; prevent duplicate fixed-item exposure | Do not also expose as standalone normal practice unless dev/QA-only |
| draft_b1_m01_topup_repair_008 | b1-01-mein-meine-familiar-vf-006 | rotate | Covered by approved variant family; prevent duplicate fixed-item exposure | Do not also expose as standalone normal practice unless dev/QA-only |
| draft_b1_m01_topup_contrast_002 | b1-01-w-question-location-vf-003, b1-01-w-question-repair-vf-008 | rotate | Covered by approved variant family; prevent duplicate fixed-item exposure | Do not also expose as standalone normal practice unless dev/QA-only |
| draft_b1_m01_topup_production_001 | b1-01-controlled-production-vf-009 | rotate | Covered by approved variant family; prevent duplicate fixed-item exposure | Do not also expose as standalone normal practice unless dev/QA-only |
| draft_b1_m01_topup_production_002 | b1-01-controlled-production-vf-009 | rotate | Covered by approved variant family; prevent duplicate fixed-item exposure | Do not also expose as standalone normal practice unless dev/QA-only |
| draft_b1_m01_topup_production_003 | b1-01-controlled-production-vf-009 | rotate | Covered by approved variant family; prevent duplicate fixed-item exposure | Do not also expose as standalone normal practice unless dev/QA-only |

### C. Notices/concept cards retained separately
| Source item ID | Notice target | Evidence handling | Notes |
| --- | --- | --- | --- |
| draft_b1_m01_notice_001 | T-B1-01-LS01-01-03 | non-evidence notice/concept | V2 main-clause notice: Heute lerne ich Deutsch. |
| draft_b1_m01_notice_002 | T-B1-01-LS09-01-01 | non-evidence notice/concept | Noun-capitalisation notice: der Kurs, die Arbeit, die Hilfe. |
| draft_b1_m01_notice_003 | T-B1-01-LS02-01-02 | non-evidence notice/concept | mein/meine familiar-noun awareness: mein Kurs, meine Arbeit. |

### D. Production items retained as self-marked
| Source item ID | Production target | Evidence handling | Review eligible? | Notes |
| --- | --- | --- | --- | --- |
| draft_b1_m01_production_001 | Self-marked short self-introduction. | self_marked_production via production variant family | No | Rotate/merge into b1-01-controlled-production-vf-009 |
| draft_b1_m01_production_002 | Self-marked simple need sentence. | self_marked_production via production variant family | No | Rotate/merge into b1-01-controlled-production-vf-009 |
| draft_b1_m01_production_003 | Self-marked Heute/V2 sentence. | self_marked_production via production variant family | No | Rotate/merge into b1-01-controlled-production-vf-009 |
| draft_b1_m01_topup_production_001 | Self-marked two-sentence course self-introduction. | self_marked_production via production variant family | No | Rotate/merge into b1-01-controlled-production-vf-009 |
| draft_b1_m01_topup_production_002 | Self-marked need sentence for course. | self_marked_production via production variant family | No | Rotate/merge into b1-01-controlled-production-vf-009 |
| draft_b1_m01_topup_production_003 | Self-marked Heute sentence. | self_marked_production via production variant family | No | Rotate/merge into b1-01-controlled-production-vf-009 |

### E. Excluded/cut items
| Source item ID | Reason excluded | Source QA stage | Notes |
| --- | --- | --- | --- |
| draft_b1_m01_recognition_009 | Thin learning-vocabulary recognition | Original Phase 3A QA | Do not import |
| draft_b1_m01_repair_006 | Punctuation-only repair | Original Phase 3A QA | Do not import |
| draft_b1_m01_contrast_001 | Too obvious / duplicates revised recognition_005 | Original Phase 3A QA | Do not import |
| draft_b1_m01_topup_recognition_007 | Thin vocabulary recognition / flashcard-like | Top-up Phase 3A QA | Do not import |
| draft_b1_m01_topup_cloze_010 | Deutschunterricht compound too vocabulary/spelling-heavy | Top-up Phase 3A QA | Do not import |
| draft_b1_m01_topup_repair_004 | Ambiguous spoken/declarative question | Top-up Phase 3A QA | Do not import |
| draft_b1_m01_topup_repair_005 | Tests register/style rather than a clear error | Top-up Phase 3A QA | Do not import |
| draft_b1_m01_topup_contrast_001 | Duplicates recognition_005 | Top-up Phase 3A QA | Do not import |
| draft_b1_m01_topup_contrast_003 | Marked-order distractor too subtle/possible | Top-up Phase 3A QA | Do not import |
| b1-01-v2-fronted-time-vf-001-var-007 | Duplicate/cross-signal brauchen+V2; use brauchen family or V2 family separately. | Variant-family QA | Do not import |
| b1-01-v2-fronted-time-vf-001-var-008 | Duplicate/cross-signal brauchen+V2 with Unterlagen; too much boundary/evidence risk. | Variant-family QA | Do not import |
| b1-01-v2-fronted-place-vf-002-var-006 | Slightly artificial: “Im Kurs bin ich hier” is grammatical but weak/nonnatural as a practice sentence. | Variant-family QA | Do not import |
| b1-01-v2-fronted-place-vf-002-var-008 | “Im Kurs ist das Heft hier” is clumsy and less natural than “Das Heft ist im Kurs.” | Variant-family QA | Do not import |
| b1-01-brauchen-acc-vf-005-var-006 | Already covered by V2/needs overlap; cuts helfen keep brauchen capped at 5 variants. | Variant-family QA | Do not import |
| b1-01-noun-capitalisation-vf-007-var-005 | Existing-item overlap plus hidden accusative exposure; too much for a mechanics family. | Variant-family QA | Do not import |

## 10. Final Import Candidate Count
| Category | Count | Included in v0.80.3 import? | Notes |
| --- | --- | --- | --- |
| Variant family records | 9 | Yes | Parent records; not counted as separate cards from their variants in learner-facing totals. |
| Clean survivor variant records | 54 | Yes | Static approved variants selected by family. |
| Self-marked production variant records | 4 | Yes | Included among the 54 variant records; practice only. |
| Retained single canonical practice items | 9 | Yes | Unique old items not better covered by a variant family. |
| Retained notice/concept cards | 3 | Yes, if lesson/notice layer is active; otherwise keep separate | Non-evidence learner-facing content. |
| Retained self-marked production source rows | 6 | No separate standalone import by default | Represented/rotated through production family; no correctness evidence. |
| Excluded original items | 3 | No | Documented Phase 3A cuts. |
| Excluded top-up items | 6 | No | Documented top-up QA cuts. |
| Cut variants | 6 | No | Documented variant-family QA cuts. |
| Dev-only candidates | 0 | No | None assigned at inventory level. |
| Total learner-facing route units under Option B | 21 | Yes | 9 family units + 9 single canonical items + 3 notice/concept cards. |
| Total auto-graded/evidence-bearing route units under Option B | 17 | Yes | 8 auto-graded families + 9 single canonical items. Production remains self-marked. |
| Total non-evidence learner-facing units | 3 | Conditional | 3 notice/concept cards. |

Interpretation note: under Option B, a variant family is the learner-facing practice unit and one approved variant renders per attempt. Variant records are implementation records, not 54 separate learner-facing route cards unless Codex deliberately implements Option A, which this inventory does not recommend.

## 11. Evidence / Review Integrity Check
| Evidence risk | Affected rows/families | Mitigation | Blocker? |
| --- | --- | --- | --- |
| Sibling variants counted as independent proof | All 9 families | Record variantFamilyId, variantId, siblingVariantGroup; cap same-session contribution at family level. | No |
| Old fixed item + variant family duplicate exposure | Items listed in replacement/rotation table | Rotate/replace selected fixed items; do not append families to the existing pool. | No, if Codex follows replacement strategy |
| `Ich brauche ...` inflated as B1 evidence | b1-01-brauchen-acc-vf-005 and source brauchen items | Use auto_supported where marked; cap same-session evidence; treat as survival scaffold. | No |
| Production counted as correctness | b1-01-controlled-production-vf-009 and production source rows | self_marked_production only; ineligible for auto review. | No |
| Given phrases treated as tested answers | All variants with given context | Record as context only; do not infer article/case/vocabulary control. | No |
| Noun capitalisation fallback | b1-01-noun-capitalisation-vf-007 and noun-capitalisation clozes | Exact-only for strong evidence unless correct-with-note support exists. | No, but import caveat |
| Same-day repetitions treated as delayed review | All family review groups | Same-session and same-day repeat is not delayed retention; review requires timestamp delay. | No |

## 12. Codex Readiness Gate
| Gate | Pass? | Evidence | Notes |
| --- | --- | --- | --- |
| Source counts reconciled | Yes | Count chain and discrepancy ledger | 62→60 handled as source_count_discrepancy. |
| Final inventory file produced | Yes | This file | Backfills missing Step 5. |
| Old-item strategy clear | Yes | Replace/rotate selected old fixed items | Codex must implement replacement/rotation, not supplement. |
| Variant family import set clear | Yes | 9 import_family rows | Option B. |
| Variant row import set clear | Yes | 54 import_variant rows | 6 cut variants excluded. |
| Cut/excluded rows documented | Yes | Original cuts, top-up cuts, variant cuts | No silent row loss. |
| No silent row loss | Yes | All discrepancies documented | No row_integrity_blocker. |
| No runtime generation needed | Yes | Static family + variant records | No Madlibs/grammar generation. |
| No storage-key rename required | Yes | Additive metadata only | Codex must preserve keys. |
| Export/import compatibility can remain additive | Yes | Add variant metadata when present; tolerate missing | Codex to verify code. |
| B1-01 scope preserved | Yes | No new content generated | No B1-02/B2/Genitive. |
| Ready for narrow Codex prompt | Yes | All gates pass with caveats | Codex still must inspect v0.80.2 source before editing. |

## 13. Final QA Checklist
- Final inventory only: confirmed.
- No app code: confirmed.
- No app-ready JSON: confirmed.
- No Codex implementation prompt: confirmed.
- No import performed: confirmed.
- No B1-02 generated: confirmed.
- No new variants generated: confirmed.
- No new lesson/notice cards generated: confirmed.
- No source text copied: confirmed.
- No runtime generation: confirmed.
- No random noun/verb combinations: confirmed.
- No generated German morphology: confirmed.
- No B2 active content: confirmed.
- No Genitive: confirmed.
- No adjective-ending traps: confirmed.
- No subordinate clauses: confirmed.
- All expected rows reconciled: confirmed.
- All actual rows accounted for: confirmed.
- All cuts documented: confirmed.
- All exclusions documented: confirmed.
- Sibling variants remain sibling evidence: confirmed.
- Given phrases are not treated as tested answers: confirmed.
- Production remains self-marked: confirmed.
- Existing storage keys preserved in the plan: confirmed.
- German text remains LTR: confirmed.
- Final inventory is ready to support a Codex implementation prompt: confirmed.

## 14. Final Verdict

`READY_FOR_CODEX_IMPLEMENTATION_PROMPT`

Exact next recommended action: create the narrow Codex implementation prompt for `v0.80.3 — B1-01 Curated Variant Families`, using this final inventory as the row-integrity source and requiring Codex to inspect the actual v0.80.2 app source before editing.