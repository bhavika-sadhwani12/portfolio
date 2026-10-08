import { Badge } from '@/components/common/Badge'
import { Card } from '@/components/common/Card'
import type { ExperienceItem } from '@/types/experience.types'

type ExperienceCardProps = {
  experience: ExperienceItem
}

export function ExperienceCard({ experience }: ExperienceCardProps) {
  return (
    <Card as="article" className="relative overflow-hidden">
      <div
        className="absolute inset-y-0 left-0 w-1 bg-accent"
        aria-hidden="true"
      />
      <div className="pl-2">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <h3 className="font-display text-xl font-semibold text-foreground">
              {experience.company}
            </h3>
            <p className="mt-1 text-accent-soft">{experience.role}</p>
          </div>
          <p className="text-sm text-muted">
            {experience.startDate} — {experience.endDate}
          </p>
        </div>

        <ul className="mt-5 space-y-2.5 text-sm leading-relaxed text-muted sm:text-base">
          {experience.highlights.map((highlight) => (
            <li key={highlight} className="flex gap-3">
              <span
                className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-soft"
                aria-hidden="true"
              />
              <span>{highlight}</span>
            </li>
          ))}
        </ul>

        {experience.technologies?.length ? (
          <div className="mt-5 flex flex-wrap gap-2">
            {experience.technologies.map((tech) => (
              <Badge key={tech}>{tech}</Badge>
            ))}
          </div>
        ) : null}
      </div>
    </Card>
  )
}
