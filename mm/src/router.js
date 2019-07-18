import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/hello'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  // base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: Hello,
		}	
  ]
})
