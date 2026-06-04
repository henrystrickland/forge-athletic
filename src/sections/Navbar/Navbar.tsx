import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import type { NavContent } from "@/content/forge";

const SECTIONS = ["hero", "classes", "coaches", "pricing", "contact"];

export function Navbar({ content }: { content: NavContent }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 50);
      const mid = window.scrollY + window.innerHeight / 2;
      let active = "hero";
      SECTIONS.forEach((id) => {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= mid) active = id;
      });
      setActiveSection(active);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  function isActive(href: string) {
    return href === `#${activeSection}`;
  }

  const headerBg = scrolled
    ? "bg-white/8 backdrop-blur-3xl backdrop-saturate-200 border-b border-white/10 shadow-[0_1px_24px_0_rgba(0,0,0,0.08)]"
    : "bg-transparent";

  function linkClass(href: string) {
    return cn(
      "text-sm font-medium tracking-wide transition-all duration-300",
      isActive(href) ? "text-white" : "text-white/50 hover:text-white/80"
    );
  }

  const allLinks = [...content.leftLinks, ...content.rightLinks];

  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" as const }}
      className={cn("fixed top-0 left-0 right-0 z-50 transition-all duration-300", headerBg)}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:grid md:grid-cols-3">
        <div className="hidden items-center gap-8 md:flex">
          {content.leftLinks.map((link) => (
            <a key={link.href} href={link.href} className={linkClass(link.href)}>
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="#"
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }) }}
          className="font-[Fraunces] text-center text-xl font-light tracking-[0.22em] text-white transition-colors md:justify-self-center"
        >
          {content.logo}
        </a>

        <div className="hidden items-center justify-end gap-8 md:flex">
          {content.rightLinks.map((link) => (
            <a key={link.href} href={link.href} className={linkClass(link.href)}>
              {link.label}
            </a>
          ))}
          <a
            href={content.cta.href}
            className="rounded-full bg-primary px-5 py-2 text-sm font-medium text-white transition-transform hover:scale-105"
          >
            {content.cta.label}
          </a>
        </div>

        <motion.button
          onClick={() => setOpen(true)}
          whileTap={{ scale: 0.88 }}
          className="flex items-center justify-center text-white/80 hover:text-white transition-colors md:hidden"
          aria-label="Open menu"
        >
          <Menu size={26} />
        </motion.button>
      </nav>

      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm md:hidden"
            />

            {/* Slide-in panel */}
            <motion.div
              key="panel"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 320, damping: 32, mass: 0.9 }}
              className="fixed inset-y-0 right-0 z-50 flex w-[82vw] max-w-xs flex-col bg-[#080808] border-l border-white/[0.07] md:hidden"
              style={{ boxShadow: "-24px 0 80px rgba(0,0,0,0.6)" }}
            >
              {/* Panel header */}
              <div className="flex items-center justify-between px-6 py-[22px] border-b border-white/[0.07]">
                <span className="font-[Fraunces] text-[1.1rem] font-light tracking-[0.22em] text-white/90">
                  {content.logo}
                </span>
                <motion.button
                  whileTap={{ scale: 0.88, rotate: 90 }}
                  transition={{ duration: 0.18 }}
                  onClick={() => setOpen(false)}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/[0.07] text-white/60 hover:bg-white/[0.12] hover:text-white transition-all"
                  aria-label="Close menu"
                >
                  <X size={16} strokeWidth={2.5} />
                </motion.button>
              </div>

              {/* Nav links */}
              <div className="flex flex-1 flex-col justify-center px-6 gap-0">
                {allLinks.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    initial={{ opacity: 0, x: 18 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.08 + i * 0.055, duration: 0.38, ease: [0.25, 0.46, 0.45, 0.94] }}
                    className={cn(
                      "group flex items-center gap-4 border-b border-white/[0.06] py-[18px] last:border-0",
                    )}
                  >
                    <span className="w-6 font-mono text-[10px] tracking-widest text-white/20 leading-none">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className={cn(
                      "flex-1 text-[1.55rem] font-light leading-none tracking-wide transition-colors duration-200",
                      isActive(link.href)
                        ? "text-white"
                        : "text-white/45 group-hover:text-white/80"
                    )}>
                      {link.label}
                    </span>
                    {isActive(link.href) && (
                      <motion.div
                        layoutId="active-dot"
                        className="h-[6px] w-[6px] rounded-full bg-primary"
                      />
                    )}
                  </motion.a>
                ))}
              </div>

              {/* CTA + tagline */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.32, duration: 0.4, ease: "easeOut" }}
                className="border-t border-white/[0.07] px-6 pb-10 pt-6"
              >
                <a
                  href={content.cta.href}
                  onClick={() => setOpen(false)}
                  className="flex w-full items-center justify-center rounded-full bg-primary py-[15px] text-[0.8rem] font-semibold tracking-[0.12em] uppercase text-white transition-all active:scale-95"
                >
                  {content.cta.label}
                </a>
                <p className="mt-4 text-center text-[0.65rem] tracking-widest uppercase text-white/20">
                  Strength, refined.
                </p>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
