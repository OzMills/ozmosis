# Ozmosis Development Roadmap v0.85.3.3b

## Current Baseline

Current runtime baseline: `v0.85.3.3b - Duplicate Teach Me Button Hotfix`.

Current acceptance status: v0.85.3.3b fixed the duplicate B1 inline cloze Teach Me controls. The newer smaller secondary `Teach me` reveal button survives, and the older `#noArticleBtn.teachBtn` cloze duplicate is suppressed when the reveal hint is available.

Next required patch: `v0.85.3.4 - Feedback Rhythm Pass`.

## Completed Local Sequence

- `v0.85.3.1` - Strict UI Proof and Screenshot Recovery Gate
- `v0.85.3.2` - Strict Layout Geometry Fix Pass
- `v0.85.3.3` - Cloze Experience and Representative Fixture Pass
- `v0.85.3.3a` - Package Size, Old ZIP Audit, and No-PowerShell Cleanup Pass
- `v0.85.3.3b` - Duplicate Teach Me Button Hotfix
- `v0.85.3.4` - Feedback Rhythm Pass

## Guardrails

- Do not start Feedback Rhythm work inside v0.85.3.3b.
- Do not change content banks, answers, scoring, evidence, confidence, storage, or export/import semantics.
- Do not start v0.85.4 or v0.86 before the documented readiness gates.
- Keep browser profiles out of the repo and keep QA screenshots under `docs/qa/screenshots/`.

## Recommended Next Patch

`v0.85.3.4 - Feedback Rhythm Pass`.
