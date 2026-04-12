"use client"

import { motion } from "framer-motion"
import { staggerContainer, staggerItem } from "@/lib/animations"

const gains = [
  "Daily embodiment practices synced with your inner seasons",
  "Renewed body communication and tools to rebuild safety in your nervous system",
  "Nervous system skills for authentic, grounded teaching",
  "A sisterhood of women doing this work at depth across the world",
  "Skills to recognize and release people-pleasing, self-abandonment, and over-giving",
  "Reclamation of your embodied femininity &mdash; not as concept, but as lived experience",
]

export function YTTGains() {
  return (
    <section className="bg-sand py-24 md:py-32">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="font-serif text-3xl md:text-4xl text-cacao mb-16">
          What You&apos;ll Gain
        </h2>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-6"
        >
          {gains.map((gain, i) => (
            <motion.div key={i} variants={staggerItem} className="flex items-start gap-4">
              <span className="text-gold mt-1">&#10003;</span>
              <p className="font-sans text-base md:text-lg text-cacao/80 leading-relaxed">
                {gain}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
