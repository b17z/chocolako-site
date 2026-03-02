"use client"

import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion"
import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { AnimatedText } from "@/components/shared/motion"
import { ParticleField } from "@/components/shared/ParticleField"
import { GlowText } from "@/components/shared/GlowText"

export function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })
  const shouldReduceMotion = useReducedMotion()

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background with parallax */}
      <motion.div
        className="absolute inset-0 bg-espresso"
        style={{ y: shouldReduceMotion ? 0 : y }}
      >
        {/* Layered gradient for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-espresso/80 via-espresso/60 to-espresso" />

        {/* Radial glow - doorway effect */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            background: "radial-gradient(ellipse at 50% 30%, rgba(212,175,55,0.15) 0%, transparent 50%)",
          }}
        />

        {/* Secondary ambient glow */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            background: "radial-gradient(ellipse at 30% 70%, rgba(139,90,43,0.2) 0%, transparent 40%), radial-gradient(ellipse at 70% 60%, rgba(74,93,35,0.15) 0%, transparent 40%)",
          }}
        />
      </motion.div>

      {/* Floating particles */}
      <ParticleField count={25} />

      {/* Content */}
      <motion.div
        className="relative z-10 text-center px-6 max-w-4xl"
        style={{ opacity: shouldReduceMotion ? 1 : opacity }}
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gold uppercase tracking-[0.3em] text-sm mb-6"
          style={{
            textShadow: "0 0 20px rgba(212,175,55,0.3)",
          }}
        >
          Somatic Feminine Intelligence
        </motion.p>

        <GlowText
          as="h1"
          className="font-serif text-4xl md:text-6xl lg:text-7xl text-bone leading-tight"
          glowColor="rgba(212, 175, 55, 0.2)"
        >
          <AnimatedText
            as="span"
            text="Reclaim the Body as Sacred Ground for Leadership"
            className="inline"
          />
        </GlowText>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-sand text-lg md:text-xl mt-8 max-w-2xl mx-auto"
        >
          Transform your relationship with power through somatic intelligence,
          feminine lineage, and ceremonial wisdom.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mt-10"
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Button
              size="lg"
              className="bg-gold hover:bg-gold/90 text-espresso font-medium px-8 shadow-lg shadow-gold/20"
            >
              Enter Innergy
            </Button>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Button
              size="lg"
              variant="outline"
              className="border-bone text-bone bg-transparent hover:bg-bone hover:text-espresso px-8"
            >
              Explore In-Person
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator with breathing animation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{
            y: [0, 8, 0],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 rounded-full border-2 border-bone/40 flex justify-center pt-2"
          style={{
            boxShadow: "0 0 15px rgba(255,255,255,0.1)",
          }}
        >
          <motion.div className="w-1 h-2 bg-bone/60 rounded-full" />
        </motion.div>
      </motion.div>

      {/* Bottom gradient fade for section transition */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-bone to-transparent pointer-events-none" />
    </section>
  )
}
