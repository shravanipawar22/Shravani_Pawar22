'use client'

import { useEffect, useState } from 'react'
import { GraduationCap, Award, Trophy, X, Eye } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'
import { EDUCATION, CERTIFICATIONS, type Certification } from '@/lib/portfolio-data'

export function Education() {
  const [active, setActive] = useState<Certification | null>(null)

  useEffect(() => {
    if (!active) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActive(null)
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [active])

  return (
    <section
      id="education"
      className="mx-auto max-w-6xl scroll-mt-24 px-5 py-24"
    >
      <SectionHeading eyebrow="Academics & Credentials" title="Education" />

      {/* timeline */}
      <div className="relative mb-16 pl-8 sm:pl-10">
        <span className="absolute left-2.5 top-2 h-full w-px bg-gradient-to-b from-gold via-purple/50 to-transparent sm:left-3" />
        <div className="grid gap-6">
          {EDUCATION.map((edu, i) => (
            <Reveal key={edu.degree} delay={i * 90}>
              <div className="relative">
                <span className="absolute -left-8 top-1.5 flex h-5 w-5 items-center justify-center rounded-full border border-gold/60 bg-background sm:-left-10">
                  <GraduationCap className="h-3 w-3 text-gold" />
                </span>
                <div className="rounded-3xl border border-border bg-card/50 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-gold/40 sm:p-7">
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <h3 className="font-display text-lg font-bold sm:text-xl">
                      {edu.degree}
                    </h3>
                    <span className="rounded-full border border-gold/40 bg-gold/10 px-3 py-1 text-xs font-semibold text-gold">
                      {edu.score}
                    </span>
                  </div>
                  <p className="mt-1.5 text-muted-foreground">{edu.school}</p>
                  <p className="mt-1 text-sm text-muted-foreground/80">
                    {edu.period}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* certifications */}
      <Reveal className="mb-8">
        <h3 className="flex items-center gap-2 font-display text-2xl font-bold">
          <Award className="h-6 w-6 text-gold" />
          Certifications
        </h3>
      </Reveal>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {CERTIFICATIONS.map((cert, i) => (
          <Reveal key={cert.title} delay={i * 60}>
            <button
              type="button"
              onClick={() => setActive(cert)}
              aria-label={`View ${cert.title} certificate`}
              className="group flex h-full w-full items-start gap-3 rounded-2xl border border-border bg-card/50 p-5 text-left transition-all duration-300 hover:-translate-y-1 hover:border-purple/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple/60"
            >
              <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-border bg-background/60 text-purple">
                <Award className="h-4 w-4" />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block text-pretty text-sm leading-relaxed text-foreground/90 transition-colors group-hover:text-foreground">
                  {cert.title}
                </span>
                <span className="mt-1 block text-xs text-muted-foreground">
                  {cert.issuer}
                </span>
                <span className="mt-2 inline-flex items-center gap-1 text-xs font-medium text-purple opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <Eye className="h-3.5 w-3.5" />
                  View certificate
                </span>
              </span>
            </button>
          </Reveal>
        ))}
      </div>

      <Reveal delay={120} className="mt-6">
        <div className="flex items-center gap-4 rounded-2xl border border-gold/40 bg-gold/10 p-5">
          <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gold/20 text-gold">
            <Trophy className="h-5 w-5" />
          </span>
          <p className="font-display text-lg font-semibold text-gradient-gold">
            100+ DSA Problems Solved on LeetCode
          </p>
        </div>
      </Reveal>

      {/* certificate lightbox */}
      {active && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${active.title} certificate`}
          onClick={() => setActive(null)}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background/80 p-4 backdrop-blur-sm sm:p-8"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative flex max-h-[90vh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-2xl"
          >
            <div className="flex items-start justify-between gap-4 border-b border-border p-4 sm:p-5">
              <div className="min-w-0">
                <h4 className="text-pretty font-display text-base font-bold sm:text-lg">
                  {active.title}
                </h4>
                <p className="mt-0.5 text-sm text-muted-foreground">
                  {active.issuer}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setActive(null)}
                aria-label="Close certificate"
                className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-border bg-background/60 text-foreground/80 transition-colors hover:border-purple/50 hover:text-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-purple/60"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <div className="overflow-auto p-4 sm:p-6">
              <img
                src={active.image || '/placeholder.svg'}
                alt={`${active.title} certificate awarded to Shravani Pawar`}
                className="mx-auto h-auto w-full rounded-lg border border-border"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
