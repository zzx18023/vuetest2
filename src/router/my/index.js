export default {
	name: '我的',
	path: '/my',
	component() {
		return import('@/page/my');
	},
	children: [{
		path: 'vip',
		redirect: {
			name: 'vip',
			params: {
				page: 0,
			},
		},
	}, {
		name: 'vip',
		path: 'vip/page:page',
		props(route) {
			return {
				page: +route.params.page,
			};
		},
		component() {
			return import('@/page/my/vip');
		},
	}, {
		name: '查看灵符',
		path: 'vip/lookLlingfu',
		props(route) {
			return {};
		},
		component() {
			return import('@/page/my/vip/lookLlingfu');
		},
	}, {
		name: '查看报告案例',
		path: 'vip/lookReportExample',
		props(route) {
			return {};
		},
		component() {
			return import('@/page/my/vip/reportExample');
		},
	}],
}