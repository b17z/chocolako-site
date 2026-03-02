"use client"

import { motion, useReducedMotion } from "framer-motion"
import { ReactNode } from "react"

interface GlowTextProps {
  children: ReactNode
  as?: "h1" | "h2" | "h3" | "p" | "span"
  className?: string
  glowColor?: string
  animate?: boolean
}

export function GlowText({
  children,
  as: Component = "span",
  className = "",
  glowColor = "rgba(212, 175, 55, 0.4)",
  animate = true,
}: GlowTextProps) {
  const shouldReduceMotion = useReducedMotion()
  const MotionComponent = motion[Component]

  if (shouldReduceMotion || !animate) {
    return (
      <Component
        className={className}
        style={{
          textShadow: `0 0 30px ${glowColor}, 0 0 60px ${glowColor}`,
        }}
      >
        {children}
      </Component>
    )
  }

  return (
    <MotionComponent
      className={className}
      initial={{
        textShadow: `0 0 0px transparent, 0 0 0px transparent`,
      }}
      whileInView={{
        textShadow: `0 0 30px ${glowColor}, 0 0 60px ${glowColor}`,
      }}
      viewport={{ once: true }}
      transition={{ duration: 1.5, ease: "easeOut" }}
    >
      {children}
    </MotionComponent>
  )
}
