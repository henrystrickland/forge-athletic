import { motion } from "framer-motion"
import type { FooterContent } from "@/content/forge"

const socialIcons: Record<string, React.ReactNode> = {
  instagram: (
    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.266.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
    </svg>
  ),
  tiktok: (
    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.34 6.34 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.92a8.16 8.16 0 004.77 1.52V7a4.85 4.85 0 01-1-.31z" />
    </svg>
  ),
}

export function Footer({ content }: { content: FooterContent }) {
  return (
    <footer className="bg-[#0a0a0a] border-t border-white/[0.06]">
      <div className="mx-auto max-w-7xl px-6 md:px-8">

        {/* Main grid */}
        <div className="grid grid-cols-2 gap-12 py-16 md:grid-cols-[1.5fr_1fr_1fr] md:py-20">

          {/* Brand col */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="col-span-2 flex flex-col gap-6 md:col-span-1"
          >
            <div>
              <a href="#hero" className="font-[Fraunces] text-2xl font-light tracking-[0.18em] text-foreground">
                FORGE
              </a>
              <p className="mt-2 text-sm text-foreground/40">{content.tagline}</p>
            </div>

            <div className="flex gap-2.5">
              {content.social.map((s) => (
                <a
                  key={s.platform}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className={[
                    "flex h-9 w-9 items-center justify-center rounded-full border border-border text-foreground/35 transition-all duration-200",
                    s.platform === "instagram"
                      ? "hover:border-pink-500/60 hover:text-pink-500 hover:bg-pink-500/5"
                      : "hover:border-white/50 hover:text-white hover:bg-white/5",
                  ].join(" ")}
                >
                  {socialIcons[s.platform]}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Link columns */}
          {content.columns.map((col, i) => (
            <motion.div
              key={col.heading}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
            >
              <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.18em] text-foreground/35">
                {col.heading}
              </p>
              <ul className="flex flex-col gap-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-foreground/55 transition-colors duration-150 hover:text-foreground"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col gap-3 border-t border-border py-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-foreground/30">{content.legal}</p>
          <div className="flex gap-5">
            {["Privacy Policy", "Terms of Service"].map((label) => (
              <a key={label} href="#" className="text-xs text-foreground/30 transition-colors hover:text-foreground/60">
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
