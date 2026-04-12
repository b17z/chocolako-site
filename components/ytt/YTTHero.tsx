"use client"

import { motion } from "framer-motion"
import { staggerContainer, staggerItem } from "@/lib/animations"

export function YTTHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with warm cacao tones */}
      <div className="absolute inset-0 bg-cacao">
        <div className="absolute inset-0 bg-cacao/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-sand/40 text-sm tracking-widest uppercase">
            Photo: Ourika Valley, Morocco
          </p>
        </div>
      </div>

      {/* Warm overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-cacao/70 via-cacao/50 to-cacao/80" />

      {/* Content */}
      <motion.div
        className="relative z-10 px-6 py-24 max-w-3xl mx-auto text-center"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <motion.p
          variants={staggerItem}
          className="uppercase tracking-[0.3em] text-xs text-gold font-sans mb-10"
        >
          The Return Home
        </motion.p>

        <motion.h1
          variants={staggerItem}
          className="font-serif text-4xl md:text-6xl lg:text-7xl text-bone leading-tight mb-6"
        >
          Womb Wisdom &amp; Wellbeing YTT
        </motion.h1>

        <motion.p
          variants={staggerItem}
          className="font-serif text-lg md:text-xl text-sand/90 mb-8"
        >
          A Yoga Alliance-recognized 200-hour Feminine Focused Yoga Teacher
          Training
        </motion.p>

        <motion.div
          variants={staggerItem}
          className="inline-block rounded-full bg-bone/10 backdrop-blur-sm border border-bone/20 px-6 py-3 mb-10"
        >
          <p className="text-sm text-bone/90 font-sans tracking-wide">
            7 days online + 14 days in Morocco &middot; August 1&ndash;22, 2026
          </p>
        </motion.div>

        <motion.p
          variants={staggerItem}
          className="font-serif italic text-lg md:text-xl text-sand/80 mb-12 max-w-xl mx-auto"
        >
          Success taught you to silence your body. Now it&apos;s time to listen.
        </motion.p>

        <motion.a
          variants={staggerItem}
          href="#registration"
          className="inline-block bg-gold text-bone font-sans text-sm uppercase tracking-widest px-10 py-4 rounded-full hover:bg-gold/90 transition-colors duration-300"
        >
          Book Your Application Call
        </motion.a>
      </motion.div>

      {/* Bottom gradient fade to bone */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-bone to-transparent pointer-events-none" />
    </section>
  )
}
