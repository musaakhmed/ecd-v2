'use client'

import { useEffect } from 'react'
import { toast, Toaster, ToastBar } from 'react-hot-toast'

const STORAGE_KEY = 'rebrand_toast_seen_v1'

export function RebrandingToast() {
  useEffect(() => {
    toast(
      'Bienvenue sur notre nouveau site suite au rebranding. Nous étions auparavant «Espace Culture et Développement ASBL».',
      {
        duration: 3000,
      },
    )
  }, [])

  return (
    <Toaster
      position="top-right"
      toastOptions={{
        style: {
          background: '#163550',
          color: '#fff',
          border: '1px solid rgba(255,255,255,0.12)',
          padding: '10px',
        },
      }}
    >
      {}
    </Toaster>
  )
}
