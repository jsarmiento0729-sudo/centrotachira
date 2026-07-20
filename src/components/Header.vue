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
          <span class="nav-link">Registro y Control ▾</span>
          <ul class="dropdown">
            <li class="dropdown-header">Admisión</li>
            <li class="dropdown-header">Estudio Generales y Profesionales</li>
            <li class="dropdown-header" style="color: #003399; font-weight: bold; padding: 10px 20px 5px;">Solicitudes:</li>
            <li><a href="#">Autorización Funcionarios (FEUNA)</a></li>
            <li><a href="#">Requisitos Solicitud De Certificado</a></li>
            <li><a href="#">Certificado de Competencia</a></li>
            <li><a href="#">Planilla Solicitud Documentos (PREGRADO)</a></li>
            <li><a href="#">Reválida de Título</a></li>
          </ul>
        </div>

        <div class="nav-item">
          <span class="nav-link">Información ▾</span>
          <ul class="dropdown">
            <li><router-link to="/lapso">Curso Introductorio</router-link></li>
            <li><a href="#">Inscripción Regular</a></li>
            <li><a href="#">Proceso de Modificaciones</a></li>
            <li><a href="#">Proceso Retiro y Adición</a></li>
            <li><a href="#">Inscripción Prueba Suficiencia Ingles</a></li>
            <li><a href="#">Directorio de los Centros Locales</a></li>
            <li><a href="#">Bancos Autorizados</a></li>
            <li><router-link to="/orientadores">Directorio Orientadores</router-link></li>
          </ul>
        </div>

        <div class="nav-item">
          <span class="nav-link">Aranceles ▾</span>
          <ul class="dropdown">
            <li><router-link to="/admin-pregrado">Aranceles Pregrado</router-link></li>
            <li><a href="#">Aranceles Equivalencia</a></li>
            <li><router-link to="/admin-postgrado">Aranceles Postgrado</router-link></li>
          </ul>
        </div>

        <div class="nav-item">
          <span class="nav-link">Grado y Postgrado ▾</span>
          <ul class="dropdown">
            <li class="dropdown-header" style="color: #003399; font-weight: bold; padding: 10px 20px 5px;">Solicitudes:</li>
            <li><a href="#">Conferimiento de Título</a></li>
            <li><a href="#">Planilla Solicitud Documentos (Egresados)</a></li>
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
        REGISTRO Y CONTROL ▾
        <div class="m-sub" :style="{ display: subOpenUNA ? 'block' : 'none' }">
          <a href="#" @click="menuOpen = false">Admisión</a>
          <a href="#" @click="menuOpen = false">Estudio Generales y Profesionales</a>
          <div style="font-weight: bold; margin-top: 10px; margin-bottom: 5px;">Solicitudes:</div>
          <a href="#" @click="menuOpen = false">Autorización Funcionarios</a>
          <a href="#" @click="menuOpen = false">Requisitos Certificado</a>
          <a href="#" @click="menuOpen = false">Certificado de Competencia</a>
          <a href="#" @click="menuOpen = false">Planilla Documentos (PREGRADO)</a>
          <a href="#" @click="menuOpen = false">Reválida de Título</a>
        </div>
      </div>

      <div class="m-item" @click="subOpenOferta = !subOpenOferta">
        INFORMACIÓN ▾
        <div class="m-sub" :style="{ display: subOpenOferta ? 'block' : 'none' }">
          <router-link to="/lapso" @click="menuOpen = false">Curso Introductorio</router-link>
          <a href="#" @click="menuOpen = false">Inscripción Regular</a>
          <a href="#" @click="menuOpen = false">Proceso de Modificaciones</a>
          <a href="#" @click="menuOpen = false">Proceso Retiro y Adición</a>
          <a href="#" @click="menuOpen = false">Inscripción Prueba Suficiencia Ingles</a>
          <a href="#" @click="menuOpen = false">Directorio de los Centros Locales</a>
          <a href="#" @click="menuOpen = false">Bancos Autorizados</a>
          <router-link to="/orientadores" @click="menuOpen = false">Directorio Orientadores</router-link>
        </div>
      </div>

      <div class="m-item" @click="subOpenAdmin = !subOpenAdmin">
        ARANCELES ▾
        <div class="m-sub" :style="{ display: subOpenAdmin ? 'block' : 'none' }">
          <router-link to="/admin-pregrado" @click="menuOpen = false">Aranceles Pregrado</router-link>
          <a href="#" @click="menuOpen = false">Aranceles Equivalencia</a>
          <router-link to="/admin-postgrado" @click="menuOpen = false">Aranceles Postgrado</router-link>
        </div>
      </div>

      <div class="m-item" @click="subOpenEval = !subOpenEval">
        GRADO Y POSTGRADO ▾
        <div class="m-sub" :style="{ display: subOpenEval ? 'block' : 'none' }">
          <div style="font-weight: bold; margin-top: 10px; margin-bottom: 5px;">Solicitudes:</div>
          <a href="#" @click="menuOpen = false">Conferimiento de Título</a>
          <a href="#" @click="menuOpen = false">Planilla Documentos (Egresados)</a>
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