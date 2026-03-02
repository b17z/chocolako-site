"use client"

import { motion, useInView, useReducedMotion } from "framer-motion"
import { useRef } from "react"
import { fadeInUp, reduceMotion } from "@/lib/animations"
import { Button } from "@/components/ui/button"

export function Founder() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const shouldReduceMotion = useReducedMotion()

  const variants = shouldReduceMotion ? reduceMotion : fadeInUp

  return (
    <section className="py-20 md:py-32 bg-bone">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={variants}
          className="grid md:grid-cols-2 gap-12 md:gap-16 lg:gap-20 items-center max-w-6xl mx-auto"
        >
          {/* Image Placeholder - Left on desktop, Bottom on mobile (via order) */}
          <motion.div
            variants={variants}
            className="order-2 md:order-1"
          >
            <div className="aspect-[4/5] bg-sand rounded-lg flex items-center justify-center">
              <span className="text-espresso/30 font-serif text-lg">
                Editorial Portrait
              </span>
            </div>
          </motion.div>

          {/* Bio Content - Right on desktop, Top on mobile (via order) */}
          <motion.div
            variants={variants}
            className="order-1 md:order-2"
          >
            {/* Tag */}
            <p className="text-gold uppercase tracking-[0.2em] text-sm mb-4">
              The Founder
            </p>

            {/* Name */}
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-espresso mb-3">
              Chocolako
            </h2>

            {/* Title */}
            <p className="text-cacao font-medium text-lg md:text-xl mb-8">
              Somatic Leadership Guide & SFI Creator
            </p>

            {/* Bio Paragraphs */}
            <div className="space-y-6 mb-10">
              <p className="text-espresso/80 leading-relaxed">
                Chocolako spent two decades in high-performance environments—from corporate boardrooms to international stages—before her body finally demanded she find another way.
              </p>

              <p className="text-espresso/80 leading-relaxed">
                What emerged from that reckoning became Somatic Feminine Intelligence: a methodology weaving neuroscience, feminine wisdom traditions, and leadership application into a path for women ready to lead without burning out.
              </p>

              <p className="text-espresso/80 leading-relaxed">
                She has guided thousands of women across six continents through retreats, trainings, and transformational programs. Her work has been featured in Forbes, Vogue, and TEDx stages worldwide.
              </p>
            </div>

            {/* CTA Button */}
            <Button
              variant="outline"
              className="border-cacao text-cacao hover:bg-cacao/10"
            >
              Learn More About Chocolako
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
