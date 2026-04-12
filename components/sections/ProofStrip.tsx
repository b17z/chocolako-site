"use client"

import { motion } from "framer-motion"
import { staggerContainer, staggerItem } from "@/lib/animations"

export function ProofStrip() {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={staggerContainer}
      className="py-12 md:py-16 bg-sand"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Press */}
          <motion.div variants={staggerItem}>
            <p className="uppercase tracking-[0.2em] text-xs text-cacao/50 mb-3">
              As Seen In
            </p>
            <p className="font-serif italic text-lg md:text-xl text-cacao/70">
              The Guardian{" "}
              <span className="mx-2 not-italic text-cacao/30">&middot;</span>{" "}
              Well+Good{" "}
              <span className="mx-2 not-italic text-cacao/30">&middot;</span>{" "}
              Elephant Journal
            </p>
          </motion.div>

          {/* Partners */}
          <motion.div variants={staggerItem}>
            <p className="uppercase tracking-[0.2em] text-xs text-cacao/50 mb-3">
              Partners &amp; Affiliations
            </p>
            <p className="text-base md:text-lg text-cacao/60 leading-relaxed">
              Alo · Vuori · Jade Yoga · Four Seasons · The Yoga Barn · Bali
              Spirit Festival · Kalemana Festival · Lamu Yoga Festival
            </p>
          </motion.div>

          {/* Credentials */}
          <motion.div variants={staggerItem}>
            <p className="text-sm text-cacao/45 leading-relaxed">
              Trained at: Vanderbilt University · UC Berkeley · Bayes Business
              School London · Harvard&rsquo;s Massachusetts General Hospital ·
              GlaxoSmithKline Pharmaceuticals
            </p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}
