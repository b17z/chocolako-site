"use client"

import { motion } from "framer-motion"
import { staggerContainer, staggerItem } from "@/lib/animations"

export function EmailOptIn() {
  return (
    <section className="py-24 md:py-32 bg-sand">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-2xl mx-auto px-6 text-center"
      >
        <motion.h2
          variants={staggerItem}
          className="font-serif text-3xl md:text-4xl lg:text-5xl text-cacao leading-tight mb-6"
        >
          What your body already knows.
        </motion.h2>

        <motion.p
          variants={staggerItem}
          className="font-sans text-base text-cacao/80 leading-relaxed mb-10"
        >
          A free guide on the age-old cyclical intelligence that public health
          science confirms but rarely teaches. Practical, rigorous, and written
          for women who want the evidence alongside the wisdom.
        </motion.p>

        <motion.span
          variants={staggerItem}
          className="inline-block text-gold text-xs font-medium tracking-widest uppercase mb-3"
        >
          Free Download
        </motion.span>

        <motion.p
          variants={staggerItem}
          className="font-serif italic text-lg md:text-xl text-cacao leading-relaxed mb-10"
        >
          What Your Womb Already Knows: A Public Health Perspective on Cyclical
          Intelligence
        </motion.p>

        <motion.form
          variants={staggerItem}
          onSubmit={(e) => e.preventDefault()}
          className="flex flex-col sm:flex-row gap-3 mb-0"
        >
          <input
            type="text"
            placeholder="First name"
            className="flex-1 bg-white border border-sand rounded px-4 py-3 text-cacao placeholder:text-cacao/40 focus:border-gold focus:outline-none transition-colors"
          />
          <input
            type="email"
            placeholder="Email address"
            className="flex-1 bg-white border border-sand rounded px-4 py-3 text-cacao placeholder:text-cacao/40 focus:border-gold focus:outline-none transition-colors"
          />
          <button
            type="submit"
            className="bg-cacao text-bone rounded px-8 py-3 font-medium hover:bg-cacao/90 transition-colors whitespace-nowrap"
          >
            Send me the guide
          </button>
        </motion.form>
      </motion.div>
    </section>
  )
}
