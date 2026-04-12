"use client"

import { useState, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface Question {
  text: string
  options: string[]
}

const questions: Question[] = [
  {
    text: "When you check in with your body right now, what\u2019s most true?",
    options: [
      "I feel capable but disconnected, like I\u2019m running on habit rather than presence",
      "I have a diagnosis or physical pattern I\u2019ve been managing rather than understanding",
      "I\u2019m in transition and my body feels like unfamiliar territory",
      "I\u2019ve done the work on myself and I\u2019m ready to guide other women through it",
    ],
  },
  {
    text: "What would feel like the most meaningful shift in the next 12 months?",
    options: [
      "Understanding what my body has been trying to tell me",
      "Building a sustainable relationship with my energy and my work",
      "Leading from a regulated nervous system rather than a depleted one",
      "Certifying in a methodology I can offer the women in my life and my work",
    ],
  },
  {
    text: "When you think about investing in yourself right now, what feels most honest?",
    options: [
      "I want to begin with something accessible and let that open the door",
      "I\u2019m ready for a full immersive experience, I\u2019ve been waiting for the right one",
      "I want ongoing support and community, not a one-time event",
      "I\u2019m ready for the most comprehensive training available",
    ],
  },
  {
    text: "What describes your relationship with your body most accurately right now?",
    options: [
      "Functional but not fully listened to",
      "Managed through a medical framework that doesn\u2019t feel complete",
      "In active rebuilding, I\u2019m finding my way back",
      "Genuinely at home, and ready to help others get here too",
    ],
  },
  {
    text: "One word for how you most want to feel inside your work and your body:",
    options: ["Grounded", "Whole", "Powerful", "Free"],
  },
]

const slideVariants = {
  enter: { opacity: 0, x: 60 },
  center: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -60 },
}

export function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswers, setSelectedAnswers] = useState<(number | null)[]>(
    Array(questions.length).fill(null)
  )
  const [showResults, setShowResults] = useState(false)

  const handleSelect = useCallback(
    (optionIndex: number) => {
      setSelectedAnswers((prev) => {
        const next = [...prev]
        next[currentQuestion] = optionIndex
        return next
      })

      setTimeout(() => {
        if (currentQuestion < questions.length - 1) {
          setCurrentQuestion((prev) => prev + 1)
        } else {
          setShowResults(true)
        }
      }, 500)
    },
    [currentQuestion]
  )

  const progress = showResults
    ? 100
    : ((currentQuestion + 1) / questions.length) * 100

  return (
    <section id="quiz" className="py-24 md:py-32 bg-bone">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-3xl md:text-5xl text-espresso mb-4">
            Not sure where to begin?
          </h2>
          <p className="text-cacao/70 max-w-2xl mx-auto text-lg leading-relaxed">
            In 90 seconds answer five questions. We&rsquo;ll show you exactly
            where you are and what this work has for you from here.
          </p>
        </motion.div>

        {/* Quiz Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mx-auto"
        >
          {/* Progress Bar */}
          <div className="mb-10">
            <div className="flex justify-between text-sm text-cacao/60 mb-2">
              <span>
                {showResults
                  ? "Complete"
                  : `Question ${currentQuestion + 1} of ${questions.length}`}
              </span>
            </div>
            <div className="h-1 bg-sand rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gold rounded-full"
                initial={{ width: "20%" }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
              />
            </div>
          </div>

          {/* Questions / Results */}
          <div className="relative min-h-[400px]">
            <AnimatePresence mode="wait">
              {!showResults ? (
                <motion.div
                  key={currentQuestion}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.35, ease: "easeInOut" }}
                >
                  <h3 className="font-serif text-2xl md:text-3xl text-espresso mb-8 leading-snug">
                    {questions[currentQuestion].text}
                  </h3>

                  <div className="space-y-3">
                    {questions[currentQuestion].options.map((option, index) => {
                      const isSelected =
                        selectedAnswers[currentQuestion] === index
                      return (
                        <button
                          key={index}
                          onClick={() => handleSelect(index)}
                          className={`
                            w-full text-left bg-white border rounded-lg p-6
                            transition-all duration-200 cursor-pointer
                            ${
                              isSelected
                                ? "border-gold bg-cream"
                                : "border-sand hover:border-gold"
                            }
                          `}
                        >
                          <span className="text-cacao leading-relaxed">
                            {option}
                          </span>
                        </button>
                      )
                    })}
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="results"
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.35, ease: "easeInOut" }}
                  className="text-center"
                >
                  <h3 className="font-serif text-2xl md:text-3xl text-espresso mb-3">
                    Where would you like your results sent?
                  </h3>
                  <p className="text-cacao/70 mb-10">
                    We&rsquo;ll send your personalized path straight to your
                    inbox.
                  </p>

                  <div className="max-w-md mx-auto space-y-4">
                    <input
                      type="text"
                      placeholder="First name"
                      className="w-full border border-sand rounded-lg px-5 py-4 bg-white text-cacao placeholder:text-cacao/40 focus:outline-none focus:border-gold transition-colors font-sans"
                    />
                    <input
                      type="email"
                      placeholder="Email address"
                      className="w-full border border-sand rounded-lg px-5 py-4 bg-white text-cacao placeholder:text-cacao/40 focus:outline-none focus:border-gold transition-colors font-sans"
                    />
                    <button className="w-full bg-gold hover:bg-gold/90 text-white font-medium rounded-lg px-5 py-4 transition-colors mt-2 cursor-pointer">
                      Show me my path
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
