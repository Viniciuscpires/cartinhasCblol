import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { Team, TeamSlug } from '@/stores/types/teamInfo'
import type { Lineup, Roles } from '@/stores/types/lineup'
import type { Cards } from '@/stores/types/cards'
import { getCountryById } from '@/utils/countryList'
import info from '@/assets/info.json'
import playerPlaceholder from '@/assets/player_placeholder.png'

const tournament = 'cblol'

export const useTeamInfoStore = defineStore('teamInfo', () => {
  const state = ref({
    teamSlug: '',
    teamInfo: {} as Team,
    lineup: {} as Lineup,
    cards: {} as Cards,
  })
  const processTeamInfo = (teamSlug: TeamSlug) => {
    state.value.teamSlug = teamSlug
    const { teams, lineup, cards } = info
    state.value.teamInfo = teams[teamSlug].teams[0] as Team
    const lineupInfo = lineup[teamSlug][tournament]
    const cardsInfo = cards[teamSlug][tournament]
    const lineupKey = Object.keys(lineupInfo)[0] as '8'
    const cardsKey = Object.keys(cardsInfo)[0] as '8'
    state.value.lineup = lineupInfo[lineupKey]
    state.value.cards = cardsInfo[cardsKey]
  }

  const playersInfoCardsFromLineup = computed(() => {
    const lineupRoles = Object.keys(state.value.lineup) as Array<Roles>
    return lineupRoles
      .map((role) => {
        const summonerName = state.value.lineup[role]
        const cardValue = state.value.cards[summonerName]
        const playerInfo = state.value.teamInfo.players.find(
          (player) => player.summonerName === summonerName
        )

        const playerImage =
          playerInfo?.image.indexOf('placeholder') !== -1 ||
          playerInfo?.image.indexOf('Luskka') !== -1 ||
          playerInfo?.image.indexOf('Silhueta') !== -1
            ? playerPlaceholder
            : playerInfo?.image

        const teamBackground =
          state.value.teamInfo.backgroundImage ??
          state.value.teamInfo.alternativeImage

        return {
          value: cardValue,
          countryFlag: getCountryById('1')?.flag || '',
          team: state.value.teamInfo.name,
          summonerName,
          fullName: `${playerInfo?.firstName || ''} ${
            playerInfo?.lastName || ''
          }`,
          role,
          image: playerImage,
          teamBackground: teamBackground || '',
          teamIcon: state.value.teamInfo.image,
        }
      })
      .slice(0, 5)
  })

  return {
    teamState: state,
    playersInfoCardsFromLineup,
    processTeamInfo,
  }
})
