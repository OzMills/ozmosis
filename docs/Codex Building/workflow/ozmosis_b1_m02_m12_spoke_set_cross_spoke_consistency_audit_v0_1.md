# Ozmosis B1-02 to B1-12 Spoke Set — Cross-Spoke Consistency Audit

Status: Cross-spoke audit complete  
Input package: `B1-m02-m12.zip`  
Output file: `ozmosis_b1_m02_m12_spoke_set_cross_spoke_consistency_audit_v0_1.md`

## 1. Source Verification

| Source file/content | Available? | Used for | Reliability | Notes / caveats |
| --- | --- | --- | --- | --- |
| `B1-m02-m12.zip` | Yes | Complete spoke set | High | Contained 11 Markdown spokes plus macOS resource-fork files ignored for audit. |
| `ozmosis_b1_module_pipeline_core_v0_1.md` | Yes | Core pipeline rules | High | Controlling process source; requires row reconciliation, evidence safety, source safety, B1-12 deferral. |
| `OZMOSIS_SOURCE_BRIEF_v0.80.4.md` | Yes | Current app state | High | v0.80.4 app state: B1-01 at 14 families / 81 variants; static app; storage/export unchanged. |
| `OZMOSIS_DEVELOPMENT_ROADMAP_v0.80.4.md` | Yes | Deferred work and roadmap boundary | High | B1-02+, v0.81, Genitive, Satzi, spacing, runtime generation, and B2 are deferred. |
| `ozmosis_phase2_5_full_12_module_consistency_audit.md` | Yes | 12-module sequencing, batch sizing, B1-12 caution | High | Audit already said B1-12 should be generated late after prior IDs/reviewGroups exist. |
| Vocabulary/course PDFs | Available | Structural inspiration only | Medium / low for item text | Not used for copied item text in this audit. |

## 2. Spoke Presence Table

| Module | Expected file | Present? | Module title | Internal planning ID | Slug | Final verdict | Batch / state | Target families | Target IDs |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| B1-02 | ozmosis_b1_m02_appointments_callbacks_spoke_v0_1.md | Yes | Appointments / callbacks | b1_m02_appointments_callbacks | appointments-callbacks | SPOKE_READY_FOR_PIPELINE_CORE | 28–32 learner-facing pieces | 8 | 19 |
| B1-03 | ozmosis_b1_m03_job_search_offices_spoke_v0_1.md | Yes | Job search / offices | b1_m03_job_search_offices | job-search-offices | SPOKE_READY_FOR_PIPELINE_CORE | 32–36 learner-facing pieces | 9 | 30 |
| B1-04 | ozmosis_b1_m04_applications_spoke_v0_1.md | Yes | Applications | b1_m04_applications | applications | SPOKE_READY_FOR_PIPELINE_CORE | 30–36 learner-facing pieces | 10 | 32 |
| B1-05 | ozmosis_b1_m05_first_day_contract_basics_spoke_v0_1.md | Yes | First day / contract basics | b1_m05_first_day_contract_basics | first-day-contract-basics | SPOKE_READY_FOR_PIPELINE_CORE | 30–36 learner-facing pieces | 8 | 22 |
| B1-06 | ozmosis_b1_m06_sick_leave_spoke_v0_1.md | Yes | Sick leave | b1_m06_sick_leave | sick-leave | SPOKE_READY_FOR_PIPELINE_CORE | 30–36 learner-facing pieces | 8 | 23 |
| B1-07 | ozmosis_b1_m07_meetings_leave_requests_spoke_v0_1.md | Yes | Meetings / leave requests | b1_m07_meetings_leave_requests | meetings-leave-requests | SPOKE_READY_FOR_PIPELINE_CORE | 30–36 learner-facing pieces | 8 | 23 |
| B1-08 | ozmosis_b1_m08_orders_delivery_spoke_v0_1.md | Yes | Orders / delivery | b1_m08_orders_delivery | orders-delivery | SPOKE_READY_FOR_PIPELINE_CORE | 30–36 learner-facing pieces | 8 | 23 |
| B1-09 | ozmosis_b1_m09_complaints_customer_service_spoke_v0_1.md | Yes | Complaints / customer service | b1_m09_complaints_customer_service | complaints-customer-service | SPOKE_READY_FOR_PIPELINE_CORE | 28–34 learner-facing pieces | 8 | 22 |
| B1-10 | ozmosis_b1_m10_technical_problems_spoke_v0_1.md | Yes | Technical problems | b1_m10_technical_problems | technical-problems | SPOKE_READY_FOR_PIPELINE_CORE | 28–34 learner-facing pieces | 8 | 22 |
| B1-11 | ozmosis_b1_m11_colleague_feedback_conflict_spoke_v0_1.md | Yes | Colleague feedback / conflict | b1_m11_colleague_feedback_conflict | colleague-feedback-conflict | SPOKE_READY_FOR_PIPELINE_CORE | 26–32 learner-facing pieces | 8 | 23 |
| B1-12 | ozmosis_b1_m12_b1_review_consolidation_spoke_v0_1.md | Yes | B1 review / consolidation | b1_m12_b1_review_consolidation | b1-review-consolidation | DEFERRED_UNTIL_PRIOR_MODULES_EXIST | Planning shell only until B1-02 through B1-11 exist | 5 | 10 |

## 3. ID Consistency Audit

| Module | Module ID | Internal planning ID | Module slug | Target-family count | Target ID count | Spoke verdict |
| --- | --- | --- | --- | --- | --- | --- |
| B1-02 | pass | pass | pass | 8 | 19 | SPOKE_READY_FOR_PIPELINE_CORE |
| B1-03 | pass | pass | pass | 9 | 30 | SPOKE_READY_FOR_PIPELINE_CORE |
| B1-04 | pass | pass | pass | 10 | 32 | SPOKE_READY_FOR_PIPELINE_CORE |
| B1-05 | pass | pass | pass | 8 | 22 | SPOKE_READY_FOR_PIPELINE_CORE |
| B1-06 | pass | pass | pass | 8 | 23 | SPOKE_READY_FOR_PIPELINE_CORE |
| B1-07 | pass | pass | pass | 8 | 23 | SPOKE_READY_FOR_PIPELINE_CORE |
| B1-08 | pass | pass | pass | 8 | 23 | SPOKE_READY_FOR_PIPELINE_CORE |
| B1-09 | pass | pass | pass | 8 | 22 | SPOKE_READY_FOR_PIPELINE_CORE |
| B1-10 | pass | pass | pass | 8 | 22 | SPOKE_READY_FOR_PIPELINE_CORE |
| B1-11 | pass | pass | pass | 8 | 23 | SPOKE_READY_FOR_PIPELINE_CORE |
| B1-12 | pass | pass | pass | 5 | 10 | DEFERRED_UNTIL_PRIOR_MODULES_EXIST |

ID findings:

- No duplicate target-family IDs across the complete spoke set.
- No duplicate target IDs across the complete spoke set.
- B1-12 deliberately uses review-shell IDs (`TF-B1-12-REVIEW-*`) rather than normal LS-family IDs; keep this as a documented schema exception.
- B1-05 to B1-12 use valid IDs but their target-table formatting is less strict than B1-02 to B1-04 because IDs are not consistently wrapped in backticks. This is a formatting normalisation issue, not a schema collision.

## 4. Module Boundary Audit

| Module | Owned scope | Boundary result | Notes |
| --- | --- | --- | --- |
| B1-02 | Appointments/callbacks/counselling baseline | Pass | Explicitly excludes Jobcenter/admin, applications, sick leave, meetings/leave, complaints, and tech support. |
| B1-03 | Job search/offices/admin/document actions | Pass | Explicitly excludes applications/interviews, contracts, sick leave, orders, complaints, technical support, legal precision. |
| B1-04 | Applications/job adverts/CV basics/interview survival | Pass | Explicitly excludes contracts, first day, sick leave, leave requests, B2 cover-letter polish, auto-graded long production. |
| B1-05 | First day/contract survival/onboarding | Pass with caveat | `Anspruch auf` appears here and B1-07; acceptable only as phrase-level survival and must not become legal-rights teaching. |
| B1-06 | Sick leave/Krankmeldung/absence | Pass | Clearly separates sickness from holiday/leave and avoids medical/legal detail. |
| B1-07 | Meetings/leave requests/planning | Pass with caveat | `dass/ob` and leave-entitlement phrase work must stay short and controlled. |
| B1-08 | Orders/delivery/invoices/status | Pass with caveat | `bevor/nachdem/wenn` sequencing is useful but high-risk; keep first batch controlled. |
| B1-09 | Complaints/customer service | Pass | Clearly separates customer complaints from technical support and colleague conflict. |
| B1-10 | Technical problems/instructions | Pass with caveat | `wenn/damit/um zu` and separable verbs are high-risk; strict QA required. |
| B1-11 | Colleague feedback/conflict | Pass with caveat | Production/social correctness must stay self-marked; no HR/legal escalation. |
| B1-12 | Review/consolidation shell | Pass | Correctly deferred until earlier modules have stable IDs/reviewGroups. |

## 5. Sequence Audit

| Sequence check | Result | Reason |
| --- | --- | --- |
| B1-02 before B1-03 | Pass | B1-02 establishes appointments/callbacks before B1-03 office/admin scenarios reuse appointment and request language. |
| B1-03 before B1-04 | Pass | Office/document/action vocabulary precedes application-document and application-action work. |
| B1-04 before B1-05 | Pass | Application and interview survival precedes first-day/contract onboarding. |
| B1-05 before B1-06 | Pass | Workplace/employer context precedes sick-leave reporting. |
| B1-06 before B1-07 | Pass | Sick absence is separated before leave requests and meetings. |
| B1-08 before B1-09 | Pass | Orders/delivery baseline comes before complaints/customer service. |
| B1-09 before B1-10 | Pass | Customer complaint language is separated from technical troubleshooting. |
| B1-11 late placement | Pass | Feedback/conflict uses prior meeting/problem/complaint language but keeps HR/legal escalation out. |
| B1-12 last | Pass | Review shell only; no item generation until source modules are stable. |

## 6. Target-Family Collision Audit

| Scanned item | Total IDs found | Unique IDs | Status | Duplicates |
| --- | --- | --- | --- | --- |
| Target-family IDs scanned | 88 | 88 | Pass | None |
| Target IDs scanned | 249 | 249 | Pass | None |

### Target-family / target count by module

| Module | Target families | Target IDs | Spoke verdict |
| --- | --- | --- | --- |
| B1-02 | 8 | 19 | SPOKE_READY_FOR_PIPELINE_CORE |
| B1-03 | 9 | 30 | SPOKE_READY_FOR_PIPELINE_CORE |
| B1-04 | 10 | 32 | SPOKE_READY_FOR_PIPELINE_CORE |
| B1-05 | 8 | 22 | SPOKE_READY_FOR_PIPELINE_CORE |
| B1-06 | 8 | 23 | SPOKE_READY_FOR_PIPELINE_CORE |
| B1-07 | 8 | 23 | SPOKE_READY_FOR_PIPELINE_CORE |
| B1-08 | 8 | 23 | SPOKE_READY_FOR_PIPELINE_CORE |
| B1-09 | 8 | 22 | SPOKE_READY_FOR_PIPELINE_CORE |
| B1-10 | 8 | 22 | SPOKE_READY_FOR_PIPELINE_CORE |
| B1-11 | 8 | 23 | SPOKE_READY_FOR_PIPELINE_CORE |
| B1-12 | 5 | 10 | DEFERRED_UNTIL_PRIOR_MODULES_EXIST |

## 7. Evidence/Review Audit

| Evidence/review area | Expected rule | Result | Notes |
| --- | --- | --- | --- |
| auto_core | Used for fixed, single-target recall/repair/Satzbau/Umformen | Pass | Several high-risk modules explicitly downgrade supported or ambiguous items. |
| auto_supported | Used for support-visible or weak/baseline items | Pass | B1-03/B1-04/B1-05+ consistently use this for vocabulary/support-heavy targets. |
| self_marked_production | Production cards only | Pass | Every spoke’s production section says no auto-grading / no correctness evidence. |
| recognition | Weaker evidence | Pass | Recognition-heavy domains are repeatedly marked weak/conditional. |
| sibling evidence | Variant families grouped | Pass | Core and spokes preserve sibling evidence caveats. |
| B1 readiness claims | Forbidden | Pass | No spoke claims module completion proves external B1 readiness. |

## 8. SupportPolicy/SupportPresentation Audit

| Support area | Result | Notes |
| --- | --- | --- |
| supportPolicy/supportPresentation separation | Pass with caveat | Pipeline core locks separation; spokes mostly discuss support conceptually, but final schema mapping must explicitly assign both fields. |
| English support | Pass | Spokes prefer German-first where possible and mark English/visible support as weaker evidence. |
| Given phrases | Pass | B1-02/B1-03/B1-05/B1-10 explicitly warn not to infer case/article control from given phrases. |
| Production support | Pass | Checklist/model/phrase bank support is repeatedly tied to self-marked production only. |

## 9. Batch Size Audit

| Module | Recommended first-batch size / state | Result | Notes |
| --- | --- | --- | --- |
| B1-02 | 28–32 learner-facing pieces | OK | Within sensible first-batch range. |
| B1-03 | 32–36 learner-facing pieces | OK | Within sensible first-batch range. |
| B1-04 | 30–36 learner-facing pieces | OK | High-risk application module stays within 30–36. |
| B1-05 | 30–36 learner-facing pieces | OK | Within sensible first-batch range. |
| B1-06 | 30–36 learner-facing pieces | OK | Within sensible first-batch range. |
| B1-07 | 30–36 learner-facing pieces | OK | Within sensible first-batch range. |
| B1-08 | 30–36 learner-facing pieces | OK | Within sensible first-batch range. |
| B1-09 | 28–34 learner-facing pieces | OK | Reduced to 28–34 due complaint/technical risk. |
| B1-10 | 28–34 learner-facing pieces | OK | Reduced to 28–34 due complaint/technical risk. |
| B1-11 | 26–32 learner-facing pieces | OK | Reduced to 26–32 due social/production risk. |
| B1-12 | Planning shell only until B1-02 through B1-11 exist | Deferred shell | Correctly no item-generation batch yet. |

## 10. B1-12 Deferred Review Audit

| Check | Result | Notes |
| --- | --- | --- |
| B1-12 item generation deferred | Pass | B1-12 ends with `DEFERRED_UNTIL_PRIOR_MODULES_EXIST`. |
| B1-12 is review shell only | Pass | Spoke contains planning/review shell targets, not final learner-facing review items. |
| Requires B1-02 to B1-11 stable IDs | Pass | Spoke explicitly depends on stable item IDs, target IDs, reviewGroups, and evidence groups. |
| No readiness/certification score | Pass | No pass/fail or certification-readiness claim. |
| No new B2 content | Pass | B2 is kept as future architecture only. |

## 11. Risk Ledger

| Severity | Risk | Impact | Mitigation |
| --- | --- | --- | --- |
| Minor | B1-05 to B1-12 target IDs are not backticked in the target table unlike B1-02 to B1-04. | Style/format inconsistency only; IDs parse cleanly. | Normalise formatting during spoke packaging or schema mapping. |
| Minor | B1-12 uses `TF-B1-12-REVIEW-*` rather than the `TF-B1-12-LSxx-*` family pattern. | Acceptable because B1-12 is a review shell, but schema mapping must support review-family IDs. | Keep as deliberate review-shell exception. |
| Moderate | B1-05 and B1-07 both mention `Anspruch auf`. | Potential legal/contract/leave overlap. | Keep phrase-level only; B1-05 contract survival, B1-07 leave/planning recognition; no legal-rights evidence. |
| Moderate | B1-08 and B1-10 introduce connector-heavy targets (`bevor/nachdem/wenn`, `damit/um...zu`). | Could overload early B1 if drafted too broadly. | First draft must use very short, single-target items and cut aggressively. |
| Moderate | B1-11 social/conflict production is subjective. | False social correctness risk. | Keep production self-marked or external-review-future only. |
| Minor | B1-05 to B1-12 were generated from a stronger template and are slightly less source-specific than B1-02 to B1-04. | Not a blocker, but QA should be stricter on module-specific naturalness. | Use source verification and human/naturalness QA at draft stage. |

## 12. Required Revisions

| Timing | Revision | Action |
| --- | --- | --- |
| Before full pipeline run | None required | No blocking revision needed. |
| During schema mapping | Normalise target-ID table formatting | Backtick or otherwise standardise IDs across B1-02 to B1-12. |
| During schema mapping | Confirm B1-12 review-family ID exception | Document `REVIEW` family pattern as deliberate. |
| During B1-05/B1-07 drafting | Guard `Anspruch auf` overlap | Use phrase-level survival only; no legal evidence. |
| During B1-08/B1-10 drafting | Strict connector QA | Do not let connector families become multi-skill traps. |
| During B1-11 drafting | Production/external-review boundary | No local correctness for conflict production. |

## 13. Clean Spoke Set Summary

| Module | Title | Target families | Target IDs | Batch / state | Verdict | Audit status |
| --- | --- | --- | --- | --- | --- | --- |
| B1-02 | Appointments / callbacks | 8 | 19 | 28–32 learner-facing pieces | SPOKE_READY_FOR_PIPELINE_CORE | Ready |
| B1-03 | Job search / offices | 9 | 30 | 32–36 learner-facing pieces | SPOKE_READY_FOR_PIPELINE_CORE | Ready |
| B1-04 | Applications | 10 | 32 | 30–36 learner-facing pieces | SPOKE_READY_FOR_PIPELINE_CORE | Ready |
| B1-05 | First day / contract basics | 8 | 22 | 30–36 learner-facing pieces | SPOKE_READY_FOR_PIPELINE_CORE | Ready |
| B1-06 | Sick leave | 8 | 23 | 30–36 learner-facing pieces | SPOKE_READY_FOR_PIPELINE_CORE | Ready |
| B1-07 | Meetings / leave requests | 8 | 23 | 30–36 learner-facing pieces | SPOKE_READY_FOR_PIPELINE_CORE | Ready |
| B1-08 | Orders / delivery | 8 | 23 | 30–36 learner-facing pieces | SPOKE_READY_FOR_PIPELINE_CORE | Ready |
| B1-09 | Complaints / customer service | 8 | 22 | 28–34 learner-facing pieces | SPOKE_READY_FOR_PIPELINE_CORE | Ready |
| B1-10 | Technical problems | 8 | 22 | 28–34 learner-facing pieces | SPOKE_READY_FOR_PIPELINE_CORE | Ready |
| B1-11 | Colleague feedback / conflict | 8 | 23 | 26–32 learner-facing pieces | SPOKE_READY_FOR_PIPELINE_CORE | Ready |
| B1-12 | B1 review / consolidation | 5 | 10 | Planning shell only until B1-02 through B1-11 exist | DEFERRED_UNTIL_PRIOR_MODULES_EXIST | Deferred shell OK |

## 14. Final Readiness Checklist

| Check | Status |
| --- | --- |
| All spokes present | Pass |
| Module IDs consistent | Pass |
| Internal planning IDs consistent | Pass |
| Module slugs consistent | Pass |
| Target-family ID patterns usable | Pass with B1-12 review-shell caveat |
| No duplicate target-family IDs | Pass |
| No duplicate target IDs | Pass |
| No module-boundary drift | Pass with minor caveats |
| No B2 active content | Pass |
| No copied source text indicated | Pass |
| No unsafe evidence inflation | Pass with draft-stage QA caveats |
| No production correctness | Pass |
| No premature B1-12 item generation | Pass |
| No unsupported grammar targets | Pass with strict B1-08/B1-10 connector caveat |
| supportPolicy/supportPresentation separation | Pass in core; must be explicit in schema mapping |
| Row reconciliation readiness | Pass |
| Schema-mapping readiness | Pass with formatting normalisation |
| Import-planning readiness | Pass after draft/QA/schema stages |
| Batch sizes sensible | Pass |
| Sequencing sensible | Pass |

## 15. Final Verdict

`SPOKES_READY_WITH_MINOR_CAVEATS`

Exact next recommended action:

Run the **B1-02 to B1-12 Full Staged Content Pipeline Run** only with these limits:

1. Generate B1-02 through B1-11 in order.
2. Keep B1-12 as a planning/review shell until B1-02 through B1-11 have stable item IDs, target IDs, reviewGroups, and evidence groups.
3. Normalise target-ID formatting during the first schema-mapping stage.
4. Treat B1-08/B1-10 connector targets and B1-11 production as high-QA-pressure areas.
5. Do not proceed to Codex implementation until each module has draft, QA, row reconciliation, schema mapping, and import planning.
