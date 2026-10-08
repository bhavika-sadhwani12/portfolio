import { Container } from '@/components/common/Container'
import { SectionTitle } from '@/components/common/SectionTitle'
import { projects } from '@/data/projects'
import { ProjectCard } from './ProjectCard'

export function Projects() {
  return (
    <section id="projects" className="scroll-mt-20 py-14 sm:py-16">
      <Container>
        <SectionTitle
          eyebrow="Projects"
          title="Projects"
          description="Apps and UI systems I've built with React and TypeScript."
        />

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </Container>
    </section>
  )
}
