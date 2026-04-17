import type React from 'react'

export type LegalMetadata = {
  title: string
  description: string
}

export type LegalSection = {
  id: string
  title: string
  content: React.ReactNode
}

export const mentionsLegalesContent = {
  metadata: {
    title: 'Mentions légales - Espace Culture et Développement',
    description: 'Mentions légales de Espace Cultures & Développement asbl',
  } satisfies LegalMetadata,
  pageTitle: 'Mentions légales',
  sections: [
    {
      id: 'informations-legales',
      title: '1. Informations légales',
      content: (
        <div className="space-y-3 text-gray-700">
          <p>
            <strong>Dénomination sociale :</strong> Espace Cultures &amp; Développement asbl
          </p>
          <p>
            <strong>Forme juridique :</strong> Association sans but lucratif (ASBL)
          </p>
          <p>
            <strong>Numéro d&apos;entreprise BCE :</strong> 0628.538.422
          </p>
          <p>
            <strong>Siège social :</strong> Rue du Gouvernement Provisoire 34A, 1000 Bruxelles, Belgique
          </p>
          <p>
            <strong>Téléphone :</strong>{' '}
            <a href="tel:+3224256585" className="text-primary-600 hover:underline">
              +32 2 425 65 85
            </a>
          </p>
          <p>
            <strong>Email :</strong>{' '}
            <a href="mailto:info@espacecultures.be" className="text-primary-600 hover:underline">
              info@espacecultures.be
            </a>
          </p>
        </div>
      ),
    },
    {
      id: 'directeur-publication',
      title: '2. Directeur de publication',
      content: (
        <p className="text-gray-700">
          Le directeur de publication est le représentant légal de l&apos;association Espace Cultures &amp;
          Développement asbl.
        </p>
      ),
    },
    {
      id: 'hebergement',
      title: '3. Hébergement',
      content: (
        <p className="text-gray-700">
          Les informations concernant l&apos;hébergement du site web sont disponibles sur demande auprès de
          l&apos;association.
        </p>
      ),
    },
    {
      id: 'propriete-intellectuelle',
      title: '4. Propriété intellectuelle',
      content: (
        <>
          <p className="text-gray-700">
            L&apos;ensemble de ce site relève de la législation belge et internationale sur le droit
            d&apos;auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y
            compris pour les documents téléchargeables et les représentations iconographiques et
            photographiques.
          </p>
          <p className="text-gray-700">
            La reproduction de tout ou partie de ce site sur un support électronique ou autre est
            formellement interdite sauf autorisation expresse du directeur de publication.
          </p>
        </>
      ),
    },
    {
      id: 'protection-donnees',
      title: '5. Protection des données',
      content: (
        <>
          <p className="text-gray-700">
            Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez d&apos;un
            droit d&apos;accès, de rectification, de suppression et d&apos;opposition aux données personnelles
            vous concernant. Pour exercer ce droit, veuillez nous contacter à l&apos;adresse suivante :{' '}
            <a href="mailto:info@espacecultures.be" className="text-primary-600 hover:underline">
              info@espacecultures.be
            </a>
          </p>
          <p className="text-gray-700">
            Pour plus d&apos;informations, consultez notre{' '}
            <a href="/politique-de-confidentialite" className="text-primary-600 hover:underline">
              Politique de confidentialité
            </a>
            .
          </p>
        </>
      ),
    },
    {
      id: 'responsabilite',
      title: '6. Responsabilité',
      content: (
        <>
          <p className="text-gray-700">
            Espace Cultures &amp; Développement asbl s&apos;efforce d&apos;assurer l&apos;exactitude et la mise à
            jour des informations diffusées sur ce site, dont elle se réserve le droit de corriger, à
            tout moment et sans préavis, le contenu.
          </p>
          <p className="text-gray-700">
            Toutefois, Espace Cultures &amp; Développement asbl ne peut garantir l&apos;exactitude, la
            précision ou l&apos;exhaustivité des informations mises à disposition sur ce site. En
            conséquence, l&apos;association décline toute responsabilité pour tout dommage résultant
            d&apos;une intrusion d&apos;un tiers ayant entraîné une modification des informations mises à
            disposition sur le site.
          </p>
        </>
      ),
    },
    {
      id: 'liens-hypertextes',
      title: '7. Liens hypertextes',
      content: (
        <>
          <p className="text-gray-700">
            La mise en place d&apos;un lien hypertexte vers le site{' '}
            <a href="https://espacecultures.be" className="text-primary-600 hover:underline">
              espacecultures.be
            </a>{' '}
            nécessite une autorisation préalable écrite de la part d&apos;Espace Cultures &amp;
            Développement asbl.
          </p>
          <p className="text-gray-700">
            Espace Cultures &amp; Développement asbl ne saurait être tenue responsable du contenu et des
            ressources présentes sur les sites vers lesquels des liens hypertextes renvoient.
          </p>
        </>
      ),
    },
    {
      id: 'droit-applicable',
      title: '8. Droit applicable',
      content: (
        <p className="text-gray-700">
          Les présentes mentions légales sont régies par le droit belge. En cas de litige et à défaut
          d&apos;accord amiable, le litige sera porté devant les tribunaux belges conformément aux règles de
          compétence en vigueur.
        </p>
      ),
    },
    {
      id: 'contact',
      title: '9. Contact',
      content: (
        <>
          <p className="text-gray-700">
            Pour toute question concernant les présentes mentions légales, vous pouvez nous contacter :
          </p>
          <div className="mt-4 space-y-2 text-gray-700">
            <p>
              <strong>Par email :</strong>{' '}
              <a href="mailto:info@espacecultures.be" className="text-primary-600 hover:underline">
                info@espacecultures.be
              </a>
            </p>
            <p>
              <strong>Par téléphone :</strong>{' '}
              <a href="tel:+3224256585" className="text-primary-600 hover:underline">
                +32 2 425 65 85
              </a>
            </p>
            <p>
              <strong>Par courrier :</strong> Espace Cultures &amp; Développement asbl, Rue du Gouvernement
              Provisoire 34A, 1000 Bruxelles, Belgique
            </p>
          </div>
        </>
      ),
    },
  ] satisfies LegalSection[],
} as const

export const politiqueConfidentialiteContent = {
  metadata: {
    title: 'Politique de confidentialité - Espace Culture et Développement',
    description:
      'Politique de confidentialité et protection des données personnelles de Espace Cultures & Développement asbl',
  } satisfies LegalMetadata,
  pageTitle: 'Politique de confidentialité',
  sections: [
    {
      id: 'introduction',
      title: '1. Introduction',
      content: (
        <>
          <p className="text-gray-700">
            Espace Cultures &amp; Développement asbl (ci-après &quot;nous&quot;, &quot;notre&quot; ou
            &quot;l&apos;association&quot;) s&apos;engage à protéger la vie privée et les données personnelles
            de ses utilisateurs conformément au Règlement Général sur la Protection des Données (RGPD)
            et à la législation belge en vigueur.
          </p>
          <p className="text-gray-700">
            La présente politique de confidentialité explique comment nous collectons, utilisons,
            stockons et protégeons vos données personnelles lorsque vous utilisez notre site web ou nos
            services.
          </p>
        </>
      ),
    },
    {
      id: 'responsable',
      title: '2. Responsable du traitement',
      content: (
        <div className="space-y-3 text-gray-700">
          <p>
            <strong>Responsable du traitement :</strong> Espace Cultures &amp; Développement asbl
          </p>
          <p>
            <strong>Numéro d&apos;entreprise BCE :</strong> 0628.538.422
          </p>
          <p>
            <strong>Adresse :</strong> Rue du Gouvernement Provisoire 34A, 1000 Bruxelles, Belgique
          </p>
          <p>
            <strong>Email :</strong>{' '}
            <a href="mailto:info@espacecultures.be" className="text-primary-600 hover:underline">
              info@espacecultures.be
            </a>
          </p>
          <p>
            <strong>Téléphone :</strong>{' '}
            <a href="tel:+3224256585" className="text-primary-600 hover:underline">
              +32 2 425 65 85
            </a>
          </p>
        </div>
      ),
    },
    {
      id: 'donnees-collectees',
      title: '3. Données personnelles collectées',
      content: (
        <>
          <p className="text-gray-700 mb-3">Nous collectons les données personnelles suivantes :</p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>
              <strong>Données d&apos;identification :</strong> nom, prénom, adresse email, numéro de
              téléphone
            </li>
            <li>
              <strong>Données de navigation :</strong> adresse IP, type de navigateur, pages visitées,
              durée de visite (via cookies et technologies similaires)
            </li>
            <li>
              <strong>Données de contact :</strong> informations fournies lors de l&apos;utilisation de
              notre formulaire de contact
            </li>
            <li>
              <strong>Données relatives aux services :</strong> informations nécessaires à la fourniture
              de nos services (inscriptions, participations aux activités, etc.)
            </li>
          </ul>
        </>
      ),
    },
    {
      id: 'finalites',
      title: '4. Finalités du traitement',
      content: (
        <>
          <p className="text-gray-700 mb-3">
            Nous utilisons vos données personnelles pour les finalités suivantes :
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Gérer et répondre à vos demandes de contact</li>
            <li>Fournir nos services et activités</li>
            <li>Améliorer notre site web et nos services</li>
            <li>Respecter nos obligations légales et réglementaires</li>
            <li>Gérer les inscriptions à nos activités et formations</li>
            <li>Vous informer de nos actualités (avec votre consentement)</li>
          </ul>
        </>
      ),
    },
    {
      id: 'base-legale',
      title: '5. Base légale du traitement',
      content: (
        <>
          <p className="text-gray-700 mb-3">Le traitement de vos données personnelles est basé sur :</p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>
              <strong>Votre consentement :</strong> pour l&apos;envoi de newsletters et communications
              marketing
            </li>
            <li>
              <strong>L&apos;exécution d&apos;un contrat :</strong> pour la fourniture de nos services
            </li>
            <li>
              <strong>L&apos;intérêt légitime :</strong> pour l&apos;amélioration de nos services et la
              sécurité de notre site
            </li>
            <li>
              <strong>L&apos;obligation légale :</strong> pour respecter nos obligations comptables et
              fiscales
            </li>
          </ul>
        </>
      ),
    },
    {
      id: 'conservation',
      title: '6. Conservation des données',
      content: (
        <>
          <p className="text-gray-700">
            Nous conservons vos données personnelles uniquement pendant la durée nécessaire aux
            finalités pour lesquelles elles ont été collectées :
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 mt-3">
            <li>
              <strong>Données de contact :</strong> 3 ans à compter du dernier contact
            </li>
            <li>
              <strong>Données relatives aux services :</strong> durée de la relation contractuelle + 10
              ans (obligations comptables)
            </li>
            <li>
              <strong>Données de navigation :</strong> 13 mois maximum
            </li>
          </ul>
        </>
      ),
    },
    {
      id: 'partage',
      title: '7. Partage des données',
      content: (
        <>
          <p className="text-gray-700">
            Nous ne vendons, ne louons ni ne partageons vos données personnelles avec des tiers, sauf
            dans les cas suivants :
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 mt-3">
            <li>
              <strong>Prestataires de services :</strong> nous pouvons faire appel à des prestataires
              (hébergement, outils d&apos;analyse) qui agissent en notre nom et sont soumis à des
              obligations de confidentialité
            </li>
            <li>
              <strong>Obligations légales :</strong> nous pouvons être amenés à divulguer vos données si
              la loi l&apos;exige
            </li>
            <li>
              <strong>Avec votre consentement :</strong> dans tous les autres cas, nous obtiendrons
              votre consentement explicite
            </li>
          </ul>
        </>
      ),
    },
    {
      id: 'droits',
      title: '8. Vos droits',
      content: (
        <>
          <p className="text-gray-700 mb-3">
            Conformément au RGPD, vous disposez des droits suivants concernant vos données personnelles
            :
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>
              <strong>Droit d&apos;accès :</strong> vous pouvez obtenir une copie de vos données personnelles
            </li>
            <li>
              <strong>Droit de rectification :</strong> vous pouvez corriger vos données inexactes ou
              incomplètes
            </li>
            <li>
              <strong>Droit à l&apos;effacement :</strong> vous pouvez demander la suppression de vos données
              dans certains cas
            </li>
            <li>
              <strong>Droit à la limitation :</strong> vous pouvez demander la limitation du traitement
              de vos données
            </li>
            <li>
              <strong>Droit à la portabilité :</strong> vous pouvez recevoir vos données dans un format
              structuré
            </li>
            <li>
              <strong>Droit d&apos;opposition :</strong> vous pouvez vous opposer au traitement de vos
              données pour des motifs légitimes
            </li>
            <li>
              <strong>Droit de retirer votre consentement :</strong> vous pouvez retirer votre consentement
              à tout moment
            </li>
          </ul>
          <p className="text-gray-700 mt-4">
            Pour exercer ces droits, veuillez nous contacter à l&apos;adresse suivante :{' '}
            <a href="mailto:info@espacecultures.be" className="text-primary-600 hover:underline">
              info@espacecultures.be
            </a>
          </p>
          <p className="text-gray-700">
            Vous avez également le droit d&apos;introduire une réclamation auprès de l&apos;Autorité de
            protection des données (APD) si vous estimez que le traitement de vos données personnelles
            constitue une violation du RGPD.
          </p>
          <p className="text-gray-700">
            <strong>Autorité de protection des données :</strong>
            <br />
            Rue de la Presse 35, 1000 Bruxelles
            <br />
            Email :{' '}
            <a href="mailto:contact@apd-gba.be" className="text-primary-600 hover:underline">
              contact@apd-gba.be
            </a>
            <br />
            Site web :{' '}
            <a
              href="https://www.autoriteprotectiondonnees.be"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-600 hover:underline"
            >
              www.autoriteprotectiondonnees.be
            </a>
          </p>
        </>
      ),
    },
    {
      id: 'cookies',
      title: '9. Cookies',
      content: (
        <>
          <p className="text-gray-700">
            Notre site web utilise des cookies pour améliorer votre expérience de navigation. Les cookies
            sont de petits fichiers texte stockés sur votre appareil.
          </p>
          <p className="text-gray-700">
            Vous pouvez configurer votre navigateur pour refuser les cookies, mais cela peut affecter
            certaines fonctionnalités du site.
          </p>
        </>
      ),
    },
    {
      id: 'securite',
      title: '10. Sécurité',
      content: (
        <p className="text-gray-700">
          Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos
          données personnelles contre tout accès non autorisé, perte, destruction ou altération.
        </p>
      ),
    },
    {
      id: 'modifications',
      title: '11. Modifications',
      content: (
        <>
          <p className="text-gray-700">
            Nous nous réservons le droit de modifier la présente politique de confidentialité à tout
            moment. Les modifications seront publiées sur cette page avec une indication de la date de
            dernière mise à jour.
          </p>
          <p className="text-gray-700">
            <strong>Dernière mise à jour :</strong>{' '}
            {new Date().toLocaleDateString('fr-BE', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </>
      ),
    },
    {
      id: 'contact',
      title: '12. Contact',
      content: (
        <>
          <p className="text-gray-700">
            Pour toute question concernant cette politique de confidentialité ou le traitement de vos
            données personnelles, vous pouvez nous contacter :
          </p>
          <div className="mt-4 space-y-2 text-gray-700">
            <p>
              <strong>Par email :</strong>{' '}
              <a href="mailto:info@espacecultures.be" className="text-primary-600 hover:underline">
                info@espacecultures.be
              </a>
            </p>
            <p>
              <strong>Par téléphone :</strong>{' '}
              <a href="tel:+3224256585" className="text-primary-600 hover:underline">
                +32 2 425 65 85
              </a>
            </p>
            <p>
              <strong>Par courrier :</strong> Espace Cultures &amp; Développement asbl, Rue du Gouvernement
              Provisoire 34A, 1000 Bruxelles, Belgique
            </p>
          </div>
        </>
      ),
    },
  ] satisfies LegalSection[],
} as const

export const politiqueCookiesContent = {
  metadata: {
    title: 'Politique de cookies - Espace Forma',
    description:
      'Politique de cookies et informations sur l’utilisation des cookies et technologies similaires sur espaceforma.be',
  } satisfies LegalMetadata,
  pageTitle: 'Politique de cookies',
  sections: [
    {
      id: 'introduction',
      title: '1. Introduction',
      content: (
        <>
          <p className="text-gray-700">
            La présente politique de cookies explique comment Espace Forma asbl (ci-après « nous »)
            utilise des cookies et des technologies similaires lorsque vous consultez notre site web.
          </p>
          <p className="text-gray-700">
            Vous pouvez à tout moment accepter, refuser ou modifier vos préférences concernant les
            cookies non essentiels via l’outil de gestion des cookies (si disponible) ou via les
            paramètres de votre navigateur.
          </p>
        </>
      ),
    },
    {
      id: 'definition',
      title: '2. Qu’est-ce qu’un cookie ?',
      content: (
        <>
          <p className="text-gray-700">
            Un cookie est un petit fichier texte stocké sur votre appareil (ordinateur, tablette,
            smartphone) lors de la consultation d’un site web. Il permet notamment de mémoriser des
            informations sur votre navigation.
          </p>
          <p className="text-gray-700">
            D’autres technologies similaires (par ex. pixels, balises) peuvent être utilisées à des
            fins comparables.
          </p>
        </>
      ),
    },
    {
      id: 'types',
      title: '3. Types de cookies que nous utilisons',
      content: (
        <>
          <p className="text-gray-700 mb-3">Nous pouvons utiliser les catégories suivantes :</p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>
              <strong>Cookies strictement nécessaires :</strong> indispensables au fonctionnement du
              site et à la sécurité.
            </li>
            <li>
              <strong>Cookies de mesure d’audience (Analytics) :</strong> utilisés pour analyser la
              fréquentation et améliorer le site (Google Analytics).
            </li>
          </ul>
        </>
      ),
    },
    {
      id: 'google-analytics',
      title: '4. Google Analytics',
      content: (
        <>
          <p className="text-gray-700">
            Nous utilisons Google Analytics (service fourni par Google) afin de mesurer l’audience de
            notre site (pages consultées, durée de visite, interactions, etc.) et d’améliorer nos
            contenus.
          </p>
          <p className="text-gray-700">
            Les informations collectées peuvent inclure des identifiants en ligne et des données de
            navigation. Google agit en tant que sous-traitant pour fournir le service d’analyse.
          </p>
          <p className="text-gray-700">
            Pour en savoir plus, consultez la documentation et la politique de confidentialité de
            Google :
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 mt-3">
            <li>
              <a
                className="text-primary-600 hover:underline"
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
              >
                Politique de confidentialité de Google
              </a>
            </li>
            <li>
              <a
                className="text-primary-600 hover:underline"
                href="https://support.google.com/analytics/answer/6004245"
                target="_blank"
                rel="noopener noreferrer"
              >
                Cookies Google Analytics
              </a>
            </li>
          </ul>
        </>
      ),
    },
    {
      id: 'google-maps',
      title: '5. Google Maps',
      content: (
        <>
          <p className="text-gray-700">
            La page Contact peut intégrer une carte Google Maps. Afin de limiter le chargement de
            contenus tiers, la carte n’est affichée qu’après votre action (« Activer la carte »).
          </p>
          <p className="text-gray-700">
            Une fois la carte activée, des requêtes vers les serveurs de Google peuvent être
            effectuées et des cookies/technologies similaires peuvent être utilisés par Google.
          </p>
        </>
      ),
    },
    {
      id: 'gestion',
      title: '6. Gérer vos préférences',
      content: (
        <>
          <p className="text-gray-700">
            Vous pouvez gérer ou supprimer les cookies dans les paramètres de votre navigateur. La
            procédure varie selon le navigateur.
          </p>
          <p className="text-gray-700">
            Le refus de certains cookies peut affecter votre expérience (par exemple, l’affichage de
            la carte).
          </p>
        </>
      ),
    },
    {
      id: 'mise-a-jour',
      title: '7. Mise à jour de la politique',
      content: (
        <>
          <p className="text-gray-700">
            Nous pouvons mettre à jour la présente politique de cookies afin de refléter les
            évolutions de notre site ou des exigences légales.
          </p>
          <p className="text-gray-700">
            <strong>Dernière mise à jour :</strong>{' '}
            {new Date().toLocaleDateString('fr-BE', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </>
      ),
    },
    {
      id: 'contact',
      title: '8. Contact',
      content: (
        <p className="text-gray-700">
          Pour toute question concernant cette politique de cookies, vous pouvez nous contacter à{' '}
          <a href="mailto:info@espaceforma.be" className="text-primary-600 hover:underline">
            info@espaceforma.be
          </a>
          .
        </p>
      ),
    },
  ] satisfies LegalSection[],
} as const

