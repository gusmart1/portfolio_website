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

  section.page-content {
    margin: 10px 0;
    background-color: lightgray;
    padding: 20px;
  }

  footer {
    p {
      text-align: center;
    }
  }
}
</style>
