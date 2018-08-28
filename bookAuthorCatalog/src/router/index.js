import Vue from 'vue'
import Router from 'vue-router'
import LandingPage from '@/pages/LandingPage'
import Books from '@/pages/Books'
import Authors from '@/pages/Authors'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'LandingPage',
      component: LandingPage
    },
    {
      path: '/books',
      name: 'Books',
      component: Books 
    },
    {
      path: '/authors',
      name: 'Authors',
      component: Authors 
    }
  ]
})
