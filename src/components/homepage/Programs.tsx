'use client'
import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const data = [
  {
    text: 1,
  },
  {
    text: 1,
  },
  {
    text: 1,
  },
  {
    text: 1,
  },
  {
    text: 1,
  },
  {
    text: 1,
  },
  {
    text: 1,
  },
  {
    text: 1,
  },
  {
    text: 1,
  },
  {
    text: 1,
  },
  {
    text: 1,
  },
]

const Programs = () => {
  const targetRef = useRef<HTMLDivElement | null>(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
  })

  const x = useTransform(scrollYProgress, [0, 1], ['40%', '-50%'])

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-transparent mt-28">
      <div className="h-screen flex items-center justify-center bg-slate-200 gap-6 sticky top-0 overflow-hidden">
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
              className="h-48 w-48 bg-primary flex justify-center items-center rounded-lg overflow-hidden shrink-0"
            >
              <span>{item.text}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Programs
