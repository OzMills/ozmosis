# Ozmosis Source Brief v0.81 - Cases and Articles Completion Pass

## Scope

v0.81 adds focused B1 cases/articles practice using the existing static app architecture.

It does not replace the CURRENT strategic source brief. The controlling strategic documents remain:

- `docs/OZMOSIS_SOURCE_BRIEF_CURRENT.md`
- `docs/OZMOSIS_DEVELOPMENT_ROADMAP_CURRENT.md`
- `docs/OZMOSIS_FEATURE_REGISTER_CURRENT.md`

## Runtime Source

- Main app: `index.html`
- New content bank: `content/b1-cases-articles.js`
- Existing Case Trainer data: `data/article-items.tsv`
- Current QA report: `docs/qa/v0.81_cases_articles_completion.md`

## Implementation

The new bank provides 32 B1-safe, original items:

- 8 recognition items;
- 8 typed cloze items;
- 8 repair items;
- 8 contrast items.

The route is available as `Cases & Articles` from the menu and Grammar hub. Case Trainer remains available separately for table/form drills.

## Metadata

Each new item has additive metadata for:

- `targetId`;
- `targetFamilyId`;
- `variantFamilyId`;
- `reviewGroup`;
- `contrastGroup`;
- `taskDepth`;
- case targets;
- article-family targets;
- gender/number targets;
- skill tags;
- source and QA notes.

The new items are `activeB1Evidence:true`, `diagnosticEligible:true`, and `dailyEligible:false`.

## Guardrails Preserved

- Static browser app.
- No backend, framework, build step, package manager, dependency, runtime AI, API call, account, analytics, or tracking.
- No B2/CAT18 activation.
- No Genitive normal B1 route.
- No scoring change.
- No star-earning or Star Threshold Overlay semantic change.
- No localStorage key rename.
- Export Save / Import Save preserved.
- Today’s B1 Sprint composition unchanged.
- Existing Case Trainer preserved.

## Browser Validation Note

Headless Edge DOM loading passed with the new route controls and Export/Import controls present. Full CDP interaction automation was blocked in this environment and is documented in the QA report.
