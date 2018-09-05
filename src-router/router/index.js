/*
 路由器模塊
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import About from '../views/About.vue'
import Home from '../views/Home.vue'
import News from '../views/News.vue'
import Message from '../views/Message.vue'
import MessageDetail from '../views/MessageDetail.vue'

Vue.use(VueRouter)

export default new VueRouter({
  // 註冊n個路由 再使用路由<router-link> <router-view>
  routes: [
    {
      path: '/about',
      component: About
    },
    {
      path: '/home',
      component: Home,
      children: [
        {
          path: 'news', // path 左側斜槓永遠代表根路徑 所以不能加斜槓
          component: News
        },
        {
          path: '/home/message',
          component: Message,
          children: [
            {
              path: '/home/message/detail/:id', // home/message/detail/1
              component: MessageDetail
            }
          ]
        }
      ]
    },
    { // 默認路徑
      path: '/',
      redirect: '/about'
    }
  ]
})
