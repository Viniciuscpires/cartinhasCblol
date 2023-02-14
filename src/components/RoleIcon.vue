<script setup lang="ts">
import { defineAsyncComponent } from 'vue'
const props = defineProps({
  name: { type: String, required: true },
})

const IconComponent = defineAsyncComponent(
  () =>
    import(
      `../assets/${
        props.name.charAt(0).toUpperCase() + props.name.slice(1)
      }Role.vue`
    )
)
</script>

<template>
  <IconComponent />
</template>
