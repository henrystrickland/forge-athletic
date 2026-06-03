import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Section } from "@/components/Section"
import type { ContactContent } from "@/content/forge"

const SOCIAL_LINKS = [
  {
    label: "Instagram",
    href: "https://instagram.com",
    hover: "hover:border-pink-500/60 hover:text-pink-500 hover:bg-pink-500/5",
    d: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.266.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z",
  },
  {
    label: "TikTok",
    href: "https://tiktok.com",
    hover: "hover:border-white/50 hover:text-white hover:bg-white/5",
    d: "M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.34 6.34 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.92a8.16 8.16 0 004.77 1.52V7a4.85 4.85 0 01-1-.31z",
  },
]

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.55, ease: "easeOut" as const, delay },
})

type Status = "idle" | "loading" | "success"

export function Contact({ content }: { content: ContactContent }) {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" })
  const [status, setStatus] = useState<Status>("idle")

  const field = (key: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((p) => ({ ...p, [key]: e.target.value }))

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus("loading")
    await new Promise((r) => setTimeout(r, 900))
    setStatus("success")
  }

  function reset() {
    setForm({ name: "", email: "", phone: "", message: "" })
    setStatus("idle")
  }

  const inputClass =
    "w-full rounded-xl border border-border bg-foreground/[0.03] px-4 py-3.5 text-sm text-foreground placeholder:text-foreground/25 outline-none focus:border-primary/50 focus:bg-foreground/[0.05] transition-all duration-200"
  const labelClass = "block text-[10px] font-semibold uppercase tracking-[0.15em] text-foreground/40 mb-2"

  return (
    <Section noSnap className="bg-[#1c1b1a]">
      {/* Header */}
      <motion.div {...fadeUp()} className="mb-10 md:mb-16">
        <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-primary">{content.eyebrow}</p>
        <h2 className="font-[Fraunces] mt-3 text-4xl font-light tracking-tight text-foreground md:text-5xl">{content.heading}</h2>
      </motion.div>

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-[2fr_3fr] lg:gap-16">
        {/* Left — Info */}
        <div className="flex flex-col gap-10">
          <motion.p {...fadeUp(0.1)} className="text-base leading-relaxed text-foreground/60 max-w-xs">
            {content.sub}
          </motion.p>

          <div className="flex flex-col gap-0 divide-y divide-white/[0.06]">
            {content.details.map((d, i) => (
              <motion.div key={d.label} {...fadeUp(0.15 + i * 0.07)} className="py-5">
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-primary mb-1.5">{d.label}</p>
                <p className="text-sm leading-relaxed text-foreground/70 whitespace-pre-line">{d.value}</p>
              </motion.div>
            ))}
          </div>

          {/* Social */}
          <motion.div {...fadeUp(0.45)} className="flex gap-3">
            {SOCIAL_LINKS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className={`flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground/40 transition-all duration-200 ${s.hover}`}
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d={s.d} />
                </svg>
              </a>
            ))}
          </motion.div>
        </div>

        {/* Right — Form */}
        <motion.div {...fadeUp(0.2)}>
          <AnimatePresence mode="wait">
            {status === "success" ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.35 }}
                className="flex h-full flex-col items-start justify-center gap-6 py-8"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-full border border-primary/30 bg-primary/8">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-[Fraunces] text-2xl font-light">Message received.</h3>
                  <p className="mt-2 text-sm text-foreground/55 leading-relaxed">We'll be back in touch within 24 hours.</p>
                </div>
                <button onClick={reset} className="text-sm font-medium text-primary underline-offset-4 hover:underline transition-all">
                  Send another →
                </button>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                onSubmit={handleSubmit}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col gap-5"
              >
                {/* Name */}
                <div>
                  <label className={labelClass}>Full name</label>
                  <input
                    type="text"
                    placeholder="Alex Johnson"
                    value={form.name}
                    onChange={field("name")}
                    required
                    className={inputClass}
                  />
                </div>

                {/* Email + Phone */}
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label className={labelClass}>Email</label>
                    <input
                      type="email"
                      placeholder="alex@email.com"
                      value={form.email}
                      onChange={field("email")}
                      required
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className={labelClass}>Phone <span className="normal-case font-normal tracking-normal text-foreground/25">(optional)</span></label>
                    <input
                      type="tel"
                      placeholder="(555) 000-0000"
                      value={form.phone}
                      onChange={field("phone")}
                      className={inputClass}
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className={labelClass}>Message</label>
                  <textarea
                    placeholder="Tell us about your goals, questions about classes, or anything else on your mind."
                    value={form.message}
                    onChange={field("message")}
                    required
                    rows={5}
                    className={`${inputClass} resize-none leading-relaxed`}
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "loading" || !form.name || !form.email || !form.message}
                  className="mt-1 flex w-full items-center justify-center gap-2.5 rounded-xl bg-primary py-4 text-xs font-semibold uppercase tracking-[0.15em] text-white transition-opacity hover:opacity-90 disabled:opacity-40"
                >
                  {status === "loading" ? (
                    <>
                      <svg className="h-4 w-4 animate-spin" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                      </svg>
                      Sending…
                    </>
                  ) : (
                    "Send message"
                  )}
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </Section>
  )
}
