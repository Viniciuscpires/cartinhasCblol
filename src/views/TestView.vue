<script setup lang="ts">
import CartinhaItem from '../components/CartinhaItem.vue'
</script>

<template>
  <main class="tw-p-16">
    <CartinhaItem
      value="80"
      countryId="1"
      team="loud"
      name="Gabriel Nemeth"
      nick="Makes"
      role="Top"
    />

    <div class="tw-w-64 tw-mt-16">
      <img src="/cartinha_exemplo.jpeg" />
    </div>
  </main>
</template>
