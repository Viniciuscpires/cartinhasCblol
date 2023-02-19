import { ref } from 'vue'
import { defineStore } from 'pinia'
import info from '@/assets/info.json'
import type { Standing, StandingInfo } from '@/utils/types'
import type { TeamSlug } from '@/stores/types/teamInfo'
import type { Cards } from '@/stores/types/cards'

const tournament = 'cblol'

export const useStandingsStore = defineStore('Standings', () => {
  const state = ref({
    standings: [] as Array<Standing>,
    sortingType: 'ordinal' as 'ordinal' | 'cards',
  })

  const standingsInfo = info.standings[0].stages[0].sections[0]
    .rankings as Array<StandingInfo>

  const cardsInfoMapped = Object.keys(info.cards).map((key) => {
    const cardsInfoByTournament = info.cards[key as TeamSlug][tournament]
    const latestKey = Object.keys(cardsInfoByTournament)[0] as '8'
    const latestCardsInfo = cardsInfoByTournament[latestKey] as Cards
    const fullCardValue = Object.keys(latestCardsInfo).reduce((last, curr) => {
      if (curr === 'coach') return last
      return last + +latestCardsInfo[curr]
    }, 0)
    return [
      key,
      Math.round(fullCardValue / Object.keys(latestCardsInfo).length - 1),
    ]
  })

  const cardsInfo = Object.fromEntries(cardsInfoMapped)

  state.value.standings = standingsInfo.map((standing) => ({
    ...standing,
    cards: cardsInfo[standing.teams[0].slug],
  })) as Array<Standing>

  const sortStandings = () => {
    state.value.standings = [
      ...state.value.standings.sort((a: Standing, b: Standing) => {
        if (a[state.value.sortingType] < b[state.value.sortingType]) {
          return state.value.sortingType === 'ordinal' ? -1 : 1
        }
        if (a[state.value.sortingType] > b[state.value.sortingType]) {
          return state.value.sortingType === 'ordinal' ? 1 : -1
        }
        return 0
      }),
    ]
  }

  return {
    standingsState: state,
    sortStandings,
  }
})
