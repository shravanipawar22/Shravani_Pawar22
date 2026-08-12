'use client'

import { useCountUp } from '@/hooks/use-count-up'

export function StatCard({
  value,
  target,
  label,
  decimals = 0,
  suffix = '',
}: {
  /** Fallback text shown if no numeric target (e.g. reduced motion base). */
  value: string
  target: number
  label: string
  decimals?: number
  suffix?: string
}) {
  const { ref, value: n } = useCountUp(target)

  const display =
    decimals > 0 ? n.toFixed(decimals) : Math.round(n).toString()

  return (
    <div
      ref={ref}
      className="rounded-2xl border border-border bg-card/50 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-gold/40"
    >
      <div className="font-display text-2xl font-bold text-gradient-gold tabular-nums">
        {display}
        {suffix}
      </div>
      <div className="mt-1 text-xs text-muted-foreground">{label}</div>
    </div>
  )
}
