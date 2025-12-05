import React from 'react'

const TitreServiceLayout = (props: { children: React.ReactNode }) => {
  const { children } = props

  return (
    <section>
      <div className="h-[20vh] bg-secondary-800 text-white flex justify-center items-center">
        Header
      </div>
      {children}
    </section>
  )
}

export default TitreServiceLayout
