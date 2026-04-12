"use client"

import { motion } from "framer-motion"
import { staggerContainer, staggerItem } from "@/lib/animations"

const credentialOutcomes = [
  {
    title: "Yoga Alliance-recognized 50-hour certification",
    description:
      "in Womb Wisdom & Wellbeing methodology.",
  },
  {
    title: "Legal standing",
    description:
      "to teach, insure your practice, and position yourself professionally in the growing women's wellness market.",
  },
  {
    title: "A complete, adaptable curriculum framework.",
    description:
      "You leave with a teaching system you can use immediately — with private clients, group classes, women's circles, your own retreats, or as an additional offering to deepen what you're already doing.",
  },
  {
    title: "A somatic toolkit unlike anything in standard YTT training.",
    description:
      "Trauma-informed sequencing for the womb space. Menstrual cycle integration. Nervous system regulation from a feminine framework. Feminine archetype mapping. Sacred ritual as a pedagogical tool. These are not concepts. By the time you leave Morocco, they are practices you have lived in your own body and are ready to guide others through.",
  },
  {
    title: "The professional positioning to charge what this work is worth.",
    description:
      "There is a growing market of women who need exactly what you'll be trained to offer. Women with diagnoses. Women in burnout. Women in transition. Women healing from trauma. Women who have tried everything else. Your certification is your authority in that space.",
  },
]

const personalOutcomes = [
  {
    title: "A somatic relationship with your own body you have never had before.",
    description:
      "Not because you haven't done the work. Because this is a different kind of work — lived in the body rather than processed through the mind.",
  },
  {
    title: "Language for what you've been living but couldn't name.",
    description:
      "The shift that happens when a woman finally has words for her own experience is irreversible. You'll have them.",
  },
  {
    title: "A cohort who has done real work alongside you.",
    description:
      "Not a Facebook group. Not a newsletter community. Women who have been through deep immersion with you in one of the most held environments on earth. That is a different kind of belonging.",
  },
  {
    title: "The Return Home.",
    description:
      "You'll know what this means when you land in Marrakesh and drive toward the mountains. And you'll know it again, differently, on the day you leave.",
  },
]

export function YTTWhatYouLeaveWith() {
  return (
    <section className="bg-bone py-24 md:py-32">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6"
        >
          <p className="uppercase tracking-[0.2em] text-xs text-gold font-sans mb-4">
            The Outcomes
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-cacao mb-4">
            What you leave with.
          </h2>
          <p className="font-sans text-base text-cacao/70">
            Both columns matter. The credential and the personal. You need both
            to do this work at the level you're being called to.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={staggerItem}>
            <h3 className="font-sans font-bold text-sm uppercase tracking-wider text-cacao mb-8">
              Your credential outcomes
            </h3>
            <div className="space-y-6">
              {credentialOutcomes.map((item, i) => (
                <div key={i}>
                  <p className="font-sans text-base text-cacao/80 leading-relaxed">
                    <span className="font-bold text-cacao">{item.title}</span>{" "}
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div variants={staggerItem}>
            <h3 className="font-sans font-bold text-sm uppercase tracking-wider text-cacao mb-8">
              Your personal outcomes
            </h3>
            <div className="space-y-6">
              {personalOutcomes.map((item, i) => (
                <div key={i}>
                  <p className="font-sans text-base text-cacao/80 leading-relaxed">
                    <span className="font-bold text-cacao">{item.title}</span>{" "}
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
