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
    summary: "The systems weren't built for you.",
    content:
      "Corporate leadership models were designed by and for a different archetype. You've mastered their rules, exceeded their metrics, and still feel like you're wearing borrowed armor. The exhaustion isn't from the work—it's from constantly translating yourself into a language that was never meant to hold your full expression.",
  },
  {
    id: "internal",
    title: "The Internal Problem",
    summary: "Your body keeps the score.",
    content:
      "Years of overriding your body's wisdom have created a nervous system stuck in survival mode. The midnight spiraling, the Sunday dread, the inability to rest even when you have time—these aren't character flaws. They're symptoms of a system that taught you success means ignoring every signal your body sends.",
  },
  {
    id: "inherited",
    title: "The Inherited Problem",
    summary: "Generations of silenced wisdom.",
    content:
      "Somewhere in your lineage, women learned that safety meant shrinking, that power was dangerous, that intuition was unreliable. These inherited patterns live in your body, shaping your leadership in ways your conscious mind can't see. The wisdom of your feminine line waits to be reclaimed.",
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
          <h3 className="font-serif text-xl md:text-2xl text-espresso mb-2 group-hover:text-espresso/80 transition-colors">
            {problem.title}
          </h3>
          <p className="text-sand text-base md:text-lg">{problem.summary}</p>
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
    <SectionWrapper className="py-20 md:py-32 bg-bone">
      <div className="container mx-auto px-6">
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
            className="font-serif text-3xl md:text-4xl lg:text-5xl text-espresso mb-12 md:mb-16"
          >
            Why the old approach isn't working
          </motion.h2>

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
        </div>
      </div>
    </SectionWrapper>
  )
}
