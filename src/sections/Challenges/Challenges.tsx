import { Container } from '@/components/common/Container'
import { SectionTitle } from '@/components/common/SectionTitle'
import { challenges } from '@/data/challenges'
import { ChallengeCard } from './ChallengeCard'

export function Challenges() {
  return (
    <section id="challenges" className="scroll-mt-20 py-14 sm:py-16">
      <Container>
        <SectionTitle
          eyebrow="Practice"
          title="Frontend Challenges"
          description="UI problems I use to practice React patterns and interaction details."
        />

        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {challenges.map((challenge) => (
            <ChallengeCard key={challenge.id} challenge={challenge} />
          ))}
        </div>
      </Container>
    </section>
  )
}
