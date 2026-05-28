import { Hero } from "@/sections/Hero/Hero"
import { forgeHero } from "@/content/forge"
import { Navbar } from "@/sections/Navbar/Navbar"
import { forgeNav } from "@/content/forge"

function App() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar content={forgeNav} />
      <Hero content={forgeHero} />
    </main>
  )
}

export default App
