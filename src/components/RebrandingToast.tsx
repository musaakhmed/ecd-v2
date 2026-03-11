'use client'

import { useEffect } from 'react'
import { toast, Toaster, ToastBar } from 'react-hot-toast'

const STORAGE_KEY = 'rebrand_toast_seen_v1'

export function RebrandingToast() {
  useEffect(() => {
    try {
      // if (typeof window === 'undefined') return
      // if (window.localStorage.getItem(STORAGE_KEY) === '1') return

      toast(
        'Bienvenue sur notre nouveau site suite au rebranding. Nous étions auparavant « Espace Culture et Développement ».',
        {
          duration: 9000,
        },
      )

      window.localStorage.setItem(STORAGE_KEY, '1')
    } catch {
      // If storage is unavailable (privacy mode, etc.), still show toast once per load.
      toast(
        'Bienvenue sur notre nouveau site suite au rebranding. Nous étions auparavant « Espace Culture et Développement ».',
        {
          duration: 9000,
        },
      )
    }
  }, [])

  return (
    <Toaster
      position="top-right"
      toastOptions={{
        style: {
          background: '#0b1220',
          color: '#fff',
          border: '1px solid rgba(255,255,255,0.12)',
        },
      }}
    >
      {(t) => (
        <ToastBar toast={t}>
          {({ icon, message }) => (
            <>
              {icon}
              {message}
              {t.type !== 'loading' && <button onClick={() => toast.dismiss(t.id)}>X</button>}
            </>
          )}
        </ToastBar>
      )}
    </Toaster>
  )
}
