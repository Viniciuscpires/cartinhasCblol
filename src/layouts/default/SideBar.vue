<template>
  <v-navigation-drawer v-model="drawer.drawer" location="left">
    <v-list>
      <v-list-group title="Teams">
        <v-list-item
          v-for="teamItem in state.teamsList"
          :key="teamItem.value"
          :value="teamItem.value"
          active-color="primary"
        >
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

const state = ref({
  teamsList: [] as Array<TeamItem>,
})

Object.keys(teamsInfo).forEach((teamKey) => {
  state.value.teamsList.push({
    title: teamsInfo[teamKey].name,
    value: teamsInfo[teamKey].slug,
    props: {
      prependAvatar: teamsInfo[teamKey].image,
    },
  })
})
</script>
