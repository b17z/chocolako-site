"use client"

import { motion } from "framer-motion"
import { staggerContainer, staggerItem } from "@/lib/animations"

const steps = [
  {
    number: "01",
    title: "Submit Your Application",
    description:
      "Complete the YTT application form so we can understand where you are in your journey.",
  },
  {
    number: "02",
    title: "Book a Call with Chocolako&apos;s Team",
    description:
      "A personal Zoom conversation to answer your questions and ensure this training is right for you.",
  },
  {
    number: "03",
    title: "Secure Your Spot",
    description:
      "Pay your $1,000 deposit or the full amount to confirm your place in the cohort.",
  },
]

const travelRequirements = [
  "Valid passport with 6+ months validity from travel date",
  "4-6 blank passport pages",
  "Research visa requirements for Morocco based on your nationality",
  "Written acceptance confirmation from our team",
  "Flights to Marrakech Menara Airport (RAK)",
]

const certificationRequirements = [
  "At least 6 months of yoga practice with basic pose, meditation, and breathwork knowledge",
  "Ability to study independently and in groups",
  "Full schedule participation (or agreed make-up assignments)",
  "Meaningful practicum contribution",
  "Complete all Yoga Alliance &amp; Innergy Collective assignments",
  "Submit feedback and evaluation at completion",
]

export function YTTRegistration() {
  return (
    <section id="registration" className="bg-sand py-24 md:py-32">
      <div className="max-w-4xl mx-auto px-6">
        <p className="font-sans text-sm uppercase tracking-wider text-cacao/50 text-center mb-4">
          NEXT STEPS
        </p>
        <h2 className="font-serif text-3xl md:text-4xl text-cacao mb-16 text-center">
          How to Join
        </h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {steps.map((step) => (
            <motion.div
              key={step.number}
              className="bg-white rounded-lg p-6 border border-cacao/10 text-center"
              variants={staggerItem}
            >
              <p className="font-serif text-3xl text-gold/50 mb-3">
                {step.number}
              </p>
              <h3
                className="font-serif text-lg text-cacao mb-3"
                dangerouslySetInnerHTML={{ __html: step.title }}
              />
              <p className="font-sans text-sm text-cacao/70 leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mb-20">
          <a
            href="#"
            className="inline-block bg-gold hover:bg-gold/90 text-espresso font-sans font-medium px-10 py-4 rounded-full transition-colors text-sm uppercase tracking-wider"
          >
            Book Your Application Call
          </a>
          <p className="font-sans text-sm text-cacao/50 mt-4">
            100% refund guaranteed before the cancellation deadline.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="font-sans font-bold text-sm uppercase tracking-wider text-cacao mb-6">
              TRAVEL REQUIREMENTS
            </h3>
            <ul className="space-y-3">
              {travelRequirements.map((item) => (
                <li
                  key={item}
                  className="font-sans text-sm text-cacao/70 flex items-start gap-3"
                >
                  <span className="text-gold flex-shrink-0">&#9670;</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-sans font-bold text-sm uppercase tracking-wider text-cacao mb-6">
              CERTIFICATION REQUIREMENTS
            </h3>
            <ul className="space-y-3">
              {certificationRequirements.map((item) => (
                <li
                  key={item}
                  className="font-sans text-sm text-cacao/70 flex items-start gap-3"
                >
                  <span className="text-gold flex-shrink-0">&#9670;</span>
                  <span dangerouslySetInnerHTML={{ __html: item }} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
