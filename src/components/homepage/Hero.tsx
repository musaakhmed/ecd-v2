'use client'

import { useCallback, useEffect, useState } from 'react'
import { AnimatePresence, motion, stagger } from 'framer-motion'
import NextImage from 'next/image'
import { homepageHeroSlides } from '@/lib/data/homepage/homepageData'

type Slide = {
  image: string
  subtitle: string
  title: string
  description: string
}

const slides: Slide[] = homepageHeroSlides

const textVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
}

export const Hero = () => {
  // const slideData: Slide[] = dummySlides?.length > 0 ? dummySlides : slides

  const [activeIndex, setActiveIndex] = useState(0)
  const [direction, setDirection] = useState<1 | -1>(1)
  const [readyByIndex, setReadyByIndex] = useState<Record<number, boolean>>({})

  useEffect(() => {
    console.log('Client-side slides data:', slides || 'Using dummy slides')
  }, [slides])

  useEffect(() => {
    if (slides.length === 0) return
    const nextIndex = (activeIndex + 1) % slides.length
    const next = slides[nextIndex]
    if (!next?.image) return

    const img = new window.Image()
    img.decoding = 'async'
    img.loading = 'eager'
    img.src = next.image
    img.decode().catch(() => {})
  }, [activeIndex])

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
  }, [slides])

  // safety check
  if (slides.length === 0) {
    return null // or return a loading/empty state
  }

  return (
    <>
      <section className=" w-full overflow-hidden lg:top-0 lg:bottom-0 relative bg-primary-800  text-white lg:h-screen h-[70vh] flex flex-col justify-between">
        <div className="relative aspect-video w-full sm:absolute sm:inset-0 sm:h-full sm:aspect-auto">
          <AnimatePresence initial={false} mode="sync">
            <motion.div
              key={slides[activeIndex].image}
              className="absolute inset-0 origin-center"
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
              }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, ease: 'easeInOut' }}
            >
              <motion.div
                className="absolute inset-0"
                initial={{ scale: 1.05 }}
                animate={{ scale: 1.18, x: direction === 1 ? -20 : 20 }}
                transition={{ duration: 10, ease: 'linear' }}
              >
                <NextImage
                  src={slides[activeIndex].image}
                  alt={slides[activeIndex].title}
                  fill
                  className="object-cover"
                  sizes="100vw"
                  priority={activeIndex === 0}
                  onLoad={(e) => {
                    const img = e.currentTarget

                    img
                      .decode()
                      .then(() => {
                        setReadyByIndex((prev) => ({ ...prev, [activeIndex]: true }))
                      })
                      .catch(() => {
                        setReadyByIndex((prev) => ({ ...prev, [activeIndex]: true }))
                      })
                  }}
                />
                <motion.div
                  className="absolute inset-0 bg-primary-800/20"
                  initial={false}
                  animate={{ opacity: readyByIndex[activeIndex] ? 0 : 1 }}
                  transition={{ duration: 0.25, ease: 'easeOut' }}
                />
              </motion.div>
              <div className="absolute inset-0 " />
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="relative z-10 flex flex-col gap-6 bg-primary-800 px-4 pb-10 pt-6 sm:absolute sm:inset-0 sm:bg-transparent sm:px-8 sm:pb-36 sm:pt-0">
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
                    transition: { delayChildren: stagger(0.08) },
                  },
                }}
              >
                <motion.p
                  className="mb-4 text-xs uppercase tracking-[0.35em] text-white/70 sm:text-sm "
                  variants={textVariants}
                >
                  <span className="bg-primary-800 px-0.5 py-1">{slides[activeIndex].title}</span>
                </motion.p>
                <motion.h1
                  className="text-3xl font-semibold leading-tight sm:text-5xl lg:text-6xl "
                  variants={textVariants}
                >
                  <span className="bg-primary-800 px-0.5 py-1">{slides[activeIndex].subtitle}</span>
                </motion.h1>
                <motion.p
                  className="mt-6 max-w-3xl text-base text-white/90 sm:text-xl text-justify [text-align-last:start]"
                  variants={textVariants}
                >
                  <span className="bg-primary-800 px-0.5 py-1">
                    {slides[activeIndex].description}
                  </span>
                </motion.p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <div className="z-10 flex w-full justify-center px-4 pb-6 md:absolute md:bottom-3">
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
                    className="h-2 rounded-full bg-white "
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
    </>
  )
}
