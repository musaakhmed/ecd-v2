'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { menu } from '@/lib/menu'
import { NavBarCTA } from '@/components/Header/NavBarCTA'

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => setMenuOpen(!menuOpen)

  return (
    <section className="flex items-center justify-between space-x-6 ">
      <nav className="flex items-center justify-between space-x-4 w-full ">
        {/* Desktop Menu - hidden on small screens */}
        <ul className="hidden lg:flex">
          {menu.map(({ title, link }) => (
            <li key={link}>
              <Link
                href={link}
                className="hover:bg-cyan-700 hover:text-white font-semibold rounded transition-all ease-in duration-150 px-1 py-0.5 "
              >
                {title}
              </Link>
            </li>
          ))}
          <li>
            <NavBarCTA />
          </li>
        </ul>

        {/* Hamburger button - visible on small screens */}
        <button
          onClick={toggleMenu}
          className="lg:hidden px-2 py-1 rounded focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all duration-200"
          aria-label="Toggle mobile menu"
        >
          {/* Simple hamburger icon */}
          <svg
            className="w-6 h-6 text-gray-800 "
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
              // X icon for close
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              // Hamburger icon for open
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Mobile menu - visible only when menuOpen and on small screens */}
        {menuOpen && (
          <ul className="flex flex-col space-y-4 lg:hidden absolute top-full left-0 w-full h-screen bg-white shadow-md p-4 z-10">
            {menu.map(({ title, link }) => (
              <li key={link}>
                <Link
                  href={link}
                  className="block px-3 py-2 rounded hover:bg-cyan-700 hover:text-white font-semibold"
                  onClick={() => setMenuOpen(false)} // close menu on click
                >
                  {title}
                </Link>
              </li>
            ))}
            <li>
              <NavBarCTA />
            </li>
          </ul>
        )}
      </nav>
    </section>
  )
}
