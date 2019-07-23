import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/login'
import Register from '@/components/register'
import Door from '@/components/door'
import Home from '@/components/home'
import Home2 from '@/components/home2'
import Home3 from '@/components/home3'
import Home4 from '@/components/home4'
import Home5 from '@/components/home5'
import Show from '@/components/show'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
    	path: '/login',
      component: Login
    },
    {
    	path: '/register',
      component: Register
    },
    {
    	path: '/door',
      component: Door
    },
    {
    	path: '/home',
      component: Home
    },
    {
    	path: '/home2',
      component: Home2
    },
    {
    	path: '/home3',
      component: Home3
    },
    {
    	path: '/home4',
      component: Home4
    },
    {
    	path: '/home5',
      component: Home5
    },
    {
    	path: '/show',
      component: Show
    }
  ]
})
