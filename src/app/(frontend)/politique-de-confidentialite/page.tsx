import React from 'react'

export const metadata = {
  title: 'Politique de confidentialité - Espace Culture et Développement',
  description: 'Politique de confidentialité et protection des données personnelles de Espace Cultures & Développement asbl',
}

const Page = () => {
  return (
    <section className="min-h-[50vh] py-12">
      <div className="container mx-auto px-6 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8 text-primary-600">Politique de confidentialité</h1>

        <div className="prose prose-lg max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-primary-700">1. Introduction</h2>
            <p className="text-gray-700">
              Espace Cultures & Développement asbl (ci-après &quot;nous&quot;, &quot;notre&quot; ou
              &quot;l&apos;association&quot;) s&apos;engage à protéger la vie privée et les données
              personnelles de ses utilisateurs conformément au Règlement Général sur la Protection des
              Données (RGPD) et à la législation belge en vigueur.
            </p>
            <p className="text-gray-700">
              La présente politique de confidentialité explique comment nous collectons, utilisons,
              stockons et protégeons vos données personnelles lorsque vous utilisez notre site web ou
              nos services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-primary-700">2. Responsable du traitement</h2>
            <div className="space-y-3 text-gray-700">
              <p>
                <strong>Responsable du traitement :</strong> Espace Cultures & Développement asbl
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
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-primary-700">
              3. Données personnelles collectées
            </h2>
            <p className="text-gray-700 mb-3">
              Nous collectons les données personnelles suivantes :
            </p>
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
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-primary-700">4. Finalités du traitement</h2>
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
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-primary-700">5. Base légale du traitement</h2>
            <p className="text-gray-700 mb-3">
              Le traitement de vos données personnelles est basé sur :
            </p>
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
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-primary-700">6. Conservation des données</h2>
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
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-primary-700">7. Partage des données</h2>
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
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-primary-700">8. Vos droits</h2>
            <p className="text-gray-700 mb-3">
              Conformément au RGPD, vous disposez des droits suivants concernant vos données
              personnelles :
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>
                <strong>Droit d&apos;accès :</strong> vous pouvez obtenir une copie de vos données
                personnelles
              </li>
              <li>
                <strong>Droit de rectification :</strong> vous pouvez corriger vos données inexactes ou
                incomplètes
              </li>
              <li>
                <strong>Droit à l&apos;effacement :</strong> vous pouvez demander la suppression de vos
                données dans certains cas
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
                <strong>Droit de retirer votre consentement :</strong> vous pouvez retirer votre
                consentement à tout moment
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
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-primary-700">9. Cookies</h2>
            <p className="text-gray-700">
              Notre site web utilise des cookies pour améliorer votre expérience de navigation. Les
              cookies sont de petits fichiers texte stockés sur votre appareil.
            </p>
            <p className="text-gray-700">
              Vous pouvez configurer votre navigateur pour refuser les cookies, mais cela peut affecter
              certaines fonctionnalités du site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-primary-700">10. Sécurité</h2>
            <p className="text-gray-700">
              Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour
              protéger vos données personnelles contre tout accès non autorisé, perte, destruction ou
              altération.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-primary-700">11. Modifications</h2>
            <p className="text-gray-700">
              Nous nous réservons le droit de modifier la présente politique de confidentialité à tout
              moment. Les modifications seront publiées sur cette page avec une indication de la date de
              dernière mise à jour.
            </p>
            <p className="text-gray-700">
              <strong>Dernière mise à jour :</strong> {new Date().toLocaleDateString('fr-BE', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-primary-700">12. Contact</h2>
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
                <strong>Par courrier :</strong> Espace Cultures & Développement asbl, Rue du Gouvernement
                Provisoire 34A, 1000 Bruxelles, Belgique
              </p>
            </div>
          </section>
        </div>
      </div>
    </section>
  )
}

export default Page

