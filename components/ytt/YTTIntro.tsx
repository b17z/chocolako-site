"use client"

import { motion } from "framer-motion"
import { staggerContainer, staggerItem } from "@/lib/animations"

export function YTTIntro() {
  return (
    <section className="bg-bone py-24 md:py-32">
      <motion.div
        className="max-w-3xl mx-auto px-6"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.p
          variants={staggerItem}
          className="font-serif text-xl md:text-2xl text-cacao leading-relaxed mb-8"
        >
          Imagine waking up and feeling safe in your body, seen in your truth,
          and free to build a life rooted in meaning, not just momentum.
        </motion.p>

        <motion.p
          variants={staggerItem}
          className="font-sans text-base md:text-lg text-cacao/80 leading-relaxed mb-8"
        >
          If health is the highest form of wealth, how do you choose to invest
          the energy of this one life?
        </motion.p>

        <motion.p
          variants={staggerItem}
          className="font-sans text-base md:text-lg text-cacao/80 leading-relaxed mb-8"
        >
          Your body knows the answer. Your radiance is the evidence. And
          everything that broke you open is not the wound — it's the wisdom.
        </motion.p>

        <motion.p
          variants={staggerItem}
          className="font-serif italic text-xl md:text-2xl text-rust leading-relaxed"
        >
          Your Return Home is more than a destination. It's a remembering of
          who you are becoming along the way.
        </motion.p>
      </motion.div>
    </section>
  )
}
