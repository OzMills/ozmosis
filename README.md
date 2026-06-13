# Ozmosis

Ozmosis is a browser-based German learning app for practical B1-level practice. It helps learners practise grammar, sentence structure, connectors, cases, vocabulary, Redemittel, sentence repair, and short self-marked production through focused exercises, local progress evidence, and cautious practice guidance.

## What Ozmosis is for

Ozmosis is designed to help German learners move from recognising grammar patterns to using them actively.

It focuses on:

- practising realistic A2-to-B1 and B1 German sentence patterns;
- building confidence through short, focused practice sessions;
- helping learners notice areas where evidence is still thin;
- encouraging retries, review, and repair where the current flow supports them;
- tracking learning evidence rather than treating one answer as the whole story.

## Who it is for

Ozmosis is for German learners working around the A2 to B1 level, especially learners who need repeated practice with:

- cases and articles;
- word order;
- connectors;
- cloze exercises;
- sentence repair;
- practical vocabulary;
- Redemittel for emails, appointments, requests, complaints, and workplace situations;
- short written or spoken production that the learner checks themselves.

It is especially useful for learners who understand some German grammar in theory but need more practice using it quickly, accurately, and independently.

## How to use the app

A typical practice session works like this:

1. Open Ozmosis in the browser.
2. Choose **Recommended next**, **Today's B1 Sprint**, **Diagnostic Sprint**, **Grammar**, **Wortschatz**, **Redemittel**, or **Case Trainer**.
3. Read the German prompt carefully.
4. Type, select, repair, or build the answer depending on the task type.
5. Use support such as hints, translation, useful phrases, or model answers where the task offers them.
6. Submit the answer.
7. Read the feedback.
8. Choose a confidence button when the app asks: guessed, unsure, or knew it.
9. Continue, retry, review, or open **Learning Map** to decide what to practise next.

Ozmosis is designed for short, repeated sessions rather than long study marathons.

## Main features

### Recommended next

The home screen can suggest a next practice route from the current local evidence. The wording is cautious: it points to a useful route, not a final judgement.

### Practice sprints

**Today's B1 Sprint** gives a compact mixed-practice session. **Diagnostic Sprint** gives an early evidence snapshot and can help the Learning Map become more useful.

### B1 module structure

Ozmosis organises practice around B1 routes, modules, and categories. Current visible module routes include areas such as getting started, appointments and callbacks, job search and offices, applications, sick leave, meetings, orders, complaints, technical problems, and colleague feedback.

### Grammar and case practice

The **Grammar** route includes mixed grammar practice, B1 module practice, connector drills, repair tasks, and sentence-structure work. **Case Trainer Setup** provides article and case drills, including optional genitive practice.

### Connector practice

Connector exercises help learners practise structures such as **weil**, **denn**, **deshalb**, **obwohl**, **trotzdem**, **damit**, **um ... zu**, **wenn**, **als**, **bevor**, and **nachdem**.

### Cloze typing

Cloze tasks ask learners to type missing words or phrases into a German sentence.

### Sentence repair

Repair tasks ask learners to find or fix German sentence errors. Repair evidence is useful, but it does not automatically prove free production.

### Wortschatz

The **Wortschatz** route focuses on practical vocabulary, including work, illness, and administration.

### Redemittel

The **Redemittel** route practises useful phrases for formal email, appointments, requests, complaints, applications, illness or absence, and polite requests.

### Production cards

**Production Cards** ask learners to produce their own German. They are self-marked: the learner can compare their answer with support or an example answer, but the app does not mark free writing or speaking as right or wrong.

### Confidence tracking

Some practice flows ask how confident the learner was. This helps separate a lucky guess from an answer the learner felt secure about.

### Retry and review flow

Some flows support retry, repair, or review using existing practice items. **Review practice** appears only when the current save has suitable older auto-graded items available.

### Learning Map and B1 Path progress

**Learning Map** shows local progress evidence, cautious state labels, recommendation context, and areas where more evidence is needed. **B1 Path** and category progress make practice progress visible without treating stars or bars as final proof.

### Local progress storage

Progress is stored locally in the browser. Learners can continue without an account, but progress is tied to that browser and site data.

### Import and export

**Export Save** downloads an Ozmosis save file. **Import Save** restores a valid save file after checking it. This is the safest way to move progress between browsers or protect progress before clearing browser data.

### Settings and development tools

**Settings** contains language, support, pace, data, and save-file controls. **Tester Notes / Known Bugs** and **Dev Tools** are available for QA and development checks.

## How progress works

Ozmosis tracks progress through learning evidence, not just one-off correct answers.

This means:

- automatically checked tasks can show whether an answer was correct;
- self-marked production tasks can count as practice evidence without becoming correctness evidence;
- repeated attempts matter more than a single lucky answer;
- confidence can be tracked separately from correctness;
- support use can affect how cautiously the app reads an attempt;
- older auto-graded items can become available for optional review;
- progress is stored locally in the browser if local storage is enabled.

The goal is not just to finish exercises. The goal is to build more accurate and independent German production.

## Running the app

Ozmosis is a static browser app. The main app file is:

```text
index.html
```

There is no backend, account system, package install, or build step required for normal use.

For local testing, run a simple static server from the repository folder:

```bash
python -m http.server
```

Then open the local address shown in the terminal, usually:

```text
http://localhost:8000/
```

Opening `index.html` directly may work in some browsers, but a local static server is safer because the app uses separate content files.

## Project status

Ozmosis is actively evolving. This README describes the current form of the app, not the full development history.

Current app version in `index.html`:

```text
v0.80.14.16 - Export Save / Import Save File Workflow
```

The current active scope is B1-focused German practice. Planned work should not be read as current app behaviour until it appears in the app.

## Version history

For version history, see:

```text
CHANGELOG-FULL-OZMOSIS.txt
```
