import Vue from 'vue'
import Router from 'vue-router'
import Home2 from '@/components/HelloWorld2'
import Home from '@/components/hh'

Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/',
			component: Home
		}
	]
})
