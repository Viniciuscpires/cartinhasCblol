import type { TeamSlug } from './teamInfo'

export type League = 'cblol' | 'cblol-academy'

export type Rounds = '8' | '9'

export type Roles = 'top' | 'jungle' | 'mid' | 'bottom' | 'support' | 'coach'

export interface Lineup {
  top: string
  jungle: string
  mid: string
  bottom: string
  support: string
  coach: string
}

export type LeagueByRound = {
  [k in Rounds]: Lineup
}

export type TeamInfoByLeague = {
  [k in League]: LeagueByRound
}

export type LineupObject = {
  [k in TeamSlug]: TeamInfoByLeague
}
