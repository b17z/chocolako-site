"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { staggerContainer, staggerItem } from "@/lib/animations"

const archetypes = [
  {
    title: "The woman no longer defined by a diagnosis",
    story: [
      "You were handed a word. Fibroids. Endometriosis. PCOS. Adenomyosis. PMDD. And with it, a plan. Monitor this. Medicate that. Come back in six months.",
      "Somewhere between the ultrasounds and the prescription refills, you started relating to your womb the way the system does — as a problem rather than a source.",
      "Your womb has been trying to tell you something no scan was designed to hear.",
    ],
    closing:
      "What if the most important conversation with your body hasn't happened in a doctor's office?",
  },
  {
    title: "The woman who built success and lost herself in it",
    story: [
      "You've done it. The career, the income, the reputation, and the discipline to hold it all together. Society sees success. You see a woman who can't remember the last time she felt like herself.",
      "Nobody asks what it costs you because you make it look easy. You've been running on discipline so long you forgot there was another way to move through the world.",
      "Hustle culture didn't take your softness. You set it down because the world didn't reward it. But if the body keeps the score, then yours has been quietly asking for a different kind of strength. One that flows instead of forces, receives as well as leads, and knows rest is part of ambition, not the enemy of it.",
      "Something in you is tired of doing life without the part of you that makes it meaningful.",
    ],
    closing:
      "What more becomes possible when your feminine energy is as strong as your drive?",
  },
  {
    title: "The woman brave enough to meet herself again",
    story: [
      "Something ended. A relationship, a career, a version of yourself that made sense until it didn't. Now you're in the space between what was and what comes next, and nobody warned you how disorienting that in-between would feel.",
      "You're not falling apart. But you're not whole either.",
      "You don't need advice or a five-step plan. You need to be witnessed while you discover who's coming next. You need women around you who understand that this kind of not-knowing isn't a crisis.",
      "It's a becoming.",
      "The woman arriving on the other side of this transition is braver, softer, and more certain of herself than the one who walked in. She doesn't need to be built. She needs to be uncovered.",
      "You want to move through this with your feet on the ground and your body as a compass, not just survive it until it's over.",
    ],
    closing:
      "What if the woman you're becoming has been waiting for you to stop rushing and finally let her arrive?",
  },
  {
    title: "The woman rebuilding on her own terms",
    story: [
      "Something was done to your body without your permission. And no matter how much time has passed, part of you is still finding your way back to it.",
      "You survived and you kept moving. From the outside you look fine, and you've worked hard to keep it that way.",
      "But you know the part of you that went quiet. That learned to float above the feeling, to stay busy so the stillness couldn't catch up. Living above the neck became a survival skill.",
      "And it's costing you.",
      "Your body isn't the enemy. It never was. While you were gone, it kept going. It carried you through the worst of it, faithfully, without asking anything back. And now, quietly, without judgment, it's asking you to return.",
      "Not to what happened, but to your full self. To the softness, the safety, and the aliveness of your entire being.",
    ],
    closing:
      "What would it feel like to finally stop running from the one place that never abandoned you?",
  },
  {
    title: "The woman whose healing becomes another woman's roadmap",
    story: [
      "You've felt it for a while. That moment with a friend, client, or stranger at a retreat where you knew exactly what she needed. And before you could share it, doubt crept in. Who am I to take her there? Is my knowledge actually enough to help?",
      "Here's what that doubt never tells you: the women in your world aren't waiting for someone perfect. They're waiting for someone who has walked through the fire and knows the path well enough to guide others through it.",
      "You do the healing work, read the books, listen to podcasts, and somewhere along the way you stopped asking if this was something you wanted to do and started understanding that leadership was something you were born for.",
      "Womb healing has been one of the most powerful forces in your own life. And you want every woman around you to feel that same radiance, liberation, and deep exhale of finally returning home to herself.",
      "This training is the container you've been longing for. The credentials, the framework, and the lived experience in Africa to stop second-guessing and start leading.",
      "Your healing is never just for you. It's also the beginning of someone else's story.",
    ],
    closing:
      "What becomes possible for the women in your world when you finally say yes to the embodied leader your own healing made you?",
  },
]

export function YTTArchetypes() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="bg-cream py-24 md:py-32">
      <div className="max-w-3xl mx-auto px-6">
        <motion.h2
          className="font-serif text-3xl md:text-4xl lg:text-5xl text-cacao mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          Does this sound familiar?
        </motion.h2>

        <motion.div
          className="space-y-4"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {archetypes.map((item, i) => (
            <motion.div
              key={i}
              variants={staggerItem}
              className="border border-cacao/10 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-sand/50 transition-colors"
              >
                <span className="font-serif text-lg text-cacao pr-4">
                  {item.title}
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
                      <div className="space-y-4">
                        {item.story.map((paragraph, j) => (
                          <p
                            key={j}
                            className="font-sans text-base text-cacao/80 leading-relaxed"
                          >
                            {paragraph}
                          </p>
                        ))}
                      </div>
                      <p className="font-serif italic text-lg text-rust mt-6">
                        {item.closing}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="font-serif italic text-xl text-cacao mb-10">
            If you felt seen and said that's me — welcome. You belong here.
          </p>
          <a
            href="#application"
            className="inline-block bg-gold hover:bg-gold/90 text-espresso font-sans font-medium px-10 py-4 rounded-full transition-colors text-sm uppercase tracking-wider"
          >
            Book Your Application Call
          </a>
        </motion.div>
      </div>
    </section>
  )
}
