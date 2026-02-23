import { createRouter, createWebHistory } from 'vue-router';
import Home from './components/home.vue'; // <-- Importa Home
import Pregrado from './components/pregrado.vue';
import postgrado from './components/postgrado.vue';
import correo from './components/correo.vue';


const routes = [
  { path: '/', component: Home }, // <-- Muestra Home en la raíz
  { path: '/pregrado', component: Pregrado },
  { path: '/postgrado', component: postgrado },
  { path: '/correo', component: correo },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;


// ... resto del código