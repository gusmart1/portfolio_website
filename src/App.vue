<script setup lang="ts">
import Navbar from "@/components/Navbar.vue";
</script>

<template>
  <section class="container">

    <header>
      <navbar/>
    </header>

    <section class="page-content">
      <router-view/>
    </section>

    <footer>
      footer
    </footer>
  </section>
</template>

<style scoped>
section.web-app-container {
  max-width: 100%;
  max-height: 100%;
  border: 1px solid black;
  margin: 0 auto;

  footer {
    p {
      text-align: center;
    }
  }
}
</style>
