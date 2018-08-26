/*
 路由器模塊
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import About from '../views/About.vue'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

export default new VueRouter({
  // n個路由
  routes: [
    {
      path: '/about',
      component: About
    },
    {
      path: '/Home',
      component: Home
    }
  ]
})
