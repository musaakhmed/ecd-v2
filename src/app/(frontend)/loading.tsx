import React from 'react'

const FrontendLoading = () => {
  return (
    <div className="min-h-screen bg-linear-to-b from-white to-primary-50 flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="relative h-14 w-14">
          <div className="absolute inset-0 rounded-full border-4 border-primary-200" />
          <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-primary-600 animate-spin" />
        </div>
        <p className="text-sm font-medium tracking-wide italic text-primary-800">Chargement de la page...</p>
      </div>
    </div>
  )
}

export default FrontendLoading
