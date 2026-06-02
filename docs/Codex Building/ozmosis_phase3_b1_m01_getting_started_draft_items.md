# Ozmosis B1 Content System — Phase 3 Draft Item Batch for B1-01 Getting started at work/course

## 1. Batch metadata

| Field | Value |
|---|---|
| module ID | B1-01 |
| module name | Getting started at work/course |
| internal module ID | b1_m01_getting_started |
| batch ID | phase3_b1_m01_getting_started_batch_001 |
| content status | draft |
| source status | original draft |
| intended route(s) | Guided Course baseline, B1 module practice, optional Free Practice by language strand |
| target family count | 7 |
| total item count | 39 |
| task-type counts | 3 notice, 10 recognition, 8 cloze, 6 repair, 5 Satzbau, 3 contrast, 1 transformation, 3 production cards |
| review-eligible draft count | 20 candidate auto-graded items, subject to Phase 3A QA and schema mapping |
| production self-marked count | 3 |
| high-risk items deferred | full case tables, appointment/callback language, formal self-presentation, Perfekt biography, job-search/admin, applications/interviews, Genitive, broad profession vocabulary |

## 2. Target-family coverage summary

| targetFamilyId | target family label | targetIds included | practice types included | evidence type | review eligibility | caveats |
|---|---|---|---|---|---|---|
| TF-B1-01-LS01-01 | Basic present-tense main clauses | T-B1-01-LS01-01-01, T-B1-01-LS01-01-02, T-B1-01-LS01-01-03 | notice, recognition, cloze, repair, Satzbau, contrast, transformation, production | auto_core for fixed items; self_marked_production for production | fixed cloze/Satzbau/repair only after QA | Keep short; no biography, subordinate clauses, or formal application language. |
| TF-B1-01-LS01-02 | Basic orientation questions | T-B1-01-LS01-02-01, T-B1-01-LS01-02-02 | notice, recognition, cloze, repair, Satzbau, contrast, production | auto_core for fixed items; self_marked_production for production | fixed question word-order items only after QA | Do not drift into appointment booking. |
| TF-B1-01-LS08-01 | Course/work orientation vocabulary | T-B1-01-LS08-01-01, T-B1-01-LS08-01-02, T-B1-01-LS08-01-03 | recognition, cloze, contrast, repair, production | auto_supported or practice_only unless action-contextual and fixed | limited; only action-context items after QA | Avoid one-word translation drills. |
| TF-B1-01-LS02-01 | First article/possessive awareness | T-B1-01-LS02-01-01, T-B1-01-LS02-01-02 | recognition, cloze, repair, contrast, production | auto_supported for article recognition; auto_core for fixed mein/meine items | familiar nouns only after QA | Do not claim case control or full article-table control. |
| TF-B1-01-LS04-01 | Basic need phrase | T-B1-01-LS04-01-01 | recognition, cloze, repair, Satzbau, contrast, production | auto_core for fixed items; self_marked_production for production | fixed cloze/repair/Satzbau after QA | Keep to survival-level “Ich brauche ...”, not counselling or complaints. |
| TF-B1-01-LS09-01 | Entry mechanics | T-B1-01-LS09-01-01, T-B1-01-LS09-01-02 | notice, repair, limited recognition | practice_only or auto_core only for fixed repair | repair only after QA | Mechanics must support meaning, not become isolated spelling tests. |
| TF-B1-01-LS10-01 | Controlled self-introduction | T-B1-01-LS10-01-01, T-B1-01-LS10-01-02 | notice, production, limited recognition/repair | self_marked_production | not review-eligible by default | Production is attempted/practised only, not correctness. |

## 3. Explain / Notice cards

### notice 1

| Field | Value |
|---|---|
| draft item ID | draft_b1_m01_notice_001 |
| targetFamilyId | TF-B1-01-LS01-01 |
| targetId | T-B1-01-LS01-01-03 |
| variant role | notice |
| learner-facing explanation | In a short German main clause, the finite verb usually sits in position 2: **Heute lerne ich Deutsch.** |
| what the learner should notice | If a time word starts the sentence, the verb still comes next. |
| supportPolicy | support_after_answer |
| evidenceType | excluded_preview |
| QA risk notes | Keep as notice only; do not count as control. |

### notice 2

| Field | Value |
|---|---|
| draft item ID | draft_b1_m01_notice_002 |
| targetFamilyId | TF-B1-01-LS09-01 |
| targetId | T-B1-01-LS09-01-01 |
| variant role | notice |
| learner-facing explanation | German nouns are capitalised: **der Kurs**, **die Arbeit**, **die Hilfe**. |
| what the learner should notice | The capital letter marks nouns, even in simple sentences. |
| supportPolicy | support_after_answer |
| evidenceType | excluded_preview |
| QA risk notes | Mechanics-only notice; no score. |

### notice 3

| Field | Value |
|---|---|
| draft item ID | draft_b1_m01_notice_003 |
| targetFamilyId | TF-B1-01-LS02-01 |
| targetId | T-B1-01-LS02-01-02 |
| variant role | notice |
| learner-facing explanation | For familiar nouns, **mein** and **meine** follow gender: **mein Kurs**, **meine Arbeit**. |
| what the learner should notice | This is first article/possessive awareness, not a full case lesson. |
| supportPolicy | support_after_answer |
| evidenceType | excluded_preview |
| QA risk notes | Do not expand into full possessive table. |

## 4. Recognition items

| draft item ID | module ID | targetFamilyId | targetId | variant role | learner prompt | answer choices | correct answer | supportPolicy | supportPresentation | feedback micro-rule | skill tags | grammar focus | error categories | evidenceType | review eligibility | QA risk notes |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| draft_b1_m01_recognition_001 | B1-01 | TF-B1-01-LS01-01 | T-B1-01-LS01-01-01 | recognition | Which sentence simply gives a name? | A: Ich heiße Mina. / B: Ich brauche Mina. / C: Wo ist Mina? | Ich heiße Mina. | scenario_visible | german_clue_first | **heißen** is used for giving a name. | sentence_basics, identity | present tense identity sentence | wrong_verb_choice | auto_core | review candidate after QA | English prompt is acceptable here; answer is not copied. |
| draft_b1_m01_recognition_002 | B1-01 | TF-B1-01-LS01-01 | T-B1-01-LS01-01-02 | recognition | Choose the sentence about learning German. | A: Ich lerne Deutsch. / B: Ich bin Deutsch. / C: Ich brauche Deutsch? | Ich lerne Deutsch. | scenario_visible | german_clue_first | **lernen** fits learning a language. | sentence_basics, vocabulary_activation | present tense work/course sentence | wrong_verb_choice | auto_core | review candidate after QA | Keep as baseline. |
| draft_b1_m01_recognition_003 | B1-01 | TF-B1-01-LS01-02 | T-B1-01-LS01-02-01 | recognition | You want to ask where the course room is. Which question is correct? | A: Wo ist der Kursraum? / B: Wo der Kursraum ist? / C: Der Kursraum wo ist? | Wo ist der Kursraum? | support_after_answer | no_english_needed | In a W-question, the finite verb comes after the question word. | sentence_basics, questions | W-question word order | wrong_word_order | auto_core | review candidate after QA | Avoid appointment context. |
| draft_b1_m01_recognition_004 | B1-01 | TF-B1-01-LS01-02 | T-B1-01-LS01-02-02 | recognition | Which yes/no question is correct? | A: Brauche ich ein Heft? / B: Ich brauche ein Heft? / C: Ein Heft ich brauche? | Brauche ich ein Heft? | support_after_answer | no_english_needed | In a yes/no question, the finite verb comes first. | sentence_basics, questions | yes/no question word order | wrong_word_order | auto_core | review candidate after QA | Keep object simple; no case teaching. |
| draft_b1_m01_recognition_005 | B1-01 | TF-B1-01-LS08-01 | T-B1-01-LS08-01-01 | recognition | Which word means the German course/class context, not a job? | A: der Kurs / B: der Beruf / C: die Arbeit | der Kurs | scenario_visible | english_hidden_until_feedback | **der Kurs** is the course/class context. | vocabulary_activation | course/work noun contrast | wrong_noun_choice | auto_supported | not review-eligible until stronger recall | Translation support could make this too easy. |
| draft_b1_m01_recognition_006 | B1-01 | TF-B1-01-LS08-01 | T-B1-01-LS08-01-03 | recognition | In class, you do not understand. Which sentence asks for help? | A: Ich brauche Hilfe. / B: Ich mache Hilfe. / C: Ich bin Hilfe. | Ich brauche Hilfe. | scenario_visible | german_clue_first | **Hilfe brauchen** is the useful survival phrase. | vocabulary_activation, redemittel | brauchen + object | wrong_collocation | auto_core | review candidate after QA | Good survival pattern. |
| draft_b1_m01_recognition_007 | B1-01 | TF-B1-01-LS02-01 | T-B1-01-LS02-01-01 | recognition | Which article belongs with **Arbeit** in this module? | A: der Arbeit / B: die Arbeit / C: das Arbeit | die Arbeit | meaning_visible | english_hidden_until_feedback | **Arbeit** is feminine here: **die Arbeit**. | articles_case, vocabulary_activation | nominative article recognition | wrong_article_gender | auto_supported | not review-eligible until typed/repair evidence | Do not claim case control. |
| draft_b1_m01_recognition_008 | B1-01 | TF-B1-01-LS02-01 | T-B1-01-LS02-01-02 | recognition | Choose the correct phrase for “my course”. | A: mein Kurs / B: meine Kurs / C: mein Arbeit | mein Kurs | support_after_answer | english_hidden_until_feedback | Use **mein** with **der Kurs**. | articles_case, production_discourse | possessive + known noun | wrong_possessive_form | auto_core | review candidate after QA | Keep familiar nouns only. |
| draft_b1_m01_recognition_009 | B1-01 | TF-B1-01-LS08-01 | T-B1-01-LS08-01-02 | recognition | You practise words on small cards. Which word fits? | A: die Karteikarte / B: das Büro / C: der Beruf | die Karteikarte | scenario_visible | german_clue_first | A **Karteikarte** is useful for practising words. | vocabulary_activation | learning noun in action context | wrong_noun_choice | practice_only | not review-eligible | Thin if used alone; keep as vocabulary activation. |
| draft_b1_m01_recognition_010 | B1-01 | TF-B1-01-LS09-01 | T-B1-01-LS09-01-01 | recognition | Which sentence has the noun capitalised correctly? | A: Ich mache einen Kurs. / B: Ich mache einen kurs. / C: Ich mache Einen Kurs. | Ich mache einen Kurs. | support_after_answer | no_english_needed | German nouns are capitalised: **Kurs**. | spelling_mechanics, vocabulary_activation | noun capitalisation | noun_not_capitalised | practice_only | repair-only review after QA | Mechanics support item, not broad grammar proof. |

## 5. Cloze items

| draft item ID | module ID | targetFamilyId | targetId | variant role | prompt sentence with ___ | expected answer | acceptable answers | English support | supportPolicy | supportPresentation | full correct sentence | feedback micro-rule | skill tags | grammar focus | error categories | evidenceType | review eligibility | QA risk notes |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| draft_b1_m01_cloze_001 | B1-01 | TF-B1-01-LS01-01 | T-B1-01-LS01-01-01 | cloze | Ich ___ Sami. | heiße | heisse | I am saying my name. | support_after_answer | english_hidden_until_feedback | Ich heiße Sami. | Use **ich heiße ...** to give your name. | sentence_basics, identity | present tense identity sentence | missing_finite_verb, wrong_verb_choice | auto_core | review candidate after QA | Accept `heisse` only if app allows ß fallback. |
| draft_b1_m01_cloze_002 | B1-01 | TF-B1-01-LS01-01 | T-B1-01-LS01-01-02 | cloze | Ich ___ Deutsch. | lerne | — | I am learning German. | support_after_answer | english_hidden_until_feedback | Ich lerne Deutsch. | **lernen** fits a language or subject. | sentence_basics, vocabulary_activation | present tense simple verb | wrong_verb_choice | auto_core | review candidate after QA | Simple but useful baseline. |
| draft_b1_m01_cloze_003 | B1-01 | TF-B1-01-LS01-01 | T-B1-01-LS01-01-03 | cloze | Heute ___ ich im Kurs. | lerne | — | Today I am learning in the course. | support_after_answer | english_hidden_until_feedback | Heute lerne ich im Kurs. | After **Heute**, the finite verb still comes in position 2. | sentence_basics, word_order | V2 after fronted time phrase | wrong_word_order | auto_core | review candidate after QA | Good V2 cloze. |
| draft_b1_m01_cloze_004 | B1-01 | TF-B1-01-LS08-01 | T-B1-01-LS08-01-01 | cloze | Ich mache einen ___. | Kurs | kurs | I am doing a course. | support_after_answer | english_hidden_until_feedback | Ich mache einen Kurs. | **einen Kurs machen** is the useful phrase here. | vocabulary_activation | course/work collocation | wrong_noun_choice | auto_supported | review only after stronger evidence | Slight accusative in sentence; do not explain case yet. |
| draft_b1_m01_cloze_005 | B1-01 | TF-B1-01-LS08-01 | T-B1-01-LS08-01-03 | cloze | Ich brauche ___. | Hilfe | hilfe | I need help. | scenario_visible | english_hidden_until_feedback | Ich brauche Hilfe. | **Hilfe** is a noun, so it is capitalised. | vocabulary_activation, spelling_mechanics | brauchen + noun | wrong_noun_choice, noun_not_capitalised | auto_core | review candidate after QA | Tests phrase and capitalisation lightly. |
| draft_b1_m01_cloze_006 | B1-01 | TF-B1-01-LS02-01 | T-B1-01-LS02-01-02 | cloze | ___ Arbeit beginnt heute. | Meine | meine | My work starts today. | support_after_answer | english_hidden_until_feedback | Meine Arbeit beginnt heute. | Use **meine** with **die Arbeit**. | articles_case, production_discourse | mein/meine with known noun | wrong_possessive_form | auto_core | review candidate after QA | Initial capitalisation of sentence also expected. |
| draft_b1_m01_cloze_007 | B1-01 | TF-B1-01-LS04-01 | T-B1-01-LS04-01-01 | cloze | Ich ___ Informationen. | brauche | — | I need information. | support_after_answer | english_hidden_until_feedback | Ich brauche Informationen. | **brauchen** is the verb for needing something. | verb_structures, vocabulary_activation | brauchen + object | wrong_verb_choice | auto_core | review candidate after QA | Keep away from counselling/admin detail. |
| draft_b1_m01_cloze_008 | B1-01 | TF-B1-01-LS01-02 | T-B1-01-LS01-02-02 | cloze | Brauche ___ ein Heft? | ich | — | Do I need a notebook? | support_after_answer | english_hidden_until_feedback | Brauche ich ein Heft? | In a yes/no question, the verb comes first, then the subject. | sentence_basics, questions | yes/no question word order | wrong_word_order | auto_core | review candidate after QA | Good constrained question cloze. |

## 6. Repair items

| draft item ID | module ID | targetFamilyId | targetId | variant role | wrong sentence | expected corrected sentence | target error | feedback micro-rule | skill tags | grammar focus | error categories | evidenceType | review eligibility | QA risk notes |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| draft_b1_m01_repair_001 | B1-01 | TF-B1-01-LS01-01 | T-B1-01-LS01-01-03 | repair | Heute ich lerne Deutsch. | Heute lerne ich Deutsch. | finite verb not in position 2 | After **Heute**, the verb comes next: **Heute lerne ich ...** | sentence_basics, word_order | V2 after fronted time phrase | wrong_word_order | auto_core | review candidate after QA | Clear target. |
| draft_b1_m01_repair_002 | B1-01 | TF-B1-01-LS09-01 | T-B1-01-LS09-01-01 | repair | Ich brauche hilfe. | Ich brauche Hilfe. | noun not capitalised | German nouns are capitalised: **Hilfe**. | spelling_mechanics, vocabulary_activation | noun capitalisation | noun_not_capitalised | auto_supported | review candidate only as mechanics repair | Good mechanics item. |
| draft_b1_m01_repair_003 | B1-01 | TF-B1-01-LS01-02 | T-B1-01-LS01-02-01 | repair | Wo der Kursraum ist? | Wo ist der Kursraum? | W-question word order | In a W-question, the verb comes after the question word. | sentence_basics, questions | W-question word order | wrong_word_order | auto_core | review candidate after QA | Not appointment content. |
| draft_b1_m01_repair_004 | B1-01 | TF-B1-01-LS02-01 | T-B1-01-LS02-01-02 | repair | Mein Arbeit beginnt heute. | Meine Arbeit beginnt heute. | wrong possessive form | Use **meine** with **die Arbeit**. | articles_case, production_discourse | possessive + familiar noun | wrong_possessive_form | auto_core | review candidate after QA | Familiar noun only. |
| draft_b1_m01_repair_005 | B1-01 | TF-B1-01-LS04-01 | T-B1-01-LS04-01-01 | repair | Ich bin Hilfe. | Ich brauche Hilfe. | wrong verb for need phrase | Say **Ich brauche Hilfe**, not **Ich bin Hilfe**. | verb_structures, vocabulary_activation | brauchen + object | wrong_verb_choice | auto_core | review candidate after QA | Survival phrase, no counselling. |
| draft_b1_m01_repair_006 | B1-01 | TF-B1-01-LS09-01 | T-B1-01-LS09-01-02 | repair | Wo ist der Kursraum. | Wo ist der Kursraum? | question mark missing | A question ends with **?**. | spelling_mechanics, questions | sentence punctuation | wrong_punctuation | practice_only | not review-eligible unless fixed repair schema supports it | Minor mechanics support item. |

## 7. Satzbau items

| draft item ID | module ID | targetFamilyId | targetId | variant role | word bank / chunks | required sentence | target rule | feedback micro-rule | skill tags | grammar focus | error categories | evidenceType | review eligibility | QA risk notes |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| draft_b1_m01_satzbau_001 | B1-01 | TF-B1-01-LS01-01 | T-B1-01-LS01-01-01 | sentence_building | Ich / bin / Lara | Ich bin Lara. | subject + finite verb + name | In a short main clause, the finite verb comes after the subject. | sentence_basics, identity | present tense identity sentence | wrong_word_order | auto_core | review candidate after QA | Very simple baseline. |
| draft_b1_m01_satzbau_002 | B1-01 | TF-B1-01-LS01-01 | T-B1-01-LS01-01-03 | sentence_building | Heute / lerne / ich / Deutsch | Heute lerne ich Deutsch. | V2 after fronted time phrase | After **Heute**, the finite verb comes second. | sentence_basics, word_order | V2 main clause | wrong_word_order | auto_core | review candidate after QA | Strong sentence-control item. |
| draft_b1_m01_satzbau_003 | B1-01 | TF-B1-01-LS01-02 | T-B1-01-LS01-02-01 | sentence_building | Wo / ist / der Kursraum / ? | Wo ist der Kursraum? | W-question word order | Question word first, verb second. | sentence_basics, questions | W-question | wrong_word_order | auto_core | review candidate after QA | Orientation only. |
| draft_b1_m01_satzbau_004 | B1-01 | TF-B1-01-LS01-02 | T-B1-01-LS01-02-02 | sentence_building | Brauche / ich / ein Heft / ? | Brauche ich ein Heft? | yes/no question word order | In a yes/no question, the verb comes first. | sentence_basics, questions | yes/no question | wrong_word_order | auto_core | review candidate after QA | No case explanation. |
| draft_b1_m01_satzbau_005 | B1-01 | TF-B1-01-LS04-01 | T-B1-01-LS04-01-01 | sentence_building | Ich / brauche / Informationen | Ich brauche Informationen. | simple brauchen sentence | **brauchen** takes the thing you need after the verb. | verb_structures, vocabulary_activation | brauchen + object | wrong_word_order, wrong_verb_choice | auto_core | review candidate after QA | No admin/counselling expansion. |

## 8. Contrast items

| draft item ID | module ID | targetFamilyId | targetId | variant role | contrast pair/group | prompt | choices | correct answer | feedback micro-rule | skill tags | grammar focus | error categories | evidenceType | review eligibility | QA risk notes |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| draft_b1_m01_contrast_001 | B1-01 | TF-B1-01-LS08-01 | T-B1-01-LS08-01-01 | contrast | Kurs / Arbeit / Beruf | Which word fits a German class you attend? | A: der Kurs / B: die Arbeit / C: der Beruf | der Kurs | **der Kurs** is the class/course; **die Arbeit** is work. | vocabulary_activation | course/work noun contrast | wrong_noun_choice | auto_supported | not review-eligible until stronger recall | Could be too easy; QA may cut if redundant. |
| draft_b1_m01_contrast_002 | B1-01 | TF-B1-01-LS02-01 | T-B1-01-LS02-01-02 | contrast | mein Kurs / meine Arbeit | Choose the correct phrase for **Arbeit**. | A: meine Arbeit / B: mein Arbeit / C: meine Kurs | meine Arbeit | Use **meine** with **die Arbeit**. | articles_case, production_discourse | possessive with familiar noun | wrong_possessive_form | auto_core | review candidate after QA | Familiar-noun contrast only. |
| draft_b1_m01_contrast_003 | B1-01 | TF-B1-01-LS01-02 | T-B1-01-LS01-02-02 | contrast | statement vs yes/no question | Which is the correct question? | A: Brauche ich Hilfe? / B: Ich brauche Hilfe. / C: Hilfe ich brauche? | Brauche ich Hilfe? | A yes/no question starts with the finite verb. | sentence_basics, questions | yes/no question word order | wrong_word_order | auto_core | review candidate after QA | Good discrimination target. |

## 9. Transformation items

| draft item ID | module ID | targetFamilyId | targetId | variant role | input sentence / phrase | transformation instruction | expected output | acceptable variants | target rule | feedback micro-rule | skill tags | grammar focus | error categories | evidenceType | review eligibility | QA risk notes |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| draft_b1_m01_transformation_001 | B1-01 | TF-B1-01-LS01-01 | T-B1-01-LS01-01-03 | transformation | Ich lerne Deutsch. | Start the sentence with **Heute**. | Heute lerne ich Deutsch. | Heute lerne ich Deutsch | finite verb remains in position 2 after a fronted time word | After **Heute**, the verb comes next: **Heute lerne ich ...** | sentence_basics, word_order | V2 after fronting | wrong_word_order | auto_core | review candidate after QA | This is the only transformation; keep it short. |

## 10. Production cards

### production 1

| Field | Value |
|---|---|
| draft item ID | draft_b1_m01_production_001 |
| module ID | B1-01 |
| targetFamilyId | TF-B1-01-LS10-01 |
| targetId | T-B1-01-LS10-01-01 |
| variant role | controlled_production |
| production prompt | Write or say 2–3 short sentences to introduce yourself in a course/work setting. |
| useful phrases | Ich heiße ... / Ich bin ... / Ich lerne Deutsch. / Ich arbeite als ... / Ich mache einen Deutschkurs. |
| self-check checklist | Did you include your name? Did you include course or work? Are nouns capitalised? Are the sentences short? |
| optional model-answer purpose | Show one safe model after the learner attempts the task. |
| model answer if allowed | Ich heiße Mira. Ich mache einen Deutschkurs. Ich lerne Deutsch für die Arbeit. |
| what this can count as | self-marked production attempt; useful practice; evidence that the learner attempted a supported introduction |
| what this must not count as | correctness, fluency, B1 readiness, review eligibility, mastery |
| supportPolicy | checklist_visible |
| evidenceType | self_marked_production |
| review eligibility | not review-eligible by default |
| QA risk notes | Model answer must appear only after attempt or behind reveal. |

### production 2

| Field | Value |
|---|---|
| draft item ID | draft_b1_m01_production_002 |
| module ID | B1-01 |
| targetFamilyId | TF-B1-01-LS10-01 |
| targetId | T-B1-01-LS10-01-02 |
| variant role | controlled_production |
| production prompt | Write or say one short sentence explaining what you need in the course today. |
| useful phrases | Ich brauche Hilfe. / Ich brauche Informationen. / Ich brauche ein Heft. / Ich brauche eine App. |
| self-check checklist | Did you use **Ich brauche ...**? Did you capitalise nouns? Is it one clear sentence? |
| optional model-answer purpose | Show safe examples after attempt. |
| model answer if allowed | Ich brauche Hilfe. / Ich brauche Informationen. |
| what this can count as | self-marked production attempt for simple need phrase |
| what this must not count as | correctness, counselling ability, complaint/request ability, review eligibility |
| supportPolicy | phrase_bank_collapsed |
| evidenceType | self_marked_production |
| review eligibility | not review-eligible by default |
| QA risk notes | Keep out of B1-02 appointment/request territory. |

### production 3

| Field | Value |
|---|---|
| draft item ID | draft_b1_m01_production_003 |
| module ID | B1-01 |
| targetFamilyId | TF-B1-01-LS10-01 |
| targetId | T-B1-01-LS10-01-01 |
| variant role | controlled_production |
| production prompt | Say or write one short sentence about your course or work today. |
| useful phrases | Heute lerne ich Deutsch. / Heute arbeite ich. / Heute bin ich im Kurs. |
| self-check checklist | Did the verb come second? Did you keep the sentence short? Did you capitalise nouns? |
| optional model-answer purpose | Show one V2 example after the learner attempts the task. |
| model answer if allowed | Heute lerne ich Deutsch. |
| what this can count as | self-marked production attempt and V2 noticing practice |
| what this must not count as | auto-graded V2 correctness, review eligibility, durable control |
| supportPolicy | checklist_visible |
| evidenceType | self_marked_production |
| review eligibility | not review-eligible by default |
| QA risk notes | If app cannot assess typed production, keep self-marked only. |

## 11. Deferred targets

| targetFamilyId | targetId | target label | why deferred | when to revisit |
|---|---|---|---|---|
| TF-B1-01-LS08-01 | wider profession vocabulary | broader job/profession vocabulary | Risks eating B1-03/B1-04 and becoming a wordlist. | B1-03/B1-04 or B1-01 second batch only if tightly scoped. |
| TF-B1-01-LS01-01 | Perfekt self-introduction | past biography / life history | Too early; belongs with applications/interviews and CV-style language. | B1-04. |
| TF-B1-01-LS07-later | formal self-presentation | formal register | B1-01 should be basic and non-patronising, not formal/interview-style. | B1-04. |
| TF-B1-01-LS02-01 | full article/case table | full der/ein/kein matrix | Too much grammar load for opening course module. | Case Trainer/global support and later case modules. |
| TF-B1-01-LS06-later | subordinate clauses | weil/dass/wenn | Not needed for the entry module and would overload sentence control. | B1-04/B1-06 onward. |
| TF-B1-01-LS10-01 | free production self-introduction | open writing/speaking | Too many valid answers; cannot be locally auto-graded. | Later external review handoff or B1-12. |

## 12. Batch-level QA risk summary

### Strongest items

- `draft_b1_m01_repair_001` — clean V2 repair target.
- `draft_b1_m01_satzbau_002` — clean V2 sentence-building target.
- `draft_b1_m01_cloze_003` — useful V2 recall with a short sentence.
- `draft_b1_m01_repair_004` — clean `mein/meine` repair with familiar noun.
- `draft_b1_m01_satzbau_005` — useful survival phrase with `Ich brauche ...`.

### Weakest / riskier items

- `draft_b1_m01_recognition_005` may be too easy if English meaning is visible.
- `draft_b1_m01_recognition_009` may become thin learning-vocabulary recognition.
- `draft_b1_m01_cloze_004` lightly implies accusative through `einen Kurs`; do not explain accusative here.
- `draft_b1_m01_production_001` can look like correctness if UI wording is careless.

### Likely support-giveaway risks

- English visible before answer for `Kurs`, `Arbeit`, `Hilfe`, or `Informationen` would make several items too easy.
- For clozes, support should be after-answer or German-first unless the support cannot reveal the answer.

### Ambiguity risks

- `Ich bin im Kurs` vs `Ich lerne im Kurs` are both possible in free production, so production must remain self-marked.
- Recognition items using “course” in English may overcue `Kurs`; German-first scenarios are safer.

### Items that may need human/tutor review

- None are high-register or legal/admin. Basic naturalness pass still recommended for all German sentences.

### Items to cut if the batch is too large

- `draft_b1_m01_recognition_009` first.
- `draft_b1_m01_contrast_001` second if vocabulary contrast feels too easy.
- `draft_b1_m01_notice_003` if the module already explains `mein/meine` elsewhere.

### B2/legal/admin/register risks avoided

- No Jobcenter, applications, contracts, sick leave, meetings, complaints, technical support, or conflict content was generated.
- No Genitive, no subordinate clauses, no formal application writing, no open auto-graded production.

## 13. Phase 3A readiness verdict

**READY_FOR_PHASE_3A_QA_WITH_CAVEATS**

Caveats:

- Check that B1-01 does not feel patronising or too A1-like.
- Cut weak recognition items if they create false progress.
- Confirm `supportPolicy` and `supportPresentation` mapping before schema conversion.
- Confirm whether `heisse` should be accepted as a fallback for `heiße`.
- Keep all production cards self-marked only.

Exact next action:

Run **Phase 3A QA / Reject / Revise Batch for B1-01 Getting started at work/course**.
