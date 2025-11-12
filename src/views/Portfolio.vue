<script setup>
import portfolioData from '@/data/portfolio.json'
import PortfolioHero from '@/components/portfolio/PortfolioHero.vue'
</script>

<template>
  <div class="all-items">
    <div class="all-items">
      <portfolio-hero v-for="item in portfolioData" :key="item.id"
                      :thumbnail="item.thumbnail" :title="item.title"
      />
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
    max-width: 400px;

  img {
    width: 100%;
  }
  }
}

</style>
