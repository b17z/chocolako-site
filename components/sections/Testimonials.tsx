"use client"

import { motion } from "framer-motion"

interface Testimonial {
  id: string
  quote: string
  name: string
  title: string
}

const testimonials: Testimonial[] = [
  {
    id: "varda",
    quote:
      "I came to Chocolako running on fumes and calling it leadership. I left with a nervous system that could finally register safety. That shifted everything.",
    name: "Varda",
    title: "Founder & CEO, Tava Group, Armenia",
  },
  {
    id: "micha",
    quote:
      "This is much more than yoga teacher training. Womb Wisdom is the missing piece for women living and leading at scale.",
    name: "Dr. Micha T, MD, PhD",
    title: "Oxford University, OB-GYN Department",
  },
  {
    id: "cece",
    quote:
      "I\u2019ve spent over $50,000 on executive coaching and personal development. Womb Wisdom was the first time I addressed the body I was leading from.",
    name: "Cece",
    title: "Executive Coach, Kenya",
  },
  {
    id: "coralie",
    quote:
      "I thought I had to choose between being a powerful leader and being an embodied woman. Womb Wisdom\u2122 showed me they\u2019re the same thing.",
    name: "Coralie",
    title: "Chief Operating Officer, Egypt/London Hospitality",
  },
  {
    id: "librette",
    quote:
      "Most teacher trainings are what you do for a certificate. Chocolako\u2019s training is what you do for your life. She teaches you how to live yoga.",
    name: "Librette",
    title: "Mental Health Counselor, Womb Wisdom & Wellbeing YTT, USA",
  },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
}

export function Testimonials() {
  return (
    <section className="bg-bone section-padding">
      <div className="max-w-3xl mx-auto">
        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-serif text-4xl md:text-5xl lg:text-6xl text-cacao mb-16 md:mb-20"
        >
          What women say.
        </motion.h2>

        {/* Stacked testimonial cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="space-y-12"
        >
          {testimonials.map((testimonial) => (
            <motion.blockquote
              key={testimonial.id}
              variants={cardVariants}
              className="border-l-2 border-gold pl-6 md:pl-8"
            >
              <p className="text-lg md:text-xl font-serif italic leading-relaxed text-cacao mb-4">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <footer className="text-sm md:text-base">
                <span className="font-sans font-bold text-cacao">
                  {testimonial.name}
                </span>
                <span className="font-sans text-rust/70">
                  {" "}
                  &middot; {testimonial.title}
                </span>
              </footer>
            </motion.blockquote>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 md:mt-20"
        >
          <a
            href="#"
            className="text-gold font-sans font-medium hover:underline underline-offset-4 transition-colors"
          >
            Read More Stories
          </a>
        </motion.div>
      </div>
    </section>
  )
}
