'use client'
import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const data = [
  {
    title: "Découverte de l'Intelligence artificielle et ChatGPT",
    text: "L'intelligence artificielle est désormais présente dans tous les secteurs d'activité. Ce module vise à familiariser les usagers avec les technologies émergentes et les algorithmes performants pour fournir des réponses efficaces et personnalisées.",
    image: '/assets/programcards/ai.jpg',
  },
  {
    title: 'Internet, navigation et recherches en ligne',
    text: 'Choisir un navigateur web fiable, effectuer des recherches efficaces, visiter des sites sécurisés et personnaliser son navigateur. Le module offre aux utilisateurs novices des outils pour surfer en toute sécurité et protéger leurs données.',
    image: '/assets/programcards/navigatiion.jpg',
  },
  {
    title: 'Outils de signatures électroniques',
    text: "Gain de temps, moins de paperasserie et plus besoin d'imprimer puis de scanner. La signature électronique permet d'acquérir des outils numériques conventionnels ou certifiés, du simple paraphe sur PDF à la signature avec certificat eID.",
    image: '/assets/programcards/signature.jpg',
  },
  {
    title: 'Messageries électroniques',
    text: "L'usage des messageries électroniques est devenu indispensable dans le milieu professionnel et le quotidien. Ce module couvre la découverte de différents types de courriers électroniques comme Gmail, Outlook et Yahoo avec leurs fonctionnalités essentielles.",
    image: '/assets/programcards/email.jpg',
  },
  {
    title: 'Identité numérique, eID, itsme et démarches administratives',
    text: "Commander des documents administratifs, effectuer des paiements et s'identifier sur un portail numérique exigent une authentification numérique. Le module explore les comptes Itsme, le lecteur eID et les démarches sur Myminfin, My E-Box et IrisBox.",
    image: '/assets/programcards/eid.avif',
  },
  {
    title: 'Vidéoconférence: Zoom et Teams',
    text: "Microsoft Teams et Zoom sont les outils de communication en temps réel les plus populaires. Le module enseigne à partager des espaces d'échanges professionnels, rejoindre une réunion, créer et programmer des réunions et partager l'écran.",
    image: '/assets/programcards/videocall.jpg',
  },
]

const Programs = () => {
  const targetRef = useRef<HTMLDivElement | null>(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
  })

  const x = useTransform(scrollYProgress, [0, 1], ['25%', '-25%'])

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-transparent">
      <div className="h-screen flex items-center justify-center bg-blue-950 gap-6 sticky top-0 overflow-hidden">
        <motion.div
          className="flex items-center gap-6 justify-center "
          style={{
            x,
          }}
          transition={{ type: 'spring', stiffness: 100, damping: 30 }}
        >
          {data.map((item, idx) => (
            <div
              key={idx}
              style={{
                backgroundImage: 'url(' + `${item.image}` + ')',
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
              }}
              className="p-6 py-8 justify-between flex flex-col items-center group bg-secondary-800 bg-blend-overlay hover:scale-105 shadow-2xl gap-8 h-128 w-80  rounded-lg overflow-hidden shrink-0 transition-all duration-200 ease-in-out"
            >
              <h3 className="text-3xl font-semibold  text-primary-100">{item.title}</h3>
              <span className=" text-primary-100 text-lg font-semibold">{item.text}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Programs
