import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/carrito',
      name: 'carrito',
      component: () => import('../views/CarritoView.vue'),
    },
    {
      path: '/water2',
      name: 'water2',
      component: () => import('../views/NewWaterView.vue'),
    },
    {
      path: '/water2/:embassament',
      name: 'embassament',
      component: () => import('../views/NewEmbassamentView.vue'),
      props: route => ({ embassament:route.params.embassament }),
    },
  ],
})

export default router
