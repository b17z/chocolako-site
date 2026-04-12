"use client"

import { motion } from "framer-motion"
import { staggerContainer, staggerItem } from "@/lib/animations"

export function YTTContainer() {
  return (
    <section className="bg-cream py-24 md:py-32">
      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-16"
        >
          <motion.div variants={staggerItem}>
            <h2 className="font-serif text-3xl md:text-4xl text-cacao mb-6">
              The container is intentional.
            </h2>
            <div className="space-y-5">
              <p className="font-sans text-base md:text-lg text-cacao/80 leading-relaxed">
                This is a small cohort by design. The number of women in the
                room shapes the depth of what's possible in it. You won't be one
                of thirty. You'll be known by your lead trainer, cohort, and
                yourself in a way that large-format trainings simply can't
                offer.
              </p>
              <p className="font-sans text-base md:text-lg text-cacao/80 leading-relaxed">
                The quality of the container is part of the certification.
                You'll learn to hold this for other women in part by having it
                held for you.{" "}
                <span className="font-bold text-cacao">20 women.</span>
              </p>
            </div>
          </motion.div>

          <motion.div variants={staggerItem}>
            <h2 className="font-serif text-3xl md:text-4xl text-cacao mb-6">
              The location is part of the curriculum.
            </h2>
            <div className="space-y-5">
              <p className="font-sans text-base md:text-lg text-cacao/80 leading-relaxed">
                Bab Zouina was not chosen for its beauty alone, though it is
                stunning. It was chosen because the land does something to a
                woman that a studio simply cannot.
              </p>
              <p className="font-sans text-base md:text-lg text-cacao/80 leading-relaxed">
                The Ourika Valley sits at the foot of the Atlas Mountains. The
                air is different there. The pace is different. The silence
                between practices has a quality that accelerates integration in
                ways that are difficult to explain before you've experienced
                them. Women have been gathering in North Africa to initiate,
                grieve, celebrate, and reclaim for thousands of years. That
                lineage is held sacredly in the earth there.
              </p>
              <p className="font-serif italic text-lg text-rust">
                The 14 days you spend at Bab Zouina are not a backdrop for the
                training. They are part of what the training teaches.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
