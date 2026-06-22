# Ozmosis Source Brief v0.85.3.3b

Current runtime baseline: `v0.85.3.3b - Duplicate Teach Me Button Hotfix`.

Current export version: `v0.85.3.3b-duplicate-teach-me-hotfix`.

## Scope

v0.85.3.3b is a narrow B1 inline cloze UI hotfix. It fixes the duplicate Teach Me buttons found after v0.85.3.3 while preserving runtime semantics.

## Source Of Truth

- `index.html`
- `docs/qa/v0.85.3.3_cloze_experience_fixture_pass.md`
- `docs/qa/v0.85.3.3_cloze_experience_results.json`
- `docs/qa/v0.85.3.3a_package_size_old_zip_audit_and_cleanup.md`
- `docs/qa/v0.85.3.3a_package_size_old_zip_audit_and_cleanup_results.json`
- `docs/qa/screenshots/v0.85.3.3b-duplicate-teach-me-hotfix/`

## Accepted Behaviour

- B1 cloze default/cue/long-wrap states show exactly one Teach Me-like control.
- The surviving control is the newer smaller secondary `Teach me` display hint button.
- The suppressed duplicate is the older B1 inline-cloze `#noArticleBtn.teachBtn` action when a display-model reveal hint is available.
- Typing, fail, success, choice, and correction states do not show duplicate Teach Me-like controls.

## Preserved Semantics

- No content bank was changed.
- No answers were changed.
- No scoring, evidence, confidence, storage, or export/import semantics changed.
- Case Trainer/article trainer behaviour is preserved.
- v0.85.3.3a package hygiene remains intact.

## Current QA

Primary QA report: `docs/qa/v0.85.3.3b_duplicate_teach_me_hotfix.md`.

Primary QA result JSON: `docs/qa/v0.85.3.3b_duplicate_teach_me_hotfix_results.json`.

Screenshot comparison: `docs/qa/screenshots/v0.85.3.3b-duplicate-teach-me-hotfix/comparison.html`.

## Next Patch

`v0.85.3.4 - Feedback Rhythm Pass`.
