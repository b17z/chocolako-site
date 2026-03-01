"use client"

import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion"
import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { AnimatedText } from "@/components/shared/motion"

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
        {/* Placeholder for hero image - add actual image later */}
        <div className="absolute inset-0 bg-gradient-to-b from-espresso/80 via-espresso/60 to-espresso" />
      </motion.div>

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
        >
          Somatic Feminine Intelligence
        </motion.p>

        <AnimatedText
          as="h1"
          text="Reclaim the Body as Sacred Ground for Leadership"
          className="font-serif text-4xl md:text-6xl lg:text-7xl text-bone leading-tight"
        />

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
          <Button
            size="lg"
            className="bg-gold hover:bg-gold/90 text-espresso font-medium px-8"
          >
            Work With Me
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-bone/30 text-bone hover:bg-bone/10 px-8"
          >
            Explore Programs
          </Button>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-bone/30 flex justify-center pt-2"
        >
          <motion.div className="w-1 h-2 bg-bone/50 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  )
}
