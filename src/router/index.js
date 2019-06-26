import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Hi from '@/components/Hi'
import HiOne from '@/components/HiOne'
import HiTwo from '@/components/HiTwo'
import Params from '@/components/Params'
import Error from '@/components/Error'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }, {
      path: '/hi',
      name: 'Hi',
      components: {
        default: Hi,
        left: HiOne,
        right: HiTwo
      }
    }, {
      path: '/params/:newsId/:newsTitle',
      name:'Params',
      component: Params
    }, {
      path: '/goBack',
      redirect: '/'
    }, {
      path: "*",
      component: Error
    }
  ]
})
