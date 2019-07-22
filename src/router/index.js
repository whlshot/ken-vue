import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Error from '@/components/Error'
import Login from '@/components/login/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    , {
      path: '*',
      component: Error
    }
  ]
})
