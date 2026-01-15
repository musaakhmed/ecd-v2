import React from 'react'

export const metadata = {
  title: 'Mentions légales - Espace Culture et Développement',
  description: 'Mentions légales de Espace Cultures & Développement asbl',
}

const Page = () => {
  return (
    <section className="min-h-[50vh] py-12">
      <div className="container mx-auto px-6 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8 text-primary-600">Mentions légales</h1>

        <div className="prose prose-lg max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-primary-700">1. Informations légales</h2>
            <div className="space-y-3 text-gray-700">
              <p>
                <strong>Dénomination sociale :</strong> Espace Cultures & Développement asbl
              </p>
              <p>
                <strong>Forme juridique :</strong> Association sans but lucratif (ASBL)
              </p>
              <p>
                <strong>Numéro d&apos;entreprise BCE :</strong> 0628.538.422
              </p>
              <p>
                <strong>Siège social :</strong> Rue du Gouvernement Provisoire 34A, 1000 Bruxelles,
                Belgique
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
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-primary-700">2. Directeur de publication</h2>
            <p className="text-gray-700">
              Le directeur de publication est le représentant légal de l&apos;association Espace Cultures
              & Développement asbl.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-primary-700">3. Hébergement</h2>
            <p className="text-gray-700">
              Les informations concernant l&apos;hébergement du site web sont disponibles sur demande
              auprès de l&apos;association.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-primary-700">4. Propriété intellectuelle</h2>
            <p className="text-gray-700">
              L&apos;ensemble de ce site relève de la législation belge et internationale sur le droit
              d&apos;auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés,
              y compris pour les documents téléchargeables et les représentations iconographiques et
              photographiques.
            </p>
            <p className="text-gray-700">
              La reproduction de tout ou partie de ce site sur un support électronique ou autre est
              formellement interdite sauf autorisation expresse du directeur de publication.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-primary-700">5. Protection des données</h2>
            <p className="text-gray-700">
              Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez
              d&apos;un droit d&apos;accès, de rectification, de suppression et d&apos;opposition aux données
              personnelles vous concernant. Pour exercer ce droit, veuillez nous contacter à l&apos;adresse
              suivante :{' '}
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
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-primary-700">6. Responsabilité</h2>
            <p className="text-gray-700">
              Espace Cultures & Développement asbl s&apos;efforce d&apos;assurer l&apos;exactitude et la mise
              à jour des informations diffusées sur ce site, dont elle se réserve le droit de corriger, à
              tout moment et sans préavis, le contenu.
            </p>
            <p className="text-gray-700">
              Toutefois, Espace Cultures & Développement asbl ne peut garantir l&apos;exactitude, la
              précision ou l&apos;exhaustivité des informations mises à disposition sur ce site. En
              conséquence, l&apos;association décline toute responsabilité pour tout dommage résultant
              d&apos;une intrusion d&apos;un tiers ayant entraîné une modification des informations mises à
              disposition sur le site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-primary-700">7. Liens hypertextes</h2>
            <p className="text-gray-700">
              La mise en place d&apos;un lien hypertexte vers le site{' '}
              <a href="https://espacecultures.be" className="text-primary-600 hover:underline">
                espacecultures.be
              </a>{' '}
              nécessite une autorisation préalable écrite de la part d&apos;Espace Cultures &
              Développement asbl.
            </p>
            <p className="text-gray-700">
              Espace Cultures & Développement asbl ne saurait être tenue responsable du contenu et des
              ressources présentes sur les sites vers lesquels des liens hypertextes renvoient.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-primary-700">8. Droit applicable</h2>
            <p className="text-gray-700">
              Les présentes mentions légales sont régies par le droit belge. En cas de litige et à défaut
              d&apos;accord amiable, le litige sera porté devant les tribunaux belges conformément aux
              règles de compétence en vigueur.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-primary-700">9. Contact</h2>
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



