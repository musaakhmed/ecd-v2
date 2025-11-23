'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { menu } from '@/lib/menu'
import { NavBarCTA } from '@/components/Header/NavBarCTA'

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => setMenuOpen(!menuOpen)

  const menuVariants = {
    closed: {
      opacity: 0,
      x: -20,
      transition: {
        duration: 0.2,
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    closed: {
      opacity: 0,
      x: -10,
    },
    open: {
      opacity: 1,
      x: 0,
    },
  }

  return (
    <section className="flex items-center justify-between space-x-6">
      <nav className="flex items-center justify-between space-x-4 w-full">
        {/* Desktop Menu - hidden on small screens */}
        <ul className="hidden lg:flex items-center gap-1 justify-between">
          {menu.map(({ title, link }, index) => (
            <motion.li
              className=""
              key={link}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Link href={link}>
                <motion.span
                  className="relative px-4 py-2 font-semibold overflow-hidden cursor-pointer"
                  style={{
                    color: 'var(--color-header)',
                  }}
                  initial="rest"
                  whileHover="hover"
                  variants={{
                    rest: {
                      color: 'var(--color-header)',
                    },
                    hover: {
                      color: 'var(--color-sage-50)',
                      transition: {
                        duration: 0.3,
                        ease: 'easeInOut',
                      },
                    },
                  }}
                >
                  {title}
                  {/* Main animated background that smoothly transitions */}
                  <motion.div
                    className="absolute inset-0 "
                    style={{
                      backgroundColor: 'var(--color-primary-700)',
                      zIndex: -1,
                    }}
                    variants={{
                      rest: {
                        scaleY: 0,
                        originY: 0,
                        opacity: 0,
                      },
                      hover: {
                        scaleY: 1,
                        opacity: 1,
                        transition: {
                          duration: 0.35,
                          ease: [0.25, 0.1, 0.25, 1],
                        },
                      },
                    }}
                  />
                  {/* Underline animation */}
                  <motion.span
                    className="absolute bottom-0 left-0 h-0.5 rounded-full"
                    style={{ backgroundColor: 'var(--color-secondary-900)' }}
                    variants={{
                      rest: {
                        width: 0,
                      },
                      hover: {
                        width: '100%',
                        transition: {
                          duration: 0.3,
                          ease: 'easeInOut',
                          delay: 0.1,
                        },
                      },
                    }}
                  />
                </motion.span>
              </Link>
            </motion.li>
          ))}
          <motion.li
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: menu.length * 0.1 }}
          >
            <NavBarCTA />
          </motion.li>
        </ul>

        {/* Hamburger button - visible on small screens */}
        <motion.button
          onClick={toggleMenu}
          className="lg:hidden px-2 py-1 rounded focus:outline-none focus:ring-2 transition-all duration-200 relative z-50"
          style={{ '--tw-ring-color': 'var(--color-primary)' } as React.CSSProperties}
          aria-label="Toggle mobile menu"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.svg
            className="w-6 h-6"
            style={{ color: 'var(--color-header)' }}
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
            animate={menuOpen ? { rotate: 90 } : { rotate: 0 }}
            transition={{ duration: 0.3 }}
          >
            {menuOpen ? (
              <motion.path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.3 }}
              />
            ) : (
              <motion.path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.3 }}
              />
            )}
          </motion.svg>
        </motion.button>

        {/* Mobile menu - visible only when menuOpen and on small screens */}
        <AnimatePresence>
          {menuOpen && (
            <motion.ul
              className="flex flex-col space-y-4 lg:hidden absolute top-full left-0 w-full min-h-screen bg-white shadow-lg p-6 z-40"
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              {menu.map(({ title, link }) => (
                <motion.li key={link} variants={itemVariants}>
                  <Link href={link} onClick={() => setMenuOpen(false)}>
                    <motion.div
                      className="block px-4 py-3 rounded-lg font-semibold relative overflow-hidden cursor-pointer"
                      style={{
                        color: 'var(--color-header)',
                      }}
                      initial="rest"
                      whileHover="hover"
                      whileTap={{ scale: 0.98 }}
                      variants={{
                        rest: {
                          x: 0,
                          color: 'var(--color-header)',
                        },
                        hover: {
                          x: 4,
                          color: 'var(--color-primary)',
                          transition: {
                            duration: 0.2,
                          },
                        },
                      }}
                    >
                      <motion.span className="relative z-10">{title}</motion.span>
                      {/* Animated background that smoothly transitions */}
                      <motion.div
                        className="absolute inset-0 rounded-lg"
                        style={{
                          backgroundColor: 'var(--color-primary-50)',
                          zIndex: -1,
                        }}
                        variants={{
                          rest: {
                            scaleY: 0,
                            originY: 0,
                            opacity: 0,
                          },
                          hover: {
                            scaleY: 1,
                            opacity: 1,
                            transition: {
                              duration: 0.35,
                              ease: [0.25, 0.1, 0.25, 1],
                            },
                          },
                        }}
                      />
                      {/* Gradient background layer for depth */}
                      <motion.div
                        className="absolute inset-0 rounded-lg"
                        style={{
                          background:
                            'linear-gradient(135deg, var(--color-primary-100) 0%, var(--color-primary-50) 100%)',
                          zIndex: -2,
                        }}
                        variants={{
                          rest: {
                            scaleY: 0,
                            originY: 0,
                            opacity: 0,
                          },
                          hover: {
                            scaleY: 1,
                            opacity: 0.6,
                            transition: {
                              duration: 0.4,
                              ease: [0.25, 0.1, 0.25, 1],
                              delay: 0.05,
                            },
                          },
                        }}
                      />
                      {/* Left border indicator */}
                      <motion.div
                        className="absolute left-0 top-0 h-full w-1 rounded-l-lg"
                        style={{ backgroundColor: 'var(--color-primary)' }}
                        variants={{
                          rest: {
                            scaleY: 0,
                            originY: 0,
                          },
                          hover: {
                            scaleY: 1,
                            transition: {
                              duration: 0.3,
                              ease: 'easeOut',
                            },
                          },
                        }}
                      />
                    </motion.div>
                  </Link>
                </motion.li>
              ))}
              <motion.li variants={itemVariants} className="pt-2">
                <NavBarCTA />
              </motion.li>
            </motion.ul>
          )}
        </AnimatePresence>
      </nav>
    </section>
  )
}
