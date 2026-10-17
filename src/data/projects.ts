import type { ProjectItem } from '@/types/project.types'

export const projects: ProjectItem[] = [
  {
    id: 'autocomplete-search',
    title: 'Autocomplete Search',
    description:
      'A fast autocomplete experience with debounced queries, keyboard navigation, and empty/error state handling.',
    techStack: ['React', 'TypeScript', 'REST APIs'],
    features: [
      'Debounced search input',
      'Keyboard highlight and selection',
      'Abortable in-flight requests',
      'Accessible combobox patterns',
    ],
    liveUrl: 'https://9ljld8.csb.app/',
  },
]
