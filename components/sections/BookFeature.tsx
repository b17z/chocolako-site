"use client"

import { motion } from "framer-motion"
import { staggerContainer, staggerItem } from "@/lib/animations"

export function BookFeature() {
  return (
    <section className="py-24 md:py-32 bg-sand">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Book Cover Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" as const }}
          >
            <div className="aspect-[2/3] bg-white rounded-lg shadow-lg flex flex-col items-center justify-center">
              <span className="text-cacao/30 font-serif text-lg mb-2">
                Book Cover
              </span>
              <span className="text-cacao/20 font-serif text-sm text-center px-8 leading-relaxed">
                Never the Same Woman Twice
              </span>
            </div>
          </motion.div>

          {/* Right: Editorial Copy */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col"
          >
            <motion.h2
              variants={staggerItem}
              className="font-serif text-3xl md:text-4xl lg:text-5xl text-cacao leading-tight mb-8"
            >
              The book that started where the silence ended.
            </motion.h2>

            <motion.p
              variants={staggerItem}
              className="font-sans text-base text-cacao/80 leading-relaxed mb-6"
            >
              NEVER THE SAME WOMAN TWICE: The Science and Heart of Evolving into
              Yourself is for the woman who has done everything right and still
              can&apos;t explain why something feels unfinished and unfulfilled.
            </motion.p>

            <motion.p
              variants={staggerItem}
              className="font-sans text-base text-cacao/80 leading-relaxed mb-6"
            >
              It is not a self-help book. It is a real account of what it takes
              to build faith, freedom, and a sense of self after you have
              outgrown the life you worked so hard to build.
            </motion.p>

            <motion.p
              variants={staggerItem}
              className="font-sans text-base text-cacao/80 leading-relaxed mb-8"
            >
              Written from inside the experience. Honest without being heavy.
              The kind of book that gets passed to the woman in your life who
              needs it most and never comes back.
            </motion.p>

            <motion.div variants={staggerItem}>
              <a
                href="#"
                className="text-gold font-medium hover:underline underline-offset-4 transition-colors"
              >
                Get the Book
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
