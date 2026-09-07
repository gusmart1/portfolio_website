<script setup lang="ts">
import Navbar from "@/components/Navbar.vue";
import MINIMEGUS from "@/assets/MINIMEGUS.jpg"; // import the image
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
      <img :src="MINIMEGUS" alt="MINIMEGUS">
    </footer>
  </section>
</template>

<style scoped>
footer {
  text-align: center;
  padding: 1rem 0;
}

img {
  max-width: 150px; /* adjust size as needed */
  height: auto;
}
</style>
