<template>
  <footer class="ucat-footer">
    <div class="f-grid">
      <div class="f-col">
        <h4>CONTACTO</h4>
        <p class="f-info">✉️ <a href="mailto:coordinacioncltachira@gmail.com">coordinacioncltachira@gmail.com</a></p>
        <p class="f-info">✉️ <a href="mailto:sacademicacltachira@gmail.com">sacademicacltachira@gmail.com</a></p>
        
        <h4 class="sub-title">SÍGUENOS</h4>
        <ul class="social-list">
          <li><a href="https://www.instagram.com/unatachira/" target="_blank">📸 @unatachira</a></li>
          <li><a href="https://www.instagram.com/direccionderelaciones.una/" target="_blank">📸 @relaciones.una</a></li>
        </ul>
      </div>

      <div class="f-col map-col">
        <h4>UBICACIÓN</h4>
        <div class="map-box">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3951.3414841975!2d-72.2289669!3d7.7561846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e666c640fee2b31%3A0x65828f96b8cd8c47!2sUniversidad%20Nacional%20Abierta!5e0!3m2!1ses-419!2sve!4v1708700000000!5m2!1ses-419!2sve" 
            width="100%" 
            height="160" 
            style="border:0; border-radius: 10px;" 
            allowfullscreen="" 
            loading="lazy">
          </iframe>
        </div>
      </div>

      <div class="f-col">
        <h4>COLABORADORES</h4>
        <div class="ads-grid">
          <a href="https://www.instagram.com/norteconect/" target="_blank" class="ad-card">
            <img src="/norteconnect.jpg" alt="NorteConect">
          </a>
          <a href="https://www.instagram.com/vidrioshsca/?hl=es" target="_blank" class="ad-card">
            <img src="/vidreos.jpg" alt="Vidrios HS">
          </a>
        </div>
      </div>
    </div>
    
    <div class="f-bottom">
      © 2026 UNA Táchira 
    </div>
  </footer>
</template>

<style scoped>
.ucat-footer { 
  background: var(--una-dark); 
  color: white; 
  padding: 50px 5% 20px; 
}

.f-grid { 
  display: grid; 
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); 
  gap: 40px; 
  max-width: 1400px; 
  margin: 0 auto; 
}

.f-col h4 { 
  border-bottom: 3px solid var(--una-blue); 
  display: inline-block; 
  margin-bottom: 15px; 
  font-family: 'Montserrat', sans-serif;
  font-size: 1rem;
  letter-spacing: 1px;
}

.sub-title { margin-top: 25px; }

.f-info, .social-list li { 
  font-size: 0.85rem; 
  color: #bbb; 
  margin-bottom: 8px;
}

.f-col a { color: #bbb; text-decoration: none; transition: 0.3s; }
.f-col a:hover { color: var(--una-blue); }

/* Estilos del Mapa */
.map-box { margin-top: 10px; border: 1px solid #333; border-radius: 9px; padding: 4px; }

/* --- CAMBIOS PARA PUBLICIDAD REDONDA --- */
.ads-grid { 
  display: flex; 
  flex-direction: row; 
  flex-wrap: wrap;
  gap: 20px; 
  margin-top: 10px; 
}

.ad-card { 
  background: white; 
  width: 85px;        /* Ancho igual al alto para círculo perfecto */
  height: 85px; 
  border-radius: 50%;  /* El truco de la redondez */
  display: flex; 
  justify-content: center; 
  align-items: center;
  transition: transform 0.3s ease;
  overflow: hidden;
  border: 2px solid transparent;
  padding: 10px;
}

.ad-card:hover { 
  transform: scale(1.1); 
  border-color: var(--una-blue); 
}

.ad-card img { 
  max-width: 90%; 
  max-height: 90%; 
  object-fit: contain; /* Para que el logo no se deforme dentro del círculo */
}
/* --------------------------------------- */

.f-bottom { 
  border-top: 1px solid #333; 
  margin-top: 40px; 
  padding-top: 20px; 
  text-align: center; 
  font-size: 0.75rem; 
  color: #666; 
}

@media (max-width: 768px) {
  .f-col { text-align: center; }
  .f-col h4 { display: block; width: fit-content; margin-left: auto; margin-right: auto; }
  .ads-grid { justify-content: center; }
}
</style>