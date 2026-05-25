# OZMOSIS SOURCE BRIEF v0.42.3

Version: Working Source Brief Update  
Status: Current planning brief  
Project: Ozmosis - Deutsch Lernen App  
Current known development position: v0.42.3 completed  
Next planned patch: v0.42.4 - Debug Stamp + State Snapshot Export  

Versioning rule:

```txt
Pre-1.0 versions continue numerically as labels:
v0.38, v0.39, v0.40 ... v0.99, v0.100, v0.101, etc.

Do not treat v0.100 as v1.0.
Do not convert v0.99 into v1.0 unless explicitly instructed later.
```

---

# 1. PROJECT IDENTITY

App name: **Ozmosis**

Ozmosis is a static German-learning web app focused on genuine learning, not engagement bait.

The app should help learners improve German through structured practice, sentence control, grammar awareness, error repair, vocabulary activation, and transparent progress tracking.

The current strategic direction is:

- Build an excellent B1-focused learning product first.
- Complete the B1 learning spine before beginning B2 implementation.
- Use B2 as a later sequential expansion, not as a mixed parallel track.
- Prioritise evidence-based learning progress over streaks, XP, gamified pressure, or vague completion percentages.

Ozmosis should feel like a calm diagnostic tutor:

```txt
clear
honest
precise
useful
hard to fool
```

---

# 2. SOURCE-OF-TRUTH HIERARCHY

When Codex, ChatGPT, or any future production chat works on Ozmosis, use this hierarchy:

1. Latest uploaded current project files/package in the active chat.
2. Current repo-root `index.html`.
3. Current `README.md`.
4. Current `CHANGELOG.txt`.
5. Current `AGENTS.md`.
6. Current Codex / Antigravity reports and logs.
7. Current generated content-bank files.
8. Current source brief.
9. Current roadmap document.
10. Older chats, old PDFs, old zips, memory, and historical Kasuskonsole material only as background.

Do not trust stale chats, stale source briefs, or old app versions unless the current repo verifies them.

If uploaded files and memory disagree, current uploaded files win.

---

# 3. TECHNICAL PRODUCT CONSTRAINTS

Ozmosis is currently treated as a static web app.

Core constraints:

- Main deployed file remains `index.html` unless explicitly changed.
- No backend.
- No database.
- No external API dependency.
- No build step unless explicitly approved.
- No framework migration unless explicitly approved.
- No runtime JSON fetch requirement unless explicitly approved.
- Local progress should remain compatible with localStorage-style persistence.
- Static content-bank JS files are acceptable if/when content extraction is needed.
- Splitting content into static JS modules is preferred over introducing backend complexity.
- Any file split must preserve simple deployment.

Preferred long-term structure:

```txt
/index.html
/content/
  ozmosis_b1_*.js
  ozmosis_b1_registry.js
/docs/
  source-brief.md
  roadmap.md
  changelog-notes.md
README.md
CHANGELOG.txt
AGENTS.md
```

But this should be introduced carefully and only when useful.

## Full roadmap location

The detailed version-by-version roadmap lives separately in:

`docs/OZMOSIS_DEVELOPMENT_ROADMAP_v0.42.md`

The Source Brief remains the strategic orientation document. The roadmap is a planning document, not permission for Codex to implement future versions early.

For any Codex task:
- follow the current prompt;
- verify the current repo state;
- implement only the requested version;
- do not run ahead to later roadmap items.

---

# 4. EDUCATIONAL PRINCIPLE

Ozmosis is not primarily an engagement app.

It should not optimise for:

- streak addiction
- XP farming
- leaderboard competition
- empty completion percentages
- cosmetic badges
- false mastery
- "you are fluent now" nonsense
- activity masquerading as learning

Ozmosis should optimise for:

- accurate recall
- durable recall
- sentence control
- grammatical discrimination
- repair ability
- transfer across task types
- learner awareness
- targeted next practice
- transparent progress evidence

Progress should mean:

```txt
The learner can do something more reliably,
with less help,
across more contexts,
and after more time has passed.
```

---

# 5. CORE LEARNING QUESTIONS

Every major progress feature should help answer these questions:

1. What am I learning?
2. What have I already practised?
3. What can I currently do without help?
4. What is weak, unstable, forgotten, or misleadingly easy?
5. What should I practise next?
6. Why is that the right next task?

If a visual does not answer one of these, it is probably decoration.

---

# 6. B1-FIRST / B2-SECOND RULE

Ozmosis follows a strict sequential level model:

```txt
B1 first.
B2 second.
B2 begins only after B1 functional completion.
```

This does not mean every possible B1 topic must be exhausted forever.

It means B1 must become a coherent, stable, diagnostically useful product spine before B2 implementation begins.

B2 content, B2 skill maps, B2 diagnostics, and B2 progress scoring must not be mixed into the learner-facing app until the B1 completion gate has been passed.

B2 may be planned in documentation before then, but should not be built into the active learner flow.

---

# 7. B1 PRODUCT SPINE

B1 is the first complete Ozmosis product track.

B1 must include:

- B1 content banks
- B1 grammar priorities
- B1 sentence-control priorities
- B1 task types
- B1 content metadata
- B1 progress evidence model
- B1 Learning Map
- B1 Skill Matrix
- B1 error-pattern tracking
- B1 weakness repair
- B1 spaced review / durability states
- B1 import/export-safe local progress
- B1 QA and content validation
- B1 learner-facing progress transparency

B1 should focus especially on:

- cases and articles
- nominative, accusative, dative control
- gender/case/article bundles
- pronoun case
- fixed dative and accusative prepositions
- two-way prepositions
- location vs movement
- verb-second main clauses
- verb-final subordinate clauses
- modal verb structures
- separable verbs
- connector syntax and meaning
- weil, dass, obwohl, wenn, damit
- deshalb, deswegen, trotzdem
- sentence repair
- sentence transformation
- controlled production
- short free production
- workplace-style German
- Berufssprachkurs-style practical language

B1 is not complete just because B1 questions exist.

B1 is complete when Ozmosis can show a meaningful, evidence-based picture of a learner's B1 progress.

---

# 8. B2 PRODUCT TRACK

B2 is a later sequential expansion.

B2 should begin only after the B1 Functional Completion Gate is passed.

B2 should eventually include:

- complex connector control
- advanced clause linking
- nominalisation
- formal written German
- register control
- argumentation
- justification
- polite disagreement
- workplace problem-solving
- longer sentence transformation
- extended production
- paraphrasing
- summarising
- complex repair tasks
- B2 Beruf-style communication
- B2 diagnostic progress tracking

B2 must use the same underlying evidence model as B1, but with richer task types and more demanding criteria.

B2 must not contaminate B1 progress scoring.

---

# 9. B1 FUNCTIONAL COMPLETION GATE

B2 implementation remains locked until B1 satisfies the following criteria.

B1 Functional Completion Criteria:

1. **Content coverage**  
   B1 content covers the planned grammar, vocabulary, sentence, repair, transformation, and practical communication targets.

2. **Task variety**  
   B1 includes more than basic cloze or multiple choice. It includes repair, sentence-building, contrast, transformation, and production where feasible.

3. **Metadata quality**  
   B1 items contain enough metadata to support skill mapping, diagnostics, and review.

4. **Progress evidence**  
   The app records enough attempt data to support honest progress claims.

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

# 10. CONTENT ARCHITECTURE

Each content item should support progress mapping.

Required or preferred metadata fields:

```json
{
  "id": "string",
  "levelTrack": "B1",
  "cefrTarget": "B1",
  "taskType": "repair",
  "skillTags": ["case", "dative", "articles", "two-way-prepositions"],
  "grammarFocus": "dative after location use of two-way prepositions",
  "difficultyBand": "B1-core",
  "errorCategories": ["wrong_case", "wrong_article", "motion_location_confusion"],
  "reviewGroup": "dative_location",
  "supportLevel": "typed_recall",
  "prompt": "...",
  "answer": "...",
  "explanation": "..."
}
```

The exact schema can evolve.

The principle must not change:

```txt
Content must be structured enough to support transparent progress evidence.
```

Level tracks:

```txt
B1
B2
preview
diagnostic
review
```

B2 content must not count toward B1 completion unless explicitly marked as non-scoring preview.

---

# 11. TASK TYPES

Current and planned task-type vocabulary should remain consistent.

Core task types:

```txt
Luecke
Satzbau
Reparatur
Umformen
Kontrast
Produktion
```

Suggested technical task-depth categories:

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

The app should not pretend that success in one task type proves success in all task types.

Example:

```txt
A learner may be strong at recognising dative articles in multiple choice
but weak at repairing dative errors in a full sentence.
```

The progress model must preserve that distinction.

---

# 12. PROGRESS MODEL

Ozmosis should use progress states rather than vague percentages.

Preferred skill states:

```txt
Not tested
Introduced
Emerging
Developing
Reliable
Durable
Transfer-ready
Slipping
Misconception likely
Over-practised
```

Definitions:

- **Not tested**  
  No meaningful evidence yet.

- **Introduced**  
  The learner has seen this but has not proved control.

- **Emerging**  
  Some success, likely unstable.

- **Developing**  
  Usable in controlled tasks.

- **Reliable**  
  Successful across multiple attempts and sessions.

- **Durable**  
  Successful after delayed review.

- **Transfer-ready**  
  Successful across multiple task types and mixed contexts.

- **Slipping**  
  Previously stronger, now declining.

- **Misconception likely**  
  Repeated similar errors suggest a false rule or misunderstanding.

- **Over-practised**  
  High success with low learning value if repeated immediately.

Avoid casual use of "mastered."

If "mastered" is ever used, it must have a strict definition.

---

# 13. ATTEMPT DATA

Each attempt should record, where practical:

```txt
itemId
timestamp
sessionId
levelTrack
cefrTarget
taskType
skillTags
grammarFocus
correct / incorrect
selectedAnswer or typedAnswer
expectedAnswer
errorCategory
hintUsed
supportLevel
timeToAnswer
confidenceRating if implemented
reviewInterval
daysSinceLastAttempt
```

The app should not claim progress that the evidence cannot support.

---

# 14. LEARNING MAP

The Learning Map is now a core product feature.

It should show both:

```txt
where the learner has been
where the learner should go next
```

Learning Map v1 should show:

- Current Focus
- Recent Work
- Skill Cluster Status
- Weak Areas
- Next Recommended Practice
- Review Due / Overdue
- Not Enough Evidence states

Example learner-facing language:

```txt
Current focus:
Dative articles after prepositions.

Why:
You are stronger in recognition than in repair.

Next:
8 repair prompts and 4 delayed recall prompts.
```

The Learning Map should be useful before it is beautiful.

Do not build an elaborate visual map before the evidence model can support it.

---

# 15. SKILL MATRIX

The Skill Matrix should distinguish grammar skill from task type.

Example:

```txt
Skill                  Recognition   Cloze   Satzbau   Reparatur   Kontrast   Produktion   Retention
Dative articles         Developing    Mixed   Weak      Weak        Not tested Not tested   Slipping
Verb-final clauses      Reliable      Good    Developing Weak       Developing Weak         Stable
Two-way prepositions    Emerging      Weak    Weak      Weak        Emerging   Not tested   Unstable
```

The Skill Matrix is one of the most important future Ozmosis features.

It prevents the app from collapsing everything into one misleading score.

---

# 16. ERROR PATTERN DETECTION

Ozmosis should eventually identify recurring error patterns such as:

```txt
accusative used where dative is required
dative used where accusative is required
wrong gender but right case
right article family but wrong case
wrong article family
verb not moved to final position
connector meaning understood but syntax wrong
English word order transfer
preposition mismatch
pronoun case confusion
register mismatch
```

Example learner-facing diagnosis:

```txt
Likely pattern:
You are treating location phrases after two-way prepositions as movement phrases.

Try:
contrast prompts for "in dem Park" vs "in den Park."
```

Do not overdiagnose from too little data.

Use "likely" where appropriate.

---

# 17. DURABILITY AND REVIEW

Ozmosis must distinguish immediate correctness from durable learning.

Durability states:

```txt
Fresh
Recalled
Stabilising
Durable
Slipping
Overdue
```

Definitions:

- **Fresh**  
  Correct today but not yet proven over time.

- **Recalled**  
  Correct after a delay.

- **Stabilising**  
  Correct across multiple review intervals.

- **Durable**  
  Correct after longer intervals and varied contexts.

- **Slipping**  
  Recently failed after previous success.

- **Overdue**  
  Due for review according to the review schedule.

Review language should avoid guilt.

Use:

```txt
Due for review
Overdue review
Needs reinforcement
Recently slipped
```

Avoid:

```txt
You forgot this
You failed this
You are bad at this
```

---

# 18. LEARNER-FACING LANGUAGE

Use clear, teacherly language.

Good:

```txt
You are improving at choosing dative articles after fixed dative prepositions.
```

Better:

```txt
You are stronger with fixed dative prepositions than with two-way prepositions in location contexts.
```

Bad:

```txt
Dative level up!
```

Bad:

```txt
You mastered dative!
```

The app should explain why it recommends something.

Example:

```txt
Recommended next:
Repair practice for two-way prepositions.

Why:
You often choose accusative forms in location sentences.
```

---

# 19. NON-NEGOTIABLES

1. B1 comes first.
2. B2 begins only after B1 functional completion.
3. v0.99 continues to v0.100, not v1.0.
4. Do not convert the roadmap to v1.0 unless explicitly instructed.
5. Progress visuals must be evidence-based.
6. Do not use engagement metrics as proxies for learning.
7. Do not claim mastery from immediate correctness.
8. Do not collapse all German into one global score.
9. Do not let B2 content contaminate B1 scoring.
10. Do not build a beautiful map before the data can support it.
11. Prefer transparent rules over opaque "AI says so" scoring.
12. Keep the app static and simple unless explicitly told otherwise.
13. Preserve current working behaviour unless the task specifically changes it.
14. Avoid broad rewrites when a scoped patch is requested.
15. Codex must not roam into unrelated features or files.

---

# 20. UPDATED DEVELOPMENT TIMELINE

## Current status

Current known development state:

```txt
v0.42.3 completed
Next planned patch: v0.42.4 - Debug Stamp + State Snapshot Export
```

The next work should not be a broad rewrite.

The next work should begin the progress-evidence / Learning Map foundation carefully.

---

## v0.40 - v0.49  -  B1 Progress Evidence and Learning Map Foundation

Primary goal:

```txt
Create the foundation for honest B1 progress visibility.
```

### v0.40  -  Progress Evidence Model v1

Implement or prepare basic per-attempt evidence tracking.

Track:

```txt
itemId
timestamp
taskType
skillTags
grammarFocus
levelTrack
correct / incorrect
support or hint use if available
```

Do not yet build a grand dashboard.

First make evidence capturable.

### v0.41  -  B1 Skill Tag Audit

Audit current B1 content and ensure items can map to skill nodes.

Required checks:

```txt
Does each item know what it teaches?
Does each item know what it tests?
Does each item know its task type?
Does each item belong to B1?
```

### v0.42  -  Learning Map Data Scaffold

Create a simple internal structure for Learning Map data.

No complex visuals yet.

Possible clusters:

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
```

### v0.43  -  Learning Map v1 UI

Add first simple Learning Map screen or section.

Show:

```txt
Current Focus
Recent Work
Weak Areas
Next Practice
Review Due
```

Keep it modest.

### v0.44  -  Recent Work View

Show where the learner has been.

Avoid calling recent activity "mastery."

### v0.45  -  Next Recommended Practice v1

Add simple rules-based recommendation logic.

Priority order:

```txt
overdue review
weak skill
under-tested task type
recent misconception pattern
current focus continuation
```

### v0.46  -  Progress State Labels v1

Add early states:

```txt
Not tested
Introduced
Emerging
Developing
```

Do not yet use Reliable/Durable unless review evidence exists.

### v0.47  -  "Not Enough Evidence" Handling

Add explicit "not enough evidence" state.

Do not fake precision.

### v0.48  -  Mobile Layout Pass

Make Learning Map and progress views usable on mobile.

### v0.49  -  Progress Foundation QA

Audit all progress claims.

Remove misleading percentages, inflated language, or unsupported conclusions.

Deliverable:

```txt
B1 has an early but honest progress evidence foundation and a simple Learning Map.
```

---

## v0.50 - v0.59  -  B1 Skill Matrix and Task-Depth Tracking

Primary goal:

```txt
Show that different task types prove different levels of control.
```

### v0.50  -  Formalise Task Depth

Define internal task-depth categories:

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

### v0.51  -  Skill Matrix v1

Add matrix-style progress by skill and task type.

Example:

```txt
Dative articles: strong in cloze, weak in repair.
Verb-final clauses: developing in sentence-building, weak in production.
```

### v0.52  -  Support-Level Tracking

Distinguish:

```txt
multiple choice
hint used
table visible
typed answer
typed answer in mixed context
free production
```

### v0.53  -  Controlled Production Tracking

Add careful tracking for production tasks.

Do not over-score free text if checking is not robust.

### v0.54  -  Repair Mode Strengthening

Ensure repair mode actually tests identifying and fixing errors.

It should not just be another cloze task.

### v0.55  -  Contrast Tasks

Add or strengthen contrast tasks for common confusions:

```txt
dative vs accusative
location vs movement
weil vs deshalb
obwohl vs trotzdem
V2 vs verb-final
fixed preposition vs two-way preposition
```

### v0.56  -  Skill-Task Recommendations

If recognition is strong but repair is weak, recommend repair.

If cloze is strong but production is weak, recommend production.

### v0.57  -  Over-Practised Detection

Flag tasks that are becoming low-yield.

Example:

```txt
You are repeatedly passing this task type. Try repair or production next.
```

### v0.58  -  Skill Matrix QA

Check that skill states are not inflated by easy tasks.

### v0.59  -  Stabilise Skill Matrix

Deliverable:

```txt
B1 progress can show what the learner can do by skill and task depth.
```

---

## v0.60 - v0.69  -  B1 Diagnostic Weakness Repair

Primary goal:

```txt
Turn mistakes into targeted learning routes.
```

### v0.60  -  Error Pattern Detection v1

Add rule-based error pattern detection.

Start simple.

### v0.61  -  Recurring Error Summaries

Show most frequent recent error categories.

### v0.62  -  Misconception Likely State

Add "Misconception likely" only when repeated similar errors support it.

### v0.63  -  Targeted Repair Queue

Route learners from weakness patterns into specific practice.

### v0.64  -  Weakness Explanation Cards

Explain the pattern in plain English.

Example:

```txt
You are choosing accusative in location sentences after two-way prepositions.
```

### v0.65  -  Case / Article Diagnostic Cards

Track:

```txt
wrong case
wrong gender
wrong article family
right case but wrong gender
right gender but wrong case
```

### v0.66  -  Word Order Diagnostic Cards

Track:

```txt
V2 error
verb-final error
connector-driven word-order error
modal structure error
separable verb error
```

### v0.67  -  Connector Diagnostic Cards

Track:

```txt
meaning confusion
syntax confusion
register mismatch
connector position error
```

### v0.68  -  Diagnostic QA

Ensure app does not overdiagnose from limited data.

### v0.69  -  Stabilise Diagnostic Repair

Deliverable:

```txt
B1 can identify recurring weaknesses and recommend targeted repair.
```

---

## v0.70 - v0.79  -  B1 Durability and Review

Primary goal:

```txt
Distinguish short-term correctness from durable learning.
```

### v0.70  -  Durability States v1

Add:

```txt
Fresh
Recalled
Stabilising
Durable
Slipping
Overdue
```

### v0.71  -  Spaced Review Rules v1

Implement simple transparent review scheduling.

Prefer understandable rules over opaque scoring.

### v0.72  -  Retention-Aware Learning Map

Allow skills to slip if delayed recall fails.

### v0.73  -  Review Debt Display

Show due and overdue review.

Keep wording neutral.

### v0.74  -  Retention Column in Skill Matrix

Add retention as a visible dimension.

### v0.75  -  Local Progress Export / Import

Preserve learner progress between devices/builds where practical.

### v0.76  -  Progress Data Integrity Checks

Prevent broken imports from corrupting progress.

### v0.77  -  Learner-Readable Progress Export

Optional but valuable.

Could support:

```txt
ChatGPT tutoring
teacher review
self-reflection
debugging
```

### v0.78  -  Durability QA

Check that durability claims are supported by delayed attempts.

### v0.79  -  Stabilise B1 Review System

Deliverable:

```txt
B1 progress includes memory over time.
```

---

## v0.80 - v0.89  -  B1 Content Coverage and Curriculum Completion

Primary goal:

```txt
Make B1 broad enough and coherent enough to be a real product spine.
```

### v0.80  -  B1 Coverage Audit

Audit B1 content against planned skill clusters.

### v0.81  -  Cases and Articles Completion Pass

Ensure B1 case/article practice is sufficiently covered.

### v0.82  -  Prepositions Completion Pass

Ensure fixed and two-way preposition coverage.

### v0.83  -  Word Order Completion Pass

Ensure V2, verb-final, modal, separable, and connector-driven word-order coverage.

### v0.84  -  Connectors Completion Pass

Ensure major B1 connectors are represented.

### v0.85  -  Repair / Transformation Completion Pass

Ensure repair and transformation tasks are not token features.

### v0.86  -  Production Completion Pass

Ensure controlled production exists where feasible.

### v0.87  -  Beruf / Practical German Pass

Ensure workplace-style and practical communication content is represented.

### v0.88  -  B1 Content QA Batch

Fix:

```txt
ambiguous prompts
wrong answers
bad explanations
duplicate items
mislabelled task types
weak metadata
```

### v0.89  -  B1 Coverage Stabilisation

Deliverable:

```txt
B1 has meaningful content coverage across the intended learning spine.
```

---

## v0.90 - v0.99  -  B1 Completion Gate and UX Polish

Primary goal:

```txt
Prepare B1 for functional completion, without jumping to v1.0.
```

### v0.90  -  B1 Completion Gate Implementation

Add internal checks for B1 readiness.

### v0.91  -  B1/B2 Separation Enforcement

Ensure B2 cannot pollute B1 progress.

### v0.92  -  Learning Map Polish

Improve:

```txt
clarity
mobile layout
information hierarchy
low-noise visual design
```

### v0.93  -  Skill Matrix Polish

Make the matrix understandable without overwhelming the learner.

### v0.94  -  Diagnostic UX Polish

Make weakness explanations concise and useful.

### v0.95  -  Review UX Polish

Make due/overdue review clear without guilt mechanics.

### v0.96  -  Language and Register Polish

Improve learner-facing wording.

Avoid patronising or overexcited copy.

### v0.97  -  Accessibility and Responsiveness Pass

Check:

```txt
keyboard use
contrast
small-screen layout
touch targets
fixed footer/header issues
scroll behaviour
```

### v0.98  -  B1 Source Brief Audit

Check app against this brief.

### v0.99  -  B1 Functional Completion Candidate

This is not v1.0.

This is a candidate checkpoint.

Deliverable:

```txt
B1 may be close to functionally complete, but the roadmap continues to v0.100.
```

---

## v0.100 - v0.109  -  B1 Stabilisation After Completion Candidate

Primary goal:

```txt
Continue pre-1.0 hardening after v0.99.
```

### v0.100  -  B1 Candidate Audit Response

Address findings from the v0.99 completion candidate audit.

### v0.101  -  B1 Data Migration Safety

Ensure progress data survives structural changes.

### v0.102  -  B1 Edge Case Fixes

Fix localStorage, import/export, item ID, and review-state edge cases.

### v0.103  -  B1 Content Integrity Pass

Check content-bank consistency after prior changes.

### v0.104  -  B1 Progress Claim Audit

Verify all learner-facing claims are evidence-supported.

### v0.105  -  B1 Performance Pass

Ensure app remains fast and usable as content grows.

### v0.106  -  B1 Regression Test Pass

Check previous core behaviours still work.

### v0.107  -  B1 Release Candidate 1

Prepare a stable B1 release candidate.

### v0.108  -  B1 Release Candidate Fixes

Address RC1 bugs and issues.

### v0.109  -  B1 Release Candidate 2

Deliverable:

```txt
B1 is stable enough to consider either further pre-1.0 hardening or a deliberate future v1.0 decision.
```

---

## v0.110 - v0.119  -  B2 Readiness Planning Only

Primary goal:

```txt
Plan B2 without destabilising B1.
```

B2 implementation should still remain locked unless the B1 Functional Completion Gate has passed.

### v0.110  -  B2 Readiness Gate Review

Confirm whether B1 truly passed the gate.

### v0.111  -  B2 Source Brief Draft

Define B2 goals and boundaries.

### v0.112  -  B2 Skill Cluster Design

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

### v0.113  -  B2 Metadata Requirements

Define whether B2 requires new metadata fields.

### v0.114  -  B2 Task-Type Design

Define richer B2 tasks.

### v0.115  -  B2 Progress Map Design

Design how B2 extends the Learning Map without hiding B1 weaknesses.

### v0.116  -  B2 Diagnostic Design

Design B2-specific error patterns.

### v0.117  -  B1/B2 Transition UX

Design how the learner sees:

```txt
B1 complete
B1 still weak
B2 locked
B2 preview
B2 ready
```

### v0.118  -  B2 Content Plan

Plan B2 content banks without adding them to active learner scoring.

### v0.119  -  B2 Implementation Decision Point

Only now decide whether B2 implementation begins.

Deliverable:

```txt
B2 is planned safely, but not prematurely mixed into B1.
```

---

## v0.120+  -  B2 Implementation Begins Only If Gate Passed

Primary goal:

```txt
Begin B2 as a sequential expansion after B1 completion.
```

If B1 has not passed the gate, continue B1 work instead.

Possible B2 implementation sequence:

```txt
v0.120 - v0.129  -  B2 content-bank foundation
v0.130 - v0.139  -  B2 Learning Map extension
v0.140 - v0.149  -  B2 Skill Matrix extension
v0.150 - v0.159  -  B2 diagnostic repair
v0.160 - v0.169  -  B2 production and register tasks
v0.170 - v0.179  -  B2 durability and review
v0.180 - v0.189  -  B2 QA and polish
v0.190 - v0.199  -  B2 completion candidate
v0.200+        -  continued pre-1.0 hardening or deliberate v1.0 decision
```

This preserves the established versioning rule.

Do not assume v1.0 at any arbitrary milestone.

---

# 21. IMMEDIATE NEXT STEP

The next appropriate step is v0.42.4.

v0.40 added the first Progress Evidence Model and v0.40.1 added lightweight confidence/guess capture on top of that evidence model.

v0.41 audited B1 skill tags and metadata without building the full Learning Map.

v0.42 added the non-visual Learning Map data scaffold without adding a learner-facing Learning Map UI.

v0.42.1 added the optional 18-item B1 Diagnostic Sprint using existing B1 banks and the existing progress evidence model. Diagnostic results are framed as a starting snapshot, not a test score, and diagnostic evidence feeds the internal Learning Map scaffold without exposing a learner-facing map.

v0.42.2 improved the diagnostic explanation, exit path, result framing, scroll/layout recovery, export/import feedback, and repair-feedback clarity. It also documented deferred decisions: connectors should not enter Today's B1 Sprint until diagnostic/Learning Map targeting can handle them intentionally, and production cards should not become more visible until usefulPhrases/checklists are repaired.

v0.42.3 repaired production-card usefulPhrases/checklists/model answers for the existing Connector, Redemittel, and selected high-yield Wortschatz production cards. Production remains self-marked, conservative practice evidence only; no production route visibility, auto-grading, QR handoff, or Learning Map UI was added.

Safe v0.42.4 scope:

```txt
Add a small debug stamp and state snapshot export for better failure reports.
Keep export/import compatibility intact.
Do not change Today's B1 Sprint connector inclusion.
Do not make production cards more visible.
Do not build the learner-facing Learning Map UI yet.
Preserve diagnostic, evidence, confidence, route, scoring, and content-bank behaviour.
```

Suggested v0.42.4 Codex task summary:

```txt
Add lightweight debug-state reporting for Ozmosis QA and user bug reports.

Do not build the learner-facing Learning Map UI yet.
Do not introduce B2 content.
Do not change the app architecture.
Do not add backend, framework, build step, or external API dependency.

Do not change Today's B1 Sprint composition.
Do not make production cards more prominent.
Preserve all current functionality unless a change is explicitly requested.
```

---

# 22. SHORT SUMMARY

Ozmosis now follows a B1-first, B2-second roadmap.

The roadmap continues:

```txt
v0.99 -> v0.100 -> v0.101 -> ...
```

B1 must become a complete, progress-aware, diagnostically useful learning product before B2 begins.

The next major strand is:

```txt
Progress Evidence Model
-> Learning Map
-> Skill Matrix
-> Error Patterns
-> Durability
-> B1 Completion Gate
-> B2 Readiness
```

Not:

```txt
more content
-> more content
-> more content
-> vague level-up
```
