export type ChallengeDifficulty = 'Easy' | 'Medium' | 'Hard'

export type ChallengeItem = {
  id: string
  title: string
  description: string
  difficulty: ChallengeDifficulty
  tags: string[]
  codeUrl?: string
  liveUrl?: string
}
