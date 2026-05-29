import { motion } from "framer-motion"
import { Section } from "@/components/Section"
import type { ClassesContent } from "@/content/forge"

type ClassesProps = { content: ClassesContent }

export function Classes({ content }: ClassesProps) {
  return (
    <Section id="classes" className="bg-background">
      <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6 }} className="mb-12 text-center">
        <p className="text-sm font-medium uppercase tracking-widest text-foreground/60">{content.eyebrow}</p>
        <h2 className="mt-3 text-4xl font-semibold md:text-5xl">{content.heading}</h2>
      </motion.div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {content.classes.map((item, index) => (
          <motion.div key={item.name} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.5, delay: index * 0.1 }} className="flex flex-col rounded-2xl border border-foreground/10 bg-foreground/5 p-6 transition-colors hover:border-foreground/30">
            <div className="flex items-center justify-between text-xs font-medium uppercase tracking-wide text-foreground/50">
              <span>{item.duration}</span>
              <span>{item.intensity}</span>
            </div>
            <h3 className="mt-4 text-xl font-semibold">{item.name}</h3>
            <p className="mt-2 text-sm text-foreground/70">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
