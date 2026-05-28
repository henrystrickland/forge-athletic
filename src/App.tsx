import { Hero } from "@/sections/Hero/Hero"
import { forgeHero } from "@/content/forge"

function App() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Hero content={forgeHero} />
    </main>
  )
}

export default App