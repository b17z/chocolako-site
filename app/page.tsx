import { Hero } from "@/components/sections/Hero"
import { Problem } from "@/components/sections/Problem"
import { Pathways } from "@/components/sections/Pathways"
import { WhoThisIsFor } from "@/components/sections/WhoThisIsFor"
import { Methodology } from "@/components/sections/Methodology"

export default function Home() {
  return (
    <main>
      <Hero />
      <Problem />
      <Pathways />
      <WhoThisIsFor />
      <Methodology />
      <div className="h-screen bg-espresso" />
    </main>
  )
}
