"use client"

import { motion } from "framer-motion"
import { staggerContainer, staggerItem } from "@/lib/animations"

export function YTTWombCenter() {
  return (
    <section className="bg-bone py-24 md:py-32">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h2
            variants={staggerItem}
            className="font-serif text-3xl md:text-4xl lg:text-5xl text-cacao mb-8"
          >
            Your Womb Is Your Ultimate Creation Center
          </motion.h2>

          <motion.p
            variants={staggerItem}
            className="font-sans text-base md:text-lg text-cacao/80 leading-relaxed mb-10 max-w-2xl mx-auto"
          >
            The same intelligence that moves ocean tides moves through you. Your
            womb is not just a reproductive organ &mdash; it is your body&apos;s
            deepest center of creativity, intuition, and power. This training
            teaches you how to access it.
          </motion.p>

          <motion.a
            variants={staggerItem}
            href="#registration"
            className="inline-block font-sans text-gold hover:underline transition-all duration-300"
          >
            Start Your Journey &rarr;
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
