import { Container } from '@/components/common/Container'
import { SectionTitle } from '@/components/common/SectionTitle'
import { experience } from '@/data/experience'
import { ExperienceCard } from './ExperienceCard'

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-20 py-14 sm:py-16">
      <Container>
        <SectionTitle
          eyebrow="Experience"
          title="Experience"
          description="Roles and work I've shipped as a frontend engineer."
        />

        <div className="space-y-6">
          {experience.map((item) => (
            <ExperienceCard key={item.id} experience={item} />
          ))}
        </div>
      </Container>
    </section>
  )
}
