# Ozmosis Development Roadmap v0.80.2

Status: current planning roadmap
Current known development position: v0.80.2 completed
Next planned patch: v0.81 - Cases and Articles Completion Pass

This roadmap is planning guidance only. Current repo files, `index.html`, `README-v0_80_2.md`, `CHANGELOG-v0_80_2.txt`, `AGENTS.md`, and the versioned source brief remain higher-trust sources for implementation state. Do not implement future items early.

## Source-Of-Truth Rules

- Current repo files beat old chats, screenshots, memory, and generated reports.
- Repo-root `index.html` remains the main deployed app file.
- `docs/OZMOSIS_SOURCE_BRIEF_v0.80.2.md` is the current strategic source brief.
- This roadmap is not permission to broaden scope in any patch.

## Architecture Guardrails

- Static browser app.
- No backend.
- No framework.
- No build step.
- No package manager.
- No database.
- No accounts.
- No analytics or tracking.
- No external API calls.
- No runtime AI generation.
- No dependencies unless explicitly approved.
- Preserve GitHub Pages compatibility.
- Preserve localStorage compatibility, especially `ozmosis_b1_sprint_progress_v1` and `ozmosis_b1_progress_evidence_v1`.
- German learning content remains LTR, including when Arabic UI is active.

## Completed Foundation

- v0.35 extracted Connector Sprint content into `content/b1-connectors.js`.
- v0.36 extracted Redemittel content into `content/b1-redemittel.js`.
- v0.37 extracted Wortschatz content into `content/b1-wortschatz.js`.
- v0.38 added the central B1 content registry.
- v0.39 added static content QA.
- v0.39.1 cleaned up export metadata.
- v0.40 added additive B1 progress evidence.
- v0.40.1 added confidence / guess tracking.
- v0.41 audited B1 skill tags and metadata coverage.
- v0.42 added a non-visual B1 Learning Map data scaffold.
- v0.42.1 added an optional B1 Diagnostic Sprint that records diagnostic evidence into the existing progress evidence and Learning Map scaffold.
- v0.42.2 recovered the diagnostic flow, added clearer exit/result/import/export feedback, improved repair feedback clarity, and documented deferred connector, production-card, distractor, support, and contrast-feedback decisions.
- v0.42.3 repaired support fields for existing Connector, Redemittel, and selected high-yield Wortschatz production cards while keeping production self-marked and no more visible than before.
- v0.42.4 added a visible debug stamp, structured debug snapshot export, and no-save Dev Tools manual item preview/search for QA and bug reports.
- v0.43 added the first learner-facing B1 Learning Map route using the existing evidence scaffold, with conservative state labels, metadata provenance, not-enough-evidence handling, recent work, and review/durability limitations.
- v0.44 added an internal / QA-facing B1 Skill Matrix data model that separates evidence by skill node and task depth while preserving conservative states, metadata provenance, diagnostic context, and production self-marking limitations.
- v0.45 added a cautious rules-based Next Recommended Practice helper and compact Learning Map recommendation card, plus UX recovery for diagnostic pre-start explanation, universal practice exit confirmation, and main-page scrolling.
- v0.46 standardised learner-facing Progress State Labels v1 around Not tested, Not enough evidence, Introduced, Emerging, and Developing while keeping production self-marked and delayed review inactive.
- v0.47 clarified Not tested and Not enough evidence across Learning Map, Suggested Next Practice, diagnostic results, and production-evidence copy without changing evidence semantics.
- v0.48 added tester-ready Home guidance, Known Bugs / Tester Notes, safe tester-report copy, compact Learning Map ordering, clearer sprint-complete hierarchy, production self-marked copy, and Dev Tools tester-report access without changing evidence semantics.
- v0.49 completed progress-foundation QA without adding new scoring or content.
- v0.50 formalised the B1 task-depth vocabulary used by evidence, Learning Map, Skill Matrix, recommendations, debug snapshots, and export metadata.
- v0.51 exposed a modest learner-facing Task-depth matrix inside the Learning Map.
- v0.52 added additive support-level evidence context for safely detected support exposure without changing scoring, confidence values, storage keys, import requirements, or content banks.
- v0.52.1 added item-level support visibility policy infrastructure with tiny additive metadata for after-answer connector support, collapsed Redemittel support, and visible Wortschatz support.
- v0.53 added explicit controlled-production metadata for self-marked production evidence, including model answer exposure and visible useful phrase/checklist context where safely detectable.
- v0.53.1 stabilised mobile/tablet/desktop UX before repair-mode strengthening, including header/menu collisions, Home clipping, active-practice density, support labelling, repair nonsense feedback, safe-area handling, and HUD clearance, without changing scoring or evidence semantics.
- v0.54 strengthened repair-mode feedback with safe nonsense-answer fallback, corrected-sentence feedback, derived repair categories, and concise capitalisation or word-order hints where current metadata supports them, without changing scoring or storage semantics.
- v0.55 added conservative contrast feedback and additive contrast metadata for supported connector, word-order, repair, case, and location/movement contrasts, without changing scoring, storage semantics, content banks, or Today's B1 Sprint composition.
- v0.56 improved Suggested Next Practice so it can account for task-depth gaps, repair evidence, contrast evidence, support-level context, and production self-marking limits while routing only to existing practice screens.
- v0.57 audited and hardened Suggested Next Practice against evidence inflation from thin, easy, scaffolded, diagnostic-only, self-marked production, repair/contrast, and broad Wortschatz evidence without changing scoring, storage, content banks, routes, B1 scope, or Today's B1 Sprint composition.
- v0.57.1 completed a scoped Big UX Update across Home, menu, Options, route pages, active practice, feedback, production cards, diagnostic flow, Learning Map, Skill Matrix, Case Trainer, Dev Tools, and tester surfaces while preserving v0.57 recommendation semantics, scoring, evidence, storage keys, content banks, route inventory, B1-only scope, and Today's B1 Sprint composition.
- v0.57.2 corrected post-v0.57.1 flow, navigation, and mobile UX issues: unnumbered purpose-based Home and route hubs, scrollable mobile menu and Settings access, production-card reveals and skip path, simplified diagnostic results, learner-friendly Learning Map copy, mobile Skill Matrix cards, Case Trainer harmonisation, cloze/feedback/toast/HUD refinements, and Arabic/LTR validation while preserving all learning/storage semantics.
- v0.58 audited and hardened the Skill Matrix against evidence inflation from thin, scaffolded, diagnostic-only, self-marked production-only, derived-only, and unknown/legacy task-depth evidence while preserving conservative labels, scoring, evidence semantics, storage keys, export/import compatibility, content banks, and route behaviour.
- v0.59 stabilised the Learning Map, Skill Matrix, Suggested Next Practice, debug/tester summaries, current docs, and export metadata around the conservative evidence model while preserving v0.57.2 UX fixes and v0.58 matrix QA.
- v0.60 added cautious derived Error Pattern Detection v1 signals for repeated connector, word-order, case/article, repair, support, and confidence contexts without changing scoring, storage, routes, content banks, or production self-marking.
- v0.60.1 improved repair feedback precision, added safe correct-with-note handling for target-correct capitalisation-only repair answers, moved longer repair explanations behind Explain, and relabelled English support from Correct to Meaning at render time without changing storage keys, content banks, routes, or production/diagnostic semantics.
- v0.61 QA-hardened possible-pattern signals, exposed signal-quality/debug/readiness metadata, suppressed diagnostic-only and self-marked-production-only learner-facing pattern claims, and kept weakness repair as internal preparation only.
- v0.62 added concise Recent error type summaries derived from repeated possible-pattern signals and repeated correct-with-note capitalisation evidence, with details reveals and existing-route hints, while keeping repair queues, schedulers, scoring, storage, and content banks unchanged.
- v0.63 added a conservative repair-candidate design gate, existing-route fit checks, matching-item counts, missing-metadata handling, and cautious Learning Map/debug readiness information without creating a queue, targeted repair session, scheduler, scoring change, storage change, or content-bank edit.
- v0.64 added an internal/no-save repair queue scaffold that maps routeable repair candidates to existing matching items, handles not-enough-matching-items honestly, and exposes Dev Tools/Learning Map previews without starting targeted repair practice.
- v0.65 added narrow targeted repair practice for high-quality queues using existing items only, normal evidence recording with additive repair queue metadata, optional confidence, and non-mastery completion copy.
- v0.66 QA-hardened targeted repair practice, added stricter queue-quality metadata, improved route-fit and matching-item copy, exposed item-selection reasons, and kept support/confidence as context-only rather than a targeted repair route.
- v0.67 added concise connector diagnostic cards for repeated connector meaning, word-order, and connector-position signals, with one-answer/thin evidence suppression, Explain details, existing-route hints, Dev Tools metadata, and no scoring/storage/content-bank changes.
- v0.68 audited the diagnostic/repair layer, suppressed scaffolded-only learner-facing pattern cards, tightened copy, and added debug QA metadata for thresholds, route hints, suppression reasons, privacy, and scoring.
- v0.69 stabilised the diagnostic repair band before durability/review work, added debug stability metadata, and documented v0.70 as a separate Durability / Review Design Gate.
- v0.69.1 completed a holistic UX legibility and access-hierarchy pass across first-run language selection, Settings/menu hierarchy, Home, Learning Map layering, targeted repair presentation, placeholders, production-card instruction copy, and desktop/mobile density while preserving scoring, evidence, storage, export/import, content banks, Today's B1 Sprint, and B1-only scope.
- v0.69.2 completed the v0.69.1 gate by adding true boot/first-paint protection, making Settings the static owner of support-language selection, correcting first-run language labels, cleaning generated browser-profile artefacts, and updating ignore rules while preserving scoring, evidence, storage, export/import, content banks, targeted repair, production self-marking, Today's B1 Sprint, and B1-only scope.
- v0.70 added a QA-only durability/review readiness snapshot in Dev Tools, debug snapshot output, and tester reports. It summarises timestamp coverage, item mapping, repeated attempts, possible delayed pairs, task-depth spread, confidence/support coverage, and blockers before active review while keeping review scheduling, Leitner activation, learner-facing durability states, mastery claims, and B1-readiness claims inactive.
- v0.71 added conservative internal review eligibility rules and a Dev Tools-only eligibility summary. It excludes unsafe records from future review candidacy and keeps review routing, scheduling, due/overdue copy, durability labels, mastery claims, storage migration, scoring changes, and content-bank edits inactive.
- v0.72 added a Dev Tools-only no-save review candidate preview with safe labels, task/depth context, candidate quality, route-fit checks, reasons, exclusion reasons, and limitations while keeping learner-facing review, scheduling, Home recommendations, storage mutation, scoring changes, and evidence recording inactive.
- v0.73 added a narrow opt-in Review Practice route startable from Dev Tools with preview-ready existing items only, normal evidence recording plus additive review context, and cautious completion copy while keeping scheduling, due/overdue copy, durability labels, mastery claims, content generation, storage migrations, scoring changes, and content-bank edits inactive.
- v0.74 integrated Review Practice into Home, Menu, and Learning Map only when older auto-graded review candidates are available, with cautious optional-review copy and no scheduler, due/overdue language, mastery, durability, or scoring/storage/content changes.
- v0.75 stabilised the review/durability foundation, clarified tester and Dev Tools copy, audited review practice evidence behaviour, and kept review optional, existing-item-only, non-scheduled, non-durability, and non-mastery.
- v0.75.1 completed a holistic UX/access-hierarchy pass, making Home a calmer tutor start screen, grouping Menu by learner intent, collapsing Advanced/QA on Home, making Learning Map summary-first, and adding screenshot QA harness coverage without changing learning semantics.
- v0.76 added read-time metadata review-coverage audit/repair metadata, Dev Tools metadata coverage, debug/tester output, and derived review candidate metadata without rewriting content banks, changing scoring, changing storage keys, or making self-marked production auto-graded.
- v0.77 added an optional learner-readable Markdown progress summary with copy/download controls in Settings/Data while preserving JSON export/import compatibility and avoiding raw localStorage, typed-answer exposure, broad percentages, and unsupported mastery/readiness claims.
- v0.78 added internal durability QA audit output for timestamp coverage, delayed attempt context, review-practice evidence, claim safety, learner-readable export caution, and blockers before stronger labels while keeping scheduler, due/overdue UI, Leitner review, and learner-facing durability/readiness states inactive.
- v0.79 added review-system stability audit output for optional Review Practice visibility, empty state, evidence context, confidence-update policy, duplicate checks, and export/import preservation while keeping review optional, existing-item-only, non-scheduled, and non-mastery.
- v0.80 added a B1 coverage audit for planned B1 spine clusters, item-count coverage categories, priority gaps, self-marked/diagnostic/review limitations, and Dev Tools/debug/tester output without changing content banks, scoring, storage, routes, or evidence.
- v0.80.1 stabilised the local screenshot/QA harness, exact named screenshot manifest, manual real-device QA checklist, and live-deployment verification notes before content-completion work.
- v0.80.2 added render-time shuffling for B1 learner-facing multiple-choice options, stable active-item choice order, correctness by stable choice identity/canonical answer value, additive choice-order metadata, and a focused Edge/CDP QA gate without changing scoring, storage keys, content banks, production self-marking, or Case Trainer article buttons.

## Current B1 Direction

The B1 spine should remain evidence-first:

- record attempts honestly;
- preserve explicit-vs-derived metadata provenance;
- avoid mastery claims where metadata or delayed evidence is too weak;
- keep production cards self-marked unless a later scoring design is explicitly approved;
- separate recognition, cloze, repair, sentence-building, and production evidence.

## Near-Term Roadmap

### v0.43 - Learning Map UI Preparation

Completed goal: expose the existing Learning Map scaffold in a learner-facing B1 evidence overview while preserving conservative state language and avoiding mastery or durability claims.

Requirements before learner-facing claims:

- clear `not_enough_evidence` handling;
- visible distinction between derived and explicit metadata;
- no Reliable/Durable/Transfer-ready language without delayed review evidence.

Deferred decisions already recorded in v0.42.2:

- Connector items should remain outside Today's B1 Sprint until diagnostic/Learning Map targeting can add them intentionally.
- Production cards should not become more visible until usefulPhrases/checklists are repaired and a later visibility policy is approved.
- Politeness distractor quality, English support visibility, `obwohl`/`trotzdem` contrast feedback, and the future External AI Review Handoff / Tutor Review Code require separate patches.

### v0.44 - Skill Matrix Data Model

Completed goal: model task-depth by skill-node evidence for internal QA and future UI.

Do not build weakness repair until the matrix can separate recognition, cloze, repair, and production evidence.

### v0.45 - Next Recommended Practice v1

Completed goal: choose cautious, non-authoritative next-practice suggestions from existing evidence, Learning Map state, and Skill Matrix summaries.

Recommendations must not claim mastery or diagnose misconceptions without enough evidence.

### v0.46 - Progress State Labels v1

Completed goal: clarify learner-facing state labels without changing the evidence model, scheduler, scoring, or existing practice routes.

State labels remain conservative and do not imply mastery, durability, readiness, or diagnosis without delayed evidence.

### v0.47 - Not Enough Evidence Handling

Completed goal: make Not tested and Not enough evidence clearer in learner-facing progress surfaces without changing scoring, routing, Today’s Sprint composition, connector inclusion, or production-card visibility.

This should improve empty/thin evidence explanations, not create a new scheduler or weakness-repair route.

### v0.48 - Tester-Ready UX / Visual System Pass

Completed goal: make Ozmosis clearer and safer for external testers with a controlled UX and visual-system pass.

Scope includes Home hierarchy, tester guidance, Known Bugs / Tester Notes, tester report copy, active practice layout, feedback layout, sprint complete hierarchy, Learning Map density, production-card clarity, Dev Tools clarity, and mobile scroll/layout. Do not add fake progress, review scheduling, weakness repair, B2, runtime AI, dependencies, or a full Skill Matrix UI.

### v0.48.1 - Confidence-as-Next Interaction

Completed goal: reduce post-feedback friction by allowing confidence selection to record confidence and advance to the next item where this is safe.

Do not change confidence storage values, scoring, evidence semantics, production-card self-marking, diagnostic evidence, export/import shape, or Today’s Sprint composition. If the evidence flow cannot avoid duplicate evidence or scoring changes, defer this patch.

### v0.49 - Progress Foundation QA

Completed goal: audit active learner-facing progress claims, diagnostic framing, recommendation wording, production self-marking language, debug/tester-report privacy, storage compatibility, and content-bank impact before the task-depth track.

### v0.50 - Formalise Task Depth

Completed goal: formalise the internal B1 task-depth vocabulary and add read-time canonicalisation for known and legacy values without changing stored evidence, scoring, route composition, or content banks.

### v0.51 - Skill Matrix v1

Completed goal: expose a modest learner-facing Task-depth matrix inside the existing Learning Map using current Skill Matrix evidence, conservative labels, production/diagnostic limitations, and Edge/CDP browser-responsive validation.

### v0.57.1 - Big UX Update

Completed goal: consolidate the mobile-first interaction and visual system so the current B1 app feels calmer, clearer, more compact, and more deliberate without changing learning semantics.

Preserved:

- v0.57 recommendation hardening and QA metadata;
- scoring and correctness semantics;
- confidence, support-level, task-depth, diagnostic, and production self-marking semantics;
- localStorage keys and export/import compatibility;
- current routes, content banks, B1-only scope, and Today's B1 Sprint composition.

### v0.57.2 - Flow, Navigation, and Mobile UX Corrections

Completed goal: correct the remaining post-v0.57.1 mobile navigation, information-architecture, route-hub, production-card, diagnostic-result, Learning Map, Skill Matrix presentation, Case Trainer, cloze, feedback, toast, HUD, and Arabic/LTR issues without changing evidence or scoring semantics.

Preserved:

- v0.57 recommendation hardening and QA metadata;
- scoring and correctness semantics;
- confidence, support-level, task-depth, diagnostic, and production self-marking semantics;
- localStorage keys and export/import compatibility;
- current routes, content banks, B1-only scope, and Today's B1 Sprint composition.

### v0.58 - Skill Matrix QA

Completed goal: harden the Skill Matrix against evidence inflation without changing the evidence model, storage, scoring, content banks, or route behaviour.

Preserved:

- v0.57 recommendation hardening and QA metadata;
- scoring and correctness semantics;
- confidence, support-level, task-depth, diagnostic, and production self-marking semantics;
- localStorage keys and export/import compatibility;
- current routes, content banks, B1-only scope, and Today's B1 Sprint composition.

### v0.59 - Stabilise Skill Matrix

Completed goal: align the Learning Map, Skill Matrix, Suggested Next Practice, debug/tester summaries, docs, and export metadata before the error-pattern signal layer.

Preserved:

- v0.57 recommendation hardening and QA metadata;
- v0.57.2 flow/navigation/mobile UX corrections;
- v0.58 Skill Matrix QA metadata and conservative caps;
- scoring and correctness semantics;
- confidence, support-level, task-depth, diagnostic, and production self-marking semantics;
- localStorage keys and export/import compatibility;
- current routes, content banks, B1-only scope, and Today's B1 Sprint composition.

### v0.60 - Error Pattern Detection v1

Completed goal: add cautious, thresholded, rules-based possible-pattern signals using existing evidence and metadata only.

Preserved:

- v0.57 recommendation hardening and QA metadata;
- v0.58 Skill Matrix QA metadata and conservative caps;
- v0.59 Learning Map / Skill Matrix / recommendation consistency;
- scoring and correctness semantics;
- confidence, support-level, task-depth, diagnostic, and production self-marking semantics;
- localStorage keys and export/import compatibility;
- current routes, content banks, B1-only scope, and Today's B1 Sprint composition.

### v0.80 - B1 Coverage Audit

Completed goal: audit current B1 content against the planned B1 spine and expose conservative coverage categories for future content work.

Preserved:

- content banks, item IDs, answers, and statuses;
- scoring and correctness semantics;
- confidence, support-level, task-depth, diagnostic, review, and production self-marking semantics;
- localStorage keys and export/import compatibility;
- current routes, B1-only scope, and Today's B1 Sprint composition.

### v0.80.1 - Live / Real Device / Screenshot Harness Stabilisation

Completed goal: stabilise the local screenshot/QA harness, named screenshot manifest, real-device manual QA checklist, and live-deployment verification notes before content-completion work.

### v0.80.2 - Multiple-Choice Choice Shuffling Safety

Completed goal: remove learner-facing answer-position bias from B1 multiple-choice rendering. Displayed choices are shuffled per fresh item render, remain stable through answer/feedback/confidence, and are checked by stable choice identity or canonical answer value rather than displayed position.

Preserved:

- Case Trainer article buttons;
- content banks, item IDs, answers, and statuses;
- scoring and correctness semantics;
- confidence, support-level, task-depth, diagnostic, review, and production self-marking semantics;
- localStorage keys and export/import compatibility;
- current routes, B1-only scope, and Today's B1 Sprint composition.

### v0.81 - Cases and Articles Completion Pass

Next goal: use the v0.80 audit to complete cases/articles coverage where needed without broad content-bank churn or evidence-model changes.

### Later B1 Work

- cases and articles completion;
- fixed and two-way prepositions;
- word order;
- connector completion;
- Redemittel and Wortschatz completion;
- review coverage stabilisation after content coverage improves;
- production-card expansion once self-marking limits are clear.
- External Review Handoff Spike:
  - define a standard prompt format for external AI/tutor review;
  - define a strict review-code schema;
  - define local validation and import rules;
  - record imported review as external reviewed evidence only;
  - preserve the distinction between self-marked, auto-graded, and externally reviewed evidence;
  - add no runtime AI, backend, API calls, accounts, analytics, dependencies, or QR generation in the foundation pass.

## B2 Position

B2 remains later. Do not introduce B2 content or scoring until the B1 evidence spine is reliable enough to extend.
