import { Reveal } from '@/components/reveal'

export function SectionHeading({
  eyebrow,
  title,
}: {
  eyebrow: string
  title: string
}) {
  return (
    <Reveal className="mb-12">
      <p className="mb-3 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-gold">
        <span className="h-px w-8 bg-gold/60" />
        {eyebrow}
      </p>
      <h2 className="font-display text-3xl font-bold tracking-tight text-balance sm:text-4xl">
        {title}
      </h2>
    </Reveal>
  )
}
