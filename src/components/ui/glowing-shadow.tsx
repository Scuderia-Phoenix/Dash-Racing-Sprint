import React from 'react'

interface GlowingShadowProps {
  children: React.ReactNode
  className?: string
}

export function GlowingShadow({ children, className = '' }: GlowingShadowProps) {
  return (
    <div className={`relative ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-r from-[#d4af7a]/20 to-transparent blur-2xl rounded-full"></div>
      <div className="relative z-10">
        {children}
      </div>
    </div>
  )
}