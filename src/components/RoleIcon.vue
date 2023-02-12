<script setup lang="ts">
import { defineAsyncComponent } from "vue";
const props = defineProps({
  name: { type: String, required: true },
});

const IconComponent = defineAsyncComponent(
  () => import("../assets/" + props.name + "Role.vue")
);
</script>

<template>
  <IconComponent />
</template>
