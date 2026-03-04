'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

interface StatItem {
  value: number
  suffix?: string
  prefix?: string
  label: string
  description?: string
}

const stats: StatItem[] = [
  {
    value: 1250,
    suffix: '+',
    label: 'Participants',
    description: 'Personnes accompagnées',
  },
  {
    value: 48,
    label: 'Programmes',
    description: "D'activités et de formations",
  },
  {
    value: 4472,
    label: 'Sessions',
    description: 'Sessions organisées',
  },
  {
    value: 102,
    label: 'Partenaires',
    description: 'Institutions et associations',
  },
]

const AnimatedCounter = ({
  value,
  suffix,
  prefix,
  isInView,
}: {
  value: number
  suffix?: string
  prefix?: string
  isInView: boolean
}) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isInView) return

    const duration = 2000 // 2 seconds
    const steps = 60
    const increment = value / steps
    const stepDuration = duration / steps

    let currentStep = 0
    const timer = setInterval(() => {
      currentStep++
      const nextValue = Math.min(Math.floor(increment * currentStep), value)
      setCount(nextValue)

      if (currentStep >= steps) {
        setCount(value)
        clearInterval(timer)
      }
    }, stepDuration)

    return () => clearInterval(timer)
  }, [isInView, value])

  return (
    <span className="tabular-nums">
      {prefix}
      {count.toLocaleString('fr-BE')}
      {suffix}
    </span>
  )
}

const StatCard = ({ stat, index }: { stat: StatItem; index: number }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="flex flex-col items-center justify-center p-4 md:p-5 rounded-xl bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-shadow duration-300 border border-primary-100"
    >
      <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary-600 mb-1.5">
        <AnimatedCounter
          value={stat.value}
          suffix={stat.suffix}
          prefix={stat.prefix}
          isInView={isInView}
        />
      </div>
      <h3 className="text-base md:text-lg font-semibold text-secondary-800 mb-1 text-center">
        {stat.label}
      </h3>
      {stat.description && (
        <p className="text-xs md:text-sm text-secondary-600 text-center">{stat.description}</p>
      )}
    </motion.div>
  )
}

const Stats = () => {
  return (
    <section className="relative py-12 lg:py-0 lg:min-h-[50vh] flex flex-col justify-center bg-gradient-to-b from-primary-50 via-white to-primary-50 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary-500 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-500 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 w-full">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-10 lg:mb-6"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-secondary-800 mb-2">
            Notre Impact
          </h2>
          <p className="text-base md:text-lg text-secondary-600 max-w-2xl mx-auto">
            Des chiffres qui témoignent de notre engagement et de notre impact positif dans la
            communauté
          </p>
        </motion.div>

        {/* Stats Grid - four cards on one line on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 lg:gap-4">
          {stats.map((stat, index) => (
            <StatCard key={stat.label} stat={stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stats
