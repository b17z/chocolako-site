"use client"

import { motion } from "framer-motion"

export function YTTClosing() {
  return (
    <section className="bg-sand py-24 md:py-32">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <motion.p
          className="font-serif italic text-2xl md:text-3xl text-cacao leading-relaxed mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          The Return Home was always available to you. This is simply the door.
        </motion.p>

        <motion.a
          href="#application"
          className="inline-block bg-gold hover:bg-gold/90 text-espresso font-sans font-medium px-10 py-4 rounded-full transition-colors text-sm uppercase tracking-wider mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Book Your Application Call
        </motion.a>

        <motion.p
          className="font-sans text-sm text-cacao/50"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Womb Wisdom & Wellbeing YTT &nbsp;|&nbsp; August 8&ndash;22, 2026
          &nbsp;|&nbsp; Bab Zouina, Morocco
        </motion.p>
      </div>
    </section>
  )
}
