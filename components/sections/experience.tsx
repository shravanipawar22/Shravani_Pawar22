'use client'

import { useState } from 'react'
import { MapPin, CalendarDays, Building2, ChevronDown } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'
import { EXPERIENCE } from '@/lib/portfolio-data'

export function Experience() {
  const [open, setOpen] = useState(false)
  const panelId = 'payu-experience-panel'

  return (
    <section
      id="experience"
      className="mx-auto max-w-6xl scroll-mt-24 px-5 py-24"
    >
      <SectionHeading
        eyebrow="Where I've Worked"
        title="Production Engineering Experience"
      />

      <div className="relative pl-8 sm:pl-10">
        {/* vertical line */}
        <span className="absolute left-2.5 top-2 h-full w-px bg-gradient-to-b from-gold via-purple/50 to-transparent sm:left-3" />

        <Reveal>
          {/* node */}
          <span className="absolute left-0 top-1.5 flex h-5 w-5 items-center justify-center rounded-full border border-gold/60 bg-background sm:left-0.5">
            <span className="h-2 w-2 rounded-full bg-gold" />
          </span>

          <div className="group rounded-3xl border border-border bg-card/50 transition-all duration-300 hover:border-gold/40 hover:shadow-[0_20px_60px_-30px_var(--gold)]">
            {/* clickable header */}
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls={panelId}
              className="flex w-full flex-wrap items-start justify-between gap-3 rounded-3xl p-6 text-left transition-colors hover:bg-foreground/[0.02] sm:p-8"
            >
              <div>
                <h3 className="font-display text-xl font-bold sm:text-2xl">
                  {EXPERIENCE.role}
                </h3>
                <p className="mt-1 flex items-center gap-2 text-gold">
                  <Building2 className="h-4 w-4" />
                  {EXPERIENCE.company}
                </p>
                <p className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-purple">
                  <ChevronDown
                    className={`h-4 w-4 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
                  />
                  {open ? 'Hide details' : 'Click to view details'}
                </p>
              </div>
              <div className="flex flex-col gap-1.5 text-sm text-muted-foreground sm:items-end">
                <span className="inline-flex items-center gap-1.5">
                  <CalendarDays className="h-4 w-4" />
                  {EXPERIENCE.period}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <MapPin className="h-4 w-4" />
                  {EXPERIENCE.location}
                </span>
              </div>
            </button>

            {/* collapsible panel */}
            <div
              id={panelId}
              className={`grid transition-all duration-500 ease-out ${
                open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
              }`}
            >
              <div className="overflow-hidden">
                <div className="border-t border-border px-6 pb-8 pt-6 sm:px-8">
                  <ul className="grid gap-3">
                    {EXPERIENCE.highlights.map((h) => (
                      <li
                        key={h}
                        className="flex gap-3 text-pretty leading-relaxed text-muted-foreground transition-colors hover:text-foreground"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-purple" />
                        {h}
                      </li>
                    ))}
                  </ul>

                  {EXPERIENCE.photos?.length ? (
                    <div className="mt-8 grid gap-4 sm:grid-cols-3">
                      {EXPERIENCE.photos.map((photo) => (
                        <figure
                          key={photo.src}
                          className="overflow-hidden rounded-2xl border border-border bg-background"
                        >
                          <div className="aspect-[4/3] overflow-hidden">
                            <img
                              src={photo.src || "/placeholder.svg"}
                              alt={photo.caption}
                              loading="lazy"
                              className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                            />
                          </div>
                        </figure>
                      ))}
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
