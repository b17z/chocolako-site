"use client"

import { motion, useInView, useReducedMotion } from "framer-motion"
import { useRef } from "react"

interface CategoryTile {
  label: string
  photoAlt: string
  description: string
}

const categories: CategoryTile[] = [
  {
    label: "CEREMONIAL CACAO",
    photoAlt: "Photo: Ceremonial Cacao",
    description:
      "Sourced with intention. Used in ceremony and in daily ritual. Chocolako\u2019s cacao is not a wellness trend. It is a plant medicine with a lineage, offered with the respect that deserves.",
  },
  {
    label: "AURA INNERGY OILS",
    photoAlt: "Photo: Aura Innergy Oils",
    description:
      "Ritual oils for the body, the breath, and the womb. Formulated to support nervous system regulation and somatic presence.",
  },
  {
    label: "INNERGY ADORNMENT",
    photoAlt: "Photo: Innergy Adornment",
    description:
      "Jewelry designed to be worn as intention. Pieces that carry meaning through the day, the practice, and the year.",
  },
  {
    label: "YOGA & SWIMWEAR",
    photoAlt: "Photo: Yoga & Swimwear",
    description:
      "For the body you are in, designed to move the way a woman moves when she is fully at home in herself.",
  },
]

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
}

const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
}

const reduceMotion = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.01 } },
}

export function ShopPreview() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const shouldReduceMotion = useReducedMotion()

  const containerVariants = shouldReduceMotion ? reduceMotion : staggerContainer
  const itemVariants = shouldReduceMotion ? reduceMotion : staggerItem

  return (
    <section className="py-24 md:py-32 bg-bone">
      <div className="max-w-5xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-3xl md:text-5xl text-cacao mb-4">
            Tools for the practice.
          </h2>
          <p className="font-sans text-base md:text-lg text-cacao/70 max-w-2xl mx-auto leading-relaxed">
            Every item in the Innergy Shop was chosen because it belongs to the
            work, not alongside it.
          </p>
        </motion.div>

        {/* Category Tiles Grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
        >
          {categories.map((category) => (
            <motion.div
              key={category.label}
              variants={itemVariants}
              className="relative bg-sand/50 rounded-lg p-8"
            >
              {/* Placeholder Image Area */}
              <div className="h-48 bg-sand rounded mb-4 flex items-center justify-center">
                <span className="text-cacao/30 font-serif text-sm">
                  {category.photoAlt}
                </span>
              </div>

              {/* Label */}
              <p className="text-gold text-xs tracking-widest uppercase font-medium mb-3">
                {category.label}
              </p>

              {/* Description */}
              <p className="font-sans text-base text-cacao/80 leading-relaxed">
                {category.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <a
            href="#"
            className="text-gold font-medium hover:underline underline-offset-4 transition-colors"
          >
            Visit the Innergy Shop
          </a>
        </motion.div>
      </div>
    </section>
  )
}
