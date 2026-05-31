# Ozmosis

Ozmosis is a static, dependency-free German learning app focused on fast B1 test preparation.

It was formerly called Kasuskonsole and began as a German case/article trainer. The current product direction is a compact personal B1 sprint tool while preserving the existing Case Trainer.

## Current Focus

Build the fastest useful personal B1 test-prep tool.

Current priority order:

1. Keep B1 progress evidence honest and learner-readable.
2. Keep cautious progress state labels consistent.
3. Improve not-enough-evidence handling without overclaiming.
4. Later: weakness repair, full Leitner, import tools, B2 expansion.

## Current Known Version

Current working version: `v0.80.2`

Next planned patch: `v0.81 - Cases and Articles Completion Pass`

Current source brief: `docs/OZMOSIS_SOURCE_BRIEF_v0.80.2.md`

Current roadmap: `docs/OZMOSIS_DEVELOPMENT_ROADMAP_v0.80.2.md`

Known current state:

- Ozmosis landing/tool hub exists.
- v0.80.2 adds render-time shuffling for learner-facing B1 multiple-choice options so authored A/B/C order no longer creates answer-position bias while preserving active-item stability.
- Lightweight B1 practice engine exists.
- 24 seed B1 items exist across Grammar, Wortschatz, and Redemittel.
- Today's B1 Sprint, Grammar, Wortschatz, and Redemittel open real practice rounds.
- Structured B1 Connector Sprint exists under Grammar.
- The connector bank contains 120 items covering reason, contrast, purpose, time, repair, and production transfer.
- Connector Sprint supports connector-choice, word-order cloze, error-repair, and production-card item types.
- v0.32.1 stabilised Connector Sprint UX and item-status handling.
- v0.32.2 improves mobile typed-cloze overflow, input sizing, and focus layout.
- v0.32.3 fixes mobile typed-cloze keyboard-era clipping and connector word-order consistency.
- v0.33 adds the first Redemittel Survival Set and seeded B1 round randomisation.
- v0.33.1 cleans up the B1 renderer contract and feedback behaviour.
- v0.33.2 reframes the landing page as a B1 command screen.
- v0.33.3 repairs practice-flow UX, choice-submit consistency, translation reveal, HUD progress labelling, and honest extra-practice star behaviour.
- v0.33.4 completes the blocked v0.33.3 QA gate and clarifies homepage hero copy so it does not imply resumable daily-round queues.
- v0.33.5 adds a real resumable 12-item daily sprint queue, FIFO retry for failed/assisted items, visible translation support, Teach me scaffolding, and clearer star/feedback behaviour.
- v0.34 integrates the 150-item B1 Wortschatz Survival Set while preserving daily sprint, Teach me, FIFO retry, Redemittel, Connector Sprint, and Case Trainer behaviour.
- v0.35 extracts the B1 Connector Sprint item bank into `content/b1-connectors.js` while preserving static GitHub Pages compatibility.
- v0.36 extracts the B1 Redemittel item bank into `content/b1-redemittel.js`.
- v0.37 extracts the B1 Wortschatz source bank into `content/b1-wortschatz.js` while preserving the v0.34 schema mapping in `index.html`.
- v0.38 adds a central B1 content registry for the existing core, Connector, Redemittel, and Wortschatz banks without changing learner-facing behaviour.
- v0.39 adds a static content QA report for the existing B1 banks, registry metadata, Daily Sprint inclusion policy, UTF-8 safety, route smoke, persistence, export/import, responsive checks, and Arabic/German directionality.
- v0.39.1 updates stale progress-export metadata while preserving import compatibility and app behaviour.
- v0.40 adds the first additive B1 progress evidence model for attempt-level learning evidence, export/import support, and future Learning Map hooks without adding learner-facing mastery claims.
- v0.40.1 adds optional Sure / Unsure / Guessed confidence capture to B1 evidence records without changing scoring, sprint composition, or routing.
- v0.41 audits B1 skill tag and progress metadata coverage for future Learning Map, Skill Matrix, weakness repair, transfer testing, and interleaving work.
- v0.42 adds versioned planning docs and a non-visual B1 Learning Map data scaffold for conservative evidence aggregation.
- v0.42.1 adds an optional 18-item B1 Diagnostic Sprint that records diagnostic attempt evidence into the existing B1 evidence model.
- v0.42.2 improves diagnostic explanation/exit/result framing, scroll/layout recovery, export/import status feedback, and repair-feedback clarity while documenting deferred connector, production-card, distractor, support, and contrast-feedback decisions.
- v0.42.3 repairs useful phrases, self-check checklists, and model answers for existing production cards while keeping production cards self-marked and no more visible than before.
- v0.42.4 adds a lightweight debug stamp, Dev Tools debug snapshot export, and no-save manual item preview for QA and bug reports.
- v0.43 adds the first learner-facing B1 Learning Map using the existing evidence scaffold, with cautious evidence states, metadata provenance, not-enough-evidence handling, recent work, and review/durability limitations.
- v0.44 adds an internal / QA-facing B1 Skill Matrix data model that separates evidence by skill node and task depth while keeping states conservative.
- v0.45 adds cautious rules-based Next Recommended Practice guidance to the Learning Map, moves Diagnostic Sprint explanation into a pre-start step, adds universal active-practice exit confirmation, and recovers main-page scrolling.
- v0.46 standardises learner-facing progress labels around Not tested, Not enough evidence, Introduced, Emerging, and Developing, and documents External AI Review Handoff as a roadmap-only future concept.
- v0.47 clarifies Not tested and Not enough evidence messaging across Learning Map, Suggested Next Practice, Diagnostic results, and production-card evidence copy.
- v0.48 adds tester-ready Home guidance, Known Bugs / Tester Notes, safe tester-report copy, clearer sprint-complete copy, compact Learning Map ordering, and Dev Tools tester-report access without changing evidence semantics.
- v0.51 exposes a modest learner-facing Task-depth matrix inside the Learning Map using existing Skill Matrix evidence, conservative state labels, production/diagnostic limitations, and responsive Edge/CDP-validated layout.
- v0.52 adds additive support-level metadata to new B1 evidence where support exposure can be detected safely; support level is evidence context, not a score.
- v0.52.1 adds a conservative item-level support visibility policy so support can remain visible by default and be collapsed or delayed only where tiny metadata explicitly asks for it.
- v0.53 adds clearer controlled-production evidence metadata for self-marked production cards without auto-grading free text or changing production route visibility.
- v0.55 adds conservative contrast-task feedback and additive contrast metadata for supported B1 connector, word-order, repair, and case/location contrasts.
- v0.56 improves Suggested Next Practice so recommendations can consider task-depth gaps, repair evidence, contrast evidence, support-level context, and production self-marking limits while routing only to existing practice screens.
- v0.57 audits and hardens Suggested Next Practice against evidence inflation from thin, easy, scaffolded, diagnostic-only, self-marked production, repair/contrast, and broad Wortschatz evidence while preserving routes, scoring, storage, content banks, and Today's B1 Sprint composition.
- v0.57.1 performs the Big UX Update: a mobile-first visual-system, menu, Home, route-page, active-practice, cloze, feedback, Options, Learning Map, Skill Matrix, Case Trainer, Dev Tools, responsive, keyboard/focus, and Arabic/LTR pass while preserving v0.57 recommendation hardening and all learning/storage semantics.
- v0.57.2 corrects the remaining post-v0.57.1 flow, navigation, and mobile UX issues: scrollable menu/settings access, unnumbered purpose-based Home and route hubs, production-card reveals and skip path, simpler diagnostic results, learner-friendly Learning Map copy, mobile Skill Matrix cards, Case Trainer harmonisation, cloze/feedback/toast/HUD refinements, and Arabic/LTR validation without changing scoring, evidence, storage, route inventory, content banks, or Today's B1 Sprint composition.
- v0.58 audits and hardens the Skill Matrix against evidence inflation from thin samples, scaffolded evidence, diagnostic-only records, self-marked production, derived metadata, and unknown/legacy task depths while preserving conservative labels, scoring, storage, content banks, and route behaviour.
- v0.59 stabilises the Learning Map, Skill Matrix, Suggested Next Practice, debug/tester summaries, versioned docs, and export metadata around the conservative evidence model while preserving the v0.57.2 UX fixes and v0.58 matrix QA.
- v0.60 adds cautious rules-based Error Pattern Detection v1 as a derived signal layer for repeated connector, word-order, case/article, repair, support, and confidence contexts without changing scoring, storage, routes, content banks, or production self-marking.
- v0.60.1 improves repair feedback precision, adds safe correct-with-note handling for minor capitalisation-only repair answers, moves longer repair explanations behind Explain, and relabels English support from Correct to Meaning without changing storage keys, content banks, Today's B1 Sprint composition, or production/diagnostic semantics.
- v0.61 audits and hardens possible-pattern signals against thin, diagnostic-only, scaffolded, and self-marked production evidence, adds compact learner copy, exposes debug signal-quality and repair-readiness metadata, and keeps weakness repair queues inactive.
- v0.62 adds concise Recent error type summaries derived from repeated possible-pattern signals and repeated correct-with-note capitalisation evidence, with existing-route hints and details reveals, without adding repair queues, new routes, scoring changes, storage changes, or content-bank edits.
- v0.63 adds a conservative repair-candidate design gate that classifies repeated pattern/error-type evidence as watch, candidate, routeable, or not ready, checks existing-route fit and missing metadata, and exposes cautious Learning Map/debug readiness information without creating a queue or targeted repair session.
- v0.64 adds an internal/no-save repair queue scaffold that maps routeable repair candidates to existing matching items, exposes a Dev Tools preview, and shows preview details in the Learning Map without starting learner-facing targeted repair practice.
- v0.65 adds a narrow targeted repair practice path for high-quality repair queues using existing items only, normal evidence recording, optional confidence, and non-mastery completion copy.
- v0.66 QA-hardens targeted repair practice, adds a stricter queue-quality gate, improves route-fit copy, expands routeability only where existing matching items support it, and exposes no-save selection reasons in Dev Tools.
- v0.67 adds concise connector diagnostic cards for repeated connector meaning, word-order, and position signals while keeping one-answer/thin evidence suppressed and routing only to existing Grammar/Connector practice.
- v0.68 runs Diagnostic QA across possible patterns, recent error types, connector cards, repair candidates, queues, targeted repair, and recommendation route hints, tightening scaffolded-only suppression and debug QA summaries.
- v0.69 stabilises the v0.60-v0.69 diagnostic repair band with a debug stability summary and confirms durability/review work remains deferred to a separate v0.70 design gate.
- v0.69.1 performs a holistic UX legibility and access-hierarchy pass so first-run language selection, Settings, Home, menu navigation, Learning Map, targeted repair presentation, placeholders, production cards, and desktop/mobile density feel calmer and more learner-facing without changing scoring, evidence, storage, routes, content banks, or B1-only scope.
- v0.69.2 completes the v0.69.1 gate with true boot/first-paint protection, static Settings ownership of support-language selection, exact first-run language labels, browser profile artefact cleanup, updated ignore rules, and QA coverage while preserving scoring, evidence, storage, export/import, content banks, targeted repair, and B1-only scope.
- v0.70 adds a QA-only durability/review readiness snapshot in Dev Tools and debug/tester output, summarising timestamp coverage, item mapping, repeated attempts, possible delayed pairs, task-depth spread, support/confidence coverage, and blockers before active review. It does not activate review scheduling, Leitner, review queues, learner-facing durability states, mastery, or B1-readiness claims.
- v0.71 adds conservative internal review eligibility rules and a Dev Tools-only eligibility summary. It excludes missing/unmapped items, missing timestamps, diagnostic-only evidence, self-marked production-only evidence, original non-auto-graded records, same-session attempts, and unsupported production-card tasks without creating a learner-facing review route, schedule, due copy, durability labels, or storage migration.
- v0.72 adds a Dev Tools-only no-save review candidate preview using v0.71 eligibility rules. It shows preview-ready and excluded candidates with safe labels, task/depth context, route-fit checks, quality levels, reasons, and limitations without adding a learner review route, Home recommendation, scheduler, storage mutation, or evidence recording.
- v0.75.1 performs a holistic UX redesign/access hierarchy pass: Home becomes a calm tutor start screen, Advanced/QA is collapsed, Menu is grouped around Continue/Practice/Progress, Learning Map is summary-first, desktop/short-height layouts are refined, and screenshot QA harness coverage is added without changing scoring/evidence/storage/content semantics.
- v0.76 audits and repairs B1 review-coverage metadata at read time, exposing Dev Tools/debug metadata coverage for `reviewGroup`, `targetId`, variant, contrast, repair, support, and production self-marking limits without rewriting content banks or changing scoring/storage/evidence semantics.
- v0.77 adds an optional learner-readable Markdown progress summary for self-reflection, tutor handoff, and debugging while preserving the existing JSON export/import path and avoiding raw localStorage, typed answers, broad percentages, and mastery/readiness claims.
- v0.78 adds an internal Dev Tools durability QA audit for timestamp coverage, delayed attempt context, review-practice evidence, claim safety, learner-readable export caution, and blockers before stronger labels, while keeping scheduler, due/overdue UI, Leitner review, and learner-facing durability/readiness states inactive.
- v0.79 stabilises the optional B1 Review Practice system with a Dev Tools/debug audit for actionable visibility, empty state, evidence context, confidence-update policy, duplicate checks, and export/import preservation, while keeping review optional, existing-item-only, non-scheduled, and non-mastery.
- v0.80 adds a B1 coverage audit for the planned B1 spine, exposing item-count coverage categories, priority gaps, self-marked/diagnostic/review limitations, and a Dev Tools coverage summary without changing content banks, scoring, storage, routes, or evidence records.
- v0.80.1 stabilises the local screenshot/QA harness, exact named screenshot manifest, real-device manual QA checklist, live-deployment verification note, and documentation pointers before content-completion work, without changing learning content, scoring, evidence, storage, or routes.
- v0.80.2 adds render-time choice shuffling for B1 learner-facing multiple-choice items, keeps each active question's displayed order stable through answer, feedback, and confidence, and resolves correctness from stable choice identity or canonical answer value rather than displayed position.
- v0.75 stabilises the review/durability foundation with QA copy hardening, tester-note clarity, export/import and browser smoke coverage, and documentation hygiene while keeping review optional and non-scheduled.
- v0.74 integrates opt-in Review Practice into Home, Menu, and Learning Map only when older auto-graded review candidates are available. Review stays optional, non-scheduled, non-durability, and non-mastery.
- v0.73 adds a narrow opt-in Review Practice route, currently startable from Dev Tools, using preview-ready existing items only. Review attempts save normal item evidence with additive `reviewContext` metadata and cautious completion copy; no scheduler, due/overdue copy, mastery claim, durability label, content generation, storage migration, or scoring change was added.
- v0.54 strengthens repair feedback with safer corrected-sentence feedback, derived repair categories, nonsense-answer fallback, capitalisation hints, and word-order micro-feedback where metadata supports it.
- v0.53.1 stabilised mobile/tablet/desktop UX by fixing header/menu/home clipping, active-practice spacing, support labelling, repair nonsense feedback, and safe-area/HUD behaviour without changing learning semantics.
- B1 progress persists under `ozmosis_b1_sprint_progress_v1`.
- B1 progress evidence persists under `ozmosis_b1_progress_evidence_v1`.
- Existing Case Trainer, Options, Dev Tools, export/import, and localStorage compatibility are preserved.

Use pre-1.0 version naming from this point onward: `v0.30`, `v0.31`, `v0.32`, `v0.32.1`, `v0.33`, and so on.

## Architecture

Ozmosis is intentionally simple:

- static browser app;
- main deployed file: `index.html`;
- no backend;
- no framework;
- no build step;
- no package manager;
- no database;
- no accounts;
- no analytics;
- no external API calls;
- no runtime AI generation;
- no dependencies unless explicitly approved.

The app is designed to run directly in the browser and deploy through GitHub Pages.

## Repository Structure

Recommended clean repo structure:

```text
/
|- index.html
|- README.md
|- CHANGELOG.txt
|- AGENTS.md
|- .gitignore
|- content/
|  |- b1-connectors.js
|  |- b1-redemittel.js
|  |- b1-wortschatz.js
|  |- ozmosis_b1_connector_sprint_v1_bank.json
|  `- ozmosis_b1_wortschatz_survival_set_v1.json
`- docs/
   |- OZMOSIS_SOURCE_BRIEF_v0.55.md
   |- OZMOSIS_DEVELOPMENT_ROADMAP_v0.55.md
   |- OZMOSIS_B1_Test_Sprint_Pivot_Production_Plan.md
   |- OZMOSIS_Case_Teaching_Leitner_Iteration_Plan.md
   `- qa/
      `- ozmosis_b1_connector_sprint_v1_qa_protocol.md
```

Do not commit old version folders, screenshots, ZIP packages, generated test output, browser profiles, or temporary Codex artifacts.

## Content Rules

German learning content, prompts, examples, answer fields, tables, heatmaps, and cloze blanks must remain LTR even when Arabic UI is active.

Core B1 content should be natural Hochdeutsch with one intended answer. Avoid hidden advanced grammar, adjective-ending targets, Genitiv targets, obscure vocabulary, and ambiguous clozes unless a task explicitly asks for them.

Connector bank item statuses:

- `active`: may appear in normal practice rounds.
- `review`: excluded from normal practice; reserved for Dev Tools/audit.
- `retired`: excluded from normal practice.

## Development Rules

- Preserve localStorage compatibility.
- Do not rename storage keys without a migration.
- Preserve existing Case Trainer functionality.
- Preserve Options, Dev Tools, export/import, and progress persistence.
- Keep the dark neon console identity.
- Do not redesign the app unless explicitly requested.
- Do not claim tests passed unless they were actually run.

## Test Expectations

For app changes, report exactly what was run. At minimum, prefer:

- JavaScript syntax check for inline script in `index.html`;
- browser smoke load;
- relevant practice-flow smoke checks;
- localStorage persistence check when progress code changes;
- responsive checks for phone and short-laptop sizes;
- Arabic RTL/LTR smoke when UI or prompt rendering changes.
