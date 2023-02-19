<script setup lang="ts">
import { watch } from 'vue'
import { useRoute } from 'vue-router'
import { storeToRefs } from 'pinia'
import CartinhaItem from '@/components/CartinhaItem.vue'
import { useTeamInfoStore } from '@/stores/teamInfo'
import type { TeamSlug } from '@/stores/types/teamInfo'

const route = useRoute()
const teamInfoStore = useTeamInfoStore()
const { processTeamInfo } = teamInfoStore
const { playersInfoCardsFromLineup } = storeToRefs(teamInfoStore)

processTeamInfo(`${route.params.teamSlug}` as TeamSlug)

watch(route, (newRoute) => {
  processTeamInfo(`${newRoute.params.teamSlug}` as TeamSlug)
})
</script>

<template>
  <div class="tw-flex tw-flex-row tw-flex-wrap tw-gap-4 tw-p-4">
    <cartinha-item
      v-for="teamMembers in playersInfoCardsFromLineup"
      :key="teamMembers.summonerName"
      :value="teamMembers.value"
      :countryFlag="teamMembers.countryFlag"
      :summonerName="teamMembers.summonerName"
      :fullName="teamMembers.fullName"
      :role="teamMembers.role"
      :image="teamMembers.image"
      :teamIcon="teamMembers.teamIcon"
      :teamBackground="teamMembers.teamBackground"
    />
  </div>
</template>
