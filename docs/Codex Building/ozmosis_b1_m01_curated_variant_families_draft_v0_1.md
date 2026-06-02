# Ozmosis B1-01 Curated Variant Families v0.1 — Draft for QA

Status: Draft variant-family design.  
Scope: B1-01 — Getting started at work/course.  
Purpose: Reduce fixed-phrase memorisation using static, pre-written sibling variants.  

## 1. Source Verification

| Source file/content | Available? | Used for | Reliability | Notes / caveats |
|---|---|---|---|---|
| `ozmosis_b1_m01_total_inventory_after_topup_phase3a.md` | Yes | Current 70-piece inventory and item list | High | Controlling source for current B1-01 clean inventory. |
| `ozmosis_b1_m01_topup_phase3a_qa_approved.md` | Yes | Top-up approved/cut state | High | Used for survivor and cut context. |
| `ozmosis_b1_m01_vocab_activity_coverage_audit.md` | Yes | Over/under-tested areas and recommendation to avoid more normal B1-01 practice | High | Used to cap `Ich brauche ...` and prefer curated variants. |
| `ozmosis_b1_m01_topup_40_candidate_batch.md` | Yes | Top-up candidate context | Medium-high | Used only as background; approved QA wins. |
| `ozmosis_phase3a_b1_m01_getting_started_qa_approved.md` | Yes | Original Phase 3A state | High | Confirms original 39 audited / 36 proceeding and caveats. |
| `ozmosis_phase3_b1_m01_getting_started_draft_items.md` | Yes | Original target-family design | High | Confirms target families and deferred scope. |
| `ozmosis_controlled_frame_slot_variant_system_v0_1.md` | Not found as source file | Frame-slot architecture guidance | Medium | Concept available from current chat context; not used as controlling source file. |
| `OZMOSIS_SOURCE_BRIEF_v0.80.2.md` | Yes | Product/evidence constraints | High | B1-first, static app, no false mastery. |
| `OZMOSIS_DEVELOPMENT_ROADMAP_v0.80.2.md` | Yes | Architecture/storage guardrails | High | Static browser app, localStorage preservation, v0.80.2 choice shuffling context. |
| TELC/Beruf/Aspekte files | Available | Structural inspiration only | Low for item text | No copied text used. |


## 2. Current B1-01 Variant Candidate Intake

| Check | Result |
|---|---|
| Total current learner-facing pieces | 70 |
| Current practice/production items | 67 |
| Notice/concept cards excluded | 3 |
| Original Phase 3A practice items available | 33 |
| Top-up Phase 3A survivor items available | 34 |
| Items eligible or maybe eligible for variant-family consideration | 51 |
| Items excluded from variant-family consideration | 16 |


Excluded notice/concept cards: `draft_b1_m01_notice_001`, `draft_b1_m01_notice_002`, `draft_b1_m01_notice_003`. These belong to the later lesson/concept layer and are not variant-family practice items.

## 3. Variant-Family Strategy

| Strategy point | Decision |
|---|---|
| Targets deserving variants | V2 fronted time/place; W-question order; yes/no question order; `mein/meine` familiar nouns; limited noun-capitalisation; capped `brauchen`; repair-focused W-questions; controlled production prompts. |
| Targets not deserving variants | `heiße` identity cloze due `ß/ss` issue; weak vocabulary recognition; article recognition for `die Arbeit`; isolated `Kurs`/`Deutschunterricht` vocabulary completions. |
| Already saturated targets | General V2 and `Ich brauche ...`; variants should replace/rotate, not add evidence volume. |
| Targets with evidence inflation risk | `brauchen_acc`, V2 sibling variants, mechanics/capitalisation variants. |
| Variant families created | 9 |
| Expected total variants | 62 |
| Type A families | 1 primary + production/limited support (`brauchen_acc`) |
| Type B families | 8 |
| Implementation intention | Static curated variants only; no runtime grammar generation. |


## 4. Item Eligibility Audit

| Source item ID | taskType | targetFamilyId | targetId | Current target | Eligible for variants? | Recommended family type | Recommended variant count | Reason |
|---|---|---|---|---|---|---|---|---|
| draft_b1_m01_recognition_001 | Auswahl | TF-B1-01-LS01-01 | T-B1-01-LS01-01-01 | name-giving sentence / heißen | no | — | 0 | Too basic; avoid more heiße variants due ß/ss fallback. |
| draft_b1_m01_recognition_002 | Auswahl | TF-B1-01-LS01-01 | T-B1-01-LS01-01-02 | learning-German sentence | maybe | Type B | 4 | Can be absorbed into V2/place-language families, but recognition itself does not need many variants. |
| draft_b1_m01_recognition_003 | Auswahl | TF-B1-01-LS01-02 | T-B1-01-LS01-02-01 | W-question order: Wo ist der Kursraum? | yes | Type B | 6 | Useful W-question frame; can vary location/object safely. |
| draft_b1_m01_recognition_004 | Auswahl | TF-B1-01-LS01-02 | T-B1-01-LS01-02-02 | yes/no question order: Brauche ich ein Heft? | yes | Type B | 5 | Good candidate for controlled yes/no variants. |
| draft_b1_m01_recognition_005 | Auswahl | TF-B1-01-LS08-01 | T-B1-01-LS08-01-01 | der Kurs vs Beruf/Arbeit | no | — | 0 | Weak vocabulary recognition; do not variantise. |
| draft_b1_m01_recognition_006 | Auswahl | TF-B1-01-LS08-01 | T-B1-01-LS08-01-03 | survival phrase: Ich brauche Hilfe | maybe | Type A | 4 | Use only within capped brauchen family; do not over-expand. |
| draft_b1_m01_recognition_007 | Auswahl | TF-B1-01-LS02-01 | T-B1-01-LS02-01-01 | die Arbeit phrase recognition | no | — | 0 | Article awareness recognition only; no broad variants. |
| draft_b1_m01_recognition_008 | Auswahl | TF-B1-01-LS02-01 | T-B1-01-LS02-01-02 | mein Kurs possessive phrase | yes | Type B | 6 | Good controlled familiar-noun possessive family. |
| draft_b1_m01_recognition_010 | Auswahl | TF-B1-01-LS09-01 | T-B1-01-LS09-01-01 | noun capitalisation: Kurs | maybe | Type B | 4 | Useful but weak evidence; keep mechanics variants limited. |
| draft_b1_m01_cloze_001 | Luecke | TF-B1-01-LS01-01 | T-B1-01-LS01-01-01 | Ich ___ Mina → heiße | no | — | 0 | Avoid multiplying ß/ss fallback issue. |
| draft_b1_m01_cloze_002 | Luecke | TF-B1-01-LS01-01 | T-B1-01-LS01-01-02 | lerne | maybe | Type A/B | 4 | Can be represented inside language-learning/V2 families; no separate large family. |
| draft_b1_m01_cloze_003 | Luecke | TF-B1-01-LS01-01 | T-B1-01-LS01-01-03 | V2: Heute ___ ich Deutsch | yes | Type B | 10 | Strong grammar frame; best candidate. |
| draft_b1_m01_cloze_004 | Luecke | TF-B1-01-LS08-01 | T-B1-01-LS08-01-01 | Kurs noun completion | no | — | 0 | Weak vocabulary/capitalisation; do not variantise. |
| draft_b1_m01_cloze_005 | Luecke | TF-B1-01-LS08-01 | T-B1-01-LS08-01-03 | Hilfe noun completion | maybe | Type B | 3 | If used, only in capped capitalisation/brauchen contexts. |
| draft_b1_m01_cloze_006 | Luecke | TF-B1-01-LS02-01 | T-B1-01-LS02-01-02 | meine Arbeit | yes | Type B | 7 | Good familiar-noun possessive family. |
| draft_b1_m01_cloze_007 | Luecke | TF-B1-01-LS04-01 | T-B1-01-LS04-01-01 | brauche Informationen | yes | Type A | 6 | Useful but capped because brauchen is A1/A2 by itself. |
| draft_b1_m01_cloze_008 | Luecke | TF-B1-01-LS01-02 | T-B1-01-LS01-02-02 | Brauche ___ ein Heft? → ich | yes | Type B | 5 | Useful yes/no question-order family. |
| draft_b1_m01_repair_001 | Reparatur | TF-B1-01-LS01-01 | T-B1-01-LS01-01-03 | repair V2 | yes | Type B | 8 | Strong repair target. |
| draft_b1_m01_repair_002 | Reparatur | TF-B1-01-LS09-01 | T-B1-01-LS09-01-01 | repair noun capitalisation Hilfe | yes | Type B | 5 | Mechanics family; auto_supported only. |
| draft_b1_m01_repair_003 | Reparatur | TF-B1-01-LS01-02 | T-B1-01-LS01-02-01 | repair W-question | yes | Type B | 6 | Good repair family. |
| draft_b1_m01_repair_004 | Reparatur | TF-B1-01-LS02-01 | T-B1-01-LS02-01-02 | repair possessive | yes | Type B | 6 | Good possessive repair family. |
| draft_b1_m01_repair_005 | Reparatur | TF-B1-01-LS04-01 | T-B1-01-LS04-01-01 | repair brauchen/Hilfe collocation | maybe | Type A | 3 | Use only if error remains natural and not silly. |
| draft_b1_m01_satzbau_001 | Satzbau | TF-B1-01-LS01-01 | T-B1-01-LS01-01-01 | build identity sentence | no | — | 0 | Too basic; keep single. |
| draft_b1_m01_satzbau_002 | Satzbau | TF-B1-01-LS01-01 | T-B1-01-LS01-01-03 | build V2 Heute lerne ich Deutsch | yes | Type B | 10 | Strong family candidate. |
| draft_b1_m01_satzbau_003 | Satzbau | TF-B1-01-LS01-02 | T-B1-01-LS01-02-01 | build W-question | yes | Type B | 6 | Good family candidate. |
| draft_b1_m01_satzbau_004 | Satzbau | TF-B1-01-LS01-02 | T-B1-01-LS01-02-02 | build yes/no question | yes | Type B | 5 | Good family candidate. |
| draft_b1_m01_satzbau_005 | Satzbau | TF-B1-01-LS04-01 | T-B1-01-LS04-01-01 | build need phrase | maybe | Type A | 4 | Capped brauchen family only. |
| draft_b1_m01_contrast_002 | Kontrast | TF-B1-01-LS02-01 | T-B1-01-LS02-01-02 | mein/meine contrast | yes | Type B | 6 | Good minimal-pair family. |
| draft_b1_m01_contrast_003 | Kontrast | TF-B1-01-LS01-02 | T-B1-01-LS01-02-02 | yes/no vs statement contrast | yes | Type B | 5 | Useful but must avoid marked spoken alternatives. |
| draft_b1_m01_transformation_001 | Umformen | TF-B1-01-LS01-01 | T-B1-01-LS01-01-03 | transform with Heute / V2 | yes | Type B | 6 | Useful transformation family, but fewer than V2 cloze/satzbau. |
| draft_b1_m01_production_001 | Produktion | TF-B1-01-LS10-01 | T-B1-01-LS10-01-01 | short self-introduction | maybe | Type B | 3 | Production variants allowed but self-marked only. |
| draft_b1_m01_production_002 | Produktion | TF-B1-01-LS10-01 | T-B1-01-LS10-01-02 | simple need sentence | maybe | Type A | 2 | Production only; no correctness evidence. |
| draft_b1_m01_production_003 | Produktion | TF-B1-01-LS10-01 | T-B1-01-LS10-01-01 | Heute/V2 sentence | maybe | Type B | 3 | Good production prompt family, self-marked only. |
| draft_b1_m01_topup_recognition_001 | Auswahl | TF-B1-01-LS01-01 | T-B1-01-LS01-01-03 | recognise V2 after Am Montag | yes | Type B | 8 | Fold into V2 fronted time family. |
| draft_b1_m01_topup_recognition_002 | Auswahl | TF-B1-01-LS01-02 | T-B1-01-LS01-02-01 | recognise Wo finde ich die App? | yes | Type B | 6 | Fold into W-question find/location family. |
| draft_b1_m01_topup_recognition_003 | Auswahl | TF-B1-01-LS01-02 | T-B1-01-LS01-02-02 | recognise Ist die App hier? | yes | Type B | 5 | Fold into yes/no question family. |
| draft_b1_m01_topup_recognition_004 | Auswahl | TF-B1-01-LS04-01 | T-B1-01-LS04-01-01 | recognise Ich brauche die Unterlagen | maybe | Type A | 4 | Capped brauchen family only. |
| draft_b1_m01_topup_recognition_005 | Auswahl | TF-B1-01-LS02-01 | T-B1-01-LS02-01-02 | recognise mein Heft | yes | Type B | 6 | Fold into mein/meine family. |
| draft_b1_m01_topup_recognition_006 | Auswahl | TF-B1-01-LS09-01 | T-B1-01-LS09-01-01 | recognise noun capitalisation Unterlagen | maybe | Type B | 4 | Mechanics family, limited. |
| draft_b1_m01_topup_cloze_001 | Luecke | TF-B1-01-LS01-01 | T-B1-01-LS01-01-03 | Morgen ___ ich im Kurs → bin | yes | Type B | 10 | Fold into V2 fronted time family. |
| draft_b1_m01_topup_cloze_002 | Luecke | TF-B1-01-LS01-01 | T-B1-01-LS01-01-03 | Am Vormittag ___ ich Deutsch → lerne | yes | Type B | 10 | Fold into V2 fronted time family. |
| draft_b1_m01_topup_cloze_003 | Luecke | TF-B1-01-LS01-02 | T-B1-01-LS01-02-01 | Wo ___ ich die App? → finde | yes | Type A/B | 7 | Good W-question verb recall. |
| draft_b1_m01_topup_cloze_004 | Luecke | TF-B1-01-LS01-02 | T-B1-01-LS01-02-02 | ___ ich die Unterlagen? → Brauche | yes | Type B | 5 | Good yes/no question-order variant; sentence-start cap caveat. |
| draft_b1_m01_topup_cloze_005 | Luecke | TF-B1-01-LS04-01 | T-B1-01-LS04-01-01 | Ich ___ die App → brauche | yes | Type A | 6 | Capped brauchen family. |
| draft_b1_m01_topup_cloze_006 | Luecke | TF-B1-01-LS04-01 | T-B1-01-LS04-01-01 | Ich brauche ein ___ → Heft | no | — | 0 | Target is noun/capitalisation, not suitable for broad variants. |
| draft_b1_m01_topup_cloze_007 | Luecke | TF-B1-01-LS02-01 | T-B1-01-LS02-01-02 | Das ist ___ App → meine | yes | Type B | 7 | Fold into mein/meine family. |
| draft_b1_m01_topup_cloze_008 | Luecke | TF-B1-01-LS02-01 | T-B1-01-LS02-01-02 | Ich brauche ___ Unterlagen → meine | yes | Type B | 6 | Fold into mein/meine family; watch hidden brauchen overuse. |
| draft_b1_m01_topup_cloze_009 | Luecke | TF-B1-01-LS09-01 | T-B1-01-LS09-01-01 | Die ___ ist hier → App | maybe | Type B | 4 | Mechanics family, limited. |
| draft_b1_m01_topup_satzbau_001 | Satzbau | TF-B1-01-LS01-01 | T-B1-01-LS01-01-03 | Heute bin ich im Kurs | yes | Type B | 10 | Fold into V2 fronted time family. |
| draft_b1_m01_topup_satzbau_002 | Satzbau | TF-B1-01-LS01-01 | T-B1-01-LS01-01-03 | Im Kurs lerne ich Deutsch | yes | Type B | 8 | Fold into V2 fronted place family. |
| draft_b1_m01_topup_satzbau_003 | Satzbau | TF-B1-01-LS01-01 | T-B1-01-LS01-01-03 | Am Montag brauche ich die App | maybe | Type B | 5 | Useful V2 but also brauchen; cap same-session evidence. |
| draft_b1_m01_topup_satzbau_004 | Satzbau | TF-B1-01-LS01-02 | T-B1-01-LS01-02-01 | Wo finde ich die Unterlagen? | yes | Type B | 7 | Fold into W-question family. |
| draft_b1_m01_topup_satzbau_005 | Satzbau | TF-B1-01-LS01-02 | T-B1-01-LS01-02-02 | Ist die App hier? | yes | Type B | 5 | Fold into yes/no question family. |
| draft_b1_m01_topup_satzbau_006 | Satzbau | TF-B1-01-LS01-02 | T-B1-01-LS01-02-02 | Haben Sie Informationen? | maybe | Type B | 4 | Useful but B1-02-adjacent; keep limited. |
| draft_b1_m01_topup_satzbau_007 | Satzbau | TF-B1-01-LS04-01 | T-B1-01-LS04-01-01 | Ich brauche ein Heft | maybe | Type A | 4 | Capped brauchen family only. |
| draft_b1_m01_topup_satzbau_008 | Satzbau | TF-B1-01-LS02-01 | T-B1-01-LS02-01-02 | Das ist meine App | yes | Type B | 7 | Fold into possessive family. |
| draft_b1_m01_topup_satzbau_009 | Satzbau | TF-B1-01-LS02-01 | T-B1-01-LS02-01-02 | Meine Unterlagen sind hier | yes | Type B | 6 | Fold into possessive family. |
| draft_b1_m01_topup_repair_001 | Reparatur | TF-B1-01-LS01-01 | T-B1-01-LS01-01-03 | repair Heute ich bin im Kurs | yes | Type B | 8 | Fold into V2 repair family. |
| draft_b1_m01_topup_repair_002 | Reparatur | TF-B1-01-LS01-01 | T-B1-01-LS01-01-03 | repair Im Kurs ich lerne Deutsch | yes | Type B | 8 | Fold into V2 repair family. |
| draft_b1_m01_topup_repair_003 | Reparatur | TF-B1-01-LS01-02 | T-B1-01-LS01-02-01 | repair Wo ich finde die App? | yes | Type B | 6 | Fold into W-question repair family. |
| draft_b1_m01_topup_repair_006 | Reparatur | TF-B1-01-LS09-01 | T-B1-01-LS09-01-01 | repair Ich brauche ein heft | yes | Type B | 4 | Mechanics family, auto_supported. |
| draft_b1_m01_topup_repair_007 | Reparatur | TF-B1-01-LS02-01 | T-B1-01-LS02-01-02 | repair mein App → meine App | yes | Type B | 6 | Fold into possessive repair family. |
| draft_b1_m01_topup_repair_008 | Reparatur | TF-B1-01-LS02-01 | T-B1-01-LS02-01-02 | repair mein Unterlagen → meine Unterlagen | yes | Type B | 6 | Fold into possessive repair family. |
| draft_b1_m01_topup_contrast_002 | Kontrast | TF-B1-01-LS01-02 | T-B1-01-LS01-02-01 | contrast W-question order | yes | Type B | 5 | Fold into W-question contrast family. |
| draft_b1_m01_topup_production_001 | Produktion | TF-B1-01-LS10-01 | T-B1-01-LS10-01-01 | two-sentence course self-introduction | maybe | Type B | 3 | Production prompts only; self-marked. |
| draft_b1_m01_topup_production_002 | Produktion | TF-B1-01-LS10-01 | T-B1-01-LS10-01-02 | need sentence for course | maybe | Type A | 2 | Production only, capped. |
| draft_b1_m01_topup_production_003 | Produktion | TF-B1-01-LS10-01 | T-B1-01-LS10-01-01 | Heute sentence | maybe | Type B | 3 | Production only, self-marked. |


## 5. Curated Variant Families


### b1-01-v2-fronted-time-vf-001

| Field | Value |
|---|---|
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
| B1-01 scope risk | low-medium: strong target but easy to oversaturate |
| QA notes | Best candidate family; variants should replace several fixed V2 items rather than add on top. |



| variantId | learner cue | prompt / sentence / chunks | given phrase if any | target answer | accepted answers | feedback micro-rule | evidenceType recommendation | supportPolicy | QA risk |
|---|---|---|---|---|---|---|---|---|---|
| b1-01-v2-fronted-time-vf-001-var-001 | Today I am in the course. | Heute ___ ich im Kurs. | — | bin | bin | Heute bin ich im Kurs. After a fronted time phrase, the verb comes second. | auto_core | support_after_answer | low |
| b1-01-v2-fronted-time-vf-001-var-002 | Tomorrow I am in the course. | Morgen ___ ich im Kurs. | — | bin | bin | Morgen bin ich im Kurs. The verb stays in position 2. | auto_core | support_after_answer | low |
| b1-01-v2-fronted-time-vf-001-var-003 | On Monday I am in the course. | Am Montag ___ ich im Kurs. | — | bin | bin | Am Montag bin ich im Kurs. Time first, verb second. | auto_core | support_after_answer | low |
| b1-01-v2-fronted-time-vf-001-var-004 | Today I learn German. | Heute ___ ich Deutsch. | — | lerne | lerne | Heute lerne ich Deutsch. The finite verb comes after Heute. | auto_core | support_after_answer | low |
| b1-01-v2-fronted-time-vf-001-var-005 | Tomorrow I learn German. | Morgen ___ ich Deutsch. | — | lerne | lerne | Morgen lerne ich Deutsch. The verb is still second. | auto_core | support_after_answer | low |
| b1-01-v2-fronted-time-vf-001-var-006 | In the morning I learn German. | Am Vormittag ___ ich Deutsch. | — | lerne | lerne | Am Vormittag lerne ich Deutsch. The time phrase takes position 1. | auto_core | support_after_answer | low |
| b1-01-v2-fronted-time-vf-001-var-007 | Today I need the app. | Heute ___ ich [die App]. | die App | brauche | brauche | Heute brauche ich die App. The given phrase is not tested; the verb is second. | auto_supported | support_after_answer | medium: brauchen scaffold |
| b1-01-v2-fronted-time-vf-001-var-008 | On Monday I need the documents. | Am Montag ___ ich [die Unterlagen]. | die Unterlagen | brauche | brauche | Am Montag brauche ich die Unterlagen. The verb follows the time phrase. | auto_supported | support_after_answer | medium: brauchen/document boundary |
| b1-01-v2-fronted-time-vf-001-var-009 | Today I have the documents. | Heute ___ ich [die Unterlagen]. | die Unterlagen | habe | habe | Heute habe ich die Unterlagen. The verb comes second. | auto_core | support_after_answer | medium: Unterlagen given only |
| b1-01-v2-fronted-time-vf-001-var-010 | Tomorrow I have a notebook. | Morgen ___ ich [ein Heft]. | ein Heft | habe | habe | Morgen habe ich ein Heft. The time phrase is first; the verb is second. | auto_core | support_after_answer | low |


### b1-01-v2-fronted-place-vf-002

| Field | Value |
|---|---|
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
| B1-01 scope risk | low-medium: avoid unnatural place-fronting |
| QA notes | Use mostly Im Kurs/Im Kursraum; do not introduce motion/location contrast. |



| variantId | learner cue | prompt / sentence / chunks | given phrase if any | target answer | accepted answers | feedback micro-rule | evidenceType recommendation | supportPolicy | QA risk |
|---|---|---|---|---|---|---|---|---|---|
| b1-01-v2-fronted-place-vf-002-var-001 | In the course I learn German. | Im Kurs ___ ich Deutsch. | — | lerne | lerne | Im Kurs lerne ich Deutsch. The verb comes after the place phrase. | auto_core | support_after_answer | low |
| b1-01-v2-fronted-place-vf-002-var-002 | In the course room I learn German. | Im Kursraum ___ ich Deutsch. | — | lerne | lerne | Im Kursraum lerne ich Deutsch. The verb is in position 2. | auto_core | support_after_answer | low |
| b1-01-v2-fronted-place-vf-002-var-003 | In the course I need the app. | Im Kurs ___ ich [die App]. | die App | brauche | brauche | Im Kurs brauche ich die App. The given phrase is context, not the target. | auto_supported | support_after_answer | medium: brauchen scaffold |
| b1-01-v2-fronted-place-vf-002-var-004 | In the course room I have the documents. | Im Kursraum ___ ich [die Unterlagen]. | die Unterlagen | habe | habe | Im Kursraum habe ich die Unterlagen. Place first, verb second. | auto_core | support_after_answer | medium: document phrase given |
| b1-01-v2-fronted-place-vf-002-var-005 | In German class I learn German. | Im Deutschunterricht ___ ich Deutsch. | — | lerne | lerne | Im Deutschunterricht lerne ich Deutsch. The verb follows the fronted place/context phrase. | auto_supported | support_after_answer | medium: long compound |
| b1-01-v2-fronted-place-vf-002-var-006 | In the course I am here. | Im Kurs ___ ich hier. | — | bin | bin | Im Kurs bin ich hier. The finite verb stays second. | auto_core | support_after_answer | medium: slightly artificial but usable |
| b1-01-v2-fronted-place-vf-002-var-007 | In the course room the app is here. | Im Kursraum ___ die App hier. | — | ist | ist | Im Kursraum ist die App hier. The verb follows the place phrase. | auto_core | support_after_answer | medium: surface shape simple |
| b1-01-v2-fronted-place-vf-002-var-008 | In the course the notebook is here. | Im Kurs ___ das Heft hier. | — | ist | ist | Im Kurs ist das Heft hier. The verb is second. | auto_core | support_after_answer | low |


### b1-01-w-question-location-vf-003

| Field | Value |
|---|---|
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
| B1-01 scope risk | low; avoid appointment contexts |
| QA notes | Strong candidate; use clean W-question order only. |



| variantId | learner cue | prompt / sentence / chunks | given phrase if any | target answer | accepted answers | feedback micro-rule | evidenceType recommendation | supportPolicy | QA risk |
|---|---|---|---|---|---|---|---|---|---|
| b1-01-w-question-location-vf-003-var-001 | Where is the course room? | Wo ___ der Kursraum? | — | ist | ist | Wo ist der Kursraum? In a W-question, the verb comes after the question word. | auto_core | support_after_answer | low |
| b1-01-w-question-location-vf-003-var-002 | Where is the app? | Wo ___ die App? | — | ist | ist | Wo ist die App? Question word first, verb second. | auto_core | support_after_answer | low |
| b1-01-w-question-location-vf-003-var-003 | Where is the notebook? | Wo ___ das Heft? | — | ist | ist | Wo ist das Heft? The verb comes directly after Wo. | auto_core | support_after_answer | low |
| b1-01-w-question-location-vf-003-var-004 | Where do I find the app? | Wo ___ ich [die App]? | die App | finde | finde | Wo finde ich die App? The object phrase is given; type the verb. | auto_core | support_after_answer | low |
| b1-01-w-question-location-vf-003-var-005 | Where do I find the documents? | Wo ___ ich [die Unterlagen]? | die Unterlagen | finde | finde | Wo finde ich die Unterlagen? W-question: Wo + verb + subject. | auto_core | support_after_answer | low |
| b1-01-w-question-location-vf-003-var-006 | Where do I find information? | Wo ___ ich [Informationen]? | Informationen | finde | finde | Wo finde ich Informationen? The given phrase is not tested. | auto_core | support_after_answer | medium: bare plural |
| b1-01-w-question-location-vf-003-var-007 | Where do I find the course room? | Wo ___ ich [den Kursraum]? | den Kursraum | finde | finde | Wo finde ich den Kursraum? The target is the verb, not den Kursraum. | auto_core | support_after_answer | medium: accusative phrase given |


### b1-01-yes-no-question-vf-004

| Field | Value |
|---|---|
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
| B1-01 scope risk | medium: avoid spoken statement-order ambiguity |
| QA notes | Use clean written yes/no questions only. |



| variantId | learner cue | prompt / sentence / chunks | given phrase if any | target answer | accepted answers | feedback micro-rule | evidenceType recommendation | supportPolicy | QA risk |
|---|---|---|---|---|---|---|---|---|---|
| b1-01-yes-no-question-vf-004-var-001 | Do I need a notebook? | ___ ich [ein Heft]? | ein Heft | Brauche | Brauche; brauche only correct-with-note if sentence-start fallback supported | Brauche ich ein Heft? A yes/no question starts with the verb. | auto_core exact | support_after_answer | medium: sentence-start capitalisation |
| b1-01-yes-no-question-vf-004-var-002 | Do I need the app? | ___ ich [die App]? | die App | Brauche | Brauche; brauche only correct-with-note if supported | Brauche ich die App? The finite verb comes first. | auto_core exact | support_after_answer | medium: brauchen cap |
| b1-01-yes-no-question-vf-004-var-003 | Do I need the documents? | ___ ich [die Unterlagen]? | die Unterlagen | Brauche | Brauche; brauche only correct-with-note if supported | Brauche ich die Unterlagen? Verb first in a yes/no question. | auto_core exact | support_after_answer | medium: document boundary |
| b1-01-yes-no-question-vf-004-var-004 | Is the app here? | ___ die App hier? | — | Ist | Ist; ist only correct-with-note if supported | Ist die App hier? A yes/no question starts with the finite verb. | auto_core exact | support_after_answer | low |
| b1-01-yes-no-question-vf-004-var-005 | Is the notebook here? | ___ das Heft hier? | — | Ist | Ist; ist only correct-with-note if supported | Ist das Heft hier? The verb comes before the subject. | auto_core exact | support_after_answer | low |
| b1-01-yes-no-question-vf-004-var-006 | Do you have information? | ___ Sie [Informationen]? | Informationen | Haben | Haben; haben only correct-with-note if supported | Haben Sie Informationen? With Sie, the verb starts the question. | auto_core exact | support_after_answer | medium: B1-02-adjacent but acceptable |


### b1-01-brauchen-acc-vf-005

| Field | Value |
|---|---|
| variantFamilyId | b1-01-brauchen-acc-vf-005 |
| source item IDs | draft_b1_m01_recognition_006; draft_b1_m01_cloze_005; draft_b1_m01_cloze_007; draft_b1_m01_repair_005; draft_b1_m01_satzbau_005; draft_b1_m01_topup_recognition_004; draft_b1_m01_topup_cloze_005; draft_b1_m01_topup_satzbau_007 |
| targetFamilyId | TF-B1-01-LS04-01 |
| targetId | T-B1-01-LS04-01-01 |
| family target | brauchen as basic course/work survival frame |
| family type | Type A |
| taskTypes supported | Auswahl, Luecke, Satzbau, Reparatur, Produktion support only |
| taskDepth supported | recognition, cloze, sentence_building, repair, controlled_production |
| evidence interpretation | Capped verb-frame evidence; not broad B1 evidence. |
| reviewGroup recommendation | rg-b1-01-brauchen-acc-survival |
| supportPolicy default | scenario_visible or support_after_answer |
| max same-session evidence | Maximum 1 same-session evidence contribution; simple recognition/cloze should be auto_supported if too scaffolded. |
| B1-01 scope risk | medium-high: A1/A2 phrase can be over-inflated |
| QA notes | Hard cap at 6 variants. |



| variantId | learner cue | prompt / sentence / chunks | given phrase if any | target answer | accepted answers | feedback micro-rule | evidenceType recommendation | supportPolicy | QA risk |
|---|---|---|---|---|---|---|---|---|---|
| b1-01-brauchen-acc-vf-005-var-001 | I need the app. | Ich ___ [die App]. | die App | brauche | brauche | Ich brauche die App. The phrase in brackets is given; type the verb. | auto_core | support_after_answer | low |
| b1-01-brauchen-acc-vf-005-var-002 | I need a notebook. | Ich ___ [ein Heft]. | ein Heft | brauche | brauche | Ich brauche ein Heft. Only the verb is tested here. | auto_core | support_after_answer | low |
| b1-01-brauchen-acc-vf-005-var-003 | I need the documents. | Ich ___ [die Unterlagen]. | die Unterlagen | brauche | brauche | Ich brauche die Unterlagen. The object phrase is given context. | auto_supported | support_after_answer | medium: document boundary |
| b1-01-brauchen-acc-vf-005-var-004 | I need information. | Ich ___ [Informationen]. | Informationen | brauche | brauche | Ich brauche Informationen. The target is brauche. | auto_core | support_after_answer | low |
| b1-01-brauchen-acc-vf-005-var-005 | I need help. | Ich ___ [Hilfe]. | Hilfe | brauche | brauche | Ich brauche Hilfe. Hilfe is given; the verb is tested. | auto_supported | support_after_answer | medium: already common |
| b1-01-brauchen-acc-vf-005-var-006 | Today I need the app. | Heute ___ ich [die App]. | die App | brauche | brauche | Heute brauche ich die App. This also practises V2, so count evidence cautiously. | auto_supported | support_after_answer | medium: multi-signal; sibling only |


### b1-01-mein-meine-familiar-vf-006

| Field | Value |
|---|---|
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
| B1-01 scope risk | medium: avoid implying full possessive mastery |
| QA notes | Use only known nouns: Kurs, Arbeit, Heft, App, Unterlagen. |



| variantId | learner cue | prompt / sentence / chunks | given phrase if any | target answer | accepted answers | feedback micro-rule | evidenceType recommendation | supportPolicy | QA risk |
|---|---|---|---|---|---|---|---|---|---|
| b1-01-mein-meine-familiar-vf-006-var-001 | This is my course. | Das ist ___ Kurs. | — | mein | mein | Das ist mein Kurs. Use mein with der Kurs. | auto_core | support_after_answer | low |
| b1-01-mein-meine-familiar-vf-006-var-002 | This is my work. | Das ist ___ Arbeit. | — | meine | meine | Das ist meine Arbeit. Use meine with die Arbeit. | auto_core | support_after_answer | low |
| b1-01-mein-meine-familiar-vf-006-var-003 | This is my notebook. | Das ist ___ Heft. | — | mein | mein | Das ist mein Heft. Use mein with das Heft. | auto_core | support_after_answer | low |
| b1-01-mein-meine-familiar-vf-006-var-004 | This is my app. | Das ist ___ App. | — | meine | meine | Das ist meine App. Use meine with die App. | auto_core | support_after_answer | low |
| b1-01-mein-meine-familiar-vf-006-var-005 | These are my documents. | Das sind ___ Unterlagen. | — | meine | meine | Das sind meine Unterlagen. Use meine with plural Unterlagen. | auto_core | support_after_answer | medium: plural awareness |
| b1-01-mein-meine-familiar-vf-006-var-006 | I need my documents. | Ich brauche ___ Unterlagen. | — | meine | meine | Ich brauche meine Unterlagen. The target is meine, not brauchen. | auto_core | support_after_answer | medium: hidden accusative minimal |
| b1-01-mein-meine-familiar-vf-006-var-007 | My app is here. | ___ App ist hier. | — | Meine | Meine; meine only correct-with-note if sentence-start fallback supported | Meine App ist hier. Sentence start and noun phrase begin with capitals. | auto_core exact | support_after_answer | medium: sentence-start capitalisation |
| b1-01-mein-meine-familiar-vf-006-var-008 | My notebook is here. | ___ Heft ist hier. | — | Mein | Mein; mein only correct-with-note if supported | Mein Heft ist hier. Use Mein with das Heft. | auto_core exact | support_after_answer | medium: sentence-start capitalisation |


### b1-01-noun-capitalisation-vf-007

| Field | Value |
|---|---|
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
| B1-01 scope risk | medium-high: can become spelling drill |
| QA notes | Keep limited and auto_supported. |



| variantId | learner cue | prompt / sentence / chunks | given phrase if any | target answer | accepted answers | feedback micro-rule | evidenceType recommendation | supportPolicy | QA risk |
|---|---|---|---|---|---|---|---|---|---|
| b1-01-noun-capitalisation-vf-007-var-001 | You need a notebook. | Ich brauche ein ___. | — | Heft | Heft; heft correct-with-note only if supported | Ich brauche ein Heft. German nouns are capitalised. | auto_supported | support_after_answer | medium |
| b1-01-noun-capitalisation-vf-007-var-002 | The app is here. | Die ___ ist hier. | — | App | App; app correct-with-note only if supported | Die App ist hier. App is a noun, so it is capitalised. | auto_supported | support_after_answer | medium |
| b1-01-noun-capitalisation-vf-007-var-003 | You need help. | Ich brauche ___. | — | Hilfe | Hilfe; hilfe correct-with-note only if supported | Ich brauche Hilfe. Hilfe is a noun, so it is capitalised. | auto_supported | support_after_answer | medium |
| b1-01-noun-capitalisation-vf-007-var-004 | The documents are here. | Die ___ sind hier. | — | Unterlagen | Unterlagen; unterlagen correct-with-note only if supported | Die Unterlagen sind hier. Unterlagen is a noun. | auto_supported | support_after_answer | medium |
| b1-01-noun-capitalisation-vf-007-var-005 | You are doing a course. | Ich mache einen ___. | — | Kurs | Kurs; kurs correct-with-note only if supported | Ich mache einen Kurs. Kurs is capitalised. | auto_supported | support_after_answer | medium: existing item overlap |


### b1-01-w-question-repair-vf-008

| Field | Value |
|---|---|
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
| B1-01 scope risk | low |
| QA notes | Separate repair family because repair evidence is materially stronger. |



| variantId | learner cue | prompt / sentence / chunks | given phrase if any | target answer | accepted answers | feedback micro-rule | evidenceType recommendation | supportPolicy | QA risk |
|---|---|---|---|---|---|---|---|---|---|
| b1-01-w-question-repair-vf-008-var-001 | Fix the question. | Wo der Kursraum ist? | — | Wo ist der Kursraum? | exact; punctuation variant may be accepted after QA | W-question: Wo + verb + subject/complement. | auto_core | support_after_answer | low |
| b1-01-w-question-repair-vf-008-var-002 | Fix the question. | Wo ich finde die App? | — | Wo finde ich die App? | exact; punctuation variant after QA | In a W-question, the verb comes after Wo. | auto_core | support_after_answer | low |
| b1-01-w-question-repair-vf-008-var-003 | Fix the question. | Wo ich finde die Unterlagen? | — | Wo finde ich die Unterlagen? | exact | Wo finde ich die Unterlagen? Verb second after Wo. | auto_core | support_after_answer | low |
| b1-01-w-question-repair-vf-008-var-004 | Fix the question. | Wo die App ist? | — | Wo ist die App? | exact | W-question order: Wo ist die App? | auto_core | support_after_answer | low |
| b1-01-w-question-repair-vf-008-var-005 | Fix the question. | Wo das Heft ist? | — | Wo ist das Heft? | exact | The finite verb comes after the question word. | auto_core | support_after_answer | low |
| b1-01-w-question-repair-vf-008-var-006 | Fix the question. | Wo Informationen finde ich? | — | Wo finde ich Informationen? | exact | Use Wo + finde + ich. | auto_core | support_after_answer | medium: bare plural |


### b1-01-controlled-production-vf-009

| Field | Value |
|---|---|
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
| B1-01 scope risk | medium: self-marking must not overclaim |
| QA notes | Use as rotating prompts, not auto-graded variants. |



| variantId | learner cue | prompt / sentence / chunks | given phrase if any | target answer | accepted answers | feedback micro-rule | evidenceType recommendation | supportPolicy | QA risk |
|---|---|---|---|---|---|---|---|---|---|
| b1-01-controlled-production-vf-009-var-001 | Introduce yourself in two short sentences. | Write your name and one course sentence. | — | self-marked | self-marked only | Model after attempt: Ich heiße Mina. Ich bin im Deutschkurs. | self_marked_production | checklist_visible | low |
| b1-01-controlled-production-vf-009-var-002 | Write one sentence about what you need today. | Use Ich brauche ... | — | self-marked | self-marked only | Model after attempt: Ich brauche die App. | self_marked_production | phrase_bank_collapsed | low |
| b1-01-controlled-production-vf-009-var-003 | Write one sentence that starts with Heute. | Use a course/work sentence. | — | self-marked | self-marked only | Model after attempt: Heute bin ich im Kurs. | self_marked_production | checklist_visible | low |
| b1-01-controlled-production-vf-009-var-004 | Write two short sentences for the first course day. | Include where you are and what you need. | — | self-marked | self-marked only | Model after attempt: Ich bin im Kurs. Ich brauche ein Heft. | self_marked_production | checklist_visible | medium: two sentences |


## 6. No-Variant Items

| Source item ID | Reason no variants recommended | Future treatment |
|---|---|---|
| draft_b1_m01_recognition_001 | Too basic; avoid more heiße variants due ß/ss fallback. | keep single |
| draft_b1_m01_recognition_005 | Weak vocabulary recognition; do not variantise. | keep single |
| draft_b1_m01_recognition_007 | Article awareness recognition only; no broad variants. | keep single |
| draft_b1_m01_cloze_001 | Avoid multiplying ß/ss fallback issue. | keep single |
| draft_b1_m01_cloze_004 | Weak vocabulary/capitalisation; do not variantise. | keep single |
| draft_b1_m01_satzbau_001 | Too basic; keep single. | keep single |
| draft_b1_m01_topup_cloze_006 | Target is noun/capitalisation, not suitable for broad variants. | keep single |


## 7. Evidence Inflation Safeguards

| Variant family | Same-session evidence risk | Review grouping rule | Evidence cap recommendation | Notes |
|---|---|---|---|---|
| b1-01-v2-fronted-time-vf-001 | medium | rg-b1-01-v2-fronted-time | Maximum 1 frame-level evidence contribution per same-session round; later attempts count better after delay or task-depth change. | Record exact variantId and parent variantFamilyId; do not count same-family same-session variants as independent proof. |
| b1-01-v2-fronted-place-vf-002 | medium | rg-b1-01-v2-fronted-place | Maximum 1 same-session evidence contribution unless task depth changes. | Record exact variantId and parent variantFamilyId; do not count same-family same-session variants as independent proof. |
| b1-01-w-question-location-vf-003 | low-medium | rg-b1-01-w-question-orientation | Maximum 1 same-session frame contribution per task depth. | Record exact variantId and parent variantFamilyId; do not count same-family same-session variants as independent proof. |
| b1-01-yes-no-question-vf-004 | low-medium | rg-b1-01-yes-no-question-order | Maximum 1 same-session frame contribution per task depth. | Record exact variantId and parent variantFamilyId; do not count same-family same-session variants as independent proof. |
| b1-01-brauchen-acc-vf-005 | high | rg-b1-01-brauchen-acc-survival | Maximum 1 same-session evidence contribution; simple recognition/cloze should be auto_supported if too scaffolded. | Record exact variantId and parent variantFamilyId; do not count same-family same-session variants as independent proof. |
| b1-01-mein-meine-familiar-vf-006 | medium | rg-b1-01-mein-meine-familiar-nouns | Maximum 1 same-session contribution per task depth. | Record exact variantId and parent variantFamilyId; do not count same-family same-session variants as independent proof. |
| b1-01-noun-capitalisation-vf-007 | high | rg-b1-01-noun-capitalisation-course-words | No more than 1 same-session mechanics signal; not strong progress alone. | Record exact variantId and parent variantFamilyId; do not count same-family same-session variants as independent proof. |
| b1-01-w-question-repair-vf-008 | low-medium | rg-b1-01-w-question-repair | 1 same-session repair signal; stronger after delay. | Record exact variantId and parent variantFamilyId; do not count same-family same-session variants as independent proof. |
| b1-01-controlled-production-vf-009 | low-medium | none-production-only | No correctness or review evidence; record practice only. | Record exact variantId and parent variantFamilyId; do not count same-family same-session variants as independent proof. |


## 8. Fallback / Capitalisation / Ambiguity Ledger

| Variant ID | Issue | Canonical answer | Fallback / ambiguity | Decision | Evidence impact |
|---|---|---|---|---|---|
| b1-01-v2-fronted-time-vf-001-var-007 | multi-signal/evidence ambiguity | brauche | brauche | Conservative: exact answer for strong evidence; fallback only correct-with-note if supported. | Downgrade to auto_supported where the issue is the real target or support is high. |
| b1-01-v2-fronted-place-vf-002-var-003 | multi-signal/evidence ambiguity | brauche | brauche | Conservative: exact answer for strong evidence; fallback only correct-with-note if supported. | Downgrade to auto_supported where the issue is the real target or support is high. |
| b1-01-w-question-location-vf-003-var-006 | bare plural naturalness | finde | finde | Conservative: exact answer for strong evidence; fallback only correct-with-note if supported. | Downgrade to auto_supported where the issue is the real target or support is high. |
| b1-01-yes-no-question-vf-004-var-001 | capitalisation/fallback | Brauche | Brauche; brauche only correct-with-note if sentence-start fallback supported | Conservative: exact answer for strong evidence; fallback only correct-with-note if supported. | Downgrade to auto_supported where the issue is the real target or support is high. |
| b1-01-yes-no-question-vf-004-var-002 | capitalisation/fallback | Brauche | Brauche; brauche only correct-with-note if supported | Conservative: exact answer for strong evidence; fallback only correct-with-note if supported. | Downgrade to auto_supported where the issue is the real target or support is high. |
| b1-01-yes-no-question-vf-004-var-003 | capitalisation/fallback | Brauche | Brauche; brauche only correct-with-note if supported | Conservative: exact answer for strong evidence; fallback only correct-with-note if supported. | Downgrade to auto_supported where the issue is the real target or support is high. |
| b1-01-yes-no-question-vf-004-var-004 | capitalisation/fallback | Ist | Ist; ist only correct-with-note if supported | Conservative: exact answer for strong evidence; fallback only correct-with-note if supported. | Downgrade to auto_supported where the issue is the real target or support is high. |
| b1-01-yes-no-question-vf-004-var-005 | capitalisation/fallback | Ist | Ist; ist only correct-with-note if supported | Conservative: exact answer for strong evidence; fallback only correct-with-note if supported. | Downgrade to auto_supported where the issue is the real target or support is high. |
| b1-01-yes-no-question-vf-004-var-006 | capitalisation/fallback | Haben | Haben; haben only correct-with-note if supported | Conservative: exact answer for strong evidence; fallback only correct-with-note if supported. | Downgrade to auto_supported where the issue is the real target or support is high. |
| b1-01-brauchen-acc-vf-005-var-006 | multi-signal/evidence ambiguity | brauche | brauche | Conservative: exact answer for strong evidence; fallback only correct-with-note if supported. | Downgrade to auto_supported where the issue is the real target or support is high. |
| b1-01-mein-meine-familiar-vf-006-var-007 | capitalisation/fallback | Meine | Meine; meine only correct-with-note if sentence-start fallback supported | Conservative: exact answer for strong evidence; fallback only correct-with-note if supported. | Downgrade to auto_supported where the issue is the real target or support is high. |
| b1-01-mein-meine-familiar-vf-006-var-008 | capitalisation/fallback | Mein | Mein; mein only correct-with-note if supported | Conservative: exact answer for strong evidence; fallback only correct-with-note if supported. | Downgrade to auto_supported where the issue is the real target or support is high. |
| b1-01-noun-capitalisation-vf-007-var-001 | capitalisation/fallback | Heft | Heft; heft correct-with-note only if supported | Conservative: exact answer for strong evidence; fallback only correct-with-note if supported. | Downgrade to auto_supported where the issue is the real target or support is high. |
| b1-01-noun-capitalisation-vf-007-var-002 | capitalisation/fallback | App | App; app correct-with-note only if supported | Conservative: exact answer for strong evidence; fallback only correct-with-note if supported. | Downgrade to auto_supported where the issue is the real target or support is high. |
| b1-01-noun-capitalisation-vf-007-var-003 | capitalisation/fallback | Hilfe | Hilfe; hilfe correct-with-note only if supported | Conservative: exact answer for strong evidence; fallback only correct-with-note if supported. | Downgrade to auto_supported where the issue is the real target or support is high. |
| b1-01-noun-capitalisation-vf-007-var-004 | capitalisation/fallback | Unterlagen | Unterlagen; unterlagen correct-with-note only if supported | Conservative: exact answer for strong evidence; fallback only correct-with-note if supported. | Downgrade to auto_supported where the issue is the real target or support is high. |
| b1-01-noun-capitalisation-vf-007-var-005 | capitalisation/fallback | Kurs | Kurs; kurs correct-with-note only if supported | Conservative: exact answer for strong evidence; fallback only correct-with-note if supported. | Downgrade to auto_supported where the issue is the real target or support is high. |
| b1-01-w-question-repair-vf-008-var-006 | bare plural naturalness | Wo finde ich Informationen? | exact | Conservative: exact answer for strong evidence; fallback only correct-with-note if supported. | Downgrade to auto_supported where the issue is the real target or support is high. |


## 9. Mobile UX QA

| Variant family | Sentence length OK? | One blank? | Typing burden | Tap burden | Bus-ride fit | Risk | Recommendation |
|---|---|---|---|---|---|---|---|
| b1-01-v2-fronted-time-vf-001 | Yes | Yes | low | low | strong fit | Evidence inflation if randomly served repeatedly. | Send to variant-family QA before implementation. |
| b1-01-v2-fronted-place-vf-002 | Yes | Yes | low | low | strong fit | Evidence inflation if randomly served repeatedly. | Send to variant-family QA before implementation. |
| b1-01-w-question-location-vf-003 | Yes | Yes | low | low | strong fit | Evidence inflation if randomly served repeatedly. | Send to variant-family QA before implementation. |
| b1-01-yes-no-question-vf-004 | Yes | Yes | low | low | strong fit | Evidence inflation if randomly served repeatedly. | Send to variant-family QA before implementation. |
| b1-01-brauchen-acc-vf-005 | Yes | Yes | low | low | strong fit | Evidence inflation if randomly served repeatedly. | Send to variant-family QA before implementation. |
| b1-01-mein-meine-familiar-vf-006 | Yes | Yes | low | low | strong fit | Evidence inflation if randomly served repeatedly. | Send to variant-family QA before implementation. |
| b1-01-noun-capitalisation-vf-007 | Yes | Yes | low | low | strong fit | Evidence inflation if randomly served repeatedly. | Send to variant-family QA before implementation. |
| b1-01-w-question-repair-vf-008 | Yes | Yes | low | low | strong fit | Evidence inflation if randomly served repeatedly. | Send to variant-family QA before implementation. |
| b1-01-controlled-production-vf-009 | Yes | No; production prompt | high/self-marked | low | acceptable fit | Production is not correctness evidence. | Send to variant-family QA before implementation. |


## 10. Batch-Level Summary

| Metric | Value |
|---|---|
| Variant families created | 9 |
| Total variants created | 60 |
| Type A families | 1 primary (`brauchen_acc`) plus controlled-production prompt variants |
| Type B families | 8 |
| Variants by taskType | Luecke/Satzbau/Reparatur/Auswahl/Kontrast-compatible plus Produktion family; exact task rendering to be decided in schema mapping. |
| Variants by targetFamilyId | LS01-01: 18; LS01-02: 19; LS04-01: 6; LS02-01: 8; LS09-01: 5; LS10-01: 4 |
| auto_core recommendations | Most V2, W-question, yes/no, possessive variants |
| auto_supported recommendations | brauchen overuse, noun-capitalisation, visible support/given phrase, long compound/document-boundary variants |
| self_marked_production recommendations | 4 production variants |
| Families needing later QA | All families; special attention to brauchen, capitalisation, and W-question naturalness |
| Families not recommended | heiße/name cloze, thin vocabulary recognition, broad `Kurs` recognition, Deutschunterricht typed recall |


## 11. Final QA Checklist

| Checklist item | Status |
|---|---|
| No app code. | Confirmed |
| No app-ready JSON. | Confirmed |
| No Codex prompt. | Confirmed |
| No schema mapping. | Confirmed |
| No B1-02 generation. | Confirmed |
| No lesson cards. | Confirmed |
| No notice cards. | Confirmed |
| No source text copied. | Confirmed |
| No runtime generation. | Confirmed |
| No random noun/verb combinations. | Confirmed |
| No generated German morphology. | Confirmed |
| No B2 active content. | Confirmed |
| No Genitive. | Confirmed |
| No adjective-ending traps. | Confirmed |
| No subordinate clauses. | Confirmed |
| No over-expansion of `Ich brauche ...`; hard cap at 6 variants. | Confirmed |
| Sibling variants are marked as sibling evidence. | Confirmed |
| Given phrases are not treated as tested answers. | Confirmed |
| Variant family IDs are stable planning IDs. | Confirmed |
| German text remains LTR. | Confirmed |
| Items are ready for a separate variant-family QA pass. | Confirmed |


## 12. Final Verdict

`READY_FOR_VARIANT_FAMILY_QA`

Exact next recommended action: run a strict variant-family QA / reject / revise pass on `ozmosis_b1_m01_curated_variant_families_draft_v0_1.md`, then decide which existing B1-01 fixed items are replaced by parent variant families rather than duplicated alongside them.
