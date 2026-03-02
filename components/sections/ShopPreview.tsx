"use client"

import { motion, useInView, useReducedMotion } from "framer-motion"
import { useRef } from "react"
import { staggerContainer, staggerItem, reduceMotion } from "@/lib/animations"
import { Button } from "@/components/ui/button"

interface Product {
  name: string
  price: string
  description: string
}

const products: Product[] = [
  {
    name: "Chakra Healing Oils",
    price: "$78",
    description: "Seven sacred oils for energy center activation",
  },
  {
    name: "Ceremonial Cacao",
    price: "$45",
    description: "100% pure, ethically sourced Guatemalan cacao",
  },
  {
    name: "Embodiment Yoga Wear",
    price: "From $95",
    description: "Designed for movement and ceremony",
  },
  {
    name: "Soulfelt Jewelry",
    price: "From $125",
    description: "Handcrafted pieces carrying sacred geometry",
  },
]

export function ShopPreview() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const shouldReduceMotion = useReducedMotion()

  const containerVariants = shouldReduceMotion ? reduceMotion : staggerContainer
  const itemVariants = shouldReduceMotion ? reduceMotion : staggerItem

  return (
    <section className="py-24 md:py-32 bg-bone border-t border-sand">
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
            The Shop
          </p>
          <h2 className="font-serif text-3xl md:text-5xl text-espresso">
            Tools for Your Practice
          </h2>
        </motion.div>

        {/* Products Grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8 max-w-6xl mx-auto mb-12"
        >
          {products.map((product) => (
            <motion.div
              key={product.name}
              variants={itemVariants}
              whileHover={shouldReduceMotion ? {} : { y: -4 }}
              transition={{ duration: 0.3 }}
              className="group cursor-pointer"
            >
              {/* Square Image Placeholder */}
              <div className="aspect-square bg-sand rounded-lg flex items-center justify-center mb-4 transition-shadow duration-300 group-hover:shadow-lg">
                <span className="text-espresso/30 font-serif text-sm text-center px-4">
                  Product Image
                </span>
              </div>

              {/* Product Info */}
              <h3 className="font-serif text-lg md:text-xl text-espresso mb-1">
                {product.name}
              </h3>
              <p className="text-espresso/60 text-sm mb-2 leading-relaxed">
                {product.description}
              </p>
              <p className="text-cacao font-medium">
                {product.price}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <Button
            variant="outline"
            size="lg"
            className="border-cacao text-cacao hover:bg-cacao/10"
          >
            Visit Shop — Coming Soon
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
