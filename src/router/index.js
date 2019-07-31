import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Error from '@/components/Error'
import Login from '@/components/login/Login'
import UserList from '@/components/UserList'
import FirstPage from '@/components/FirstPage'
import HeadTop from '@/components/HeadTop'
import Tendency from '@/components/Tendency'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/chart',
      component: Tendency
    },
    {
      path: '/headTop',
      component: HeadTop
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      children: [
        {
          path: '',
          component: FirstPage,
          meta: []
        },
        {
          path: '/userList',
          component: UserList,
          meta: ['数据管理', '用户列表']
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
