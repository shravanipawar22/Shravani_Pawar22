import {
  Code2,
  Layout,
  Server,
  Database,
  Wrench,
  Cloud,
  Users,
  Cpu,
} from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'
import { SKILLS } from '@/lib/portfolio-data'

const ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  Programming: Code2,
  Frontend: Layout,
  Backend: Server,
  Databases: Database,
  Tools: Wrench,
  Cloud: Cloud,
  CRM: Users,
  'Core CS': Cpu,
}

export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-24">
      <SectionHeading eyebrow="What I Work With" title="Skills & Toolbox" />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {SKILLS.map((group, i) => {
          const Icon = ICONS[group.category] ?? Code2
          return (
            <Reveal key={group.category} delay={i * 70}>
              <div className="group h-full rounded-3xl border border-border bg-card/50 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-gold/40">
                <div className="mb-4 flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-background/60 text-gold transition-colors group-hover:border-gold/50">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="font-display text-lg font-semibold">
                    {group.category}
                  </h3>
                </div>
                <ul className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-border bg-background/50 px-3 py-1.5 text-sm text-foreground/85 transition-all hover:-translate-y-0.5 hover:border-purple/50 hover:text-purple"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}
