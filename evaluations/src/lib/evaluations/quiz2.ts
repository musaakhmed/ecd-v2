import type { EvaluationForm } from './types'

export const quiz2: EvaluationForm = {
  slug: 'quiz-2',
  title: 'Quizz Informatique (Niveau 2)',
  shortTitle: 'Quiz 2',
  description:
    'Windows, Word et Gmail : un quiz un peu plus avancé pour valider l’autonomie numérique.',
  kind: 'quiz',
  badgeLabel: 'Quiz',
  heroImage: '/assets/services/perfectionnement/outlook.jpg',
  heroImageAlt: 'Perfectionnement informatique',
  questions: [
    {
      id: 'q1',
      type: 'radio',
      prompt: 'Quel est le rôle du Gestionnaire des tâches dans Windows ?',
      options: [
        'Gérer les fichiers et dossiers de l’ordinateur.',
        'Afficher les applications en cours d’exécution et permettre de les fermer si nécessaire',
        'Changer les paramètres de l’affichage du bureau',
        'Installer de nouveaux logiciels sur l’ordinateur',
      ],
      correct: ['Afficher les applications en cours d’exécution et permettre de les fermer si nécessaire'],
    },
    {
      id: 'q2',
      type: 'radio',
      prompt: 'Quelle fonction principale est associée à la touche Windows sur un clavier ?',
      options: [
        'Ouvrir le menu Démarrer',
        'Lancer le navigateur Internet par défaut',
        'Afficher le bureau en un clic',
        'Accéder à la gestion des fichiers',
      ],
      correct: ['Ouvrir le menu Démarrer'],
    },
    {
      id: 'q3',
      type: 'radio',
      prompt: 'Comment pouvez-vous accéder aux paramètres de Windows ?',
      options: [
        'En cliquant avec le bouton droit sur le bureau et en sélectionnant « Paramètres »',
        'En appuyant sur la touche Windows et en sélectionnant « Paramètres » dans le menu Démarrer',
        'En ouvrant le Gestionnaire des tâches et en sélectionnant « Paramètres »',
        'En lançant l’Explorateur de fichiers et en cliquant sur « Paramètres »',
      ],
      correct: [
        'En appuyant sur la touche Windows et en sélectionnant « Paramètres » dans le menu Démarrer',
      ],
    },
    {
      id: 'q4',
      type: 'radio',
      prompt: 'Que fait la combinaison de touches Alt + Tab dans Windows ?',
      options: [
        'Elle ouvre le menu Démarrer',
        'Elle permet de basculer entre les applications ouvertes',
        'Elle ferme toutes les fenêtres ouvertes',
        'Elle lance le Gestionnaire des tâches',
      ],
      correct: ['Elle permet de basculer entre les applications ouvertes'],
    },
    {
      id: 'q5',
      type: 'radio',
      prompt: 'Que permet de faire cette fonctionnalité dans Windows ?',
      imageSrc: '/assets/evaluations/quiz-2/q5.png',
      imageAlt: 'Fonctionnalité Windows',
      options: [
        'Gérer les mises à jour du système d’exploitation',
        'Accéder et organiser les fichiers et dossiers sur l’ordinateur',
        'Configurer les paramètres de réseau et d’Internet',
        'Créer des graphiques et des présentations',
      ],
      correct: ['Accéder et organiser les fichiers et dossiers sur l’ordinateur'],
    },
    {
      id: 'q6',
      type: 'radio',
      prompt: 'Comment pouvez-vous insérer un en-tête dans un document Word ?',
      options: [
        'En allant dans l’onglet « Accueil » et en sélectionnant « Saut de page »',
        'En cliquant sur l’onglet « Insertion » et en choisissant « En-tête »',
        'En utilisant l’outil « Format de page »',
        'En copiant un en-tête d’un autre document',
      ],
      correct: ['En cliquant sur l’onglet « Insertion » et en choisissant « En-tête »'],
    },
    {
      id: 'q7',
      type: 'radio',
      prompt: 'Quelle est la principale utilité du volet de navigation dans Microsoft Word ?',
      options: [
        'Modifier la mise en forme du texte',
        'Permettre de rechercher et de naviguer facilement dans le document',
        'Gérer les mises à jour automatiques du document',
        'Afficher les statistiques du document, comme le nombre de mots',
      ],
      correct: ['Permettre de rechercher et de naviguer facilement dans le document'],
    },
    {
      id: 'q8',
      type: 'radio',
      prompt: 'Quelle fonctionnalité de Gmail vous permet de gérer vos e-mails en les organisant par catégories automatiques ?',
      options: ['Les étiquettes', 'Les filtres', 'Les onglets de boîte de réception', 'Les messages en attente'],
      correct: ['Les onglets de boîte de réception'],
    },
    {
      id: 'q9',
      type: 'radio',
      prompt: 'Que représente l’icône ci-dessous dans Gmail ?',
      imageSrc: '/assets/evaluations/quiz-2/q9.png',
      imageAlt: 'Icône Gmail',
      options: [
        'Archiver un e-mail',
        'Marquer un e-mail comme important',
        'Supprimer un e-mail',
        'Répondre à un e-mail',
      ],
      correct: ['Marquer un e-mail comme important'],
    },
    {
      id: 'q10',
      type: 'radio',
      prompt: 'Lorsque vous préparez un document professionnel dans Microsoft Word que vous prévoyez d’envoyer par e-mail via Gmail, quelle approche devrait être adoptée pour assurer à la fois une présentation soignée et un formatage compatible avec la majorité des systèmes d’exploitation ?',
      options: [
        'Utiliser un format de fichier propriétaire de Word (.docx) pour conserver toutes les fonctionnalités avancées de mise en forme, puis l’envoyer directement par e-mail',
        'Convertir le document en PDF avant de l’envoyer, ce qui garantit que le formatage reste intact quel que soit le système d’exploitation du destinataire',
        'Copier le contenu du document Word et le coller directement dans le corps de l’e-mail Gmail pour une lecture rapide',
        'Envoyer le document en tant que fichier Word en utilisant une connexion Internet lente, en supposant que le destinataire pourra le télécharger sans problème',
      ],
      correct: [
        'Convertir le document en PDF avant de l’envoyer, ce qui garantit que le formatage reste intact quel que soit le système d’exploitation du destinataire',
      ],
    },
  ],
}
