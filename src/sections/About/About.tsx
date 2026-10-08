import { Badge } from '@/components/common/Badge'
import { Card } from '@/components/common/Card'
import { Container } from '@/components/common/Container'
import { SectionTitle } from '@/components/common/SectionTitle'
import { skillGroups } from '@/data/skills'
import { siteConfig } from '@/data/site'

export function About() {
  return (
    <section id="about" className="scroll-mt-20 py-14 sm:py-16">
      <Container>
        <SectionTitle
          eyebrow="About"
          title="About Me"
          description="React and TypeScript developer focused on performance and clear UI architecture."
        />

        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <Card className="space-y-4">
            <p className="text-sm leading-relaxed text-muted sm:text-base">
              I&apos;m {siteConfig.name}, a {siteConfig.title}. I build
              production React apps with attention to structure, state, and how
              the UI behaves under real usage.
            </p>
            <p className="text-sm leading-relaxed text-muted sm:text-base">
              At work I ship features around chat, calling, presence, and
              messaging — including WebSockets, API integrations, reusable
              components, and performance work like virtualization and lazy
              loading.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              {['React', 'TypeScript', 'JavaScript', 'WebSockets'].map(
                (item) => (
                  <Badge key={item}>{item}</Badge>
                ),
              )}
            </div>
          </Card>

          <div className="space-y-4">
            {skillGroups.map((group) => (
              <Card key={group.id} className="p-5">
                <h3 className="mb-3 text-sm font-semibold uppercase tracking-[0.14em] text-foreground">
                  {group.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <Badge key={skill}>{skill}</Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
