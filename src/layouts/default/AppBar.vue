<template>
  <v-app-bar flat>
    <v-app-bar-nav-icon
      variant="text"
      @click.stop="() => drawer.toggleDrawer()"
    ></v-app-bar-nav-icon>
    <v-app-bar-title>
      <router-link to="/">
        <v-icon icon="mdi-cards" />
        Cartinhas Cblol
      </router-link>
    </v-app-bar-title>

    <v-btn icon to="Teams">
      <v-icon> mdi-account-group </v-icon>
      <v-tooltip activator="parent" location="bottom"> Teams </v-tooltip>
    </v-btn>

    <v-btn icon>
      <v-icon> mdi-magnify </v-icon>
      <v-tooltip activator="parent" location="bottom"> Search </v-tooltip>
    </v-btn>

    <v-btn icon>
      <v-icon> mdi-dots-vertical </v-icon>
      <v-tooltip activator="parent" location="bottom"> More options </v-tooltip>
    </v-btn>
  </v-app-bar>
</template>

<script lang="ts" setup>
import { useDrawerStore } from '@/stores/drawer'
import { RouterLink } from 'vue-router'

const drawer = useDrawerStore()
</script>
