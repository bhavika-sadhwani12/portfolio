import type { ChallengeItem } from '@/types/challenge.types'

export const challenges: ChallengeItem[] = [
  {
    id: 'autocomplete',
    title: 'Autocomplete Search',
    description:
      'Debounced suggestions with keyboard navigation and request cancellation.',
    difficulty: 'Medium',
    tags: ['Search', 'Async', 'A11y'],
    codeUrl: 'https://github.com/bhavika-sadhwani12',
    liveUrl: 'https://9ljld8.csb.app/',
  },
  {
    id: 'rating',
    title: 'Rating Component',
    description:
      'Interactive star rating with hover preview, keyboard support, and controlled/uncontrolled modes.',
    difficulty: 'Easy',
    tags: ['React', 'Accessibility', 'State'],
    codeUrl: 'https://github.com/bhavika-sadhwani12/star-rating',
    liveUrl: 'https://5jj86d.csb.app/',
  },
  {
    id: 'tic-tac-toe',
    title: 'Tic Tac Toe',
    description:
      'Classic game board with win detection, turn management, and reset flow.',
    difficulty: 'Easy',
    tags: ['React', 'Game Logic'],
    codeUrl: 'https://github.com/bhavika-sadhwani12',
    liveUrl: 'https://vp9q5q.csb.app/',
  },
  {
    id: 'calculator',
    title: 'Calculator',
    description:
      'A calculator for basic arithmetic with keyboard input, clear, and a running display.',
    difficulty: 'Easy',
    tags: ['React', 'State', 'UI'],
    codeUrl: 'https://github.com/bhavika-sadhwani12',
    liveUrl: 'https://z8ygnd.csb.app/',
  },
  {
    id: 'drag-and-drop',
    title: 'Drag and Drop',
    description:
      'Reorderable list interactions with visual feedback and drop-target highlighting.',
    difficulty: 'Medium',
    tags: ['DnD', 'UX', 'Pointer Events'],
    codeUrl: 'https://github.com/bhavika-sadhwani12',
    liveUrl: 'https://326mw4.csb.app/',
  },
]
