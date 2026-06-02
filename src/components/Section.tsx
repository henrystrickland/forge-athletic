import { forwardRef, type HTMLAttributes, type ReactNode } from "react"
import { cn } from "@/lib/utils"

interface SectionProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode
  id?: string
  compact?: boolean
  fullBleed?: boolean
  /** Opt out of snap + min-height (used when parent handles snap) */
  noSnap?: boolean
}

export const Section = forwardRef<HTMLElement, SectionProps>(
  ({ children, id, compact, fullBleed, noSnap, className, ...props }, ref) => {
    return (
      <section
        ref={ref}
        id={id}
        className={cn(
          "w-full",
          !noSnap && "min-h-svh snap-start",
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