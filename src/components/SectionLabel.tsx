import React from 'react'

interface SectionLabelProps {
  index: string | number
  label: string
}

export function SectionLabel({ index, label }: SectionLabelProps) {
  return (
    <div className="flex items-center gap-3 mb-8">
      <span className="font-mono text-xs tracking-[0.3em] uppercase text-[#d4af7a]">
        ({String(index).padStart(2, '0')})
      </span>
      <span className="font-mono text-xs tracking-[0.3em] uppercase text-white/40">
        {label}
      </span>
    </div>
  )
}