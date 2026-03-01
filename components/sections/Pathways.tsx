"use client"

import { motion, useInView, useReducedMotion } from "framer-motion"
import { useRef } from "react"
import { staggerContainer, staggerItem, reduceMotion } from "@/lib/animations"
import { Button } from "@/components/ui/button"

interface PathwayCard {
  title: string
  subtitle: string
  price: string
  cta: string
  featured?: boolean
}

const pathways: PathwayCard[] = [
  {
    title: "The Masterclass",
    subtitle: "Begin the Journey",
    price: "$297",
    cta: "Enroll Now",
    featured: false,
  },
  {
    title: "SFI Training",
    subtitle: "9-Month Certification",
    price: "$18,000",
    cta: "Apply Now",
    featured: true,
  },
  {
    title: "Immersions",
    subtitle: "Transformational Retreats",
    price: "From $4,500",
    cta: "View Retreats",
    featured: false,
  },
]

export function Pathways() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const shouldReduceMotion = useReducedMotion()

  const containerVariants = shouldReduceMotion ? reduceMotion : staggerContainer
  const itemVariants = shouldReduceMotion ? reduceMotion : staggerItem

  return (
    <section className="py-24 md:py-32 bg-bone">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-gold uppercase tracking-[0.3em] text-sm mb-4">
            Your Path Forward
          </p>
          <h2 className="font-serif text-3xl md:text-5xl text-espresso">
            Choose Your Pathway
          </h2>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto"
        >
          {pathways.map((pathway) => (
            <motion.div
              key={pathway.title}
              variants={itemVariants}
              whileHover={shouldReduceMotion ? {} : { y: -8 }}
              transition={{ duration: 0.3 }}
              className={`
                relative rounded-2xl p-8 flex flex-col
                ${
                  pathway.featured
                    ? "bg-jungle ring-2 ring-gold"
                    : "bg-sand/50"
                }
              `}
            >
              {/* Featured Badge */}
              {pathway.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-gold text-espresso text-xs font-medium px-4 py-1 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Card Content */}
              <div className="flex-1 text-center">
                <p
                  className={`text-sm uppercase tracking-wider mb-2 ${
                    pathway.featured ? "text-sage" : "text-cacao/70"
                  }`}
                >
                  {pathway.subtitle}
                </p>
                <h3
                  className={`font-serif text-2xl md:text-3xl mb-4 ${
                    pathway.featured ? "text-bone" : "text-espresso"
                  }`}
                >
                  {pathway.title}
                </h3>
                <p
                  className={`text-3xl md:text-4xl font-serif mb-6 ${
                    pathway.featured ? "text-gold" : "text-cacao"
                  }`}
                >
                  {pathway.price}
                </p>
              </div>

              {/* CTA Button */}
              <Button
                size="lg"
                className={`w-full ${
                  pathway.featured
                    ? "bg-gold hover:bg-gold/90 text-espresso"
                    : "bg-cacao hover:bg-cacao/90 text-bone"
                }`}
              >
                {pathway.cta}
              </Button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
