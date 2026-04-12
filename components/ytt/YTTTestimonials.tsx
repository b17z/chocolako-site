"use client"

import { motion } from "framer-motion"
import { staggerContainer, staggerItem } from "@/lib/animations"

const testimonials = [
  {
    quote:
      "I arrived as a yoga teacher with ten years of experience. I left as a woman who finally understood what I'd been carrying in my own body — and how to hold that for other women. This training changed my practice, my client relationships, and honestly, my marriage. I didn't expect that last one.",
    name: "Certified Graduate",
    title: "Womb Wisdom & Wellbeing YTT",
  },
  {
    quote:
      "I've done 200-hour and 500-hour trainings. I've done retreats on three continents. Nothing has gone as deep as this. The combination of Chocolako's clinical background and her embodied practice is unlike anything I've found anywhere else. I refer to this training as my before and after.",
    name: "Women's Health Practitioner",
    title: "Canada",
  },
  {
    quote:
      "I came in as the high achiever who had done everything right and still felt empty. I left knowing exactly where I'd been putting myself last and with a practice that actually reaches the place I'd been trying to heal for fifteen years. Eight days. I know how that sounds. But ask any woman who's done this.",
    name: "Senior Director",
    title: "London",
  },
]

export function YTTTestimonials() {
  return (
    <section className="bg-bone py-24 md:py-32">
      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="uppercase tracking-[0.2em] text-xs text-gold font-sans mb-4">
            From Past Participants
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-cacao">
            Testimonials
          </h2>
        </motion.div>

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
