import Vue from 'vue'
import Router from 'vue-router'

var catalog = {
	name: '目录',
	path: '/catalog/:page*',
	props(route) {
		return {
			page: route.params.page,
		};
	},
	component() {
		return import('@p/catalog');
	},
}

Vue.use(Router)
console.log('base:' + process.env.assetsPublicPath);
export default new Router({
	base: process.env.assetsPublicPath,
	mode: 'history',
	routes: [{
			path: '',
			redirect: 'demo',
		},
		{
			name: 'demo',
			path: '/demo',
			component() {
				return import('@p/demo');
			},
		},
		require('./numerology').default,
		require('./fengShui').default,
		require('./school').default,
		require('./aestheticHall').default,
		require('./my').default,
		require('./activity').default,
		require('./native').default,
		...(process.env.NODE_ENV === 'production' ? [] : [catalog]),
		{
			name: '404 Not Found',
			path: '*',
			component() {
				return import('@p/404');
			},
		}
	]
})