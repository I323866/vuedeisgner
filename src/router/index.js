import Vue from 'vue'
import Router from 'vue-router'
import Mainview from '@/components/Mainview'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'mainview',
      component: Mainview
    }
  ]
})
