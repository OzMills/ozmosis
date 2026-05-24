# Ozmosis Source Brief

_Last updated: 2026-05-24_

## Purpose

Ozmosis is a static German-learning app focused on fast, practical B1 test preparation.

It began as **Kasuskonsole**, a German case/article trainer. The Case Trainer remains an important preserved feature, but the active product direction is now broader:

- Today’s B1 Sprint;
- Connector Sprint;
- Redemittel practice;
- Wortschatz practice;
- grammar support;
- production cards for writing/speaking practice;
- later target-based variant families and Leitner-lite review.

This file is a living project brief for ChatGPT and Codex. It is **not** a replacement for the current `index.html`, repo, README, CHANGELOG, AGENTS.md, latest uploaded package, or current Codex reports.

Use this brief for orientation only, then verify against the latest actual files before making decisions.

---

## Source-of-truth hierarchy

Use this order unless the user explicitly overrides it:

1. Latest uploaded current repo package/current working tree in the active chat or Codex workspace.
2. Current repo-root `index.html`.
3. Current `README.md`.
4. Current `CHANGELOG.txt`.
5. Current `AGENTS.md`.
6. Current Codex logs/reports.
7. Current content-bank files under `content/`.
8. Older chats, memory, screenshots, PDFs, and historical Kasuskonsole material only as background.

If sources disagree, prefer the newest verified current repo/package.

Do not treat old chats, memory, stale `/mnt/data` files, screenshots, or earlier Codex claims as proof that a bug or feature still exists.

The current repo files must confirm implementation state.

---

## Current expected version state

Current expected state before the next extraction pass:

- Current version: **v0.34 — Wortschatz Survival Set Integration**.
- Next planned structural work:
  - **v0.35 — Connector Bank Static JS Extraction**.
  - **v0.36 — Redemittel Bank Static JS Extraction**.
  - **v0.37 — Wortschatz Bank Static JS Extraction**.
  - **v0.38 — B1 Content Registry Normalisation**.
  - **v0.39 — Static Content QA Pass**.

v0.34 should include:

- Ozmosis landing/tool hub.
- Today’s B1 Sprint.
- B1 Connector Sprint.
- Redemittel practice.
- 150-item B1 Wortschatz Survival Set.
- `B1_CONNECTOR_ITEMS`.
- `B1_REDEMITTEL_ITEMS`.
- `B1_WORTSCHATZ_ITEMS`.
- Production-card support.
- Teach me support.
- FIFO/simple retry behaviour.
- B1 progress persistence under `ozmosis_b1_sprint_progress_v1`.
- Case Trainer preserved.
- Options preserved.
- Dev Tools preserved.
- Export/import compatibility preserved.
- `content/ozmosis_b1_connector_sprint_v1_bank.json`.
- `content/ozmosis_b1_wortschatz_survival_set_v1.json`.

Important: this brief describes the expected state. Always verify the current repo files before acting.

---

## Architecture

Ozmosis is a static, GitHub Pages-compatible app.

Current architectural rules:

- Main deployed entry file remains repo-root `index.html`.
- Static local JS content-bank files under `content/` are allowed.
- Classic non-module script loading is allowed for local static content banks.
- No backend.
- No framework.
- No build step.
- No package manager.
- No database.
- No accounts.
- No analytics/tracking.
- No external API calls.
- No runtime AI generation.
- No dependencies unless explicitly approved.
- No `fetch`-based runtime JSON loading unless explicitly approved.
- No `type="module"` unless explicitly approved.
- Preserve local double-click/static testing where possible.
- Preserve GitHub Pages compatibility.
- Preserve localStorage compatibility.
- Do not rename storage keys or export formats without a migration plan.
- Preserve export/import.
- Preserve UTF-8 German text.

The app historically lived as a single-file app. The current direction is a controlled static extraction of large content banks into local JS files while keeping `index.html` as the main deployed app entry.

This is **not** permission to split renderers, state, routes, storage, or UI logic unless a future prompt explicitly authorises that work.

---

## Product identity

Use the current app name:

- **Ozmosis**

Use historical name only when needed:

- Former name: **Kasuskonsole**

Ozmosis should feel like a deliberate learning instrument, not a worksheet generator.

Preserve:

- dark neon console aesthetic;
- compact mobile-first usability;
- numbered tool-hub landing style where appropriate;
- fixed HUD/footer during practice where appropriate;
- answer → feedback → continue rhythm;
- strong keyboard/mouse/touch flow;
- clear primary action;
- low cognitive load;
- concise corrective feedback;
- German grammar precision;
- multilingual support without damaging German learning content.

Do not redesign the app unless the user explicitly asks for a redesign.

Prefer small, versioned, testable patches over broad rewrites.

---

## Current major feature family

Known active feature areas include:

- Ozmosis landing/tool hub.
- Today’s B1 Sprint.
- Grammar / Connector Sprint.
- Connector-choice items.
- Word-order cloze items.
- Error-repair items.
- Redemittel practice.
- Wortschatz practice.
- Production cards.
- Teach me support.
- FIFO/simple retry logic.
- B1 progress persistence under `ozmosis_b1_sprint_progress_v1`.
- Case Trainer.
- Table drills.
- Cloze/gap drills.
- DER/EIN/KEIN article systems.
- Nominativ, Akkusativ, Dativ.
- Optional Genitiv.
- Genitiv table row option.
- Genitiv basic ownership clozes.
- Genitiv written-preposition clozes.
- Meaning/support text.
- Adaptive selection.
- LocalStorage persistence.
- Progress export/import.
- Score, streak, results, and heatmap-style feedback.
- Options.
- Dev Tools.
- Multilingual UI/support languages including English, Turkish, Arabic, Chinese, and Ukrainian where currently implemented.

Arabic UI may use RTL, but German prompts, examples, tables, cloze blanks, answer inputs, choices, model answers, article forms, and heatmaps must remain LTR.

---

## Active pedagogical priority

The active goal is:

**Build the fastest useful personal B1 test-prep tool.**

Priority order:

1. B1 landing/tool hub.
2. B1 content engine.
3. Connector Sprint.
4. Redemittel Sprint.
5. Wortschatz Sprint.
6. Writing/Speaking cards.
7. Today’s B1 Sprint.
8. Weakness repair.
9. Later: full Leitner, import tools, B2 expansion.

Do not drift into:

- public release;
- monetisation;
- accounts;
- dashboards;
- sync;
- analytics;
- B2 expansion;
- full platform architecture;

until the B1 sprint baseline is useful and stable.

---

## B1 content priorities

Prioritise high-yield B1 exam/course needs:

- connectors and word order;
- `weil` / `denn` / `deshalb`;
- `obwohl` / `trotzdem`;
- `damit` / `um ... zu`;
- `wenn` / `als` / `während` / `bevor` / `nachdem` / `seitdem` / `bis` / `solange`;
- local and temporal prepositions;
- Wechselpräpositionen;
- Konjunktiv II polite requests;
- reflexive verbs;
- verb complements;
- application/workplace vocabulary;
- office/orders/complaints/illness/insurance/technical-problem vocabulary;
- bureaucracy vocabulary;
- Redemittel for email, requests, complaints, appointments, applications, speaking and short writing.

For now, use simple weak-item return and progress tracking. Do not build full Leitner before B1 content and structure are useful.

---

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
- gradual B1 → B2 bridge development only where useful;
- structured variant families over random isolated examples;
- target-level mastery as a future direction;
- sibling variants for weak-item return;
- connector contrast and word-order practice;
- realistic workplace/course/bureaucracy contexts.

Cloze/gap items should usually test one primary target.

Avoid hidden extra grammar unless the item is explicitly marked as bridge/advanced.

Core clozes should avoid:

- gotcha dative verbs unless they are the target;
- n-declension nouns unless they are the target;
- adjective endings unless they are the target;
- obscure fixed preposition patterns unless they are the target;
- heavy idioms;
- ambiguous no-article plural unless intentionally enabled;
- Genitiv unless explicitly enabled.

Genitiv should stay optional and separate from the default pool. Early Genitiv clozes need one clean answer and must not force the learner to infer hidden noun/adjective endings.

Production cards should not pretend to auto-grade open German. Use:

- prompt;
- useful phrases;
- checklist;
- optional model answer;
- mark practised / needs review.

No runtime AI generation. No fake free-text grading.

---

## Variant-family direction

Future content should move toward:

**Target-Based Variant Families with Leitner-Lite Scheduling.**

This means:

- track mastery of the target, not just one sentence;
- use staged variants across difficulty/mastery;
- rotate sibling variants to avoid surface-sentence memorisation;
- escalate from recognition to contrast to repair to production;
- avoid repeating the exact same sentence unless the learner is still failing the basic form.

A good future structure:

- `targetId`;
- `familyId`;
- `variantId`;
- `stage` or `stars`;
- `cefr`;
- `domain`;
- `itemType`;
- `prompt`;
- `acceptedAnswers`;
- `support_en`;
- `microRule`;
- `contrastTargets`;
- `usefulPhrases`;
- `checklist`;
- `modelAnswer_de`.

Recommended staged model:

- 1 star: basic recognition.
- 2 stars: same target in different B1 contexts.
- 3 stars: contrast with nearby words/forms.
- 4 stars: longer B1/B2 bridge context.
- 5 stars: repair, transformation, or production.

Do not implement this until static bank extraction and content registry normalisation are complete.

---

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
- no trapped nested scroll unless the fixed HUD makes bounded internal scrolling necessary;
- progressive disclosure of advanced settings and diagnostics;
- compact practice screens;
- simple progress signals.

Practice UI should remain simple:

1. answer;
2. feedback;
3. continue.

Do not expose all scheduling/mastery mechanics during practice.

Advanced detail belongs in progress summaries, Dev Tools, or future diagnostics.

Responsive QA should cover:

- 320×568;
- 390×844;
- 430×932;
- 768×1024;
- 1365×599;
- 1440×900.

Watch for:

- HUD covering actions;
- clipped modals;
- unreachable buttons;
- nested scroll traps;
- desktop looking like an oversized phone;
- Arabic reversing German content;
- long labels breaking layout;
- weak focus states;
- over-dense results screens;
- mobile keyboard/focus clipping;
- overcomplicated progress displays.

---

## Current structural roadmap

Near-term structural sequence:

- **v0.35 — Connector Bank Static JS Extraction**
  - Move existing connector bank from `index.html` to `content/b1-connectors.js`.

- **v0.36 — Redemittel Bank Static JS Extraction**
  - Move existing Redemittel bank from `index.html` to `content/b1-redemittel.js`.

- **v0.37 — Wortschatz Bank Static JS Extraction**
  - Move existing Wortschatz bank/source bank from `index.html` to `content/b1-wortschatz.js`.

- **v0.38 — B1 Content Registry Normalisation**
  - Create one stable internal registration/loading pattern for extracted B1 banks.
  - Do not do this during v0.35–v0.37 unless explicitly requested.

- **v0.39 — Static Content QA Pass**
  - Verify counts, IDs, item types, statuses, UTF-8, and route availability.

Do not bundle v0.38 or v0.39 into the v0.35–v0.37 extraction pass.

---

## Longer roadmap toward v1.0

The exact version numbers can change. Do not force exactly 100 iterations.

Broad direction:

- **v0.40+**: B1 content usefulness expansion.
- **v0.50+**: variant-family schema and pilot.
- **v0.60+**: Leitner-lite / weakness repair.
- **v0.70+**: production practice.
- **v0.80+**: data safety, export/import, recovery.
- **v0.90+**: responsive/accessibility hardening.
- **v0.100+**: release-candidate hardening if needed.
- **v1.0**: stable personal B1 exam-prep instrument.

v1.0 should mean:

- Today’s B1 Sprint works reliably.
- Connector, Redemittel, Wortschatz, Grammar, Case Trainer, Options, and Dev Tools all open.
- B1 content banks are structurally stable.
- Progress persists.
- Export/import works.
- No known localStorage-breaking changes.
- No console errors on normal load.
- No critical mobile layout failures.
- German content remains LTR under Arabic UI.
- Content counts are documented and verifiable.
- The app is useful for real B1 test prep without requiring manual explanation from ChatGPT.

Do not define v1.0 as a complete German-learning platform.

---

## Versioning convention

Use pre-1.0 version naming:

- `v0.30`
- `v0.31`
- `v0.32`
- `v0.32.1`
- `v0.33`
- `v0.34`
- `v0.35`
- `v0.35.1`

Do not use old `v30`, `v31`, `v32` as the active naming style except when referring to historical builds.

`v0.100` is valid if needed. Do not assume the project must stop at `v0.99`, and do not force exactly 100 iterations.

Do not invent releases or silently rewrite history.

For changelogs, distinguish:

- current;
- tested;
- packaged;
- deployed;
- live GitHub Pages state.

---

## Codex prompt expectations

Codex prompts should be narrow and copy-paste-ready.

Every Codex prompt should usually include:

- title/version;
- current source of truth;
- current expected state;
- non-negotiables;
- problem;
- desired behaviour;
- UX/pedagogical rationale where relevant;
- implementation guidance;
- files allowed;
- files forbidden if useful;
- edge cases;
- acceptance criteria;
- test matrix;
- required report;
- changelog draft;
- stopping rule.

Use blunt constraints when helpful:

- Do not redesign.
- Do not add dependencies.
- Do not change storage keys without migration.
- Do not rewrite the app.
- Do not claim tests passed unless they actually ran.
- If browser testing is blocked, state what was blocked and run the next-best validation.
- Stop if source files contradict expected state.
- Stop if the patch requires broader architecture work than requested.

For app/code work, Codex should usually:

1. State source of truth.
2. State narrow goal.
3. State non-negotiables.
4. Define exact behaviour.
5. Give implementation guidance.
6. Give edge cases.
7. Give acceptance criteria.
8. Give test matrix.
9. Give deliverables.
10. Give changelog draft.
11. Give stopping rule.

Do not ask Codex to implement adjacent roadmap features.

---

## Required validation language

Reports must distinguish:

- code inspection;
- syntax check;
- browser smoke test;
- headless screenshot/visual test;
- manual visual inspection;
- responsive screenshot/visual test;
- localStorage persistence test;
- export/import test;
- Arabic RTL/German LTR smoke;
- live GitHub Pages test.

Never claim a test passed unless it was actually run.

If blocked, say exactly what was blocked and what substitute validation was performed.

Responsive checks should cover:

- 320×568;
- 390×844;
- 430×932;
- 768×1024;
- 1365×599;
- 1440×900.

Do not imply live GitHub Pages was tested unless it was actually tested.

---

## Static content-bank extraction rules

For v0.35–v0.37:

Allowed target files:

- `content/b1-connectors.js`;
- `content/b1-redemittel.js`;
- `content/b1-wortschatz.js`.

Preferred namespace:

```js
window.OZMOSIS_CONTENT = window.OZMOSIS_CONTENT || {};
window.OZMOSIS_CONTENT.b1Connectors = [...]
window.OZMOSIS_CONTENT.b1Redemittel = [...]
window.OZMOSIS_CONTENT.b1Wortschatz = [...]