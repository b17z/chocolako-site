"use client"

import { motion, useInView, useReducedMotion } from "framer-motion"
import { useRef } from "react"
import { staggerContainer, staggerItem, reduceMotion } from "@/lib/animations"

interface Pillar {
  number: string
  title: string
  subtitle: string
  description: string
}

const pillars: Pillar[] = [
  {
    number: "01",
    title: "Science",
    subtitle: "Somatic Intelligence",
    description:
      "Grounded in neuroscience and nervous system research. Polyvagal theory, interoception, and the science of embodiment inform every practice. This isn't woo—it's evidence-based transformation.",
  },
  {
    number: "02",
    title: "Lineage",
    subtitle: "Feminine Wisdom Traditions",
    description:
      "Drawing from ancient feminine wisdom traditions—womb practices, ceremonial cacao, cyclical living. Honoring what was suppressed and reclaiming what was lost.",
  },
  {
    number: "03",
    title: "Application",
    subtitle: "Leadership Integration",
    description:
      "Not just healing work—leadership work. Every practice is designed to translate directly into how you show up in boardrooms, negotiations, and high-stakes moments.",
  },
]

export function Methodology() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const shouldReduceMotion = useReducedMotion()

  const containerVariants = shouldReduceMotion ? reduceMotion : staggerContainer
  const itemVariants = shouldReduceMotion ? reduceMotion : staggerItem

  return (
    <section className="py-20 md:py-32 bg-espresso">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20"
        >
          <p className="text-gold uppercase tracking-[0.3em] text-sm mb-4">
            The Method
          </p>
          <h2 className="font-serif text-3xl md:text-5xl text-bone">
            Somatic Feminine Intelligence
          </h2>
        </motion.div>

        {/* Pillars Grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-3 gap-[1px] max-w-6xl mx-auto bg-sand/20"
        >
          {pillars.map((pillar) => (
            <motion.div
              key={pillar.number}
              variants={itemVariants}
              className="bg-espresso p-8 md:p-10 lg:p-12"
            >
              {/* Large Number */}
              <span className="block font-serif text-6xl md:text-7xl lg:text-8xl text-gold/50 mb-6">
                {pillar.number}
              </span>

              {/* Title */}
              <h3 className="font-serif text-2xl md:text-3xl text-bone mb-2">
                {pillar.title}
              </h3>

              {/* Subtitle */}
              <p className="text-gold uppercase tracking-[0.2em] text-xs mb-6">
                {pillar.subtitle}
              </p>

              {/* Description */}
              <p className="text-sand/70 leading-relaxed">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
