'use client'

import React from 'react'

type NotchedGreyPillProps = {
  title: string
  kicker?: string
  footerLabel?: string
  className?: string
  notchBg?: string
}

function emphasizeInitials(text: string) {
  return text
    .split(/(\s+)/)
    .map((token, idx) => {
      if (/^\s+$/.test(token)) return <React.Fragment key={idx}>{token}</React.Fragment>
      const first = token.slice(0, 1)
      const rest = token.slice(1)
      return (
        <React.Fragment key={idx}>
          <span className="text-primary-600">{first}</span>
          {rest}
        </React.Fragment>
      )
    })
}

export const NotchedGreyPill: React.FC<NotchedGreyPillProps> = ({
  title,
  kicker = 'INCLUSION NUMÉRIQUE MOBILE',
  footerLabel = 'PRÉSENTATION',
  className = '',
  notchBg = '#ffffff',
}) => {
  return (
    <div
      className={`notched-pill ${className}`}
      style={
        {
          ['--notched-pill-notch-bg' as unknown as string]: notchBg,
        } as React.CSSProperties
      }
    >
      <div className="text-[44px] leading-[1.02] font-extrabold tracking-tight text-neutral-950">
        {emphasizeInitials(title)}
      </div>
      <div className="mt-6 text-primary-600 font-semibold tracking-[0.42em] text-[14px]">
        {kicker}
      </div>
      <div className="mt-7 text-neutral-950/90 font-semibold tracking-[0.34em] text-[14px]">
        {footerLabel}
      </div>
    </div>
  )
}

