import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  
  //routes
  routes: [
    { 
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
    { 
      path: '/books',
      name: 'books',
    component: () => import('../views/BooklistView.vue') 
    },
  ],
} )
export default router
