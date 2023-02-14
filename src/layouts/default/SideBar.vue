<template>
  <v-navigation-drawer v-model="drawer.drawer" location="left">
    <v-list>
      <v-list-subheader>Standings</v-list-subheader>
      <v-list-item
        key="Standings"
        value="standings"
        active-color="primary"
        to="/standings/cblol"
      >
        <template v-slot:prepend>
          <v-avatar icon="mdi-podium"></v-avatar>
        </template>
        <v-list-item-title>CBLOL</v-list-item-title>
      </v-list-item>
      <v-list-group value="Teams">
        <template v-slot:activator="{ props }">
          <v-list-item v-bind="props" title="Teams"></v-list-item>
        </template>

        <v-list-item
          v-for="teamItem in teamsList"
          :key="teamItem.value"
          :value="teamItem.value"
          active-color="primary"
          :to="`/team/${teamItem.value}`"
          :style="{
            'padding-inline-start': '2rem !important',
          }"
        >
          <template v-slot:prepend>
            <v-avatar
              rounded="0"
              :image="teamItem.props.prependAvatar"
            ></v-avatar>
          </template>
          <v-list-item-title v-text="teamItem.title"></v-list-item-title>
        </v-list-item>
      </v-list-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script lang="ts" setup>
import { useDrawerStore } from '@/stores/drawer'
import { teamsInfo } from '@/utils/enums'
import { ref } from 'vue'

const drawer = useDrawerStore()

interface TeamItem {
  title: string
  value: string
  props: {
    prependAvatar: string
  }
}

const teamsList = ref([] as Array<TeamItem>)

Object.keys(teamsInfo).forEach((teamKey) => {
  teamsList.value.push({
    title: teamsInfo[teamKey].name,
    value: teamsInfo[teamKey].slug,
    props: {
      prependAvatar: teamsInfo[teamKey].image,
    },
  })
})

teamsList.value.sort((a, b) => {
  if (a.title < b.title) {
    return -1
  }
  if (a.title > b.title) {
    return 1
  }
  return 0
})
</script>
