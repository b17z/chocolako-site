"use client"

import { motion, useReducedMotion } from "framer-motion"
import { ReactNode } from "react"

interface BreathingElementProps {
  children: ReactNode
  className?: string
  intensity?: "subtle" | "medium" | "strong"
  duration?: number
}

export function BreathingElement({
  children,
  className = "",
  intensity = "subtle",
  duration = 4,
}: BreathingElementProps) {
  const shouldReduceMotion = useReducedMotion()

  const scaleValues = {
    subtle: [1, 1.02, 1],
    medium: [1, 1.05, 1],
    strong: [1, 1.08, 1],
  }

  const opacityValues = {
    subtle: [1, 0.95, 1],
    medium: [1, 0.9, 1],
    strong: [1, 0.85, 1],
  }

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      className={className}
      animate={{
        scale: scaleValues[intensity],
        opacity: opacityValues[intensity],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.div>
  )
}
