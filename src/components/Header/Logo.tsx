import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

const Logo = () => {
  return (
    <Link href="/">
      <motion.div
        className="cursor-pointer flex items-center"
        whileHover={{ scale: 1.05, color: 'var(--color-primary)' }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.2 }}
      >
        <Image
          src="/assets/logo/logo.png"
          alt="Espace Form"
          width={160}
          height={44}
          priority
          className="h-10 w-auto lg:h-15"
        />
      </motion.div>
    </Link>
  )
}

export default Logo
