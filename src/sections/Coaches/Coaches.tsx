import { motion } from "framer-motion"
import type { CoachesContent, Coach } from "@/content/forge"

const InstagramIcon = () => (
  <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.266.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
  </svg>
)

const LinkedInIcon = () => (
  <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.722-2.004 1.418-.103.249-.129.597-.129.946v5.441h-3.554s.05-8.811 0-9.728h3.554v1.375c.425-.654 1.187-1.587 2.882-1.587 2.105 0 3.681 1.376 3.681 4.342v5.598zM5.337 8.855c-1.144 0-1.915-.758-1.915-1.704 0-.948.77-1.704 1.963-1.704 1.192 0 1.915.756 1.929 1.704 0 .946-.737 1.704-1.977 1.704zm1.581 11.597H3.756V9.024h3.162v11.428zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
)

function CoachRow({ coach, index }: { coach: Coach; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -24 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.1 + index * 0.12 }}
      className="group relative border-b border-white/[0.07] py-8 transition-colors duration-300 hover:bg-white/2.5"
    >
      {/* Amber left-border that draws down on hover */}
      <span className="pointer-events-none absolute inset-y-0 left-0 w-0.5 origin-top scale-y-0 bg-primary transition-transform duration-300 ease-out group-hover:scale-y-100" />

      {/* Desktop */}
      <div className="hidden md:grid md:grid-cols-[2.5rem_1fr_1.5fr_auto] md:items-center md:gap-x-10 md:pl-4">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 + index * 0.12 }}
          className="font-mono text-[11px] tracking-widest text-primary/35 transition-colors duration-300 group-hover:text-primary"
        >
          {String(index + 1).padStart(2, "0")}
        </motion.span>

        <div>
          <h3 className="font-[Fraunces] text-[2rem] font-light leading-snug text-foreground/90 transition-colors duration-300 group-hover:text-white">
            {coach.name}
          </h3>
          <p className="mt-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-foreground/35 transition-colors duration-300 group-hover:text-foreground/55">
            {coach.role}
          </p>
          <p className="text-[10px] uppercase tracking-[0.13em] text-foreground/20 transition-colors duration-300 group-hover:text-foreground/35">
            {coach.specialty}
          </p>
        </div>

        <p className="text-sm leading-relaxed text-foreground/50 transition-colors duration-300 group-hover:text-foreground/70">
          {coach.bio}
        </p>

        <div className="flex items-center gap-2 pr-1">
          {coach.instagram && (
            <a
              href={coach.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 text-foreground/25 transition-all duration-200 hover:border-pink-500/60 hover:text-pink-500 hover:bg-pink-500/8"
            >
              <InstagramIcon />
            </a>
          )}
          {coach.linkedin && (
            <a
              href={coach.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 text-foreground/25 transition-all duration-200 hover:border-sky-500/60 hover:text-sky-500 hover:bg-sky-500/8"
            >
              <LinkedInIcon />
            </a>
          )}
        </div>
      </div>

      {/* Mobile */}
      <div className="pl-3 md:hidden">
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0">
            <span className="font-mono text-[10px] tracking-widest text-primary/50">
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3 className="font-[Fraunces] mt-1 text-2xl font-light text-foreground">{coach.name}</h3>
            <p className="mt-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-foreground/35">{coach.role}</p>
          </div>
          <div className="flex shrink-0 gap-1.5 pt-1">
            {coach.instagram && (
              <a href={coach.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 text-foreground/30 transition-all duration-200 hover:border-pink-500/60 hover:text-pink-500">
                <InstagramIcon />
              </a>
            )}
            {coach.linkedin && (
              <a href={coach.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 text-foreground/30 transition-all duration-200 hover:border-sky-500/60 hover:text-sky-500">
                <LinkedInIcon />
              </a>
            )}
          </div>
        </div>
        <p className="mt-3 text-sm leading-relaxed text-foreground/50">{coach.bio}</p>
      </div>
    </motion.div>
  )
}

export function Coaches({ content }: { content: CoachesContent }) {
  return (
    <section
      id="coaches"
      className="bg-[#0f0e0d] px-6 py-16 md:min-h-svh md:snap-start md:flex md:flex-col md:justify-center md:px-8 md:pt-28 md:pb-10"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-[280px_1fr] md:gap-20 md:items-start">

          {/* Left: label + large heading */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="md:pt-8.25"
          >
            <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-primary">
              {content.eyebrow}
            </p>
            <h2 className="font-[Fraunces] mt-4 text-4xl font-light leading-[1.1] tracking-tight text-foreground md:text-5xl">
              {content.heading}
            </h2>
          </motion.div>

          {/* Right: ruled coach list */}
          <div>
            {/* Animated top rule */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut" as const }}
              className="h-px origin-left bg-white/[0.07]"
            />

            {content.coaches.map((coach, i) => (
              <CoachRow key={coach.name} coach={coach} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
