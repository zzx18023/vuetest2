var x = 20,
	e = 16;
function refreshRem() {
	var rem = window.innerWidth / 375 * x;
	document.documentElement.style.fontSize = rem + 'px';
	document.body.style.fontSize = e + 'px';
	console.log('1rem = ' + rem + 'px', '1em = ' + e + 'px');
};
window.addEventListener('resize', refreshRem, false);
refreshRem();
export default {
	setrem: function(n) {
		x = n;
		refreshRem();
	},
	setem: function(n) {
		e = n;
		refreshRem();
	},
};