<template>
  <div class="page-container">
    <h1 class="title">Oferta de Postgrado</h1>
    <p class="subtitle">Programas de maestría y especialización bajo la modalidad a distancia.</p>

    <div class="cards-grid">
      <div class="card">
        <h2>Maestrías en Educación</h2>
        <ul>
          <li>Mención Planificación de la Educación</li>
          <li>Mención Administración Educativa</li>
          <li>Educación Abierta y a Distancia</li>
        </ul>
      </div>

      <div class="card">
        <h2>Administración</h2>
        <ul>
          <li>Maestría en Administración de Negocios (MBA)</li>
        </ul>
      </div>

      <div class="card">
        <h2>Especializaciones</h2>
        <ul>
          <li>Telemática e Informática en Educación a Distancia</li>
          <li>Derechos Humanos</li>
        </ul>
      </div>
    </div>

    <div class="inscription-section">
      <p>Para más información sobre inscripciones:</p>
      <a href="http://www.unasec.com/" target="_blank" class="cta-button">
        Ir a página de inscripción
      </a>
    </div>
  </div>
</template>

<style scoped>
.page-container {
  padding: 40px;
  max-width: 1200px;
  margin: 0 auto;
  font-family: Arial, sans-serif;
}

.title {
  text-align: center;
  color: #003366; /* Azul oscuro */
}

.subtitle {
  text-align: center;
  margin-bottom: 40px;
  color: #555;
}

.cards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
}

.card {
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 8px;
  border-left: 5px solid #0056b3; /* Detalles en azul */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.card h2 {
  color: #0056b3;
  margin-top: 0;
  font-size: 1.5em;
}

.card ul {
  padding-left: 20px;
}

.card li {
  margin-bottom: 10px;
  color: #333;
}

.inscription-section {
  text-align: center;
  margin-top: 50px;
  padding: 20px;
  background-color: #eef2f5;
  border-radius: 8px;
}

.inscription-section p {
  font-size: 1.1em;
  margin-bottom: 15px;
}

.cta-button {
  display: inline-block;
  padding: 15px 30px;
  background-color: #0056b3;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  font-weight: bold;
  font-size: 1.2em;
  transition: background-color 0.3s;
}

.cta-button:hover {
  background-color: #003366;
}
</style>