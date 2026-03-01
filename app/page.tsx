import { SectionWrapper, AnimatedText } from "@/components/shared/motion"

export default function Home() {
  return (
    <main className="min-h-screen bg-espresso text-bone">
      <SectionWrapper className="min-h-screen flex flex-col items-center justify-center p-8">
        <AnimatedText
          as="h1"
          text="Innergy by Chocolako"
          className="font-serif text-5xl md:text-7xl text-gold text-center"
        />
        <AnimatedText
          as="p"
          text="Transform your relationship with power through somatic intelligence."
          className="font-sans text-lg text-sand mt-6 text-center max-w-xl"
        />
      </SectionWrapper>
    </main>
  )
}
