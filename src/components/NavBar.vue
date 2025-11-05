<script setup lang="ts">
import MyButton from "../components/MyButton.vue";
</script>

<template>
  <nav>
    <my-button link-text="Home" route-name="Home" theme="primary"/>
    <my-button link-text="Portfolio" route-name="Portfolio"/>
    <my-button link-text="About Me" route-name="AboutMe"/>
    <my-button link-text="Contact" route-name="Contact"/>

  </nav>
</template>

<style scoped>
nav {
  display: flex;
  justify-content: center;
  align-items: center;
  /* code here would apply to the contents of nav (like the links) */
}
</style>
