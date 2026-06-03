import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { useScrollSnap } from "@/hooks/useScrollSnap"
import { Navbar } from "@/sections/Navbar/Navbar"
import { forgeNav } from "@/content/forge"
import { Hero } from "@/sections/Hero/Hero"
import { forgeHero } from "@/content/forge"
import { Classes } from "@/sections/Classes/Classes"
import { forgeClasses } from "@/content/forge"
import { Coaches } from "@/sections/Coaches/Coaches"
import { forgeCoaches } from "@/content/forge"
import { Pricing } from "@/sections/Pricing/Pricing"
import { forgePricing } from "@/content/forge"
import { Testimonials } from "@/sections/Testimonials/Testimonials"
import { Contact } from "@/sections/Contact/Contact"
import { forgeContact } from "@/content/forge"
import { Footer } from "@/sections/Footer/Footer"
import { forgeFooter } from "@/content/forge"
import { BookingModal } from "@/sections/Booking/BookingModal"

const SNAP_SECTIONS = ["hero", "classes", "coaches", "pricing", "testimonials", "contact"] as const

function SectionNav() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    function update() {
      const mid = window.scrollY + window.innerHeight / 2
      let idx = 0
      SNAP_SECTIONS.forEach((id, i) => {
        const el = document.getElementById(id)
        if (el && el.offsetTop <= mid) idx = i
      })
      setActive(idx)
    }
    window.addEventListener("scroll", update, { passive: true })
    update()
    return () => window.removeEventListener("scroll", update)
  }, [])

  function goTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  return (
    <div className="fixed right-5 top-1/2 z-40 hidden -translate-y-1/2 flex-col items-center gap-2.5 md:flex">
      {SNAP_SECTIONS.map((id, i) => (
        <motion.button
          key={id}
          onClick={() => goTo(id)}
          aria-label={`Go to ${id}`}
          animate={{
            height: i === active ? 20 : 6,
            backgroundColor:
              i === active
                ? "oklch(0.68 0.19 41)"
                : "rgba(255, 255, 255, 0.18)",
          }}
          whileHover={{
            backgroundColor:
              i === active
                ? "oklch(0.68 0.19 41)"
                : "rgba(255, 255, 255, 0.45)",
          }}
          transition={{ duration: 0.28, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="w-[3px] rounded-full"
        />
      ))}
    </div>
  )
}

function App() {
  const [bookingClass, setBookingClass] = useState<string | null>(null)
  useScrollSnap()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar content={forgeNav} />
      <SectionNav />
      <Hero content={forgeHero} />

      <Classes content={forgeClasses} onBook={setBookingClass} />
      <Coaches content={forgeCoaches} />
      <Pricing content={forgePricing} />
      <Testimonials />
      <div id="contact" className="snap-start">
        <Contact content={forgeContact} />
        <Footer content={forgeFooter} />
      </div>

      <BookingModal className={bookingClass} onClose={() => setBookingClass(null)} />
    </main>
  )
}

export default App
