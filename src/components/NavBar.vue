<script setup lang="ts">
import MyButton from "../components/MyButton.vue";
</script>

<template>
  <nav>
    <my-button link-text="Home" route-name="Home" theme="home"/>
    <my-button link-text="Portfolio" route-name="Portfolio" theme="portfolio"/>
    <my-button link-text="About Me" route-name="AboutMe" theme="about"/>
    <my-button link-text="Contact" route-name="Contact" theme="contact"/>
  </nav>
</template>

<style scoped>
nav {
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  padding: 1rem;
}
</style>
