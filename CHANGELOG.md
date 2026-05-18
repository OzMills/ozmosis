# Changelog

## v25 — Options simplification

- Simplified the open setup card to:
  - `OPTIONS`
  - `LEARNING STYLE`
    - `In Context [Default]`
    - `Out of Context`
    - `Mixed`
  - `ARTICLES TO PRACTICE`
    - `All [Default]`
    - `DER`
    - `EIN`
    - `KEIN`
- Removed excessive helper paragraphs from the primary options card.
- Made `In Context [Default]` the fresh-session default so the visible label matches app behaviour.
- Responsive screenshot checks passed at 390×844, 430×932, 768×1024, 932×430, 1365×599, and 1440×900. :contentReference[oaicite:1]{index=1}

## v24 — Language selector clarity

- Added a labelled language panel with an `Aa` language cue and `SPRACHE`.
- Language buttons show full names when space allows:
  - English
  - Türkçe
  - العربية
  - 中文
  - Українська
- Compact layouts keep short language codes to avoid crowding the header.
- Screenshot-tested across phone, tablet, and laptop-like viewports. :contentReference[oaicite:2]{index=2}

## v23 — Plain-language setup options

- Renamed setup controls into more learner-facing language:
  - `Task type` → `Practice style`
  - `Table drill` → `Article table`
  - `Gap drill` → `Sentence gaps`
  - `Mixed` → `Both`
  - `Article type` → `Articles to practise`
  - `Mixed articles` → `All article types`
  - `DER/EIN/KEIN` → `DER words / EIN words / KEIN words`
- Added short helper text under the two main dropdowns.
- Screenshot-tested across mobile and desktop sizes. :contentReference[oaicite:3]{index=3}

## v22 — Shorter New Practice copy

- Replaced the top-card copy with:
  - `New Practice`
  - `Choose a drill.`
- Updated the same short copy across Turkish, Arabic, Chinese, and Ukrainian.
- Slightly reduced hero-card padding and type scale to save vertical space.
- Screenshot-tested across 390×844, 430×932, 768×1024, 932×430, 1365×599, and 1440×900. :contentReference[oaicite:4]{index=4}

## v21 — Start button placement

- Moved the Start button higher in the setup flow.
- On vertical screens, Start now appears above optional sections.
- On wide screens, Start appears high in the right-hand setup panel.
- Screenshot-tested on phone, tablet, landscape, laptop, and desktop sizes. :contentReference[oaicite:5]{index=5}

## v20 — Start menu accordions

- Reworked the start menu into accordion-style sections:
  - `Practice` open by default
  - `Genitive` collapsed unless Genitiv is already enabled
  - `Support & pace` collapsed by default
- Kept language selection outside the accordions because it affects the whole interface.
- Preserved the neon console style while reducing setup-screen overload. :contentReference[oaicite:6]{index=6}

## v19 — Responsive layout tuning

- Added a responsive tuning layer.
- Wide and short laptop screens now use a broader two-column setup layout instead of a large centred phone-like panel.
- Tall desktop screens also use the wider layout.
- Added phone-layout guards against horizontal clipping.
- Screenshot-tested at 390×844, 430×932, 768×1024, 834×1194, 932×430, 1024×768, 1365×599, 1440×900, and 1920×1080. :contentReference[oaicite:7]{index=7}

## v18 — Genitiv options

- Added Genitiv options under a dedicated Genitiv heading:
  - Table row
  - Basic ownership clozes
  - Written preposition clozes
- Added a small help button with examples for each Genitiv style.
- Added the first Genitiv cloze bank.
- Kept Genitiv off by default.
- Confirmed Genitiv table and cloze content only appears when enabled. :contentReference[oaicite:8]{index=8}
