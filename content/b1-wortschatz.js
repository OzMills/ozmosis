(function(){
  window.OZMOSIS_CONTENT = window.OZMOSIS_CONTENT || {};
  window.OZMOSIS_CONTENT.b1Wortschatz = [
  {
    "id": "b1_vocab_termin_001",
    "status": "active",
    "skill": "wortschatz",
    "topic": "appointments",
    "subtopic": "arranging appointments",
    "target": "der Termin",
    "type": "typed_cloze",
    "prompt_de": "Ich möchte einen ___ vereinbaren.",
    "answer": "Termin",
    "accepted": [
      "Termin"
    ],
    "translation_en": "I would like to arrange an appointment.",
    "choices": [],
    "correct_choice": "",
    "micro_rule": "der Termin = appointment; common phrase: einen Termin vereinbaren.",
    "difficulty": "easy",
    "family": "termin",
    "tags": [
      "appointment",
      "collocation",
      "formal_request"
    ]
  },
  {
    "id": "b1_vocab_termin_002",
    "status": "active",
    "skill": "wortschatz",
    "topic": "appointments",
    "subtopic": "cancelling appointments",
    "target": "einen Termin absagen",
    "type": "typed_cloze",
    "prompt_de": "Leider muss ich den Termin ___.",
    "answer": "absagen",
    "accepted": [
      "absagen"
    ],
    "translation_en": "Unfortunately, I have to cancel the appointment.",
    "choices": [],
    "correct_choice": "",
    "micro_rule": "einen Termin absagen = to cancel an appointment.",
    "difficulty": "medium",
    "family": "termin",
    "tags": [
      "appointment",
      "verb_collocation",
      "absence"
    ]
  },
  {
    "id": "b1_vocab_termin_003",
    "status": "active",
    "skill": "wortschatz",
    "topic": "appointments",
    "subtopic": "rescheduling",
    "target": "einen Termin verschieben",
    "type": "phrase_choice",
    "prompt_de": "Sie können morgen nicht. Welche Formulierung verschiebt den Termin?",
    "answer": "Könnten wir den Termin verschieben?",
    "accepted": [
      "Könnten wir den Termin verschieben?"
    ],
    "translation_en": "Which phrase fits if you want to change an appointment?",
    "learnerCue": "Which phrase fits if you want to change an appointment?",
    "choices": [
      "Könnten wir den Termin verschieben?",
      "Könnten wir den Termin absagen?",
      "Könnten wir einen neuen Termin vereinbaren?"
    ],
    "correct_choice": "Könnten wir den Termin verschieben?",
    "micro_rule": "„Verschieben“ means moving the appointment to another time.",
    "difficulty": "medium",
    "family": "termin",
    "tags": [
      "appointment",
      "phrase_choice",
      "polite_request"
    ],
    "supportVisibility": "scenario_visible"
  },
  {
    "id": "b1_vocab_termin_004",
    "status": "active",
    "skill": "wortschatz",
    "topic": "appointments",
    "subtopic": "collocation repair",
    "target": "einen Termin vereinbaren",
    "type": "phrase_choice",
    "prompt_de": "Welche Form ist in Praxis/Büro standardsprachlich besser?",
    "answer": "Ich vereinbare einen Termin beim Arzt.",
    "accepted": [
      "Ich vereinbare einen Termin beim Arzt."
    ],
    "translation_en": "Correct: I make an appointment at the doctor.",
    "choices": [
      "Ich mache einen Termin beim Arzt.",
      "Ich vereinbare einen Termin beim Arzt.",
      "Ich bekomme einen Termin beim Arzt."
    ],
    "correct_choice": "Ich vereinbare einen Termin beim Arzt.",
    "micro_rule": "„Einen Termin vereinbaren“ is the standard phrase; „machen“ should not be marked as a simple grammar error.",
    "difficulty": "hard_b1",
    "family": "termin",
    "tags": [
      "appointment",
      "error_repair",
      "collocation"
    ],
    "supportVisibility": "scenario_visible"
  },
  {
    "id": "b1_vocab_termin_005",
    "status": "active",
    "skill": "wortschatz",
    "topic": "appointments",
    "subtopic": "production",
    "target": "Termin",
    "type": "production_card",
    "prompt_de": "Schreibe einen höflichen Satz: Du möchtest einen Termin verschieben.",
    "answer": "",
    "accepted": [],
    "translation_en": "Write a polite sentence: You want to reschedule an appointment.",
    "choices": [],
    "correct_choice": "",
    "micro_rule": "Use Könnten wir ...? for a polite request.",
    "difficulty": "medium",
    "family": "termin",
    "tags": [
      "appointment",
      "production",
      "polite_request"
    ],
    "useful_phrases": [
      "Könnten wir den Termin bitte verschieben?",
      "Leider kann ich an diesem Tag nicht.",
      "Hätten Sie einen anderen Termin frei?",
      "Am ... hätte ich Zeit.",
      "Vielen Dank für Ihr Verständnis."
    ],
    "checklist": [
      "Polite request",
      "Mentions Termin",
      "Clear reason or alternative"
    ],
    "model_answer": "Könnten wir den Termin bitte verschieben? Leider kann ich an diesem Tag nicht. Am Montag hätte ich Zeit."
  },
  {
    "id": "b1_vocab_bestaetigung_001",
    "status": "active",
    "skill": "wortschatz",
    "topic": "office_admin",
    "subtopic": "confirmation",
    "target": "die Bestätigung",
    "type": "typed_cloze",
    "prompt_de": "Könnten Sie mir bitte eine ___ für den Termin per E-Mail schicken?",
    "answer": "Bestätigung",
    "accepted": [
      "Bestätigung"
    ],
    "translation_en": "Could you please send me a confirmation for the appointment by email?",
    "choices": [],
    "correct_choice": "",
    "micro_rule": "Completed: eine Bestätigung für den Termin. Bestätigung is the written confirmation of an appointment or booking.",
    "difficulty": "easy",
    "family": "bestaetigung",
    "tags": [
      "confirmation",
      "email",
      "polite_request"
    ],
    "sourceCleanupBatch": "v0.85.7-under-contextualised-clozes",
    "feedbackCleanupBatch": "v0.85.8-feedback-cleanup"
  },
  {
    "id": "b1_vocab_bestaetigung_002",
    "status": "active",
    "skill": "wortschatz",
    "topic": "office_admin",
    "subtopic": "confirmation",
    "target": "bestätigen",
    "type": "typed_cloze",
    "prompt_de": "Ich möchte den Termin schriftlich ___.",
    "answer": "bestätigen",
    "accepted": [
      "bestätigen"
    ],
    "translation_en": "I would like to confirm the appointment in writing.",
    "choices": [],
    "correct_choice": "",
    "micro_rule": "bestätigen = to confirm.",
    "difficulty": "medium",
    "family": "bestaetigung",
    "tags": [
      "confirmation",
      "verb",
      "appointment"
    ]
  },
  {
    "id": "b1_vocab_bestaetigung_003",
    "status": "active",
    "skill": "wortschatz",
    "topic": "office_admin",
    "subtopic": "email confirmation",
    "target": "Bestätigung erhalten",
    "type": "phrase_choice",
    "prompt_de": "Sie haben noch keine Bestätigung bekommen. Welche Formulierung passt?",
    "answer": "Ich habe noch keine Bestätigung erhalten.",
    "accepted": [
      "Ich habe noch keine Bestätigung erhalten."
    ],
    "translation_en": "Which phrase fits if you have not received a reply yet?",
    "learnerCue": "Which phrase fits if you have not received a reply yet?",
    "choices": [
      "Ich habe noch keine Bestätigung erhalten.",
      "Ich habe die Bestätigung schon erhalten.",
      "Könnten Sie mir die Rechnung schicken?"
    ],
    "correct_choice": "Ich habe noch keine Bestätigung erhalten.",
    "micro_rule": "„Noch keine Bestätigung erhalten“ states that confirmation is missing.",
    "difficulty": "medium",
    "family": "bestaetigung",
    "tags": [
      "confirmation",
      "phrase_choice",
      "email"
    ],
    "supportVisibility": "scenario_visible"
  },
  {
    "id": "b1_vocab_bestaetigung_004",
    "status": "active",
    "skill": "wortschatz",
    "topic": "office_admin",
    "subtopic": "article repair",
    "target": "eine Bestätigung",
    "type": "error_repair",
    "prompt_de": "Korrigiere: Ich brauche ein Bestätigung.",
    "answer": "Ich brauche eine Bestätigung.",
    "accepted": [
      "Ich brauche eine Bestätigung."
    ],
    "translation_en": "Correct: I need a confirmation.",
    "choices": [],
    "correct_choice": "",
    "micro_rule": "die Bestätigung → eine Bestätigung.",
    "difficulty": "easy",
    "family": "bestaetigung",
    "tags": [
      "confirmation",
      "article",
      "error_repair"
    ]
  },
  {
    "id": "b1_vocab_bestaetigung_005",
    "status": "active",
    "skill": "wortschatz",
    "topic": "office_admin",
    "subtopic": "production",
    "target": "Bestätigung",
    "type": "production_card",
    "prompt_de": "Schreibe einen höflichen Satz: Du möchtest eine schriftliche Bestätigung.",
    "answer": "",
    "accepted": [],
    "translation_en": "Write a polite sentence: You want written confirmation.",
    "choices": [],
    "correct_choice": "",
    "micro_rule": "schriftlich = in writing.",
    "difficulty": "medium",
    "family": "bestaetigung",
    "tags": [
      "confirmation",
      "production",
      "email"
    ],
    "useful_phrases": [
      "Könnten Sie mir bitte ... schicken?",
      "eine schriftliche Bestätigung",
      "per E-Mail"
    ],
    "checklist": [
      "Polite request",
      "Uses Bestätigung",
      "Mentions written/email if useful"
    ],
    "model_answer": "Könnten Sie mir bitte eine schriftliche Bestätigung per E-Mail schicken?"
  },
  {
    "id": "b1_vocab_unterlagen_001",
    "status": "active",
    "skill": "wortschatz",
    "topic": "documents",
    "subtopic": "sending documents",
    "target": "die Unterlagen",
    "type": "typed_cloze",
    "prompt_de": "Für die Bewerbung: Bitte schicken Sie mir die ___ bis Freitag.",
    "answer": "Unterlagen",
    "accepted": [
      "Unterlagen"
    ],
    "translation_en": "For the application: Please send me the documents by Friday.",
    "choices": [],
    "correct_choice": "",
    "micro_rule": "Completed: die Unterlagen. Unterlagen is normally plural for documents or papers you need to send.",
    "difficulty": "easy",
    "family": "unterlagen",
    "tags": [
      "documents",
      "plural",
      "office"
    ],
    "sourceCleanupBatch": "v0.85.7-under-contextualised-clozes",
    "feedbackCleanupBatch": "v0.85.8-feedback-cleanup"
  },
  {
    "id": "b1_vocab_unterlagen_002",
    "status": "active",
    "skill": "wortschatz",
    "topic": "documents",
    "subtopic": "attachments",
    "target": "Unterlagen schicken",
    "type": "typed_cloze",
    "prompt_de": "Ich habe die Unterlagen als PDF ___.",
    "answer": "geschickt",
    "accepted": [
      "geschickt",
      "gesendet"
    ],
    "translation_en": "I sent the documents as a PDF.",
    "choices": [],
    "correct_choice": "",
    "micro_rule": "Unterlagen schicken/senden = to send documents.",
    "difficulty": "medium",
    "family": "unterlagen",
    "tags": [
      "documents",
      "email",
      "collocation"
    ]
  },
  {
    "id": "b1_vocab_unterlagen_003",
    "status": "active",
    "skill": "wortschatz",
    "topic": "documents",
    "subtopic": "missing documents",
    "target": "Unterlagen fehlen",
    "type": "phrase_choice",
    "prompt_de": "Dokumente fehlen noch. Welche Formulierung passt?",
    "answer": "Mir fehlen noch die Unterlagen.",
    "accepted": [
      "Mir fehlen noch die Unterlagen."
    ],
    "translation_en": "Which phrase fits if documents are still missing?",
    "learnerCue": "Which phrase fits if documents are still missing?",
    "choices": [
      "Mir fehlen noch die Unterlagen.",
      "Ich habe alle Unterlagen dabei.",
      "Ich brauche keine Unterlagen mehr."
    ],
    "correct_choice": "Mir fehlen noch die Unterlagen.",
    "micro_rule": "„Unterlagen fehlen“ means required documents are missing.",
    "difficulty": "medium",
    "family": "unterlagen",
    "tags": [
      "documents",
      "phrase_choice",
      "missing"
    ],
    "supportVisibility": "scenario_visible"
  },
  {
    "id": "b1_vocab_unterlagen_004",
    "status": "active",
    "skill": "wortschatz",
    "topic": "documents",
    "subtopic": "plural repair",
    "target": "die Unterlagen",
    "type": "error_repair",
    "prompt_de": "Korrigiere im Bewerbungskontext: Ich schicke Ihnen die Unterlage für die Bewerbung.",
    "answer": "Ich schicke Ihnen die Unterlagen für die Bewerbung.",
    "accepted": [
      "Ich schicke Ihnen die Unterlagen für die Bewerbung."
    ],
    "translation_en": "Correct: I am sending you the documents for the application.",
    "choices": [],
    "correct_choice": "Ich schicke Ihnen die Unterlagen für die Bewerbung.",
    "micro_rule": "In application contexts, „die Unterlagen“ is the usual plural for documents.",
    "difficulty": "hard_b1",
    "family": "unterlagen",
    "tags": [
      "documents",
      "plural",
      "application",
      "error_repair"
    ],
    "supportVisibility": "scenario_visible"
  },
  {
    "id": "b1_vocab_unterlagen_005",
    "status": "active",
    "skill": "wortschatz",
    "topic": "documents",
    "subtopic": "production",
    "target": "Unterlagen",
    "type": "production_card",
    "prompt_de": "Schreibe einen höflichen Satz: Du fragst nach fehlenden Unterlagen.",
    "answer": "",
    "accepted": [],
    "translation_en": "Write a polite sentence: You ask about missing documents.",
    "choices": [],
    "correct_choice": "",
    "micro_rule": "Use fehlen for missing things: Mir fehlen noch ...",
    "difficulty": "medium",
    "family": "unterlagen",
    "tags": [
      "documents",
      "production",
      "polite_request"
    ],
    "useful_phrases": [
      "Mir fehlen noch die Unterlagen.",
      "Könnten Sie mir die Unterlagen bitte schicken?",
      "Welche Unterlagen brauche ich noch?",
      "Ich reiche die Unterlagen nach.",
      "Vielen Dank für Ihre Hilfe."
    ],
    "checklist": [
      "Polite request",
      "Mentions missing documents",
      "Clear action requested"
    ],
    "model_answer": "Mir fehlen noch einige Unterlagen. Könnten Sie mir bitte sagen, welche Unterlagen ich noch brauche?"
  },
  {
    "id": "b1_vocab_formular_001",
    "status": "active",
    "skill": "wortschatz",
    "topic": "documents",
    "subtopic": "forms",
    "target": "das Formular",
    "type": "typed_cloze",
    "prompt_de": "Bitte füllen Sie das ___ vollständig aus.",
    "answer": "Formular",
    "accepted": [
      "Formular"
    ],
    "translation_en": "Please fill in the form completely.",
    "choices": [],
    "correct_choice": "",
    "micro_rule": "das Formular = form.",
    "difficulty": "easy",
    "family": "formular",
    "tags": [
      "form",
      "documents",
      "office"
    ]
  },
  {
    "id": "b1_vocab_formular_002",
    "status": "active",
    "skill": "wortschatz",
    "topic": "documents",
    "subtopic": "forms",
    "target": "ein Formular ausfüllen",
    "type": "typed_cloze",
    "prompt_de": "Das Formular muss ich noch ___.",
    "answer": "ausfüllen",
    "accepted": [
      "ausfüllen"
    ],
    "translation_en": "I still have to fill in the form.",
    "choices": [],
    "correct_choice": "",
    "micro_rule": "ein Formular ausfüllen = to fill in a form.",
    "difficulty": "medium",
    "family": "formular",
    "tags": [
      "form",
      "collocation",
      "admin"
    ]
  },
  {
    "id": "b1_vocab_formular_003",
    "status": "active",
    "skill": "wortschatz",
    "topic": "documents",
    "subtopic": "incomplete forms",
    "target": "vollständig",
    "type": "phrase_choice",
    "prompt_de": "Angaben fehlen im Formular. Welche Formulierung passt?",
    "answer": "Das Formular ist noch nicht vollständig.",
    "accepted": [
      "Das Formular ist noch nicht vollständig."
    ],
    "translation_en": "Which phrase fits if information is missing?",
    "learnerCue": "Which phrase fits if information is missing?",
    "choices": [
      "Das Formular ist noch nicht vollständig.",
      "Das Formular ist schon unterschrieben.",
      "Das Formular ist angekommen."
    ],
    "correct_choice": "Das Formular ist noch nicht vollständig.",
    "micro_rule": "„Vollständig“ means complete.",
    "difficulty": "medium",
    "family": "formular",
    "tags": [
      "form",
      "phrase_choice",
      "admin"
    ],
    "supportVisibility": "scenario_visible"
  },
  {
    "id": "b1_vocab_formular_004",
    "status": "active",
    "skill": "wortschatz",
    "topic": "documents",
    "subtopic": "article repair",
    "target": "das Formular",
    "type": "error_repair",
    "prompt_de": "Korrigiere: Ich habe den Formular ausgefüllt.",
    "answer": "Ich habe das Formular ausgefüllt.",
    "accepted": [
      "Ich habe das Formular ausgefüllt."
    ],
    "translation_en": "Correct: I filled in the form.",
    "choices": [],
    "correct_choice": "",
    "micro_rule": "das Formular → das Formular.",
    "difficulty": "easy",
    "family": "formular",
    "tags": [
      "form",
      "article",
      "error_repair"
    ]
  },
  {
    "id": "b1_vocab_formular_005",
    "status": "active",
    "skill": "wortschatz",
    "topic": "documents",
    "subtopic": "production",
    "target": "Formular",
    "type": "production_card",
    "prompt_de": "Schreibe einen Satz: Du hast das Formular ausgefüllt und schickst es mit.",
    "answer": "",
    "accepted": [],
    "translation_en": "Write a sentence: You have filled in the form and are sending it.",
    "choices": [],
    "correct_choice": "",
    "micro_rule": "im Anhang = attached/in the attachment.",
    "difficulty": "medium",
    "family": "formular",
    "tags": [
      "form",
      "production",
      "email"
    ],
    "useful_phrases": [
      "Ich habe das Formular ausgefüllt.",
      "im Anhang",
      "Ich schicke Ihnen ..."
    ],
    "checklist": [
      "Mentions completed form",
      "Mentions sending/attachment",
      "Formal enough for email"
    ],
    "model_answer": "Ich habe das Formular ausgefüllt und schicke es Ihnen im Anhang."
  },
  {
    "id": "b1_vocab_beschwerde_001",
    "status": "active",
    "skill": "wortschatz",
    "topic": "complaints",
    "subtopic": "basic complaint",
    "target": "die Beschwerde",
    "type": "typed_cloze",
    "prompt_de": "Der Kunde ist unzufrieden und schreibt eine ___.",
    "answer": "Beschwerde",
    "accepted": [
      "Beschwerde"
    ],
    "translation_en": "The customer is dissatisfied and writes a complaint.",
    "supportVisibility": "visible",
    "choices": [],
    "correct_choice": "",
    "micro_rule": "die Beschwerde = complaint.",
    "difficulty": "easy",
    "family": "beschwerde",
    "tags": [
      "complaint",
      "customer_service"
    ]
  },
  {
    "id": "b1_vocab_beschwerde_002",
    "status": "active",
    "skill": "wortschatz",
    "topic": "complaints",
    "subtopic": "formal complaint",
    "target": "eine Beschwerde einreichen",
    "type": "typed_cloze",
    "prompt_de": "Ich möchte eine Beschwerde ___.",
    "answer": "einreichen",
    "accepted": [
      "einreichen"
    ],
    "translation_en": "I would like to file a complaint.",
    "choices": [],
    "correct_choice": "",
    "micro_rule": "eine Beschwerde einreichen = to file/submit a complaint.",
    "difficulty": "hard_b1",
    "family": "beschwerde",
    "tags": [
      "complaint",
      "formal",
      "collocation"
    ]
  },
  {
    "id": "b1_vocab_beschwerde_003",
    "status": "active",
    "skill": "wortschatz",
    "topic": "complaints",
    "subtopic": "polite complaint",
    "target": "sich beschweren",
    "type": "phrase_choice",
    "prompt_de": "Welche Formulierung ist höflich und passend für eine Beschwerde?",
    "answer": "Ich möchte mich über die Lieferung beschweren.",
    "accepted": [
      "Ich möchte mich über die Lieferung beschweren."
    ],
    "translation_en": "Which phrase is polite and suitable for a complaint?",
    "learnerCue": "Which phrase is polite and suitable for a complaint?",
    "choices": [
      "Ich möchte mich über die Lieferung beschweren.",
      "Die Lieferung ist total schlecht.",
      "Ihre Lieferung ist unmöglich."
    ],
    "correct_choice": "Ich möchte mich über die Lieferung beschweren.",
    "micro_rule": "„Ich möchte mich beschweren“ is direct but still formal enough.",
    "difficulty": "medium",
    "family": "beschwerde",
    "tags": [
      "complaint",
      "register",
      "phrase_choice"
    ],
    "supportVisibility": "scenario_visible"
  },
  {
    "id": "b1_vocab_beschwerde_004",
    "status": "active",
    "skill": "wortschatz",
    "topic": "complaints",
    "subtopic": "article repair",
    "target": "eine Beschwerde",
    "type": "error_repair",
    "prompt_de": "Korrigiere: Ich habe ein Beschwerde geschrieben.",
    "answer": "Ich habe eine Beschwerde geschrieben.",
    "accepted": [
      "Ich habe eine Beschwerde geschrieben."
    ],
    "translation_en": "Correct: I wrote a complaint.",
    "choices": [],
    "correct_choice": "",
    "micro_rule": "die Beschwerde → eine Beschwerde.",
    "difficulty": "easy",
    "family": "beschwerde",
    "tags": [
      "complaint",
      "article",
      "error_repair"
    ]
  },
  {
    "id": "b1_vocab_beschwerde_005",
    "status": "active",
    "skill": "wortschatz",
    "topic": "complaints",
    "subtopic": "production",
    "target": "Beschwerde",
    "type": "production_card",
    "prompt_de": "Schreibe zwei höfliche Sätze: Du beschwerst dich über eine verspätete Lieferung.",
    "answer": "",
    "accepted": [],
    "translation_en": "Write two polite sentences: You complain about a delayed delivery.",
    "choices": [],
    "correct_choice": "",
    "micro_rule": "Use sachlich/formal language, not angry language.",
    "difficulty": "hard_b1",
    "family": "beschwerde",
    "tags": [
      "complaint",
      "production",
      "delivery"
    ],
    "useful_phrases": [
      "Ich möchte mich über die Lieferung beschweren.",
      "Die Lieferung ist leider verspätet.",
      "Ich warte seit ... auf die Lieferung.",
      "Könnten Sie das bitte prüfen?",
      "Ich bitte um eine schnelle Lösung."
    ],
    "checklist": [
      "Polite complaint",
      "Problem described",
      "Requests solution"
    ],
    "model_answer": "Ich möchte mich über die verspätete Lieferung beschweren. Könnten Sie das bitte prüfen und mir eine Lösung anbieten?"
  },
  {
    "id": "b1_vocab_lieferung_001",
    "status": "active",
    "skill": "wortschatz",
    "topic": "orders_deliveries",
    "subtopic": "delivery status",
    "target": "die Lieferung",
    "type": "typed_cloze",
    "prompt_de": "Die ___ meiner Bestellung kommt leider erst morgen an.",
    "answer": "Lieferung",
    "accepted": [
      "Lieferung"
    ],
    "translation_en": "The delivery for my order unfortunately arrives tomorrow.",
    "choices": [],
    "correct_choice": "",
    "micro_rule": "Completed: Die Lieferung meiner Bestellung kommt morgen an. Lieferung is the delivery, not the order itself.",
    "difficulty": "easy",
    "family": "lieferung",
    "tags": [
      "delivery",
      "order",
      "delay"
    ],
    "sourceCleanupBatch": "v0.85.7-under-contextualised-clozes",
    "feedbackCleanupBatch": "v0.85.8-feedback-cleanup"
  },
  {
    "id": "b1_vocab_lieferung_002",
    "status": "active",
    "skill": "wortschatz",
    "topic": "orders_deliveries",
    "subtopic": "shipping",
    "target": "Lieferung verschicken",
    "type": "typed_cloze",
    "prompt_de": "Die Lieferung wurde gestern ___.",
    "answer": "verschickt",
    "accepted": [
      "verschickt",
      "versendet"
    ],
    "translation_en": "The delivery was shipped yesterday.",
    "choices": [],
    "correct_choice": "",
    "micro_rule": "verschicken/versenden = to send/ship.",
    "difficulty": "medium",
    "family": "lieferung",
    "tags": [
      "delivery",
      "shipping",
      "collocation"
    ]
  },
  {
    "id": "b1_vocab_lieferung_003",
    "status": "active",
    "skill": "wortschatz",
    "topic": "orders_deliveries",
    "subtopic": "missing delivery",
    "target": "nicht angekommen",
    "type": "phrase_choice",
    "prompt_de": "Die Ware ist noch nicht da. Welche Formulierung passt?",
    "answer": "Die Lieferung ist noch nicht angekommen.",
    "accepted": [
      "Die Lieferung ist noch nicht angekommen."
    ],
    "translation_en": "Which phrase fits if the delivery has not arrived yet?",
    "learnerCue": "Which phrase fits if the delivery has not arrived yet?",
    "choices": [
      "Die Lieferung ist noch nicht angekommen.",
      "Die Bestellung ist schon bestätigt.",
      "Die Rechnung ist noch offen."
    ],
    "correct_choice": "Die Lieferung ist noch nicht angekommen.",
    "micro_rule": "„Lieferung angekommen“ is the delivery-arrival phrase.",
    "difficulty": "medium",
    "family": "lieferung",
    "tags": [
      "delivery",
      "phrase_choice",
      "problem"
    ],
    "supportVisibility": "scenario_visible"
  },
  {
    "id": "b1_vocab_lieferung_004",
    "status": "active",
    "skill": "wortschatz",
    "topic": "orders_deliveries",
    "subtopic": "verb agreement",
    "target": "Die Lieferung ist verspätet.",
    "type": "error_repair",
    "prompt_de": "Korrigiere: Die Lieferung sind verspätet.",
    "answer": "Die Lieferung ist verspätet.",
    "accepted": [
      "Die Lieferung ist verspätet."
    ],
    "translation_en": "Correct: The delivery is delayed.",
    "choices": [],
    "correct_choice": "",
    "micro_rule": "die Lieferung is singular: ist, not sind.",
    "difficulty": "easy",
    "family": "lieferung",
    "tags": [
      "delivery",
      "verb_agreement",
      "error_repair"
    ]
  },
  {
    "id": "b1_vocab_lieferung_005",
    "status": "active",
    "skill": "wortschatz",
    "topic": "orders_deliveries",
    "subtopic": "production",
    "target": "Lieferung",
    "type": "production_card",
    "prompt_de": "Schreibe einen höflichen Satz: Deine Lieferung ist noch nicht angekommen.",
    "answer": "",
    "accepted": [],
    "translation_en": "Write a polite sentence: Your delivery has not arrived yet.",
    "choices": [],
    "correct_choice": "",
    "micro_rule": "noch nicht angekommen = has not arrived yet.",
    "difficulty": "medium",
    "family": "lieferung",
    "tags": [
      "delivery",
      "production",
      "problem"
    ],
    "useful_phrases": [
      "Die Lieferung ist leider noch nicht angekommen.",
      "Können Sie bitte den Status prüfen?",
      "Ich warte seit ... auf die Lieferung.",
      "Können Sie mir sagen, wann sie kommt?",
      "Vielen Dank für Ihre Hilfe."
    ],
    "checklist": [
      "States the problem",
      "Polite request",
      "Clear reference to delivery"
    ],
    "model_answer": "Die Lieferung ist leider noch nicht angekommen. Können Sie bitte prüfen, wann sie kommt?"
  },
  {
    "id": "b1_vocab_bestellung_001",
    "status": "active",
    "skill": "wortschatz",
    "topic": "orders_deliveries",
    "subtopic": "orders",
    "target": "die Bestellung",
    "type": "typed_cloze",
    "prompt_de": "Ich habe online bestellt. Ich möchte meine ___ ändern.",
    "answer": "Bestellung",
    "accepted": [
      "Bestellung"
    ],
    "translation_en": "I ordered online. I would like to change my order.",
    "choices": [],
    "correct_choice": "",
    "micro_rule": "Completed: meine Bestellung ändern. Bestellung means the order you placed.",
    "difficulty": "easy",
    "family": "bestellung",
    "tags": [
      "order",
      "customer_service"
    ],
    "sourceCleanupBatch": "v0.85.7-under-contextualised-clozes",
    "feedbackCleanupBatch": "v0.85.8-feedback-cleanup"
  },
  {
    "id": "b1_vocab_bestellung_002",
    "status": "active",
    "skill": "wortschatz",
    "topic": "orders_deliveries",
    "subtopic": "placing orders",
    "target": "eine Bestellung aufgeben",
    "type": "typed_cloze",
    "prompt_de": "Ich habe die Bestellung online ___.",
    "answer": "aufgegeben",
    "accepted": [
      "aufgegeben"
    ],
    "translation_en": "I placed the order online.",
    "choices": [],
    "correct_choice": "",
    "micro_rule": "eine Bestellung aufgeben = to place an order.",
    "difficulty": "hard_b1",
    "family": "bestellung",
    "tags": [
      "order",
      "collocation",
      "online"
    ]
  },
  {
    "id": "b1_vocab_bestellung_003",
    "status": "active",
    "skill": "wortschatz",
    "topic": "orders_deliveries",
    "subtopic": "wrong order",
    "target": "falsche Bestellung",
    "type": "phrase_choice",
    "prompt_de": "Sie haben den falschen Artikel bekommen. Welche Formulierung passt?",
    "answer": "Ich habe die falsche Bestellung erhalten.",
    "accepted": [
      "Ich habe die falsche Bestellung erhalten."
    ],
    "translation_en": "Which phrase fits if you received something different?",
    "learnerCue": "Which phrase fits if you received something different?",
    "choices": [
      "Ich habe die falsche Bestellung erhalten.",
      "Die Bestellung ist vollständig.",
      "Ich habe die Rechnung bezahlt."
    ],
    "correct_choice": "Ich habe die falsche Bestellung erhalten.",
    "micro_rule": "„Die falsche Bestellung erhalten“ describes receiving the wrong order.",
    "difficulty": "medium",
    "family": "bestellung",
    "tags": [
      "order",
      "phrase_choice",
      "problem"
    ],
    "supportVisibility": "scenario_visible"
  },
  {
    "id": "b1_vocab_bestellung_004",
    "status": "active",
    "skill": "wortschatz",
    "topic": "orders_deliveries",
    "subtopic": "case repair",
    "target": "die Bestellung ändern",
    "type": "error_repair",
    "prompt_de": "Korrigiere: Ich möchte der Bestellung ändern.",
    "answer": "Ich möchte die Bestellung ändern.",
    "accepted": [
      "Ich möchte die Bestellung ändern."
    ],
    "translation_en": "Correct: I would like to change the order.",
    "choices": [],
    "correct_choice": "",
    "micro_rule": "ändern takes an accusative object: die Bestellung.",
    "difficulty": "medium",
    "family": "bestellung",
    "tags": [
      "order",
      "case",
      "error_repair"
    ]
  },
  {
    "id": "b1_vocab_bestellung_005",
    "status": "active",
    "skill": "wortschatz",
    "topic": "orders_deliveries",
    "subtopic": "production",
    "target": "Bestellung",
    "type": "production_card",
    "prompt_de": "Schreibe einen höflichen Satz: Du hast die falsche Bestellung bekommen.",
    "answer": "",
    "accepted": [],
    "translation_en": "Write a polite sentence: You received the wrong order.",
    "choices": [],
    "correct_choice": "",
    "micro_rule": "erhalten = to receive; useful in formal emails.",
    "difficulty": "medium",
    "family": "bestellung",
    "tags": [
      "order",
      "production",
      "complaint"
    ],
    "useful_phrases": [
      "Ich habe die falsche Bestellung erhalten.",
      "Das ist leider nicht meine Bestellung.",
      "Könnten Sie das bitte prüfen?",
      "Können Sie mir die richtige Bestellung schicken?",
      "Vielen Dank im Voraus."
    ],
    "checklist": [
      "States wrong order",
      "Polite request",
      "Formal enough for email"
    ],
    "model_answer": "Ich habe leider die falsche Bestellung erhalten. Könnten Sie das bitte prüfen und mir die richtige Bestellung schicken?"
  },
  {
    "id": "b1_vocab_rechnung_001",
    "status": "active",
    "skill": "wortschatz",
    "topic": "office_admin",
    "subtopic": "invoices",
    "target": "die Rechnung",
    "type": "typed_cloze",
    "prompt_de": "Für die Zahlung: Bitte schicken Sie mir die ___ noch einmal.",
    "answer": "Rechnung",
    "accepted": [
      "Rechnung"
    ],
    "translation_en": "For the payment: Please send me the invoice again.",
    "choices": [],
    "correct_choice": "",
    "micro_rule": "Completed: die Rechnung noch einmal schicken. Rechnung is the invoice or bill for payment.",
    "difficulty": "easy",
    "family": "rechnung",
    "tags": [
      "invoice",
      "office",
      "email"
    ],
    "sourceCleanupBatch": "v0.85.7-under-contextualised-clozes",
    "feedbackCleanupBatch": "v0.85.8-feedback-cleanup"
  },
  {
    "id": "b1_vocab_rechnung_002",
    "status": "active",
    "skill": "wortschatz",
    "topic": "office_admin",
    "subtopic": "payment",
    "target": "eine Rechnung bezahlen",
    "type": "typed_cloze",
    "prompt_de": "Ich habe die Rechnung schon ___.",
    "answer": "bezahlt",
    "accepted": [
      "bezahlt"
    ],
    "translation_en": "I have already paid the invoice.",
    "choices": [],
    "correct_choice": "",
    "micro_rule": "eine Rechnung bezahlen = to pay an invoice/bill.",
    "difficulty": "medium",
    "family": "rechnung",
    "tags": [
      "invoice",
      "payment",
      "collocation"
    ]
  },
  {
    "id": "b1_vocab_rechnung_003",
    "status": "active",
    "skill": "wortschatz",
    "topic": "office_admin",
    "subtopic": "incorrect invoice",
    "target": "Der Betrag stimmt nicht.",
    "type": "phrase_choice",
    "prompt_de": "Der Preis ist falsch. Welche Formulierung passt?",
    "answer": "Der Betrag auf der Rechnung stimmt nicht.",
    "accepted": [
      "Der Betrag auf der Rechnung stimmt nicht."
    ],
    "translation_en": "Which phrase fits if the price is wrong?",
    "learnerCue": "Which phrase fits if the price is wrong?",
    "choices": [
      "Der Betrag auf der Rechnung stimmt nicht.",
      "Die Rechnung ist schon bezahlt.",
      "Die Bestellung ist noch nicht angekommen."
    ],
    "correct_choice": "Der Betrag auf der Rechnung stimmt nicht.",
    "micro_rule": "„Der Betrag stimmt nicht“ identifies the wrong invoice amount.",
    "difficulty": "medium",
    "family": "rechnung",
    "tags": [
      "invoice",
      "phrase_choice",
      "problem"
    ],
    "supportVisibility": "scenario_visible"
  },
  {
    "id": "b1_vocab_rechnung_004",
    "status": "active",
    "skill": "wortschatz",
    "topic": "office_admin",
    "subtopic": "article repair",
    "target": "die Rechnung",
    "type": "error_repair",
    "prompt_de": "Korrigiere: Ich habe den Rechnung bezahlt.",
    "answer": "Ich habe die Rechnung bezahlt.",
    "accepted": [
      "Ich habe die Rechnung bezahlt."
    ],
    "translation_en": "Correct: I paid the invoice.",
    "choices": [],
    "correct_choice": "",
    "micro_rule": "die Rechnung → die Rechnung.",
    "difficulty": "easy",
    "family": "rechnung",
    "tags": [
      "invoice",
      "article",
      "error_repair"
    ]
  },
  {
    "id": "b1_vocab_rechnung_005",
    "status": "active",
    "skill": "wortschatz",
    "topic": "office_admin",
    "subtopic": "production",
    "target": "Rechnung",
    "type": "production_card",
    "prompt_de": "Schreibe einen höflichen Satz: Du brauchst die Rechnung noch einmal.",
    "answer": "",
    "accepted": [],
    "translation_en": "Write a polite sentence: You need the invoice again.",
    "choices": [],
    "correct_choice": "",
    "micro_rule": "noch einmal = again.",
    "difficulty": "medium",
    "family": "rechnung",
    "tags": [
      "invoice",
      "production",
      "email"
    ],
    "useful_phrases": [
      "Könnten Sie mir ... schicken?",
      "die Rechnung",
      "noch einmal"
    ],
    "checklist": [
      "Polite request",
      "Mentions invoice",
      "Says again/noch einmal"
    ],
    "model_answer": "Könnten Sie mir die Rechnung bitte noch einmal schicken?"
  },
  {
    "id": "b1_vocab_geraet_001",
    "status": "active",
    "skill": "wortschatz",
    "topic": "technical_problems",
    "subtopic": "device problem",
    "target": "das Gerät",
    "type": "typed_cloze",
    "prompt_de": "Das technische ___ funktioniert nicht.",
    "answer": "Gerät",
    "accepted": [
      "Gerät"
    ],
    "translation_en": "The technical device does not work.",
    "choices": [],
    "correct_choice": "",
    "micro_rule": "Completed: Das technische Gerät funktioniert nicht. Gerät is a device or piece of equipment.",
    "difficulty": "easy",
    "family": "geraet",
    "tags": [
      "technical_problem",
      "device"
    ],
    "sourceCleanupBatch": "v0.85.7-under-contextualised-clozes",
    "feedbackCleanupBatch": "v0.85.8-feedback-cleanup"
  },
  {
    "id": "b1_vocab_geraet_002",
    "status": "active",
    "skill": "wortschatz",
    "topic": "technical_problems",
    "subtopic": "reporting problems",
    "target": "ein Problem mit dem Gerät",
    "type": "typed_cloze",
    "prompt_de": "Ich habe ein technisches Problem mit dem ___.",
    "answer": "Gerät",
    "accepted": [
      "Gerät"
    ],
    "translation_en": "I have a technical problem with the device.",
    "choices": [],
    "correct_choice": "",
    "micro_rule": "Completed: mit dem Gerät. mit takes dative, so dem Gerät.",
    "difficulty": "medium",
    "family": "geraet",
    "tags": [
      "technical_problem",
      "dative",
      "device"
    ],
    "sourceCleanupBatch": "v0.85.7-under-contextualised-clozes",
    "feedbackCleanupBatch": "v0.85.8-feedback-cleanup"
  },
  {
    "id": "b1_vocab_geraet_003",
    "status": "active",
    "skill": "wortschatz",
    "topic": "technical_problems",
    "subtopic": "device not turning on",
    "target": "sich einschalten lassen",
    "type": "phrase_choice",
    "prompt_de": "Ein Gerät geht nicht an. Welche Formulierung passt?",
    "answer": "Das Gerät lässt sich nicht einschalten.",
    "accepted": [
      "Das Gerät lässt sich nicht einschalten."
    ],
    "translation_en": "Which phrase fits if a device will not turn on?",
    "learnerCue": "Which phrase fits if a device will not turn on?",
    "choices": [
      "Das Gerät lässt sich nicht einschalten.",
      "Das Gerät ist eingeschaltet.",
      "Der Stecker ist in Ordnung."
    ],
    "correct_choice": "Das Gerät lässt sich nicht einschalten.",
    "micro_rule": "„Sich einschalten lassen“ reports that a device will not switch on.",
    "difficulty": "hard_b1",
    "family": "geraet",
    "tags": [
      "technical_problem",
      "phrase_choice",
      "device"
    ],
    "supportVisibility": "scenario_visible"
  },
  {
    "id": "b1_vocab_geraet_004",
    "status": "active",
    "skill": "wortschatz",
    "topic": "technical_problems",
    "subtopic": "article repair",
    "target": "das Gerät",
    "type": "error_repair",
    "prompt_de": "Korrigiere: Der Gerät ist kaputt.",
    "answer": "Das Gerät ist kaputt.",
    "accepted": [
      "Das Gerät ist kaputt."
    ],
    "translation_en": "Correct: The device is broken.",
    "choices": [],
    "correct_choice": "",
    "micro_rule": "das Gerät → das Gerät.",
    "difficulty": "easy",
    "family": "geraet",
    "tags": [
      "technical_problem",
      "article",
      "error_repair"
    ]
  },
  {
    "id": "b1_vocab_geraet_005",
    "status": "active",
    "skill": "wortschatz",
    "topic": "technical_problems",
    "subtopic": "production",
    "target": "Gerät",
    "type": "production_card",
    "prompt_de": "Schreibe zwei Sätze: Das Gerät funktioniert nicht und du bittest um Hilfe.",
    "answer": "",
    "accepted": [],
    "translation_en": "Write two sentences: The device does not work and you ask for help.",
    "choices": [],
    "correct_choice": "",
    "micro_rule": "um Hilfe bitten = to ask for help.",
    "difficulty": "medium",
    "family": "geraet",
    "tags": [
      "technical_problem",
      "production",
      "help_request"
    ],
    "useful_phrases": [
      "Das Gerät funktioniert leider nicht.",
      "Ich habe ein Problem mit dem Gerät.",
      "Es lässt sich nicht einschalten.",
      "Könnten Sie mir bitte helfen?",
      "Können Sie das Gerät bitte prüfen?"
    ],
    "checklist": [
      "States the technical problem",
      "Asks for help",
      "Polite request"
    ],
    "model_answer": "Das Gerät funktioniert leider nicht. Es lässt sich nicht einschalten. Könnten Sie mir bitte helfen?"
  },
  {
    "id": "b1_vocab_rueckmeldung_001",
    "status": "active",
    "skill": "wortschatz",
    "topic": "office_admin",
    "subtopic": "feedback and replies",
    "target": "die Rückmeldung",
    "type": "typed_cloze",
    "prompt_de": "Vielen Dank für Ihre ___.",
    "answer": "Rückmeldung",
    "accepted": [
      "Rückmeldung"
    ],
    "translation_en": "Thank you for your response/feedback.",
    "choices": [],
    "correct_choice": "",
    "micro_rule": "die Rückmeldung = feedback/response.",
    "difficulty": "easy",
    "family": "rueckmeldung",
    "tags": [
      "email",
      "response",
      "formal"
    ]
  },
  {
    "id": "b1_vocab_rueckmeldung_002",
    "status": "active",
    "skill": "wortschatz",
    "topic": "office_admin",
    "subtopic": "waiting for reply",
    "target": "auf Rückmeldung warten",
    "type": "typed_cloze",
    "prompt_de": "Ich warte noch auf Ihre ___.",
    "answer": "Rückmeldung",
    "accepted": [
      "Rückmeldung"
    ],
    "translation_en": "I am still waiting for your response.",
    "choices": [],
    "correct_choice": "",
    "micro_rule": "auf eine Rückmeldung warten = to wait for a response.",
    "difficulty": "medium",
    "family": "rueckmeldung",
    "tags": [
      "email",
      "response",
      "collocation"
    ]
  },
  {
    "id": "b1_vocab_rueckmeldung_003",
    "status": "active",
    "skill": "wortschatz",
    "topic": "office_admin",
    "subtopic": "closing phrases",
    "target": "sich auf Rückmeldung freuen",
    "type": "phrase_choice",
    "prompt_de": "Welche Formulierung passt gut am Ende einer höflichen E-Mail?",
    "answer": "Ich freue mich auf Ihre Rückmeldung.",
    "accepted": [
      "Ich freue mich auf Ihre Rückmeldung."
    ],
    "translation_en": "Which phrase fits well at the end of a polite email?",
    "learnerCue": "Which phrase fits well at the end of a polite email?",
    "choices": [
      "Ich freue mich auf Ihre Rückmeldung.",
      "Ich warte auf Ihre Rechnung.",
      "Ich schicke Ihnen meine Rückmeldung."
    ],
    "correct_choice": "Ich freue mich auf Ihre Rückmeldung.",
    "micro_rule": "„Ich freue mich auf Ihre Rückmeldung“ is a standard polite closing.",
    "difficulty": "medium",
    "family": "rueckmeldung",
    "tags": [
      "email",
      "phrase_choice",
      "closing"
    ],
    "supportVisibility": "scenario_visible"
  },
  {
    "id": "b1_vocab_rueckmeldung_004",
    "status": "active",
    "skill": "wortschatz",
    "topic": "office_admin",
    "subtopic": "possessive repair",
    "target": "Ihre Rückmeldung",
    "type": "error_repair",
    "prompt_de": "Korrigiere: Vielen Dank für Ihren Rückmeldung.",
    "answer": "Vielen Dank für Ihre Rückmeldung.",
    "accepted": [
      "Vielen Dank für Ihre Rückmeldung."
    ],
    "translation_en": "Correct: Thank you for your response.",
    "choices": [],
    "correct_choice": "",
    "micro_rule": "die Rückmeldung → Ihre Rückmeldung.",
    "difficulty": "medium",
    "family": "rueckmeldung",
    "tags": [
      "email",
      "possessive",
      "error_repair"
    ]
  },
  {
    "id": "b1_vocab_rueckmeldung_005",
    "status": "active",
    "skill": "wortschatz",
    "topic": "office_admin",
    "subtopic": "production",
    "target": "Rückmeldung",
    "type": "production_card",
    "prompt_de": "Schreibe einen höflichen Schlusssatz mit Rückmeldung.",
    "answer": "",
    "accepted": [],
    "translation_en": "Write a polite closing sentence with Rückmeldung.",
    "choices": [],
    "correct_choice": "",
    "micro_rule": "Use Ihre Rückmeldung in formal emails.",
    "difficulty": "easy",
    "family": "rueckmeldung",
    "tags": [
      "email",
      "production",
      "closing"
    ],
    "useful_phrases": [
      "Ich freue mich auf Ihre Rückmeldung.",
      "Vielen Dank im Voraus.",
      "Mit freundlichen Grüßen"
    ],
    "checklist": [
      "Polite closing",
      "Uses Rückmeldung",
      "Formal Sie/Ihre form"
    ],
    "model_answer": "Ich freue mich auf Ihre Rückmeldung."
  },
  {
    "id": "b1_vocab_krankheit_001",
    "status": "active",
    "skill": "wortschatz",
    "topic": "illness_absence",
    "subtopic": "saying you are ill",
    "target": "krank",
    "type": "typed_cloze",
    "prompt_de": "Ich bin heute ___ und kann nicht zum Kurs kommen.",
    "answer": "krank",
    "accepted": [
      "krank"
    ],
    "translation_en": "I am ill today and cannot come to the course.",
    "choices": [],
    "correct_choice": "",
    "micro_rule": "krank sein = to be ill/sick.",
    "difficulty": "easy",
    "family": "krankheit",
    "tags": [
      "illness",
      "course",
      "absence"
    ]
  },
  {
    "id": "b1_vocab_krankheit_002",
    "status": "active",
    "skill": "wortschatz",
    "topic": "illness_absence",
    "subtopic": "illness reason",
    "target": "die Krankheit",
    "type": "typed_cloze",
    "prompt_de": "Wegen meiner ___ kann ich heute nicht arbeiten.",
    "answer": "Krankheit",
    "accepted": [
      "Krankheit"
    ],
    "translation_en": "Because of my illness, I cannot work today.",
    "choices": [],
    "correct_choice": "",
    "micro_rule": "die Krankheit = illness; wegen meiner Krankheit = because of my illness.",
    "difficulty": "medium",
    "family": "krankheit",
    "tags": [
      "illness",
      "absence",
      "reason"
    ]
  },
  {
    "id": "b1_vocab_krankheit_003",
    "status": "active",
    "skill": "wortschatz",
    "topic": "illness_absence",
    "subtopic": "absence message",
    "target": "krank sein",
    "type": "phrase_choice",
    "prompt_de": "Sie schreiben dem Kurs wegen Krankheit. Welche Formulierung passt?",
    "answer": "Ich bin leider krank und kann heute nicht kommen.",
    "accepted": [
      "Ich bin leider krank und kann heute nicht kommen."
    ],
    "translation_en": "Which phrase fits in a short message to the course?",
    "learnerCue": "Which phrase fits in a short message to the course?",
    "choices": [
      "Ich bin leider krank und kann heute nicht kommen.",
      "Ich habe heute einen Termin und komme später.",
      "Ich bin im Urlaub und komme nächste Woche."
    ],
    "correct_choice": "Ich bin leider krank und kann heute nicht kommen.",
    "micro_rule": "This states illness and absence clearly.",
    "difficulty": "easy",
    "family": "krankheit",
    "tags": [
      "illness",
      "message",
      "phrase_choice"
    ],
    "supportVisibility": "scenario_visible"
  },
  {
    "id": "b1_vocab_krankheit_004",
    "status": "active",
    "skill": "wortschatz",
    "topic": "illness_absence",
    "subtopic": "word choice repair",
    "target": "krank",
    "type": "error_repair",
    "prompt_de": "Korrigiere: Ich habe krank und kann nicht kommen.",
    "answer": "Ich bin krank und kann nicht kommen.",
    "accepted": [
      "Ich bin krank und kann nicht kommen."
    ],
    "translation_en": "Correct: I am ill and cannot come.",
    "choices": [],
    "correct_choice": "",
    "micro_rule": "Use krank sein, not krank haben.",
    "difficulty": "easy",
    "family": "krankheit",
    "tags": [
      "illness",
      "error_repair",
      "sein"
    ]
  },
  {
    "id": "b1_vocab_krankheit_005",
    "status": "active",
    "skill": "wortschatz",
    "topic": "illness_absence",
    "subtopic": "production",
    "target": "krank",
    "type": "production_card",
    "prompt_de": "Schreibe eine kurze Nachricht: Du bist krank und kannst heute nicht zum Kurs kommen.",
    "answer": "",
    "accepted": [],
    "translation_en": "Write a short message: You are ill and cannot come to the course today.",
    "choices": [],
    "correct_choice": "",
    "micro_rule": "Keep illness messages short and clear.",
    "difficulty": "medium",
    "family": "krankheit",
    "tags": [
      "illness",
      "production",
      "course"
    ],
    "useful_phrases": [
      "Ich bin leider krank.",
      "Ich kann heute nicht kommen.",
      "Ich melde mich morgen wieder."
    ],
    "checklist": [
      "Says you are ill",
      "Says you cannot come",
      "Polite and short"
    ],
    "model_answer": "Guten Morgen, ich bin leider krank und kann heute nicht zum Kurs kommen. Ich melde mich morgen wieder."
  },
  {
    "id": "b1_vocab_krankmeldung_001",
    "status": "active",
    "skill": "wortschatz",
    "topic": "illness_absence",
    "subtopic": "sick notification",
    "target": "die Krankmeldung",
    "type": "typed_cloze",
    "prompt_de": "Weil ich krank bin, schicke ich Ihnen die ___ per E-Mail.",
    "answer": "Krankmeldung",
    "accepted": [
      "Krankmeldung"
    ],
    "translation_en": "Because I am ill, I am sending you the sick note / sickness notification by email.",
    "choices": [],
    "correct_choice": "",
    "micro_rule": "Completed: die Krankmeldung per E-Mail schicken. Krankmeldung is the sickness notification or sick note.",
    "difficulty": "easy",
    "family": "krankmeldung",
    "tags": [
      "sick_note",
      "email",
      "work"
    ],
    "sourceCleanupBatch": "v0.85.7-under-contextualised-clozes",
    "feedbackCleanupBatch": "v0.85.8-feedback-cleanup"
  },
  {
    "id": "b1_vocab_krankmeldung_002",
    "status": "active",
    "skill": "wortschatz",
    "topic": "illness_absence",
    "subtopic": "calling in sick",
    "target": "sich krankmelden",
    "type": "typed_cloze",
    "prompt_de": "Ich muss mich heute leider ___.",
    "answer": "krankmelden",
    "accepted": [
      "krankmelden"
    ],
    "translation_en": "Unfortunately, I have to call in sick today.",
    "choices": [],
    "correct_choice": "",
    "micro_rule": "sich krankmelden = to report/call in sick.",
    "difficulty": "medium",
    "family": "krankmeldung",
    "tags": [
      "sick_note",
      "reflexive",
      "absence"
    ]
  },
  {
    "id": "b1_vocab_krankmeldung_003",
    "status": "active",
    "skill": "wortschatz",
    "topic": "illness_absence",
    "subtopic": "course absence",
    "target": "Krankmeldung abgeben",
    "type": "phrase_choice",
    "prompt_de": "Der Kurs braucht den Krankmeldungsnachweis. Welche Formulierung passt?",
    "answer": "Ich gebe die Krankmeldung morgen ab.",
    "accepted": [
      "Ich gebe die Krankmeldung morgen ab."
    ],
    "translation_en": "Which phrase fits if the course needs a sickness notification?",
    "learnerCue": "Which phrase fits if the course needs a sickness notification?",
    "choices": [
      "Ich gebe die Krankmeldung morgen ab.",
      "Ich melde mich morgen krank.",
      "Ich habe morgen einen Arzttermin."
    ],
    "correct_choice": "Ich gebe die Krankmeldung morgen ab.",
    "micro_rule": "„Abgeben“ fits handing in a document.",
    "difficulty": "medium",
    "family": "krankmeldung",
    "tags": [
      "sick_note",
      "course",
      "phrase_choice"
    ],
    "supportVisibility": "scenario_visible"
  },
  {
    "id": "b1_vocab_krankmeldung_004",
    "status": "active",
    "skill": "wortschatz",
    "topic": "illness_absence",
    "subtopic": "reflexive repair",
    "target": "sich krankmelden",
    "type": "error_repair",
    "prompt_de": "Korrigiere: Ich muss krankmelden.",
    "answer": "Ich muss mich krankmelden.",
    "accepted": [
      "Ich muss mich krankmelden."
    ],
    "translation_en": "Correct: I have to call in sick.",
    "choices": [],
    "correct_choice": "",
    "micro_rule": "sich krankmelden needs a reflexive pronoun: mich.",
    "difficulty": "medium",
    "family": "krankmeldung",
    "tags": [
      "sick_note",
      "reflexive",
      "error_repair"
    ]
  },
  {
    "id": "b1_vocab_krankmeldung_005",
    "status": "active",
    "skill": "wortschatz",
    "topic": "illness_absence",
    "subtopic": "production",
    "target": "Krankmeldung",
    "type": "production_card",
    "prompt_de": "Schreibe eine kurze formelle Nachricht: Du schickst deine Krankmeldung morgen.",
    "answer": "",
    "accepted": [],
    "translation_en": "Write a short formal message: You will send your sick note tomorrow.",
    "choices": [],
    "correct_choice": "",
    "micro_rule": "Use schicken or abgeben depending on email or paper.",
    "difficulty": "medium",
    "family": "krankmeldung",
    "tags": [
      "sick_note",
      "production",
      "formal_message"
    ],
    "useful_phrases": [
      "Ich bin leider krank.",
      "Ich kann heute nicht kommen.",
      "Ich schicke Ihnen die Krankmeldung morgen.",
      "Vielen Dank für Ihr Verständnis.",
      "Mit freundlichen Grüßen"
    ],
    "checklist": [
      "Says you are ill",
      "Mentions Krankmeldung",
      "Polite closing"
    ],
    "model_answer": "Guten Morgen, ich bin leider krank und kann heute nicht kommen. Ich schicke Ihnen die Krankmeldung morgen. Vielen Dank für Ihr Verständnis."
  },
  {
    "id": "b1_vocab_arzttermin_001",
    "status": "active",
    "skill": "wortschatz",
    "topic": "doctor_appointments",
    "subtopic": "doctor appointment",
    "target": "der Arzttermin",
    "type": "typed_cloze",
    "prompt_de": "Ich habe morgen einen ___ beim Arzt um 10 Uhr.",
    "answer": "Arzttermin",
    "accepted": [
      "Arzttermin"
    ],
    "translation_en": "I have a doctor's appointment tomorrow at 10 o'clock.",
    "choices": [],
    "correct_choice": "",
    "micro_rule": "Completed: einen Arzttermin beim Arzt. haben takes an accusative object: einen Arzttermin.",
    "difficulty": "easy",
    "family": "arzttermin",
    "tags": [
      "doctor",
      "appointment",
      "absence"
    ],
    "sourceCleanupBatch": "v0.85.7-under-contextualised-clozes",
    "feedbackCleanupBatch": "v0.85.8-feedback-cleanup"
  },
  {
    "id": "b1_vocab_arzttermin_002",
    "status": "active",
    "skill": "wortschatz",
    "topic": "doctor_appointments",
    "subtopic": "arranging appointment",
    "target": "einen Arzttermin vereinbaren",
    "type": "typed_cloze",
    "prompt_de": "Ich möchte einen Arzttermin ___.",
    "answer": "vereinbaren",
    "accepted": [
      "vereinbaren"
    ],
    "translation_en": "I would like to arrange a doctor's appointment.",
    "choices": [],
    "correct_choice": "",
    "micro_rule": "einen Termin vereinbaren = to arrange an appointment.",
    "difficulty": "medium",
    "family": "arzttermin",
    "tags": [
      "doctor",
      "appointment",
      "collocation"
    ]
  },
  {
    "id": "b1_vocab_arzttermin_003",
    "status": "active",
    "skill": "wortschatz",
    "topic": "doctor_appointments",
    "subtopic": "appointment conflict",
    "target": "Arzttermin",
    "type": "phrase_choice",
    "prompt_de": "Sie kommen wegen eines Arzttermins später. Welche Formulierung passt?",
    "answer": "Ich komme später, weil ich einen Arzttermin habe.",
    "accepted": [
      "Ich komme später, weil ich einen Arzttermin habe."
    ],
    "translation_en": "Which phrase fits if you are coming later because of a doctor's appointment?",
    "learnerCue": "Which phrase fits if you are coming later because of a doctor's appointment?",
    "choices": [
      "Ich komme später, weil ich einen Arzttermin habe.",
      "Ich komme später, weil die Lieferung fehlt.",
      "Ich komme später, obwohl ich pünktlich bin."
    ],
    "correct_choice": "Ich komme später, weil ich einen Arzttermin habe.",
    "micro_rule": "„Arzttermin“ gives the reason for being late.",
    "difficulty": "medium",
    "family": "arzttermin",
    "tags": [
      "doctor",
      "absence",
      "connector",
      "phrase_choice"
    ],
    "supportVisibility": "scenario_visible"
  },
  {
    "id": "b1_vocab_arzttermin_004",
    "status": "active",
    "skill": "wortschatz",
    "topic": "doctor_appointments",
    "subtopic": "article repair",
    "target": "einen Arzttermin",
    "type": "error_repair",
    "prompt_de": "Korrigiere: Ich habe morgen ein Arzttermin.",
    "answer": "Ich habe morgen einen Arzttermin.",
    "accepted": [
      "Ich habe morgen einen Arzttermin."
    ],
    "translation_en": "Correct: I have a doctor's appointment tomorrow.",
    "choices": [],
    "correct_choice": "",
    "micro_rule": "der Arzttermin → einen Arzttermin.",
    "difficulty": "medium",
    "family": "arzttermin",
    "tags": [
      "doctor",
      "article",
      "accusative",
      "error_repair"
    ]
  },
  {
    "id": "b1_vocab_arzttermin_005",
    "status": "active",
    "skill": "wortschatz",
    "topic": "doctor_appointments",
    "subtopic": "production",
    "target": "Arzttermin",
    "type": "production_card",
    "prompt_de": "Schreibe einen Satz: Du kommst morgen später, weil du einen Arzttermin hast.",
    "answer": "",
    "accepted": [],
    "translation_en": "Write a sentence: You will come later tomorrow because you have a doctor's appointment.",
    "choices": [],
    "correct_choice": "",
    "micro_rule": "With weil, the conjugated verb goes to the end.",
    "difficulty": "medium",
    "family": "arzttermin",
    "tags": [
      "doctor",
      "production",
      "absence"
    ],
    "useful_phrases": [
      "Ich komme morgen später.",
      "weil ich einen Arzttermin habe",
      "Vielen Dank für Ihr Verständnis."
    ],
    "checklist": [
      "Mentions coming later",
      "Mentions Arzttermin",
      "Uses weil correctly"
    ],
    "model_answer": "Ich komme morgen etwas später, weil ich einen Arzttermin habe."
  },
  {
    "id": "b1_vocab_krankenkasse_001",
    "status": "active",
    "skill": "wortschatz",
    "topic": "insurance_healthcare",
    "subtopic": "health insurance provider",
    "target": "die Krankenkasse",
    "type": "typed_cloze",
    "prompt_de": "Wegen meiner Versicherung muss ich meine ___ anrufen.",
    "answer": "Krankenkasse",
    "accepted": [
      "Krankenkasse"
    ],
    "translation_en": "Because of my insurance, I have to call my health insurance provider.",
    "choices": [],
    "correct_choice": "",
    "micro_rule": "Completed: meine Krankenkasse anrufen. Krankenkasse is the health insurance provider.",
    "difficulty": "easy",
    "family": "krankenkasse",
    "tags": [
      "health_insurance",
      "phone_call"
    ],
    "sourceCleanupBatch": "v0.85.7-under-contextualised-clozes",
    "feedbackCleanupBatch": "v0.85.8-feedback-cleanup"
  },
  {
    "id": "b1_vocab_krankenkasse_002",
    "status": "active",
    "skill": "wortschatz",
    "topic": "insurance_healthcare",
    "subtopic": "sending documents",
    "target": "Krankenkasse",
    "type": "typed_cloze",
    "prompt_de": "Die Unterlagen für die Versicherung schicke ich an die ___.",
    "answer": "Krankenkasse",
    "accepted": [
      "Krankenkasse"
    ],
    "translation_en": "I am sending the insurance documents to the health insurance provider.",
    "choices": [],
    "correct_choice": "",
    "micro_rule": "Completed: an die Krankenkasse schicken. an + destination takes accusative here: die Krankenkasse.",
    "difficulty": "medium",
    "family": "krankenkasse",
    "tags": [
      "health_insurance",
      "documents",
      "admin"
    ],
    "sourceCleanupBatch": "v0.85.7-under-contextualised-clozes",
    "feedbackCleanupBatch": "v0.85.8-feedback-cleanup"
  },
  {
    "id": "b1_vocab_krankenkasse_003",
    "status": "active",
    "skill": "wortschatz",
    "topic": "insurance_healthcare",
    "subtopic": "asking for information",
    "target": "Krankenkasse",
    "type": "phrase_choice",
    "prompt_de": "Sie brauchen Informationen von der Krankenkasse. Welche Bitte passt?",
    "answer": "Könnten Sie mir bitte die Informationen schicken?",
    "accepted": [
      "Könnten Sie mir bitte die Informationen schicken?"
    ],
    "translation_en": "Which question fits if you need information from the health insurance provider?",
    "learnerCue": "Which question fits if you need information from the health insurance provider?",
    "choices": [
      "Könnten Sie mir bitte die Informationen schicken?",
      "Übernimmt die Krankenkasse die Kosten?",
      "Könnten Sie mir bitte einen Termin verschieben?"
    ],
    "correct_choice": "Könnten Sie mir bitte die Informationen schicken?",
    "micro_rule": "This is a direct polite request for information.",
    "difficulty": "medium",
    "family": "krankenkasse",
    "tags": [
      "health_insurance",
      "polite_request",
      "phrase_choice"
    ],
    "supportVisibility": "scenario_visible"
  },
  {
    "id": "b1_vocab_krankenkasse_004",
    "status": "active",
    "skill": "wortschatz",
    "topic": "insurance_healthcare",
    "subtopic": "article repair",
    "target": "die Krankenkasse",
    "type": "error_repair",
    "prompt_de": "Korrigiere: Ich rufe den Krankenkasse an.",
    "answer": "Ich rufe die Krankenkasse an.",
    "accepted": [
      "Ich rufe die Krankenkasse an."
    ],
    "translation_en": "Correct: I am calling the health insurance provider.",
    "choices": [],
    "correct_choice": "",
    "micro_rule": "die Krankenkasse → die Krankenkasse.",
    "difficulty": "easy",
    "family": "krankenkasse",
    "tags": [
      "health_insurance",
      "article",
      "error_repair"
    ]
  },
  {
    "id": "b1_vocab_krankenkasse_005",
    "status": "active",
    "skill": "wortschatz",
    "topic": "insurance_healthcare",
    "subtopic": "production",
    "target": "Krankenkasse",
    "type": "production_card",
    "prompt_de": "Schreibe einen Satz: Du brauchst Informationen von deiner Krankenkasse.",
    "answer": "",
    "accepted": [],
    "translation_en": "Write a sentence: You need information from your health insurance provider.",
    "choices": [],
    "correct_choice": "",
    "micro_rule": "Use von meiner Krankenkasse for from my health insurance provider.",
    "difficulty": "medium",
    "family": "krankenkasse",
    "tags": [
      "health_insurance",
      "production",
      "polite_request"
    ],
    "useful_phrases": [
      "Ich brauche Informationen von meiner Krankenkasse.",
      "Ich habe eine Frage zu meinem Beitrag.",
      "Könnten Sie mir bitte Informationen schicken?",
      "Können Sie mir das bitte erklären?",
      "Vielen Dank für Ihre Hilfe."
    ],
    "checklist": [
      "Mentions Krankenkasse",
      "Asks for information",
      "Polite form"
    ],
    "model_answer": "Ich brauche Informationen von meiner Krankenkasse. Könnten Sie mir bitte erklären, welche Unterlagen ich brauche?"
  },
  {
    "id": "b1_vocab_versicherung_001",
    "status": "active",
    "skill": "wortschatz",
    "topic": "insurance_healthcare",
    "subtopic": "insurance",
    "target": "die Versicherung",
    "type": "typed_cloze",
    "prompt_de": "Ich habe eine Frage zu meiner ___ bei der Krankenkasse.",
    "answer": "Versicherung",
    "accepted": [
      "Versicherung"
    ],
    "translation_en": "I have a question about my insurance with the health insurance provider.",
    "choices": [],
    "correct_choice": "",
    "micro_rule": "Completed: eine Frage zu meiner Versicherung. Versicherung means insurance.",
    "difficulty": "easy",
    "family": "versicherung",
    "tags": [
      "insurance",
      "question",
      "admin"
    ],
    "sourceCleanupBatch": "v0.85.7-under-contextualised-clozes",
    "feedbackCleanupBatch": "v0.85.8-feedback-cleanup"
  },
  {
    "id": "b1_vocab_versicherung_002",
    "status": "active",
    "skill": "wortschatz",
    "topic": "insurance_healthcare",
    "subtopic": "being insured",
    "target": "versichert sein",
    "type": "typed_cloze",
    "prompt_de": "Ich bin bei dieser Krankenkasse ___.",
    "answer": "versichert",
    "accepted": [
      "versichert"
    ],
    "translation_en": "I am insured with this health insurance provider.",
    "choices": [],
    "correct_choice": "",
    "micro_rule": "versichert sein = to be insured.",
    "difficulty": "medium",
    "family": "versicherung",
    "tags": [
      "insurance",
      "health_insurance",
      "status"
    ]
  },
  {
    "id": "b1_vocab_versicherung_003",
    "status": "active",
    "skill": "wortschatz",
    "topic": "insurance_healthcare",
    "subtopic": "coverage",
    "target": "übernehmen",
    "type": "phrase_choice",
    "prompt_de": "Sie möchten wissen, ob die Versicherung bezahlt. Welche Frage passt?",
    "answer": "Übernimmt die Versicherung die Kosten?",
    "accepted": [
      "Übernimmt die Versicherung die Kosten?"
    ],
    "translation_en": "Which question fits if you want to know whether the insurance pays?",
    "learnerCue": "Which question fits if you want to know whether the insurance pays?",
    "choices": [
      "Übernimmt die Versicherung die Kosten?",
      "Wann ist der Termin bei der Versicherung?",
      "Kann ich die Unterlagen einreichen?"
    ],
    "correct_choice": "Übernimmt die Versicherung die Kosten?",
    "micro_rule": "„Kosten übernehmen“ means cover/pay the costs.",
    "difficulty": "hard_b1",
    "family": "versicherung",
    "tags": [
      "insurance",
      "costs",
      "phrase_choice"
    ],
    "supportVisibility": "scenario_visible"
  },
  {
    "id": "b1_vocab_versicherung_004",
    "status": "active",
    "skill": "wortschatz",
    "topic": "insurance_healthcare",
    "subtopic": "article repair",
    "target": "die Versicherung",
    "type": "error_repair",
    "prompt_de": "Korrigiere: Der Versicherung bezahlt die Kosten.",
    "answer": "Die Versicherung bezahlt die Kosten.",
    "accepted": [
      "Die Versicherung bezahlt die Kosten."
    ],
    "translation_en": "Correct: The insurance pays the costs.",
    "choices": [],
    "correct_choice": "",
    "micro_rule": "die Versicherung → Die Versicherung.",
    "difficulty": "easy",
    "family": "versicherung",
    "tags": [
      "insurance",
      "article",
      "error_repair"
    ]
  },
  {
    "id": "b1_vocab_versicherung_005",
    "status": "active",
    "skill": "wortschatz",
    "topic": "insurance_healthcare",
    "subtopic": "production",
    "target": "Versicherung",
    "type": "production_card",
    "prompt_de": "Schreibe eine höfliche Frage: Du möchtest wissen, ob die Versicherung die Kosten übernimmt.",
    "answer": "",
    "accepted": [],
    "translation_en": "Write a polite question: You want to know whether the insurance covers the costs.",
    "choices": [],
    "correct_choice": "",
    "micro_rule": "die Kosten übernehmen = to cover the costs.",
    "difficulty": "hard_b1",
    "family": "versicherung",
    "tags": [
      "insurance",
      "production",
      "costs"
    ],
    "useful_phrases": [
      "Übernimmt die Versicherung die Kosten?",
      "Ich möchte wissen, ob ...",
      "Können Sie mir bitte sagen, ob ...?",
      "die Kosten übernehmen",
      "Vielen Dank im Voraus."
    ],
    "checklist": [
      "Asks about insurance",
      "Mentions costs",
      "Polite question"
    ],
    "model_answer": "Könnten Sie mir bitte sagen, ob die Versicherung die Kosten übernimmt?"
  },
  {
    "id": "b1_vocab_gesundheitskarte_001",
    "status": "active",
    "skill": "wortschatz",
    "topic": "insurance_healthcare",
    "subtopic": "health insurance card",
    "target": "die Gesundheitskarte",
    "type": "typed_cloze",
    "prompt_de": "Bitte bringen Sie Ihre ___ zum Arzttermin mit.",
    "answer": "Gesundheitskarte",
    "accepted": [
      "Gesundheitskarte"
    ],
    "translation_en": "Please bring your health insurance card to the doctor's appointment.",
    "choices": [],
    "correct_choice": "",
    "micro_rule": "Completed: die Gesundheitskarte zum Arzttermin mitbringen. Gesundheitskarte is the health insurance card.",
    "difficulty": "easy",
    "family": "gesundheitskarte",
    "tags": [
      "health_card",
      "doctor",
      "appointment"
    ],
    "sourceCleanupBatch": "v0.85.7-under-contextualised-clozes",
    "feedbackCleanupBatch": "v0.85.8-feedback-cleanup"
  },
  {
    "id": "b1_vocab_gesundheitskarte_002",
    "status": "active",
    "skill": "wortschatz",
    "topic": "insurance_healthcare",
    "subtopic": "forgotten card",
    "target": "vergessen",
    "type": "typed_cloze",
    "prompt_de": "Ich habe meine Gesundheitskarte leider ___.",
    "answer": "vergessen",
    "accepted": [
      "vergessen"
    ],
    "translation_en": "Unfortunately, I forgot my health insurance card.",
    "choices": [],
    "correct_choice": "",
    "micro_rule": "etwas vergessen = to forget something.",
    "difficulty": "medium",
    "family": "gesundheitskarte",
    "tags": [
      "health_card",
      "doctor",
      "problem"
    ]
  },
  {
    "id": "b1_vocab_gesundheitskarte_003",
    "status": "active",
    "skill": "wortschatz",
    "topic": "insurance_healthcare",
    "subtopic": "showing card",
    "target": "vorzeigen",
    "type": "phrase_choice",
    "prompt_de": "Die Praxis braucht Ihre Gesundheitskarte. Welche Aufforderung passt?",
    "answer": "Bitte zeigen Sie Ihre Gesundheitskarte vor.",
    "accepted": [
      "Bitte zeigen Sie Ihre Gesundheitskarte vor."
    ],
    "translation_en": "Which phrase fits at the doctor's office?",
    "learnerCue": "Which phrase fits at the doctor's office?",
    "choices": [
      "Bitte zeigen Sie Ihre Gesundheitskarte vor.",
      "Bitte füllen Sie das Formular aus.",
      "Bitte nehmen Sie im Wartezimmer Platz."
    ],
    "correct_choice": "Bitte zeigen Sie Ihre Gesundheitskarte vor.",
    "micro_rule": "„Vorzeigen“ means show/present a card or document.",
    "difficulty": "medium",
    "family": "gesundheitskarte",
    "tags": [
      "health_card",
      "doctor_office",
      "phrase_choice"
    ],
    "supportVisibility": "scenario_visible"
  },
  {
    "id": "b1_vocab_gesundheitskarte_004",
    "status": "active",
    "skill": "wortschatz",
    "topic": "insurance_healthcare",
    "subtopic": "possessive repair",
    "target": "meine Gesundheitskarte",
    "type": "error_repair",
    "prompt_de": "Korrigiere: Ich habe mein Gesundheitskarte vergessen.",
    "answer": "Ich habe meine Gesundheitskarte vergessen.",
    "accepted": [
      "Ich habe meine Gesundheitskarte vergessen."
    ],
    "translation_en": "Correct: I forgot my health insurance card.",
    "choices": [],
    "correct_choice": "",
    "micro_rule": "die Gesundheitskarte → meine Gesundheitskarte.",
    "difficulty": "medium",
    "family": "gesundheitskarte",
    "tags": [
      "health_card",
      "possessive",
      "error_repair"
    ]
  },
  {
    "id": "b1_vocab_gesundheitskarte_005",
    "status": "active",
    "skill": "wortschatz",
    "topic": "insurance_healthcare",
    "subtopic": "production",
    "target": "Gesundheitskarte",
    "type": "production_card",
    "prompt_de": "Schreibe einen Satz: Du hast deine Gesundheitskarte vergessen.",
    "answer": "",
    "accepted": [],
    "translation_en": "Write a sentence: You forgot your health insurance card.",
    "choices": [],
    "correct_choice": "",
    "micro_rule": "leider = unfortunately; useful for small problems.",
    "difficulty": "easy",
    "family": "gesundheitskarte",
    "tags": [
      "health_card",
      "production",
      "doctor"
    ],
    "useful_phrases": [
      "Ich habe ... vergessen.",
      "meine Gesundheitskarte",
      "leider"
    ],
    "checklist": [
      "Mentions forgotten card",
      "Uses meine Gesundheitskarte",
      "Clear and polite"
    ],
    "model_answer": "Ich habe meine Gesundheitskarte leider vergessen."
  },
  {
    "id": "b1_vocab_rezept_001",
    "status": "active",
    "skill": "wortschatz",
    "topic": "pharmacy_medicine",
    "subtopic": "prescription",
    "target": "das Rezept",
    "type": "typed_cloze",
    "prompt_de": "Der Arzt gibt mir ein ___ für das Medikament.",
    "answer": "Rezept",
    "accepted": [
      "Rezept"
    ],
    "translation_en": "The doctor gives me a prescription for the medicine.",
    "choices": [],
    "correct_choice": "",
    "micro_rule": "das Rezept = prescription or recipe; here: prescription.",
    "difficulty": "easy",
    "family": "rezept",
    "tags": [
      "prescription",
      "doctor",
      "medicine"
    ]
  },
  {
    "id": "b1_vocab_rezept_002",
    "status": "active",
    "skill": "wortschatz",
    "topic": "pharmacy_medicine",
    "subtopic": "needing a prescription",
    "target": "ein Rezept brauchen",
    "type": "typed_cloze",
    "prompt_de": "Für dieses Medikament brauche ich ein ___.",
    "answer": "Rezept",
    "accepted": [
      "Rezept"
    ],
    "translation_en": "For this medicine, I need a prescription.",
    "choices": [],
    "correct_choice": "",
    "micro_rule": "ein Rezept brauchen = to need a prescription.",
    "difficulty": "medium",
    "family": "rezept",
    "tags": [
      "prescription",
      "medicine",
      "pharmacy"
    ]
  },
  {
    "id": "b1_vocab_rezept_003",
    "status": "active",
    "skill": "wortschatz",
    "topic": "pharmacy_medicine",
    "subtopic": "collecting medicine",
    "target": "Rezept einlösen",
    "type": "phrase_choice",
    "prompt_de": "Sie möchten ein Rezept in der Apotheke nutzen. Welche Formulierung passt?",
    "answer": "Ich möchte dieses Rezept einlösen.",
    "accepted": [
      "Ich möchte dieses Rezept einlösen."
    ],
    "translation_en": "Which phrase fits in the pharmacy?",
    "learnerCue": "Which phrase fits in the pharmacy?",
    "choices": [
      "Ich möchte dieses Rezept einlösen.",
      "Ich brauche ein neues Rezept.",
      "Ich habe mein Rezept vergessen."
    ],
    "correct_choice": "Ich möchte dieses Rezept einlösen.",
    "micro_rule": "„Ein Rezept einlösen“ is the pharmacy phrase for using a prescription.",
    "difficulty": "hard_b1",
    "family": "rezept",
    "tags": [
      "prescription",
      "pharmacy",
      "phrase_choice"
    ],
    "supportVisibility": "scenario_visible"
  },
  {
    "id": "b1_vocab_rezept_004",
    "status": "active",
    "skill": "wortschatz",
    "topic": "pharmacy_medicine",
    "subtopic": "article repair",
    "target": "ein Rezept",
    "type": "error_repair",
    "prompt_de": "Korrigiere: Ich brauche eine Rezept.",
    "answer": "Ich brauche ein Rezept.",
    "accepted": [
      "Ich brauche ein Rezept."
    ],
    "translation_en": "Correct: I need a prescription.",
    "choices": [],
    "correct_choice": "",
    "micro_rule": "das Rezept → ein Rezept.",
    "difficulty": "easy",
    "family": "rezept",
    "tags": [
      "prescription",
      "article",
      "error_repair"
    ]
  },
  {
    "id": "b1_vocab_rezept_005",
    "status": "active",
    "skill": "wortschatz",
    "topic": "pharmacy_medicine",
    "subtopic": "production",
    "target": "Rezept",
    "type": "production_card",
    "prompt_de": "Schreibe einen Satz: Du brauchst ein Rezept für ein Medikament.",
    "answer": "",
    "accepted": [],
    "translation_en": "Write a sentence: You need a prescription for a medicine.",
    "choices": [],
    "correct_choice": "",
    "micro_rule": "für + Akkusativ: für ein Medikament.",
    "difficulty": "medium",
    "family": "rezept",
    "tags": [
      "prescription",
      "production",
      "medicine"
    ],
    "useful_phrases": [
      "Ich brauche ein Rezept.",
      "für dieses Medikament",
      "Könnten Sie mir ...?"
    ],
    "checklist": [
      "Mentions Rezept",
      "Mentions medicine",
      "Clear need/request"
    ],
    "model_answer": "Ich brauche ein Rezept für dieses Medikament."
  },
  {
    "id": "b1_vocab_apotheke_001",
    "status": "active",
    "skill": "wortschatz",
    "topic": "pharmacy_medicine",
    "subtopic": "pharmacy",
    "target": "die Apotheke",
    "type": "typed_cloze",
    "prompt_de": "Ich kaufe das Medikament in der ___.",
    "answer": "Apotheke",
    "accepted": [
      "Apotheke"
    ],
    "translation_en": "I buy the medicine at the pharmacy.",
    "choices": [],
    "correct_choice": "",
    "micro_rule": "die Apotheke = pharmacy.",
    "difficulty": "easy",
    "family": "apotheke",
    "tags": [
      "pharmacy",
      "medicine"
    ]
  },
  {
    "id": "b1_vocab_apotheke_002",
    "status": "active",
    "skill": "wortschatz",
    "topic": "pharmacy_medicine",
    "subtopic": "asking availability",
    "target": "vorrätig",
    "type": "typed_cloze",
    "prompt_de": "Ist das Medikament in der Apotheke ___?",
    "answer": "vorrätig",
    "accepted": [
      "vorrätig"
    ],
    "translation_en": "Is the medicine in stock at the pharmacy?",
    "choices": [],
    "correct_choice": "",
    "micro_rule": "vorrätig = in stock/available.",
    "difficulty": "hard_b1",
    "family": "apotheke",
    "tags": [
      "pharmacy",
      "availability",
      "medicine"
    ]
  },
  {
    "id": "b1_vocab_apotheke_003",
    "status": "active",
    "skill": "wortschatz",
    "topic": "pharmacy_medicine",
    "subtopic": "pharmacy request",
    "target": "Medikament abholen",
    "type": "phrase_choice",
    "prompt_de": "Sie bekommen ein Medikament in der Apotheke. Welche Formulierung passt?",
    "answer": "Ich hole das Medikament in der Apotheke ab.",
    "accepted": [
      "Ich hole das Medikament in der Apotheke ab."
    ],
    "translation_en": "Which phrase fits if you collect medicine at the pharmacy?",
    "learnerCue": "Which phrase fits if you collect medicine at the pharmacy?",
    "choices": [
      "Ich hole das Medikament in der Apotheke ab.",
      "Ich habe einen Termin beim Arzt.",
      "Ich reiche die Unterlagen ein."
    ],
    "correct_choice": "Ich hole das Medikament in der Apotheke ab.",
    "micro_rule": "„In der Apotheke abholen“ fits collecting medicine.",
    "difficulty": "medium",
    "family": "apotheke",
    "tags": [
      "pharmacy",
      "medicine",
      "phrase_choice"
    ],
    "supportVisibility": "scenario_visible"
  },
  {
    "id": "b1_vocab_apotheke_004",
    "status": "active",
    "skill": "wortschatz",
    "topic": "pharmacy_medicine",
    "subtopic": "article repair",
    "target": "die Apotheke",
    "type": "error_repair",
    "prompt_de": "Korrigiere: Ich gehe zur Apotheker.",
    "answer": "Ich gehe zur Apotheke.",
    "accepted": [
      "Ich gehe zur Apotheke."
    ],
    "translation_en": "Correct: I am going to the pharmacy.",
    "choices": [],
    "correct_choice": "",
    "micro_rule": "die Apotheke = pharmacy; der Apotheker = pharmacist.",
    "difficulty": "medium",
    "family": "apotheke",
    "tags": [
      "pharmacy",
      "word_choice",
      "error_repair"
    ]
  },
  {
    "id": "b1_vocab_apotheke_005",
    "status": "active",
    "skill": "wortschatz",
    "topic": "pharmacy_medicine",
    "subtopic": "production",
    "target": "Apotheke",
    "type": "production_card",
    "prompt_de": "Schreibe eine Frage: Du möchtest wissen, ob ein Medikament in der Apotheke da ist.",
    "answer": "",
    "accepted": [],
    "translation_en": "Write a question: You want to know whether a medicine is available at the pharmacy.",
    "choices": [],
    "correct_choice": "",
    "micro_rule": "Ist ... vorrätig? = Is ... in stock?",
    "difficulty": "hard_b1",
    "family": "apotheke",
    "tags": [
      "pharmacy",
      "production",
      "availability"
    ],
    "useful_phrases": [
      "Ist das Medikament vorrätig?",
      "Haben Sie ... da?",
      "in der Apotheke"
    ],
    "checklist": [
      "Asks availability",
      "Mentions medicine/pharmacy",
      "Polite enough"
    ],
    "model_answer": "Ist das Medikament in Ihrer Apotheke vorrätig?"
  },
  {
    "id": "b1_vocab_untersuchung_001",
    "status": "active",
    "skill": "wortschatz",
    "topic": "doctor_appointments",
    "subtopic": "medical examination",
    "target": "die Untersuchung",
    "type": "typed_cloze",
    "prompt_de": "Beim Arzt: Die ___ dauert ungefähr zwanzig Minuten.",
    "answer": "Untersuchung",
    "accepted": [
      "Untersuchung"
    ],
    "translation_en": "At the doctor's office: The examination takes about twenty minutes.",
    "choices": [],
    "correct_choice": "",
    "micro_rule": "Completed: Die Untersuchung dauert zwanzig Minuten. Untersuchung is a medical examination or check-up.",
    "difficulty": "easy",
    "family": "untersuchung",
    "tags": [
      "doctor",
      "examination"
    ],
    "sourceCleanupBatch": "v0.85.7-under-contextualised-clozes",
    "feedbackCleanupBatch": "v0.85.8-feedback-cleanup"
  },
  {
    "id": "b1_vocab_untersuchung_002",
    "status": "active",
    "skill": "wortschatz",
    "topic": "doctor_appointments",
    "subtopic": "medical examination",
    "target": "untersuchen",
    "type": "typed_cloze",
    "prompt_de": "Die Ärztin möchte mich ___.",
    "answer": "untersuchen",
    "accepted": [
      "untersuchen"
    ],
    "translation_en": "The doctor wants to examine me.",
    "choices": [],
    "correct_choice": "",
    "micro_rule": "untersuchen = to examine.",
    "difficulty": "medium",
    "family": "untersuchung",
    "tags": [
      "doctor",
      "verb",
      "examination"
    ]
  },
  {
    "id": "b1_vocab_untersuchung_003",
    "status": "active",
    "skill": "wortschatz",
    "topic": "doctor_appointments",
    "subtopic": "appointment purpose",
    "target": "zur Untersuchung kommen",
    "type": "phrase_choice",
    "prompt_de": "Sie haben einen Termin für eine medizinische Prüfung. Welche Formulierung passt?",
    "answer": "Ich komme zur Untersuchung.",
    "accepted": [
      "Ich komme zur Untersuchung."
    ],
    "translation_en": "Which phrase fits at the doctor's office?",
    "learnerCue": "Which phrase fits at the doctor's office?",
    "choices": [
      "Ich komme zur Untersuchung.",
      "Ich komme zur Besprechung.",
      "Ich komme zum Vorstellungsgespräch."
    ],
    "correct_choice": "Ich komme zur Untersuchung.",
    "micro_rule": "„Untersuchung“ is the medical examination.",
    "difficulty": "medium",
    "family": "untersuchung",
    "tags": [
      "doctor",
      "phrase_choice",
      "appointment"
    ],
    "supportVisibility": "scenario_visible"
  },
  {
    "id": "b1_vocab_untersuchung_004",
    "status": "active",
    "skill": "wortschatz",
    "topic": "doctor_appointments",
    "subtopic": "article repair",
    "target": "die Untersuchung",
    "type": "error_repair",
    "prompt_de": "Korrigiere: Der Untersuchung dauert lange.",
    "answer": "Die Untersuchung dauert lange.",
    "accepted": [
      "Die Untersuchung dauert lange."
    ],
    "translation_en": "Correct: The examination takes a long time.",
    "choices": [],
    "correct_choice": "",
    "micro_rule": "die Untersuchung → Die Untersuchung.",
    "difficulty": "easy",
    "family": "untersuchung",
    "tags": [
      "doctor",
      "article",
      "error_repair"
    ]
  },
  {
    "id": "b1_vocab_untersuchung_005",
    "status": "active",
    "skill": "wortschatz",
    "topic": "doctor_appointments",
    "subtopic": "production",
    "target": "Untersuchung",
    "type": "production_card",
    "prompt_de": "Schreibe einen Satz: Du hast morgen eine Untersuchung beim Arzt.",
    "answer": "",
    "accepted": [],
    "translation_en": "Write a sentence: You have an examination at the doctor tomorrow.",
    "choices": [],
    "correct_choice": "",
    "micro_rule": "beim Arzt = at the doctor’s office.",
    "difficulty": "medium",
    "family": "untersuchung",
    "tags": [
      "doctor",
      "production",
      "appointment"
    ],
    "useful_phrases": [
      "Ich habe morgen ...",
      "eine Untersuchung",
      "beim Arzt"
    ],
    "checklist": [
      "Mentions tomorrow",
      "Mentions examination",
      "Mentions doctor"
    ],
    "model_answer": "Ich habe morgen eine Untersuchung beim Arzt."
  },
  {
    "id": "b1_vocab_beschwerden_001",
    "status": "active",
    "skill": "wortschatz",
    "topic": "illness_symptoms",
    "subtopic": "symptoms",
    "target": "die Beschwerden",
    "type": "typed_cloze",
    "prompt_de": "Die Ärztin fragt: Welche ___ haben Sie?",
    "answer": "Beschwerden",
    "accepted": [
      "Beschwerden"
    ],
    "translation_en": "The doctor asks: What symptoms/problems do you have?",
    "choices": [],
    "correct_choice": "",
    "micro_rule": "Completed: Welche Beschwerden haben Sie? At the doctor, Beschwerden usually means symptoms.",
    "difficulty": "easy",
    "family": "beschwerden",
    "tags": [
      "symptoms",
      "doctor",
      "plural"
    ],
    "sourceCleanupBatch": "v0.85.7-under-contextualised-clozes",
    "feedbackCleanupBatch": "v0.85.8-feedback-cleanup"
  },
  {
    "id": "b1_vocab_beschwerden_002",
    "status": "active",
    "skill": "wortschatz",
    "topic": "illness_symptoms",
    "subtopic": "symptoms duration",
    "target": "Beschwerden haben",
    "type": "typed_cloze",
    "prompt_de": "Ich habe seit drei Tagen ___.",
    "answer": "Beschwerden",
    "accepted": [
      "Beschwerden"
    ],
    "translation_en": "I have had symptoms/problems for three days.",
    "choices": [],
    "correct_choice": "",
    "micro_rule": "Beschwerden haben = to have symptoms/problems.",
    "difficulty": "medium",
    "family": "beschwerden",
    "tags": [
      "symptoms",
      "doctor",
      "duration"
    ]
  },
  {
    "id": "b1_vocab_beschwerden_003",
    "status": "active",
    "skill": "wortschatz",
    "topic": "illness_symptoms",
    "subtopic": "doctor question",
    "target": "Beschwerden",
    "type": "phrase_choice",
    "prompt_de": "Welche Frage fragt nach Symptomen?",
    "answer": "Welche Beschwerden haben Sie?",
    "accepted": [
      "Welche Beschwerden haben Sie?"
    ],
    "translation_en": "Which question does a doctor ask?",
    "learnerCue": "Which question does a doctor ask?",
    "choices": [
      "Welche Beschwerden haben Sie?",
      "Welche Medikamente nehmen Sie?",
      "Welche Krankenkasse haben Sie?"
    ],
    "correct_choice": "Welche Beschwerden haben Sie?",
    "micro_rule": "„Beschwerden“ means symptoms/complaints in a medical context.",
    "difficulty": "easy",
    "family": "beschwerden",
    "tags": [
      "symptoms",
      "doctor",
      "phrase_choice"
    ],
    "supportVisibility": "scenario_visible"
  },
  {
    "id": "b1_vocab_beschwerden_004",
    "status": "active",
    "skill": "wortschatz",
    "topic": "illness_symptoms",
    "subtopic": "plural repair",
    "target": "Beschwerden",
    "type": "error_repair",
    "prompt_de": "Korrigiere: Ich habe seit gestern eine Beschwerden.",
    "answer": "Ich habe seit gestern Beschwerden.",
    "accepted": [
      "Ich habe seit gestern Beschwerden."
    ],
    "translation_en": "Correct: I have had symptoms/problems since yesterday.",
    "choices": [],
    "correct_choice": "",
    "micro_rule": "Beschwerden is normally plural here: Beschwerden haben.",
    "difficulty": "medium",
    "family": "beschwerden",
    "tags": [
      "symptoms",
      "plural",
      "error_repair"
    ]
  },
  {
    "id": "b1_vocab_beschwerden_005",
    "status": "active",
    "skill": "wortschatz",
    "topic": "illness_symptoms",
    "subtopic": "production",
    "target": "Beschwerden",
    "type": "production_card",
    "prompt_de": "Schreibe einen Satz: Du hast seit drei Tagen Beschwerden.",
    "answer": "",
    "accepted": [],
    "translation_en": "Write a sentence: You have had symptoms/problems for three days.",
    "choices": [],
    "correct_choice": "",
    "micro_rule": "seit + present tense: Ich habe seit drei Tagen ...",
    "difficulty": "medium",
    "family": "beschwerden",
    "tags": [
      "symptoms",
      "production",
      "doctor"
    ],
    "useful_phrases": [
      "Ich habe seit ...",
      "Beschwerden",
      "seit drei Tagen"
    ],
    "checklist": [
      "Mentions symptoms",
      "Mentions duration",
      "Uses seit correctly"
    ],
    "model_answer": "Ich habe seit drei Tagen Beschwerden."
  },
  {
    "id": "b1_vocab_bewerbung_001",
    "status": "active",
    "skill": "wortschatz",
    "topic": "applications",
    "subtopic": "job application",
    "target": "die Bewerbung",
    "type": "typed_cloze",
    "prompt_de": "Für die Stelle schicke ich Ihnen meine ___ per E-Mail.",
    "answer": "Bewerbung",
    "accepted": [
      "Bewerbung"
    ],
    "translation_en": "For the position, I am sending you my application by email.",
    "choices": [],
    "correct_choice": "",
    "micro_rule": "Completed: meine Bewerbung per E-Mail schicken. Bewerbung is the application for a job or position.",
    "difficulty": "easy",
    "family": "bewerbung",
    "tags": [
      "application",
      "email",
      "work"
    ],
    "sourceCleanupBatch": "v0.85.7-under-contextualised-clozes",
    "feedbackCleanupBatch": "v0.85.8-feedback-cleanup"
  },
  {
    "id": "b1_vocab_bewerbung_002",
    "status": "active",
    "skill": "wortschatz",
    "topic": "applications",
    "subtopic": "applying",
    "target": "sich bewerben",
    "type": "typed_cloze",
    "prompt_de": "Ich möchte mich um die Stelle ___.",
    "answer": "bewerben",
    "accepted": [
      "bewerben"
    ],
    "translation_en": "I would like to apply for the position.",
    "choices": [],
    "correct_choice": "",
    "micro_rule": "sich um eine Stelle bewerben = to apply for a position.",
    "difficulty": "hard_b1",
    "family": "bewerbung",
    "tags": [
      "application",
      "reflexive",
      "job"
    ]
  },
  {
    "id": "b1_vocab_bewerbung_003",
    "status": "active",
    "skill": "wortschatz",
    "topic": "applications",
    "subtopic": "application email",
    "target": "Bewerbungsunterlagen",
    "type": "phrase_choice",
    "prompt_de": "Welche Formulierung passt in eine Bewerbungsmail mit Anlagen?",
    "answer": "Im Anhang finden Sie meine Bewerbungsunterlagen.",
    "accepted": [
      "Im Anhang finden Sie meine Bewerbungsunterlagen."
    ],
    "translation_en": "Which phrase fits in an application email?",
    "learnerCue": "Which phrase fits in an application email?",
    "choices": [
      "Im Anhang finden Sie meine Bewerbungsunterlagen.",
      "Im Anhang finden Sie meine Krankmeldung.",
      "Im Anhang ist die Lieferung."
    ],
    "correct_choice": "Im Anhang finden Sie meine Bewerbungsunterlagen.",
    "micro_rule": "„Bewerbungsunterlagen“ are the application documents.",
    "difficulty": "medium",
    "family": "bewerbung",
    "tags": [
      "application",
      "email",
      "phrase_choice"
    ],
    "supportVisibility": "scenario_visible"
  },
  {
    "id": "b1_vocab_bewerbung_004",
    "status": "active",
    "skill": "wortschatz",
    "topic": "applications",
    "subtopic": "reflexive repair",
    "target": "sich bewerben",
    "type": "error_repair",
    "prompt_de": "Korrigiere: Ich möchte um die Stelle bewerben.",
    "answer": "Ich möchte mich um die Stelle bewerben.",
    "accepted": [
      "Ich möchte mich um die Stelle bewerben."
    ],
    "translation_en": "Correct: I would like to apply for the position.",
    "choices": [],
    "correct_choice": "",
    "micro_rule": "sich bewerben needs a reflexive pronoun: mich.",
    "difficulty": "medium",
    "family": "bewerbung",
    "tags": [
      "application",
      "reflexive",
      "error_repair"
    ]
  },
  {
    "id": "b1_vocab_bewerbung_005",
    "status": "active",
    "skill": "wortschatz",
    "topic": "applications",
    "subtopic": "production",
    "target": "Bewerbung",
    "type": "production_card",
    "prompt_de": "Schreibe einen höflichen Satz: Du schickst deine Bewerbung im Anhang.",
    "answer": "",
    "accepted": [],
    "translation_en": "Write a polite sentence: You are sending your application as an attachment.",
    "choices": [],
    "correct_choice": "",
    "micro_rule": "im Anhang = attached / in the attachment.",
    "difficulty": "medium",
    "family": "bewerbung",
    "tags": [
      "application",
      "production",
      "email"
    ],
    "useful_phrases": [
      "Im Anhang finden Sie meine Bewerbung.",
      "Im Anhang finden Sie meine Unterlagen.",
      "Ich bewerbe mich um die Stelle.",
      "Bei Fragen melden Sie sich gern.",
      "Mit freundlichen Grüßen"
    ],
    "checklist": [
      "Mentions attachment",
      "Mentions Bewerbung",
      "Formal enough for email"
    ],
    "model_answer": "Im Anhang finden Sie meine Bewerbung und meine Unterlagen."
  },
  {
    "id": "b1_vocab_lebenslauf_001",
    "status": "active",
    "skill": "wortschatz",
    "topic": "applications",
    "subtopic": "cv",
    "target": "der Lebenslauf",
    "type": "typed_cloze",
    "prompt_de": "Bei meiner Bewerbung: Mein ___ ist im Anhang.",
    "answer": "Lebenslauf",
    "accepted": [
      "Lebenslauf"
    ],
    "translation_en": "For my application: My CV is attached.",
    "choices": [],
    "correct_choice": "",
    "micro_rule": "Completed: Mein Lebenslauf ist im Anhang. Lebenslauf is the CV attached to an application.",
    "difficulty": "easy",
    "family": "lebenslauf",
    "tags": [
      "cv",
      "application",
      "email"
    ],
    "sourceCleanupBatch": "v0.85.7-under-contextualised-clozes",
    "feedbackCleanupBatch": "v0.85.8-feedback-cleanup"
  },
  {
    "id": "b1_vocab_lebenslauf_002",
    "status": "active",
    "skill": "wortschatz",
    "topic": "applications",
    "subtopic": "cv update",
    "target": "aktualisieren",
    "type": "typed_cloze",
    "prompt_de": "Ich muss meinen Lebenslauf noch ___.",
    "answer": "aktualisieren",
    "accepted": [
      "aktualisieren"
    ],
    "translation_en": "I still have to update my CV.",
    "choices": [],
    "correct_choice": "",
    "micro_rule": "aktualisieren = to update.",
    "difficulty": "medium",
    "family": "lebenslauf",
    "tags": [
      "cv",
      "application",
      "verb"
    ]
  },
  {
    "id": "b1_vocab_lebenslauf_003",
    "status": "active",
    "skill": "wortschatz",
    "topic": "applications",
    "subtopic": "email attachment",
    "target": "Lebenslauf anhängen",
    "type": "phrase_choice",
    "prompt_de": "Sie schicken Ihren CV mit. Welche Formulierung passt?",
    "answer": "Ich habe meinen Lebenslauf angehängt.",
    "accepted": [
      "Ich habe meinen Lebenslauf angehängt."
    ],
    "translation_en": "Which phrase fits if you are sending your CV with the email?",
    "learnerCue": "Which phrase fits if you are sending your CV with the email?",
    "choices": [
      "Ich habe meinen Lebenslauf angehängt.",
      "Ich habe meinen Lebenslauf ausgefüllt.",
      "Ich habe meinen Lebenslauf verschoben."
    ],
    "correct_choice": "Ich habe meinen Lebenslauf angehängt.",
    "micro_rule": "„Angehängt“ fits a document attached to an email.",
    "difficulty": "medium",
    "family": "lebenslauf",
    "tags": [
      "cv",
      "email",
      "phrase_choice"
    ],
    "supportVisibility": "scenario_visible"
  },
  {
    "id": "b1_vocab_lebenslauf_004",
    "status": "active",
    "skill": "wortschatz",
    "topic": "applications",
    "subtopic": "article repair",
    "target": "der Lebenslauf",
    "type": "error_repair",
    "prompt_de": "Korrigiere: Die Lebenslauf ist im Anhang.",
    "answer": "Der Lebenslauf ist im Anhang.",
    "accepted": [
      "Der Lebenslauf ist im Anhang."
    ],
    "translation_en": "Correct: The CV is attached.",
    "choices": [],
    "correct_choice": "",
    "micro_rule": "der Lebenslauf → Der Lebenslauf.",
    "difficulty": "easy",
    "family": "lebenslauf",
    "tags": [
      "cv",
      "article",
      "error_repair"
    ]
  },
  {
    "id": "b1_vocab_lebenslauf_005",
    "status": "active",
    "skill": "wortschatz",
    "topic": "applications",
    "subtopic": "production",
    "target": "Lebenslauf",
    "type": "production_card",
    "prompt_de": "Schreibe einen Satz: Dein Lebenslauf ist im Anhang.",
    "answer": "",
    "accepted": [],
    "translation_en": "Write a sentence: Your CV is attached.",
    "choices": [],
    "correct_choice": "",
    "micro_rule": "Use mein Lebenslauf in a formal application email.",
    "difficulty": "easy",
    "family": "lebenslauf",
    "tags": [
      "cv",
      "production",
      "email"
    ],
    "useful_phrases": [
      "Mein Lebenslauf ist im Anhang.",
      "Im Anhang finden Sie ...",
      "meine Unterlagen"
    ],
    "checklist": [
      "Mentions Lebenslauf",
      "Mentions attachment",
      "Formal enough"
    ],
    "model_answer": "Im Anhang finden Sie meinen Lebenslauf."
  },
  {
    "id": "b1_vocab_stelle_001",
    "status": "active",
    "skill": "wortschatz",
    "topic": "applications",
    "subtopic": "job position",
    "target": "die Stelle",
    "type": "typed_cloze",
    "prompt_de": "Ich suche Arbeit und interessiere mich für die ___.",
    "answer": "Stelle",
    "accepted": [
      "Stelle"
    ],
    "translation_en": "I am looking for work and am interested in the position.",
    "choices": [],
    "correct_choice": "",
    "micro_rule": "Completed: sich für die Stelle interessieren. Stelle means job position.",
    "difficulty": "easy",
    "family": "stelle",
    "tags": [
      "job",
      "application"
    ],
    "sourceCleanupBatch": "v0.85.7-under-contextualised-clozes",
    "feedbackCleanupBatch": "v0.85.8-feedback-cleanup"
  },
  {
    "id": "b1_vocab_stelle_002",
    "status": "active",
    "skill": "wortschatz",
    "topic": "applications",
    "subtopic": "job advert",
    "target": "freie Stelle",
    "type": "typed_cloze",
    "prompt_de": "Gibt es in Ihrer Firma eine freie ___?",
    "answer": "Stelle",
    "accepted": [
      "Stelle"
    ],
    "translation_en": "Is there a vacant position in your company?",
    "choices": [],
    "correct_choice": "",
    "micro_rule": "eine freie Stelle = a vacant position.",
    "difficulty": "medium",
    "family": "stelle",
    "tags": [
      "job",
      "application",
      "workplace"
    ]
  },
  {
    "id": "b1_vocab_stelle_003",
    "status": "active",
    "skill": "wortschatz",
    "topic": "applications",
    "subtopic": "applying for a job",
    "target": "sich um eine Stelle bewerben",
    "type": "phrase_choice",
    "prompt_de": "Sie sagen, dass Sie sich auf die Stelle bewerben. Welche Formulierung passt?",
    "answer": "Ich bewerbe mich um die Stelle als Verkäufer.",
    "accepted": [
      "Ich bewerbe mich um die Stelle als Verkäufer."
    ],
    "translation_en": "Which phrase fits in a job application?",
    "learnerCue": "Which phrase fits in a job application?",
    "choices": [
      "Ich bewerbe mich um die Stelle als Verkäufer.",
      "Ich interessiere mich für die Stelle als Verkäufer.",
      "Ich beschwere mich über die Stelle als Verkäufer."
    ],
    "correct_choice": "Ich bewerbe mich um die Stelle als Verkäufer.",
    "micro_rule": "„Sich um die Stelle bewerben“ is the standard application frame.",
    "difficulty": "medium",
    "family": "stelle",
    "tags": [
      "job",
      "application",
      "phrase_choice"
    ],
    "supportVisibility": "scenario_visible"
  },
  {
    "id": "b1_vocab_stelle_004",
    "status": "active",
    "skill": "wortschatz",
    "topic": "applications",
    "subtopic": "case repair",
    "target": "die Stelle",
    "type": "error_repair",
    "prompt_de": "Korrigiere: Ich interessiere mich für der Stelle.",
    "answer": "Ich interessiere mich für die Stelle.",
    "accepted": [
      "Ich interessiere mich für die Stelle."
    ],
    "translation_en": "Correct: I am interested in the position.",
    "choices": [],
    "correct_choice": "",
    "micro_rule": "für + Akkusativ: für die Stelle.",
    "difficulty": "medium",
    "family": "stelle",
    "tags": [
      "job",
      "case",
      "error_repair"
    ]
  },
  {
    "id": "b1_vocab_stelle_005",
    "status": "active",
    "skill": "wortschatz",
    "topic": "applications",
    "subtopic": "production",
    "target": "Stelle",
    "type": "production_card",
    "prompt_de": "Schreibe einen Satz: Du interessierst dich für eine Stelle.",
    "answer": "",
    "accepted": [],
    "translation_en": "Write a sentence: You are interested in a position.",
    "choices": [],
    "correct_choice": "",
    "micro_rule": "sich interessieren für + Akkusativ.",
    "difficulty": "medium",
    "family": "stelle",
    "tags": [
      "job",
      "production",
      "application"
    ],
    "useful_phrases": [
      "Ich interessiere mich für ...",
      "die Stelle",
      "in Ihrer Firma"
    ],
    "checklist": [
      "Uses Stelle",
      "Uses interessieren correctly",
      "Application context"
    ],
    "model_answer": "Ich interessiere mich für die Stelle in Ihrer Firma."
  },
  {
    "id": "b1_vocab_vorstellungsgespraech_001",
    "status": "active",
    "skill": "wortschatz",
    "topic": "applications",
    "subtopic": "job interview",
    "target": "das Vorstellungsgespräch",
    "type": "typed_cloze",
    "prompt_de": "Ich habe morgen ein ___ bei der Firma.",
    "answer": "Vorstellungsgespräch",
    "accepted": [
      "Vorstellungsgespräch"
    ],
    "translation_en": "I have a job interview at the company tomorrow.",
    "choices": [],
    "correct_choice": "",
    "micro_rule": "Completed: ein Vorstellungsgespräch bei der Firma. Vorstellungsgespräch is a job interview.",
    "difficulty": "easy",
    "family": "vorstellungsgespraech",
    "tags": [
      "job_interview",
      "application"
    ],
    "sourceCleanupBatch": "v0.85.7-under-contextualised-clozes",
    "feedbackCleanupBatch": "v0.85.8-feedback-cleanup"
  },
  {
    "id": "b1_vocab_vorstellungsgespraech_002",
    "status": "active",
    "skill": "wortschatz",
    "topic": "applications",
    "subtopic": "confirming interview",
    "target": "bestätigen",
    "type": "typed_cloze",
    "prompt_de": "Ich möchte den Termin für das Vorstellungsgespräch ___.",
    "answer": "bestätigen",
    "accepted": [
      "bestätigen"
    ],
    "translation_en": "I would like to confirm the appointment for the job interview.",
    "choices": [],
    "correct_choice": "",
    "micro_rule": "einen Termin bestätigen = to confirm an appointment.",
    "difficulty": "medium",
    "family": "vorstellungsgespraech",
    "tags": [
      "job_interview",
      "confirmation",
      "email"
    ]
  },
  {
    "id": "b1_vocab_vorstellungsgespraech_003",
    "status": "active",
    "skill": "wortschatz",
    "topic": "applications",
    "subtopic": "interview invitation",
    "target": "Einladung zum Vorstellungsgespräch",
    "type": "phrase_choice",
    "prompt_de": "Sie antworten auf eine Einladung. Welche Formulierung passt?",
    "answer": "Vielen Dank für die Einladung zum Vorstellungsgespräch.",
    "accepted": [
      "Vielen Dank für die Einladung zum Vorstellungsgespräch."
    ],
    "translation_en": "Which phrase fits if you are replying to an invitation?",
    "learnerCue": "Which phrase fits if you are replying to an invitation?",
    "choices": [
      "Vielen Dank für die Einladung zum Vorstellungsgespräch.",
      "Vielen Dank für Ihre Bewerbung.",
      "Vielen Dank für die Krankmeldung."
    ],
    "correct_choice": "Vielen Dank für die Einladung zum Vorstellungsgespräch.",
    "micro_rule": "This thanks the sender for the interview invitation.",
    "difficulty": "medium",
    "family": "vorstellungsgespraech",
    "tags": [
      "job_interview",
      "email",
      "phrase_choice"
    ],
    "supportVisibility": "scenario_visible"
  },
  {
    "id": "b1_vocab_vorstellungsgespraech_004",
    "status": "active",
    "skill": "wortschatz",
    "topic": "applications",
    "subtopic": "article repair",
    "target": "das Vorstellungsgespräch",
    "type": "error_repair",
    "prompt_de": "Korrigiere: Ich habe morgen einen Vorstellungsgespräch.",
    "answer": "Ich habe morgen ein Vorstellungsgespräch.",
    "accepted": [
      "Ich habe morgen ein Vorstellungsgespräch."
    ],
    "translation_en": "Correct: I have a job interview tomorrow.",
    "choices": [],
    "correct_choice": "",
    "micro_rule": "das Vorstellungsgespräch → ein Vorstellungsgespräch.",
    "difficulty": "easy",
    "family": "vorstellungsgespraech",
    "tags": [
      "job_interview",
      "article",
      "error_repair"
    ]
  },
  {
    "id": "b1_vocab_vorstellungsgespraech_005",
    "status": "active",
    "skill": "wortschatz",
    "topic": "applications",
    "subtopic": "production",
    "target": "Vorstellungsgespräch",
    "type": "production_card",
    "prompt_de": "Schreibe einen höflichen Satz: Du bestätigst den Termin für ein Vorstellungsgespräch.",
    "answer": "",
    "accepted": [],
    "translation_en": "Write a polite sentence: You confirm the appointment for a job interview.",
    "choices": [],
    "correct_choice": "",
    "micro_rule": "Use bestätigen for confirming appointments.",
    "difficulty": "medium",
    "family": "vorstellungsgespraech",
    "tags": [
      "job_interview",
      "production",
      "email"
    ],
    "useful_phrases": [
      "Vielen Dank für die Einladung.",
      "Ich bestätige den Termin.",
      "Der Termin für das Vorstellungsgespräch passt mir.",
      "Ich freue mich auf das Gespräch.",
      "Mit freundlichen Grüßen"
    ],
    "checklist": [
      "Mentions confirmation",
      "Mentions interview",
      "Polite tone"
    ],
    "model_answer": "Vielen Dank für die Einladung. Ich bestätige den Termin für das Vorstellungsgespräch und freue mich auf das Gespräch."
  },
  {
    "id": "b1_vocab_erfahrung_001",
    "status": "active",
    "skill": "wortschatz",
    "topic": "workplace",
    "subtopic": "experience",
    "target": "die Erfahrung",
    "type": "typed_cloze",
    "prompt_de": "Ich habe viel ___ im Verkauf.",
    "answer": "Erfahrung",
    "accepted": [
      "Erfahrung"
    ],
    "translation_en": "I have a lot of experience in sales.",
    "choices": [],
    "correct_choice": "",
    "micro_rule": "Erfahrung haben in/mit ... = to have experience in/with ...",
    "difficulty": "easy",
    "family": "erfahrung",
    "tags": [
      "experience",
      "work",
      "application"
    ]
  },
  {
    "id": "b1_vocab_erfahrung_002",
    "status": "active",
    "skill": "wortschatz",
    "topic": "workplace",
    "subtopic": "work experience",
    "target": "Berufserfahrung",
    "type": "typed_cloze",
    "prompt_de": "Ich habe zwei Jahre ___ in diesem Bereich.",
    "answer": "Berufserfahrung",
    "accepted": [
      "Berufserfahrung"
    ],
    "translation_en": "I have two years of professional experience in this field.",
    "choices": [],
    "correct_choice": "",
    "micro_rule": "die Berufserfahrung = professional/work experience.",
    "difficulty": "hard_b1",
    "family": "erfahrung",
    "tags": [
      "experience",
      "work",
      "application"
    ]
  },
  {
    "id": "b1_vocab_erfahrung_003",
    "status": "active",
    "skill": "wortschatz",
    "topic": "workplace",
    "subtopic": "application strength",
    "target": "Erfahrung mit Kunden",
    "type": "phrase_choice",
    "prompt_de": "Welche Formulierung passt in eine Bewerbung?",
    "answer": "Ich habe Erfahrung im Umgang mit Kunden.",
    "accepted": [
      "Ich habe Erfahrung im Umgang mit Kunden."
    ],
    "translation_en": "Which phrase fits in a job application?",
    "learnerCue": "Which phrase fits in a job application?",
    "choices": [
      "Ich habe Erfahrung im Umgang mit Kunden.",
      "Ich habe ein Vorstellungsgespräch mit Kunden.",
      "Ich habe Unterlagen im Umgang mit Kunden."
    ],
    "correct_choice": "Ich habe Erfahrung im Umgang mit Kunden.",
    "micro_rule": "„Erfahrung im Umgang mit ...“ describes work experience.",
    "difficulty": "hard_b1",
    "family": "erfahrung",
    "tags": [
      "experience",
      "application",
      "phrase_choice"
    ],
    "supportVisibility": "scenario_visible"
  },
  {
    "id": "b1_vocab_erfahrung_004",
    "status": "active",
    "skill": "wortschatz",
    "topic": "workplace",
    "subtopic": "word choice repair",
    "target": "Erfahrung haben",
    "type": "error_repair",
    "prompt_de": "Korrigiere: Ich bin Erfahrung im Büro.",
    "answer": "Ich habe Erfahrung im Büro.",
    "accepted": [
      "Ich habe Erfahrung im Büro."
    ],
    "translation_en": "Correct: I have experience in the office.",
    "choices": [],
    "correct_choice": "",
    "micro_rule": "Use Erfahrung haben, not Erfahrung sein.",
    "difficulty": "easy",
    "family": "erfahrung",
    "tags": [
      "experience",
      "error_repair",
      "work"
    ]
  },
  {
    "id": "b1_vocab_erfahrung_005",
    "status": "active",
    "skill": "wortschatz",
    "topic": "workplace",
    "subtopic": "production",
    "target": "Erfahrung",
    "type": "production_card",
    "prompt_de": "Schreibe einen Satz: Du hast Erfahrung im Büro oder im Verkauf.",
    "answer": "",
    "accepted": [],
    "translation_en": "Write a sentence: You have experience in an office or in sales.",
    "choices": [],
    "correct_choice": "",
    "micro_rule": "Use Ich habe Erfahrung ...",
    "difficulty": "medium",
    "family": "erfahrung",
    "tags": [
      "experience",
      "production",
      "application"
    ],
    "useful_phrases": [
      "Ich habe Erfahrung im Büro.",
      "Ich habe Erfahrung im Verkauf.",
      "in diesem Bereich"
    ],
    "checklist": [
      "Uses Erfahrung",
      "Names area/context",
      "Natural application style"
    ],
    "model_answer": "Ich habe Erfahrung im Büro und im Umgang mit Kunden."
  },
  {
    "id": "b1_vocab_aufgabe_001",
    "status": "active",
    "skill": "wortschatz",
    "topic": "workplace_course",
    "subtopic": "tasks",
    "target": "die Aufgabe",
    "type": "typed_cloze",
    "prompt_de": "Im Kurs habe ich die ___ noch nicht verstanden.",
    "answer": "Aufgabe",
    "accepted": [
      "Aufgabe"
    ],
    "translation_en": "In the course, I have not understood the task yet.",
    "choices": [],
    "correct_choice": "",
    "micro_rule": "Completed: die Aufgabe noch nicht verstanden. Aufgabe means the task or exercise.",
    "difficulty": "easy",
    "family": "aufgabe",
    "tags": [
      "task",
      "course",
      "work"
    ],
    "sourceCleanupBatch": "v0.85.7-under-contextualised-clozes",
    "feedbackCleanupBatch": "v0.85.8-feedback-cleanup"
  },
  {
    "id": "b1_vocab_aufgabe_002",
    "status": "active",
    "skill": "wortschatz",
    "topic": "workplace_course",
    "subtopic": "finishing tasks",
    "target": "eine Aufgabe erledigen",
    "type": "typed_cloze",
    "prompt_de": "Ich muss diese Aufgabe bis morgen ___.",
    "answer": "erledigen",
    "accepted": [
      "erledigen"
    ],
    "translation_en": "I have to complete this task by tomorrow.",
    "choices": [],
    "correct_choice": "",
    "micro_rule": "eine Aufgabe erledigen = to complete a task.",
    "difficulty": "medium",
    "family": "aufgabe",
    "tags": [
      "task",
      "deadline",
      "work"
    ]
  },
  {
    "id": "b1_vocab_aufgabe_003",
    "status": "active",
    "skill": "wortschatz",
    "topic": "workplace_course",
    "subtopic": "asking for clarification",
    "target": "Aufgabe erklären",
    "type": "phrase_choice",
    "prompt_de": "Sie verstehen eine Aufgabe nicht. Welche Frage passt?",
    "answer": "Könnten Sie die Aufgabe bitte noch einmal erklären?",
    "accepted": [
      "Könnten Sie die Aufgabe bitte noch einmal erklären?"
    ],
    "translation_en": "Which question fits if you do not understand a task?",
    "learnerCue": "Which question fits if you do not understand a task?",
    "choices": [
      "Könnten Sie die Aufgabe bitte noch einmal erklären?",
      "Könnten Sie die Aufgabe bitte bis morgen abgeben?",
      "Könnten Sie die Aufgabe bitte unterschreiben?"
    ],
    "correct_choice": "Könnten Sie die Aufgabe bitte noch einmal erklären?",
    "micro_rule": "This asks for an explanation, not completion or signature.",
    "difficulty": "medium",
    "family": "aufgabe",
    "tags": [
      "task",
      "course",
      "phrase_choice",
      "polite_request"
    ],
    "supportVisibility": "scenario_visible"
  },
  {
    "id": "b1_vocab_aufgabe_004",
    "status": "active",
    "skill": "wortschatz",
    "topic": "workplace_course",
    "subtopic": "article repair",
    "target": "die Aufgabe",
    "type": "error_repair",
    "prompt_de": "Korrigiere: Der Aufgabe ist schwierig.",
    "answer": "Die Aufgabe ist schwierig.",
    "accepted": [
      "Die Aufgabe ist schwierig."
    ],
    "translation_en": "Correct: The task is difficult.",
    "choices": [],
    "correct_choice": "",
    "micro_rule": "die Aufgabe → Die Aufgabe.",
    "difficulty": "easy",
    "family": "aufgabe",
    "tags": [
      "task",
      "article",
      "error_repair"
    ]
  },
  {
    "id": "b1_vocab_aufgabe_005",
    "status": "active",
    "skill": "wortschatz",
    "topic": "workplace_course",
    "subtopic": "production",
    "target": "Aufgabe",
    "type": "production_card",
    "prompt_de": "Schreibe eine höfliche Frage: Du verstehst die Aufgabe nicht.",
    "answer": "",
    "accepted": [],
    "translation_en": "Write a polite question: You do not understand the task.",
    "choices": [],
    "correct_choice": "",
    "micro_rule": "noch einmal = once again.",
    "difficulty": "medium",
    "family": "aufgabe",
    "tags": [
      "task",
      "production",
      "course"
    ],
    "useful_phrases": [
      "Ich verstehe die Aufgabe leider nicht.",
      "Könnten Sie die Aufgabe bitte erklären?",
      "Können Sie das bitte noch einmal sagen?",
      "Was soll ich genau machen?",
      "Vielen Dank für Ihre Hilfe."
    ],
    "checklist": [
      "Says you do not understand",
      "Asks politely",
      "Mentions Aufgabe"
    ],
    "model_answer": "Ich verstehe die Aufgabe leider nicht. Könnten Sie sie bitte noch einmal erklären?"
  },
  {
    "id": "b1_vocab_besprechung_001",
    "status": "active",
    "skill": "wortschatz",
    "topic": "workplace",
    "subtopic": "meetings",
    "target": "die Besprechung",
    "type": "typed_cloze",
    "prompt_de": "Die ___ mit dem Team beginnt um neun Uhr.",
    "answer": "Besprechung",
    "accepted": [
      "Besprechung"
    ],
    "translation_en": "The meeting with the team begins at nine o'clock.",
    "choices": [],
    "correct_choice": "",
    "micro_rule": "Completed: Die Besprechung beginnt um neun Uhr. Besprechung is a meeting or work discussion.",
    "difficulty": "easy",
    "family": "besprechung",
    "tags": [
      "meeting",
      "work"
    ],
    "sourceCleanupBatch": "v0.85.7-under-contextualised-clozes",
    "feedbackCleanupBatch": "v0.85.8-feedback-cleanup"
  },
  {
    "id": "b1_vocab_besprechung_002",
    "status": "active",
    "skill": "wortschatz",
    "topic": "workplace",
    "subtopic": "meeting attendance",
    "target": "an einer Besprechung teilnehmen",
    "type": "typed_cloze",
    "prompt_de": "Ich nehme morgen an einer Besprechung ___.",
    "answer": "teil",
    "accepted": [
      "teil"
    ],
    "translation_en": "I am taking part in a meeting tomorrow.",
    "choices": [],
    "correct_choice": "",
    "micro_rule": "an etwas teilnehmen = to take part in something.",
    "difficulty": "hard_b1",
    "family": "besprechung",
    "tags": [
      "meeting",
      "separable_verb",
      "work"
    ]
  },
  {
    "id": "b1_vocab_besprechung_003",
    "status": "active",
    "skill": "wortschatz",
    "topic": "workplace",
    "subtopic": "rescheduling meeting",
    "target": "Besprechung verschieben",
    "type": "phrase_choice",
    "prompt_de": "Das Meeting soll später stattfinden. Welche Formulierung passt?",
    "answer": "Können wir die Besprechung auf morgen verschieben?",
    "accepted": [
      "Können wir die Besprechung auf morgen verschieben?"
    ],
    "translation_en": "Which phrase fits if a meeting should take place later?",
    "learnerCue": "Which phrase fits if a meeting should take place later?",
    "choices": [
      "Können wir die Besprechung auf morgen verschieben?",
      "Können wir die Besprechung morgen beginnen?",
      "Können wir die Besprechung absagen?"
    ],
    "correct_choice": "Können wir die Besprechung auf morgen verschieben?",
    "micro_rule": "„Auf morgen verschieben“ means move it to tomorrow.",
    "difficulty": "medium",
    "family": "besprechung",
    "tags": [
      "meeting",
      "reschedule",
      "phrase_choice"
    ],
    "supportVisibility": "scenario_visible"
  },
  {
    "id": "b1_vocab_besprechung_004",
    "status": "active",
    "skill": "wortschatz",
    "topic": "workplace",
    "subtopic": "article repair",
    "target": "die Besprechung",
    "type": "error_repair",
    "prompt_de": "Korrigiere: Das Besprechung beginnt um neun Uhr.",
    "answer": "Die Besprechung beginnt um neun Uhr.",
    "accepted": [
      "Die Besprechung beginnt um neun Uhr."
    ],
    "translation_en": "Correct: The meeting begins at nine o'clock.",
    "choices": [],
    "correct_choice": "",
    "micro_rule": "die Besprechung → Die Besprechung.",
    "difficulty": "easy",
    "family": "besprechung",
    "tags": [
      "meeting",
      "article",
      "error_repair"
    ]
  },
  {
    "id": "b1_vocab_besprechung_005",
    "status": "active",
    "skill": "wortschatz",
    "topic": "workplace",
    "subtopic": "production",
    "target": "Besprechung",
    "type": "production_card",
    "prompt_de": "Schreibe einen Satz: Du fragst, ob die Besprechung verschoben werden kann.",
    "answer": "",
    "accepted": [],
    "translation_en": "Write a sentence: You ask whether the meeting can be rescheduled.",
    "choices": [],
    "correct_choice": "",
    "micro_rule": "verschoben werden kann = can be rescheduled.",
    "difficulty": "hard_b1",
    "family": "besprechung",
    "tags": [
      "meeting",
      "production",
      "polite_request"
    ],
    "useful_phrases": [
      "Können wir die Besprechung verschieben?",
      "Wäre es möglich, die Besprechung zu verschieben?",
      "Passt Ihnen morgen?",
      "Ich hätte am ... Zeit.",
      "Vielen Dank für Ihr Verständnis."
    ],
    "checklist": [
      "Mentions Besprechung",
      "Requests rescheduling",
      "Polite enough"
    ],
    "model_answer": "Wäre es möglich, die Besprechung auf morgen zu verschieben? Ich hätte am Nachmittag Zeit."
  },
  {
    "id": "b1_vocab_anmeldung_001",
    "status": "active",
    "skill": "wortschatz",
    "topic": "course_admin",
    "subtopic": "registration",
    "target": "die Anmeldung",
    "type": "typed_cloze",
    "prompt_de": "Die ___ für den Kurs ist online möglich.",
    "answer": "Anmeldung",
    "accepted": [
      "Anmeldung"
    ],
    "translation_en": "Registration for the course is possible online.",
    "choices": [],
    "correct_choice": "",
    "micro_rule": "die Anmeldung = registration.",
    "difficulty": "easy",
    "family": "anmeldung",
    "tags": [
      "course",
      "registration",
      "admin"
    ]
  },
  {
    "id": "b1_vocab_anmeldung_002",
    "status": "active",
    "skill": "wortschatz",
    "topic": "course_admin",
    "subtopic": "registering",
    "target": "sich anmelden",
    "type": "typed_cloze",
    "prompt_de": "Ich möchte mich für den Kurs ___.",
    "answer": "anmelden",
    "accepted": [
      "anmelden"
    ],
    "translation_en": "I would like to register for the course.",
    "choices": [],
    "correct_choice": "",
    "micro_rule": "sich anmelden = to register/sign up.",
    "difficulty": "medium",
    "family": "anmeldung",
    "tags": [
      "course",
      "registration",
      "reflexive"
    ]
  },
  {
    "id": "b1_vocab_anmeldung_003",
    "status": "active",
    "skill": "wortschatz",
    "topic": "course_admin",
    "subtopic": "registration confirmation",
    "target": "Anmeldung bestätigen",
    "type": "phrase_choice",
    "prompt_de": "Sie brauchen eine Bestätigung Ihrer Anmeldung. Welche Bitte passt?",
    "answer": "Könnten Sie mir meine Anmeldung bestätigen?",
    "accepted": [
      "Könnten Sie mir meine Anmeldung bestätigen?"
    ],
    "translation_en": "Which phrase fits if you need confirmation of your registration?",
    "learnerCue": "Which phrase fits if you need confirmation of your registration?",
    "choices": [
      "Könnten Sie mir meine Anmeldung bestätigen?",
      "Könnten Sie mir die Anmeldung schicken?",
      "Könnten Sie die Anmeldung absagen?"
    ],
    "correct_choice": "Könnten Sie mir meine Anmeldung bestätigen?",
    "micro_rule": "„Bestätigen“ is the target action for confirmation.",
    "difficulty": "medium",
    "family": "anmeldung",
    "tags": [
      "course",
      "registration",
      "phrase_choice"
    ],
    "supportVisibility": "scenario_visible"
  },
  {
    "id": "b1_vocab_anmeldung_004",
    "status": "active",
    "skill": "wortschatz",
    "topic": "course_admin",
    "subtopic": "reflexive repair",
    "target": "sich anmelden",
    "type": "error_repair",
    "prompt_de": "Korrigiere: Ich möchte für den Kurs anmelden.",
    "answer": "Ich möchte mich für den Kurs anmelden.",
    "accepted": [
      "Ich möchte mich für den Kurs anmelden."
    ],
    "translation_en": "Correct: I would like to register for the course.",
    "choices": [],
    "correct_choice": "",
    "micro_rule": "sich anmelden needs a reflexive pronoun: mich.",
    "difficulty": "medium",
    "family": "anmeldung",
    "tags": [
      "course",
      "registration",
      "error_repair"
    ]
  },
  {
    "id": "b1_vocab_anmeldung_005",
    "status": "active",
    "skill": "wortschatz",
    "topic": "course_admin",
    "subtopic": "production",
    "target": "Anmeldung",
    "type": "production_card",
    "prompt_de": "Schreibe einen höflichen Satz: Du möchtest dich für einen Kurs anmelden.",
    "answer": "",
    "accepted": [],
    "translation_en": "Write a polite sentence: You would like to register for a course.",
    "choices": [],
    "correct_choice": "",
    "micro_rule": "sich anmelden für + Akkusativ.",
    "difficulty": "medium",
    "family": "anmeldung",
    "tags": [
      "course",
      "production",
      "admin"
    ],
    "useful_phrases": [
      "Ich möchte mich ... anmelden.",
      "für den Kurs",
      "Könnten Sie mir bitte ...?"
    ],
    "checklist": [
      "Uses mich anmelden",
      "Mentions course",
      "Polite wording"
    ],
    "model_answer": "Ich möchte mich gern für den Kurs anmelden."
  },
  {
    "id": "b1_vocab_zugangsdaten_001",
    "status": "active",
    "skill": "wortschatz",
    "topic": "technical_problems",
    "subtopic": "login details",
    "target": "die Zugangsdaten",
    "type": "typed_cloze",
    "prompt_de": "Für den Online-Kurs habe ich meine ___ noch nicht bekommen.",
    "answer": "Zugangsdaten",
    "accepted": [
      "Zugangsdaten"
    ],
    "translation_en": "For the online course, I have not received my login details yet.",
    "choices": [],
    "correct_choice": "",
    "micro_rule": "Completed: meine Zugangsdaten noch nicht bekommen. Zugangsdaten is plural login/access details.",
    "difficulty": "medium",
    "family": "zugangsdaten",
    "tags": [
      "login",
      "technical_problem",
      "course"
    ],
    "sourceCleanupBatch": "v0.85.7-under-contextualised-clozes",
    "feedbackCleanupBatch": "v0.85.8-feedback-cleanup"
  },
  {
    "id": "b1_vocab_zugangsdaten_002",
    "status": "active",
    "skill": "wortschatz",
    "topic": "technical_problems",
    "subtopic": "login problem",
    "target": "sich einloggen",
    "type": "typed_cloze",
    "prompt_de": "Ich kann mich nicht ___.",
    "answer": "einloggen",
    "accepted": [
      "einloggen",
      "anmelden"
    ],
    "translation_en": "I cannot log in.",
    "choices": [],
    "correct_choice": "",
    "micro_rule": "sich einloggen = to log in.",
    "difficulty": "medium",
    "family": "zugangsdaten",
    "tags": [
      "login",
      "technical_problem",
      "reflexive"
    ]
  },
  {
    "id": "b1_vocab_zugangsdaten_003",
    "status": "active",
    "skill": "wortschatz",
    "topic": "technical_problems",
    "subtopic": "requesting login details",
    "target": "Zugangsdaten schicken",
    "type": "phrase_choice",
    "prompt_de": "Sie brauchen Ihre Login-Daten noch einmal. Welche Bitte passt?",
    "answer": "Könnten Sie mir die Zugangsdaten bitte noch einmal schicken?",
    "accepted": [
      "Könnten Sie mir die Zugangsdaten bitte noch einmal schicken?"
    ],
    "translation_en": "Which phrase fits if you need your login details?",
    "learnerCue": "Which phrase fits if you need your login details?",
    "choices": [
      "Könnten Sie mir die Zugangsdaten bitte noch einmal schicken?",
      "Könnten Sie mein Passwort bitte ändern?",
      "Könnten Sie den Termin bitte verschieben?"
    ],
    "correct_choice": "Könnten Sie mir die Zugangsdaten bitte noch einmal schicken?",
    "micro_rule": "This asks for the login data again.",
    "difficulty": "medium",
    "family": "zugangsdaten",
    "tags": [
      "login",
      "polite_request",
      "phrase_choice"
    ],
    "supportVisibility": "scenario_visible"
  },
  {
    "id": "b1_vocab_zugangsdaten_004",
    "status": "active",
    "skill": "wortschatz",
    "topic": "technical_problems",
    "subtopic": "plural repair",
    "target": "die Zugangsdaten",
    "type": "error_repair",
    "prompt_de": "Korrigiere: Der Zugangsdaten funktionieren nicht.",
    "answer": "Die Zugangsdaten funktionieren nicht.",
    "accepted": [
      "Die Zugangsdaten funktionieren nicht."
    ],
    "translation_en": "Correct: The login details do not work.",
    "choices": [],
    "correct_choice": "",
    "micro_rule": "Zugangsdaten is plural: Die Zugangsdaten funktionieren.",
    "difficulty": "medium",
    "family": "zugangsdaten",
    "tags": [
      "login",
      "plural",
      "error_repair"
    ]
  },
  {
    "id": "b1_vocab_zugangsdaten_005",
    "status": "active",
    "skill": "wortschatz",
    "topic": "technical_problems",
    "subtopic": "production",
    "target": "Zugangsdaten",
    "type": "production_card",
    "prompt_de": "Schreibe eine höfliche Nachricht: Du hast deine Zugangsdaten nicht bekommen.",
    "answer": "",
    "accepted": [],
    "translation_en": "Write a polite message: You have not received your login details.",
    "choices": [],
    "correct_choice": "",
    "micro_rule": "noch nicht bekommen = have not received yet.",
    "difficulty": "medium",
    "family": "zugangsdaten",
    "tags": [
      "login",
      "production",
      "technical_problem"
    ],
    "useful_phrases": [
      "Ich habe meine Zugangsdaten noch nicht bekommen.",
      "Ich kann mich nicht einloggen.",
      "Könnten Sie mir die Zugangsdaten bitte schicken?",
      "Können Sie das bitte prüfen?",
      "Vielen Dank für Ihre Hilfe."
    ],
    "checklist": [
      "Mentions missing login details",
      "Polite request",
      "Clear action"
    ],
    "model_answer": "Ich habe meine Zugangsdaten noch nicht bekommen. Könnten Sie mir diese bitte noch einmal schicken?"
  },
  {
    "id": "b1_vocab_fehlermeldung_001",
    "status": "active",
    "skill": "wortschatz",
    "topic": "technical_problems",
    "subtopic": "error message",
    "target": "die Fehlermeldung",
    "type": "typed_cloze",
    "prompt_de": "Auf dem Bildschirm erscheint eine ___.",
    "answer": "Fehlermeldung",
    "accepted": [
      "Fehlermeldung"
    ],
    "translation_en": "An error message appears on the screen.",
    "choices": [],
    "correct_choice": "",
    "micro_rule": "die Fehlermeldung = error message.",
    "difficulty": "easy",
    "family": "fehlermeldung",
    "tags": [
      "technical_problem",
      "error_message"
    ]
  },
  {
    "id": "b1_vocab_fehlermeldung_002",
    "status": "active",
    "skill": "wortschatz",
    "topic": "technical_problems",
    "subtopic": "reporting error",
    "target": "eine Fehlermeldung bekommen",
    "type": "typed_cloze",
    "prompt_de": "Beim Einloggen bekomme ich immer wieder eine ___.",
    "answer": "Fehlermeldung",
    "accepted": [
      "Fehlermeldung"
    ],
    "translation_en": "When logging in, I keep getting an error message.",
    "choices": [],
    "correct_choice": "",
    "micro_rule": "Completed: eine Fehlermeldung bekommen. Fehlermeldung is the error message shown by the system.",
    "difficulty": "medium",
    "family": "fehlermeldung",
    "tags": [
      "technical_problem",
      "error_message",
      "support"
    ],
    "sourceCleanupBatch": "v0.85.7-under-contextualised-clozes",
    "feedbackCleanupBatch": "v0.85.8-feedback-cleanup"
  },
  {
    "id": "b1_vocab_fehlermeldung_003",
    "status": "active",
    "skill": "wortschatz",
    "topic": "technical_problems",
    "subtopic": "support message",
    "target": "Fehlermeldung senden",
    "type": "phrase_choice",
    "prompt_de": "Sie beschreiben eine Fehlermeldung beim Login. Welche Formulierung passt?",
    "answer": "Ich bekomme eine Fehlermeldung, wenn ich mich einlogge.",
    "accepted": [
      "Ich bekomme eine Fehlermeldung, wenn ich mich einlogge."
    ],
    "translation_en": "Which phrase fits if you are describing a problem to support?",
    "learnerCue": "Which phrase fits if you are describing a problem to support?",
    "choices": [
      "Ich bekomme eine Fehlermeldung, wenn ich mich einlogge.",
      "Ich kann mich nicht einloggen, aber es gibt keine Meldung.",
      "Ich habe meine Zugangsdaten vergessen."
    ],
    "correct_choice": "Ich bekomme eine Fehlermeldung, wenn ich mich einlogge.",
    "micro_rule": "This describes an error message during login.",
    "difficulty": "medium",
    "family": "fehlermeldung",
    "tags": [
      "technical_problem",
      "support",
      "phrase_choice"
    ],
    "supportVisibility": "scenario_visible"
  },
  {
    "id": "b1_vocab_fehlermeldung_004",
    "status": "active",
    "skill": "wortschatz",
    "topic": "technical_problems",
    "subtopic": "article repair",
    "target": "eine Fehlermeldung",
    "type": "error_repair",
    "prompt_de": "Korrigiere: Ich bekomme ein Fehlermeldung.",
    "answer": "Ich bekomme eine Fehlermeldung.",
    "accepted": [
      "Ich bekomme eine Fehlermeldung."
    ],
    "translation_en": "Correct: I get an error message.",
    "choices": [],
    "correct_choice": "",
    "micro_rule": "die Fehlermeldung → eine Fehlermeldung.",
    "difficulty": "easy",
    "family": "fehlermeldung",
    "tags": [
      "technical_problem",
      "article",
      "error_repair"
    ]
  },
  {
    "id": "b1_vocab_fehlermeldung_005",
    "status": "active",
    "skill": "wortschatz",
    "topic": "technical_problems",
    "subtopic": "production",
    "target": "Fehlermeldung",
    "type": "production_card",
    "prompt_de": "Schreibe zwei Sätze: Du bekommst eine Fehlermeldung und brauchst Hilfe.",
    "answer": "",
    "accepted": [],
    "translation_en": "Write two sentences: You get an error message and need help.",
    "choices": [],
    "correct_choice": "",
    "micro_rule": "Describe when the problem happens.",
    "difficulty": "medium",
    "family": "fehlermeldung",
    "tags": [
      "technical_problem",
      "production",
      "support"
    ],
    "useful_phrases": [
      "Ich bekomme eine Fehlermeldung.",
      "Die Fehlermeldung erscheint, wenn ich mich einlogge.",
      "Ich kann das Programm nicht öffnen.",
      "Könnten Sie mir bitte helfen?",
      "Können Sie das bitte prüfen?"
    ],
    "checklist": [
      "Mentions error message",
      "Mentions when it happens",
      "Asks for help"
    ],
    "model_answer": "Ich bekomme eine Fehlermeldung, wenn ich mich einlogge. Könnten Sie das bitte prüfen?"
  }
];
}());
