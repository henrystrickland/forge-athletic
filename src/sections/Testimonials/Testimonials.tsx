import { motion } from "framer-motion"
import { Section } from "@/components/Section"
import { TestimonialsColumn } from "@/components/ui/testimonials-columns-1"
import type { Testimonial } from "@/components/ui/testimonials-columns-1"

const testimonials: Testimonial[] = [
  {
    text: "Training here changed my approach to strength completely. The coaches know exactly how to push you without breaking you.",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    name: "Claire Donovan",
    role: "Member since 2023",
  },
  {
    text: "Best studio in Brooklyn. Small classes mean you actually get coached, not just watched.",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    name: "Marcus Webb",
    role: "Barbell Foundations",
  },
  {
    text: "Three months in and I've hit PRs I didn't think were possible. The programming is intelligent and intentional.",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
    name: "Priya Nair",
    role: "Membership",
  },
  {
    text: "The Mobility class alone was worth the membership. My knees actually feel good for the first time in years.",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
    name: "Tom Eckhart",
    role: "Mobility & Recovery",
  },
  {
    text: "Joined for the barbell program, stayed for the community. It's a genuinely rare thing.",
    image: "https://randomuser.me/api/portraits/women/5.jpg",
    name: "Leah Castillo",
    role: "Intensive",
  },
  {
    text: "I've been to a lot of gyms. Forge is different — the coaches care about your form, not just your attendance.",
    image: "https://randomuser.me/api/portraits/men/6.jpg",
    name: "Daniel Yoo",
    role: "Member since 2022",
  },
  {
    text: "Conditioning sessions are brutal in the best way. I can now keep up on trail runs that used to destroy me.",
    image: "https://randomuser.me/api/portraits/women/7.jpg",
    name: "Sofia Reyes",
    role: "Conditioning",
  },
  {
    text: "The open strength sessions with expert eyes nearby was exactly what I needed. No guesswork.",
    image: "https://randomuser.me/api/portraits/men/8.jpg",
    name: "James Hollis",
    role: "Open Strength",
  },
  {
    text: "Everything here is intentional — the programming, the space, the people. It shows.",
    image: "https://randomuser.me/api/portraits/women/9.jpg",
    name: "Anya Petrov",
    role: "Intensive",
  },
]

const firstColumn = testimonials.slice(0, 3)
const secondColumn = testimonials.slice(3, 6)
const thirdColumn = testimonials.slice(6, 9)

export function Testimonials() {
  return (
    <Section id="testimonials" className="bg-[#131211] overflow-hidden">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" as const }}
        className="mb-12 md:mb-16"
      >
        <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-primary">
          What members say
        </p>
        <h2 className="font-[Fraunces] mt-3 text-4xl font-light tracking-tight text-foreground md:text-5xl">
          Real results, real people.
        </h2>
      </motion.div>

      {/* Scrolling columns */}
      <div className="flex justify-start gap-4 [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)] max-h-[600px] overflow-hidden md:justify-center">
        <TestimonialsColumn testimonials={firstColumn} duration={18} />
        <TestimonialsColumn
          testimonials={secondColumn}
          className="hidden md:block"
          duration={22}
        />
        <TestimonialsColumn
          testimonials={thirdColumn}
          className="hidden lg:block"
          duration={20}
        />
      </div>
    </Section>
  )
}
