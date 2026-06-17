(function(){
  window.OZMOSIS_CONTENT = window.OZMOSIS_CONTENT || {};

  var SOURCE = "Ozmosis v0.83 Word Order Completion Pass";
  var MODULE = {
    source:SOURCE,
    contentImportVersion:"v0.83",
    sourceFile:"content/b1-word-order.js",
    categoryId:"WORD_ORDER",
    categoryTitle:"Word Order",
    displayModuleId:"WORD_ORDER",
    moduleKey:"word_order",
    contentBankKey:"word_order",
    internalPlanningId:"v0.83_word_order",
    moduleSlug:"word-order",
    moduleTitle:"Word Order",
    levelTrack:"B1",
    cefrTarget:"B1",
    cefr:"B1",
    difficulty:"sprint_core",
    evidenceType:"auto_core",
    activeB1Evidence:true,
    b1PathEligible:false,
    previewOnly:false,
    diagnosticEligible:false,
    dailyEligible:false,
    supportPolicy:"after_answer",
    supportVisibilityPolicy:"after_answer",
    supportPresentation:"post_answer_note",
    reviewEligibilityDefault:"eligible_auto_after_delay",
    delayedReviewEligibility:"eligible_auto_after_delay",
    maxSameSessionEvidence:1,
    sameSessionEvidenceCap:1,
    originalStage3Decision:"v0.83_authored_keep",
    reviewStatus:"authored_v0.83",
    needsHumanReview:false,
    reviewFlag:false,
    issueCodes:[],
    status:"active"
  };

  function unique(values) {
    var seen = {};
    return (values || []).filter(function(value){
      var key = String(value || "");
      if (!key || seen[key]) return false;
      seen[key] = true;
      return true;
    });
  }

  function stripFinalPunctuation(sentence) {
    return String(sentence || "").replace(/[.!?]+$/g, "");
  }

  function choiceObjects(id, answer, choices) {
    return (choices || []).map(function(text, index){
      return {
        id:id + "_choice_" + String(index + 1),
        text:text,
        value:text,
        isCorrect:text === answer
      };
    });
  }

  function base(id, familyId, role, depth, extra) {
    extra = extra || {};
    var target = extra.wordOrderTarget || familyId;
    var triggerWords = unique([extra.triggerWord].concat(extra.triggerWords || []));
    var tags = unique([
      "word_order",
      "satzbau",
      "sentence_building",
      target,
      familyId,
      role,
      depth
    ].concat(triggerWords, extra.tags || []));
    var skillTags = unique([
      "word_order",
      "sentence_building",
      target
    ].concat(triggerWords, extra.skillTags || []));
    var item = Object.assign({}, MODULE, extra, {
      id:id,
      targetFamilyId:"word_order_" + familyId,
      targetId:"word_order_" + familyId + "_" + role,
      variantFamilyId:"word_order_" + familyId,
      siblingVariantGroup:"word_order_" + familyId,
      reviewGroup:"word_order_" + familyId,
      familyType:"word_order",
      familyTarget:extra.familyTarget || target,
      grammarDomain:"word_order",
      grammarFocus:"word_order",
      contrastGroup:extra.contrastGroup || "word_order",
      taskDepth:depth,
      wordOrderTarget:target,
      wordOrderTargets:unique([target].concat(extra.wordOrderTargets || [])),
      triggerWords:triggerWords,
      skillTags:skillTags,
      tags:tags,
      qa:{
        status:"passed_internal",
        checks:{
          b1_relevance:true,
          natural_hochdeutsch:true,
          single_target:true,
          no_genitive_target:true,
          no_adjective_ending_target:true,
          source_safe_original:true,
          connector_meaning_completion:false,
          b2_syntax:false
        },
        qa_note:"Original v0.83 B1 word-order item; route-level browser smoke required after integration."
      }
    });
    delete item.triggerWord;
    return item;
  }

  function choice(id, familyId, role, prompt, answer, choices, support, rule, meta) {
    return base(id, familyId, role, role === "contrast" ? "contrast" : "recognition", Object.assign({}, meta || {}, {
      itemType:"multiple_choice",
      taskType:role === "contrast" ? "Kontrast" : "Auswahl",
      answerMode:"selected_choice_value",
      answerShape:"selected_choice_value",
      prompt_de:prompt,
      answer:answer,
      acceptedAnswers:[answer],
      fullAnswer_de:answer,
      support_en:support,
      microRule:rule,
      targetRule:rule,
      choices:choiceObjects(id, answer, choices)
    }));
  }

  function build(id, familyId, cue, answer, support, rule, meta) {
    return base(id, familyId, "sentence_build", "sentence_building", Object.assign({}, meta || {}, {
      itemType:"word_order_cloze",
      taskType:"Satzbau",
      answerMode:"typed",
      answerShape:"sentence_building",
      prompt_de:"Bringe die Wörter in eine natürliche Reihenfolge: " + cue + " ___",
      learnerCue:cue,
      answer:answer,
      acceptedAnswers:unique([answer, stripFinalPunctuation(answer)]),
      fullAnswer_de:answer,
      support_en:support,
      microRule:rule,
      targetRule:rule
    }));
  }

  function repair(id, familyId, wrong, correct, support, rule, meta) {
    return base(id, familyId, "repair", "repair", Object.assign({}, meta || {}, {
      itemType:"error_repair",
      taskType:"Reparatur",
      answerMode:"typed",
      answerShape:"full_sentence",
      prompt_de:wrong,
      answer:correct,
      acceptedAnswers:[correct],
      fullAnswer_de:correct,
      support_en:support,
      microRule:rule,
      targetRule:rule,
      repairCategory:"word_order"
    }));
  }

  function variableRepair(id, familyId, correct, slots, support, rule, meta) {
    return base(id, familyId, "variable_repair", "repair", Object.assign({}, meta || {}, {
      source:"Ozmosis v0.85 Repair / Transformation Completion Pass",
      contentImportVersion:"v0.85",
      originalStage3Decision:"v0.85_authored_keep",
      reviewStatus:"authored_v0.85",
      itemType:"variable_error_repair",
      taskType:"Reparatur",
      answerMode:"edit_text",
      answerShape:"full_sentence",
      prefillRepairText:true,
      prompt_de:"Korrigiere den Satz.",
      correctSentence_de:correct,
      answer:correct,
      acceptedAnswers:[correct],
      fullAnswer_de:correct,
      support_en:support,
      microRule:rule,
      targetRule:rule,
      repairCategory:"word_order",
      variableErrorRepair:true,
      minErrors:1,
      maxErrors:2,
      errorSlots:slots
    }));
  }

  function transform(id, familyId, role, prompt, answer, support, rule, meta) {
    return base(id, familyId, role, "transformation", Object.assign({}, meta || {}, {
      source:"Ozmosis v0.85 Repair / Transformation Completion Pass",
      contentImportVersion:"v0.85",
      originalStage3Decision:"v0.85_authored_keep",
      reviewStatus:"authored_v0.85",
      itemType:"transformation",
      taskType:"Umformen",
      answerMode:"typed_text",
      answerShape:"controlled_sentence_transformation",
      prompt_de:prompt,
      answer:answer,
      acceptedAnswers:unique([answer, stripFinalPunctuation(answer)]),
      fullAnswer_de:answer,
      support_en:support,
      microRule:rule,
      targetRule:rule,
      strictSurfaceAnswer:true,
      transformationType:(meta && meta.transformationType) || "word_order_transformation"
    }));
  }

  function family(key, meta, rows) {
    return [
      choice("b1_word_order_" + key + "_001", key, "recognition", rows.recognition.prompt, rows.recognition.answer, rows.recognition.choices, rows.recognition.support, rows.recognition.rule, meta),
      build("b1_word_order_" + key + "_002", key, rows.build.cue, rows.build.answer, rows.build.support, rows.build.rule, meta),
      repair("b1_word_order_" + key + "_003", key, rows.repair.wrong, rows.repair.correct, rows.repair.support, rows.repair.rule, meta),
      choice("b1_word_order_" + key + "_004", key, "contrast", rows.contrast.prompt, rows.contrast.answer, rows.contrast.choices, rows.contrast.support, rows.contrast.rule, meta)
    ];
  }

  var items = [];

  [
    family("main_clause_v2_time", {
      familyTarget:"finite verb in position 2 after a time phrase",
      wordOrderTarget:"main_clause_v2",
      wordOrderTargets:["main_clause_v2", "verb_second_after_fronting"],
      tags:["v2_main_clause", "position_2", "main_clause", "time_fronting"],
      skillTags:["v2_main_clause", "position_2", "main_clause"]
    }, {
      recognition:{ prompt:"Welche Reihenfolge ist richtig?", answer:"Morgen rufe ich die Praxis an.", choices:["Morgen rufe ich die Praxis an.", "Morgen ich rufe die Praxis an.", "Ich morgen rufe die Praxis an."], support:"Tomorrow I will call the practice.", rule:"Main clause: the finite verb is in position 2." },
      build:{ cue:"Morgen · rufe · ich · die Praxis · an", answer:"Morgen rufe ich die Praxis an.", support:"Tomorrow I will call the practice.", rule:"If a time phrase starts the sentence, the finite verb still comes second." },
      repair:{ wrong:"Morgen ich rufe die Praxis an.", correct:"Morgen rufe ich die Praxis an.", support:"Tomorrow I will call the practice.", rule:"After a fronted time phrase, put the finite verb before the subject." },
      contrast:{ prompt:"Welche Version hat das Verb in Position 2?", answer:"Heute bringe ich die Unterlagen mit.", choices:["Heute bringe ich die Unterlagen mit.", "Heute ich bringe die Unterlagen mit.", "Heute die Unterlagen bringe ich mit."], support:"Today I am bringing the documents.", rule:"Main clause: Heute counts as position 1, so bringe is position 2." }
    }),
    family("separable_verb_bracket", {
      familyTarget:"separable verb bracket in a main clause",
      wordOrderTarget:"separable_verb_bracket",
      wordOrderTargets:["sentence_bracket", "separable_verb_bracket"],
      tags:["sentence_bracket", "separable_verb_bracket", "separable_verbs", "satzklammer"],
      skillTags:["sentence_bracket", "separable_verb_bracket", "separable_verbs"]
    }, {
      recognition:{ prompt:"Welche Version klingt natürlich?", answer:"Ich rufe Sie morgen zurück.", choices:["Ich rufe Sie morgen zurück.", "Ich zurückrufe Sie morgen.", "Ich rufe zurück Sie morgen."], support:"I will call you back tomorrow.", rule:"Separable verb: the prefix goes to the end in a main clause." },
      build:{ cue:"Ich · rufe · Sie · morgen · zurück", answer:"Ich rufe Sie morgen zurück.", support:"I will call you back tomorrow.", rule:"Sentence bracket: rufe is position 2 and zurück closes the sentence." },
      repair:{ wrong:"Ich zurückrufe Sie morgen.", correct:"Ich rufe Sie morgen zurück.", support:"I will call you back tomorrow.", rule:"Use rufe in position 2 and put zurück at the end." },
      contrast:{ prompt:"Welche Version ist richtig?", answer:"Wir melden uns später an.", choices:["Wir melden uns später an.", "Wir anmelden uns später.", "Wir melden an uns später."], support:"We will register later.", rule:"With separable verbs, the prefix stands at the end." }
    }),
    family("modal_verb_bracket", {
      familyTarget:"modal verb plus infinitive at the end",
      wordOrderTarget:"modal_bracket",
      wordOrderTargets:["sentence_bracket", "modal_bracket"],
      tags:["sentence_bracket", "modal_bracket", "modal_structure", "infinitive_final"],
      skillTags:["sentence_bracket", "modal_bracket", "modal_structure"]
    }, {
      recognition:{ prompt:"Welche Reihenfolge ist richtig?", answer:"Ich muss die Unterlagen mitbringen.", choices:["Ich muss die Unterlagen mitbringen.", "Ich muss mitbringen die Unterlagen.", "Ich die Unterlagen muss mitbringen."], support:"I have to bring the documents.", rule:"Modal bracket: the modal verb is in position 2; the second verb goes to the end." },
      build:{ cue:"Ich · muss · die Unterlagen · mitbringen", answer:"Ich muss die Unterlagen mitbringen.", support:"I have to bring the documents.", rule:"With a modal verb, the infinitive comes at the end." },
      repair:{ wrong:"Ich muss mitbringen die Unterlagen.", correct:"Ich muss die Unterlagen mitbringen.", support:"I have to bring the documents.", rule:"The infinitive mitbringen goes to the end." },
      contrast:{ prompt:"Welche Frage ist richtig?", answer:"Können Sie mich zurückrufen?", choices:["Können Sie mich zurückrufen?", "Können zurückrufen Sie mich?", "Sie können mich zurückrufen?"], support:"Can you call me back?", rule:"Yes/no question: the finite verb comes first; the second verb stays at the end." }
    }),
    family("perfect_verb_bracket", {
      familyTarget:"perfect tense sentence bracket",
      wordOrderTarget:"perfect_bracket",
      wordOrderTargets:["sentence_bracket", "perfect_bracket"],
      tags:["sentence_bracket", "perfect_bracket", "participle_final"],
      skillTags:["sentence_bracket", "perfect_bracket"]
    }, {
      recognition:{ prompt:"Welche Version ist richtig?", answer:"Ich habe die Unterlagen mitgebracht.", choices:["Ich habe die Unterlagen mitgebracht.", "Ich habe mitgebracht die Unterlagen.", "Ich die Unterlagen habe mitgebracht."], support:"I brought the documents.", rule:"Perfect tense: the helper verb is in position 2; the participle goes to the end." },
      build:{ cue:"Ich · habe · die Unterlagen · mitgebracht", answer:"Ich habe die Unterlagen mitgebracht.", support:"I brought the documents.", rule:"Perfect tense: habe opens the bracket and mitgebracht closes it." },
      repair:{ wrong:"Ich habe mitgebracht die Unterlagen.", correct:"Ich habe die Unterlagen mitgebracht.", support:"I brought the documents.", rule:"The past participle goes to the end." },
      contrast:{ prompt:"Welche Version ist natürlich?", answer:"Wir haben den Termin verschoben.", choices:["Wir haben den Termin verschoben.", "Wir haben verschoben den Termin.", "Wir den Termin haben verschoben."], support:"We postponed the appointment.", rule:"Perfect tense: the participle stands at the end." }
    }),
    family("subordinate_weil_final", {
      familyTarget:"verb-final subordinate clause after weil",
      wordOrderTarget:"subordinate_verb_final",
      wordOrderTargets:["subordinate_verb_final"],
      triggerWord:"weil",
      tags:["subordinate_verb_final", "verb_final", "weil", "nebensatz"],
      skillTags:["subordinate_verb_final", "verb_final", "weil"]
    }, {
      recognition:{ prompt:"Welche Version hat die richtige Verbposition?", answer:"Ich bleibe zu Hause, weil ich krank bin.", choices:["Ich bleibe zu Hause, weil ich krank bin.", "Ich bleibe zu Hause, weil ich bin krank.", "Weil ich krank bin, ich bleibe zu Hause."], support:"I am staying at home because I am ill.", rule:"Subordinate clause: after weil, the finite verb goes to the end." },
      build:{ cue:"Ich bleibe zu Hause, weil · ich · krank · bin", answer:"Ich bleibe zu Hause, weil ich krank bin.", support:"I am staying at home because I am ill.", rule:"After weil, the finite verb goes to the end of the subordinate clause." },
      repair:{ wrong:"Ich bleibe zu Hause, weil ich bin krank.", correct:"Ich bleibe zu Hause, weil ich krank bin.", support:"I am staying at home because I am ill.", rule:"Move bin to the end after weil." },
      contrast:{ prompt:"Welche Version ist richtig?", answer:"Ich rufe an, weil der Bus spät kommt.", choices:["Ich rufe an, weil der Bus spät kommt.", "Ich rufe an, weil kommt der Bus spät.", "Ich rufe an, weil der Bus kommt spät."], support:"I am calling because the bus is late.", rule:"After weil, the finite verb comes at the end." }
    }),
    family("fronted_subordinate_inversion", {
      familyTarget:"main clause inversion after a fronted subordinate clause",
      wordOrderTarget:"fronted_subordinate_clause",
      wordOrderTargets:["fronted_subordinate_clause", "subordinate_verb_final"],
      triggerWord:"wenn",
      tags:["fronted_subordinate_clause", "wenn", "inversion", "verb_second_after_fronting"],
      skillTags:["fronted_subordinate_clause", "verb_second_after_fronting", "wenn"]
    }, {
      recognition:{ prompt:"Welche Version ist richtig?", answer:"Wenn ich Zeit habe, rufe ich zurück.", choices:["Wenn ich Zeit habe, rufe ich zurück.", "Wenn ich Zeit habe, ich rufe zurück.", "Wenn ich habe Zeit, rufe ich zurück."], support:"If I have time, I will call back.", rule:"Fronted clause: after a wenn-clause, the main verb comes next." },
      build:{ cue:"Wenn ich Zeit habe, · rufe · ich · zurück", answer:"Wenn ich Zeit habe, rufe ich zurück.", support:"If I have time, I will call back.", rule:"After the subordinate clause, put the finite main verb immediately after the comma." },
      repair:{ wrong:"Wenn ich Zeit habe, ich rufe zurück.", correct:"Wenn ich Zeit habe, rufe ich zurück.", support:"If I have time, I will call back.", rule:"After a fronted subordinate clause, the main verb comes before the subject." },
      contrast:{ prompt:"Welche Version ist natürlich?", answer:"Weil ich krank bin, bleibe ich zu Hause.", choices:["Weil ich krank bin, bleibe ich zu Hause.", "Weil ich krank bin, ich bleibe zu Hause.", "Weil ich bin krank, bleibe ich zu Hause."], support:"Because I am ill, I am staying at home.", rule:"Fronted subordinate clause: the main clause begins with the finite verb." }
    }),
    family("question_order", {
      familyTarget:"verb position in questions",
      wordOrderTarget:"question_order",
      wordOrderTargets:["question_order"],
      tags:["question_order", "w_question", "yes_no_question"],
      skillTags:["question_order", "w_question", "yes_no_question"]
    }, {
      recognition:{ prompt:"Welche Frage ist richtig?", answer:"Wann beginnt der Kurs?", choices:["Wann beginnt der Kurs?", "Wann der Kurs beginnt?", "Der Kurs beginnt wann?"], support:"When does the course begin?", rule:"W-question: question word + finite verb + subject." },
      build:{ cue:"Wann · beginnt · der Kurs", answer:"Wann beginnt der Kurs?", support:"When does the course begin?", rule:"In a W-question, the finite verb comes directly after the question word." },
      repair:{ wrong:"Wann der Kurs beginnt?", correct:"Wann beginnt der Kurs?", support:"When does the course begin?", rule:"Put the finite verb directly after the W-word." },
      contrast:{ prompt:"Welche Ja/Nein-Frage ist richtig?", answer:"Haben Sie morgen Zeit?", choices:["Haben Sie morgen Zeit?", "Sie haben morgen Zeit?", "Morgen Sie haben Zeit?"], support:"Do you have time tomorrow?", rule:"Yes/no question: the finite verb comes first." }
    }),
    family("negation_position", {
      familyTarget:"simple nicht placement",
      wordOrderTarget:"negation_position",
      wordOrderTargets:["negation_position"],
      tags:["negation_position", "nicht", "main_clause"],
      skillTags:["negation_position", "nicht"]
    }, {
      recognition:{ prompt:"Welche Version ist natürlich?", answer:"Ich kann morgen nicht kommen.", choices:["Ich kann morgen nicht kommen.", "Ich kann morgen kommen nicht.", "Ich nicht kann morgen kommen."], support:"I cannot come tomorrow.", rule:"Simple B1 negation: nicht usually stands before the final verb part." },
      build:{ cue:"Ich · kann · morgen · nicht · kommen", answer:"Ich kann morgen nicht kommen.", support:"I cannot come tomorrow.", rule:"With a modal verb, nicht stands before the final infinitive." },
      repair:{ wrong:"Ich kann morgen kommen nicht.", correct:"Ich kann morgen nicht kommen.", support:"I cannot come tomorrow.", rule:"Place nicht before the final infinitive." },
      contrast:{ prompt:"Welche Version ist richtig?", answer:"Der Termin ist nicht am Montag.", choices:["Der Termin ist nicht am Montag.", "Der Termin nicht ist am Montag.", "Nicht der Termin ist am Montag."], support:"The appointment is not on Monday.", rule:"For a date or time phrase, nicht usually stands before that phrase." }
    }),
    family("tekamolo_basic", {
      familyTarget:"basic time/place order",
      wordOrderTarget:"tekamolo_basic",
      wordOrderTargets:["tekamolo_basic", "main_clause_v2"],
      tags:["tekamolo_basic", "time_place", "main_clause"],
      skillTags:["tekamolo_basic", "time_place"]
    }, {
      recognition:{ prompt:"Welche Reihenfolge klingt natürlich?", answer:"Wir treffen uns um acht Uhr im Büro.", choices:["Wir treffen uns um acht Uhr im Büro.", "Wir treffen um acht Uhr uns im Büro.", "Wir im Büro treffen uns um acht Uhr."], support:"We are meeting at eight o'clock in the office.", rule:"Keep the finite verb in position 2; time often comes before place." },
      build:{ cue:"Wir · treffen · uns · um acht Uhr · im Büro", answer:"Wir treffen uns um acht Uhr im Büro.", support:"We are meeting at eight o'clock in the office.", rule:"B1 word order: verb in position 2, then the rest in a natural time-place order." },
      repair:{ wrong:"Wir treffen um acht Uhr uns im Büro.", correct:"Wir treffen uns um acht Uhr im Büro.", support:"We are meeting at eight o'clock in the office.", rule:"Do not split treffen uns; keep the reflexive pronoun close to the verb." },
      contrast:{ prompt:"Welche Version ist besser?", answer:"Ich bringe morgen die Unterlagen zur Praxis.", choices:["Ich bringe morgen die Unterlagen zur Praxis.", "Ich bringe zur Praxis morgen die Unterlagen.", "Morgen die Unterlagen bringe ich zur Praxis."], support:"I am bringing the documents to the practice tomorrow.", rule:"A simple B1 main clause often uses time before object/place information." }
    })
  ].forEach(function(group){ items = items.concat(group); });

  [
    variableRepair(
      "b1_word_order_v085_variable_001",
      "v085_variable_main_clause_v2",
      "Morgen rufe ich die Praxis an.",
      [
        { id:"fronted_time_v2", wrongText:"Morgen ich rufe", correctText:"Morgen rufe ich", microRule:"After a fronted time phrase, the finite verb stays in position 2." },
        { id:"separable_prefix_final", wrongText:"an die Praxis", correctText:"die Praxis an", microRule:"With anrufen, the separable prefix goes to the end." }
      ],
      "Tomorrow I will call the practice.",
      "Repair the selected word-order errors.",
      { wordOrderTarget:"main_clause_v2", wordOrderTargets:["main_clause_v2", "separable_verb_bracket"], triggerWords:["morgen", "anrufen"], tags:["v2_main_clause", "separable_verbs", "variable_error_repair", "edit_text", "v0.85"], skillTags:["v2_main_clause", "separable_verb_bracket", "repair_transformation_v085"] }
    ),

    variableRepair(
      "b1_word_order_v085_variable_002",
      "v085_variable_subordinate_inversion",
      "Wenn ich Zeit habe, rufe ich zurück.",
      [
        { id:"subordinate_verb_final", wrongText:"Wenn ich habe Zeit", correctText:"Wenn ich Zeit habe", microRule:"In a wenn-clause, the finite verb goes to the end." },
        { id:"fronted_clause_inversion", wrongText:"ich rufe zurück", correctText:"rufe ich zurück", microRule:"After a fronted subordinate clause, the main verb comes before the subject." }
      ],
      "If I have time, I will call back.",
      "Repair the selected subordinate-clause word-order errors.",
      { wordOrderTarget:"fronted_subordinate_clause", wordOrderTargets:["fronted_subordinate_clause", "subordinate_verb_final"], triggerWord:"wenn", tags:["wenn", "subordinate_verb_final", "fronted_subordinate_clause", "variable_error_repair", "edit_text", "v0.85"], skillTags:["fronted_subordinate_clause", "subordinate_verb_final", "repair_transformation_v085"] }
    ),

    transform(
      "b1_word_order_v085_transform_question_001",
      "v085_transform_question_order",
      "transform_yes_no_question",
      "Mache daraus eine Frage: Sie können mich morgen zurückrufen.",
      "Können Sie mich morgen zurückrufen?",
      "Turn the statement into a yes/no question.",
      "Question: a yes/no question starts with the finite verb.",
      { source_de:"Sie können mich morgen zurückrufen.", wordOrderTarget:"question_order", wordOrderTargets:["question_order", "modal_bracket"], triggerWords:["können"], transformationType:"make_question", tags:["question_order", "modal_structure", "transformation", "umformen", "v0.85"], skillTags:["question_order", "modal_bracket", "repair_transformation_v085"] }
    ),

    transform(
      "b1_word_order_v085_transform_fronted_v2_001",
      "v085_transform_fronted_v2",
      "transform_fronted_time",
      "Beginne mit Morgen: Ich bringe die Unterlagen morgen mit.",
      "Morgen bringe ich die Unterlagen mit.",
      "Start the sentence with Morgen and keep a normal main-clause order.",
      "V2: Morgen is position 1, so bringe is position 2.",
      { source_de:"Ich bringe die Unterlagen morgen mit.", wordOrderTarget:"main_clause_v2", wordOrderTargets:["main_clause_v2", "separable_verb_bracket"], triggerWord:"morgen", transformationType:"fronted_v2", tags:["v2_main_clause", "time_fronting", "transformation", "umformen", "v0.85"], skillTags:["v2_main_clause", "separable_verb_bracket", "repair_transformation_v085"] }
    )
  ].forEach(function(item){ items.push(item); });

  window.OZMOSIS_CONTENT.b1WordOrder = items;
})();
