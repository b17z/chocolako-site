"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { staggerContainer, staggerItem } from "@/lib/animations"

export function YTTFounder() {
  return (
    <section className="bg-cream py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <motion.div
            className="relative aspect-[3/4] rounded-lg overflow-hidden"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" as const }}
          >
            <Image
              src="/images/ytt/founder.jpg"
              alt="Chocolako Agburu in a vibrant dance pose"
              fill
              className="object-cover"
            />
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.p
              variants={staggerItem}
              className="uppercase tracking-[0.2em] text-xs text-gold font-sans mb-4"
            >
              Meet Your Lead Trainer
            </motion.p>

            <motion.h2
              variants={staggerItem}
              className="font-serif text-3xl md:text-4xl text-cacao leading-tight mb-2"
            >
              Chocolako Agburu, MPH, MBA, E-RYT 500, YACEP
            </motion.h2>

            <motion.p
              variants={staggerItem}
              className="font-serif italic text-lg text-gold mb-8"
            >
              Five years fibroid-free and counting.
            </motion.p>

            <motion.div variants={staggerItem} className="space-y-5">
              <p className="font-sans text-base text-cacao/80 leading-relaxed">
                Chocolako holds an MPH from UC Berkeley and an MBA from Cass
                Business School London. She devoted years managing the critical
                care division at Massachusetts General Hospital and leading
                pharmaceutical market access for GlaxoSmithKline across London
                and Lagos.
              </p>
              <p className="font-sans text-base text-cacao/80 leading-relaxed">
                She lived that world from the inside. Then she left and chose a
                different kind of authority. One rooted in the body, not the
                boardroom.
              </p>
              <p className="font-sans text-base text-cacao/80 leading-relaxed">
                She is the first woman in her lineage to say no to an arranged
                marriage. In doing so, she broke a generational pattern her womb
                was still carrying long after she walked away. What she
                discovered in the aftermath changed everything. Freedom without
                self-knowledge is just another kind of lostness.
              </p>
              <p className="font-sans text-base text-cacao/80 leading-relaxed">
                In 2021, twenty-five fibroids were removed from her womb.
                Instead of accepting the recommended hysterectomy, she chose to
                pay attention to her womb and wellbeing. That decision took her
                to wisdom keepers across Mexico, Peru, Kenya, Nigeria, Morocco,
                and Egypt — and became the living foundation of everything she
                now teaches.
              </p>
              <p className="font-sans text-base text-cacao/80 leading-relaxed">
                Today Chocolako is a resident teacher at The Yoga Barn in Ubud,
                Bali, guiding thousands of women and curating certification
                programs for Fortune 500 corporations across four continents.
                Her Womb Wisdom & Wellbeing methodology sits at the intersection
                of evidence-based health science and somatic feminine
                intelligence.
              </p>
              <p className="font-sans text-base text-cacao/80 leading-relaxed">
                She brings the rigor of a public health scientist, the strategy
                of an executive, and the wisdom of a woman who has walked every
                step of this path herself.
              </p>
            </motion.div>

            <motion.p
              variants={staggerItem}
              className="font-serif italic text-lg text-rust mt-8"
            >
              Chocolako doesn't teach what she studied. She teaches what she
              survived, integrated, and transformed. This training is the most
              complete expression of that work. She built it for you.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
