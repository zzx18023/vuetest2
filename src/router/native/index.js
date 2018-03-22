function beforeEnter(to, fo, next) {
	console.log(to);
	import('@/assets/js/appjs-sdk.js')
	.then(function(appjsSdk) {
		var goToParams = {
			id: to.meta.id,
			params: to.params,
		};
		console.log(goToParams);
		appjsSdk.goTo(goToParams);
		next(false);
	});
};

export default {
	name: '原生',
	path: '/native',
	children: [{
		name: '原生-vip',
		path: 'vip',
		meta: {
			id: '1041',
		},
		beforeEnter: beforeEnter,
	}, {
		name: '原生-我的主页',
		path: 'myHome',
		meta: {
			id: '1039',
		},
		beforeEnter: beforeEnter,
	}, {
		name: '原生-购买VIP',
		path: 'buyVIP',
		meta: {
			id: '1049',
		},
		beforeEnter: beforeEnter,
	}]
}