# Ozmosis B1-01 Extension — Row Reconciliation / Final Inventory Addendum

Status: Final content-inventory reconciliation addendum before extension schema mapping.  
Scope: B1-01 — Getting started at work/course.  
Output file: `ozmosis_b1_m01_extension_row_reconciliation_final_inventory_addendum_v0_1.md`.

## 1. Source Verification

| Source file/content | Available? | Used for | Reliability | Notes / caveats |
| --- | --- | --- | --- | --- |
| `ozmosis_b1_m01_extension_variant_families_qa_approved_v0_1.md` | Yes | Controlling extension QA result | High | 5 survivor families, 27 survivor variants, 1 cut family, 8 cut variants. |
| `ozmosis_b1_m01_final_variant_family_inventory_v0_1.md` | Yes | Existing B1-01 baseline inventory | High | Existing 9 families, 54 variants, 9 retained single items, 3 notice/concept cards. |
| `ozmosis_b1_m01_variant_family_schema_mapping_v0_1.md` | Yes | Existing schema family/variant conventions | High | Used only for consistency; this addendum does not schema-map. |
| `ozmosis_b1_m01_curated_variant_families_qa_approved_v0_1.md` | Yes | Existing B1-01 variant QA constraints | High | Used for prior caps on V2, brauchen, mechanics, and sibling evidence. |
| `ozmosis_phase3a_b1_m01_getting_started_qa_approved.md` | Yes | Original B1-01 QA caveats | High | Used for weak-evidence caution and original cut context. |
| `ozmosis_phase3_b1_m01_getting_started_draft_items.md` | Yes | Original B1-01 target-family design | High | Used for scope boundary. |
| `ozmosis-v0_80_3_1.zip` | Yes | Current app package reference | High | Not inspected for implementation; no app work in this task. |
| `OZMOSIS_SOURCE_BRIEF_v0.80.3.md` | Yes | Product/evidence constraints | High | B1-first, static app, no false mastery. |
| `OZMOSIS_DEVELOPMENT_ROADMAP_v0.80.3.md` | Yes | Version/app roadmap context | High | v0.81 remains separate; no future work implemented here. |
| TELC/Beruf/Aspekte files | Available | Structural inspiration only | Low for item text | No copied or paraphrased text used. |

## 2. Executive Reconciliation Verdict

`EXTENSION_ROW_INTEGRITY_OK_WITH_CAVEATS`

This addendum can proceed to extension schema mapping. The caveat is that this is an addendum layered on top of the existing B1-01 final inventory; it does not rewrite the existing nine families or their 54 variants.

## 3. Existing B1-01 Inventory Baseline

| Baseline component | Count | Source | Notes |
| --- | --- | --- | --- |
| Existing variant families | 9 | `ozmosis_b1_m01_final_variant_family_inventory_v0_1.md` | Preserved unchanged. |
| Existing clean variants | 54 | `ozmosis_b1_m01_final_variant_family_inventory_v0_1.md` | Preserved unchanged. |
| Existing retained single canonical items | 9 | `ozmosis_b1_m01_final_variant_family_inventory_v0_1.md` | Remain as previously reconciled. |
| Existing notice/concept cards | 3 | `ozmosis_b1_m01_final_variant_family_inventory_v0_1.md` | Extension adds no notices. |
| Existing cut variants excluded | 6 | `ozmosis_b1_m01_final_variant_family_inventory_v0_1.md` | Remain excluded. |

## 4. Extension QA Count Chain Reconciliation

| Stage | Expected count | Actual found count | Survivor count | Cut count | Deferred count | Human-check count | Reconciliation status | Notes |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Extension draft family count | 6 | 6 | 6 | 0 | 0 | 0 | OK | Six proposed families audited. |
| Extension draft variant count | 35 | 35 | 35 | 0 | 0 | 0 | OK | Thirty-five proposed variants audited. |
| Extension QA family survivor count | 5 | 5 | 5 | 1 | 0 | 0 | OK | One full family cut. |
| Extension QA variant survivor count | 27 | 27 | 27 | 8 | 0 | 0 | OK | Twenty-seven variants proceed. |
| Extension family cut count | 1 | 1 | 0 | 1 | 0 | 0 | OK | `b1-01-hier-dort-location-vf-014` cut. |
| Extension variant cut count | 8 | 8 | 0 | 8 | 0 | 0 | OK | Eight cut variants documented. |

## 5. Combined B1-01 Count Projection

| Component | Existing count | Extension survivor count | Final projected count | Notes |
| --- | --- | --- | --- | --- |
| Variant families | 9 | 5 | 14 | Final projected B1-01 family count. |
| Clean variants | 54 | 27 | 81 | Final projected clean variant count. |
| Retained single canonical items | 9 | 0 | 9 | No change unless later source says otherwise. |
| Notice/concept cards | 3 | 0 | 3 | Extension adds no notices. |
| Cut extension families | 0 | 1 | 1 documented cut | Excluded. |
| Cut extension variants | 0 | 8 | 8 documented cuts | Excluded. |

## 6. Row Discrepancy Ledger

| Source/stage | Claimed count | Actual count | Difference | Cause | Resolved? | Action |
| --- | --- | --- | --- | --- | --- | --- |
| Extension draft families | 6 | 6 | 0 | No discrepancy | Yes | Proceed. |
| Extension draft variants | 35 | 35 | 0 | No discrepancy | Yes | Proceed. |
| Extension QA survivors | 5 families / 27 variants | 5 families / 27 variants | 0 | No discrepancy | Yes | Proceed. |
| Combined B1-01 projection | 14 families / 81 variants | 14 families / 81 variants | 0 | No discrepancy | Yes | Proceed to schema mapping. |

No row discrepancy remains in this extension addendum.

## 7. Extension Survivor Family Ledger

| Family ID | Status | Variant count | Target family | Target ID | Evidence interpretation | Review group | Support policy | Included in final addendum? | Notes |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `b1-01-ich-bin-entry-vf-010` | included | 5 | `TF-B1-01-LS01-01` | `T-B1-01-LS01-01-02` | Baseline `sein` control; mostly `auto_supported`. | `rg-b1-01-ich-bin-entry` | `scenario_visible` | Yes | Entry control, not B1-depth evidence. |
| `b1-01-haben-materials-vf-011` | included | 5 | `TF-B1-01-LS08-01` | `T-B1-01-LS08-01-03` | Practical possession/availability; not article/case proof. | `rg-b1-01-haben-materials` | `scenario_visible` | Yes | Object phrases are context. |
| `b1-01-lernen-arbeiten-vf-012` | included | 6 | `TF-B1-01-LS01-01` | `T-B1-01-LS01-01-02` | Simple verb contrast; no profession/job-search content. | `rg-b1-01-lernen-arbeiten` | `scenario_visible` | Yes | Course/work bridge only. |
| `b1-01-suchen-finden-vf-013` | included | 5 | `TF-B1-01-LS01-02` | `T-B1-01-LS01-02-01` | Orientation verb-choice contrast; no case/article evidence. | `rg-b1-01-suchen-finden` | `scenario_visible` | Yes | Do not count as W-question proof. |
| `b1-01-statement-question-transform-vf-015` | included | 6 | `TF-B1-01-LS01-02` | `T-B1-01-LS01-02-02` | Sentence-control transformation evidence. | `rg-b1-01-statement-question-transform` | `scenario_visible` | Yes | Strongest extension family; still bounded evidence. |

## 8. Extension Survivor Variant Ledger

| Variant ID | Family ID | Task type | Task depth | Target answer | Evidence type | Support policy | Review eligibility | Included? | Notes |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `b1-01-ich-bin-entry-vf-010-var-001` | `b1-01-ich-bin-entry-vf-010` | Luecke | cloze | `bin` | auto_supported | scenario_visible | weakly eligible / conservative after delay | Baseline `ich bin`; not B1-depth evidence. |
| `b1-01-ich-bin-entry-vf-010-var-002` | `b1-01-ich-bin-entry-vf-010` | Luecke | cloze | `bin` | auto_supported | scenario_visible | weakly eligible / conservative after delay | Simple course-entry state. |
| `b1-01-ich-bin-entry-vf-010-var-004` | `b1-01-ich-bin-entry-vf-010` | Luecke | cloze | `bin` | auto_supported | scenario_visible | weakly eligible / conservative after delay | Course-entry location/state. |
| `b1-01-ich-bin-entry-vf-010-var-005` | `b1-01-ich-bin-entry-vf-010` | Satzbau | sentence_building | `Ich bin neu hier.` | auto_supported | scenario_visible | weakly eligible / conservative after delay | Short sentence build. |
| `b1-01-ich-bin-entry-vf-010-var-006` | `b1-01-ich-bin-entry-vf-010` | Reparatur | repair | `Ich bin neu hier.` | auto_supported | scenario_visible | weakly eligible / conservative after delay | Conjugation repair: `ich bin`, not `ich ist`. |
| `b1-01-haben-materials-vf-011-var-001` | `b1-01-haben-materials-vf-011` | Luecke | cloze | `habe` | auto_supported | scenario_visible | weakly eligible / conservative after delay | Object phrase is context, not article/case evidence. |
| `b1-01-haben-materials-vf-011-var-002` | `b1-01-haben-materials-vf-011` | Luecke | cloze | `habe` | auto_supported | scenario_visible | weakly eligible / conservative after delay | Object phrase is context. |
| `b1-01-haben-materials-vf-011-var-004` | `b1-01-haben-materials-vf-011` | Luecke | cloze | `Haben` | auto_core | scenario_visible | eligible_auto_after_delay, conservative | Formal yes/no availability question; sentence-start capitalisation caveat. |
| `b1-01-haben-materials-vf-011-var-005` | `b1-01-haben-materials-vf-011` | Luecke | cloze | `Haben` | auto_core | scenario_visible | eligible_auto_after_delay, conservative | Formal yes/no availability question; sentence-start capitalisation caveat. |
| `b1-01-haben-materials-vf-011-var-006` | `b1-01-haben-materials-vf-011` | Reparatur | repair | `Ich habe die Unterlagen.` | auto_supported | scenario_visible | weakly eligible / conservative after delay | Conjugation repair: `ich habe`, not `ich haben`. |
| `b1-01-lernen-arbeiten-vf-012-var-001` | `b1-01-lernen-arbeiten-vf-012` | Luecke | cloze | `lerne` | auto_core | scenario_visible | eligible_auto_after_delay, conservative | Language-learning verb. |
| `b1-01-lernen-arbeiten-vf-012-var-002` | `b1-01-lernen-arbeiten-vf-012` | Luecke | cloze | `lerne` | auto_supported | scenario_visible | weakly eligible / conservative after delay | Do not overcount as V2 evidence. |
| `b1-01-lernen-arbeiten-vf-012-var-003` | `b1-01-lernen-arbeiten-vf-012` | Luecke | cloze | `arbeite` | auto_supported | scenario_visible | weakly eligible / conservative after delay | Generic work activity only. |
| `b1-01-lernen-arbeiten-vf-012-var-004` | `b1-01-lernen-arbeiten-vf-012` | Luecke | cloze | `arbeite` | auto_supported | scenario_visible | weakly eligible / conservative after delay | Generic work activity only; no profession drift. |
| `b1-01-lernen-arbeiten-vf-012-var-005` | `b1-01-lernen-arbeiten-vf-012` | Kontrast | contrast | `lerne` | auto_supported | scenario_visible | weakly eligible / conservative after delay | Contrast cue: German class context. |
| `b1-01-lernen-arbeiten-vf-012-var-006` | `b1-01-lernen-arbeiten-vf-012` | Reparatur | repair | `Ich lerne Deutsch.` | auto_supported | scenario_visible | weakly eligible / conservative after delay | Repair course/activity collocation. |
| `b1-01-suchen-finden-vf-013-var-001` | `b1-01-suchen-finden-vf-013` | Luecke | cloze | `suche` | auto_supported | scenario_visible | weakly eligible / conservative after delay | Given `den Kursraum` is context only. |
| `b1-01-suchen-finden-vf-013-var-002` | `b1-01-suchen-finden-vf-013` | Luecke | cloze | `finde` | auto_supported | scenario_visible | weakly eligible / conservative after delay | Verb contrast only; not W-question proof. |
| `b1-01-suchen-finden-vf-013-var-003` | `b1-01-suchen-finden-vf-013` | Luecke | cloze | `suche` | auto_supported | scenario_visible | weakly eligible / conservative after delay | Looking-for verb. |
| `b1-01-suchen-finden-vf-013-var-004` | `b1-01-suchen-finden-vf-013` | Luecke | cloze | `finde` | auto_supported | scenario_visible | weakly eligible / conservative after delay | Finding / where-to-find verb. |
| `b1-01-suchen-finden-vf-013-var-005` | `b1-01-suchen-finden-vf-013` | Luecke | cloze | `suche` | auto_supported | scenario_visible | weakly eligible / conservative after delay | Looking-for verb; given object is context. |
| `b1-01-statement-question-transform-vf-015-var-001` | `b1-01-statement-question-transform-vf-015` | Umformen | transformation | `Ist die App hier?` | auto_core | scenario_visible | eligible_auto_after_delay, conservative | Question transformation; punctuation caveat. |
| `b1-01-statement-question-transform-vf-015-var-002` | `b1-01-statement-question-transform-vf-015` | Umformen | transformation | `Ist das Heft hier?` | auto_core | scenario_visible | eligible_auto_after_delay, conservative | Question transformation; punctuation caveat. |
| `b1-01-statement-question-transform-vf-015-var-003` | `b1-01-statement-question-transform-vf-015` | Umformen | transformation | `Brauche ich ein Heft?` | auto_core | scenario_visible | eligible_auto_after_delay, conservative | Transformation target, not `brauchen` expansion. |
| `b1-01-statement-question-transform-vf-015-var-004` | `b1-01-statement-question-transform-vf-015` | Umformen | transformation | `Habe ich die Unterlagen?` | auto_core | scenario_visible | eligible_auto_after_delay, conservative | Question transformation; punctuation caveat. |
| `b1-01-statement-question-transform-vf-015-var-005` | `b1-01-statement-question-transform-vf-015` | Umformen | transformation | `Haben Sie Informationen?` | auto_core | scenario_visible | eligible_auto_after_delay, conservative | Formal yes/no transformation. |
| `b1-01-statement-question-transform-vf-015-var-006` | `b1-01-statement-question-transform-vf-015` | Reparatur | repair | `Brauche ich ein Heft?` | auto_core | scenario_visible | eligible_auto_after_delay, conservative | Question repair; not `brauchen` expansion. |

## 9. Extension Cut / Exclusion Ledger

| Family / variant ID | Final status | Reason | Included in final addendum? | Schema ID assigned? | Replacement needed? |
| --- | --- | --- | --- | --- | --- |
| `b1-01-hier-dort-location-vf-014` | cut_family | Too thin / too A1 / flashcard risk | No | No | No |
| `b1-01-ich-bin-entry-vf-010-var-003` | cut_variant | Duplicate of existing V2 fronted-time family | No | No | No |
| `b1-01-haben-materials-vf-011-var-003` | cut_variant | Duplicate of existing V2/haben material variants | No | No | No |
| `b1-01-suchen-finden-vf-013-var-006` | cut_variant | Duplicate of existing W-question repair family | No | No | No |
| `b1-01-hier-dort-location-vf-014-var-001` | cut_variant | Too thin; location flashcard | No | No | No |
| `b1-01-hier-dort-location-vf-014-var-002` | cut_variant | Too thin; location flashcard | No | No | No |
| `b1-01-hier-dort-location-vf-014-var-003` | cut_variant | Artificial `dort` cue; poor value | No | No | No |
| `b1-01-hier-dort-location-vf-014-var-004` | cut_variant | Too thin; location flashcard | No | No | No |
| `b1-01-hier-dort-location-vf-014-var-005` | cut_variant | Single useful agreement repair cannot justify a family | No | No | No |

## 10. Extension Evidence / Review Integrity Check

| Family | Same-session evidence risk | Review grouping rule | Evidence cap | Review eligibility recommendation | Notes |
| --- | --- | --- | --- | --- | --- |
| `b1-01-ich-bin-entry-vf-010` | Medium | `rg-b1-01-ich-bin-entry` | Max 1 same-session family evidence | Weakly eligible / conservative after delay | Baseline A1/A2 remains weak evidence. |
| `b1-01-haben-materials-vf-011` | Medium | `rg-b1-01-haben-materials` | Max 1 same-session family evidence | Mixed: formal question items eligible; baseline items weakly eligible | No article/case proof from object phrases. |
| `b1-01-lernen-arbeiten-vf-012` | Medium | `rg-b1-01-lernen-arbeiten` | Max 1 same-session family evidence | Weakly eligible / conservative after delay | Do not drift into professions or work duties. |
| `b1-01-suchen-finden-vf-013` | Medium | `rg-b1-01-suchen-finden` | Max 1 same-session family evidence | Weakly eligible / conservative after delay | Verb-choice contrast only, not W-question or case proof. |
| `b1-01-statement-question-transform-vf-015` | Medium | `rg-b1-01-statement-question-transform` | Max 1 same-session family evidence | Eligible after delay, conservative | Strong sentence-control evidence but not B1 readiness. |

Confirmed: same-family attempts are sibling evidence; no family creates independent proof by repeated variants; `auto_core` is limited to stronger fixed-answer transformation/question-control variants; `auto_supported` is used for weak baseline variants; no extension item implies B1 readiness.

## 11. Cue / Translation Integrity Check

| Family | Cue/person issue found? | Meaning issue found? | Action |
| --- | --- | --- | --- |
| `b1-01-ich-bin-entry-vf-010` | No | No | Proceed. |
| `b1-01-haben-materials-vf-011` | No | No | Proceed; preserve formal-you cue for `Haben Sie...`. |
| `b1-01-lernen-arbeiten-vf-012` | No | No | Proceed. |
| `b1-01-suchen-finden-vf-013` | No | No | Proceed; object phrases are context. |
| `b1-01-statement-question-transform-vf-015` | No | No | Proceed; transformation prompts are instructions, not translations. |

No survivor variant has an `Ich` / “you” mismatch. No individual survivor variant requires a cue/person correction before schema mapping.

## 12. Fallback / Capitalisation / Ambiguity Addendum

| Variant ID / family | Issue | Canonical answer | Fallback / ambiguity | Evidence impact | Schema/import caveat |
| --- | --- | --- | --- | --- | --- |
| `b1-01-haben-materials-vf-011-var-004` | Sentence-start capitalisation | `Haben` | `haben` | Lowercase should not be full `auto_core` evidence. | Accept lowercase only as correct-with-note if supported; otherwise exact-only for strong evidence. |
| `b1-01-haben-materials-vf-011-var-005` | Sentence-start capitalisation | `Haben` | `haben` | Lowercase should not be full `auto_core` evidence. | Accept lowercase only as correct-with-note if supported; otherwise exact-only for strong evidence. |
| `b1-01-suchen-finden-vf-013` | Object phrase case/article context | Verb answer, e.g. `suche` / `finde` | Visible objects such as `den Kursraum` | Do not infer article/case control. | Given object phrases are context only. |
| `b1-01-statement-question-transform-vf-015` | Full-question punctuation | Full question with `?` | Missing question mark | Punctuation is part of the transformation contract. | Prefer exact full sentence for transformation evidence. |

## 13. Final Addendum Inventory Summary

| Final addendum component | Count | Status |
| --- | --- | --- |
| Survivor extension families | 5 | included |
| Survivor extension variants | 27 | included |
| Cut extension families | 1 | excluded |
| Cut extension variants | 8 | excluded |
| Deferred items | 0 | none |
| Human-check items | 0 | none |

## 14. Pedagogical Stop Rule


B1-01 should stop after this extension.

The final projected 14-family B1-01 structure is defensible as a strengthened entry/orientation module. It should not be pushed to 15 families for symmetry. Add a 15th family only if a later audit finds a specific real gap, not because the number is attractive.

Next sequence:

1. Extension schema mapping.
2. Extension import planning.
3. Codex implementation only after mapping/import plan.
4. Post-Codex QA.
5. Move to B1-02.

Do not continue polishing B1-01 indefinitely.


## 15. Final QA Checklist

| Check | Status |
| --- | --- |
| Extension QA source verified. | Pass |
| Existing B1-01 final inventory source verified. | Pass |
| Existing 9 families preserved. | Pass |
| 5 extension survivor families included. | Pass |
| 27 extension survivor variants included. | Pass |
| 1 cut family excluded. | Pass |
| 8 cut variants excluded. | Pass |
| No silent row loss. | Pass |
| No app code. | Pass |
| No app-ready JSON. | Pass |
| No Codex prompt. | Pass |
| No schema mapping yet. | Pass |
| No B1-02. | Pass |
| No v0.81 work. | Pass |
| No copied TELC/textbook/coursebook text. | Pass |
| No runtime generation. | Pass |
| No random noun/verb combinations. | Pass |
| No generated morphology. | Pass |
| No B2. | Pass |
| No Genitive. | Pass |
| No adjective-ending traps. | Pass |
| No subordinate clauses. | Pass |
| No more `brauchen` expansion. | Pass |
| Cue/person safety preserved. | Pass |
| `Ich` never appears as “you”. | Pass |
| Sibling variants remain weak/sibling evidence only. | Pass |
| German text remains LTR. | Pass |
| Final addendum is ready for schema mapping. | Pass |

## 16. Final Verdict

`READY_FOR_EXTENSION_SCHEMA_MAPPING`

Exact next recommended action: run **Ozmosis B1-01 Extension — Schema Mapping Addendum** using this row reconciliation file as the controlling source.
