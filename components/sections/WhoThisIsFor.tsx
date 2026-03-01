"use client"

import { motion, useInView, useReducedMotion } from "framer-motion"
import { useRef } from "react"
import { Check, X } from "lucide-react"
import { staggerContainer, staggerItem, reduceMotion } from "@/lib/animations"

const qualifyIn = [
  "You\u2019re a high-achieving woman in leadership who\u2019s accomplished everything \u2018right\u2019\u2014but something essential feels missing",
  "You sense there\u2019s a more sustainable, embodied way to lead but haven\u2019t found the roadmap",
  "You\u2019re ready to stop overriding your body\u2019s wisdom and start leading from wholeness",
  "You\u2019re called to reclaim practices your lineage may have lost",
  "You\u2019re willing to do the deep work\u2014not just learn concepts, but transform how you inhabit your body",
]

const qualifyOut = [
  "You\u2019re looking for quick fixes or surface-level self-care",
  "You\u2019re not ready to examine the patterns that got you here",
  "You want someone to tell you what to do rather than guide you to your own knowing",
  "You\u2019re seeking purely intellectual understanding without embodiment",
  "You\u2019re not willing to prioritize your nervous system alongside your goals",
]

export function WhoThisIsFor() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const shouldReduceMotion = useReducedMotion()

  const containerVariants = shouldReduceMotion ? reduceMotion : staggerContainer
  const itemVariants = shouldReduceMotion ? reduceMotion : staggerItem

  return (
    <section ref={ref} className="py-20 md:py-32 bg-sand">
      <div className="container mx-auto px-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-gold uppercase tracking-[0.2em] text-sm mb-4 text-center"
        >
          Is This For You?
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-serif text-3xl md:text-4xl lg:text-5xl text-espresso mb-12 md:mb-16 text-center max-w-3xl mx-auto"
        >
          Let&apos;s make sure we&apos;re the right fit
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
          {/* Qualify In Column */}
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
            className="bg-bone rounded-2xl p-8 md:p-10"
          >
            <h3 className="font-serif text-2xl md:text-3xl text-espresso mb-8">
              This is for you if...
            </h3>
            <ul className="space-y-5">
              {qualifyIn.map((item, index) => (
                <motion.li
                  key={index}
                  variants={itemVariants}
                  className="flex items-start gap-4"
                >
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-jungle/10 flex items-center justify-center mt-0.5">
                    <Check className="w-4 h-4 text-jungle" strokeWidth={3} />
                  </span>
                  <span className="text-espresso/80 leading-relaxed">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Qualify Out Column */}
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
            className="bg-bone rounded-2xl p-8 md:p-10"
          >
            <h3 className="font-serif text-2xl md:text-3xl text-espresso mb-8">
              This isn&apos;t for you if...
            </h3>
            <ul className="space-y-5">
              {qualifyOut.map((item, index) => (
                <motion.li
                  key={index}
                  variants={itemVariants}
                  className="flex items-start gap-4"
                >
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-cacao/10 flex items-center justify-center mt-0.5">
                    <X className="w-4 h-4 text-cacao" strokeWidth={3} />
                  </span>
                  <span className="text-espresso/80 leading-relaxed">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
