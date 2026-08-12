'use client'

import { useEffect, useState } from 'react'

export function useActiveSection(ids: string[]) {
  const [active, setActive] = useState(ids[0] ?? '')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)
        if (visible[0]) setActive(visible[0].target.id)
      },
      {
        // Trigger when a section occupies the middle band of the viewport.
        rootMargin: '-45% 0px -45% 0px',
        threshold: [0, 0.25, 0.5, 1],
      },
    )

    const nodes = ids
      .map((id) => document.getElementById(id))
      .filter((n): n is HTMLElement => Boolean(n))
    nodes.forEach((n) => observer.observe(n))

    return () => observer.disconnect()
  }, [ids])

  return active
}
