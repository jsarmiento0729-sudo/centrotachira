<template>
  <div class="orientadores-page">
    <div class="container">

      <header class="page-header">
        <div class="header-badge">Servicio de Orientación</div>
        <h1>Directorio de Orientadores</h1>
        <p>Conoce el equipo de orientación de la Universidad Nacional Abierta — Centro Local Táchira</p>
      </header>

      <!-- PDF Download Card -->
      <div class="pdf-hero-card">
        <div class="pdf-hero-left">
          <div class="pdf-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="48" height="48">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
              <polyline points="14 2 14 8 20 8"/>
              <line x1="16" y1="13" x2="8" y2="13"/>
              <line x1="16" y1="17" x2="8" y2="17"/>
              <polyline points="10 9 9 9 8 9"/>
            </svg>
          </div>
          <div class="pdf-hero-text">
            <span class="pill">Documento Oficial UNA</span>
            <h2>Directorio Completo de Orientadores</h2>
            <p>Accede al listado oficial de orientadores de la UNA con sus datos de contacto, áreas de atención y ubicación por centro local.</p>
            <div class="meta-tags">
              <span>📋 Directorio actualizado</span>
              <span>🏫 Todos los Centros Locales</span>
              <span>📞 Información de contacto</span>
            </div>
          </div>
        </div>
        <div class="pdf-hero-actions">
          <a href="/Orientadores_UNA.pdf" target="_blank" class="btn-primary">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="20" height="20">
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
              <circle cx="12" cy="12" r="3"/>
            </svg>
            Ver Directorio PDF
          </a>
          <a href="/Orientadores_UNA.pdf" download class="btn-secondary">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="20" height="20">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
              <polyline points="7 10 12 15 17 10"/>
              <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
            Descargar
          </a>
        </div>
      </div>

      <!-- Info Cards -->
      <div class="info-grid">
        <div class="info-card">
          <div class="info-icon">🎯</div>
          <h3>¿Qué es la Orientación?</h3>
          <p>El servicio de orientación de la UNA brinda apoyo académico, vocacional y personal a los estudiantes durante toda su trayectoria universitaria.</p>
        </div>
        <div class="info-card">
          <div class="info-icon">📬</div>
          <h3>Contacto Orientación Táchira</h3>
          <p>Para orientación específica del Centro Local Táchira, comunícate con nuestra orientadora del Curso Introductorio.</p>
          <a href="mailto:tachiraorientadora@gmail.com" class="contact-link">tachiraorientadora@gmail.com</a>
        </div>
        <div class="info-card">
          <div class="info-icon">⏰</div>
          <h3>Horario de Atención</h3>
          <p>El servicio de orientación atiende en el horario regular del Centro Local Táchira.</p>
          <p class="hours-text">Lunes a Viernes<br><strong>8:00 AM — 4:00 PM</strong></p>
        </div>
      </div>

    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Montserrat:wght@700;800&display=swap');

.orientadores-page {
  min-height: 100vh;
  background: linear-gradient(135deg, #f0f4ff 0%, #f8fafc 100%);
  padding: 50px 20px;
  font-family: 'Inter', sans-serif;
}

.container {
  max-width: 1000px;
  margin: 0 auto;
}

/* ── Header ─────────────────────────────── */
.page-header {
  text-align: center;
  margin-bottom: 40px;
}

.header-badge {
  display: inline-block;
  background: linear-gradient(135deg, #003399, #0055ff);
  color: white;
  padding: 6px 20px;
  border-radius: 50px;
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-bottom: 16px;
}

.page-header h1 {
  font-family: 'Montserrat', sans-serif;
  font-size: 2.2rem;
  color: #0d1b3e;
  margin-bottom: 10px;
}

.page-header p {
  color: #64748b;
  font-size: 1rem;
}

/* ── PDF Hero Card ───────────────────────── */
.pdf-hero-card {
  background: white;
  border-radius: 20px;
  padding: 36px;
  margin-bottom: 36px;
  box-shadow: 0 8px 40px rgba(0, 51, 153, 0.12);
  border-left: 6px solid #003399;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 30px;
  flex-wrap: wrap;
}

.pdf-hero-left {
  display: flex;
  align-items: flex-start;
  gap: 24px;
  flex: 1;
}

.pdf-icon {
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, #dbeafe, #eff6ff);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #1d4ed8;
  flex-shrink: 0;
}

.pdf-hero-text h2 {
  font-family: 'Montserrat', sans-serif;
  font-size: 1.3rem;
  color: #0d1b3e;
  margin-bottom: 8px;
}

.pdf-hero-text p {
  color: #64748b;
  font-size: 0.9rem;
  line-height: 1.6;
  margin-bottom: 14px;
}

.pill {
  display: inline-block;
  background: #e7f0ff;
  color: #003399;
  font-size: 0.72rem;
  font-weight: 700;
  padding: 4px 12px;
  border-radius: 50px;
  letter-spacing: 1px;
  text-transform: uppercase;
  margin-bottom: 10px;
}

.meta-tags {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

.meta-tags span {
  background: #f1f5f9;
  color: #475569;
  font-size: 0.72rem;
  font-weight: 600;
  padding: 4px 10px;
  border-radius: 6px;
}

.pdf-hero-actions {
  display: flex;
  flex-direction: column;
  gap: 12px;
  min-width: 200px;
}

.btn-primary {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  background: linear-gradient(135deg, #003399, #0044cc);
  color: white;
  padding: 14px 24px;
  border-radius: 12px;
  font-weight: 700;
  font-size: 0.88rem;
  text-decoration: none;
  transition: all 0.25s ease;
}

.btn-primary:hover {
  background: linear-gradient(135deg, #002580, #003399);
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(0, 51, 153, 0.3);
}

.btn-secondary {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  background: #f1f5f9;
  color: #334155;
  padding: 14px 24px;
  border-radius: 12px;
  font-weight: 600;
  font-size: 0.88rem;
  text-decoration: none;
  transition: all 0.25s ease;
}

.btn-secondary:hover {
  background: #e2e8f0;
  transform: translateY(-2px);
}

/* ── Info Grid ───────────────────────────── */
.info-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
}

.info-card {
  background: white;
  border-radius: 16px;
  padding: 28px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.06);
  transition: transform 0.25s ease;
}

.info-card:hover { transform: translateY(-3px); }

.info-icon {
  font-size: 2rem;
  margin-bottom: 14px;
}

.info-card h3 {
  font-family: 'Montserrat', sans-serif;
  font-size: 1rem;
  color: #0d1b3e;
  margin-bottom: 10px;
}

.info-card p {
  color: #64748b;
  font-size: 0.87rem;
  line-height: 1.6;
}

.contact-link {
  display: inline-block;
  color: #003399;
  font-weight: 600;
  font-size: 0.85rem;
  margin-top: 8px;
  text-decoration: none;
  border-bottom: 2px solid #003399;
  padding-bottom: 1px;
  transition: opacity 0.2s;
}

.contact-link:hover { opacity: 0.7; }

.hours-text {
  color: #003399 !important;
  font-size: 0.9rem !important;
  margin-top: 8px !important;
}

/* ── Responsive ───────────────────────────── */
@media (max-width: 768px) {
  .pdf-hero-card { flex-direction: column; }
  .pdf-hero-left { flex-direction: column; }
  .pdf-hero-actions { width: 100%; }
  .page-header h1 { font-size: 1.6rem; }
}
</style>
