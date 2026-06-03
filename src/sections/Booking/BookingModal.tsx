import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

type BookingModalProps = {
  className: string | null
  onClose: () => void
}

export function BookingModal({ className, onClose }: BookingModalProps) {
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!name.trim() || !phone.trim()) return
    setSubmitted(true)
  }

  function handleClose() {
    setName("")
    setPhone("")
    setSubmitted(false)
    onClose()
  }

  return (
    <AnimatePresence>
      {className && (
        <motion.div
          key="backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
          onClick={(e) => e.target === e.currentTarget && handleClose()}
        >
          <motion.div
            key="modal"
            initial={{ opacity: 0, scale: 0.96, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 16 }}
            transition={{ duration: 0.25, ease: "easeOut" as const }}
            className="relative w-full max-w-md rounded-2xl bg-[#0f0e0d] border border-white/8 p-8 shadow-2xl"
          >
            <button
              onClick={handleClose}
              className="absolute right-5 top-5 text-foreground/40 hover:text-foreground transition-colors"
              aria-label="Close"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M4 4l12 12M16 4L4 16" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
              </svg>
            </button>

            {submitted ? (
              <div className="py-6 text-center">
                <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full border border-primary/30 bg-primary/10">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h2 className="font-[Fraunces] text-2xl font-light text-foreground">You're booked.</h2>
                <p className="mt-2 text-sm text-foreground/60">We'll confirm your spot in <span className="text-primary font-medium">{className}</span> and reach out shortly.</p>
                <button onClick={handleClose} className="mt-8 w-full rounded-full bg-primary py-3 text-sm font-medium text-white transition-opacity hover:opacity-90">
                  Done
                </button>
              </div>
            ) : (
              <>
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-primary mb-1">Book a class</p>
                <h2 className="font-[Fraunces] text-2xl font-light text-foreground mb-8">{className}</h2>

                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="booking-name" className="text-xs font-medium uppercase tracking-wider text-foreground/50">
                      Name
                    </label>
                    <input
                      id="booking-name"
                      type="text"
                      placeholder="Your name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      className="w-full rounded-xl border border-white/10 bg-white/4 px-4 py-3 text-sm text-foreground outline-none placeholder:text-foreground/30 focus:border-primary/40 transition-colors"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="booking-phone" className="text-xs font-medium uppercase tracking-wider text-foreground/50">
                      Phone
                    </label>
                    <input
                      id="booking-phone"
                      type="tel"
                      placeholder="(555) 000-0000"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required
                      className="w-full rounded-xl border border-white/10 bg-white/4 px-4 py-3 text-sm text-foreground outline-none placeholder:text-foreground/30 focus:border-primary/40 transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    className="mt-2 w-full rounded-full bg-primary py-3 text-sm font-medium text-white transition-opacity hover:opacity-90 disabled:opacity-40"
                    disabled={!name.trim() || !phone.trim()}
                  >
                    Request my spot
                  </button>
                </form>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
