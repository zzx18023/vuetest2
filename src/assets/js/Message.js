import Vue from 'vue'
import Message from '@c/Message';

var MessageVm = new(Vue.extend(Message))().$mount();
document.body.appendChild(MessageVm.$el);

//export var addMessage = MessageVm.addMessage;
export var info = MessageVm.info; //信息
export var success = MessageVm.success; //成功
export var warning = MessageVm.warning; //警告
export var error = MessageVm.error; //错误
export var loading = MessageVm.loading; //加载
//export var render = MessageVm.render; //render模式
export default MessageVm.default; //render模式
