"use client"

import { motion, useReducedMotion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, ReactNode } from "react"
import { fadeInUp, reduceMotion } from "@/lib/animations"

interface SectionWrapperProps {
  children: ReactNode
  className?: string
  delay?: number
}

export function SectionWrapper({ children, className = "", delay = 0 }: SectionWrapperProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const shouldReduceMotion = useReducedMotion()

  const variants = shouldReduceMotion ? reduceMotion : fadeInUp

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.section>
  )
}

interface AnimatedTextProps {
  text: string
  className?: string
  as?: "h1" | "h2" | "h3" | "p" | "span"
}

export function AnimatedText({ text, className = "", as: Tag = "p" }: AnimatedTextProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })
  const shouldReduceMotion = useReducedMotion()

  if (shouldReduceMotion) {
    return <Tag className={className}>{text}</Tag>
  }

  const words = text.split(" ")

  return (
    <Tag ref={ref} className={className}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          className="inline-block mr-[0.25em]"
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 0.4, delay: i * 0.05 }}
        >
          {word}
        </motion.span>
      ))}
    </Tag>
  )
}
