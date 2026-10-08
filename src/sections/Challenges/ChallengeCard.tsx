import { Code2, ExternalLink } from 'lucide-react'
import { Badge } from '@/components/common/Badge'
import { Button } from '@/components/common/Button'
import { Card } from '@/components/common/Card'
import type { ChallengeItem } from '@/types/challenge.types'
import { cn } from '@/utils/cn'

type ChallengeCardProps = {
  challenge: ChallengeItem
}

const difficultyStyles = {
  Easy: 'border-success/30 bg-success/10 text-success',
  Medium: 'border-accent/30 bg-accent-muted text-accent-soft',
  Hard: 'border-danger/30 bg-danger/10 text-danger',
} as const

export function ChallengeCard({ challenge }: ChallengeCardProps) {
  return (
    <Card as="article" className="flex h-full flex-col">
      <div className="flex items-start justify-between gap-3">
        <h3 className="font-display text-lg font-semibold text-foreground">
          {challenge.title}
        </h3>
        <span
          className={cn(
            'shrink-0 rounded-lg border px-2 py-1 text-xs font-medium',
            difficultyStyles[challenge.difficulty],
          )}
        >
          {challenge.difficulty}
        </span>
      </div>

      <p className="mt-3 text-sm leading-relaxed text-muted">
        {challenge.description}
      </p>

      <div className="mt-4 flex flex-wrap gap-2">
        {challenge.tags.map((tag) => (
          <Badge key={tag}>{tag}</Badge>
        ))}
      </div>

      <div className="mt-auto flex flex-wrap gap-2 pt-5">
        {challenge.codeUrl ? (
          <Button
            href={challenge.codeUrl}
            target="_blank"
            rel="noopener noreferrer"
            size="sm"
            variant="secondary"
          >
            <Code2 className="h-3.5 w-3.5" aria-hidden="true" />
            Code
          </Button>
        ) : null}
        {challenge.liveUrl ? (
          <Button
            href={challenge.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            size="sm"
            variant="ghost"
          >
            <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
            Live Demo
          </Button>
        ) : null}
      </div>
    </Card>
  )
}
