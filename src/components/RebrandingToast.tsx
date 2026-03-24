'use client'

import { useEffect } from 'react'
import { Toaster, toast } from 'react-hot-toast'

export function RebrandingToast() {
  const message = `Vous êtes au bon endroit. Nous changeons d’identité — auparavant Espace Culture et Développement ASBL.`

  useEffect(() => {
    toast(message, {
      duration: 10000,
      position: 'top-right',
      style: {
        background: '#ffffff',
        color: '#111827',
        border: '1px solid #e5e7eb',
        boxShadow: '0 10px 25px rgba(17, 24, 39, 0.12)',
        width: '500px',
      },
    })
  }, [])

  return (
    <Toaster
      position="top-right"
      toastOptions={{
        duration: 5000,
        style: {
          background: '#ffffff',
          color: '#111827',
          border: '1px solid #e5e7eb',
        },
      }}
    />
  )
}
