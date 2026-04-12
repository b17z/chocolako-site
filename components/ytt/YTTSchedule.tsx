"use client"

import { motion } from "framer-motion"
import { staggerContainer, staggerItem } from "@/lib/animations"

const schedule = [
  { time: "7:00 – 9:00am", activity: "Morning Embodiment Practice" },
  { time: "9:00 – 10:00am", activity: "Breakfast &amp; Rest" },
  {
    time: "10:00am – 1:00pm",
    activity: "Morning Wisdom &mdash; Learning &amp; Integration",
  },
  { time: "1:00 – 3:00pm", activity: "Lunch &amp; Lounge" },
  { time: "3:00 – 6:00pm", activity: "Afternoon Wisdom" },
  { time: "6:00 – 7:00pm", activity: "Evening Integration" },
]

export function YTTSchedule() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="uppercase tracking-[0.2em] text-xs text-gold font-sans mb-4">
            DAILY RHYTHM
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-cacao">
            A Day in Morocco
          </h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {schedule.map((item, i) => (
            <motion.div
              key={i}
              variants={staggerItem}
              className="flex items-baseline gap-6 py-5 border-b border-cacao/10 last:border-b-0"
            >
              <span className="font-sans text-sm text-gold w-40 flex-shrink-0">
                {item.time}
              </span>
              <span
                className="font-serif text-lg text-cacao"
                dangerouslySetInnerHTML={{ __html: item.activity }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
