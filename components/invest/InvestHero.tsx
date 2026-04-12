"use client"

import { motion } from "framer-motion"
import { staggerContainer, staggerItem } from "@/lib/animations"

export function InvestHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-espresso">
        <div className="absolute inset-0 bg-espresso/60" />
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-sand/40 text-sm tracking-widest uppercase">
            Photo: Chocolako on stage
          </p>
        </div>
      </div>

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-espresso/80 via-espresso/60 to-espresso/90" />

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
          Innergy Global, LLC
        </motion.p>

        <motion.h1
          variants={staggerItem}
          className="font-serif text-3xl md:text-5xl lg:text-6xl text-bone leading-tight mb-4"
        >
          She didn&apos;t discover a market gap.
        </motion.h1>

        <motion.h1
          variants={staggerItem}
          className="font-serif text-4xl md:text-6xl lg:text-7xl text-bone font-bold leading-tight"
        >
          She lived it.
        </motion.h1>
      </motion.div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-bone to-transparent pointer-events-none" />
    </section>
  )
}
