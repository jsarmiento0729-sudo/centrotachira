import { createRouter, createWebHistory } from 'vue-router';
import Home from './components/home.vue'; // <-- Importa Home
import Pregrado from './components/pregrado.vue';
import postgrado from './components/postgrado.vue';

const routes = [
  { path: '/', component: Home }, // <-- Muestra Home en la raíz
  { path: '/pregrado', component: Pregrado },
  { path: '/postgrado', component: postgrado },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;


// ... resto del código