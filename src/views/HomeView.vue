<script setup>
import CardSelector from "../components/CardSelector.vue";
</script>

<template>
  <div class="home">
    <h1>This is a home page.</h1>
    <CardSelector />
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .home {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
