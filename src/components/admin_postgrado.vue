<template>
  <div class="aranceles-page">
    <div class="container">

      <header class="page-header">
        <div class="header-badge">Resolución 0510 — 29/04/26</div>
        <h1>Aranceles de Postgrado</h1>
        <p>Tabla oficial de aranceles para programas de postgrado — Universidad Nacional Abierta</p>
      </header>

      <!-- Hero PDF Card -->
      <div class="pdf-hero-card">
        <div class="pdf-hero-left">
          <div class="pdf-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="48" height="48">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
              <polyline points="14 2 14 8 20 8"/>
              <line x1="16" y1="13" x2="8" y2="13"/>
              <line x1="16" y1="17" x2="8" y2="17"/>
            </svg>
          </div>
          <div class="pdf-hero-text">
            <span class="pill">Documento Oficial Vigente</span>
            <h2>Aranceles Postgrado — Resolución 0510</h2>
            <p>Contiene la tabla completa de aranceles para todos los trámites y servicios académicos de los programas de postgrado de la UNA, vigentes desde el 29 de abril de 2026.</p>
            <div class="meta-tags">
              <span>📅 Vigente desde Abril 2026</span>
              <span>🎓 Postgrado</span>
              <span>💰 Aranceles oficiales</span>
            </div>
          </div>
        </div>
        <div class="pdf-hero-actions">
          <a href="/Aranceles_Postgrado_Resol_0510_290426.pdf" target="_blank" class="btn-primary">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="20" height="20">
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
              <circle cx="12" cy="12" r="3"/>
            </svg>
            Ver Aranceles PDF
          </a>
          <a href="/Aranceles_Postgrado_Resol_0510_290426.pdf" download class="btn-secondary">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="20" height="20">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
              <polyline points="7 10 12 15 17 10"/>
              <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
            Descargar
          </a>
        </div>
      </div>

      <!-- Info Banner -->
      <div class="info-banner">
        <div class="info-banner-icon">💱</div>
        <div>
          <strong>Nota sobre el pago:</strong> Los aranceles se pagan en Bolívares a la tasa del día del BCV
          (Banco Central de Venezuela) al momento de realizar el trámite.
        </div>
      </div>

      <!-- Postgrado Programs -->
      <div class="programs-section">
        <h3>Programas de Postgrado Disponibles</h3>
        <div class="programs-grid">
          <div class="program-card">
            <div class="program-icon">📚</div>
            <h4>Maestrías en Educación</h4>
            <ul>
              <li>Mención Planificación de la Educación</li>
              <li>Mención Administración Educativa</li>
              <li>Educación Abierta y a Distancia</li>
            </ul>
          </div>
          <div class="program-card">
            <div class="program-icon">💼</div>
            <h4>Administración</h4>
            <ul>
              <li>Maestría en Administración de Negocios (MBA)</li>
            </ul>
          </div>
          <div class="program-card">
            <div class="program-icon">🔬</div>
            <h4>Especializaciones</h4>
            <ul>
              <li>Telemática e Informática en Educación a Distancia</li>
              <li>Derechos Humanos</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Quick Links -->
      <div class="quick-links-section">
        <h3>Documentos Relacionados</h3>
        <div class="quick-links-grid">
          <a href="/Aranceles_Pregrado_Resol_0510_290426.pdf" target="_blank" class="quick-link-card">
            <span class="ql-icon">📄</span>
            <div>
              <strong>Aranceles Pregrado</strong>
              <p>Resolución 0510 — Pregrado</p>
            </div>
          </a>
          <a href="/Aranceles_Equivalencias_Resol0510_290426.pdf" target="_blank" class="quick-link-card">
            <span class="ql-icon">📄</span>
            <div>
              <strong>Aranceles Equivalencias</strong>
              <p>Resolución 0510 — Equivalencias</p>
            </div>
          </a>
          <a href="/BANCOS_AUTORIZADOS_UNA.pdf" target="_blank" class="quick-link-card">
            <span class="ql-icon">🏦</span>
            <div>
              <strong>Bancos Autorizados</strong>
              <p>Instituciones autorizadas para pagos</p>
            </div>
          </a>
        </div>
      </div>

    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Montserrat:wght@700;800&display=swap');

.aranceles-page {
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
  background: linear-gradient(135deg, #0f766e, #0d9488);
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
  margin-bottom: 24px;
  box-shadow: 0 8px 40px rgba(15, 118, 110, 0.12);
  border-left: 6px solid #0d9488;
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
  background: linear-gradient(135deg, #ccfbf1, #f0fdfa);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #0d9488;
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
  background: #f0fdfa;
  color: #0f766e;
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
  background: linear-gradient(135deg, #0f766e, #0d9488);
  color: white;
  padding: 14px 24px;
  border-radius: 12px;
  font-weight: 700;
  font-size: 0.88rem;
  text-decoration: none;
  transition: all 0.25s ease;
}

.btn-primary:hover {
  background: linear-gradient(135deg, #0c5d58, #0f766e);
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(15, 118, 110, 0.3);
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

/* ── Info Banner ─────────────────────────── */
.info-banner {
  background: linear-gradient(135deg, #fffbeb, #fef9c3);
  border: 1px solid #fcd34d;
  border-radius: 14px;
  padding: 20px 24px;
  margin-bottom: 32px;
  display: flex;
  align-items: center;
  gap: 16px;
  font-size: 0.9rem;
  color: #78350f;
  line-height: 1.6;
}

.info-banner-icon { font-size: 1.8rem; }

/* ── Programs Section ────────────────────── */
.programs-section {
  margin-bottom: 32px;
}

.programs-section h3 {
  font-family: 'Montserrat', sans-serif;
  font-size: 1.1rem;
  color: #0d1b3e;
  margin-bottom: 16px;
}

.programs-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 16px;
}

.program-card {
  background: white;
  border-radius: 14px;
  padding: 22px;
  box-shadow: 0 2px 12px rgba(0,0,0,0.06);
  border-top: 3px solid #0d9488;
}

.program-icon { font-size: 1.6rem; margin-bottom: 10px; }

.program-card h4 {
  font-family: 'Montserrat', sans-serif;
  font-size: 0.95rem;
  color: #0f766e;
  margin-bottom: 10px;
}

.program-card ul {
  padding-left: 16px;
}

.program-card li {
  font-size: 0.85rem;
  color: #475569;
  margin-bottom: 6px;
  line-height: 1.4;
}

/* ── Quick Links ─────────────────────────── */
.quick-links-section h3 {
  font-family: 'Montserrat', sans-serif;
  font-size: 1.1rem;
  color: #0d1b3e;
  margin-bottom: 16px;
}

.quick-links-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 16px;
}

.quick-link-card {
  display: flex;
  align-items: center;
  gap: 14px;
  background: white;
  border-radius: 12px;
  padding: 18px 20px;
  text-decoration: none;
  box-shadow: 0 2px 12px rgba(0,0,0,0.06);
  transition: all 0.25s ease;
  border: 1px solid #e2e8f0;
}

.quick-link-card:hover {
  border-color: #0d9488;
  transform: translateY(-2px);
  box-shadow: 0 6px 24px rgba(15, 118, 110, 0.12);
}

.ql-icon { font-size: 1.8rem; }

.quick-link-card strong {
  display: block;
  color: #1e293b;
  font-size: 0.88rem;
  margin-bottom: 2px;
}

.quick-link-card p {
  color: #94a3b8;
  font-size: 0.78rem;
  margin: 0;
}

/* ── Responsive ───────────────────────────── */
@media (max-width: 768px) {
  .pdf-hero-card { flex-direction: column; }
  .pdf-hero-left { flex-direction: column; }
  .pdf-hero-actions { width: 100%; }
  .page-header h1 { font-size: 1.6rem; }
}
</style>
