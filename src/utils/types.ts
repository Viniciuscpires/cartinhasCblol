export interface RoleNames {
  top: string
  jungle: string
  mid: string
  bot: string
  support: string
}

export interface TeamImgs {
  [k: string]: {
    icon: string
    background: string
  }
}

export interface Player {
  id: string
  summonerName: string
  firstName: string
  lastName: string
  image: string
  role: string
}

export interface TeamInfo {
  id: string
  slug: string
  name: string
  code: string
  image: string
  alternativeImage?: string | null
  backgroundImage?: string | null
  status?: string
  homeLeague?: {
    name: string
    region: string
  }
  players?: Array<Player>
  record?: {
    wins: number
    losses: number
  }
}

export interface Standing extends StandingInfo {
  cards: number
}

export interface StandingInfo {
  ordinal: number
  teams: Array<TeamInfo>
}
