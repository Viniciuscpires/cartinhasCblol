<script setup lang="ts">
import { standings } from '@/utils/enums'
</script>

<template>
  <div class="tw-p-4">
    <div class="tw-text-5xl tw-font-bold tw-pb-4 tw-flex align-center">
      <v-avatar
        image="https://am-a.akamaihd.net/image?resize=120:&f=http%3A%2F%2Fstatic.lolesports.com%2Fleagues%2Fcblol-logo-symbol-offwhite.png"
        size="60"
      >
      </v-avatar>
      <span class="tw-h-full">CBLOL - Split 1 2023 - Etapa Regular</span>
    </div>
    <v-list lines="two">
      <v-list-item
        v-for="teamItem in standings"
        :key="teamItem.teams[0].slug"
        :value="teamItem.teams[0].slug"
        :to="`/team/${teamItem.teams[0].slug}`"
      >
        <template v-slot:prepend>
          <span class="tw-w-24 tw-text-4xl tw-font-bold tw-text-center">
            {{ teamItem.ordinal }}
          </span>
          <v-avatar rounded="0" :image="teamItem.teams[0].image"></v-avatar>
        </template>
        <v-list-item-title v-text="teamItem.teams[0].name"></v-list-item-title>
        <v-list-item-subtitle
          v-text="
            `${teamItem.teams[0].record.wins}V - ${teamItem.teams[0].record.losses}D`
          "
        ></v-list-item-subtitle>
      </v-list-item>
    </v-list>
  </div>
</template>
