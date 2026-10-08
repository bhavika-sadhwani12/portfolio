import { useEffect, useState } from 'react'
import { navItems } from '@/constants/nav'

const SECTION_IDS = navItems.map((item) => item.id)

function getActiveSectionId(offset = 120): string {
  let current = SECTION_IDS[0] ?? 'home'

  for (const id of SECTION_IDS) {
    const element = document.getElementById(id)
    if (!element) continue

    const top = element.getBoundingClientRect().top
    if (top - offset <= 0) {
      current = id
    }
  }

  const nearBottom =
    window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 8

  if (nearBottom) {
    return SECTION_IDS[SECTION_IDS.length - 1] ?? current
  }

  return current
}

export function useActiveSection(defaultSection = 'home') {
  const [activeSection, setActiveSection] = useState(defaultSection)

  useEffect(() => {
    const update = () => {
      setActiveSection(getActiveSectionId())
    }

    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)

    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [])

  const setActiveSectionFromNav = (sectionId: string) => {
    setActiveSection(sectionId)
  }

  return { activeSection, setActiveSectionFromNav }
}
