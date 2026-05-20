# v31 Dev Leitner Prototype Test Report

## Source Used

- `AGENTS.md`
- `Kasuskonsole Source Brief.md`
- repository-root `index.html`
- `README.md`: not present at repository root
- `CHANGELOG.md`: created for this patch

The concrete source of truth was repository-root `index.html`.

## Checks Run

- Inline script syntax check: passed, 1 inline script parsed with `new Function`.
- TSV integrity check: passed.
  - `data/article-items.tsv`: 36 rows, 11 columns.
  - `data/leitner-cards.tsv`: 36 rows, 6 columns.
  - Every Leitner card references an existing article item.
- UTF-8/mojibake check: passed for `index.html` and the TSV files; no Unicode replacement characters found. Spot checks passed for German `schließen`, Turkish `Türkçe`, Arabic `العربية`, and Ukrainian `Українська`.
- Local static browser smoke over HTTP: passed in headless Chrome/CDP.
  - App loaded with title `Kasuskonsole`.
  - Dev Tools opened.
  - Leitner prototype opened.
  - TSV-backed 36-card deck loaded.
  - Correct answer advanced the first card to step 1.
  - Reload preserved Leitner progress under `kasuskonsole.leitner.v1`.
  - Wrong answer reset the first card to step 0.
  - No-due state appeared after forcing all cards into the future.
  - Early practice continued only after choosing `Continue practice`.
  - Existing normal practice answer flow still worked.
  - Settings menu still opened.
  - Start screen remained top/bottom reachable or fitted within the viewport.
  - Arabic support mode kept German Leitner prompt, answer input, and stars LTR.
- No console errors captured during the final full run and the quick final smoke after the UTF-8/UI fixes.
- Responsive screenshots captured:
  - `leitner-390x844.png`
  - `leitner-430x932.png`
  - `leitner-768x1024.png`
  - `leitner-1365x599.png`
  - `leitner-1440x900.png`

## Browser Tool Note

The Codex in-app Browser plugin was attempted first, but it blocked the local HTTP URL with `net::ERR_BLOCKED_BY_CLIENT`. I used headless Chrome/CDP as the fallback for local HTTP fetch, interaction, localStorage, console, RTL/LTR, and screenshot checks.

## Known Limitations

- The prototype requires HTTP/GitHub Pages serving. Opening `index.html` directly with `file://` can block `fetch("data/*.tsv")` by browser policy.
- The Leitner prototype is intentionally Dev Tools-only and is not integrated into the public start screen or normal adaptive practice flow.
- The seed deck currently covers article table-style DER/EIN/KEIN forms for Nominativ, Akkusativ, and Dativ. Genitiv and non-article card types are left for a later task.
- Answer checking is intentionally exact after trim/case-folding, with simple accepted values for no-article rows. No fuzzy matching is implemented.
- Stale temporary browser profile folders may remain in the version work folder from headless browser runs. The clean deliverable screenshots are in `screenshot-pack/`, and the ZIP package excludes the temporary profile folders.

## Changelog Entry

```md
## v31 - Dev Leitner prototype with external TSV data

- Added a Dev Tools Leitner article prototype.
- Added external TSV data files for article items and Leitner card configuration.
- Added local Leitner progress persistence using a separate localStorage namespace.
- Added five-step star rating display with due-card scheduling and early-practice handling.
```
