'use client'

import { useRef, useState } from 'react'
import { ArrowUpRight, ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react'
import { GitHubIcon } from '@/components/brand-icons'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'
import { PROJECTS, type Project } from '@/lib/portfolio-data'

export function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-24">
      <SectionHeading eyebrow="Selected Work" title="Featured Projects" />

      <div className="grid gap-6">
        {PROJECTS.map((project, i) => (
          <Reveal key={project.title} delay={i * 90}>
            <ProjectCard project={project} index={i} />
          </Reveal>
        ))}
      </div>
    </section>
  )
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [open, setOpen] = useState(false)
  const hasProject = Boolean(project.projectUrl)
  const hasGithub = Boolean(project.githubUrl)
  const panelId = `project-panel-${index}`

  return (
    <article className="group relative overflow-hidden rounded-3xl border border-border bg-card/50 transition-all duration-300 hover:border-gold/40 hover:shadow-[0_24px_70px_-40px_var(--gold)]">
      {/* hover sheen */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-gold/[0.06] via-transparent to-purple/[0.08] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      {/* clickable header — title only */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls={panelId}
        className="flex w-full items-start justify-between gap-4 p-6 text-left transition-colors hover:bg-foreground/[0.02] sm:p-8"
      >
        <div>
          <span className="font-display text-sm font-semibold text-purple">
            {String(index + 1).padStart(2, '0')}
          </span>
          <h3 className="mt-2 font-display text-xl font-bold text-balance transition-colors group-hover:text-gold sm:text-2xl">
            {project.title}
          </h3>
          <p className="mt-2 inline-flex items-center gap-1.5 text-sm font-medium text-purple">
            <ChevronDown
              className={`h-4 w-4 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
            />
            {open ? 'Hide details' : 'Click to view details'}
          </p>
        </div>
      </button>

      {/* collapsible details */}
      <div
        id={panelId}
        className={`grid transition-all duration-500 ease-out ${
          open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          <div className="border-t border-border px-6 pb-8 pt-6 sm:px-8">
            <p className="text-pretty leading-relaxed text-muted-foreground">
              {project.description}
            </p>

            {project.note ? (
              <p className="mt-4 text-pretty text-sm leading-relaxed text-foreground/80">
                {project.note}
              </p>
            ) : null}

            <ul className="mt-5 flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <li
                  key={t}
                  className="rounded-full border border-border bg-background/50 px-3 py-1 text-xs text-foreground/80"
                >
                  {t}
                </li>
              ))}
            </ul>

            {project.images?.length ? (
              <ImageCarousel images={project.images} />
            ) : null}

            {(hasProject || hasGithub) && (
              <div className="mt-6 flex flex-wrap gap-3">
                {hasProject && (
                  <a
                    href={project.projectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-gold-foreground transition-all hover:-translate-y-0.5"
                  >
                    View Project
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                )}
                {hasGithub && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${project.title} on GitHub`}
                    className="inline-flex items-center gap-2 rounded-full border border-border bg-card/40 px-4 py-2.5 text-sm font-semibold text-foreground transition-colors hover:border-purple/60 hover:text-purple"
                  >
                    <GitHubIcon className="h-4 w-4" />
                    Code
                  </a>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </article>
  )
}

function ImageCarousel({ images }: { images: NonNullable<Project['images']> }) {
  const trackRef = useRef<HTMLDivElement>(null)
  const canScroll = images.length > 3

  const scrollByCards = (dir: number) => {
    const track = trackRef.current
    if (!track) return
    // scroll by roughly one card width
    const amount = track.clientWidth / 3 + 16
    track.scrollBy({ left: dir * amount, behavior: 'smooth' })
  }

  return (
    <div className="group/carousel relative mt-6">
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
                  alt={img.caption}
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
            className="absolute -left-3 top-[38%] z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-background/90 text-foreground opacity-0 shadow-lg backdrop-blur transition-all hover:bg-background hover:text-gold group-hover/carousel:opacity-100"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={() => scrollByCards(1)}
            aria-label="Scroll images right"
            className="absolute -right-3 top-[38%] z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-background/90 text-foreground opacity-0 shadow-lg backdrop-blur transition-all hover:bg-background hover:text-gold group-hover/carousel:opacity-100"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </>
      )}
    </div>
  )
}
