import { motion } from "framer-motion"
import { Section } from "@/components/Section"
import type { ClassesContent } from "@/content/forge"

type ClassesProps = { content: ClassesContent }

export function Classes({ content }: ClassesProps) {
  return (
    <Section id="classes" className="bg-background">
      <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6, ease: "easeOut" }} className="mb-10 md:mb-14">
        <p className="text-sm font-medium uppercase tracking-widest text-foreground/50">{content.eyebrow}</p>
        <h2 className="mt-3 max-w-2xl text-4xl font-semibold leading-tight md:text-5xl">{content.heading}</h2>
      </motion.div>
      <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.7, ease: "easeOut" }} className="flex flex-col gap-3 md:h-[600px] md:flex-row">
        {content.classes.map((item) => (
          <div key={item.name} className="group relative h-80 cursor-pointer overflow-hidden rounded-2xl md:h-auto md:flex-1 md:transition-all md:duration-500 md:ease-out md:hover:flex-[3]">
            <img src={item.image} alt={item.name} className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/10" />
            <div className="absolute inset-x-0 bottom-0 flex flex-col gap-3 p-6">
              <div className="flex items-center gap-3 text-xs font-medium uppercase tracking-wider text-white/60">
                <span>{item.duration}</span>
                <span className="h-1 w-1 rounded-full bg-white/40" />
                <span>{item.intensity}</span>
              </div>
              <h3 className="text-2xl font-semibold text-white">{item.name}</h3>
              <p className="max-w-xs text-sm leading-relaxed text-white/75 transition-all duration-300 max-md:opacity-100 md:translate-y-2 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100">{item.description}</p>
            </div>
          </div>
        ))}
      </motion.div>
    </Section>
  )
}
