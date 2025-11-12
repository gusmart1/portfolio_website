<script setup>
import portfolioData from '@/data/portfolio.json'
</script>

<template>
  <div class="all-items">
    <div class="item" v-for="thing in portfolioData" :key="thing.id">
      <portfolio-hero :thumbnail="thing.thumbnail" title="thing.title" />
      <img :src="'./src/assets/' + thing.thumbnail" />
    </div>

    <portfolio-hero thumbnail="item1.jpg" title="Item title" />

  </div>
</template>

<style scoped>
div.all-items {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;

  div.item {
    border: 1px solid black;
    max-width: 400px;

  img {
    width: 100%;
  }
  }
}

</style>
