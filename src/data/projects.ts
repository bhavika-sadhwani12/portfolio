import type { ProjectItem } from '@/types/project.types'

export const projects: ProjectItem[] = [
  {
    id: 'realtime-chat',
    title: 'Real-Time Chat Application',
    description:
      'A messaging UI with presence indicators, optimistic updates, and resilient reconnect handling for real-time conversations.',
    techStack: ['React', 'TypeScript', 'WebSockets', 'Zustand', 'Tailwind'],
    features: [
      'Live message delivery and typing indicators',
      'Read receipts and online presence',
      'Optimistic UI with rollback on failure',
      'Virtualized message list for long threads',
    ],
    githubUrl: 'https://github.com/bhavika-sadhwani12',
  },
  {
    id: 'task-dashboard',
    title: 'Task Management Dashboard',
    description:
      'A productivity dashboard for organizing work across boards, filters, and priority views with snappy client-side interactions.',
    techStack: ['React', 'TypeScript', 'TanStack Query', 'Tailwind'],
    features: [
      'Kanban-style board interactions',
      'Filterable and searchable task lists',
      'Cached server state with stale-while-revalidate patterns',
      'Responsive layout across desktop and mobile',
    ],
    githubUrl: 'https://github.com/bhavika-sadhwani12',
  },
  {
    id: 'auth-system',
    title: 'Authentication System',
    description:
      'A polished auth flow covering sign-in, protected routes, and form validation with clear feedback states.',
    techStack: ['React', 'TypeScript', 'React Router', 'Zod'],
    features: [
      'Protected route patterns',
      'Accessible form validation',
      'Session-aware navigation',
      'Reusable auth UI primitives',
    ],
    githubUrl: 'https://github.com/bhavika-sadhwani12',
  },
  {
    id: 'file-explorer',
    title: 'File Explorer',
    description:
      'A nested file system explorer demonstrating recursive rendering, selection state, and keyboard-friendly navigation.',
    techStack: ['React', 'TypeScript', 'CSS'],
    features: [
      'Nested folder expansion',
      'Multi-select and checkbox inheritance patterns',
      'Search within the tree',
      'Accessible keyboard navigation',
    ],
    githubUrl: 'https://github.com/bhavika-sadhwani12',
  },
  {
    id: 'ecommerce-frontend',
    title: 'E-commerce Frontend',
    description:
      'A product browsing experience with catalog filters, cart interactions, and performance-minded rendering.',
    techStack: ['React', 'TypeScript', 'Tailwind', 'React Router'],
    features: [
      'Product grid with filters',
      'Cart and quantity controls',
      'Route-based product details',
      'Skeleton loading states',
    ],
    githubUrl: 'https://github.com/bhavika-sadhwani12',
  },
  {
    id: 'autocomplete-search',
    title: 'Search / Autocomplete Application',
    description:
      'A fast autocomplete experience with debounced queries, keyboard navigation, and empty/error state handling.',
    techStack: ['React', 'TypeScript', 'REST APIs'],
    features: [
      'Debounced search input',
      'Keyboard highlight and selection',
      'Abortable in-flight requests',
      'Accessible combobox patterns',
    ],
    githubUrl: 'https://github.com/bhavika-sadhwani12',
  },
]
