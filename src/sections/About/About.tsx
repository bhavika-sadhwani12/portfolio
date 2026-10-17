import { Container } from '@/components/common/Container'

export function About() {
  return (
    <section id="about" className="scroll-mt-24 py-16 sm:py-20">
      <Container className="max-w-7xl">
        <h2 className="text-5xl font-extrabold tracking-tight text-foreground sm:text-6xl">
          About me.
        </h2>
        <div className="mt-8 border-l-[3px] border-highlight pl-5 sm:pl-6">
          <p className="max-w-5xl text-base leading-relaxed text-muted sm:text-lg">
            Hey <span aria-hidden="true">👋</span>, I am a Frontend Developer
            with a passion for building clear and reliable user interfaces. I
            love learning new things and I am always ready to take on new
            challenges. I have experience working with HTML, CSS, JavaScript,
            React, TypeScript, Tailwind CSS, WebSockets, and real-time features
            like chat, presence, and messaging.
          </p>
        </div>
      </Container>
    </section>
  )
}
