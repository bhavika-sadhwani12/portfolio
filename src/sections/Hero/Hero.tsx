import { ArrowRight, Download, Mail } from 'lucide-react'
import { motion } from 'framer-motion'
import { Button } from '@/components/common/Button'
import { Container } from '@/components/common/Container'
import { GitHubIcon, LinkedInIcon } from '@/components/ui/SocialIcons'
import { siteConfig } from '@/data/site'
import { socialLinks } from '@/data/socialLinks'

const socialIcons = {
  github: GitHubIcon,
  linkedin: LinkedInIcon,
} as const

export function Hero() {
  return (
    <section id="home" className="relative pt-24 pb-14 sm:pt-28 sm:pb-16">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="max-w-3xl"
        >
          <p className="mb-2 text-xs font-medium uppercase tracking-[0.16em] text-accent-soft sm:text-sm">
            Frontend Software Engineer
          </p>
          <h1 className="font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            {siteConfig.name}
          </h1>
          <p className="mt-2 text-lg font-medium text-accent-soft sm:text-xl">
            {siteConfig.title}
          </p>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
            {siteConfig.summary}
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Button href="#projects" size="md">
              View Projects
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Button>
            <Button
              href={siteConfig.resumePath}
              size="md"
              variant="secondary"
              download={siteConfig.resumeFileName}
            >
              Download Resume
              <Download className="h-4 w-4" aria-hidden="true" />
            </Button>
            <Button href="#contact" size="md" variant="ghost">
              Contact Me
              <Mail className="h-4 w-4" aria-hidden="true" />
            </Button>
          </div>

          <div className="mt-5 flex items-center gap-2.5">
            {socialLinks.map((link) => {
              const Icon =
                socialIcons[link.id as keyof typeof socialIcons] ?? GitHubIcon
              return (
                <a
                  key={link.id}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-surface text-muted transition-colors hover:border-accent/40 hover:text-accent-soft"
                >
                  <Icon className="h-4 w-4" />
                </a>
              )
            })}
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
