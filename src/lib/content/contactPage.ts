export type ContactInfoKind = 'email' | 'phone' | 'address' | 'companyNumber'

export type ContactInfoItem = {
  kind: ContactInfoKind
  title: string
  content: string
  link?: string | null
}

export const contactPageContent = {
  hero: {
    title: 'Contactez-nous',
    description:
      'Nous sommes là pour répondre à vos questions et vous accompagner dans vos projets.',
  },
  contactInfoTitle: 'Informations de contact',
  contactInfo: [
    {
      kind: 'email',
      title: 'Email',
      content: 'info@espaceforma.be',
      link: 'mailto:info@espaceforma.be',
    },
    {
      kind: 'phone',
      title: 'Téléphone',
      content: '+32 2 425 65 85',
      link: null,
    },
    {
      kind: 'address',
      title: 'Adresse',
      content: 'Rue du Gouvernement Provisoire 34A, 1000 Bruxelles, Belgique',
      link: 'https://maps.google.com/?q=Rue+du+Gouvernement+Provisoire+34A,+1000+Bruxelles',
    },
    {
      kind: 'companyNumber',
      title: "N° d'entreprise",
      content: '0628.538.422',
      link: null,
    },
  ] satisfies ContactInfoItem[],
  openingHours: {
    title: "Horaires d'ouverture",
    items: [
      { day: 'Lundi - Vendredi', hours: '8h00 - 16h00' },
      { day: 'Samedi et Dimanche', hours: 'Fermé' },
    ],
  },
  map: {
    title: 'Comment nous trouver',
    iframeSrc:
      'https://www.google.com/maps/embed?z13&pb=!1m18!1m12!1m3!1d157.4349295965867!2d4.366605689163625!3d50.85044584013054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c3c37c36537d0d%3A0xfc739c17df9b3856!2sEspace%20Cultures%20%26%20D%C3%A9veloppement%20asbl!5e0!3m2!1sen!2sbe!4v1768469153906!5m2!1sen!2sbe',
    addressLabel: 'Adresse :',
    address: 'Rue du Gouvernement Provisoire 34A, 1000 Bruxelles, Belgique',
    openInGoogleMapsLabel: 'Ouvrir dans Google Maps',
    openInGoogleMapsHref:
      'https://www.google.com/maps/place/Espace+Cultures+%26+D%C3%A9veloppement+asbl/',
  },
} as const
