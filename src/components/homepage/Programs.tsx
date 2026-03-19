'use client'
import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { homepageProgramCards } from '@/lib/data/homepage/homepageData'

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
          {homepageProgramCards.map((item, idx) => (
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
