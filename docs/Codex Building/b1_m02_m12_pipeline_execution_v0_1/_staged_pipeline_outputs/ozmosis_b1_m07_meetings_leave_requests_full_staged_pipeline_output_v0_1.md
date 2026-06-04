# Ozmosis B1-07 — Full Staged Content Pipeline Output v0.1

Module: B1-07 — Meetings / leave requests  
Internal planning ID: `b1_m07_meetings_leave_requests`  
Slug: `meetings-leave-requests`  
Status: pipeline-generated planning output, not app-ready JSON.

## 1. Module source verification

| Source | Status | Use | Caveat |
| --- | --- | --- | --- |
| Pipeline Core | Available | Process/evidence/row rules | No item text copied. |
| Cross-Spoke Consistency Audit | Available | Accepted spoke set with caveats | Minor caveats carried into QA notes. |
| B1-07 spoke | Available | Module boundaries and target families | No source text copied. |
| v0.80.4 source brief/roadmap | Available | Static app/storage constraints | No implementation here. |
| Vocabulary/course PDFs | Available | Structural inspiration only | No copied or paraphrased item text. |

## 2. Spoke intake

| Field | Value |
| --- | --- |
| moduleId | B1-07 |
| moduleTitle | Meetings / leave requests |
| internalPlanningId | b1_m07_meetings_leave_requests |
| moduleSlug | meetings-leave-requests |
| learner-facing status | draft content-planning output |
| boundary decision | module spoke accepted; adjacent-module drift checked in QA |

## 3. Draft batch

| Metric | Count |
| --- | --- |
| Draft items generated | 20 |
| Auswahl items | 2 |
| Kontrast items | 2 |
| Luecke items | 5 |
| Produktion items | 2 |
| Reparatur items | 3 |
| Satzbau items | 3 |
| notice items | 3 |

### Draft item ledger

| itemId | taskType | targetFamilyId | targetId | cue | prompt | answer | feedback | evidenceType | reviewEligibility | QA decision | QA issue |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| draft_b1_07_001 | notice | TF-B1-07-LS07-01 | T-B1-07-LS07-01-01 | — | Concept: Leave requests are not sick-leave messages. Use `Urlaub` or `frei nehmen`, not `krankmelden`. | — | — | excluded | not_review_eligible | approve_as_is | — |
| draft_b1_07_002 | notice | TF-B1-07-LS06-01 | T-B1-07-LS06-01-02 | — | Concept: `ob` introduces an indirect yes/no question and sends the verb to the end. | — | — | excluded | not_review_eligible | approve_as_is | — |
| draft_b1_07_003 | notice | TF-B1-07-LS04-01 | T-B1-07-LS04-01-01 | — | Concept: `Wir könnten...` is a simple suggestion frame, not full negotiation. | — | — | excluded | not_review_eligible | approve_as_is | — |
| draft_b1_07_004 | Auswahl | TF-B1-07-LS08-01 | T-B1-07-LS08-01-01 | die Besprechung / das Attest / die Rechnung | Which word is a meeting? | die Besprechung | `Besprechung` is a meeting/discussion. | auto_supported | weakly_eligible_after_delay | approve_as_is | — |
| draft_b1_07_005 | Auswahl | TF-B1-07-LS07-01 | T-B1-07-LS07-01-01 | Urlaub nehmen / krankmelden / Rechnung bezahlen | Which phrase asks for holiday/leave? | Urlaub nehmen | `Urlaub nehmen` belongs to leave, not sick leave. | auto_supported | weakly_eligible_after_delay | approve_as_is | — |
| draft_b1_07_006 | Luecke | TF-B1-07-LS07-01 | T-B1-07-LS07-01-01 | I would like to take holiday next week. | Ich möchte nächste Woche Urlaub ___. | nehmen | Use `Urlaub nehmen`. | auto_core | eligible_auto_after_delay | approve_as_is | — |
| draft_b1_07_007 | Luecke | TF-B1-07-LS07-01 | T-B1-07-LS07-01-02 | Can I take Friday off? | Kann ich am Freitag frei ___? | nehmen | Use `frei nehmen`. | auto_core | eligible_auto_after_delay | approve_as_is | — |
| draft_b1_07_008 | Luecke | TF-B1-07-LS06-01 | T-B1-07-LS06-01-02 | I ask whether the appointment suits tomorrow. | Ich frage, ob der Termin morgen ___. | passt | With `ob`, the finite verb goes to the end. | auto_core | eligible_auto_after_delay | approve_as_is | — |
| draft_b1_07_009 | Luecke | TF-B1-07-LS04-01 | T-B1-07-LS04-01-01 | We could move the appointment. | Wir ___ den Termin verschieben. | könnten | `Wir könnten...` is a proposal frame. | auto_core | eligible_auto_after_delay | approve_as_is | — |
| draft_b1_07_010 | Luecke | TF-B1-07-LS03-01 | T-B1-07-LS03-01-02 | The holiday is from Monday to Friday. | Der Urlaub ist ___ Montag bis Freitag. | von | Use `von ... bis ...`. | auto_core | eligible_auto_after_delay | approve_as_is | — |
| draft_b1_07_011 | Satzbau | TF-B1-07-LS07-01 | T-B1-07-LS07-01-01 | Build the leave request sentence. | Chunks: `Ich / möchte / Urlaub / nehmen.` | Ich möchte Urlaub nehmen. | Use `Urlaub nehmen`. | auto_core | eligible_auto_after_delay | approve_as_is | — |
| draft_b1_07_012 | Satzbau | TF-B1-07-LS04-01 | T-B1-07-LS04-01-01 | Build the proposal sentence. | Chunks: `Wir / könnten / den Termin / verschieben.` | Wir könnten den Termin verschieben. | `könnten` keeps the infinitive at the end. | auto_core | eligible_auto_after_delay | approve_as_is | — |
| draft_b1_07_013 | Satzbau | TF-B1-07-LS06-01 | T-B1-07-LS06-01-02 | Build the indirect question. | Chunks: `Ich / frage, / ob / der Termin / passt.` | Ich frage, ob der Termin passt. | After `ob`, the verb goes to the end. | auto_core | eligible_auto_after_delay | approve_as_is | — |
| draft_b1_07_014 | Reparatur | TF-B1-07-LS06-01 | T-B1-07-LS06-01-02 | Fix the `ob` clause. | Fix: `Ich frage, ob passt der Termin.` | Ich frage, ob der Termin passt. | Verb goes at the end in the `ob` clause. | auto_core | eligible_auto_after_delay | approve_as_is | — |
| draft_b1_07_015 | Reparatur | TF-B1-07-LS07-01 | T-B1-07-LS07-01-01 | Fix the leave-request phrase. | Fix: `Ich möchte Urlaub machen.` Intended workplace leave request. | Ich möchte Urlaub nehmen. | Use `Urlaub nehmen` in this workplace frame. | auto_supported | weakly_eligible_after_delay | approve_as_is | — |
| draft_b1_07_016 | Reparatur | TF-B1-07-LS04-01 | T-B1-07-LS04-01-01 | Fix modal word order. | Fix: `Wir könnten verschieben den Termin.` | Wir könnten den Termin verschieben. | The infinitive goes at the end. | auto_core | eligible_auto_after_delay | approve_as_is | — |
| draft_b1_07_017 | Kontrast | TF-B1-07-LS07-01 | T-B1-07-LS07-01-01 | Urlaub nehmen / krankmelden | Choose leave, not sickness. | Urlaub nehmen | Leave request: `Urlaub nehmen`. | auto_supported | weakly_eligible_after_delay | approve_as_is | — |
| draft_b1_07_018 | Kontrast | TF-B1-07-LS06-01 | T-B1-07-LS06-01-02 | ob / dass | Choose indirect yes/no connector. | ob | Use `ob` for whether/if in an indirect question. | auto_supported | weakly_eligible_after_delay | approve_as_is | — |
| draft_b1_07_019 | Produktion | TF-B1-07-LS10-01 | T-B1-07-LS10-01-01 | Use `Urlaub nehmen` or `frei nehmen`. | Write/say one short leave request. | self-marked | Checklist: date + request + polite tone. | self_marked_production | not_review_eligible | approve_as_is | — |
| draft_b1_07_020 | Produktion | TF-B1-07-LS10-01 | T-B1-07-LS10-01-02 | Use `Der Termin passt.` | Reply that a meeting time works for you. | self-marked | Checklist: meeting + time + works/doesn't work. | self_marked_production | not_review_eligible | approve_as_is | — |

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
| Draft items audited | 20 |
| Approved as-is | 20 |
| Revised and approved | 0 |
| Cut | 0 |
| Deferred | 0 |
| Human/tutor check | 0 |
| Clean proceeding items | 20 |

QA note: this automated staged run keeps the first batch conservative. A later module-specific QA pass may still cut or revise individual items before import.


## 6. Variant-family decision

| Metric | Count |
| --- | --- |
| Variant families created | 3 |
| Variants inside families | 13 |
| Single auto-graded items retained | 2 |
| Notice cards retained separately | 3 |
| Production cards retained separately | 2 |

### Variant-family draft / QA ledger

| variantFamilyId | targetFamilyId | variantCount | familyType | decision | evidence caveat |
| --- | --- | --- | --- | --- | --- |
| b1-07-b1-07-ls07-01-vf-001 | TF-B1-07-LS07-01 | 6 | Type B | static curated variants | same-family evidence only; max one same-session evidence |
| b1-07-b1-07-ls06-01-vf-001 | TF-B1-07-LS06-01 | 4 | Type B | static curated variants | same-family evidence only; max one same-session evidence |
| b1-07-b1-07-ls04-01-vf-001 | TF-B1-07-LS04-01 | 3 | Type B | static curated variants | same-family evidence only; max one same-session evidence |

### Single-item ledger

| itemId | taskType | targetFamilyId | evidenceType | status |
| --- | --- | --- | --- | --- |
| draft_b1_07_004 | Auswahl | TF-B1-07-LS08-01 | auto_supported | kept as single item |
| draft_b1_07_010 | Luecke | TF-B1-07-LS03-01 | auto_core | kept as single item |

## 7. Row reconciliation

| Stage | Expected | Actual / survivor | Cuts | Deferred | Human-check | Status |
| --- | --- | --- | --- | --- | --- | --- |
| Draft | 20 | 20 | 0 | 0 | 0 | OK |
| QA | 20 | 20 | 0 | 0 | 0 | OK |
| Variant-family grouping | 20 | 20 | 0 | 0 | 0 | OK |

## 8. Schema mapping readiness

| Field | Decision |
| --- | --- |
| displayModuleId | B1-07 |
| moduleKey | b1-07 |
| internalPlanningId | b1_m07_meetings_leave_requests |
| moduleSlug | meetings-leave-requests |
| moduleTitle | Meetings / leave requests |
| supportPolicy/supportPresentation | Must be explicitly split in schema mapping; current supportPolicy is planning-only. |
| evidence labels | Mapped to auto_core / auto_supported / excluded / self_marked_production. |
| variant family readiness | Ready for schema mapping after module-specific QA review. |

### Schema-planning item summary

| itemId | targetFamilyId | targetId | taskType | answerMode planning | evidenceType | supportPolicy | reviewEligibility |
| --- | --- | --- | --- | --- | --- | --- | --- |
| draft_b1_07_001 | TF-B1-07-LS07-01 | T-B1-07-LS07-01-01 | notice | self_marked | excluded | scenario_visible | not_review_eligible |
| draft_b1_07_002 | TF-B1-07-LS06-01 | T-B1-07-LS06-01-02 | notice | self_marked | excluded | scenario_visible | not_review_eligible |
| draft_b1_07_003 | TF-B1-07-LS04-01 | T-B1-07-LS04-01-01 | notice | self_marked | excluded | scenario_visible | not_review_eligible |
| draft_b1_07_004 | TF-B1-07-LS08-01 | T-B1-07-LS08-01-01 | Auswahl | typed_short | auto_supported | scenario_visible | weakly_eligible_after_delay |
| draft_b1_07_005 | TF-B1-07-LS07-01 | T-B1-07-LS07-01-01 | Auswahl | typed_short | auto_supported | scenario_visible | weakly_eligible_after_delay |
| draft_b1_07_006 | TF-B1-07-LS07-01 | T-B1-07-LS07-01-01 | Luecke | typed_short | auto_core | scenario_visible | eligible_auto_after_delay |
| draft_b1_07_007 | TF-B1-07-LS07-01 | T-B1-07-LS07-01-02 | Luecke | typed_short | auto_core | scenario_visible | eligible_auto_after_delay |
| draft_b1_07_008 | TF-B1-07-LS06-01 | T-B1-07-LS06-01-02 | Luecke | typed_short | auto_core | scenario_visible | eligible_auto_after_delay |
| draft_b1_07_009 | TF-B1-07-LS04-01 | T-B1-07-LS04-01-01 | Luecke | typed_short | auto_core | scenario_visible | eligible_auto_after_delay |
| draft_b1_07_010 | TF-B1-07-LS03-01 | T-B1-07-LS03-01-02 | Luecke | typed_short | auto_core | scenario_visible | eligible_auto_after_delay |
| draft_b1_07_011 | TF-B1-07-LS07-01 | T-B1-07-LS07-01-01 | Satzbau | sentence_order | auto_core | scenario_visible | eligible_auto_after_delay |
| draft_b1_07_012 | TF-B1-07-LS04-01 | T-B1-07-LS04-01-01 | Satzbau | sentence_order | auto_core | scenario_visible | eligible_auto_after_delay |
| draft_b1_07_013 | TF-B1-07-LS06-01 | T-B1-07-LS06-01-02 | Satzbau | sentence_order | auto_core | scenario_visible | eligible_auto_after_delay |
| draft_b1_07_014 | TF-B1-07-LS06-01 | T-B1-07-LS06-01-02 | Reparatur | repair_text | auto_core | scenario_visible | eligible_auto_after_delay |
| draft_b1_07_015 | TF-B1-07-LS07-01 | T-B1-07-LS07-01-01 | Reparatur | repair_text | auto_supported | scenario_visible | weakly_eligible_after_delay |
| draft_b1_07_016 | TF-B1-07-LS04-01 | T-B1-07-LS04-01-01 | Reparatur | repair_text | auto_core | scenario_visible | eligible_auto_after_delay |
| draft_b1_07_017 | TF-B1-07-LS07-01 | T-B1-07-LS07-01-01 | Kontrast | typed_short | auto_supported | scenario_visible | weakly_eligible_after_delay |
| draft_b1_07_018 | TF-B1-07-LS06-01 | T-B1-07-LS06-01-02 | Kontrast | typed_short | auto_supported | scenario_visible | weakly_eligible_after_delay |
| draft_b1_07_019 | TF-B1-07-LS10-01 | T-B1-07-LS10-01-01 | Produktion | self_marked | self_marked_production | scenario_visible | not_review_eligible |
| draft_b1_07_020 | TF-B1-07-LS10-01 | T-B1-07-LS10-01-02 | Produktion | self_marked | self_marked_production | scenario_visible | not_review_eligible |

## 9. Import-plan readiness

| Import area | Status | Notes |
| --- | --- | --- |
| Current app inspection | Not run | Required later before Codex. Do not assume route/content architecture. |
| Static content strategy | Ready as planning recommendation | Static records only; no runtime generation. |
| Storage/export | Preserve | No storage-key change allowed. |
| Sprint sampling | Defer implementation decision | B1-07 should not enter mixed sprints until route QA passes. |
| Codex implementation prompt | Not created | Create only after final QA, row reconciliation, schema mapping, and import plan. |

## 10. Files to save

- `ozmosis_b1_m07_meetings_leave_requests_draft_items_v0_1.md`
- `ozmosis_b1_m07_meetings_leave_requests_phase3a_qa_approved_v0_1.md`
- `ozmosis_b1_m07_meetings_leave_requests_variant_family_decision_v0_1.md`
- `ozmosis_b1_m07_meetings_leave_requests_final_inventory_v0_1.md`
- `ozmosis_b1_m07_meetings_leave_requests_schema_mapping_v0_1.md`
- `ozmosis_b1_m07_meetings_leave_requests_codex_import_plan_v0_1.md`


## 11. Stop/go verdict

`READY_FOR_MODULE_SPECIFIC_QA_AND_ROW_RECONCILIATION`

This module has a complete first staged draft path, but it should receive a module-specific QA pass before app import planning is treated as final.
