import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

const Logo = () => {
  return (
    <Link href="/">
      <motion.div
        className="font-semibold lg:text-3xl lg:font-bold cursor-pointer"
        style={{ color: 'var(--color-header)' }}
        whileHover={{ scale: 1.05, color: 'var(--color-primary)' }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.2 }}
      >
        ECD
      </motion.div>
    </Link>
  )
}

export default Logo
