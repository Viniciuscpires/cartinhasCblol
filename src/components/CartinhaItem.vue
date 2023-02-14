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
  <div class="w-[16rem] h-[20rem]">
    <div
      class="w-full h-full border-4 border-solid border-green-400 rounded-x bg-contain"
      :style="{
        backgroundImage: `url(${teamImgs[props.team].background})`,
      }"
    >
      <div class="w-full h-full rounded-xl relative">
        <div
          class="w-full h-[18rem] bg-no-repeat bg-cover bg-bottom rounded-xl absolute bottom-0"
          :style="{
            backgroundImage: `url(${playerImage})`,
          }"
        ></div>
        <div
          class="relative w-full h-full bg-gradient-to-b from-transparent via-transparent to-gray-800 text-white text-xl font-semibold tracking-wide uppercase rounded-lg"
          style="text-shadow: 0rem 0 0.1rem #000"
        >
          <div
            class="card-value absolute top-4 left-4 flex flex-col justify-center"
          >
            <span class="text-5xl">{{ props.value }}</span>
            <span class="text-4xl">{{
              getCountryById(props.countryId || '1')?.flag
            }}</span>
            <span>
              <img :src="teamImgs[props.team].icon" class="w-8 h-8" />
            </span>
          </div>
          <div
            class="w-full absolute top-3/4 left-1/2 -translate-x-1/2 mb-4 -translate-y-4"
          >
            <div class="flex flex-col justify-center text-center">
              <span class="text-3xl">{{ props.nick }}</span>
              <span class="text-xs text-gray-400">{{ props.name }}</span>
              <span class="self-center">
                <role-icon :name="props.role" class="w-8 h-8" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
