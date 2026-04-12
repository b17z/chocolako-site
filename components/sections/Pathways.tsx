"use client"

import { motion, useInView, useReducedMotion } from "framer-motion"
import { useRef } from "react"
import { staggerContainer, staggerItem, reduceMotion } from "@/lib/animations"

interface PathCard {
  number: string
  label: string
  title: string
  body: string
  tagline?: string
  forLine: string
  price: string
  cta: string
  href?: string
  bg: "bg-white" | "bg-cream"
}

const paths: PathCard[] = [
  {
    number: "01",
    label: "LIVE THE PRACTICE EVERY DAY",
    title: "The Innergy Shop",
    body: "Ceremonial cacao. Ritual oils. Adornment designed to hold meaning, not just occupy space. Yoga and swimwear for the body you actually live in. Every item in the shop is an extension of the teaching. This is where the journey often quietly begins.",
    forLine:
      "The woman ready to bring the practice into her daily life before committing to a full program.",
    price: "From $45",
    cta: "→ Shop the Innergy Collection",
    bg: "bg-white",
  },
  {
    number: "02",
    label: "UNDERSTAND YOUR BODY",
    title: "Morphing™ Private Membership",
    body: "Monthly ritual circles, somatic practices, leadership salons, and embodied integration, held inside a private community of women doing this work at depth. Not a content library. A living, breathing container that moves with you.",
    tagline:
      "The monthly membership where women evolve — in the body, in community, and in the intelligence of the feminine.",
    forLine:
      "The woman who wants ongoing somatic care, embodied community, and monthly nervous system support.",
    price: "$97/month · Annual membership $997",
    cta: "→ Join the Morphing™ Waitlist",
    bg: "bg-cream",
  },
  {
    number: "03",
    label: "TRANSFORM YOUR PRACTICE",
    title: "Womb Wisdom & Wellbeing YTT in Morocco",
    body: "The Yoga Alliance-recognized 200-hour Womb Wisdom & Wellbeing Yoga Teacher Training. 7 days online pre-immersion, 14 days at Bab Zouina in the Ourika Valley, Morocco. August 8-22, 2026. A small cohort by design. The kind of training women describe as their before and after.",
    forLine:
      "The woman ready for full immersion, a certification, and the kind of transformation that happens in a room of twenty women in Morocco.",
    price: "Investment discussed on application call · Payment plans available",
    cta: "→ Book Your Morocco Application Call",
    href: "/womb-wisdom-yoga-training",
    bg: "bg-white",
  },
  {
    number: "03b",
    label: "TRANSFORM YOUR PRACTICE — BALI",
    title: "Womb Wisdom & Wellbeing YTT at The Yoga Barn, Bali",
    body: "The second 200-hour Womb Wisdom & Wellbeing cohort of 2026. October 2026, Ubud, Bali. The Yoga Barn is one of the most respected yoga destinations in the world. Chocolako has taught there for eight years. This is her home. That is not a metaphor.",
    forLine:
      "The woman drawn to the energy of Ubud and the world-renowned container of The Yoga Barn.",
    price: "Investment discussed on application call · Payment plans available",
    cta: "→ Book Your Bali Application Call",
    bg: "bg-cream",
  },
  {
    number: "04",
    label: "LEARN TO HOLD CEREMONY",
    title: "Cacao Ceremony Facilitation Training",
    body: "Cacao is not a wellness trend. It is a plant medicine with a lineage, and facilitating ceremony with it requires both reverence and training. This certification gives you the framework, the somatic grounding, and the ritual knowledge to hold safe, transformational cacao ceremonies for women. Offered in-person and online.",
    forLine:
      "The woman called to work with ceremonial cacao as a healing, ritual, and community-building practice.",
    price: "Investment discussed on inquiry · Multiple dates available",
    cta: "→ Inquire About Cacao Training",
    bg: "bg-white",
  },
  {
    number: "05",
    label: "BUILD WITH THIS WORK",
    title: "Somatic Feminine Intelligence™ Certification",
    body: "The 6-month SFI Certification Training. Two international immersions. A framework that translates to boardrooms, policy rooms, and wellness practices worldwide. The most comprehensive expression of the Innergy methodology. Built for women who are done leading from depletion.",
    forLine:
      "The executive, founder, or changemaker ready to lead from a regulated nervous system and certify in the only methodology that integrates somatic science, womb wisdom, and institutional leadership.",
    price: "$15,000 – $25,000 · Next cohort: 2027",
    cta: "→ Apply for the SFI Certification",
    bg: "bg-cream",
  },
]

export function Pathways() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const shouldReduceMotion = useReducedMotion()

  const containerVariants = shouldReduceMotion ? reduceMotion : staggerContainer
  const itemVariants = shouldReduceMotion ? reduceMotion : staggerItem

  return (
    <section id="paths" className="py-24 md:py-32 bg-bone">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <p className="font-serif text-lg md:text-xl font-bold italic text-cacao mb-4">
            Wealth. Wellness. Worthiness.
          </p>
          <p className="font-serif italic text-cacao/80 text-base md:text-lg mb-2">
            The highest form of wealth is freedom of time, in good health, and
            at peace with yourself.
          </p>
          <p className="font-serif italic text-cacao/80 text-base md:text-lg mb-8">
            Innergy is where the work of all three begins.
          </p>
          <h2 className="font-serif italic text-3xl md:text-5xl text-cacao mb-6">
            Where do you want to begin?
          </h2>
          <p className="font-sans text-base text-cacao/70 leading-relaxed">
            Every woman who finds Innergy comes in through her own door. There
            is no wrong entry point, only the one that is true for you right
            now.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto"
        >
          {paths.map((path) => (
            <motion.div
              key={path.number}
              variants={itemVariants}
              className={`${path.bg} rounded-lg p-8 border border-cacao/10 flex flex-col`}
            >
              {/* Number + Label */}
              <p className="text-gold font-serif text-sm tracking-widest mb-1">
                {path.number}
              </p>
              <p className="text-xs tracking-widest uppercase text-cacao/60 mb-4">
                {path.label}
              </p>

              {/* Title */}
              <h3 className="font-serif text-2xl md:text-3xl text-cacao mb-4">
                {path.title}
              </h3>

              {/* Body */}
              <p className="font-sans text-base leading-relaxed text-cacao/80 mb-4">
                {path.body}
              </p>

              {/* Tagline (optional) */}
              {path.tagline && (
                <p className="font-serif italic text-cacao/60 text-sm mb-4">
                  {path.tagline}
                </p>
              )}

              {/* For line */}
              <p className="font-serif italic text-cacao/60 text-sm mb-4">
                <span className="font-sans not-italic font-medium text-cacao/70">
                  For:
                </span>{" "}
                {path.forLine}
              </p>

              {/* Spacer to push price + CTA to bottom */}
              <div className="mt-auto">
                {/* Price */}
                <p className="text-gold font-medium text-sm mb-3">
                  {path.price}
                </p>

                {/* CTA */}
                <a
                  href={path.href || "#"}
                  className="text-rust hover:text-gold transition-colors font-medium text-sm"
                >
                  {path.cta}
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
