# AGENTS.md

## Project Identity

Ozmosis is a static, dependency-free German learning app deployed through GitHub Pages. The production app is the repository-root `index.html`.

Ozmosis was formerly called Kasuskonsole. Historical notes may still use that name, but current user-facing and repo-facing language should use `Ozmosis`.

Current working version: `v0.80.4`

Next planned patch: `v0.81 - Cases and Articles Completion Pass`

Current README: `README-v0_80_4.md`

Current changelog: `CHANGELOG-v0_80_4.txt`

Current source brief: `docs/OZMOSIS_SOURCE_BRIEF_v0.80.4.md`

Current roadmap: `docs/OZMOSIS_DEVELOPMENT_ROADMAP_v0.80.4.md`

Use pre-1.0 version naming from now on: `v0.30`, `v0.31`, `v0.32`, `v0.32.1`, `v0.33`, and later.

Use the current repository files as source of truth. If the user supplies a newer uploaded package, loose `index.html`, README, CHANGELOG, screenshot, or Codex log in the task, inspect those first and explicitly state which source you used.

Source-of-truth order:

1. Latest user-supplied file/package for the current task.
2. Current repository files.
3. Live GitHub Pages app.
4. Current Codex chatlog or implementation log.
5. Older shared chats/historical notes.
6. Memory or assumptions.

If sources disagree, prefer the newest concrete file/package. Do not treat old chat claims as proof that a feature or bug still exists.

## Architecture Constraints

- Keep the app static and single-file unless the user explicitly approves a structural change.
- Main app file: `index.html`.
- Do not add a backend, framework, build step, package manager, database, analytics, tracking, accounts, runtime AI generation, external API calls, or third-party dependencies without explicit approval.
- Preserve GitHub Pages compatibility.
- Preserve localStorage compatibility. Do not rename storage keys or change export/import formats without a migration plan and backward-compatibility notes.
- Preserve UTF-8 text. Do not introduce mojibake in German, Turkish, Arabic, Chinese, Ukrainian, or UI symbols.

## Product Constraints

Preserve the current product identity:

- dark neon console aesthetic;
- compact mobile-first layout;
- fixed HUD/footer concept during practice;
- answer -> feedback -> continue rhythm;
- B1 landing/tool hub;
- B1 practice engine;
- central B1 content registry;
- B1 Connector Sprint;
- B1 Wortschatz Survival Set;
- existing Case Trainer with table drills, cloze/gap drills, mixed practice, DER/EIN/KEIN, Nominativ/Akkusativ/Dativ, optional Genitiv, adaptive retry, progress persistence, export/import, results/heatmap, and multilingual support;
- Options and Dev Tools unless the task explicitly changes them.

Do not redesign. Make the smallest robust patch that satisfies the task.

Arabic UI may be RTL, but German exercises, prompts, answer fields, blanks, examples, grammar tables, article forms, heatmaps, model answers, and cloze text must remain LTR.

## Pedagogy Rules

Ozmosis is a learning instrument, not a worksheet generator.

Prioritise retrieval practice, spaced retry, interleaving, contrastive practice, low cognitive load, concise corrective feedback, and natural Hochdeutsch.

For German content changes, check:

- noun gender;
- case logic;
- article form;
- connector logic;
- word order;
- single-answer validity;
- naturalness/register;
- whether the item accidentally tests hidden grammar.

Core clozes should usually test one primary target. Avoid gotcha dative verbs, n-declension nouns, adjective endings, obscure fixed-preposition patterns, heavy idioms, ambiguous no-article plurals, and Genitiv unless explicitly enabled or requested.

Genitiv remains optional and separate from the default Case Trainer pool. Genitiv clozes must have one clean answer and must not require hidden noun/adjective-ending inference.

Connector bank item statuses:

- `active`: may appear in normal practice rounds.
- `review`: excluded from normal practice; reserved for Dev Tools/audit.
- `retired`: excluded from normal practice.

## Editing Rules

- Keep diffs scoped to the requested patch.
- Prefer existing functions, CSS tokens, visual language, and storage conventions.
- Do not remove current Dev Tools behaviour.
- Do not rename storage keys.
- Do not wipe `ozmosis_b1_sprint_progress_v1`.
- Keep German content and docs UTF-8.
- Do not bake new large content banks into unrelated structures unless the task explicitly asks for it.
- If external content files exist under `content/`, keep embedded app data and source content synchronized when the app currently embeds the bank.

## Testing Rules

Do not claim tests passed unless actually run.

For app changes, prefer:

- JavaScript syntax check for inline script in `index.html`;
- browser smoke load;
- target practice-flow checks;
- localStorage persistence checks when progress code changes;
- responsive checks at representative phone/tablet/laptop sizes;
- Arabic RTL/LTR smoke when UI, prompt, or answer rendering changes.

Report tests not run and why.

## Release Notes

Update `CHANGELOG.txt` for user-facing changes. New entries should use pre-1.0 version names.
