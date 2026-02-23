<template>
  <div class="correo-page">
    <div class="container">
      <header class="header">
        <h1>Carga Académica y Directorio 2026-1</h1>
        <p>Centro Local Táchira - Unidad de Apoyo Coloncito</p>
      </header>

      <div class="pdf-box">
        <div class="pdf-text">
          <h3>📄 Información Detallada</h3>
          <p>Acceda al listado completo de correos de asesores por asignatura y la distribución de carga académica para todas las carreras.</p>
        </div>
        <a href="/CARGA_ACADEMICA.pdf" target="_blank" class="btn-download">
          VER INFORMACIÓN DETALLADA
        </a>
      </div>

      <div class="main-grid">
        <section class="card">
          <h2>🏢 Unidades Administrativas</h2>
          <div class="admin-grid">
            <div class="admin-item">
              <strong>Coordinación / Unidad Académica:</strong>
              <p>Rose Mary Núñez <br> <span>sacademicacitachira@gmail.com</span></p>
            </div>
            <div class="admin-item">
              <strong>Evaluación y Logística:</strong>
              <p>Judith Sayago <br> <span>log.eva.cltachira@gmail.com</span></p>
            </div>
            <div class="admin-item">
              <strong>Investigaciones y Postgrado:</strong>
              <p>Blanca Zamora <br> <span>diptachira1800@gmail.com</span></p>
            </div>
            <div class="admin-item">
              <strong>Extensión Universitaria:</strong>
              <p>Wendy Villanueva <br> <span>extensionunatachira2021@gmail.com</span></p>
            </div>
            <div class="admin-item">
              <strong>Responsable UA Coloncito:</strong>
              <p>Yulimar Cabezas <br> <span>unasec.com@gmail.com</span></p>
            </div>
            <div class="admin-item">
              <strong>Orientación (Curso Intro):</strong>
              <p>Wendy Arévalo <br> <span>tachiraorientadora@gmail.com</span></p>
            </div>
          </div>
        </section>

        <section class="card">
          <h2>📊 Resumen de Oferta Académica</h2>
          <div class="table-container">
            <table>
              <thead>
                <tr>
                  <th>Carrera / TSU</th>
                  <th>Código</th>
                  <th>Límite UC</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>TSU Educación Integral</td>
                  <td>430</td>
                  <td>22 UC</td>
                </tr>
                <tr>
                  <td>Lic. Educación Integral</td>
                  <td>440</td>
                  <td>23 UC</td>
                </tr>
                <tr>
                  <td>Contaduría Pública</td>
                  <td>610</td>
                  <td>20 UC</td>
                </tr>
                <tr>
                  <td>Administración de Empresas</td>
                  <td>612</td>
                  <td>21 UC</td>
                </tr>
                <tr>
                  <td>TSU Contaduría</td>
                  <td>614</td>
                  <td>21 UC</td>
                </tr>
                <tr>
                  <td>Ingeniería de Sistemas</td>
                  <td>236</td>
                  <td>Consultar PDF</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="info-footer">
            <p><strong>Nota:</strong> El PDF contiene el desglose de materias desde el 1er hasta el 10mo semestre para cada carrera.</p>
          </div>
        </section>
      </div>

      <div class="footer-alert">
        <strong>⚠️ RECORDATORIO:</strong> Es obligatorio enviar copia de todo trabajo académico a: 
        <span class="highlight">sacademicacitachira@gmail.com</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.correo-page { background: #f1f5f9; padding: 2.5rem 1rem; min-height: 100vh; font-family: 'Segoe UI', system-ui, sans-serif; }
.container { max-width: 1100px; margin: 0 auto; }
.header { text-align: center; margin-bottom: 2rem; }
.header h1 { color: #003399; font-size: 2rem; margin-bottom: 0.5rem; }
.header p { color: #475569; font-weight: 500; }

.pdf-box { 
  background: white; border-radius: 12px; padding: 2rem;
  display: flex; justify-content: space-between; align-items: center;
  box-shadow: 0 4px 20px rgba(0,0,0,0.08); margin-bottom: 2rem;
  border-right: 8px solid #003399;
}
.pdf-text h3 { color: #334155; margin-bottom: 0.5rem; }
.pdf-text p { color: #64748b; font-size: 0.95rem; max-width: 600px; }

.btn-download { 
  background: #003399; color: white; padding: 1.2rem 2rem; 
  border-radius: 8px; text-decoration: none; font-weight: bold;
  transition: all 0.3s ease; text-align: center;
}
.btn-download:hover { background: #002570; transform: translateY(-2px); }

.main-grid { display: grid; grid-template-columns: 1.2fr 0.8fr; gap: 2rem; }
.card { background: white; padding: 2rem; border-radius: 15px; box-shadow: 0 2px 12px rgba(0,0,0,0.04); }
h2 { color: #003399; font-size: 1.3rem; margin-bottom: 1.5rem; display: flex; align-items: center; gap: 10px; }

.admin-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; }
.admin-item strong { display: block; color: #1e293b; font-size: 0.9rem; margin-bottom: 4px; }
.admin-item p { color: #64748b; font-size: 0.85rem; line-height: 1.4; }
.admin-item span { color: #003399; font-weight: 600; }

table { width: 100%; border-collapse: collapse; }
th { text-align: left; padding: 12px; background: #f8fafc; color: #64748b; font-size: 0.8rem; text-transform: uppercase; }
td { padding: 12px; border-bottom: 1px solid #f1f5f9; font-size: 0.9rem; }

.info-footer { margin-top: 1.5rem; padding: 10px; background: #fffbeb; border-radius: 8px; font-size: 0.85rem; color: #92400e; }

.footer-alert { 
  margin-top: 2rem; background: #003399; color: white; 
  padding: 1.5rem; border-radius: 12px; text-align: center; font-size: 1rem;
}
.highlight { text-decoration: underline; font-weight: bold; margin-left: 5px; }

@media (max-width: 900px) {
  .main-grid { grid-template-columns: 1fr; }
  .admin-grid { grid-template-columns: 1fr; }
  .pdf-box { flex-direction: column; text-align: center; gap: 1.5rem; border-right: none; border-bottom: 8px solid #003399; }
}
</style>