<template>
  <header>
    <div class="top-bar">
      <div>📍 Centro Local San Cristóbal | viernes-sabado⏰ 8:00 AM - 4:00 PM</div>
      <div>{{ currentDate }}</div>
    </div>

    <div class="nav-container">
      <router-link to="/" class="logo-box">
        <img src="/src/assets/UNI.png" alt="UNA" class="logo-img">
        <div class="logo-txt">UNIVERSIDAD NACIONAL ABIERTA<br>CENTRO LOCAL TÁCHIRA</div>
      </router-link>
      
      <nav class="nav-desktop">
        <div class="nav-item"><router-link to="/" class="nav-link">Inicio</router-link></div>
        
        <div class="nav-item">
          <span class="nav-link">UNA ▾</span>
          <ul class="dropdown">
            <li><router-link to="/sede-sc">Sede san cristobal</router-link></li>
            <li><router-link to="/sede-col">Unidad de apoyo coloncito</router-link></li>
          </ul>
        </div>

        <div class="nav-item">
          <span class="nav-link">Oferta Académica ▾</span>
          <ul class="dropdown">
            <li><router-link to="/pregrado">Pregrado</router-link></li>
            <li><router-link to="/postgrado">Postgrado</router-link></li>
            <li><router-link to="/correo">Correo y carga de asesores academicos</router-link></li>
            <li><router-link to="/extension">Extension universitaria</router-link></li>
          </ul>
        </div>
        
        <div class="nav-item">
          <span class="nav-link">Curso introductorio ▾</span>
          <ul class="dropdown">
            <li><router-link to="/lapso">lapso de inscripcion</router-link></li>
            <li><router-link to="/requisitos">Requisitos</router-link></li>
            <li><router-link to="/orientadores">Orientadores</router-link></li>
            <li><router-link to="/recomendaciones">Recomendaciones</router-link></li>
          </ul>
        </div>

        <div class="nav-item">
          <span class="nav-link">ADMINISTRACION Y ARANCELES ▾</span>
          <ul class="dropdown">
            <li><router-link to="/admin-pregrado">Pregrado</router-link></li>
            <li><router-link to="/admin-postgrado">Postgrado</router-link></li>
            <li><router-link to="/arancel_ext">Extension universitaria</router-link></li>
          </ul>
        </div>

        <div class="nav-item">
          <span class="nav-link">Evaluacion ▾</span>
          <ul class="dropdown">
            <li><router-link to="/calendario">Calendario</router-link></li>
            <li><router-link to="/diseno">subprograma de diseño</router-link></li>
            <li><router-link to="/resultados">Resultados de evaluacion</router-link></li>
          </ul>
        </div>

        <div class="nav-item">
          <span class="nav-link">servicio al estudiante ▾</span>
          <ul class="dropdown">
            <li><router-link to="/alma-mater">Alma mater</router-link></li>
            <li><router-link to="/biblioteca">Biblioteca</router-link></li>
            <li><router-link to="/fames">Fames</router-link></li>
            <li><router-link to="/becas">Becas y ayudantias</router-link></li>
          </ul>
        </div>
        
        <div class="nav-item">
          <span class="nav-link">Registro y control de estudio ▾</span>
          <ul class="dropdown">
            <li><router-link to="/rc-pregrado">Pregrado</router-link></li>
            <li><router-link to="/rc-postgrado">Postgrado</router-link></li>
          </ul>
        </div>
      </nav>
      
      <button class="hamb-btn" @click="menuOpen = true">☰</button>
    </div>

    <div class="overlay" :class="{ 'active': menuOpen }" @click="menuOpen = false"></div>
    
    <aside class="mobile-aside" :class="{ 'active': menuOpen }">
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:20px; border-bottom: 2px solid #eee; padding-bottom:10px;">
        <b>MENÚ</b>
        <button @click="menuOpen = false" style="border:none; background:none; font-size:2rem; cursor:pointer;">✕</button>
      </div>
      
      <router-link to="/" class="m-item" @click="menuOpen = false">INICIO</router-link>

      <div class="m-item" @click="subOpenUNA = !subOpenUNA">
        UNA ▾
        <div class="m-sub" :style="{ display: subOpenUNA ? 'block' : 'none' }">
          <router-link to="/sede-sc" @click="menuOpen = false">Sede San Cristóbal</router-link>
          <router-link to="/sede-col" @click="menuOpen = false">Unidad de apoyo Coloncito</router-link>
        </div>
      </div>

      <div class="m-item" @click="subOpenOferta = !subOpenOferta">
        OFERTA ACADÉMICA ▾
        <div class="m-sub" :style="{ display: subOpenOferta ? 'block' : 'none' }">
          <router-link to="/pregrado" @click="menuOpen = false">Pregrado</router-link>
          <router-link to="/postgrado" @click="menuOpen = false">Postgrado</router-link>
          <router-link to="/correo" @click="menuOpen = false">Correo y carga de asesores academicos</router-link>
          <router-link to="/extension" @click="menuOpen = false">Extensión universitaria</router-link>
        </div>
      </div>

      <div class="m-item" @click="subOpenCurso = !subOpenCurso">
        CURSO INTRODUCTORIO ▾
        <div class="m-sub" :style="{ display: subOpenCurso ? 'block' : 'none' }">
          <router-link to="/lapso" @click="menuOpen = false">Lapso de inscripción</router-link>
          <router-link to="/requisitos" @click="menuOpen = false">Requisitos</router-link>
          <router-link to="/orientadores" @click="menuOpen = false">Orientadores</router-link>
          <router-link to="/recomendaciones" @click="menuOpen = false">Recomendaciones</router-link>
        </div>
      </div>

      <div class="m-item" @click="subOpenAdmin = !subOpenAdmin">
        ADMINISTRACIÓN ▾
        <div class="m-sub" :style="{ display: subOpenAdmin ? 'block' : 'none' }">
          <router-link to="/admin-pregrado" @click="menuOpen = false">Pregrado</router-link>
          <router-link to="/admin-postgrado" @click="menuOpen = false">Postgrado</router-link>
          <router-link to="/arancel_ext" @click="menuOpen = false">Extensión</router-link>
        </div>
      </div>

      <div class="m-item" @click="subOpenEval = !subOpenEval">
        EVALUACIÓN ▾
        <div class="m-sub" :style="{ display: subOpenEval ? 'block' : 'none' }">
          <router-link to="/calendario" @click="menuOpen = false">Calendario</router-link>
          <router-link to="/diseno" @click="menuOpen = false">Subprograma de diseño</router-link>
          <router-link to="/resultados" @click="menuOpen = false">Resultados</router-link>
        </div>
      </div>

      <div class="m-item" @click="subOpenServ = !subOpenServ">
        SERVICIO AL ESTUDIANTE ▾
        <div class="m-sub" :style="{ display: subOpenServ ? 'block' : 'none' }">
          <router-link to="/alma-mater" @click="menuOpen = false">Alma mater</router-link>
          <router-link to="/biblioteca" @click="menuOpen = false">Biblioteca</router-link>
          <router-link to="/fames" @click="menuOpen = false">Fames</router-link>
          <router-link to="/becas" @click="menuOpen = false">Becas y ayudantías</router-link>
        </div>
      </div>

      <div class="m-item" @click="subOpenReg = !subOpenReg">
        REGISTRO Y CONTROL ▾
        <div class="m-sub" :style="{ display: subOpenReg ? 'block' : 'none' }">
          <router-link to="/rc-pregrado" @click="menuOpen = false">Pregrado</router-link>
          <router-link to="/rc-postgrado" @click="menuOpen = false">Postgrado</router-link>
          <router-link to="/materiales" @click="menuOpen = false">Materiales</router-link>
        </div>
      </div>
      
    </aside>
  </header>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const menuOpen = ref(false);
const currentDate = ref('');

// Variables separadas para cada submenú móvil
const subOpenUNA = ref(false);
const subOpenOferta = ref(false);
const subOpenCurso = ref(false);
const subOpenAdmin = ref(false);
const subOpenEval = ref(false);
const subOpenServ = ref(false);
const subOpenReg = ref(false);

onMounted(() => {
  currentDate.value = new Date().toLocaleDateString('es-ES', { 
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' 
  });
});
</script>

<style scoped>
/* ... (Tus estilos CSS originales se mantienen igual) ... */
.top-bar {
  background: #333; color: white; font-size: 0.75rem;
  padding: 10px 5%; display: flex; justify-content: space-between; align-items: center;
}
header { 
  background: white; border-bottom: 4px solid #003399; 
  position: sticky; top: 0; z-index: 1000; box-shadow: 0 2px 5px rgba(0,0,0,0.1); 
}
.nav-container { 
  display: flex; justify-content: space-between; align-items: center; 
  max-width: 1500px; margin: 0 auto; padding: 0 20px; height: 90px; 
}
.logo-box { display: flex; align-items: center; gap: 12px; text-decoration: none; }
.logo-img { height: 50px; }
.logo-txt { color: #003399; font-family: 'Montserrat', sans-serif; font-size: 0.7rem; font-weight: 700; line-height: 1.2; }
.nav-desktop { display: flex; list-style: none; gap: 5px; }
.nav-item { position: relative; }
.nav-link { 
  padding: 35px 10px; text-decoration: none; color: #333; 
  font-size: 0.6rem; font-weight: 700; text-transform: uppercase; display: block;
  cursor: pointer;
}
.nav-link:hover { color: #003399; background: #f0f7ff; }
.dropdown { 
  position: absolute; top: 100%; left: 0; background: white; 
  min-width: 220px; display: none; list-style: none; 
  box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-top: 3px solid #003399; 
}
.nav-item:hover .dropdown { display: block; }
.dropdown a { 
  padding: 12px 20px; display: block; text-decoration: none; 
  color: #555; font-size: 0.75rem; border-bottom: 1px solid #eee; 
}
.dropdown a:hover { background: #003399; color: white; }
.hamb-btn { display: none; background: none; border: none; font-size: 2rem; color: #003399; cursor: pointer; }
.mobile-aside { 
  position: fixed; top: 0; right: -100%; width: 300px; height: 100vh; 
  background: white; z-index: 2001; transition: 0.4s ease; 
  box-shadow: -5px 0 15px rgba(0,0,0,0.2); overflow-y: auto; padding: 25px; 
}
.mobile-aside.active { right: 0; }
.overlay { 
  position: fixed; top: 0; left: 0; width: 100%; height: 100%; 
  background: rgba(0,0,0,0.5); z-index: 2000; display: none; 
}
.overlay.active { display: block; }
.m-item { border-bottom: 1px solid #eee; padding: 15px 0; font-weight: 700; color: #003399; font-size: 0.9rem; cursor:pointer; text-decoration:none; display:block;}
.m-sub { display: none; padding-left: 15px; margin-top: 10px; background-color: #f9f9f9;}
.m-sub a { display: block; padding: 8px 0; text-decoration: none; color: #666; font-size: 0.85rem; border-bottom: 1px solid #eee; }
@media (max-width: 1200px) {
  .nav-desktop { display: none; }
  .hamb-btn { display: block; }
}
</style>