'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Navbar } from '@/components/Header/Navbar'
import Logo from '@/components/Header/Logo'

const Header = () => {
  return (
    <motion.header
      className="h-16 bg-white backdrop-filter backdrop-blur-md  top-0 left-0 sticky flex items-center justify-center shadow-sm z-50 "
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <section className="flex items-center justify-between container mx-auto px-4">
        <Logo />
        <Navbar />
      </section>
    </motion.header>
  )
}

export default Header
