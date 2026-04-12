"use client"

import { motion } from "framer-motion"
import { staggerContainer, staggerItem } from "@/lib/animations"

const differentiators = [
  "Trauma-informed sequencing for the womb space.",
  "Menstrual cycle awareness as a practical teaching framework.",
  "Somatic practices for nervous system regulation through a feminine lens.",
  "Feminine archetypes as a living map for every wave of a woman's life.",
  "Sacred ritual as embodied devotion, not performance.",
]

export function YTTWhyDifferent() {
  return (
    <section className="bg-bone py-24 md:py-32">
      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h2
            variants={staggerItem}
            className="font-serif text-3xl md:text-4xl text-cacao mb-8"
          >
            Here's why this YTT is different & exists in a category of one.
          </motion.h2>

          <motion.p
            variants={staggerItem}
            className="font-sans text-base md:text-lg text-cacao/80 leading-relaxed mb-6"
          >
            Most yoga teacher trainings are built for neutral, generic,
            unspecified bodies. Bodies without cycles. Without wombs. Without the
            particular grief that lives in the pelvis or the specific
            intelligence that pulses through the feminine nervous system.
          </motion.p>

          <motion.p
            variants={staggerItem}
            className="font-sans text-base md:text-lg text-cacao/80 leading-relaxed mb-6"
          >
            You can complete a 200-hour training and never once be taught that
            your menstrual cycle is a map for energy and healing. That the womb
            holds somatic memory. That the female body processes trauma, stress,
            and transformation differently, and that every woman on your mat
            deserves a teacher who understands that distinction.
          </motion.p>

          <motion.p
            variants={staggerItem}
            className="font-serif italic text-lg text-rust mb-10"
          >
            Womb Wisdom & Wellbeing YTT was built from that distinction.
          </motion.p>

          <motion.p
            variants={staggerItem}
            className="font-sans font-bold text-sm uppercase tracking-wider text-cacao mb-6"
          >
            Our curriculum goes where others don't.
          </motion.p>

          <motion.ul variants={staggerItem} className="space-y-4 mb-10">
            {differentiators.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="text-gold flex-shrink-0 mt-1">&#9670;</span>
                <p className="font-sans text-base text-cacao/80 leading-relaxed">
                  {item}
                </p>
              </li>
            ))}
          </motion.ul>

          <motion.p
            variants={staggerItem}
            className="font-sans text-base text-cacao/80 leading-relaxed mb-10"
          >
            These aren't modules added onto an existing YTT. They are the
            nucleus of everything we teach, and the reason this training exists
            in a category of one.
          </motion.p>

          <motion.div variants={staggerItem} className="text-center">
            <a
              href="#structure"
              className="inline-block border border-gold text-gold hover:bg-gold/10 font-sans font-medium px-10 py-4 rounded-full transition-colors text-sm uppercase tracking-wider"
            >
              Learn More
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
