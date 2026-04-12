"use client"

import { motion } from "framer-motion"
import { staggerContainer, staggerItem } from "@/lib/animations"

const included = [
  "200-hour tuition & certification readiness",
  "Yoga Alliance & Innergy Collective certification",
  "250-page color teaching manual",
  "Sound healing & cacao ceremony",
  "Marrakech market tour & sightseeing",
  "Airport roundtrip transportation",
  "All excursion transportation",
  "Accommodation at Bab Zouina",
  "Vegetarian/plant-based meals & beverages",
  "Hammam, pool, tennis court, fire pit access",
  "Shiatsu massage availability",
]

const notIncluded = [
  "Flights to Marrakech (RAK airport)",
  "Visa costs & immigration fees",
  "Medical & travel insurance",
  "Activities outside the program",
  "Extra accommodation days before/after",
]

export function YTTInclusions() {
  return (
    <section className="bg-cream py-24 md:py-32">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="font-serif text-3xl md:text-4xl text-cacao mb-16 text-center">
          What&apos;s Included
        </h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-12"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={staggerItem}>
            <h3 className="font-sans font-bold text-sm uppercase tracking-wider text-cacao mb-6">
              Included
            </h3>
            <ul className="space-y-3">
              {included.map((item) => (
                <li
                  key={item}
                  className="font-sans text-sm text-cacao/70 flex items-start gap-3"
                >
                  <span className="text-gold flex-shrink-0">&#10003;</span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={staggerItem}>
            <h3 className="font-sans font-bold text-sm uppercase tracking-wider text-cacao/60 mb-6">
              Not Included
            </h3>
            <ul className="space-y-3">
              {notIncluded.map((item) => (
                <li
                  key={item}
                  className="font-sans text-sm text-cacao/70 flex items-start gap-3"
                >
                  <span className="text-cacao/30 flex-shrink-0">&#10007;</span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
