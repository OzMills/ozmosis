(function(){
  window.OZMOSIS_CONTENT = window.OZMOSIS_CONTENT || {};

  var SOURCE = "Ozmosis v0.81 Cases and Articles Completion Pass";
  var MODULE = {
    source:SOURCE,
    contentImportVersion:"v0.81",
    sourceFile:"content/b1-cases-articles.js",
    categoryId:"CASES_ARTICLES",
    categoryTitle:"Cases and Articles",
    displayModuleId:"CASES_ARTICLES",
    moduleKey:"cases_articles",
    contentBankKey:"cases_articles",
    internalPlanningId:"v0.81_cases_articles",
    moduleSlug:"cases-articles",
    moduleTitle:"Cases and Articles",
    levelTrack:"B1",
    cefrTarget:"B1",
    cefr:"B1",
    difficulty:"sprint_core",
    evidenceType:"auto_core",
    activeB1Evidence:true,
    b1PathEligible:false,
    previewOnly:false,
    diagnosticEligible:true,
    dailyEligible:false,
    supportPolicy:"after_answer",
    supportVisibilityPolicy:"after_answer",
    reviewEligibilityDefault:"eligible_auto_after_delay",
    delayedReviewEligibility:"eligible_auto_after_delay",
    maxSameSessionEvidence:1,
    sameSessionEvidenceCap:1,
    originalStage3Decision:"v0.81_authored_keep",
    reviewStatus:"authored_v0.81",
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

  function base(id, familyId, role, target, taskDepth, extra) {
    var caseTags = extra.caseTags || [];
    var articleTags = extra.articleTags || [];
    var caseTargets = unique([extra.caseTarget].concat(extra.caseTargets || []));
    var articleFamilies = unique([extra.articleFamily].concat(extra.articleFamilies || []));
    var genderNumberTargets = unique([extra.genderNumber].concat(extra.genderNumberTargets || []));
    var skillTags = unique(["cases_articles"].concat(caseTags, articleTags, extra.skillTags || []));
    var tags = unique(["cases_articles", familyId, role].concat(caseTags, articleTags, extra.tags || []));
    var item = Object.assign({}, MODULE, extra, {
      id:id,
      targetFamilyId:"cases_articles_" + familyId,
      targetId:"cases_articles_" + familyId + "_" + role,
      variantFamilyId:"cases_articles_" + familyId,
      siblingVariantGroup:"cases_articles_" + familyId,
      reviewGroup:"cases_articles_" + familyId,
      variantRole:role,
      familyType:"case_article",
      familyTarget:target,
      caseTargets:caseTargets,
      articleFamilies:articleFamilies,
      genderNumberTargets:genderNumberTargets,
      contrastGroup:extra.contrastGroup || familyId,
      taskDepth:taskDepth,
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
        qa_note:"Original v0.81 B1 cases/articles item; local browser spot check required after integration."
      }
    });
    delete item.caseTags;
    delete item.articleTags;
    return item;
  }

  function choice(id, familyId, role, target, depth, prompt, answer, choices, support, rule, extra) {
    if (!Array.isArray(choices) && Array.isArray(answer)) {
      extra = rule || {};
      rule = support;
      support = choices;
      choices = answer;
      answer = prompt;
      prompt = depth;
      depth = "contrast";
    }
    extra = extra || {};
    return base(id, familyId, role, target, depth, Object.assign({}, extra, {
      itemType:"multiple_choice",
      taskType:depth === "contrast" ? "Kontrast" : "Auswahl",
      answerMode:"selected_choice_value",
      answerShape:"selected_choice_value",
      prompt_de:prompt,
      answer:answer,
      acceptedAnswers:[answer],
      fullAnswer_de:answer,
      support_en:support,
      microRule:rule,
      targetRule:rule,
      choices:choices.map(function(text, index){
        return {
          id:id + "_choice_" + String(index + 1),
          text:text,
          value:text,
          isCorrect:text === answer
        };
      })
    }));
  }

  function cloze(id, familyId, role, target, prompt, answer, full, support, rule, extra) {
    extra = extra || {};
    return base(id, familyId, role, target, "cloze", Object.assign({}, extra, {
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

  function repair(id, familyId, role, target, wrong, correct, support, rule, extra) {
    extra = extra || {};
    return base(id, familyId, role, target, "repair", Object.assign({}, extra, {
      itemType:extra.itemType || "error_repair",
      taskType:"Reparatur",
      answerMode:extra.answerMode || "typed",
      answerShape:"full_sentence",
      prompt_de:wrong,
      repairSource_de:extra.repairSource_de || wrong,
      answer:correct,
      acceptedAnswers:[correct],
      fullAnswer_de:correct,
      support_en:support,
      microRule:rule,
      targetRule:rule,
      repairCategory:"case_article"
    }));
  }

  function variableRepair(id, familyId, role, target, correct, slots, support, rule, extra) {
    extra = extra || {};
    return base(id, familyId, role, target, "repair", Object.assign({}, extra, {
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
      repairCategory:"case_article",
      variableErrorRepair:true,
      minErrors:1,
      maxErrors:2,
      errorSlots:slots
    }));
  }

  function transform(id, familyId, role, target, prompt, answer, support, rule, extra) {
    extra = extra || {};
    return base(id, familyId, role, target, "transformation", Object.assign({}, extra, {
      source:"Ozmosis v0.85 Repair / Transformation Completion Pass",
      contentImportVersion:"v0.85",
      originalStage3Decision:"v0.85_authored_keep",
      reviewStatus:"authored_v0.85",
      itemType:"transformation",
      taskType:"Umformen",
      answerMode:"typed_text",
      answerShape:"controlled_form_transformation",
      prompt_de:prompt,
      answer:answer,
      acceptedAnswers:[answer],
      fullAnswer_de:answer,
      support_en:support,
      microRule:rule,
      targetRule:rule,
      transformationType:extra.transformationType || "case_article_form"
    }));
  }

  window.OZMOSIS_CONTENT.b1CasesArticles = [
    choice(
      "b1_cases_articles_nom_acc_masc_001",
      "nom_acc_masc_definite",
      "recognition_subject",
      "Nominative subject vs accusative object: der/den",
      "recognition",
      "Welche Version ist richtig?",
      "Der Mitarbeiter ruft an.",
      ["Der Mitarbeiter ruft an.", "Den Mitarbeiter ruft an.", "Dem Mitarbeiter ruft an."],
      "The employee calls.",
      "Role: the subject uses der.",
      { caseTarget:"nominative", articleFamily:"definite", genderNumber:"masculine_singular", caseTags:["nominative", "nominativ"], articleTags:["definite", "article_gender", "der_den"] }
    ),
    cloze(
      "b1_cases_articles_nom_acc_masc_002",
      "nom_acc_masc_definite",
      "cloze_object",
      "Nominative subject vs accusative object: der/den",
      "Ich sehe ___ Mitarbeiter am Empfang.",
      "den",
      "Ich sehe den Mitarbeiter am Empfang.",
      "I see the employee at reception.",
      "Case: sehen takes an accusative object: den Mitarbeiter.",
      { caseTarget:"accusative", articleFamily:"definite", genderNumber:"masculine_singular", caseTags:["accusative", "akkusativ"], articleTags:["definite", "article_gender", "der_den"] }
    ),
    repair(
      "b1_cases_articles_nom_acc_masc_003",
      "nom_acc_masc_definite",
      "repair_object",
      "Nominative subject vs accusative object: der/den",
      "Ich sehe der Mitarbeiter am Empfang.",
      "Ich sehe den Mitarbeiter am Empfang.",
      "I see the employee at reception.",
      "sehen takes an accusative object; masculine der changes to den.",
      { answerMode:"edit_text", prefillRepairText:true, repairSource_de:"Ich sehe der Mitarbeiter am Empfang.", caseTarget:"accusative", articleFamily:"definite", genderNumber:"masculine_singular", caseTags:["accusative", "akkusativ"], articleTags:["definite", "article_gender", "der_den"] }
    ),
    choice(
      "b1_cases_articles_nom_acc_masc_004",
      "nom_acc_masc_definite",
      "contrast_object",
      "Nominative subject vs accusative object: der/den",
      "Welche Form passt zum direkten Objekt?",
      "Ich rufe den Mitarbeiter an.",
      ["Ich rufe den Mitarbeiter an.", "Ich rufe der Mitarbeiter an.", "Ich rufe dem Mitarbeiter an."],
      "I call the employee.",
      "Direct object: anrufen takes accusative, so der becomes den.",
      { caseTarget:"accusative", articleFamily:"definite", genderNumber:"masculine_singular", contrastTargets:["der", "den", "dem"], caseTags:["accusative", "akkusativ"], articleTags:["definite", "article_gender", "der_den"] }
    ),

    choice(
      "b1_cases_articles_acc_direct_001",
      "acc_direct_object",
      "recognition_brauchen",
      "Accusative direct object after common verbs",
      "recognition",
      "Welche Form passt nach brauchen?",
      "Ich brauche einen Termin.",
      ["Ich brauche einen Termin.", "Ich brauche ein Termin.", "Ich brauche einem Termin."],
      "I need an appointment.",
      "brauchen takes an accusative object: einen Termin.",
      { caseTarget:"accusative", articleFamily:"indefinite", genderNumber:"masculine_singular", caseTags:["accusative", "akkusativ"], articleTags:["indefinite", "article_gender", "ein_einen"] }
    ),
    cloze(
      "b1_cases_articles_acc_direct_002",
      "acc_direct_object",
      "cloze_suchen",
      "Accusative direct object after common verbs",
      "Wir suchen ___ Wohnung in der Nähe.",
      "eine",
      "Wir suchen eine Wohnung in der Nähe.",
      "We are looking for a flat nearby.",
      "suchen takes an accusative object; feminine eine stays eine.",
      { caseTarget:"accusative", articleFamily:"indefinite", genderNumber:"feminine_singular", caseTags:["accusative", "akkusativ"], articleTags:["indefinite", "article_gender"] }
    ),
    repair(
      "b1_cases_articles_acc_direct_003",
      "acc_direct_object",
      "repair_kaufen",
      "Accusative direct object after common verbs",
      "Ich kaufe ein Fahrkarte.",
      "Ich kaufe eine Fahrkarte.",
      "I buy a ticket.",
      "Fahrkarte is feminine; the accusative form is eine Fahrkarte.",
      { answerMode:"edit_text", prefillRepairText:true, repairSource_de:"Ich kaufe ein Fahrkarte.", caseTarget:"accusative", articleFamily:"indefinite", genderNumber:"feminine_singular", caseTags:["accusative", "akkusativ"], articleTags:["indefinite", "article_gender"] }
    ),
    choice(
      "b1_cases_articles_acc_direct_004",
      "acc_direct_object",
      "contrast_lesen",
      "Accusative direct object after common verbs",
      "Welche Version ist natürlich?",
      "Sie liest den Brief.",
      ["Sie liest den Brief.", "Sie liest dem Brief.", "Sie liest der Brief."],
      "She reads the letter.",
      "lesen takes an accusative object: den Brief.",
      { caseTarget:"accusative", articleFamily:"definite", genderNumber:"masculine_singular", contrastTargets:["den", "dem", "der"], caseTags:["accusative", "akkusativ"], articleTags:["definite", "article_gender", "den_dem"] }
    ),

    choice(
      "b1_cases_articles_fixed_dative_001",
      "fixed_dative_triggers",
      "recognition_mit",
      "Dative after fixed dative triggers",
      "recognition",
      "Welche Form passt nach mit?",
      "Ich fahre mit dem Bus.",
      ["Ich fahre mit dem Bus.", "Ich fahre mit den Bus.", "Ich fahre mit der Bus."],
      "I travel by bus.",
      "mit takes dative; masculine Bus uses dem.",
      { caseTarget:"dative", articleFamily:"definite", genderNumber:"masculine_singular", caseTags:["dative", "dativ"], articleTags:["definite", "article_gender", "den_dem"] }
    ),
    cloze(
      "b1_cases_articles_fixed_dative_002",
      "fixed_dative_triggers",
      "cloze_bei",
      "Dative after fixed dative triggers",
      "Der Termin ist bei ___ Ärztin.",
      "der",
      "Der Termin ist bei der Ärztin.",
      "The appointment is with the doctor.",
      "bei takes dative; feminine die becomes der.",
      { caseTarget:"dative", articleFamily:"definite", genderNumber:"feminine_singular", caseTags:["dative", "dativ"], articleTags:["definite", "article_gender"] }
    ),
    repair(
      "b1_cases_articles_fixed_dative_003",
      "fixed_dative_triggers",
      "repair_nach",
      "Dative after fixed dative triggers",
      "Ich komme nach die Arbeit.",
      "Ich komme nach der Arbeit.",
      "I come after work.",
      "nach takes dative in this time phrase: nach der Arbeit.",
      { answerMode:"edit_text", prefillRepairText:true, repairSource_de:"Ich komme nach die Arbeit.", caseTarget:"dative", articleFamily:"definite", genderNumber:"feminine_singular", caseTags:["dative", "dativ"], articleTags:["definite", "article_gender"] }
    ),
    choice(
      "b1_cases_articles_fixed_dative_004",
      "fixed_dative_triggers",
      "contrast_zu",
      "Dative after fixed dative triggers",
      "Welche Version passt nach zu?",
      "Ich gehe zu einem Gespräch.",
      ["Ich gehe zu einem Gespräch.", "Ich gehe zu einen Gespräch.", "Ich gehe zu ein Gespräch."],
      "I am going to an interview/conversation.",
      "zu takes dative; neuter Gespräch uses einem.",
      { caseTarget:"dative", articleFamily:"indefinite", genderNumber:"neuter_singular", contrastTargets:["einem", "einen", "ein"], caseTags:["dative", "dativ"], articleTags:["indefinite", "article_gender", "einen_einem"] }
    ),

    choice(
      "b1_cases_articles_indirect_dative_001",
      "dative_indirect_object",
      "recognition_recipient",
      "Dative indirect object",
      "recognition",
      "Welche Version zeigt den Empfänger?",
      "Ich schicke dem Team die Unterlagen.",
      ["Ich schicke dem Team die Unterlagen.", "Ich schicke das Team die Unterlagen.", "Ich schicke den Team die Unterlagen."],
      "I send the team the documents.",
      "Recipient role: the indirect object is dative: dem Team.",
      { caseTarget:"dative", articleFamily:"definite", genderNumber:"neuter_singular", caseTags:["dative", "dativ"], articleTags:["definite", "article_gender"] }
    ),
    cloze(
      "b1_cases_articles_indirect_dative_002",
      "dative_indirect_object",
      "cloze_recipient",
      "Dative indirect object",
      "Ich gebe ___ Kundin die Nummer.",
      "der",
      "Ich gebe der Kundin die Nummer.",
      "I give the customer the number.",
      "geben has a recipient in dative: der Kundin.",
      { caseTarget:"dative", articleFamily:"definite", genderNumber:"feminine_singular", caseTags:["dative", "dativ"], articleTags:["definite", "article_gender"] }
    ),
    repair(
      "b1_cases_articles_indirect_dative_003",
      "dative_indirect_object",
      "repair_recipient",
      "Dative indirect object",
      "Ich zeige die Kollegin die Liste.",
      "Ich zeige der Kollegin die Liste.",
      "I show the colleague the list.",
      "zeigen has a recipient in dative: der Kollegin.",
      { answerMode:"edit_text", prefillRepairText:true, repairSource_de:"Ich zeige die Kollegin die Liste.", caseTarget:"dative", articleFamily:"definite", genderNumber:"feminine_singular", caseTags:["dative", "dativ"], articleTags:["definite", "article_gender"] }
    ),
    choice(
      "b1_cases_articles_indirect_dative_004",
      "dative_indirect_object",
      "contrast_recipient",
      "Dative indirect object",
      "Welche Form zeigt den Empfänger?",
      "Ich erkläre dem Chef den Plan.",
      ["Ich erkläre dem Chef den Plan.", "Ich erkläre den Chef den Plan.", "Ich erkläre der Chef den Plan."],
      "I explain the plan to the boss.",
      "The person receiving the explanation is dative: dem Chef.",
      { caseTarget:"dative", articleFamily:"definite", genderNumber:"masculine_singular", contrastTargets:["dem", "den", "der"], caseTags:["dative", "dativ"], articleTags:["definite", "article_gender", "den_dem"] }
    ),

    choice(
      "b1_cases_articles_family_contrast_001",
      "article_family_contrast",
      "recognition_accusative_row",
      "Article family contrast: der/ein/kein endings",
      "recognition",
      "Welche Reihe passt zu Akkusativ Maskulinum?",
      "den / einen / keinen",
      ["den / einen / keinen", "der / ein / kein", "dem / einem / keinem"],
      "Which row fits accusative masculine?",
      "Article family: der, ein, and kein share the masculine accusative -en ending.",
      { caseTarget:"accusative", articleFamily:"definite_indefinite_negative", genderNumber:"masculine_singular", caseTags:["accusative", "akkusativ"], articleTags:["definite", "indefinite", "negative", "article_family", "article_gender", "der_ein_kein"] }
    ),
    cloze(
      "b1_cases_articles_family_contrast_002",
      "article_family_contrast",
      "cloze_negative_object",
      "Article family contrast: der/ein/kein endings",
      "Wir haben ___ Drucker im Büro.",
      "keinen",
      "Wir haben keinen Drucker im Büro.",
      "We do not have a printer in the office.",
      "kein follows ein endings; masculine accusative uses keinen.",
      { caseTarget:"accusative", articleFamily:"negative", genderNumber:"masculine_singular", caseTags:["accusative", "akkusativ"], articleTags:["negative", "article_family", "article_gender", "kein_keinen"] }
    ),
    repair(
      "b1_cases_articles_family_contrast_003",
      "article_family_contrast",
      "repair_negative_object",
      "Article family contrast: der/ein/kein endings",
      "Ich habe kein Termin.",
      "Ich habe keinen Termin.",
      "I do not have an appointment.",
      "Termin is masculine; accusative negative is keinen Termin.",
      { caseTarget:"accusative", articleFamily:"negative", genderNumber:"masculine_singular", caseTags:["accusative", "akkusativ"], articleTags:["negative", "article_family", "article_gender", "kein_keinen"] }
    ),
    choice(
      "b1_cases_articles_family_contrast_004",
      "article_family_contrast",
      "contrast_dative_row",
      "Article family contrast: der/ein/kein endings",
      "Welche Reihe passt zu Dativ Maskulinum?",
      "dem / einem / keinem",
      ["dem / einem / keinem", "den / einen / keinen", "der / ein / kein"],
      "Which row fits dative masculine?",
      "Dative masculine uses -em in dem, einem, and keinem.",
      { caseTarget:"dative", articleFamily:"definite_indefinite_negative", genderNumber:"masculine_singular", contrastTargets:["dem", "einem", "keinem"], caseTags:["dative", "dativ"], articleTags:["definite", "indefinite", "negative", "article_family", "article_gender", "den_dem"] }
    ),

    choice(
      "b1_cases_articles_pronoun_case_001",
      "pronoun_case_ich_du",
      "recognition_mich",
      "Pronoun case: ich/mich/mir and du/dich/dir",
      "recognition",
      "Welche Form passt nach sehen?",
      "Er sieht mich.",
      ["Er sieht mich.", "Er sieht mir.", "Er sieht ich."],
      "He sees me.",
      "sehen takes accusative; ich becomes mich.",
      { caseTarget:"accusative", articleFamily:"pronoun", genderNumber:"first_person_singular", caseTags:["accusative", "akkusativ"], articleTags:["pronoun_case", "ich_mich_mir"] }
    ),
    cloze(
      "b1_cases_articles_pronoun_case_002",
      "pronoun_case_ich_du",
      "cloze_mir",
      "Pronoun case: ich/mich/mir and du/dich/dir",
      "Kannst du ___ helfen?",
      "mir",
      "Kannst du mir helfen?",
      "Can you help me?",
      "helfen takes dative; ich becomes mir.",
      { caseTarget:"dative", articleFamily:"pronoun", genderNumber:"first_person_singular", caseTags:["dative", "dativ"], articleTags:["pronoun_case", "ich_mich_mir"] }
    ),
    repair(
      "b1_cases_articles_pronoun_case_003",
      "pronoun_case_ich_du",
      "repair_dich",
      "Pronoun case: ich/mich/mir and du/dich/dir",
      "Ich rufe dir später an.",
      "Ich rufe dich später an.",
      "I will call you later.",
      "anrufen takes accusative; du becomes dich.",
      { caseTarget:"accusative", articleFamily:"pronoun", genderNumber:"second_person_singular", caseTags:["accusative", "akkusativ"], articleTags:["pronoun_case", "du_dich_dir"] }
    ),
    choice(
      "b1_cases_articles_pronoun_case_004",
      "pronoun_case_ich_du",
      "contrast_dir",
      "Pronoun case: ich/mich/mir and du/dich/dir",
      "Welche Frage passt zum Empfänger?",
      "Kann ich dir helfen?",
      ["Kann ich dir helfen?", "Kann ich dich helfen?", "Kann ich du helfen?"],
      "Can I help you?",
      "helfen takes dative; du becomes dir.",
      { caseTarget:"dative", articleFamily:"pronoun", genderNumber:"second_person_singular", contrastTargets:["dir", "dich", "du"], caseTags:["dative", "dativ"], articleTags:["pronoun_case", "du_dich_dir"] }
    ),

    choice(
      "b1_cases_articles_plural_dative_001",
      "plural_dative_article",
      "recognition_mit_unterlagen",
      "Plural dative article: den",
      "recognition",
      "Welche Form passt nach mit?",
      "mit den Unterlagen",
      ["mit den Unterlagen", "mit die Unterlagen", "mit der Unterlagen"],
      "with the documents",
      "Plural dative uses den.",
      { caseTarget:"dative", articleFamily:"definite", genderNumber:"plural", caseTags:["dative", "dativ"], articleTags:["definite", "article_gender", "plural_dative"] }
    ),
    cloze(
      "b1_cases_articles_plural_dative_002",
      "plural_dative_article",
      "cloze_mit_kollegen",
      "Plural dative article: den",
      "Ich spreche mit ___ Kollegen.",
      "den",
      "Ich spreche mit den Kollegen.",
      "I speak with the colleagues.",
      "mit takes dative; plural dative article is den.",
      { caseTarget:"dative", articleFamily:"definite", genderNumber:"plural", caseTags:["dative", "dativ"], articleTags:["definite", "article_gender", "plural_dative"] }
    ),
    repair(
      "b1_cases_articles_plural_dative_003",
      "plural_dative_article",
      "repair_bei_formularen",
      "Plural dative article: den",
      "Bei die Formularen fehlt die Unterschrift.",
      "Bei den Formularen fehlt die Unterschrift.",
      "The signature is missing on the forms.",
      "bei takes dative; plural dative uses den.",
      { caseTarget:"dative", articleFamily:"definite", genderNumber:"plural", caseTags:["dative", "dativ"], articleTags:["definite", "article_gender", "plural_dative"] }
    ),
    choice(
      "b1_cases_articles_plural_dative_004",
      "plural_dative_article",
      "contrast_dokumenten",
      "Plural dative article: den",
      "Welche Version ist richtig?",
      "Wir arbeiten mit den Dokumenten.",
      ["Wir arbeiten mit den Dokumenten.", "Wir arbeiten mit die Dokumente.", "Wir arbeiten mit dem Dokumenten."],
      "We work with the documents.",
      "Plural dative after mit uses den.",
      { caseTarget:"dative", articleFamily:"definite", genderNumber:"plural", contrastTargets:["den", "die", "dem"], caseTags:["dative", "dativ"], articleTags:["definite", "article_gender", "plural_dative"] }
    ),

    choice(
      "b1_cases_articles_article_required_001",
      "article_required_object",
      "recognition_required_article",
      "Article required with common singular nouns",
      "recognition",
      "Welche Version ist natürlich?",
      "Ich suche einen Termin.",
      ["Ich suche einen Termin.", "Ich suche Termin.", "Ich suche einem Termin."],
      "I am looking for an appointment.",
      "German usually needs an article with a singular count noun: einen Termin.",
      { caseTarget:"accusative", articleFamily:"indefinite", genderNumber:"masculine_singular", caseTags:["accusative", "akkusativ"], articleTags:["indefinite", "article_required", "article_gender"] }
    ),
    cloze(
      "b1_cases_articles_article_required_002",
      "article_required_object",
      "cloze_required_article",
      "Article required with common singular nouns",
      "Sie braucht ___ Rechnung.",
      "eine",
      "Sie braucht eine Rechnung.",
      "She needs an invoice.",
      "Rechnung is a singular count noun here; use eine.",
      { caseTarget:"accusative", articleFamily:"indefinite", genderNumber:"feminine_singular", caseTags:["accusative", "akkusativ"], articleTags:["indefinite", "article_required", "article_gender"] }
    ),
    repair(
      "b1_cases_articles_article_required_003",
      "article_required_object",
      "repair_required_article",
      "Article required with common singular nouns",
      "Wir brauchen Formular.",
      "Wir brauchen ein Formular.",
      "We need a form.",
      "Formular is neuter singular; use ein Formular.",
      { caseTarget:"accusative", articleFamily:"indefinite", genderNumber:"neuter_singular", caseTags:["accusative", "akkusativ"], articleTags:["indefinite", "article_required", "article_gender"] }
    ),
    choice(
      "b1_cases_articles_article_required_004",
      "article_required_object",
      "contrast_required_article",
      "Article required with common singular nouns",
      "Welche Version passt?",
      "Ich schreibe eine E-Mail.",
      ["Ich schreibe eine E-Mail.", "Ich schreibe E-Mail.", "Ich schreibe einem E-Mail."],
      "I am writing an email.",
      "E-Mail is feminine; in this sentence use eine E-Mail.",
      { caseTarget:"accusative", articleFamily:"indefinite", genderNumber:"feminine_singular", contrastTargets:["eine", "no_article", "einem"], caseTags:["accusative", "akkusativ"], articleTags:["indefinite", "article_required", "article_gender"] }
    ),

    variableRepair(
      "b1_cases_articles_v0841_variable_001",
      "v0841_variable_acc_masc_location",
      "variable_repair_acc_masc",
      "Variable repair: accusative masculine article plus reception phrase",
      "Ich sehe den Mitarbeiter am Empfang.",
      [
        { id:"acc_masc_article", wrongText:"der Mitarbeiter", correctText:"den Mitarbeiter", microRule:"sehen takes an accusative object: den Mitarbeiter." },
        { id:"reception_article", wrongText:"an Empfang", correctText:"am Empfang", microRule:"Use am Empfang for at reception." }
      ],
      "I see the employee at reception.",
      "Repair the selected article errors without changing the meaning.",
      { caseTarget:"accusative", articleFamily:"definite", genderNumber:"masculine_singular", caseTags:["accusative", "akkusativ"], articleTags:["definite", "article_gender", "der_den"], skillTags:["repair_edit_pilot"], tags:["variable_error_repair", "edit_text", "v0.84.1"] }
    ),

    variableRepair(
      "b1_cases_articles_v0841_variable_002",
      "v0841_variable_recipient_document",
      "variable_repair_recipient_document",
      "Variable repair: dative recipient and accusative plural object",
      "Ich schicke dem Team die Unterlagen.",
      [
        { id:"dative_recipient", wrongText:"das Team", correctText:"dem Team", microRule:"The recipient is dative: dem Team." },
        { id:"plural_object_article", wrongText:"den Unterlagen", correctText:"die Unterlagen", microRule:"The documents are the direct object here: die Unterlagen." }
      ],
      "I send the team the documents.",
      "Repair the selected case/article errors without changing the meaning.",
      { caseTarget:"dative", caseTargets:["dative", "accusative"], articleFamily:"definite", genderNumber:"neuter_singular", genderNumberTargets:["neuter_singular", "plural"], caseTags:["dative", "dativ", "accusative", "akkusativ"], articleTags:["definite", "article_gender", "den_dem"], skillTags:["repair_edit_pilot"], tags:["variable_error_repair", "edit_text", "v0.84.1"] }
    ),

    variableRepair(
      "b1_cases_articles_v0841_variable_003",
      "v0841_variable_signature_forms",
      "variable_repair_signature_forms",
      "Variable repair: subject article and dative plural phrase",
      "Die Unterschrift fehlt bei den Formularen.",
      [
        { id:"subject_article", wrongText:"Der Unterschrift", correctText:"Die Unterschrift", microRule:"Unterschrift is feminine, so the subject is die Unterschrift." },
        { id:"plural_dative_article", wrongText:"bei die Formularen", correctText:"bei den Formularen", microRule:"bei takes dative; plural dative uses den." }
      ],
      "The signature is missing on the forms.",
      "Repair the selected case/article errors without changing the meaning.",
      { caseTarget:"dative", caseTargets:["nominative", "dative"], articleFamily:"definite", genderNumber:"plural", genderNumberTargets:["feminine_singular", "plural"], caseTags:["nominative", "nominativ", "dative", "dativ"], articleTags:["definite", "article_gender", "plural_dative"], skillTags:["repair_edit_pilot"], tags:["variable_error_repair", "edit_text", "v0.84.1"] }
    ),

    transform(
      "b1_cases_articles_v085_transform_acc_masc_001",
      "v085_transform_der_den_dem",
      "transform_acc_masc",
      "Case/article transformation: masculine definite accusative",
      "Forme die Gruppe in den Akkusativ um: der Mitarbeiter.",
      "den Mitarbeiter",
      "Change the noun group to accusative.",
      "Direct masculine object: der becomes den.",
      { diagnosticEligible:false, caseTarget:"accusative", articleFamily:"definite", genderNumber:"masculine_singular", caseTags:["accusative", "akkusativ"], articleTags:["definite", "article_gender", "der_den"], skillTags:["repair_transformation_v085"], tags:["transformation", "umformen", "v0.85"] }
    ),

    transform(
      "b1_cases_articles_v085_transform_dat_neuter_001",
      "v085_transform_ein_einem",
      "transform_dat_neuter",
      "Case/article transformation: neuter indefinite dative",
      "Forme die Gruppe in den Dativ um: ein Formular.",
      "einem Formular",
      "Change the noun group to dative.",
      "Dative neuter uses einem Formular.",
      { diagnosticEligible:false, caseTarget:"dative", articleFamily:"indefinite", genderNumber:"neuter_singular", caseTags:["dative", "dativ"], articleTags:["indefinite", "article_gender", "ein_einem"], skillTags:["repair_transformation_v085"], tags:["transformation", "umformen", "v0.85"] }
    )
  ];
})();
