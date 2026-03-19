export type TitreServiceModuleApproval = {
  region: string
  certificate: string
  date: string
}

export type TitreServiceCatalogueModule = {
  slug: string
  titre: string
  titreCourt?: string
  description: string
  descriptionCourte: string
  objectifsIntro?: string
  objectifs: string[]
  modalitesPédagogie: string
  evaluationSuivi: string
  supportsLogistiques: string
  publicVise: string
  approbation: TitreServiceModuleApproval[]
  duree: string
  category: 'outils-numeriques' | 'techniques-prevention' | 'bien-etre-savoir-faire'
  imageSrc: string
  imageAlt: string
  isPlaceholder?: boolean
}

export const catalogueModules: TitreServiceCatalogueModule[] = [
  // ——— Outils numériques ———
  {
    slug: 'identite-numerique',
    titre: 'Identité numérique et démarches administratives',
    descriptionCourte:
      "eID, Itsme et portails administratifs : se connecter, s'identifier et réaliser ses démarches en autonomie.",
    description:
      '« Se connecter, s’identifier et agir en toute autonomie sur les plateformes en ligne »\n\nApprendre à se familiariser avec l’usage de l’identité numérique pour simplifier vos démarches administratives et quotidiennes. Ce module vous guide pas à pas pour utiliser l’application Itsme et le lecteur de carte eID, et naviguer facilement sur les principaux portails publics.\n\nCommander un document administratif, effectuer un paiement, s’identifier sur un site public ou signer électroniquement un document… toutes ces actions nécessitent aujourd’hui une authentification sécurisée via une clé numérique.',
    objectifs: [
      "Comprendre les outils d'identification numérique (eID, Itsme, Token, codes SMS/e-mail).",
      'Utiliser le lecteur de carte eID et résoudre les problèmes de connexion.',
      'Maîtriser l’application Itsme et se connecter à des portails publics.',
      'Réaliser des démarches administratives en ligne en toute autonomie.',
      'Adopter les bonnes pratiques de sécurité numérique (RGPD, phishing, mots de passe).',
    ],
    modalitesPédagogie:
      'Pédagogie différenciée mêlant théorie et pratique, avec une approche individuelle et collective. Mises en situation, exercices guidés et démonstrations pas à pas. Syllabus/tutoriels via QR Code. Aide à distance possible après la formation.',
    evaluationSuivi:
      "Questionnaire d'évaluation post-formation. Les feedbacks permettent d'améliorer en continu le contenu et l'animation.",
    supportsLogistiques:
      "Formations chez les partenaires ou dans les locaux d'ECD. Matériel fourni : ordinateurs portables, tablettes, vidéoprojecteurs, Flybox, syllabus. Les participants peuvent apporter leur propre PC/smartphone/tablette.",
    publicVise: 'Personnel assimilé, Aide-ménagères',
    approbation: [
      { region: 'Wallonie', certificate: 'E10240', date: '23/02/2024' },
      { region: 'Bruxelles', certificate: 'E1421/B', date: '03/03/2022' },
    ],
    duree: '4 heures / Groupe',
    category: 'outils-numeriques',
    imageSrc: '/assets/services/perfectionnement/office.jpg',
    imageAlt: 'Identité numérique',
  },
  {
    slug: 'messageries-electroniques',
    titre: 'Messageries électroniques',
    descriptionCourte:
      'Créer et organiser sa boîte mail, rédiger des emails clairs, gérer pièces jointes et se protéger des spams/phishing.',
    description:
      'La messagerie électronique est aujourd’hui incontournable, aussi bien dans la vie quotidienne que dans le cadre professionnel.\n\nCe module a pour objectif de permettre aux participants de découvrir et d’utiliser efficacement les principales messageries (Gmail, Outlook). Il inclut aussi une initiation à l’usage de l’IA pour la rédaction, la correction, l’amélioration du style et la traduction des messages.',
    objectifs: [
      'Créer et paramétrer un compte email (signature, préférences).',
      'Envoyer/recevoir et rédiger des emails adaptés au contexte.',
      'Joindre des documents, photos et liens de façon sécurisée.',
      'Trier, classer, archiver et retrouver des messages.',
      'Identifier les spams et reconnaître les tentatives de phishing.',
    ],
    modalitesPédagogie:
      'Pédagogie différenciée, exercices pratiques et mises en situation réelles. Support via QR Code. Aide à distance possible après la formation.',
    evaluationSuivi:
      'Évaluations courtes en fin de séance, feedbacks et ajustements selon le niveau.',
    supportsLogistiques:
      'Formation dans vos locaux, nos espaces ou en ateliers mobiles. Matériel fourni : ordinateurs portables, tablettes, vidéoprojecteurs, Flybox, syllabus. Participants peuvent apporter leur matériel.',
    publicVise: 'Personnel assimilé, Aide-ménagères',
    approbation: [
      { region: 'Wallonie', certificate: 'E10256', date: '15/04/2024' },
      { region: 'Bruxelles', certificate: 'E1420/B', date: '03/03/2022' },
    ],
    duree: '4 heures / Groupe',
    category: 'outils-numeriques',
    imageSrc: '/assets/services/perfectionnement/outlook.jpg',
    imageAlt: 'Messageries électroniques',
  },
  {
    slug: 'internet-navigation-recherches-en-ligne',
    titre: 'Internet, navigation et recherches en ligne',
    descriptionCourte:
      'Naviguer efficacement, rechercher, vérifier les sources et adopter les bons réflexes de sécurité en ligne.',
    description:
      'Ce module permet d’apprendre à naviguer sur Internet de manière sûre, efficace et adaptée à ses besoins. Les participants découvrent comment choisir et utiliser un navigateur, effectuer des recherches, reconnaître des sites sécurisés et adopter les bons réflexes face aux menaces en ligne.',
    objectifsIntro:
      'Le module « Internet : navigation et recherches en ligne » propose une initiation puis un perfectionnement à l’utilisation des navigateurs web sur ordinateur et smartphone (Google Chrome, Microsoft Edge, Firefox, Opera, Safari). Il vise à développer l’autonomie des participants dans la recherche d’informations, la navigation sécurisée, la gestion des paramètres de confidentialité, ainsi que dans l’usage des premiers outils d’assistance par intelligence artificielle (Copilot, Gemini).\n\nÀ l’issue du module, les participants seront capables de :',
    objectifs: [
      'Identifier, ouvrir et installer un navigateur (sur PC ou smartphone).',
      'Distinguer un navigateur d’un moteur de recherche (ex. : Chrome ≠ Google).',
      'Saisir correctement une adresse web (URL) et accéder à un site.',
      'Réaliser une recherche simple et efficace à partir de mots-clés pertinents.',
      'Utiliser les filtres, suggestions et résultats associés pour affiner une recherche.',
      'Créer, organiser et gérer les favoris / marque-pages.',
      'Ouvrir, fermer et gérer plusieurs onglets simultanément.',
      'Personnaliser l’interface du navigateur (page d’accueil, thème, affichage).',
      'Supprimer l’historique de navigation et gérer les données enregistrées.',
      'Activer et utiliser le mode de navigation privée.',
      'Reconnaître un site sécurisé (HTTPS, cadenas, mentions légales).',
      'Identifier les signaux d’arnaques (fausses annonces, faux mails, URL trompeuses).',
      'Utiliser le gestionnaire de mots de passe intégré aux navigateurs.',
      'Configurer les cookies et paramètres de confidentialité.',
      'Réaliser des achats en ligne en toute sécurité (vérification du vendeur, paiement, confirmation).',
      'Découvrir l’apport de l’IA dans la navigation : utiliser Copilot (Edge) pour résumer, expliquer ou rechercher.',
      'Découvrir l’apport de l’IA dans la navigation : utiliser Gemini (Google) pour répondre, analyser et guider la recherche.',
    ],
    modalitesPédagogie:
      'Pédagogie différenciée mêlant théorie et pratique. Mises en situation, exercices guidés, démonstrations pas à pas. Syllabus via QR Code. Aide à distance possible après la formation.',
    evaluationSuivi:
      "Questionnaire d'évaluation post-formation. Amélioration continue via les retours.",
    supportsLogistiques:
      "Formations chez les partenaires ou dans les locaux d'ECD. Matériel fourni : ordinateurs portables, tablettes, vidéoprojecteurs, Flybox, syllabus.",
    publicVise: 'Personnel assimilé, Aide-ménagères',
    approbation: [
      { region: 'Wallonie', certificate: 'E10257', date: '15/04/2024' },
      { region: 'Bruxelles', certificate: 'E1422/B', date: '03/03/2022' },
    ],
    duree: '4 heures / Groupe',
    category: 'outils-numeriques',
    imageSrc: '/assets/epnm/initiation/informatique.jpeg',
    imageAlt: 'Internet et navigation',
  },
  {
    slug: 'decouverte-de-chatgpt',
    titre: 'Découverte de ChatGPT',
    descriptionCourte:
      'Découvrir ChatGPT : prompts, rédaction, reformulation, résumé, traduction et bonnes pratiques (limites, confidentialité).',
    description:
      'Poser des questions, obtenir des explications, rédiger, corriger, reformuler, résumer, traduire, donner des idées : ce module propose une introduction pratique à l’utilisation de ChatGPT.\n\nLes participants apprennent à formuler des requêtes (prompts), à identifier les usages pertinents et à comprendre les limites et bonnes pratiques.',
    objectifs: [
      'Comprendre ce qu’est une IA conversationnelle et ses usages.',
      'Accéder à ChatGPT sur ordinateur ou smartphone et naviguer dans l’interface.',
      'Structurer une consigne (prompt) en fonction de son objectif.',
      'Rédiger/corriger/reformuler/traduire des messages et documents.',
      'Rechercher et résumer des informations en gardant un esprit critique.',
    ],
    modalitesPédagogie:
      'Pédagogie différenciée, théorie et pratique. Exercices guidés, démonstrations pas à pas. Syllabus via QR Code. Aide à distance possible après la formation.',
    evaluationSuivi:
      "Questionnaire d'évaluation post-formation. Amélioration continue via les retours.",
    supportsLogistiques:
      "Formations chez les partenaires ou dans les locaux d'ECD. Matériel fourni : ordinateurs portables, tablettes, vidéoprojecteurs, Flybox, syllabus.",
    publicVise: 'Personnel assimilé, Aide-ménagères',
    approbation: [{ region: 'Bruxelles', certificate: 'E1605/B', date: '17/05/2024' }],
    duree: '4 heures / Groupe',
    category: 'outils-numeriques',
    imageSrc: '/assets/services/perfectionnement/ai-work.jpg',
    imageAlt: 'Découverte de ChatGPT',
  },
  {
    slug: 'word-excel-debutant',
    titre: 'Word et Excel – Niveau débutant',
    descriptionCourte:
      'Initiation à Word et Excel : premiers gestes sur ordinateur, documents simples et bases d’un tableau, par des exercices pratiques et progressifs.',
    description:
      "Cette formation d’initiation à Word et Excel a pour objectif d’accompagner les participantes dans la découverte des outils bureautiques de base, utiles tant dans la vie quotidienne que dans le cadre professionnel.\n\nAdaptée à un public débutant, elle permet d’acquérir les premières compétences numériques à travers des exercices pratiques, concrets et progressifs. Les participantes apprennent à utiliser un ordinateur, à manipuler la souris et le clavier, à créer des documents simples et à comprendre les bases de l’utilisation d’un tableau.",
    objectifs: [
      'Développer l’autonomie numérique de base.',
      'Se familiariser avec les outils bureautiques Word et Excel.',
      'Renforcer la confiance dans l’utilisation de l’ordinateur.',
      'Module Word – Traitement de texte :',
      'Créer, enregistrer et ouvrir un document.',
      'Saisir, corriger et modifier un texte.',
      'Mettre en forme un document (police, taille, alignement, espaces).',
      'Réaliser des documents simples tels que des lettres ou un CV.',
      'Module Excel – Tableur :',
      'Découvrir l’environnement de travail d’Excel.',
      'Ouvrir, créer et enregistrer un classeur.',
      'Saisir des données dans un tableau.',
      'Sélectionner, modifier et organiser des cellules.',
      'Mettre en forme un tableau simple.',
      'Créer des outils utiles du quotidien : listes, plannings, tableaux de suivi simples.',
    ],
    modalitesPédagogie:
      'La formation repose sur une pédagogie différenciée, alternant apports théoriques et mises en pratique. Elle s’appuie sur des exercices guidés, des démonstrations pas à pas et des situations concrètes adaptées au niveau des participantes. Un syllabus est mis à disposition via un QR code. Une aide à distance peut également être proposée après la formation.',
    evaluationSuivi:
      "Un questionnaire d’évaluation est remis à l’issue de la formation afin de recueillir l’avis des participantes. Les retours collectés alimentent une démarche d’amélioration continue des contenus et des méthodes pédagogiques.",
    supportsLogistiques:
      "Les formations peuvent être organisées soit chez les partenaires, soit dans les locaux d'Espace Cultures & Développement. Le matériel nécessaire est mis à disposition : ordinateurs portables, tablettes, vidéoprojecteur, Flybox et supports pédagogiques.",
    publicVise: 'Personnel assimilé, Aide-ménagères',
    approbation: [{ region: 'Bruxelles', certificate: 'E1426/B', date: '07/03/2022' }],
    duree: '4 heures / Groupe',
    category: 'outils-numeriques',
    imageSrc: '/assets/services/perfectionnement/office.jpg',
    imageAlt: 'Word et Excel – Niveau débutant',
  },

  // ——— Techniques et prévention ———
  {
    slug: 'techniques-de-nettoyage-securite',
    titre: 'Techniques de nettoyage et sécurité',
    descriptionCourte:
      'Gestes professionnels, matériel, choix des produits, pictogrammes de sécurité et prévention des accidents.',
    description:
      'Ce module initie les aides-ménagères aux techniques de nettoyage professionnelles, en leur permettant d’utiliser les produits et le matériel de manière efficace, sécurisée et adaptée aux surfaces.\n\nLa formation aborde l’entretien du matériel, la lecture des pictogrammes, l’échelle de pH et le cercle de Sinner (TACT).',
    objectifs: [
      'Comprendre les principes du nettoyage professionnel (cercle de Sinner).',
      'Choisir le produit adapté selon la surface et la saleté.',
      'Lire et interpréter étiquettes, pictogrammes et labels.',
      'Utiliser et entretenir le matériel (microfibres, aspirateur, raclettes…).',
      'Appliquer les bonnes postures et règles de sécurité.',
    ],
    modalitesPédagogie:
      'Ateliers pratiques, démonstrations et manipulations réelles. Langage clair et supports visuels adaptés.',
    evaluationSuivi: 'Exercices pratiques évalués (choix produit/surface, dilution, matériel).',
    supportsLogistiques:
      'Fiches illustrées, EPI, produits pH variés, matériel de démonstration (microfibres, seaux, raclettes, aspirateur…).',
    publicVise: 'Personnel assimilé, Aide-ménagères',
    approbation: [
      { region: 'Wallonie', certificate: 'E10406', date: '12/11/2025' },
      { region: 'Bruxelles', certificate: 'E1697/B', date: '03/09/2025' },
    ],
    duree: '4 heures / Groupe',
    category: 'techniques-prevention',
    imageSrc: '/assets/services/perfectionnement/bureautique.jpeg',
    imageAlt: 'Techniques de nettoyage',
  },
  {
    slug: 'ergonomie-et-prevention-tms',
    titre: 'Ergonomie et prévention des TMS',
    descriptionCourte:
      'Bonnes postures, gestes protecteurs, organisation des tâches et routines simples pour réduire douleurs et fatigue.',
    description:
      'Ce module sensibilise aux troubles musculo-squelettiques (TMS) liés aux tâches physiques du métier.\n\nLa formation alterne explications accessibles, démonstrations et exercices pratiques pour apprendre des gestes protecteurs directement applicables sur le terrain.',
    objectifs: [
      'Comprendre les TMS et les zones du corps les plus exposées.',
      'Repérer les gestes et situations à risque dans ses tâches.',
      'Adopter des gestes et postures ergonomiques.',
      'Organiser sa journée (alternance, micro-pauses).',
      'Mettre en place des routines de prévention (étirements, échauffements).',
    ],
    modalitesPédagogie:
      'Mises en situation, exercices en binômes, corrections personnalisées, démonstrations avec matériel réel.',
    evaluationSuivi: 'Observation pratique, auto-évaluation des douleurs, quiz visuel/oral.',
    supportsLogistiques:
      'Fiches illustrées, matériel de démonstration (aspirateur, balais, seaux, escabelle, table de repassage…).',
    publicVise: 'Personnel assimilé, Aide-ménagères',
    approbation: [
      { region: 'Wallonie', certificate: 'E10405', date: '12/11/2025' },
      { region: 'Bruxelles', certificate: 'E1696/B', date: '03/09/2025' },
    ],
    duree: '4 heures / Groupe',
    category: 'techniques-prevention',
    imageSrc: '/assets/services/perfectionnement/cybersecurity.avif',
    imageAlt: 'Ergonomie et prévention TMS',
  },
  {
    slug: 'produits-chimiques',
    titre: 'Produits chimiques et sécurité',
    isPlaceholder: true,
    descriptionCourte:
      "Manipuler les produits d'entretien en sécurité : lecture d'étiquettes, pictogrammes et bonnes pratiques.",
    description:
      "Contenu à venir. Cette page sera dédiée à la manipulation sécurisée des produits chimiques (pictogrammes, dilution, stockage, EPI, prévention des mélanges dangereux).",
    objectifs: [
      'Reconnaître les pictogrammes et comprendre les risques.',
      'Appliquer les règles de dilution, stockage et ventilation.',
      'Éviter les mélanges dangereux et adopter les EPI adaptés.',
    ],
    modalitesPédagogie: 'Contenu à venir.',
    evaluationSuivi: 'Contenu à venir.',
    supportsLogistiques: 'Contenu à venir.',
    publicVise: 'Aide-ménagères',
    approbation: [],
    duree: '4 heures / Groupe',
    category: 'techniques-prevention',
    imageSrc: '/assets/services/perfectionnement/office.jpg',
    imageAlt: 'Produits chimiques',
  },
  {
    slug: 'securite-sur-son-lieu-de-travail',
    titre: 'Sécurité sur le lieu de travail-Prévention et protection',
    descriptionCourte:
      "Prévenir les risques à domicile : identifier les dangers, sécuriser l'espace de travail, réagir en cas d'incident.",
    description:
      "Ce module vise à renforcer les compétences en prévention des risques professionnels dans le contexte spécifique du travail à domicile.\n\nIl apporte des outils concrets pour identifier les situations à risque, dialoguer avec le client et adopter des gestes professionnels sécurisés.",
    objectifs: [
      'Repérer les dangers avant de commencer une tâche.',
      'Utiliser les produits en sécurité (pictogrammes, stockage, protection).',
      'Prévenir les TMS via le bon usage du matériel et des postures.',
      'Réagir face à un incident et signaler correctement.',
      'Communiquer de manière professionnelle autour des risques.',
    ],
    modalitesPédagogie:
      'Approche participative : analyse de cas, démonstrations pratiques, mises en situation (cuisine, salle de bain, escaliers).',
    evaluationSuivi:
      'Quiz visuel, mises en situation observées, auto-évaluation avant/après, attestation de participation.',
    supportsLogistiques:
      'Supports imagés, pictogrammes, matériel réel (produits, gants, serpillières, aspirateur), salle équipée.',
    publicVise: 'Personnel assimilé, Aide-ménagères',
    approbation: [
      { region: 'Wallonie', certificate: 'En attente', date: '' },
      { region: 'Bruxelles', certificate: 'E1730/B', date: '29/01/2026' },
    ],
    duree: '4 heures / Groupe',
    category: 'techniques-prevention',
    imageSrc: '/assets/services/perfectionnement/trello.jpg',
    imageAlt: 'Sécurité sur son lieu de travail',
  },
  {
    slug: 'techniques-de-repassage',
    titre: 'Techniques de repassage',
    isPlaceholder: true,
    descriptionCourte: 'Gestes, organisation et astuces pour repasser efficacement et limiter la fatigue.',
    description:
      'Contenu à venir. Cette page détaillera les techniques de repassage, l’organisation du poste, les gestes ergonomiques et les bonnes pratiques selon les textiles.',
    objectifs: [
      'Organiser son poste de repassage et régler le matériel.',
      'Appliquer des gestes efficaces et économes en effort.',
      'Adapter les techniques selon les textiles et les vêtements.',
    ],
    modalitesPédagogie: 'Contenu à venir.',
    evaluationSuivi: 'Contenu à venir.',
    supportsLogistiques: 'Contenu à venir.',
    publicVise: 'Aide-ménagères',
    approbation: [],
    duree: '4 heures / Groupe',
    category: 'techniques-prevention',
    imageSrc: '/assets/services/perfectionnement/outlook.jpg',
    imageAlt: 'Techniques de repassage',
  },

  // ——— Bien-être et savoir faire ———
  {
    slug: 'communication-professionnelle',
    titre: 'Communication professionnelle',
    descriptionCourte:
      "S'exprimer avec clarté, gérer les tensions, poser des limites et renforcer l'écoute active au quotidien.",
    description:
      "Ce module vise à renforcer les compétences de communication interpersonnelle des aides-ménagères, tant avec les clients qu'avec les collègues ou la hiérarchie.\n\nIl s'appuie sur des situations concrètes : demandes difficiles, incompréhensions, critiques, gestion des limites.",
    objectifs: [
      'Comprendre les dimensions de la communication (verbal, paraverbal, non verbal).',
      'Utiliser des techniques d’expression assertive (message en « je », méthode DESC).',
      'Désamorcer un conflit naissant et réagir face à une critique.',
      'Pratiquer l’écoute active (reformulation, clarification).',
    ],
    modalitesPédagogie:
      'Jeux de rôle réalistes, activités ludiques, travail en duo/trio. Cadre bienveillant et vocabulaire simple.',
    evaluationSuivi: 'Auto-évaluation début/fin, bilan individuel oral (ce que je vais essayer).',
    supportsLogistiques:
      'Fiches illustrées (DESC, écoute active), scénarios imprimés, salle modulable.',
    publicVise: 'Personnel assimilé, Aide-ménagères',
    approbation: [
      { region: 'Wallonie', certificate: 'E10403', date: '12/11/2025' },
      { region: 'Bruxelles', certificate: 'E1693/B', date: '27/07/2025' },
    ],
    duree: '4 heures / Groupe',
    category: 'bien-etre-savoir-faire',
    imageSrc: '/assets/services/perfectionnement/office.jpg',
    imageAlt: 'Communication professionnelle',
  },
  {
    slug: 'motivation-et-gestion-du-stress',
    titre: 'Motivation et gestion de stress',
    descriptionCourte:
      'Comprendre ses sources de stress et pratiquer des techniques simples (respiration, ancrage, visualisation) au quotidien.',
    description:
      'Ce module accompagne dans la compréhension et la gestion du stress professionnel, ainsi que dans le renforcement de la motivation.\n\nÀ partir de situations concrètes vécues sur le terrain, la formation propose des outils simples et accessibles.',
    objectifs: [
      'Identifier les sources de stress et leurs effets.',
      'Mettre en pratique des techniques simples (respiration, relaxation, ancrage, visualisation).',
      'Renforcer la motivation et la valorisation de soi au quotidien.',
      'Définir une action concrète à mettre en place après la formation.',
    ],
    modalitesPédagogie:
      'Participative, bienveillante, adaptée au niveau de langue. Exercices guidés et échanges.',
    evaluationSuivi: 'Évaluation à chaud en fin de séance (engagement personnel, fiche simple).',
    supportsLogistiques: 'Fiches synthétiques (respiration, relaxation, phases du stress).',
    publicVise: 'Personnel assimilé, Aide-ménagères',
    approbation: [
      { region: 'Wallonie', certificate: 'E10407', date: '12/11/2025' },
      { region: 'Bruxelles', certificate: 'E1695/B', date: '03/09/2025' },
    ],
    duree: '4 heures / Groupe',
    category: 'bien-etre-savoir-faire',
    imageSrc: '/assets/services/perfectionnement/ai-work.jpg',
    imageAlt: 'Motivation et gestion de stress',
  },
  {
    slug: 'organisation-du-travail',
    titre: 'Organisation du travail',
    descriptionCourte: 'Méthodes concrètes pour planifier, prioriser et gagner du temps sans perdre en qualité.',
    description:
      'Ce module fournit des outils simples, concrets et immédiatement applicables pour mieux organiser le travail au quotidien.\n\nIl permet d’améliorer la gestion du temps, de structurer les tâches, d’anticiper les imprévus et de planifier efficacement les prestations chez les clients.',
    objectifs: [
      "Comprendre les principes de l'organisation et leurs bénéfices.",
      'Construire une routine logique et prioriser.',
      'Appliquer des méthodes d’organisation (zone, boucle).',
      'Gérer les imprévus et revoir les priorités avec le client.',
      'Utiliser des outils simples (planning, carnet, to-do, appli).',
    ],
    modalitesPédagogie:
      "Participative, centrée sur l'expérience : exercices, mises en situation, supports visuels.",
    evaluationSuivi: 'Exercices pratiques et auto-évaluation (engagement « Demain, je teste… »).',
    supportsLogistiques: 'Fiches illustrées, carnet/planning, supports visuels.',
    publicVise: 'Personnel assimilé, Aide-ménagères',
    approbation: [
      { region: 'Wallonie', certificate: 'E10404', date: '12/11/2025' },
      { region: 'Bruxelles', certificate: 'E1698/B', date: '03/09/2025' },
    ],
    duree: '4 heures / Groupe',
    category: 'bien-etre-savoir-faire',
    imageSrc: '/assets/services/perfectionnement/trello.jpg',
    imageAlt: 'Organisation du travail',
  },
  {
    slug: 'assertivite-poser-ses-limites',
    titre: 'L’assertivité, poser ses limites',
    isPlaceholder: true,
    descriptionCourte:
      'Dire non avec respect, clarifier les attentes et préserver une relation professionnelle saine.',
    description:
      "Contenu à venir. Cette page présentera des outils d'assertivité pour poser des limites, gérer des demandes inadaptées et communiquer avec respect.",
    objectifs: [
      'Formuler un refus de manière respectueuse et claire.',
      'Clarifier une consigne et désamorcer une tension.',
      'Préserver ses limites sans conflit.',
    ],
    modalitesPédagogie: 'Contenu à venir.',
    evaluationSuivi: 'Contenu à venir.',
    supportsLogistiques: 'Contenu à venir.',
    publicVise: 'Aide-ménagères',
    approbation: [
      { region: 'Wallonie', certificate: 'en attente', date: '' },
      { region: 'Bruxelles', certificate: 'en attente', date: '' },
    ],
    duree: '4 heures / Groupe',
    category: 'bien-etre-savoir-faire',
    imageSrc: '/assets/services/perfectionnement/outlook.jpg',
    imageAlt: 'Assertivité, poser ses limites',
  },
  {
    slug: 'deontologie-et-professionnalisme',
    titre: 'Déontologie et professionnalisme',
    isPlaceholder: true,
    descriptionCourte:
      'Cadre professionnel, discrétion, respect, posture et bonnes pratiques sur le terrain.',
    description:
      'Contenu à venir. Cette page détaillera les règles de base, la posture professionnelle et les principes de déontologie dans le cadre du travail à domicile.',
    objectifs: [
      'Comprendre les principes de base de la déontologie et de la confidentialité.',
      'Adopter une posture professionnelle (communication, ponctualité, limites).',
      'Identifier des situations sensibles et les bons réflexes.',
    ],
    modalitesPédagogie: 'Contenu à venir.',
    evaluationSuivi: 'Contenu à venir.',
    supportsLogistiques: 'Contenu à venir.',
    publicVise: 'Aide-ménagères',
    approbation: [
      { region: 'Wallonie', certificate: 'en attente', date: '' },
      { region: 'Bruxelles', certificate: 'en attente', date: '' },
    ],
    duree: '4 heures / Groupe',
    category: 'bien-etre-savoir-faire',
    imageSrc: '/assets/services/perfectionnement/office.jpg',
    imageAlt: 'Déontologie et professionnalisme',
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

