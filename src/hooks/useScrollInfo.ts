import { useState, useEffect } from "react"

const SECTIONS = ["hero", "classes", "coaches", "pricing", "testimonials", "contact"]

export type ScrollInfo = {
  scrollY: number
  activeSectionId: string
  activeSectionIndex: number
}

function compute(): ScrollInfo {
  const scrollY = window.scrollY
  const mid = scrollY + window.innerHeight / 2
  let activeSectionIndex = 0
  let activeSectionId = SECTIONS[0]
  for (let i = 0; i < SECTIONS.length; i++) {
    const el = document.getElementById(SECTIONS[i])
    if (el && el.offsetTop <= mid) { activeSectionIndex = i; activeSectionId = SECTIONS[i] }
  }
  return { scrollY, activeSectionId, activeSectionIndex }
}

const subs = new Set<(s: ScrollInfo) => void>()
let cache: ScrollInfo = { scrollY: 0, activeSectionId: "hero", activeSectionIndex: 0 }
let attached = false

function attach() {
  if (attached) return
  attached = true
  window.addEventListener("scroll", () => {
    cache = compute()
    subs.forEach((fn) => fn(cache))
  }, { passive: true })
}

export function useScrollInfo(): ScrollInfo {
  const [info, setInfo] = useState<ScrollInfo>(cache)
  useEffect(() => {
    attach()
    const current = compute()
    cache = current
    setInfo(current)
    subs.add(setInfo)
    return () => { subs.delete(setInfo) }
  }, [])
  return info
}
