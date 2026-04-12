"use client"

import { motion, useInView, useReducedMotion } from "framer-motion"
import { useRef } from "react"
import { staggerContainer, staggerItem, reduceMotion } from "@/lib/animations"

interface JournalCard {
  title: string
  excerpt: string
}

const cards: JournalCard[] = [
  {
    title: "What Your Cortisol Is Actually Telling You About Your Cycle",
    excerpt:
      "The connection your OB-GYN probably didn\u2019t explain. A public health perspective on the hormonal conversation most women never get to have.",
  },
  {
    title: "The Day I Gave Notice at Massachusetts General Hospital",
    excerpt:
      "People called it brave. Some called it reckless. I called it the first honest decision I\u2019d made in years.",
  },
  {
    title: "Why Western Wellness Doesn\u2019t Work for Every Woman\u2019s Body",
    excerpt:
      "What happens when an entire industry is built around one kind of body, one cultural framework, one definition of healing, and who gets left out.",
  },
]

export function FeaturedContent() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const shouldReduceMotion = useReducedMotion()

  const containerVariants = shouldReduceMotion ? reduceMotion : staggerContainer
  const itemVariants = shouldReduceMotion ? reduceMotion : staggerItem

  return (
    <section className="py-24 md:py-32 bg-cream">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" as const }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-3xl md:text-5xl text-cacao mb-4">
            The work, in writing.
          </h2>
          <p className="text-cacao/70 text-lg max-w-2xl mx-auto">
            Ideas that carry further than most wellness content, because they
            come from somewhere deeper than a content calendar.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
        >
          {cards.map((card) => (
            <motion.div
              key={card.title}
              variants={itemVariants}
              className="bg-white p-8 rounded-lg border-t-2 border-gold"
            >
              <h3 className="font-serif font-semibold text-xl text-cacao mb-4">
                {card.title}
              </h3>
              <p className="text-base text-cacao/70 leading-relaxed mb-6">
                {card.excerpt}
              </p>
              <span className="text-rust font-medium text-sm cursor-pointer hover:underline">
                Read &rarr;
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" as const }}
          className="text-center"
        >
          <a
            href="#"
            className="text-gold font-medium hover:underline transition-colors"
          >
            Read More on the Journal
          </a>
        </motion.div>
      </div>
    </section>
  )
}
