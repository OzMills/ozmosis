# Ozmosis Development Roadmap v0.45

Status: current planning roadmap
Current known development position: v0.45 completed
Next planned patch: v0.46 - Progress State Labels v1

This roadmap is planning guidance only. Current repo files, `index.html`, `README.md`, `CHANGELOG.txt`, `AGENTS.md`, and the versioned source brief remain higher-trust sources for implementation state. Do not implement future items early.

## Source-Of-Truth Rules

- Current repo files beat old chats, screenshots, memory, and generated reports.
- Repo-root `index.html` remains the main deployed app file.
- `docs/OZMOSIS_SOURCE_BRIEF_v0.45.md` is the current strategic source brief.
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
- Politeness distractor quality, English support visibility, `obwohl`/`trotzdem` contrast feedback, and ChatGPT/tutor-review handoff require separate patches.

### v0.44 - Skill Matrix Data Model

Completed goal: model task-depth by skill-node evidence for internal QA and future UI.

Do not build weakness repair until the matrix can separate recognition, cloze, repair, and production evidence.

### v0.45 - Next Recommended Practice v1

Completed goal: choose cautious, non-authoritative next-practice suggestions from existing evidence, Learning Map state, and Skill Matrix summaries.

Recommendations must not claim mastery or diagnose misconceptions without enough evidence.

### v0.46 - Progress State Labels v1

Next goal: clarify learner-facing state labels without changing the evidence model, scheduler, scoring, or existing practice routes.

State labels must remain conservative and must not imply mastery, durability, readiness, or diagnosis without delayed evidence.

### Later B1 Work

- metadata repair by bank;
- target and variant identifiers;
- near-miss/error categories;
- structured interleaving;
- delayed review / durability evidence;
- weakness repair;
- worked-example fading;
- production-card expansion once self-marking limits are clear.

## B2 Position

B2 remains later. Do not introduce B2 content or scoring until the B1 evidence spine is reliable enough to extend.
