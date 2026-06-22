# Ozmosis Shared Practice Frame Contract v0.85.3.4

Patch: `v0.85.3.4 - Shared Practice Frame and Surface Inventory`

This is a contract and inventory document. It does not change runtime behaviour.

## 1. Core Finding

Ozmosis does not yet have a fully enforced shared practice-frame contract across all B1 and article/case practice routes.

The B1 route family is mostly unified through `renderB1Question()`, shared DOM slots, and shared B1 feedback/confidence controls. The Case Trainer / Article Tester route still uses separate legacy state and render functions while reusing many of the same visible DOM IDs.

Therefore the answer to the audit question is:

`No. Most B1 practice surfaces share one frame, but Case Trainer/article-grid surfaces and some typed-answer/result behaviours still diverge by render owner.`

## 2. Canonical Practice Frame Slots

Every active practice route should map into these slots:

1. `practice shell`
   - Owns the active practice viewport and bottom HUD clearance.
   - Current DOM: `main`, `.content`, `.taskColumn`, `.supportColumn`.

2. `header / back / wordmark / menu`
   - Owns route exit, compact identity, and menu access.
   - Route-specific labels are allowed; route-specific page structures are not.

3. `task label`
   - Current DOM: `#modeTitle`.
   - Shows activity context such as Connector Sprint, Redemittel, Repair Practice, or Case Trainer.

4. `German stimulus`
   - Current DOM: `#promptValue`.
   - German stays visually central and LTR.

5. `cue/support line`
   - Current DOM: `#englishGloss`, `#translationToggle`, `#diagnosticInfo`.
   - English/support text stays secondary.
   - Translation/support must not be labelled as correctness before answer.

6. `answer surface slot`
   - Current DOM: `#answerArea`, `#connectorChoiceGrid`, `#answerInput`, `#b1InlineInput`, `#practiceSurface`.
   - Routes may choose item pools and labels.
   - Routes must not create visually different page structures for the same answer surface unless explicitly documented.

7. `Teach me / hint slot`
   - Current DOM: `#hintBtn`, `#supportPlaceholder`, and the fallback `#noArticleBtn.teachBtn`.
   - Only one visible Teach Me-like action should appear for a given surface state.

8. `feedback/result slot`
   - Current DOM: `#correctionBlock`, `#feedback`, `#resultPanel`.
   - Feedback can be route-specific, but hierarchy should remain result -> answer/correction -> one useful rule/contrast -> confidence/continue.

9. `confidence/continue slot`
   - Current DOM: `#b1ConfidenceRow`, `#b1ConfidenceGuidance`, `#nextBtn`.
   - B1 evidence confidence remains B1-only unless Case Trainer is explicitly migrated later.

10. `HUD`
   - Current DOM: `.bottomHud`, `#progressBar`, `#targetLabel`, `#scoreValue`, `#correctValue`, `#wrongValue`, `#streakValue`.
   - HUD may present different counters by route, but it must not obstruct answer, feedback, article grid, or continue controls.

## 3. Surface Adapter Contract

### Choice

- Current owner: B1 shared renderer.
- Current functions: `renderB1Question()`, `renderConnectorChoices()`, `checkB1Answer()`, `renderB1Feedback()`.
- Current DOM: `#connectorChoiceGrid`, `#hintBtn`, `#correctionBlock`, `#b1ConfidenceRow`, `#nextBtn`.
- Contract: all choice surfaces use one choice-grid adapter, regardless of Today, Diagnostic, Connector, Wortschatz, Cases/Articles, or QA fixture launch source.

### Inline Cloze

- Current owner: B1 shared renderer.
- Current functions: `renderB1Question()`, `b1PromptHtml()`, `updateB1TypedClozeActionState()`, `checkB1Answer()`.
- Current DOM: `#promptValue`, `#b1InlineInput`, `#hintBtn`, optional fallback `#noArticleBtn.teachBtn`, `#correctionBlock`.
- Contract: cloze blank, typed state, hint state, and post-answer text should use one adapter across Today, Diagnostic, Wortschatz, Redemittel, Word Order, and QA staging.

### Full Typed Answer

- Current owners: B1 shared renderer and Case Trainer legacy renderer.
- Current B1 functions: `renderB1Question()`, `checkB1Answer()`, `renderB1Feedback()`.
- Current Case Trainer functions: `renderQuestion()`, `checkAnswer()`, `renderMiniTable()`.
- Current DOM: `#answerInput`, `#checkBtn`, `#correctionBlock`, `#feedback`.
- Contract: full typed answer should have a common frame adapter. Case Trainer may retain article-specific feedback, but typed input, check action, feedback placement, and continue placement should not feel like a separate app.

### Correction / Repair

- Current owner: B1 shared renderer.
- Current functions: `renderB1Question()`, `compareRepairAnswer()`, `renderB1Feedback()`, `b1RepairFeedbackHtmlV2()`.
- Current DOM: `#answerInput`, `#correctionBlock`, `#nextBtn`.
- Contract: repair and transformation surfaces use the same frame; route-specific repair details live inside the feedback/result slot.

### Satzbau / Word Order

- Current owner: B1 shared renderer.
- Current functions: `startWordOrderRound()`, `renderB1Question()`, `checkB1Answer()`.
- Current DOM: `#promptValue`, `#b1InlineInput` or `#answerInput`, `#correctionBlock`.
- Contract: Satzbau is an answer-surface adapter, not a separate page type. Word-order routes may supply labels and item pools only.

### Production Card

- Current owner: B1 shared renderer.
- Current functions: `renderProductionControls()`, `skipB1ProductionCard()`, `markB1ProductionPractised()`.
- Current DOM: `.productionGrid`, `.productionReveal`, `.productionActionRow`, `#correctionBlock`, `#nextBtn`.
- Contract: production remains self-marked. It must keep separate reveal controls for translation/meaning, useful phrases, self-check, and example answer where available. It must not be auto-graded.

### Article Grid / Case Table

- Current owner: Case Trainer legacy renderer.
- Current functions: `renderQuestion()`, `showHint()`, `renderMiniTable(mode)`, `checkAnswer()`, `showResults()`.
- Current DOM: `#miniTableWrap`, `.miniTable`, `.target`, `.hitCorrect`, `.hitMissed`.
- Contract: article grid is a protected learning component, not generic feedback text.

## 4. Article Grid Protection

Do not remove the article grid.

Do not flatten the article grid into generic feedback.

Do not show the full article grid before the answer unless the mode is explicitly teaching/support.

The next implementation pass must plan for these three protected forms:

1. Full article grid
   - Use for Article Tester / Case Trainer, results, and review screens.
   - Shows the complete article table.

2. Compact highlighted article grid
   - Use immediately after wrong article/case answers.
   - Must support highlighting case, gender, number, article family, correct cell, and wrong selected cell where applicable.

3. Optional reveal article grid
   - Use for `Show article grid`, teaching mode, or after-answer support.
   - The reveal must be learner-controlled and must not crowd the default question state.

## 5. Current Unified Surfaces

- B1 choice.
- B1 inline cloze.
- B1 repair/correction.
- B1 production card.
- B1 confidence/continue controls.
- B1 HUD/footer layout.

## 6. Current Divergent Surfaces

- Case Trainer typed article answer uses `renderQuestion()` / `checkAnswer()` instead of B1 renderer ownership.
- Case Trainer article grid uses `renderMiniTable(mode)` and is not yet a declared shared adapter.
- Case Trainer results use score/rank/heatmap language and routing distinct from B1 result flow.
- B1 cases/articles repair items do not currently expose the Case Trainer article grid in their feedback surface.

## 7. Implementation Boundary

This contract does not authorise:

- scoring changes;
- evidence changes;
- answer-key changes;
- content-bank edits;
- localStorage key changes;
- export/import format changes;
- article-grid data changes;
- item selection changes;
- feedback rhythm redesign;
- production-card semantic changes.

## 8. Recommended Next Patch

`v0.85.3.5 - Shared Practice Frame Convergence Pass`

Reason: major frame divergences still exist around Case Trainer typed answers, article-grid feedback, and result surfaces. Feedback rhythm should wait until the frame contract has an implementation layer.
