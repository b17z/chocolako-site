"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { staggerContainer, staggerItem } from "@/lib/animations"

const faqs = [
  {
    question: "Do I need prior yoga teaching experience to enroll?",
    answer:
      "No. This training is open to women at all stages — those who are brand new to teaching, those deepening an existing practice, and experienced practitioners adding a specialized methodology. The pre-immersion online modules bring everyone to the same starting point before Morocco.",
  },
  {
    question: "Is this training spiritually or religiously specific?",
    answer:
      "It is not. The Womb Wisdom methodology draws from somatic science, nervous system research, feminine embodiment traditions, and the lived experience of women across cultures. There is no required spiritual belief system. The practices are grounded in the body first.",
  },
  {
    question:
      "What if I don't have a uterus or have had a hysterectomy?",
    answer:
      "You are welcome here. The womb space, as a center of somatic intelligence, creativity, and feminine authority, is not defined by anatomy alone. Women who have had hysterectomies and/or experienced surgical menopause consistently report some of the deepest experiences in this training. The work is for the body you are in.",
  },
  {
    question: "What does 'hybrid' mean practically?",
    answer:
      "You complete pre-immersion online modules in the weeks before August 1. These are self-paced within a set window and include Google Meet video instruction, reading, and cohort connection calls. The 14-day immersive training at Bab Zouina runs August 8-22, 2026 with full daily programming. Post-training integration support is delivered online after you return home.",
  },
  {
    question: "How is this different from a standard 200-hour YTT?",
    answer:
      "A standard 200-hour YTT qualifies you to teach general yoga. This training qualifies you to teach within a specialized methodology specifically designed for women's bodies, womb health, trauma-informed practice, and feminine embodiment. Many graduates of this training hold existing 200-hour certifications and describe this as the missing piece that made their existing credential make sense and meaningful.",
  },
  {
    question: "What is the investment?",
    answer:
      "Investment details are shared during your application call and included above. The program is positioned at the high-investment end of the market, reflecting the quality of the certification, the intimacy of the cohort, the depth of the location, and the transformation women consistently experience. Payment plans are available and discussed on the application call.",
  },
]

export function YTTFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="bg-white py-24 md:py-32">
      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="uppercase tracking-[0.2em] text-xs text-gold font-sans mb-4">
            Frequently Asked Questions
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-cacao">
            FAQs
          </h2>
        </motion.div>

        <motion.div
          className="space-y-4"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              variants={staggerItem}
              className="border border-cacao/10 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-bone/50 transition-colors"
              >
                <span className="font-sans font-medium text-base text-cacao pr-4">
                  {faq.question}
                </span>
                <span
                  className={`text-gold text-xl flex-shrink-0 transition-transform duration-300 ${
                    openIndex === i ? "rotate-45" : ""
                  }`}
                >
                  +
                </span>
              </button>

              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 border-t border-cacao/10 pt-4">
                      <p className="font-sans text-base text-cacao/80 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
