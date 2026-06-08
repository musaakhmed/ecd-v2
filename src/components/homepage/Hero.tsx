'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion, stagger } from 'framer-motion'
import NextImage from 'next/image'
import { homepageHeroSlides, type HeroSlide } from '@/lib/data/homepage/homepageData'

const slides: HeroSlide[] = homepageHeroSlides

const MEDIA_CROSSFADE_MS = 800
const MEDIA_CROSSFADE_SEC = MEDIA_CROSSFADE_MS / 1000
const IMAGE_SLIDE_DURATION_MS = 5000

type Slot = 'a' | 'b'

function isHeroVideoSrc(src: string) {
  return /\.(mp4|webm)$/i.test(src)
}

function otherSlot(slot: Slot): Slot {
  return slot === 'a' ? 'b' : 'a'
}

const textVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
}

type HeroSlideMediaProps = {
  slide: HeroSlide
  opacity: number
  zIndex: number
  priority?: boolean
  videoRef?: React.RefObject<HTMLVideoElement | null>
  onVideoTimeUpdate?: (event: React.SyntheticEvent<HTMLVideoElement>) => void
  onReady: () => void
}

function HeroSlideMedia({
  slide,
  opacity,
  zIndex,
  priority,
  videoRef,
  onVideoTimeUpdate,
  onReady,
}: HeroSlideMediaProps) {
  return (
    <div
      className="absolute inset-0 transition-opacity ease-in-out"
      style={{
        opacity,
        zIndex,
        transitionDuration: `${MEDIA_CROSSFADE_MS}ms`,
      }}
      aria-hidden={opacity === 0}
    >
      {isHeroVideoSrc(slide.image) ? (
        <video
          ref={videoRef}
          className="absolute inset-0 h-full w-full object-cover"
          src={slide.image}
          autoPlay
          muted
          playsInline
          preload="auto"
          poster={slide.poster}
          aria-label={slide.title}
          onLoadedData={onReady}
          onTimeUpdate={onVideoTimeUpdate}
        />
      ) : (
        <NextImage
          src={slide.image}
          alt={slide.title}
          fill
          className="object-cover"
          sizes="100vw"
          loading="eager"
          priority={priority}
          onLoad={(e) => {
            const img = e.currentTarget

            img
              .decode()
              .then(onReady)
              .catch(onReady)
          }}
        />
      )}
    </div>
  )
}

export const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [frontSlot, setFrontSlot] = useState<Slot>('a')
  const [slotSlides, setSlotSlides] = useState<{ a: number; b: number }>({ a: 0, b: 0 })
  const [isCrossfading, setIsCrossfading] = useState(false)
  const [fadeActive, setFadeActive] = useState(false)
  const [direction, setDirection] = useState<1 | -1>(1)
  const [readyByIndex, setReadyByIndex] = useState<Record<number, boolean>>({})

  const activeIndexRef = useRef(activeIndex)
  const frontSlotRef = useRef(frontSlot)
  const videoARef = useRef<HTMLVideoElement>(null)
  const videoBRef = useRef<HTMLVideoElement>(null)
  const transitionScheduledRef = useRef(false)

  activeIndexRef.current = activeIndex
  frontSlotRef.current = frontSlot

  const activeSlide = slides[activeIndex]
  const isIncomingReady = readyByIndex[activeIndex] ?? false
  const isVideoSlide = isHeroVideoSrc(activeSlide.image)

  const getVideoRef = (slot: Slot) => (slot === 'a' ? videoARef : videoBRef)

  const markReady = useCallback((index: number) => {
    setReadyByIndex((prev) => ({ ...prev, [index]: true }))
  }, [])

  const startCrossfadeTo = useCallback((nextIndex: number, dir?: 1 | -1) => {
    if (transitionScheduledRef.current || nextIndex === activeIndexRef.current) return

    transitionScheduledRef.current = true
    if (dir !== undefined) setDirection(dir)

    const incoming = otherSlot(frontSlotRef.current)

    setSlotSlides((prev) => ({ ...prev, [incoming]: nextIndex }))
    setActiveIndex(nextIndex)
    setIsCrossfading(true)
    setFadeActive(false)
  }, [])

  const advanceToNextSlide = useCallback(() => {
    startCrossfadeTo((activeIndexRef.current + 1) % slides.length, 1)
  }, [startCrossfadeTo])

  useEffect(() => {
    if (!isCrossfading) {
      const back = otherSlot(frontSlot)
      getVideoRef(back).current?.pause()
      return
    }

    const rafId = requestAnimationFrame(() => {
      requestAnimationFrame(() => setFadeActive(true))
    })

    const timer = setTimeout(() => {
      const newFront = otherSlot(frontSlotRef.current)
      const oldFront = frontSlotRef.current

      getVideoRef(oldFront).current?.pause()

      setFrontSlot(newFront)
      setIsCrossfading(false)
      setFadeActive(false)
      transitionScheduledRef.current = false
    }, MEDIA_CROSSFADE_MS)

    return () => {
      cancelAnimationFrame(rafId)
      clearTimeout(timer)
    }
  }, [isCrossfading, activeIndex, frontSlot])

  const handleVideoTimeUpdate = useCallback(
    (event: React.SyntheticEvent<HTMLVideoElement>) => {
      if (isCrossfading || transitionScheduledRef.current) return

      const video = event.currentTarget
      const { duration, currentTime } = video

      if (!Number.isFinite(duration) || duration <= MEDIA_CROSSFADE_SEC) return

      if (currentTime >= duration - MEDIA_CROSSFADE_SEC) {
        advanceToNextSlide()
      }
    },
    [advanceToNextSlide, isCrossfading],
  )

  useEffect(() => {
    if (isCrossfading || isVideoSlide) return

    const timer = setTimeout(() => {
      if (!transitionScheduledRef.current) {
        advanceToNextSlide()
      }
    }, IMAGE_SLIDE_DURATION_MS - MEDIA_CROSSFADE_MS)

    return () => clearTimeout(timer)
  }, [activeIndex, advanceToNextSlide, isCrossfading, isVideoSlide, frontSlot])

  useEffect(() => {
    slides.forEach((slide) => {
      if (!slide.image || isHeroVideoSrc(slide.image)) return

      const img = new window.Image()
      img.decoding = 'async'
      img.loading = 'eager'
      img.src = slide.image
      img.decode().catch(() => {})
    })
  }, [])

  const goToSlide = useCallback(
    (index: number) => {
      startCrossfadeTo(index, index > activeIndex ? 1 : -1)
    },
    [activeIndex, startCrossfadeTo],
  )

  if (slides.length === 0) {
    return null
  }

  const getSlotOpacity = (slot: Slot) => {
    if (!isCrossfading) {
      return slot === frontSlot ? 1 : 0
    }

    const incoming = otherSlot(frontSlot)

    if (slot === frontSlot) {
      return fadeActive ? 0 : 1
    }

    if (slot === incoming) {
      return fadeActive ? 1 : 0
    }

    return 0
  }

  const renderSlot = (slot: Slot) => {
    const slideIndex = slotSlides[slot]
    const slide = slides[slideIndex]
    const isFront = slot === frontSlot
    const isVideo = isHeroVideoSrc(slide.image)

    return (
      <HeroSlideMedia
        key={`${slot}-${slide.image}`}
        slide={slide}
        opacity={getSlotOpacity(slot)}
        zIndex={isCrossfading && slot === otherSlot(frontSlot) ? 2 : isFront ? 2 : 1}
        priority={slideIndex === 0}
        videoRef={getVideoRef(slot)}
        onVideoTimeUpdate={isFront && !isCrossfading && isVideo ? handleVideoTimeUpdate : undefined}
        onReady={() => markReady(slideIndex)}
      />
    )
  }

  return (
    <>
      <section className=" w-full overflow-hidden lg:top-0 lg:bottom-0 relative bg-primary-800  text-white lg:h-screen h-[70vh] flex flex-col justify-between">
        <div className="relative aspect-video w-full sm:absolute sm:inset-0 sm:h-full sm:aspect-auto">
          <motion.div
            className="absolute inset-0 origin-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
          >
            <motion.div
              className="absolute inset-0"
              initial={{ scale: 1.05 }}
              animate={{ scale: 1.18, x: direction === 1 ? -20 : 20 }}
              transition={{ duration: 10, ease: 'linear' }}
            >
              <div className="absolute inset-0">
                {renderSlot('a')}
                {renderSlot('b')}
                <div
                  className="absolute inset-0 z-[3] bg-primary-800/20 transition-opacity ease-out pointer-events-none"
                  style={{
                    opacity: isIncomingReady ? 0 : 1,
                    transitionDuration: '250ms',
                  }}
                />
              </div>
            </motion.div>
            <div className="absolute inset-0 " />
          </motion.div>
        </div>

        <div className="relative z-10 flex flex-col gap-6 bg-primary-800 px-4 pb-10 pt-6 sm:absolute sm:inset-0 sm:bg-transparent sm:px-8 sm:pb-36 sm:pt-0">
          <div className="mx-auto w-full max-w-6xl sm:mt-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSlide.title}
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
                  <span className="bg-primary-800 px-0.5 py-1">{activeSlide.title}</span>
                </motion.p>
                <motion.h1
                  className="font-semibold leading-tight text-2xl! lg:text-6xl!"
                  variants={textVariants}
                >
                  <span className="bg-primary-800 px-0.5 py-1">{activeSlide.subtitle}</span>
                </motion.h1>
                <motion.p
                  className="mt-6 max-w-3xl text-base text-white/90 sm:text-xl text-justify [text-align-last:start]"
                  variants={textVariants}
                >
                  <span className="bg-primary-800 px-0.5 py-1">{activeSlide.description}</span>
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
