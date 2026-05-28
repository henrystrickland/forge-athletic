import { forwardRef, type HTMLAttributes, type ReactNode } from "react"
import { cn } from "@/lib/utils"

interface SectionProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode
  /** Optional id for anchor links (e.g. "classes", "coaches") */
  id?: string
  /** Tighten vertical padding for compact sections */
  compact?: boolean
  /** Remove the max-width container (for full-bleed sections) */
  fullBleed?: boolean
}

export const Section = forwardRef<HTMLElement, SectionProps>(
  ({ children, id, compact, fullBleed, className, ...props }, ref) => {
    return (
      <section
        ref={ref}
        id={id}
        className={cn(
          "w-full",
          compact ? "py-16 md:py-20" : "py-24 md:py-32",
          className
        )}
        {...props}
      >
        <div
          className={cn(
            "mx-auto px-6 md:px-8",
            !fullBleed && "max-w-7xl"
          )}
        >
          {children}
        </div>
      </section>
    )
  }
)

Section.displayName = "Section"