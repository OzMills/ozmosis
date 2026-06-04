# Ozmosis B1-03 — Full Staged Content Pipeline Output v0.1

Module: B1-03 — Job search / offices  
Internal planning ID: `b1_m03_job_search_offices`  
Slug: `job-search-offices`  
Status: pipeline-generated planning output, not app-ready JSON.

## 1. Module source verification

| Source | Status | Use | Caveat |
| --- | --- | --- | --- |
| Pipeline Core | Available | Process/evidence/row rules | No item text copied. |
| Cross-Spoke Consistency Audit | Available | Accepted spoke set with caveats | Minor caveats carried into QA notes. |
| B1-03 spoke | Available | Module boundaries and target families | No source text copied. |
| v0.80.4 source brief/roadmap | Available | Static app/storage constraints | No implementation here. |
| Vocabulary/course PDFs | Available | Structural inspiration only | No copied or paraphrased item text. |

## 2. Spoke intake

| Field | Value |
| --- | --- |
| moduleId | B1-03 |
| moduleTitle | Job search / offices |
| internalPlanningId | b1_m03_job_search_offices |
| moduleSlug | job-search-offices |
| learner-facing status | draft content-planning output |
| boundary decision | module spoke accepted; adjacent-module drift checked in QA |

## 3. Draft batch

| Metric | Count |
| --- | --- |
| Draft items generated | 28 |
| Auswahl items | 3 |
| Kontrast items | 3 |
| Luecke items | 8 |
| Produktion items | 2 |
| Reparatur items | 5 |
| Satzbau items | 3 |
| Umformen items | 1 |
| notice items | 3 |

### Draft item ledger

| itemId | taskType | targetFamilyId | targetId | cue | prompt | answer | feedback | evidenceType | reviewEligibility | QA decision | QA issue |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| draft_b1_03_001 | notice | TF-B1-03-LS08-02 | T-B1-03-LS08-02-01 | — | Concept: In office language, documents usually need an action: `ein Formular ausfüllen`, `Unterlagen einreichen`, `einen Antrag stellen`. | — | — | excluded | not_review_eligible | approve_as_is | — |
| draft_b1_03_002 | notice | TF-B1-03-LS05-01 | T-B1-03-LS05-01-01 | — | Concept: Learn office complement phrases as whole chunks first: `sich bei ... melden`, `zuständig sein für ...`, `sich informieren über ...`. | — | — | excluded | not_review_eligible | approve_as_is | — |
| draft_b1_03_003 | notice | TF-B1-03-LS03-01 | T-B1-03-LS03-01-02 | — | Concept: Deadline phrases such as `bis Freitag` and `bis zum Termin` are support phrases here, not a full preposition table. | — | — | excluded | not_review_eligible | approve_as_is | — |
| draft_b1_03_004 | Auswahl | TF-B1-03-LS08-01 | T-B1-03-LS08-01-01 | Choices: das Formular / der Rückruf / die Lieferung | German-first scenario: Sie bekommen ein Papier mit vielen Fragen. Which word fits? | das Formular | A `Formular` is a form. | auto_supported | weakly_eligible_after_delay | approve_as_is | — |
| draft_b1_03_005 | Auswahl | TF-B1-03-LS08-02 | T-B1-03-LS08-02-01 | stellen / trinken / schlafen | Which action fits with `Antrag` in formal admin German? | stellen | Use `einen Antrag stellen`. | auto_supported | weakly_eligible_after_delay | approve_as_is | — |
| draft_b1_03_006 | Auswahl | TF-B1-03-LS05-01 | T-B1-03-LS05-01-02 | Choices: Wer ist zuständig für...? / Wer ist krankgeschrieben? / Wer liefert morgen? | Which phrase asks who is responsible? | Wer ist zuständig für...? | `zuständig für` means responsible for. | auto_supported | weakly_eligible_after_delay | approve_as_is | — |
| draft_b1_03_007 | Luecke | TF-B1-03-LS08-02 | T-B1-03-LS08-02-01 | I have to submit/make an application. | Ich muss einen Antrag ___. | stellen | Use `einen Antrag stellen`. | auto_core | eligible_auto_after_delay | approve_as_is | — |
| draft_b1_03_008 | Luecke | TF-B1-03-LS08-02 | T-B1-03-LS08-02-02 | I have to fill in the form. | Ich muss das Formular ___. | ausfüllen | Use `ein Formular ausfüllen`. | auto_core | eligible_auto_after_delay | approve_as_is | — |
| draft_b1_03_009 | Luecke | TF-B1-03-LS08-02 | T-B1-03-LS08-02-03 | I have to submit the documents. | Ich muss die Unterlagen ___. | einreichen | Use `Unterlagen einreichen`. | auto_core | eligible_auto_after_delay | approve_as_is | — |
| draft_b1_03_010 | Luecke | TF-B1-03-LS04-01 | T-B1-03-LS04-01-01 | I have to hand in the documents today. | Ich ___ die Unterlagen heute abgeben. | muss | Use `muss` for obligation. | auto_core | eligible_auto_after_delay | approve_as_is | — |
| draft_b1_03_011 | Luecke | TF-B1-03-LS04-01 | T-B1-03-LS04-01-02 | Should I hand in the form here? | ___ ich das Formular hier abgeben? | Soll | Use `Soll ich...?` for asking what you should do. | auto_core | eligible_auto_after_delay | approve_as_is | — |
| draft_b1_03_012 | Luecke | TF-B1-03-LS05-01 | T-B1-03-LS05-01-01 | I contact/check in with counselling. | Ich melde mich ___ der Beratung. | bei | Use `sich bei ... melden`. | auto_core | eligible_auto_after_delay | approve_as_is | — |
| draft_b1_03_013 | Luecke | TF-B1-03-LS05-01 | T-B1-03-LS05-01-02 | Who is responsible for the application? | Wer ist zuständig ___ den Antrag? | für | Use `zuständig für`. | auto_core | eligible_auto_after_delay | approve_as_is | — |
| draft_b1_03_014 | Luecke | TF-B1-03-LS03-01 | T-B1-03-LS03-01-02 | Please hand in the documents by Friday. | Bitte geben Sie die Unterlagen ___ Freitag ab. | bis | Use `bis` for a deadline. | auto_core | eligible_auto_after_delay | approve_as_is | — |
| draft_b1_03_015 | Satzbau | TF-B1-03-LS07-01 | T-B1-03-LS07-01-01 | Build: Which documents do I need? | Chunks: `Welche / Unterlagen / brauche / ich?` | Welche Unterlagen brauche ich? | W-questions keep the finite verb in position 2. | auto_core | eligible_auto_after_delay | approve_as_is | — |
| draft_b1_03_016 | Satzbau | TF-B1-03-LS07-01 | T-B1-03-LS07-01-02 | Build: Where do I hand in the form? | Chunks: `Wo / gebe / ich / das Formular / ab?` | Wo gebe ich das Formular ab? | For separable verbs, the prefix can stand at the end. | auto_core | eligible_auto_after_delay | approve_as_is | — |
| draft_b1_03_017 | Satzbau | TF-B1-03-LS04-01 | T-B1-03-LS04-01-04 | Build: I have to submit the application. | Chunks: `Ich / muss / den Antrag / stellen.` | Ich muss den Antrag stellen. | Modal + infinitive: `muss ... stellen`. | auto_core | eligible_auto_after_delay | approve_as_is | — |
| draft_b1_03_018 | Reparatur | TF-B1-03-LS08-02 | T-B1-03-LS08-02-01 | Fix the collocation. | Fix: `Ich mache einen Antrag.` Intended formal admin meaning: submit an application. | Ich stelle einen Antrag. | Use `einen Antrag stellen`. | auto_supported | weakly_eligible_after_delay | approve_as_is | — |
| draft_b1_03_019 | Reparatur | TF-B1-03-LS08-02 | T-B1-03-LS08-02-02 | Fix the form action. | Fix: `Ich schreibe das Formular aus.` | Ich fülle das Formular aus. | Use `ein Formular ausfüllen`. | auto_core | eligible_auto_after_delay | approve_as_is | — |
| draft_b1_03_020 | Reparatur | TF-B1-03-LS05-01 | T-B1-03-LS05-01-02 | Fix the complement phrase. | Fix: `Wer ist zuständig über den Antrag?` | Wer ist zuständig für den Antrag? | Use `zuständig für`. | auto_core | eligible_auto_after_delay | approve_as_is | — |
| draft_b1_03_021 | Reparatur | TF-B1-03-LS04-01 | T-B1-03-LS04-01-01 | Fix the modal form. | Fix: `Ich müssen die Unterlagen abgeben.` | Ich muss die Unterlagen abgeben. | `Ich` uses `muss`, not `müssen`. | auto_core | eligible_auto_after_delay | approve_as_is | — |
| draft_b1_03_022 | Reparatur | TF-B1-03-LS03-01 | T-B1-03-LS03-01-02 | Fix the deadline phrase. | Fix: `Ich gebe die Unterlagen bis am Freitag ab.` | Ich gebe die Unterlagen bis Freitag ab. | Use `bis Freitag` for a simple deadline. | auto_core | eligible_auto_after_delay | approve_as_is | — |
| draft_b1_03_023 | Kontrast | TF-B1-03-LS08-01 | T-B1-03-LS08-01-01 | das Formular / der Termin | Choose the document you fill in. | das Formular | You fill in a form. | auto_supported | weakly_eligible_after_delay | approve_as_is | — |
| draft_b1_03_024 | Kontrast | TF-B1-03-LS08-01 | T-B1-03-LS08-01-02 | der Nachweis / der Vorschlag | Choose the phrase for proof/document evidence. | der Nachweis | A `Nachweis` is proof/evidence in admin contexts. | auto_supported | weakly_eligible_after_delay | approve_as_is | — |
| draft_b1_03_025 | Kontrast | TF-B1-03-LS08-02 | T-B1-03-LS08-02-03 | einreichen / besprechen | Choose the action for documents. | einreichen | Use `Unterlagen einreichen` for submitting documents. | auto_supported | weakly_eligible_after_delay | approve_as_is | — |
| draft_b1_03_026 | Umformen | TF-B1-03-LS07-01 | T-B1-03-LS07-01-01 | Ask which documents are needed. | Turn into an office question: `Ich brauche Unterlagen.` | Welche Unterlagen brauche ich? | Use `Welche Unterlagen...?` for this office question. | auto_core | eligible_auto_after_delay | approve_as_is | — |
| draft_b1_03_027 | Produktion | TF-B1-03-LS10-01 | T-B1-03-LS10-01-01 | Use `Welche Unterlagen...` | Write/say one short question asking which documents you need. | self-marked | Checklist: document + need + polite/clear question. | self_marked_production | not_review_eligible | approve_as_is | — |
| draft_b1_03_028 | Produktion | TF-B1-03-LS10-01 | T-B1-03-LS10-01-02 | Use `Wo gebe ich... ab?` | Write/say one short question asking where to hand in a form. | self-marked | Checklist: where + form + action. | self_marked_production | not_review_eligible | approve_as_is | — |

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
| Draft items audited | 28 |
| Approved as-is | 28 |
| Revised and approved | 0 |
| Cut | 0 |
| Deferred | 0 |
| Human/tutor check | 0 |
| Clean proceeding items | 28 |

QA note: this automated staged run keeps the first batch conservative. A later module-specific QA pass may still cut or revise individual items before import.


## 6. Variant-family decision

| Metric | Count |
| --- | --- |
| Variant families created | 5 |
| Variants inside families | 21 |
| Single auto-graded items retained | 2 |
| Notice cards retained separately | 3 |
| Production cards retained separately | 2 |

### Variant-family draft / QA ledger

| variantFamilyId | targetFamilyId | variantCount | familyType | decision | evidence caveat |
| --- | --- | --- | --- | --- | --- |
| b1-03-b1-03-ls08-01-vf-001 | TF-B1-03-LS08-01 | 3 | Type B | static curated variants | same-family evidence only; max one same-session evidence |
| b1-03-b1-03-ls08-02-vf-001 | TF-B1-03-LS08-02 | 7 | Type B | static curated variants | same-family evidence only; max one same-session evidence |
| b1-03-b1-03-ls05-01-vf-001 | TF-B1-03-LS05-01 | 4 | Type B | static curated variants | same-family evidence only; max one same-session evidence |
| b1-03-b1-03-ls04-01-vf-001 | TF-B1-03-LS04-01 | 4 | Type B | static curated variants | same-family evidence only; max one same-session evidence |
| b1-03-b1-03-ls07-01-vf-001 | TF-B1-03-LS07-01 | 3 | Type B | static curated variants | same-family evidence only; max one same-session evidence |

### Single-item ledger

| itemId | taskType | targetFamilyId | evidenceType | status |
| --- | --- | --- | --- | --- |
| draft_b1_03_014 | Luecke | TF-B1-03-LS03-01 | auto_core | kept as single item |
| draft_b1_03_022 | Reparatur | TF-B1-03-LS03-01 | auto_core | kept as single item |

## 7. Row reconciliation

| Stage | Expected | Actual / survivor | Cuts | Deferred | Human-check | Status |
| --- | --- | --- | --- | --- | --- | --- |
| Draft | 28 | 28 | 0 | 0 | 0 | OK |
| QA | 28 | 28 | 0 | 0 | 0 | OK |
| Variant-family grouping | 28 | 28 | 0 | 0 | 0 | OK |

## 8. Schema mapping readiness

| Field | Decision |
| --- | --- |
| displayModuleId | B1-03 |
| moduleKey | b1-03 |
| internalPlanningId | b1_m03_job_search_offices |
| moduleSlug | job-search-offices |
| moduleTitle | Job search / offices |
| supportPolicy/supportPresentation | Must be explicitly split in schema mapping; current supportPolicy is planning-only. |
| evidence labels | Mapped to auto_core / auto_supported / excluded / self_marked_production. |
| variant family readiness | Ready for schema mapping after module-specific QA review. |

### Schema-planning item summary

| itemId | targetFamilyId | targetId | taskType | answerMode planning | evidenceType | supportPolicy | reviewEligibility |
| --- | --- | --- | --- | --- | --- | --- | --- |
| draft_b1_03_001 | TF-B1-03-LS08-02 | T-B1-03-LS08-02-01 | notice | self_marked | excluded | scenario_visible | not_review_eligible |
| draft_b1_03_002 | TF-B1-03-LS05-01 | T-B1-03-LS05-01-01 | notice | self_marked | excluded | scenario_visible | not_review_eligible |
| draft_b1_03_003 | TF-B1-03-LS03-01 | T-B1-03-LS03-01-02 | notice | self_marked | excluded | scenario_visible | not_review_eligible |
| draft_b1_03_004 | TF-B1-03-LS08-01 | T-B1-03-LS08-01-01 | Auswahl | typed_short | auto_supported | scenario_visible | weakly_eligible_after_delay |
| draft_b1_03_005 | TF-B1-03-LS08-02 | T-B1-03-LS08-02-01 | Auswahl | typed_short | auto_supported | scenario_visible | weakly_eligible_after_delay |
| draft_b1_03_006 | TF-B1-03-LS05-01 | T-B1-03-LS05-01-02 | Auswahl | typed_short | auto_supported | scenario_visible | weakly_eligible_after_delay |
| draft_b1_03_007 | TF-B1-03-LS08-02 | T-B1-03-LS08-02-01 | Luecke | typed_short | auto_core | scenario_visible | eligible_auto_after_delay |
| draft_b1_03_008 | TF-B1-03-LS08-02 | T-B1-03-LS08-02-02 | Luecke | typed_short | auto_core | scenario_visible | eligible_auto_after_delay |
| draft_b1_03_009 | TF-B1-03-LS08-02 | T-B1-03-LS08-02-03 | Luecke | typed_short | auto_core | scenario_visible | eligible_auto_after_delay |
| draft_b1_03_010 | TF-B1-03-LS04-01 | T-B1-03-LS04-01-01 | Luecke | typed_short | auto_core | scenario_visible | eligible_auto_after_delay |
| draft_b1_03_011 | TF-B1-03-LS04-01 | T-B1-03-LS04-01-02 | Luecke | typed_short | auto_core | scenario_visible | eligible_auto_after_delay |
| draft_b1_03_012 | TF-B1-03-LS05-01 | T-B1-03-LS05-01-01 | Luecke | typed_short | auto_core | scenario_visible | eligible_auto_after_delay |
| draft_b1_03_013 | TF-B1-03-LS05-01 | T-B1-03-LS05-01-02 | Luecke | typed_short | auto_core | scenario_visible | eligible_auto_after_delay |
| draft_b1_03_014 | TF-B1-03-LS03-01 | T-B1-03-LS03-01-02 | Luecke | typed_short | auto_core | scenario_visible | eligible_auto_after_delay |
| draft_b1_03_015 | TF-B1-03-LS07-01 | T-B1-03-LS07-01-01 | Satzbau | sentence_order | auto_core | scenario_visible | eligible_auto_after_delay |
| draft_b1_03_016 | TF-B1-03-LS07-01 | T-B1-03-LS07-01-02 | Satzbau | sentence_order | auto_core | scenario_visible | eligible_auto_after_delay |
| draft_b1_03_017 | TF-B1-03-LS04-01 | T-B1-03-LS04-01-04 | Satzbau | sentence_order | auto_core | scenario_visible | eligible_auto_after_delay |
| draft_b1_03_018 | TF-B1-03-LS08-02 | T-B1-03-LS08-02-01 | Reparatur | repair_text | auto_supported | scenario_visible | weakly_eligible_after_delay |
| draft_b1_03_019 | TF-B1-03-LS08-02 | T-B1-03-LS08-02-02 | Reparatur | repair_text | auto_core | scenario_visible | eligible_auto_after_delay |
| draft_b1_03_020 | TF-B1-03-LS05-01 | T-B1-03-LS05-01-02 | Reparatur | repair_text | auto_core | scenario_visible | eligible_auto_after_delay |
| draft_b1_03_021 | TF-B1-03-LS04-01 | T-B1-03-LS04-01-01 | Reparatur | repair_text | auto_core | scenario_visible | eligible_auto_after_delay |
| draft_b1_03_022 | TF-B1-03-LS03-01 | T-B1-03-LS03-01-02 | Reparatur | repair_text | auto_core | scenario_visible | eligible_auto_after_delay |
| draft_b1_03_023 | TF-B1-03-LS08-01 | T-B1-03-LS08-01-01 | Kontrast | typed_short | auto_supported | scenario_visible | weakly_eligible_after_delay |
| draft_b1_03_024 | TF-B1-03-LS08-01 | T-B1-03-LS08-01-02 | Kontrast | typed_short | auto_supported | scenario_visible | weakly_eligible_after_delay |
| draft_b1_03_025 | TF-B1-03-LS08-02 | T-B1-03-LS08-02-03 | Kontrast | typed_short | auto_supported | scenario_visible | weakly_eligible_after_delay |
| draft_b1_03_026 | TF-B1-03-LS07-01 | T-B1-03-LS07-01-01 | Umformen | transformation_text | auto_core | scenario_visible | eligible_auto_after_delay |
| draft_b1_03_027 | TF-B1-03-LS10-01 | T-B1-03-LS10-01-01 | Produktion | self_marked | self_marked_production | scenario_visible | not_review_eligible |
| draft_b1_03_028 | TF-B1-03-LS10-01 | T-B1-03-LS10-01-02 | Produktion | self_marked | self_marked_production | scenario_visible | not_review_eligible |

## 9. Import-plan readiness

| Import area | Status | Notes |
| --- | --- | --- |
| Current app inspection | Not run | Required later before Codex. Do not assume route/content architecture. |
| Static content strategy | Ready as planning recommendation | Static records only; no runtime generation. |
| Storage/export | Preserve | No storage-key change allowed. |
| Sprint sampling | Defer implementation decision | B1-03 should not enter mixed sprints until route QA passes. |
| Codex implementation prompt | Not created | Create only after final QA, row reconciliation, schema mapping, and import plan. |

## 10. Files to save

- `ozmosis_b1_m03_job_search_offices_draft_items_v0_1.md`
- `ozmosis_b1_m03_job_search_offices_phase3a_qa_approved_v0_1.md`
- `ozmosis_b1_m03_job_search_offices_variant_family_decision_v0_1.md`
- `ozmosis_b1_m03_job_search_offices_final_inventory_v0_1.md`
- `ozmosis_b1_m03_job_search_offices_schema_mapping_v0_1.md`
- `ozmosis_b1_m03_job_search_offices_codex_import_plan_v0_1.md`


## 11. Stop/go verdict

`READY_FOR_MODULE_SPECIFIC_QA_AND_ROW_RECONCILIATION`

This module has a complete first staged draft path, but it should receive a module-specific QA pass before app import planning is treated as final.
