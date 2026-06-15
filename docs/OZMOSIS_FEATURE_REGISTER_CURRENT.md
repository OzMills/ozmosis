# Ozmosis Feature Register Current

`allowed_now` values: `yes`, `no`, `planning_only`, `audit_only`.

| feature_id | feature_name | source_documents | current_status | earliest_safe_version | blocking_prerequisites | risk_level | allowed_now | do_not_implement_before | notes |
|---|---|---|---|---|---|---|---|---|---|
| cases_articles_completion | Cases and Articles Completion | Current roadmap, data/article-items.tsv, content/b1-cases-articles.js | completed in v0.81 | v0.81 | v0.80.14.18.2 baseline, strategic docs restored | high | no | completed | Completed as a B1-safe routeable practice bank; Case Trainer and save/import preserved. |
| phase_2_5_normalisation_addendum_v0_2 | Phase 2.5 normalisation addendum v0.2 | Strategic roadmap, `docs/planning/ozmosis_phase2_5_full_b1_normalisation_addendum_v0_2.md` | completed in v0.81.1 | v0.81.1 | v0.81 route accepted | high | no | completed | Completed as planning guidance before broad generation. |
| b1_01_extension_survival_audit | B1-01 extension survival audit | Strategic roadmap, `docs/qa/v0.81.1_b1_01_extension_survival_audit.md` | completed in v0.81.1 | v0.81.1 | baseline B1-01 IDs stable | medium | no | completed | Status `SURVIVED_WITH_METADATA_GAPS`; non-blocking for v0.82, but blocks any B1-01 clean/completion claim. |
| prepositions_completion | Prepositions Completion | Current roadmap, `content/b1-prepositions.js`, `docs/qa/v0.82.1_prepositions_browser_acceptance.md` | accepted in v0.82.1; runtime remains v0.82 | v0.82 | v0.81 accepted; Phase 2.5 addendum completed; B1-01 survival audit completed with non-blocking findings; v0.82.1 browser gate passed | high | no | completed | Focused Prepositions route and 92-item bank accepted by file-based headless Edge browser gate. Actual item completion, feedback, confidence update, route isolation, save controls, responsive smoke, and Arabic/LTR smoke passed. |
| word_order_completion | Word Order Completion | Current roadmap | ready next | v0.83 | v0.82.1 Prepositions Browser Acceptance Gate passed | high | yes | v0.83 | V2, subordinate clauses, connector-driven order. Allowed now as the next implementation patch; do not start any other later feature first. |
| connectors_completion | Connectors Completion | Current roadmap | deferred | v0.84 | word-order basis stable | high | no | v0.84 | Meaning and syntax contrasts. |
| repair_transformation_completion | Repair / Transformation Completion | Current roadmap | deferred | v0.85 | task-depth metadata stable | high | no | v0.85 | Keep repair evidence distinct. |
| production_completion | Production Completion | Current roadmap | deferred | v0.86 | self-marked semantics stable | high | no | v0.86 | No auto-grading. |
| redemittel_completion | Redemittel Completion | Current roadmap | deferred | v0.87 | production/card patterns stable | medium | no | v0.87 | Practical phrase coverage. |
| wortschatz_completion | Wortschatz Completion | Current roadmap | deferred | v0.88 | content QA batch scoped | medium | no | v0.88 | Avoid broad bucket pressure. |
| content_qa_batch | Content QA Batch | Current roadmap | deferred | v0.88 | completion passes produce audit targets | high | no | v0.88 | Fix ambiguity, leaks, metadata. |
| review_coverage_stabilisation | Review Coverage Stabilisation | Current roadmap | deferred | v0.89 | enough reviewable content | high | no | v0.89 | Prepare durability safely. |
| b1_completion_gate | B1 Completion Gate | Strategic source brief | deferred | v0.90 | content, metadata, progress evidence | high | no | v0.90 | Gate before B2. |
| b1_b2_separation_enforcement | B1/B2 Separation Enforcement | Strategic source brief | deferred | v0.91 | B1 completion gate definitions | high | no | v0.91 | Keep bridge preview out of B1 scoring. |
| learning_map_polish | Learning Map Polish | Current roadmap | deferred | v0.92 | B1 content/evidence spine stable | medium | no | v0.92 | UX polish only. |
| skill_matrix_polish | Skill Matrix Polish | Current roadmap | deferred | v0.93 | matrix evidence stable | medium | no | v0.93 | No fake mastery. |
| diagnostic_ux | Diagnostic UX | Current roadmap | deferred | v0.94 | diagnostic and repair metadata stable | medium | no | v0.94 | Snapshot-limited language. |
| weakness_repair | Weakness Repair | Strategic source brief | deferred | v0.94+ | Skill Matrix and task-depth evidence stable | high | no | after v0.94 prep | No shame or diagnosis overclaims. |
| durability_spaced_review | Durability / Spaced Review | Strategic source brief | deferred | v0.95+ | review coverage and eligible items | high | no | after enough reviewable coverage | No guilt/streak mechanics. |
| external_review_handoff | External Review Handoff | Strategic source brief | deferred planning | after production/save stability | stable production cards and save/import | high | planning_only | after v0.86 and save stability | Local opt-in handoff only; no runtime AI. |
| satzi_recommended_action_guide | Satzi Recommended Action Guide | Strategic source brief | deferred concept | after recommendation surfaces stable | recommendation logic trustworthy | medium | planning_only | after recommendations are stable | One static guide asset first. |
| accessibility_responsive_pass | Accessibility / Responsive Pass | Current roadmap | deferred | v0.97 | major B1 screens stable | medium | no | v0.97 | Full UX/accessibility pass. |
| progress_claim_audit | Progress Claim Audit | Current roadmap | deferred | v0.104 | B1 completion candidate evidence | medium | no | v0.104 | Audit labels, stars, claims. |
| data_migration_safety | Data Migration Safety | Current roadmap | deferred | v0.101 | structural changes identified | high | no | v0.101 | Preserve localStorage/export/import. |
| b2_planning | B2 Planning | Strategic source brief | locked planning | v0.110 | B1 completion gate review | high | planning_only | v0.110 | Plan only. |
| b2_implementation | B2 Implementation | Strategic source brief | locked | v0.120+ | B1 gate passed | high | no | after B1 gate passes | Do not activate early. |
