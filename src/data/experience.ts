import type { ExperienceItem } from '@/types/experience.types'

export const experience: ExperienceItem[] = [
  {
    id: 'jio',
    company: 'Jio Platforms Limited',
    role: 'Software Engineer - Frontend',
    location: 'India',
    startDate: 'October 2023',
    endDate: 'Present',
    technologies: [
      'React',
      'TypeScript',
      'Zustand',
      'TanStack Query',
      'WebSockets',
      'WebRTC',
    ],
    highlights: [
      'Built React and TypeScript apps used in production',
      'Worked on real-time chat features with WebSockets',
      'Implemented presence, read receipts, and message delivery UI',
      'Built reusable components and shared hooks',
      'Improved performance with virtualization and lazy loading',
      'Used Zustand for client state and TanStack Query for server state',
      'Integrated REST APIs and async workflows',
      'Shipped responsive UI from Figma designs',
    ],
  },
]
