import React from 'react'
import { motion } from 'framer-motion'

interface RevealTextProps {
  as?: keyof JSX.IntrinsicElements
  children: React.ReactNode
  className?: string
  stagger?: number
  delay?: number
}

export function RevealText({ as: Component = 'div', children, className, stagger = 0.05, delay = 0 }: RevealTextProps) {
  const text = typeof children === 'string' ? children : ''
  const letters = text.split('')

  return React.createElement(
    motion[Component as keyof typeof motion] || Component,
    { className },
    letters.map((letter, i) => (
      <motion.span
        key={i}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: delay + i * stagger }}
        viewport={{ once: true }}
      >
        {letter}
      </motion.span>
    ))
  )
}