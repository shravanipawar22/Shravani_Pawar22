'use client'

import Image from 'next/image'
import { ArrowDown, ArrowUpRight } from 'lucide-react'
import { GitHubIcon, LinkedInIcon, LeetCodeIcon } from '@/components/brand-icons'
import { RotatingText } from '@/components/rotating-text'
import { CONTACT, HERO_BADGES, HERO_PHOTO } from '@/lib/portfolio-data'

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-svh items-center overflow-hidden pt-28 pb-16"
    >
      {/* ambient glows */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 left-[8%] h-72 w-72 rounded-full bg-gold/10 blur-[120px]" />
        <div className="absolute bottom-0 right-[6%] h-80 w-80 rounded-full bg-purple/15 blur-[130px]" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'linear-gradient(var(--foreground) 1px, transparent 1px), linear-gradient(90deg, var(--foreground) 1px, transparent 1px)',
            backgroundSize: '54px 54px',
          }}
        />
      </div>

      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 px-5 md:grid-cols-[1.15fr_0.85fr]">
        {/* Left: copy */}
        <div className="animate-fade-up">
          <h1 className="font-display text-4xl font-bold leading-[1.05] tracking-tight text-balance sm:text-5xl lg:text-6xl">
            Shravani Pawar
          </h1>
          <p className="mt-3 flex min-h-[2rem] items-center font-display text-xl font-medium text-gradient-gold sm:text-2xl">
            <RotatingText
              words={[
                'Software Engineer',
                'Backend Developer',
                'Java & Spring Boot',
                'Problem Solver',
              ]}
            />
          </p>

          <p className="mt-5 max-w-xl text-pretty leading-relaxed text-muted-foreground">
            Building reliable, scalable backend systems and production-ready
            software.
          </p>

          {/* tech badges */}
          <ul className="mt-7 flex flex-wrap gap-2.5">
            {HERO_BADGES.map((b) => (
              <li
                key={b}
                className="rounded-full border border-border bg-card/50 px-3.5 py-1.5 text-sm text-foreground/90 transition-colors hover:border-gold/50 hover:text-gold"
              >
                {b}
              </li>
            ))}
          </ul>

          {/* CTAs */}
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gold px-6 py-3 text-sm font-semibold text-gold-foreground transition-transform hover:-translate-y-0.5 hover:shadow-[0_10px_40px_-10px_var(--gold)]"
            >
              <span
                aria-hidden="true"
                className="animate-shine pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 bg-white/30 blur-md"
              />
              View My Work
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card/40 px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-purple/60 hover:text-purple"
            >
              Let&apos;s Connect
            </a>
          </div>

          {/* socials */}
          <div className="mt-8 flex items-center gap-3">
            <SocialLink href={CONTACT.linkedin} label="LinkedIn">
              <LinkedInIcon className="h-5 w-5" />
            </SocialLink>
            <SocialLink href={CONTACT.github} label="GitHub">
              <GitHubIcon className="h-5 w-5" />
            </SocialLink>
            <SocialLink href={CONTACT.leetcode} label="LeetCode">
              <LeetCodeIcon className="h-5 w-5" />
            </SocialLink>
          </div>
        </div>

        {/* Right: photo */}
        <div className="relative mx-auto w-full max-w-xs animate-fade-up [animation-delay:150ms] md:max-w-sm">
          <div className="animate-float-slow">
            <div className="absolute -inset-3 -z-10 rounded-[2rem] bg-gradient-to-br from-gold/25 via-transparent to-purple/25 blur-md" />
            <div className="glass overflow-hidden rounded-[1.75rem] border border-border p-2">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.35rem]">
                <Image
                  src={HERO_PHOTO || '/placeholder.svg'}
                  alt="Shravani Pawar, backend-focused software engineer"
                  fill
                  priority
                  sizes="(max-width: 768px) 80vw, 380px"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to about section"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 text-muted-foreground transition-colors hover:text-gold md:block"
      >
        <ArrowDown className="h-5 w-5 animate-bounce" />
      </a>
    </section>
  )
}

function SocialLink({
  href,
  label,
  children,
}: {
  href: string
  label: string
  children: React.ReactNode
}) {
  return (
    <a
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
      aria-label={label}
      className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card/40 text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-gold/60 hover:text-gold"
    >
      {children}
    </a>
  )
}
