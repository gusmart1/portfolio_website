<script setup lang="ts">
import photo from '@/assets/me_and_dog.jpg'
</script>

<template>
  <div class="layout">
    <!-- PICTURE SECTION -->
    <section class="picture">
      <img :src="photo" alt="Me and Dog" />
    </section>

    <!-- ABOUT SECTION -->
    <section class="about">
      <h2>ABOUT ME</h2>
      <p>
        Gus Martinson is a Graphic Design Junior at the University of Minnesota College of Design. <br>
        I am proficient in Adobe Cloud Software including InDesign, Illustrator, and Photoshop.
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
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.picture img {
  height: 100%;
  width: auto;
  object-fit: cover;
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


.about p {
  font-size: 1rem;
  line-height: 1.6;
  color: #111;
  text-align: left;
}
</style>
