<script setup>
const props = defineProps({
  image: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    default: '',
  },
})
</script>

<template>
  <div class="layout-card">

    <!-- Main Content -->
    <section class="item-section">
      <div
        class="picture"
        :style="`background-image: url(./src/assets/${image})`"
      >
      </div>

      <div class="info">
        <h1 class="title">{{ title }}</h1>
        <h2 class="desc-heading">DESCRIPTION</h2>
        <p class="desc-text">
          {{ description }}
        </p>
      </div>
    </section>
  </div>
</template>

<style scoped>
.layout-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "IBM Plex Sans", sans-serif;
  padding: 1rem;
  min-height: 100vh;
}

/* NAVBAR */
.nav {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  font-weight: 700;
  width: 100%;
  padding: 1rem 0;
  flex-wrap: wrap;
}

.nav a {
  text-decoration: none;
  color: #210000;
  transition: opacity 0.2s;
}

.nav a:hover {
  opacity: 0.7;
}

/* ITEM SECTION */
.item-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #000;
  background-color: #eed0d0;
  max-width: 400px;
  width: 100%;
  margin-top: 2rem;
}

/* PICTURE AREA */
.picture {
  width: 100%;
  height: 250px;
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #210000;
  font-size: 2rem;
  font-weight: 900;
  text-transform: uppercase;
}

/* INFO AREA */
.info {
  padding: 1.5rem;
  color: #210000;
  text-align: left;
}

.title {
  font-size: 1.8rem;
  font-weight: 900;
  text-transform: uppercase;
  margin-bottom: 0.5rem;
  line-height: 1.1;
}

.desc-heading {
  font-size: 1.1rem;
  font-weight: 700;
  text-transform: uppercase;
  margin-top: 1rem;
  margin-bottom: 0.5rem;
}

.desc-text {
  line-height: 1.6;
  font-size: 1rem;
}

/* RESPONSIVE */
@media (min-width: 768px) {
  .item-section {
    max-width: 500px;
  }

  .picture {
    height: 300px;
    font-size: 2.2rem;
  }

  .desc-text {
    font-size: 1.05rem;
  }
}

@media (min-width: 1024px) {
  .layout-card {
    padding: 2rem 0;
  }

  .nav {
    gap: 3rem;
  }

  .item-section {
    max-width: 600px;
  }

  .picture {
    height: 350px;
  }

  .desc-text {
    font-size: 1.1rem;
  }
}
</style>
