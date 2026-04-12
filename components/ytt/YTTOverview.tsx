"use client"

import { motion } from "framer-motion"
import { staggerContainer, staggerItem } from "@/lib/animations"

export function YTTOverview() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h2
            variants={staggerItem}
            className="font-serif text-3xl md:text-4xl text-cacao mb-4"
          >
            This is where feminine wisdom meets embodiment and lifelong skills.
          </motion.h2>

          <motion.p
            variants={staggerItem}
            className="font-sans text-base md:text-lg text-cacao/80 leading-relaxed mb-6"
          >
            The Womb Wisdom &amp; Wellbeing Yoga Teacher Training is not a
            certification you hang on a wall. It is a transformation you carry in
            your body. Over 21 days &mdash; 7 online and 14 immersed in the
            Atlas Mountains of Morocco &mdash; you will learn to teach yoga from
            a place of somatic truth, not performative posture.
          </motion.p>

          <motion.p
            variants={staggerItem}
            className="font-sans text-base md:text-lg text-cacao/80 leading-relaxed mb-8"
          >
            You will study anatomy through the lens of the feminine body. You
            will learn pelvic intelligence, nervous system regulation, and the
            sacred transitions of womanhood. You will practice holding space
            &mdash; for yourself first, and then for the women you are called to
            guide.
          </motion.p>

          <motion.p
            variants={staggerItem}
            className="font-serif italic text-xl md:text-2xl text-rust"
          >
            You will leave as a different woman than the one who arrived. That is
            not a marketing promise. It is what happens when twenty women gather
            in Morocco with this level of intention.
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
