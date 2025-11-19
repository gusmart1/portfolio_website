<script setup lang="ts"></script>

<template>
  <div class="layout">
    <!-- PICTURE SECTION -->
    <section class="picture">
      <h1>PICTURE</h1>
    </section>

    <!-- ABOUT SECTION -->
    <section class="about">
      <h2>ABOUT ME</h2>
      <h3>DESCRIPTION</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
    </section>
  </div>
</template>

<style scoped>
.layout {
  font-family: Arial, Helvetica, sans-serif;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
}

/* PICTURE SECTION */
.picture {
  background-color: #d9d9d9;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* ABOUT SECTION */
.about {
  padding: 2rem 1.5rem;
  background-color: white;
}

.about h2 {
  font-size: 2rem;
  font-weight: 900;
  line-height: 1;
  margin-bottom: 1rem;
}

.about h3 {
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 1rem;
}

.about p {
  font-size: 1rem;
  line-height: 1.6;
  color: #111;
  text-align: left;
}
</style>
