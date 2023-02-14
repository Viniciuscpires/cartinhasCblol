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

    <v-btn icon to="/teams">
      <v-icon> mdi-account-group </v-icon>
      <v-tooltip activator="parent" location="bottom"> Teams </v-tooltip>
    </v-btn>
  </v-app-bar>
</template>

<script lang="ts" setup>
import { useDrawerStore } from '@/stores/drawer'
import { RouterLink } from 'vue-router'

const drawer = useDrawerStore()
</script>
