import type { ChallengeItem } from '@/types/challenge.types'

export const challenges: ChallengeItem[] = [
  {
    id: 'rating',
    title: 'Rating Component',
    description:
      'Interactive star rating with hover preview, keyboard support, and controlled/uncontrolled modes.',
    difficulty: 'Easy',
    tags: ['React', 'Accessibility', 'State'],
    codeUrl: 'https://github.com/bhavika-sadhwani12/star-rating',
  },
  {
    id: 'tic-tac-toe',
    title: 'Tic Tac Toe',
    description:
      'Classic game board with win detection, turn management, and reset flow.',
    difficulty: 'Easy',
    tags: ['React', 'Game Logic'],
    codeUrl: 'https://github.com/bhavika-sadhwani12',
  },
  {
    id: 'drag-and-drop',
    title: 'Drag and Drop',
    description:
      'Reorderable list interactions with visual feedback and drop-target highlighting.',
    difficulty: 'Medium',
    tags: ['DnD', 'UX', 'Pointer Events'],
    codeUrl: 'https://github.com/bhavika-sadhwani12',
  },
  {
    id: 'progress-bar',
    title: 'Progress Bar',
    description:
      'Animated progress indicator with determinate and indeterminate states.',
    difficulty: 'Easy',
    tags: ['CSS', 'Animation'],
    codeUrl: 'https://github.com/bhavika-sadhwani12',
  },
  {
    id: 'otp-validation',
    title: 'OTP Validation',
    description:
      'Multi-input OTP field with paste support, focus management, and validation.',
    difficulty: 'Medium',
    tags: ['Forms', 'UX', 'Accessibility'],
    codeUrl: 'https://github.com/bhavika-sadhwani12',
  },
  {
    id: 'nested-checkboxes',
    title: 'Nested Checkboxes',
    description:
      'Parent/child checkbox tree with indeterminate state propagation.',
    difficulty: 'Hard',
    tags: ['Trees', 'State', 'Recursion'],
    codeUrl: 'https://github.com/bhavika-sadhwani12',
  },
  {
    id: 'file-explorer',
    title: 'File Explorer',
    description:
      'Recursive folder explorer with expand/collapse and selection state.',
    difficulty: 'Medium',
    tags: ['Trees', 'UI Patterns'],
    codeUrl: 'https://github.com/bhavika-sadhwani12',
  },
  {
    id: 'pagination',
    title: 'Pagination',
    description:
      'Page controls with ellipsis logic, range calculation, and keyboard support.',
    difficulty: 'Easy',
    tags: ['Algorithms', 'UI'],
    codeUrl: 'https://github.com/bhavika-sadhwani12',
  },
  {
    id: 'autocomplete',
    title: 'Autocomplete Search',
    description:
      'Debounced suggestions with keyboard navigation and request cancellation.',
    difficulty: 'Medium',
    tags: ['Search', 'Async', 'A11y'],
    codeUrl: 'https://github.com/bhavika-sadhwani12',
  },
  {
    id: 'infinite-scroll',
    title: 'Infinite Scroll',
    description:
      'Intersection Observer powered list loading with sentinel and empty states.',
    difficulty: 'Medium',
    tags: ['Performance', 'Observer API'],
    codeUrl: 'https://github.com/bhavika-sadhwani12',
  },
  {
    id: 'modal',
    title: 'Modal',
    description:
      'Accessible dialog with focus trap, escape handling, and scroll lock.',
    difficulty: 'Medium',
    tags: ['Accessibility', 'Focus'],
    codeUrl: 'https://github.com/bhavika-sadhwani12',
  },
  {
    id: 'toast',
    title: 'Toast System',
    description:
      'Stackable notifications with auto-dismiss, variants, and queue management.',
    difficulty: 'Medium',
    tags: ['State', 'UX'],
    codeUrl: 'https://github.com/bhavika-sadhwani12',
  },
]
