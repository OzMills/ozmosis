# **OZMOSIS B1 Progress Path and Star-Gated Category System v0.1**  
  
**Status:** Planning source document  
  
**Project:** Ozmosis — German B1/B1+ learning app  
  
**Scope:** User-facing B1 path nomenclature, star-based repetition model, category/tag progress percentages, soft unlock rules, task-type breadth, landing-page placement, Learning Map placement, internal data model, implementation phasing, and validation requirements.  
  
**Intended use:** Add this file to Ozmosis project sources so future ChatGPT / Pro / Codex planning work can use it when designing progress, route structure, Learning Map, landing page, review logic, and unlock behaviour.  
⸻  
## **0. Executive Summary**  
  
Ozmosis should give the learner a clear, honest sense of how far they are through B1 practice.  
  
The proposed system is a **B1 Progress Path** made from numbered, user-facing learning areas such as:  
  
```
B1.1 Practical Admin
B1.1.1 Appointments
B1.1.2 Callbacks
B1.1.3 Availability

```
  
  
These path entries should appear on the landing/tool hub underneath **Recommended Task**, giving the user a visible route through B1.  
  
Progress should use a star ladder based on successful completions:  
  
```
1★ = got right once
2★ = got right twice
3★ = got right 3 times
4★ = got right 4 times
5★ = got right 5 times

```
  
  
For every category, subcategory, tag, and all of B1, Ozmosis can show the percentage of targets that have reached each star level.  
  
The system should guide progression, not trap the learner. Later categories can be recommended only after enough progress in earlier categories, but the learner should be allowed to unlock early with a confirmation dialogue.  
  
The system must never claim mastery, fluency, exam readiness, or certification.  
⸻  
## **1. Product Purpose**  
  
### **1.1 What This Feature Is For**  
  
This feature should answer:  
  
```
Where am I in B1?
What should I practise next?
How much of this area have I got right at least once?
How much have I repeated successfully?
Which task types have I practised?
Which categories are ready to continue?
Which areas still need repair?

```
  
  
### **1.2 What This Feature Is Not**  
  
This feature is not:  
  
```
a mastery score
a fluency score
an exam-readiness score
a public certificate
a full Leitner scheduler yet
a replacement for tutor judgement
a gamification/streak addiction layer

```
  
  
### **1.3 Core Product Contract**  
  
```
The learner sees a clear route through B1.
The learner sees how much of each area they have got right repeatedly.
The app rewards repeated success, not raw exposure.
The app requires breadth across task types before recommending progression.
The learner can override the path when needed.
The app never claims mastery or exam readiness from stars.
The UI uses plain user language, not internal evidence jargon.

```
  
⸻  
## **2. User-Facing Language**  
  
Use simple user terms.  
  
### **2.1 Use These Terms**  
  
```
Your B1 Progress
B1 Path
Category Progress
Skill Progress
Practice Progress
Stars
Got right once
Got right twice
Got right 3 times
Got right 4 times
Got right 5 times
Types practised
Ready to continue
Keep practising
Unlock anyway
Recommended Task
Recommended next

```
  
  
### **2.2 Avoid These Terms in the UI**  
  
```
Evidence Coverage
Target Family
Task-Type Breadth
Review Eligibility
Support Policy
Leitner Threshold
Mastery
Certified
Exam ready
Fluent
Competency guarantee

```
  
  
Internal documentation may use technical terms, but learner-facing UI should not.  
  
### **2.3 Disclaimer Copy**  
  
Short version:  
  
```
Stars guide practice. They are not a mastery or exam-readiness score.

```
  
  
Long version:  
  
```
Stars show how often you have answered correctly in Ozmosis. They help guide practice, but they do not prove mastery, fluency, or exam readiness.

```
  
  
Use this in expanded detail views, not constantly on every card.  
⸻  
## **3. Numbered B1 Path Structure**  
  
### **3.1 Why Number the Path?**  
  
Numbering gives the learner a clear route and makes the app feel like a coherent learning instrument rather than a pile of unrelated practice buttons.  
  
Recommended pattern:  
  
```
B1.[major area].[subcategory]

```
  
  
Examples:  
  
```
B1.1 Practical Admin
B1.1.1 Appointments
B1.1.2 Callbacks
B1.1.3 Availability

```
  
  
### **3.2 Internal vs User-Facing IDs**  
  
Keep stable internal IDs and clear user-facing path labels.  
  
Example:  
  
```
categoryId: CAT01
pathId: B1.1
pathLabel: Practical Admin
subcategoryId: B1.1.1
subcategoryLabel: Appointments
displayTitle: B1.1.1 Appointments

```
  
  
This avoids breaking internal content while making the learner-facing route clearer.  
⸻  
## **4. Draft B1 Path Map**  
  
This is a draft. It can be revised after the complete content bank is built.  
  
### **B1.1 Practical Admin and Appointments**  
  
```
B1.1.1 Appointments
B1.1.2 Callbacks
B1.1.3 Availability
B1.1.4 Rescheduling
B1.1.5 Confirming details

```
  
  
### **B1.2 Course and Work Starting Point**  
  
```
B1.2.1 Introducing yourself
B1.2.2 Course language
B1.2.3 Work basics
B1.2.4 Asking for help
B1.2.5 Materials and documents

```
  
  
### **B1.3 Job Search and Offices**  
  
```
B1.3.1 Looking for work
B1.3.2 Offices and departments
B1.3.3 Responsibilities
B1.3.4 Job adverts
B1.3.5 Asking for information

```
  
  
### **B1.4 Applications and Interviews**  
  
```
B1.4.1 Application documents
B1.4.2 Application phrases
B1.4.3 Interviews
B1.4.4 Strengths and experience
B1.4.5 Follow-up messages

```
  
  
### **B1.5 First Day and Contract Basics**  
  
```
B1.5.1 First day at work
B1.5.2 Contract basics
B1.5.3 Working hours
B1.5.4 Trial period
B1.5.5 Duties and rules

```
  
  
### **B1.6 Sick Leave, Doctor, and Insurance**  
  
```
B1.6.1 Reporting sick
B1.6.2 Doctor appointments
B1.6.3 Symptoms
B1.6.4 Certificates and proof
B1.6.5 Insurance basics

```
  
  
### **B1.7 Meetings and Leave Requests**  
  
```
B1.7.1 Meetings
B1.7.2 Giving opinions
B1.7.3 Asking for leave
B1.7.4 Agreeing and disagreeing
B1.7.5 Follow-up tasks

```
  
  
### **B1.8 Orders and Delivery**  
  
```
B1.8.1 Orders
B1.8.2 Delivery
B1.8.3 Invoices
B1.8.4 Damaged goods
B1.8.5 Checking details

```
  
  
### **B1.9 Complaints and Customer Service**  
  
```
B1.9.1 Complaints
B1.9.2 Describing problems
B1.9.3 Requesting a solution
B1.9.4 Apologies
B1.9.5 Polite but firm tone

```
  
  
### **B1.10 Technical Problems**  
  
```
B1.10.1 Devices and apps
B1.10.2 Error messages
B1.10.3 Internet and access
B1.10.4 Explaining what happened
B1.10.5 Asking for support

```
  
  
### **B1.11 Colleague Feedback and Conflict**  
  
```
B1.11.1 Giving feedback
B1.11.2 Receiving feedback
B1.11.3 Disagreeing politely
B1.11.4 Apologising and repairing
B1.11.5 Setting boundaries

```
  
  
### **B1.12 Forms, Admin, and Certificates**  
  
```
B1.12.1 Forms
B1.12.2 Applications and requests
B1.12.3 Certificates and proof
B1.12.4 Deadlines
B1.12.5 Official replies

```
  
  
### **B1.13 Learning and Exam Language**  
  
```
B1.13.1 Tasks and instructions
B1.13.2 Asking for explanation
B1.13.3 Talking about mistakes
B1.13.4 Exam preparation
B1.13.5 Progress and review

```
  
  
### **B1.14 Connectors and Sentence Functions**  
  
```
B1.14.1 Reasons: weil, denn, deshalb
B1.14.2 Contrast: obwohl, trotzdem
B1.14.3 Time: wenn, als, bevor, nachdem
B1.14.4 Purpose: damit, um ... zu
B1.14.5 Word order after connectors

```
  
  
### **B1.15 Time, Place, and Movement**  
  
```
B1.15.1 Time phrases
B1.15.2 Places
B1.15.3 Movement and direction
B1.15.4 Wechselpräpositionen
B1.15.5 Local and temporal prepositions

```
  
  
### **B1.16 Money, Payment, and Contracts**  
  
```
B1.16.1 Payment
B1.16.2 Charges and fees
B1.16.3 Contract conditions
B1.16.4 Cancellation
B1.16.5 Written confirmation

```
  
  
### **B1.17 Home, Family, and Daily Life Support**  
  
```
B1.17.1 Household
B1.17.2 Family logistics
B1.17.3 Kindergarten and school
B1.17.4 Neighbourhood
B1.17.5 Everyday problems

```
  
  
### **B1.18 B1→B2 Bridge Preview**  
  
```
B1.18.1 More formal phrasing
B1.18.2 Longer explanations
B1.18.3 Nuanced disagreement
B1.18.4 Written German preview
B1.18.5 B2 preview tasks

```
  
  
B1.18 must be labelled as preview/bridge, not default B1 core progress.  
⸻  
## **5. Star Ladder**  
  
Stars are based on successful completions.  

| Stars | User-facing meaning | Internal rule     |
| ----- | ------------------- | ----------------- |
| 0★    | Not yet correct     | Correct count = 0 |
| 1★    | Got right once      | Correct count ≥ 1 |
| 2★    | Got right twice     | Correct count ≥ 2 |
| 3★    | Got right 3 times   | Correct count ≥ 3 |
| 4★    | Got right 4 times   | Correct count ≥ 4 |
| 5★    | Got right 5 times   | Correct count ≥ 5 |
  
  
Do not call 5★ mastered. Use:  
  
```
Got right 5 times

```
  
  
or:  
  
```
Well practised

```
  
  
Only use “Well practised” if paired with the non-mastery disclaimer.  
⸻  
## **6. What Gets Stars?**  
  
Primary recommendation:  
  
```
Stars belong to target families / practice targets, not raw task cards.

```
  
  
A target can have many practice variants, but it still counts as one target in progress percentages.  
  
Example target families:  
  
```
einen Termin vereinbaren
um Rückruf bitten
weil word order
sich um eine Stelle bewerben
eine Beschwerde einreichen
dative after helfen

```
  
  
Raw tasks are the exercises used to train the target.  
  
### **6.1 Correct Counts**  
  
For auto-graded tasks, increment correct count when:  
  
```
the answer is correct
the task maps to a valid target family / practice target
the attempt is not just Teach me / revealed answer

```
  
  
### **6.2 Production**  
  
Production is self-marked.  
  
Production may track:  
  
```
practisedCount
lastPractisedAt

```
  
  
Production should not create correctness stars unless a future externally reviewed mode is explicitly designed and approved.  
  
### **6.3 Assisted Attempts**  
  
Teach me / reveal / answer support should not count as normal successful completion.  
  
Record separately:  
  
```
teachMeCount
assistedAttemptCount
supportUsed
translationShownBeforeAnswer

```
  
  
### **6.4 Guessed Correct Answers**  
  
Correct guessed answers can count toward the star ladder, but they should raise review priority.  
  
Recommended behaviour:  
  
```
correct + guessed = increment correct count, increase review priority
correct + unsure = increment correct count, mild review priority
correct + knew it = increment correct count, normal review priority
wrong + thought I knew it = high review priority

```
  
  
Do not overcomplicate this in the MVP.  
⸻  
## **7. Percentages**  
  
For each scope, show cumulative star percentages.  
  
Scopes:  
  
```
all B1
major path area, e.g. B1.1 Practical Admin
subcategory, e.g. B1.1.1 Appointments
tag, e.g. collocations / connectors / polite requests
task type, in expanded detail only

```
  
  
### **7.1 Formula**  
  
```
percentAt1Star = targets with starLevel >= 1 / total targets in scope
percentAt2Stars = targets with starLevel >= 2 / total targets in scope
percentAt3Stars = targets with starLevel >= 3 / total targets in scope
percentAt4Stars = targets with starLevel >= 4 / total targets in scope
percentAt5Stars = targets with starLevel >= 5 / total targets in scope

```
  
  
### **7.2 Denominator**  
  
Default denominator:  
  
```
core practice targets / target families

```
  
  
Do not use:  
  
```
raw attempts
raw variants
raw item cards

```
  
  
Reason:  
  
```
A target with 12 variants should not count as 12 times more important than a target with 3 variants.

```
  
  
### **7.3 Example Category Display**  
  
```
B1.1.1 Appointments

Got right once       62%
Got right twice      38%
Got right 3 times    19%
Got right 4 times     8%
Got right 5 times     2%

```
  
  
### **7.4 Example All-B1 Display**  
  
```
Your B1 Progress

Got right once       31%
Got right twice      18%
Got right 3 times     9%
Got right 4 times     3%
Got right 5 times     1%

```
  
⸻  
## **8. Task-Type Breadth Requirement**  
  
Unlocking the next category should require both:  
  
```
percentage progress
task-type breadth

```
  
  
This prevents a user from unlocking the next category by only doing easy choice tasks.  
  
### **8.1 Required Auto-Graded Task Types**  
  
Possible required task types:  
  
```
Choice / Contrast
Cloze
Repair
Satzbau
Case/Table, where relevant

```
  
  
### **8.2 Self-Marked Task Types**  
  
```
Production

```
  
  
Production can be required as “practised”, not as “correct”.  
  
### **8.3 Breadth Rule**  
  
For each required auto-graded task type:  
  
```
at least one successful task at the required star level

```
  
  
For production:  
  
```
at least one production card marked practised, if production is required

```
  
  
### **8.4 Example CAT01 Requirement**  
  
If CAT01 requires:  
  
```
Choice / Contrast
Cloze
Repair
Satzbau
Production

```
  
  
Then recommended unlock for CAT02 requires:  
  
```
CAT01 has at least 50% of core targets at ≥1★
Choice / Contrast has at least one success at ≥1★
Cloze has at least one success at ≥1★
Repair has at least one success at ≥1★
Satzbau has at least one success at ≥1★
Production has at least one practised card

```
  
  
### **8.5 Exceptions**  
  
If a category does not include a task type, do not require it.  
  
```
If no Satzbau exists, do not require Satzbau.
If no production exists, do not require production.
If Case/Table only exists in case/article modules, do not require it for Redemittel categories.

```
  
⸻  
## **9. Unlock Model**  
  
### **9.1 Soft Unlock**  
  
Use soft unlocks, not hard locks.  
  
Recommended behaviour:  
  
```
Recommended unlock = the path says the next category is ready.
Manual unlock = the user can override with confirmation.

```
  
  
### **9.2 Default Recommended Unlock Rule**  
  
For moving from one category to the next:  
  
```
50% of current category core targets at ≥1★
AND required task-type breadth at ≥1★

```
  
  
Optional stronger recommendation:  
  
```
50% at ≥1★
20% at ≥2★
required task-type breadth at ≥1★

```
  
  
For the MVP, use the simpler rule unless testing shows progression is too shallow.  
  
### **9.3 Early Unlock Dialogue**  
  
If the learner opens the next category before recommended unlock:  
  
```
Ozmosis recommends a little more practice first.

B1.1 Appointments progress:
Got right once: 43%
Choice: done
Cloze: done
Repair: not yet
Satzbau: done
Production: practised

You can continue anyway.

```
  
  
Buttons:  
  
```
Keep practising B1.1
Unlock anyway

```
  
  
### **9.4 Do Not Shame the User**  
  
Avoid:  
  
```
You are not ready.
You failed to unlock this.
You have not mastered the basics.

```
  
  
Use:  
  
```
Ozmosis recommends more practice first.
You can continue anyway.

```
  
⸻  
## **10. Landing Page Placement**  
  
### **10.1 Recommended Hierarchy**  
  
The landing page should show:  
  
```
Ozmosis
Recommended Task
B1 Path
Review Practice
Learning Map
Options

```
  
  
### **10.2 Recommended Task**  
  
Recommended Task should be a single clear next action.  
  
Examples:  
  
```
Recommended Task
Review B1.1.2 Callbacks
3 missed items are waiting.

```
  
  
```
Recommended Task
Continue B1.1.1 Appointments
You are close to unlocking B1.1.2 Callbacks.

```
  
  
### **10.3 B1 Path Cards**  
  
Below Recommended Task, show compact grouped cards.  
  
Example:  
  
```
B1.1 Practical Admin
B1.1.1 Appointments        62% got right once
B1.1.2 Callbacks           Recommended next
B1.1.3 Availability        Locked

```
  
  
Use compact status labels:  
  
```
Open
Recommended
Locked
Review
New

```
  
  
Do not show giant progress tables on the landing page.  
  
### **10.4 Expanded Category Detail**  
  
Expanded card:  
  
```
B1.1.1 Appointments

Got right once       62%
Got right twice      38%
Got right 3 times    19%
Got right 4 times     8%
Got right 5 times     2%

Types practised:
Choice       done
Cloze        done
Repair       not yet
Satzbau      done
Production   practised

Stars guide practice. They are not a mastery or exam-readiness score.

```
  
⸻  
## **11. Learning Map Placement**  
  
The Learning Map should be the detailed version of the landing-page B1 Path.  
  
### **11.1 Overview**  
  
Show major path areas:  
  
```
All B1 Progress
B1.1 Practical Admin
B1.2 Course and Work Starting Point
B1.3 Job Search and Offices
...

```
  
  
Each row/card:  
  
```
B1.1 Practical Admin
Got right once: 54%
Got right twice: 31%
Needs: Repair
Recommended next: B1.1.2 Callbacks

```
  
  
### **11.2 Detail Panel**  
  
A detail panel should show:  
  
```
subcategory progress
task-type breadth
tag progress
recent misses
recommended review
manual unlock state

```
  
  
### **11.3 Tag-Level Progress**  
  
Tags should work across categories.  
  
Examples:  
  
```
Appointments
Callbacks
Applications
Sick leave
Complaints
Technical problems
Connectors
Word order
Collocations
Polite requests
Case/article
Repair
Production

```
  
  
Example display:  
  
```
Collocations
Got right once: 34%
Got right twice: 16%
Got right 3 times: 5%
Recommended: Review phrase-choice tasks.

```
  
⸻  
## **12. Internal Data Model**  
  
### **12.1 Target Progress**  
  
Recommended structure:  
  
```
targetId
targetFamilyId
categoryId
pathId
subcategoryId
tags[]
coreStatus: core | support | optional | preview
requiredTaskTypes[]
correctCount
starLevel
lastCorrectAt
lastAttemptAt
recentWrongCount
confidenceHistory[]
supportHistory[]
taskTypeSuccesses{}
productionPractisedCount

```
  
  
### **12.2 Task-Type Successes**  
  
Example:  
  
```
taskTypeSuccesses: {
  choice: {
    correctCount: 2,
    starLevel: 2,
    lastCorrectAt: "..."
  },
  cloze: {
    correctCount: 1,
    starLevel: 1,
    lastCorrectAt: "..."
  },
  repair: {
    correctCount: 0,
    starLevel: 0
  },
  satzbau: {
    correctCount: 1,
    starLevel: 1
  },
  production: {
    practisedCount: 1
  }
}

```
  
  
### **12.3 Category Progress**  
  
Computed if possible:  
  
```
categoryId
pathId
coreTargetCount
percentAt1Star
percentAt2Stars
percentAt3Stars
percentAt4Stars
percentAt5Stars
taskTypeBreadthAt1Star
taskTypeBreadthAt2Stars
productionPractised
recommendedUnlock
overrideUnlockUsed
lastUpdatedAt

```
  
  
### **12.4 Override Unlock**  
  
If user overrides a soft lock:  
  
```
categoryId
unlockedByOverride: true
overrideAt
previousCategoryProgressAtOverride

```
  
  
Do not treat override as completion.  
⸻  
## **13. Storage and Compatibility**  
  
### **13.1 Protected Keys**  
  
Do not rename:  
  
```
ozmosis_b1_sprint_progress_v1
ozmosis_b1_progress_evidence_v1

```
  
  
### **13.2 Additive Metadata**  
  
If new fields are needed, add them in a backwards-compatible way.  
  
Old evidence records without path/category/star data must still import safely.  
  
### **13.3 Recalculation Strategy**  
  
Prefer deriving star progress from evidence records.  
  
If derived calculation is too expensive, cache category progress but allow rebuild from raw evidence.  
  
Recommended:  
  
```
raw evidence remains source of truth
computed progress can be cached
cache can be rebuilt

```
  
⸻  
## **14. Evidence Rules**  
  
### **14.1 Correct Count**  
  
Increment correct count when:  
  
```
auto-graded task is correct
the task maps to a valid target family / practice target
the attempt is not merely Teach me / revealed answer

```
  
  
### **14.2 Assisted Attempts**  
  
Record separately:  
  
```
assistedAttemptCount
teachMeCount
supportUsed
translationShownBeforeAnswer

```
  
  
Do not count assisted reveal as normal correctness.  
  
### **14.3 Production**  
  
Production tracks:  
  
```
practisedCount
lastPractisedAt

```
  
  
Production does not affect correctness stars unless a future externally reviewed mode is explicitly implemented.  
  
### **14.4 Variants**  
  
Same-family variants support practice, but should not inflate category denominator.  
  
If a learner gets multiple variants of the same family right:  
  
```
correctCount for that target family can increase
but the family still counts once in category percentages

```
  
  
### **14.5 Wrong Answers**  
  
Wrong answers should:  
  
```
increase review priority
not necessarily demote stars in MVP
be visible in Review Practice
affect Recommended Task

```
  
⸻  
## **15. UX Behaviour**  
  
### **15.1 Main Path View**  
  
The learner should see:  
  
```
Recommended Task
B1 Path
B1.1 Practical Admin
B1.2 Course and Work
B1.3 Job Search
...

```
  
  
Collapsed cards show simple progress.  
  
Expanded cards show star percentages and task-type breadth.  
  
### **15.2 Review Integration**  
  
Recommended Task should prioritise:  
  
```
recent wrong answers
near-unlock categories
weak required task types
stale low-star targets

```
  
  
### **15.3 Unlock Visuals**  
  
Use gentle visual states:  
  
```
Open
Recommended
Locked
Needs one more type
Review suggested

```
  
  
Avoid harsh states:  
  
```
Failed
Blocked
Not ready
Insufficient

```
  
  
### **15.4 Mobile Constraints**  
  
Progress display must not become a giant spreadsheet.  
  
Landing page:  
  
```
one recommended task
one compact B1 path list
expand only on demand

```
  
  
Learning Map:  
  
```
more detailed, but still grouped
no huge default table

```
  
⸻  
## **16. Development Phasing**  
  
### **Phase A — Source and Content Mapping**  
  
Map all current and planned targets to:  
  
```
categoryId
pathId
subcategoryId
tags
requiredTaskTypes
core/support/optional/preview

```
  
  
### **Phase B — Calculator Prototype**  
  
Create a development-only calculator:  
  
```
input: current evidence records
output: star percentages by all B1/category/subcategory/tag/task type

```
  
  
No UI yet.  
  
### **Phase C — Learning Map Integration**  
  
Add detailed progress display to Learning Map.  
  
### **Phase D — Landing Page Integration**  
  
Add compact B1 Path under Recommended Task.  
  
### **Phase E — Unlock Dialogues**  
  
Add soft unlock rules and override state.  
  
### **Phase F — QA and Validation Gate**  
  
Add validation for:  
  
```
categories without path IDs
core targets without required task types
task types required but no matching items exist
production counted as correctness
assisted attempts counted as normal correctness
mastery/exam-readiness wording

```
  
⸻  
## **17. Validation Gate Requirements**  
  
A future gate should hard-fail on:  
  
```
user-facing “mastery” for star percentages
user-facing “exam ready” based on stars
production attempts counted as correct stars
Teach me / reveal attempts counted as normal correct stars
category without pathId
subcategory without display label
core target without categoryId
core target without requiredTaskTypes
unlock rule using raw item count instead of core targets
variant count used as denominator
protected storage key rename

```
  
  
Warn on:  
  
```
category with too few core targets
category requiring task type that has no items
subcategory with no recommended next logic
tag with too many/few targets
progress display too dense for mobile
new content added causing percentage drop without user notice

```
  
⸻  
## **18. Edge Cases**  
  
### **18.1 New Content Added**  
  
When new targets are added, percentages may drop.  
  
Required UX copy:  
  
```
New practice targets were added. Your progress changed because the map grew.

```
  
  
### **18.2 User Skips Ahead**  
  
If user unlocks early:  
  
```
allow it
record override
do not mark previous category complete
continue recommending weak previous targets when useful

```
  
  
### **18.3 Category Has Few Items**  
  
If a category has too few core targets, do not show overly precise percentages.  
  
Use counts:  
  
```
2 of 3 got right once

```
  
  
or:  
  
```
Not enough practice yet

```
  
  
### **18.4 Repeated Variants**  
  
Multiple variants can increase correct count for a target family, but the category denominator remains one target family.  
  
### **18.5 Same Task Type Only**  
  
If learner only uses choice tasks:  
  
```
percentage may improve
but unlock waits for required task-type breadth

```
  
  
This is intentional.  
⸻  
## **19. Recommended MVP**  
  
MVP includes:  
  
```
path IDs and labels
star count per target family / practice target
category/subcategory percentage table
task-type breadth check
soft unlock dialogue
Learning Map detail
landing-page compact B1 Path
non-mastery disclaimer
validation gate

```
  
  
MVP excludes:  
  
```
full Leitner scheduling
automatic demotion
complex due-date review
B2 progress
public profile
cloud sync
analytics

```
  
⸻  
## **20. Final Contract**  
  
The B1 Progress Path must satisfy:  
  
```
The learner sees a clear route through B1.
The learner sees how much of each area they have got right repeatedly.
The app rewards repeated success, not raw exposure.
The app requires breadth across task types before recommending progression.
The learner can override the path when needed.
The app never claims mastery or exam readiness from stars.
The system remains compatible with static localStorage evidence.
The UI uses plain user language, not internal evidence jargon.

```
  
  
The best version is calm, clear, and honest:  
  
```
You are here.
This is next.
You have got this much right.
This still needs practice.
You can move on if you choose.

```
