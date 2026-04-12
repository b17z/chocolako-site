"use client"

import { motion } from "framer-motion"
import { staggerContainer, staggerItem } from "@/lib/animations"

export function YTTApplicationCall() {
  return (
    <section id="application" className="bg-cream py-24 md:py-32">
      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.p
            variants={staggerItem}
            className="uppercase tracking-[0.2em] text-xs text-gold font-sans mb-4"
          >
            What Happens Next
          </motion.p>

          <motion.h2
            variants={staggerItem}
            className="font-serif text-3xl md:text-4xl text-cacao leading-tight mb-8"
          >
            The application call is thirty minutes with a member of The Innergy
            Global Sales Team
          </motion.h2>

          <motion.div variants={staggerItem} className="space-y-5 mb-12">
            <p className="font-sans text-base md:text-lg text-cacao/80 leading-relaxed">
              You'll speak directly with Chocolako or a senior member of her
              team. You'll share your goals, and what you're building for your
              life. We'll tell you exactly what this training offers and whether
              the timing and the fit make sense for you right now.
            </p>
            <p className="font-sans text-base md:text-lg text-cacao/80 leading-relaxed">
              If it's right, we'll talk next steps. If it's not, we'll tell you
              that honestly — and point you toward what might be.
            </p>
            <p className="font-serif italic text-lg text-rust">
              This is not a sales call. It's a real conversation between two
              people who both want the outcome to be correct.
            </p>
          </motion.div>

          <motion.div variants={staggerItem} className="text-center">
            <a
              href="#"
              className="inline-block bg-gold hover:bg-gold/90 text-espresso font-sans font-medium px-10 py-4 rounded-full transition-colors text-sm uppercase tracking-wider mb-8"
            >
              Book Your Application Call
            </a>

            <div className="space-y-1">
              <p className="font-sans text-sm text-cacao/60">
                August 8–22, 2026 &nbsp;|&nbsp; Bab Zouina, Ourika Valley,
                Morocco
              </p>
              <p className="font-sans text-sm text-cacao/50">
                Online pre-immersion begins July 2026
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
