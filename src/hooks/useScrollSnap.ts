import { useEffect, useRef } from "react"

const SECTIONS = ["hero", "classes", "coaches", "pricing", "testimonials", "contact"]
const WHEEL_THRESHOLD = 60   // accumulated px to trigger a wheel snap
const TOUCH_MIN_PX = 50      // minimum swipe distance
const TOUCH_MAX_MS = 400     // maximum swipe duration for a snap gesture
const COOLDOWN = 850         // ms lockout after any snap

export function useScrollSnap() {
  const locked = useRef(false)
  const accDelta = useRef(0)
  const resetAcc = useRef<ReturnType<typeof setTimeout>>(undefined)
  const touchStartY = useRef(0)
  const touchStartTime = useRef(0)

  useEffect(() => {
    function getSections() {
      return SECTIONS
        .map((id) => document.getElementById(id))
        .filter((el): el is HTMLElement => !!el)
    }

    function currentIndex(sections: HTMLElement[]) {
      const mid = window.scrollY + window.innerHeight / 2
      let idx = 0
      for (let i = 0; i < sections.length; i++) {
        if (sections[i].offsetTop <= mid) idx = i
      }
      return idx
    }

    function go(sections: HTMLElement[], idx: number) {
      const clamped = Math.max(0, Math.min(idx, sections.length - 1))
      locked.current = true
      accDelta.current = 0
      sections[clamped].scrollIntoView({ behavior: "smooth", block: "start" })
      setTimeout(() => { locked.current = false }, COOLDOWN)
    }

    // ── Wheel ──────────────────────────────────────────────────────────
    function onWheel(e: WheelEvent) {
      if (locked.current) { e.preventDefault(); return }

      const sections = getSections()
      const idx = currentIndex(sections)
      const goingDown = e.deltaY > 0

      if (goingDown && idx >= sections.length - 1) return

      e.preventDefault()
      accDelta.current += e.deltaY

      clearTimeout(resetAcc.current)
      resetAcc.current = setTimeout(() => { accDelta.current = 0 }, 200)

      if (Math.abs(accDelta.current) < WHEEL_THRESHOLD) return

      const belowSnapPoint = window.scrollY > sections[idx].offsetTop + 40
      const next = (!goingDown && belowSnapPoint) ? idx : idx + (goingDown ? 1 : -1)
      go(sections, next)
    }

    // ── Arrow keys — one press = one section ───────────────────────────
    function onKeyDown(e: KeyboardEvent) {
      if (e.key !== "ArrowDown" && e.key !== "ArrowUp") return
      // Don't steal keys from form inputs
      const tag = (e.target as HTMLElement).tagName
      if (tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT") return
      if (locked.current) { e.preventDefault(); return }

      const sections = getSections()
      const idx = currentIndex(sections)
      const goingDown = e.key === "ArrowDown"

      if (goingDown && idx >= sections.length - 1) return

      e.preventDefault()

      const belowSnapPoint = window.scrollY > sections[idx].offsetTop + 40
      const next = (!goingDown && belowSnapPoint) ? idx : idx + (goingDown ? 1 : -1)
      go(sections, next)
    }

    // ── Touch swipe ────────────────────────────────────────────────────
    function onTouchStart(e: TouchEvent) {
      touchStartY.current = e.touches[0].clientY
      touchStartTime.current = Date.now()
    }

    function onTouchEnd(e: TouchEvent) {
      if (locked.current) return

      const deltaY = touchStartY.current - e.changedTouches[0].clientY
      const elapsed = Date.now() - touchStartTime.current

      // Must be a quick, deliberate swipe
      if (elapsed > TOUCH_MAX_MS || Math.abs(deltaY) < TOUCH_MIN_PX) return

      const sections = getSections()
      const idx = currentIndex(sections)
      const goingDown = deltaY > 0

      if (goingDown && idx >= sections.length - 1) return

      // If the user has scrolled well into a section going down,
      // let native scroll handle it (allows reading tall sections)
      if (goingDown && window.scrollY > sections[idx].offsetTop + 120) return

      const belowSnapPoint = window.scrollY > sections[idx].offsetTop + 40
      const next = (!goingDown && belowSnapPoint) ? idx : idx + (goingDown ? 1 : -1)
      go(sections, next)
    }

    window.addEventListener("wheel", onWheel, { passive: false })
    window.addEventListener("keydown", onKeyDown)
    window.addEventListener("touchstart", onTouchStart, { passive: true })
    window.addEventListener("touchend", onTouchEnd, { passive: true })

    return () => {
      window.removeEventListener("wheel", onWheel)
      window.removeEventListener("keydown", onKeyDown)
      window.removeEventListener("touchstart", onTouchStart)
      window.removeEventListener("touchend", onTouchEnd)
      clearTimeout(resetAcc.current)
    }
  }, [])
}
