"use client"

import { motion } from "framer-motion"
import { staggerContainer, staggerItem } from "@/lib/animations"

const tiers = [
  {
    name: "Sovereign Path",
    room: "Private Room with Ensuite",
    price: "$7,888",
    description:
      "Your own space. Private room with ensuite bathroom. For the woman who needs solitude to integrate.",
  },
  {
    name: "Sisterhood Suite",
    room: "Shared Double Room",
    price: "$7,288",
    description:
      "Share with one other woman. Connection and companionship through the journey.",
  },
  {
    name: "Shared Blossom",
    room: "Shared Triple Room",
    price: "$6,688",
    description:
      "The most communal option. Three women sharing space, stories, and the experience.",
  },
]

export function YTTPricing() {
  return (
    <section className="bg-sand py-24 md:py-32">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="uppercase tracking-[0.2em] text-xs text-gold font-sans mb-4">
            The Investment
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-cacao mb-4">
            The investment in this premium service:
          </h2>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {tiers.map((tier) => (
            <motion.div
              key={tier.name}
              className="bg-white rounded-lg p-8 border border-cacao/10 flex flex-col"
              variants={staggerItem}
            >
              <h3 className="font-serif text-xl text-cacao mb-1">
                {tier.name}
              </h3>
              <p className="font-sans text-sm text-cacao/50 mb-6">
                {tier.room}
              </p>
              <p className="font-serif text-4xl text-gold mb-6">
                {tier.price}
              </p>
              <p className="font-sans text-sm text-cacao/70 leading-relaxed mb-8 flex-1">
                {tier.description}
              </p>
              <div className="space-y-3">
                <a
                  href="#"
                  className="block text-center bg-gold hover:bg-gold/90 text-espresso font-sans font-medium px-6 py-3 rounded-full transition-colors text-sm"
                >
                  Pay in Full
                </a>
                <a
                  href="#"
                  className="block text-center border border-gold text-gold hover:bg-gold/10 font-sans font-medium px-6 py-3 rounded-full transition-colors text-sm"
                >
                  Pay $1,000 Deposit
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <p className="font-sans text-sm text-cacao/50 text-center">
          Spots are limited. Applications reviewed on a rolling basis.
        </p>
      </div>
    </section>
  )
}
