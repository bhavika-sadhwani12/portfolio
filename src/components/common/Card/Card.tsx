import type { ReactNode } from 'react'
import { cn } from '@/utils/cn'

type CardProps = {
  children: ReactNode
  className?: string
  as?: 'div' | 'article' | 'li'
}

export function Card({ children, className, as: Component = 'div' }: CardProps) {
  return (
    <Component
      className={cn(
        'rounded-[var(--radius-card)] border border-border bg-surface/80 p-6 shadow-sm backdrop-blur-sm transition-colors duration-200 hover:border-border-strong',
        className,
      )}
    >
      {children}
    </Component>
  )
}
