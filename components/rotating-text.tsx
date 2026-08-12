'use client'

import { useEffect, useRef, useState } from 'react'

export function RotatingText({
  words,
  className,
}: {
  words: string[]
  className?: string
}) {
  const [index, setIndex] = useState(0)
  const [text, setText] = useState('')
  const [deleting, setDeleting] = useState(false)
  const reduced = useRef(false)

  useEffect(() => {
    reduced.current =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced.current) setText(words[0])
  }, [words])

  useEffect(() => {
    if (reduced.current || words.length === 0) return
    const current = words[index % words.length]

    if (!deleting && text === current) {
      const hold = setTimeout(() => setDeleting(true), 1600)
      return () => clearTimeout(hold)
    }
    if (deleting && text === '') {
      setDeleting(false)
      setIndex((i) => (i + 1) % words.length)
      return
    }

    const timeout = setTimeout(
      () => {
        setText((prev) =>
          deleting
            ? current.slice(0, prev.length - 1)
            : current.slice(0, prev.length + 1),
        )
      },
      deleting ? 45 : 85,
    )
    return () => clearTimeout(timeout)
  }, [text, deleting, index, words])

  return (
    <span className={className} aria-live="polite">
      {text || '\u00A0'}
      <span
        aria-hidden="true"
        className="animate-caret ml-1 inline-block h-[1em] w-[3px] translate-y-[0.12em] rounded-full bg-current align-middle"
      />
    </span>
  )
}
