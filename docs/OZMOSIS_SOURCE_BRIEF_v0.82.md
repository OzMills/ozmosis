# Ozmosis Source Brief v0.82 - Prepositions Completion Pass

## Scope

v0.82 is a narrow B1 Prepositions Completion Pass. It adds one focused content bank and one route under the existing Grammar hub.

It does not replace the CURRENT strategic source brief. The controlling strategic documents remain:

- `docs/OZMOSIS_SOURCE_BRIEF_CURRENT.md`
- `docs/OZMOSIS_DEVELOPMENT_ROADMAP_CURRENT.md`
- `docs/OZMOSIS_FEATURE_REGISTER_CURRENT.md`

## Runtime Source

- Main app: `index.html`
- New bank: `content/b1-prepositions.js`
- App version: `v0.82 - Prepositions Completion Pass`
- Export version: `v0.82-prepositions-completion`

## Implementation

The new bank contains 92 B1-safe, original items. The route uses the existing imported-module round path, so no new practice engine was added.

Coverage:

- fixed dative: `mit`, `bei`, `nach`, `von`, `zu`, `aus`, `seit`
- fixed accusative: `für`, `ohne`, `durch`, `gegen`, `um`
- two-way: `in`, `an`, `auf`, `unter`, `über`, `vor`, `hinter`, `neben`, `zwischen`
- temporal: `am`, `um`, `im`, `seit`, `ab`, `vor`, `nach`, `bis`

## Guardrails Preserved

- No Word Order implementation.
- No Connectors implementation.
- No Satzi.
- No B2/CAT18 activation.
- No Genitive expansion.
- No adjective-ending expansion.
- No scoring or star semantics changes.
- No storage key changes.
- No Export Save / Import Save break.
- No dependencies, backend, build step, API, runtime AI, or runtime German generation.

## Acceptance Status

Static and source validation passed. Browser route acceptance is still required because local Edge/CDP validation timed out waiting for the loaded app marker, and the in-app browser path was blocked by the Windows sandbox.

Next required patch: `v0.82.1 - Prepositions Browser Acceptance Gate`.
