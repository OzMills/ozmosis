# OZMOSIS Development Roadmap

Version: Working roadmap document  
Status: Current planning roadmap  
Project: Ozmosis — German learning app  
Current known development position: v0.40 completed  
Next planned patch: v0.41 — B1 Skill Tag Audit  
Last updated: 2026-05-25

---

## 0. Purpose of this document

This document is the full version-by-version development roadmap for **Ozmosis**, formerly **Kasuskonsole**.

It is separate from the Source Brief on purpose:

- The **Source Brief** is the strategic constitution: identity, constraints, source-of-truth hierarchy, educational principles, and non-negotiables.
- This **Development Roadmap** is the detailed timeline: what each version is intended to do, why it exists, and what must not be bundled into it.
- `CHANGELOG.txt` records what actually happened.
- `AGENTS.md` gives Codex short durable repo rules.
- The current Codex prompt always overrides future roadmap items for the current patch.

This roadmap is **not permission for Codex to run ahead**.

For any Codex task:

1. Verify the current repo state.
2. Follow the current prompt.
3. Implement only the requested version.
4. Stop at the stopping rule.
5. Do not implement later roadmap items early.

---

## 1. Versioning rule

Ozmosis uses pre-1.0 version labels.

```txt
v0.38, v0.39, v0.40 ... v0.99, v0.100, v0.101, etc.
```

Important:

- Do not treat `v0.100` as `v1.0`.
- Do not convert `v0.99` into `v1.0` automatically.
- Do not force exactly 100 iterations.
- `v1.0` should happen only after a deliberate release decision.
- Patch versions such as `v0.40.1` are allowed for narrow fixes/spikes.

---

## 2. Roadmap principles

Ozmosis is not an engagement app.

It should optimise for:

- accurate recall;
- durable recall;
- sentence control;
- grammatical discrimination;
- repair ability;
- transfer across task types;
- learner awareness;
- targeted next practice;
- transparent progress evidence.

It should not optimise for:

- streak addiction;
- XP farming;
- leaderboard pressure;
- empty completion percentages;
- cosmetic badges;
- false mastery;
- “you are fluent now” claims;
- activity masquerading as learning.

Progress should mean:

```txt
The learner can do something more reliably,
with less help,
across more contexts,
and after more time has passed.
```

---

## 3. Source-of-truth relationship

Use this roadmap below the Source Brief in authority.

Recommended hierarchy:

1. Latest current repo package/current working tree.
2. Repo-root `index.html`.
3. `README.md`.
4. `CHANGELOG.txt`.
5. `AGENTS.md`.
6. Current Codex reports/logs.
7. Current generated content-bank files.
8. Current Source Brief.
9. This roadmap document.
10. Older chats, old PDFs, old zips, memory, and historical Kasuskonsole material only as background.

If this roadmap conflicts with current repo files, current repo files win.

If this roadmap conflicts with the current Codex prompt, the current Codex prompt wins for that task.

---

## 4. B1-first / B2-second rule

Ozmosis follows a strict sequential level model:

```txt
B1 first.
B2 second.
B2 begins only after B1 functional completion.
```

B2 may be planned in documents before then, but B2 content, B2 skill maps, B2 diagnostics, and B2 progress scoring must not be mixed into the active learner-facing flow until the B1 completion gate has passed.

---

## 5. B1 functional completion gate

B2 implementation remains locked until B1 satisfies these criteria:

1. **Content coverage**  
   B1 content covers planned grammar, vocabulary, sentence, repair, transformation, and practical communication targets.

2. **Task variety**  
   B1 includes more than basic cloze or multiple choice. It includes repair, sentence-building, contrast, transformation, and production where feasible.

3. **Metadata quality**  
   B1 items contain enough metadata to support skill mapping, diagnostics, review, and honest progress claims.

4. **Progress evidence**  
   The app records enough attempt data to support honest progress states.

5. **Learning Map**  
   The learner can see what they have practised, where they are now, and what should come next.

6. **Skill Matrix**  
   The app can distinguish performance by skill and task type.

7. **Weakness repair**  
   The app can identify recurring weakness patterns and recommend targeted practice.

8. **Durability**  
   The app can distinguish immediate correctness from delayed recall and slipping knowledge.

9. **Import/export**  
   Local progress can be preserved safely enough for ongoing use.

10. **QA**  
   B1 content, explanations, and progress claims have been audited for obvious defects, misleading wording, stale assumptions, and broken mappings.

Only after this gate is passed should B2 implementation begin.

---

## 6. High-value learning-science additions now included

The roadmap explicitly includes the following previously under-specified areas:

| Practice | Roadmap treatment |
|---|---|
| Baseline diagnostic | Added before serious Learning Map claims. |
| Confidence/calibration | Added as lightweight self-rating/spike after evidence model. |
| Worked examples/fading | Added before harder repair/transfer work. |
| Variant families | Restored as central to avoiding surface-sentence memorisation. |
| Transfer testing | Added per major target and across task depths. |
| Feedback fading | Added as staged feedback logic. |
| Structured interleaving | Added as contrast-based mixing, not random soup. |
| Near-miss error analysis | Added before diagnostic repair deepens. |
| Desirable difficulty guardrails | Added across QA and content design. |
| Self-explanation prompts | Added as constrained reason-choice tasks. |
| Delayed post-tests | Added before durability claims mature. |

---

# 7. Detailed development timeline

## v0.40–v0.49 — B1 progress evidence and Learning Map foundation

Primary goal:

```txt
Create the foundation for honest B1 progress visibility.
```

### v0.40 — Progress Evidence Model v1

Status: completed or current baseline, depending current repo.

Purpose:

- Add additive B1 attempt evidence storage.
- Record what item was attempted, when, what task type it represented, what skill metadata it carried, and whether the learner answered correctly.
- Preserve existing B1 progress storage.
- Preserve export/import compatibility.

Expected evidence fields include:

```txt
itemId
timestamp
sessionId
levelTrack
cefrTarget
taskType
taskDepth
skillTags
grammarFocus
correct / incorrect
attemptContext
confidence
targetId
variantId
surfacePromptHash
errorCategory
nearMissType
reviewInterval
daysSinceLastAttempt
```

Do not build a learner-facing dashboard yet.

### v0.40.1 — Confidence / Guess Tracking Spike

Purpose:

- Decide whether Ozmosis should capture lightweight calibration information.
- Add or prototype a minimal post-answer self-rating only if it does not disrupt practice flow.

Possible labels:

```txt
Sure
Unsure
Guessed
```

Rules:

- Do not infer confidence from correctness or speed.
- Do not make confidence mandatory on every interaction if it creates friction.
- Do not treat confidence as mastery.
- Store confidence as evidence only.

Acceptance focus:

- Learner can optionally indicate certainty.
- Evidence records capture calibration where available.
- Practice flow remains fast.

### v0.41 — B1 Skill Tag Audit

Purpose:

- Audit whether current B1 items know what they teach/test.
- Check skillTags, taskType, grammarFocus, levelTrack, bankKey, and taskDepth coverage.
- Identify metadata gaps before building Learning Map logic.

Questions:

```txt
Does each item know what it teaches?
Does each item know what it tests?
Does each item know its task type?
Does each item belong to B1?
Does it support later progress mapping?
```

Deliverable:

- QA report and/or metadata-gap document.
- No broad content rewrite.
- No full Learning Map UI.

### v0.42 — Learning Map Data Scaffold

Purpose:

- Create internal structures for Learning Map data.
- No complex visual map yet.

Possible B1 clusters:

```txt
Cases
Articles
Prepositions
Word Order
Connectors
Repair
Transformation
Production
Vocabulary
Redemittel
Wortschatz
```

Acceptance focus:

- App can aggregate evidence into simple cluster-level structures.
- No unsupported learner-facing mastery claims.

### v0.42.1 — B1 Diagnostic Entry Sprint

Purpose:

- Add a short baseline diagnostic before serious map claims.
- Calibrate starting evidence instead of assuming every learner starts at zero.

Suggested diagnostic coverage:

```txt
case/articles
prepositions
word order
connectors
Redemittel
Wortschatz
repair
controlled production-readiness
```

Constraints:

- Keep it short, around 18–24 items.
- Do not make it feel like a formal exam.
- Do not use it to unlock B2.
- Store results as diagnostic evidence.

### v0.43 — Learning Map v1 UI

Purpose:

- Add the first modest learner-facing Learning Map screen or section.

Show:

```txt
Current Focus
Recent Work
Weak Areas
Next Practice
Review Due / Not Enough Evidence
```

Rules:

- Useful before beautiful.
- No inflated percentages.
- No “mastered” language.
- Make “Not enough evidence” visible.

### v0.44 — Recent Work View

Purpose:

- Show where the learner has been.
- Separate activity from mastery.

Good labels:

```txt
Recently practised
Recently correct
Recently weak
Recently untested
```

Avoid:

```txt
Completed
Mastered
Fluent
```

### v0.45 — Next Recommended Practice v1

Purpose:

- Add simple rules-based recommendations.

Priority order:

```txt
overdue review
weak skill
under-tested task type
recent misconception pattern
current focus continuation
```

Rules:

- Explain why a recommendation appears.
- Keep recommendations narrow.
- Do not use opaque AI scoring.

### v0.46 — Progress State Labels v1

Purpose:

- Add early progress states.

Allowed early states:

```txt
Not tested
Introduced
Emerging
Developing
```

Do not yet use:

```txt
Reliable
Durable
Transfer-ready
```

unless delayed and cross-context evidence genuinely supports them later.

### v0.47 — “Not Enough Evidence” Handling

Purpose:

- Make uncertainty explicit.
- Prevent the app from fabricating precision.

Acceptance focus:

- Skills with too few attempts show “Not enough evidence”.
- Untested task depths are not hidden.
- Recommendations can say more evidence is needed.

### v0.48 — Mobile Layout Pass for Progress Views

Purpose:

- Make Learning Map/progress views usable on mobile.

Viewports:

```txt
320×568
390×844
430×932
768×1024
1365×599
1440×900
```

Watch for:

- clipped cards;
- fixed footer covering buttons;
- too many columns on phone;
- nested scroll traps;
- unreadable progress labels.

### v0.49 — Progress Foundation QA

Purpose:

- Audit all progress claims.
- Remove misleading percentages, inflated language, or unsupported conclusions.

Deliverable:

```txt
B1 has an early but honest progress evidence foundation and a simple Learning Map.
```

---

## v0.50–v0.59 — B1 Skill Matrix, task-depth tracking, and variant-family foundations

Primary goal:

```txt
Show that different task types prove different levels of control.
```

### v0.50 — Formalise Task Depth

Purpose:

- Define and enforce internal task-depth categories.

Core categories:

```txt
recognition
cloze
sentence_building
repair
transformation
contrast
controlled_production
free_production
review
diagnostic
```

### v0.50.1 — Variant-Family Schema Pilot

Purpose:

- Restore variant families as central.
- Avoid learners memorising one surface sentence rather than the target.

Pilot fields:

```txt
targetId
familyId
variantId
stage / stars
cefr
domain
taskType
taskDepth
surfacePromptHash
contrastTargets
```

Pilot scope:

- Small number of high-value targets.
- No full migration.
- No Leitner scheduling yet.

Suggested first families:

```txt
Antrag stellen
Bescheid bekommen
Widerspruch einlegen
Termin vereinbaren
weil / denn / deshalb
obwohl / trotzdem
```

### v0.51 — Skill Matrix v1

Purpose:

- Add matrix-style progress by skill and task type.

Example:

```txt
Dative articles: strong in cloze, weak in repair.
Verb-final clauses: developing in sentence-building, weak in production.
```

Rules:

- Do not collapse all German into one global score.
- Show task-depth differences.
- Include “not tested”.

### v0.52 — Support-Level Tracking

Purpose:

- Distinguish how much help the learner had.

Support levels may include:

```txt
multiple choice
hint used
table visible
English support visible
typed answer
typed answer in mixed context
free production
```

### v0.52.1 — Worked Example → Faded Cloze Pattern

Purpose:

- Add a structured scaffolding path:

```txt
worked example
→ faded example
→ supported cloze
→ independent cloze
→ mixed transfer
```

Example:

```txt
Worked example:
Ich helfe dem Kind.
helfen takes dative; Kind is neuter; der → dem.

Faded cloze:
Ich helfe ___ Kind.
helfen takes dative; Kind is neuter.

Independent cloze:
Ich helfe ___ Kind.
```

Rules:

- Do not turn every item into a lesson page.
- Use only where scaffolding helps schema-building.
- Keep cognitive load low.

### v0.53 — Controlled Production Tracking

Purpose:

- Track controlled production without fake free-text grading.

Use:

```txt
prompt
useful phrases
checklist
model answer
mark practised / needs review
```

Do not claim automatic correctness unless the answer is actually checkable.

### v0.54 — Repair Mode Strengthening

Purpose:

- Ensure repair mode tests identifying and fixing errors.
- Do not let repair collapse into ordinary cloze.

Repair should support:

```txt
find the broken part
correct the sentence
compare with model
record error category when possible
```

### v0.55 — Contrast Tasks

Purpose:

- Add or strengthen contrast tasks for common confusions.

Contrast sets:

```txt
dative vs accusative
location vs movement
weil vs denn vs deshalb
obwohl vs trotzdem
V2 vs verb-final
fixed preposition vs two-way preposition
Antrag vs Formular vs Bescheid
```

### v0.56 — Skill-Task Recommendations

Purpose:

- Recommend next task type based on evidence.

Examples:

```txt
Recognition strong, repair weak → recommend repair.
Cloze strong, production weak → recommend controlled production.
Connector meaning strong, word order weak → recommend word-order cloze.
```

### v0.56.1 — Feedback Fading Rules

Purpose:

- Add staged feedback logic.

Feedback stages:

```txt
early: explicit correction + micro-rule
middle: guided noticing prompt
later: minimal feedback, explanation on demand
```

Rules:

- Do not hide useful feedback too early.
- Do not over-explain items the learner repeatedly passes.
- Keep “Teach me” available where relevant.

### v0.57 — Over-Practised Detection

Purpose:

- Flag tasks becoming low-yield.

Example:

```txt
You are repeatedly passing this task type. Try repair or production next.
```

Do not use guilt language.

### v0.57.1 — Structured Interleaving Policy

Purpose:

- Define contrast-based mixing rules.

Good interleaving:

```txt
weil vs denn vs deshalb
obwohl vs trotzdem
in dem Park vs in den Park
Antrag vs Formular vs Bescheid
```

Bad interleaving:

```txt
random mixed B1 soup
```

Rules:

- Interleave confusable neighbours.
- Keep Today’s Sprint low-load.
- Avoid hidden multi-skill traps.

### v0.58 — Skill Matrix QA

Purpose:

- Check that skill states are not inflated by easy tasks.

Audit:

```txt
Do multiple-choice successes inflate repair skill?
Does cloze success imply production? It should not.
Are unsupported states shown as Not tested?
```

### v0.59 — Stabilise Skill Matrix

Deliverable:

```txt
B1 progress can show what the learner can do by skill and task depth.
```

---

## v0.60–v0.69 — B1 diagnostic weakness repair

Primary goal:

```txt
Turn mistakes into targeted learning routes.
```

### v0.60 — Error Pattern Detection v1

Purpose:

- Add simple rule-based error pattern detection.

Start with conservative patterns only.

### v0.60.1 — Near-Miss Error Categories

Purpose:

- Prepare richer error classification.

Examples:

```txt
wrong case
wrong gender
wrong article family
right case but wrong gender
right gender but wrong case
right article family but wrong case
connector meaning correct but syntax wrong
```

Rules:

- Do not overdiagnose.
- Store near-miss categories only when reliable.
- Use “likely” language where needed.

### v0.61 — Recurring Error Summaries

Purpose:

- Show most frequent recent error categories.

Avoid:

```txt
You are bad at dative.
```

Prefer:

```txt
Recent pattern: location sentences after two-way prepositions often get accusative forms.
```

### v0.62 — Misconception Likely State

Purpose:

- Add “Misconception likely” only when repeated similar errors support it.

Rules:

- Do not infer from one mistake.
- Show why the app thinks this.
- Recommend specific repair.

### v0.63 — Targeted Repair Queue

Purpose:

- Route learners from weakness patterns into specific practice.

Example:

```txt
Pattern: location/movement confusion.
Queue: two-way preposition contrast and repair.
```

### v0.64 — Weakness Explanation Cards

Purpose:

- Explain the pattern in plain English.

Example:

```txt
You are choosing accusative in location sentences after two-way prepositions.
```

### v0.65 — Case / Article Diagnostic Cards

Track:

```txt
wrong case
wrong gender
wrong article family
right case but wrong gender
right gender but wrong case
```

### v0.66 — Word Order Diagnostic Cards

Track:

```txt
V2 error
verb-final error
connector-driven word-order error
modal structure error
separable verb error
```

### v0.67 — Connector Diagnostic Cards

Track:

```txt
meaning confusion
syntax confusion
register mismatch
connector position error
```

### v0.68 — Diagnostic QA

Purpose:

- Ensure the app does not overdiagnose from limited data.
- Confirm diagnostic language remains honest and useful.

### v0.69 — Stabilise Diagnostic Repair

Deliverable:

```txt
B1 can identify recurring weaknesses and recommend targeted repair.
```

---

## v0.70–v0.79 — B1 durability and review

Primary goal:

```txt
Distinguish short-term correctness from durable learning.
```

### v0.70 — Durability States v1

Add:

```txt
Fresh
Recalled
Stabilising
Durable
Slipping
Overdue
```

Do not use Durable without delayed evidence.

### v0.70.1 — Delayed Post-Test Rules

Purpose:

- Define what counts as delayed recall.
- Prevent premature durability claims.

Possible evidence:

```txt
first correct
correct after 1 day
correct after 3+ days
failed after previous success
correct in different task type after delay
```

Rule:

```txt
No Reliable/Durable claims without delayed and/or varied-context evidence.
```

### v0.71 — Spaced Review Rules v1

Purpose:

- Implement simple transparent review scheduling.

Prefer understandable rules over opaque scoring.

### v0.72 — Retention-Aware Learning Map

Purpose:

- Allow skills to slip if delayed recall fails.
- Show freshness separately from durable knowledge.

### v0.73 — Review Debt Display

Purpose:

- Show due and overdue review.

Use neutral wording:

```txt
Due for review
Overdue review
Needs reinforcement
Recently slipped
```

Avoid guilt mechanics.

### v0.74 — Retention Column in Skill Matrix

Purpose:

- Add retention as a visible dimension.

### v0.75 — Local Progress Export / Import Hardening

Purpose:

- Preserve learner progress between devices/builds where practical.
- Harden export/import as progress data becomes more complex.

### v0.76 — Progress Data Integrity Checks

Purpose:

- Prevent broken imports from corrupting progress.
- Validate evidence, review states, and skill records.

### v0.77 — Learner-Readable Progress Export

Purpose:

- Optional but valuable learner-facing progress export.

May support:

```txt
ChatGPT tutoring
teacher review
self-reflection
debugging
```

### v0.78 — Durability QA

Purpose:

- Check that durability claims are supported by delayed attempts.

### v0.79 — Stabilise B1 Review System

Deliverable:

```txt
B1 progress includes memory over time.
```

---

## v0.80–v0.89 — B1 content coverage and curriculum completion

Primary goal:

```txt
Make B1 broad enough and coherent enough to be a real product spine.
```

### v0.80 — B1 Coverage Audit

Purpose:

- Audit B1 content against planned skill clusters.

### v0.81 — Cases and Articles Completion Pass

Ensure sufficient coverage for:

```txt
nominative
accusative
dative
article families
gender/case/article bundles
pronoun case
```

### v0.82 — Prepositions Completion Pass

Ensure coverage for:

```txt
fixed dative prepositions
fixed accusative prepositions
two-way prepositions
location vs movement
temporal prepositions
local prepositions
```

### v0.83 — Word Order Completion Pass

Ensure coverage for:

```txt
V2
verb-final subordinate clauses
modal structures
separable verbs
connector-driven word order
sentence repair
```

### v0.84 — Connectors Completion Pass

Ensure coverage for:

```txt
weil
denn
deshalb / deswegen
obwohl
trotzdem
damit
um ... zu
wenn
als
während
bevor
nachdem
seitdem
bis
solange
```

### v0.85 — Repair / Transformation Completion Pass

Purpose:

- Ensure repair and transformation tasks are not token features.

### v0.86 — Production Completion Pass

Purpose:

- Ensure controlled production exists where feasible.

### v0.87 — Beruf / Practical German Pass

Ensure workplace and practical communication coverage:

```txt
applications
appointments
illness
insurance
complaints
orders
office communication
technical problems
bureaucracy
```

### v0.88 — B1 Content QA Batch

Fix:

```txt
ambiguous prompts
wrong answers
bad explanations
duplicate items
mislabelled task types
weak metadata
undesirable difficulty
```

### v0.89 — B1 Coverage Stabilisation

Deliverable:

```txt
B1 has meaningful content coverage across the intended learning spine.
```

---

## v0.90–v0.99 — B1 completion gate and UX polish

Primary goal:

```txt
Prepare B1 for functional completion, without jumping to v1.0.
```

### v0.90 — B1 Completion Gate Implementation

Purpose:

- Add internal checks for B1 readiness.

### v0.91 — B1/B2 Separation Enforcement

Purpose:

- Ensure B2 cannot pollute B1 progress.

### v0.92 — Learning Map Polish

Improve:

```txt
clarity
mobile layout
information hierarchy
low-noise visual design
```

### v0.93 — Skill Matrix Polish

Purpose:

- Make the matrix understandable without overwhelming the learner.

### v0.94 — Diagnostic UX Polish

Purpose:

- Make weakness explanations concise and useful.

### v0.95 — Review UX Polish

Purpose:

- Make due/overdue review clear without guilt mechanics.

### v0.96 — Language and Register Polish

Purpose:

- Improve learner-facing wording.
- Avoid patronising or overexcited copy.

### v0.97 — Accessibility and Responsiveness Pass

Check:

```txt
keyboard use
contrast
small-screen layout
touch targets
fixed footer/header issues
scroll behaviour
Arabic RTL / German LTR
```

### v0.98 — B1 Source Brief Audit

Purpose:

- Check app against Source Brief and roadmap.

### v0.99 — B1 Functional Completion Candidate

This is not v1.0.

Deliverable:

```txt
B1 may be close to functionally complete, but the roadmap continues to v0.100.
```

---

## v0.100–v0.109 — B1 stabilisation after completion candidate

Primary goal:

```txt
Continue pre-1.0 hardening after v0.99.
```

### v0.100 — B1 Candidate Audit Response

Address findings from the v0.99 completion candidate audit.

### v0.101 — B1 Data Migration Safety

Ensure progress data survives structural changes.

### v0.102 — B1 Edge Case Fixes

Fix:

```txt
localStorage issues
import/export issues
item ID issues
review-state edge cases
migration edge cases
```

### v0.103 — B1 Content Integrity Pass

Check content-bank consistency after prior changes.

### v0.104 — B1 Progress Claim Audit

Verify all learner-facing claims are evidence-supported.

### v0.105 — B1 Performance Pass

Ensure the app remains fast and usable as content grows.

### v0.106 — B1 Regression Test Pass

Check previous core behaviours still work.

### v0.107 — B1 Release Candidate 1

Prepare a stable B1 release candidate.

### v0.108 — B1 Release Candidate Fixes

Address RC1 bugs and issues.

### v0.109 — B1 Release Candidate 2

Deliverable:

```txt
B1 is stable enough to consider either further pre-1.0 hardening or a deliberate future v1.0 decision.
```

---

## v0.110–v0.119 — B2 readiness planning only

Primary goal:

```txt
Plan B2 without destabilising B1.
```

B2 implementation remains locked unless the B1 Functional Completion Gate has passed.

### v0.110 — B2 Readiness Gate Review

Confirm whether B1 truly passed the gate.

### v0.111 — B2 Source Brief Draft

Define B2 goals and boundaries.

### v0.112 — B2 Skill Cluster Design

Possible B2 clusters:

```txt
advanced connectors
formal written German
nominalisation
argumentation
extended production
register control
workplace problem solving
paraphrasing
summarising
complex repair
```

### v0.113 — B2 Metadata Requirements

Define whether B2 requires new metadata fields.

### v0.114 — B2 Task-Type Design

Define richer B2 tasks.

### v0.115 — B2 Progress Map Design

Design how B2 extends the Learning Map without hiding B1 weaknesses.

### v0.116 — B2 Diagnostic Design

Design B2-specific error patterns.

### v0.117 — B1/B2 Transition UX

Design how the learner sees:

```txt
B1 complete
B1 still weak
B2 locked
B2 preview
B2 ready
```

### v0.118 — B2 Content Plan

Plan B2 content banks without adding them to active learner scoring.

### v0.119 — B2 Implementation Decision Point

Only now decide whether B2 implementation begins.

Deliverable:

```txt
B2 is planned safely, but not prematurely mixed into B1.
```

---

## v0.120+ — B2 implementation begins only if gate passed

Primary goal:

```txt
Begin B2 as a sequential expansion after B1 completion.
```

If B1 has not passed the gate, continue B1 work instead.

Possible B2 implementation sequence:

```txt
v0.120–v0.129 — B2 content-bank foundation
v0.130–v0.139 — B2 Learning Map extension
v0.140–v0.149 — B2 Skill Matrix extension
v0.150–v0.159 — B2 diagnostic repair
v0.160–v0.169 — B2 production and register tasks
v0.170–v0.179 — B2 durability and review
v0.180–v0.189 — B2 QA and polish
v0.190–v0.199 — B2 completion candidate
v0.200+       — continued pre-1.0 hardening or deliberate v1.0 decision
```

Do not assume v1.0 at any arbitrary milestone.

---

# 8. ChatGPT vs Codex responsibilities

## ChatGPT should usually do

```txt
roadmap reasoning
source brief updates
Codex prompt creation
pedagogical design
German correctness review
content strategy
schema design
QA report interpretation
risk assessment
next-step decisions
```

## Codex should usually do

```txt
repo inspection
file edits
implementation
static checks
browser smoke tests
route smoke tests
localStorage/export/import tests
QA report generation
version/doc updates
packaging output
```

## Codex should not decide alone

```txt
new pedagogical architecture
whether to add B2
whether to redesign
whether to change storage keys
whether to add dependencies
whether to add runtime AI
whether to change the app’s product direction
whether to run ahead to later roadmap versions
```

---

# 9. Current immediate sequence

Current known position:

```txt
v0.40 completed
Next planned patch: v0.41 — B1 Skill Tag Audit
```

Immediate sequence:

```txt
v0.41 — B1 Skill Tag Audit
v0.42 — Learning Map Data Scaffold
v0.42.1 — B1 Diagnostic Entry Sprint
v0.43 — Learning Map v1 UI
v0.44 — Recent Work View
v0.45 — Next Recommended Practice v1
v0.46 — Progress State Labels v1
v0.47 — Not Enough Evidence Handling
v0.48 — Mobile Layout Pass
v0.49 — Progress Foundation QA
```

Do not jump to more content before the progress/metadata foundation can support honest decisions.

---

# 10. Short summary

Ozmosis now follows this development spine:

```txt
Progress Evidence Model
→ Skill Tag Audit
→ Learning Map Scaffold
→ Diagnostic Entry Sprint
→ Learning Map UI
→ Skill Matrix
→ Variant Families
→ Feedback Fading
→ Structured Interleaving
→ Error Patterns
→ Near-Miss Analysis
→ Durability
→ B1 Completion Gate
→ B2 Readiness
```

Not:

```txt
more content
→ more content
→ more content
→ vague level-up
```

The next work should remain narrow:

```txt
v0.41 — B1 Skill Tag Audit
```

No B2 implementation yet.
