"use client"

import { useState } from "react"
import { motion, useScroll, useMotionValueEvent } from "framer-motion"

export function YTTStickyCTA() {
  const [visible, setVisible] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, "change", (latest) => {
    setVisible(latest > window.innerHeight)
  })

  return (
    <motion.div
      className="fixed bottom-0 left-0 right-0 z-50 bg-bone/90 backdrop-blur-md border-t border-cacao/10"
      initial={{ y: 100, opacity: 0 }}
      animate={visible ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" as const }}
    >
      <div className="max-w-5xl mx-auto px-6 py-3 flex items-center justify-between">
        <div className="hidden sm:block">
          <p className="font-serif text-sm text-cacao">
            Womb Wisdom &amp; Wellbeing YTT
          </p>
          <p className="font-sans text-xs text-cacao/50">
            Morocco &middot; August 1&ndash;22, 2026
          </p>
        </div>
        <a
          href="#registration"
          className="inline-block bg-gold hover:bg-gold/90 text-espresso font-sans font-medium px-6 py-2.5 rounded-full transition-colors text-sm"
        >
          Book Your Application Call
        </a>
      </div>
    </motion.div>
  )
}
