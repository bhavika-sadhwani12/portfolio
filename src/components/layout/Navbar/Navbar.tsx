import { useEffect, useMemo, useState } from 'react'
import { Menu, Moon, Search, Sun, X } from 'lucide-react'
import { navItems } from '@/constants/nav'
import { challenges } from '@/data/challenges'
import { projects } from '@/data/projects'
import { siteConfig } from '@/data/site'
import { useActiveSection } from '@/hooks/useActiveSection'
import { useScrollLock } from '@/hooks/useScrollLock'
import { cn } from '@/utils/cn'

type Theme = 'dark' | 'light'

type SearchResult = {
  id: string
  label: string
  href: string
  group: string
}

const searchCatalog: SearchResult[] = [
  ...navItems.map((item) => ({
    id: item.id,
    label: item.label,
    href: item.href,
    group: 'Pages',
  })),
  { id: 'projects', label: 'Projects', href: '#projects', group: 'Pages' },
  { id: 'contact', label: 'Contact', href: '#contact', group: 'Pages' },
  ...projects.map((project) => ({
    id: project.id,
    label: project.title,
    href: '#projects',
    group: 'Projects',
  })),
  ...challenges.map((challenge) => ({
    id: challenge.id,
    label: challenge.title,
    href: '#challenges',
    group: 'Challenges',
  })),
]

function readTheme(): Theme {
  if (typeof document === 'undefined') return 'dark'
  return document.documentElement.dataset.theme === 'light' ? 'light' : 'dark'
}

export function Navbar() {
  const { activeSection, setActiveSectionFromNav } = useActiveSection()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [theme, setTheme] = useState<Theme>(readTheme)

  useScrollLock(isMobileOpen || isSearchOpen)

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    localStorage.setItem('theme', theme)
  }, [theme])

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMobileOpen(false)
        setIsSearchOpen(false)
      }
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  const results = useMemo(() => {
    const normalized = query.trim().toLowerCase()
    if (!normalized) return searchCatalog.slice(0, 8)
    return searchCatalog.filter((item) =>
      item.label.toLowerCase().includes(normalized),
    )
  }, [query])

  const handleNavClick = (sectionId: string) => {
    setActiveSectionFromNav(sectionId)
    setIsMobileOpen(false)
    setIsSearchOpen(false)
    setQuery('')
  }

  const firstName = siteConfig.name.split(' ')[0]

  return (
    <>
      <header
        className={cn(
          'fixed inset-x-0 top-0 z-50 transition-colors duration-300',
          isScrolled || isMobileOpen
            ? 'bg-background/90 backdrop-blur-xl'
            : 'bg-transparent',
        )}
      >
        <div className="relative mx-auto flex h-[4.5rem] w-full max-w-7xl items-center px-5 sm:px-6 lg:px-8">
          <a
            href="#home"
            className="text-xl font-bold tracking-tight text-foreground"
            onClick={() => handleNavClick('home')}
          >
            {firstName}
            <span className="text-highlight">.</span>
          </a>

          <nav
            className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 md:flex"
            aria-label="Primary"
          >
            {navItems.map((item) => {
              const isActive = activeSection === item.id
              return (
                <a
                  key={item.id}
                  href={item.href}
                  className={cn(
                    'relative pb-1 text-sm font-medium transition-colors',
                    isActive
                      ? 'text-foreground'
                      : 'text-foreground/80 hover:text-foreground',
                  )}
                  aria-current={isActive ? 'page' : undefined}
                  onClick={() => handleNavClick(item.id)}
                >
                  {item.label}
                  <span
                    className={cn(
                      'absolute right-0 -bottom-1 left-0 h-0.5 rounded-full bg-highlight transition-opacity',
                      isActive ? 'opacity-100' : 'opacity-0',
                    )}
                    aria-hidden="true"
                  />
                </a>
              )
            })}
          </nav>

          <div className="ml-auto flex items-center gap-1">
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full text-foreground/80 transition-colors hover:text-foreground"
              aria-label={
                theme === 'dark'
                  ? 'Switch to light theme'
                  : 'Switch to dark theme'
              }
              onClick={() =>
                setTheme((current) => (current === 'dark' ? 'light' : 'dark'))
              }
            >
              {theme === 'dark' ? (
                <Sun className="h-5 w-5" aria-hidden="true" />
              ) : (
                <Moon className="h-5 w-5" aria-hidden="true" />
              )}
            </button>
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full text-foreground/80 transition-colors hover:text-foreground"
              aria-label="Search"
              aria-expanded={isSearchOpen}
              aria-controls="site-search"
              onClick={() => {
                setIsMobileOpen(false)
                setIsSearchOpen(true)
              }}
            >
              <Search className="h-5 w-5" aria-hidden="true" />
            </button>
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full text-foreground md:hidden"
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
          </div>
        </div>

        <div
          id="mobile-navigation"
          className={cn(
            'border-t border-border bg-background md:hidden',
            isMobileOpen ? 'block' : 'hidden',
          )}
        >
          <nav
            aria-label="Mobile"
            className="mx-auto flex max-w-7xl flex-col px-5 py-3"
          >
            {navItems.map((item) => {
              const isActive = activeSection === item.id
              return (
                <a
                  key={item.id}
                  href={item.href}
                  className={cn(
                    'rounded-lg px-2 py-3 text-sm font-medium',
                    isActive ? 'text-highlight' : 'text-foreground/80',
                  )}
                  aria-current={isActive ? 'page' : undefined}
                  onClick={() => handleNavClick(item.id)}
                >
                  {item.label}
                </a>
              )
            })}
          </nav>
        </div>
      </header>
      {isSearchOpen ? (
        <div
          className="fixed inset-0 z-[60] bg-black/60 px-4 pt-24"
          onClick={() => setIsSearchOpen(false)}
        >
          <div
            id="site-search"
            role="dialog"
            aria-modal="true"
            aria-label="Search"
            className="mx-auto w-full max-w-lg rounded-2xl border border-border bg-background p-4 shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <label htmlFor="site-search-input" className="sr-only">
              Search the site
            </label>
            <input
              id="site-search-input"
              autoFocus
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search"
              className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm text-foreground outline-none placeholder:text-muted focus:border-highlight"
            />
            <ul className="mt-3 max-h-72 space-y-1 overflow-auto">
              {results.length === 0 ? (
                <li className="px-2 py-3 text-sm text-muted">No matches</li>
              ) : (
                results.map((result) => (
                  <li key={`${result.group}-${result.id}`}>
                    <a
                      href={result.href}
                      className="flex items-center justify-between rounded-lg px-2 py-2.5 text-sm text-foreground hover:bg-surface"
                      onClick={() =>
                        handleNavClick(result.href.replace('#', ''))
                      }
                    >
                      <span>{result.label}</span>
                      <span className="text-xs text-muted">{result.group}</span>
                    </a>
                  </li>
                ))
              )}
            </ul>
          </div>
        </div>
      ) : null}
    </>
  )
}
