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
</script>
