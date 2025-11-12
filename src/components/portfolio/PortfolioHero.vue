<script setup lang="ts">
const props = defineProps ( {
  thumbnail: {
    type: String,
    required: true,
  },
  title: {
  type: String,
    required: true,
  }
})
</script>

<template>
<div class="hero"> :style="'background-image: url(./src/assets/${props.thumbnail})'">
     <div class="opaque-footer">{{props.title}}</div>
</div>
</template>

<style scoped>

.hero {
  border: 1px black;
  border-radius: 10px;

}

</style>
