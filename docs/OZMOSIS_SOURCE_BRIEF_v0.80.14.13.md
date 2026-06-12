# Ozmosis Source Brief v0.80.14.13

## Current Version

`v0.80.14.13 - Landing Page Visual Reference Alignment`

Current app file: `index.html`

Current export version: `v0.80.14.13-landing-page-visual-reference-alignment`

Current README: `README-v0_80_14_13.md`

Current changelog: `CHANGELOG-v0_80_14_13.txt`

Current roadmap: `docs/OZMOSIS_DEVELOPMENT_ROADMAP_v0.80.14.13.md`

Current QA report: `docs/qa/v0.80.14.13_landing_page_visual_reference_alignment.md`

## Source of Truth

The current repository files are the source of truth for this patch.

Reference files used for visual alignment:

- `docs/design/reference/landing/v0_80_14_13/ozmosis-landing-mobile-reference-v0_80_14_13.svg`
- `docs/design/reference/landing/v0_80_14_13/ozmosis-landing-mobile-reference-v0_80_14_13.png`

The reference files are retained as design/QA artefacts. They are not used as runtime UI images or backgrounds.

## Runtime Architecture

Ozmosis remains:

- static;
- dependency-free;
- single deployed app file at `index.html`;
- GitHub Pages compatible;
- localStorage-backed;
- export/import compatible;
- B1-only for active learner scope.

No backend, framework, build step, package manager, dependency, external API call, account system, analytics, runtime AI, runtime German generation, or runtime morphology was added.

## v0.80.14.13 Scope

This patch changes the Home landing surface only:

- Home markup now exposes the reference landing sections.
- Home CSS now enforces a centred vertical shell and reference order.
- Home B1 path cards now show B1.1, B1.2, and All Practice.
- Home route cards remain live buttons to existing app routes.
- Home Recommended Task text and click behaviour now use the current B1 path route target.
- Home does not show the removed explanatory landing disclosure.

## Preserved Source and Content

The following remain unchanged:

- `content/b1-connectors.js`
- `content/b1-redemittel.js`
- `content/b1-wortschatz.js`
- other content bank files compared with the v0.80.14.12 package content entries
- source CSV/source ZIP artefacts
- current scoring/correctness semantics
- production self-marking
- Today’s B1 Sprint composition
- export/import schema compatibility

The static gate confirmed current content files match the v0.80.14.12 package content hashes.

## Storage

Protected storage key names remain:

- `ozmosis_b1_sprint_progress_v1`
- `ozmosis_b1_progress_evidence_v1`

The browser smoke verified these runtime key names through the app debug API. A clean browser profile may not create those localStorage entries until progress/evidence exists.

## Browser QA

Browser validation used headless Microsoft Edge through Chrome DevTools Protocol against a local static server.

Validated:

- Home load and version/export metadata.
- Reference-size screenshot at `941x1672`.
- Responsive screenshots at `320x568`, `390x844`, `430x932`, `768x1024`, `1365x599`, and `1440x900`.
- Menu open/close and scroll.
- Home route clicks.
- Export/import, including current export, v0.80.14.12-style import, and malformed import error.
- Arabic support language with German-containing labels remaining LTR.

## Current Package

Package target:

- `ozmosis-v0_80_14_13.zip`

## Next Planned Patch

`v0.81 - Cases and Articles Completion Pass`
