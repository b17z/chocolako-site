"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { staggerContainer, staggerItem } from "@/lib/animations"

export function YTTVenue() {
  return (
    <section className="bg-sand py-24 md:py-32">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="uppercase tracking-[0.2em] text-xs text-gold font-sans mb-4">
            The Location
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-cacao mb-4">
            Bab Zouina means The Beautiful Door.
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
          className="space-y-5 mb-16"
        >
          <motion.p
            variants={staggerItem}
            className="font-sans text-base md:text-lg text-cacao/80 leading-relaxed"
          >
            That is what the name means in Moroccan Arabic. And when you arrive,
            you'll understand why it was named that.
          </motion.p>

          <motion.p
            variants={staggerItem}
            className="font-sans text-base md:text-lg text-cacao/80 leading-relaxed"
          >
            Bab Zouina sits at the foot of the Atlas Mountains in the Ourika
            Valley — surrounded by olive trees, fruit trees, jasmine and
            bougainvillea, lavender and thyme hedges threading through a garden
            designed to hold you the moment you walk in. The air here carries
            the mountains. The light changes four times a day and every time it
            does, something shifts.
          </motion.p>

          <motion.p
            variants={staggerItem}
            className="font-sans text-base md:text-lg text-cacao/80 leading-relaxed"
          >
            The property has two full yoga shalas, equipped for every style of
            practice you'll move through during the training. There are two
            rooftops facing the Atlas Mountains where morning practice happens
            against a sky that reminds you what scale actually feels like. There
            is a traditional hammam built from marble and Atlas clay that forms
            part of the ceremonial structure of the week. This is a genuine
            purification ritual.
          </motion.p>

          <motion.p
            variants={staggerItem}
            className="font-sans text-base md:text-lg text-cacao/80 leading-relaxed"
          >
            Three meals per day are prepared from Bab Zouina's own vegetable
            garden and local Moroccan produce. You eat well, slowly, and with
            intention. Family style because the communal table is part of the
            African Way.
          </motion.p>

          <motion.p
            variants={staggerItem}
            className="font-sans text-base md:text-lg text-cacao/80 leading-relaxed"
          >
            Bab Zouina was built first as a home. It grew into a retreat
            facility. That sequence matters. It is held with the warmth of a
            home — human equilibrium, community, and the kind of care for its
            land and the surrounding Ourika valley villages that you feel the
            moment you arrive.
          </motion.p>

          <motion.p
            variants={staggerItem}
            className="font-sans text-base md:text-lg text-cacao/80 leading-relaxed"
          >
            It is an hour from Marrakesh. And a world away from everything
            you're carrying when you land.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="font-serif italic text-xl md:text-2xl text-cacao mb-2">
            You will not leave the same woman who arrived.
          </p>
          <p className="font-serif italic text-lg text-rust">
            Bab Zouina has never let anyone stay the same.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
