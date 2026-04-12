"use client"

import { motion } from "framer-motion"
import { staggerContainer, staggerItem } from "@/lib/animations"

const traits = [
  "You feel done with performative yoga culture and want to teach from embodied truth",
  "You want to be student, healer, and guide simultaneously",
  "You yearn for a feminine-focused roadmap through the stages of your life",
  "You feel numb or disconnected from your womb and want to find your way back",
  "You thrive in women's community and learn best in sisterhood",
  "You're ready for the kind of training that changes your life, not just your resume",
]

export function YTTWhoIsFor() {
  return (
    <section className="bg-cream py-24 md:py-32">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="font-serif text-3xl md:text-4xl text-cacao mb-16">
          This training is for the woman who&hellip;
        </h2>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-6"
        >
          {traits.map((trait, i) => (
            <motion.div key={i} variants={staggerItem} className="flex items-start gap-4">
              <span className="text-gold mt-1 text-lg">&#9670;</span>
              <p className="font-sans text-base md:text-lg text-cacao/80 leading-relaxed">
                {trait}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
