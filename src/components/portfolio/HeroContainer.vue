<script setup lang="ts">
import portfolioData from '@/data/portfolio.json'
import PortfolioHero from '@/components/portfolio/PortfolioHero.vue'

</script>

<template>
  <portfolio-hero v-for="item in portfolioData" :key="item.id"
                  :thumbnail="item.thumbnail" :title="item.title"
</template>

<style scoped>

</style>
