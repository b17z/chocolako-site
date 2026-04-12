"use client"

import { motion } from "framer-motion"
import { staggerContainer, staggerItem } from "@/lib/animations"

const forYou = [
  "You are a woman ready to do real work. Not conceptual work. Not another workshop that processes from the neck up. Work that happens in the body, requires your full presence, and asks something genuine from you.",
  "You want a certification that reflects the depth of what you actually offer — whether you're new to teaching or deepening an existing practice.",
  "You are drawn to one or more of the five stories in the recognition section above and you know it isn't a coincidence.",
  "You can invest eight days in Morocco with the intention and focus this kind of training requires.",
  "You are willing to be changed, not just trained.",
]

const notForYou = [
  "You're looking for a relaxed retreat with light yoga and journaling. This is rigorous, structured, and held inside a framework that asks something real from you every day.",
  "You want a large cohort, a big-name venue, or a training designed around Instagram content. This is intentionally intimate, and it is designed for depth over optics.",
  "You're not ready to bring your own experience into the room. The personal transformation is not optional here. It is the methodology.",
]

export function YTTFit() {
  return (
    <section className="bg-cream py-24 md:py-32">
      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="uppercase tracking-[0.2em] text-xs text-gold font-sans mb-4">
            The Fit
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-cacao">
            Who this is for. Who it isn't.
          </h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-16"
        >
          <motion.div variants={staggerItem}>
            <h3 className="font-serif text-xl text-cacao mb-6">
              This training is for you if —
            </h3>
            <div className="space-y-4">
              {forYou.map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <span className="text-gold mt-1 flex-shrink-0">&#10003;</span>
                  <p className="font-sans text-base text-cacao/80 leading-relaxed">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div variants={staggerItem}>
            <h3 className="font-serif text-xl text-cacao/70 mb-6">
              This training is not for you if —
            </h3>
            <div className="space-y-4">
              {notForYou.map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <span className="text-cacao/30 mt-1 flex-shrink-0">
                    &#10007;
                  </span>
                  <p className="font-sans text-base text-cacao/60 leading-relaxed">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.p
            variants={staggerItem}
            className="font-sans text-sm text-cacao/50 italic"
          >
            Both of these sections exist to protect your investment and ours. A
            training this held is only as good as the women in the container.
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
