import { motion, AnimatePresence } from "framer-motion";
import { ChevronUp } from "lucide-react";
import { useScrollInfo } from "@/hooks/useScrollInfo";

export function BackToTop() {
  const { scrollY } = useScrollInfo();
  const hero = document.getElementById("hero");
  const threshold = hero ? hero.offsetTop + hero.offsetHeight * 0.8 : window.innerHeight * 0.8;
  const visible = scrollY > threshold;

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          key="back-to-top"
          onClick={scrollToTop}
          initial={{ opacity: 0, scale: 0.55, y: 14 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.55, y: 14 }}
          transition={{ type: "spring", stiffness: 380, damping: 28 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.88 }}
          aria-label="Back to top"
          className="fixed bottom-6 right-5 z-40 flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.12] bg-white/[0.07] text-white/60 backdrop-blur-md transition-colors hover:border-white/20 hover:bg-white/[0.13] hover:text-white"
          style={{ boxShadow: "0 4px 24px rgba(0,0,0,0.35)" }}
        >
          <ChevronUp size={16} strokeWidth={2.5} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
