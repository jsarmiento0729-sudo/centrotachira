import { createRouter, createWebHistory } from 'vue-router';
import Home from './components/home.vue';
import Pregrado from './components/pregrado.vue';
import Postgrado from './components/postgrado.vue';
import Correo from './components/correo.vue';
import ArancelExt from './components/arancel_ext.vue';
import Lapso from './components/lapso.vue';
import Orientadores from './components/orientadores.vue';
import AdminPregrado from './components/admin_pregrado.vue';
import AdminPostgrado from './components/admin_postgrado.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/pregrado', component: Pregrado },
  { path: '/postgrado', component: Postgrado },
  { path: '/correo', component: Correo },
  { path: '/arancel_ext', component: ArancelExt },
  { path: '/lapso', component: Lapso },
  { path: '/orientadores', component: Orientadores },
  { path: '/admin-pregrado', component: AdminPregrado },
  { path: '/admin-postgrado', component: AdminPostgrado },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;