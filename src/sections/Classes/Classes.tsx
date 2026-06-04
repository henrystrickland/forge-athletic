import { motion } from "framer-motion"
import { Section } from "@/components/Section"
import type { ClassesContent } from "@/content/forge"
import { openBooking } from "@/lib/cal"

type ClassesProps = { content: ClassesContent }

export function Classes({ content }: ClassesProps) {
  return (
    <Section id="classes" className="bg-[#080808]">
      <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6, ease: "easeOut" as const }} className="mb-8 md:mb-14">
        <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-primary">{content.eyebrow}</p>
        <h2 className="font-[Fraunces] mt-3 max-w-2xl text-4xl font-light tracking-tight text-foreground md:text-5xl">{content.heading}</h2>
      </motion.div>
      <div className="flex flex-col gap-3 md:h-[600px] md:flex-row">
        {content.classes.map((item, i) => (
          <motion.div
            key={item.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94], delay: i * 0.1 }}
            className="group relative h-80 cursor-pointer overflow-hidden rounded-2xl md:h-auto md:flex-1 md:transition-all md:duration-500 md:ease-out md:hover:flex-[3]"
          >
            <img src={item.image} alt={item.name} loading="lazy" decoding="async" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/10" />
            <div className="absolute inset-x-0 bottom-0 flex flex-col gap-3 p-6">
              <div className="flex items-center gap-2.5 text-[10px] font-semibold uppercase tracking-[0.15em] text-white/50">
                <span>{item.duration}</span>
                <span className="h-0.5 w-0.5 rounded-full bg-white/30" />
                <span>{item.intensity}</span>
              </div>
              <h3 className="font-[Fraunces] text-2xl font-light text-white">{item.name}</h3>
              <p className="max-w-xs text-sm leading-relaxed text-white/70 transition-all duration-300 max-md:opacity-100 md:translate-y-2 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100">{item.description}</p>
              <button
                onClick={() => openBooking(item.calLink)}
                className="mt-2 self-start rounded-full bg-primary px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white transition-all duration-200 hover:opacity-90 max-md:opacity-100 md:mt-1 md:px-4 md:py-2 md:translate-y-2 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100"
              >
                Book
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
