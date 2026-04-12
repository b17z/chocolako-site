"use client"

import { motion } from "framer-motion"
import { staggerContainer, staggerItem } from "@/lib/animations"

export function YTTFaculty() {
  return (
    <section className="bg-sand py-24 md:py-32">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="uppercase tracking-[0.2em] text-xs text-gold font-sans mb-4">
            GUEST FACULTY
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-cacao">
            Learn from women at the forefront of their fields
          </h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <motion.div variants={staggerItem} className="bg-white rounded-lg p-6 border border-cacao/10">
            <div className="aspect-square bg-cream rounded-lg mb-4 flex items-center justify-center">
              <span className="font-sans text-sm text-cacao/40">Photo</span>
            </div>
            <h3 className="font-serif text-lg text-cacao mb-1">Emma Perks</h3>
            <p className="font-sans text-sm text-cacao/60 leading-relaxed">
              Musculoskeletal &amp; Women&apos;s Pelvic Health Physiotherapist
            </p>
          </motion.div>

          <motion.div variants={staggerItem} className="bg-white rounded-lg p-6 border border-cacao/10">
            <div className="aspect-square bg-cream rounded-lg mb-4 flex items-center justify-center">
              <span className="font-sans text-sm text-cacao/40">Photo</span>
            </div>
            <h3 className="font-serif text-lg text-cacao mb-1">Ibu Robin</h3>
            <p className="font-sans text-sm text-cacao/60 leading-relaxed">
              International Doula &amp; Bumi Sehat Founder
            </p>
          </motion.div>

          <motion.div variants={staggerItem} className="bg-white rounded-lg p-6 border border-cacao/10">
            <div className="aspect-square bg-cream rounded-lg mb-4 flex items-center justify-center">
              <span className="font-sans text-sm text-cacao/40">Photo</span>
            </div>
            <h3 className="font-serif text-lg text-cacao mb-1">Dr. Michalina Drejza</h3>
            <p className="font-sans text-sm text-cacao/60 leading-relaxed">
              Obstetrics &amp; Gynaecology, Cambridge University
            </p>
          </motion.div>

          <motion.div variants={staggerItem} className="bg-white rounded-lg p-6 border border-cacao/10">
            <div className="aspect-square bg-cream rounded-lg mb-4 flex items-center justify-center">
              <span className="font-sans text-sm text-cacao/40">Photo</span>
            </div>
            <h3 className="font-serif text-lg text-cacao mb-1">Rachel Ellery</h3>
            <p className="font-sans text-sm text-cacao/60 leading-relaxed">
              UK Osteopath &amp; The Anatomy School Founder
            </p>
          </motion.div>

          <motion.div variants={staggerItem} className="bg-white rounded-lg p-6 border border-cacao/10">
            <div className="aspect-square bg-cream rounded-lg mb-4 flex items-center justify-center">
              <span className="font-sans text-sm text-cacao/40">Photo</span>
            </div>
            <h3 className="font-serif text-lg text-cacao mb-1">Jo Brown</h3>
            <p className="font-sans text-sm text-cacao/60 leading-relaxed">
              Somatic Counselor &amp; Reproductive Health Sexologist
            </p>
          </motion.div>

          <motion.div variants={staggerItem} className="bg-white rounded-lg p-6 border border-cacao/10">
            <div className="aspect-square bg-cream rounded-lg mb-4 flex items-center justify-center">
              <span className="font-sans text-sm text-cacao/40">Photo</span>
            </div>
            <h3 className="font-serif text-lg text-cacao mb-1">Dr. Sujatha Kekada</h3>
            <p className="font-sans text-sm text-cacao/60 leading-relaxed">
              Head Physician, AmrtaSiddhi Ayurvedic Center
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
