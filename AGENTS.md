# AGENTS.md

## Project identity

Kasuskonsole is a static, single-file German case/article trainer deployed through GitHub Pages. The production app is the repository-root `index.html`.

Use the current repository files as source of truth. If the user supplies a newer uploaded package, loose `index.html`, README, CHANGELOG, screenshot, or Codex log in the task, inspect those first and explicitly state which source you used.

Source-of-truth order:

1. Latest user-supplied file/package for the current task.
2. Current repository files.
3. Live GitHub Pages app.
4. Current Codex chatlog or implementation log.
5. Older shared chats/historical notes.
6. Memory or assumptions.

If sources disagree, prefer the newest concrete file/package. Do not treat old chat claims as proof that a feature or bug still exists.

## Architecture constraints

- Keep the app static and single-file unless the user explicitly approves a structural change.
- Main app file: `index.html`.
- Do not add a backend, framework, build step, package manager, database, analytics, tracking, accounts, runtime AI generation, external API calls, or third-party dependencies without explicit approval.
- Preserve GitHub Pages compatibility.
- Preserve localStorage compatibility. Do not rename storage keys or change export/import formats without a migration plan and backward-compatibility notes.
- Preserve UTF-8 text. Do not introduce mojibake in German, Turkish, Arabic, Chinese, Ukrainian, or UI symbols.

## Product constraints

Preserve the current product identity:

- dark neon console aesthetic;
- compact mobile-first layout;
- fixed HUD/footer concept during practice;
- answer → feedback → continue rhythm;
- table drills, cloze/gap drills, mixed practice, DER/EIN/KEIN, Nominativ/Akkusativ/Dativ, optional Genitiv, adaptive retry, progress persistence, export/import, results/heatmap, and multilingual support unless the task explicitly changes them.

Do not redesign. Make the smallest robust patch that satisfies the task.

Arabic UI may be RTL, but German exercises, prompts, answer fields, blanks, examples, grammar tables, article forms, and heatmaps must remain LTR.

## Pedagogy rules

Kasuskonsole is a learning instrument, not a worksheet generator.

Prioritise retrieval practice, spaced retry, interleaving, contrastive practice, low cognitive load, concise corrective feedback, and natural Hochdeutsch.

For German content changes, check:

- noun gender;
- case logic;
- article form;
- single-answer validity;
- naturalness/register;
- whether the item accidentally tests hidden grammar.

Core clozes should usually test one primary target. Avoid gotcha dative verbs, n-declension nouns, adjective endings, obscure fixed-preposition patterns, heavy idioms, ambiguous no-article plurals, and Genitiv unless explicitly enabled or requested.

Genitiv remains optional and separate from the default pool. Genitiv clozes must have one clean answer and must not require hidden noun/adjective-ending inference.

## UX rules

Prioritise:

- clear primary action;
- low decision load;
- visible answer → feedback → continue flow;
- useful minimal feedback;
- keyboard/mouse/touch usability;
- accessible focus and tap states;
- scroll reachability at the top and bottom of each screen;
- responsive behaviour across phone, landscape phone, tablet, short laptop, normal laptop, desktop, and large desktop.

Watch for HUD overlap, clipped settings/modals, actions below the fold, trapped nested scroll, desktop looking like an oversized phone, long translated labels, weak focus states, and Arabic accidentally reversing German content.

## Implementation workflow

Before editing:

1. Inspect `index.html` and any task-supplied files.
2. Identify current version markers/title/changelog notes where present.
3. Check for existing relevant code before adding new logic.
4. State the narrow goal and non-negotiables.

While editing:

- Prefer small, localised patches.
- Do not rewrite unrelated sections.
- Do not remove existing features unless explicitly requested.
- Keep CSS/JS/HTML naming consistent with the existing file.
- Avoid duplicate dead code where practical, but do not perform broad cleanup unless requested.

After editing:

- Report changed files.
- Summarise the actual change.
- List tests/checks actually run.
- List blocked tests separately.
- Note limitations/risks.
- Provide a changelog draft.

Never claim a test passed unless it was actually run.

## Required checks

At minimum, after changing `index.html`, run a JavaScript syntax check over inline scripts. Example:

```bash
node -e "const fs=require('fs');const html=fs.readFileSync('index.html','utf8');const scripts=[...html.matchAll(/<script\\b[^>]*>([\\s\\S]*?)<\\/script>/gi)].map(m=>m[1]);if(!scripts.length) throw new Error('No inline scripts found');scripts.forEach((s,i)=>{try{new Function(s)}catch(e){console.error('Inline script '+(i+1)+' failed');throw e}});console.log('Inline script syntax OK:',scripts.length);"
```

Also run the most relevant available validation for the task:

- browser smoke test for interaction changes;
- responsive screenshots for layout changes;
- console-error check for UI changes;
- localStorage persistence test for state changes;
- export/import test for progress-data changes;
- RTL/LTR check for language or Arabic changes;
- German QA pass for cloze/table content changes.

If a tool, browser, server, or permission is blocked, say exactly what was blocked and run the next-best validation. Do not invent results.

## Responsive test targets

For layout/UI tasks, check a representative spread where possible:

- 320×568 small phone;
- 390×844 normal phone;
- 430×932 large phone;
- landscape phone or short viewport;
- 768×1024 tablet;
- 1365×599 short laptop;
- 1440×900 normal laptop;
- desktop/large desktop.

Screenshots are preferred for visual claims.

## Versioning and changelog

Use small versioned builds such as `v30-short-description`, `v31-short-description`, etc. If numbering is ambiguous, ask or propose the next clean version without rewriting history.

For changelog notes, distinguish:

- local/uncommitted;
- tested locally;
- committed;
- deployed to GitHub Pages;
- verified live.

Do not claim deployment unless it was actually verified on the live app.

## Review guidelines

When reviewing a PR or diff, focus on serious issues:

- broken practice flow;
- wrong German grammar/article/case logic;
- regressions in mobile/short-laptop layout;
- HUD overlap or unreachable controls;
- broken persistence/export/import;
- storage-key or export-format changes without migration;
- mojibake/encoding corruption;
- Arabic RTL leaking into German exercise content;
- accidental new dependencies or external calls;
- untested claims in the report.

Treat typo-level issues as lower priority unless they affect German correctness, UI clarity, or learner trust.

## Communication style

Be concise, direct, and specific. Prefer concrete file/function/selector references over broad commentary. If uncertain, say what evidence is missing and what you checked.
