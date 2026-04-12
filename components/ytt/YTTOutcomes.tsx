"use client"

import { motion } from "framer-motion"
import { staggerContainer, staggerItem } from "@/lib/animations"

const outcomes = [
  "Reconnect to the deep somatic intelligence of your womb and finally understand the signals your body communicates to you and through you",
  "Release stored grief, shame, and unprocessed experience living in your body through practices designed specifically for the female nervous system",
  "Replace chronic depletion with a feminine framework for energy that restores as powerfully as it generates",
  "Develop an unshakeable relationship with your own body — one built on trust, safety, and the kind of self-knowing that no external validation can touch",
  "Reclaim your emotional authority and stop abandoning yourself in the service of everyone else's needs",
  "Find your place inside a community of women doing real work — not a network, not a following, a genuine circle of belonging",
  "Move through your own cycle of womanhood with embodied tools that work at the level where real transformation lives",
  "Step into the fullest, most grounded expression of who you are and offer that same profound awakening to every woman around you",
  "Become a certified Yoga Teacher specializing in Feminine Embodiment and the intelligence of the womb",
]

export function YTTOutcomes() {
  return (
    <section className="bg-sand py-24 md:py-32">
      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h2
            variants={staggerItem}
            className="font-serif text-2xl md:text-3xl text-cacao leading-snug mb-4"
          >
            The Womb Wisdom & Wellbeing YTT is where feminine intelligence
            meets the embodied science of the female body.
          </motion.h2>

          <motion.p
            variants={staggerItem}
            className="font-sans font-bold text-sm uppercase tracking-wider text-cacao mb-10"
          >
            In this training you will:
          </motion.p>

          <motion.div variants={staggerItem} className="space-y-6 mb-12">
            {outcomes.map((outcome, i) => (
              <div key={i} className="flex items-start gap-4">
                <span className="text-gold mt-1 text-lg flex-shrink-0">+</span>
                <p className="font-sans text-base md:text-lg text-cacao/80 leading-relaxed">
                  {outcome}
                </p>
              </div>
            ))}
          </motion.div>

          <motion.p
            variants={staggerItem}
            className="font-serif italic text-xl md:text-2xl text-cacao leading-relaxed mb-12"
          >
            The Womb Wisdom Yoga Teacher Training is a transformation you move
            through in your body, your practice, and your purpose.
          </motion.p>

          <motion.div
            variants={staggerItem}
            className="border-l-2 border-gold pl-6 md:pl-8"
          >
            <p className="text-lg md:text-xl font-serif italic leading-relaxed text-cacao mb-4">
              &ldquo;Most teacher trainings are what you do for a certificate.
              Chocolako's training is what you do for your life. She teaches you
              how to live yoga.&rdquo;
            </p>
            <footer>
              <span className="font-sans text-sm text-cacao/60">
                — Librette, USA
              </span>
            </footer>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
