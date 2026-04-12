"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { staggerContainer, staggerItem } from "@/lib/animations"

const commitments = [
  {
    title: "Human Equilibrium",
    description:
      "No aggressive early morning sessions. The pace matches the mountain rhythms. Your nervous system sets the tempo.",
  },
  {
    title: "Community Impact",
    description:
      "Meals support local Berber families. A portion of every enrollment funds education for mountain children.",
  },
  {
    title: "Sustainability",
    description:
      "Solar power, rainwater harvesting, organic gardens, zero waste practices. The land is honored, not consumed.",
  },
]

const amenities = [
  "Traditional Moroccan architecture",
  "Mountain views from practice spaces",
  "Hammam (steam bath)",
  "Rooftop terraces",
  "Farm-to-table meals",
  "Swimming pool",
  "Tennis court",
  "Walking distance to Berber villages",
]

export function YTTVenue() {
  return (
    <section className="bg-sand py-24 md:py-32">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="uppercase tracking-[0.2em] text-xs text-gold font-sans mb-4">
            THE SETTING
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-cacao mb-4">
            Bab Zouina
          </h2>
          <p className="font-sans text-base text-cacao/70">
            Ourika Valley, Atlas Mountains, Morocco
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="relative aspect-[21/9] rounded-lg overflow-hidden mb-16"
        >
          <Image
            src="/images/ytt/closing-1.jpg"
            alt="Women gathered in ceremony at Bab Zouina"
            fill
            className="object-cover"
          />
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
        >
          {commitments.map((item, i) => (
            <motion.div
              key={i}
              variants={staggerItem}
              className="bg-white rounded-lg p-6 border border-cacao/10"
            >
              <h3 className="font-serif text-lg text-cacao mb-2">
                {item.title}
              </h3>
              <p className="font-sans text-sm text-cacao/70 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="uppercase tracking-[0.2em] text-xs text-gold font-sans mb-6">
            ON THE GROUNDS
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {amenities.map((amenity, i) => (
              <span
                key={i}
                className="font-sans text-sm bg-white text-cacao/70 px-4 py-2 rounded-full border border-cacao/10"
              >
                {amenity}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
