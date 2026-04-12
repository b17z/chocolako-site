"use client"

import { motion, useInView, useReducedMotion } from "framer-motion"
import { useRef } from "react"
import { staggerContainer, staggerItem, reduceMotion } from "@/lib/animations"

interface Pillar {
  number: string
  title: string
  subtitle: string
  description: string
  icon: "science" | "lineage" | "application"
}

const pillars: Pillar[] = [
  {
    number: "01",
    title: "The Science",
    subtitle: "Nervous System Literacy",
    icon: "science",
    description:
      "Polyvagal theory. Interoception. Nervous system regulation. Trauma-informed somatics. We don't bypass the body. We restore its intelligence.",
  },
  {
    number: "02",
    title: "The Lineage",
    subtitle: "Womb-Centered Wisdom",
    icon: "lineage",
    description:
      "Womb-centered practices. Ritual as regulation. Cultural memory as resource. This isn't appropriation. This is restoration.",
  },
  {
    number: "03",
    title: "The Application",
    subtitle: "Embodied Leadership",
    icon: "application",
    description:
      "Boardroom presence. Executive resilience. Institutional influence. Leadership that compounds instead of depletes. Embodiment isn't escape. It's strategy.",
  },
]

// Sacred geometry SVG icons - BOLDER
const icons = {
  science: (
    <svg viewBox="0 0 100 100" className="w-20 h-20 md:w-24 md:h-24">
      <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.4" />
      <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.6" />
      <circle cx="50" cy="50" r="15" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.8" />
      <circle cx="50" cy="50" r="4" fill="currentColor" opacity="1" />
      {/* Pulsing center glow */}
      <circle cx="50" cy="50" r="8" fill="currentColor" opacity="0.3" />
    </svg>
  ),
  lineage: (
    <svg viewBox="0 0 100 100" className="w-20 h-20 md:w-24 md:h-24">
      <path d="M50 10 L90 50 L50 90 L10 50 Z" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.4" />
      <path d="M50 25 L75 50 L50 75 L25 50 Z" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.6" />
      <circle cx="50" cy="50" r="12" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.8" />
      <circle cx="50" cy="50" r="4" fill="currentColor" opacity="1" />
      <circle cx="50" cy="50" r="8" fill="currentColor" opacity="0.3" />
    </svg>
  ),
  application: (
    <svg viewBox="0 0 100 100" className="w-20 h-20 md:w-24 md:h-24">
      <polygon points="50,5 95,27.5 95,72.5 50,95 5,72.5 5,27.5" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.4" />
      <polygon points="50,20 80,35 80,65 50,80 20,65 20,35" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.6" />
      <circle cx="50" cy="50" r="12" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.8" />
      <circle cx="50" cy="50" r="4" fill="currentColor" opacity="1" />
      <circle cx="50" cy="50" r="8" fill="currentColor" opacity="0.3" />
    </svg>
  ),
}

export function Methodology() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const shouldReduceMotion = useReducedMotion()

  const containerVariants = shouldReduceMotion ? reduceMotion : staggerContainer
  const itemVariants = shouldReduceMotion ? reduceMotion : staggerItem

  return (
    <>
      <section className="py-20 md:py-32 bg-espresso relative overflow-hidden">
        {/* Ambient background glow */}
        <div
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse at 20% 50%, rgba(212,175,55,0.1) 0%, transparent 50%), radial-gradient(ellipse at 80% 50%, rgba(74,93,35,0.1) 0%, transparent 50%)",
          }}
        />

        <div className="container mx-auto px-6 relative">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16 md:mb-20"
          >
            <p
              className="text-gold uppercase tracking-[0.3em] text-sm mb-4"
              style={{ textShadow: "0 0 20px rgba(212,175,55,0.3)" }}
            >
              The Method
            </p>
            <h2
              className="font-serif text-3xl md:text-5xl text-bone"
              style={{ textShadow: "0 0 40px rgba(255,255,255,0.1)" }}
            >
              Somatic Feminine Intelligence™
            </h2>
            <p className="text-sand/60 mt-4 max-w-2xl mx-auto">
              A new category at the intersection of nervous system science, embodied leadership, and cultural lineage.
            </p>
          </motion.div>

          {/* Pillars Grid */}
          <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid md:grid-cols-3 gap-8 md:gap-6 max-w-6xl mx-auto"
          >
            {pillars.map((pillar) => (
              <motion.div
                key={pillar.number}
                variants={itemVariants}
                whileHover={shouldReduceMotion ? {} : {
                  y: -8,
                  transition: { duration: 0.3 },
                }}
                className="relative bg-gradient-to-b from-sand/5 to-transparent p-8 md:p-10 rounded-2xl border border-sand/10 group"
              >
                {/* Hover glow effect - STRONGER */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{
                    background: "radial-gradient(ellipse at 50% 0%, rgba(212,175,55,0.25) 0%, rgba(212,175,55,0.1) 40%, transparent 70%)",
                    boxShadow: "inset 0 1px 0 rgba(212,175,55,0.3)",
                  }}
                />
                {/* Border glow on hover */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{
                    boxShadow: "0 0 30px rgba(212,175,55,0.2), 0 0 60px rgba(212,175,55,0.1)",
                  }}
                />

                {/* Sacred geometry icon - MORE VISIBLE */}
                <motion.div
                  className="text-gold mb-6 drop-shadow-[0_0_10px_rgba(212,175,55,0.4)]"
                  animate={shouldReduceMotion ? {} : {
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 40,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  {icons[pillar.icon]}
                </motion.div>

                {/* Number */}
                <span className="block text-gold/30 text-sm tracking-widest mb-4">
                  {pillar.number}
                </span>

                {/* Title */}
                <h3 className="font-serif text-2xl md:text-3xl text-bone mb-2">
                  {pillar.title}
                </h3>

                {/* Subtitle */}
                <p className="text-gold uppercase tracking-[0.15em] text-xs mb-6">
                  {pillar.subtitle}
                </p>

                {/* Description */}
                <p className="text-sand/70 leading-relaxed text-sm md:text-base">
                  {pillar.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  )
}
