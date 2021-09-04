import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/home/Home.vue')
  },
  {
    path: '/category',
    name: 'category',
    component: () => import('../views/category/category.vue')
  },
  {
    path: '/shoppingcar',
    name: 'shoppingcar',
    component: () => import('../views/shoppingcar/shoppingcar.vue')
  },
  {
    path: '/my',
    name: 'my',
    component: () => import('../views/my/my.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
