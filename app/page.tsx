import { Hero } from "@/components/sections/Hero"
import { Problem } from "@/components/sections/Problem"
import { Pathways } from "@/components/sections/Pathways"

export default function Home() {
  return (
    <main>
      <Hero />
      <Problem />
      <Pathways />
      <div className="h-screen bg-espresso" />
    </main>
  )
}
