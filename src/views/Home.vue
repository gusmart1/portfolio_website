<template>
  <!DOCTYPE html>
  <head>
    <meta charset="utf-8">
    <title>Circle Text Animation | Splitting.js</title>
    <link rel="stylesheet" href="splitting.css">
    <link rel="stylesheet" href="style.css">
    <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;600&display=swap" rel="stylesheet">

  </head>
  <body>
  <div class="circle" data-splitting>
    GUS MARTINSON GRAPHIC DESIGNER
  </div>
  <div class="circle2" data-splitting>
    PORTFOLIO PORTFOLIO PORTFOLIO
  </div>
  <div class="circle3" data-splitting>
    ABOUT ME ABOUT ME ABOUT ME
  </div>
  <div class="circle4" data-splitting>
    CONTACT ME CONTACT ME
  </div>

  </body>

</template>

<script setup>
import { onMounted } from "vue";
import Splitting from "splitting";
import "splitting/dist/splitting.css";

onMounted(() => {
  Splitting();
});
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

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
.circle, .circle2, .circle3, .circle  {
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
  top: -100px;
  left: 0;
  color: black;
  font-size: 3em;
  padding: 5px 10px;
  transform-style: preserve-3d;
  transform: rotateY(calc(var(--char-index) * 12deg)) translateZ(200px);
}



/* THIRD CIRCLE */
.circle3 {
  transform-style: preserve-3d;
  animation: animate1 8s linear infinite;
}

.circle3 .word {
  position: absolute;
  transform-style: preserve-3d;
}

.circle3 .char {
  position: absolute;
  top: 0px;
  left: 0;
  color: black;
  font-size: 3em;
  padding: 5px 10px;
  transform-style: preserve-3d;
  transform: rotateY(calc(var(--char-index) * 12deg)) translateZ(200px);
}

/* SECOND CIRCLE */
.circle2 {
  transform-style: preserve-3d;
  animation: animate1 8s linear infinite;
}

.circle2 .word {
  position: absolute;
  transform-style: preserve-3d;
}

.circle2 .char {
  position: absolute;
  top: 100px;
  left: 0;
  color: black;
  font-size: 3em;
  padding: 5px 10px;
  transform-style: preserve-3d;
  transform: rotateY(calc(var(--char-index) * 12deg)) translateZ(200px);
}

/* SECOND CIRCLE */
.circle4 {
  transform-style: preserve-3d;
  animation: animate1 8s linear infinite;
}

.circle4 .word {
  position: absolute;
  transform-style: preserve-3d;
}

.circle4 .char {
  position: absolute;
  top: 200px;
  left: 0;
  color: black;
  font-size: 3em;
  padding: 5px 10px;
  transform-style: preserve-3d;
  transform: rotateY(calc(var(--char-index) * 12deg)) translateZ(200px);
}


/*hovering colors and pause*/
.circle:hover .char {
  color: #0093D3;
  transition: color 0.3s ease;
}

.circle2:hover .char {
  color: #CC016B;
  transition: color 0.3s ease;
}

.circle3:hover .char {
  color:  #FFF10D;
  transition: color 0.3s ease;
}

.circle4:hover .char {
  color:  black;
  transition: color 0.3s ease;
}


.circle:hover,
.circle2:hover,
.circle3:hover,
.circle4:hover{
  animation-play-state: paused;
}
</style>


