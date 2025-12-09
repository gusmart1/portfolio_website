<script setup>
const props = defineProps({
  image: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, default: '' },
  medium: { type: String, required: true },
  created: { type: Number, required: true },
  course: { type: String, required: true },
})
</script>

<template>
  <div class="layout-card">
    <section class="picture">
      <img :src="`./src/assets/${image}`" />
    </section>
    <section class="info">
      <h1 class="title">{{ title }}</h1>
      <h2 class="medium">{{ medium }}</h2>
      <h2 class="course">{{ course }}</h2>
      <h2 class="created">{{ created }}</h2>
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

.picture img {
  width: 100%;
  height: auto;
  display: block;
}

/* TEXT BOX */
.info {
  padding: 1.5rem;
  max-width: 100%;
  margin: 0;
  text-align: left;
  box-sizing: border-box;
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
  margin: 0.75rem 0;
}

.created {
  font-size: 1rem;
  font-weight: 600;
  margin: 0.25rem 0 0.75rem 0;
  text-transform: uppercase;
}

.course {
  font-size: 1rem;
  font-weight: 600;
  margin: 0.25rem 0 0.75rem 0;
  text-transform: uppercase;
}

.description {
  font-size: 1rem;
  line-height: 1.5;
}

/*  DESKTOP LAYOUT  */
@media (min-width: 900px) {
  /* Side-by-side layout */
  .layout-card {
    flex-direction: row;
    align-items: stretch;
  }

  /* Flip every other  */
  .layout-card:nth-child(even) {
    flex-direction: row-reverse;
  }

  /* Image column */
  .picture {
    flex: 1;
  }

  .picture img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  /* Text */
  .info {
    flex: 1;
    max-width: 1000px;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: left;
  }
}
</style>
