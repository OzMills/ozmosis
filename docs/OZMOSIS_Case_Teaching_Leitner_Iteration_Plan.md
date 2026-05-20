# OZMOSIS Case Teaching + Leitner Cloze Development Plan

_Last updated: 2026-05-20_

## 0. Purpose

This document is the working development plan for turning OZMOSIS, formerly Kasuskonsole, into a stronger German learning instrument with two mutually reinforcing systems:

1. **Case Teaching Tool**  
   A direct grammar trainer for German articles, cases, article families, and eventually adjective/possessive layers.

2. **Leitner Cloze System**  
   A spaced-repetition system for German vocabulary and controlled cloze retrieval, organised by topic, grammar key, error family, and review state.

The intended end state is not a generic flashcard app and not a worksheet generator. It should be a deliberate, compact, high-signal learning tool that teaches form, tests use, diagnoses errors, and returns weak skills at the right time.

The core teaching loop:

```text
Teach the form.
Use it in a sentence.
Detect the mistake.
Return it at the right time.
Repair the actual confusion.
Prove transfer in a new context.
```

---

## 1. Current baseline and source-of-truth rule

### 1.1 Current known baseline

The current known project baseline is **v29-ux-polish-scroll-encoding** unless a newer tested package is explicitly adopted.

Known v29 status:

- UTF-8/mojibake issues repaired.
- Setup/options scrolling changed to document-level scrolling.
- Practice screen still preserves bounded internal scrolling where the fixed HUD requires it.
- Menu/modal/console scroll containment improved.
- Menu “To come” list cleaned.
- Page title renamed to `Kasuskonsole`.
- Verification covered setup, menu, Genitive help, cloze/table feedback, Arabic mode, and results scroll reachability.

The Codex log also discusses a possible **v30-flush-canvas-ux** direction, where the outer visual shell becomes flush with the background. Treat that as a candidate UX iteration, not an assumed baseline, unless manually adopted.

### 1.2 Source-of-truth hierarchy

Use this hierarchy unless manually overridden:

```text
1. Latest uploaded tested package/file in the current project/chat
2. Current GitHub repo
3. Live GitHub Pages app
4. Current Codex chatlog / implementation logs
5. Old shared chats and historical notes
6. Memory
```

If sources disagree, prefer the newest tested package. A loose `index.html` should not automatically outrank the latest tested ZIP unless it is explicitly declared newer.

---

## 2. Permanent non-negotiables

These apply to every iteration unless deliberately changed.

### 2.1 Architecture

```text
- Static app.
- Main deployed file: repo-root index.html.
- No backend.
- No framework.
- No build step.
- No database.
- No accounts.
- No analytics/tracking.
- No external API calls.
- No runtime AI generation.
- No dependencies unless explicitly approved.
- Local progress stays localStorage-compatible.
- Do not rename storage keys or export formats without migration.
```

### 2.2 Product identity

Preserve:

```text
- dark neon console aesthetic
- compact mobile-first operation
- fixed HUD/footer during practice
- answer → feedback → continue rhythm
- keyboard/mouse/touch usability
- fast retrieval practice
- German grammar precision
- support-language accessibility
- German learning content always LTR
```

### 2.3 Pedagogy

Prioritise:

```text
- retrieval practice
- spaced return of failed items
- interleaving
- contrastive practice
- low extraneous cognitive load
- concise corrective feedback
- natural Hochdeutsch
- single-answer cloze validity
- gradual B1→B2 bridge development
```

Avoid in core clozes:

```text
- hidden extra grammar
- gotcha dative verbs
- n-declension nouns
- adjective endings unless intentionally enabled
- obscure fixed preposition patterns
- heavy idioms
- ambiguous no-article plural
- Genitiv unless explicitly enabled
```

### 2.4 UX

Prioritise:

```text
- clear primary action
- low decision load
- top/bottom scroll reachability
- useful minimal feedback
- no hidden gotchas
- desktop composition that does not look like an oversized phone
- accessible focus/tap states
- no trapped nested scroll unless the fixed HUD requires bounded scrolling
```

---

## 3. Permanent validation language

Reports must distinguish between:

```text
- code inspection
- syntax check
- browser smoke test
- headless screenshot test
- manual visual inspection
- responsive screenshot test
- live GitHub Pages test
- localStorage persistence test
- export/import test
- content QA
- German-language QA
- support-language QA
```

Never claim a test passed unless it was actually run.

If testing is blocked, say exactly what was blocked and run the next-best validation.

---

## 4. Standard recurring test matrix

Run this wherever relevant.

### 4.1 Syntax and runtime

```text
- Parse inline JavaScript.
- Load app locally or through the safest available test route.
- Confirm no console errors on initial load.
- Confirm no obvious runtime exceptions during table, cloze, mixed, and results flows.
```

### 4.2 Core functional smoke

```text
- Start a table round.
- Answer one table prompt correctly.
- Answer one table prompt incorrectly.
- Proceed using keyboard Enter.
- Proceed using click/tap.
- Start a cloze round.
- Answer one cloze correctly.
- Answer one cloze incorrectly.
- Use Kein Artikel where relevant.
- Open/close settings.
- Open/close Genitiv help.
- Finish a round and inspect results.
```

### 4.3 Responsive screen set

Minimum viewport set:

```text
- 320×568 small phone
- 390×844 normal phone
- 430×932 large phone
- 568×320 landscape phone
- 768×1024 tablet
- 1024×768 landscape tablet
- 1365×599 short laptop
- 1440×900 normal laptop
- 1920×1080 desktop
```

Watch for:

```text
- HUD covering content
- clipped modals/options
- actions below fold
- nested scroll traps
- bounce-back preventing top/bottom reachability
- desktop layout looking absurdly central or oversized
- weak focus states
- long labels breaking layout
```

### 4.4 Language and directionality

```text
- English UI
- Turkish UI
- Arabic UI
- Chinese UI
- Ukrainian UI
```

Specific RTL rule:

```text
Arabic UI may be RTL.
German prompts, examples, cloze blanks, answer fields, article forms, tables, and heatmaps must remain LTR.
```

### 4.5 Persistence

```text
- localStorage survives reload.
- Round settings persist.
- Learner progress persists.
- Export progress works.
- Import progress works.
- Old progress imports after migration.
- Reset profile works.
```

---

# PART A — FOUNDATION AND SAFETY

## v30-project-guardrails

### Goal

Make the project safer for ongoing Codex use and manual GitHub work.

### Features

```text
- Add or update root AGENTS.md.
- Add or update README project notes.
- Add DATA_MODEL.md as a living technical design file.
- Add CLOZE_QA.md as a durable content-audit guide.
- Add TESTING.md or testing section in README.
- Add CHANGELOG.md if not already present.
```

### AGENTS.md should include

```text
- Single-file architecture.
- Do not redesign unless asked.
- No dependencies.
- No backend/build step.
- Source-of-truth hierarchy.
- Required validation categories.
- localStorage/export migration rules.
- Reporting format.
- Do not claim unrun tests passed.
```

### UX pause

No visual feature work yet. Confirm the current UI identity and decide whether v30 should include the flush-canvas direction from the Codex log or defer it.

### Acceptance criteria

```text
- Repo has durable guidance files.
- Codex can be pointed at AGENTS.md before future work.
- No app behaviour changes required.
- No storage changes.
```

### Tests

```text
- Documentation inspection.
- Confirm repo root contains guidance files.
- No browser test required unless index.html is touched.
```

---

## v31-source-baseline-audit

### Goal

Establish the current true baseline before adding architecture.

### Features

```text
- Inspect latest ZIP/package and loose index.html.
- Compare version markers, title, UI labels, and known v29 changes.
- Confirm whether v30 flush-canvas exists in the current working file or is only in logs.
- Check current localStorage keys.
- Check export format and versioning.
- Check current learner model shape.
- Check current cloze object shape.
- Check current table candidate generation.
- Check current retry/adaptive logic.
- Check current Dev Tools.
```

### Output

Create or update:

```text
BASELINE_AUDIT.md
```

With:

```text
- current file treated as source
- known implemented features
- roadmap labels not yet implemented
- storage keys
- export/import format notes
- risk list
- recommended next safe patch
```

### UX pause

Take screenshots at the standard viewport set before changing anything. This is the reference set for regressions.

### Acceptance criteria

```text
- Current baseline is explicit.
- Ambiguity between v29/v30 is resolved.
- Storage/export risks are known before mutation.
- Screenshots exist for comparison.
```

### Tests

```text
- Code inspection.
- Syntax check.
- Responsive screenshot baseline.
- localStorage/export format inspection.
```

---

## v32-outer-shell-ux-decision

### Goal

Decide and, if approved, implement the flush-canvas UI direction.

### Background

The Codex log notes that the outer bordered `main` shell can make the app feel like “an app inside an app”, especially on phones. The proposed safe direction is to remove or flatten the outer shell while preserving meaningful inner panels, the task card, options panels, feedback, tables, and HUD.

### Features

Option A — adopt flush-canvas:

```text
- Make outer main shell a layout container, not a visible framed panel.
- Move subtle grid/neon texture to the page background.
- Keep task card, options, tables, feedback, and HUD as framed elements.
- Preserve setup/options document-level scrolling.
```

Option B — defer:

```text
- Leave v29 shell intact.
- Add note to UX backlog.
```

### UX pause

This is a visual identity checkpoint.

Review screenshots side-by-side:

```text
- v29 framed shell
- v30 flush canvas candidate
```

Decision question:

```text
Does the app feel more like a deliberate learning instrument, or did it lose too much console identity?
```

### Acceptance criteria if adopted

```text
- No loss of neon console feel.
- More usable perceived space on mobile.
- Better desktop composition.
- No broken scroll reachability.
- HUD still visually anchored.
```

### Tests

```text
- Syntax check.
- Responsive screenshot test.
- Manual visual inspection.
- Scroll top/bottom test.
- Arabic UI smoke test.
```

---

# PART B — UNIFIED LEARNING ENGINE

## v33-knowledge-component-foundation

### Goal

Make table drills and clozes speak the same internal learning language.

### Problem

The current app can track prompt-level performance, but the future system needs to know the underlying skill being tested. A table prompt and a cloze may both train the same target, such as `Dativ Neutrum DER = dem`.

### Features

Add a knowledge-component model.

Example:

```json
{
  "id": "case.dat.der.neuter",
  "type": "article_case_cell",
  "label": "Dativ Neutrum DER",
  "caseKey": "Dativ",
  "genderKey": "Neutrum",
  "articleFamily": "definite",
  "answer": "dem",
  "contrastIds": [
    "case.acc.der.neuter",
    "case.dat.der.masculine"
  ]
}
```

Each table candidate should expose:

```text
- stable id
- kind: table
- knowledgeComponentIds
- articleFamily
- caseKey
- genderKey
- answer
```

Each cloze candidate should expose:

```text
- stable id
- kind: cloze
- knowledgeComponentIds
- grammarKeys
- themeIds
- answer
- acceptedAnswers
```

### Implementation notes

```text
- Do not rewrite gameplay.
- Add normalisation functions.
- Keep existing item data working.
- Use defaults where metadata is missing.
- Do not break export/import.
```

### UX pause

No UI change unless a tiny Dev Tools readout is needed. This is engine work.

### Acceptance criteria

```text
- Existing table/cloze/mixed rounds still work.
- Every generated table candidate has a stable knowledge component.
- Every cloze has at least one stable component after normalisation.
- Existing adaptive retry still works.
- No visible redesign.
```

### Tests

```text
- Syntax check.
- Code inspection.
- Browser smoke: table, cloze, mixed.
- Export/import smoke if persistence touched.
```

---

## v34-item-metadata-normalisation

### Goal

Formalise metadata for clozes, topics, grammar keys, and variant families.

### Features

Add item metadata fields:

```text
- id
- bankId
- topic
- subtopic
- themeIds
- grammarKeys
- knowledgeComponentIds
- variantFamilyId
- contrastFamilyIds
- cefr
- difficulty: core / bridge / advanced / genitive
- qaStatus: draft / needs_review / active / retired
- hiddenGrammarRisk: low / medium / high
- acceptedAnswers
- explanationShort
- microRule
```

### Cloze normalisation must guarantee

```text
- exactly one cloze blank for active items
- answer exists
- acceptedAnswers includes answer
- fullSentence can be derived or exists
- support-language gloss fallback exists
- missing optional fields do not crash
```

### UX pause

Add a Dev Tools “Inspect Current Item” panel if useful, but do not expose metadata to normal users.

### Acceptance criteria

```text
- Active clozes render as before.
- Missing metadata falls back safely.
- Bad/draft items can be filtered later.
- Existing cloze translations still resolve.
```

### Tests

```text
- Syntax check.
- Cloze round smoke.
- Mixed round smoke.
- Translation fallback test.
- Arabic directionality smoke.
```

---

## v35-learner-model-v2-scaffold

### Goal

Prepare learner progress storage for Leitner boxes without fully implementing Leitner yet.

### Features

Add versioned learner model scaffolding:

```json
{
  "schemaVersion": 2,
  "stats": {},
  "reviewState": {},
  "componentStats": {},
  "sessionHistory": [],
  "bankState": {}
}
```

For each item:

```text
reviewState[itemId]
- box
- dueAt
- lastSeenAt
- lastResult
- correctStreak
- failCount
- lapseCount
- earlyPracticeCount
- answerHistory
```

For each knowledge component:

```text
componentStats[componentId]
- attempts
- correct
- wrong
- recentHistory
- lastSeenAt
- weaknessScore
```

### Migration

```text
- Preserve old stats.
- Initialise missing reviewState lazily.
- Do not delete unknown keys.
- Increment export schema version if export shape changes.
- Allow old imports.
```

### UX pause

No user-facing changes except optional Dev Tools model viewer.

### Acceptance criteria

```text
- Old progress imports.
- New progress exports.
- Existing results still work.
- LearnerModel does not reset unexpectedly.
- Unknown fields survive round-trip where practical.
```

### Tests

```text
- Syntax check.
- localStorage persistence test.
- Export/import old fixture if available.
- Export/import new format.
- Reset profile.
```

---

# PART C — CLOZE BANK MANAGEMENT

## v36-cloze-bank-schema

### Goal

Define the durable JSON structure for imported and built-in cloze banks.

### Features

Cloze bank object:

```json
{
  "bankId": "a1_intro_personal",
  "title": "A1 Personal Introductions",
  "version": "1.0.0",
  "cefr": "A1",
  "topic": "Personal introductions",
  "language": "de",
  "supportLanguages": ["en", "tr", "ar", "zh", "uk"],
  "status": "draft",
  "items": []
}
```

Each item:

```json
{
  "id": "a1_intro_001",
  "topic": "Personal introductions",
  "subtopic": "name",
  "cefr": "A1",
  "sentence_de": "Ich ___ Anna.",
  "answer": "heiße",
  "accepted_answers": ["heiße"],
  "full_sentence_de": "Ich heiße Anna.",
  "gloss_en": "My name is Anna.",
  "target_type": "verb_form",
  "grammar_keys": ["simple_present", "verb_heissen"],
  "theme_tags": ["personal_introductions"],
  "difficulty": "core",
  "qa_status": "active",
  "qa_note": "A1, natural, one intended answer."
}
```

### UX pause

No large UI yet. This is a data contract.

### Acceptance criteria

```text
- Schema documented in DATA_MODEL.md.
- CLOZE_QA.md has item rules.
- App can theoretically normalise this shape.
```

### Tests

```text
- Documentation inspection.
- Optional static JSON fixture validation.
```

---

## v37-cloze-bank-validator-devtools

### Goal

Let the app validate a cloze bank before it is used.

### Features

In Dev Tools:

```text
- Paste JSON cloze bank.
- Validate.
- Show errors and warnings.
- Keep inactive by default.
```

Hard errors:

```text
- invalid JSON
- missing bankId
- duplicate item IDs
- missing sentence_de
- missing answer
- no ___ blank
- more than one ___ blank
- missing CEFR
- missing topic
- missing accepted_answers
```

Warnings:

```text
- sentence likely too long for stated level
- repeated answer too often
- repeated sentence frame too often
- missing grammar keys
- missing theme tags
- qa_status not active
- support-language gloss missing
```

### UX pause

The validation report must be understandable, not just a raw error dump.

Suggested display:

```text
Bank: A1 Personal Introductions
Items: 100

Hard checks:
✓ 100 unique IDs
✓ 100 single blanks
✓ 100 answers

Warnings:
⚠ 6 repeated answers
⚠ 3 long sentences
```

### Acceptance criteria

```text
- Invalid bank cannot be activated.
- Valid bank can be stored as draft.
- Warnings do not block draft storage.
- Validation does not crash on malformed input.
```

### Tests

```text
- Valid 3-item fixture.
- Invalid JSON.
- Duplicate ID.
- Missing answer.
- Multiple blanks.
- Long sentence warning.
- Mobile Dev Tools scroll reachability.
```

---

## v38-cloze-bank-import-activation

### Goal

Allow custom cloze banks to be stored and activated for practice.

### Features

```text
- Import valid bank into localStorage.
- Bank status: draft / active / disabled / retired.
- Activate/deactivate bank.
- List imported banks.
- Export bank.
- Delete bank with confirmation.
```

### Practice integration

```text
- Active imported banks can feed cloze practice.
- Disabled/draft banks cannot appear.
- Built-in clozes remain available.
- Topic filters include active bank topics.
```

### UX pause

Bank management should be in Dev Tools or Options, not the main learner start flow yet.

### Acceptance criteria

```text
- Imported active bank appears in cloze candidate pool.
- Disabled bank disappears from candidate pool.
- Exported bank can be re-imported.
- Deleting a bank does not delete unrelated progress.
```

### Tests

```text
- Import valid bank.
- Activate bank.
- Run cloze round from imported items.
- Deactivate bank.
- Confirm items no longer appear.
- Export bank.
- Delete bank.
- Reload persistence test.
```

---

## v39-first-controlled-cloze-bank

### Goal

Add or import the first serious 100-item topic bank.

### Suggested first bank

```text
A1 intro German: Personal introductions
```

Subtopic distribution:

```text
- greetings/farewells
- name/basic identity
- age/numbers
- origin/country
- residence/city
- languages
- occupation/school/course
- hobbies/free time
- polite/informal questions
- mixed useful intro phrases
```

### QA requirements

Every item must pass:

```text
- A1 level
- natural Hochdeutsch
- topic relevance
- single intended answer
- no hidden advanced grammar
- no adjective endings as target
- no Genitiv
- no subordinate clauses
- no proper-name blanks with arbitrary answers
```

### UX pause

Manually play through at least 30 items. Mark any “technically correct but silly” clozes as retired before using the bank seriously.

### Acceptance criteria

```text
- 100 items imported or built in.
- All pass validator.
- At least 30 manually reviewed in-app.
- Weak items retired or corrected.
```

### Tests

```text
- Validator.
- Manual content QA.
- Cloze practice smoke.
- Support-language gloss fallback.
- Export/import bank.
```

---

# PART D — LEITNER SYSTEM

## v40-basic-leitner-state

### Goal

Implement simple 0–5 box scheduling for clozes.

### Features

Visible stages:

```text
Box 0: New / learning
Box 1: Bronze 1
Box 2: Bronze 2
Box 3: Bronze 3
Box 4: Silver
Box 5: Gold / mature
```

Internal state:

```text
- box
- dueAt
- lastSeenAt
- lastResult
- correctStreak
- failCount
- lapseCount
- earlyPracticeCount
```

Default intervals:

```text
Box 0 correct → due in 1 day
Box 1 correct → due in 2 days
Box 2 correct → due in 4 days
Box 3 correct → due in 8 days
Box 4 correct → due in 16 days
Box 5 correct → due in 35+ days

Wrong → drop/reduce box and create repair signal
Blank/severe wrong → Box 0/1 and same-session retry/repair
Minor typo → no harsh punishment
```

### UX pause

Keep box visuals small. Do not let stars/metals dominate the learning interaction.

### Acceptance criteria

```text
- Correct due cloze advances box.
- Wrong due cloze drops or stabilises lower.
- dueAt persists.
- Box state persists through reload.
- Export/import preserves box state.
```

### Tests

```text
- Correct answer advances.
- Wrong answer drops.
- Reload persistence.
- Export/import.
- Date manipulation/debug force due.
```

---

## v41-due-review-mode

### Goal

Add a mode specifically for due Leitner clozes.

### Features

Start screen option:

```text
Due Review
Review what is ready today.
```

States:

```text
- due items available
- no due items
- practice anyway
```

No due copy:

```text
No Leitner reviews are due.
You can practise anyway, but this counts as extra practice, not full box progress.
```

### Practice-anyway rules

```text
- Logs exposure.
- Can create repair signal if wrong.
- Does not advance multiple boxes.
- Does not fake maturity.
```

### UX pause

The no-due state must feel useful, not like a dead end.

Offer:

```text
- Practise anyway
- Learn new clozes
- Repair weaknesses
- Case trainer
```

### Acceptance criteria

```text
- Due Review pulls only due items by default.
- No-due state appears correctly.
- Practice Anyway is clearly labelled.
- Early practice has limited scheduling effect.
```

### Tests

```text
- Force item due.
- Run due review.
- Set no items due.
- Practise anyway.
- Confirm limited box movement.
```

---

## v42-new-cloze-acquisition-mode

### Goal

Introduce new clozes deliberately instead of dumping them into review.

### Features

Start option:

```text
Learn New Clozes
Add a small number of new words and patterns.
```

Default round:

```text
8 items
- 3–5 new clozes
- 3–5 immediate checks or familiar review items
- one topic at a time
- high support
```

Rules:

```text
- Cap new items per session.
- Prefer one topic.
- Keep grammar simple.
- Add new correct items to Box 1.
- Add failed new items to repair/new retry without harsh penalty.
```

### UX pause

New learning should feel guided. Consider showing a tiny “new” label, but do not overload the card.

### Acceptance criteria

```text
- New items are capped.
- New items become reviewable after first correct.
- Failed new items return soon.
- Topic remains coherent in acquisition mode.
```

### Tests

```text
- Empty review state.
- Learn 5 new items.
- Confirm review state created.
- Confirm dueAt set.
- Confirm new cap enforced.
```

---

## v43-session-builder-v1

### Goal

Replace simple random selection with deliberate round construction.

### Candidate pools

```text
- due
- new
- weak
- repair
- topic
- contrast
- confidence
```

### Default Due Review composition

```text
10 items
- 6 due Leitner clozes
- 2 weak component items
- 1 contrast neighbour
- 1 confidence item
```

### Default Case Trainer composition

```text
10 items
- 5 table prompts
- 3 clozes using related forms
- 2 contrast prompts
```

### Default Topic Practice composition

```text
10 items
- 1 topic
- 2–3 grammar keys
- 70% known/review
- 30% new
```

### Constraints

Hard:

```text
- no exact duplicate in same session
- no draft/retired items
- no Genitiv unless enabled
- no unsupported item type
```

Soft:

```text
- avoid same answer too many times
- avoid same lemma repeatedly
- mix themes in review
- keep one theme in acquisition
- distribute difficult items
- end with a likely-success item where possible
```

### UX pause

Test whether the mode feels intelligent or random. The learner does not need to see the algorithm, but they should feel the round has shape.

### Acceptance criteria

```text
- Round builder can produce due review.
- Round builder can produce topic practice.
- Round builder can produce mixed table/cloze.
- No duplicate items in one round.
- Genitiv restrictions honoured.
```

### Tests

```text
- Unit-like inspection of generated rounds through Dev Tools.
- Table mode.
- Cloze mode.
- Mixed mode.
- Genitiv off/on.
- Imported bank active/inactive.
```

---

# PART E — CASE TEACHING TOOL IMPROVEMENT

## v44-case-journeys-foundation

### Goal

Turn the Case Teaching Tool from a quiz into a guided teaching path.

### Concept

A case journey is a short sequence:

```text
1. Direct table form
2. Same form in a simple phrase
3. Same form in a cloze
4. Contrast neighbour
5. Final unassisted check
```

### First journeys

```text
- Masculine Akkusativ: der → den
- Dativ with mit: dem / der / dem / den
- EIN family basics
- KEIN family basics
- No-article plural
- Nominativ vs Akkusativ
```

### Data model

```json
{
  "journeyId": "journey-acc-m-der-den",
  "title": "Masculine Akkusativ: der → den",
  "level": "core",
  "componentIds": ["case.acc.der.masculine"],
  "steps": []
}
```

### UX pause

Journey UI must not become a lesson page. Keep it short, interactive, and practice-first.

### Acceptance criteria

```text
- User can choose a guided case journey.
- Journey has 5–8 items.
- Journey uses table and cloze where possible.
- Progress through journey is clear.
```

### Tests

```text
- Journey start.
- Keyboard flow.
- Wrong answer feedback.
- Journey completion.
- Mobile and short laptop screenshots.
```

---

## v45-case-to-cloze-bridge

### Goal

Use case-table success/failure to influence cloze practice and vice versa.

### Features

When learner fails table item:

```text
Dativ Neutrum DER = dem
```

System can later show:

```text
Ich helfe ___ Kind.
```

When learner fails cloze:

```text
Ich helfe ___ Kind. → dem
```

System can later show:

```text
Dativ Neutrum DER = ?
```

### Implementation

```text
- Record component-level stats.
- Let cloze failures increase weakness for table components.
- Let table failures increase weakness for cloze selection.
- Keep item-specific and component-specific stats separate.
```

### UX pause

Do not make the learner feel punished by seeing “the same thing forever”. Prefer same concept, different prompt.

### Acceptance criteria

```text
- Same component can be trained through table and cloze.
- Weak table component can influence cloze candidates.
- Weak cloze component can influence table candidates.
- Exact repetition is controlled.
```

### Tests

```text
- Fail table component.
- Confirm related cloze priority rises.
- Fail cloze component.
- Confirm related table priority rises.
- Ensure no infinite loop.
```

---

## v46-contrast-drills-core

### Goal

Add targeted contrast drills for common neighbour confusions.

### First contrast families

```text
- den vs dem
- das vs dem
- der vs die
- ein vs einen vs einem
- kein vs keinen vs keinem
- no article plural vs definite plural
- Dativ feminine der vs nominative masculine der
```

### Round shape

```text
5–8 items
- one target contrast
- mix table and cloze
- no more than 2 repeated frames
- one final unassisted check
```

### Feedback

Example:

```text
You wrote den.
Here you need dem.

sehen + Akkusativ:
Ich sehe den Mann.

helfen + Dativ:
Ich helfe dem Mann.
```

### UX pause

Contrast drills are useful but can become too narrow and annoying. Keep them short.

### Acceptance criteria

```text
- User can start a contrast drill.
- App can recommend a contrast drill after repeated confusion.
- Contrast feedback names the confusion.
```

### Tests

```text
- Manual start.
- Auto recommendation.
- Correct/wrong feedback.
- Round completion.
```

---

# PART F — REPAIR SYSTEM

## v47-error-family-detection

### Goal

Detect the type of mistake, not just whether the answer was wrong.

### Error families

```text
case_article_cell
- den/dem
- ein/einen/einem
- kein/keinen/keinem

gender
- der/die/das noun gender
- plural article confusion

preposition_case
- mit + Dativ
- für + Akkusativ
- Wechselpräpositionen later

verb_valency
- helfen + Dativ
- fragen + Akkusativ
- gefallen + Dativ later

morphology later
- adjective endings
- dative plural -n
- n-declension
- Genitiv noun endings
```

### Features

```text
- Classify wrong answer where possible.
- Store error family in attempt history.
- Use recent history, not only all-time stats.
- Keep unknown errors as generic wrong.
```

### UX pause

Do not overdiagnose when the evidence is weak. If unsure, say less.

### Acceptance criteria

```text
- Common wrong article forms classify correctly.
- Unknown wrong forms do not crash.
- Error families appear in Dev Tools.
- Results can identify repeated family.
```

### Tests

```text
- den instead of dem.
- dem instead of den.
- no article when article required.
- wrong article family.
- nonsense answer.
```

---

## v48-focused-repair-mode

### Goal

Turn repeated errors into short repair rounds.

### Trigger conditions

```text
- same component failed twice in recent 20 attempts
- same wrong neighbour chosen twice
- same error family appears repeatedly
- correct but slow several times, if response timing is implemented
```

### Repair round structure

```text
5 items

1. Easy target
2. Contrast neighbour
3. Target in cloze
4. Contrast in cloze
5. Final target without extra help
```

Example:

```text
Repair: den/dem

1. Dativ Maskulinum DER = dem
2. Akkusativ Maskulinum DER = den
3. Ich helfe ___ Mann. → dem
4. Ich sehe ___ Mann. → den
5. Ich spreche mit ___ Mann. → dem
```

### UX

Results screen recommendation:

```text
Weak point: den/dem
Recommended: 5-item repair
```

### UX pause

Repair should feel helpful, not like detention. Copy should be calm and practical.

### Acceptance criteria

```text
- App recommends repair after repeated error.
- User can start repair immediately.
- Repair round is short.
- Repair uses contrast neighbours.
- Repair completion updates component stats.
```

### Tests

```text
- Generate repeated den/dem error.
- Confirm recommendation appears.
- Start repair.
- Complete repair.
- Confirm stats update.
```

---

# PART G — PROGRESS AND RESULTS

## v49-action-results-screen

### Goal

Make results tell the learner what to do next.

### Layout

```text
Round complete

8 / 10 correct
Due reviews cleared: 6
Weakest point: Dativ Masculine DER

Recommended next:
Do 5-item den/dem repair
```

### Keep secondary

```text
- full heatmap
- detailed mistakes
- long-term stats
- export/import
```

### Remove or avoid

```text
- giant data dumps
- vague tips
- tips that repeat visible text
- too many competing buttons
```

### UX pause

Results screen must be reviewed especially on mobile and short laptop.

### Acceptance criteria

```text
- Summary visible without scrolling on common phones where possible.
- Next action is clear.
- Heatmap is accessible but not overwhelming.
- No generic useless tips.
```

### Tests

```text
- Perfect round.
- Weak round.
- Mixed table/cloze round.
- Arabic UI.
- 320×568 and 1365×599 screenshots.
```

---

## v50-heatmap-v2

### Goal

Make progress heatmaps actionable and recent.

### Features

```text
- Last-20 performance per cell.
- Show "-" if never tested.
- Support DER / EIN / KEIN tabs.
- Case x gender matrix.
- Optional component heatmap for cloze topics.
```

Cell labels:

```text
- 90–100% strong
- 75–89% good
- 50–74% fragile
- below 50% weak
- "-" untested
```

### UX pause

Heatmap should answer: “What should I practise?” If it only looks impressive, it is not good enough.

### Acceptance criteria

```text
- Last-20 logic works.
- Empty cells show "-".
- Cells remain readable in Arabic UI.
- No German table text reverses under RTL.
```

### Tests

```text
- No data.
- Few attempts.
- More than 20 attempts.
- Mixed correct/wrong.
- RTL smoke.
```

---

## v51-leitner-box-overview

### Goal

Show Leitner progress without making it the whole app.

### Features

```text
- Count of items per box.
- Due now count.
- Due soon count.
- Mature count.
- Weak/lapsed count.
```

Optional visual:

```text
Bronze / Silver / Gold row
```

### UX pause

Avoid making the learner chase stars instead of German.

### Acceptance criteria

```text
- Overview available from Results or Progress.
- Due count matches scheduler.
- Box counts persist.
- Small and readable on mobile.
```

### Tests

```text
- Empty state.
- New bank imported.
- Several box states.
- Due now vs due later.
```

---

# PART H — TOPICS, LEVELS, AND CONTENT GROWTH

## v52-topic-practice-mode

### Goal

Allow focused topic practice without corrupting Leitner scheduling.

### Features

```text
- Choose topic.
- Choose level.
- Choose round length.
- Choose support level.
```

Default behaviour:

```text
- one topic
- mixed known/new within safe cap
- limited Leitner progression if too early
```

### Topics to start

```text
A1
- Personal introductions
- Classroom phrases
- Family
- Numbers and age
- Countries and languages
- Daily routine
- Shopping basics
- Food and drink
- Home and rooms
- Appointments

A2
- Work basics
- Travel
- Health
- Directions
- Weather
- Plans
- Past events, carefully scoped

B1 / Bridge
- Bureaucracy
- Workplace communication
- Opinions
- Problems and solutions
- Cause and consequence
- Simple formal messages
```

### UX pause

Do not present 30 topics at once. Start with imported/active topics only.

### Acceptance criteria

```text
- Topic selector only shows available active topics.
- Topic round stays on topic.
- Topic practice labels early practice correctly.
```

### Tests

```text
- One active bank.
- Multiple active banks.
- Disabled bank.
- Topic with too few due items.
```

---

## v53-content-audit-dashboard-devtools

### Goal

Give you control over generated cloze quality.

### Features

In Dev Tools:

```text
- list cloze banks
- show status counts: active/draft/retired
- show items with high warning count
- search by topic/subtopic
- retire item
- reactivate item
- export corrected bank
```

### UX pause

This is for you, not normal learners. Keep it behind Dev Tools.

### Acceptance criteria

```text
- Bad item can be retired without deleting it.
- Retired item never appears in practice.
- Corrected bank can be exported.
```

### Tests

```text
- Retire item.
- Confirm item excluded.
- Reactivate item.
- Export bank.
- Reload persistence.
```

---

## v54-second-bank-and-transfer-test

### Goal

Add a second 100-item bank to prove the system works beyond one topic.

### Suggested second bank

```text
A1/A2 German: Shopping and simple purchases
```

or

```text
A2 German: Appointments and daily logistics
```

### Why

The first bank proves import. The second bank proves topic selection, interleaving, and review scheduling across banks.

### UX pause

Check whether the start screen becomes too busy after multiple banks exist.

### Acceptance criteria

```text
- Two active banks can coexist.
- Due review can interleave across banks.
- Topic practice can isolate one bank.
- Results can show topic weakness.
```

### Tests

```text
- Import second bank.
- Due review across both.
- Topic round bank A.
- Topic round bank B.
- Export/import all progress.
```

---

# PART I — ADVANCED GRAMMAR EXPANSION

## v55-possessive-articles-foundation

### Goal

Add possessive article training as a later layer.

### Scope

Start narrow:

```text
mein / dein / sein / ihr / unser
```

Avoid trying to cover every possessive nuance at once.

### Features

```text
- Add possessive article family.
- Add table cells.
- Add core clozes.
- Add contrast with ein/kein where useful.
```

### UX pause

Possessives increase UI complexity. Consider whether article-family selector needs redesign before adding.

### Acceptance criteria

```text
- Possessive mode can be enabled/disabled.
- Existing DER/EIN/KEIN unaffected.
- Possessive forms correctly tracked separately.
```

### Tests

```text
- Table prompts.
- Cloze prompts.
- Mixed mode.
- Export/import.
- Heatmap behaviour.
```

---

## v56-adjective-endings-layer-1

### Goal

Introduce adjective endings only after article/case core is stable.

### Scope

Layer 1 only:

```text
definite article + adjective + noun
```

Examples:

```text
dem kleinen Kind
den alten Mann
die neue Tasche
```

### Rules

```text
- Mark as bridge.
- Do not mix into core by default.
- Use multi-token answers if necessary.
- Keep nouns familiar.
- Avoid n-declension at first.
```

### UX pause

This is a major cognitive-load increase. Build as an optional bridge module, not default review.

### Acceptance criteria

```text
- Adjective layer off by default.
- Definite-only layer works.
- Feedback explains article signal vs adjective ending.
```

### Tests

```text
- Optional toggle.
- Core mode excludes adjectives.
- Bridge mode includes adjectives.
- Wrong adjective ending feedback.
```

---

## v57-dative-plural-and-no-article-plural

### Goal

Handle plural complexity without confusing core learners.

### Concepts

```text
- dative plural article forms
- dative plural noun -n where applicable
- no-article plural
```

### Rule

Treat this as a bridge module. Do not hide noun-ending requirements inside one-token article clozes.

### UX pause

Check whether learners can tell whether the target is article, noun ending, or both.

### Acceptance criteria

```text
- No-article plural is explicitly taught.
- Dative plural -n is not accidentally hidden.
- Items are marked bridge where needed.
```

### Tests

```text
- Table prompt.
- Clean article-only cloze.
- Multi-token bridge cloze.
- Feedback clarity.
```

---

## v58-genitiv-v2

### Goal

Improve optional Genitiv support without forcing it into the core pool.

### Scope

Keep separate levels:

```text
Off
Basic ownership
Written prepositions
Advanced/written German later
```

Rules:

```text
- Off by default.
- Basic ownership first.
- Written prepositions second.
- Avoid hidden noun/adjective endings in early items.
- Avoid KEIN Genitiv until natural examples exist.
```

### UX pause

Genitiv must feel like an optional serious layer, not random difficulty spikes.

### Acceptance criteria

```text
- Genitiv filters still work.
- Genitiv items never appear when off.
- Genitiv feedback is concise.
- German examples remain natural.
```

### Tests

```text
- Genitiv off.
- Table row only.
- Basic ownership only.
- Written prepositions only.
- Mixed Genitiv options.
```

---

# PART J — POLISH, CONTROL, AND DURABILITY

## v59-devtools-control-centre

### Goal

Make manual development and testing easier.

### Features

```text
- Current source/version display.
- Active banks display.
- Force all due.
- Clear only Leitner state.
- Clear only imported banks.
- Export debug snapshot.
- Show next 10 session candidates.
- Seed random session.
- Inspect current item.
```

### UX pause

Keep it hidden. Do not let Dev Tools clutter learner flow.

### Acceptance criteria

```text
- Dev Tools supports manual testing.
- Dangerous buttons require confirmation.
- Debug snapshot excludes nothing necessary for troubleshooting.
```

### Tests

```text
- Force due.
- Clear banks.
- Clear Leitner.
- Export snapshot.
- Seed session repeatability.
```

---

## v60-accessibility-pass

### Goal

Improve usability for keyboard, focus, contrast, and screen-reader basics.

### Checks

```text
- Logical tab order.
- Visible focus states.
- Buttons have names.
- Modals trap focus where appropriate.
- Escape closes overlays.
- Enter works consistently.
- Colour is not sole feedback channel.
- Text contrast passes practical inspection.
```

### UX pause

Use keyboard-only for a full round. If it feels clumsy, fix it.

### Acceptance criteria

```text
- Full table round keyboard-only.
- Full cloze round keyboard-only.
- Settings usable by keyboard.
- Help modal usable by keyboard.
- No focus lost behind overlay.
```

### Tests

```text
- Keyboard-only smoke.
- Screen-reader label inspection where possible.
- Focus screenshot/visual check.
```

---

## v61-performance-and-storage-pass

### Goal

Prevent localStorage and large cloze banks from making the single-file app sluggish.

### Features/checks

```text
- Measure localStorage size.
- Avoid storing redundant large item data in progress if possible.
- Store bank data separately from review state.
- Avoid repeated expensive full scans during every render.
- Cache candidate pools where safe.
```

### UX pause

Check on lower-end laptop/mobile if possible.

### Acceptance criteria

```text
- App remains responsive with 200+ clozes.
- App remains responsive with 500+ clozes if practical.
- Export does not freeze noticeably for small banks.
```

### Tests

```text
- 100-item bank.
- 200-item bank.
- 500-item synthetic bank if safe.
- Reload time.
- Round start time.
```

---

## v62-final-integration-audit

### Goal

Audit the whole system before treating it as the new stable personal baseline.

### Audit areas

```text
- Case Teaching Tool
- Leitner Clozes
- Repair Mode
- Topic Practice
- New Clozes
- Results
- Heatmaps
- Import/export
- Multilingual UI
- RTL/LTR behaviour
- Responsive behaviour
- Persistence
- Dev Tools
```

### UX pause

This is a full product-judgement pause.

Questions:

```text
- Does the app still feel focused?
- Is the first screen too complicated?
- Is the fixed HUD still helping?
- Is feedback concise?
- Are results actionable?
- Does repair mode feel useful?
- Does the app teach, or only test?
```

### Acceptance criteria

```text
- No known blocker bugs.
- No known data-loss bugs.
- No obvious mobile scroll traps.
- No broken German encoding.
- No Arabic reversal of German content.
- Import/export works.
- Leitner state survives reload.
- Two cloze banks can coexist.
- Results recommend useful next action.
```

### Tests

Run full matrix:

```text
- Syntax check
- Browser smoke test
- Headless screenshot test
- Responsive screenshot test
- localStorage persistence test
- export/import test
- Arabic RTL/LTR test
- content QA sample
- manual visual inspection
- live GitHub Pages test after manual upload
```

---

# 5. Recommended build order summary

Use this order unless a real blocker forces a pivot:

```text
v30  Project guardrails
v31  Source baseline audit
v32  Outer shell UX decision
v33  Knowledge component foundation
v34  Item metadata normalisation
v35  Learner model v2 scaffold
v36  Cloze bank schema
v37  Cloze bank validator
v38  Cloze bank import/activation
v39  First controlled 100-item cloze bank
v40  Basic Leitner state
v41  Due Review mode
v42  New Cloze acquisition mode
v43  Session Builder v1
v44  Case Journeys foundation
v45  Case-to-Cloze bridge
v46  Contrast Drills core
v47  Error Family detection
v48  Focused Repair mode
v49  Action Results screen
v50  Heatmap v2
v51  Leitner Box overview
v52  Topic Practice mode
v53  Content Audit Dev Tools
v54  Second bank + transfer test
v55  Possessive articles foundation
v56  Adjective endings layer 1
v57  Dative plural / no-article plural
v58  Genitiv v2
v59  Dev Tools control centre
v60  Accessibility pass
v61  Performance/storage pass
v62  Final integration audit
```

---

# 6. Phase-level UX/test pauses

These are deliberate pauses over and above normal testing.

## Pause A — After v32

Question:

```text
What is the visual baseline?
```

Decide:

```text
- Keep v29 framed shell
- Adopt v30 flush-canvas shell
- Hybrid: flush setup, framed practice
```

Do not proceed with major engine work until this is settled.

---

## Pause B — After v35

Question:

```text
Is the data model stable enough?
```

Check:

```text
- storage keys
- export/import
- component IDs
- cloze IDs
- migration story
```

Do not build Leitner on unstable IDs.

---

## Pause C — After v39

Question:

```text
Can the app safely ingest generated content?
```

Check:

```text
- validator
- manual item QA
- import/export
- activation/deactivation
```

Do not add multiple banks until one bank behaves cleanly.

---

## Pause D — After v43

Question:

```text
Does the learning system feel deliberate?
```

Check:

```text
- Due Review
- Learn New Clozes
- Topic Practice
- Mixed Mode
- no-due state
- practice-anyway rules
```

Do not build advanced grammar if the basic review engine feels random.

---

## Pause E — After v48

Question:

```text
Is Repair Mode actually useful?
```

Check:

```text
- common errors trigger sensible repair
- repair rounds are short
- feedback is not patronising or verbose
- exact repetition does not become annoying
```

Do not expand content heavily until repair works.

---

## Pause F — After v54

Question:

```text
Does the system scale across topics?
```

Check:

```text
- two banks
- interleaving
- topic isolation
- due review across banks
- results by topic
```

Do not add 1,000 items until two banks work well.

---

## Pause G — After v58

Question:

```text
Are advanced grammar layers controlled?
```

Check:

```text
- possessives off/on
- adjective endings off/on
- Genitiv off/on
- core mode remains clean
```

Do not let bridge/advanced material contaminate core review.

---

## Pause H — After v62

Question:

```text
Is this the new stable personal baseline?
```

Check:

```text
- full test matrix
- manual learning experience
- content quality
- GitHub Pages behaviour
- export/import safety
```

Only after this should the plan pivot toward public release, monetisation, or larger content production.

---

# 7. What not to build yet

Do not build these until the core loop is proven:

```text
- AI grading
- open-ended free writing correction
- accounts
- backend sync
- leaderboards
- public user profiles
- analytics/tracking
- payment or monetisation flow
- full FSRS scheduling
- huge dashboard
- massive cloze dump
- grammar explanations longer than the exercise itself
```

The trap is breadth. The winning version is controlled depth.

---

# 8. Operating rule for future Codex prompts

Every implementation prompt should be narrow.

Template:

```text
Title/version:
Source of truth:
Non-negotiables:
Problem:
Desired behaviour:
UX/pedagogical rationale:
Implementation guidance:
Data/UI changes:
Edge cases:
Acceptance criteria:
Test matrix:
Deliverables:
Changelog draft:
Stopping rule:
```

Stopping rule example:

```text
Stop after this patch is complete. Do not implement adjacent roadmap features. Do not redesign. Do not change storage keys without migration. Do not claim tests passed unless actually run.
```

---

# 9. Strategic end state

The final system should behave like this:

```text
The learner fails:
Ich helfe ___ Kind. → das

The app diagnoses:
- helfen + Dativ
- Dativ Neutrum DER
- possible das/dem confusion

The app responds:
helfen + Dativ → dem Kind

The app schedules:
- exact cloze later
- table form soon
- contrast item
- repair if repeated

The learner later sees:
Dativ Neutrum DER = dem

Then:
Ich fahre mit ___ Taxi. → dem

Then:
Ich sehe ___ Taxi. → das

Result:
The learner is not memorising one sentence.
They are learning the German system.
```

That is the build target.
