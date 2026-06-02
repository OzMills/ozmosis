# Ozmosis B1-01 Top-Up Draft Candidate Batch — 40 Candidates for Phase 3A QA

Status: Draft candidate batch  
Module: B1-01 — Getting started at work/course  
Purpose: 40 candidate learner-action items for later QA/reject/revise, expected to reduce to roughly 30 strong survivors.  
Generated in ChatGPT Production Chat 08.

## 1. Source Verification

| Source file | Available? | Used for | Reliability | Notes / caveats |
|---|---:|---|---|---|
| `ozmosis_phase3a_b1_m01_getting_started_qa_approved.md` | Yes | Approved B1-01 baseline, cut list, caveats, duplicate avoidance | High | Confirms 39 audited, 36 proceeding, 3 cut, fallback risks, and production self-marking limits. |
| `ozmosis_phase3_b1_m01_getting_started_draft_items.md` | Yes | Original B1-01 target-family structure and deferred scope | High | Confirms 7 target families, 39 original draft items, deferred high-risk areas, and target-family boundaries. |
| `ozmosis_prompt0_content_schema_id_metadata_rules_lock.md` | Yes | taskType, taskDepth, practiceType, supportPolicy, evidenceType, metadata safety | High | Confirms locked taskType/taskDepth vocabulary and do-not-invent-new-taskType rule. |
| `ozmosis_phase2_5_full_b1_normalisation_addendum_v0_2.md` | Indirectly available via audit/package references | Evidence/support bridge and module ID normalisation | Medium-high | Used as planning guardrail. |
| `OZMOSIS_SOURCE_BRIEF_v0.80.2.md` | Yes | Current strategic state | High | Confirms B1-first direction and cautious progress model. |
| `OZMOSIS_DEVELOPMENT_ROADMAP_v0.80.2.md` | Yes | Current technical/pedagogical guardrails | High | Confirms v0.80.2 multiple-choice shuffling safety. |
| TELC/Beruf and Aspekte Beruf files | Yes | Structural inspiration only | Low for item text | Not used for copied item wording. |

## 2. Existing Batch Boundary Check

| Area | Existing B1-01 already covers | Top-up rule |
|---|---|---|
| V2 main clauses | `Heute lerne ich Deutsch/im Kurs`, V2 cloze, V2 repair, V2 Satzbau, one transformation | Add sibling contexts, especially `Morgen`, `Am Montag`, `Im Kurs`, `Heute`. Avoid repeating the exact same sentence. |
| Basic questions | `Wo ist der Kursraum?`, `Brauche ich ein Heft?`, W-question repair/Satzbau, yes/no question contrast | Add `Wo finde ich ...?`, `Ist ... hier?`, `Haben Sie ...?`, `Brauche ich die App/Unterlagen?` |
| `Ich brauche ...` | `Ich brauche Hilfe`, `Ich brauche Informationen`, one Satzbau and repair | Add `die App`, `ein Heft`, `die Unterlagen`, `Informationen`, but avoid counselling/admin drift. |
| `mein/meine` | `mein Kurs`, `meine Arbeit` | Add familiar nouns: `mein Heft`, `meine App`, `meine Unterlagen`. No full possessive table. |
| Noun capitalisation | `Kurs`, `Arbeit`, `Hilfe`, mechanics notice/repair | Add meaningful sentence-level capitalisation for `App`, `Heft`, `Unterlagen`, `Deutschunterricht`. No isolated spelling tests. |
| Course/work vocabulary | `Kurs`, `Beruf`, `Arbeit`, `Hilfe`, `Informationen` | Use action-context items only. Avoid flashcard-like vocabulary. |
| Production | Three self-marked cards | Add three more controlled/self-marked cards only. |

Cut items not revived:

| Cut item | Why excluded |
|---|---|
| `draft_b1_m01_recognition_009` | Thin learning-vocabulary recognition. |
| `draft_b1_m01_repair_006` | Punctuation-only repair. |
| `draft_b1_m01_contrast_001` | Too obvious `Kurs / Arbeit / Beruf` contrast. |

Notice/concept cards are excluded because they belong to the future lesson/concept-card layer.

## 3. Top-Up Candidate Batch Design

| Design field | Value |
|---|---|
| Target total item count | 40 |
| Expected post-QA survivor count | About 30 |
| Output type | Draft candidates only |
| Notice cards | 0 |
| App-ready JSON | No |
| Schema mapping | No |
| Main QA risk | Some simple entry items may still be too easy after QA. |
| Duplicate strategy | Use sibling contexts, not exact repeats; avoid the prior cut vocabulary/contrast shape. |
| Evidence strategy | More Satzbau, repair, and cloze than recognition; production self-marked only. |
| v0.80.2 choice strategy | Stable choice IDs included; no A/B/C balance. |

### Planned task-type counts

| taskType | Count |
|---|---:|
| Auswahl | 7 |
| Luecke | 10 |
| Satzbau | 9 |
| Reparatur | 8 |
| Kontrast | 3 |
| Produktion | 3 |
| **Total** | **40** |

### Planned evidence counts

| evidenceType | Count |
|---|---:|
| auto_core | 30 |
| auto_supported | 7 |
| self_marked_production | 3 |
| excluded | 0 |

# 4. Draft Candidate Item Batch

## 4.1 Auswahl items

### `draft_b1_m01_topup_recognition_001`

| Field | Value |
|---|---|
| draft item ID | `draft_b1_m01_topup_recognition_001` |
| module ID | B1-01 |
| targetFamilyId | TF-B1-01-LS01-01 |
| targetId | T-B1-01-LS01-01-03 |
| variant role | recognition |
| taskType | Auswahl |
| taskDepth | recognition |
| learner prompt | Which sentence has correct word order after **Am Montag**? |
| correct answer | `Am Montag lerne ich im Kurs.` |
| accepted answers | selected correct choice only |
| supportPolicy | support_after_answer |
| supportPresentation | no_english_needed |
| feedback micro-rule | After **Am Montag**, the finite verb comes next. |
| skill tags | sentence_basics, word_order |
| grammar focus | V2 after fronted time phrase |
| vocabulary focus | Kurs |
| redemittel focus | — |
| error categories | wrong_word_order |
| planningEvidenceLabel | Core Evidence |
| evidenceType | auto_core |
| review eligibility | review candidate after QA |
| QA risk level | low |
| QA risk notes | Strong V2 recognition sibling; not an exact repeat. |

| choiceId | choiceText | isCorrect | distractorType | distractorRationale | ambiguityRisk |
|---|---|---:|---|---|---|
| c01-correct | Am Montag lerne ich im Kurs. | yes | correct | Verb in position 2. | low |
| c02-wrong-word-order | Am Montag ich lerne im Kurs. | no | wrong_word_order | Subject incorrectly before finite verb. | low |
| c03-wrong-word-order | Am Montag im Kurs lerne ich. | no | awkward_order | Possible with marked structure only if chunked differently; not target pattern. | medium |

### `draft_b1_m01_topup_recognition_002`

| Field | Value |
|---|---|
| draft item ID | `draft_b1_m01_topup_recognition_002` |
| module ID | B1-01 |
| targetFamilyId | TF-B1-01-LS01-02 |
| targetId | T-B1-01-LS01-02-01 |
| variant role | recognition |
| taskType | Auswahl |
| taskDepth | recognition |
| learner prompt | You want to find the app for the course. Which question is correct? |
| correct answer | `Wo finde ich die App?` |
| accepted answers | selected correct choice only |
| supportPolicy | scenario_visible |
| supportPresentation | german_clue_first |
| feedback micro-rule | In a W-question, the question word comes first, then the verb. |
| skill tags | sentence_basics, questions |
| grammar focus | W-question word order |
| vocabulary focus | App |
| redemittel focus | Wo finde ich ...? |
| error categories | wrong_word_order |
| planningEvidenceLabel | Core Evidence |
| evidenceType | auto_core |
| review eligibility | review candidate after QA |
| QA risk level | low |
| QA risk notes | New W-question context; stays inside course orientation. |

| choiceId | choiceText | isCorrect | distractorType | distractorRationale | ambiguityRisk |
|---|---|---:|---|---|---|
| c01-correct | Wo finde ich die App? | yes | correct | Correct W-question order. | low |
| c02-wrong-word-order | Wo ich finde die App? | no | wrong_word_order | Verb not in second position. | low |
| c03-wrong-word-order | Die App wo finde ich? | no | wrong_word_order | Malformed question order. | low |

### `draft_b1_m01_topup_recognition_003`

| Field | Value |
|---|---|
| draft item ID | `draft_b1_m01_topup_recognition_003` |
| module ID | B1-01 |
| targetFamilyId | TF-B1-01-LS01-02 |
| targetId | T-B1-01-LS01-02-02 |
| variant role | recognition |
| taskType | Auswahl |
| taskDepth | recognition |
| learner prompt | Which is the correct yes/no question? |
| correct answer | `Ist die App hier?` |
| accepted answers | selected correct choice only |
| supportPolicy | support_after_answer |
| supportPresentation | no_english_needed |
| feedback micro-rule | A yes/no question starts with the finite verb. |
| skill tags | sentence_basics, questions |
| grammar focus | yes/no question word order |
| vocabulary focus | App |
| redemittel focus | — |
| error categories | wrong_word_order |
| planningEvidenceLabel | Core Evidence |
| evidenceType | auto_core |
| review eligibility | review candidate after QA |
| QA risk level | low |
| QA risk notes | Simple, but useful as question-order contrast. |

| choiceId | choiceText | isCorrect | distractorType | distractorRationale | ambiguityRisk |
|---|---|---:|---|---|---|
| c01-correct | Ist die App hier? | yes | correct | Verb-first yes/no question. | low |
| c02-statement-order | Die App ist hier? | no | statement_order_question_mark | Spoken intonation possible, but not the target written B1 form. | medium |
| c03-wrong-word-order | Hier die App ist? | no | wrong_word_order | Malformed order. | low |

### `draft_b1_m01_topup_recognition_004`

| Field | Value |
|---|---|
| draft item ID | `draft_b1_m01_topup_recognition_004` |
| module ID | B1-01 |
| targetFamilyId | TF-B1-01-LS04-01 |
| targetId | T-B1-01-LS04-01-01 |
| variant role | recognition |
| taskType | Auswahl |
| taskDepth | recognition |
| learner prompt | You do not have the course papers. Which sentence fits? |
| correct answer | `Ich brauche die Unterlagen.` |
| accepted answers | selected correct choice only |
| supportPolicy | scenario_visible |
| supportPresentation | german_clue_first |
| feedback micro-rule | Use **brauchen** for something you need. |
| skill tags | verb_structures, vocabulary_activation |
| grammar focus | brauchen + object |
| vocabulary focus | Unterlagen |
| redemittel focus | Ich brauche ... |
| error categories | wrong_verb_choice |
| planningEvidenceLabel | Core Evidence |
| evidenceType | auto_core |
| review eligibility | review candidate after QA |
| QA risk level | low |
| QA risk notes | Strong survival phrase; not counselling/admin. |

| choiceId | choiceText | isCorrect | distractorType | distractorRationale | ambiguityRisk |
|---|---|---:|---|---|---|
| c01-correct | Ich brauche die Unterlagen. | yes | correct | Correct need phrase. | low |
| c02-wrong-verb | Ich bin die Unterlagen. | no | wrong_verb_choice | Copula does not fit. | low |
| c03-wrong-verb | Ich mache die Unterlagen. | no | wrong_collocation | Not the intended need phrase. | low |

### `draft_b1_m01_topup_recognition_005`

| Field | Value |
|---|---|
| draft item ID | `draft_b1_m01_topup_recognition_005` |
| module ID | B1-01 |
| targetFamilyId | TF-B1-01-LS02-01 |
| targetId | T-B1-01-LS02-01-02 |
| variant role | recognition |
| taskType | Auswahl |
| taskDepth | recognition |
| learner prompt | Which phrase is correct for **Heft**? |
| correct answer | `mein Heft` |
| accepted answers | selected correct choice only |
| supportPolicy | support_after_answer |
| supportPresentation | english_hidden_until_feedback |
| feedback micro-rule | Use **mein** with **das Heft**. |
| skill tags | articles_case, vocabulary_activation |
| grammar focus | first possessive awareness with familiar noun |
| vocabulary focus | Heft |
| redemittel focus | — |
| error categories | wrong_possessive_form |
| planningEvidenceLabel | Core Evidence |
| evidenceType | auto_core |
| review eligibility | review candidate after QA |
| QA risk level | low |
| QA risk notes | Familiar noun only; no full article table claim. |

| choiceId | choiceText | isCorrect | distractorType | distractorRationale | ambiguityRisk |
|---|---|---:|---|---|---|
| c01-correct | mein Heft | yes | correct | Correct possessive with neuter familiar noun. | low |
| c02-wrong-possessive | meine Heft | no | wrong_possessive_form | Wrong possessive form for `das Heft`. | low |
| c03-wrong-noun-pairing | mein App | no | wrong_possessive_noun_pair | App needs `meine`. | low |

### `draft_b1_m01_topup_recognition_006`

| Field | Value |
|---|---|
| draft item ID | `draft_b1_m01_topup_recognition_006` |
| module ID | B1-01 |
| targetFamilyId | TF-B1-01-LS09-01 |
| targetId | T-B1-01-LS09-01-01 |
| variant role | recognition |
| taskType | Auswahl |
| taskDepth | recognition |
| learner prompt | Which sentence has correct noun capitalisation? |
| correct answer | `Die Unterlagen sind hier.` |
| accepted answers | selected correct choice only |
| supportPolicy | support_after_answer |
| supportPresentation | no_english_needed |
| feedback micro-rule | German nouns are capitalised: **Unterlagen**. |
| skill tags | spelling_mechanics, vocabulary_activation |
| grammar focus | noun capitalisation |
| vocabulary focus | Unterlagen |
| redemittel focus | — |
| error categories | noun_not_capitalised |
| planningEvidenceLabel | Practice Evidence |
| evidenceType | auto_supported |
| review eligibility | not review-eligible until schema QA |
| QA risk level | medium |
| QA risk notes | Mechanics support item; should not overclaim language control. |

| choiceId | choiceText | isCorrect | distractorType | distractorRationale | ambiguityRisk |
|---|---|---:|---|---|---|
| c01-correct | Die Unterlagen sind hier. | yes | correct | Noun capitalised. | low |
| c02-wrong-capitalisation | Die unterlagen sind hier. | no | noun_not_capitalised | Noun not capitalised. | low |
| c03-wrong-capitalisation | die Unterlagen sind hier. | no | sentence_start_lowercase | Sentence start lower-case; mechanics-only risk. | medium |

### `draft_b1_m01_topup_recognition_007`

| Field | Value |
|---|---|
| draft item ID | `draft_b1_m01_topup_recognition_007` |
| module ID | B1-01 |
| targetFamilyId | TF-B1-01-LS08-01 |
| targetId | T-B1-01-LS08-01-02 |
| variant role | recognition |
| taskType | Auswahl |
| taskDepth | recognition |
| learner prompt | Sie öffnen das Handy im Deutschunterricht. Welches Wort passt? |
| correct answer | `die App` |
| accepted answers | selected correct choice only |
| supportPolicy | scenario_visible |
| supportPresentation | german_clue_first |
| feedback micro-rule | **Die App** is the useful word for the learning application. |
| skill tags | vocabulary_activation |
| grammar focus | — |
| vocabulary focus | App |
| redemittel focus | — |
| error categories | wrong_noun_choice |
| planningEvidenceLabel | Practice Evidence |
| evidenceType | auto_supported |
| review eligibility | not review-eligible due to support |
| QA risk level | medium |
| QA risk notes | Useful if German-first; cut if QA judges it too vocabulary-list-like. |

| choiceId | choiceText | isCorrect | distractorType | distractorRationale | ambiguityRisk |
|---|---|---:|---|---|---|
| c01-correct | die App | yes | correct | Fits phone/course learning context. | low |
| c02-nearby-tool | das Heft | no | nearby_learning_object | Physical notebook, not phone application. | low |
| c03-context-distractor | der Kursraum | no | location_noun | Room, not app. | low |

## 4.2 Luecke items

| draft item ID | item body | correct answer | supportPolicy | supportPresentation | feedback micro-rule | targetFamilyId | targetId | evidenceType | review eligibility | QA risk |
|---|---|---|---|---|---|---|---|---|---|---|
| `draft_b1_m01_topup_cloze_001` | `Morgen ___ ich im Kurs.` | `bin` | support_after_answer | english_hidden_until_feedback | `Morgen bin ich im Kurs.` After **Morgen**, the verb comes second. | TF-B1-01-LS01-01 | T-B1-01-LS01-01-03 | auto_core | review candidate after QA | low |
| `draft_b1_m01_topup_cloze_002` | `Im Kurs ___ ich Deutsch.` | `lerne` | support_after_answer | english_hidden_until_feedback | `Im Kurs lerne ich Deutsch.` After the place phrase, the verb comes next. | TF-B1-01-LS01-01 | T-B1-01-LS01-01-03 | auto_core | review candidate after QA | medium |
| `draft_b1_m01_topup_cloze_003` | `Wo ___ ich die App?` | `finde` | support_after_answer | english_hidden_until_feedback | `Wo finde ich die App?` In a W-question, the verb comes after the question word. | TF-B1-01-LS01-02 | T-B1-01-LS01-02-01 | auto_core | review candidate after QA | low |
| `draft_b1_m01_topup_cloze_004` | `___ ich die Unterlagen?` | `Brauche` | support_after_answer | english_hidden_until_feedback | `Brauche ich die Unterlagen?` A yes/no question starts with the verb. | TF-B1-01-LS01-02 | T-B1-01-LS01-02-02 | auto_core exact; fallback weaker | review candidate for exact answer after QA | medium |
| `draft_b1_m01_topup_cloze_005` | `Ich ___ die App.` | `brauche` | support_after_answer | english_hidden_until_feedback | `Ich brauche die App.` Use **brauchen** for something you need. | TF-B1-01-LS04-01 | T-B1-01-LS04-01-01 | auto_core | review candidate after QA | low |
| `draft_b1_m01_topup_cloze_006` | `Ich brauche ein ___.` | `Heft` | support_after_answer | english_hidden_until_feedback | `Ich brauche ein Heft.` **Heft** is a noun, so it is capitalised. | TF-B1-01-LS04-01 | T-B1-01-LS04-01-01 | auto_supported | not review-eligible until schema QA | medium |
| `draft_b1_m01_topup_cloze_007` | `Das ist ___ App.` | `meine` | support_after_answer | english_hidden_until_feedback | `Das ist meine App.` Use **meine** with **die App**. | TF-B1-01-LS02-01 | T-B1-01-LS02-01-02 | auto_core | review candidate after QA | low |
| `draft_b1_m01_topup_cloze_008` | `Ich brauche ___ Unterlagen.` | `meine` | support_after_answer | english_hidden_until_feedback | `Ich brauche meine Unterlagen.` Use **meine** with **die Unterlagen**. | TF-B1-01-LS02-01 | T-B1-01-LS02-01-02 | auto_core | review candidate after QA | medium |
| `draft_b1_m01_topup_cloze_009` | `Die ___ ist hier.` | `App` | support_after_answer | english_hidden_until_feedback | `Die App ist hier.` **App** is a noun, so it is capitalised. | TF-B1-01-LS09-01 | T-B1-01-LS09-01-01 | auto_supported | not review-eligible until schema QA | medium |
| `draft_b1_m01_topup_cloze_010` | `Ich bin im ___.` | `Deutschunterricht` | support_after_answer | english_hidden_until_feedback | `Ich bin im Deutschunterricht.` **Deutschunterricht** is one capitalised noun. | TF-B1-01-LS08-01 | T-B1-01-LS08-01-02 | auto_supported | not review-eligible until schema QA | medium |

Shared Luecke metadata: module ID B1-01; variant role cloze; taskType Luecke; taskDepth cloze; planningEvidenceLabel Core Evidence unless marked Practice Evidence; skill tags as appropriate: sentence_basics, word_order, questions, verb_structures, vocabulary_activation, articles_case, spelling_mechanics.

## 4.3 Satzbau items

| draft item ID | targetFamilyId / targetId | chunks | correct answer | supportPolicy | supportPresentation | feedback micro-rule | skill tags | grammar focus | vocabulary focus | redemittel focus | evidenceType | review eligibility | QA risk |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| `draft_b1_m01_topup_satzbau_001` | TF-B1-01-LS01-01 / T-B1-01-LS01-01-03 | `Heute / bin / ich / im Kurs` | Heute bin ich im Kurs. | unsupported | no_english_needed | After **Heute**, the verb comes next. | sentence_basics, word_order | V2 after fronted time phrase | Kurs | — | auto_core | review candidate after QA | low |
| `draft_b1_m01_topup_satzbau_002` | TF-B1-01-LS01-01 / T-B1-01-LS01-01-03 | `Im Kurs / lerne / ich / Deutsch` | Im Kurs lerne ich Deutsch. | unsupported | no_english_needed | After a fronted place phrase, the verb comes next. | sentence_basics, word_order | V2 after fronted place phrase | Kurs, Deutsch | — | auto_core | review candidate after QA | medium |
| `draft_b1_m01_topup_satzbau_003` | TF-B1-01-LS01-01 / T-B1-01-LS01-01-03 | `Am Montag / brauche / ich / die App` | Am Montag brauche ich die App. | unsupported | no_english_needed | The verb stays second after **Am Montag**. | sentence_basics, word_order, verb_structures | V2 + brauchen | App | Ich brauche ... | auto_core | review candidate after QA | low |
| `draft_b1_m01_topup_satzbau_004` | TF-B1-01-LS01-02 / T-B1-01-LS01-02-01 | `Wo / finde / ich / die Unterlagen / ?` | Wo finde ich die Unterlagen? | unsupported | no_english_needed | Question word first, verb second. | sentence_basics, questions | W-question word order | Unterlagen | Wo finde ich ...? | auto_core | review candidate after QA | low |
| `draft_b1_m01_topup_satzbau_005` | TF-B1-01-LS01-02 / T-B1-01-LS01-02-02 | `Ist / die App / hier / ?` | Ist die App hier? | unsupported | no_english_needed | A yes/no question starts with the verb. | sentence_basics, questions | yes/no question word order | App | — | auto_core | review candidate after QA | low |
| `draft_b1_m01_topup_satzbau_006` | TF-B1-01-LS01-02 / T-B1-01-LS01-02-02 | `Haben / Sie / Informationen / ?` | Haben Sie Informationen? | unsupported | no_english_needed | A yes/no question starts with the verb. | sentence_basics, questions | yes/no question word order | Informationen | Haben Sie ...? | auto_core | review candidate after QA | medium |
| `draft_b1_m01_topup_satzbau_007` | TF-B1-01-LS04-01 / T-B1-01-LS04-01-01 | `Ich / brauche / ein Heft` | Ich brauche ein Heft. | unsupported | no_english_needed | Use **brauchen** for something you need. | verb_structures, vocabulary_activation | brauchen + object | Heft | Ich brauche ... | auto_core | review candidate after QA | low |
| `draft_b1_m01_topup_satzbau_008` | TF-B1-01-LS02-01 / T-B1-01-LS02-01-02 | `Das / ist / meine App` | Das ist meine App. | unsupported | no_english_needed | Use **meine** with **die App**. | articles_case, vocabulary_activation | mein/meine with familiar noun | App | — | auto_core | review candidate after QA | low |
| `draft_b1_m01_topup_satzbau_009` | TF-B1-01-LS02-01 / T-B1-01-LS02-01-02 | `Meine Unterlagen / sind / hier` | Meine Unterlagen sind hier. | unsupported | no_english_needed | Use **meine** with **die Unterlagen**. | articles_case, vocabulary_activation | mein/meine with familiar plural noun | Unterlagen | — | auto_core | review candidate after QA | medium |

All Satzbau items: module ID B1-01; variant role sentence_building; taskType Satzbau; taskDepth sentence_building; accepted answers exact ordered sentence only unless QA adds punctuation variant.

## 4.4 Reparatur items

| draft item ID | targetFamilyId / targetId | faulty sentence | corrected sentence | supportPolicy | supportPresentation | feedback micro-rule | skill tags | grammar focus | vocabulary focus | redemittel focus | error categories | evidenceType | review eligibility | QA risk |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| `draft_b1_m01_topup_repair_001` | TF-B1-01-LS01-01 / T-B1-01-LS01-01-03 | Heute ich bin im Kurs. | Heute bin ich im Kurs. | support_after_answer | no_english_needed | After **Heute**, the verb comes next. | sentence_basics, word_order | V2 after time phrase | Kurs | — | wrong_word_order | auto_core | review candidate after QA | low |
| `draft_b1_m01_topup_repair_002` | TF-B1-01-LS01-01 / T-B1-01-LS01-01-03 | Im Kurs ich lerne Deutsch. | Im Kurs lerne ich Deutsch. | support_after_answer | no_english_needed | After **Im Kurs**, the verb comes next. | sentence_basics, word_order | V2 after place phrase | Kurs, Deutsch | — | wrong_word_order | auto_core | review candidate after QA | low |
| `draft_b1_m01_topup_repair_003` | TF-B1-01-LS01-02 / T-B1-01-LS01-02-01 | Wo ich finde die App? | Wo finde ich die App? | support_after_answer | no_english_needed | In a W-question, the verb comes after the question word. | sentence_basics, questions | W-question word order | App | Wo finde ich ...? | wrong_word_order | auto_core | review candidate after QA | low |
| `draft_b1_m01_topup_repair_004` | TF-B1-01-LS01-02 / T-B1-01-LS01-02-02 | Die App ist hier? | Ist die App hier? | support_after_answer | no_english_needed | A written yes/no question starts with the verb. | sentence_basics, questions | yes/no question word order | App | — | statement_order_question | auto_core | review candidate after QA | medium |
| `draft_b1_m01_topup_repair_005` | TF-B1-01-LS04-01 / T-B1-01-LS04-01-01 | Ich habe ein Heft nötig. | Ich brauche ein Heft. | support_after_answer | no_english_needed | For this simple need phrase, use **Ich brauche ...**. | verb_structures, vocabulary_activation | brauchen + object | Heft | Ich brauche ... | wrong_phrase_choice | auto_core | review candidate after QA | medium |
| `draft_b1_m01_topup_repair_006` | TF-B1-01-LS09-01 / T-B1-01-LS09-01-01 | Ich brauche ein heft. | Ich brauche ein Heft. | support_after_answer | no_english_needed | **Heft** is a noun, so it is capitalised. | spelling_mechanics, vocabulary_activation | noun capitalisation | Heft | Ich brauche ... | noun_not_capitalised | auto_supported | not review-eligible until schema QA | medium |
| `draft_b1_m01_topup_repair_007` | TF-B1-01-LS02-01 / T-B1-01-LS02-01-02 | Das ist mein App. | Das ist meine App. | support_after_answer | no_english_needed | Use **meine** with **die App**. | articles_case, vocabulary_activation | mein/meine with familiar noun | App | — | wrong_possessive_form | auto_core | review candidate after QA | low |
| `draft_b1_m01_topup_repair_008` | TF-B1-01-LS02-01 / T-B1-01-LS02-01-02 | Ich brauche mein Unterlagen. | Ich brauche meine Unterlagen. | support_after_answer | no_english_needed | Use **meine** with **die Unterlagen**. | articles_case, vocabulary_activation | mein/meine with familiar plural noun | Unterlagen | Ich brauche ... | wrong_possessive_form | auto_core | review candidate after QA | medium |

All Reparatur items: module ID B1-01; variant role repair; taskType Reparatur; taskDepth repair; item body faulty sentence; accepted answers exact corrected sentence unless QA adds punctuation variants safely.

## 4.5 Kontrast items

### `draft_b1_m01_topup_contrast_001`

| Field | Value |
|---|---|
| draft item ID | `draft_b1_m01_topup_contrast_001` |
| module ID | B1-01 |
| targetFamilyId | TF-B1-01-LS02-01 |
| targetId | T-B1-01-LS02-01-02 |
| variant role | contrast |
| taskType | Kontrast |
| taskDepth | contrast |
| learner prompt | Choose the correct phrase for **Heft**. |
| correct answer | `mein Heft` |
| supportPolicy | support_after_answer |
| supportPresentation | english_hidden_until_feedback |
| feedback micro-rule | Use **mein** with **das Heft**. |
| skill tags | articles_case, vocabulary_activation |
| grammar focus | mein/meine with familiar noun |
| vocabulary focus | Heft |
| planningEvidenceLabel | Core Evidence |
| evidenceType | auto_core |
| review eligibility | review candidate after QA |
| QA risk level | low |

| choiceId | choiceText | isCorrect | distractorType | distractorRationale | ambiguityRisk |
|---|---|---:|---|---|---|
| c01-correct | mein Heft | yes | correct | Correct possessive with `das Heft`. | low |
| c02-wrong-possessive | meine Heft | no | wrong_possessive_form | Wrong possessive form. | low |
| c03-wrong-noun-pairing | mein App | no | wrong_possessive_noun_pair | App needs `meine`. | low |

### `draft_b1_m01_topup_contrast_002`

| Field | Value |
|---|---|
| draft item ID | `draft_b1_m01_topup_contrast_002` |
| module ID | B1-01 |
| targetFamilyId | TF-B1-01-LS01-02 |
| targetId | T-B1-01-LS01-02-01 |
| variant role | contrast |
| taskType | Kontrast |
| taskDepth | contrast |
| learner prompt | Which is the correct W-question? |
| correct answer | `Wo finde ich die App?` |
| supportPolicy | support_after_answer |
| supportPresentation | no_english_needed |
| feedback micro-rule | W-question: question word first, verb second. |
| skill tags | sentence_basics, questions |
| grammar focus | W-question word order |
| vocabulary focus | App |
| redemittel focus | Wo finde ich ...? |
| planningEvidenceLabel | Core Evidence |
| evidenceType | auto_core |
| review eligibility | review candidate after QA |
| QA risk level | low |

| choiceId | choiceText | isCorrect | distractorType | distractorRationale | ambiguityRisk |
|---|---|---:|---|---|---|
| c01-correct | Wo finde ich die App? | yes | correct | Correct W-question. | low |
| c02-wrong-word-order | Wo ich finde die App? | no | wrong_word_order | Verb not second. | low |
| c03-wrong-word-order | Finde ich wo die App? | no | wrong_word_order | Malformed W-question. | low |

### `draft_b1_m01_topup_contrast_003`

| Field | Value |
|---|---|
| draft item ID | `draft_b1_m01_topup_contrast_003` |
| module ID | B1-01 |
| targetFamilyId | TF-B1-01-LS01-02 |
| targetId | T-B1-01-LS01-02-02 |
| variant role | contrast |
| taskType | Kontrast |
| taskDepth | contrast |
| learner prompt | Which sentence is a question? |
| correct answer | `Brauche ich die App?` |
| supportPolicy | support_after_answer |
| supportPresentation | no_english_needed |
| feedback micro-rule | In a yes/no question, the finite verb comes first. |
| skill tags | sentence_basics, questions, verb_structures |
| grammar focus | yes/no question vs statement |
| vocabulary focus | App |
| redemittel focus | Brauche ich ...? |
| planningEvidenceLabel | Core Evidence |
| evidenceType | auto_core |
| review eligibility | review candidate after QA |
| QA risk level | low |

| choiceId | choiceText | isCorrect | distractorType | distractorRationale | ambiguityRisk |
|---|---|---:|---|---|---|
| c01-correct | Brauche ich die App? | yes | correct | Verb-first question. | low |
| c02-statement | Ich brauche die App. | no | statement_not_question | Correct statement, but not a question. | low |
| c03-wrong-word-order | Die App brauche ich? | no | marked_order | Could be marked spoken contrast, not target beginner written question. | medium |

## 4.6 Produktion items

### `draft_b1_m01_topup_production_001`

| Field | Value |
|---|---|
| draft item ID | `draft_b1_m01_topup_production_001` |
| module ID | B1-01 |
| targetFamilyId | TF-B1-01-LS10-01 |
| targetId | T-B1-01-LS10-01-01 |
| variant role | controlled_production |
| taskType | Produktion |
| taskDepth | controlled_production |
| learner prompt | Write two short sentences to introduce yourself in the course. |
| item body | Include your name and one course sentence. |
| correct answer / model answer | Model after attempt: `Ich heiße Samira. Ich bin im Deutschkurs.` |
| accepted answers | self-marked only |
| supportPolicy | checklist_visible |
| supportPresentation | production_checklist_only |
| feedback micro-rule | Check: finite verb in position 2 in both sentences. |
| skill tags | production_discourse, sentence_basics |
| grammar focus | short present-tense self-introduction |
| vocabulary focus | Kurs |
| redemittel focus | Ich heiße ... / Ich bin ... |
| error categories | self_marked_only |
| planningEvidenceLabel | Self-marked Production Evidence |
| evidenceType | self_marked_production |
| review eligibility | not review-eligible self-marked production |
| QA risk level | low |
| QA risk notes | Controlled; no correctness claim. |
| useful phrases | `Ich heiße ...`; `Ich bin im Kurs.`; `Ich lerne Deutsch.` |
| checklist | Name included; one course sentence; verb second; nouns capitalised. |
| self-marking instructions | Mark practised if you wrote a serious attempt. Do not mark as “correct”. |
| evidence caveat | This records practice only, not correctness. |

### `draft_b1_m01_topup_production_002`

| Field | Value |
|---|---|
| draft item ID | `draft_b1_m01_topup_production_002` |
| module ID | B1-01 |
| targetFamilyId | TF-B1-01-LS10-01 |
| targetId | T-B1-01-LS10-01-02 |
| variant role | controlled_production |
| taskType | Produktion |
| taskDepth | controlled_production |
| learner prompt | Write one sentence about something you need for the course. |
| item body | Use **Ich brauche ...** |
| correct answer / model answer | Model after attempt: `Ich brauche die Unterlagen.` |
| accepted answers | self-marked only |
| supportPolicy | phrase_bank_collapsed |
| supportPresentation | production_checklist_only |
| feedback micro-rule | Use **Ich brauche** + the thing you need. |
| skill tags | production_discourse, verb_structures, vocabulary_activation |
| grammar focus | brauchen + object |
| vocabulary focus | App, Heft, Unterlagen, Informationen |
| redemittel focus | Ich brauche ... |
| error categories | self_marked_only |
| planningEvidenceLabel | Self-marked Production Evidence |
| evidenceType | self_marked_production |
| review eligibility | not review-eligible self-marked production |
| QA risk level | low |
| QA risk notes | Strong personal utility; no auto-grading. |
| useful phrases | `Ich brauche die App.`; `Ich brauche ein Heft.`; `Ich brauche Informationen.` |
| checklist | Starts with `Ich brauche`; noun capitalised; sentence has a full stop. |
| self-marking instructions | Mark practised if you wrote one usable sentence. |
| evidence caveat | Phrase bank support does not create correctness evidence. |

### `draft_b1_m01_topup_production_003`

| Field | Value |
|---|---|
| draft item ID | `draft_b1_m01_topup_production_003` |
| module ID | B1-01 |
| targetFamilyId | TF-B1-01-LS10-01 |
| targetId | T-B1-01-LS10-01-01 |
| variant role | controlled_production |
| taskType | Produktion |
| taskDepth | controlled_production |
| learner prompt | Write one sentence that starts with **Heute**. |
| item body | Use a simple course/work sentence. |
| correct answer / model answer | Model after attempt: `Heute bin ich im Kurs.` |
| accepted answers | self-marked only |
| supportPolicy | checklist_visible |
| supportPresentation | production_checklist_only |
| feedback micro-rule | If the sentence starts with **Heute**, the verb comes next. |
| skill tags | production_discourse, sentence_basics, word_order |
| grammar focus | V2 after fronted time phrase |
| vocabulary focus | Kurs, Arbeit, Deutsch |
| redemittel focus | Heute ... |
| error categories | self_marked_only |
| planningEvidenceLabel | Self-marked Production Evidence |
| evidenceType | self_marked_production |
| review eligibility | not review-eligible self-marked production |
| QA risk level | low |
| QA risk notes | Useful V2 transfer; no automatic V2 grading. |
| useful phrases | `Heute bin ich ...`; `Heute lerne ich ...`; `Heute arbeite ich ...` |
| checklist | Starts with `Heute`; verb second; short sentence; nouns capitalised. |
| self-marking instructions | Mark practised after a real attempt. |
| evidence caveat | Self-marked production cannot prove V2 control. |

# 5. Fallback / Capitalisation Ledger

| Item | Canonical answer | Fallback | Accepted? | Evidence impact | Schema/import caveat |
|---|---|---|---|---|---|
| cloze_004 | Brauche | brauche | correct-with-note only if supported | Lower-case sentence-start answer should not be full-strength evidence. | If no correct-with-note, exact-only. |
| cloze_006 | Heft | heft | correct-with-note only if supported | Lower-case noun weakens capitalisation evidence. | If no correct-with-note, exact-only. |
| cloze_009 | App | app | correct-with-note only if supported | Lower-case noun weakens mechanics evidence. | If no correct-with-note, exact-only. |
| cloze_010 | Deutschunterricht | deutschunterricht | correct-with-note only if supported | Lower-case compound noun cannot be strong evidence. | If no correct-with-note, exact-only. |
| recognition_006 | Die Unterlagen sind hier. | — | selected choice only | Mechanics-only recognition is auto_supported, not strong review evidence. | Keep not review-eligible unless later schema permits. |
| repair_006 | Ich brauche ein Heft. | `Ich brauche ein heft.` is wrong | no | Tests noun capitalisation directly. | Exact correction only. |
| production_001–003 | model answers only | many possible valid answers | self-marked only | No correctness evidence. | Never auto-grade locally. |

No `heiße` typed auto-graded item was added, avoiding a new `ß` vs `ss` fallback issue.

# 6. Duplicate / Scope QA Table

Likely cut candidates during Phase 3A QA:

```txt
 draft_b1_m01_topup_recognition_007
 draft_b1_m01_topup_cloze_010
 draft_b1_m01_topup_satzbau_006
 draft_b1_m01_topup_repair_005
 draft_b1_m01_topup_contrast_003
```

# 7. Batch-Level QA Summary

| Metric | Count |
|---|---:|
| Total candidate items created | 40 |
| Auswahl | 7 |
| Luecke | 10 |
| Satzbau | 9 |
| Reparatur | 8 |
| Kontrast | 3 |
| Produktion | 3 |
| Notice / explain / lesson cards | 0 |
| likely auto_core | 30 |
| likely auto_supported | 7 |
| self_marked_production | 3 |
| excluded | 0 |
| likely review candidates after QA | 30 |
| medium-risk items | 12 |
| high-risk items | 0 |
| likely cut candidates | 5 |
| expected survivors after QA | about 30–35 |

## Target-family counts

| targetFamilyId | Count |
|---|---:|
| TF-B1-01-LS01-01 | 8 |
| TF-B1-01-LS01-02 | 9 |
| TF-B1-01-LS04-01 | 7 |
| TF-B1-01-LS02-01 | 8 |
| TF-B1-01-LS09-01 | 3 |
| TF-B1-01-LS08-01 | 2 |
| TF-B1-01-LS10-01 | 3 |

# 8. Final QA Checklist

| Check | Result |
|---|---|
| Exactly 40 candidate items created | Yes |
| Expected survivor count roughly 30 after QA | Yes |
| No notice cards | Yes |
| No explain-only cards | Yes |
| No lesson cards | Yes |
| No app code | Yes |
| No app-ready JSON | Yes |
| No Codex prompt | Yes |
| No B1-02 content | Yes, with one `Haben Sie Informationen?` item flagged for QA caution |
| No copied TELC/textbook/coursebook text | Yes |
| No cut items revived | Yes |
| No B2 | Yes |
| No Genitive | Yes |
| No full article/case table | Yes |
| No adjective-ending traps | Yes |
| No production item counted as correctness | Yes |
| No recognition item proves production | Yes |
| No support-visible answer becomes auto_core | Yes |
| Multiple-choice items use stable choice IDs, not display positions | Yes |
| Fallback decisions are conservative | Yes |
| German learner-facing text remains LTR | Yes |
| Item IDs are draft IDs only | Yes |
| No exact/similar form copied from existing batch as a final intention | Mostly yes; medium-overlap V2 siblings are marked for QA |

# 9. Final Verdict

`READY_FOR_PHASE_3A_QA`

Exact next recommended action:

Run **Phase 3A QA / Reject / Revise** on these 40 B1-01 top-up candidates, aiming to cut/revise down to roughly 30 strong survivor items before schema mapping.
