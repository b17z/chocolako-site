"use client"

import { motion } from "framer-motion"
import { staggerContainer, staggerItem } from "@/lib/animations"

export function YTTModules() {
  return (
    <section className="bg-bone py-24 md:py-32">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="uppercase tracking-[0.2em] text-xs text-gold font-sans mb-4">
            CURRICULUM
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-cacao">
            Five Core Learning Modules
          </h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-6"
        >
          {/* Module 01 */}
          <motion.div variants={staggerItem} className="bg-white rounded-lg p-8 border border-cacao/10">
            <div className="flex flex-col md:flex-row md:items-start gap-6">
              <span className="font-serif text-4xl text-gold/60 leading-none md:w-16 flex-shrink-0">01</span>
              <div>
                <h3 className="font-serif text-xl md:text-2xl text-cacao mb-3">
                  Anatomy &amp; Physiology
                </h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="font-sans text-xs bg-gold/10 text-gold px-3 py-1 rounded-full">Self-Guided Virtual</span>
                  <span className="font-sans text-xs bg-cacao/5 text-cacao/60 px-3 py-1 rounded-full">August 1&ndash;7</span>
                  <span className="font-sans text-xs bg-cacao/5 text-cacao/60 px-3 py-1 rounded-full">20 hours</span>
                </div>
                <p className="font-sans text-base text-cacao/80 leading-relaxed">
                  Learn the relationship between body structure and function with a UK Osteopath. Build the anatomical foundation you need to teach safely and intelligently.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Module 02 */}
          <motion.div variants={staggerItem} className="bg-cream rounded-lg p-8 border border-cacao/10">
            <div className="flex flex-col md:flex-row md:items-start gap-6">
              <span className="font-serif text-4xl text-gold/60 leading-none md:w-16 flex-shrink-0">02</span>
              <div>
                <h3 className="font-serif text-xl md:text-2xl text-cacao mb-3">
                  Pelvic Intelligence &mdash; The Womb as Portal
                </h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="font-sans text-xs bg-gold/10 text-gold px-3 py-1 rounded-full">Self-Guided + Virtual</span>
                  <span className="font-sans text-xs bg-cacao/5 text-cacao/60 px-3 py-1 rounded-full">August 1&ndash;7</span>
                  <span className="font-sans text-xs bg-cacao/5 text-cacao/60 px-3 py-1 rounded-full">20 hours</span>
                </div>
                <p className="font-sans text-base text-cacao/80 leading-relaxed">
                  Pelvic anatomy, physiology, and energetics. Sacred transitions throughout womanhood. Somatic techniques and rituals for womb reconnection.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Module 03 */}
          <motion.div variants={staggerItem} className="bg-white rounded-lg p-8 border border-cacao/10">
            <div className="flex flex-col md:flex-row md:items-start gap-6">
              <span className="font-serif text-4xl text-gold/60 leading-none md:w-16 flex-shrink-0">03</span>
              <div>
                <h3 className="font-serif text-xl md:text-2xl text-cacao mb-3">
                  Embodied Womb Wise Leader &amp; Yoga Teacher
                </h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="font-sans text-xs bg-gold/10 text-gold px-3 py-1 rounded-full">Morocco Immersion</span>
                  <span className="font-sans text-xs bg-cacao/5 text-cacao/60 px-3 py-1 rounded-full">August 8&ndash;22</span>
                  <span className="font-sans text-xs bg-cacao/5 text-cacao/60 px-3 py-1 rounded-full">60 hours</span>
                </div>
                <p className="font-sans text-base text-cacao/80 leading-relaxed">
                  14 days anchored in the 8-limbs of yoga. Feminine wisdom leadership development. Teaching methodology rooted in somatic truth, not performance.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Module 04 */}
          <motion.div variants={staggerItem} className="bg-cream rounded-lg p-8 border border-cacao/10">
            <div className="flex flex-col md:flex-row md:items-start gap-6">
              <span className="font-serif text-4xl text-gold/60 leading-none md:w-16 flex-shrink-0">04</span>
              <div>
                <h3 className="font-serif text-xl md:text-2xl text-cacao mb-3">
                  8-Limbs of Yoga &amp; Business of Yoga
                </h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="font-sans text-xs bg-gold/10 text-gold px-3 py-1 rounded-full">Morocco Immersion</span>
                  <span className="font-sans text-xs bg-cacao/5 text-cacao/60 px-3 py-1 rounded-full">August 8&ndash;22</span>
                  <span className="font-sans text-xs bg-cacao/5 text-cacao/60 px-3 py-1 rounded-full">50 hours</span>
                </div>
                <p className="font-sans text-base text-cacao/80 leading-relaxed">
                  Foundational philosophy study through the lens of the feminine body. Teaching framework, sequencing, and the business essentials of building a yoga practice.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Module 05 */}
          <motion.div variants={staggerItem} className="bg-white rounded-lg p-8 border border-cacao/10">
            <div className="flex flex-col md:flex-row md:items-start gap-6">
              <span className="font-serif text-4xl text-gold/60 leading-none md:w-16 flex-shrink-0">05</span>
              <div>
                <h3 className="font-serif text-xl md:text-2xl text-cacao mb-3">
                  Feminine Wellbeing Rituals
                </h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="font-sans text-xs bg-gold/10 text-gold px-3 py-1 rounded-full">Morocco Immersion</span>
                  <span className="font-sans text-xs bg-cacao/5 text-cacao/60 px-3 py-1 rounded-full">August 8&ndash;22</span>
                  <span className="font-sans text-xs bg-cacao/5 text-cacao/60 px-3 py-1 rounded-full">50 hours</span>
                </div>
                <p className="font-sans text-base text-cacao/80 leading-relaxed">
                  Moon ceremonies, womb wellness practices, cacao rituals. Daily practices honoring feminine cycles. The living traditions that anchor this work in lineage.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
