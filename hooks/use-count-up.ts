'use client'

import { useEffect, useRef, useState } from 'react'

/**
 * Counts up to `end` once the element scrolls into view.
 * Returns a ref to attach and the current display value.
 */
export function useCountUp(end: number, { duration = 1400 } = {}) {
  const ref = useRef<HTMLDivElement | null>(null)
  const [value, setValue] = useState(0)
  const started = useRef(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const reduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches

    const run = () => {
      if (started.current) return
      started.current = true
      if (reduced) {
        setValue(end)
        return
      }
      const start = performance.now()
      const tick = (now: number) => {
        const t = Math.min((now - start) / duration, 1)
        const eased = 1 - Math.pow(1 - t, 3)
        setValue(end * eased)
        if (t < 1) requestAnimationFrame(tick)
        else setValue(end)
      }
      requestAnimationFrame(tick)
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          run()
          observer.disconnect()
        }
      },
      { threshold: 0.4 },
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [end, duration])

  return { ref, value }
}
