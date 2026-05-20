# OZMOSIS B1 Connector Sprint v1 — QA Protocol and Report

_Last updated: 2026-05-20_

## Purpose

This bank is designed to prevent sentence-pattern memorisation by using structured connector variant families.

It covers:

```text
Reason:
- weil
- denn
- deshalb

Contrast:
- obwohl
- trotzdem

Purpose:
- damit
- um ... zu

Time:
- wenn
- als
- während
- bevor
- nachdem
- seitdem
- bis
- solange

Repair:
- word-order repair
- connector contrast repair
- production transfer
```

## Structural QA result

```json
{
  "total": 120,
  "byItemType": {
    "connector_choice": 80,
    "word_order_cloze": 27,
    "error_repair": 8,
    "production_card": 5
  },
  "byGrammarDomain": {
    "kausal_konnektoren": 26,
    "konzessiv_konnektoren": 23,
    "finalsaetze": 23,
    "temporalsaetze": 47,
    "konsekutiv_konnektoren": 1
  },
  "byVariantFamily": {
    "reason_weil": 8,
    "reason_weil_wordorder": 4,
    "reason_denn": 4,
    "reason_deshalb": 4,
    "contrast_obwohl": 7,
    "contrast_trotzdem": 7,
    "contrast_wordorder": 4,
    "contrast_choice_pair": 2,
    "purpose_damit": 8,
    "purpose_umzu": 8,
    "purpose_wordorder": 4,
    "time_wenn": 7,
    "time_als": 6,
    "time_waehrend": 6,
    "time_bevor": 5,
    "time_nachdem": 5,
    "time_seitdem": 4,
    "time_bis": 4,
    "time_solange": 3,
    "repair_weil_order": 1,
    "repair_denn_order": 1,
    "repair_deshalb_order": 1,
    "repair_obwohl_order": 1,
    "repair_trotzdem_order": 1,
    "repair_damit_subject": 1,
    "repair_umzu_infinitive": 1,
    "repair_wenn_als": 1,
    "repair_wenn_future": 1,
    "repair_bevor": 1,
    "repair_nachdem": 1,
    "repair_solange": 1,
    "repair_sodass_order": 1,
    "repair_denn_weil": 1,
    "repair_deshalb_choice": 1,
    "production_reason": 1,
    "production_contrast": 1,
    "production_purpose": 1,
    "production_time": 1,
    "production_sequence": 1
  },
  "byChapter": {
    "2": 21,
    "3": 29,
    "4": 49,
    "1": 21
  },
  "errors": [],
  "warnings": [],
  "warningCount": 0
}
```

## Required human/content QA before serious use

The structural checks passed if `errors` is empty. However, this does **not** replace final German QA inside the app.

Before importing a large version into OZMOSIS, run these checks:

### 1. Natural Hochdeutsch check

For each item:

```text
- Is the sentence natural?
- Is it something a B1 learner might realistically need?
- Is the register appropriate for course/work/exam practice?
- Does the sentence sound German rather than translated from English?
```

### 2. Connector-choice check

For connector_choice items:

```text
- Is the intended connector the best answer among the listed choices?
- Are the distractors genuinely plausible but wrong for a clear reason?
- Does the item test connector logic, not world knowledge?
```

### 3. Word-order check

For word_order_cloze and error_repair items:

```text
- Is the missing verb/form the only reasonable answer?
- Does the item target the connector’s word-order rule?
- Is there no hidden unrelated grammar issue?
```

### 4. B1 relevance check

For every item:

```text
- Could this appear in a B1 beruflich/course context?
- Does it help with writing, speaking, email, appointments, workplace issues, illness, orders, service, or technical problems?
```

### 5. Anti-pattern-memorisation check

For each variantFamilyId:

```text
- Are subjects varied?
- Are verbs varied?
- Are course contexts varied?
- Are clause positions varied where useful?
- Are there contrast items?
```

### 6. App-implementation check

The bank contains four item types:

```text
connector_choice
word_order_cloze
error_repair
production_card
```

If the current app only supports simple cloze rendering, do not import all items blindly. Either:
1. implement the connector sprint renderer first, or
2. extract only word_order_cloze/error_repair items into a temporary cloze-only bank.

## Rejection rules

Reject or retire any item that:

```text
- has more than one equally good answer among the listed choices;
- requires grammar not intended by the item;
- sounds unnatural;
- is too advanced for B1;
- is only technically correct but pedagogically useless;
- gives away the answer too obviously;
- repeats the same frame too often;
- becomes a memory-of-sentence test rather than a connector test.
```

## Recommended in-app behaviour

### Connector choice

Show:

```text
German sentence with blank
Support English
Choice buttons
```

Feedback:

```text
Correct connector
Full sentence
One micro-rule
```

### Word-order cloze

Show:

```text
German sentence with one blank
Typed answer
```

Feedback:

```text
Full sentence
Word-order rule
```

### Error repair

Show:

```text
Reparatur prompt
Typed answer or choice
```

Feedback:

```text
Corrected sentence
Brief repair note
```

### Production card

Show:

```text
Prompt
Useful target connector
Checklist
Optional model answer hidden behind button
```

No automatic grading yet.
