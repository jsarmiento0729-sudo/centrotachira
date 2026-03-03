<template>
  <div class="main-page-wrapper">
    <div class="aranceles-card">
      
      <header class="header-minimal">
        <span class="badge">Resolución CD-1820 </span>
        <h1>Aranceles y Requisitos</h1>
        <p class="subtitle">Programas de Educación Continua y Capacitación Docente [cite: 1]</p>
      </header>

      <div class="content-layout">
        
        <section class="visual-column">
          <div class="image-wrapper">
            <img src="/public/extension.png" alt="Programa de Capacitación Docente" class="flyer-img">
            <div class="floating-badge">
              Inicia: 06 de abril, 2026 
            </div>
          </div>
        </section>

        <section class="info-column">
          <div class="text-block">
            <h3>Programa de Capacitación Docente</h3>
            <p class="description">Capacitación dirigida a profesionales no docentes que se desempeñan o desean incursionar en la educación universitaria. </p>
          </div>

          <div class="requisitos-block">
            <h4>Requisitos Obligatorios:</h4>
            <ul class="styled-list">
              <li>Planilla de preinscripción</li>
              <li>Pago de Aranceles</li>
              <li>Cédula de identidad</li>
              <li>Fondo negro título de pregrado</li>
            </ul>
          </div>

          <div class="contact-footer">
            <p><strong>Dudas:</strong> extensionunatachira2021@gmail.com </p>
            <p><strong>WhatsApp:</strong> 0412-9852437 </p>
          </div>
        </section>
      </div>

      <section class="official-table-section">
        <div class="table-container">
          <img src="/public/Aranceles.png" alt="Tabla de Aranceles" class="table-img">
        </div>
        
        <div class="cta-area">
          <p class="bcv-note">Arancel pagado en Bolívares a la tasa del día del BCV. </p>
          <a href="/public/Aranceles.pdf" target="_blank" class="btn-primary">
            <span class="icon">📄</span> Descargar Aranceles Oficiales (PDF)
          </a>
        </div>
      </section>

    </div>
  </div>
</template>

<style scoped>
/* Contenedor Principal Centrado */
.main-page-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f0f2f5;
  padding: 40px 20px;
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
}

/* Tarjeta Principal */
.aranceles-card {
  max-width: 950px;
  width: 100%;
  background: #ffffff;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  padding: 40px;
}

/* Encabezado */
.header-minimal { text-align: center; margin-bottom: 40px; }
.badge {
  background: #e7f0ff;
  color: #0056b3;
  padding: 6px 14px;
  border-radius: 50px;
  font-size: 0.8rem;
  font-weight: 700;
  text-transform: uppercase;
}
h1 { font-size: 2.2rem; color: #1a1a1a; margin: 15px 0 5px; }
.subtitle { color: #666; font-size: 1.1rem; }

/* Layout de Contenido */
.content-layout {
  display: flex;
  gap: 40px;
  margin-bottom: 50px;
  align-items: flex-start;
}

/* Imagen y Flyer */
.visual-column { flex: 1; }
.image-wrapper { position: relative; border-radius: 15px; overflow: hidden; box-shadow: 0 5px 15px rgba(0,0,0,0.1); }
.flyer-img { width: 100%; display: block; transition: transform 0.3s ease; }
.flyer-img:hover { transform: scale(1.02); }
.floating-badge {
  position: absolute;
  bottom: 0;
  width: 100%;
  background: rgba(0, 86, 179, 0.9);
  color: white;
  text-align: center;
  padding: 10px;
  font-weight: 600;
}

/* Información */
.info-column { flex: 1.2; display: flex; flex-direction: column; gap: 25px; }
h3 { color: #0056b3; font-size: 1.5rem; margin: 0; }
.description { line-height: 1.6; color: #444; }
.styled-list { list-style: none; padding: 0; }
.styled-list li {
  padding: 8px 0 8px 25px;
  position: relative;
  border-bottom: 1px solid #eee;
}
.styled-list li::before { content: "✓"; position: absolute; left: 0; color: #28a745; font-weight: bold; }

/* Sección de Tabla y Botón */
.official-table-section {
  border-top: 2px solid #f0f2f5;
  padding-top: 40px;
  text-align: center;
}
.table-container { margin-bottom: 30px; border-radius: 10px; border: 1px solid #eee; overflow: hidden; }
.table-img { max-width: 100%; height: auto; }

/* Botón y CTA */
.cta-area { display: flex; flex-direction: column; align-items: center; gap: 15px; }
.bcv-note { font-style: italic; color: #777; font-size: 0.9rem; }
.btn-primary {
  display: flex;
  align-items: center;
  gap: 10px;
  background-color: #0056b3;
  color: white;
  padding: 16px 32px;
  text-decoration: none;
  border-radius: 12px;
  font-weight: 600;
  transition: all 0.3s ease;
}
.btn-primary:hover { background-color: #003d7a; transform: translateY(-2px); box-shadow: 0 5px 15px rgba(0,86,179,0.3); }

/* Responsividad */
@media (max-width: 850px) {
  .content-layout { flex-direction: column; }
  .aranceles-card { padding: 25px; }
  h1 { font-size: 1.8rem; }
}
</style>