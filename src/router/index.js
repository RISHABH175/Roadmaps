import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'signup',
    component: () => import('../components/Signup.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../components/Login.vue')
  },
  {
    path:'/home',
    name:'home',
    component: ()=>import('../components/Home.vue')
  },
  {
    path:'/about',
    name:'about',
    component : ()=>import('../components/About.vue')
  },
  {
    path:'/createNew',
    name:'createNew',
    component: ()=>import('../components/CreateNew.vue')
  },
  {
    path:'/View',
    name:'View',
    component: ()=>import('../components/ViewChart.vue')
  }
 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
