"use client"

import { motion, useInView, useReducedMotion } from "framer-motion"
import { useRef } from "react"
import { staggerContainer, staggerItem, reduceMotion } from "@/lib/animations"

export function Founder() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const shouldReduceMotion = useReducedMotion()

  const container = shouldReduceMotion ? reduceMotion : staggerContainer
  const item = shouldReduceMotion ? reduceMotion : staggerItem

  return (
    <section className="py-20 md:py-32 bg-bone">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={container}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16"
        >
          {/* Image Placeholder — Left on desktop, top on mobile */}
          <motion.div variants={item} className="relative">
            <div className="aspect-[3/4] bg-sand rounded relative flex items-center justify-center overflow-hidden">
              <span className="text-espresso/30 font-sans text-sm tracking-wide">
                Photo: Chocolako portrait
              </span>

              {/* Overlay quote at bottom */}
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 bg-gradient-to-t from-espresso/60 to-transparent">
                <p className="font-serif italic text-white/90 text-lg md:text-xl leading-relaxed">
                  &ldquo;Your body has been keeping score. I teach women how to read it.&rdquo;
                </p>
              </div>
            </div>
          </motion.div>

          {/* Editorial Bio — Right on desktop */}
          <motion.div variants={item} className="flex flex-col justify-center">
            <h2 className="font-serif text-3xl md:text-4xl text-cacao leading-snug mb-8">
              There is something you should know about the woman behind this work.
            </h2>

            <div className="space-y-5 mb-10">
              <p className="font-sans text-base leading-relaxed text-espresso/80">
                She didn&rsquo;t find this methodology because it called to her from a distance. She found it because her own body stopped cooperating with the life she had so carefully built, and she had to decide what that meant.
              </p>

              <p className="font-sans text-base leading-relaxed text-espresso/80">
                Chocolako Agburu is the first woman in her lineage to say no to an arranged marriage. In 2021, twenty-five fibroids were removed from her womb. The surgeons recommended a hysterectomy. She said no to that too.
              </p>

              <p className="font-sans text-base leading-relaxed text-espresso/80">
                What followed sent her to wisdom keepers in Mexico, Peru, Kenya, Nigeria, Morocco, and Egypt, and became the living foundation of Somatic Feminine Intelligence&trade;.
              </p>

              <p className="font-sans text-base leading-relaxed text-espresso/80">
                She was equipped to go looking. She holds a BS from Vanderbilt University, an MPH from UC Berkeley, and an MBA from Bayes Business School London. She managed critical care at Harvard&rsquo;s Massachusetts General Hospital and led pharmaceutical market access for GlaxoSmithKline across London and Lagos.
              </p>

              <p className="font-sans text-base leading-relaxed text-espresso/80">
                She left that world not because it failed her. Because she could see its edges, and she knew what was beyond them.
              </p>

              <p className="font-sans text-base leading-relaxed text-espresso/80">
                Today she is a resident teacher at The Yoga Barn in Ubud, Bali, five years fibroid-free, and guiding women across four continents through the work that changed her own life.
              </p>

              <p className="font-sans text-base leading-relaxed text-espresso/80">
                She is the author of <span className="italic">NEVER THE SAME WOMAN TWICE: The Science and Heart of Evolving into Yourself</span>.
              </p>
            </div>

            <p className="font-serif italic text-cacao text-lg leading-relaxed mb-10">
              She doesn&rsquo;t teach what she studied. She teaches what she survived, integrated, and transformed.
            </p>

            <div className="flex flex-wrap gap-6">
              <a
                href="/about"
                className="text-gold font-medium inline-flex items-center gap-2 hover:opacity-80 transition-opacity"
              >
                Read the Full Story
                <span aria-hidden="true">&rarr;</span>
              </a>
              <a
                href="/work-with-me"
                className="text-gold font-medium inline-flex items-center gap-2 hover:opacity-80 transition-opacity"
              >
                Work With Chocolako
                <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
