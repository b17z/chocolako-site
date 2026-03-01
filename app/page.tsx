import { Hero } from "@/components/sections/Hero"
import { Problem } from "@/components/sections/Problem"

export default function Home() {
  return (
    <main>
      <Hero />
      <Problem />
      {/* More sections coming */}
      <div className="h-screen bg-bone" />
    </main>
  )
}
