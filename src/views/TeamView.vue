<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { teamsInfo } from '@/utils/enums'
import type { TeamInfo } from '@/utils/types'
import CartinhaItem from '@/components/CartinhaItem.vue'

const route = useRoute()
const state = ref({
  teamInfo: {} as TeamInfo,
})

const updateTeamInfo = (teamSlug: string) => {
  state.value.teamInfo = teamsInfo[teamSlug]
}
updateTeamInfo(`${route.params.teamSlug}`)

watch(route, (newRoute) => {
  updateTeamInfo(`${newRoute.params.teamSlug}`)
})
</script>

<template>
  {{ state.teamInfo.slug }}
  <div class="tw-flex tw-flex-row tw-flex-wrap tw-gap-4">
    <cartinha-item
      v-for="teamMembers in state.teamInfo.players"
      :key="teamMembers.summonerName"
      value="80"
      countryId="1"
      :team="state.teamInfo.slug"
      :nick="teamMembers.summonerName"
      :name="`${teamMembers.firstName} ${teamMembers.lastName}`"
      :role="teamMembers.role"
    />
  </div>
</template>
