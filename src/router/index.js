// router/index.js
import { createRouter, createWebHistory } from 'vue-router';
// import AppContact from '../views/AppContact.vue';
// import AppAbout from '../views/AppAbout.vue'
import AppHome from '../views/AppHome.vue';
//import store from '../store'
//import Login from '../views/AppLogin.vue'

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
    component: () => import('../views/AppInterview.vue'),
    meta: {requiresAuth: true}
  },
  {
    path:'/Login',
    name:'Login',
    component: () => import('../views/AppLogin.vue')
  },
  {
    path:'/detail/:company/',
    name:'AppDetail',
    component: () => import('../views/AppDetail.vue')
  },
  {
    path:'/create',
    name:'create',
    component: () =>import('../views/AppCreate.vue')
  },
  {
    path:'/mbti',
    name:'mbti',
    component: () =>import('../views/MBTITest.vue')
  },
  {
    path:'/mbtiresult/:mbti',
    name: 'AppMbtiList',
    component: () =>import('../views/AppMbtiList.vue')
  }
 

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!localStorage.getItem("token")) {
      
      next({ name: 'Login' })
    } else {
      next()
    }
  } else {
    next()
  }
})



export default router
