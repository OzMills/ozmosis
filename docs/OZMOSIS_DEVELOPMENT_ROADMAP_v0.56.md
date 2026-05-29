# Ozmosis Development Roadmap v0.56

Status: current planning roadmap
Current known development position: v0.56 completed
Next planned patch: v0.57 - Recommendation QA and Evidence Inflation Audit

This roadmap is planning guidance only. Current repo files, `index.html`, `README-v0_56.md`, `CHANGELOG-v0_56.txt`, `AGENTS.md`, and the versioned source brief remain higher-trust sources for implementation state. Do not implement future items early.

## Source-Of-Truth Rules

- Current repo files beat old chats, screenshots, memory, and generated reports.
- Repo-root `index.html` remains the main deployed app file.
- `docs/OZMOSIS_SOURCE_BRIEF_v0.56.md` is the current strategic source brief.
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

### Later B1 Work

- metadata repair by bank;
- target and variant identifiers;
- near-miss/error categories;
- structured interleaving;
- delayed review / durability evidence;
- weakness repair;
- worked-example fading;
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
