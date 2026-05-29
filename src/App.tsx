import { Navbar } from "@/sections/Navbar/Navbar"
import { forgeNav } from "@/content/forge"
import { Hero } from "@/sections/Hero/Hero"
import { forgeHero } from "@/content/forge"
import { Classes } from "@/sections/Classes/Classes"
import { forgeClasses } from "@/content/forge"

function App() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar content={forgeNav} />
      <Hero content={forgeHero} />
      <Classes content={forgeClasses} />
    </main>
  )
}

export default App
