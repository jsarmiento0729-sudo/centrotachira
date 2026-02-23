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
  { img: '/carrusel/img1.jpg' },
  { img: '/carrusel/img2.jpg' }
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
  width: 100%; /* Ocupa todo el ancho disponible */
  background-color: #f2f2f2; 
  overflow: hidden; 
}

.slider-wrap { 
  display: flex; 
  transition: transform 0.6s ease-in-out; 
}

.slide { 
  min-width: 100%; 
  display: flex; 
  justify-content: center; 
  align-items: center;
}

.slide-image {
  width: 100%; /* Fuerza a la imagen a ocupar todo el ancho */
  height: auto; /* Ajusta la altura proporcionalmente para NO CORTAR nada */
  max-height: 650px; /* Límite para que no se vea gigante en monitores grandes */
  object-fit: cover; /* Mantiene la calidad visual */
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
  .slide-image {
    max-height: 400px;
  }
}
</style>