'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { menu } from '@/lib/data/navigation/menu'
import { uiLabels } from '@/lib/content/uiLabels'

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [hoveredMenuItem, setHoveredMenuItem] = useState<string | null>(null)
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null)

  const toggleMenu = () => setMenuOpen(!menuOpen)

  const toggleSubmenu = (link: string) => {
    setOpenSubmenu(openSubmenu === link ? null : link)
  }

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
      <nav className="flex items-center justify-between space-x-4 w-full ">
        {/* Desktop Menu - hidden on small screens */}
        <ul className="hidden lg:flex items-center gap-1 justify-between">
          {menu.map(({ title, link, submenu }, index) => (
            <motion.li
              className="relative"
              key={link}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              onMouseEnter={() => submenu && setHoveredMenuItem(link)}
              onClick={() => setHoveredMenuItem(null)}
              onMouseLeave={() => setHoveredMenuItem(null)}
            >
              <Link href={link}>
                <motion.span
                  className="relative p-2 overflow-hidden cursor-pointer block"
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

              {/* Desktop Submenu */}
              <AnimatePresence>
                {submenu && hoveredMenuItem === link && (
                  <motion.div
                    className="absolute top-full left-0 mt-2 bg-white rounded-lg shadow-xl border border-gray-100 overflow-hidden z-50"
                    style={{ minWidth: '320px' }}
                    initial="closed"
                    animate="open"
                    exit="closed"
                    variants={{
                      closed: {
                        opacity: 0,
                        y: -10,
                        scale: 0.95,
                        transition: {
                          duration: 0.2,
                        },
                      },
                      open: {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        transition: {
                          duration: 0.3,
                          ease: [0.25, 0.1, 0.25, 1],
                          staggerChildren: 0.05,
                          delayChildren: 0.1,
                        },
                      },
                    }}
                    onMouseEnter={() => setHoveredMenuItem(link)}
                    onMouseLeave={() => setHoveredMenuItem(null)}
                  >
                    <div className="flex">
                      {/* Links Section */}
                      <div className="flex-1 p-4 w-full">
                        <ul className="space-y-2">
                          {submenu.links.map((subLink, subIndex) => (
                            <motion.li
                              key={subLink.link}
                              variants={{
                                closed: {
                                  opacity: 0,
                                  x: -10,
                                },
                                open: {
                                  opacity: 1,
                                  x: 0,
                                  transition: {
                                    duration: 0.2,
                                    delay: subIndex * 0.05,
                                  },
                                },
                              }}
                            >
                              <Link
                                href={subLink.link}
                                className="block px-3 py-2 rounded-md text-sm font-medium transition-colors hover:bg-primary-50 text-nowrap w-full"
                                style={{
                                  color: 'var(--color-header)',
                                }}
                                onMouseEnter={(e) => {
                                  e.currentTarget.style.color = 'var(--color-primary-700)'
                                }}
                                onMouseLeave={(e) => {
                                  e.currentTarget.style.color = 'var(--color-header)'
                                }}
                              >
                                {subLink.title}
                              </Link>
                            </motion.li>
                          ))}
                        </ul>
                      </div>

                      {/* Image Box */}
                      {/* {submenu.image && (
                        <motion.div
                          className="w-1/2 bg-gray-100 relative overflow-hidden"
                          variants={{
                            closed: {
                              opacity: 0,
                              scale: 0.9,
                            },
                            open: {
                              opacity: 1,
                              scale: 1,
                              transition: {
                                duration: 0.3,
                                delay: 0.2,
                              },
                            },
                          }}
                        >
                          <Image
                            src={submenu.image.src}
                            alt={submenu.image.alt}
                            fill
                            className="object-cover"
                            sizes="128px"
                          />
                        </motion.div>
                      )} */}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.li>
          ))}
        </ul>

        {/* Hamburger button - visible on small screens */}
        <motion.button
          onClick={toggleMenu}
          className="lg:hidden px-2 py-1 rounded focus:outline-none focus:ring-2 transition-all duration-200 relative z-50"
          style={{ '--tw-ring-color': 'var(--color-primary)' } as React.CSSProperties}
          aria-label={uiLabels.navbar.toggleMobileMenuAriaLabel}
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
              {menu.map(({ title, link, submenu }) => (
                <motion.li key={link} variants={itemVariants} className="w-full">
                  <div className="w-full">
                    <div className="flex items-center justify-between w-full">
                      <Link
                        href={link}
                        onClick={() => {
                          if (!submenu) {
                            setMenuOpen(false)
                          }
                        }}
                        className="flex-1"
                      >
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
                          <motion.span className="relative z-10" onClick={toggleMenu}>
                            {title}
                          </motion.span>
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

                      {/* Mobile Submenu Toggle Button */}
                      {submenu && (
                        <motion.button
                          onClick={() => toggleSubmenu(link)}
                          className="px-4 py-3 text-gray-600"
                          whileTap={{ scale: 0.95 }}
                          aria-label={uiLabels.navbar.toggleSubmenuAriaLabel}
                        >
                          <motion.svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            animate={{
                              rotate: openSubmenu === link ? 180 : 0,
                            }}
                            transition={{ duration: 0.3 }}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 9l-7 7-7-7"
                            />
                          </motion.svg>
                        </motion.button>
                      )}
                    </div>

                    {/* Mobile Submenu */}
                    <AnimatePresence>
                      {submenu && openSubmenu === link && (
                        <motion.div
                          className="overflow-hidden"
                          initial="closed"
                          animate="open"
                          exit="closed"
                          variants={{
                            closed: {
                              height: 0,
                              opacity: 0,
                              transition: {
                                duration: 0.3,
                                ease: [0.25, 0.1, 0.25, 1],
                              },
                            },
                            open: {
                              height: 'auto',
                              opacity: 1,
                              transition: {
                                duration: 0.3,
                                ease: [0.25, 0.1, 0.25, 1],
                                staggerChildren: 0.05,
                                delayChildren: 0.1,
                              },
                            },
                          }}
                        >
                          <div className="px-4 py-2 space-y-2">
                            {/* Image Box for Mobile
                            {submenu.image && (
                              <motion.div
                                className="w-full h-32 rounded-lg overflow-hidden mb-3 relative bg-gray-100"
                                variants={{
                                  closed: {
                                    opacity: 0,
                                    scale: 0.95,
                                  },
                                  open: {
                                    opacity: 1,
                                    scale: 1,
                                    transition: {
                                      duration: 0.3,
                                      delay: 0.1,
                                    },
                                  },
                                }}
                              >
                                <Image
                                  src={submenu.image.src}
                                  alt={submenu.image.alt}
                                  fill
                                  className="object-cover"
                                  sizes="100vw"
                                />
                              </motion.div>
                            )} */}

                            {/* Submenu Links */}
                            {submenu.links.map((subLink, subIndex) => (
                              <motion.div
                                key={subLink.link}
                                variants={{
                                  closed: {
                                    opacity: 0,
                                    x: -10,
                                  },
                                  open: {
                                    opacity: 1,
                                    x: 0,
                                    transition: {
                                      duration: 0.2,
                                      delay: subIndex * 0.05 + (submenu.image ? 0.15 : 0.1),
                                    },
                                  },
                                }}
                              >
                                <Link
                                  href={subLink.link}
                                  onClick={() => setMenuOpen(false)}
                                  className="block px-4 py-2 rounded-md text-sm font-medium bg-gray-50 hover:bg-primary-50 transition-colors"
                                  style={{
                                    color: 'var(--color-header)',
                                  }}
                                >
                                  {subLink.title}
                                </Link>
                              </motion.div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </nav>
    </section>
  )
}
