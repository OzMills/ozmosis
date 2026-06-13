# Ozmosis v0.81 - Cases and Articles Completion Pass

Ozmosis is a static, local-first German learning app. The deployed app remains `index.html`.

This patch adds a focused B1 Cases & Articles practice route while preserving the existing Case Trainer.

## What changed

- Added `content/b1-cases-articles.js` with 32 original B1-safe items.
- Added a `Cases & Articles` entry in the Grammar hub and menu.
- Routed case/article recommendations and relevant debug route hints to the new B1 practice route.
- Kept Case Trainer as the separate article-table drill tool.
- Added case/article metadata for Learning Map, Skill Matrix, review, diagnostic, and debug surfaces.
- Kept topical cases/articles practice out of the B1 Path star-gated category system so existing star semantics are not reinterpreted.

## Coverage

The new bank covers:

- nominative vs accusative;
- accusative direct objects;
- dative indirect objects;
- dative after fixed visible triggers;
- definite, indefinite, and negative article families;
- `der/ein/kein` contrasts;
- `ich/mich/mir` and `du/dich/dir`;
- plural dative article use;
- common `der/den/dem`, `ein/einen/einem`, and `kein/keinen/keinem` errors.

It does not add Genitive as a normal B1 route, B2 content, Satzi, runtime generation, or a new scoring model.

## Compatibility

- No localStorage key names changed.
- Export Save and Import Save remain in Settings/Data.
- Scoring and star earning semantics are unchanged.
- Today’s B1 Sprint composition is unchanged.
- Case Trainer data still comes from `data/article-items.tsv`.

## Current docs

- Changelog: `CHANGELOG-v0_81.txt`
- Source brief: `docs/OZMOSIS_SOURCE_BRIEF_v0.81.md`
- Roadmap: `docs/OZMOSIS_DEVELOPMENT_ROADMAP_v0.81.md`
- QA report: `docs/qa/v0.81_cases_articles_completion.md`

The strategic source brief, roadmap, and feature register remain separate CURRENT documents.
