import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/hello.vue'

Vue.use(Router)

export default new Router({
	mode: 'hash',
  routes: [
		{
			path:'/',
			component:Hello
		}
  ]
});



// https://github.com/owner-one/PlateCenter.git