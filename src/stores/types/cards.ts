import type { TeamSlug } from './teamInfo'

export type League = 'cblol' | 'cblol-academy'

export type Rounds = '8' | '9'

export interface Cards {
  [k: string]: string
}

export type LeagueByRound = {
  [k in Rounds]: Cards
}

export type TeamInfoByLeague = {
  [k in League]: LeagueByRound
}

export type LineupObject = {
  [k in TeamSlug]: TeamInfoByLeague
}
