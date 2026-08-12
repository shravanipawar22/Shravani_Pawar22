import Image from 'next/image'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'
import { StatCard } from '@/components/stat-card'
import { ABOUT_PHOTO } from '@/lib/portfolio-data'

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-24">
      <SectionHeading eyebrow="Who I Am" title="About Me" />

      <div className="grid items-center gap-12 md:grid-cols-[0.9fr_1.1fr]">
        <Reveal className="order-2 md:order-1">
          <div className="relative mx-auto w-full max-w-sm">
            <div className="absolute -inset-2 -z-10 rounded-[2rem] bg-gradient-to-tr from-purple/20 via-transparent to-gold/20 blur" />
            <div className="glass overflow-hidden rounded-[1.75rem] border border-border p-2">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.35rem]">
                <Image
                  src={ABOUT_PHOTO || '/placeholder.svg'}
                  alt="Portrait of Shravani Pawar"
                  fill
                  sizes="(max-width: 768px) 80vw, 360px"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={120} className="order-1 space-y-5 md:order-2">
          <p className="text-pretty text-lg leading-relaxed text-foreground/90">
            I am a Computer Engineering graduate with hands-on backend
            engineering and production experience from{' '}
            <span className="font-medium text-gold">PayU Payments</span>. I
            specialize in building reliable backend services using Java, Spring
            Boot, REST APIs and MySQL.
          </p>
          <p className="text-pretty leading-relaxed text-muted-foreground">
            I enjoy solving real-world engineering problems, debugging
            production issues, improving system reliability, and continuously
            strengthening my software engineering fundamentals.
          </p>

          <div className="grid grid-cols-2 gap-4 pt-4 sm:grid-cols-3">
            <StatCard
              value="8.51"
              target={8.51}
              decimals={2}
              label="B.Tech CGPA"
            />
            <StatCard
              value="100+"
              target={100}
              suffix="+"
              label="DSA on LeetCode"
            />
            <StatCard
              value="6+"
              target={6}
              suffix="+"
              label="Featured Projects"
            />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
