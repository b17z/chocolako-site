"use client"

import { motion, useReducedMotion } from "framer-motion"
import { useEffect, useState } from "react"

interface Particle {
  id: number
  x: number
  y: number
  size: number
  duration: number
  delay: number
  opacity: number
}

interface ParticleFieldProps {
  count?: number
  className?: string
}

export function ParticleField({ count = 20, className = "" }: ParticleFieldProps) {
  const shouldReduceMotion = useReducedMotion()
  const [particles, setParticles] = useState<Particle[]>([])

  useEffect(() => {
    // Generate particles on mount (client-side only)
    const generated: Particle[] = Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 8 + 4, // Larger: 4-12px instead of 2-6px
      duration: Math.random() * 15 + 10, // Faster: 10-25s instead of 15-35s
      delay: Math.random() * 3,
      opacity: Math.random() * 0.5 + 0.3, // More visible: 0.3-0.8 instead of 0.1-0.5
    }))
    setParticles(generated)
  }, [count])

  if (shouldReduceMotion || particles.length === 0) {
    return null
  }

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
            background: `radial-gradient(circle, rgba(212,175,55,${particle.opacity}) 0%, rgba(212,175,55,${particle.opacity * 0.5}) 40%, transparent 70%)`,
            boxShadow: `0 0 ${particle.size * 2}px rgba(212,175,55,${particle.opacity * 0.6})`,
          }}
          animate={{
            y: [0, -50, 0],
            x: [0, Math.sin(particle.id) * 30, 0],
            opacity: [particle.opacity, particle.opacity * 1.3, particle.opacity],
            scale: [1, 1.4, 1],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  )
}
