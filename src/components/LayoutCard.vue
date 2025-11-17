<script setup>
const props = defineProps({
  image: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, default: '' },
  medium: { type: String, required: true }
})
</script>

<template>
  <div class="layout-card">


    <section class="picture">
      <img :src="`./src/assets/${image}`" :alt="title" />
    </section>


    <section class="info">
      <h1 class="title">{{ title }}</h1>
      <h2 class="medium">{{ medium }}</h2>
      <p class="description">{{ description }}</p>
    </section>

  </div>
</template>

<style scoped>
/*  MOBILE LAYOUT  */
.layout-card {
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 4rem;
  border: none;
  padding: 0;
}

/* FULL-WIDTH IMAGE */
.picture img {
  width: 100%;
  height: auto;     /* shows full image */
  display: block;
}

/* TEXT AREA */
.info {
  padding: 2rem 1.5rem;
  max-width: 650px; /* readable width */
  margin: 0 auto;
}

.title {
  font-size: 1.5rem;
  font-weight: 900;
  text-transform: uppercase;
}

.medium {
  font-size: 1rem;
  font-weight: 700;
  text-transform: uppercase;
  margin: 0.75rem 0 0.5rem;
}

.description {
  font-size: 1rem;
  line-height: 1.5;
}

/*  DESKTOP LAYOUT */
@media (min-width: 900px) {

  /* Side-by-side layout */
  .layout-card {
    flex-direction: row;
    align-items: stretch;
  }

  /* every other card */
  .layout-card:nth-child(even) {
    flex-direction: row-reverse;
  }

  /* Image width */
  .picture {
    flex: 1.5;
  }

  .picture img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  /* Text column */
  .info {
    flex: 1;
    max-width: 500px;
    padding: 3rem 3rem;
    margin: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
}
</style>
