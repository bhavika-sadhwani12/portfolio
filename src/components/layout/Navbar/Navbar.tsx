import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Container } from '@/components/common/Container'
import { GitHubIcon, LinkedInIcon } from '@/components/ui/SocialIcons'
import { navItems } from '@/constants/nav'
import { siteConfig } from '@/data/site'
import { socialLinks } from '@/data/socialLinks'
import { useActiveSection } from '@/hooks/useActiveSection'
import { useScrollLock } from '@/hooks/useScrollLock'
import { cn } from '@/utils/cn'

const socialIcons = {
  github: GitHubIcon,
  linkedin: LinkedInIcon,
} as const

export function Navbar() {
  const { activeSection, setActiveSectionFromNav } = useActiveSection()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)

  useScrollLock(isMobileOpen)

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMobileOpen(false)
      }
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  const handleNavClick = (sectionId: string) => {
    setActiveSectionFromNav(sectionId)
    setIsMobileOpen(false)
  }

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300',
        isScrolled || isMobileOpen
          ? 'border-border/80 bg-background/85 backdrop-blur-xl'
          : 'border-transparent bg-transparent',
      )}
    >
      <Container className="flex h-16 items-center justify-between">
        <a
          href="#home"
          className="font-display text-lg font-semibold tracking-tight text-foreground transition-colors hover:text-accent-soft"
          onClick={() => handleNavClick('home')}
        >
          {siteConfig.name.split(' ')[0]}
          <span className="text-accent-soft">.</span>
        </a>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {navItems.map((item) => {
            const isActive = activeSection === item.id
            return (
              <a
                key={item.id}
                href={item.href}
                className={cn(
                  'rounded-lg px-3 py-2 text-sm font-medium transition-colors',
                  isActive
                    ? 'bg-accent/20 text-accent'
                    : 'text-muted hover:text-foreground',
                )}
                aria-current={isActive ? 'page' : undefined}
                onClick={() => handleNavClick(item.id)}
              >
                {item.label}
              </a>
            )
          })}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
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

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border text-foreground lg:hidden"
          aria-label={isMobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMobileOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsMobileOpen((open) => !open)}
        >
          {isMobileOpen ? (
            <X className="h-5 w-5" aria-hidden="true" />
          ) : (
            <Menu className="h-5 w-5" aria-hidden="true" />
          )}
        </button>
      </Container>

      <div
        id="mobile-navigation"
        className={cn(
          'border-t border-border bg-background/95 backdrop-blur-xl lg:hidden',
          isMobileOpen ? 'block' : 'hidden',
        )}
      >
        <Container className="flex flex-col gap-2 py-4">
          <nav aria-label="Mobile">
            <ul className="flex flex-col gap-1">
              {navItems.map((item) => {
                const isActive = activeSection === item.id
                return (
                  <li key={item.id}>
                    <a
                      href={item.href}
                      className={cn(
                        'block rounded-xl px-3 py-3 text-sm font-medium transition-colors',
                        isActive
                          ? 'bg-accent/20 text-accent'
                          : 'text-muted hover:bg-surface hover:text-foreground',
                      )}
                      aria-current={isActive ? 'page' : undefined}
                      onClick={() => handleNavClick(item.id)}
                    >
                      {item.label}
                    </a>
                  </li>
                )
              })}
            </ul>
          </nav>

          <div className="mt-2 flex gap-2 border-t border-border pt-4">
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
                  onClick={() => setIsMobileOpen(false)}
                >
                  <Icon className="h-4 w-4" />
                </a>
              )
            })}
          </div>
        </Container>
      </div>
    </header>
  )
}
