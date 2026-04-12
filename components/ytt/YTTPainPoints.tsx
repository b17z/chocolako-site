"use client"

import { motion } from "framer-motion"
import { staggerContainer, staggerItem } from "@/lib/animations"

const painPoints = [
  "I have cysts, fibroids, or a diagnosis my doctors say there\u2019s nothing more they can do about",
  "I\u2019m burned out from constantly producing, performing, and pushing through \u2014 and my body is showing it",
  "I feel disconnected from my womb, my cycle, and the deeper intelligence of my feminine body",
  "I\u2019ve done every self-care routine, but I\u2019m still exhausted at a level sleep doesn\u2019t fix",
  "I carry womb trauma \u2014 miscarriage, abortion, assault \u2014 and I\u2019ve never had a safe space to process it through my body",
  "I inherited generational patterns of silence, sacrifice, and pushing through pain",
  "I want to teach yoga but every training I\u2019ve seen feels performative, not embodied",
  "I know something is off in my body but Western medicine keeps telling me I\u2019m fine",
  "I\u2019ve been successful by every external measure and still feel like something fundamental is missing",
  "I\u2019m in a life transition and my body feels like unfamiliar territory",
  "I\u2019m ready to stop managing my health and start understanding it",
]

export function YTTPainPoints() {
  return (
    <section className="bg-cream py-24 md:py-32">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-cacao mb-16">
          Do any of these sound familiar?
        </h2>

        <motion.div
          className="space-y-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {painPoints.map((point, index) => (
            <motion.div
              key={index}
              variants={staggerItem}
              className="border-l-2 border-gold/40 pl-6"
            >
              <p className="font-serif italic text-base md:text-lg text-cacao/80">
                &ldquo;{point}&rdquo;
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
