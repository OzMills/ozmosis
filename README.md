# Kasuskonsole

**Kasuskonsole** is a single-file German case and article trainer for learners who need repeated practice with **der**, **ein**, and **kein** forms.

It focuses on German articles across:

- **Nominativ**
- **Akkusativ**
- **Dativ**
- optional **Genitiv**

The app is designed for quick, focused practice rather than full-course teaching. It is especially useful for learners who know the grammar in theory but still hesitate when choosing forms like `der`, `den`, `dem`, `einem`, `keinen`, or `des`.

## Live app

Once GitHub Pages is enabled, the app should be available here:

```text
https://ozmills.github.io/kasuskonsole/
```

## What it does

Kasuskonsole offers two main practice styles.

### In Context

Sentence-gap practice.

Example:

```text
Ich helfe ___ Kind.
```

The learner chooses the correct article form from context.

### Out of Context

Direct article-table practice.

Example:

```text
Dativ Neutrum — DER article
```

The learner chooses the correct form directly.

### Mixed

Combines contextual sentence gaps and direct article-table practice.

## Article families

The app can practise:

- **All article types**
- **DER words**
- **EIN words**
- **KEIN words**

## Genitiv practice

Genitiv is optional and remains off by default.

When enabled, it can appear as:

- **Table row**
- **Basic ownership clozes**
- **Written preposition clozes**

This separation is intentional. Genitiv can quickly become too dense for early practice because it may involve article choice, noun endings, register, and phrase structure at the same time.

## Language support

The interface currently supports:

- English
- Turkish
- Arabic
- Chinese
- Ukrainian

German exercise text remains German.

Arabic support text may use right-to-left layout where appropriate, but German prompts, tables, and answer forms should remain left-to-right.

## Progress tracking

Kasuskonsole stores learner progress locally in the browser using `localStorage`.

This means:

- progress stays on the same device/browser
- no account is required
- no server is used
- clearing browser data may erase progress

## Technical structure

Kasuskonsole is intentionally simple:

```text
index.html
```

There is no build step, framework, package manager, backend, or database.

To deploy a new version, replace the repo-root `index.html`.

## Recommended repo structure

```text
kasuskonsole/
├─ index.html
├─ README.md
└─ CHANGELOG.md
```

## Development notes

The current public version is a catch-up release based on the internal v25 working build.

Recent work included:

- simplified New Practice options
- clearer learning-style labels
- multilingual UI support
- optional Genitiv practice
- responsive layout tuning for mobile, tablet, laptop, and desktop viewports
- preservation of the original dark neon console style
- fixed bottom HUD with progress, points, correct answers, errors, and streak

## Testing notes

Recent responsive checks covered common viewport sizes including:

```text
390×844
430×932
768×1024
932×430
1365×599
1440×900
```

Known limitation: because this is a static browser app, live GitHub Pages persistence should be checked after deployment by answering questions, reloading the page, exporting progress, and confirming that local progress remains available.

## Changelog

See [`CHANGELOG.md`](CHANGELOG.md) for version history.

## License

No license has been selected yet.

Until a license is added, all rights are reserved by default.
