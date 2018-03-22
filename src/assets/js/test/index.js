import Vue from 'vue'
import test from './index.vue'

var testVm = new(Vue.extend(test))().$mount();
document.body.appendChild(testVm.$el);

export default testVm.push
export var push = testVm.push