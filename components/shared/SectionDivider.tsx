"use client"

import { motion, useReducedMotion } from "framer-motion"

interface SectionDividerProps {
  variant?: "wave" | "curve" | "organic"
  colorFrom?: string
  colorTo?: string
  flip?: boolean
  className?: string
}

export function SectionDivider({
  variant = "wave",
  colorFrom = "var(--color-espresso)",
  colorTo = "var(--color-bone)",
  flip = false,
  className = "",
}: SectionDividerProps) {
  const shouldReduceMotion = useReducedMotion()

  // More dramatic curves
  const paths = {
    wave: "M0,80 C320,140 640,0 960,80 C1280,160 1440,40 1440,40 L1440,0 L0,0 Z",
    curve: "M0,110 Q720,-20 1440,110 L1440,0 L0,0 Z",
    organic: "M0,80 C180,120 360,20 540,80 C720,140 900,20 1080,80 C1260,140 1440,60 1440,60 L1440,0 L0,0 Z",
  }

  return (
    <div
      className={`relative w-full overflow-hidden ${className}`}
      style={{
        marginTop: "-1px",
        transform: flip ? "rotate(180deg)" : undefined,
      }}
    >
      <motion.svg
        viewBox="0 0 1440 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto block"
        preserveAspectRatio="none"
        style={{ minHeight: "80px" }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: shouldReduceMotion ? 0 : 0.8 }}
      >
        <defs>
          <linearGradient id={`gradient-${variant}`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={colorFrom} />
            <stop offset="50%" stopColor={colorTo} />
            <stop offset="100%" stopColor={colorFrom} />
          </linearGradient>
        </defs>
        <motion.path
          d={paths[variant]}
          fill={`url(#gradient-${variant})`}
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: shouldReduceMotion ? 0 : 1.5, ease: "easeOut" }}
        />
      </motion.svg>
    </div>
  )
}
