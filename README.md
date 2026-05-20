\# OZMOSIS



OZMOSIS is a static, single-file German learning app focused on fast B1 test preparation.



It was formerly called Kasuskonsole and began as a German case/article trainer. The current priority is a personal B1 sprint tool based on uploaded course notes, with later room for B1 to B2 expansion.



\## Current Focus



The active development goal is:



Build the fastest useful personal B1 test-prep tool.



Current priority order:



1\. B1 landing/tool hub

2\. B1 content engine

3\. Connector Sprint

4\. Redemittel Sprint

5\. Wortschatz Sprint

6\. Writing/Speaking cards

7\. Today's B1 Sprint

8\. Weakness repair

9\. Later: full Leitner, import tools, B2 expansion



\## Current Known Version



Current working line:



\- v30-b1-sprint-landing-page

\- v31-b1-content-engine-lite

\- next: v32-b1-connector-sprint-bank



Known v31 state:



\- OZMOSIS landing/tool hub exists.

\- Lightweight B1 practice engine exists.

\- 24 seed B1 items exist across Grammar, Wortschatz, and Redemittel.

\- Today's B1 Sprint, Grammar, Wortschatz, and Redemittel open real practice rounds.

\- B1 progress persists under `ozmosis\_b1\_sprint\_progress\_v1`.

\- Existing Case Trainer, Options, Dev Tools, and localStorage compatibility are preserved.



\## Architecture



OZMOSIS is intentionally simple:



\- static single-file app

\- main deployed file: `index.html`

\- no backend

\- no framework

\- no build step

\- no database

\- no accounts

\- no analytics

\- no external API calls

\- no runtime AI generation

\- no dependencies unless explicitly approved



The app is designed to run directly in the browser and deploy through GitHub Pages.



\## Repository Structure



Recommended clean repo structure:



&#x20;   /

&#x20;   ├─ index.html

&#x20;   ├─ README.md

&#x20;   ├─ CHANGELOG.txt

&#x20;   ├─ AGENTS.md

&#x20;   ├─ .gitignore

&#x20;   ├─ content/

&#x20;   │  └─ ozmosis\_b1\_connector\_sprint\_v1\_bank.json

&#x20;   └─ docs/

&#x20;      ├─ Kasuskonsole Source Brief.md

&#x20;      ├─ OZMOSIS\_B1\_Test\_Sprint\_Pivot\_Production\_Plan.md

&#x20;      ├─ OZMOSIS\_Case\_Teaching\_Leitner\_Iteration\_Plan.md

&#x20;      └─ qa/

&#x20;         └─ ozmosis\_b1\_connector\_sprint\_v1\_qa\_protocol.md



Do not commit old version folders, screenshots, ZIP packages, generated test output, local progress exports, or development archive folders.



\## Running Locally



Open `index.html` directly in a modern browser.



No install step is required.



\## Deployment



The live app is served from GitHub Pages using the repo-root `index.html`.



Live app:



&#x20;   https://ozmills.github.io/kasuskonsole/



\## Development Rules



Before changing code, read:



\- AGENTS.md

\- CHANGELOG.txt

\- docs/Kasuskonsole Source Brief.md



For Codex work, always follow `AGENTS.md`.



Key rules:



\- Do not redesign unless explicitly asked.

\- Do not add dependencies.

\- Do not rewrite the app.

\- Do not change localStorage keys without migration.

\- Do not break export/import compatibility.

\- Do not claim tests passed unless they were actually run.

\- Keep German learning content LTR, including in Arabic UI.



\## B1 Content Rules



B1 practice items should be:



\- natural Hochdeutsch

\- B1-relevant

\- course/test relevant

\- single-target where possible

\- not artificially complex

\- not Genitiv unless explicitly enabled

\- not adjective-ending-focused unless specifically requested

\- not a hidden multi-skill trap



Connector banks should use structured variant families:



\- target rule

\- sibling variants

\- contrast variants

\- error-repair items

\- production cards



Do not generate random isolated examples.



\## Testing Expectations



Reports should distinguish between:



\- code inspection

\- syntax check

\- browser smoke test

\- responsive screenshot/visual test

\- manual visual inspection

\- localStorage persistence test

\- export/import test

\- Arabic RTL/LTR smoke

\- live GitHub Pages test



Responsive checks should include:



\- 320×568

\- 390×844

\- 430×932

\- 768×1024

\- 1365×599

\- 1440×900



Watch for:



\- HUD covering actions

\- clipped modals

\- unreachable buttons

\- nested scroll traps

\- desktop looking like an oversized phone

\- Arabic reversing German content

\- long labels breaking layout

\- weak focus states



\## Current Next Patch



Unless superseded, the next planned patch is:



v32-b1-connector-sprint-bank



Goal:



\- add structured B1 Connector Sprint under Grammar

\- support connector choice, word-order cloze, error repair, and production-card item types

\- preserve the existing v31 B1 engine and seed modes

\- extend B1 progress without wiping existing progress



Do not implement full Leitner, dashboards, AI grading, writing correction, speaking scoring, or unrelated content banks in this patch.



\## Notes



The broader long-term plan still includes Leitner, import tools, B2 expansion, stronger repair modes, and richer writing/speaking support. These are intentionally deferred until the B1 sprint baseline is useful.

