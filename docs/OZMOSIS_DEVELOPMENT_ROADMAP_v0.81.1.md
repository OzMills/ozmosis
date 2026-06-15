# Ozmosis Development Roadmap v0.81.1 - Cases & Articles Acceptance / Phase 2.5 Readiness

## Completed In v0.81.1

- Accepted the v0.81 Cases & Articles route through browser/DOM automation.
- Verified one real Cases & Articles item can be completed and records evidence.
- Verified Case Trainer remains separate.
- Verified route isolation, Settings/Data save controls, responsive smoke, and Arabic/LTR smoke.
- Created the Phase 2.5 normalisation addendum v0.2.
- Created the B1-01 extension survival audit.
- Updated the feature register handoff.

## B1-01 Status

Audit status:

`SURVIVED_WITH_METADATA_GAPS`

The B1-01 runtime bank is present and routeable, with stable IDs and no duplicate runtime IDs. Metadata gaps and review-flagged rows remain. Those gaps are non-blocking for v0.82, but must be handled before any B1-01 completion claim.

## Current Handoff

Next implementation patch:

`v0.82 - Prepositions Completion Pass`

v0.82 may start because:

- v0.81 acceptance passed by route interaction;
- Phase 2.5 addendum is complete;
- B1-01 survival audit is complete with non-blocking findings;
- save/import, storage keys, route isolation, and Case Trainer were preserved.

## Still Locked

- Word Order Completion Pass remains locked until after v0.82.
- Connectors Completion Pass remains locked until after Word Order.
- Satzi remains planning-only.
- B2/CAT18 implementation remains locked.
- Genitive normal-route expansion remains locked unless separately scoped.
- B1-01 cleanup remains a separate future metadata repair patch.

Refer to `docs/OZMOSIS_FEATURE_REGISTER_CURRENT.md` before starting the next feature.
