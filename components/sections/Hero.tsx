"use client"

import { motion } from "framer-motion"
import { staggerContainer, staggerItem } from "@/lib/animations"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background — placeholder for full-bleed ceremony photo */}
      <div className="absolute inset-0 bg-espresso">
        <div className="absolute inset-0 bg-espresso/60" />
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-sand/40 text-sm tracking-widest uppercase">
            Photo: Chocolako in ceremony
          </p>
        </div>
      </div>

      {/* Warm semi-transparent overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-espresso/70 via-espresso/50 to-espresso/80" />

      {/* Content */}
      <motion.div
        className="relative z-10 px-6 py-24 max-w-2xl mx-auto text-center"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        {/* Small caps label */}
        <motion.p
          variants={staggerItem}
          className="uppercase tracking-[0.3em] text-xs text-gold font-sans mb-8"
        >
          Innergy by Chocolako®
        </motion.p>

        {/* Headline */}
        <motion.h1
          variants={staggerItem}
          className="font-serif text-4xl md:text-6xl lg:text-7xl text-bone leading-tight mb-6"
        >
          Journey Back to Yourself.
        </motion.h1>

        {/* Italic subhead */}
        <motion.p
          variants={staggerItem}
          className="font-serif italic text-lg md:text-xl text-sand mb-12"
        >
          Where the science of health meets the soul of healing.
        </motion.p>

        {/* Body paragraphs */}
        <motion.div
          variants={staggerItem}
          className="space-y-4 text-sand/90 font-sans text-base md:text-lg leading-relaxed mb-10"
        >
          <p>High performance taught you to override your body.</p>
          <p>
            You built the career. Led the teams. Managed the complexity.
          </p>
          <p>
            And somewhere inside all that capability, something went quiet.
          </p>
          <p>
            Not a breakdown. Just a steady, low question that follows you into
            meetings and into the mirror.
          </p>
        </motion.div>

        {/* Pull quote */}
        <motion.blockquote
          variants={staggerItem}
          className="border-l-4 border-gold pl-6 my-12 text-left"
        >
          <p className="font-serif italic text-xl md:text-2xl text-bone">
            &ldquo;Is this actually it?&rdquo;
          </p>
        </motion.blockquote>

        {/* Closing */}
        <motion.p
          variants={staggerItem}
          className="text-sand/90 font-sans text-base md:text-lg leading-relaxed mb-12"
        >
          If you&apos;ve felt that, you&apos;re not lost. You&apos;re aware and
          ready for something that feels better.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          variants={staggerItem}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.a
            href="#quiz"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Button
              size="lg"
              className="bg-gold hover:bg-gold/90 text-espresso font-medium px-8"
            >
              Find Your Path
            </Button>
          </motion.a>
          <motion.a
            href="#paths"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Button
              size="lg"
              variant="outline"
              className="border-bone text-bone bg-transparent hover:bg-bone hover:text-espresso px-8"
            >
              Explore the Work
            </Button>
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Bottom gradient fade for section transition */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-bone to-transparent pointer-events-none" />
    </section>
  )
}
