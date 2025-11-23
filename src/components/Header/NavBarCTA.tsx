'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

export const NavBarCTA = () => {
  return (
    <Link href="/contact">
      <motion.button
        className="relative text-white px-4 py-2 rounded-md font-semibold cursor-pointer overflow-hidden group"
        style={{ backgroundColor: 'var(--color-secondary-600)' }}
        whileHover={{ scale: 1.05, boxShadow: '0 4px 12px rgba(66, 142, 189, 0.4)' }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.2 }}
      >
        <motion.span
          className="relative z-10"
          initial={false}
          whileHover={{ x: 2 }}
        >
          Contactez-nous
        </motion.span>
        <motion.div
          className="absolute inset-0"
          style={{ backgroundColor: 'var(--color-primary-600)' }}
          initial={{ x: '-100%' }}
          whileHover={{ x: 0 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
          initial={{ x: '-100%' }}
          whileHover={{ x: '100%' }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
        />
      </motion.button>
    </Link>
  )
}
