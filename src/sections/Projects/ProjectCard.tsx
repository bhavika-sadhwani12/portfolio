import { ExternalLink } from 'lucide-react'
import { Badge } from '@/components/common/Badge'
import { Card } from '@/components/common/Card'
import { GitHubIcon } from '@/components/ui/SocialIcons'
import type { ProjectItem } from '@/types/project.types'

type ProjectCardProps = {
  project: ProjectItem
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card as="article" className="flex h-full flex-col">
      <div className="mb-4 flex h-36 items-center justify-center rounded-xl border border-border bg-gradient-to-br from-surface-elevated to-accent-muted">
        {project.imageSrc ? (
          <img
            src={project.imageSrc}
            alt={project.imageAlt ?? project.title}
            className="h-full w-full rounded-xl object-cover"
            loading="lazy"
            decoding="async"
          />
        ) : (
          <span className="font-display text-lg font-semibold text-accent-soft">
            {project.title
              .split(' ')
              .slice(0, 2)
              .map((part) => part[0])
              .join('')}
          </span>
        )}
      </div>

      <h3 className="font-display text-xl font-semibold text-foreground">
        {project.title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-muted sm:text-base">
        {project.description}
      </p>

      <ul className="mt-4 space-y-1.5 text-sm text-muted">
        {project.features.slice(0, 3).map((feature) => (
          <li key={feature} className="flex gap-2">
            <span className="text-accent-soft" aria-hidden="true">
              •
            </span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.techStack.map((tech) => (
          <Badge key={tech}>{tech}</Badge>
        ))}
      </div>

      <div className="mt-auto flex gap-3 pt-5">
        {project.githubUrl ? (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-accent-soft"
          >
            <GitHubIcon className="h-4 w-4" />
            Code
          </a>
        ) : null}
        {project.liveUrl ? (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-accent-soft"
          >
            <ExternalLink className="h-4 w-4" aria-hidden="true" />
            Live Demo
          </a>
        ) : null}
      </div>
    </Card>
  )
}
