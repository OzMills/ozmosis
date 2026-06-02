# Ozmosis B1-01 Top-Up Batch — Phase 3A QA / Reject / Revise for 40 Draft Candidates

Status: QA approved with cuts/revisions  
Module: B1-01 — Getting started at work/course  
Input: `ozmosis_b1_m01_topup_40_candidate_batch.md`  
Output: Clean survivor batch for Phase 3B schema mapping  

## 1. Source Verification

| Source file/content | Available? | Used for | Reliability | Notes / caveats |
|---|---:|---|---|---|
| `ozmosis_b1_m01_topup_40_candidate_batch.md` | Yes | 40 top-up candidates under QA | High | Active input batch in `/mnt/data`; exactly 40 candidate IDs found. |
| `ozmosis_phase3a_b1_m01_getting_started_qa_approved.md` | Yes | Existing B1-01 approved batch, cut list, fallback caveats | High | Controlling duplicate/scope reference for original B1-01. |
| `ozmosis_phase3_b1_m01_getting_started_draft_items.md` | Yes | Original target-family structure and deferred scope | High | Used to preserve target families and B1-01 boundaries. |
| `ozmosis_phase2_5_full_b1_normalisation_addendum_v0_2.md` | Indirect package/source | Evidence/support bridge | Medium-high | Used as planning guardrail through audit/source context. |
| `ozmosis_prompt0_content_schema_id_metadata_rules_lock.md` | Package/source | taskType/taskDepth/evidence/support constraints | High | Used as schema guardrail; no schema mapping performed. |
| `OZMOSIS_SOURCE_BRIEF_v0.80.2.md` | Yes | Current strategic/product constraints | High | Confirms B1-first and cautious progress model. |
| `OZMOSIS_DEVELOPMENT_ROADMAP_v0.80.2.md` | Yes | v0.80.2 choice-shuffle safety and guardrails | High | Confirms MC choices are shuffled and correctness is stable-ID/value based. |
| TELC/Beruf and Aspekte Beruf files | Yes | Structural inspiration only | Low for item text | Not used for copied item wording. |

## 2. Top-Up Batch Intake Check

| Check | Result |
|---|---:|
| Total candidate items found | 40 |
| Expected count | 40 |
| Recognition IDs present | 7 / 7 |
| Cloze IDs present | 10 / 10 |
| Satzbau IDs present | 9 / 9 |
| Repair IDs present | 8 / 8 |
| Contrast IDs present | 3 / 3 |
| Production IDs present | 3 / 3 |
| Duplicated IDs | 0 |
| Malformed IDs | 0 |
| Immediate source blocker | None |

## 3. Batch-Level QA Summary

| Metric | Count |
|---|---:|
| Total candidate items audited | 40 |
| Approved as-is | 29 |
| Revised and approved | 5 |
| Cut | 6 |
| Deferred | 0 |
| Needs human/tutor check | 0 |
| Clean approved/revised items proceeding to Phase 3B schema mapping | 34 |

Expected survivor target was about 30. Actual survivor count is 34. This is acceptable: the batch was intentionally overproduced, and 34 survivors remain useful without forcing thin vocabulary or ambiguous repair items through.

Final top-up QA verdict: `READY_FOR_PHASE_3B_SCHEMA_MAPPING`.

## 4. Issue Summary

| Issue | Severity | Affected items | Decision | Required fix |
|---|---:|---|---|---|
| Ambiguous/marked distractor in V2 recognition | minor | recognition_001 | revise_and_approve | Replace c03 with clearly wrong V2 order. |
| Spoken/declarative question ambiguity | minor/moderate | recognition_003, repair_004, contrast_003 | revise/cut | Recognition prompt tightened; repair and contrast cut where ambiguity remained. |
| Need-phrase distractor too silly | minor | recognition_004 | revise_and_approve | Replace `Ich bin die Unterlagen` with plausible `Ich habe die Unterlagen`. |
| V2 duplicate density | minor | cloze_002, satzbau_002, repair_002 | revise/approve | Revise cloze_002 to a different time phrase; keep Satzbau/repair as different task depths. |
| Sentence-start capitalisation fallback | moderate | cloze_004 | revise_and_approve | Keep exact-only for strong evidence; lower-case only correct-with-note if supported. |
| Lower-case noun fallback | moderate | cloze_006, cloze_009, repair_006 | approve with caveat | Keep auto_supported/not review-eligible where capitalisation is central. |
| Vocabulary too thin / flashcard risk | moderate | recognition_007, cloze_010 | cut | Remove thin App/Deutschunterricht vocabulary recognition. |
| B1-02/request drift risk | minor | satzbau_006 | approve | Keep as simple yes/no orientation question, not appointment/request module. |
| Repair target is register/style, not real error | moderate | repair_005 | cut | `Ich habe ein Heft nötig` is grammatical enough; do not force as repair. |
| Duplicate contrast with recognition item | moderate | contrast_001 | cut | Same `mein Heft` target as recognition_005; surplus candidate not needed. |
| Production overclaim risk | moderate | production_001–003 | approve with caveat | Self-marked only; no correctness or review claim. |

## 5. Item-by-Item QA Table

| Draft item ID | Task type | targetFamilyId | targetId | Severity | Decision | Problems found | Required fix | Revised version if applicable | Metadata changes | EvidenceType decision | Review eligibility decision | Notes |
|---|---|---|---|---:|---|---|---|---|---|---|---|---|
| recognition_001 | Auswahl | TF-B1-01-LS01-01 | T-B1-01-LS01-01-03 | minor | revise_and_approve | c03 was marked/awkward but not cleanly wrong enough. | Replace c03. | c03: `Am Montag lerne im Kurs ich.` | choice table revised | auto_core | review candidate after QA | Strong V2 item after revision. |
| recognition_002 | Auswahl | TF-B1-01-LS01-02 | T-B1-01-LS01-02-01 | none | approve_as_is | None. | — | — | none | auto_core | review candidate after QA | Useful `Wo finde ich ...?` item. |
| recognition_003 | Auswahl | TF-B1-01-LS01-02 | T-B1-01-LS01-02-02 | minor | revise_and_approve | Statement-order question could be spoken/intonation question. | Make target explicitly standard written yes/no question. | Prompt: `Which is the standard written yes/no question?` Choices unchanged. | prompt clarified | auto_core | review candidate after QA | Ambiguity documented. |
| recognition_004 | Auswahl | TF-B1-01-LS04-01 | T-B1-01-LS04-01-01 | minor | revise_and_approve | `Ich bin die Unterlagen` is too silly. | Use plausible non-need distractor. | c02: `Ich habe die Unterlagen.` | choice table revised | auto_core | review candidate after QA | Stronger distractor. |
| recognition_005 | Auswahl | TF-B1-01-LS02-01 | T-B1-01-LS02-01-02 | none | approve_as_is | None. | — | — | none | auto_core | review candidate after QA | `mein Heft` expands familiar-noun set. |
| recognition_006 | Auswahl | TF-B1-01-LS09-01 | T-B1-01-LS09-01-01 | minor | approve_as_is | Mechanics-only evidence. | Keep weak. | — | none | auto_supported | not review-eligible until schema QA | Good support item. |
| recognition_007 | Auswahl | TF-B1-01-LS08-01 | T-B1-01-LS08-01-02 | moderate | cut | Vocabulary recognition is thin and flashcard-like. | Cut. | — | remove from clean batch | excluded | not review-eligible | Surplus candidate; no replacement needed. |
| cloze_001 | Luecke | TF-B1-01-LS01-01 | T-B1-01-LS01-01-03 | none | approve_as_is | None. | — | — | none | auto_core | review candidate after QA | Good V2 cloze with `Morgen`. |
| cloze_002 | Luecke | TF-B1-01-LS01-01 | T-B1-01-LS01-01-03 | minor | revise_and_approve | Too close to satzbau_002/repair_002. | Change sentence context. | `Am Vormittag ___ ich Deutsch.` Answer: `lerne`. Feedback: `Am Vormittag lerne ich Deutsch.` | prompt/body revised | auto_core | review candidate after QA | Keeps V2 without exact duplicate. |
| cloze_003 | Luecke | TF-B1-01-LS01-02 | T-B1-01-LS01-02-01 | none | approve_as_is | None. | — | — | none | auto_core | review candidate after QA | Strong W-question cloze. |
| cloze_004 | Luecke | TF-B1-01-LS01-02 | T-B1-01-LS01-02-02 | moderate | revise_and_approve | Sentence-start capitalisation fallback. | Exact-only for strong evidence; lower-case `brauche` correct-with-note only if supported. | Text unchanged. | fallback policy clarified | auto_core exact only | review candidate only for exact/correct-with-note if supported | Good item with caveat. |
| cloze_005 | Luecke | TF-B1-01-LS04-01 | T-B1-01-LS04-01-01 | none | approve_as_is | None. | — | — | none | auto_core | review candidate after QA | Good `brauchen` recall. |
| cloze_006 | Luecke | TF-B1-01-LS04-01 | T-B1-01-LS04-01-01 | minor/moderate | approve_as_is | Noun capitalisation fallback. | Keep weak. | — | none | auto_supported | not review-eligible until schema QA | Useful but not strong evidence. |
| cloze_007 | Luecke | TF-B1-01-LS02-01 | T-B1-01-LS02-01-02 | none | approve_as_is | None. | — | — | none | auto_core | review candidate after QA | Good `meine App`. |
| cloze_008 | Luecke | TF-B1-01-LS02-01 | T-B1-01-LS02-01-02 | minor | approve_as_is | Plural familiar noun adds small complexity. | Keep; no full table claim. | — | none | auto_core | review candidate after QA | Acceptable familiar plural exposure. |
| cloze_009 | Luecke | TF-B1-01-LS09-01 | T-B1-01-LS09-01-01 | moderate | approve_as_is | Noun capitalisation fallback. | Keep weak. | — | none | auto_supported | not review-eligible until schema QA | Mechanics support only. |
| cloze_010 | Luecke | TF-B1-01-LS08-01 | T-B1-01-LS08-01-02 | moderate | cut | `Deutschunterricht` compound is vocabulary/spelling-heavy and thin. | Cut. | — | remove from clean batch | excluded | not review-eligible | Better saved for a lesson/vocabulary support layer. |
| satzbau_001 | Satzbau | TF-B1-01-LS01-01 | T-B1-01-LS01-01-03 | none | approve_as_is | None. | — | — | none | auto_core | review candidate after QA | Strong V2 sentence-building. |
| satzbau_002 | Satzbau | TF-B1-01-LS01-01 | T-B1-01-LS01-01-03 | minor | approve_as_is | Similar to repair_002 but different task depth. | Keep. | — | none | auto_core | review candidate after QA | Good place-fronted V2. |
| satzbau_003 | Satzbau | TF-B1-01-LS01-01 | T-B1-01-LS01-01-03 | none | approve_as_is | None. | — | — | none | auto_core | review candidate after QA | Useful V2 + need phrase. |
| satzbau_004 | Satzbau | TF-B1-01-LS01-02 | T-B1-01-LS01-02-01 | none | approve_as_is | None. | — | — | none | auto_core | review candidate after QA | Strong W-question sentence-building. |
| satzbau_005 | Satzbau | TF-B1-01-LS01-02 | T-B1-01-LS01-02-02 | none | approve_as_is | None. | — | — | none | auto_core | review candidate after QA | Clean yes/no question. |
| satzbau_006 | Satzbau | TF-B1-01-LS01-02 | T-B1-01-LS01-02-02 | minor | approve_as_is | Slight B1-02/request risk. | Keep as basic orientation question. | — | none | auto_core | review candidate after QA | Acceptable but monitor later balance. |
| satzbau_007 | Satzbau | TF-B1-01-LS04-01 | T-B1-01-LS04-01-01 | none | approve_as_is | None. | — | — | none | auto_core | review candidate after QA | Good survival phrase. |
| satzbau_008 | Satzbau | TF-B1-01-LS02-01 | T-B1-01-LS02-01-02 | none | approve_as_is | None. | — | — | none | auto_core | review candidate after QA | Good familiar-noun possessive. |
| satzbau_009 | Satzbau | TF-B1-01-LS02-01 | T-B1-01-LS02-01-02 | minor | approve_as_is | Plural familiar noun adds small complexity. | Keep. | — | none | auto_core | review candidate after QA | Useful plural-aware item without full table. |
| repair_001 | Reparatur | TF-B1-01-LS01-01 | T-B1-01-LS01-01-03 | none | approve_as_is | None. | — | — | none | auto_core | review candidate after QA | Strong V2 repair. |
| repair_002 | Reparatur | TF-B1-01-LS01-01 | T-B1-01-LS01-01-03 | minor | approve_as_is | Similar to satzbau_002 but repairs actual error. | Keep. | — | none | auto_core | review candidate after QA | Useful repair depth. |
| repair_003 | Reparatur | TF-B1-01-LS01-02 | T-B1-01-LS01-02-01 | none | approve_as_is | None. | — | — | none | auto_core | review candidate after QA | Strong W-question repair. |
| repair_004 | Reparatur | TF-B1-01-LS01-02 | T-B1-01-LS01-02-02 | moderate | cut | `Die App ist hier?` can function as an intonation question; not cleanly wrong enough. | Cut. | — | remove from clean batch | excluded | not review-eligible | Avoid ambiguous repair target. |
| repair_005 | Reparatur | TF-B1-01-LS04-01 | T-B1-01-LS04-01-01 | moderate | cut | `Ich habe ein Heft nötig` is grammatical enough; repair would test style/register, not error. | Cut. | — | remove from clean batch | excluded | not review-eligible | Do not force register as correctness here. |
| repair_006 | Reparatur | TF-B1-01-LS09-01 | T-B1-01-LS09-01-01 | minor | approve_as_is | Mechanics-only evidence. | Keep weak. | — | none | auto_supported | not review-eligible until schema QA | Good capitalisation repair. |
| repair_007 | Reparatur | TF-B1-01-LS02-01 | T-B1-01-LS02-01-02 | none | approve_as_is | None. | — | — | none | auto_core | review candidate after QA | Good `meine App` repair. |
| repair_008 | Reparatur | TF-B1-01-LS02-01 | T-B1-01-LS02-01-02 | minor | approve_as_is | Familiar plural complexity. | Keep. | — | none | auto_core | review candidate after QA | Acceptable. |
| contrast_001 | Kontrast | TF-B1-01-LS02-01 | T-B1-01-LS02-01-02 | moderate | cut | Duplicates recognition_005 almost exactly. | Cut. | — | remove from clean batch | excluded | not review-eligible | Surplus candidate. |
| contrast_002 | Kontrast | TF-B1-01-LS01-02 | T-B1-01-LS01-02-01 | none | approve_as_is | None. | — | — | none | auto_core | review candidate after QA | Good W-question contrast. |
| contrast_003 | Kontrast | TF-B1-01-LS01-02 | T-B1-01-LS01-02-02 | moderate | cut | `Die App brauche ich?` is marked but possible; too subtle for this target. | Cut. | — | remove from clean batch | excluded | not review-eligible | Avoid distractor ambiguity. |
| production_001 | Produktion | TF-B1-01-LS10-01 | T-B1-01-LS10-01-01 | minor | approve_as_is | Production overclaim risk only. | Keep self-marked only. | — | none | self_marked_production | not review-eligible | Safe controlled production. |
| production_002 | Produktion | TF-B1-01-LS10-01 | T-B1-01-LS10-01-02 | minor | approve_as_is | Production overclaim risk only. | Keep phrase bank collapsed where possible. | — | none | self_marked_production | not review-eligible | Safe controlled production. |
| production_003 | Produktion | TF-B1-01-LS10-01 | T-B1-01-LS10-01-01 | minor | approve_as_is | Production overclaim risk only. | No auto-grading of V2. | — | none | self_marked_production | not review-eligible | Safe controlled production. |

## 6. Revised Approved Items — Clean Survivor List

Only the following 34 items proceed to Phase 3B schema mapping. Cut items are excluded.

### Auswahl survivors

| draft item ID | targetFamilyId | targetId | prompt | correct answer | evidenceType | review eligibility | QA status | QA notes |
|---|---|---|---|---|---|---|---|---|
| recognition_001 | TF-B1-01-LS01-01 | T-B1-01-LS01-01-03 | Which sentence has correct word order after **Am Montag**? | Am Montag lerne ich im Kurs. | auto_core | review candidate after QA | revised_and_approved | c03 revised to clearly wrong order. |
| recognition_002 | TF-B1-01-LS01-02 | T-B1-01-LS01-02-01 | You want to find the app for the course. Which question is correct? | Wo finde ich die App? | auto_core | review candidate after QA | approved_as_is | Strong W-question item. |
| recognition_003 | TF-B1-01-LS01-02 | T-B1-01-LS01-02-02 | Which is the standard written yes/no question? | Ist die App hier? | auto_core | review candidate after QA | revised_and_approved | Prompt narrowed to written target. |
| recognition_004 | TF-B1-01-LS04-01 | T-B1-01-LS04-01-01 | You do not have the course papers. Which sentence fits? | Ich brauche die Unterlagen. | auto_core | review candidate after QA | revised_and_approved | c02 revised to plausible non-need distractor. |
| recognition_005 | TF-B1-01-LS02-01 | T-B1-01-LS02-01-02 | Which phrase is correct for **Heft**? | mein Heft | auto_core | review candidate after QA | approved_as_is | Familiar-noun possessive. |
| recognition_006 | TF-B1-01-LS09-01 | T-B1-01-LS09-01-01 | Which sentence has correct noun capitalisation? | Die Unterlagen sind hier. | auto_supported | not review-eligible until schema QA | approved_as_is | Mechanics only. |

Choice-table caveats: all survivor Auswahl items retain stable choice IDs; recognition_001 c03 is revised to `Am Montag lerne im Kurs ich.` and recognition_004 c02 is revised to `Ich habe die Unterlagen.`.

### Luecke survivors

| draft item ID | targetFamilyId | targetId | item body | correct answer | supportPolicy | evidenceType | review eligibility | QA status | QA notes |
|---|---|---|---|---|---|---|---|---|---|
| cloze_001 | TF-B1-01-LS01-01 | T-B1-01-LS01-01-03 | Morgen ___ ich im Kurs. | bin | support_after_answer | auto_core | review candidate after QA | approved_as_is | Good V2 cloze. |
| cloze_002 | TF-B1-01-LS01-01 | T-B1-01-LS01-01-03 | Am Vormittag ___ ich Deutsch. | lerne | support_after_answer | auto_core | review candidate after QA | revised_and_approved | Reduced duplicate pressure. |
| cloze_003 | TF-B1-01-LS01-02 | T-B1-01-LS01-02-01 | Wo ___ ich die App? | finde | support_after_answer | auto_core | review candidate after QA | approved_as_is | Good W-question cloze. |
| cloze_004 | TF-B1-01-LS01-02 | T-B1-01-LS01-02-02 | ___ ich die Unterlagen? | Brauche | support_after_answer | auto_core exact only | review candidate only for exact/correct-with-note if supported | revised_and_approved | Lower-case fallback caveat. |
| cloze_005 | TF-B1-01-LS04-01 | T-B1-01-LS04-01-01 | Ich ___ die App. | brauche | support_after_answer | auto_core | review candidate after QA | approved_as_is | Good need phrase. |
| cloze_006 | TF-B1-01-LS04-01 | T-B1-01-LS04-01-01 | Ich brauche ein ___. | Heft | support_after_answer | auto_supported | not review-eligible until schema QA | approved_as_is | Noun-capitalisation caveat. |
| cloze_007 | TF-B1-01-LS02-01 | T-B1-01-LS02-01-02 | Das ist ___ App. | meine | support_after_answer | auto_core | review candidate after QA | approved_as_is | Good familiar-noun possessive. |
| cloze_008 | TF-B1-01-LS02-01 | T-B1-01-LS02-01-02 | Ich brauche ___ Unterlagen. | meine | support_after_answer | auto_core | review candidate after QA | approved_as_is | Familiar plural accepted. |
| cloze_009 | TF-B1-01-LS09-01 | T-B1-01-LS09-01-01 | Die ___ ist hier. | App | support_after_answer | auto_supported | not review-eligible until schema QA | approved_as_is | Mechanics support. |

### Satzbau survivors

| draft item ID | targetFamilyId | targetId | chunks | correct answer | evidenceType | review eligibility | QA status | QA notes |
|---|---|---|---|---|---|---|---|---|
| satzbau_001 | TF-B1-01-LS01-01 | T-B1-01-LS01-01-03 | Heute / bin / ich / im Kurs | Heute bin ich im Kurs. | auto_core | review candidate after QA | approved_as_is | Good V2 build. |
| satzbau_002 | TF-B1-01-LS01-01 | T-B1-01-LS01-01-03 | Im Kurs / lerne / ich / Deutsch | Im Kurs lerne ich Deutsch. | auto_core | review candidate after QA | approved_as_is | Place-fronted V2. |
| satzbau_003 | TF-B1-01-LS01-01 | T-B1-01-LS01-01-03 | Am Montag / brauche / ich / die App | Am Montag brauche ich die App. | auto_core | review candidate after QA | approved_as_is | V2 + need phrase. |
| satzbau_004 | TF-B1-01-LS01-02 | T-B1-01-LS01-02-01 | Wo / finde / ich / die Unterlagen / ? | Wo finde ich die Unterlagen? | auto_core | review candidate after QA | approved_as_is | Good W-question. |
| satzbau_005 | TF-B1-01-LS01-02 | T-B1-01-LS01-02-02 | Ist / die App / hier / ? | Ist die App hier? | auto_core | review candidate after QA | approved_as_is | Good yes/no question. |
| satzbau_006 | TF-B1-01-LS01-02 | T-B1-01-LS01-02-02 | Haben / Sie / Informationen / ? | Haben Sie Informationen? | auto_core | review candidate after QA | approved_as_is | Basic orientation only. |
| satzbau_007 | TF-B1-01-LS04-01 | T-B1-01-LS04-01-01 | Ich / brauche / ein Heft | Ich brauche ein Heft. | auto_core | review candidate after QA | approved_as_is | Good need phrase. |
| satzbau_008 | TF-B1-01-LS02-01 | T-B1-01-LS02-01-02 | Das / ist / meine App | Das ist meine App. | auto_core | review candidate after QA | approved_as_is | Good possessive. |
| satzbau_009 | TF-B1-01-LS02-01 | T-B1-01-LS02-01-02 | Meine Unterlagen / sind / hier | Meine Unterlagen sind hier. | auto_core | review candidate after QA | approved_as_is | Familiar plural accepted. |

### Reparatur survivors

| draft item ID | targetFamilyId | targetId | faulty sentence | corrected sentence | evidenceType | review eligibility | QA status | QA notes |
|---|---|---|---|---|---|---|---|---|
| repair_001 | TF-B1-01-LS01-01 | T-B1-01-LS01-01-03 | Heute ich bin im Kurs. | Heute bin ich im Kurs. | auto_core | review candidate after QA | approved_as_is | Strong V2 repair. |
| repair_002 | TF-B1-01-LS01-01 | T-B1-01-LS01-01-03 | Im Kurs ich lerne Deutsch. | Im Kurs lerne ich Deutsch. | auto_core | review candidate after QA | approved_as_is | Good place-fronted V2 repair. |
| repair_003 | TF-B1-01-LS01-02 | T-B1-01-LS01-02-01 | Wo ich finde die App? | Wo finde ich die App? | auto_core | review candidate after QA | approved_as_is | Strong W-question repair. |
| repair_006 | TF-B1-01-LS09-01 | T-B1-01-LS09-01-01 | Ich brauche ein heft. | Ich brauche ein Heft. | auto_supported | not review-eligible until schema QA | approved_as_is | Mechanics repair. |
| repair_007 | TF-B1-01-LS02-01 | T-B1-01-LS02-01-02 | Das ist mein App. | Das ist meine App. | auto_core | review candidate after QA | approved_as_is | Good possessive repair. |
| repair_008 | TF-B1-01-LS02-01 | T-B1-01-LS02-01-02 | Ich brauche mein Unterlagen. | Ich brauche meine Unterlagen. | auto_core | review candidate after QA | approved_as_is | Familiar plural accepted. |

### Kontrast survivors

| draft item ID | targetFamilyId | targetId | prompt | correct answer | evidenceType | review eligibility | QA status | QA notes |
|---|---|---|---|---|---|---|---|---|
| contrast_002 | TF-B1-01-LS01-02 | T-B1-01-LS01-02-01 | Which is the correct W-question? | Wo finde ich die App? | auto_core | review candidate after QA | approved_as_is | Clear W-question contrast. |

### Produktion survivors

| draft item ID | targetFamilyId | targetId | prompt | model answer | supportPolicy | evidenceType | review eligibility | QA status | QA notes |
|---|---|---|---|---|---|---|---|---|
| production_001 | TF-B1-01-LS10-01 | T-B1-01-LS10-01-01 | Write two short sentences to introduce yourself in the course. | Ich heiße Samira. Ich bin im Deutschkurs. | checklist_visible | self_marked_production | not review-eligible | approved_as_is | Self-marked only. |
| production_002 | TF-B1-01-LS10-01 | T-B1-01-LS10-01-02 | Write one sentence about something you need for the course. | Ich brauche die Unterlagen. | phrase_bank_collapsed | self_marked_production | not review-eligible | approved_as_is | Self-marked only. |
| production_003 | TF-B1-01-LS10-01 | T-B1-01-LS10-01-01 | Write one sentence that starts with **Heute**. | Heute bin ich im Kurs. | checklist_visible | self_marked_production | not review-eligible | approved_as_is | Self-marked only; no V2 correctness claim. |

## 7. Cut / Deferred / Human-Check Ledger

| Draft item ID | Final status | Reason | Replacement needed? | Notes |
|---|---|---|---:|---|
| recognition_007 | cut | Thin vocabulary recognition; likely flashcard-like. | No | App vocabulary can return in a vocabulary activation bank. |
| cloze_010 | cut | `Deutschunterricht` compound makes the item vocabulary/spelling-heavy. | No | Better in a lesson/concept or vocabulary support layer. |
| repair_004 | cut | Faulty sentence can be a spoken/declarative question; not cleanly wrong. | No | Avoid ambiguous repair. |
| repair_005 | cut | Faulty sentence is grammatical enough and tests register/style, not a clear error. | No | Avoid false correction. |
| contrast_001 | cut | Duplicates recognition_005 almost exactly. | No | Surplus candidate. |
| contrast_003 | cut | Marked-order distractor is possible enough to confuse target. | No | Avoid subtle contrast at B1-01. |

Deferred: none.  
Needs human/tutor check: none.

## 8. Fallback / Capitalisation Ledger

| Item | Canonical answer | Fallback answer | Decision | Evidence impact | Schema/import caveat |
|---|---|---|---|---|---|
| cloze_004 | Brauche | brauche | correct-with-note only if supported | Lower-case fallback must not be full-strength. | If no correct-with-note, exact-only for strong evidence. |
| cloze_006 | Heft | heft | correct-with-note only if supported | Lower-case noun weakens evidence. | Keep auto_supported / not review-eligible unless schema supports note state. |
| cloze_009 | App | app | correct-with-note only if supported | Lower-case noun weakens evidence. | Keep auto_supported / not review-eligible unless schema supports note state. |
| repair_006 | Ich brauche ein Heft. | Ich brauche ein heft. | rejected | Capitalisation is the target. | Exact correction only. |
| production_001–003 | model answers only | many valid learner answers | self-marked only | No correctness evidence. | Never auto-grade these locally. |

No `heiße` / `heisse` item survives or is added in the top-up batch.

## 9. Multiple-Choice Choice-ID QA

| Item | Stable IDs present? | Correctness position-independent? | Duplicate text? | Distractor quality | Ambiguity risk | Decision |
|---|---:|---:|---:|---|---|---|
| recognition_001 | Yes | Yes | No | Good after c03 revision | Low | pass |
| recognition_002 | Yes | Yes | No | Good | Low | pass |
| recognition_003 | Yes | Yes | No | Acceptable after prompt revision | Medium documented | pass |
| recognition_004 | Yes | Yes | No | Good after c02 revision | Low | pass |
| recognition_005 | Yes | Yes | No | Good | Low | pass |
| recognition_006 | Yes | Yes | No | Mechanics-only but clear | Medium | pass with weak evidence |
| contrast_002 | Yes | Yes | No | Good | Low | pass |

Cut choice items: recognition_007, contrast_001, contrast_003.

## 10. Production Safeguard QA

| Item | self-marked only? | model after attempt/reveal? | review eligible? | correctness claim? | safe? | Notes |
|---|---:|---:|---:|---:|---:|---|
| production_001 | Yes | Yes | No | No | Yes | Checklist supports self-review only. |
| production_002 | Yes | Yes | No | No | Yes | Phrase bank is support only. |
| production_003 | Yes | Yes | No | No | Yes | V2 production is practised, not auto-graded. |

## 11. Final Survivor Distribution

### taskType counts

| taskType | Count |
|---|---:|
| Auswahl | 6 |
| Luecke | 9 |
| Satzbau | 9 |
| Reparatur | 6 |
| Kontrast | 1 |
| Produktion | 3 |
| Total | 34 |

### targetFamily counts

| targetFamilyId | Count |
|---|---:|
| TF-B1-01-LS01-01 | 8 |
| TF-B1-01-LS01-02 | 9 |
| TF-B1-01-LS04-01 | 5 |
| TF-B1-01-LS02-01 | 8 |
| TF-B1-01-LS09-01 | 3 |
| TF-B1-01-LS10-01 | 3 |
| TF-B1-01-LS08-01 | 0 direct survivors |

LS08 direct vocabulary was intentionally cut/downgraded because the top-up vocabulary candidates were the weakest part of the batch. LS08 vocabulary still appears embedded in surviving course/work items through App, Kurs, Heft, Unterlagen, Informationen.

### evidenceType counts

| evidenceType | Count |
|---|---:|
| auto_core | 27 |
| auto_supported | 4 |
| self_marked_production | 3 |
| excluded survivors | 0 |

### review eligibility counts

| review eligibility | Count |
|---|---:|
| review candidate after QA | 27 |
| not review-eligible until schema QA | 4 |
| not review-eligible self-marked production | 3 |

### QA status counts

| QA status | Count |
|---|---:|
| approved_as_is | 29 |
| revised_and_approved | 5 |
| cut | 6 |
| deferred | 0 |
| needs_human_tutor_check | 0 |

Final survivor set is balanced enough for a top-up batch. It over-strengthens LS01 question/order control slightly, but that is acceptable for B1-01. Direct LS08 vocabulary is under-supported by survivor count, but that is preferable to importing thin flashcard-like items.

## 12. Final QA Checklist

| Check | Result |
|---|---|
| All 40 candidates audited | Yes |
| Cut/deferred/human-check items excluded from clean survivor list | Yes |
| No notice cards approved as practice items | Yes |
| No explain-only cards approved as practice items | Yes |
| No lesson cards approved as practice items | Yes |
| No app code | Yes |
| No app-ready JSON | Yes |
| No Codex prompt | Yes |
| No B1-02 content | Yes |
| No copied TELC/textbook/coursebook text | Yes |
| No previously cut original B1-01 item revived | Yes |
| No B2 | Yes |
| No Genitive | Yes |
| No full article/case table | Yes |
| No adjective-ending traps | Yes |
| No production item counted as correctness | Yes |
| No recognition item proves production | Yes |
| No support-visible answer becomes unsafe auto_core | Yes |
| Multiple-choice survivor items use stable choice IDs | Yes |
| Fallback decisions are conservative | Yes |
| German learner-facing text remains LTR | Yes |
| Survivor item IDs are draft IDs only | Yes |
| Final clean survivor set ready for Phase 3B schema mapping | Yes |

## 13. Final Verdict

`READY_FOR_PHASE_3B_SCHEMA_MAPPING`

Exact next recommended action:

Run Phase 3B schema mapping for the 34 approved/revised B1-01 top-up survivor items, then decide whether to map them together with the original B1-01 approved practice items or as a separate `b1_m01_topup_001` import batch.
