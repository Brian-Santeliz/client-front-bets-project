import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import Registro from '@/views/Registro.vue'
import Noticias from '@/views/Noticias.vue'
import Noticia from '@/views/Noticia.vue'
import Login from '@/views/Login.vue'

Vue.use(VueRouter);
const pushPrototype = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return pushPrototype.call(this, location).catch((e) => e);
};

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: 'El mejor centro de apuestas | La Quiniela',
    },
  },
  {
    path: '/registro',
    name: 'Registro',
    component: Registro,
    meta: {
      title: 'Registrate & comienza a disfrutar | La Quiniela',
    },
  },
  {
    path: '/iniciar-sesion',
    name: 'Login',
    component: Login,
    meta: {
      title: 'Iniciar Sesión | La Quiniela',
    },
  },
  {
    path: '/noticias',
    name: 'Noticias',
    component: Noticias,
    meta: {
      title: 'Noticias Recientes | La Quiniela',
    },
  },
  {
    path: '/noticia/:noticiaID',
    name: 'Noticia',
    component: Noticia,
    meta: {
      title: 'Detalles de la noticia  | La Quiniela',
    },
  },
  {
    path: '*',
    redirect: '/registro',
  },
]

const router = new VueRouter({
  routes
});
const defaultTitle = 'Centro de apuestas | La Quiniela';
router.afterEach((to) => {
  Vue.nextTick(() => {
    document.title = to.meta.title || defaultTitle;
  });
});

export default router
