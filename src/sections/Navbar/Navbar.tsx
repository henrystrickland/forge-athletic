import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import type { NavContent } from "@/content/forge";

export function Navbar({ content }: { content: NavContent }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const linkBase = "text-sm font-medium tracking-wide transition-colors";
  const linkColor = scrolled ? "text-black/70 hover:text-black" : "text-white/80 hover:text-white";
  const headerBg = scrolled ? "bg-white/85 backdrop-blur-md shadow-sm" : "bg-transparent";
  const logoColor = scrolled ? "text-black" : "text-white";

  return (
    <motion.header initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: "easeOut" }} className={cn("fixed top-0 left-0 right-0 z-50 transition-all duration-300", headerBg)}>
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:grid md:grid-cols-3">
        <div className="hidden items-center gap-8 md:flex">
          {content.leftLinks.map((link) => (
            <a key={link.href} href={link.href} className={cn(linkBase, linkColor)}>{link.label}</a>
          ))}
        </div>

        <a href="#top" className={cn("text-center text-xl font-semibold tracking-[0.2em] transition-colors md:justify-self-center", logoColor)}>{content.logo}</a>

        <div className="hidden items-center justify-end gap-8 md:flex">
          {content.rightLinks.map((link) => (
            <a key={link.href} href={link.href} className={cn(linkBase, linkColor)}>{link.label}</a>
          ))}
          <a href={content.cta.href} className="rounded-full bg-primary px-5 py-2 text-sm font-medium text-black transition-transform hover:scale-105">{content.cta.label}</a>
        </div>

        <button onClick={() => setOpen(true)} className={cn("md:hidden transition-colors", logoColor)} aria-label="Open menu"><Menu size={26} /></button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 flex flex-col items-center justify-center gap-8 bg-black/95 md:hidden">
            <button onClick={() => setOpen(false)} className="absolute right-6 top-6 text-white" aria-label="Close menu"><X size={28} /></button>
            {[...content.leftLinks, ...content.rightLinks].map((link) => (
              <a key={link.href} href={link.href} onClick={() => setOpen(false)} className="text-2xl font-medium text-white/90 hover:text-white">{link.label}</a>
            ))}
            <a href={content.cta.href} onClick={() => setOpen(false)} className="mt-4 rounded-full bg-primary px-6 py-3 text-base font-medium text-black">{content.cta.label}</a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
