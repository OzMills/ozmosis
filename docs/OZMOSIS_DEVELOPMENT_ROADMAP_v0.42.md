# Ozmosis Development Roadmap v0.42.1

Status: current planning roadmap
Current known development position: v0.42.1 completed
Next planned patch: v0.42.2 - Deferred Findings Recovery / Policy Decisions

This roadmap is planning guidance only. Current repo files, `index.html`, `README.md`, `CHANGELOG.txt`, `AGENTS.md`, and the versioned source brief remain higher-trust sources for implementation state. Do not implement future items early.

## Source-Of-Truth Rules

- Current repo files beat old chats, screenshots, memory, and generated reports.
- Repo-root `index.html` remains the main deployed app file.
- `docs/OZMOSIS_SOURCE_BRIEF_v0.42.md` is the current strategic source brief.
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

## Current B1 Direction

The B1 spine should remain evidence-first:

- record attempts honestly;
- preserve explicit-vs-derived metadata provenance;
- avoid mastery claims where metadata or delayed evidence is too weak;
- keep production cards self-marked unless a later scoring design is explicitly approved;
- separate recognition, cloze, repair, sentence-building, and production evidence.

## Near-Term Roadmap

### v0.42.2 - Deferred Findings Recovery / Policy Decisions

Goal: decide and document the deferred policy and deployment findings that should not be folded into the diagnostic patch.

Scope constraints:

- no Learning Map UI;
- no Skill Matrix UI;
- no weakness repair;
- no new content banks;
- decide, but do not silently change, connector inclusion for Today's B1 Sprint;
- decide, but do not silently rewrite, production-card useful phrase gaps;
- record live deployment status;
- record manual iPhone Safari status if available;
- no B2 content.

Decision topics:

- whether connector items should remain outside Today's B1 Sprint or be added in a later explicit behaviour patch;
- whether production-card useful phrase gaps require a metadata/content repair pass;
- whether diagnostic evidence is clean enough for v0.43 Learning Map UI preparation;
- whether live GitHub Pages is aligned with the repository;
- whether real iPhone Safari keyboard testing has been completed.

### v0.43 - Learning Map UI Preparation

Possible goal: prepare the learner-facing Learning Map UI only after diagnostic data and scaffold behavior are validated.

Requirements before learner-facing claims:

- clear `not_enough_evidence` handling;
- visible distinction between derived and explicit metadata;
- no Reliable/Durable/Transfer-ready language without delayed review evidence.

### v0.44 - Skill Matrix Data Model

Possible goal: model task-depth by skill-node evidence for internal QA and future UI.

Do not build weakness repair until the matrix can separate recognition, cloze, repair, and production evidence.

### v0.45 - Next Recommended Practice v1

Possible goal: choose cautious, non-authoritative next-practice suggestions from evidence.

Recommendations must not claim mastery or diagnose misconceptions without enough evidence.

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
