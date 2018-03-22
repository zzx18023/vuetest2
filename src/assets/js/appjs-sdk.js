import { isIphone } from '@a/js/PublicFunction'

var bridge = new Promise(function(resolve, reject) {
	if(window.WebViewJavascriptBridge) {
		resolve(window.WebViewJavascriptBridge)
	} else if(isIphone()) {
		if(window.WVJBCallbacks) {
			return window.WVJBCallbacks.push(resolve);
		};
		window.WVJBCallbacks = [resolve];
		var WVJBIframe = document.createElement('iframe');
		WVJBIframe.style.display = 'none';
		WVJBIframe.src = 'https://__bridge_loaded__';
		document.documentElement.appendChild(WVJBIframe);
	} else {
		document.addEventListener('WebViewJavascriptBridgeReady', function(event) {
			resolve(event.bridge)
		}, false);
	}
})

bridge.then(function(bridge) {
	window.bridge = bridge;
	if(bridge.init) {
		bridge.init(function(message, responseCallback) {
			responseCallback();
		});
	}
	bridge.registerHandler("rightbuttonclick", function(data, responseCallback) {
		window.dispatchEvent(new Event('rightbuttonclick'));
		responseCallback();
	});

	bridge.registerHandler("titleclick", function(data, responseCallback) {
		window.dispatchEvent(new Event('titleclick'));
		responseCallback();
	});

	bridge.registerHandler("titledblclick", function(data, responseCallback) {
		window.dispatchEvent(new Event('titledblclick'));
		responseCallback();
	});
})

export function getUserInfo() {
	return bridge.then(function(bridge) {
		return new Promise(function(resolve, reject) {
			bridge.callHandler('getUserInfo', null, function(responseData) {
				resolve(JSON.parse(responseData));
			});
		});
	});
}

export function getAppInfo() {
	return bridge.then(function(bridge) {
		return new Promise(function(resolve, reject) {
			bridge.callHandler('getAppInfo', null, function(responseData) {
				resolve(JSON.parse(responseData))
			});
		});
	});
}

export function goToLogin() {
	return bridge.then(function(bridge) {
		return new Promise(function(resolve, reject) {
			bridge.callHandler('goToLogin', null, function(responseData) {
				responseData = JSON.parse(responseData);
				if(responseData.isLogin == '1') {
					resolve(responseData);
				} else {
					reject(responseData);
				}
			});
		});
	});
}

export function openShare(param) {
	return bridge.then(function(bridge) {
		return new Promise(function(resolve, reject) {
			bridge.callHandler('openShare', param, function(responseData) {
				responseData = JSON.parse(responseData);
				if(responseData) {
					resolve(responseData);
				} else {
					reject(responseData);
				}
			});
		});
	});
}

export function openDateTimer() {
	return bridge.then(function(bridge) {
		return new Promise(function(resolve, reject) {
			bridge.callHandler('openDateTimer', null, function(responseData) {
				if(responseData === 'undefined') {
					reject();
				} else {
					responseData = JSON.parse(responseData);
					resolve(responseData);
				}
			});
		});
	});
}

export function goTo(param) {
	return bridge.then(function(bridge) {
		return new Promise(function(resolve, reject) {
			bridge.callHandler('goTo', param, function(responseData) {
				resolve(responseData)
			});
		});
	});
}

export function setRightButton(param) {
	return bridge.then(function(bridge) {
		return new Promise(function(resolve, reject) {
			bridge.callHandler('setRightButton', param, function(responseData) {
				resolve(responseData)
			});
		});
	});
};