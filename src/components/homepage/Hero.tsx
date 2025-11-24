'use client'

import { useCallback, useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

interface HeroProps {
  slides: Slide[]
}

const slides: Slide[] = [
  {
    image: '/assets/hero/devoirs.jpg',
    title: 'Mentorat personnalisé',
    description: 'Un accompagnement attentif pour révéler le potentiel de chaque élève.',
  },
  {
    image: '/assets/hero/titres-services.jpg',
    title: 'Formations inspirantes',
    description: 'Des ateliers vivants qui nourrissent la prise de parole et la confiance.',
  },
  {
    image: '/assets/hero/seniors-transition-numerique.jpg',
    title: 'Transition numérique inclusive',
    description: 'Initier les seniors aux outils digitaux avec patience et bienveillance.',
  },
  {
    image: '/assets/hero/robotics.jpg',
    title: 'Laboratoire créatif',
    description: "Explorer la robotique pour stimuler curiosité, logique et esprit d'équipe.",
  },
]

type Slide = {
  image: string
  title: string
  description: string
}

const textVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
}

const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [direction, setDirection] = useState<1 | -1>(1)

  const goToSlide = useCallback(
    (index: number) => {
      setDirection(index > activeIndex ? 1 : -1)
      setActiveIndex(index)
    },
    [activeIndex],
  )

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1)
      setActiveIndex((prev) => (prev + 1) % slides.length)
    }, 7000)

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="lg:absolute w-full overflow-hidden lg:top-0 relative bg-black text-white lg:h-screen h-[70vh] flex flex-col justify-between">
      <div className="relative aspect-[16/9] w-full sm:absolute sm:inset-0 sm:h-full sm:aspect-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={slides[activeIndex].image}
            className="absolute inset-0 origin-center"
            initial={{
              opacity: 0.4,
              clipPath: direction === 1 ? 'inset(0 0 0 100%)' : 'inset(0 100% 0 0)',
            }}
            animate={{
              opacity: 1,
              clipPath: 'inset(0 0 0 0)',
            }}
            exit={{
              opacity: 0.4,
              clipPath: direction === 1 ? 'inset(0 100% 0 0)' : 'inset(0 0 0 100%)',
            }}
            transition={{ duration: 1.1, ease: [0.76, 0, 0.24, 1] }}
          >
            <motion.div
              className="absolute inset-0"
              initial={{ scale: 1.05 }}
              animate={{ scale: 1.18, x: direction === 1 ? -20 : 20 }}
              transition={{ duration: 10, ease: 'linear' }}
              style={{
                backgroundImage: `url(${slides[activeIndex].image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/10" />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="relative z-10 flex flex-col gap-6 bg-black px-4 pb-10 pt-6 sm:absolute sm:inset-0 sm:bg-transparent sm:px-8 sm:pb-36 sm:pt-0">
        <div className="mx-auto w-full max-w-6xl sm:mt-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={slides[activeIndex].title}
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={{
                hidden: {},
                visible: {
                  transition: { staggerChildren: 0.08, delayChildren: 0.1 },
                },
              }}
            >
              <motion.p
                className="mb-4 text-xs uppercase tracking-[0.35em] text-white/70 sm:text-sm"
                variants={textVariants}
              >
                Programmes sur mesure
              </motion.p>
              <motion.h1
                className="text-3xl font-semibold leading-tight sm:text-5xl lg:text-6xl"
                variants={textVariants}
              >
                {slides[activeIndex].title}
              </motion.h1>
              <motion.p
                className="mt-6 max-w-3xl text-base text-white/90 sm:text-xl"
                variants={textVariants}
              >
                {slides[activeIndex].description}
              </motion.p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <div className="  flex w-full justify-center px-4 pb-6 md:absolute md:bottom-3">
        <div className="flex flex-wrap items-center gap-2 rounded-full bg-white/10 px-4 py-2 shadow-lg shadow-black/30 backdrop-blur sm:gap-3 sm:px-6 sm:py-3">
          {slides.map((slide, index) => {
            const isActive = index === activeIndex
            return (
              <button
                key={slide.title}
                type="button"
                aria-label={`Aller à ${slide.title}`}
                aria-pressed={isActive}
                className="relative flex h-5 w-10 items-center justify-center cursor-pointer rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70 sm:h-6 sm:w-12"
                onClick={() => goToSlide(index)}
              >
                <motion.span
                  layout
                  className="h-2 rounded-full bg-white"
                  initial={false}
                  animate={{
                    width: isActive ? 42 : 8,
                    opacity: isActive ? 0.95 : 0.4,
                  }}
                  transition={{
                    type: 'spring',
                    stiffness: 280,
                    damping: 28,
                  }}
                />
              </button>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Hero
