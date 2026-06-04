# Ozmosis B1-04 — Codex Import Plan v0.1

Module: B1-04 — Applications  
Internal planning ID: `b1_m04_applications`  
Status: import plan only. No Codex implementation prompt and no app code.

## 1. Source Verification
| Source | Available? | Used for | Reliability | Notes |
| --- | --- | --- | --- | --- |
| ozmosis_b1_m04_applications_schema_mapping_v0_1.md | Yes | Controlling schema mapping | High | Import-planning source. |
| ozmosis_b1_m04_applications_final_inventory_v0_1.md | Yes | Row counts / clean inventory | High | No row discrepancies. |
| v0.80.4 app/source brief | Yes | Architecture constraints | High | Static app; storage/export unchanged. |
| Pipeline core | Yes | Import-plan guardrails | High | No Codex prompt yet. |

## 2. Executive Import Plan Verdict

`READY_FOR_B1_04_CODEX_IMPLEMENTATION_PROMPT`

A future Codex implementation prompt can be written after user approval. This file does not write that prompt.


## 3. Version Recommendation
| Candidate version | Recommendation | Reason |
| --- | --- | --- |
| sequential patch for B1-04 | Use when implementing this module | Small, reversible module import. |
| v0.81 | Do not use by default | Reserved unless user supersedes roadmap. |
| single giant import | Reject | Too risky for route/storage/evidence testing. |

## 4. Current App Architecture Assumptions To Verify
| Area | Codex must inspect | Stop if unresolved? |
| --- | --- | --- |
| App source | repo root index.html and content directory | Yes |
| B1 module registry | whether B1-04 route/module exists | Yes |
| Content shape | current static content files | Yes |
| Evidence | item/family ID storage and export | Yes |
| localStorage | protected keys | Yes |
| Renderers | task-type support | Yes |
| Sprints | Today/Diagnostic sampling | Document behaviour |

## 5. Import Strategy Decision
Recommended: static module content records following current app conventions. No runtime generation, dynamic morphology, or app redesign.


## 6. Import Scope
| Component | Count / status |
| --- | --- |
| Clean rows to import | 26 |
| Variant-family candidates | 3 |
| Notice/concept cards | 3 |
| Self-marked production cards | 2 |
| Cut/deferred rows | 0 |

## 7. Content Records To Import
| itemId | taskType | targetFamilyId | evidenceType | import note |
| --- | --- | --- | --- | --- |
| draft_b1_04_001 | notice | TF-B1-04-LS05-01 | excluded | import only after current app inspection and route QA |
| draft_b1_04_002 | notice | TF-B1-04-LS08-02 | excluded | import only after current app inspection and route QA |
| draft_b1_04_003 | notice | TF-B1-04-LS10-01 | excluded | import only after current app inspection and route QA |
| draft_b1_04_004 | Auswahl | TF-B1-04-LS08-01 | auto_supported | import only after current app inspection and route QA |
| draft_b1_04_005 | Auswahl | TF-B1-04-LS08-02 | auto_supported | import only after current app inspection and route QA |
| draft_b1_04_006 | Auswahl | TF-B1-04-LS08-02 | auto_supported | import only after current app inspection and route QA |
| draft_b1_04_007 | Luecke | TF-B1-04-LS05-01 | auto_core | import only after current app inspection and route QA |
| draft_b1_04_008 | Luecke | TF-B1-04-LS05-01 | auto_core | import only after current app inspection and route QA |
| draft_b1_04_009 | Luecke | TF-B1-04-LS05-01 | auto_core | import only after current app inspection and route QA |
| draft_b1_04_010 | Luecke | TF-B1-04-LS04-01 | auto_core | import only after current app inspection and route QA |
| draft_b1_04_011 | Luecke | TF-B1-04-LS04-01 | auto_core | import only after current app inspection and route QA |
| draft_b1_04_012 | Luecke | TF-B1-04-LS07-01 | auto_core | import only after current app inspection and route QA |
| draft_b1_04_013 | Luecke | TF-B1-04-LS03-01 | auto_core | import only after current app inspection and route QA |
| draft_b1_04_014 | Satzbau | TF-B1-04-LS05-01 | auto_core | import only after current app inspection and route QA |
| draft_b1_04_015 | Satzbau | TF-B1-04-LS04-01 | auto_core | import only after current app inspection and route QA |
| draft_b1_04_016 | Satzbau | TF-B1-04-LS07-02 | auto_core | import only after current app inspection and route QA |
| draft_b1_04_017 | Reparatur | TF-B1-04-LS05-01 | auto_core | import only after current app inspection and route QA |
| draft_b1_04_018 | Reparatur | TF-B1-04-LS05-01 | auto_supported | import only after current app inspection and route QA |
| draft_b1_04_019 | Reparatur | TF-B1-04-LS04-01 | auto_core | import only after current app inspection and route QA |
| draft_b1_04_020 | Reparatur | TF-B1-04-LS04-01 | auto_supported | import only after current app inspection and route QA |
| draft_b1_04_021 | Kontrast | TF-B1-04-LS08-02 | auto_supported | import only after current app inspection and route QA |
| draft_b1_04_022 | Kontrast | TF-B1-04-LS05-01 | auto_supported | import only after current app inspection and route QA |
| draft_b1_04_023 | Kontrast | TF-B1-04-LS04-01 | auto_supported | import only after current app inspection and route QA |
| draft_b1_04_024 | Umformen | TF-B1-04-LS07-01 | auto_core | import only after current app inspection and route QA |
| draft_b1_04_025 | Produktion | TF-B1-04-LS10-01 | self_marked_production | import only after current app inspection and route QA |
| draft_b1_04_026 | Produktion | TF-B1-04-LS10-01 | self_marked_production | import only after current app inspection and route QA |

## 8. Records To Exclude
No QA-cut records are present in the clean inventory. Do not import any future cut/deferred rows if later QA changes this.


## 9. Mapping Decisions For Codex
| Decision area | Recommended import decision | Blocker? |
| --- | --- | --- |
| Route placement | Add to B1-04 module practice route first. | No |
| Mixed sprint sampling | Exclude from mixed sprints until route QA passes unless safe gating exists. | No |
| Storage/export | Additive only; no key changes. | Yes |
| Evidence | Preserve evidenceType and production self-marking. | Yes |
| Variant families | Preserve grouping if implemented; sibling evidence only. | No |
| Source text | Original text only; no textbook import. | Yes |

## 10. Data Shape Requirements
Use existing app field names. Preserve moduleId, targetFamilyId, targetId, taskType, answer/evidence/support/review metadata, and production self-marking semantics.


## 11. Evidence / Review Safety Requirements
Production remains self-marked; notice cards are excluded; recognition/support-heavy rows are not strong mastery evidence; no readiness claims.


## 12. Route / Sampling Plan
First import should prioritise B1-04 module practice route. Do not flood Today’s B1 Sprint. Do not create scheduler/spacing logic in this patch.


## 13. Test Plan For Implementation Prompt
| Test area | Required result |
| --- | --- |
| Syntax/static validation | No syntax errors |
| Content count gate | 26 clean records present |
| ID gate | No duplicate/malformed IDs |
| Route smoke | B1-04 route starts |
| Renderer smoke | Each task type renders |
| Export/import | Evidence survives |
| Storage | Protected keys unchanged |
| RTL/LTR | German remains LTR |
| Responsive | standard viewports checked if browser available |

## 14. Documentation / Changelog Plan
Create/update versioned docs for the future module import patch. Do not claim live deployment unless actually tested.


## 15. Implementation Prompt Readiness Checklist
| Check | Status |
| --- | --- |
| schema mapping ready | Pass |
| row reconciliation clean | Pass |
| version decision proposed | Pass |
| tests defined | Pass |
| storage constraints preserved | Pass |
| no Codex prompt written yet | Pass |

## 16. Final Verdict

`READY_FOR_B1_04_CODEX_IMPLEMENTATION_PROMPT`

Exact next recommended action: after user approval, write a narrow Codex implementation prompt for B1-04 only.
