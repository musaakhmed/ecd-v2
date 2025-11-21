import React from 'react'
import Link from 'next/link'

export const NavBarCTA = () => {
  return (
    <Link href="/contact">
      <button className="bg-blue-500 text-white px-2 py-1 rounded font-semibold hover:bg-blue-700 cursor-pointer hover:scale-[101%] transition-all duration-150 ease-in">
        Contactez-nous
      </button>
    </Link>
  )
}
