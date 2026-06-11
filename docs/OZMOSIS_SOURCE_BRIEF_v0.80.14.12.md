# Ozmosis Source Brief v0.80.14.12

## Current Version

- App version: `v0.80.14.12`
- Export version: `v0.80.14.12-verification-learner-facing-artefact-hotfix`
- Current README: `README-v0_80_14_12.md`
- Current changelog: `CHANGELOG-v0_80_14_12.txt`
- Current QA report: `docs/qa/v0.80.14.12_verification_learner_facing_artefact_hotfix.md`

## Scope

v0.80.14.12 is a narrow verification and learner-facing artefact hotfix after v0.80.14.11. It is intended to make the current package safe enough to use as the baseline before v0.81.

The patch fixes route/rendering leakage only. It does not edit source CSVs or source ZIPs, generate replacement German tasks, add a parallel task set, add v0.81 Cases and Articles, add Satzi, add Genitive expansion, activate CAT18/B2, add dependencies, add runtime AI, or add runtime German morphology.

## Source Preservation

Read-only source packages and CSVs remain immutable.

The v0.80.14.12 source-preservation manifest checked `248` read-only files and found no changed hashes.

Current manifests:

- `_development-files/v0801412_source_preservation_manifest_before.csv`
- `_development-files/v0801412_source_preservation_manifest_after.csv`
- `_development-files/v0801412_source_preservation_path_normalisation_report.json`

The v0.80.14.11 source-preservation gate was also patched to normalise manifest path separators before lookup while preserving strict size/hash validation.

## Runtime Route Policy

Normal imported learner practice remains temporarily limited to route-ready:

- `PRACTICE_FAMILIES`
- `CONTRAST_SETS`

Excluded from normal learner routes:

- `move_to_human_review` rows
- `needsHumanReview` / `reviewFlag` rows
- generic `WORTSCHATZ_BANK` generated multiple-choice rows
- generic `COLLOCATION_BANK` generated multiple-choice rows
- generic `REDEMITTEL_BANK` phrase-choice rows
- CAT18 preview-only rows
- known source-shaped prompt artefacts
- unsafe bare answer-letter choices
- production rows with raw inline source labels that cannot be structured
- completed/max-star items in ordinary star-rated practice contexts

Excluded rows remain preserved for:

- Dev Tools Review Tests
- source/debug views
- Review Edit List workflows
- export/import metadata

## Learner-Facing Artefact Handling

Known reproduced v0.80.14.11 findings:

- `b1_redemittel_048` exposed `Beste Bitte um Lösung:` as a normal-route prompt.
- `215` normal-route raw choice prefix candidates existed in source-shaped options such as `A die Datei`, `B die App`, and `C der Zugang`.
- Structured production prompt labels such as `Scenario:`, `Useful phrases:`, and `Checklist:` appeared in source prompt text.
- The v0.80.14.11 source-preservation gate was path-fragile with mixed manifest separators.
- Completed/max-star filtering had clean-profile coverage but needed seeded browser evidence.

v0.80.14.12 resolves these through:

- `b1NormaliseLearnerChoiceDisplay(...)` for display-only choice prefix stripping.
- route guards for source-shaped prompt and unsafe choice artefacts.
- `b1ProductionPromptSegments(...)` for structured production prompt rendering.
- portable manifest path normalisation.
- seeded Edge/CDP browser validation using the real `ozmosis_b1_progress_evidence_v1` evidence key.

## Runtime Results

Static v0.80.14.12 gate:

- Content items loaded: `6969`
- Static normal-eligible content scan: `1666`
- Dev Review Tests eligible: `4951`
- Raw source choice prefix candidates found: `215`
- Rendered normal-route choice prefix leaks: `0`
- Production raw-label candidates found: `98`
- Normal production prompt display leaks: `0`
- `b1_redemittel_048` excluded from normal learner routes: `true`

Browser v0.80.14.12 smoke:

- Runtime normal practice eligible: `1690`
- Runtime normal practice selectable in clean profile: `1690`
- Runtime Dev Review Tests eligible: `4951`
- Seeded max-star items excluded after evidence seeding: `11`
- Console/runtime errors: `0`

The static and browser normal-eligible counts differ because the static gate scans source content arrays directly while the browser route-filtering summary reports the runtime registry after app mapping. Both gates found no learner-facing artefact leaks in normal rendered routes.

## Encoding and Renderer Safety

The v0.80.14.12 static gate checks decoded German examples in `index.html` and `content/*.js`, including:

- `Prüfen`
- `Könnten`
- `zurückrufen`
- `Lösung`
- `Bewerbungsgespräch`
- `Krankenkasse`
- `ä`
- `ö`
- `ü`
- `ß`

The gate also fails runtime corpus mojibake markers such as `Ã`, `Â`, and replacement-character leakage.

Repair feedback self-comparison suppression remains renderer-only. Source feedback text is not edited.

## Storage and Export

Protected localStorage keys are unchanged:

- `ozmosis_b1_sprint_progress_v1`
- `ozmosis_b1_progress_evidence_v1`

Additive compatible keys remain:

- `ozmosis_b1_path_unlock_overrides_v1`
- `ozmosis_b1_review_edit_queue_v1`

Export metadata reports `v0.80.14.12-verification-learner-facing-artefact-hotfix`. The browser smoke verified export JSON creation and import of a v0.80.14.11-compatible payload without destructive migration.

## Deferred

- v0.81 Cases and Articles Completion Pass.
- Manual repair and activation of excluded bank-generated rows.
- CAT18/B2 activation.
- Satzi.
- Genitive expansion.
- Runtime morphology or runtime AI.
- Backend/API/accounts/analytics.
- Broad German task-text rewrite.
