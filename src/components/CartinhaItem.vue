<script setup lang="ts">
import RoleIcon from './RoleIcon.vue'
import { getCountryById } from '@/utils/countryList'
import { teamImgs } from '@/utils/enums'
import { ref } from 'vue'
import playerPlaceholder from '@/assets/player_placeholder.png'

const props = defineProps({
  value: { type: String, required: true },
  countryId: { type: String, required: true },
  team: { type: String, required: true },
  nick: { type: String, required: true },
  name: { type: String, required: true },
  role: { type: String, required: true },
})

// const playerInfo = teamsInfo[props.team].players?.find(
//   (player) => player.summonerName === props.nick
// )

// const playerImage = ref(
//   playerInfo?.image.indexOf('placeholder') !== -1 ||
//     playerInfo?.image.indexOf('Luskka') !== -1 ||
//     playerInfo?.image.indexOf('Silhueta') !== -1
//     ? playerPlaceholder
//     : playerInfo?.image
// )

const playerImage = ref(playerPlaceholder)
</script>

<template>
  <div class="tw-w-[12rem] tw-h-[16rem]">
    <div
      class="tw-w-full tw-h-full tw-border-4 tw-border-solid tw-border-green-400 tw-rounded-x tw-bg-cover"
      :style="{
        backgroundImage: `url(${teamImgs[props.team].background})`,
      }"
    >
      <div class="tw-w-full tw-h-full tw-rounded-xl tw-relative">
        <div
          class="tw-w-full tw-h-[14rem] tw-bg-no-repeat tw-bg-cover tw-bg-bottom tw-rounded-xl tw-absolute tw-bottom-0"
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
            <span class="tw-text-4xl">{{ props.value }}</span>
            <span class="tw-text-3xl">{{
              getCountryById(props.countryId || '1')?.flag
            }}</span>
            <span>
              <img :src="teamImgs[props.team].icon" class="tw-w-8 tw-h-8" />
            </span>
          </div>
          <div
            class="tw-w-full tw-absolute tw-top-3/4 tw-left-1/2 tw--translate-x-1/2 tw-mb-4 tw--translate-y-4"
          >
            <div
              class="tw-flex tw-flex-col tw-justify-center tw-items-center tw-text-center"
            >
              <span class="tw-text-xl">{{ props.nick }}</span>
              <div class="tw-w-1/4"><hr class="tw-border-gray-400" /></div>
              <span class="tw-text-xs tw-text-gray-400">{{ props.name }}</span>
              <span class="tw-self-center">
                <role-icon :name="props.role" class="tw-w-6 tw-h-6" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
