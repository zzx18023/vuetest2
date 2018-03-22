import { Base64 } from 'js-base64';
/**
 * @description 解析参数字符串，参数字符串为先进行url编码(避免中文无法base64)再进行base64加密的字符串
 * @example analysisQuery('TM1MDAwMDAwMDA=');
 * @param {String} queryString
 * @return {String} 解析后的字符串
 */
export function analysisQuery(queryString) {
	if(queryString) {
		try {
			queryString = Base64.encode(queryString);
		} catch(e) {
			console.error(e);
			return undefined;
		};
		return queryString;
	} else {
		return queryString;
	};
};

export function getQuerys(route, obj) {
	var props = {};
	Object.entries(obj).forEach(function(v, i) {
		props[v[0]] = analysisQuery(route.query[v[1]]);
	});
	console.log(props);
	return props;
};

/**
 * @description 异步加载script链接
 * @param {String} url
 * @return {Promise}
 */
export function loadScript(url) {
	const s = window.document.createElement('script');
	s.src = url;
	return new Promise(function(resolve, reject) {
		document.head.appendChild(s);
		s.onload = resolve;
		s.onerror = reject;
	});
};

/**
 * @description 判断当前环境是否为Iphone
 * @return {Boolean}
 */
export function isIphone() {
	var ua = window.navigator.userAgent.toLowerCase();
	var isIph = ua.indexOf('iphone') > -1;
	if(isIph) {
		return true;
	}
	return false;
};

/**
 * @description 判断当前环境是否为Ipad
 * @return {Boolean}
 */
export function isIpad() {
	var ua = window.navigator.userAgent.toLowerCase();
	var isIph = ua.indexOf('ipad') > -1;
	if(isIph) {
		return true;
	}
	return false;
};

/**
 * @description 判断当前环境是否为Ios
 * @return {Boolean}
 */
export function isIos() {
	var ua = window.navigator.userAgent.toLowerCase();
	var isIph = ua.indexOf('mac os x') > -1;
	if(isIph) {
		return true;
	}
	return false;
};

/**
 * @description 判断当前环境是否为Android
 * @return {Boolean}
 */
export function isAndroid() {
	var ua = window.navigator.userAgent.toLowerCase();
	var isIph = ua.indexOf('android') > -1;
	if(isIph) {
		return true;
	}
	return false;
};

/**
 * @description 判断当前环境是否为Wechat
 * @return {Boolean}
 */
export function isWechat() {
	var ua = window.navigator.userAgent.toLowerCase();
	var isIph = ua.indexOf('micromessenger') > -1;
	if(isIph) {
		return true;
	}
	return false;
};