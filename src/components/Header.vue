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
        <div class="nav-item"><router-link to="/" class="nav-link" @click="closeAll">Inicio</router-link></div>
        
        <!-- Registro y Control -->
        <div class="nav-item" @click.stop="toggle('registro')">
          <span class="nav-link" :class="{ active: openMenu === 'registro' }">Registro y Control ▾</span>
          <ul class="dropdown" :class="{ open: openMenu === 'registro' }">
            <li class="dropdown-header">Admisión</li>
            <li class="dropdown-header">Estudio Generales y Profesionales</li>
            <li class="dropdown-header sol">Solicitudes:</li>
            <li><a href="/AUTORIZA_FE-UNA.pdf" target="_blank" @click.stop="closeAll">Autorización Funcionarios (FEUNA)</a></li>
            <li><a href="/REQUISITOS_SOLICITUD_CERTIFICADOS_COMPETENCIA.pdf" target="_blank" @click.stop="closeAll">Requisitos Solicitud De Certificado</a></li>
            <li><a href="/REQUISITOS_SOLICITUD_CERTIFICADOS_COMPETENCIA.pdf" target="_blank" @click.stop="closeAll">Certificado de Competencia</a></li>
            <li><a href="/SOLICITUD_DE_DOC.pdf" target="_blank" @click.stop="closeAll">Planilla Solicitud Documentos (PREGRADO)</a></li>
            <li><a href="/Revalida.pdf" target="_blank" @click.stop="closeAll">Reválida de Título</a></li>
          </ul>
        </div>

        <!-- Información -->
        <div class="nav-item" @click.stop="toggle('info')">
          <span class="nav-link" :class="{ active: openMenu === 'info' }">Información ▾</span>
          <ul class="dropdown" :class="{ open: openMenu === 'info' }">
            <li><router-link to="/lapso" @click="closeAll">Curso Introductorio</router-link></li>
            <li><a href="/instru_est_20261_final.pdf" target="_blank" @click.stop="closeAll">Inscripción Regular</a></li>
            <li><a href="/Modi_est.pdf" target="_blank" @click.stop="closeAll">Proceso de Modificaciones</a></li>
            <li><a href="/INSTRUC_ADICION_RETIRO.pdf" target="_blank" @click.stop="closeAll">Proceso Retiro y Adición</a></li>
            <li><a href="/instru_sufi_20261.pdf" target="_blank" @click.stop="closeAll">Inscripción Prueba Suficiencia Inglés</a></li>
            <li><a href="/CRONOGRAMA_INTEGRADO_2026.pdf" target="_blank" @click.stop="closeAll">Cronograma Integrado 2026</a></li>
            <li><a href="/Directorio_Centros_Locales.pdf" target="_blank" @click.stop="closeAll">Directorio de los Centros Locales</a></li>
            <li><a href="/BANCOS_AUTORIZADOS_UNA.pdf" target="_blank" @click.stop="closeAll">Bancos Autorizados</a></li>
            <li><router-link to="/orientadores" @click="closeAll">Directorio Orientadores</router-link></li>
            <li><router-link to="/correo" @click="closeAll">Carga Académica y Correos</router-link></li>
          </ul>
        </div>

        <!-- Aranceles -->
        <div class="nav-item" @click.stop="toggle('aranceles')">
          <span class="nav-link" :class="{ active: openMenu === 'aranceles' }">Aranceles ▾</span>
          <ul class="dropdown" :class="{ open: openMenu === 'aranceles' }">
            <li><router-link to="/admin-pregrado" @click="closeAll">Aranceles Pregrado</router-link></li>
            <li><a href="/Aranceles_Equivalencias_Resol0510_290426.pdf" target="_blank" @click.stop="closeAll">Aranceles Equivalencia</a></li>
            <li><router-link to="/admin-postgrado" @click="closeAll">Aranceles Postgrado</router-link></li>
          </ul>
        </div>

        <!-- Grado y Postgrado -->
        <div class="nav-item" @click.stop="toggle('grado')">
          <span class="nav-link" :class="{ active: openMenu === 'grado' }">Grado y Postgrado ▾</span>
          <ul class="dropdown" :class="{ open: openMenu === 'grado' }">
            <li class="dropdown-header sol">Solicitudes:</li>
            <li><a href="/PlanillaConferimientodetitulo.pdf" target="_blank" @click.stop="closeAll">Conferimiento de Título</a></li>
            <li><a href="/SOLICITUD_GRADO.pdf" target="_blank" @click.stop="closeAll">Planilla Solicitud Documentos (Egresados)</a></li>
          </ul>
        </div>
      </nav>
      
      <button class="hamb-btn" @click.stop="menuOpen = true">☰</button>
    </div>

    <!-- Overlay invisible para cerrar menú desktop al hacer clic afuera -->
    <div v-if="openMenu" class="desktop-overlay" @click="closeAll"></div>

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
          <a href="/AUTORIZA_FE-UNA.pdf" target="_blank" @click.stop="menuOpen = false">Autorización Funcionarios</a>
          <a href="/REQUISITOS_SOLICITUD_CERTIFICADOS_COMPETENCIA.pdf" target="_blank" @click.stop="menuOpen = false">Requisitos Certificado</a>
          <a href="/REQUISITOS_SOLICITUD_CERTIFICADOS_COMPETENCIA.pdf" target="_blank" @click.stop="menuOpen = false">Certificado de Competencia</a>
          <a href="/SOLICITUD_DE_DOC.pdf" target="_blank" @click.stop="menuOpen = false">Planilla Documentos (PREGRADO)</a>
          <a href="/Revalida.pdf" target="_blank" @click.stop="menuOpen = false">Reválida de Título</a>
        </div>
      </div>

      <div class="m-item" @click="subOpenOferta = !subOpenOferta">
        INFORMACIÓN ▾
        <div class="m-sub" :style="{ display: subOpenOferta ? 'block' : 'none' }">
          <router-link to="/lapso" @click="menuOpen = false">Curso Introductorio</router-link>
          <a href="/instru_est_20261_final.pdf" target="_blank" @click.stop="menuOpen = false">Inscripción Regular</a>
          <a href="/Modi_est.pdf" target="_blank" @click.stop="menuOpen = false">Proceso de Modificaciones</a>
          <a href="/INSTRUC_ADICION_RETIRO.pdf" target="_blank" @click.stop="menuOpen = false">Proceso Retiro y Adición</a>
          <a href="/instru_sufi_20261.pdf" target="_blank" @click.stop="menuOpen = false">Inscripción Prueba Suficiencia Inglés</a>
          <a href="/CRONOGRAMA_INTEGRADO_2026.pdf" target="_blank" @click.stop="menuOpen = false">Cronograma Integrado 2026</a>
          <a href="/Directorio_Centros_Locales.pdf" target="_blank" @click.stop="menuOpen = false">Directorio de los Centros Locales</a>
          <a href="/BANCOS_AUTORIZADOS_UNA.pdf" target="_blank" @click.stop="menuOpen = false">Bancos Autorizados</a>
          <router-link to="/orientadores" @click="menuOpen = false">Directorio Orientadores</router-link>
          <router-link to="/correo" @click="menuOpen = false">Carga Académica y Correos</router-link>
        </div>
      </div>

      <div class="m-item" @click="subOpenAdmin = !subOpenAdmin">
        ARANCELES ▾
        <div class="m-sub" :style="{ display: subOpenAdmin ? 'block' : 'none' }">
          <router-link to="/admin-pregrado" @click="menuOpen = false">Aranceles Pregrado</router-link>
          <a href="/Aranceles_Equivalencias_Resol0510_290426.pdf" target="_blank" @click.stop="menuOpen = false">Aranceles Equivalencia</a>
          <router-link to="/admin-postgrado" @click="menuOpen = false">Aranceles Postgrado</router-link>
        </div>
      </div>

      <div class="m-item" @click="subOpenEval = !subOpenEval">
        GRADO Y POSTGRADO ▾
        <div class="m-sub" :style="{ display: subOpenEval ? 'block' : 'none' }">
          <div style="font-weight: bold; margin-top: 10px; margin-bottom: 5px;">Solicitudes:</div>
          <a href="/PlanillaConferimientodetitulo.pdf" target="_blank" @click.stop="menuOpen = false">Conferimiento de Título</a>
          <a href="/SOLICITUD_GRADO.pdf" target="_blank" @click.stop="menuOpen = false">Planilla Documentos (Egresados)</a>
        </div>
      </div>
      
    </aside>
  </header>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

const menuOpen = ref(false);
const currentDate = ref('');
const openMenu = ref(null);

const subOpenUNA = ref(false);
const subOpenOferta = ref(false);
const subOpenAdmin = ref(false);
const subOpenEval = ref(false);

function toggle(name) {
  openMenu.value = openMenu.value === name ? null : name;
}

function closeAll() {
  openMenu.value = null;
}

function handleDocClick() {
  closeAll();
}

onMounted(() => {
  currentDate.value = new Date().toLocaleDateString('es-ES', { 
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' 
  });
  document.addEventListener('click', handleDocClick);
});

onBeforeUnmount(() => {
  document.removeEventListener('click', handleDocClick);
});
</script>

<style scoped>
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
  cursor: pointer; user-select: none;
  transition: color 0.2s, background 0.2s;
}
.nav-link:hover, .nav-link.active { color: #003399; background: #f0f7ff; }

/* ── Dropdown: mostrado con clase .open en vez de :hover ── */
.dropdown { 
  position: absolute; top: 100%; left: 0; background: white; 
  min-width: 260px;
  list-style: none; 
  box-shadow: 0 8px 24px rgba(0,0,0,0.15);
  border-top: 3px solid #003399;
  border-radius: 0 0 8px 8px;
  display: none;
  z-index: 1100;
  animation: fadeDown 0.15s ease;
}
.dropdown.open { display: block; }

@keyframes fadeDown {
  from { opacity: 0; transform: translateY(-6px); }
  to   { opacity: 1; transform: translateY(0); }
}

.dropdown li a { 
  padding: 12px 20px; display: block; text-decoration: none; 
  color: #555; font-size: 0.78rem; border-bottom: 1px solid #eee; 
  transition: background 0.15s, color 0.15s;
}
.dropdown li a:hover { background: #003399; color: white; }

.dropdown-header {
  padding: 8px 20px;
  font-size: 0.72rem;
  font-weight: 600;
  color: #94a3b8;
  background: #f8fafc;
  border-bottom: 1px solid #eee;
  cursor: default;
}
.dropdown-header.sol {
  color: #003399;
  font-weight: 700;
  padding: 10px 20px 5px;
}

/* Overlay invisible para cerrar al hacer clic afuera */
.desktop-overlay {
  position: fixed;
  top: 0; left: 0;
  width: 100%; height: 100%;
  z-index: 1050;
  background: transparent;
}

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
.m-sub a:hover { color: #003399; }
@media (max-width: 1200px) {
  .nav-desktop { display: none; }
  .hamb-btn { display: block; }
}
</style>