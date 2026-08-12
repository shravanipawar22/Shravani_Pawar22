import { Mail, ArrowUpRight } from 'lucide-react'
import { GitHubIcon, LinkedInIcon, LeetCodeIcon } from '@/components/brand-icons'
import { Reveal } from '@/components/reveal'
import { CONTACT } from '@/lib/portfolio-data'

const CHANNELS = [
  { label: 'Email', href: CONTACT.email, Icon: Mail },
  { label: 'LinkedIn', href: CONTACT.linkedin, Icon: LinkedInIcon },
  { label: 'GitHub', href: CONTACT.github, Icon: GitHubIcon },
  { label: 'LeetCode', href: CONTACT.leetcode, Icon: LeetCodeIcon },
]

export function Contact() {
  const emailHref = CONTACT.email.startsWith('mailto:')
    ? CONTACT.email
    : CONTACT.email !== '#'
      ? `mailto:${CONTACT.email}`
      : '#'

  return (
    <section id="contact" className="scroll-mt-24 px-5 py-24">
      <Reveal>
        <div className="relative mx-auto max-w-4xl overflow-hidden rounded-[2rem] border border-border bg-card/50 p-8 text-center sm:p-14">
          <div className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute -top-20 left-1/2 h-56 w-56 -translate-x-1/2 rounded-full bg-gold/15 blur-[100px]" />
            <div className="absolute bottom-0 right-10 h-48 w-48 rounded-full bg-purple/15 blur-[100px]" />
          </div>

          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-gold">
            Get In Touch
          </p>
          <h2 className="font-display text-3xl font-bold tracking-tight text-balance sm:text-5xl">
            Let&apos;s Build Something Great.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-pretty leading-relaxed text-muted-foreground">
            I&apos;m open to Software Engineer and Backend Engineer
            opportunities.
          </p>

          <div className="mt-8 flex justify-center">
            <a
              href={emailHref}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-gold px-8 py-3.5 text-sm font-semibold text-gold-foreground transition-all hover:-translate-y-0.5 hover:shadow-[0_14px_50px_-12px_var(--gold)]"
            >
              Get In Touch
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {CHANNELS.map(({ label, href, Icon }) => {
              const isEmail = label === 'Email'
              const resolvedHref =
                isEmail && !href.startsWith('mailto') && href !== '#'
                  ? `mailto:${href}`
                  : href
              return (
                <a
                  key={label}
                  href={resolvedHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col items-center gap-2 rounded-2xl border border-border bg-background/50 p-4 transition-all hover:-translate-y-1 hover:border-gold/50"
                >
                  <Icon className="h-5 w-5 text-muted-foreground transition-colors group-hover:text-gold" />
                  <span className="text-sm font-medium text-foreground/90">
                    {label}
                  </span>
                </a>
              )
            })}
          </div>
        </div>
      </Reveal>

      <footer className="mx-auto mt-16 max-w-6xl border-t border-border pt-8 text-center text-sm text-muted-foreground">
        <p>
          Designed &amp; built by{' '}
          <span className="text-foreground">Shravani Pawar</span>
        </p>
      </footer>
    </section>
  )
}
