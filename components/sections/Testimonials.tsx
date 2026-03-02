"use client"

import { motion, AnimatePresence, useReducedMotion } from "framer-motion"
import { useState, useEffect, useCallback } from "react"
import { SectionWrapper } from "@/components/shared/motion"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface Testimonial {
  id: string
  quote: string
  name: string
  title: string
}

const testimonials: Testimonial[] = [
  {
    id: "sarah",
    quote:
      "This work fundamentally changed how I lead. I used to push through exhaustion as a badge of honor. Now I lead from a regulated nervous system, and paradoxically, I'm more effective than ever.",
    name: "Sarah Chen",
    title: "CEO, Tech Startup",
  },
  {
    id: "maria",
    quote:
      "I came for the business tools, but what I found was a complete recalibration of my relationship with power. The feminine leadership model isn't soft—it's sustainable strength.",
    name: "Maria Santos",
    title: "Partner, Global Consulting Firm",
  },
  {
    id: "aisha",
    quote:
      "The SFI training gave me language and practices for what I'd always intuited but couldn't articulate. I now facilitate this work with my own executive clients.",
    name: "Dr. Aisha Williams",
    title: "Executive Coach",
  },
]

const crossfadeVariants = {
  enter: {
    opacity: 0,
  },
  center: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
}

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const shouldReduceMotion = useReducedMotion()

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }, [])

  const goToPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }, [])

  const goToIndex = useCallback((index: number) => {
    setCurrentIndex(index)
  }, [])

  // Auto-rotate every 6 seconds, pause on hover
  useEffect(() => {
    if (isPaused) return

    const interval = setInterval(() => {
      goToNext()
    }, 6000)

    return () => clearInterval(interval)
  }, [isPaused, goToNext])

  const currentTestimonial = testimonials[currentIndex]
  const animationDuration = shouldReduceMotion ? 0 : 0.5

  return (
    <SectionWrapper className="py-20 md:py-32 bg-jungle">
      <div
        className="container mx-auto px-6"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-gold uppercase tracking-[0.3em] text-sm mb-12 md:mb-16 text-center"
          >
            Voices of Transformation
          </motion.p>

          {/* Testimonial Carousel */}
          <div className="relative min-h-[280px] md:min-h-[240px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial.id}
                variants={crossfadeVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: animationDuration, ease: "easeInOut" }}
                className="text-center"
              >
                {/* Quote */}
                <blockquote className="font-serif text-xl md:text-2xl lg:text-3xl text-bone leading-relaxed mb-8 md:mb-10">
                  &ldquo;{currentTestimonial.quote}&rdquo;
                </blockquote>

                {/* Attribution */}
                <div>
                  <p className="text-gold font-medium text-lg mb-1">
                    {currentTestimonial.name}
                  </p>
                  <p className="text-sage/70 text-sm tracking-wide">
                    {currentTestimonial.title}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-8 mt-12">
            {/* Previous Button */}
            <button
              onClick={goToPrev}
              aria-label="Previous testimonial"
              className="p-2 text-bone/60 hover:text-bone transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Dot Indicators */}
            <div className="flex gap-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToIndex(index)}
                  aria-label={`Go to testimonial ${index + 1}`}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "bg-gold w-6"
                      : "bg-bone/30 hover:bg-bone/50"
                  }`}
                />
              ))}
            </div>

            {/* Next Button */}
            <button
              onClick={goToNext}
              aria-label="Next testimonial"
              className="p-2 text-bone/60 hover:text-bone transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}
