# Ozmosis B1-01 Curated Variant Families — Variant Codex Import Plan

Status: Import-planning only  
Scope: B1-01 — Getting started at work/course  
Input: `ozmosis_b1_m01_variant_family_schema_mapping_v0_1.md`  
Output: `ozmosis_b1_m01_variant_family_codex_import_plan_v0_1.md`  
Recommended implementation label: `v0.80.3 — B1-01 Curated Variant Families`

---

## 1. Source Verification

| Source file/content | Available? | Used for | Reliability | Notes / caveats |
|---|---:|---|---|---|
| `ozmosis_b1_m01_variant_family_schema_mapping_v0_1.md` | Yes | Controlling source for mapped families/variants and final schema verdict | High | Confirms 9 mapped families, 54 clean variants, cut variants excluded, and `READY_FOR_VARIANT_CODEX_IMPORT_PLAN`. |
| `ozmosis_b1_m01_curated_variant_families_qa_approved_v0_1.md` | Yes | QA-approved survivor set and cut rationale | High | Confirms QA accepted 9 families, 54 survivor variants, 6 cut variants, 0 deferred, 0 human-check. |
| `ozmosis_b1_m01_curated_variant_families_draft_v0_1.md` | Yes | Draft provenance and original family design | High | Useful for traceability; QA-approved file wins. |
| `ozmosis_b1_m01_total_inventory_after_topup_phase3a.md` | Yes | Current B1-01 inventory baseline | High | Current B1-01 baseline: 70 learner-facing pieces, 67 practice/production, 3 notice/concept. |
| `ozmosis_b1_m01_vocab_activity_coverage_audit.md` | Yes | Over-testing and activity coverage cautions | High | Used to prevent over-expansion of `brauchen`, V2 repetition, and mechanics-only evidence. |
| `ozmosis_b1_m01_topup_phase3a_qa_approved.md` | Yes | Top-up survivor provenance | High | Used as source background. |
| `ozmosis_phase3a_b1_m01_getting_started_qa_approved.md` | Yes | Original B1-01 Phase 3A caveats | High | Used for original caveats: lower-case noun fallback, production overclaim risk, thin recognition. |
| `ozmosis_phase3_b1_m01_getting_started_draft_items.md` | Yes | Original target-family design and module boundary | High | Used for B1-01 target-family ownership and deferred scope. |
| `ozmosis_controlled_frame_slot_variant_system_v0_1.md` | No | Not used as a controlling file | Not used | The concept exists in prior chat context, but this import plan relies on the schema mapping and QA-approved files. |
| `ozmosis_phase2_5_full_b1_normalisation_addendum_v0_2.md` | No as standalone file | Not used directly | Not used | Not required for this import plan; Codex should re-check if it exists inside a planning package. |
| `ozmosis_prompt0_content_schema_id_metadata_rules_lock.md` | No as standalone file | Not used directly | Not used | Not required for this import plan; schema mapping already applies the locked vocabulary and ID rules. |
| `ozmosis_phase2_5_b1_m01_getting_started_target_inventory.md` | No as standalone file | Not used directly | Not used | Not required for this import plan because current B1-01 inventory/schema mapping are controlling. |
| `ozmosis_phase2_5_full_12_module_consistency_audit.md` | Yes | Module-boundary and normalisation caveats | High | Used to preserve module boundaries and evidence/support separation. |
| `OZMOSIS_SOURCE_BRIEF_v0.80.2.md` | Yes | Strategic and technical constraints | High | B1-first, static app, conservative evidence model, no false mastery. |
| `OZMOSIS_DEVELOPMENT_ROADMAP_v0.80.2.md` | Yes | Architecture and storage guardrails | High | Static app, no backend/API/runtime AI, storage keys preserved. |
| `ozmosis-v0_80_2.zip` | Yes | Current app/package architecture read | High | Inspected at package/code level for structure, storage keys, content registry, evidence record shape, and choice shuffle behaviour. |
| TELC/Beruf/Aspekte files | Yes | Structural inspiration only | Low for item text | Not used for copied text. |

Source gaps are non-blocking for this import-planning pass because the schema mapping file is present and complete enough for planning. TELC/Beruf/Aspekte files are not used for copied text.

---

## 2. Import Intake Check

| Check | Result |
|---|---:|
| Schema mapping file found | Yes |
| Expected family count | 9 |
| Actual mapped family count | 9 |
| Expected clean variant count | 54 |
| Actual mapped clean variant count | 54 |
| Cut/deferred/human-check exclusion status | 6 cut variants excluded; 0 deferred; 0 human-check included |
| Final verdict from schema mapping | `READY_FOR_VARIANT_CODEX_IMPORT_PLAN` |
| Import planning can proceed? | Yes |

No source blocker remains. The next stage can plan implementation behaviour, data shape, old-item replacement strategy, and testing expectations.

---

## 3. Current App Architecture Read

This was a limited package/code inspection for import planning, not a full QA pass.

| Area | Observed current state | Import-plan implication |
|---|---|---|
| Main deployed app | Repo-root `index.html` is present in `ozmosis-v0_80_2.zip`; app package is static. | Later Codex patch should inspect and probably edit `index.html`; keep static GitHub Pages compatibility. |
| External content files | Package includes `content/b1-connectors.js`, `content/b1-redemittel.js`, `content/b1-wortschatz.js`, plus source JSON banks. `index.html` loads these scripts before the main inline script. | Variant families can be added either inline near `B1_ITEMS` or as a new static content file. Prefer a static content file if Codex inspection confirms registry integration is straightforward. |
| Core B1 items | `index.html` contains `const B1_ITEMS = [...]` as an embedded core item array. | B1-01 variant families could be introduced as a new core family bank and mapped into normal practice items at runtime. |
| Central registry | `B1_CONTENT_REGISTRY` exists with entries for core, connectors, redemittel, and wortschatz. | Best path is adding a new B1-01 variant family source into the registry or normalising it into B1 core queue sources. |
| Storage keys | `B1_STORAGE_KEY = "ozmosis_b1_sprint_progress_v1"`; `B1_EVIDENCE_STORAGE_KEY = "ozmosis_b1_progress_evidence_v1"`. | Do not rename. Add metadata only. |
| Evidence records | Evidence already records item ID, task type/depth, support, answer mode, target ID, `variantId`, prompt hash, confidence, review metadata, and production metadata. | Exact `variantId` support already exists conceptually. Add `variantFamilyId`, `siblingVariantGroup`, `familyType`, `familyTarget`, and `variantSelectionMode` additively. |
| Choice shuffling | v0.80.2 includes render-time choice shuffling using stable choice identity and displayed choice state. | Preserve. Current survivor variants do not require new Auswahl/Kontrast choice tables. |
| Export/import | Export includes B1 progress and evidence stores. | New fields inside evidence records should export naturally if stored in the existing evidence object. Import must tolerate missing fields. |
| Arabic/LTR | App has multilingual UI including Arabic; project rules require German content LTR. | Any bracketed/given German phrase rendering must force or preserve LTR direction. |
| Uncertainty | Need full Codex inspection before editing: route selectors, queue builders, item cloning/normalisation, registry filtering, QA/debug surfaces, export/import helper behaviour. | Codex prompt must require inspection first and must not assume exact function names beyond verified code. |

---

## 4. Implementation Options Analysis

| Option | Description | Pros | Cons | Risk | Recommendation |
|---|---|---|---|---|---|
| Option A — Fully expanded static items | Each of the 54 variants becomes a normal static item. Family metadata is duplicated on each item. | Simplest rendering path; minimal app logic; likely easiest to smoke test. | Bloats item pool; risks over-exposure; weak family-level selection; harder to cap sibling evidence; old item replacement becomes messy. | Medium | Acceptable fallback only if Option B is too intrusive. |
| Option B — Static family records + static approved variants | Each family is a stable parent record with approved static variants. App selects one variant per family attempt and records both IDs. | Preserves parent/variant identity; avoids runtime grammar generation; supports randomisation without anonymity; best evidence cap path; closest to pedagogical design. | Needs moderate renderer/queue/evidence adjustments; requires careful fallback for old items. | Medium-low if scoped narrowly | **Recommended: `RECOMMEND_OPTION_B_STATIC_FAMILY_RECORDS`.** |
| Option C — Runtime assembly from frame/slot data | App assembles sentences from frames/slots at runtime. | Scales later. | Too risky now; grammar/naturalness risk; larger architecture; QA burden; violates current short-term intent. | High | Reject for v0.80.3. |

Recommended option: **Option B — Static family records + static approved variants.**

Fallback option: **Option A** only if Codex inspection shows family rendering would require a broad rewrite.

Rejected option: **Option C** for v0.80.3.

---

## 5. Recommended Import Data Shape

This is a planning data shape, not app-ready JSON.

### 5.1 Required family record fields for v0.80.3

| Field | Required now? | Purpose |
|---|---:|---|
| `id` / `variantFamilyId` | Yes | Stable parent family identity. |
| `familyTarget` | Yes | Human/QA-readable target. |
| `familyType` | Yes | Type A or Type B evidence handling. |
| `displayModuleId` | Yes | `B1-01`. |
| `moduleKey` | Yes | `b1-01`. |
| `targetFamilyId` | Yes | Course/strand mapping. |
| `targetId` | Yes | Target mapping. |
| `taskTypesSupported` | Yes | Rendering/route constraints. |
| `taskDepthSupported` | Yes | Evidence interpretation. |
| `evidenceInterpretation` | Yes | Prevents false progress. |
| `reviewGroup` | Yes | Later review grouping. |
| `siblingVariantGroup` | Yes | Same-family evidence cap. |
| `maxSameSessionEvidence` | Yes | Planning cap, probably `1`. |
| `supportPolicyDefault` | Yes | Support/evidence context. |
| `reviewEligibilityDefault` | Yes | Review safety. |
| `variants` or `variantIds` | Yes | Approved survivor variants only. |
| `qaStatus` | Yes | Imported source traceability. |
| `schemaRisk` | Yes | Import warnings. |

### 5.2 Required variant record fields for v0.80.3

| Field | Required now? | Purpose |
|---|---:|---|
| `id` / `variantId` | Yes | Exact rendered variant identity. |
| `parentVariantFamilyId` | Yes | Parent family link. |
| `sourceItemIds` | Yes | Traceability to approved B1-01 items. |
| `learnerCue` | Yes where present | Meaning/scenario support. |
| `prompt_de` / prompt text | Yes | Rendered German task. |
| `givenPhrase` | Yes if present | Context phrase, not graded. |
| `answer` / `targetAnswer` | Yes unless production | Correct answer. |
| `acceptedAnswers` | Yes unless production | Exact/multi-answer contract. |
| `fullAnswer_de` / corrected sentence | Yes where useful | Feedback. |
| `microRule` | Yes | One concise feedback rule. |
| `itemType` | Yes | Existing renderer compatibility. |
| `taskType` | Yes | Schema/planning label. |
| `taskDepth` | Yes | Evidence label. |
| `answerMode` | Yes | Choice/typed/repair/self-marked. |
| `supportPolicy` | Yes | Evidence-affecting support. |
| `supportPresentation` | Yes | UI/planning support. |
| `evidenceType` | Yes | auto_core / auto_supported / self_marked_production. |
| `reviewGroup` | Yes | Review grouping. |
| `siblingVariantGroup` | Yes | Evidence cap group. |
| `skillTags` | Yes | Learning Map / Skill Matrix. |
| `grammarFocus` | Yes where relevant | Skill Matrix / debug. |
| `vocabularyFocus` | Yes where relevant | Skill Matrix / debug. |
| `errorCategories` | Yes where relevant | Repair/error pattern detection. |
| `qaStatus` | Yes | Traceability. |
| `learnerFacingAllowed` | Yes | Route safety. |

### 5.3 Evidence metadata fields

Required for v0.80.3 where feasible:

```txt
variantFamilyId
variantId
siblingVariantGroup
reviewGroup
familyType
familyTarget
variantSelectionMode
isSiblingVariantAttempt
sameSessionEvidenceCap
supportPolicy
supportPresentation
taskDepth
evidenceType
```

Existing evidence already stores `variantId`; Codex should add family-level metadata additively rather than changing existing record semantics.

### 5.4 Fields that can wait

| Field / behaviour | Reason it can wait |
|---|---|
| Full delayed-review scheduler | Review system already exists as optional/non-scheduled; no new scheduler needed. |
| Visible learner-facing family names | Learners only need the task; family names are QA/debug metadata. |
| Advanced sibling-cap scoring changes | v0.80.3 can flag sibling attempts; deeper aggregation can come later. |
| Runtime frame/slot bank fields | Explicitly not v0.80.3. |
| Automatic weakness repair queue routing by family | Later enhancement. |

---

## 6. Selection and Rendering Behaviour

| Decision area | v0.80.3 recommendation |
|---|---|
| Family selected | Existing route/round selection should select a family as the practice unit where the old fixed item would have appeared. |
| Variant selected | Select one approved variant when the attempt is instantiated. |
| Selection mode | Use seeded random selection per attempt/round, not open random every render. |
| Retry/refresh stability | A specific active attempt must keep the same variant through answer, feedback, confidence, and continue. Do not change variant on retry within the same active question. |
| Repeat later in same round | May choose another sibling later only if queue logic allows it, but evidence must flag same-family same-session sibling status. Prefer not to present multiple siblings from same family in one short round. |
| Exact variant ID | Store on runtime item and evidence record. |
| Parent family ID | Store on runtime item and evidence record. |
| Luecke rendering | Render `___` as the typed input blank. Given bracketed phrase, if present, is static context and not graded. |
| Satzbau rendering | Use approved chunks only. If multiple valid orders exist, do not import until resolved. |
| Reparatur rendering | Render the erroneous sentence as repair text and use variant-specific corrected sentence/micro-rule. |
| Umformen rendering | Use only approved single-result transformation variants. |
| Produktion rendering | Prompt + checklist/useful phrases/model-after-attempt only. No auto grading. |
| Feedback | Use variant-specific micro-rule and full correct sentence where available. |
| Given phrase display | Display as context, visually distinct from blanks; force/preserve German LTR. |

Strong recommendation: variant selection should happen once when the item/family enters the runtime queue or when the current active item is cloned. It should not happen inside every render function call.

---

## 7. Evidence / Review Behaviour Plan

| Area | Plan |
|---|---|
| Evidence write | Add family/variant metadata to each attempt record. Preserve existing fields. |
| Same-family cap | Mark attempts with `siblingVariantGroup`; same-family same-session attempts count as sibling evidence only. |
| Cap implementation | v0.80.3 may store `maxSameSessionEvidence:1` and `isSiblingVariantAttempt`; deeper progress aggregation can later read that metadata. |
| ReviewGroup | Use the family/frame review group from schema mapping, not the exact visible sentence alone. |
| Same-day attempts | Same-day siblings do not count as delayed retention. |
| Delayed review later | Later review can present a sibling variant after delay; evidence should record both old family and new exact variant. |
| Production | Always self-marked. No correctness. No review eligibility by default. |
| `brauchen` | Keep `auto_supported` or capped/scaffolded evidence; never treat as B1-depth proof by itself. |
| Legacy items | Attempts without family/variant metadata remain valid and should be treated as ordinary legacy item evidence. |
| Learning Map / Skill Matrix | Do not change labels now. If metadata is ignored initially, no learner-facing claims should change. |

Required evidence logic for later Codex prompt:

```txt
If an item has parentVariantFamilyId/variantFamilyId, write it to the evidence record.
If the item has a siblingVariantGroup, write it to the evidence record.
If the current session already contains an attempt for the same siblingVariantGroup, mark the new record as sibling evidence / same-family same-session.
Do not change existing correctness scoring.
```

---

## 8. Old Item Replacement / Supplement Strategy

Recommended strategy: **replace selected old fixed items with variant-family rotation**, not simple supplementation.

| Old item / group | Variant family replacement? | Keep / replace / hide / dev-only | Reason | Risk |
|---|---|---|---|---|
| Original V2 fronted-time cloze/Satzbau/repair/transformation items | Yes: `b1-01-v2-fronted-time-vf-001` | Replace in learner-facing B1-01 route; old IDs can remain as source/provenance/dev-only if needed | Family gives controlled variation for same V2 frame. | If kept alongside family, V2 becomes over-tested. |
| Top-up V2 fronted-time items | Yes: `b1-01-v2-fronted-time-vf-001` | Replace/merge | These are direct source items for the family. | Same as above. |
| Place-fronted V2 top-up items | Yes: `b1-01-v2-fronted-place-vf-002` | Replace/merge | Family covers the usable place-fronted survivors. | Avoid weak place-fronting variants cut in QA. |
| W-question course-orientation items | Yes: `b1-01-w-question-location-vf-003` and `b1-01-w-question-repair-vf-008` | Replace selected fixed W-question cloze/Satzbau/repair items | Improves transfer across `Wo ist...?` / `Wo finde...?`. | Do not drift into appointments. |
| Yes/no question items | Yes: `b1-01-yes-no-question-vf-004` | Replace selected fixed items | Prevents memorising one `Brauche ich...?` shape. | Sentence-start capitalisation exactness must be handled. |
| `Ich brauche...` survival items | Yes: `b1-01-brauchen-acc-vf-005` | Replace selected fixed items; do not supplement broadly | Capped family avoids false depth while giving some variety. | High evidence inflation if duplicated. |
| `mein/meine` familiar noun items | Yes: `b1-01-mein-meine-familiar-vf-006` | Replace selected fixed items | Good controlled variation across familiar nouns. | Must not imply full possessive/case-table control. |
| Noun-capitalisation mechanics items | Yes, partly: `b1-01-noun-capitalisation-vf-007` | Replace selected mechanics items; keep evidence weak | Good for rotating familiar course nouns. | Lowercase fallback/correct-with-note uncertainty. |
| Controlled self-introduction production cards | Yes: `b1-01-controlled-production-vf-009` | Replace/merge production prompts into family | Keeps production self-marked and low-stakes. | Do not route into auto review. |
| Original notice/concept cards | No variant-family replacement | Keep separately in future lesson/notice layer | Notices are non-evidence teaching/reminder content. | Do not count as practice or correctness. |
| Original name-giving `heiße` items | No | Keep single canonical or leave out of variant-family import | Avoid multiplying `heiße/heisse` fallback issue. | Strong fallback ambiguity if expanded. |
| Thin vocabulary recognition / already-cut items | No | Keep cut / do not revive | QA already rejected or downgraded weak flashcard-like items. | False progress evidence. |
| Fixed B1-01 items not covered by families | No direct family replacement | Keep single if still useful; otherwise dev-only or later lesson layer | Some items may still serve unique baseline needs. | Needs exact Codex/content inspection. |

Default Codex behaviour should be: **import variant families into the B1-01 practice pool as replacements/rotations for matching source items; do not simply append all 54 variants to the existing 67 practice/production items.**

If replacement is too risky in the current code, safer fallback is a temporary separate dev/QA route or a variant-only B1-01 test route. Do not bloat the normal learner-facing B1-01 pool without an explicit decision.

---

## 9. Storage / Export / Import Compatibility Plan

| Area | Current expected behaviour | Required change | Compatibility risk | Recommendation |
|---|---|---|---|---|
| localStorage keys | Existing keys `ozmosis_b1_sprint_progress_v1` and `ozmosis_b1_progress_evidence_v1`. | None. | High if renamed. | Do not rename; no migration. |
| Evidence records | Existing additive records with item/task/support metadata. | Add family/variant metadata fields when present. | Low if additive. | Add fields only; tolerate missing. |
| Export data | Export includes B1 progress and evidence store. | New evidence fields should export inside records. | Low. | No export version break required unless Codex changes top-level shape. |
| Import tolerance | Old exports may lack variant metadata. | Import must accept missing family/variant fields. | Medium if validation is strict. | Do not require new fields during import. |
| Debug snapshot | Current debug exposes registry/evidence summaries. | Add family/variant counts and current active variant if practical. | Low. | Useful but not required for learner path. |
| Old attempts without variant IDs | Existing records valid. | Treat as legacy item evidence. | Low. | No backfill required. |
| Route history | Current routes use item queues and runtime state. | Variant selection should not require new route history fields. | Medium if queues assume item IDs only. | Codex to inspect queue builders. |
| Same-session tracking | Session ID exists in evidence records. | Use session ID + siblingVariantGroup to flag sibling attempts. | Medium. | Add flag; defer deeper scoring changes. |

---

## 10. Route / UI Impact Plan

| Question | Recommendation |
|---|---|
| New routes needed? | No, not for v0.80.3. |
| Existing B1-01 route can use variants? | Yes, if Codex can identify the route/pool for B1-01 practice. |
| Today’s Sprint can use variants? | Yes later, but for v0.80.3 use cautiously. Prefer B1-01 route first unless current sprint composition already includes the affected items. |
| Free Practice can use variants? | Yes if families are normalised into the registry/filter system. |
| Learning Map display change needed now? | No. Additive evidence metadata is enough. |
| Skill Matrix display change needed now? | No. Skill Matrix can continue using taskDepth/skillTags. |
| Suggested Next Practice change needed now? | No, unless it uses matching item counts that need family awareness. Codex should inspect. |
| Learner sees family name? | No. Learner sees normal task prompt. Family name is internal/debug. |
| How variants appear | The task feels like a normal B1-01 cloze/repair/Satzbau/production card, but surface wording may differ per attempt. |
| Given phrases | Visually fixed context, not answer blanks. German LTR preserved. |

---

## 11. QA / Test Plan for Later Codex Patch

| Test category | Required check | Pass condition |
|---|---|---|
| Code inspection | Inspect current content/registry/queue/evidence functions before editing. | Report exact files/functions inspected. |
| Syntax check | Parse inline script in `index.html`. | No syntax errors. |
| Browser smoke test | Load local app. | No console errors blocking use. |
| Content load test | Verify B1-01 variant family records load. | Family count and variant count match expected import. |
| Family selection test | Start B1-01 practice or QA route. | Family-based item can be selected. |
| Variant selection test | Same family can produce approved variants. | Active attempt has exact `variantId`. |
| Active attempt stability | Answer/feedback/continue does not reshuffle current variant. | Same variant stays stable. |
| Exact variant ID evidence test | Complete a variant attempt. | Evidence record includes `variantId`. |
| Parent family ID evidence test | Complete a variant attempt. | Evidence record includes `variantFamilyId`. |
| Sibling evidence cap/flag test | Attempt two same-family variants in same session if possible. | Later record is flagged/capped as sibling evidence; no mastery claim. |
| Luecke rendering/grading test | Render typed cloze variant. | Only `___` is graded; given phrase is not graded. |
| Satzbau rendering/grading test | Render chunk-order variant. | Chunks render and grade against intended order. |
| Reparatur rendering/grading test | Render repair variant. | Corrected sentence and micro-rule are variant-specific. |
| Produktion self-marking test | Render production variant. | Mark-practised only; no correctness evidence. |
| supportPolicy rendering test | Check visible cue/support behaviour. | Support is not mislabelled as correctness. |
| Given phrase not graded test | Use a bracketed/given phrase. | Evidence does not infer article/case from it. |
| Old item fallback test | Load legacy item without family metadata. | It still works normally. |
| Export/import compatibility test | Export after variant attempt and re-import. | Variant metadata preserved if present; old exports still import. |
| localStorage persistence test | Reload after attempt. | Existing progress/evidence keys preserved. |
| Multiple-choice shuffling regression | Run current B1 multiple-choice item. | Stable choice identity still works; no A/B/C dependency. |
| Arabic UI / German LTR smoke | Switch Arabic UI and run German variant. | German prompt/blank/given phrase remain LTR. |
| Responsive visual checks | 320×568, 390×844, 430×932, 768×1024, 1365×599, 1440×900. | No clipped prompt/input/buttons; HUD does not cover action. |

Do not claim tests passed unless actually run.

---

## 12. Version / Changelog Plan

Recommended label:

```txt
v0.80.3 — B1-01 Curated Variant Families
```

Rationale:

| Reason | Detail |
|---|---|
| Current version | v0.80.2 completed. |
| v0.81 reservation | v0.81 is planned for Cases and Articles Completion Pass. |
| Patch type | This is a B1-01 content-structure/rendering patch, not the v0.81 case/article patch. |
| Scope | Narrow enough for patch version. |

### Changelog draft

#### Added

- Added B1-01 Curated Variant Family support for selected B1-01 practice targets.
- Added static family records and static approved variants for B1-01 sentence-control practice.
- Added additive evidence metadata for exact variant identity and parent family identity where available.

#### Changed

- Selected B1-01 fixed cloze/Satzbau/repair/production items may rotate through approved sibling variants rather than always showing the same surface sentence.
- B1-01 variant attempts record exact variant context for QA/debug/export where supported.

#### Preserved

- Static app architecture.
- Existing storage keys.
- Export/import compatibility.
- Existing B1 evidence semantics.
- v0.80.2 multiple-choice shuffling safety.
- German LTR handling in Arabic UI.
- Production self-marking.
- Existing Case Trainer behaviour.

#### Not changed

- No backend.
- No runtime grammar generation.
- No runtime AI.
- No B1-02 content.
- No Genitive expansion.
- No new mastery/readiness labels.
- No broad scoring rewrite.

#### Known limitations

- Sibling evidence is flagged/capped conservatively; deeper learning-map interpretation can wait.
- Some old B1-01 items may remain as single canonical items until the full final B1-01 inventory is rebuilt.
- Correct-with-note/capitalisation handling depends on existing app support.

#### Testing required

- Syntax check, browser smoke, variant selection, evidence metadata, export/import, localStorage persistence, choice-shuffle regression, Arabic/German LTR, and responsive visual checks.

---

## 13. Risks / Decisions Needed Before Codex

| Decision / risk | Affected area | Why it matters | Recommended decision | Blocker status |
|---|---|---|---|---|
| Option A vs B | Data model/import design | Determines whether variants are normal items or family records. | Use Option B; fallback to A only if Codex inspection shows B is too broad. | not blocker |
| Replace vs supplement old B1-01 items | Learner-facing item pool | Supplementing bloats B1-01 and inflates narrow targets. | Replace/rotate selected old fixed items; keep notices separately. | blocker before Codex prompt |
| Where family records live | Content loading | Static app can use inline or static JS file. | Prefer new static content file if registry integration is simple; otherwise inline near B1 core data. | Codex can decide after inspection |
| Split into static JS file | Deployment/package shape | New file must be included in GitHub Pages package. | Prefer `content/b1-01-variant-families.js` if existing content-script pattern supports it. | Codex can decide after inspection |
| Same-session evidence cap representation | Progress honesty | Raw sibling attempts can inflate progress. | Additive fields: `siblingVariantGroup`, `sameSessionEvidenceCap`, `isSiblingVariantAttempt`. | blocker before implementation |
| Variant IDs in evidence records | Traceability | Needed to know exact rendered sentence. | Store both `variantId` and `variantFamilyId`. | blocker before implementation |
| Export/import field additions | Persistence | Old exports must still work. | Add fields inside records only; tolerate missing. | not blocker |
| Correct-with-note support | Capitalisation/fallback | Avoid false correctness or unfair rejection. | If supported, use as weak caveat; if not, exact-only for strong evidence. | Codex can decide after inspection |
| Route composition family vs variant | Queue behaviour | App may currently expect item IDs, not family IDs. | Prefer family selected as item, variant materialised into runtime current item. | Codex can decide after inspection |
| Version label | Release hygiene | Avoid colliding with planned v0.81. | Use `v0.80.3`. | not blocker |
| Learning Map / Skill Matrix display | UX | Could overcomplicate patch. | No display change now; evidence metadata only. | later enhancement |

---

## 14. Final Recommended Codex Scope

This is not a Codex prompt.

| Scope area | Recommendation |
|---|---|
| Narrow implementation goal | Implement B1-01 Curated Variant Families as static family records plus static approved variants, with exact variant evidence metadata and conservative sibling evidence flags. |
| Files Codex likely needs to inspect | `index.html`, current content files, README, changelog, AGENTS, current source brief/roadmap. |
| Files Codex may edit | `index.html`; optionally one new static content file under `content/`; README/changelog/test report. |
| Behaviours Codex must implement | Load family/variant records; select one approved variant per family attempt; render variants by task type; preserve active variant through feedback; write `variantFamilyId` and `variantId` to evidence; preserve legacy items. |
| Behaviours Codex must not change | Storage keys, export/import compatibility, scoring semantics, production self-marking, choice shuffling, B1/B2 separation, Case Trainer behaviour, visual redesign. |
| Tests Codex must run | Syntax, browser smoke, variant load/selection, evidence metadata, export/import, localStorage, choice-shuffle regression, production self-marking, Arabic/German LTR, responsive checks. |

Future Codex prompt should be narrow and should explicitly forbid implementing B1-02, the v0.81 Cases and Articles patch, runtime grammar generation, or a broad B1 content rewrite.

---

## 15. Final QA Checklist

| Check | Result |
|---|---|
| Import plan only. | Confirmed |
| No app code. | Confirmed |
| No app-ready JSON. | Confirmed |
| No Codex implementation prompt. | Confirmed |
| No import performed. | Confirmed |
| No B1-02 generated. | Confirmed |
| No new variants generated. | Confirmed |
| No new lesson/notice cards. | Confirmed |
| No source text copied. | Confirmed |
| No runtime generation. | Confirmed |
| No random noun/verb combinations. | Confirmed |
| No generated German morphology. | Confirmed |
| No B2 active content. | Confirmed |
| No Genitive. | Confirmed |
| No adjective-ending traps. | Confirmed |
| No subordinate clauses. | Confirmed |
| Sibling variants remain sibling evidence. | Confirmed |
| Given phrases are not treated as tested answers. | Confirmed |
| Production remains self-marked. | Confirmed |
| Existing storage keys preserved. | Confirmed |
| Export/import compatibility preserved in the plan. | Confirmed |
| German text remains LTR. | Confirmed |
| Plan is ready to become a later Codex implementation prompt. | Confirmed |

---

## 16. Final Verdict

`READY_FOR_CODEX_IMPLEMENTATION_PROMPT`

Exact next recommended action: create a narrow Codex implementation prompt for `v0.80.3 — B1-01 Curated Variant Families`, using Option B by default, requiring Codex to inspect current app files first and then implement static family records + static approved variants with additive evidence metadata only.
