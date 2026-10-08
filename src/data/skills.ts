export type SkillGroup = {
  id: string
  title: string
  skills: string[]
}

export const skillGroups: SkillGroup[] = [
  {
    id: 'frontend',
    title: 'Frontend',
    skills: ['React', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'Tailwind'],
  },
  {
    id: 'architecture',
    title: 'Architecture / State',
    skills: ['Zustand', 'Redux', 'TanStack Query', 'React Router'],
  },
  {
    id: 'performance',
    title: 'Performance',
    skills: [
      'Virtualization',
      'Lazy Loading',
      'Code Splitting',
      'Memoization',
      'Debouncing',
    ],
  },
  {
    id: 'engineering',
    title: 'Engineering',
    skills: [
      'REST APIs',
      'WebSockets',
      'WebRTC',
      'Git',
      'Docker',
      'CI/CD',
      'Azure DevOps',
    ],
  },
  {
    id: 'testing',
    title: 'Testing',
    skills: ['Playwright', 'Jest', 'React Testing Library', 'Storybook'],
  },
]
