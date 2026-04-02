'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Navbar } from '@/components/Header/Navbar'
import Logo from '@/components/Header/Logo'
import { NavBarCTA } from '@/components/Header/NavBarCTA'

const Header = () => {
  return (
    <motion.header
      className="h-16 backdrop-blur  bg-white/60 top-0 left-0 sticky flex items-center justify-center shadow-sm z-50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <section className="flex items-center justify-between container mx-auto px-4">
        <Logo />
        <div className="flex items-center justify-between">
          <Navbar />
          <NavBarCTA />
        </div>
      </section>
    </motion.header>
  )
}

export default Header
