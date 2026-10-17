export type NavItem = {
  id: string
  label: string
  href: string
}

export const navItems: NavItem[] = [
  { id: 'home', label: 'Home', href: '#home' },
  { id: 'about', label: 'About', href: '#about' },
  { id: 'experience', label: 'Experience', href: '#experience' },
  { id: 'challenges', label: 'Challenges', href: '#challenges' },
]
