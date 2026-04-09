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
      '« Se connecter, s’identifier et agir en toute autonomie sur les plateformes en ligne »\n\nApprendre à se familiariser avec l’usage de l’identité numérique pour simplifier vos démarches administratives et quotidiennes. Ce module vous guide pas à pas pour utiliser l’application Itsme et le lecteur de carte eID, et naviguer facilement sur les principaux portails publics.\n\nCommander un document administratif, effectuer un paiement, s’identifier sur un site public ou signer électroniquement un document… toutes ces actions nécessitent aujourd’hui une authentification sécurisée via une clé numérique. \n\n Ce module vous permet de découvrir, comprendre et utiliser ces outils essentiels à travers différents portails administratifs, selon votre profil et vos besoins. Vous apprendrez à effectuer vos démarches en ligne en toute confiance, à protéger vos données personnelles et à gagner en autonomie numérique dans votre vie professionnelle et privée.',
    objectifs: [
      "Comprendre les outils d'identification numérique (eID, Itsme, Token, codes SMS/e-mail).",
      'Utiliser le lecteur de carte eID et résoudre les problèmes de connexion.',
      'Maîtriser l’application Itsme et se connecter à des portails publics.',
      'Réaliser des démarches administratives en ligne en toute autonomie. (ONVA, MyMinfin, MyPension, IRISbox, Mon Espace Wallonie)',
      'Adopter les bonnes pratiques de sécurité numérique (RGPD, phishing, mots de passe).',
    ],
    modalitesPédagogie:
      'La formation s’appuie sur une pédagogie différenciée mêlant théorie et pratique, avec une approche à la fois individuelle et collective. \n\n Un syllabus numérique et des tutoriels accessibles via QR Code sont remis à chaque participant. Une aide à distance est également proposée après la formation.\n',
    evaluationSuivi:
      'À la fin de chaque session, les participants complètent un questionnaire d’évaluation post-formation :\n' +
      'Les feedbacks recueillis permettent d’améliorer en continu le contenu, la méthode et l’animation.',
    supportsLogistiques:
      "Formations chez les partenaires ou dans les locaux d'EF. \n \n Matériel fourni : ordinateurs portables, tablettes, vidéoprojecteurs, Flybox, syllabus. Les participants peuvent apporter leur propre PC/smartphone/tablette.",
    publicVise: 'Aide-ménagères',
    approbation: [
      { region: 'Wallonie', certificate: 'E10240', date: '23/02/2024' },
      { region: 'Bruxelles', certificate: 'E1421/B', date: '03/03/2022' },
    ],
    duree: '4 heures / Groupe',
    category: 'outils-numeriques',
    imageSrc: '/assets/TS/courses/numerique/identite-numerique.jpg',
    imageAlt: 'Identité numérique',
  },
  {
    slug: 'messageries-electroniques',
    titre: 'Messageries électroniques',
    descriptionCourte:
      'Créer et organiser sa boîte mail, rédiger des emails clairs, gérer pièces jointes et se protéger des spams/phishing.',
    description:
      'La messagerie électronique est aujourd’hui incontournable, aussi bien dans la vie quotidienne que dans le cadre professionnel. La majorité des administrations et des entreprises privilégient désormais la communication par email ou via des applications de messagerie. Pourtant, de nombreux utilisateurs ne maîtrisent pas encore les fonctionnalités essentielles de ces outils.\n\nCe module a pour objectif de permettre aux participants de découvrir et d’utiliser efficacement les principales messageries (Gmail, Outlook). Il inclut aussi une initiation à l’usage de l’IA pour la rédaction, la correction, l’amélioration du style et la traduction des messages.',
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
      'Formation dans vos locaux, nos espaces ou en ateliers mobiles. Matériel fourni : ordinateurs portables, tablettes, vidéoprojecteurs, Flybox, syllabus. \n Les participants peuvent également apporter leur propre PC, smartphone ou tablette.',
    publicVise: 'Aide-ménagères',
    approbation: [
      { region: 'Wallonie', certificate: 'E10256', date: '15/04/2024' },
      { region: 'Bruxelles', certificate: 'E1420/B', date: '03/03/2022' },
    ],
    duree: '4 heures / Groupe',
    category: 'outils-numeriques',
    imageSrc: '/assets/TS/courses/numerique/messagerie-electronique.jpg',
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
      'À la fin de chaque session, les participants complètent un questionnaire d’évaluation post-formation.\n' +
      'Les feedbacks recueillis permettent d’améliorer en continu le contenu, la méthode et l’animation.',
    supportsLogistiques:
      "Formations chez les partenaires ou dans les locaux d'ECD. \n" +
      'Matériel fourni : ordinateurs portables, tablettes, vidéoprojecteurs, Flybox (connexion Internet), syllabus. ' +
      'Les participants peuvent également apporter leur propre PC, smartphone ou tablette.',
    publicVise: 'Aide-ménagères',
    approbation: [
      { region: 'Wallonie', certificate: 'E10257', date: '15/04/2024' },
      { region: 'Bruxelles', certificate: 'E1422/B', date: '03/03/2022' },
    ],
    duree: '4 heures / Groupe',
    category: 'outils-numeriques',
    imageSrc: '/assets/TS/courses/numerique/navigation-internet.webp',
    imageAlt: 'Internet et navigation',
  },
  {
    slug: 'decouverte-de-chatgpt',
    titre: 'Découverte de ChatGPT',
    descriptionCourte:
      'Découvrir ChatGPT : prompts, rédaction, reformulation, résumé, traduction et bonnes pratiques (limites, confidentialité).',
    description:
      'Poser des questions et obtenir des explications, Rédiger, Corriger, Reformuler, Résumer Traduire, Donner des idées voici autant de fonctionnalités de base que propose ChatGPT. Ce module propose une introduction pratique à l’utilisation de ChatGPT, un outil d’intelligence artificielle capable de générer du texte, d’expliquer, de reformuler, de traduire ou d’aider à produire des documents variés. \n\n' +
      'Accessible aussi bien aux débutants qu’aux utilisateurs intermédiaires, la formation vise à comprendre comment exploiter ChatGPT de manière efficace, responsable et sécurisée, dans un cadre personnel, administratif ou professionnel.\n' +
      'Les participants apprendront à formuler des requêtes claires (prompts), à identifier les usages pertinents, et à comprendre les limites ainsi que les bonnes pratiques de l’IA.',
    objectifs: [
      'Comprendre ce qu’est une IA conversationnelle et ses usages.',
      'Accéder à ChatGPT sur ordinateur ou smartphone et naviguer dans l’interface.',
      'Structurer une consigne (prompt) en fonction de son objectif.',
      'Rédiger/corriger/reformuler/traduire des messages et documents.',
      'Rechercher et résumer des informations en gardant un esprit critique.',
    ],
    modalitesPédagogie:
      'Pédagogie différenciée, théorie et pratique. Exercices guidés, démonstrations pas à pas. \n Un syllabus numérique et des tutoriels accessibles via QR Code sont remis à chaque participant. Une aide à distance est également proposée après la formation.',
    evaluationSuivi:
      'À la fin de chaque session, les participants complètent un questionnaire d’évaluation post-formation.\n' +
      'Les feedbacks recueillis permettent d’améliorer en continu le contenu, la méthode et l’animation.',
    supportsLogistiques:
      "Formations chez les partenaires ou dans les locaux d'ECD. \n\n Matériel fourni : ordinateurs portables, tablettes, vidéoprojecteurs, Flybox (connexion Internet), syllabus.\n" +
      'Les participants peuvent également apporter leur propre PC, smartphone ou tablette.',
    publicVise: 'Aide-ménagères',
    approbation: [{ region: 'Bruxelles', certificate: 'E1605/B', date: '17/05/2024' }],
    duree: '4 heures / Groupe',
    category: 'outils-numeriques',
    imageSrc: '/assets/TS/courses/numerique/chatgpt.webp',
    imageAlt: 'Découverte de ChatGPT',
  },
  {
    slug: 'word-excel-debutant',
    titre: 'Word et Excel – Niveau débutant',
    descriptionCourte:
      'Initiation à Word et Excel : premiers gestes sur ordinateur, documents simples et bases d’un tableau, par des exercices pratiques et progressifs.',
    description:
      'Cette formation d’initiation à Word et Excel a pour objectif d’accompagner les participantes dans la découverte des outils bureautiques de base, utiles tant dans la vie quotidienne que dans le cadre professionnel.\n\nAdaptée à un public débutant, elle permet d’acquérir les premières compétences numériques à travers des exercices pratiques, concrets et progressifs. Les participantes apprennent à utiliser un ordinateur, à manipuler la souris et le clavier, à créer des documents simples et à comprendre les bases de l’utilisation d’un tableau.',
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
      'Un questionnaire d’évaluation est remis à l’issue de la formation afin de recueillir l’avis des participantes. Les retours collectés alimentent une démarche d’amélioration continue des contenus et des méthodes pédagogiques.',
    supportsLogistiques:
      "Les formations peuvent être organisées soit chez les partenaires, soit dans les locaux d'Espace Cultures & Développement. Le matériel nécessaire est mis à disposition : ordinateurs portables, tablettes, vidéoprojecteur, Flybox et supports pédagogiques.",
    publicVise: 'Aide-ménagères',
    approbation: [{ region: 'Bruxelles', certificate: 'E1426/B', date: '07/03/2022' }],
    duree: '4 heures / Groupe',
    category: 'outils-numeriques',
    imageSrc: '/assets/TS/courses/numerique/word-excel.jpeg',
    imageAlt: 'Word et Excel – Niveau débutant',
  },

  // ——— Techniques et prévention ———
  {
    slug: 'techniques-de-nettoyage-securite',
    titre: 'Techniques de nettoyage et sécurité',
    descriptionCourte:
      'Gestes professionnels, matériel, choix des produits, pictogrammes de sécurité et prévention des accidents.',
    description:
      'Ce module initie les aides-ménagères aux techniques de nettoyage professionnelles, en leur permettant d’utiliser les produits et le matériel de manière efficace, sécurisée et adaptée aux surfaces.\n\nLa formation aborde l’entretien du matériel, la lecture des pictogrammes, l’échelle de pH et le cercle de Sinner (TACT). \n\n' +
      'Adaptée à un public peu scolarisé, elle utilise un langage clair, des exemples concrets, des démonstrations réalistes et des activités pratiques. L’objectif est de garantir un nettoyage efficace et sûr, tout en évitant les accidents et en renforçant les réflexes professionnels.',
    objectifsIntro: 'À l’issue du module, les participantes seront capables de :',
    objectifs: [
      'Comprendre les principes du nettoyage professionnel :',
      'Expliquer le cercle de Sinner et son impact sur l’efficacité du nettoyage.',
      'Identifier le rôle de chaque facteur : chimie, action mécanique, temps d’action, température.',
      'Utiliser correctement les produits :',
      'Comprendre l’échelle des pH et les trois grandes familles de produits (acides, neutres, alcalins).',
      'Choisir le produit adapté selon le type de saleté et la surface.',
      'Repérer les erreurs à éviter : mauvais dosage, mélange dangereux, mauvais usage des produits forts.',
      'Assurer la sécurité dans l’utilisation des produits :',
      'Lire et interpréter une étiquette, une fiche de sécurité, les pictogrammes et les labels.',
      'Appliquer les précautions indispensables pour éviter brûlures, allergies, irritations ou intoxications.',
      'Identifier les EPI nécessaires et les situations où ils doivent être utilisés.',
      'Utiliser et entretenir le matériel professionnel :',
      'Utiliser correctement microfibres, éponges, plumeaux, aspirateurs, raclettes, seaux, escabelles.',
      'Adopter les codes couleur et les bonnes pratiques d’hygiène.',
      'Entretenir le matériel pour éviter contamination, usure ou manque d’efficacité.',
      'Appliquer les bonnes postures et règles de sécurité :',
      'Plier les genoux, pas le dos.',
      'Éviter les torsions et les gestes brusques.',
      'Sécuriser l’espace de travail pour éviter chutes, glissades, faux mouvements.',
    ],
    modalitesPédagogie:
      'Approche pédagogique\n' +
      '• Langage visuel et accessible.\n' +
      '• Participation active, échanges d’expérience et démonstrations.\n' +
      '• Apprentissage par l’observation et la manipulation réelle.\n' +
      '• Adaptation aux besoins d’un public peu qualifié ou débutant.\n\n' +
      'Méthodes utilisées\n' +
      '• Présentations visuelles (pH, cercle de Sinner, pictogrammes).\n' +
      '• Exemples concrets : saletés, surfaces, produits.\n' +
      '• Jeux d’association (produit/saleté/surface).\n' +
      '• Ateliers pratiques : dilution, utilisation microfibre/aspirateur/raclette, lecture d’étiquette, simulations bon/mauvais usage.\n' +
      '• Études de cas et situations réalistes rencontrées chez les clients.\n' +
      '• Travail en petits groupes pour analyser et corriger les pratiques.\n\n' +
      'Matériel utilisé\n' +
      'Microfibres, gants, éponges, aspirateurs, seaux, produits pH variés, raclettes, plumeaux, supports visuels, pictogrammes, fiches techniques, EPI.',
    evaluationSuivi:
      'L’évaluation vise à mesurer la compréhension des notions clés et la capacité à appliquer les gestes professionnels en situation.\n\n' +
      'Outils d’évaluation\n' +
      '• Quiz visuel/oral sur les pictogrammes, les produits, les usages corrects/incorrects.\n' +
      '• Exercices pratiques évalués : dilution d’un produit, choix d’un produit en fonction d’une surface, utilisation du matériel.\n' +
      '• Observation directe lors des ateliers (posture, sécurité, rangement).\n' +
      '• Mini-jeu vrai/faux en fin de séance.\n' +
      '• Retour d’expérience + distribution d’un mémo visuel.\n\n' +
      'L’évaluation a pour but de valider les acquis et d’identifier les points d’attention pour la suite.',
    supportsLogistiques:
      'Supports remis aux participantes\n' +
      '• Fiches illustrées : cercle de Sinner, échelle de pH, familles de produits, pictogrammes de sécurité, bonnes pratiques de dilution, codes couleur microfibres.\n' +
      '• Schémas (surface/saleté/produit).\n' +
      '• Tableau « gestes sûrs / gestes dangereux ».\n' +
      '• Mémo visuel de fin de formation.\n\n' +
      'Matériel de démonstration\n' +
      '• Microfibres (couleurs différentes).\n' +
      '• Éponges (douces / grattantes).\n' +
      '• Plumeaux et têtes de loup.\n' +
      '• Aspirateur (embouts variés).\n' +
      '• Raclettes pour vitres.\n' +
      '• Seaux (eau propre et eau sale).\n' +
      '• Escabelle sécurisée.\n' +
      '• Produits à pH acide / neutre / alcalin.\n' +
      '• EPI : gants, lunettes, masque.',
    publicVise: 'Aide-ménagères',
    approbation: [
      { region: 'Wallonie', certificate: 'E10406', date: '12/11/2025' },
      { region: 'Bruxelles', certificate: 'E1697/B', date: '03/09/2025' },
    ],
    duree: '4 heures / Groupe',
    category: 'techniques-prevention',
    imageSrc: '/assets/TS/courses/technique-prevention/technique-nettoyage.jpg',
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
    publicVise: 'Aide-ménagères',
    approbation: [
      { region: 'Wallonie', certificate: 'E10405', date: '12/11/2025' },
      { region: 'Bruxelles', certificate: 'E1696/B', date: '03/09/2025' },
    ],
    duree: '4 heures / Groupe',
    category: 'techniques-prevention',
    imageSrc: '/assets/TS/courses/technique-prevention/ergonomie-tms.jpg',
    imageAlt: 'Ergonomie et prévention TMS',
  },
  {
    slug: 'produits-chimiques-securite',
    titre: 'Produits chimiques et sécurité',
    isPlaceholder: false,
    descriptionCourte:
      "Manipuler les produits d'entretien en sécurité : lecture d'étiquettes, pictogrammes et bonnes pratiques.",
    description:
      'Ce module vise à sensibiliser les participants à l’utilisation sécurisée des produits chimiques d’entretien utilisés au quotidien.',
    objectifs: [
      'Connaitre les produits chimiques, Identifier les produits d’entretien courants (Javel, détartrants, dégraissants…), différencier les produits acides et basiques, comprendre la notion de pH.',
      'Identifier les dangers, reconnaître les risques pour la santé (brûlures, intoxications, allergies), les situations à risque (mélange, mauvais dosage, mauvaise ventilation), les erreurs fréquentes à éviter. ',
      'Lire et comprendre les étiquettes, identifier les pictogrammes de danger.',
      'Utiliser les produits correctement, respecter les doses recommandées, choisir le bon produit selon la saleté (calcaire → acide, graisse → basique), réaliser une dilution correcte, Éviter les mélanges dangereux (ex : Javel + acide).',
      'Se protéger efficacement, utiliser les équipements de protection (gants, lunettes, masque), adopter les bons réflexes, travailler dans un environnement sécurisé.',
      'Prévenir les accidents, stocker les produits correctement, Éviter les erreurs de manipulation, réagir correctement en cas d’accident (contact, projection, inhalation).',
    ],
    modalitesPédagogie:
      'La pédagogie est active, concrète et centrée sur la réalité du terrain. Présentation de produits réels. Entraînement pratique, mise en confiance et répétition. Support via QR Code. Aide à distance possible après la formation.',
    evaluationSuivi:
      'Évaluations courtes en fin de séance, feedbacks et ajustements selon le niveau.\n' +
      'Vérification que les consignes de sécurités sont bien assimilées.',
    supportsLogistiques:
      'Produits chimiques, Équipements de protection (gants, lunettes, masques), \n' +
      '\n' +
      'Fiches illustrées (DESC, écoute active), salle modulable. Accès à un point d’eau.\n',
    publicVise: 'Aide-ménagères',
    approbation: [],
    duree: '4 heures / Groupe',
    category: 'techniques-prevention',
    imageSrc: '/assets/TS/courses/technique-prevention/produits-chimiques-et-securite.jpg',
    imageAlt: 'Produits chimiques',
  },
  {
    slug: 'securite-sur-son-lieu-de-travail',
    titre: 'Sécurité sur le lieu de travail-Prévention et protection',
    descriptionCourte:
      "Prévenir les risques à domicile : identifier les dangers, sécuriser l'espace de travail, réagir en cas d'incident.",
    description:
      'Ce module vise à renforcer les compétences en prévention des risques professionnels dans le contexte spécifique du travail à domicile.\n\nIl apporte des outils concrets pour identifier les situations à risque, dialoguer avec le client et adopter des gestes professionnels sécurisés.',
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
    imageSrc: '/assets/TS/courses/technique-prevention/securite-lieu-travail.jpg',
    imageAlt: 'Sécurité sur son lieu de travail',
  },
  {
    slug: 'techniques-de-repassage-professionnel',
    titre: 'Techniques de repassage professionnel',
    isPlaceholder: false,
    descriptionCourte:
      'Gestes, organisation et astuces pour repasser efficacement et limiter la fatigue.',
    description:
      'Ce module vise à développer les compétences techniques en repassage professionnel, afin d’améliorer la qualité du travail, la rapidité et la sécurité.\n' +
      '\n' +
      'La formation s’appuie sur une approche très pratique, basée sur la démonstration, la reproduction des gestes et la correction individuelle.\n' +
      '\n' +
      'Les participants travaillent directement avec du matériel réel (fers à repasser, différents textiles) et s’exercent sur des vêtements courants.',
    objectifs: [
      'Comprendre les bases du repassage, identifier les différents types de matériel (fer, centrale vapeur, table), lire les symboles textiles (température, vapeur), organiser son poste de travail (tri du linge, ordre de repassage). ',
      'Maîtriser les gestes professionnels, adopter une posture adaptée pour éviter les tensions.',
      'Adapter la technique aux vêtements, adapter leur méthode selon le textile.',
      'Améliorer la qualité et la rapidité, identifier et corriger les erreurs fréquentes, organiser son travail pour gagner du temps, contrôler la qualité avant de plier ou ranger le linge.',
      'Travailler en sécurité, prévenir les risques (brûlures, électricité), utiliser le matériel en toute sécurité, entretenir le fer ou la centrale vapeur (détartrage, nettoyage). ',
    ],
    modalitesPédagogie:
      'Ateliers pratiques, démonstrations et manipulations réelles. Langage clair et supports visuels adaptés. Apprentissage par le geste.',
    evaluationSuivi:
      'Évaluations courtes en fin de séance, feedbacks et ajustements selon le niveau.',
    supportsLogistiques:
      'Fers à repasser, Tables à repasser, Vêtements variés (t-shirts, pantalons, chemises). \n' +
      '\n' +
      'Fiches illustrées (DESC, écoute active), salle modulable.',
    publicVise: 'Aide-ménagères',
    approbation: [],
    duree: '4 heures / Groupe',
    category: 'techniques-prevention',
    imageSrc: '/assets/TS/courses/technique-prevention/technique-repassage.jpg',
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
    imageSrc: '/assets/TS/courses/savoir-faire/communication-professionnelle.jpg',
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
    imageSrc: '/assets/TS/courses/savoir-faire/motivation.jpg',
    imageAlt: 'Motivation et gestion de stress',
  },
  {
    slug: 'organisation-du-travail',
    titre: 'Organisation du travail',
    descriptionCourte:
      'Méthodes concrètes pour planifier, prioriser et gagner du temps sans perdre en qualité.',
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
    imageSrc: '/assets/TS/courses/savoir-faire/organisation-travail.webp',
    imageAlt: 'Organisation du travail',
  },
  {
    slug: 'assertivite-professionnelles',
    titre: 'Assertivité Professionnelle ',
    isPlaceholder: false,
    descriptionCourte:
      'Dire non avec respect, clarifier les attentes et préserver une relation professionnelle saine.',
    description:
      'Ce module vise à renforcer l’assertivité professionnelle, afin de permettre de se positionner clairement dans son travail, de poser des limites et de faire respecter son cadre d’intervention.',
    objectifs: [
      'Comprendre ses droits, poser ses limites, identifier son rôle professionnel et son cadre.',
      'Dire non de manière professionnelle, formuler des réponses simples, claires et respectueuses.',
      'Gérer les pressions et insistances et identifier les formes de pression exercées par certains clients.',
      'Renforcer la confiance et se respecter davantage.',
    ],
    modalitesPédagogie:
      'La pédagogie est active, concrète et centrée sur la réalité du terrain. Elle vise avant tout l’entraînement pratique, la mise en confiance et la répétition. Support via QR Code. Aide à distance possible après la formation.',
    evaluationSuivi:
      'Évaluations courtes en fin de séance, feedbacks et ajustements selon le niveau.',
    supportsLogistiques:
      'Fiches illustrées (DESC, écoute active), scénarios imprimés, salle modulable.',
    publicVise: 'Aide-ménagères',
    approbation: [
      { region: 'Wallonie', certificate: 'en attente', date: '' },
      { region: 'Bruxelles', certificate: 'en attente', date: '' },
    ],
    duree: '4 heures / Groupe',
    category: 'bien-etre-savoir-faire',
    imageSrc: '/assets/TS/courses/savoir-faire/assertivite.jpg',
    imageAlt: 'Assertivité, poser ses limites',
  },
  {
    slug: 'deontologie-professionnelle',
    titre: 'Déontologie professionnelle ',
    isPlaceholder: false,
    descriptionCourte:
      'Cadre professionnel, discrétion, respect, posture et bonnes pratiques sur le terrain.',
    description:
      'Ce module vise à renforcer les compétences déontologiques, le respect du client et de son domicile, la confidentialité, les limites professionnelles et la gestion des situations sensibles.',
    objectifs: [
      'Comprendre la déontologie, définir la déontologie professionnelle (règles, valeurs, cadre du métier).',
      'Respecter les règles du métier, appliquer les principes de confidentialité (secret professionnel), respecter le domicile et les biens du client, adopter une attitude respectueuse, sans jugement.',
      'Identifier et poser des limites, reconnaître les tâches autorisées et non autorisées, refuser une demande abusive ou dangereuse, maintenir une distance professionnelle adaptée.',
      'Gérer les situations délicates, réagir face à une demande inappropriée (ex : garder un enfant), gérer la familiarité ou les comportements déplacés, savoir quand et comment alerter la hiérarchie.',
      'Adopter une posture professionnelle, maintenir une bonne distance relationnelle, soigner son image (ponctualité, tenue, attitude), gérer ses émotions en situation de tension.',
    ],
    modalitesPédagogie:
      'La pédagogie est active, concrète et centrée sur la réalité du terrain. Elle vise avant tout l’entraînement pratique, la mise en confiance et la répétition. Support via QR Code. Aide à distance possible après la formation.',
    evaluationSuivi:
      'Évaluations courtes en fin de séance, feedbacks et ajustements selon le niveau.',
    supportsLogistiques:
      'Fiches illustrées (DESC, écoute active), scénarios imprimés, salle modulable.',
    publicVise: 'Aide-ménagères',
    approbation: [
      { region: 'Wallonie', certificate: 'en attente', date: '' },
      { region: 'Bruxelles', certificate: 'en attente', date: '' },
    ],
    duree: '4 heures / Groupe',
    category: 'bien-etre-savoir-faire',
    imageSrc: '/assets/TS/courses/savoir-faire/deontologie.jpg',
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
