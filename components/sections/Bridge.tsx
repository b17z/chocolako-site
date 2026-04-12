"use client"

import { motion } from "framer-motion"
import { staggerContainer, staggerItem } from "@/lib/animations"

export function Bridge() {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={staggerContainer}
      className="py-20 md:py-32 bg-cream"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          {/* Headline */}
          <motion.h2
            variants={staggerItem}
            className="font-serif text-4xl md:text-5xl text-espresso mb-12 md:mb-16"
          >
            You got here by being exceptional.
          </motion.h2>

          {/* Body paragraphs */}
          <div className="space-y-6 md:space-y-8">
            <motion.p
              variants={staggerItem}
              className="font-serif text-lg md:text-xl text-cacao/80 leading-relaxed"
            >
              The achievements. The promotions. The reputation you built through
              sheer force of will and discipline nobody saw close up.
            </motion.p>

            <motion.p
              variants={staggerItem}
              className="font-serif text-lg md:text-xl text-cacao/80 leading-relaxed"
            >
              And the body quietly absorbed all of it.
            </motion.p>

            <motion.p
              variants={staggerItem}
              className="font-serif text-lg md:text-xl text-cacao/80 leading-relaxed"
            >
              The chronic tension. The shallow breathing. The nervous system that
              stays in override even when you&rsquo;re technically safe. The
              exhaustion that a good night&rsquo;s sleep no longer fixes.
            </motion.p>

            {/* Extra breathing room before the pivot */}
            <div className="py-2 md:py-4" />

            <motion.p
              variants={staggerItem}
              className="font-serif text-xl md:text-2xl text-espresso font-medium leading-relaxed"
            >
              You don&rsquo;t need another productivity framework.
            </motion.p>

            <motion.p
              variants={staggerItem}
              className="font-serif text-xl md:text-2xl text-espresso font-medium leading-relaxed"
            >
              You need to journey to the part of yourself that&rsquo;s been
              waiting.
            </motion.p>

            {/* Extra breathing room */}
            <div className="py-2 md:py-4" />

            <motion.p
              variants={staggerItem}
              className="font-serif text-lg md:text-xl text-cacao/80 leading-relaxed"
            >
              Innergy is where high-performing women integrate their clinical
              intelligence with their somatic truth, and build success that
              doesn&rsquo;t cost their health, their joy, or their feminine
              power.
            </motion.p>

            <motion.p
              variants={staggerItem}
              className="font-serif text-lg md:text-xl text-cacao/80 leading-relaxed"
            >
              Through Somatic Feminine Intelligence&trade; and Womb
              Wisdom&trade;, we train women to live, lead, and love without
              fragmentation.
            </motion.p>
          </div>
        </div>
      </div>
    </motion.section>
  )
}
