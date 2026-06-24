# Ozmosis README

This is the canonical README for Ozmosis.

Future README updates should be made in this file. Do not create new `README-v*.md` files unless the user explicitly asks for a standalone historical export.

- Canonical changelog: `CHANGELOG-FULL-OZMOSIS.txt`
- Current app README source consolidated from: `README-v0_85.md`

## Current App

# Ozmosis v0.85.5a Satzbau Build-Line and Answer-Leak Repair

Ozmosis is a static, local-first German learning app. The deployed app remains `index.html`.

v0.85.5a is a narrow runtime hotfix after the accepted v0.85.5 Runtime Display Contract Lock.

It fixes two Satzbau issues found by manual review: tapped chunks now build the learner sentence in a visible non-input build line, and the pre-answer gloss/support path no longer exposes the correct answer order. Manual typing remains available only as a secondary fallback behind a disclosure.

The patch preserves the v0.85.5 runtime display contract, v0.85.4a chunk tapping/randomisation and 16px mobile input safeguards, article-grid behaviour, shared frame, content banks, scoring, evidence, storage keys, and export/import format.

- Runtime app version: `v0.85.5a - Satzbau Build-Line and Answer-Leak Repair`
- Runtime export version: `v0.85.5a-satzbau-build-line-answer-leak`
- Current gate result: `SATZBAU_BUILD_LINE_ANSWER_LEAK_ACCEPTED`
- Core result: Edge/CDP verified visible non-input Satzbau build line, tap-to-build, selected state, clear/reset, secondary manual fallback, preserved answer checking, no pre-answer correct-answer leak, post-answer correct sentence visibility, v0.85.5 runtime display contract preservation, v0.85.4a Satzbau/iOS non-regression, article-grid preservation, protected storage keys, export/import functions, screenshots, and contact-sheet proof.

## Current v0.85.5a docs

- Changelog: `CHANGELOG-FULL-OZMOSIS.txt`
- Source brief: `docs/OZMOSIS_SOURCE_BRIEF_v0.85.5a.md`
- Roadmap: `docs/OZMOSIS_DEVELOPMENT_ROADMAP_v0.85.5a.md`
- Shared frame contract: `docs/OZMOSIS_SHARED_PRACTICE_FRAME_CONTRACT_v0.85.3.4.md`
- Current QA gate: `docs/qa/v0.85.5a_satzbau_build_line_answer_leak.md`
- Current gate result JSON: `docs/qa/v0.85.5a_satzbau_build_line_answer_leak_results.json`
- Current gate screenshots: `docs/qa/screenshots/v0.85.5a-satzbau-build-line-answer-leak/`
- Current gate script: `scripts/ozmosis-satzbau-build-line-check.cjs`
- Runtime contract gate script: `scripts/ozmosis-runtime-display-contract-check.cjs`
- Previous v0.85.5 QA gate: `docs/qa/v0.85.5_runtime_display_contract_lock.md`
- Previous v0.85.5 result JSON: `docs/qa/v0.85.5_runtime_display_contract_lock_results.json`
- Runtime contract resolved issue CSV: `docs/qa/v0.85.5_runtime_display_contract_resolved_issues.csv`
- Runtime contract remaining source cleanup CSV: `docs/qa/v0.85.5_runtime_display_contract_remaining_source_cleanup.csv`
- Previous v0.85.4a QA gate: `docs/qa/v0.85.4a_satzbau_touch_ios_zoom.md`
- Previous v0.85.4a result JSON: `docs/qa/v0.85.4a_satzbau_touch_ios_zoom_results.json`
- Previous completion gate: `docs/qa/v0.85.4_completion_gate_harness.md`
- Previous completion gate result JSON: `docs/qa/v0.85.4_completion_gate_harness_results.json`
- Completion gate CSVs: `docs/qa/v0.85.4_completion_gate_prompt_cue_issues.csv`, `docs/qa/v0.85.4_completion_gate_cloze_cue_issues.csv`, `docs/qa/v0.85.4_completion_gate_feedback_issues.csv`, `docs/qa/v0.85.4_completion_gate_metadata_manifest_candidates.csv`, `docs/qa/v0.85.4_completion_gate_review_queue_status.csv`
- Manual phone checklist: `docs/qa/v0.85.3.8_manual_phone_test_checklist.md`
- Package policy: `docs/OZMOSIS_QA_ARTEFACT_AND_PACKAGE_POLICY.md`

Next planned patch: `v0.85.6 - Source Cleanup Batch 1: Internal Labels and Meaning Cues`.

## Previous v0.85.5 Runtime Display Contract Lock

v0.85.5 locked the runtime display contract for active normal practice before source cleanup begins. It keeps the v0.85.4 static issue queues as source-cleanup evidence, but prevents learner-facing active practice from rendering internal labels, hidden meaning-choice cues, under-contextualised clozes without a cue, or review-only items.

The runtime lock adds a display-contract audit helper and Edge/CDP gate. Active normal-practice counts are now 0 rendered prompt/internal-label leaks, 0 meaning-choice hidden cue risks, 0 under-contextualised cloze-without-cue risks, and 0 review-only items entering normal practice. The v0.85.4a Satzbau tap/randomisation and iOS-safe input-size fixes are preserved.

- Runtime app version: `v0.85.5 - Runtime Display Contract Lock`
- Runtime export version: `v0.85.5-runtime-display-contract-lock`
- Gate result: `RUNTIME_DISPLAY_CONTRACT_LOCK_ACCEPTED`
- Core result: Edge/CDP verified zero active runtime display-contract defects, 552 old static prompt/cue rows already handled by runtime guards, 3,535 unsafe source rows excluded for later cleanup, 4,087 non-blocking source-cleanup candidates carried forward, 2,990 review-only rows safely excluded, v0.85.4a Satzbau non-regression, iOS-safe input font sizes, article-grid preservation, shared-frame preservation, protected storage keys, and export/import functions.

## Previous v0.85.4a Satzbau Interaction, Chunk Randomisation, and iOS Input Zoom Repair

v0.85.4a was a narrow runtime hotfix after the accepted v0.85.4 completion gate. It fixed Satzbau/word-order chunk interaction, attempt-stable chunk randomisation, and mobile-safe input font sizing for iOS/Safari zoom risk.

Satzbau chunks are real buttons, tapping chunks builds the answer in tap order, selected chunks have visible state, Clear resets selected chunks and the answer, and manual typing remains available through the existing answer-checking path. Text-entry controls used by B1 cloze/Satzbau, correction textarea, and Case Trainer are verified at 16px or larger in mobile/touch layouts.

- Runtime app version: `v0.85.4a - Satzbau Interaction, Chunk Randomisation, and iOS Input Zoom Repair`
- Runtime export version: `v0.85.4a-satzbau-touch-ios-zoom`
- Gate result: `SATZBAU_TOUCH_IOS_ZOOM_ACCEPTED`
- Core result: Edge/CDP verified tappable Satzbau chunks, tap-to-answer, selected state, clear/reset, manual typing, answer checking, attempt-stable randomised chunk order, B1 cloze/correction/choice non-regression, Case Trainer input font size, article-grid preservation, export/import, required screenshots, and contact-sheet image loading.

## Previous v0.85.4 Completion Gate Harness

v0.85.4 added a reusable static completion gate harness before any source cleanup, prompt/cue rewriting, metadata migration, production completion, or v0.86 work begins.

The harness measured runtime item inventory, prompt/cue leaks, under-contextualised clozes, meaning-choice cue risks, generic contrast feedback, review-only leakage, metadata manifest readiness, article-grid preservation, shared practice-frame coverage, export/import compatibility, protected storage keys, and v0.85.3.8 HUD/live/manual carryover status. It did not fix those issue categories.

- Runtime app version: `v0.85.4 - Completion Gate Harness`
- Runtime export version: `v0.85.4-completion-gate-harness`
- Gate result: `COMPLETION_GATE_HARNESS_ACCEPTED`
- Core result: the harness counted 7,194 runtime items, 4,204 normal-practice-eligible items, 2,990 review-only items, 226 rendered prompt internal-label leaks, 58 under-contextualised cloze risks, 32 generic active contrast-feedback lines, 0 review-only items entering normal practice, and 7,194 metadata manifest candidates for later cleanup.

## Previous v0.85.3.8 HUD, keyboard, and live mobile verification gate

v0.85.3.8 verifies and tightens fixed-HUD, mobile keyboard, short-height, responsive, live-deployment, screenshot, and manual-phone-readiness behaviour after the accepted v0.85.3.7 correction/Satzbau surface pass.

The patch adds a scoped post-answer HUD-clearance repair for B1 practice, so feedback and confidence controls stay clear of the fixed HUD on small and keyboard-like viewports. It also compacts answered Satzbau short-height states by hiding pre-answer scaffolding once feedback is shown.

- Runtime app version: `v0.85.3.8 - HUD, Keyboard, and Live Mobile Verification Gate`
- Runtime export version: `v0.85.3.8-hud-keyboard-mobile-gate`
- Gate result: `HUD_KEYBOARD_MOBILE_GATE_ACCEPTED`
- Core result: choice, cloze, correction textarea, Satzbau, B1 cases/articles compact grid, Case Trainer article grid, Settings/Data export/import, required responsive viewports, keyboard-like reduced-height viewports, Arabic/LTR, live GitHub Pages version status, contact-sheet thumbnail loading, and export/import were checked through the v0.85.3.8 Edge/CDP gate.

## Previous v0.85.3.7 correction and Satzbau surface pass

v0.85.3.7 improved the correction/repair and Satzbau/word-order practice surfaces without changing content, scoring, evidence, storage, export/import, or the shared feedback rhythm. Correction/edit-text tasks now use a compact neon-styled textarea, while Satzbau tasks render existing word chunks as distinct chips with the same typed answer semantics as before.

- Runtime app version: `v0.85.3.7 - Correction and Satzbau Surface Pass`
- Runtime export version: `v0.85.3.7-correction-satzbau-surface`
- Gate result: `CORRECTION_SATZBAU_SURFACE_ACCEPTED`
- Core result: correction default/filled/long typing/fail/success, Satzbau default/typing/fail/success/wrap, choice and cloze non-regression, B1 cases/articles compact grid, Case Trainer article-grid feedback, responsive, Arabic/LTR, contact-sheet thumbnail loading, and export/import were checked through the v0.85.3.7 Edge/CDP gate.

## Previous v0.85.3.6a feedback rhythm repair

v0.85.3.6a repaired the v0.85.3.6 feedback-rhythm proof artefacts and remaining visual issues. It removed remaining nested mini-card feedback clutter, made the post-answer result/star area visibly distinct, fixed the cloze feedback mismatch caused by raw wrong-answer contrast matching, and regenerated a real screenshot contact sheet.

- Runtime app version: `v0.85.3.6a - Feedback Rhythm Repair and Proof Artefact Fix`
- Runtime export version: `v0.85.3.6a-feedback-rhythm-repair`
- Gate result: `FEEDBACK_RHYTHM_REPAIR_ACCEPTED`

## Previous v0.85.3.6 feedback rhythm

v0.85.3.6 implemented the narrow post-answer feedback rhythm pass after the accepted shared practice-frame convergence layer. Manual screenshot review then found proof artefact and remaining visual issues, repaired in v0.85.3.6a.

- Runtime app version: `v0.85.3.6 - Feedback Rhythm Pass`
- Runtime export version: `v0.85.3.6-feedback-rhythm`
- Gate result before repair: `FEEDBACK_RHYTHM_ACCEPTED`

## Previous v0.85.3.5 shared practice frame convergence

v0.85.3.5 implemented the narrow shared practice-frame convergence layer planned in v0.85.3.4. It kept the Case Trainer article grid protected while adding shared frame metadata and compact article-grid feedback for B1 cases/articles repair where metadata is explicit.

- Runtime app version: `v0.85.3.5 - Shared Practice Frame Convergence Pass`
- Runtime export version: `v0.85.3.5-shared-practice-frame-convergence`
- Gate result: `SHARED_FRAME_CONVERGENCE_ACCEPTED`
- Core result: B1 and Case Trainer typed-answer surfaces expose shared frame metadata, the protected article grid has full/compact/reveal adapter modes, and B1 cases/articles wrong repair feedback can show a compact highlighted article grid when case/family/gender metadata is explicit.

## Previous v0.85.3.4 shared practice frame inventory

v0.85.3.4 was a QA/planning patch. It audited whether all practice and test surfaces use one shared frame before any feedback-rhythm redesign starts.

- Runtime app version remained: `v0.85.3.3b - Duplicate Teach Me Button Hotfix`
- Runtime export version remained: `v0.85.3.3b-duplicate-teach-me-hotfix`
- Gate result: `SHARED_FRAME_INVENTORY_ACCEPTED`
- Core finding: B1 practice was mostly unified, but Case Trainer/article-grid typed-answer and result surfaces still used separate legacy render ownership.

## Previous v0.85.3.3b duplicate Teach Me hotfix baseline

Ozmosis is a static, local-first German learning app. The deployed app remains `index.html`.

v0.85.3.3b fixes the B1 inline cloze duplicate Teach Me action found after the representative cloze fixture pass. Cloze screens now keep the newer smaller secondary `Teach me` reveal button and suppress the older `#noArticleBtn` Teach Me action when the new reveal is available.

- App version: `v0.85.3.3b - Duplicate Teach Me Button Hotfix`
- Export version: `v0.85.3.3b-duplicate-teach-me-hotfix`
- Current gate result: `DUPLICATE_TEACH_ME_FIXED`

## Previous v0.85.3.3 cloze experience baseline

Ozmosis is a static, local-first German learning app. The deployed app remains `index.html`.

v0.85.3.3 proves the active-practice cloze surface with representative B1 sentence fixtures instead of the artificial `Niveau ___.` proof shape.

- App version: `v0.85.3.3 - Cloze Experience and Representative Fixture Pass`
- Export version: `v0.85.3.3-cloze-experience-fixtures`
- Current gate result: `CLOZE_EXPERIENCE_ACCEPTED`

## What changed

- Proved a short inline cloze: `Welche ___ soll ich mitbringen?`.
- Proved an under-contextualised cloze with visible cue: `Ich lerne Deutsch auf ___.`
- Proved a longer wrapping cloze: `Ich möchte den Termin auf ___ verschieben.`
- Generated fresh actual screenshots and comparison artefacts under `docs/qa/screenshots/v0.85.3.3-cloze-experience/`.
- Accepted the cloze geometry gate with `50` checks run and `0` failed checks.
- Made cloze blank width answer-aware instead of forcing every blank to `258px`.
- Removed the hidden instruction line break that was pushing typed cloze sentences down.
- Confirmed the old giant active-practice shell title remains gone.
- Confirmed the pre-answer star/status strip remains absent in measured question states.
- Kept post-answer result/star feedback allowed inside feedback.
- Removed the large centred active-practice Ozmosis title and replaced it with a compact ScreenConcept-style header.
- Hid the pre-answer task star/status strip from the main task area; post-answer star feedback remains inside the compact feedback block.
- Moved active B1 task content higher and tightened choice, cloze, correction, hint, feedback, confidence, and HUD spacing.
- Made inline cloze inputs slimmer and more sentence-integrated.
- Changed B1 reveal-hint affordances to the smaller `Teach me` secondary action.
- Added v0.85.3 Edge/CDP geometry, screenshot, comparison, responsive, route, Arabic/LTR, export/import, and focus QA outputs.
- Preserved scoring, evidence semantics, confidence values, star logic, storage keys, save/export/import compatibility, Today's B1 Sprint composition, Diagnostic Sprint composition, B1-only active scope, and GitHub Pages compatibility.

## What did not change

- No Production Completion Pass was implemented.
- No Redemittel Completion Pass was implemented.
- No Wortschatz Completion Pass was implemented.
- No broad content-bank rewrite was performed.
- No normal practice content was changed; the new cloze fixtures are QA-only.
- No task answers, scoring semantics, star earning rules, storage keys, save/export/import format, Today's B1 Sprint composition, or Diagnostic Sprint composition changed.
- No Satzi, B2/CAT18 activation, genitive expansion, adjective-ending expansion, broad generator, backend, framework, build step, package manager, dependency, API, analytics, account system, runtime AI, or runtime German generation was added.

## Current docs

- Changelog: `CHANGELOG-FULL-OZMOSIS.txt`
- Source brief: `docs/OZMOSIS_SOURCE_BRIEF_v0.85.3.3.md`
- Roadmap: `docs/OZMOSIS_DEVELOPMENT_ROADMAP_v0.85.3.3.md`
- Current QA gate: `docs/qa/v0.85.3.3_cloze_experience_fixture_pass.md`
- Current gate result JSON: `docs/qa/v0.85.3.3_cloze_experience_results.json`
- Strict screenshot comparison: `docs/qa/screenshots/v0.85.3.3-cloze-experience/comparison.html`
- Strict ScreenConcept measurements: `docs/qa/screenshots/v0.85.3.3-cloze-experience/screenconcept-measurements.json`
- Previous v0.85.3 QA report: `docs/qa/v0.85.3_practice_ui_reality_completion.md`
- Previous v0.85.3.1 proof gate: `docs/qa/v0.85.3.1_strict_ui_proof_gate.md`
- Review queue: `docs/qa/v0.85.1_prompt_cue_review_queue.csv`

Historical next planned patch at that point: `v0.85.3.4 - Feedback Rhythm Pass`. Current planning supersedes this with `v0.85.3.5 - Shared Practice Frame Convergence Pass`.

## Historical README Archive

The following root versioned README files were consolidated here and removed from the repo root so future work has one README to maintain.

### Consolidated from `README-v0_84_1.md`

# Ozmosis v0.84.1 - Cases & Articles Repair Editing Pilot

Ozmosis is a static, local-first German learning app. The deployed app remains `index.html`.

v0.84.1 adds a narrow Cases & Articles repair-editing pilot before the full v0.85 Repair / Transformation Completion Pass.

- App version: `v0.84.1 - Cases & Articles Repair Editing Pilot`
- Export version: `v0.84.1-cases-articles-repair-editing-pilot`

## What changed

- Audited all 16 Cases & Articles multiple-choice items for answer-elimination risk.
- Found 4 high-risk, 10 medium-risk, and 2 low-risk multiple-choice items.
- Left multiple-choice content unchanged in this patch; high-risk items are documented for later repair/edit or tighter form-choice work.
- Added explicit edit-prefill metadata to selected existing Cases & Articles repair items.
- Added 3 pre-authored variable-error repair pilot items for Cases & Articles.
- Added a field-driven repair edit mode that pre-fills only explicitly marked flawed repair sentences.
- Added deterministic variable-error selection from authored error slots only; no runtime German generation was added.
- Added additive repair evidence metadata for edit-prefill and variable-error repair attempts.
- Added QA-only debug access for the Cases & Articles repair pilot.
- Preserved the v0.84 Connector route baseline.
- Validated the route with static checks, headless Edge browser gates, responsive checks, route-isolation checks, save checks, and Arabic/LTR smoke.

## What did not change

- No scoring semantics changed.
- No star earning logic changed.
- No localStorage keys changed.
- No save/export/import format changed.
- No Connector content changed.
- No Today's B1 Sprint composition changed.
- No Diagnostic Sprint composition changed.
- No production cards were added.
- No full Repair / Transformation Completion Pass was started.
- No Satzi, B2/CAT18 activation, genitive expansion, adjective-ending expansion, backend, framework, build step, package manager, dependency, API, analytics, account system, runtime AI, or runtime German generation was added.

## Current docs

- Changelog: `CHANGELOG-v0_84_1.txt`
- Source brief: `docs/OZMOSIS_SOURCE_BRIEF_v0.84.1.md`
- Roadmap: `docs/OZMOSIS_DEVELOPMENT_ROADMAP_v0.84.1.md`
- QA report: `docs/qa/v0.84.1_cases_articles_repair_editing_pilot.md`

Next planned patch: `v0.85 - Repair / Transformation Completion Pass`.

### Consolidated from `README-v0_84.md`

# Ozmosis v0.84 - Connectors Completion Pass

Ozmosis is a static, local-first German learning app. The deployed app remains `index.html`.

v0.84 completes a focused B1 connector coverage pass on the existing Connector Sprint route.

- App version: `v0.84 - Connectors Completion Pass`
- Export version: `v0.84-connectors-completion`

## What changed

- Expanded `content/b1-connectors.js` from 120 to 144 route-bank connector items.
- Added 24 original B1-safe connector items.
- Covered reason, contrast, purpose/result, time, sequence/addition/alternative, and condition connector families.
- Added focused coverage for `aber`, `sodass`, `dann`, `danach`, `außerdem`, `oder`, and `falls` without activating B2/CAT18 content.
- Added explicit route-bank metadata for connector target, family, clause type, word-order target, meaning function, target IDs, review groups, and contrast groups.
- Updated the Grammar hub and B1.14 labels so the existing Connector route reflects the broader connector scope.
- Kept new v0.84 items out of Today's B1 Sprint and Diagnostic Sprint.
- Validated the route with static checks, coverage audit, file-based headless Edge browser gates, responsive checks, save checks, route-isolation checks, and Arabic/LTR smoke.

## What did not change

- No scoring semantics changed.
- No star earning logic changed.
- No localStorage keys changed.
- No save/export/import format changed.
- No Case Trainer behaviour changed.
- No Today's B1 Sprint composition changed.
- No Diagnostic Sprint composition changed.
- No Word Order, Prepositions, Cases and Articles, Redemittel, Wortschatz, repair/transformation, production, or broad content banks were rewritten.
- No Repair / Transformation Completion Pass was started.
- No Production Completion Pass was started.
- No Satzi, B2/CAT18 activation, genitive expansion, adjective-ending expansion, backend, framework, build step, package manager, dependency, API, analytics, account system, runtime AI, or runtime German generation was added.

## Current docs

- Changelog: `CHANGELOG-v0_84.txt`
- Source brief: `docs/OZMOSIS_SOURCE_BRIEF_v0.84.md`
- Roadmap: `docs/OZMOSIS_DEVELOPMENT_ROADMAP_v0.84.md`
- QA report: `docs/qa/v0.84_connectors_completion.md`

Next planned patch: `v0.85 - Repair / Transformation Completion Pass`.

### Consolidated from `README-v0_83.md`

# Ozmosis v0.83 - Word Order Completion Pass

Ozmosis is a static, local-first German learning app. The deployed app remains `index.html`.

v0.83 adds a focused B1 Word Order route and content bank.

- App version: `v0.83 - Word Order Completion Pass`
- Export version: `v0.83-word-order-completion`

## What changed

- Added `content/b1-word-order.js`.
- Added 36 original B1-safe word-order items.
- Covered nine word-order families with recognition, sentence-build, repair, and contrast practice.
- Added Word Order to the menu and Grammar hub.
- Routed Word Order evidence into the existing Learning Map and Skill Matrix word-order node.
- Added debug counts and exact recommendation routing for Word Order.
- Kept the new route out of Today's B1 Sprint and Diagnostic Sprint.
- Validated the route with static checks and file-based headless Edge browser gates.

## What did not change

- No scoring semantics changed.
- No star earning logic changed.
- No localStorage keys changed.
- No save/export/import format changed.
- No Case Trainer behaviour changed.
- No Today's B1 Sprint composition changed.
- No Prepositions, Cases and Articles, Connectors, Redemittel, Wortschatz, or broad content banks were rewritten.
- No backend, framework, build step, package manager, dependency, API, analytics, account system, runtime AI, or runtime German generation was added.

## Current docs

- Changelog: `CHANGELOG-v0_83.txt`
- Source brief: `docs/OZMOSIS_SOURCE_BRIEF_v0.83.md`
- Roadmap: `docs/OZMOSIS_DEVELOPMENT_ROADMAP_v0.83.md`
- QA report: `docs/qa/v0.83_word_order_completion.md`

Next planned patch: `v0.84 - Connectors Completion Pass`.

### Consolidated from `README-v0_82_1.md`

# Ozmosis v0.82.1 - Prepositions Browser Acceptance Gate

Ozmosis is a static, local-first German learning app. The deployed app remains `index.html`.

v0.82.1 accepts the v0.82 Prepositions route after browser validation. No runtime fix was needed, so the app metadata remains:

- App version: `v0.82 - Prepositions Completion Pass`
- Export version: `v0.82-prepositions-completion`

## What changed

- Added browser acceptance evidence for the Prepositions route.
- Confirmed a real Prepositions item can be opened, answered, corrected, and recorded as evidence.
- Confirmed confidence updates the same evidence record.
- Confirmed Learning Map, Settings, Dev Tools, Home, and Case Trainer setup remain route-isolated after Prepositions.
- Confirmed Export Save / Import Save remain visible and import validation is exposed.
- Confirmed responsive smoke for the required acceptance viewports.
- Confirmed Arabic UI smoke keeps German learner text LTR/readable.
- Updated the feature register so `word_order_completion` is allowed next as `v0.83`.

## What did not change

- No German-learning content changed.
- No scoring, star earning, storage key, save/export/import, Case Trainer, Today’s B1 Sprint, Learning Map, Skill Matrix, or route composition changed.
- No Word Order content or route was implemented.
- No backend, framework, build step, package manager, dependency, API, analytics, account system, runtime AI, or runtime German generation was added.

## Current docs

- Changelog: `CHANGELOG-v0_82_1.txt`
- Source brief: `docs/OZMOSIS_SOURCE_BRIEF_v0.82.1.md`
- Roadmap: `docs/OZMOSIS_DEVELOPMENT_ROADMAP_v0.82.1.md`
- QA report: `docs/qa/v0.82.1_prepositions_browser_acceptance.md`

Next planned patch: `v0.83 - Word Order Completion Pass`.

### Consolidated from `README-v0_82.md`

# Ozmosis v0.82 - Prepositions Completion Pass

Ozmosis is a static, local-first German learning app. The deployed app remains `index.html`.

v0.82 adds a focused B1 Prepositions practice route under Grammar. It covers fixed dative prepositions, fixed accusative prepositions, two-way prepositions, and common temporal preposition phrases.

## What changed

- Added `content/b1-prepositions.js` with 92 original B1-safe preposition items.
- Added a Prepositions route from the menu and Grammar hub.
- Routed preposition evidence into the existing Learning Map / Skill Matrix prepositions node.
- Added preposition route hints for recommendation, review, repair/debug, and tester surfaces where the current architecture supports them.
- Kept the bank out of Today's B1 Sprint and Diagnostic Sprint.

## What did not change

- No scoring, star logic, Star Threshold Overlay, storage key, save/export/import, Case Trainer, B1 Path, or Today’s Sprint semantics changed.
- No Word Order Completion Pass was started.
- No Connectors Completion Pass, Satzi, B2/CAT18 activation, Genitive expansion, adjective-ending expansion, dependency, backend, build step, API, runtime AI, or runtime German generation was added.

## Acceptance status

Static validation passed. Local browser validation did not complete in this environment: Edge/CDP timed out waiting for the app route marker, and the in-app browser path was blocked by the Windows sandbox.

Next required patch: `v0.82.1 - Prepositions Browser Acceptance Gate`.

## Current docs

- Changelog: `CHANGELOG-v0_82.txt`
- Source brief: `docs/OZMOSIS_SOURCE_BRIEF_v0.82.md`
- Roadmap: `docs/OZMOSIS_DEVELOPMENT_ROADMAP_v0.82.md`
- QA report: `docs/qa/v0.82_prepositions_completion.md`

The strategic source brief, roadmap, and feature register remain the current control documents.

### Consolidated from `README-v0_81_1.md`

# Ozmosis v0.81.1 - Cases & Articles Acceptance / Phase 2.5 Readiness

Ozmosis is a static, local-first German learning app. The deployed app remains `index.html`.

This is a verification and planning patch after v0.81. It accepts the v0.81 Cases & Articles route after browser automation completed a real item, then records the planning and audit work needed before v0.82.

Runtime app metadata remains v0.81 because no runtime behaviour changed.

## What changed

- Ran a focused Edge/CDP acceptance gate for the v0.81 Cases & Articles route.
- Confirmed one real Cases & Articles item can be completed through the app route.
- Confirmed feedback, confidence selection, and `cases_articles` evidence writing.
- Confirmed route isolation across Home, Learning Map, Settings, Dev Tools, and Case Trainer.
- Confirmed Case Trainer remains separate from Cases & Articles.
- Confirmed Export Save, Import Save, and import validation remain reachable.
- Added the Phase 2.5 normalisation addendum v0.2.
- Added the B1-01 extension survival audit.
- Updated the feature register and roadmap handoff so v0.82 can start as Prepositions Completion Pass.

## What did not change

- No German-learning content was edited.
- No task answers were changed.
- No scoring, star, storage-key, export/import, or Today's B1 Sprint semantics changed.
- No Prepositions Completion Pass was implemented.
- No Satzi, B2, CAT18 activation, Genitive expansion, dependency, backend, framework, build step, runtime AI, or runtime German generation was added.

## Current docs

- Changelog: `CHANGELOG-v0_81_1.txt`
- Source brief: `docs/OZMOSIS_SOURCE_BRIEF_v0.81.1.md`
- Roadmap: `docs/OZMOSIS_DEVELOPMENT_ROADMAP_v0.81.1.md`
- QA report: `docs/qa/v0.81.1_cases_articles_acceptance_phase25_readiness.md`
- Phase 2.5 addendum: `docs/planning/ozmosis_phase2_5_full_b1_normalisation_addendum_v0_2.md`
- B1-01 survival audit: `docs/qa/v0.81.1_b1_01_extension_survival_audit.md`

The strategic source brief, roadmap, and feature register remain the current control documents.
