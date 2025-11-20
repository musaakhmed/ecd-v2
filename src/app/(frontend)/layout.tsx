import React from 'react'
import './styles.css'

export const metadata = {
  description: 'Espace Culture et Developpement',
  title: 'Espace Culture et Developpement',
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="en">
      <body>
        <main>{children}</main>
      </body>
    </html>
  )
}
