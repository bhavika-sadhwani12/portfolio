import type { ReactNode } from 'react'
import { cn } from '@/utils/cn'

type BadgeProps = {
  children: ReactNode
  className?: string
}

export function Badge({ children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-lg border border-border bg-accent-muted px-2.5 py-1 text-xs font-medium text-accent-soft',
        className,
      )}
    >
      {children}
    </span>
  )
}
