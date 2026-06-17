(function(){
  window.OZMOSIS_CONTENT = window.OZMOSIS_CONTENT || {};

  var SOURCE = "Ozmosis v0.82 Prepositions Completion Pass";
  var MODULE = {
    source:SOURCE,
    contentImportVersion:"v0.82",
    sourceFile:"content/b1-prepositions.js",
    categoryId:"PREPOSITIONS",
    categoryTitle:"Prepositions",
    displayModuleId:"PREPOSITIONS",
    moduleKey:"prepositions",
    contentBankKey:"prepositions",
    internalPlanningId:"v0.82_prepositions",
    moduleSlug:"prepositions",
    moduleTitle:"Prepositions",
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
    originalStage3Decision:"v0.82_authored_keep",
    reviewStatus:"authored_v0.82",
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
    var prepositions = unique([extra.prepositionTarget].concat(extra.prepositionTargets || []));
    var classes = unique([extra.prepositionClass].concat(extra.prepositionClasses || []));
    var functions = unique([extra.prepositionFunction].concat(extra.prepositionFunctions || []));
    var cases = unique([extra.caseTarget].concat(extra.caseTargets || []));
    var tags = unique([
      "prepositions",
      "praeposition",
      familyId,
      role,
      depth
    ].concat(prepositions, classes, functions, cases, extra.tags || []));
    var skillTags = unique([
      "prepositions"
    ].concat(classes, functions, cases, extra.skillTags || []));
    var item = Object.assign({}, MODULE, extra, {
      id:id,
      targetFamilyId:"prepositions_" + familyId,
      targetId:"prepositions_" + familyId + "_" + role,
      variantFamilyId:"prepositions_" + familyId,
      siblingVariantGroup:"prepositions_" + familyId,
      reviewGroup:"prepositions_" + familyId,
      familyType:"preposition",
      familyTarget:extra.familyTarget || familyId,
      contrastGroup:extra.contrastGroup || familyId,
      taskDepth:depth,
      prepositionTargets:prepositions,
      prepositionClasses:classes,
      prepositionFunctions:functions,
      caseTargets:cases,
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
          source_safe_original:true
        },
        qa_note:"Original v0.82 B1 prepositions item; route-level browser smoke required after integration."
      }
    });
    delete item.prepositionTarget;
    delete item.prepositionClass;
    delete item.prepositionFunction;
    delete item.caseTarget;
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

  function cloze(id, familyId, prompt, answer, full, support, rule, meta) {
    return base(id, familyId, "cloze", "cloze", Object.assign({}, meta || {}, {
      itemType:"grammar_cloze",
      taskType:"Luecke",
      answerMode:"typed",
      answerShape:"short_text",
      prompt_de:prompt,
      answer:answer,
      acceptedAnswers:[answer],
      fullAnswer_de:full,
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
      repairCategory:"preposition"
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
      repairCategory:"preposition",
      variableErrorRepair:true,
      minErrors:1,
      maxErrors:2,
      errorSlots:slots
    }));
  }

  function fixedFamily(key, prep, prepClass, caseTarget, prepFunction, target, recognition, clozeItem, repairItem, contrastItem) {
    var family = "fixed_" + prepClass + "_" + key;
    var classTag = prepClass === "dative" ? "fixed_dative" : "fixed_accusative";
    var caseTag = caseTarget === "dative" ? "dative" : "accusative";
    var meta = {
      familyTarget:target,
      prepositionTarget:prep,
      prepositionClass:classTag,
      prepositionFunction:prepFunction,
      caseTarget:caseTag,
      tags:["fixed_prepositions", classTag, caseTag, prepFunction],
      skillTags:["fixed_prepositions", classTag, caseTag, prepFunction]
    };
    return [
      choice("b1_prepositions_" + family + "_001", family, "recognition", recognition.prompt, recognition.answer, recognition.choices, recognition.support, recognition.rule, meta),
      cloze("b1_prepositions_" + family + "_002", family, clozeItem.prompt, clozeItem.answer, clozeItem.full, clozeItem.support, clozeItem.rule, meta),
      repair("b1_prepositions_" + family + "_003", family, repairItem.wrong, repairItem.correct, repairItem.support, repairItem.rule, meta),
      choice("b1_prepositions_" + family + "_004", family, "contrast", contrastItem.prompt, contrastItem.answer, contrastItem.choices, contrastItem.support, contrastItem.rule, meta)
    ];
  }

  function twoWayFamily(key, prep, target, staticPair, directionPair) {
    var family = "two_way_" + key;
    var meta = {
      familyTarget:target,
      prepositionTarget:prep,
      prepositionClass:"two_way",
      prepositionFunctions:["place", "direction", "location_vs_movement"],
      caseTargets:["dative", "accusative"],
      tags:["two_way_prepositions", "wechselpraeposition", "local", "location_vs_movement"],
      skillTags:["two_way_prepositions", "wechselpraeposition", "local", "location_vs_movement", "dative", "accusative"]
    };
    return [
      choice("b1_prepositions_" + family + "_001", family, "recognition", "Welche Version passt zu Wo?", staticPair.correct, [staticPair.correct, staticPair.wrong, directionPair.correct], staticPair.support, "Location answers wo, so the two-way preposition uses dative.", meta),
      cloze("b1_prepositions_" + family + "_002", family, staticPair.clozePrompt, staticPair.clozeAnswer, staticPair.correct, staticPair.support, "Location answers wo, so use dative after " + prep + ".", meta),
      repair("b1_prepositions_" + family + "_003", family, directionPair.wrong, directionPair.correct, directionPair.support, "Direction answers wohin, so the two-way preposition uses accusative.", meta),
      choice("b1_prepositions_" + family + "_004", family, "contrast", "Wo oder wohin? Welche Version ist richtig?", directionPair.correct, [staticPair.correct, directionPair.correct, directionPair.wrong], directionPair.support, "Direction to a destination answers wohin, so use accusative.", meta)
    ];
  }

  var items = [];

  [
    fixedFamily("mit_bus", "mit", "dative", "dative", "means_with", "mit dem Bus",
      { prompt:"Welche Form passt?", answer:"Ich fahre mit dem Bus.", choices:["Ich fahre mit dem Bus.", "Ich fahre mit den Bus.", "Ich fahre für den Bus."], support:"I travel by bus.", rule:"Case: mit is followed by dative: mit dem Bus." },
      { prompt:"Ich fahre mit ___ Bus zum Termin.", answer:"dem", full:"Ich fahre mit dem Bus zum Termin.", support:"I travel to the appointment by bus.", rule:"mit takes dative: dem Bus." },
      { wrong:"Ich fahre mit den Bus zum Termin.", correct:"Ich fahre mit dem Bus zum Termin.", support:"I travel to the appointment by bus.", rule:"mit takes dative, not accusative." },
      { prompt:"Welche Phrase passt für Verkehrsmittel?", answer:"mit dem Bus", choices:["mit dem Bus", "für den Bus", "durch den Bus"], support:"by bus", rule:"Use mit + dative for means of transport." }),
    fixedFamily("bei_arztin", "bei", "dative", "dative", "person_institution", "bei der Ärztin",
      { prompt:"Welche Form passt?", answer:"Ich bin bei der Ärztin.", choices:["Ich bin bei der Ärztin.", "Ich bin bei die Ärztin.", "Ich gehe zu die Ärztin."], support:"I am at the doctor's.", rule:"bei is followed by dative: bei der Ärztin." },
      { prompt:"Ich bin heute bei ___ Ärztin.", answer:"der", full:"Ich bin heute bei der Ärztin.", support:"I am at the doctor's today.", rule:"bei takes dative: der Ärztin." },
      { wrong:"Ich bin heute bei die Ärztin.", correct:"Ich bin heute bei der Ärztin.", support:"I am at the doctor's today.", rule:"bei takes dative." },
      { prompt:"Welche Phrase passt für einen Ort bei einer Person?", answer:"bei der Ärztin", choices:["bei der Ärztin", "durch die Ärztin", "gegen die Ärztin"], support:"at the doctor's", rule:"Use bei + dative for being at a person/institution." }),
    fixedFamily("nach_hause", "nach", "dative", "dative", "direction", "nach Hause",
      { prompt:"Welche Version ist natürlich?", answer:"Ich gehe nach Hause.", choices:["Ich gehe nach Hause.", "Ich gehe zu Hause.", "Ich gehe in Hause."], support:"I am going home.", rule:"Direction home is nach Hause." },
      { prompt:"Nach dem Termin gehe ich ___ Hause.", answer:"nach", full:"Nach dem Termin gehe ich nach Hause.", support:"After the appointment, I go home.", rule:"Use nach Hause for going home." },
      { wrong:"Nach dem Termin gehe ich zu Hause.", correct:"Nach dem Termin gehe ich nach Hause.", support:"After the appointment, I go home.", rule:"Movement home is nach Hause; zu Hause means at home." },
      { prompt:"Welche Phrase passt für Bewegung nach Hause?", answer:"nach Hause", choices:["nach Hause", "zu Hause", "aus Hause"], support:"homeward", rule:"Use nach Hause for direction." }),
    fixedFamily("von_krankenkasse", "von", "dative", "dative", "source", "von der Krankenkasse",
      { prompt:"Welche Form passt?", answer:"Der Brief ist von der Krankenkasse.", choices:["Der Brief ist von der Krankenkasse.", "Der Brief ist von die Krankenkasse.", "Der Brief ist für die Krankenkasse."], support:"The letter is from the health insurance provider.", rule:"von is followed by dative: von der Krankenkasse." },
      { prompt:"Der Brief ist von ___ Krankenkasse.", answer:"der", full:"Der Brief ist von der Krankenkasse.", support:"The letter is from the health insurance provider.", rule:"von takes dative: der Krankenkasse." },
      { wrong:"Der Brief ist von die Krankenkasse.", correct:"Der Brief ist von der Krankenkasse.", support:"The letter is from the health insurance provider.", rule:"von takes dative." },
      { prompt:"Welche Phrase passt für Herkunft?", answer:"von der Krankenkasse", choices:["von der Krankenkasse", "für die Krankenkasse", "durch die Krankenkasse"], support:"from the health insurance provider", rule:"Use von + dative for source." }),
    fixedFamily("zu_termin", "zu", "dative", "dative", "direction", "zum Termin",
      { prompt:"Welche Form passt?", answer:"Ich gehe zum Termin.", choices:["Ich gehe zum Termin.", "Ich gehe für den Termin.", "Ich gehe zu den Termin."], support:"I am going to the appointment.", rule:"zu is followed by dative; zu dem becomes zum." },
      { prompt:"Ich gehe morgen zu ___ Termin.", answer:"dem", full:"Ich gehe morgen zu dem Termin.", support:"I am going to the appointment tomorrow.", rule:"zu takes dative: zu dem Termin." },
      { wrong:"Ich gehe morgen zu den Termin.", correct:"Ich gehe morgen zu dem Termin.", support:"I am going to the appointment tomorrow.", rule:"zu takes dative, not accusative." },
      { prompt:"Welche Kurzform ist natürlich?", answer:"zum Termin", choices:["zum Termin", "zu den Termin", "für den Termin"], support:"to the appointment", rule:"zu dem is normally zum." }),
    fixedFamily("aus_praxis", "aus", "dative", "dative", "source", "aus der Praxis",
      { prompt:"Welche Form passt?", answer:"Ich komme aus der Praxis.", choices:["Ich komme aus der Praxis.", "Ich komme aus die Praxis.", "Ich komme in die Praxis."], support:"I am coming from the practice.", rule:"aus is followed by dative: aus der Praxis." },
      { prompt:"Ich komme gerade aus ___ Praxis.", answer:"der", full:"Ich komme gerade aus der Praxis.", support:"I have just come from the practice.", rule:"aus takes dative: der Praxis." },
      { wrong:"Ich komme gerade aus die Praxis.", correct:"Ich komme gerade aus der Praxis.", support:"I have just come from the practice.", rule:"aus takes dative." },
      { prompt:"Welche Phrase passt für Herkunft aus einem Ort?", answer:"aus der Praxis", choices:["aus der Praxis", "in die Praxis", "durch die Praxis"], support:"from the practice", rule:"Use aus + dative for coming out of/from a place." }),
    fixedFamily("seit_kurs", "seit", "dative", "dative", "time", "seit dem Kurs",
      { prompt:"Welche Form passt?", answer:"Seit dem Kurs lerne ich regelmäßig.", choices:["Seit dem Kurs lerne ich regelmäßig.", "Seit den Kurs lerne ich regelmäßig.", "Ab den Kurs lerne ich regelmäßig."], support:"Since the course, I study regularly.", rule:"seit is followed by dative: seit dem Kurs." },
      { prompt:"Seit ___ Kurs lerne ich regelmäßig.", answer:"dem", full:"Seit dem Kurs lerne ich regelmäßig.", support:"Since the course, I study regularly.", rule:"seit takes dative: dem Kurs." },
      { wrong:"Seit den Kurs lerne ich regelmäßig.", correct:"Seit dem Kurs lerne ich regelmäßig.", support:"Since the course, I study regularly.", rule:"seit takes dative." },
      { prompt:"Welche Phrase passt für seit dem Kurs?", answer:"seit dem Kurs", choices:["seit dem Kurs", "seit den Kurs", "um den Kurs"], support:"since the course", rule:"Use seit + dative for since/for a period up to now." }),

    fixedFamily("fuer_kurs", "für", "accusative", "accusative", "purpose_recipient", "für den Kurs",
      { prompt:"Welche Form passt?", answer:"Das Formular ist für den Kurs.", choices:["Das Formular ist für den Kurs.", "Das Formular ist für dem Kurs.", "Das Formular ist mit dem Kurs."], support:"The form is for the course.", rule:"für is followed by accusative: für den Kurs." },
      { prompt:"Das Formular ist für ___ Kurs.", answer:"den", full:"Das Formular ist für den Kurs.", support:"The form is for the course.", rule:"für takes accusative: den Kurs." },
      { wrong:"Das Formular ist für dem Kurs.", correct:"Das Formular ist für den Kurs.", support:"The form is for the course.", rule:"für takes accusative, not dative." },
      { prompt:"Welche Phrase passt zum Kurs?", answer:"für den Kurs", choices:["für den Kurs", "mit dem Kurs", "bei dem Kurs"], support:"for the course", rule:"Use für + accusative." }),
    fixedFamily("ohne_unterlagen", "ohne", "accusative", "accusative", "absence", "ohne die Unterlagen",
      { prompt:"Welche Form passt?", answer:"Ich komme ohne die Unterlagen.", choices:["Ich komme ohne die Unterlagen.", "Ich komme ohne der Unterlagen.", "Ich komme mit den Unterlagen."], support:"I am coming without the documents.", rule:"ohne is followed by accusative." },
      { prompt:"Ich komme ohne ___ Unterlagen.", answer:"die", full:"Ich komme ohne die Unterlagen.", support:"I am coming without the documents.", rule:"ohne takes accusative; plural article here is die." },
      { wrong:"Ich komme ohne der Unterlagen.", correct:"Ich komme ohne die Unterlagen.", support:"I am coming without the documents.", rule:"ohne takes accusative, not dative." },
      { prompt:"Welche Phrase bedeutet without the documents?", answer:"ohne die Unterlagen", choices:["ohne die Unterlagen", "mit den Unterlagen", "bei den Unterlagen"], support:"without the documents", rule:"Use ohne + accusative." }),
    fixedFamily("durch_eingang", "durch", "accusative", "accusative", "movement_path", "durch den Eingang",
      { prompt:"Welche Form passt?", answer:"Wir gehen durch den Eingang.", choices:["Wir gehen durch den Eingang.", "Wir gehen durch dem Eingang.", "Wir gehen bei dem Eingang."], support:"We go through the entrance.", rule:"durch is followed by accusative: durch den Eingang." },
      { prompt:"Wir gehen durch ___ Eingang.", answer:"den", full:"Wir gehen durch den Eingang.", support:"We go through the entrance.", rule:"durch takes accusative: den Eingang." },
      { wrong:"Wir gehen durch dem Eingang.", correct:"Wir gehen durch den Eingang.", support:"We go through the entrance.", rule:"durch takes accusative." },
      { prompt:"Welche Phrase passt für durch den Eingang?", answer:"durch den Eingang", choices:["durch den Eingang", "bei dem Eingang", "von dem Eingang"], support:"through the entrance", rule:"Use durch + accusative for through." }),
    fixedFamily("gegen_husten", "gegen", "accusative", "accusative", "against", "gegen den Husten",
      { prompt:"Welche Form passt?", answer:"Das Mittel ist gegen den Husten.", choices:["Das Mittel ist gegen den Husten.", "Das Mittel ist gegen dem Husten.", "Das Mittel ist mit dem Husten."], support:"The medicine is for/against the cough.", rule:"gegen is followed by accusative: gegen den Husten." },
      { prompt:"Das Mittel ist gegen ___ Husten.", answer:"den", full:"Das Mittel ist gegen den Husten.", support:"The medicine is for/against the cough.", rule:"gegen takes accusative: den Husten." },
      { wrong:"Das Mittel ist gegen dem Husten.", correct:"Das Mittel ist gegen den Husten.", support:"The medicine is for/against the cough.", rule:"gegen takes accusative." },
      { prompt:"Welche Phrase passt gegen Husten?", answer:"gegen den Husten", choices:["gegen den Husten", "mit dem Husten", "bei dem Husten"], support:"against the cough", rule:"Use gegen + accusative." }),
    fixedFamily("um_platz", "um", "accusative", "accusative", "movement_around", "um den Platz",
      { prompt:"Welche Form passt?", answer:"Wir gehen um den Platz.", choices:["Wir gehen um den Platz.", "Wir gehen um dem Platz.", "Wir gehen bei dem Platz."], support:"We walk around the square.", rule:"um is followed by accusative: um den Platz." },
      { prompt:"Wir gehen um ___ Platz.", answer:"den", full:"Wir gehen um den Platz.", support:"We walk around the square.", rule:"um takes accusative: den Platz." },
      { wrong:"Wir gehen um dem Platz.", correct:"Wir gehen um den Platz.", support:"We walk around the square.", rule:"um takes accusative." },
      { prompt:"Welche Phrase passt für um den Platz?", answer:"um den Platz", choices:["um den Platz", "bei dem Platz", "von dem Platz"], support:"around the square", rule:"Use um + accusative for around." })
  ].forEach(function(group){ items = items.concat(group); });

  [
    twoWayFamily("in_praxis", "in", "in der Praxis / in die Praxis",
      { correct:"Ich bin in der Praxis.", wrong:"Ich bin in die Praxis.", clozePrompt:"Ich bin in ___ Praxis.", clozeAnswer:"der", support:"I am in the practice." },
      { correct:"Ich gehe in die Praxis.", wrong:"Ich gehe in der Praxis.", support:"I am going into/to the practice." }),
    twoWayFamily("auf_tisch", "auf", "auf dem Tisch / auf den Tisch",
      { correct:"Die Unterlagen liegen auf dem Tisch.", wrong:"Die Unterlagen liegen auf den Tisch.", clozePrompt:"Die Unterlagen liegen auf ___ Tisch.", clozeAnswer:"dem", support:"The documents are lying on the table." },
      { correct:"Ich lege die Unterlagen auf den Tisch.", wrong:"Ich lege die Unterlagen auf dem Tisch.", support:"I put the documents onto the table." }),
    twoWayFamily("an_tuer", "an", "an der Tür / an die Tür",
      { correct:"Der Aushang hängt an der Tür.", wrong:"Der Aushang hängt an die Tür.", clozePrompt:"Der Aushang hängt an ___ Tür.", clozeAnswer:"der", support:"The notice is hanging on the door." },
      { correct:"Ich hänge den Aushang an die Tür.", wrong:"Ich hänge den Aushang an der Tür.", support:"I hang the notice on the door." }),
    twoWayFamily("unter_tisch", "unter", "unter dem Tisch / unter den Tisch",
      { correct:"Die Tasche steht unter dem Tisch.", wrong:"Die Tasche steht unter den Tisch.", clozePrompt:"Die Tasche steht unter ___ Tisch.", clozeAnswer:"dem", support:"The bag is under the table." },
      { correct:"Ich stelle die Tasche unter den Tisch.", wrong:"Ich stelle die Tasche unter dem Tisch.", support:"I put the bag under the table." }),
    twoWayFamily("ueber_tuer", "über", "über der Tür / über die Tür",
      { correct:"Das Schild hängt über der Tür.", wrong:"Das Schild hängt über die Tür.", clozePrompt:"Das Schild hängt über ___ Tür.", clozeAnswer:"der", support:"The sign is hanging above the door." },
      { correct:"Ich hänge das Schild über die Tür.", wrong:"Ich hänge das Schild über der Tür.", support:"I hang the sign above the door." }),
    twoWayFamily("vor_eingang", "vor", "vor dem Eingang / vor den Eingang",
      { correct:"Wir treffen uns vor dem Eingang.", wrong:"Wir treffen uns vor den Eingang.", clozePrompt:"Wir treffen uns vor ___ Eingang.", clozeAnswer:"dem", support:"We meet in front of the entrance." },
      { correct:"Ich stelle mich vor den Eingang.", wrong:"Ich stelle mich vor dem Eingang.", support:"I position myself in front of the entrance." }),
    twoWayFamily("hinter_schrank", "hinter", "hinter dem Schrank / hinter den Schrank",
      { correct:"Die Kiste steht hinter dem Schrank.", wrong:"Die Kiste steht hinter den Schrank.", clozePrompt:"Die Kiste steht hinter ___ Schrank.", clozeAnswer:"dem", support:"The box is behind the cupboard." },
      { correct:"Ich stelle die Kiste hinter den Schrank.", wrong:"Ich stelle die Kiste hinter dem Schrank.", support:"I put the box behind the cupboard." }),
    twoWayFamily("neben_schreibtisch", "neben", "neben dem Schreibtisch / neben den Schreibtisch",
      { correct:"Der Stuhl steht neben dem Schreibtisch.", wrong:"Der Stuhl steht neben den Schreibtisch.", clozePrompt:"Der Stuhl steht neben ___ Schreibtisch.", clozeAnswer:"dem", support:"The chair is beside the desk." },
      { correct:"Ich stelle den Stuhl neben den Schreibtisch.", wrong:"Ich stelle den Stuhl neben dem Schreibtisch.", support:"I put the chair beside the desk." }),
    twoWayFamily("zwischen_fenster", "zwischen", "zwischen den Fenstern / zwischen die Fenster",
      { correct:"Der Kalender hängt zwischen den Fenstern.", wrong:"Der Kalender hängt zwischen die Fenster.", clozePrompt:"Der Kalender hängt zwischen ___ Fenstern.", clozeAnswer:"den", support:"The calendar is hanging between the windows." },
      { correct:"Ich hänge den Kalender zwischen die Fenster.", wrong:"Ich hänge den Kalender zwischen den Fenstern.", support:"I hang the calendar between the windows." })
  ].forEach(function(group){ items = items.concat(group); });

  var temporalMeta = {
    familyTarget:"appointment time expressions",
    prepositionTargets:["am", "um", "im", "seit", "ab", "vor", "nach", "bis"],
    prepositionClass:"temporal",
    prepositionFunction:"time",
    caseTarget:"none",
    tags:["temporal_prepositions", "time", "appointments", "preposition_time"],
    skillTags:["temporal_prepositions", "time", "appointments"]
  };
  [
    choice("b1_prepositions_temporal_appointments_001", "temporal_appointments", "recognition", "Welche Zeitangabe passt für einen Tag?", "am Montag", ["am Montag", "um Montag", "im Montag"], "on Monday", "Use am for days: am Montag.", temporalMeta),
    cloze("b1_prepositions_temporal_appointments_002", "temporal_appointments", "Der Termin ist ___ acht Uhr.", "um", "Der Termin ist um acht Uhr.", "The appointment is at eight o'clock.", "Use um for clock times.", temporalMeta),
    choice("b1_prepositions_temporal_appointments_003", "temporal_appointments", "contrast", "Welche Zeitangabe passt für einen Monat?", "im Juni", ["im Juni", "am Juni", "um Juni"], "in June", "Use im for months: im Juni.", temporalMeta),
    repair("b1_prepositions_temporal_appointments_004", "temporal_appointments", "Ich warte seit den Termin.", "Ich warte seit dem Termin.", "I have been waiting since the appointment.", "seit is followed by dative: seit dem Termin.", temporalMeta),
    choice("b1_prepositions_temporal_appointments_005", "temporal_appointments", "contrast", "Welche Zeitangabe passt für ab nächster Woche?", "ab nächster Woche", ["ab nächster Woche", "seit nächster Woche", "um nächster Woche"], "from next week", "Use ab for a starting point in the future.", temporalMeta),
    cloze("b1_prepositions_temporal_appointments_006", "temporal_appointments", "Bitte kommen Sie ___ dem Termin zehn Minuten früher.", "vor", "Bitte kommen Sie vor dem Termin zehn Minuten früher.", "Please come ten minutes earlier before the appointment.", "Use vor for before an event.", temporalMeta),
    cloze("b1_prepositions_temporal_appointments_007", "temporal_appointments", "Ich rufe Sie ___ dem Kurs an.", "nach", "Ich rufe Sie nach dem Kurs an.", "I will call you after the course.", "Use nach for after an event.", temporalMeta),
    choice("b1_prepositions_temporal_appointments_008", "temporal_appointments", "contrast", "Welche Zeitangabe passt für bis Freitag?", "bis Freitag", ["bis Freitag", "seit Freitag", "ab Freitag"], "until Friday", "Use bis for until a deadline.", temporalMeta)
  ].forEach(function(item){ items.push(item); });

  [
    variableRepair(
      "b1_prepositions_v085_variable_001",
      "v085_variable_fixed_dative_route",
      "Ich fahre mit dem Bus zu dem Termin.",
      [
        { id:"mit_dative_bus", wrongText:"mit den Bus", correctText:"mit dem Bus", microRule:"mit takes dative: mit dem Bus." },
        { id:"zu_dative_termin", wrongText:"zu den Termin", correctText:"zu dem Termin", microRule:"zu takes dative: zu dem Termin." }
      ],
      "I travel to the appointment by bus.",
      "Repair the selected preposition-case errors.",
      { familyTarget:"fixed dative prepositions in route phrases", prepositionTargets:["mit", "zu"], prepositionClasses:["fixed_dative"], prepositionFunctions:["means_with", "direction"], caseTarget:"dative", tags:["fixed_prepositions", "fixed_dative", "variable_error_repair", "edit_text", "v0.85"], skillTags:["fixed_prepositions", "preposition_case", "repair_transformation_v085"] }
    ),

    variableRepair(
      "b1_prepositions_v085_variable_002",
      "v085_variable_two_way_location_direction",
      "Ich gehe in die Praxis und warte vor dem Eingang.",
      [
        { id:"direction_in_accusative", wrongText:"in der Praxis", correctText:"in die Praxis", microRule:"Movement into a place answers wohin: in die Praxis." },
        { id:"location_vor_dative", wrongText:"vor den Eingang", correctText:"vor dem Eingang", microRule:"Location answers wo: vor dem Eingang." }
      ],
      "I go into the practice and wait in front of the entrance.",
      "Repair the selected two-way preposition errors.",
      { familyTarget:"two-way preposition location and direction", prepositionTargets:["in", "vor"], prepositionClass:"two_way", prepositionFunctions:["direction", "place", "location_vs_movement"], caseTargets:["accusative", "dative"], tags:["two_way_prepositions", "wechselpraeposition", "variable_error_repair", "edit_text", "v0.85"], skillTags:["two_way_prepositions", "location_vs_movement", "repair_transformation_v085"] }
    )
  ].forEach(function(item){ items.push(item); });

  window.OZMOSIS_CONTENT.b1Prepositions = items;
})();
