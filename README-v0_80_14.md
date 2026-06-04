# Ozmosis v0.80.14

## B1-11 Colleague feedback / conflict

Ozmosis v0.80.14 imports the approved B1-11 Colleague feedback / conflict planning batch into the existing static B1 module system.

This is a narrow module-content patch. It adds a B1-11 module practice route under Grammar and keeps the new module out of Today's B1 Sprint and Diagnostic Sprint.

Final B1-11 inventory:

- 18 clean B1-11 planning records present.
- 15 active practice items.
- 3 notice/concept cards retained separately and excluded from evidence.
- 2 self-marked production cards.
- 2 Auswahl, 4 Luecke, 2 Satzbau, 3 Reparatur, 2 Kontrast, and 2 Produktion rows.

## Added

- `content/b1-m11-colleague-feedback-conflict.js`
- Static B1-11 registry bank: `b1_m11`
- Grammar hub entry: `B1-11 Colleague feedback / conflict`
- Debug helpers:
  - `window.ozmosisStartB1M11(...)`
  - `window.ozmosisB1M11Debug()`
- Local generator: `_development-files/v0814_generate_b111_content.cjs`
- Local QA gates:
  - `_development-files/v0814_static_verify.cjs`
  - `_development-files/v0814_b111_colleague_feedback_conflict_gate.cjs`

## Renderer Mapping

- `Auswahl` uses the existing shuffled multiple-choice path.
- `Luecke` uses the existing typed cloze path.
- `Satzbau` uses the existing word-order typed path.
- `Reparatur` uses the existing repair path.
- `Kontrast` uses the existing typed cloze path with contrast metadata.
- `Produktion` uses existing self-marked production controls.

## Preserved

- Static browser app architecture.
- Main deployed file: `index.html`.
- No backend, framework, build step, package manager, or dependency.
- Existing storage keys:
  - `ozmosis_b1_sprint_progress_v1`
  - `ozmosis_b1_progress_evidence_v1`
- Export/import compatibility.
- Today B1 Sprint composition.
- Diagnostic Sprint composition.
- B1-01 through B1-10 behaviour.
- Multiple-choice shuffle identity handling.
- Production self-marking semantics.
- German LTR handling in Arabic UI contexts.

## Not Changed

- No B1-12 review content.
- No v0.81 Cases and Articles work.
- No Genitive changes.
- No Satzi/mascot features.
- No runtime grammar generation.
- No random frame/slot assembly.
- No dynamic German case/article inference.
- No B2 active content.
- No mastery, readiness, or certification claims.

## QA

QA report: `docs/qa/v0.80.14_b1_11_colleague_feedback_conflict.md`

Current changelog: `CHANGELOG-v0_80_14.txt`

Current source brief: `docs/OZMOSIS_SOURCE_BRIEF_v0.80.14.md`

Current roadmap: `docs/OZMOSIS_DEVELOPMENT_ROADMAP_v0.80.14.md`
