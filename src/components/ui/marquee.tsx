import React from 'react'
import { motion } from 'framer-motion'

interface MarqueeProps {
  items: string[]
  separator?: string
  speed?: 'slow' | 'normal' | 'fast'
}

export function Marquee({ items, separator = '•', speed = 'normal' }: MarqueeProps) {
  const speedMap = {
    slow: 50,
    normal: 30,
    fast: 20,
  }

  return (
    <div className="overflow-hidden whitespace-nowrap">
      <motion.div
        animate={{ x: '-100%' }}
        transition={{ duration: speedMap[speed], repeat: Infinity, ease: 'linear' }}
        className="flex gap-4"
      >
        {[...items, ...items].map((item, i) => (
          <div key={i} className="flex items-center gap-4 text-white/60">
            <span>{item}</span>
            <span>{separator}</span>
          </div>
        ))}
      </motion.div>
    </div>
  )
}