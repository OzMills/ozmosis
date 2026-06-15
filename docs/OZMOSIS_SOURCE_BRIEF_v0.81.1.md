# Ozmosis Source Brief v0.81.1 - Cases & Articles Acceptance / Phase 2.5 Readiness

## Scope

v0.81.1 is a verification and planning patch. It accepts the v0.81 Cases & Articles route after browser validation and prepares the roadmap for v0.82.

It does not replace the CURRENT strategic source brief. The controlling strategic documents remain:

- `docs/OZMOSIS_SOURCE_BRIEF_CURRENT.md`
- `docs/OZMOSIS_DEVELOPMENT_ROADMAP_CURRENT.md`
- `docs/OZMOSIS_FEATURE_REGISTER_CURRENT.md`

## Runtime Source

- Main app: `index.html`
- Cases & Articles bank: `content/b1-cases-articles.js`
- B1-01 bank audited: `content/b1-m01-variant-families.js`
- Case Trainer data: `data/article-items.tsv`

Runtime app/export metadata remains:

- app version: `v0.81 - Cases and Articles Completion Pass`
- export version: `v0.81-cases-articles-completion`

## Acceptance Result

The v0.81 route acceptance gate passed using Edge/CDP automation against a local static server.

The gate completed a real Cases & Articles item through:

- Grammar hub entry;
- route start;
- answer submission;
- feedback display;
- confidence selection;
- evidence write to `ozmosis_b1_progress_evidence_v1`.

## Planning Result

Phase 2.5 normalisation addendum v0.2 was created at:

`docs/planning/ozmosis_phase2_5_full_b1_normalisation_addendum_v0_2.md`

It separates `supportPolicy` from `supportPresentation`, locks module ID fields, bridges planning labels to runtime evidence labels, and defines future import-readiness rules.

## B1-01 Result

B1-01 survived into the current runtime as 259 canonical imported items in `content/b1-m01-variant-families.js`.

Audit status:

`SURVIVED_WITH_METADATA_GAPS`

The gaps do not block v0.82, but they block any claim that B1-01 is clean or complete.

## Guardrails Preserved

- Static browser app.
- No backend, framework, build step, package manager, dependency, runtime AI, API call, account, analytics, or tracking.
- No prepositions implementation.
- No B2/CAT18 activation.
- No Genitive normal route expansion.
- No German-learning content edit.
- No scoring change.
- No star-earning or Star Threshold Overlay semantic change.
- No localStorage key rename.
- Export Save / Import Save preserved.
- Today's B1 Sprint composition unchanged.
- Existing Case Trainer preserved.
