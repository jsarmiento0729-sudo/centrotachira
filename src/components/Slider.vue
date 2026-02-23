<template>
  <section class="hero-slider">
    <button class="arrow-btn arrow-prev" @click="moveSlide(-1)">❮</button>
    <button class="arrow-btn arrow-next" @click="moveSlide(1)">❯</button>
    
    <div class="slider-wrap" :style="{ transform: `translateX(-${sIdx * 100}%)` }">
      <div 
        class="slide" 
        v-for="(slide, index) in slides" 
        :key="index"
      >
        <img :src="slide.img" class="slide-image" alt="Flyer UNA">
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const slides = ref([
  { img: '/carrusel/img1.png' },
  { img: '/carrusel/img2.png' }
]);

const sIdx = ref(0);
let intervalId;

function moveSlide(d) {
  sIdx.value = (sIdx.value + d + slides.value.length) % slides.value.length;
}

onMounted(() => {
  intervalId = setInterval(() => moveSlide(1), 8000);
});

onUnmounted(() => {
  clearInterval(intervalId);
});
</script>

<style scoped>
.hero-slider { 
  position: relative; 
  width: 100%; 
  overflow: hidden; 
  background-color: #f2f2f2;
}

.slider-wrap { 
  display: flex; 
  transition: transform 0.6s ease-in-out; 
}

.slide { 
  min-width: 100%; 
  height: 580px; /* Altura fija del slider */
  display: flex; 
  justify-content: center; 
  align-items: center;
}

.slide-image {
  width: 100%; 
  height: 100%; 
  /* COVER expande la imagen para llenar todo el recuadro de 580px.
     Si la imagen no es panorámica, recortará la parte superior e inferior. */
  object-fit: cover; 
  /* POSITION: CENTER asegura que el recorte sea parejo arriba y abajo */
  object-position: center; 
}

.arrow-btn { 
  position: absolute; 
  top: 50%; 
  transform: translateY(-50%); 
  background: rgba(0, 51, 153, 0.7); 
  color: white; 
  border: none; 
  width: 50px; 
  height: 50px; 
  border-radius: 50%; 
  cursor: pointer; 
  z-index: 10; 
}

.arrow-prev { left: 20px; } 
.arrow-next { right: 20px; }

@media (max-width: 768px) {
  .slide {
    height: 400px; /* Reducimos altura en móvil para que el cover no sea tan agresivo */
  }
}
</style>