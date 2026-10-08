import { Container } from '@/components/common/Container'
import { GitHubIcon, LinkedInIcon } from '@/components/ui/SocialIcons'
import { navItems } from '@/constants/nav'
import { siteConfig } from '@/data/site'
import { socialLinks } from '@/data/socialLinks'

const socialIcons = {
  github: GitHubIcon,
  linkedin: LinkedInIcon,
} as const

export function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <Container className="grid gap-8 md:grid-cols-[1.2fr_1fr_auto]">
        <div>
          <p className="font-display text-lg font-semibold text-foreground">
            {siteConfig.name}
          </p>
          <p className="mt-2 max-w-sm text-sm leading-relaxed text-muted">
            {siteConfig.title}
          </p>
        </div>

        <nav aria-label="Footer">
          <p className="mb-3 text-sm font-semibold text-foreground">
            Quick navigation
          </p>
          <ul className="grid grid-cols-2 gap-2 text-sm text-muted">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={item.href}
                  className="transition-colors hover:text-accent-soft"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex gap-2 md:justify-end">
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
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border text-muted transition-colors hover:border-accent/40 hover:text-accent-soft"
              >
                <Icon className="h-4 w-4" />
              </a>
            )
          })}
        </div>
      </Container>

      <Container className="mt-8 border-t border-border pt-6">
        <p className="text-sm text-muted">
          © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
        </p>
      </Container>
    </footer>
  )
}
