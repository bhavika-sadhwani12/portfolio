import { Mail } from 'lucide-react'
import { Card } from '@/components/common/Card'
import { Container } from '@/components/common/Container'
import { SectionTitle } from '@/components/common/SectionTitle'
import { GitHubIcon, LinkedInIcon } from '@/components/ui/SocialIcons'
import { siteConfig } from '@/data/site'
import { socialLinks } from '@/data/socialLinks'
import { ContactForm } from './ContactForm'

const socialIcons = {
  github: GitHubIcon,
  linkedin: LinkedInIcon,
} as const

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-20 py-14 sm:py-16">
      <Container>
        <SectionTitle
          eyebrow="Contact"
          title="Get in touch"
          description="Email, LinkedIn, or the form — whichever is easier."
        />

        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <Card className="space-y-5">
            <div>
              <h3 className="font-display text-lg font-semibold text-foreground">
                Contact
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                Best ways to reach me.
              </p>
            </div>

            <a
              href={`mailto:${siteConfig.email}`}
              className="inline-flex items-center gap-3 text-sm text-muted transition-colors hover:text-accent-soft"
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border">
                <Mail className="h-4 w-4" aria-hidden="true" />
              </span>
              {siteConfig.email}
            </a>

            <div className="flex flex-col gap-3">
              {socialLinks.map((link) => {
                const Icon =
                  socialIcons[link.id as keyof typeof socialIcons] ?? GitHubIcon
                return (
                  <a
                    key={link.id}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 text-sm text-muted transition-colors hover:text-accent-soft"
                  >
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border">
                      <Icon className="h-4 w-4" />
                    </span>
                    {link.label}
                  </a>
                )
              })}
            </div>
          </Card>

          <Card>
            <ContactForm />
          </Card>
        </div>
      </Container>
    </section>
  )
}
