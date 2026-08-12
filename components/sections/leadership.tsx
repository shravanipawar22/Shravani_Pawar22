'use client'

import { useRef } from 'react'
import { Sparkles, ChevronLeft, ChevronRight } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'
import { LEADERSHIP } from '@/lib/portfolio-data'

export function Leadership() {
  return (
    <section
      id="leadership"
      className="mx-auto max-w-6xl scroll-mt-24 px-5 py-24"
    >
      <SectionHeading eyebrow="Beyond Code" title="Leadership" />

      <Reveal>
        <div className="relative overflow-hidden rounded-3xl border border-border bg-card/50 p-8 transition-all duration-300 hover:border-gold/40 sm:p-10">
          <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-purple/15 blur-3xl" />

          <div className="flex items-start gap-4">
            <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-gold/40 bg-gold/10 text-gold">
              <Sparkles className="h-6 w-6" />
            </span>
            <div>
              <h3 className="font-display text-xl font-bold sm:text-2xl">
                {LEADERSHIP.role}
              </h3>
              <p className="mt-1 text-gold">{LEADERSHIP.org}</p>
              <p className="mt-1 text-sm text-muted-foreground">
                {LEADERSHIP.year}
              </p>
            </div>
          </div>

          <p className="mt-6 max-w-3xl text-pretty leading-relaxed text-foreground/80">
            {LEADERSHIP.description}
          </p>

          <h4 className="mt-8 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
            Key Contributions
          </h4>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {LEADERSHIP.contributions.map((s) => (
              <div
                key={s}
                className="flex items-center gap-3 rounded-2xl border border-border bg-background/50 px-4 py-3 transition-all hover:-translate-y-0.5 hover:border-purple/50"
              >
                <span className="h-2 w-2 rounded-full bg-gold" />
                <span className="text-sm font-medium text-foreground/90">
                  {s}
                </span>
              </div>
            ))}
          </div>

          <LeadershipGallery images={LEADERSHIP.images} />
        </div>
      </Reveal>
    </section>
  )
}

function LeadershipGallery({ images }: { images: { src: string }[] }) {
  const trackRef = useRef<HTMLDivElement>(null)
  const canScroll = images.length > 3

  const scrollByCards = (dir: number) => {
    const track = trackRef.current
    if (!track) return
    const amount = track.clientWidth / 3 + 16
    track.scrollBy({ left: dir * amount, behavior: 'smooth' })
  }

  return (
    <div className="group/carousel relative mt-8">
      <div
        ref={trackRef}
        className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {images.map((img) => (
          <figure
            key={img.src}
            className="w-[78%] shrink-0 snap-start sm:w-[calc((100%-2rem)/3)]"
          >
            <div className="overflow-hidden rounded-2xl border border-border bg-background">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={img.src || '/placeholder.svg'}
                  alt=""
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>
          </figure>
        ))}
      </div>

      {canScroll && (
        <>
          <button
            type="button"
            onClick={() => scrollByCards(-1)}
            aria-label="Scroll images left"
            className="absolute -left-3 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-background/90 text-foreground opacity-0 shadow-lg backdrop-blur transition-all hover:bg-background hover:text-gold group-hover/carousel:opacity-100"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={() => scrollByCards(1)}
            aria-label="Scroll images right"
            className="absolute -right-3 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-background/90 text-foreground opacity-0 shadow-lg backdrop-blur transition-all hover:bg-background hover:text-gold group-hover/carousel:opacity-100"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </>
      )}
    </div>
  )
}
