"use client"

import { motion } from "framer-motion"
import { staggerContainer, staggerItem } from "@/lib/animations"

const lines = [
  "She craves cycles",
  "She thrives on rest",
  "She needs to feel safe, sacred and held",
  "She longs to be recognized and revered",
]

export function YTTFeminineBody() {
  return (
    <section className="bg-sand py-24 md:py-32">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="font-serif text-3xl md:text-4xl text-cacao mb-16">
          Have You Noticed the Expressions of Your Feminine Body?
        </h2>

        <motion.div
          className="space-y-10"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {lines.map((line, index) => (
            <motion.p
              key={index}
              variants={staggerItem}
              className="font-serif italic text-2xl md:text-3xl lg:text-4xl text-cacao/70"
            >
              {line}
            </motion.p>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
