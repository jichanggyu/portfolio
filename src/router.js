import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export default new Router({
    mode: 'router',
    base: process.env.BASE_URL,
    routes: [
      {
        // path: '/',
        // name: 'home',
        // component: HomePage
      }
    ]
})
