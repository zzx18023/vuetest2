import wx from 'weixin-js-sdk';
var configs = {};

/**
 * @description 获取Configs
 * @params {String} url
 * @return {Promise}
 */
function getConfigs(url) {
	if(configs[url]) {
		return Promise.resolve(configs[url])
	} else {
		return import('axios').then(function(axios) {
			return axios.get(process.env.wxConfigsApi, {
				params: {
					url
				},
			}).then(function(response) {
				configs[url] = response.data;
				return response.data;
			}, function(error) {
				return Promise.reject(error);
			})
		});
	};
};

import { isIos, isWechat } from '@a/js/PublicFunction.js';

/**
 * @description 因为ios微信需要使用初始进入的链接初始化而安卓使用当前链接初始化
 * @return {String}
 */
function getUrl() {
	if(isIos() && isWechat()) {
		return window.mainUrl.split('#')[0];
	} else {
		return location.href.split('#')[0];
	};
};

var initUrl = '';
var initPromise;

/**
 * @description 初始化微信jssdk，每个链接都需初始化。
 * @return {Promise}
 */
function init() {
	var url = getUrl();
	if(initUrl === url && initPromise) { //已经初始化

	} else {
		initUrl = url;
		initPromise = getConfigs(url).then(function(configs) {
			wx.config({
				debug: process.env.NODE_ENV !== 'production',
				appId: configs.appId,
				timestamp: configs.timestamp,
				nonceStr: configs.nonceStr,
				signature: configs.signature,
				jsApiList: [
					'onMenuShareTimeline',
					'onMenuShareAppMessage',
					'onMenuShareQQ',
					'onMenuShareQZone',
				],
			});
			return new Promise(function(resolve, reject) {
				wx.ready(resolve);
				wx.error(function(...params) {
					initUrl = '';
					reject(...params)
				});
			})
		})
	};
	return initPromise;
};

/**
 * @description 记录分享
 * @param {String} 用户手机号
 */
function recordsShare(mobile) {
//	console.log('记录分享');
}

/**
 * @description 分享到朋友圈
 * @params {Object} params
 */
export function onMenuShareTimeline(params) {
	return init().then(function(data) {
		wx.onMenuShareTimeline({
			title: params.title,
			link: params.link,
			imgUrl: params.imgUrl,
			success: function(...successPparams) {
				params.mobile || recordsShare(params.mobile);
				params.success || params.success(...successPparams)
			},
			cancel: params.reject,
		})

		return 'Timeline';
	})
}

/**
 * @description 分享到朋友
 * @params {Object} params
 */
export function onMenuShareAppMessage(params) {
	return init().then(function(data) {
		wx.onMenuShareAppMessage({
			title: params.title,
			desc: params.desc,
			link: params.link,
			imgUrl: params.imgUrl,
			type: params.type,
			dataUrl: params.dataUrl,
			success: function(...successPparams) {
				params.mobile || recordsShare(params.mobile);
				params.success || params.success(...successPparams)
			},
			cancel: params.reject,
		})
		return 'Message';
	})
}

/**
 * @description 分享到QQ
 * @params {Object} params
 */
export function onMenuShareQQ(params) {
	return init().then(function(data) {
		wx.onMenuShareQQ({
			title: params.title,
			desc: params.desc,
			link: params.link,
			imgUrl: params.imgUrl,
			success: function(...successPparams) {
				params.mobile || recordsShare(params.mobile);
				params.success || params.success(...successPparams)
			},
			cancel: params.reject,
		})
		return 'QQ';
	})
}

/**
 * @description 分享到QQ空间
 * @params {Object} params
 */
export function onMenuShareQZone(params) {
	return init().then(function(data) {
		wx.onMenuShareQZone({
			title: params.title,
			desc: params.desc,
			link: params.link,
			imgUrl: params.imgUrl,
			success: function(...successPparams) {
				params.mobile || recordsShare(params.mobile);
				params.success || params.success(...successPparams)
			},
			cancel: params.reject,
		})
		return 'QZone';
	})
}

/**
 * @description 设置全部分享
 * @params {Object} params
 */
export function onMenuShareAll(params) {
	return Promise.all([
		onMenuShareTimeline(params),
		onMenuShareAppMessage(params),
		onMenuShareQQ(params),
		onMenuShareQZone(params)
	])
}