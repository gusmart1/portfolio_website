<script setup>
import LayoutCard from '@/components/LayoutCard.vue'
import portfolioData from '@/data/portfolio.json'
</script>

<template>
  <div>
    <LayoutCard
      v-for="item in portfolioData"
      :key="item.id"
      :image="item.thumbnail"
      :title="item.title"
      :description="item.description"
      :showNav="true"
    />
  </div>
</template>
