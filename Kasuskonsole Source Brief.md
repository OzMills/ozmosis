# Kasuskonsole Source Brief

_Last updated: 2026-05-20_

## Purpose

Kasuskonsole is a single-file German case/article trainer for focused retrieval practice. It currently trains German articles and cases through table drills, cloze/gap drills, mixed practice, adaptive retry, learner feedback, multilingual support, and local progress persistence.

This file is a living project brief for ChatGPT and Codex. It is not a replacement for the current `index.html`, repo, README, CHANGELOG, or latest uploaded package. Use it to orient new chats quickly, then verify against the latest source before making decisions.

## Current source-of-truth hierarchy

Use this order unless the user explicitly overrides it:

1. Latest uploaded file/package in the current ChatGPT project or chat.
2. Current GitHub repo: https://github.com/OzMills/kasuskonsole
3. Live app: https://ozmills.github.io/kasuskonsole/
4. Current Codex chatlog / implementation logs.
5. Old shared chats and historical notes.
6. Memory.

If sources disagree, prefer the newest current file/package. Do not treat old chats, memory, or earlier Codex claims as proof that a bug or feature still exists.

## Current known version state

Latest packaged work known from the current setup:

- `v29-ux-polish-scroll-encoding`
- v29 repaired mojibake/UTF-8 corruption across German UI, support-language labels, prompts, explanations, and translations.
- v29 changed setup/options scrolling to document-level scrolling so the options screen can reach top and bottom without trapped nested-scroll bounce.
- v29 preserved practice-screen internal scrolling where the fixed HUD needs a bounded console surface.
- v29 added scroll containment and touch scrolling behaviour for menu, modal, and console scroll containers.
- v29 updated the menu “To come” roadmap list.
- v29 renamed the stale page title to `Kasuskonsole`.
- v29 verification covered setup, menu, Genitive help, cloze/table feedback, Arabic mode, and results scroll reachability.

Important caution: if a loose uploaded `index.html` disagrees with the latest ZIP/package, inspect both. Prefer the latest tested package unless the user explicitly says the loose file is newer.

## Architecture

- Static, single-file app.
- Main deployed file: repo-root `index.html`.
- GitHub Pages deployment target.
- No backend.
- No framework.
- No build step.
- No database.
- No accounts, analytics, tracking, external API calls, runtime AI generation, or dependencies unless the user explicitly approves them.
- State is stored client-side, currently via localStorage-compatible logic.
- Do not rename storage keys or export formats without a migration plan.

## Product identity

Kasuskonsole should feel like a deliberate learning instrument, not a worksheet generator.

Preserve:

- dark neon console aesthetic;
- compact mobile-first usability;
- fixed HUD/footer concept during practice;
- answer → feedback → continue rhythm;
- strong keyboard, mouse, and touch usability;
- fast focused practice;
- German grammar precision;
- multilingual accessibility without damaging the German learning object.

Do not redesign the app unless the user explicitly asks for a redesign. Prefer small versioned patches.

## Current feature family

Known feature areas include:

- table drills;
- cloze/gap drills;
- mixed mode;
- DER/EIN/KEIN article systems;
- Nominativ, Akkusativ, Dativ;
- optional Genitiv;
- Genitiv table row option;
- Genitiv basic ownership clozes;
- Genitiv written-preposition clozes;
- meaning support;
- adaptive selection;
- spaced retry / wrong-answer return;
- localStorage persistence;
- progress export/import;
- score, streak, results, and heatmap-style feedback;
- multilingual UI/support languages: English, Turkish, Arabic, Chinese, Ukrainian.

Arabic support may use RTL for Arabic UI text, but German prompts, examples, answer fields, tables, cloze blanks, article forms, and heatmaps must remain LTR.

## Pedagogical principles

Prioritise:

- retrieval practice;
- spaced return of failed items;
- interleaving;
- contrastive practice;
- low extraneous cognitive load;
- concise corrective feedback;
- natural Hochdeutsch;
- single-answer validity in clozes;
- gradual B1→B2 bridge development.

Cloze/gap items should usually test one primary target. Avoid hidden extra grammar unless the item is explicitly marked as bridge/advanced. Core clozes should avoid gotcha dative verbs, n-declension nouns, adjective endings, obscure fixed preposition patterns, heavy idioms, and ambiguous no-article plural unless intentionally enabled.

Genitiv should stay optional and separate from the default pool. Early Genitiv clozes need one clean answer and must not force the learner to infer hidden noun/adjective endings.

## UX principles

Prioritise:

- clear primary action;
- low decision load;
- visible answer → feedback → continue rhythm;
- useful minimal feedback;
- no hidden gotchas;
- mobile-first operation;
- proper desktop composition rather than an oversized phone layout;
- accessible focus/tap states;
- scroll reachability at top and bottom of every screen;
- no trapped nested scroll unless the fixed HUD makes bounded internal scrolling necessary.

Responsive QA should cover:

- small phone: around 320×568;
- normal phone: around 390×844 and 430×932;
- landscape phone / short viewport;
- tablet: around 768×1024;
- short laptop: around 1365×599;
- normal laptop: around 1440×900;
- desktop / large desktop.

Watch for:

- HUD covering content;
- clipped settings/modals;
- actions below the fold;
- nested scroll bounce;
- desktop composition looking like a huge centred phone;
- Arabic reversing German text;
- long translated labels;
- weak focus states;
- over-dense results screens.

## Current roadmap labels

The v29 menu “To come” direction was cleaned toward:

- Focused repair mode;
- Contrast drills for DER/EIN/KEIN neighbour forms;
- Possessive articles;
- Adjective endings;
- Error-type session insights;
- Custom cloze import.

Treat these as roadmap labels, not implemented features, unless current source proves otherwise.

## Codex prompt expectations

Codex prompts should be narrow and copy-paste-ready. Prefer 2,000–6,000 characters for ordinary patches. Longer is acceptable only for complex specs.

Every Codex prompt should usually include:

- title/version;
- current source of truth;
- non-negotiables;
- problem;
- desired behaviour;
- UX/pedagogical rationale;
- implementation guidance;
- data/UI changes;
- edge cases;
- acceptance criteria;
- test matrix;
- deliverables;
- changelog draft;
- stopping rule.

Use blunt constraints when helpful:

- Do not redesign.
- Do not add dependencies.
- Do not change storage keys without migration.
- Do not rewrite the app.
- Do not claim tests passed unless they actually ran.
- If browser testing is blocked, state what was blocked and run the next-best validation.

## Required validation language

Reports must distinguish:

- code inspection;
- syntax check;
- browser smoke test;
- headless screenshot test;
- manual visual inspection;
- responsive screenshot test;
- live GitHub Pages test;
- localStorage persistence test;
- export/import test.

Never claim a test passed unless it was actually run.

## Versioning convention

Use small versioned builds:

- `v30-short-description`
- `v31-short-description`
- `v32-short-description`

Do not invent releases or silently rewrite history. For changelogs, distinguish public, local, tested, and deployed states.

## Recommended durable repo guidance

A root `AGENTS.md` should exist in the repo for Codex. It should be short, accurate, and repo-specific. It should cover:

- single-file architecture;
- no-dependency rule;
- source-of-truth expectations;
- required checks;
- localStorage/export migration rules;
- reporting format;
- “do not redesign” and “do not claim unrun tests passed”.

## How to use this brief

At the start of a new ChatGPT/Codex planning chat, upload this brief alongside the latest `index.html`, latest package ZIP, README, CHANGELOG, and Codex chatlog.

Ask the assistant to use this brief for orientation only, then inspect the current files before generating implementation prompts or making claims about current app state.

