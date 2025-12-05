<template>
  <!DOCTYPE html>
  <head>
    <meta charset="utf-8" />
    <title>Circle Text Animation | Splitting.js</title>
    <link rel="stylesheet" href="splitting.css" />
    <link rel="stylesheet" href="style.css" />
    <link
      href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;600&display=swap"
      rel="stylesheet"
    />
  </head>
  <body>
    <div class="circle" data-splitting>GUS MARTINSON GRAPHIC DESIGNER</div>

    <router-link to="/Portfolio" class="Portfolio" data-splitting>
      PORTFOLIO PORTFOLIO PORTFOLIO
    </router-link>

    <router-link to="/about-me" class="AboutMe" data-splitting>
      ABOUT ME ABOUT ME ABOUT ME
    </router-link>

    <router-link to="/contact" class="Contact" data-splitting> CONTACT CONTACT </router-link>
  </body>
</template>

<script setup>
import { onMounted } from 'vue'
import Splitting from 'splitting'
import 'splitting/dist/splitting.css'

onMounted(() => {
  Splitting()
})
</script>

<style>

body {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: white;
  font-family: 'IBM Plex Sans', sans-serif;
  gap: 100px; /* space between the two circles */
}

/* FIRST CIRCLE */
.circle,
.Portfolio,
.AboutMe,
.Contact {
  transform-style: preserve-3d;
  animation: animate1 8s linear infinite;
}

@keyframes animate1 {
  0% {
    transform: perspective(1000px) rotateY(360deg) rotateX(15deg);
  }
  100% {
    transform: perspective(1000px) rotateY(0deg) rotateX(15deg);
  }
}

.circle .word {
  position: absolute;
  transform-style: preserve-3d;
}

.circle .char {
  position: absolute;
  top: -75px;
  left: 0;
  color: black;
  font-size: 3em;
  padding: 5px 10px;
  transform-style: preserve-3d;
  transform: rotateY(calc(var(--char-index) * 12deg)) translateZ(200px);
}


/* SECOND CIRCLE */
.Portfolio {
  transform-style: preserve-3d;
  animation: animate1 8s linear infinite;
}

.Portfolio .word {
  position: absolute;
  transform-style: preserve-3d;
}

.Portfolio .char {
  position: absolute;
  top: -50px;
  left: 0;
  color: black;
  font-size: 3em;
  padding: 5px 10px;
  transform-style: preserve-3d;
  transform: rotateY(calc(var(--char-index) * 12deg)) translateZ(200px);
}

/* THIRD CIRCLE */
.AboutMe {
  transform-style: preserve-3d;
  animation: animate1 8s linear infinite;
}

.AboutMe .word {
  position: absolute;
  transform-style: preserve-3d;
}

.AboutMe .char {
  position: absolute;
  top: -25px;
  left: 0;
  color: black;
  font-size: 3em;
  padding: 5px 10px;
  transform-style: preserve-3d;
  transform: rotateY(calc(var(--char-index) * 12deg)) translateZ(200px);
}

/* FOURTH CIRCLE */
.circle4 {
  transform-style: preserve-3d;
  animation: animate1 8s linear infinite;
}

.Contact .word {
  position: absolute;
  transform-style: preserve-3d;
}

.Contact .char {
  position: absolute;
  top: 0px;
  left: 0;
  color: black;
  font-size: 3em;
  padding: 5px 10px;
  transform-style: preserve-3d;
  transform: rotateY(calc(var(--char-index) * 12deg)) translateZ(200px);
}

/*hovering colors and pause*/
.circle:hover .char {
  color: black;
  transition: color 0.3s ease;
}

.Portfolio:hover .char {
  color: #0093d3;
  transition: color 0.3s ease;
}

.AboutMe:hover .char {
  color: #cc016b;
  transition: color 0.3s ease;
}

.Contact:hover .char {
  color: #fff10d;
  transition: color 0.3s ease;
}

.circle:hover,
.Portfolio:hover,
.AboutMe:hover,
.Contact:hover {
  animation-play-state: paused;
}

</style>
