import { motion } from "framer-motion"
import { Section } from "@/components/Section"
import type { PricingContent } from "@/content/forge"

type PricingProps = { content: PricingContent }

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6, ease: "easeOut" as const, delay },
})

export function Pricing({ content }: PricingProps) {
  return (
    <Section id="pricing" className="bg-[#161514]">
      <motion.div {...fadeUp()} className="mb-10 md:mb-14">
        <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-primary">{content.eyebrow}</p>
        <h2 className="font-[Fraunces] mt-3 max-w-2xl text-4xl font-light tracking-tight text-foreground md:text-5xl">{content.heading}</h2>
      </motion.div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-3 md:items-start">
        {content.tiers.map((tier, i) => (
          <motion.div
            key={tier.name}
            {...fadeUp(0.1 + i * 0.1)}
            className={[
              "group relative overflow-hidden rounded-2xl border transition-all duration-300",
              tier.highlight
                ? "border-primary/30 bg-primary/[0.07] shadow-[0_0_60px_-15px_oklch(0.68_0.19_41_/_0.35)] md:-mt-3 md:pb-3"
                : "border-white/[0.07] bg-white/[0.02] hover:border-white/[0.12]",
            ].join(" ")}
          >
            {tier.highlight && (
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
            )}

            <div className="p-8 md:p-9">
              <div className="mb-7 flex flex-col gap-2">
                {tier.highlight && (
                  <span className="mb-1 self-start rounded-full border border-primary/30 bg-primary/10 px-3 py-0.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-primary">
                    Most popular
                  </span>
                )}
                <h3 className="font-[Fraunces] text-2xl font-light text-foreground">{tier.name}</h3>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-semibold tracking-tight text-foreground">{tier.price}</span>
                  <span className="text-sm text-foreground/40">{tier.period}</span>
                </div>
                <p className="text-sm text-foreground/50">{tier.description}</p>
              </div>

              <a
                href="#book"
                className={[
                  "mb-8 block rounded-full px-6 py-3 text-center text-sm font-medium transition-all duration-200",
                  tier.highlight
                    ? "bg-primary text-white hover:opacity-90"
                    : "border border-white/20 text-foreground/70 hover:border-white/40 hover:text-foreground",
                ].join(" ")}
              >
                {tier.cta}
              </a>

              <div className="space-y-3 border-t border-white/[0.08] pt-7">
                {tier.features.map((feature, idx) => (
                  <motion.div
                    key={feature}
                    {...fadeUp(0.3 + idx * 0.04)}
                    className="flex items-start gap-3"
                  >
                    <svg
                      className={`mt-0.5 h-3.5 w-3.5 flex-shrink-0 ${tier.highlight ? "text-primary" : "text-foreground/35"}`}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2.5}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm text-foreground/70">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
