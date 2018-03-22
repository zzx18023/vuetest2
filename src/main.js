// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

console.log(process.env);

window.mainUrl = location.href;
import Vue from 'vue'
import router from './router'
Vue.config.productionTip = false;

if(['production', 'test'].includes(process.env.NODE_ENV)) {
	var fundebug = require('fundebug-javascript');
	fundebug.apikey = 'e37f8cbc315c47f6f20a2a3815e0ae97bbba54604b58a804b41718d682c8fa54';
	fundebug.appversion = '1.0';
	fundebug.releasestage = process.env.NODE_ENV;

	function formatComponentName(vm) {
		if(vm.$root === vm) return 'root';

		var name = vm._isVue ? (vm.$options && vm.$options.name) || (vm.$options && vm.$options._componentTag) : vm.name;
		return(name ? 'component <' + name + '>' : 'anonymous component') + (vm._isVue && vm.$options && vm.$options.__file ? ' at ' + (vm.$options && vm.$options.__file) : '');

	}
	Vue.config.errorHandler = function(err, vm, info) {
		var componentName = formatComponentName(vm);
		var propsData = vm.$options && vm.$options.propsData;

		fundebug.notifyError(err, {
			metaData: {
				componentName: componentName,
				propsData: propsData,
				info: info
			}
		});
	};
}

import index_vue from '@p/index.vue'
new(Vue.extend(index_vue))({
	el: '#app',
	router,
})

import('@a/style/base.less');
import('@a/js/rem');

