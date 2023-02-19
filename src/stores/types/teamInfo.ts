export interface HomeLeague {
  name: string
  region: string
}

export interface Player {
  id: string
  summonerName: string
  firstName: string
  lastName: string
  image: string
  role: string
}

export interface Team {
  id: string
  slug: string
  name: string
  code: string
  image: string
  alternativeImage?: string | null
  backgroundImage?: string | null
  status: string
  homeLeague: HomeLeague
  players: Player[]
}

export type TeamSlug =
  | 'los-grandes'
  | 'red-kalunga'
  | 'kabum-esports'
  | 'loud'
  | 'fluxo'
  | 'liberty'
  | 'intz'
  | 'furia'
  | 'pain-gaming'
  | 'vivo-keyd'

export type TeamObject = {
  [key in TeamSlug]: [Team, any]
}
