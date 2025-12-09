<script setup lang="ts"></script>

<template>
  <div class="layout">
    <!-- ABOUT SECTION -->
    <section class="about">
      <h2>CONTACT</h2>
      <h3>WAYS TO CONTACT ME</h3>
      <p>
        <span class="contact-item">
          <img src="/src/assets/mail_icon.svg" class="icon" />
          gusomartinson@gmail.com
        </span>
        <span class="contact-item">
          <img src="/src/assets/phone.svg" class="icon" />
          762-218-5549
        </span>
        <span class="contact-item">
          <img src="/src/assets/instagram.svg" class="icon" />
          gus_martinson
        </span>
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

.contact-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.icon {
  width: 20px;
  height: 20px;
}
</style>
