import { Section } from "@/components/Section"

function App() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Section id="hero">
        <div className="flex flex-col items-center justify-center min-h-[80vh] text-center">
          <h1 className="font-[Fraunces] text-6xl md:text-8xl font-light tracking-tight">
            Forge Athletic Co.
          </h1>
          <p className="mt-6 text-xl md:text-2xl text-primary font-[Fraunces] italic">
            Strength, refined.
          </p>
        </div>
      </Section>
    </main>
  )
}

export default App