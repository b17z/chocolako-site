"use client"

import { motion } from "framer-motion"
import { staggerContainer, staggerItem } from "@/lib/animations"

const testimonials = [
  {
    quote:
      "Most teacher trainings are what you do for a certificate. Chocolako's training is what you do for your life. She teaches you how to live yoga.",
    name: "Librette",
    title: "Mental Health Counselor, Womb Wisdom & Wellbeing YTT, USA",
  },
  {
    quote:
      "This is much more than yoga teacher training. Womb Wisdom is the missing piece for women living and leading at scale.",
    name: "Dr. Micha T, MD, PhD",
    title: "Oxford University, OB-GYN Department",
  },
  {
    quote:
      "I came to Chocolako running on fumes and calling it leadership. I left with a nervous system that could finally register safety. That shifted everything.",
    name: "Varda",
    title: "Founder & CEO, Tava Group, Armenia",
  },
]

export function YTTTestimonials() {
  return (
    <section className="bg-bone py-24 md:py-32">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="font-serif text-3xl md:text-4xl text-cacao mb-16">
          What women say.
        </h2>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-12"
        >
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              variants={staggerItem}
              className="border-l-2 border-gold pl-6 md:pl-8"
            >
              <p className="text-lg md:text-xl font-serif italic leading-relaxed text-cacao mb-4">
                &ldquo;{t.quote}&rdquo;
              </p>
              <footer>
                <span className="font-sans font-bold text-cacao">{t.name}</span>
                {" "}
                &middot;
                {" "}
                <span className="font-sans text-rust/70">{t.title}</span>
              </footer>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
