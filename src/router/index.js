import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Error from '@/components/Error'
import Login from '@/components/login/Login'
import Demo from '@/components/Demo'
import UserList from '@/components/UserList'
import FirstPage from '@/components/FirstPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/demo',
      component: Demo
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      children: [
        {
          path: '',
          component: FirstPage
        },
        {
          path: '/userList',
          component: UserList
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/userList',
      component: UserList
    },
    {
      path: '*',
      component: Error
    }
  ]
})
