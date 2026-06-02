# Ozmosis B1-01 Extension — Codex Import Plan

Status: import plan only.  
Scope: B1-01 extension variant families.  
Output file: `ozmosis_b1_m01_extension_codex_import_plan_v0_1.md`.

## 1. Source Verification

| Source file/content | Available? | Used for | Reliability | Notes / caveats |
| --- | --- | --- | --- | --- |
| `ozmosis_b1_m01_extension_schema_mapping_addendum_v0_1.md` | Yes | Controlling extension schema source | High | Verdict: `READY_FOR_EXTENSION_IMPORT_PLAN`; 5 survivor families / 27 survivor variants. |
| `ozmosis_b1_m01_extension_row_reconciliation_final_inventory_addendum_v0_1.md` | Yes | Row counts and cut ledger | High | Projects final B1-01 as 14 families / 81 variants. |
| `ozmosis_b1_m01_extension_variant_families_qa_approved_v0_1.md` | Yes | QA decisions | High | 5 families survive; `hier/dort` family cut. |
| `ozmosis_b1_m01_final_variant_family_inventory_v0_1.md` | Yes | Existing B1-01 baseline | High | Existing 9 families / 54 variants preserved. |
| `ozmosis_b1_m01_variant_family_schema_mapping_v0_1.md` | Yes | Existing schema-mapping conventions | High | Used for consistency with v0.80.3 family system. |
| `ozmosis-v0_80_3_1.zip` | Yes | Current app package to inspect in Codex | High | Codex must inspect before implementation; this plan does not inspect code. |
| `Deutsch_Lernen_Codex-chat003-v0_80_3_1.txt` | Yes | Implementation history/context | Medium-high | Use as context only; current files win. |
| `OZMOSIS_SOURCE_BRIEF_v0.80.3.md` | Expected/available in project source | Product constraints | High | Static app, B1-first, no false mastery. |
| `OZMOSIS_DEVELOPMENT_ROADMAP_v0.80.3.md` | Expected/available in project source | Version roadmap | High | No v0.81 work here. |
| TELC/Beruf/Aspekte files | Available | Structural inspiration only | Low for item text | Do not copy or paraphrase text. |

## 2. Executive Import Plan Verdict

`READY_FOR_CODEX_IMPLEMENTATION_PROMPT`

A Codex implementation prompt can be written next. The import strategy is clear, the version label is selected, and all open decisions are non-blocking import decisions for Codex to resolve against the current app architecture.

## 3. Version Recommendation

| Candidate version | Recommendation | Reason |
| --- | --- | --- |
| `v0.80.3.2` | Reject | This is larger than a hotfix; it imports 5 families and 27 variants. |
| `v0.80.4` | Use | Best fit: extension of the v0.80.3/v0.80.3.1 B1-01 variant-family line without becoming v0.81. |
| `v0.81` | Reject | Reserved for separate planned work; this is not Cases/Articles and not a major roadmap jump. |

Final recommended label: `v0.80.4 — B1-01 Extension Variant Families`.

## 4. Current App Architecture Assumptions To Verify

| Area | What Codex must inspect | Why it matters | Stop if unresolved? |
| --- | --- | --- | --- |
| App entry | `index.html` and package root | Confirm actual deploy file and version stamp. | Yes |
| Content location | `/content/` and any B1-01 variant-family files | Determine where to import the 5 families / 27 variants. | Yes |
| Content registry | B1 registry/index modules | New families may need registration. | Yes |
| Routes/hubs | Grammar hub, B1-01 module entry, Today’s Sprint, Diagnostic Sprint | Prevent silent over-sampling and preserve route access. | Yes |
| Evidence storage | Evidence-writing logic and family/variant ID capture | Must retain parent family ID and exact variant ID. | Yes |
| Export/import | Export/import serialisation and old-export handling | Storage compatibility is non-negotiable. | Yes |
| localStorage | `ozmosis_b1_sprint_progress_v1`, `ozmosis_b1_progress_evidence_v1` | Keys must not change. | Yes |
| Validation scripts | v0.80.3/v0.80.3.1 gates | Extend count/ID/cue validation to new families. | No, but document if absent |
| UI renderer | Luecke, Satzbau, Reparatur, Umformen renderers | Need safe mapping for transformation items. | Yes |

## 5. Import Strategy Decision

| Option | Description | Pros | Cons | Verdict |
| --- | --- | --- | --- | --- |
| A | Append extension variants as ordinary static items. | Simpler if family system is inaccessible. | Loses parent-family semantics and sibling evidence safeguards. | Reject unless Option B impossible. |
| B | Add extension families into the existing static family-records + approved-variants system. | Preserves v0.80.3 architecture, IDs, evidence semantics, and no runtime generation. | Requires Codex to correctly inspect/register existing family system. | Choose. |
| C | Create a separate `B1-01 Extended` route. | Could isolate extension sampling. | Adds route complexity and splits learner path unnecessarily. | Reject unless current architecture requires it. |
| D | Runtime frame/slot generation. | None for this patch. | Violates static curated-variant design and risks German grammar errors. | Reject. |

Chosen strategy: `Option B — Add extension families into the existing static variant-family system.`

## 6. Extension Import Scope

| Component | Count | Import status |
| --- | --- | --- |
| Extension survivor families | 5 | import |
| Extension survivor variants | 27 | import |
| Cut extension families | 1 | exclude |
| Cut extension variants | 8 | exclude |
| Existing B1-01 families | 9 | preserve |
| Existing B1-01 variants | 54 | preserve |
| Final projected families | 14 | validate |
| Final projected variants | 81 | validate |

## 7. Families To Import

| Family ID | Variant count | Target | Evidence interpretation | Review group | Import notes |
| --- | --- | --- | --- | --- | --- |
| b1-01-ich-bin-entry-vf-010 | 5 | Simple `sein` in course-entry state/location sentences | Baseline `sein` control; mostly `auto_supported`; not B1-depth evidence. | rg-b1-01-ich-bin-entry | Import as weak baseline family. Do not overclaim as B1 readiness. |
| b1-01-haben-materials-vf-011 | 5 | `haben` for simple course materials / availability | Practical possession/availability; object phrases are context, not article/case proof. | rg-b1-01-haben-materials | Import with `Haben` capitalisation caveat and object-context caveat. |
| b1-01-lernen-arbeiten-vf-012 | 6 | Distinguish course learning from simple working | Simple present-tense verb contrast; no profession/job-search content. | rg-b1-01-lernen-arbeiten | Import as B1-01 course/work bridge only. |
| b1-01-suchen-finden-vf-013 | 5 | Distinguish “look for” and “find” in course orientation | Orientation verb-choice contrast; given object phrase is context, not case/article evidence. | rg-b1-01-suchen-finden | Import with visible-given-context behaviour if supported. |
| b1-01-statement-question-transform-vf-015 | 6 | Transform simple statements into yes/no questions | Sentence-control transformation evidence; stronger than recognition but still bounded. | rg-b1-01-statement-question-transform | Import as strongest extension family; preserve full-question answer handling. |

## 8. Variants To Import

| Variant ID | Family ID | Task type | Task depth | Answer mode | Canonical answer | Evidence type | Review eligibility | Import caveat |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| b1-01-ich-bin-entry-vf-010-var-001 | b1-01-ich-bin-entry-vf-010 | Luecke | cloze | typed_short | bin | auto_supported | weakly_eligible_after_delay | Baseline `ich bin`; not B1-depth evidence. |
| b1-01-ich-bin-entry-vf-010-var-002 | b1-01-ich-bin-entry-vf-010 | Luecke | cloze | typed_short | bin | auto_supported | weakly_eligible_after_delay | Course-entry state. |
| b1-01-ich-bin-entry-vf-010-var-004 | b1-01-ich-bin-entry-vf-010 | Luecke | cloze | typed_short | bin | auto_supported | weakly_eligible_after_delay | Course-entry location/state. |
| b1-01-ich-bin-entry-vf-010-var-005 | b1-01-ich-bin-entry-vf-010 | Satzbau | sentence_building | sentence_order | Ich bin neu hier. | auto_supported | weakly_eligible_after_delay | Short Satzbau baseline. |
| b1-01-ich-bin-entry-vf-010-var-006 | b1-01-ich-bin-entry-vf-010 | Reparatur | repair | repair_text | Ich bin neu hier. | auto_supported | weakly_eligible_after_delay | Conjugation repair. |
| b1-01-haben-materials-vf-011-var-001 | b1-01-haben-materials-vf-011 | Luecke | cloze | typed_short | habe | auto_supported | weakly_eligible_after_delay | Object phrase is context. |
| b1-01-haben-materials-vf-011-var-002 | b1-01-haben-materials-vf-011 | Luecke | cloze | typed_short | habe | auto_supported | weakly_eligible_after_delay | Object phrase is context. |
| b1-01-haben-materials-vf-011-var-004 | b1-01-haben-materials-vf-011 | Luecke | cloze | typed_short | Haben | auto_core | eligible_auto_after_delay | Sentence-start capitalisation caveat. |
| b1-01-haben-materials-vf-011-var-005 | b1-01-haben-materials-vf-011 | Luecke | cloze | typed_short | Haben | auto_core | eligible_auto_after_delay | Sentence-start capitalisation caveat. |
| b1-01-haben-materials-vf-011-var-006 | b1-01-haben-materials-vf-011 | Reparatur | repair | repair_text | Ich habe die Unterlagen. | auto_supported | weakly_eligible_after_delay | Conjugation repair. |
| b1-01-lernen-arbeiten-vf-012-var-001 | b1-01-lernen-arbeiten-vf-012 | Luecke | cloze | typed_short | lerne | auto_core | eligible_auto_after_delay | Clear verb-choice item. |
| b1-01-lernen-arbeiten-vf-012-var-002 | b1-01-lernen-arbeiten-vf-012 | Luecke | cloze | typed_short | lerne | auto_supported | weakly_eligible_after_delay | Do not overcount as V2 evidence. |
| b1-01-lernen-arbeiten-vf-012-var-003 | b1-01-lernen-arbeiten-vf-012 | Luecke | cloze | typed_short | arbeite | auto_supported | weakly_eligible_after_delay | Generic work only. |
| b1-01-lernen-arbeiten-vf-012-var-004 | b1-01-lernen-arbeiten-vf-012 | Luecke | cloze | typed_short | arbeite | auto_supported | weakly_eligible_after_delay | Generic work only; do not overcount as V2 evidence. |
| b1-01-lernen-arbeiten-vf-012-var-005 | b1-01-lernen-arbeiten-vf-012 | Kontrast | contrast | typed_short | lerne | auto_supported | weakly_eligible_after_delay | Instruction cue; German-class context. |
| b1-01-lernen-arbeiten-vf-012-var-006 | b1-01-lernen-arbeiten-vf-012 | Reparatur | repair | repair_text | Ich lerne Deutsch. | auto_supported | weakly_eligible_after_delay | Verb-choice repair. |
| b1-01-suchen-finden-vf-013-var-001 | b1-01-suchen-finden-vf-013 | Luecke | cloze | typed_short | suche | auto_supported | weakly_eligible_after_delay | `den Kursraum` is context only. |
| b1-01-suchen-finden-vf-013-var-002 | b1-01-suchen-finden-vf-013 | Luecke | cloze | typed_short | finde | auto_supported | weakly_eligible_after_delay | Do not count as W-question or case proof. |
| b1-01-suchen-finden-vf-013-var-003 | b1-01-suchen-finden-vf-013 | Luecke | cloze | typed_short | suche | auto_supported | weakly_eligible_after_delay | Object phrase is context. |
| b1-01-suchen-finden-vf-013-var-004 | b1-01-suchen-finden-vf-013 | Luecke | cloze | typed_short | finde | auto_supported | weakly_eligible_after_delay | Object phrase is context; no W-question overcount. |
| b1-01-suchen-finden-vf-013-var-005 | b1-01-suchen-finden-vf-013 | Luecke | cloze | typed_short | suche | auto_supported | weakly_eligible_after_delay | Object phrase is context. |
| b1-01-statement-question-transform-vf-015-var-001 | b1-01-statement-question-transform-vf-015 | Umformen | transformation | transformation_text | Ist die App hier? | auto_core | eligible_auto_after_delay | Question-mark/exactness caveat. |
| b1-01-statement-question-transform-vf-015-var-002 | b1-01-statement-question-transform-vf-015 | Umformen | transformation | transformation_text | Ist das Heft hier? | auto_core | eligible_auto_after_delay | Question-mark/exactness caveat. |
| b1-01-statement-question-transform-vf-015-var-003 | b1-01-statement-question-transform-vf-015 | Umformen | transformation | transformation_text | Brauche ich ein Heft? | auto_core | eligible_auto_after_delay | Transformation target, not `brauchen` expansion. |
| b1-01-statement-question-transform-vf-015-var-004 | b1-01-statement-question-transform-vf-015 | Umformen | transformation | transformation_text | Habe ich die Unterlagen? | auto_core | eligible_auto_after_delay | Question-mark/exactness caveat. |
| b1-01-statement-question-transform-vf-015-var-005 | b1-01-statement-question-transform-vf-015 | Umformen | transformation | transformation_text | Haben Sie Informationen? | auto_core | eligible_auto_after_delay | Formal yes/no transformation. |
| b1-01-statement-question-transform-vf-015-var-006 | b1-01-statement-question-transform-vf-015 | Reparatur | repair | repair_text | Brauche ich ein Heft? | auto_core | eligible_auto_after_delay | Question repair, not `brauchen` expansion. |

## 9. Records To Exclude

| Family / variant ID | Reason excluded | Import status |
| --- | --- | --- |
| b1-01-hier-dort-location-vf-014 | Too thin / too A1 / flashcard risk | exclude |
| b1-01-ich-bin-entry-vf-010-var-003 | Duplicate of existing V2 fronted-time family | exclude |
| b1-01-haben-materials-vf-011-var-003 | Duplicate of existing V2/haben material variant | exclude |
| b1-01-suchen-finden-vf-013-var-006 | Duplicate of existing W-question repair family | exclude |
| b1-01-hier-dort-location-vf-014-var-001 | Too thin; location flashcard | exclude |
| b1-01-hier-dort-location-vf-014-var-002 | Too thin; location flashcard | exclude |
| b1-01-hier-dort-location-vf-014-var-003 | Artificial `dort` cue; poor value | exclude |
| b1-01-hier-dort-location-vf-014-var-004 | Too thin; location flashcard | exclude |
| b1-01-hier-dort-location-vf-014-var-005 | One agreement repair cannot justify family | exclude |

## 10. Mapping Decisions For Codex

| Decision area | Recommended import decision | Rationale | Blocker? |
| --- | --- | --- | --- |
| `Haben` vs `haben` | Canonical `Haben`; lowercase only correct-with-note if existing grader supports it safely. | Sentence-start capitalisation should not be silently full `auto_core` evidence. | No |
| Question mark normalisation | Prefer exact full question; if existing grader normalises punctuation, document evidence impact. | Transformation task includes question formation and punctuation. | No |
| Object phrase display/context | Show given object phrases as visible context/bracketed if supported. | Given object phrases must not become article/case evidence. | No |
| Weak review eligibility mapping | Map `weakly_eligible_after_delay` to the closest existing weak/conservative review state. | Do not upgrade weak baseline variants. | No |
| Transformation answer-mode mapping | Map `transformation_text` / `transformed_sentence` to existing Umformen/full-sentence handling. | Preserve task type if possible. | No |
| Route placement | Use the same B1-01 module-practice route unless architecture makes a separate route safer. | Keeps B1-01 coherent and avoids route clutter. | No |
| Today’s Sprint sampling | Do not let Today’s Sprint over-sample the extension. Include only if existing sampler responsibly balances B1-01. | Prevents B1-01 flooding mixed practice. | No |
| Existing weak B1-01 family visibility | Do not hide/delete now; preserve conservative evidence weighting. | Avoid scope creep and unexpected learner regression. | No |
| Export/import compatibility | Additive metadata only; do not rename keys; old exports must tolerate new fields. | Storage compatibility is non-negotiable. | Yes |

## 11. Data Shape Requirements

Codex must preserve the current app’s field conventions, but the semantics must remain stable.

Minimum family semantics:

```txt
variantFamilyId
familyTarget
familyType
targetFamilyId
targetId
reviewGroup
siblingVariantGroup
maxSameSessionEvidence
supportPolicyDefault
reviewEligibilityDefault
variants
```

Minimum variant semantics:

```txt
variantId
parentVariantFamilyId
learnerCue
prompt
givenPhrase
targetAnswer
acceptedAnswers
feedbackMicroRule
taskType
taskDepth
answerMode
answerShape
correctnessPolicy
evidenceType
supportPolicy
supportPresentation
reviewGroup
reviewEligibilityDefault
```

Exact field names may adapt to the existing codebase, but parent-family ID, exact variant ID, evidence type, task type, task depth, support policy/presentation, review group, and sibling group semantics must not be lost.


## 12. Evidence / Review Safety Requirements

| Requirement | Applies to | Codex import implication |
| --- | --- | --- |
| Sibling evidence only | All 5 extension families | Do not count same-family variants as independent proof. |
| Max one same-family same-session evidence | All 5 extension families | Preserve/import `maxSameSessionEvidence=1` where current app supports it. |
| Weak A1/A2 baseline stays weak | `ich-bin-entry`, most `haben`, most `lernen/arbeiten` | Use `auto_supported` or weak review state. |
| Object phrases do not prove case/article | `haben-materials`, `suchen-finden` | Display as given context; evidence attaches to verb/frame only. |
| No B1 readiness claims | All extension families | Do not change copy to imply mastery/readiness. |
| No production correctness | Whole extension | No new production variants; production rules unchanged. |
| Transformation evidence bounded | `statement-question-transform` | Can be stronger than recognition, but not broad B1 proof. |

## 13. Route / Sampling Plan

Recommended route placement:

- Add extension families to the same B1-01 module-practice route.
- Do not create a public “B1-01 Extended” route unless current architecture requires it.
- Today’s B1 Sprint may include the new items only if existing sampling already balances module/category exposure responsibly.
- Diagnostic Sprint may include them only if diagnostic routing already supports B1-01 family-level evidence without over-sampling.
- Do not implement new spacing/sequencing rules in this patch.
- Do not let the 27 new variants flood mixed practice.
- Prefer B1-01 module practice as the first exposure path.


## 14. Test Plan For Implementation Prompt

| Test area | Required test | Expected result | Must run? |
| --- | --- | --- | --- |
| Syntax check | Parse JS / run existing syntax gate | No syntax errors | Yes |
| Content count gate | Count B1-01 families/variants | 14 families / 81 variants | Yes |
| ID-shape gate | Validate family/variant IDs | No duplicate, malformed, pipe, or Markdown-header IDs | Yes |
| Cut-record absence gate | Search for excluded family/variants in active bank | Cut family and 8 cut variants absent | Yes |
| Cue/person gate | Scan German prompt vs English cue | No `Ich` / `you` mismatch | Yes |
| B1-01 route smoke | Open/start B1-01 module practice | Route starts and renders item | Yes |
| Extension family render smoke | Force/sample extension families if possible | Each imported family can render safely | Yes |
| Exact variant ID evidence check | Answer extension item and inspect evidence/export/debug | Exact variantId retained | Yes |
| Parent family ID evidence check | Answer extension item and inspect evidence/export/debug | parentVariantFamilyId retained | Yes |
| Export/import check | Export after extension attempt and re-import | Progress/evidence survives | Yes |
| Old-export tolerance check | Import pre-v0.80.4 export if available | No crash or key loss | Yes if old export available |
| localStorage key check | Inspect key names | No renamed storage keys | Yes |
| Multiple-choice shuffling regression | Run existing gate | Existing Auswahl shuffling still works | Yes |
| Arabic RTL / German LTR smoke | Open Arabic UI/context if available | German text remains LTR | Yes |
| Responsive screenshots | Check listed viewports | No clipped inputs/buttons/HUD overlap | Yes if browser available; otherwise document blocked |

## 15. Documentation / Changelog Plan

Create/update version-consistent docs using current repo conventions:

```txt
CHANGELOG-v0_80_4.txt
README-v0_80_4.md
docs/OZMOSIS_SOURCE_BRIEF_v0.80.4.md
docs/OZMOSIS_DEVELOPMENT_ROADMAP_v0.80.4.md
docs/qa/v0.80.4_b1_01_extension_variant_families.md
```

If the current repo uses different naming, follow existing repo conventions but preserve the `v0.80.4` label consistently.


## 16. Implementation Prompt Readiness Checklist

| Check | Status |
| --- | --- |
| Source files verified. | Pass |
| Extension schema mapping ready. | Pass |
| Row reconciliation clean. | Pass |
| 5 survivor families identified. | Pass |
| 27 survivor variants identified. | Pass |
| 1 cut family excluded. | Pass |
| 8 cut variants excluded. | Pass |
| Existing 9 families preserved. | Pass |
| Existing 54 variants preserved. | Pass |
| Final projected 14 / 81 count established. | Pass |
| Import strategy selected. | Pass |
| Version label selected. | Pass |
| Open decisions listed. | Pass |
| Tests defined. | Pass |
| No app code written. | Pass |
| No app-ready JSON written. | Pass |
| No Codex implementation prompt written yet. | Pass |
| No B1-02. | Pass |
| No v0.81. | Pass |
| No Genitive. | Pass |
| No copied source text. | Pass |
| No runtime generation. | Pass |
| No storage-key changes. | Pass |

## 17. Final Verdict

`READY_FOR_CODEX_IMPLEMENTATION_PROMPT`

Exact next recommended action: write the final **Codex implementation prompt** for `v0.80.4 — B1-01 Extension Variant Families`, using this import plan as the controlling source.
