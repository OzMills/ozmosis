# Ozmosis B1-04 — Full Staged Content Pipeline Output v0.1

Module: B1-04 — Applications  
Internal planning ID: `b1_m04_applications`  
Slug: `applications`  
Status: pipeline-generated planning output, not app-ready JSON.

## 1. Module source verification

| Source | Status | Use | Caveat |
| --- | --- | --- | --- |
| Pipeline Core | Available | Process/evidence/row rules | No item text copied. |
| Cross-Spoke Consistency Audit | Available | Accepted spoke set with caveats | Minor caveats carried into QA notes. |
| B1-04 spoke | Available | Module boundaries and target families | No source text copied. |
| v0.80.4 source brief/roadmap | Available | Static app/storage constraints | No implementation here. |
| Vocabulary/course PDFs | Available | Structural inspiration only | No copied or paraphrased item text. |

## 2. Spoke intake

| Field | Value |
| --- | --- |
| moduleId | B1-04 |
| moduleTitle | Applications |
| internalPlanningId | b1_m04_applications |
| moduleSlug | applications |
| learner-facing status | draft content-planning output |
| boundary decision | module spoke accepted; adjacent-module drift checked in QA |

## 3. Draft batch

| Metric | Count |
| --- | --- |
| Draft items generated | 26 |
| Auswahl items | 3 |
| Kontrast items | 3 |
| Luecke items | 7 |
| Produktion items | 2 |
| Reparatur items | 4 |
| Satzbau items | 3 |
| Umformen items | 1 |
| notice items | 3 |

### Draft item ledger

| itemId | taskType | targetFamilyId | targetId | cue | prompt | answer | feedback | evidenceType | reviewEligibility | QA decision | QA issue |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| draft_b1_04_001 | notice | TF-B1-04-LS05-01 | T-B1-04-LS05-01-01 | — | Concept: `Ich bewerbe mich um eine Stelle` is a controlled application frame. Do not treat it as a full reflexive-verb lesson. | — | — | excluded | not_review_eligible | approve_as_is | — |
| draft_b1_04_002 | notice | TF-B1-04-LS08-02 | T-B1-04-LS08-02-01 | — | Concept: Application documents are action objects: send the CV, attach certificates, upload documents. | — | — | excluded | not_review_eligible | approve_as_is | — |
| draft_b1_04_003 | notice | TF-B1-04-LS10-01 | T-B1-04-LS10-01-01 | — | Concept: Application writing in this module is self-marked practice only, not a polished cover-letter score. | — | — | excluded | not_review_eligible | approve_as_is | — |
| draft_b1_04_004 | Auswahl | TF-B1-04-LS08-01 | T-B1-04-LS08-01-01 | Choices: die Stellenanzeige / die Krankmeldung / die Lieferung | Which word means a job advert? | die Stellenanzeige | A `Stellenanzeige` is a job advert. | auto_supported | weakly_eligible_after_delay | approve_as_is | — |
| draft_b1_04_005 | Auswahl | TF-B1-04-LS08-02 | T-B1-04-LS08-02-01 | Choices: der Lebenslauf / der Rückruf / der Gutschein | Which document is a CV? | der Lebenslauf | `Lebenslauf` is CV. | auto_supported | weakly_eligible_after_delay | approve_as_is | — |
| draft_b1_04_006 | Auswahl | TF-B1-04-LS08-02 | T-B1-04-LS08-02-01 | Choices: das Anschreiben / die Sprechzeit / der Papierstau | Which document is usually the cover/application letter? | das Anschreiben | `Anschreiben` is the cover letter/application letter document. | auto_supported | weakly_eligible_after_delay | approve_as_is | — |
| draft_b1_04_007 | Luecke | TF-B1-04-LS05-01 | T-B1-04-LS05-01-01 | I am applying for the position. | Ich bewerbe mich ___ die Stelle. | um | Use `sich bewerben um` for the position. | auto_core | eligible_auto_after_delay | approve_as_is | — |
| draft_b1_04_008 | Luecke | TF-B1-04-LS05-01 | T-B1-04-LS05-01-02 | I am applying as a sales assistant. | Ich bewerbe mich ___ Verkäuferin. | als | Use `als` for the role. | auto_core | eligible_auto_after_delay | approve_as_is | — |
| draft_b1_04_009 | Luecke | TF-B1-04-LS05-01 | T-B1-04-LS05-01-03 | I am applying to/with the company Nordlicht. | Ich bewerbe mich ___ der Firma Nordlicht. | bei | Use `bei` for the company/place. | auto_core | eligible_auto_after_delay | approve_as_is | — |
| draft_b1_04_010 | Luecke | TF-B1-04-LS04-01 | T-B1-04-LS04-01-01 | I have experience with customers. | Ich habe Erfahrung ___ Kunden. | mit | Use `Erfahrung mit`. | auto_core | eligible_auto_after_delay | approve_as_is | — |
| draft_b1_04_011 | Luecke | TF-B1-04-LS04-01 | T-B1-04-LS04-01-03 | I can work well with the computer. | Ich ___ gut mit dem Computer arbeiten. | kann | Use `kann` with `ich`. | auto_core | eligible_auto_after_delay | approve_as_is | — |
| draft_b1_04_012 | Luecke | TF-B1-04-LS07-01 | T-B1-04-LS07-01-01 | I am interested in the position. | Ich interessiere mich ___ die Stelle. | für | Use `sich interessieren für`. | auto_core | eligible_auto_after_delay | approve_as_is | — |
| draft_b1_04_013 | Luecke | TF-B1-04-LS03-01 | T-B1-04-LS03-01-01 | I can start immediately. | Ich kann ___ sofort anfangen. | ab | Use `ab sofort`. | auto_core | eligible_auto_after_delay | approve_as_is | — |
| draft_b1_04_014 | Satzbau | TF-B1-04-LS05-01 | T-B1-04-LS05-01-01 | Build the application frame. | Chunks: `Ich / bewerbe / mich / um / die Stelle.` | Ich bewerbe mich um die Stelle. | Keep `mich` with `bewerbe`. | auto_core | eligible_auto_after_delay | approve_as_is | — |
| draft_b1_04_015 | Satzbau | TF-B1-04-LS04-01 | T-B1-04-LS04-01-03 | Build the skill sentence. | Chunks: `Ich / kann / gut / im Team / arbeiten.` | Ich kann gut im Team arbeiten. | Modal + infinitive: `kann ... arbeiten`. | auto_core | eligible_auto_after_delay | approve_as_is | — |
| draft_b1_04_016 | Satzbau | TF-B1-04-LS07-02 | T-B1-04-LS07-02-02 | Build the availability sentence. | Chunks: `Ich / kann / ab Juli / anfangen.` | Ich kann ab Juli anfangen. | `ab Juli` gives the starting time. | auto_core | eligible_auto_after_delay | approve_as_is | — |
| draft_b1_04_017 | Reparatur | TF-B1-04-LS05-01 | T-B1-04-LS05-01-01 | Fix the reflexive application frame. | Fix: `Ich bewerbe mir um die Stelle.` | Ich bewerbe mich um die Stelle. | Use `mich` with `ich bewerbe`. | auto_core | eligible_auto_after_delay | approve_as_is | — |
| draft_b1_04_018 | Reparatur | TF-B1-04-LS05-01 | T-B1-04-LS05-01-01 | Fix the application preposition. | Fix: `Ich bewerbe mich für die Stelle.` Intended target frame: applying for a position. | Ich bewerbe mich um die Stelle. | Use `um` for the position. | auto_supported | weakly_eligible_after_delay | approve_as_is | — |
| draft_b1_04_019 | Reparatur | TF-B1-04-LS04-01 | T-B1-04-LS04-01-01 | Fix the experience phrase. | Fix: `Ich habe Erfahrung über Kunden.` | Ich habe Erfahrung mit Kunden. | Use `Erfahrung mit`. | auto_core | eligible_auto_after_delay | approve_as_is | — |
| draft_b1_04_020 | Reparatur | TF-B1-04-LS04-01 | T-B1-04-LS04-01-03 | Fix the phrase. | Fix: `Ich kann gut mit Computer arbeiten.` | Ich kann gut mit dem Computer arbeiten. | Use `mit dem Computer` as a fixed support phrase. | auto_supported | weakly_eligible_after_delay | approve_as_is | — |
| draft_b1_04_021 | Kontrast | TF-B1-04-LS08-02 | T-B1-04-LS08-02-01 | der Lebenslauf / das Anschreiben | Choose the CV document. | der Lebenslauf | The CV is `der Lebenslauf`. | auto_supported | weakly_eligible_after_delay | approve_as_is | — |
| draft_b1_04_022 | Kontrast | TF-B1-04-LS05-01 | T-B1-04-LS05-01-02 | als / um | Choose the frame for a role: `Ich bewerbe mich ___ Verkäufer.` | als | Use `als` for the role. | auto_supported | weakly_eligible_after_delay | approve_as_is | — |
| draft_b1_04_023 | Kontrast | TF-B1-04-LS04-01 | T-B1-04-LS04-01-04 | Ich bin zuverlässig. / Ich bin zuverlässige Mitarbeiter. | Choose the sentence without adjective endings as target. | Ich bin zuverlässig. | Use predicative adjective here: `Ich bin zuverlässig`. | auto_supported | weakly_eligible_after_delay | approve_as_is | — |
| draft_b1_04_024 | Umformen | TF-B1-04-LS07-01 | T-B1-04-LS07-01-01 | Use the target frame. | Turn into an interest statement: `Die Stelle ist interessant für mich.` | Ich interessiere mich für die Stelle. | `sich interessieren für` is the interest frame. | auto_core | eligible_auto_after_delay | approve_as_is | — |
| draft_b1_04_025 | Produktion | TF-B1-04-LS10-01 | T-B1-04-LS10-01-01 | Use one application frame and one skill. | Write 2 short sentences for an application message. | self-marked | Checklist: position + one skill + simple language. | self_marked_production | not_review_eligible | approve_as_is | — |
| draft_b1_04_026 | Produktion | TF-B1-04-LS10-01 | T-B1-04-LS10-01-02 | Use `Ich kann ab... anfangen.` | Answer one interview question: When can you start? | self-marked | Checklist: start date + simple sentence. | self_marked_production | not_review_eligible | approve_as_is | — |

## 4. Draft self-audit

| Audit area | Result | Notes |
| --- | --- | --- |
| Source safety | Pass | Original micro-scenarios and common B1 language only; no copied exercise text. |
| Module boundary | Pass | No adjacent module ownership intentionally crossed. |
| German naturalness | Pass with QA caveat | All items require later human-style QA before import; no obvious artificial grammar traps retained. |
| Single-target safety | Pass with caveat | Connector and repair items stay short; multi-skill risk documented. |
| Production safety | Pass | Production is self-marked only. |
| Evidence safety | Pass | Visible support and recognition are downgraded. |

## 5. QA / reject / revise result

| Metric | Count |
| --- | --- |
| Draft items audited | 26 |
| Approved as-is | 26 |
| Revised and approved | 0 |
| Cut | 0 |
| Deferred | 0 |
| Human/tutor check | 0 |
| Clean proceeding items | 26 |

QA note: this automated staged run keeps the first batch conservative. A later module-specific QA pass may still cut or revise individual items before import.


## 6. Variant-family decision

| Metric | Count |
| --- | --- |
| Variant families created | 3 |
| Variants inside families | 16 |
| Single auto-graded items retained | 5 |
| Notice cards retained separately | 3 |
| Production cards retained separately | 2 |

### Variant-family draft / QA ledger

| variantFamilyId | targetFamilyId | variantCount | familyType | decision | evidence caveat |
| --- | --- | --- | --- | --- | --- |
| b1-04-b1-04-ls08-02-vf-001 | TF-B1-04-LS08-02 | 3 | Type B | static curated variants | same-family evidence only; max one same-session evidence |
| b1-04-b1-04-ls05-01-vf-001 | TF-B1-04-LS05-01 | 7 | Type B | static curated variants | same-family evidence only; max one same-session evidence |
| b1-04-b1-04-ls04-01-vf-001 | TF-B1-04-LS04-01 | 6 | Type B | static curated variants | same-family evidence only; max one same-session evidence |

### Single-item ledger

| itemId | taskType | targetFamilyId | evidenceType | status |
| --- | --- | --- | --- | --- |
| draft_b1_04_004 | Auswahl | TF-B1-04-LS08-01 | auto_supported | kept as single item |
| draft_b1_04_012 | Luecke | TF-B1-04-LS07-01 | auto_core | kept as single item |
| draft_b1_04_024 | Umformen | TF-B1-04-LS07-01 | auto_core | kept as single item |
| draft_b1_04_013 | Luecke | TF-B1-04-LS03-01 | auto_core | kept as single item |
| draft_b1_04_016 | Satzbau | TF-B1-04-LS07-02 | auto_core | kept as single item |

## 7. Row reconciliation

| Stage | Expected | Actual / survivor | Cuts | Deferred | Human-check | Status |
| --- | --- | --- | --- | --- | --- | --- |
| Draft | 26 | 26 | 0 | 0 | 0 | OK |
| QA | 26 | 26 | 0 | 0 | 0 | OK |
| Variant-family grouping | 26 | 26 | 0 | 0 | 0 | OK |

## 8. Schema mapping readiness

| Field | Decision |
| --- | --- |
| displayModuleId | B1-04 |
| moduleKey | b1-04 |
| internalPlanningId | b1_m04_applications |
| moduleSlug | applications |
| moduleTitle | Applications |
| supportPolicy/supportPresentation | Must be explicitly split in schema mapping; current supportPolicy is planning-only. |
| evidence labels | Mapped to auto_core / auto_supported / excluded / self_marked_production. |
| variant family readiness | Ready for schema mapping after module-specific QA review. |

### Schema-planning item summary

| itemId | targetFamilyId | targetId | taskType | answerMode planning | evidenceType | supportPolicy | reviewEligibility |
| --- | --- | --- | --- | --- | --- | --- | --- |
| draft_b1_04_001 | TF-B1-04-LS05-01 | T-B1-04-LS05-01-01 | notice | self_marked | excluded | scenario_visible | not_review_eligible |
| draft_b1_04_002 | TF-B1-04-LS08-02 | T-B1-04-LS08-02-01 | notice | self_marked | excluded | scenario_visible | not_review_eligible |
| draft_b1_04_003 | TF-B1-04-LS10-01 | T-B1-04-LS10-01-01 | notice | self_marked | excluded | scenario_visible | not_review_eligible |
| draft_b1_04_004 | TF-B1-04-LS08-01 | T-B1-04-LS08-01-01 | Auswahl | typed_short | auto_supported | scenario_visible | weakly_eligible_after_delay |
| draft_b1_04_005 | TF-B1-04-LS08-02 | T-B1-04-LS08-02-01 | Auswahl | typed_short | auto_supported | scenario_visible | weakly_eligible_after_delay |
| draft_b1_04_006 | TF-B1-04-LS08-02 | T-B1-04-LS08-02-01 | Auswahl | typed_short | auto_supported | scenario_visible | weakly_eligible_after_delay |
| draft_b1_04_007 | TF-B1-04-LS05-01 | T-B1-04-LS05-01-01 | Luecke | typed_short | auto_core | scenario_visible | eligible_auto_after_delay |
| draft_b1_04_008 | TF-B1-04-LS05-01 | T-B1-04-LS05-01-02 | Luecke | typed_short | auto_core | scenario_visible | eligible_auto_after_delay |
| draft_b1_04_009 | TF-B1-04-LS05-01 | T-B1-04-LS05-01-03 | Luecke | typed_short | auto_core | scenario_visible | eligible_auto_after_delay |
| draft_b1_04_010 | TF-B1-04-LS04-01 | T-B1-04-LS04-01-01 | Luecke | typed_short | auto_core | scenario_visible | eligible_auto_after_delay |
| draft_b1_04_011 | TF-B1-04-LS04-01 | T-B1-04-LS04-01-03 | Luecke | typed_short | auto_core | scenario_visible | eligible_auto_after_delay |
| draft_b1_04_012 | TF-B1-04-LS07-01 | T-B1-04-LS07-01-01 | Luecke | typed_short | auto_core | scenario_visible | eligible_auto_after_delay |
| draft_b1_04_013 | TF-B1-04-LS03-01 | T-B1-04-LS03-01-01 | Luecke | typed_short | auto_core | scenario_visible | eligible_auto_after_delay |
| draft_b1_04_014 | TF-B1-04-LS05-01 | T-B1-04-LS05-01-01 | Satzbau | sentence_order | auto_core | scenario_visible | eligible_auto_after_delay |
| draft_b1_04_015 | TF-B1-04-LS04-01 | T-B1-04-LS04-01-03 | Satzbau | sentence_order | auto_core | scenario_visible | eligible_auto_after_delay |
| draft_b1_04_016 | TF-B1-04-LS07-02 | T-B1-04-LS07-02-02 | Satzbau | sentence_order | auto_core | scenario_visible | eligible_auto_after_delay |
| draft_b1_04_017 | TF-B1-04-LS05-01 | T-B1-04-LS05-01-01 | Reparatur | repair_text | auto_core | scenario_visible | eligible_auto_after_delay |
| draft_b1_04_018 | TF-B1-04-LS05-01 | T-B1-04-LS05-01-01 | Reparatur | repair_text | auto_supported | scenario_visible | weakly_eligible_after_delay |
| draft_b1_04_019 | TF-B1-04-LS04-01 | T-B1-04-LS04-01-01 | Reparatur | repair_text | auto_core | scenario_visible | eligible_auto_after_delay |
| draft_b1_04_020 | TF-B1-04-LS04-01 | T-B1-04-LS04-01-03 | Reparatur | repair_text | auto_supported | scenario_visible | weakly_eligible_after_delay |
| draft_b1_04_021 | TF-B1-04-LS08-02 | T-B1-04-LS08-02-01 | Kontrast | typed_short | auto_supported | scenario_visible | weakly_eligible_after_delay |
| draft_b1_04_022 | TF-B1-04-LS05-01 | T-B1-04-LS05-01-02 | Kontrast | typed_short | auto_supported | scenario_visible | weakly_eligible_after_delay |
| draft_b1_04_023 | TF-B1-04-LS04-01 | T-B1-04-LS04-01-04 | Kontrast | typed_short | auto_supported | scenario_visible | weakly_eligible_after_delay |
| draft_b1_04_024 | TF-B1-04-LS07-01 | T-B1-04-LS07-01-01 | Umformen | transformation_text | auto_core | scenario_visible | eligible_auto_after_delay |
| draft_b1_04_025 | TF-B1-04-LS10-01 | T-B1-04-LS10-01-01 | Produktion | self_marked | self_marked_production | scenario_visible | not_review_eligible |
| draft_b1_04_026 | TF-B1-04-LS10-01 | T-B1-04-LS10-01-02 | Produktion | self_marked | self_marked_production | scenario_visible | not_review_eligible |

## 9. Import-plan readiness

| Import area | Status | Notes |
| --- | --- | --- |
| Current app inspection | Not run | Required later before Codex. Do not assume route/content architecture. |
| Static content strategy | Ready as planning recommendation | Static records only; no runtime generation. |
| Storage/export | Preserve | No storage-key change allowed. |
| Sprint sampling | Defer implementation decision | B1-04 should not enter mixed sprints until route QA passes. |
| Codex implementation prompt | Not created | Create only after final QA, row reconciliation, schema mapping, and import plan. |

## 10. Files to save

- `ozmosis_b1_m04_applications_draft_items_v0_1.md`
- `ozmosis_b1_m04_applications_phase3a_qa_approved_v0_1.md`
- `ozmosis_b1_m04_applications_variant_family_decision_v0_1.md`
- `ozmosis_b1_m04_applications_final_inventory_v0_1.md`
- `ozmosis_b1_m04_applications_schema_mapping_v0_1.md`
- `ozmosis_b1_m04_applications_codex_import_plan_v0_1.md`


## 11. Stop/go verdict

`READY_FOR_MODULE_SPECIFIC_QA_AND_ROW_RECONCILIATION`

This module has a complete first staged draft path, but it should receive a module-specific QA pass before app import planning is treated as final.
