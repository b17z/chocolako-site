"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { staggerContainer, staggerItem } from "@/lib/animations"

export function YTTFounder() {
  return (
    <section className="bg-cream py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* LEFT: Photo */}
          <motion.div
            className="relative aspect-[3/4] rounded-lg overflow-hidden"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" as const }}
          >
            <Image
              src="/images/ytt/founder.jpg"
              alt="Chocolako Agburu in a vibrant dance pose"
              fill
              className="object-cover"
            />
          </motion.div>

          {/* RIGHT: Bio content */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.p
              variants={staggerItem}
              className="uppercase tracking-[0.2em] text-xs text-gold font-sans mb-4"
            >
              YOUR LEAD TRAINER
            </motion.p>

            <motion.h2
              variants={staggerItem}
              className="font-serif text-3xl md:text-4xl text-cacao leading-tight mb-8"
            >
              Chocolako Agburu, MPH, MBA, E-RYT 500, YACEP
            </motion.h2>

            <motion.div variants={staggerItem} className="space-y-5">
              <p className="font-sans text-base text-cacao/80 leading-relaxed">
                15 years guiding thousands of women globally through somatic
                embodiment, nervous system regulation, and feminine wisdom
                practices. 20+ years of traditional yoga practice.
              </p>
              <p className="font-sans text-base text-cacao/80 leading-relaxed">
                Studied with wisdom keepers across Mexico, Peru, Kenya,
                Indonesia, Morocco, and Egypt. Former marketing manager at
                GlaxoSmithKline. Former hospital administrator at
                Harvard&apos;s Massachusetts General Hospital.
              </p>
              <p className="font-sans text-base text-cacao/80 leading-relaxed">
                Education: Vanderbilt University (BS), UC Berkeley (MPH), Bayes
                Business School London (MBA). Over 1,200 yoga and meditation
                certification hours.
              </p>
              <p className="font-sans text-base text-cacao/80 leading-relaxed">
                In 2021, she had 25 fibroids removed from her womb. The surgeons
                recommended a hysterectomy. She said no. She chose womb-centered
                healing and has been fibroid-free for over five years. That
                experience became the living foundation of this training.
              </p>
            </motion.div>

            <motion.p
              variants={staggerItem}
              className="font-serif italic text-lg text-rust mt-8"
            >
              If you&apos;ve made it this far, you&apos;re not here for
              Instagram-worthy poses. You&apos;re here because something in your
              body recognized something in these words.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
