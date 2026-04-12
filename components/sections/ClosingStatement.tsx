"use client"

import { motion } from "framer-motion"
import { staggerContainer, staggerItem } from "@/lib/animations"
import Link from "next/link"

export function ClosingStatement() {
  return (
    <section className="bg-espresso text-bone section-padding text-center">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-4xl mx-auto"
      >
        <motion.p
          variants={staggerItem}
          className="font-serif italic text-2xl md:text-3xl lg:text-4xl leading-relaxed"
        >
          &ldquo;You don&rsquo;t have to choose between who you&rsquo;ve built yourself to be
          and who your body has always known you are.&rdquo;
        </motion.p>

        <motion.p
          variants={staggerItem}
          className="font-serif text-3xl md:text-4xl lg:text-5xl mt-8"
        >
          Both live here.
        </motion.p>

        <motion.div
          variants={staggerItem}
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10"
        >
          <Link
            href="#quiz"
            className="text-gold hover:text-gold/80 transition text-lg"
          >
            Find Your Path
          </Link>
          <Link
            href="/work-with-me"
            className="text-gold hover:text-gold/80 transition text-lg"
          >
            Book a Discovery Call
          </Link>
        </motion.div>
      </motion.div>
    </section>
  )
}
