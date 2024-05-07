// router/index.js
import { createRouter, createWebHistory } from 'vue-router';
// import AppContact from '../views/AppContact.vue';
// import AppAbout from '../views/AppAbout.vue'
import AppHome from '../views/AppHome.vue';


const routes = [
  {
    path: '/',
    name: 'home',
    component: AppHome
  },
  {
    path: '/contact',
    name: 'contact',
    // component: AppContact
    component: () => import('../views/AppContact.vue')
  },
  {
    path:'/about',
    name:'about',
    component: () => import('../views/AppAbout.vue')
  },
  {
    path:'/community',
    name:'community',
    component: () => import('../views/AppCommunity.vue')
  },
  {
    path:'/interview',
    name:'interview',
    component: () => import('../views/AppInterview.vue')
  },
  {
    path:'/login',
    name:'login',
    component: () => import('../views/AppLogin.vue')
  },
  {
    path:'/detail/:company/:field',
    name:'AppDetail',
    component: () => import('../views/AppDetail.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
