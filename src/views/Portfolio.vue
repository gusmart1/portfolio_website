<script setup>
import portfolioData from '@/data/portfolio.json'
</script>

<template>
  <div class="all-items">
    <div class="item" v-for="thing in portfolioData" :key="thing.id">
      {{ thing }}
    </div>
  </div>
</template>

<style scoped>
div.all-items {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;

  div.item {
    border: 1px solid black;
    min-width: 400px;

  }
}

</style>
