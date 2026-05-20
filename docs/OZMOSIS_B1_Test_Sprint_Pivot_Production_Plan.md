# OZMOSIS B1 Test Sprint Pivot Production Plan

*Last updated: 2026-05-20*

## 0\. Purpose

This document replaces the broad long-term Case Teaching + Leitner Cloze roadmap as the active production plan.

The new priority is:

```text
Help Oz prepare for an upcoming B1 German test as fast as possible,
using the uploaded course notes as the content source,
while keeping the architecture open for later B2 expansion.
```

This is not a public-product roadmap. This is a personal sprint plan for making OZMOSIS useful now.

The app should become a **B1 exam-relevant course-notes trainer** first, and a broader B1→B2 learning platform later.

\---

## 1\. Source of truth for this pivot

### 1.1 Current uploaded course pack

The uploaded `B1Work.zip` contains 25 JPG scans of course/book notes.

Observed content types:

```text
- course contents pages
- Wortschatz pages
- Redemittel pages
- grammar review pages
- grammar appendix pages
- writing/speaking training references
```

Observed chapter/topic structure:

```text
Chapter 1 — Und was machst du so?
- personal/work profile
- CV / tabular Lebenslauf
- career advice
- job interests
- job ads and training offers
- telephone request/callback
- grammar: tenses for past reporting
- grammar: future with Präsens/Futur I
- grammar: verbs and complements

Chapter 2 — Ich freue mich auf Ihre Zusage
- job preferences
- job advertisements
- application forms
- short interview / availability
- company wiki / information extraction
- graphs
- application letter
- grammar: adjective declension
- grammar: comparative/superlative
- grammar: reflexive verbs
- grammar: causal/concessive/consecutive connectors

Chapter 3 — Das ist erledigt
- industries/branches
- explaining work processes
- instructions and orders
- reacting to instructions
- sickness/absence rules
- insurance information
- grammar: final clauses
- grammar: temporal prepositions
- grammar: plural formation

Chapter 4 — Immer für Sie da
- assessing relevance of documents
- customer enquiries
- office orders
- follow-up questions
- complaints
- technical problem description
- official email
- grammar: local prepositions / Wechselpräpositionen
- grammar: Konjunktiv II
- grammar: temporal connectors
```

Observed grammar appendix themes:

```text
- Konjunktiv II der Gegenwart
- Verben und Ergänzungen
- reflexive Verben
- Reflexivpronomen
- nominalisierte Adjektive
- Pluralbildung der Nomen
- Adjektivdeklination
- Komparativ/Superlativ
- temporale Präpositionen
- lokale Präpositionen
- Wechselpräpositionen
- Pronominaladverbien and Fragewörter
- Kausal-, Konzessiv-, Konsekutivsätze
- Finalsätze
- Temporalsätze
- unregelmäßige Verben
```

### 1.2 Existing app source of truth

Continue to use the current OZMOSIS/Kasuskonsole source hierarchy:

```text
1. Latest uploaded tested package/file in the current project/chat
2. Current GitHub repo
3. Live GitHub Pages app
4. Current Codex chatlog / implementation logs
5. Old shared chats and historical notes
6. Memory
```

### 1.3 Product rule

This is still a static, single-file, localStorage-compatible app. Do not add backend, accounts, dependencies, analytics, runtime AI, or external calls.

\---

## 2\. Strategic pivot

### 2.1 Old direction

The old roadmap aimed to build a comprehensive long-term architecture:

```text
- full Leitner system
- cloze bank import
- topic banks
- case journeys
- repair mode
- heatmaps
- B2 expansion
```

That is still valuable, but too broad for “B1 test soon”.

### 2.2 New direction

Build the smallest powerful system that turns the uploaded course notes into test-relevant practice.

The new priority order:

```text
1. Course-map mode
2. B1 grammar decision drills

\- Leitner-shaped repetition system for learning and coming back to questions
3. B1 Wortschatz clozes
4. B1 Redemittel trainer
5. Writing/speaking production cards
6. Weakness-based daily review
7. Later (development should not block): proper Leitner, import, B2 expansion
```

### 2.3 Core learning loop for this sprint

```text
See course note target.
Retrieve the missing form/word/connector/phrase.
Get one useful correction.
Repeat weak targets.
Practise the same target in exam-like production.
```

The app should answer:

```text
What should I practise today for my B1 test?
What from my course notes do I not yet control?
Can I use the grammar and phrases in realistic B1 tasks?
```

\---

## 3\. Product shape for the B1 sprint

The start screen should temporarily prioritise B1 sprint modes.

```text
B1 Sprint
├─ Today’s Review
├─ Grammar Drill
├─ Wortschatz Drill
├─ Redemittel Drill
├─ Schreiben Practice
├─ Sprechen Practice
└─ Course Map
```

Keep the old case trainer available, but it should no longer be the first mental model.

Suggested start-screen copy:

```text
What do you need now?

\[Today’s B1 Sprint]
Fast review from your course notes.

\[Grammar]
Connectors, prepositions, cases, verbs, endings.

\[Wortschatz]
Work, applications, office, illness, complaints.

\[Redemittel]
Useful phrases for writing and speaking.

\[Schreiben]
Practise B1 writing tasks with checklists.

\[Sprechen]
Practise short B1 speaking responses.

\[Case Trainer]
Direct article/case practice.
```

\---

## 4\. B1 content taxonomy

### 4.1 Top-level course domains

```text
courseDomain:
- arbeitswelt
- bewerbung
- berufsberatung
- firma\_buero
- bestellung\_auftrag
- krankmeldung\_versicherung
- beschwerde\_service
- technisches\_problem
- dokumente\_formulare
- sprechen\_schreiben
```

### 4.2 Grammar domains

```text
grammarDomain:
- tempus\_vergangenheit
- futur\_praesens\_futur1
- verb\_ergaenzungen
- adjektivdeklination
- komparativ\_superlativ
- reflexive\_verben
- kausal\_konnektoren
- konzessiv\_konnektoren
- konsekutiv\_konnektoren
- finalsaetze
- temporale\_praepositionen
- lokale\_praepositionen
- wechselpraepositionen
- konjunktiv2
- temporalsaetze
- pronominaladverbien
- pluralbildung
- nominalisierte\_adjektive
- unregelmaessige\_verben
```

### 4.3 Redemittel functions

```text
redemittelFunction:
- sich\_vorstellen
- beruf\_ausbildung\_beschreiben
- telefon\_anliegen\_nennen
- rueckruf\_bitten
- termin\_verfuegbarkeit
- anweisung\_verstehen
- auftrag\_reagieren
- krankmeldung
- versicherung\_informieren
- kundenanfrage
- bestellung\_nachfrage
- beschwerde\_reagieren
- technisches\_problem\_beschreiben
- hinweise\_geben
- offizielle\_mail
- bewerbungsschreiben
- grafik\_beschreiben
```

### 4.4 Practice item types

Use these item types first:

```text
vocab\_cloze
- sentence with one blank
- answer is target vocabulary or phrase

grammar\_choice
- choose connector/preposition/case/verb form
- can be multiple choice or typed

grammar\_cloze
- sentence with one grammar blank

redemittel\_cloze
- phrase with missing functional chunk

redemittel\_function\_match
- choose which phrase fits a communicative purpose

sentence\_rebuild
- reorder or complete one B1 sentence

writing\_card
- prompt + checklist + useful phrases
- self-marking, not auto-graded

speaking\_card
- short speaking prompt + model structure
- self-marking, not auto-graded

error\_repair
- targeted mini-drill after repeated mistake
```

Do not build open-ended automatic grading now.

\---

## 5\. Data model for B1 sprint

### 5.1 Minimal item schema

Use one flexible schema rather than one schema per skill.

```json
{
  "id": "b1\_k2\_reflexiv\_001",
  "source": "B1Work course notes",
  "chapter": 2,
  "courseDomain": "bewerbung",
  "grammarDomain": "reflexive\_verben",
  "itemType": "grammar\_cloze",
  "cefr": "B1",
  "difficulty": "sprint\_core",
  "prompt\_de": "Ich \_\_\_ mich auf die Stelle.",
  "answer": "bewerbe",
  "acceptedAnswers": \["bewerbe"],
  "fullAnswer\_de": "Ich bewerbe mich auf die Stelle.",
  "support\_en": "I am applying for the position.",
  "microRule": "sich bewerben auf + Akkusativ",
  "tags": \["reflexiv", "bewerbung", "verb\_ergaenzung"],
  "status": "active"
}
```

### 5.2 Writing/speaking card schema

```json
{
  "id": "b1\_schreiben\_bewerbung\_001",
  "source": "B1Work course notes",
  "chapter": 2,
  "courseDomain": "bewerbung",
  "itemType": "writing\_card",
  "cefr": "B1",
  "prompt\_en": "Write a short application-style message using the provided structure.",
  "prompt\_de": "Schreiben Sie eine kurze Bewerbung / Nachricht.",
  "taskType": "bewerbungsschreiben",
  "checklist": \[
    "Anrede",
    "Grund des Schreibens",
    "relevante Erfahrung",
    "Verfügbarkeit",
    "höflicher Schluss"
  ],
  "usefulPhrases": \[
    "Ich interessiere mich für ...",
    "Ich habe Erfahrung mit ...",
    "Ich bin ab ... verfügbar.",
    "Ich freue mich auf Ihre Rückmeldung."
  ],
  "selfMark": \[
    "Did I use a formal greeting?",
    "Did I include at least one course phrase?",
    "Did I avoid English word order?",
    "Did I check verb position?"
  ],
  "status": "active"
}
```

### 5.3 Progress schema

For the ASAP sprint, use lightweight progress first:

```json
{
  "attempts": 0,
  "correct": 0,
  "wrong": 0,
  "lastSeenAt": null,
  "weaknessScore": 0,
  "lastWrongAnswer": null,
  "recentResults": \[]
}
```

Do not implement full Leitner boxes until the B1 sprint deck works.

\---

## 6\. B1 sprint priorities

## Priority 1 — Course Map

### Goal

Represent the course notes inside the app so practice can be selected by chapter, topic, and skill.

### Feature

Add a B1 Course Map screen.

```text
B1 Course Map

Chapter 1: Und was machst du so?
- Beruf / Ausbildung / Lebenslauf
- Tenses and future
- Verben und Ergänzungen
- Telephone request

Chapter 2: Ich freue mich auf Ihre Zusage
- Bewerbung / Vorstellungsgespräch
- Adjective declension
- Reflexive verbs
- Connectors: weil, obwohl, deshalb, sodass

Chapter 3: Das ist erledigt
- Arbeitsabläufe / Aufträge / Krankmeldung
- Finalsätze
- Temporal prepositions
- Pluralbildung

Chapter 4: Immer für Sie da
- Kundenanfragen / Bestellungen / Beschwerden
- Lokale Präpositionen / Wechselpräpositionen
- Konjunktiv II
- Temporalsätze
```

### Why first

If the app does not know the course map, it cannot recommend test-relevant practice.

### Done when

```text
- The app has an internal B1\_COURSE\_MAP object.
- The learner can choose chapter/topic.
- The app can filter items by chapter/topic.
- Empty topics show “content coming next”, not a broken state.
```

\---

## Priority 2 — Grammar Sprint Drills

### Goal

Make the app immediately useful for B1 grammar recall.

### First grammar decks

Build in this order:

```text
1. Connectors: weil / denn / deshalb / trotzdem / obwohl / sodass
2. Final clauses: damit vs um ... zu
3. Temporal connectors: wenn / als / während / solange / nachdem / bevor / seitdem / bis
4. Local prepositions: wo / wohin / woher
5. Wechselpräpositionen: Dativ vs Akkusativ
6. Konjunktiv II: würde + Infinitiv; hätte/wäre/könnte/müsste/sollte/wollte
7. Reflexive verbs: mich/dich/sich/mir/dir/uns/euch
8. Verb complements: Akkusativ, Dativ, Präposition + case
9. Adjective declension: only high-yield patterns
10. Irregular verbs: high-frequency exam set
```

### Item types

Use mostly:

```text
grammar\_cloze
grammar\_choice
sentence\_rebuild
error\_repair
```

### Example items

```json
{
  "id": "b1\_konnektor\_001",
  "chapter": 2,
  "grammarDomain": "kausal\_konnektoren",
  "itemType": "grammar\_cloze",
  "prompt\_de": "Er ruft an, \_\_\_ er Fragen zur Zeiterfassung hat.",
  "answer": "weil",
  "fullAnswer\_de": "Er ruft an, weil er Fragen zur Zeiterfassung hat.",
  "support\_en": "He calls because he has questions about time tracking.",
  "microRule": "weil starts a subordinate clause; finite verb goes to the end.",
  "tags": \["weil", "nebensatz", "verb\_end"],
  "status": "active"
}
```

```json
{
  "id": "b1\_final\_001",
  "chapter": 3,
  "grammarDomain": "finalsaetze",
  "itemType": "grammar\_choice",
  "prompt\_de": "Die Mitarbeitenden tragen Schutzkleidung, \_\_\_ sie sich schützen.",
  "choices": \["damit", "um ... zu"],
  "answer": "damit",
  "fullAnswer\_de": "Die Mitarbeitenden tragen Schutzkleidung, damit sie sich schützen.",
  "support\_en": "They wear protective clothing so that they protect themselves.",
  "microRule": "Use damit when the subject is stated in the subordinate clause.",
  "tags": \["finalsatz", "damit"],
  "status": "active"
}
```

### Done when

```text
- At least 20 items each for connectors, final clauses, temporal connectors, and prepositions.
- App can run Grammar Sprint by domain.
- App can run Mixed Grammar Sprint.
- Wrong answers produce one useful micro-rule.
```

\---

## Priority 3 — Redemittel Trainer

### Goal

Train the actual phrases likely to be useful in writing/speaking tasks.

### Why

For a near B1 test, Redemittel may produce faster gains than pure vocabulary. It gives the learner usable output scaffolding.

### Modes

```text
Redemittel Cloze
- Fill the missing phrase chunk.

Function Match
- Choose phrase for communicative purpose.

Production Card
- Use 2–3 phrases in a short response.
```

### First Redemittel functions

```text
1. formal request
2. callback request
3. availability / appointment
4. application phrase
5. describe work experience
6. ask follow-up question
7. react to an instruction
8. report sickness
9. describe a technical problem
10. respond to complaint
11. official email opening/closing
12. graph description
```

### Example item

```json
{
  "id": "b1\_redemittel\_mail\_001",
  "chapter": 4,
  "courseDomain": "firma\_buero",
  "itemType": "redemittel\_cloze",
  "prompt\_de": "Ich freue mich \_\_\_ Ihre Rückmeldung.",
  "answer": "auf",
  "fullAnswer\_de": "Ich freue mich auf Ihre Rückmeldung.",
  "support\_en": "I look forward to your reply.",
  "microRule": "sich freuen auf + Akkusativ",
  "tags": \["offizielle\_mail", "bewerbung", "praeposition"],
  "status": "active"
}
```

### Done when

```text
- At least 60 Redemittel items exist.
- Redemittel can be practised by function.
- Redemittel can appear in Today’s Sprint.
- Writing/speaking cards can suggest relevant Redemittel.
```

\---

## Priority 4 — Wortschatz Clozes

### Goal

Turn course vocabulary into useful context retrieval.

### First vocab domains

```text
- Beruf / Ausbildung / Bewerbung
- Interessen / Fähigkeiten
- Branche / Arbeitsabläufe
- Büro / Bestellung / Lieferant
- Krankheit / Versicherung
- Beschwerde / Service
- Technik / Problem
```

### Rule

Do not train isolated word translation first. Use sentence clozes.

Bad:

```text
die Vorschrift = ?
```

Better:

```text
Bitte beachten Sie die \_\_\_.
Answer: Vorschrift
```

Best:

```text
Die Mitarbeitenden müssen die Hygiene-\_\_\_ einhalten.
Answer: Vorschriften
```

### Item quality rules

Each vocab cloze must:

```text
- use natural Hochdeutsch
- stay relevant to the course domain
- have one intended answer
- include support English
- include article/plural metadata for nouns where useful
- avoid rare or weird sentences
```

### Done when

```text
- At least 150 B1 course-vocab clozes exist.
- They are filterable by chapter/domain.
- Wrong vocab returns in Today’s Sprint.
```

\---

## Priority 5 — Writing Practice Cards

### Goal

Give structured practice for likely B1 written tasks without building automatic grading.

### Task types from notes

```text
- Bewerbungsschreiben
- offizielle Mail
- Anfrage / Antwort
- Beschwerde / Reaktion
- Krankmeldung / Information
- Grafik beschreiben
```

### Card structure

Each card should show:

```text
- task prompt
- target length
- required content points
- useful Redemittel
- grammar reminder
- self-check checklist
- optional model answer hidden behind button
```

### Example

```text
Schreiben: Offizielle Mail

Situation:
Sie haben ein Problem mit einer Bestellung. Schreiben Sie eine kurze E-Mail.

Include:
1. Warum Sie schreiben
2. Was das Problem ist
3. Was Sie möchten
4. Höflicher Schluss

Useful phrases:
- Ich schreibe Ihnen, weil ...
- Leider gibt es ein Problem mit ...
- Könnten Sie bitte ...?
- Ich freue mich auf Ihre Rückmeldung.

Check:
□ formal greeting
□ verb position after weil
□ Konjunktiv II request
□ polite closing
```

### Done when

```text
- At least 12 writing cards exist.
- Cards are grouped by topic.
- Cards can recommend relevant Redemittel before/after.
- Model answer toggle exists, if implemented.
```

\---

## Priority 6 — Speaking Practice Cards

### Goal

Train short, repeatable B1 spoken responses.

### Task types

```text
- introduce yourself professionally
- describe education/work experience
- explain a problem
- ask for help
- make an appointment
- react to an instruction
- give a simple opinion
- describe a process
```

### Card structure

```text
Prompt
30–60 second answer structure
Useful phrases
Grammar target
Self-check
```

Example:

```text
Sprechen: Berufserfahrung

Answer structure:
1. Ich bin / war ...
2. Ich habe Erfahrung mit ...
3. Besonders wichtig finde ich ...
4. In Zukunft möchte ich ...

Use at least one:
- Ich interessiere mich für ...
- Ich habe Erfahrung mit ...
- Ich würde gern ...
```

### Done when

```text
- At least 12 speaking cards exist.
- Cards connect to course domains.
- Cards are short enough for real practice.
```

\---

## Priority 7 — Today’s B1 Sprint

### Goal

Make the app tell Oz what to practise now.

### Round composition

Default 20-item sprint:

```text
5 grammar items
5 vocab clozes
5 Redemittel items
3 weak review items
2 production cards
```

Short 10-item sprint:

```text
3 grammar
3 vocab
2 Redemittel
1 weak review
1 production card
```

### Selection priority

```text
1. Recently wrong items
2. Untouched high-priority grammar
3. Course-topic items from current chapter
4. Redemittel for writing/speaking
5. Vocab from weak domains
```

### UX

Today’s Sprint should show a tiny plan before starting:

```text
Today’s B1 Sprint
- Connectors
- Office/order vocabulary
- Redemittel for official email
- One short writing card
```

### Done when

```text
- Today’s Sprint builds a mixed round.
- Weak items return.
- Production cards can appear at the end.
- Results recommend the next micro-focus.
```

\---

## Priority 8 — Weakness Repair

### Goal

Keep the useful repair idea, but scope it to B1 test targets.

### First repair families

```text
- weil/denn/deshalb word order
- obwohl/trotzdem contrast
- damit vs um ... zu
- wenn vs als vs während vs solange
- nachdem/bevor tense relationship
- wo/wohin local preposition case
- in/auf/an + Dativ/Akkusativ
- mich/mir reflexive confusion
- hätte/wäre/würde confusion
- adjective ending after der/ein
```

### Repair round shape

```text
5 items
- 1 rule reminder
- 2 controlled clozes
- 1 contrast item
- 1 final test item
```

### Done when

```text
- Repeated error triggers repair recommendation.
- User can start repair immediately.
- Repair items are short and targeted.
```

\---

## 7\. Implementation sequence

## v30-b1-sprint-pivot-shell

### Goal

Add B1 Sprint structure without breaking existing app.

### Features

```text
- Add B1 Sprint as main start option.
- Add Course Map screen.
- Add placeholder sections for Grammar, Wortschatz, Redemittel, Schreiben, Sprechen.
- Keep existing Case Trainer accessible.
- Add internal B1\_COURSE\_MAP object.
```

### No content depth yet

Placeholders are acceptable, but the structure must be real.

### UX pause

Check whether the first screen is now clearer for test prep or too crowded.

### Acceptance criteria

```text
- App loads.
- Existing case/cloze modes still work.
- B1 Sprint entry exists.
- Course Map renders.
- Empty sections do not crash.
```

### Tests

```text
- syntax check
- browser smoke
- start screen screenshot
- mobile screenshot
- short laptop screenshot
- Arabic UI smoke
```

\---

## v31-b1-content-engine

### Goal

Add a simple B1 item engine.

### Features

```text
- Add B1\_ITEMS array/object.
- Add item filters by chapter/domain/grammarDomain/itemType.
- Add generic B1 item renderer.
- Support grammar\_cloze, vocab\_cloze, redemittel\_cloze.
- Track attempts in localStorage.
```

### Keep it simple

No full Leitner yet.

### Acceptance criteria

```text
- At least 10 sample items render.
- Correct/wrong checking works.
- Micro-rule feedback works.
- Attempts persist after reload.
```

### Tests

```text
- correct answer
- wrong answer
- accepted answer
- reload persistence
- mobile layout
```

\---

## v32-b1-grammar-sprint-core

### Goal

Build the first high-value grammar deck.

### Content

Minimum first pass:

```text
20 connector items
20 final-clause items
20 temporal-connector items
20 local/Wechsel preposition items
```

### Features

```text
- Grammar Sprint menu.
- Choose grammar domain.
- Mixed Grammar Sprint.
- Micro-rules per wrong answer.
```

### Acceptance criteria

```text
- 80 grammar items active.
- Domain filtering works.
- Mixed mode works.
- Feedback is concise and useful.
```

### Tests

```text
- each grammar domain
- mixed grammar round
- wrong answer micro-rule
- responsive screenshots
```

\---

## v33-b1-redemittel-core

### Goal

Add phrase training for practical output.

### Content

Minimum first pass:

```text
60 Redemittel items
12 function-match items
```

### Features

```text
- Redemittel Drill mode.
- Filter by function.
- Phrase cloze.
- Function match.
```

### Acceptance criteria

```text
- User can practise official email phrases.
- User can practise appointment/request phrases.
- User can practise complaint/problem phrases.
- Redemittel results appear separately from grammar.
```

### Tests

```text
- phrase cloze
- function match
- filter by function
- mobile answer flow
```

\---

## v34-b1-wortschatz-core

### Goal

Add contextual vocabulary clozes from the course.

### Content

Minimum first pass:

```text
150 vocab clozes
```

Suggested distribution:

```text
30 Beruf/Ausbildung/Bewerbung
25 Fähigkeiten/Interessen
25 Branche/Arbeitsabläufe
25 Büro/Bestellung
20 Krankheit/Versicherung
15 Beschwerde/Service
10 Technik/Problem
```

### Acceptance criteria

```text
- Vocab clozes use course-relevant contexts.
- Nouns include gender/plural metadata where useful.
- Items are not isolated translation cards.
```

### Tests

```text
- validator/code inspection
- random sample 30 items manual German QA
- cloze round smoke
```

\---

## v35-b1-writing-speaking-cards

### Goal

Add production practice without auto-grading.

### Content

```text
12 writing cards
12 speaking cards
```

Writing cards:

```text
- Bewerbung
- offizielle Mail
- Anfrage
- Antwort
- Beschwerde
- Krankmeldung
- Grafikbeschreibung
```

Speaking cards:

```text
- sich vorstellen
- Ausbildung/Beruf beschreiben
- Problem erklären
- Termin vereinbaren
- um Hilfe bitten
- Meinung äußern
- Ablauf beschreiben
```

### Features

```text
- Card display
- Useful phrases
- Checklist
- Hidden model answer optional
- Mark as practised button
```

### Acceptance criteria

```text
- Cards are usable without grading.
- Cards connect to Redemittel.
- Practice status persists.
```

### Tests

```text
- card flow
- checklist visibility
- mark practised
- reload persistence
```

\---

## v36-b1-todays-sprint

### Goal

Build the daily mixed review mode.

### Features

```text
- 10-item sprint
- 20-item sprint
- grammar + vocab + Redemittel + weak items + production card
- result summary by category
- recommended next focus
```

### Acceptance criteria

```text
- Sprint pulls mixed item types.
- Weak items return.
- Production card appears near end.
- Results show category weaknesses.
```

### Tests

```text
- no history
- some weak grammar
- some weak vocab
- finished sprint
- reload persistence
```

\---

## v37-b1-weakness-repair

### Goal

Add targeted repair for high-yield B1 mistakes.

### Features

```text
- error family detection for selected domains
- repair recommendation
- 5-item repair round
```

### First families

```text
- weil/denn/deshalb
- obwohl/trotzdem
- damit/um...zu
- wenn/als/während/solange
- wo/wohin
- Wechselpräposition Dativ/Akkusativ
- mich/mir
- hätte/wäre/würde
```

### Acceptance criteria

```text
- Common repeated errors trigger repair.
- Repair is short.
- Repair feedback is useful.
```

### Tests

```text
- trigger each first family
- run repair
- confirm result update
```

\---

## v38-b1-exam-readiness-dashboard

### Goal

Show what is ready and what is weak.

### Dashboard

```text
B1 Readiness

Grammar:
- Connectors: fragile
- Prepositions: weak
- Konjunktiv II: good

Wortschatz:
- Bewerbung: good
- Büro/Bestellung: weak
- Krankheit: untested

Redemittel:
- Official email: good
- Complaints: fragile

Production:
- Writing cards practised: 4/12
- Speaking cards practised: 3/12
```

### Rule

Use recent data. Do not pretend to calculate a true exam score.

### Acceptance criteria

```text
- Dashboard is actionable.
- No fake pass/fail claim.
- Shows untested areas clearly.
- Recommends next practice.
```

### Tests

```text
- no data
- partial data
- strong/weak mixed data
- mobile results view
```

\---

## v39-b1-content-audit-tools

### Goal

Help clean generated/manual content quickly.

### Features

```text
- list B1 items
- filter by status
- retire item
- edit status if feasible
- export B1 item data
- show duplicate answers/sentences
```

### Acceptance criteria

```text
- Bad item can be retired.
- Retired item never appears.
- Data can be exported for backup.
```

### Tests

```text
- retire/reactivate
- export
- reload persistence
```

\---

## v40-b1-stable-baseline

### Goal

Freeze a stable personal B1 test-prep baseline.

### Requirements

```text
- Course Map works.
- Grammar Sprint works.
- Wortschatz works.
- Redemittel works.
- Writing/Speaking cards work.
- Today’s Sprint works.
- Weaknesses return.
- Export/import works.
- Mobile and laptop usable.
```

### Full validation

```text
- syntax check
- browser smoke
- responsive screenshot set
- localStorage persistence
- export/import
- Arabic directionality
- manual content QA sample
- live GitHub Pages test after manual upload
```

\---

## 8\. ASAP content build order

Do not try to enter everything at once.

### Content Batch 1 — Grammar survival set

```text
- weil / denn / deshalb
- obwohl / trotzdem
- sodass / so ..., dass
- damit / um ... zu
- wenn / als / während / solange
- nachdem / bevor / seitdem / bis
- wo / wohin / woher
- in / an / auf + Dativ/Akkusativ
```

Target:

```text
100 grammar items
```

### Content Batch 2 — Redemittel survival set

```text
- formal email
- application
- request/callback
- appointment
- complaint
- technical problem
- sickness/absence
- graph description
```

Target:

```text
80 Redemittel items/cards
```

### Content Batch 3 — Wortschatz survival set

```text
- Bewerbung
- Ausbildung
- Berufsfeld
- Arbeitsabläufe
- Büro
- Bestellung
- Krankmeldung
- Versicherung
- Beschwerde
- Technik
```

Target:

```text
150 vocab clozes
```

### Content Batch 4 — Production cards

```text
- 12 writing
- 12 speaking
```

\---

## 9\. B2 expansion path

Keep B2 open by using generic domains and metadata now.

Do not hard-code everything as “B1 only”.

Use:

```text
cefr: A2 | B1 | B1\_Bridge | B2
courseSource: B1Work | future\_B2 | custom
skill: grammar | vocab | redemittel | schreiben | sprechen
domain: ...
```

Later B2 can add:

```text
- richer connectors
- argumentation
- formal register
- nominal style
- passive
- Konjunktiv I where needed
- advanced adjective/noun constructions
- exam-style reading/listening strategy cards
- longer writing templates
```

But do not build B2 now.

\---

## 10\. What to defer

Defer until after B1 test-prep baseline:

```text
- full 5-box Leitner visual system
- custom cloze import UI
- large public content library
- monetisation
- backend sync
- accounts
- AI grading
- public landing page
- full B2 course
- complex spaced-repetition algorithm
```

Use simple weak-item return now. Proper Leitner can come later.

\---

## 11\. Codex prompt sequence

Use these prompts one at a time.

### Prompt 1 — v30 B1 Sprint Pivot Shell

```text
Implement v30-b1-sprint-pivot-shell.

Source of truth:
Use the latest uploaded tested OZMOSIS/Kasuskonsole package or index.html as the code source. Use the B1 sprint production plan as the feature source. Do not treat old roadmap items as required for this patch.

Non-negotiables:
- Single-file static app.
- No dependencies.
- No backend.
- No redesign.
- Preserve neon console identity.
- Preserve existing case/cloze practice.
- Preserve localStorage compatibility.
- German learning content must remain LTR in Arabic UI.
- Do not claim tests passed unless run.

Goal:
Add a B1 Sprint structure without implementing the full content engine yet.

Implement:
- Add B1 Sprint as a start-screen option.
- Add Course Map screen/modal/section.
- Add placeholder entries for Grammar, Wortschatz, Redemittel, Schreiben, Sprechen.
- Keep existing Case Trainer accessible.
- Add internal B1\_COURSE\_MAP object with chapters 1–4 and observed topic/grammar labels.
- Empty sections must show a useful “coming next” state, not crash.

Acceptance criteria:
- Existing practice still works.
- B1 Sprint entry opens.
- Course Map renders.
- App remains responsive on mobile and short laptop.
- No console errors.

Tests:
- Syntax check.
- Browser smoke.
- Existing table/cloze flow.
- B1 Course Map open/close.
- Responsive screenshots: 390×844, 1365×599, 1440×900.
- Arabic UI smoke.

Stopping rule:
Stop after the shell and Course Map exist. Do not implement item engine, Leitner, or content banks in this patch.
```

### Prompt 2 — v31 B1 Content Engine

```text
Implement v31-b1-content-engine.

Goal:
Add a small generic B1 practice item engine that can render and check grammar/vocab/redemittel cloze items.

Implement:
- B1\_ITEMS data array with at least 10 sample items.
- Generic renderer for grammar\_cloze, vocab\_cloze, redemittel\_cloze.
- Correct/wrong checking with acceptedAnswers.
- Micro-rule feedback.
- Basic attempt persistence in localStorage.
- Filters by chapter, courseDomain, grammarDomain, itemType.

Do not:
- Add full Leitner.
- Add import UI.
- Add AI grading.
- Rewrite existing case trainer.

Acceptance criteria:
- User can start a B1 practice round from sample items.
- Correct/wrong feedback works.
- Attempts persist after reload.
- Existing modes still work.

Tests:
- Syntax check.
- Correct answer.
- Wrong answer.
- Reload persistence.
- Existing table/cloze smoke.
- Responsive screenshots.

Stopping rule:
Stop after 10 sample items and generic engine work. Do not add large content yet.
```

### Prompt 3 — v32 Grammar Sprint Core

```text
Implement v32-b1-grammar-sprint-core.

Goal:
Add the first serious B1 grammar sprint deck using the course-note grammar priorities.

Content:
- 20 connector items: weil, denn, deshalb, trotzdem, obwohl, sodass.
- 20 final-clause items: damit vs um ... zu.
- 20 temporal connector items: wenn, als, während, solange, nachdem, bevor, seitdem, bis.
- 20 local/preposition items: wo, wohin, woher, Wechselpräpositionen.

Requirements:
- Natural B1 German.
- One intended answer per cloze.
- Concise micro-rule for wrong answers.
- Items tagged by grammarDomain.
- Items remain course/test relevant.

Acceptance criteria:
- Grammar Sprint can run by domain.
- Mixed Grammar Sprint works.
- Feedback is useful and brief.
- Existing app modes unaffected.

Tests:
- Syntax check.
- Run each grammar domain.
- Run mixed grammar.
- Wrong-answer feedback.
- Responsive screenshots.
- German content QA sample.

Stopping rule:
Stop after grammar sprint core. Do not add Redemittel or vocab in this patch.
```

\---

## 12\. Final strategy

For the B1 test, the app should stop trying to become a perfect future learning platform and become a ruthless course-notes trainer.

The near-term winning build is:

```text
Course Map
→ Grammar Sprint
→ Redemittel Sprint
→ Wortschatz Clozes
→ Writing/Speaking Cards
→ Today’s Sprint
→ Weakness Repair
```

The fastest gains will probably come from:

```text
1. connectors and word order
2. prepositions and case decisions
3. Konjunktiv II polite requests
4. Redemittel for formal email/speaking
5. course-specific workplace vocabulary
6. writing/speaking production checklists
```

The app should help Oz do this every day:

```text
Open app.
Press Today’s B1 Sprint.
Do 10–20 high-value items.
Repair the weakest point.
Practise one short writing or speaking card.
Stop.
Repeat tomorrow.
```

That is the B1 sprint target.

