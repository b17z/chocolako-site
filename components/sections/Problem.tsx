"use client"

import { motion, AnimatePresence, useReducedMotion } from "framer-motion"
import { useState } from "react"
import { SectionWrapper } from "@/components/shared/motion"
import { ChevronDown } from "lucide-react"

interface ProblemItem {
  id: string
  title: string
  summary: string
  content: string
}

const problems: ProblemItem[] = [
  {
    id: "external",
    title: "The External Problem",
    summary: "You're exhausted and rest doesn't restore you.",
    content:
      "Not because you're broken. But because your nervous system has been stuck in survival mode for so long, it's forgotten how to return to safety. You've been operating in a world that demands constant output—no cycles, no rest, no fluctuation. Just performance, nonstop. Systems of productivity were built by people who don't experience menstrual cycles, pregnancy, menopause, or hormonal shifts. Your exhaustion is not a personal failure. It's a biological rebellion against systems designed to extract from you without regeneration.",
  },
  {
    id: "internal",
    title: "The Internal Problem",
    summary: "You feel like you're betraying yourself. And you are.",
    content:
      "Every time you override your intuition to meet a deadline. Every time you silence your body to stay productive. Every time you perform resilience when you're actually breaking. You're choosing external validation over internal truth. And the cost is this: You're becoming a stranger to yourself. The fragmentation and betrayal you feel is grief—the accumulated loss of every time you split yourself in half to be accepted.",
  },
  {
    id: "inherited",
    title: "The Inherited Problem",
    summary: "None of this is your fault. This is a lineage wound.",
    content:
      "Your mother, grandmother, great-grandmother and all the women before them inherited this disconnection. You inherited it too. Women have been disconnected from their bodies for generations because embodied women are dangerous to systems built on control. A woman who trusts her cyclical intelligence cannot be gaslit. A woman who honors her womb wisdom will not comply with structures that demand her silence. A woman who listens to her body will dismantle every lie she's been told about what she must sacrifice to matter.",
  },
]

interface ProblemPanelProps {
  problem: ProblemItem
  isOpen: boolean
  onToggle: () => void
  index: number
}

function ProblemPanel({ problem, isOpen, onToggle, index }: ProblemPanelProps) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="border-b border-espresso/10 last:border-b-0"
    >
      <button
        onClick={onToggle}
        className="w-full py-6 md:py-8 flex items-start justify-between text-left group"
        aria-expanded={isOpen}
      >
        <div className="flex-1 pr-4">
          <h3 className="font-serif text-xl md:text-2xl text-espresso mb-2 group-hover:text-cacao transition-colors">
            {problem.title}
          </h3>
          <p className="text-cacao/70 text-base md:text-lg">{problem.summary}</p>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.3, ease: "easeInOut" }}
          className="flex-shrink-0 mt-1"
        >
          <ChevronDown className="w-6 h-6 text-espresso/60" />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{
              height: { duration: shouldReduceMotion ? 0 : 0.3, ease: "easeInOut" },
              opacity: { duration: shouldReduceMotion ? 0 : 0.2 },
            }}
            className="overflow-hidden"
          >
            <div className="pb-6 md:pb-8 pr-10">
              <p className="text-espresso/80 leading-relaxed max-w-3xl">
                {problem.content}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export function Problem() {
  const [openId, setOpenId] = useState<string | null>(null)

  const handleToggle = (id: string) => {
    setOpenId(openId === id ? null : id)
  }

  return (
    <SectionWrapper className="py-20 md:py-32 bg-bone relative overflow-hidden">
      {/* Subtle texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="container mx-auto px-6 relative">
        <div className="max-w-4xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-gold uppercase tracking-[0.2em] text-sm mb-4"
          >
            The Problem
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-3xl md:text-4xl lg:text-5xl text-espresso mb-6"
          >
            Why the old approach isn't working
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-cacao/70 text-lg mb-12 md:mb-16 max-w-2xl"
          >
            You achieve everything you set out to do. So why does your body feel like it's paying the price for survival?
          </motion.p>

          <div className="border-t border-espresso/10">
            {problems.map((problem, index) => (
              <ProblemPanel
                key={problem.id}
                problem={problem}
                isOpen={openId === problem.id}
                onToggle={() => handleToggle(problem.id)}
                index={index}
              />
            ))}
          </div>

          {/* Stakes section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 md:mt-16 p-8 md:p-10 bg-gradient-to-br from-cacao/5 to-transparent rounded-2xl border border-cacao/10"
          >
            <h3 className="font-serif text-xl md:text-2xl text-espresso mb-4">
              And if nothing changes?
            </h3>
            <p className="text-espresso/70 leading-relaxed">
              Your nervous system will escalate signals—chronic illness, autoimmune disorders, fertility issues, early menopause, mental health crises. Your body will force you to stop because you refused to listen when it whispered. And you pass this pattern of disconnection to the next generation. The wisdom your body holds that could reshape culture dies with you, unspoken.
            </p>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  )
}
