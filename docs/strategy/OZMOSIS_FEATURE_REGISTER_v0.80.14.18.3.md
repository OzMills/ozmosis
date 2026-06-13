# Ozmosis Feature Register v0.80.14.18.3

This versioned register snapshots `docs/OZMOSIS_FEATURE_REGISTER_CURRENT.md` as created in v0.80.14.18.3.

`allowed_now` values: `yes`, `no`, `planning_only`, `audit_only`.

| feature_id | feature_name | source_documents | current_status | earliest_safe_version | blocking_prerequisites | risk_level | allowed_now | do_not_implement_before | notes |
|---|---|---|---|---|---|---|---|---|---|
| cases_articles_completion | Cases and Articles Completion | Current roadmap, data/article-items.tsv | next implementation patch | v0.81 | v0.80.14.18.2 baseline, strategic docs restored | high | yes | v0.81 | Next patch; preserve Case Trainer and save/import. |
| phase_2_5_normalisation_addendum_v0_2 | Phase 2.5 normalisation addendum v0.2 | Strategic roadmap | deferred planning | v0.81.x or v0.82-planning | v0.81 scoped safely | high | planning_only | after v0.81 scope is stable | Needed before broad generation. |
| b1_01_extension_survival_audit | B1-01 extension survival audit | Strategic roadmap | deferred audit | v0.81.x or v0.82-planning | baseline B1-01 IDs stable | medium | audit_only | after v0.81 | Do not rewrite content broadly. |
| prepositions_completion | Prepositions Completion | Current roadmap | deferred | v0.82 | cases/articles stable | high | no | v0.82 | Fixed and two-way prepositions. |
| word_order_completion | Word Order Completion | Current roadmap | deferred | v0.83 | preposition/case scope stable | high | no | v0.83 | V2 and subordinate clauses. |
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
| weakness_repair | Weakness Repair | Strategic source brief | deferred | v0.94+ | Skill Matrix and task-depth evidence stable | high | no | after v0.94 prep | No diagnosis overclaims. |
| durability_spaced_review | Durability / Spaced Review | Strategic source brief | deferred | v0.95+ | review coverage and eligible items | high | no | after enough reviewable coverage | No guilt mechanics. |
| external_review_handoff | External Review Handoff | Strategic source brief | deferred planning | after production/save stability | stable production cards and save/import | high | planning_only | after v0.86 and save stability | Local opt-in only; no runtime AI. |
| satzi_recommended_action_guide | Satzi Recommended Action Guide | Strategic source brief | deferred concept | after recommendation surfaces stable | recommendation logic trustworthy | medium | planning_only | after recommendations are stable | One static guide asset first. |
| accessibility_responsive_pass | Accessibility / Responsive Pass | Current roadmap | deferred | v0.97 | major B1 screens stable | medium | no | v0.97 | Full UX/accessibility pass. |
| progress_claim_audit | Progress Claim Audit | Current roadmap | deferred | v0.104 | B1 completion candidate evidence | medium | no | v0.104 | Audit labels, stars, claims. |
| data_migration_safety | Data Migration Safety | Current roadmap | deferred | v0.101 | structural changes identified | high | no | v0.101 | Preserve localStorage/export/import. |
| b2_planning | B2 Planning | Strategic source brief | locked planning | v0.110 | B1 completion gate review | high | planning_only | v0.110 | Plan only. |
| b2_implementation | B2 Implementation | Strategic source brief | locked | v0.120+ | B1 gate passed | high | no | after B1 gate passes | Do not activate early. |

