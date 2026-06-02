# Ozmosis B1 Content System — Phase 3A QA / Reject / Revise Batch for B1-01 Getting started at work/course

## 1. QA summary

| Metric | Count |
|---|---:|
| Total draft items audited | 39 |
| Approved as-is | 28 |
| Revised and approved | 8 |
| Cut | 3 |
| Deferred | 0 |
| Needs human/tutor check | 0 |
| Clean approved/revised items proceeding to schema mapping | 36 |

**Final QA verdict:** `READY_FOR_PHASE_3B_SCHEMA_MAPPING_WITH_CAVEATS`

The B1-01 draft batch is usable after a light tightening pass. The strongest items are the V2 word-order, basic question-order, `Ich brauche ...`, noun-capitalisation, and `mein/meine` items. The weakest content was thin vocabulary recognition that could create false progress or feel like generic A1 filler.

Main risks found:

- Some recognition items were too easy or too translation-led.
- Some clozes accepted lower-case noun answers even when capitalisation was part of the target.
- One repair item was too trivial punctuation-only for a first import batch.
- One vocabulary contrast item was too obvious and redundant.
- `heisse` / `heiße` needs a clear accepted-answer policy before schema mapping.
- Production cards are acceptable only as self-marked production attempts.

## 2. Batch-level issue summary

| Issue | Severity | Affected items | Decision | Required fix |
|---|---:|---|---|---|
| Thin vocabulary recognition | moderate | recognition_005, recognition_009, contrast_001 | revise/cut | Keep B1-01 vocabulary action-contextual; cut non-essential flashcard-like items. |
| English support or prompt over-cues answer | minor/moderate | recognition_005, recognition_007 | revise | Use German-first scenario cues and hide English support until feedback. |
| Lower-case acceptable answers conflict with capitalisation target | moderate | cloze_004, cloze_005, cloze_006 | revise | Treat lower-case noun/sentence-start forms as correct-with-note only if schema supports it; otherwise exact answer only. |
| `heisse` fallback policy unresolved | moderate | cloze_001 | approve with schema caveat | Decide whether `heisse` is accepted as correct-with-note or acceptableAnswer. |
| Trivial punctuation-only repair | minor | repair_006 | cut | Keep punctuation support for later mechanics batches or inline feedback. |
| Silly wrong sentence in repair | minor | repair_005 | revise | Replace with a more plausible collocation error. |
| Production overclaim risk | moderate | production_001–003 | approve with caveat | Production remains self-marked only; no correctness/review claims. |

## 3. Item-by-item QA table

| Draft item ID | Task type | targetFamilyId | targetId | Severity | Decision | Problems found | Required fix | Revised version if applicable | Metadata changes | EvidenceType decision | Review eligibility decision | Notes |
|---|---|---|---|---:|---|---|---|---|---|---|---|---|
| draft_b1_m01_notice_001 | notice | TF-B1-01-LS01-01 | T-B1-01-LS01-01-03 | none | approve | None. Clear V2 notice. | None. | — | none | excluded_preview | not review-eligible | Good entry notice. |
| draft_b1_m01_notice_002 | notice | TF-B1-01-LS09-01 | T-B1-01-LS09-01-01 | none | approve | None. Clear noun-capitalisation notice. | None. | — | none | excluded_preview | not review-eligible | Useful and concise. |
| draft_b1_m01_notice_003 | notice | TF-B1-01-LS02-01 | T-B1-01-LS02-01-02 | minor | revise | Needs clearer statement that this is only familiar-noun awareness. | Add explicit examples and evidence limit. | `For familiar nouns in this module, mein/meine follows the noun: mein Kurs, meine Arbeit. This is first possessive awareness, not a full article or case table.` | none | excluded_preview | not review-eligible | Revised to avoid overclaiming. |
| draft_b1_m01_recognition_001 | recognition | TF-B1-01-LS01-01 | T-B1-01-LS01-01-01 | none | approve | None. | None. | — | none | auto_core | review candidate after schema QA | Useful baseline identity phrase. |
| draft_b1_m01_recognition_002 | recognition | TF-B1-01-LS01-01 | T-B1-01-LS01-01-02 | none | approve | None. | None. | — | none | auto_core | review candidate after schema QA | Good course/work baseline. |
| draft_b1_m01_recognition_003 | recognition | TF-B1-01-LS01-02 | T-B1-01-LS01-02-01 | none | approve | None. | None. | — | none | auto_core | review candidate after schema QA | Clear W-question word order. |
| draft_b1_m01_recognition_004 | recognition | TF-B1-01-LS01-02 | T-B1-01-LS01-02-02 | none | approve | None. | None. | — | none | auto_core | review candidate after schema QA | Clear yes/no question word order. |
| draft_b1_m01_recognition_005 | recognition | TF-B1-01-LS08-01 | T-B1-01-LS08-01-01 | moderate | revise | English prompt over-cues `Kurs`; too vocabulary-list-like. | Reframe as German-first scenario. | Prompt: `Sie sitzen im Deutschunterricht. Welches Wort passt?` Choices: `A: der Kurs / B: der Beruf / C: die Arbeit`. Correct: `der Kurs`. Feedback: `Der Kurs ist die Lern-/Unterrichtssituation.` | supportPresentation to german_clue_first | practice_only | not review-eligible | Safer as vocabulary activation, not strong progress. |
| draft_b1_m01_recognition_006 | recognition | TF-B1-01-LS08-01 | T-B1-01-LS08-01-03 | none | approve | None. | None. | — | none | auto_core | review candidate after schema QA | Strong survival phrase. |
| draft_b1_m01_recognition_007 | recognition | TF-B1-01-LS02-01 | T-B1-01-LS02-01-01 | moderate | revise | Prompt asks explicitly for article and is too table-like; support labels inconsistent. | Reframe as phrase recognition without claiming full case control. | Prompt: `Welche kurze Phrase ist richtig?` Choices: `A: die Arbeit / B: der Arbeit / C: das Arbeit`. Correct: `die Arbeit`. Feedback: `In this B1-01 set, Arbeit is practised as die Arbeit.` | supportPolicy: support_after_answer; supportPresentation: english_hidden_until_feedback | auto_supported | not review-eligible until typed/repair evidence | Avoid broad article-control claim. |
| draft_b1_m01_recognition_008 | recognition | TF-B1-01-LS02-01 | T-B1-01-LS02-01-02 | none | approve | None. | None. | — | none | auto_core | review candidate after schema QA | Good familiar-noun possessive contrast. |
| draft_b1_m01_recognition_009 | recognition | TF-B1-01-LS08-01 | T-B1-01-LS08-01-02 | moderate | cut | Thin learning-vocabulary recognition; likely sourced from course-learning vocabulary; weak B1-01 value. | Cut from first batch. | — | remove from batch | none | not review-eligible | Replacement not required. |
| draft_b1_m01_recognition_010 | recognition | TF-B1-01-LS09-01 | T-B1-01-LS09-01-01 | none | approve | None. | None. | — | none | practice_only | not review-eligible unless later repair-mapped | Good mechanics support. |
| draft_b1_m01_cloze_001 | cloze | TF-B1-01-LS01-01 | T-B1-01-LS01-01-01 | moderate | revise | `heisse` fallback needs policy; English support okay after answer. | Keep exact `heiße`; mark `heisse` as correct-with-note if schema supports it. | Acceptable answers: `heisse` only as correct-with-note / spelling fallback. Feedback adds: `In Germany, write heiße with ß when possible.` | accepted-answer caveat | auto_core exact; correct-with-note for fallback | review candidate only for exact/correct-with-note if supported | Do not block batch; carry schema caveat. |
| draft_b1_m01_cloze_002 | cloze | TF-B1-01-LS01-01 | T-B1-01-LS01-01-02 | none | approve | None. | None. | — | none | auto_core | review candidate after schema QA | Useful simple verb recall. |
| draft_b1_m01_cloze_003 | cloze | TF-B1-01-LS01-01 | T-B1-01-LS01-01-03 | none | approve | None. | None. | — | none | auto_core | review candidate after schema QA | Strong V2 recall. |
| draft_b1_m01_cloze_004 | cloze | TF-B1-01-LS08-01 | T-B1-01-LS08-01-01 | minor | revise | `kurs` should not be full-correct if capitalisation matters; accusative `einen` should not become hidden lesson. | Exact answer `Kurs`; lower-case `kurs` correct-with-note only. | Acceptable answers: `kurs` only as correct-with-note if supported. Feedback unchanged except add: `Kurs is capitalised because it is a noun.` | accepted-answer caveat | auto_supported | not review-eligible until stronger exact evidence | Avoid explaining accusative here. |
| draft_b1_m01_cloze_005 | cloze | TF-B1-01-LS08-01 | T-B1-01-LS08-01-03 | moderate | revise | Lower-case `hilfe` conflicts with capitalisation micro-rule. | Exact answer `Hilfe`; lower-case only correct-with-note if supported. | Acceptable answers: `hilfe` only as correct-with-note if supported. | accepted-answer caveat | auto_core exact; correct-with-note optional | review candidate for exact/correct-with-note if supported | Strong phrase, but capitalisation policy must be clear. |
| draft_b1_m01_cloze_006 | cloze | TF-B1-01-LS02-01 | T-B1-01-LS02-01-02 | moderate | revise | Starts blank at beginning, causing hidden sentence-capitalisation load; tests `Meine` rather than `meine`. | Move blank away from sentence start. | Prompt: `Ich beginne ___ Arbeit heute.` Expected answer: `meine`. Full correct sentence: `Ich beginne meine Arbeit heute.` Feedback: `Use meine with die Arbeit.` | prompt and answer revised | auto_core | review candidate after schema QA | Cleaner possessive target. |
| draft_b1_m01_cloze_007 | cloze | TF-B1-01-LS04-01 | T-B1-01-LS04-01-01 | none | approve | None. | None. | — | none | auto_core | review candidate after schema QA | Good need-phrase verb recall. |
| draft_b1_m01_cloze_008 | cloze | TF-B1-01-LS01-02 | T-B1-01-LS01-02-02 | none | approve | None. | None. | — | none | auto_core | review candidate after schema QA | Strong yes/no question cloze. |
| draft_b1_m01_repair_001 | repair | TF-B1-01-LS01-01 | T-B1-01-LS01-01-03 | none | approve | None. | None. | — | none | auto_core | review candidate after schema QA | Strong V2 repair. |
| draft_b1_m01_repair_002 | repair | TF-B1-01-LS09-01 | T-B1-01-LS09-01-01 | none | approve | None. | None. | — | none | auto_supported | review candidate only as mechanics repair | Good support item. |
| draft_b1_m01_repair_003 | repair | TF-B1-01-LS01-02 | T-B1-01-LS01-02-01 | none | approve | None. | None. | — | none | auto_core | review candidate after schema QA | Clear W-question repair. |
| draft_b1_m01_repair_004 | repair | TF-B1-01-LS02-01 | T-B1-01-LS02-01-02 | none | approve | None. | None. | — | none | auto_core | review candidate after schema QA | Good familiar-noun possessive repair. |
| draft_b1_m01_repair_005 | repair | TF-B1-01-LS04-01 | T-B1-01-LS04-01-01 | minor | revise | `Ich bin Hilfe` is too silly/nonsense-like. | Use a more plausible collocation error. | Wrong sentence: `Ich mache Hilfe.` Expected corrected sentence: `Ich brauche Hilfe.` Feedback: `Say Ich brauche Hilfe, not Ich mache Hilfe.` | wrong sentence revised | auto_core | review candidate after schema QA | Better plausible learner error. |
| draft_b1_m01_repair_006 | repair | TF-B1-01-LS09-01 | T-B1-01-LS09-01-02 | minor | cut | Punctuation-only item is too thin for first import batch. | Cut from first batch. | — | remove from batch | none | not review-eligible | Replacement not required. |
| draft_b1_m01_satzbau_001 | Satzbau | TF-B1-01-LS01-01 | T-B1-01-LS01-01-01 | minor | approve | Very simple, but acceptable for baseline. | None. | — | none | auto_core | review candidate after schema QA | Keep as first baseline sentence-building item. |
| draft_b1_m01_satzbau_002 | Satzbau | TF-B1-01-LS01-01 | T-B1-01-LS01-01-03 | none | approve | None. | None. | — | none | auto_core | review candidate after schema QA | Strong sentence-control item. |
| draft_b1_m01_satzbau_003 | Satzbau | TF-B1-01-LS01-02 | T-B1-01-LS01-02-01 | none | approve | None. | None. | — | none | auto_core | review candidate after schema QA | Good orientation question. |
| draft_b1_m01_satzbau_004 | Satzbau | TF-B1-01-LS01-02 | T-B1-01-LS01-02-02 | none | approve | None. | None. | — | none | auto_core | review candidate after schema QA | Good yes/no question. |
| draft_b1_m01_satzbau_005 | Satzbau | TF-B1-01-LS04-01 | T-B1-01-LS04-01-01 | none | approve | None. | None. | — | none | auto_core | review candidate after schema QA | Strong survival phrase. |
| draft_b1_m01_contrast_001 | contrast | TF-B1-01-LS08-01 | T-B1-01-LS08-01-01 | moderate | cut | Too obvious; duplicates revised recognition_005; likely false progress. | Cut from first batch. | — | remove from batch | none | not review-eligible | Replacement not required. |
| draft_b1_m01_contrast_002 | contrast | TF-B1-01-LS02-01 | T-B1-01-LS02-01-02 | none | approve | None. | None. | — | none | auto_core | review candidate after schema QA | Useful familiar-noun contrast. |
| draft_b1_m01_contrast_003 | contrast | TF-B1-01-LS01-02 | T-B1-01-LS01-02-02 | none | approve | None. | None. | — | none | auto_core | review candidate after schema QA | Strong question-vs-statement contrast. |
| draft_b1_m01_transformation_001 | transformation | TF-B1-01-LS01-01 | T-B1-01-LS01-01-03 | none | approve | None. Short and controlled. | None. | — | none | auto_core | review candidate after schema QA | Appropriate as the only transformation item. |
| draft_b1_m01_production_001 | production | TF-B1-01-LS10-01 | T-B1-01-LS10-01-01 | minor | approve | Production overclaim risk only. | Ensure model answer appears after attempt/reveal only. | — | none | self_marked_production | not review-eligible | Accept. Self-marked only. |
| draft_b1_m01_production_002 | production | TF-B1-01-LS10-01 | T-B1-01-LS10-01-02 | minor | approve | Production overclaim risk only. | Keep phrase bank collapsed where possible. | — | none | self_marked_production | not review-eligible | Accept. Self-marked only. |
| draft_b1_m01_production_003 | production | TF-B1-01-LS10-01 | T-B1-01-LS10-01-01 | minor | approve | Production overclaim risk only. | Do not auto-grade V2 correctness. | — | none | self_marked_production | not review-eligible | Accept. Self-marked only. |

## 4. Revised approved batch

Only the following 36 items proceed to Phase 3B schema mapping. Cut items are excluded.

### 4.1 Explain / Notice cards

#### draft_b1_m01_notice_001

| Field | Value |
|---|---|
| module ID | B1-01 |
| targetFamilyId | TF-B1-01-LS01-01 |
| targetId | T-B1-01-LS01-01-03 |
| variant role | notice |
| task type | Explain / Notice |
| prompt | In a short German main clause, the finite verb usually sits in position 2: **Heute lerne ich Deutsch.** |
| answer / expected answer | — |
| feedback micro-rule | If a time word starts the sentence, the verb still comes next. |
| supportPolicy | support_after_answer |
| supportPresentation | no_english_needed |
| evidenceType | excluded_preview |
| review eligibility | not review-eligible |
| skill tags | sentence_basics, word_order |
| grammar focus | V2 main clause notice |
| error categories | wrong_word_order |
| QA status | approved_for_schema |
| QA notes | Notice only; no scoring. |

#### draft_b1_m01_notice_002

| Field | Value |
|---|---|
| module ID | B1-01 |
| targetFamilyId | TF-B1-01-LS09-01 |
| targetId | T-B1-01-LS09-01-01 |
| variant role | notice |
| task type | Explain / Notice |
| prompt | German nouns are capitalised: **der Kurs**, **die Arbeit**, **die Hilfe**. |
| answer / expected answer | — |
| feedback micro-rule | The capital letter marks nouns, even in simple sentences. |
| supportPolicy | support_after_answer |
| supportPresentation | no_english_needed |
| evidenceType | excluded_preview |
| review eligibility | not review-eligible |
| skill tags | spelling_mechanics, vocabulary_activation |
| grammar focus | noun capitalisation notice |
| error categories | noun_not_capitalised |
| QA status | approved_for_schema |
| QA notes | Notice only; no scoring. |

#### draft_b1_m01_notice_003

| Field | Value |
|---|---|
| module ID | B1-01 |
| targetFamilyId | TF-B1-01-LS02-01 |
| targetId | T-B1-01-LS02-01-02 |
| variant role | notice |
| task type | Explain / Notice |
| prompt | For familiar nouns in this module, **mein/meine** follows the noun: **mein Kurs**, **meine Arbeit**. |
| answer / expected answer | — |
| feedback micro-rule | This is first possessive awareness, not a full article or case table. |
| supportPolicy | support_after_answer |
| supportPresentation | no_english_needed |
| evidenceType | excluded_preview |
| review eligibility | not review-eligible |
| skill tags | articles_case, vocabulary_activation |
| grammar focus | mein/meine with familiar nouns |
| error categories | wrong_possessive_form |
| QA status | approved_for_schema |
| QA notes | Revised to prevent overclaiming. |

### 4.2 Recognition items

| Draft item ID | Prompt | Choices | Correct answer | Feedback micro-rule | supportPolicy | supportPresentation | evidenceType | Review eligibility | QA status |
|---|---|---|---|---|---|---|---|---|---|
| draft_b1_m01_recognition_001 | Which sentence simply gives a name? | A: Ich heiße Mina. / B: Ich brauche Mina. / C: Wo ist Mina? | Ich heiße Mina. | **heißen** is used for giving a name. | scenario_visible | german_clue_first | auto_core | review candidate after schema QA | approved_for_schema |
| draft_b1_m01_recognition_002 | Choose the sentence about learning German. | A: Ich lerne Deutsch. / B: Ich bin Deutsch. / C: Ich brauche Deutsch? | Ich lerne Deutsch. | **lernen** fits learning a language. | scenario_visible | german_clue_first | auto_core | review candidate after schema QA | approved_for_schema |
| draft_b1_m01_recognition_003 | You want to ask where the course room is. Which question is correct? | A: Wo ist der Kursraum? / B: Wo der Kursraum ist? / C: Der Kursraum wo ist? | Wo ist der Kursraum? | In a W-question, the finite verb comes after the question word. | support_after_answer | no_english_needed | auto_core | review candidate after schema QA | approved_for_schema |
| draft_b1_m01_recognition_004 | Which yes/no question is correct? | A: Brauche ich ein Heft? / B: Ich brauche ein Heft? / C: Ein Heft ich brauche? | Brauche ich ein Heft? | In a yes/no question, the finite verb comes first. | support_after_answer | no_english_needed | auto_core | review candidate after schema QA | approved_for_schema |
| draft_b1_m01_recognition_005 | Sie sitzen im Deutschunterricht. Welches Wort passt? | A: der Kurs / B: der Beruf / C: die Arbeit | der Kurs | **der Kurs** is the learning/class context. | scenario_visible | german_clue_first | practice_only | not review-eligible | approved_for_schema |
| draft_b1_m01_recognition_006 | In class, you do not understand. Which sentence asks for help? | A: Ich brauche Hilfe. / B: Ich mache Hilfe. / C: Ich bin Hilfe. | Ich brauche Hilfe. | **Hilfe brauchen** is the useful survival phrase. | scenario_visible | german_clue_first | auto_core | review candidate after schema QA | approved_for_schema |
| draft_b1_m01_recognition_007 | Welche kurze Phrase ist richtig? | A: die Arbeit / B: der Arbeit / C: das Arbeit | die Arbeit | In this B1-01 set, **Arbeit** is practised as **die Arbeit**. | support_after_answer | english_hidden_until_feedback | auto_supported | not review-eligible until typed/repair evidence | approved_for_schema |
| draft_b1_m01_recognition_008 | Choose the correct phrase for “my course”. | A: mein Kurs / B: meine Kurs / C: mein Arbeit | mein Kurs | Use **mein** with **der Kurs**. | support_after_answer | english_hidden_until_feedback | auto_core | review candidate after schema QA | approved_for_schema |
| draft_b1_m01_recognition_010 | Which sentence has the noun capitalised correctly? | A: Ich mache einen Kurs. / B: Ich mache einen kurs. / C: Ich mache Einen Kurs. | Ich mache einen Kurs. | German nouns are capitalised: **Kurs**. | support_after_answer | no_english_needed | practice_only | not review-eligible unless later repair-mapped | approved_for_schema |

For all recognition items, preserve original module ID `B1-01`, internal module ID `b1_m01_getting_started`, and the target IDs from the draft batch.

### 4.3 Cloze items

| Draft item ID | Prompt sentence with ___ | Expected answer | Acceptable answers | Full correct sentence | Feedback micro-rule | supportPolicy | supportPresentation | evidenceType | Review eligibility | QA status |
|---|---|---|---|---|---|---|---|---|---|---|
| draft_b1_m01_cloze_001 | Ich ___ Sami. | heiße | heisse only as correct-with-note / spelling fallback if schema supports it | Ich heiße Sami. | Use **ich heiße ...** to give your name. In Germany, write **heiße** with **ß** when possible. | support_after_answer | english_hidden_until_feedback | auto_core exact; correct-with-note optional | review candidate only if accepted-answer policy is safe | approved_for_schema |
| draft_b1_m01_cloze_002 | Ich ___ Deutsch. | lerne | — | Ich lerne Deutsch. | **lernen** fits a language or subject. | support_after_answer | english_hidden_until_feedback | auto_core | review candidate after schema QA | approved_for_schema |
| draft_b1_m01_cloze_003 | Heute ___ ich im Kurs. | lerne | — | Heute lerne ich im Kurs. | After **Heute**, the finite verb still comes in position 2. | support_after_answer | english_hidden_until_feedback | auto_core | review candidate after schema QA | approved_for_schema |
| draft_b1_m01_cloze_004 | Ich mache einen ___. | Kurs | kurs only as correct-with-note if schema supports it | Ich mache einen Kurs. | **Kurs** is a noun, so it is capitalised. | support_after_answer | english_hidden_until_feedback | auto_supported | not review-eligible until stronger exact evidence | approved_for_schema |
| draft_b1_m01_cloze_005 | Ich brauche ___. | Hilfe | hilfe only as correct-with-note if schema supports it | Ich brauche Hilfe. | **Hilfe** is a noun, so it is capitalised. | scenario_visible | english_hidden_until_feedback | auto_core exact; correct-with-note optional | review candidate only if accepted-answer policy is safe | approved_for_schema |
| draft_b1_m01_cloze_006 | Ich beginne ___ Arbeit heute. | meine | — | Ich beginne meine Arbeit heute. | Use **meine** with **die Arbeit**. | support_after_answer | english_hidden_until_feedback | auto_core | review candidate after schema QA | approved_for_schema |
| draft_b1_m01_cloze_007 | Ich ___ Informationen. | brauche | — | Ich brauche Informationen. | **brauchen** is the verb for needing something. | support_after_answer | english_hidden_until_feedback | auto_core | review candidate after schema QA | approved_for_schema |
| draft_b1_m01_cloze_008 | Brauche ___ ein Heft? | ich | — | Brauche ich ein Heft? | In a yes/no question, the verb comes first, then the subject. | support_after_answer | english_hidden_until_feedback | auto_core | review candidate after schema QA | approved_for_schema |

### 4.4 Repair items

| Draft item ID | Wrong sentence | Expected corrected sentence | Target error | Feedback micro-rule | supportPolicy | evidenceType | Review eligibility | QA status |
|---|---|---|---|---|---|---|---|---|
| draft_b1_m01_repair_001 | Heute ich lerne Deutsch. | Heute lerne ich Deutsch. | finite verb not in position 2 | After **Heute**, the verb comes next: **Heute lerne ich ...** | support_after_answer | auto_core | review candidate after schema QA | approved_for_schema |
| draft_b1_m01_repair_002 | Ich brauche hilfe. | Ich brauche Hilfe. | noun not capitalised | German nouns are capitalised: **Hilfe**. | support_after_answer | auto_supported | review candidate only as mechanics repair | approved_for_schema |
| draft_b1_m01_repair_003 | Wo der Kursraum ist? | Wo ist der Kursraum? | W-question word order | In a W-question, the verb comes after the question word. | support_after_answer | auto_core | review candidate after schema QA | approved_for_schema |
| draft_b1_m01_repair_004 | Mein Arbeit beginnt heute. | Meine Arbeit beginnt heute. | wrong possessive form | Use **meine** with **die Arbeit**. | support_after_answer | auto_core | review candidate after schema QA | approved_for_schema |
| draft_b1_m01_repair_005 | Ich mache Hilfe. | Ich brauche Hilfe. | wrong collocation / wrong verb for need phrase | Say **Ich brauche Hilfe**, not **Ich mache Hilfe**. | support_after_answer | auto_core | review candidate after schema QA | approved_for_schema |

### 4.5 Satzbau items

| Draft item ID | Word bank / chunks | Required sentence | Target rule | Feedback micro-rule | evidenceType | Review eligibility | QA status |
|---|---|---|---|---|---|---|---|
| draft_b1_m01_satzbau_001 | Ich / bin / Lara | Ich bin Lara. | subject + finite verb + name | In a short main clause, the finite verb comes after the subject. | auto_core | review candidate after schema QA | approved_for_schema |
| draft_b1_m01_satzbau_002 | Heute / lerne / ich / Deutsch | Heute lerne ich Deutsch. | V2 after fronted time phrase | After **Heute**, the finite verb comes second. | auto_core | review candidate after schema QA | approved_for_schema |
| draft_b1_m01_satzbau_003 | Wo / ist / der Kursraum / ? | Wo ist der Kursraum? | W-question word order | Question word first, verb second. | auto_core | review candidate after schema QA | approved_for_schema |
| draft_b1_m01_satzbau_004 | Brauche / ich / ein Heft / ? | Brauche ich ein Heft? | yes/no question word order | In a yes/no question, the verb comes first. | auto_core | review candidate after schema QA | approved_for_schema |
| draft_b1_m01_satzbau_005 | Ich / brauche / Informationen | Ich brauche Informationen. | simple brauchen sentence | **brauchen** takes the thing you need after the verb. | auto_core | review candidate after schema QA | approved_for_schema |

### 4.6 Contrast items

| Draft item ID | Prompt | Choices | Correct answer | Feedback micro-rule | evidenceType | Review eligibility | QA status |
|---|---|---|---|---|---|---|---|
| draft_b1_m01_contrast_002 | Choose the correct phrase for **Arbeit**. | A: meine Arbeit / B: mein Arbeit / C: meine Kurs | meine Arbeit | Use **meine** with **die Arbeit**. | auto_core | review candidate after schema QA | approved_for_schema |
| draft_b1_m01_contrast_003 | Which is the correct question? | A: Brauche ich Hilfe? / B: Ich brauche Hilfe. / C: Hilfe ich brauche? | Brauche ich Hilfe? | A yes/no question starts with the finite verb. | auto_core | review candidate after schema QA | approved_for_schema |

### 4.7 Transformation items

| Draft item ID | Input | Instruction | Expected output | Acceptable variants | Target rule | Feedback micro-rule | evidenceType | Review eligibility | QA status |
|---|---|---|---|---|---|---|---|---|---|
| draft_b1_m01_transformation_001 | Ich lerne Deutsch. | Start the sentence with **Heute**. | Heute lerne ich Deutsch. | Heute lerne ich Deutsch | finite verb remains in position 2 after a fronted time word | After **Heute**, the verb comes next: **Heute lerne ich ...** | auto_core | review candidate after schema QA | approved_for_schema |

### 4.8 Production cards

| Draft item ID | Prompt | Useful phrases | Self-check checklist | Model answer policy | What this can count as | What this must not count as | supportPolicy | evidenceType | Review eligibility | QA status |
|---|---|---|---|---|---|---|---|---|---|---|
| draft_b1_m01_production_001 | Write or say 2–3 short sentences to introduce yourself in a course/work setting. | Ich heiße ... / Ich bin ... / Ich lerne Deutsch. / Ich arbeite als ... / Ich mache einen Deutschkurs. | Did you include your name? Did you include course or work? Are nouns capitalised? Are the sentences short? | Show after attempt/reveal only. Model: `Ich heiße Mira. Ich mache einen Deutschkurs. Ich lerne Deutsch für die Arbeit.` | self-marked production attempt; supported introduction practice | correctness, fluency, B1 readiness, review eligibility, mastery | checklist_visible | self_marked_production | not review-eligible | approved_for_schema |
| draft_b1_m01_production_002 | Write or say one short sentence explaining what you need in the course today. | Ich brauche Hilfe. / Ich brauche Informationen. / Ich brauche ein Heft. / Ich brauche eine App. | Did you use **Ich brauche ...**? Did you capitalise nouns? Is it one clear sentence? | Show examples after attempt/reveal only. | self-marked production attempt for simple need phrase | correctness, counselling ability, complaint/request ability, review eligibility | phrase_bank_collapsed | self_marked_production | not review-eligible | approved_for_schema |
| draft_b1_m01_production_003 | Say or write one short sentence about your course or work today. | Heute lerne ich Deutsch. / Heute arbeite ich. / Heute bin ich im Kurs. | Did the verb come second? Did you keep the sentence short? Did you capitalise nouns? | Show after attempt/reveal only. Model: `Heute lerne ich Deutsch.` | self-marked production attempt and V2 noticing practice | auto-graded V2 correctness, review eligibility, durable control | checklist_visible | self_marked_production | not review-eligible | approved_for_schema |

## 5. Cut list

| Draft item ID | Reason cut | Failure | Replacement needed later? |
|---|---|---|---|
| draft_b1_m01_recognition_009 | Thin learning-vocabulary recognition | `Karteikarte` item is low-value for first import and likely to feel like wordlist filler. | No. Can return in a learning-strategy micro-set if needed. |
| draft_b1_m01_repair_006 | Punctuation-only repair too thin | Missing question mark is valid but too small for this batch and weak as progress evidence. | No. Can be handled in mechanics feedback later. |
| draft_b1_m01_contrast_001 | Redundant and too obvious | Duplicates revised `Kurs` recognition and risks false progress from an easy contrast. | No. |

## 6. Deferred list

No draft items were deferred. Deferred targets from the Phase 3 draft remain deferred as originally noted: broad profession vocabulary, Perfekt biography, formal self-presentation, full article/case table, subordinate clauses, and open free production.

## 7. Human/tutor check list

No items genuinely require human/tutor review. The German is simple and controlled.

Optional reviewer question for a native/tutor pass:

| Draft item ID | Question |
|---|---|
| draft_b1_m01_repair_005 | Is `Ich mache Hilfe` a plausible enough learner error for correcting to `Ich brauche Hilfe`, or should another wrong collocation be used? |
| draft_b1_m01_cloze_006 | Is `Ich beginne meine Arbeit heute` natural enough for this entry module, or should the possessive target use a different familiar noun? |

## 8. Metadata and schema notes

| Area | Decision / issue |
|---|---|
| targetFamilyId | No structural changes needed. Cut items should be removed from schema mapping. |
| targetId | No structural changes needed. |
| variant role | All approved items have acceptable variant roles. |
| task type / task depth | All approved items map cleanly to notice, recognition, cloze, repair, sentence_building, contrast, transformation, or controlled_production. |
| supportPolicy | Use Prompt 0 / Addendum v0.2 as source of truth. Do not let supportPresentation replace supportPolicy. |
| supportPresentation | Use as planning/UI aid only. German-first or after-answer support is safer for `Kurs`, `Hilfe`, `Arbeit`, and `Informationen`. |
| evidenceType | Exact auto-graded items can use `auto_core` where target is clear. Thin vocabulary/mechanics items use `practice_only` or `auto_supported`. Production uses `self_marked_production`. |
| reviewGroup | Assign during Phase 3B schema mapping. Suggested groups: `b1_m01_v2_basics`, `b1_m01_questions`, `b1_m01_brauchen_phrase`, `b1_m01_mein_meine`, `b1_m01_capitalisation`. |
| review eligibility | Only exact, fixed, auto-graded items should become review candidates. Production, notices, thin recognition, and preview content are not review-eligible. |
| accepted answer policy | `heisse`, `kurs`, `hilfe` should not silently become full-strength correct answers where spelling/capitalisation is part of the item. Use correct-with-note if supported; otherwise exact-only for strong evidence. |
| `heisse` / `heiße` fallback | Recommended: accept `heisse` as correct-with-note/spelling fallback for typed-answer UX if supported, but keep canonical answer `heiße`. If schema cannot represent correct-with-note, include `heisse` as acceptableAnswer with feedback note and avoid making this item high-weight review evidence. |

## 9. QA verdict

**READY_FOR_PHASE_3B_SCHEMA_MAPPING_WITH_CAVEATS**

Caveats:

1. Remove the three cut items before schema mapping.
2. Apply the eight revisions exactly.
3. Decide how schema handles `heisse` / `heiße` and lower-case noun fallbacks.
4. Keep production self-marked only.
5. Do not let thin vocabulary/mechanics recognition become strong review evidence.

## 10. Exact next action

NEXT ACTION:
Run Phase 3B Schema Mapping for B1-01 Getting started at work/course using the clean approved Phase 3A batch.
