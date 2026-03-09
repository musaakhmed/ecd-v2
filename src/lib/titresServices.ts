export type TitreServiceModuleApproval = {
  region: string
  certificate: string
  date: string
}

export type TitreServiceCatalogueModule = {
  slug: string
  titre: string
  description: string
  objectifs: string[]
  modalitesPédagogie: string
  evaluationSuivi: string
  supportsLogistiques: string
  publicVise: string
  approbation: TitreServiceModuleApproval[]
  duree: string
  category: 'numerique' | 'bien-etre'
}

/** Catalogue des formations Titres-Services (ancien site espacecultures.be) */
export const catalogueModules: TitreServiceCatalogueModule[] = [
  // ——— Compétences numériques ———
  {
    slug: 'identite-numerique',
    titre: 'Identité numérique & démarches administratives',
    category: 'numerique',
    description:
      "« Se connecter, s'identifier et agir en toute autonomie sur les plateformes en ligne » — Apprendre à se familiariser avec l'usage de l'identité numérique pour simplifier vos démarches administratives et quotidiennes. Ce module vous guide pas à pas pour utiliser l'application Itsme et le lecteur de carte eID, et naviguer facilement sur les principaux portails publics : ONVA, Chômage temporaire, MyMinfin, IRISbox, Mon Espace Wallonie ou My eBox. Commander un document administratif, effectuer un paiement, s'identifier sur un site public ou signer électroniquement un document… toutes ces actions nécessitent aujourd'hui une authentification sécurisée via une clé numérique.",
    objectifs: [
      "Comprendre les outils d'identification numérique (eID, Itsme, Token, codes SMS/e-mail).",
      "Utiliser le lecteur de carte eID : télécharger des documents officiels, s'identifier sur les portails, installer eID Belgium.",
      "Maîtriser l'application Itsme : connexion aux portails (ONEM, IRISbox, MyMinfin, ONVA, Mon Espace Wallonie), création de compte, installation sur smartphone.",
      "Réaliser des démarches en ligne : commander des documents, demandes communales via IRISbox, carte de chômage ONEM, documents d'impôt MyMinfin, attestation ONVA.",
      "Adopter les bonnes pratiques de sécurité numérique : RGPD, authenticité des sites, détection du phishing, mots de passe forts.",
    ],
    modalitesPédagogie:
      "La formation s'appuie sur une pédagogie différenciée mêlant théorie et pratique, avec une approche individuelle et collective. Chaque séance comprend une évaluation des acquis, des mises en situation réelles, des exercices guidés et des démonstrations pas à pas. Un syllabus numérique et des tutoriels accessibles via QR Code sont remis à chaque participant. Une aide à distance est également proposée après la formation.",
    evaluationSuivi:
      "À la fin de chaque session, les participants complètent un questionnaire d'évaluation post-formation. Les feedbacks recueillis permettent d'améliorer en continu le contenu, la méthode et l'animation.",
    supportsLogistiques:
      "Formations dans les locaux d'ECD ou chez les partenaires. Matériel fourni : ordinateurs portables, tablettes, vidéoprojecteurs, Flybox (connexion Internet), syllabus. Les participants peuvent apporter leur propre PC, smartphone ou tablette.",
    publicVise: 'Personnel assimilé, Aide-ménagères',
    approbation: [
      { region: 'Wallonie', certificate: 'E10240', date: '23/02/2024' },
      { region: 'Bruxelles', certificate: 'E1421/B', date: '03/03/2022' },
    ],
    duree: '4 heures / Groupe (journée ou demi-journée possible)',
  },
  {
    slug: 'internet-navigation-et-recherches-en-ligne',
    titre: 'Internet, navigation et recherches en ligne',
    category: 'numerique',
    description:
      "Ce module permet d'apprendre à naviguer sur Internet de manière sûre, efficace et adaptée à ses besoins. Les participants découvriront comment choisir et utiliser un navigateur fiable, effectuer des recherches ciblées, reconnaître les sites sécurisés, personnaliser leur navigateur et adopter les bons réflexes face aux menaces en ligne. Ils apprendront également à explorer les premières fonctionnalités d'intelligence artificielle (Copilot, Gemini) pour l'aide à la rédaction et les réponses assistées.",
    objectifs: [
      "Découvrir l'apport de l'IA dans la navigation : utiliser Gemini (Google) et Copilot (Edge) pour répondre, analyser, résumer et guider la recherche.",
      "Réaliser une recherche simple et pertinente grâce aux mots-clés.",
      "Installer, ouvrir et utiliser un navigateur sur PC et smartphone.",
      "Distinguer un navigateur d'un moteur de recherche et comprendre leur rôle.",
      "Naviguer de manière sécurisée, gérer la confidentialité et évaluer la fiabilité des sources.",
    ],
    modalitesPédagogie:
      "Pédagogie différenciée mêlant théorie et pratique, approche individuelle et collective. Chaque séance comprend une évaluation des acquis, des mises en situation réelles, des exercices guidés et des démonstrations pas à pas. Syllabus numérique et tutoriels via QR Code. Aide à distance proposée après la formation.",
    evaluationSuivi:
      "Questionnaire d'évaluation post-formation. Les feedbacks permettent d'améliorer en continu le contenu et l'animation.",
    supportsLogistiques:
      "Formations dans les locaux d'ECD ou chez les partenaires. Matériel fourni : ordinateurs portables, tablettes, vidéoprojecteurs, Flybox, syllabus. Participants peuvent apporter leur PC, smartphone ou tablette.",
    publicVise: 'Personnel assimilé, Aide-ménagères',
    approbation: [
      { region: 'Wallonie', certificate: 'E10257', date: '15/04/2024' },
      { region: 'Bruxelles', certificate: 'E1422/B', date: '03/03/2022' },
    ],
    duree: '4 heures / Groupe',
  },
  {
    slug: 'messageries-electroniques',
    titre: 'Messageries électroniques',
    category: 'numerique',
    description:
      "La messagerie électronique est aujourd'hui incontournable, aussi bien dans la vie quotidienne que dans le cadre professionnel. Ce module permet de découvrir et d'utiliser efficacement les principales messageries en ligne (Gmail, Outlook), avec une initiation à l'usage de l'IA pour la rédaction, la correction, l'amélioration du style et la traduction des messages.",
    objectifs: [
      "Création et paramétrage d'un compte email : personnaliser l'affichage, la signature et les préférences.",
      "Navigation et utilisation : rédiger des emails clairs, utiliser l'IA pour améliorer ses messages, comprendre l'interface (envoyer/recevoir).",
      "Gestion des pièces jointes et liens de façon sécurisée.",
      "Organisation de la boîte de réception : trier, classer, créer des dossiers, étiquettes, archiver.",
      "Sécurité et bonnes pratiques : protéger ses données, identifier les spams et le phishing.",
    ],
    modalitesPédagogie:
      "Pédagogie différenciée, accompagnement individuel et dynamique collective. Mises en situation réelles, exercices pratiques à chaque étape. Support pédagogique accessible via QR Code. Aide à distance possible après la formation.",
    evaluationSuivi:
      "Ajustement des contenus selon le niveau et le rythme des participants. Feedback et échanges individuels. Évaluations courtes en fin de séance.",
    supportsLogistiques:
      "Formation dans vos locaux, nos espaces ou ateliers mobiles. Matériel fourni : ordinateurs portables, tablettes, vidéoprojecteurs, Flybox, syllabus. Participants peuvent apporter leur PC, smartphone ou tablette.",
    publicVise: 'Personnel assimilé, Aide-ménagères',
    approbation: [
      { region: 'Wallonie', certificate: 'E10256', date: '15/04/2024' },
      { region: 'Bruxelles', certificate: 'E1420/B', date: '03/03/2022' },
    ],
    duree: '4 heures / Groupe',
  },
  {
    slug: 'signatures-electroniques',
    titre: 'Outils de signatures électroniques',
    category: 'numerique',
    description:
      "Simplifiez votre quotidien : plus besoin d'imprimer, signer à la main, puis scanner. La signature électronique permet de signer vos documents en ligne, rapidement et en toute sécurité, depuis un ordinateur, une tablette ou un smartphone. Du simple paraphe numérique à la signature sécurisée via carte d'identité ou Itsme, ce module vous guide pour utiliser efficacement les différents outils reconnus légalement.",
    objectifs: [
      "Créer une signature manuscrite numérisée (photo, recadrage, fond transparent, format PNG).",
      "Ouvrir, signer et enregistrer un document PDF (Adobe Acrobat Reader, Aperçu, outils « Remplir et signer »).",
      "Utiliser la carte eID ou Itsme pour une signature avancée et certifiée.",
      "Utiliser des plateformes professionnelles pour signer et faire signer (DocuSign, Yousign, PandaDoc, etc.).",
      "Protéger un document signé, reconnaître le niveau de signature nécessaire, vérifier l'authenticité d'une signature numérique.",
    ],
    modalitesPédagogie:
      "Pédagogie différenciée, théorie et pratique, approche individuelle et collective. Évaluation des acquis, mises en situation réelles, exercices guidés, démonstrations pas à pas. Syllabus et tutoriels via QR Code. Aide à distance après la formation.",
    evaluationSuivi:
      "Questionnaire d'évaluation post-formation. Les feedbacks permettent d'améliorer le contenu et l'animation.",
    supportsLogistiques:
      "Formations dans les locaux d'ECD ou chez les partenaires. Matériel fourni : ordinateurs portables, tablettes, vidéoprojecteurs, Flybox, syllabus. Participants peuvent apporter leur PC, smartphone ou tablette.",
    publicVise: 'Personnel assimilé, Aide-ménagères',
    approbation: [
      { region: 'Wallonie', certificate: 'E10254', date: '15/04/2024' },
      { region: 'Bruxelles', certificate: 'E1642/B', date: '30/10/2024' },
    ],
    duree: '4 heures / Groupe',
  },
  {
    slug: 'decouverte-de-chatgpt',
    titre: 'Découverte de ChatGPT',
    category: 'numerique',
    description:
      "Poser des questions, obtenir des explications, rédiger, corriger, reformuler, résumer, traduire, donner des idées : ce module propose une introduction pratique à ChatGPT. Accessible aux débutants et utilisateurs intermédiaires, la formation vise à comprendre comment exploiter ChatGPT de manière efficace, responsable et sécurisée, dans un cadre personnel, administratif ou professionnel.",
    objectifs: [
      "Comprendre ce qu'est une IA conversationnelle et à quoi elle sert (aide administrative, rédaction, apprentissage, organisation, créativité).",
      "Accéder à ChatGPT sur ordinateur ou smartphone : naviguer dans l'interface, se connecter, utiliser le navigateur ou l'application mobile.",
      "Formuler des demandes claires (technique du prompt) : structurer une consigne, tenir compte de l'objectif et du public visé.",
      "Utiliser ChatGPT pour des tâches pratiques : idées et organisation, traduction et reformulation, rédaction/correction de textes, recherche et résumé d'informations.",
    ],
    modalitesPédagogie:
      "Pédagogie différenciée, théorie et pratique, approche individuelle et collective. Évaluation des acquis, mises en situation réelles, exercices guidés, démonstrations pas à pas. Syllabus et tutoriels via QR Code. Aide à distance après la formation.",
    evaluationSuivi:
      "Questionnaire d'évaluation post-formation. Les feedbacks permettent d'améliorer le contenu et l'animation.",
    supportsLogistiques:
      "Formations dans les locaux d'ECD ou chez les partenaires. Matériel fourni : ordinateurs portables, tablettes, vidéoprojecteurs, Flybox, syllabus. Participants peuvent apporter leur PC, smartphone ou tablette.",
    publicVise: 'Personnel assimilé, Aide-ménagères',
    approbation: [{ region: 'Bruxelles', certificate: 'E1605/B', date: '17/05/2024' }],
    duree: '4 heures / Groupe',
  },
  {
    slug: 'outils-de-videoconference',
    titre: 'Visioconférence (Microsoft Teams, Zoom & autres outils)',
    category: 'numerique',
    description:
      "Microsoft Teams et Zoom sont parmi les solutions de visioconférence les plus utilisées pour communiquer et collaborer à distance. Ce module propose une découverte progressive de Teams et Zoom, sur ordinateur et smartphone, en mettant en avant leurs fonctionnalités communes et spécificités, pour permettre une utilisation autonome (participer ou organiser une réunion).",
    objectifs: [
      "Installer et configurer Teams et Zoom sur ordinateur et smartphone.",
      "Rejoindre une réunion via un lien, une invitation ou une application.",
      "Créer, planifier et organiser une réunion en ligne.",
      "Gérer l'audio, la caméra, l'arrière-plan et les réglages d'affichage.",
      "Utiliser les outils interactifs : chat, partage d'écran, réactions, envoi de fichiers.",
      "Gérer les participants (micro, caméra, salle d'attente, etc.).",
      "Options avancées : salles de répartition, enregistrement, sous-titrage, accessibilité.",
      "Identifier les différences entre Teams, Zoom, Meet, Webex, Skype et choisir l'outil adapté.",
    ],
    modalitesPédagogie:
      "Pédagogie différenciée, théorie et pratique. Évaluation des acquis, mises en situation réelles, exercices guidés, démonstrations pas à pas. Syllabus et tutoriels via QR Code. Aide à distance après la formation.",
    evaluationSuivi:
      "Questionnaire d'évaluation post-formation. Les feedbacks permettent d'améliorer le contenu et l'animation.",
    supportsLogistiques:
      "Formations dans les locaux d'ECD ou chez les partenaires. Matériel fourni : ordinateurs portables, tablettes, vidéoprojecteurs, Flybox, syllabus. Participants peuvent apporter leur PC, smartphone ou tablette.",
    publicVise: 'Personnel assimilé, Aide-ménagères',
    approbation: [
      { region: 'Wallonie', certificate: 'E10255', date: '15/04/2024' },
      { region: 'Bruxelles', certificate: 'E1427/B', date: '03/03/2022' },
    ],
    duree: '4 heures / Groupe',
  },
  // ——— Bien-être et organisation ———
  {
    slug: 'techniques-de-nettoyage',
    titre: 'Techniques de nettoyage',
    category: 'bien-etre',
    description:
      "Ce module initie les aides-ménagères aux techniques de nettoyage professionnelles, en leur permettant d'utiliser les produits et le matériel de manière efficace, sécurisée et adaptée aux surfaces. La formation aborde les bases du nettoyage professionnel : entretien et utilisation du matériel (microfibres, éponges, aspirateur, raclettes, seaux…), précautions d'usage des produits chimiques, lecture des étiquettes et pictogrammes de sécurité, choix du produit selon la saleté et la surface, échelle des pH, cercle de Sinner (TACT). Adaptée à un public peu scolarisé, elle utilise un langage clair, des démonstrations réalistes et des activités pratiques.",
    objectifs: [
      "Comprendre les principes du nettoyage professionnel et le cercle de Sinner (chimie, action mécanique, temps, température).",
      "Utiliser correctement les produits : éviter les erreurs (dosage, mélanges dangereux), choisir le produit selon la surface et la saleté, comprendre l'échelle des pH.",
      "Assurer la sécurité : identifier les EPI nécessaires, lire étiquettes et pictogrammes, éviter brûlures, allergies, irritations.",
      "Utiliser et entretenir le matériel professionnel : microfibres, éponges, aspirateurs, raclettes, seaux, codes couleur, bonnes pratiques d'hygiène.",
      "Appliquer les bonnes postures et règles de sécurité (éviter chutes, torsions, plier les genoux).",
    ],
    modalitesPédagogie:
      "Adaptation aux besoins d'un public peu qualifié. Apprentissage par l'observation et la manipulation réelle. Ateliers pratiques : simulations bon/mauvais usage, lecture d'étiquette, utilisation du matériel, dilution. Participation active et démonstrations.",
    evaluationSuivi:
      "Exercices pratiques évalués (utilisation du matériel, choix du produit, dilution). Validation des acquis et identification des points d'attention.",
    supportsLogistiques:
      "Fiches illustrées (codes couleur, dilution, pictogrammes, cercle de Sinner, pH). Matériel de démonstration : EPI, produits pH variés, escabelle, seaux, raclettes, aspirateur, microfibres, plumeaux.",
    publicVise: 'Personnel assimilé, Aide-ménagères',
    approbation: [
      { region: 'Wallonie', certificate: 'E10406', date: '12/11/2025' },
      { region: 'Bruxelles', certificate: 'E1697/B', date: '03/09/2025' },
    ],
    duree: '4 heures / Groupe',
  },
  {
    slug: 'communication-professionnelle',
    titre: 'Communication professionnelle',
    category: 'bien-etre',
    description:
      "Ce module vise à renforcer les compétences de communication interpersonnelle des aides-ménagères, tant avec les clients qu'avec les collègues ou la hiérarchie. La formation s'appuie sur des situations concrètes : demandes difficiles, incompréhensions, critiques, gestion des limites. Les participantes apprennent à accueillir une critique, désamorcer une tension, comprendre l'impact du non-verbal, poser des limites sans conflit, s'exprimer avec clarté et respect. L'approche est simple, visuelle, interactive et accessible.",
    objectifs: [
      "Comprendre la communication : comment naissent les malentendus, les trois dimensions (verbal, paraverbal, non verbal).",
      "S'exprimer de manière professionnelle : message en « je », méthode DESC (Décrire, Exprimer, Suggérer, Conclure), dire non ou poser une limite sans agressivité.",
      "Gérer les tensions et situations délicates : demandes excessives, désamorcer un conflit, réagir face à une critique.",
      "Renforcer les compétences relationnelles : écoute active, reformulation, reconnaissance des émotions, posture professionnelle.",
    ],
    modalitesPédagogie:
      "Pédagogie active, pratique et participative. Jeux de rôle réalistes, activités ludiques (émotions, paraverbal, non-verbal), travail en duo/trio. Vocabulaire simple, cadre bienveillant, focus sur la confiance en soi.",
    evaluationSuivi:
      "Auto-évaluation en début et fin de séance (progrès, besoins, confort). Bilan individuel oral : ce que j'ai appris, ce que je vais essayer dans mon prochain chantier.",
    supportsLogistiques:
      "Fiches illustrées (message en je, DESC, écoute active, 3 dimensions de la communication). Scénarios pour mises en situation. Salle modulable pour travail en groupes et jeux de rôle.",
    publicVise: 'Personnel assimilé, Aide-ménagères',
    approbation: [
      { region: 'Wallonie', certificate: 'E10403', date: '12/11/2025' },
      { region: 'Bruxelles', certificate: 'E1693/B', date: '27/07/2025' },
    ],
    duree: '4 heures / Groupe',
  },
  {
    slug: 'ergonomie-et-prevention-des-tms',
    titre: 'Ergonomie et prévention des TMS',
    category: 'bien-etre',
    description:
      "Ce module sensibilise les aides-ménagères aux troubles musculo-squelettiques (TMS) liés aux tâches physiques du métier : nettoyage, port d'objets, travail au sol, repassage, mauvaises postures. La formation permet d'identifier les facteurs de risque et d'apprendre des gestes protecteurs simples, applicables sur le terrain. Objectifs : adopter une organisation plus ergonomique, prévenir les douleurs (dos, épaules, poignets, genoux), réduire la fatigue, améliorer le confort au travail.",
    objectifs: [
      "Comprendre les TMS : zones exposées (lombaires, cervicales, poignets, genoux, épaules), causes principales.",
      "Analyser ses pratiques : repérer les gestes et situations à risque (aspirer, laver le sol, repasser, transporter, nettoyer en hauteur).",
      "Adopter des gestes et postures ergonomiques : éviter torsions et charges, utiliser le poids du corps, ajuster la hauteur du matériel, soulever et porter sans se blesser.",
      "Organiser sa journée : micro-pauses, alternance des tâches, optimisation de l'espace chez le client.",
      "Mettre en place des routines de prévention : étirements, pauses actives, échauffements courts.",
    ],
    modalitesPédagogie:
      "Mises en situation réalistes, exercices en binômes, démonstrations avec matériel réel (aspirateur, balais, seaux, escabelle, table de repassage). Explications accessibles avec schémas. Priorité à la répétition des bons gestes.",
    evaluationSuivi:
      "Observation pratique lors des exercices. Auto-évaluation des douleurs. Quiz visuel/oral : gestes corrects vs incorrects. Objectif : nouvelles habitudes protectrices.",
    supportsLogistiques:
      "Fiches illustrées (réglage du matériel, position du dos, gestes à éviter/corrects). Matériel : aspirateur, balais, seaux, table de repassage, escabelle, tapis pour étirements.",
    publicVise: 'Personnel assimilé, Aide-ménagères',
    approbation: [
      { region: 'Wallonie', certificate: 'E10405', date: '12/11/2025' },
      { region: 'Bruxelles', certificate: 'E1696/B', date: '03/09/2025' },
    ],
    duree: '4 heures / Groupe',
  },
  {
    slug: 'organisation-du-travail',
    titre: 'Organisation du travail',
    category: 'bien-etre',
    description:
      "Ce module fournit aux aides-ménagères des outils simples et concrets pour mieux organiser leur travail au quotidien : gestion du temps, structuration des tâches, anticipation des imprévus, planification des prestations chez les clients. La formation aide à gagner en efficacité, diminuer le stress lié à la désorganisation, réduire la fatigue, éviter les allers-retours inutiles et renforcer l'autonomie et la satisfaction professionnelle.",
    objectifs: [
      "Comprendre les principes de l'organisation : bénéfices (moins de fatigue, stress, plus d'efficacité).",
      "Planifier efficacement : routine logique (haut vers bas, propre vers sale), prioriser, évaluer le temps des tâches courantes.",
      "Optimiser les gestes et méthodes : méthode en zone, méthode en boucle.",
      "Gérer les imprévus : dire non poliment, revoir les priorités avec le client, rester calme face à une demande non conforme.",
      "Créer une organisation quotidienne et hebdomadaire : planning, carnet, to-do list ou applications, espacer les tâches lourdes.",
    ],
    modalitesPédagogie:
      "Participative, bienveillante, centrée sur l'expérience. Brainstormings, mises en situation, exercices pratiques. Supports visuels simples. Jeux pédagogiques et simulations (déplacement désorganisé vs structuré).",
    evaluationSuivi:
      "Exercices pratiques : optimiser un déplacement, organiser une routine, remplir un planning réaliste. Auto-évaluation : prise de conscience, engagement (« Demain, je teste… »).",
    supportsLogistiques:
      "Fiches illustrées (méthodes en boucle/zone, routines, planification). Carnet de planification, téléphone pour listes de tâches. Matériel : paperboard, aspirateur, balais, seaux.",
    publicVise: 'Personnel assimilé, Aide-ménagères',
    approbation: [
      { region: 'Wallonie', certificate: 'E10404', date: '12/11/2025' },
      { region: 'Bruxelles', certificate: 'E1698/B', date: '03/09/2025' },
    ],
    duree: '4 heures / Groupe',
  },
  {
    slug: 'motivation-et-gestion-du-stress',
    titre: 'Motivation et gestion du stress',
    category: 'bien-etre',
    description:
      "Ce module accompagne les aide-ménagères dans la compréhension et la gestion du stress professionnel et le renforcement de la motivation au quotidien. À partir de situations concrètes (pression du temps, isolement, exigences des clients), la formation propose des outils simples : respiration, recentrage, pensée positive, valorisation de soi. L'approche est participative, bienveillante et adaptée au niveau de langue du public.",
    objectifs: [
      "Comprendre le stress : définition, phases, symptômes. Identifier comment je ressens le stress.",
      "Identifier les sources de stress du métier (carte mentale, situations en binômes).",
      "Mettre en pratique des techniques de gestion du stress : respiration abdominale, relaxation musculaire, ancrage, visualisation positive.",
      "Donner du sens à son travail : création d'un « carnet de fiertés », témoignages.",
      "Identifier une action concrète à mettre en place après la formation.",
    ],
    modalitesPédagogie:
      "Participative : échanges, partages d'expérience. Concrète : situations du quotidien professionnel. Bienveillante : respect du rythme et du niveau de langue. Pratique : exercices de respiration, recentrage, visualisation, jeux de rôle.",
    evaluationSuivi:
      "Évaluation à chaud en fin de séance : engagement personnel (« Ce que je vais essayer »), fiche simple (smileys, ressentis, acquis).",
    supportsLogistiques:
      "Fiches synthétiques : pensées positives, techniques de respiration et relaxation, phases du stress. Résumé diffusé en fin de formation.",
    publicVise: 'Personnel assimilé, Aide-ménagères',
    approbation: [
      { region: 'Wallonie', certificate: 'E10407', date: '12/11/2025' },
      { region: 'Bruxelles', certificate: 'E1695/B', date: '03/09/2025' },
    ],
    duree: '4 heures / Groupe',
  },
  {
    slug: 'securite-sur-son-lieu-de-travail',
    titre: 'Sécurité sur son lieu de travail',
    category: 'bien-etre',
    description:
      "La formation « Sécurité sur son lieu de travail – Prévention et protection » s'adresse aux aides-ménagères du secteur Titres-Services et vise à renforcer leurs compétences en prévention des risques dans le travail à domicile. Les travailleuses sont exposées à de multiples dangers : produits chimiques, chutes, postures contraignantes, matériel défectueux, stress, interactions avec les occupants et animaux. Ce module apporte des outils concrets pour identifier les risques, dialoguer avec le client, réagir en cas d'incident et adopter des gestes professionnels sécurisés.",
    objectifs: [
      "Identifier les risques dans un domicile : analyser l'environnement, repérer les dangers avant de commencer.",
      "Utiliser les produits d'entretien en sécurité : stockage, protection, éviter les mélanges dangereux, comprendre les pictogrammes.",
      "Prévenir les TMS : utiliser correctement le matériel, adopter des postures ergonomiques.",
      "Réagir face à un incident : signaler à l'employeur, premiers réflexes en cas de blessure.",
      "Communiquer de manière professionnelle : demander des adaptations sans conflit, exprimer un risque au client.",
    ],
    modalitesPédagogie:
      "Droits et devoirs en matière de sécurité. Procédure en cas d'urgence. Prévention des chutes et accidents. Lecture des pictogrammes et FDS. Exercices de communication client-travailleur. Analyse de cas concrets. Démonstrations pratiques (dilution, posture, port de charges). Mises en situation (cuisine, salle de bain, escaliers). Approche participative.",
    evaluationSuivi:
      "Quiz visuel de reconnaissance des dangers. Mise en situation observée. Auto-évaluation des pratiques avant/après. Échange collectif de validation. Attestation de participation. Fiche mémo « réflexes sécurité ». Rapport pédagogique à l'entreprise. Possibilité de séance de rappel 3 à 6 mois après.",
    supportsLogistiques:
      "Supports traduits et imagés. Trousse de premiers secours pédagogique. Affiches pictogrammes et fiches de risques. Matériel réel : produits d'entretien, gants, serpillières, aspirateur. Salle équipée (tables, chaises, vidéoprojecteur).",
    publicVise: 'Personnel assimilé, Aide-ménagères',
    approbation: [
      { region: 'Wallonie', certificate: 'En attente', date: '' },
      { region: 'Bruxelles', certificate: 'E1730/B', date: '29/01/2026' },
    ],
    duree: '4 heures / Groupe',
  },
]

/** Slug → module (for detail pages) */
export function getCatalogueModuleBySlug(slug: string): TitreServiceCatalogueModule | undefined {
  return catalogueModules.find((m) => m.slug === slug)
}

/** All catalogue slugs for generateStaticParams */
export function getCatalogueSlugs(): string[] {
  return catalogueModules.map((m) => m.slug)
}

// Legacy type and list for backward compatibility (existing [slug] page expected "modules")
export type TitreServiceModules = {
  slug: string
  titre: string
  description: string
  publicVise: string
  approbation: TitreServiceModuleApproval[]
  duree: string
}

/** @deprecated Use catalogueModules for the catalogue; modules kept for any existing references. */
export const modules: TitreServiceModules[] = catalogueModules.map((m) => ({
  slug: m.slug,
  titre: m.titre,
  description: m.description,
  publicVise: m.publicVise,
  approbation: m.approbation,
  duree: m.duree,
}))
