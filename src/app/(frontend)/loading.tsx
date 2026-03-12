import React from 'react'

const FrontendLoading = () => {
  return (
    <div className="min-h-screen bg-linear-to-b from-white to-primary-50 dark:from-gray-950 dark:to-gray-900 flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="relative h-14 w-14">
          <div className="absolute inset-0 rounded-full border-4 border-primary-200 dark:border-primary-900" />
          <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-primary-600 dark:border-t-primary-400 animate-spin" />
        </div>
        <p className="text-sm font-medium tracking-wide text-primary-800 dark:text-primary-100">
          Chargement de la page...
        </p>
      </div>
    </div>
  )
}

export default FrontendLoading

