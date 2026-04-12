"use client"

import { motion } from "framer-motion"
import { staggerContainer, staggerItem } from "@/lib/animations"

const phases = [
  {
    label: "Before Morocco",
    title: "Online Pre-Immersion",
    description:
      "You arrive at Bab Zouina prepared. The pre-immersion online modules introduce the Womb Wisdom methodology, the anatomical and energetic framework of the womb space, the principles of trauma-informed teaching, and the somatic vocabulary you'll work with throughout the training. You meet your cohort before you board a plane.",
  },
  {
    label: "The 14 Days at Bab Zouina",
    title: "August 8–22, 2026",
    description:
      "Each day is structured around morning practice, teaching methodology sessions, somatic immersion, embodiment practices, and integration. The rhythm is deliberate — physical depth in the morning, intellectual framework midday, somatic and ceremonial practices in the afternoon and evening. You are never overscheduled. The land and the body need space to do their work.",
    curriculum: [
      "Trauma-informed sequencing for the womb space",
      "Menstrual cycle as a teaching and healing framework",
      "Feminine archetypes and their embodied application",
      "Somatic nervous system regulation",
      "Womb-centered breathwork and meditation",
      "Sacred ritual as embodied practice",
      "Teaching methodology and client communication",
      "Practicum with peer teaching and feedback",
    ],
  },
  {
    label: "After Morocco",
    title: "Integration Support",
    description:
      "The integration period is where the training becomes teaching. Post-immersion support includes guidance on establishing your practice, positioning your certification, and navigating the transition from student to practitioner. You are not handed a certificate and sent home. You are supported through the becoming.",
  },
]

export function YTTStructure() {
  return (
    <section id="structure" className="bg-white py-24 md:py-32">
      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="uppercase tracking-[0.2em] text-xs text-gold font-sans mb-4">
            The Structure
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-cacao">
            How the training unfolds.
          </h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-16"
        >
          {phases.map((phase, i) => (
            <motion.div key={i} variants={staggerItem}>
              <p className="uppercase tracking-[0.2em] text-xs text-gold font-sans mb-2">
                {phase.label}
              </p>
              <h3 className="font-serif text-2xl text-cacao mb-4">
                {phase.title}
              </h3>
              <p className="font-sans text-base text-cacao/80 leading-relaxed">
                {phase.description}
              </p>
              {phase.curriculum && (
                <div className="mt-6">
                  <p className="font-sans font-bold text-sm uppercase tracking-wider text-cacao mb-4">
                    Curriculum includes:
                  </p>
                  <ul className="space-y-2">
                    {phase.curriculum.map((item, j) => (
                      <li
                        key={j}
                        className="font-sans text-sm text-cacao/70 flex items-start gap-3"
                      >
                        <span className="text-gold flex-shrink-0">
                          &#9670;
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
