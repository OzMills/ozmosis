# Ozmosis Development Roadmap v0.80.14.15

## Current Patch

`v0.80.14.15 - Star Palette / Star Threshold Overlay`

This patch is complete when:

- starting v0.80.14.14 state is inspected;
- star palette definitions are updated;
- star glyphs/badges use the new palette;
- B1 Path and Home path progress bars render Star Threshold Overlay layers;
- threshold overlay cases A-E are validated;
- syntax checks pass;
- versioned README, changelog, source brief, roadmap, and QA report exist.

## Completed in v0.80.14.15

- Updated app/export metadata.
- Replaced the old five-star colour progression with:
  - Bronze `#b87333`
  - Silver `#b8c4d6`
  - Gold `#f2c94c`
  - Sky Blue `#38bdf8`
  - Electric Cyan `#67e8f9`
- Added central star palette data.
- Added Star Threshold Overlay helper data.
- Updated B1 Path overlay bar rendering.
- Updated Home path overlay bar rendering.
- Removed old `stacked` naming from the Home path bar implementation.
- Updated star glyph classes and B1 Path legend labels.
- Preserved scoring, evidence, content, localStorage keys, export/import, and v0.81 scope.

## Deferred

- Browser screenshot validation, because browser automation was blocked before page load by `CreateProcessAsUserW failed: 5`.
- v0.81 Cases and Articles Completion Pass.
- Satzi.
- Source CSV/source ZIP edits.
- Runtime German generation, runtime morphology, backend, API, accounts, analytics, or dependencies.

## Next Planned Patch

`v0.81 - Cases and Articles Completion Pass`
