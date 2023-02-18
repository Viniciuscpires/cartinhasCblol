<template>
  <v-app>
    <app-bar />
    <side-bar />
    <default-view />
  </v-app>
</template>

<script lang="ts" setup>
import AppBar from './AppBar.vue'
import SideBar from './SideBar.vue'
import DefaultView from './DefaultView.vue'

fetch('https://viniciuscpires.github.io/cartinhasCblol/info.json')
  .then((response) => response.json())
  .then((data) => console.log(data))
</script>
