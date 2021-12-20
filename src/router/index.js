import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeRouter from './home'
import MineRouter from './mine'
import CinemaRouter from './Cinema'

Vue.use(VueRouter)

const routes = []

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    HomeRouter,
    MineRouter,
    CinemaRouter,
    {
      path: '/*',
      redirect: '/home'
    }
  ]
})

export default router
