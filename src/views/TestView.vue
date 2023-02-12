<script setup lang="ts">
import CartinhaItem from "../components/CartinhaItem.vue";
</script>

<template>
  <main class="p-16">
    <CartinhaItem
      value="80"
      countryId="1"
      team="loud"
      name="Gabriel Nemeth"
      nick="Makes"
      role="Top"
    />

    <div class="w-64 mt-16">
      <img src="../assets/cartinha_exemplo.jpeg" />
    </div>
  </main>
</template>
