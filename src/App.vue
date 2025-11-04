<script setup lang="ts">
</script>

<template>
  <section class="web-app-container">

    <header>

    </header>

    <section class="page-content">
      <router-view/>
    </section>

    <footer>
    </footer>
  </section>
</template>

<style scoped>
section.web-app-container {
  max-width: 100%;
  border: 1px solid black;
  margin: 0 auto;

  footer {
    p {
      text-align: center;
    }
  }
}
</style>
