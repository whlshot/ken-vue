import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Hi from '@/components/Hi'
import HiOne from '@/components/HiOne'
import HiTwo from '@/components/HiTwo'

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
      component: Hi,
      children: [
        {path: '/', component: Hi},
        {path: 'hiOne', component: HiOne},
        {path: 'hiTwo', component: HiTwo}
      ]
    }
  ]
})
