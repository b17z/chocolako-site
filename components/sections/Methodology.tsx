"use client"

import { motion, useInView, useReducedMotion } from "framer-motion"
import { useRef } from "react"
import { staggerContainer, staggerItem, reduceMotion } from "@/lib/animations"

const columns = [
  {
    label: "THE SCIENCE",
    text: "Polyvagal theory. Interoception. Nervous system regulation. Trauma-informed somatics. We don\u2019t bypass the body. We restore its intelligence. SFI integrates evidence-based practices from neuroscience, somatic psychology, and embodied cognition research into a framework women can carry into every domain of their lives.",
  },
  {
    label: "THE LINEAGE",
    text: "Womb-centered practices. Ritual as regulation. Cultural memory as resource and restoration. Rooted in African and global feminine wisdom traditions passed across generations of women who knew the body as a site of knowledge, not a problem to be managed. Your womb holds intelligence your mind cannot access alone.",
  },
  {
    label: "THE APPLICATION",
    text: "Boardroom presence. Executive resilience. Institutional influence. Leadership that compounds instead of depletes. SFI-trained women navigate conflict without dysregulation. They make decisions from somatic intelligence. They hold power that does not require their health as the price.",
  },
]

export function Methodology() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const shouldReduceMotion = useReducedMotion()

  const containerVariants = shouldReduceMotion ? reduceMotion : staggerContainer
  const itemVariants = shouldReduceMotion ? reduceMotion : staggerItem

  return (
    <section className="py-20 md:py-32 bg-espresso relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-bone mb-8">
            Somatic Feminine Intelligence&trade;
          </h2>
          <p className="text-bone/80 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed mb-6">
            A new category. The first methodology to bring nervous system science,
            embodied feminine wisdom, and institutional leadership into one coherent
            system.
          </p>
          <p className="text-bone/70 max-w-3xl mx-auto text-base md:text-lg leading-relaxed">
            This is not alternative wellness. It is applied somatic science with
            age-old feminine intelligence at its foundation.
          </p>
        </motion.div>

        {/* Three-column grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16 md:mb-20"
        >
          {columns.map((col) => (
            <motion.div key={col.label} variants={itemVariants}>
              <p className="text-gold uppercase tracking-widest text-sm mb-4">
                {col.label}
              </p>
              <p className="text-bone/90 leading-relaxed">{col.text}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Closing quote + CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <p className="font-serif italic text-xl md:text-2xl lg:text-3xl text-bone/90 mb-8">
            Embodiment is not escape. It is strategy.
          </p>
          <a
            href="#"
            className="text-gold hover:text-gold/80 transition-colors text-base md:text-lg tracking-wide"
          >
            Read the Full SFI Framework
          </a>
        </motion.div>
      </div>
    </section>
  )
}
