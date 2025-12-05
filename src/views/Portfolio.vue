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
      :medium="item.medium"
      :created="item.created"
      :course="item.course"
      :showNav="true"
    />
  </div>
</template>
