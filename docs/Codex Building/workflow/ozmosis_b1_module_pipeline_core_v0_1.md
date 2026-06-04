# Ozmosis B1 Module Pipeline Core v0.1

Status: Pipeline core ready for module spokes  
Scope: B1-02 through B1-12  
Role: Reusable Phase 3 content-production, QA, schema, and import-planning system

---

## 1. Source Verification

| Source file/content | Available? | Used for | Reliability | Notes / caveats |
|---|---:|---|---|---|
| `OZMOSIS_SOURCE_BRIEF_v0.80.4.md` | Yes | Current app state, architecture constraints, B1-01 content state | High | Confirms v0.80.4, static app, B1-01 14 families / 81 variants, storage/export unchanged. |
| `OZMOSIS_DEVELOPMENT_ROADMAP_v0.80.4.md` | Yes | Deferred work and next-patch context | High | Confirms B1-02, v0.81, Genitive, Satzi, spacing, runtime generation, and B2 remain deferred. |
| `ozmosis-v0_80_4.zip` | Yes | Current tested app/package | High | Must be re-inspected before any Codex implementation. Not inspected for this planning-only core. |
| `Deutsch_Lernen_Codex-chat003-v0_80_4.txt` | Yes | v0.80.4 implementation/test context | Medium-high | Use as context only; current package/source brief wins. |
| `ozmosis_phase2_5_full_12_module_consistency_audit.md` | Yes | 12-module readiness, sequencing, boundary, evidence, and batch-size risks | High | Controlling audit for B1-02 to B1-12 pipeline design. |
| `ozmosis_phase2_5_b1_m01-12_b1addendum__strandalignmentmatrix_m00schema310520262024.zip` | Present as uploaded package | Possible module matrix / addendum source | Medium until inspected | Spokes should use it where accessible. Do not assume uninspected contents. |
| `Deutsch Module ToCs.zip` | Present as uploaded package | Possible module topic reference | Medium until inspected | Spokes should use it where accessible. Do not assume uninspected contents. |
| B1-01 final inventory / schema / QA files | Yes | Process precedent only | High | Use as pipeline precedent, not as B1-02+ content source. |
| TELC/Beruf/Aspekte files | Yes | Structural inspiration only | Low for item text | Do not copy or paraphrase. Use only for topic/domain awareness. |
| Older chats/memory | Available as background | Context only | Low | Never overrides current app/source files. |

---

## 2. Executive Pipeline Definition

The Ozmosis B1 Module Pipeline Core is a reusable process for producing small, QA-controlled, source-safe B1 module batches from B1-02 through B1-12.

It is not an app implementation task.

It exists to prevent four recurring failure modes:

1. **Row loss** — items disappearing between draft, QA, mapping, and import.
2. **Evidence inflation** — weak recognition, visible support, or sibling variants being treated as independent competence.
3. **Module drift** — topics leaking into the wrong module, especially admin/legal/HR/service language.
4. **Implementation overreach** — content planning accidentally becoming app redesign, runtime generation, storage changes, or v0.81 work.

The pipeline is modular:

```txt
Pipeline Core
+
One module-specific spoke
=
One controlled module production run
```

The core controls process. The spoke controls module content scope.

---

## 3. Core Non-Negotiables

| Rule | Requirement |
|---|---|
| Static app | No backend, framework, build step, package manager, database, accounts, analytics, external API, or runtime AI. |
| No runtime generation | No random slot filling, no dynamic article/case generation, no runtime morphology. |
| Source safety | No copied TELC/textbook/Goethe/ÖSD/BAMF/coursebook text. |
| B1 first | No B2 active learner content unless explicitly parked for later. |
| Conservative evidence | No mastery/readiness claims. No certification-readiness claims. |
| Production safety | Production cards are self-marked only unless a future external review path exists. |
| Storage safety | No storage-key changes without explicit migration. Preserve export/import compatibility. |
| German LTR | German prompts, examples, blanks, choices, and model answers remain LTR in Arabic UI contexts. |
| Small patches | Prefer small, versioned batches over large course dumps. |
| Row integrity | Every row must be tracked through draft, QA, cut, defer, mapping, and import planning. |
| Module boundaries | Each module owns specific communicative work and must not absorb adjacent modules. |
| Evidence labels | Use schema-consistent evidence labels, not informal progress language. |
| Support separation | `supportPolicy` and `supportPresentation` must stay separate. |
| App source inspection | Codex implementation prompts must inspect current app files before editing. |

---

## 4. Universal Module Pipeline Stages

| Stage | Name | Purpose | Output |
|---:|---|---|---|
| 0 | Module source verification | Confirm all needed planning/source files are available and current. | Source verification table |
| 1 | Module spoke intake | Load module-specific scope, boundaries, targets, and risks. | Spoke intake summary |
| 2 | Target inventory / challenge matrix check | Confirm target families, IDs, strands, and batch limits. | Target inventory check |
| 3 | Draft item generation | Generate first controlled learner-facing draft batch. | Draft item batch |
| 4 | Draft item self-audit | Catch obvious errors before QA. | Self-audit notes |
| 5 | QA / reject / revise | Approve, revise, cut, defer, or flag items. | QA-approved batch |
| 6 | Curated variant-family decision | Decide which items deserve variants. | Variant decision ledger |
| 7 | Curated variant-family draft | Draft static sibling variants where justified. | Variant-family draft |
| 8 | Variant-family QA / reject / revise | Approve, cut, or revise variant families. | QA-approved variant families |
| 9 | Row reconciliation / final inventory | Merge survivors, cuts, notices, singles, variants. | Final inventory ledger |
| 10 | Schema mapping | Map items/families to planning schema. | Schema mapping file |
| 11 | Codex import plan | Decide implementation strategy and tests. | Import plan |
| 12 | Codex implementation prompt | Create exact implementation prompt. | Codex prompt |
| 13 | Post-Codex QA | Verify implementation package. | QA report |
| 14 | Package / changelog / source update | Package and document version. | Versioned package/docs |
| 15 | Move to next module | Decide next module or stop. | Next-module instruction |

---

## 5. Stage-by-Stage Input/Output Matrix

| Stage | Required inputs | Required output file | Row-count rule | Stop conditions | Main QA risks | What not to do |
|---:|---|---|---|---|---|---|
| 0 | App brief, roadmap, module spoke, audit | `ozmosis_[module]_source_verification_v0_1.md` or section | No row count yet | Missing core/spoke/current source | stale source, wrong app version | Do not infer from memory |
| 1 | Pipeline core + module spoke | `ozmosis_[module]_spoke_intake_v0_1.md` or section | Count target families if listed | Missing spoke or source mismatch | module drift | Do not generate items |
| 2 | Spoke target families | `ozmosis_[module]_target_inventory_check_v0_1.md` | Expected target families = found + documented gaps | duplicate IDs, no boundaries | target collision, vague target | Do not invent hidden IDs |
| 3 | Target inventory | `ozmosis_[module]_draft_items_v0_1.md` | Draft count declared and exact | unsafe module drift | copied text, multi-target traps | Do not make app JSON |
| 4 | Draft items | `ozmosis_[module]_draft_self_audit_v0_1.md` | Every draft item audited | major source-safety or grammar issue | obvious cue/person mismatch | Do not approve silently |
| 5 | Draft + self-audit | `ozmosis_[module]_phase3a_qa_approved_v0_1.md` | draft = approved + revised + cut + deferred + human-check | unresolved grammar/naturalness | evidence inflation, unsupported answers | Do not keep weak filler for count |
| 6 | QA-approved items | `ozmosis_[module]_variant_family_decision_v0_1.md` | Every survivor item has variant decision | no useful variant candidates is acceptable | over-variantising weak targets | Do not force 10 variants |
| 7 | Variant decisions | `ozmosis_[module]_curated_variant_families_draft_v0_1.md` | Family/variant counts declared | target needs dynamic grammar | sibling inflation | Do not create Madlibs |
| 8 | Variant draft | `ozmosis_[module]_curated_variant_families_qa_approved_v0_1.md` | draft variants = approved + revised + cut + deferred + human-check | unsafe variants | duplicate variants, cue mismatch | Do not pad |
| 9 | QA item + QA variant files | `ozmosis_[module]_final_inventory_v0_1.md` | full chain reconciliation required | any unexplained row loss | merged duplicates | Do not proceed with count gap |
| 10 | Final inventory | `ozmosis_[module]_schema_mapping_v0_1.md` | mapped = final active survivors only | schema ambiguity | bad answerMode/support/evidence mapping | Do not output app-ready JSON |
| 11 | Schema mapping | `ozmosis_[module]_codex_import_plan_v0_1.md` | counts carried forward | implementation route unclear | storage/export risk | Do not write Codex prompt yet |
| 12 | Import plan | `ozmosis_[module]_codex_implementation_prompt_v0_1.md` | import counts fixed | unresolved app architecture | overbroad implementation | Do not add adjacent features |
| 13 | Codex output package | `docs/qa/[version]_[module]_qa.md` | expected imported counts validated | tests blocked without substitute | broken route/storage | Do not claim unrun tests |
| 14 | QA report + package | versioned changelog/readme/source brief | package file list exact | package incomplete | version drift | Do not deploy without test |
| 15 | Accepted patch | next-module handoff | n/a | unresolved failures | context loss | Do not skip to full run without docs |

---

## 6. File Naming Conventions

Use lowercase, underscore-separated planning filenames.

```txt
ozmosis_b1_m02_appointments_callbacks_spoke_v0_1.md
ozmosis_b1_m02_appointments_callbacks_draft_items_v0_1.md
ozmosis_b1_m02_appointments_callbacks_phase3a_qa_approved_v0_1.md
ozmosis_b1_m02_appointments_callbacks_variant_family_decision_v0_1.md
ozmosis_b1_m02_appointments_callbacks_curated_variant_families_draft_v0_1.md
ozmosis_b1_m02_appointments_callbacks_curated_variant_families_qa_approved_v0_1.md
ozmosis_b1_m02_appointments_callbacks_final_inventory_v0_1.md
ozmosis_b1_m02_appointments_callbacks_schema_mapping_v0_1.md
ozmosis_b1_m02_appointments_callbacks_codex_import_plan_v0_1.md
ozmosis_b1_m02_appointments_callbacks_codex_implementation_prompt_v0_1.md
```

Module ID pattern:

```txt
displayModuleId: B1-02
moduleKey: b1-02
internalPlanningId: b1_m02_appointments_callbacks
moduleSlug: appointments-callbacks
```

Do not use `internalPlanningId` as the learner-facing module key.

---

## 7. Row Reconciliation Rules

Hard rule:

```txt
expected count = actual rows + documented cuts + documented exclusions + documented deferrals + documented source discrepancies
```

Every stage must report:

| Count field | Meaning |
|---|---|
| input count | rows received by stage |
| approved as-is | rows approved unchanged |
| revised and approved | rows changed and approved |
| cut | rows intentionally removed |
| deferred | rows parked for later |
| human-check | rows requiring tutor/native review |
| clean proceeding | approved + revised rows proceeding |
| discrepancy | mismatch between declared and actual rows |
| action | proceed, revise, block, or re-count |

Stop with `ROW_INTEGRITY_BLOCKER` if a count cannot be explained.

---

## 8. Evidence and Review Rules

| Evidence label | Use | Review implication |
|---|---|---|
| `auto_core` | Fixed-answer, low-support, single-target recall/repair/transformation | May become review candidate after delay |
| `auto_supported` | Fixed-answer but support-visible, weak, baseline, or partly scaffolded | Weak/conservative review only |
| `diagnostic_probe` | Used to discover weakness, not teach or certify | Not durable evidence |
| `review_auto` | Only after item is stable and route supports review | Not for first draft |
| `self_marked_production` | Learner practises production and self-checks | Not correctness evidence |
| `external_reviewed_future` | Reserved for future tutor/human review | Not current auto evidence |
| `derived_signal` | Indirect signal from pattern or repeated error | Never standalone mastery |
| `qa_only` | Used during testing/planning only | Not learner evidence |
| `excluded` | Notice/concept/lesson content | Not evidence |

Evidence rules:

- Recognition is weaker than recall.
- Visible support weakens evidence.
- Production is not correctness.
- Same-family variants are sibling evidence only.
- Given phrases are not tested.
- Article/case cannot be inferred from given object phrases.
- Repair/Umformen is stronger than recognition but still bounded.
- No module completion or task success proves external B1 readiness.
- Review requires delay; same-session success is not durability.

---

## 9. Support Policy / Presentation Rules

Keep evidence support and UI support separate.

| `supportPolicy` | Meaning |
|---|---|
| `unsupported` | No visible support before answer |
| `scenario_visible` | Short scenario/cue visible |
| `meaning_visible` | English or meaning support visible before answer |
| `hint_collapsed` | Hint available but hidden by default |
| `teach_me_available` | Teach-me path available |
| `support_after_answer` | Support shown only after attempt |
| `phrase_bank_collapsed` | Phrase bank hidden by default |
| `checklist_visible` | Production checklist visible |
| `model_after_attempt` | Model answer shown after attempt |
| `external_review_future` | Human/tutor review intended later |

| `supportPresentation` | Use |
|---|---|
| `english_visible_before_answer` | English cue visible before answering |
| `english_hidden_until_feedback` | English support after answer only |
| `german_clue_first` | German-first situation/clue |
| `no_english_needed` | Pure German or non-translation task |
| `production_checklist_only` | Checklist without correctness scoring |

If `supportPolicy` and `supportPresentation` conflict, QA must resolve before schema mapping.

---

## 10. Task Type Rules

| Task type | Use when | Evidence limits | QA risks | Mobile suitability | Variants? |
|---|---|---|---|---|---|
| notice / concept card | Introduce a rule or reminder | `excluded` | Too much lesson text; overclaiming | Good if short | No |
| Auswahl | Recognition, contrast, low-load preview | Weaker than recall | Guessing, weak progress, bad distractors | Strong | Usually no |
| Luecke | Single blank recall | Good if one answer | Multiple valid answers, hidden target | Strong | Yes, if same target/frame |
| Satzbau | Word order / chunk ordering | Good for sentence control | Chunk ambiguity, drag burden | Good if tap-order chunks | Yes, if chunks short |
| Reparatur | Error repair | Stronger transfer signal | Multiple repair paths, unclear error | Good if short | Yes, often strong |
| Umformen | Transform statement/question/register | Strong if exact | Many valid outputs, punctuation policy | Medium | Yes, with strict forms |
| Kontrast | Distinguish close meanings/forms/register | Useful for known confusions | Over-teaching, ambiguous contrast | Strong if simple | Sometimes |
| Produktion | Controlled speaking/writing practice | self-marked only | False correctness, too open | Medium | Prompt variants only |

---

## 11. Variant-Family Decision Rules

Use a Curated Variant Family only when variation improves learning without weakening QA.

| Candidate type | Variant decision |
|---|---|
| Strong grammar frame | Good candidate |
| Word-order repair | Good candidate |
| Connector contrast | Good candidate if module owns connector |
| Register/tone repair | Good candidate with strict fixed answers |
| Weak vocabulary recognition | Usually no |
| Notice cards | No |
| Open production | Only prompt/checklist variants, self-marked |
| Legal/admin term recognition | Usually no; preview only |
| Technical-object vocabulary | Only action-context variants |
| Formulaic Redemittel | Variantise only if cue and register stay clear |

Variant-family requirements:

- stable `variantFamilyId`
- stable `variantId`
- parent family ID preserved
- siblingVariantGroup set
- max same-session evidence normally `1`
- no random generation
- no dynamic morphology
- no unreviewed slot combinations
- no padding to reach a nice count

---

## 12. German Grammar and Naturalness Safety Rules

| Area | Rule |
|---|---|
| Naturalness | Natural Hochdeutsch only. No technically correct but weird filler. |
| Target count | One target where possible. Avoid hidden multi-skill traps. |
| Case/articles | Do not hide article/case targets unless the module owns them. |
| Adjective endings | Excluded unless explicitly owned. |
| Genitive | Excluded unless explicitly owned. |
| Subordinate clauses | Excluded unless module owns them. |
| Separable verbs | Excluded unless module owns Satzklammer/separable verbs. |
| Verb complements | Store and QA verb frame, not just lemma. |
| Two-way prepositions | Static/destination distinction only if module owns it. |
| Noun forms | No dynamic plurals/articles. Use pre-approved forms. |
| Cues | Cue must match German person and meaning. |
| `Ich` | Always “I,” never “you.” |
| `Sie` | Formal/polite “you.” |
| Repair meaning label | Use “Intended meaning” or “Correct sentence meaning” if showing English support for broken German. |
| Capitalisation | Lowercase may only be correct-with-note if app supports that distinction. |
| Punctuation | If punctuation is target, exactness policy must say so. |

---

## 13. Copyright / Source Safety Rules

Allowed:

- use source files to identify broad topics, vocabulary domains, and communicative needs
- use public/common B1 language patterns in original sentences
- use structural inspiration from course/table of contents
- use original workplace/course scenarios

Forbidden:

- copying textbook/TELC/Goethe/ÖSD/BAMF/coursebook sentences
- paraphrasing a source exercise too closely
- reproducing vocabulary tables as app content
- copying Redemittel lists as drills
- reusing source names/scenarios/dialogues
- creating “source-like” sequencing from textbook pages

Each module output must include:

| Source safety field | Required |
|---|---|
| source files consulted | yes |
| copied text used? | must be no |
| structural inspiration only? | yes/no |
| high-risk source proximity | list |
| mitigation | original scenarios, changed context, no source order |

---

## 14. Mobile UX Rules

| Rule | Requirement |
|---|---|
| One blank where possible | Especially for Luecke. |
| Short cue | Avoid long English explanations before answer. |
| Given context visually distinct | Bracket or style given phrases so they do not look like blanks. |
| Feedback one micro-rule first | Details behind reveal/expand if needed. |
| No long typing on bus tasks | Use short answers, chunks, or repair only where manageable. |
| Tap targets safe | No tiny buttons. |
| Avoid drag if tap-order chunks work | Satzbau should be touch-friendly. |
| Avoid audio/speech dependency | No recording requirement. |
| German LTR preserved | Especially in Arabic UI. |
| HUD must not cover actions | Required responsive QA. |
| Long labels must wrap safely | No clipped route cards or buttons. |

Responsive implementation QA checkpoints:

```txt
320×568
390×844
430×932
768×1024
1365×599
1440×900
```

---

## 15. Module Batch Size Rules

Use small useful baselines first.

| Module/risk type | Default first-batch target |
|---|---:|
| Low-risk baseline module | 30–45 learner-facing pieces |
| Normal module | 30–40 learner-facing pieces |
| High-risk module | 20–35 learner-facing pieces |
| Register-heavy module | 20–34 learner-facing pieces |
| Legal/admin-heavy module | 20–34 learner-facing pieces |
| Technical/jargon-heavy module | 20–34 learner-facing pieces |
| Review/consolidation module | Planning shell only until prerequisites exist |

Audit-derived recommended first-batch caps:

| Module | Recommended first Phase 3 batch size | Caveat |
|---|---:|---|
| B1-02 | 26–32 | Baseline only; no Jobcenter/formal email takeover |
| B1-03 | 32–38 | First main utility batch; document/admin preview caveats |
| B1-04 | 30–36 | Restrict open writing; production self/external only |
| B1-05 | 30–36 | Survival-level legal/admin terms |
| B1-06 | 30–36 | Reduce connector/production load; Krankenkasse limited |
| B1-07 | 30–36 | Fixed repair/Satzbau before open requests |
| B1-08 | 30–36 | Action-context orders; avoid accounting/form false progress |
| B1-09 | 28–34 | Repair/contrast first; register/legal scope tight |
| B1-10 | 28–34 | Avoid jargon; practical instructions only |
| B1-11 | 26–32 | High human/tutor-review risk; restrict open discourse |
| B1-12 | TBD | Defer item generation |

No module should chase a round number.

---

## 16. B1-12 Special Handling

B1-12 is not a normal first-batch module.

B1-12 must wait for:

- stable B1-02 through B1-11 item IDs
- stable target IDs
- stable reviewGroups
- stable evidence groups

Allowed now:

- planning shell
- review architecture
- consolidation principles
- source and target provenance rules
- no active item generation

Forbidden now:

- final review items
- mixed review drills that hide too many targets
- “readiness” score
- certification claims
- broad B1 mastery claims

B1-12 final item generation must be blocked with:

```txt
DEFERRED_UNTIL_PRIOR_MODULES_EXIST
```

unless B1-02 through B1-11 are already stable.

---

## 17. Standard Output File List Per Module

For module `b1_m02_appointments_callbacks`, the full eventual file path set is:

```txt
ozmosis_b1_m02_appointments_callbacks_spoke_v0_1.md
ozmosis_b1_m02_appointments_callbacks_draft_items_v0_1.md
ozmosis_b1_m02_appointments_callbacks_draft_self_audit_v0_1.md
ozmosis_b1_m02_appointments_callbacks_phase3a_qa_approved_v0_1.md
ozmosis_b1_m02_appointments_callbacks_variant_family_decision_v0_1.md
ozmosis_b1_m02_appointments_callbacks_curated_variant_families_draft_v0_1.md
ozmosis_b1_m02_appointments_callbacks_curated_variant_families_qa_approved_v0_1.md
ozmosis_b1_m02_appointments_callbacks_final_inventory_v0_1.md
ozmosis_b1_m02_appointments_callbacks_schema_mapping_v0_1.md
ozmosis_b1_m02_appointments_callbacks_codex_import_plan_v0_1.md
ozmosis_b1_m02_appointments_callbacks_codex_implementation_prompt_v0_1.md
docs/qa/[version]_b1_m02_appointments_callbacks.md
```

For B1-12, replace item-generation files with planning-shell files until prerequisites exist:

```txt
ozmosis_b1_m12_b1_review_consolidation_spoke_v0_1.md
ozmosis_b1_m12_b1_review_consolidation_planning_shell_v0_1.md
```

---

## 18. Standard Stop Conditions

| Verdict | Use when |
|---|---|
| `BLOCKED_BY_SOURCE_GAP` | Required current source/spoke/core file missing |
| `BLOCKED_BY_SOURCE_INSPECTION` | App implementation work cannot inspect current app |
| `BLOCKED_BY_ROW_INTEGRITY` | Counts cannot reconcile |
| `BLOCKED_BY_CONTENT_SAFETY` | Safe B1 items cannot be produced |
| `BLOCKED_BY_COPYRIGHT_RISK` | Source proximity too high |
| `BLOCKED_BY_SCHEMA_COLLISION` | Duplicate targetFamilyId/targetId/variantId |
| `BLOCKED_BY_MODULE_DRIFT` | Module leaks into another module |
| `BLOCKED_BY_EVIDENCE_RISK` | Evidence would overclaim competence |
| `BLOCKED_BY_TRANSFORMATION_POLICY` | Multiple valid outputs make Umformen unsafe |
| `DEFERRED_UNTIL_PRIOR_MODULES_EXIST` | B1-12 or review material lacks stable provenance |
| `READY_FOR_NEXT_STAGE` | Stage can proceed |
| `READY_FOR_SPOKE_QA` | Spoke can be audited |
| `READY_FOR_PHASE_3A_QA` | Draft batch can be QA’d |
| `READY_FOR_ROW_RECONCILIATION` | QA survivors can be reconciled |
| `READY_FOR_SCHEMA_MAPPING` | Final inventory can be mapped |
| `READY_FOR_CODEX_IMPORT_PLAN` | Schema mapping is ready for import planning |
| `READY_FOR_CODEX_IMPLEMENTATION_PROMPT` | Import plan is ready for final prompt |

---

## 19. Final Pipeline Readiness Checklist

| Check | Status |
|---|---:|
| Current v0.80.4 app state recognised | Pass |
| B1-01 treated as complete for now | Pass |
| B1-02 through B1-11 supported by pipeline | Pass |
| B1-12 deferred until prerequisite module IDs exist | Pass |
| supportPolicy/supportPresentation separation locked | Pass |
| evidence-label bridge defined | Pass |
| row reconciliation rule locked | Pass |
| task-type rules defined | Pass |
| variant-family decision rules defined | Pass |
| German safety rules defined | Pass |
| copyright/source safety rules defined | Pass |
| mobile UX rules defined | Pass |
| first-batch limits defined | Pass |
| no app code generated | Pass |
| no app-ready JSON generated | Pass |
| no module content generated | Pass |
| no Codex prompt generated | Pass |

---

## 20. Final Verdict

`PIPELINE_CORE_READY_FOR_SPOKES`

Exact next recommended action:

Create the B1-02 spoke using the spoke template, then repeat for B1-03 through B1-12. Do not run the full pipeline until every spoke exists and the cross-spoke audit passes.
