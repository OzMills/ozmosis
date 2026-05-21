# Ozmosis

Ozmosis is a static, dependency-free German learning app focused on fast B1 test preparation.

It was formerly called Kasuskonsole and began as a German case/article trainer. The current product direction is a compact personal B1 sprint tool while preserving the existing Case Trainer.

## Current Focus

Build the fastest useful personal B1 test-prep tool.

Current priority order:

1. Improve Today's B1 Sprint composition.
2. Add Wortschatz Sprint content.
3. Add writing/speaking cards.
4. Add weakness repair.
5. Later: full Leitner, import tools, B2 expansion.

## Current Known Version

Current working version: `v0.33.1`

Next planned patch: `v0.34`

Known v0.33 state:

- Ozmosis landing/tool hub exists.
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
- B1 progress persists under `ozmosis_b1_sprint_progress_v1`.
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
├─ index.html
├─ README.md
├─ CHANGELOG.txt
├─ AGENTS.md
├─ .gitignore
├─ content/
│  └─ ozmosis_b1_connector_sprint_v1_bank.json
└─ docs/
   ├─ Kasuskonsole Source Brief.md
   ├─ OZMOSIS_B1_Test_Sprint_Pivot_Production_Plan.md
   ├─ OZMOSIS_Case_Teaching_Leitner_Iteration_Plan.md
   └─ qa/
      └─ ozmosis_b1_connector_sprint_v1_qa_protocol.md
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
