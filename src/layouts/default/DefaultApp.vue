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

fetch('http://local.projetin.com:5173/cartinhasCblol/src/assets/info.json')
  .then((response) => response.json())
  .then((data) => console.log(data))
</script>
