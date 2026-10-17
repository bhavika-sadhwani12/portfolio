import { Download } from 'lucide-react'
import { Button } from '@/components/common/Button'
import { Container } from '@/components/common/Container'
import { siteConfig } from '@/data/site'

export function Hero() {
  const firstName = siteConfig.name.split(' ')[0]

  return (
    <section id="home" className="scroll-mt-20 pt-28 pb-16 sm:pt-32 sm:pb-24">
      <Container className="max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-8">
          <div>
            <p className="text-2xl font-semibold text-foreground sm:text-[1.7rem]">
              Hey, I&apos;m {firstName} <span aria-hidden="true">👋</span>
            </p>
            <h1 className="mt-3 text-6xl font-extrabold leading-[0.95] tracking-tight sm:text-7xl lg:text-8xl">
              <span className="text-highlight">Frontend</span>
              <br />
              <span className="text-foreground">Developer</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
              {siteConfig.summary}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button
                href="#contact"
                className="h-12 rounded-full bg-accent px-7 text-base font-medium text-white shadow-none hover:bg-[#6d28d9]"
              >
                Get In Touch
              </Button>
              <Button
                href={siteConfig.resumePath}
                variant="secondary"
                download={siteConfig.resumeFileName}
                className="h-12 rounded-full border-border-strong bg-transparent px-6 text-base font-medium text-foreground shadow-none hover:border-foreground/30 hover:bg-foreground/5"
              >
                <Download className="h-4 w-4" aria-hidden="true" />
                Download CV
              </Button>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[22rem] sm:max-w-[26rem]">
            <div
              className="absolute inset-8 rounded-full bg-accent/70 blur-3xl"
              aria-hidden="true"
            />
            <div
              className="absolute -inset-6 rounded-full bg-highlight/30 blur-3xl"
              aria-hidden="true"
            />
            <div className="relative aspect-square overflow-hidden rounded-full bg-black">
              <img
                src="/hero-avatar.jpg"
                alt=""
                className="h-full w-full object-cover object-center"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
