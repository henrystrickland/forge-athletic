import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Section } from "@/components/Section"

export type HeroBackground =
  | { type: "image"; src: string }
  | { type: "video"; src: string }
  | { type: "gradient"; colors: [string, string] }

export interface HeroContent {
  eyebrow?: string
  headline: string
  sub?: string
  cta?: { label: string; href: string }
  background: HeroBackground
}

export function Hero({ content }: { content: HeroContent }) {
  const words = content.headline.split(" ")
  const ref = useRef<HTMLElement>(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.6], [1, 0.85])

  return (
    <Section ref={ref} fullBleed id="hero" className="relative h-screen overflow-hidden">
      <div className="absolute inset-0 z-0">
        {content.background.type === "image" && (
          <motion.img
            src={content.background.src}
            alt=""
            fetchPriority="high"
            loading="eager"
            decoding="async"
            initial={{ scale: 1.06 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2.0, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="h-full w-full object-cover"
          />
        )}
        {content.background.type === "video" && (
          <video src={content.background.src} autoPlay muted loop playsInline className="h-full w-full object-cover" />
        )}
        {content.background.type === "gradient" && (
          <div
            className="h-full w-full"
            style={{ background: content.background.colors[0] }}
          />
        )}
        <div className="absolute inset-0 bg-black/55" />
      </div>

      <motion.div
        style={{ opacity, scale }}
        className="mx-auto flex h-full max-w-4xl flex-col items-center justify-center px-6 text-center"
      >
        {content.eyebrow && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8 flex items-center gap-4"
          >
            <span className="h-px w-8 bg-primary/60" />
            <p className="text-[11px] uppercase tracking-[0.3em] text-white/50">{content.eyebrow}</p>
            <span className="h-px w-8 bg-primary/60" />
          </motion.div>
        )}

        <h1 className="font-[Fraunces] text-5xl font-light tracking-tight md:text-8xl">
          {words.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 + i * 0.12 }}
              className="mr-[0.25em] inline-block"
            >
              {word}
            </motion.span>
          ))}
        </h1>

        {content.sub && (
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 + words.length * 0.12 }}
            className="mt-6 max-w-xl text-lg text-foreground/80 md:text-xl"
          >
            {content.sub}
          </motion.p>
        )}

        {content.cta && (
          <motion.a
            href={content.cta.href}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 + words.length * 0.12 }}
            className="mt-10 rounded-full bg-primary px-8 py-3 text-sm font-medium text-white transition-transform hover:scale-105"
          >
            {content.cta.label}
          </motion.a>
        )}
      </motion.div>
    </Section>
  )
}
