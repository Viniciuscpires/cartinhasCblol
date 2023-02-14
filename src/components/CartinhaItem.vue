<script setup lang="ts">
import RoleIcon from './RoleIcon.vue'
import { getCountryById } from '../utils/countryList'
import { teamImgs, teamsInfo } from '@/utils/enums'
import { ref } from 'vue'

const props = defineProps({
  value: { type: String, required: true },
  countryId: { type: String, required: true },
  team: { type: String, required: true },
  nick: { type: String, required: true },
  name: { type: String, required: true },
  role: { type: String, required: true },
})

const playerInfo = teamsInfo[props.team].players.find(
  (player) => player.summonerName === props.nick
)

const playerImage = ref(
  playerInfo?.image ??
    'http://static.lolesports.com/players/1671133852195_placeholder.png'
)
</script>

<template>
  <div class="tw-w-[16rem] tw-h-[20rem]">
    <div
      class="tw-w-full tw-h-full tw-border-4 tw-border-solid tw-border-green-400 tw-rounded-x tw-bg-contain"
      :style="{
        backgroundImage: `url(${teamImgs[props.team].background})`,
      }"
    >
      <div class="tw-w-full tw-h-full tw-rounded-xl tw-relative">
        <div
          class="tw-w-full tw-h-[18rem] tw-bg-no-repeat tw-bg-cover tw-bg-bottom tw-rounded-xl tw-absolute tw-bottom-0"
          :style="{
            backgroundImage: `url(${playerImage})`,
          }"
        ></div>
        <div
          class="tw-relative tw-w-full tw-h-full tw-bg-gradient-to-b tw-from-transparent tw-via-transparent tw-to-gray-800 tw-text-white tw-text-xl tw-font-semibold tw-tracking-wide tw-uppercase tw-rounded-lg"
          style="text-shadow: 0rem 0 0.1rem #000"
        >
          <div
            class="tw-card-value tw-absolute tw-top-4 tw-left-4 tw-flex tw-flex-col tw-justify-center"
          >
            <span class="tw-text-5xl">{{ props.value }}</span>
            <span class="tw-text-4xl">{{
              getCountryById(props.countryId || '1')?.flag
            }}</span>
            <span>
              <img :src="teamImgs[props.team].icon" class="tw-w-8 tw-h-8" />
            </span>
          </div>
          <div
            class="tw-w-full tw-absolute tw-top-3/4 tw-left-1/2 tw--translate-x-1/2 tw-mb-4 tw--translate-y-4"
          >
            <div class="tw-flex tw-flex-col tw-justify-center tw-text-center">
              <span class="tw-text-3xl">{{ props.nick }}</span>
              <span class="tw-text-xs tw-text-gray-400">{{ props.name }}</span>
              <span class="tw-self-center">
                <role-icon :name="props.role" class="tw-w-8 tw-h-8" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
