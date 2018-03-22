<template>
	<div :class="$style.home">
		<p>home</p>
		<p>
			<router-link :to="{name:'原生-我的主页'}">原生-我的主页</router-link>
		</p>
		<fieldset>
			<legend>Icon</legend>
			<Icon type="mobile" />
			<Icon type="checkcode" />
			<Icon type="password" />
			<Icon type="portrait" />
			<Icon type="close" />
			<Icon type="info" style="color: deepskyblue;" @click="openMessage('info')" />
			<Icon type="success" style="color: yellowgreen;" @click="openMessage('success')" />
			<Icon type="warning" style="color: orange;" @click="openMessage('warning')" />
			<Icon type="error" style="color: red;" @click="openMessage('error')" />
			<Icon type="loading" @click="openMessage('loading')" />
		</fieldset>
		<fieldset>
			<legend>Button</legend>
			<Button @click="openMessage('default')"><Icon type="success" /><span>Button</span></Button>
			<Button @click="openRenderMessage">default</Button>
			<Button disabled>render</Button>
		</fieldset>
		<fieldset>
			<legend>Modal</legend>
			<Button @click="Modal_1=true">open Modal</Button>
			<Modal v-model="Modal_1" @on-ok="Modal_1_ok" @on-cancel="Modal_1_cancel" :no-close="false" :close-btn="true" :cancel-btn="true" ok-text="OK" cancel-text="Cancel" :header="true" :footer="true" :mask-cancel="true" :skin-class="$style.modalSkin">
				<div slot="header">
					<strong>Modal</strong>弹窗
				</div>
				<div>
					Modal 弹窗内容 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos tempora id deleniti veritatis ea aspernatur fugit quis numquam! Quasi tempora velit distinctio ducimus iusto eligendi ex vitae dolorem saepe possimus!
				</div>
				<!--<div slot="footer">
					<button>button</button>
				</div>-->
			</Modal>
		</fieldset>
		<fieldset>
			<legend>Radio</legend>
			<p>
				单独使用：{{Radio_checked0}}
			</p>
			<Radio v-model="Radio_checked0"><span slot-scope="props" :style="{color:props.checked?'red':''}">单数使用{{props.checked}}</span></Radio>
			<p>
				组合使用：{{Radio_checked1}} {{data[Radio_checked1]}}
			</p>
			<Radio v-for="(v,i) in data" :key="v" v-model="Radio_checked1" :value="i">{{v}}</Radio>
			<p>disabled</p>
			<Radio v-for="(v,i) in data" :key="'disabled'+v" v-model="Radio_checked1" :value="i" disabled>{{v}}</Radio>
			<p>icon==false</p>
			<Radio v-for="(v,i) in data" :key="'icon'+v" v-model="Radio_checked1" :value="i" :icon="false"><span slot-scope="props" :style="{color:props.checked?'red':''}">{{v}}</span></Radio>
		</fieldset>
		<fieldset>
			<legend>Checkbox</legend>
			<p>
				单独使用：{{Checkbox_checked0}}
			</p>
			<checkbox v-model="Checkbox_checked0">单独使用</checkbox>
			<p>组合使用：{{Checkbox_checked1}}</p>
			<checkbox v-for="(v,i) in data" :key="'checkbox'+v" v-model="Checkbox_checked1" :value="v"><span slot-scope="props" :style="{color:props.checked?'red':''}">{{v}}</span></checkbox>
			<br />
			<p>disabled</p>
			<checkbox v-for="(v,i) in data" :key="'checkbox_disabled'+v" v-model="Checkbox_checked1" :value="v" disabled><span slot-scope="props" :style="{color:props.checked?'red':''}">{{v}}</span></checkbox>
			<br />
			<p>icon==false</p>
			<checkbox v-for="(v,i) in data" :key="'checkbox_icon'+v" v-model="Checkbox_checked1" :value="v" :icon="false"><span slot-scope="props" :style="{color:props.checked?'red':''}">{{v}}</span></checkbox>
			<br />
			<p>全选</p>
			<checkbox v-model="checkbox_all" :indeterminate="!!Checkbox_checked1.length&&!checkbox_all">全选</checkbox>
			<checkbox v-model="checkbox_all" :indeterminate="!!Checkbox_checked1.length&&!checkbox_all" disabled>全选</checkbox>
		</fieldset>
		<fieldset>
			<legend>Select</legend>
			<Select :data="Select_data" v-model="Select_value">
				<ul>
					<li v-for="(v,i) in data" :value="i" @click="Select_value=v">{{v}}</li>
				</ul>
			</Select>
		</fieldset>
	</div>
</template>

<script>
	import Icon from '@c/Icon'
	import Checkbox from '@c/Checkbox'
	
	var i = 0;
	var component = {
		name: 'home', //组件名称
		props: {

		},
		data() {
			return {
				Modal_1: false,
				data: ['Apple', 'Android', 'Windows'],
				Radio_checked0: false,
				Radio_checked1: null,
				Checkbox_checked0: false,
				Checkbox_checked1: ['Apple'],
				Select_data: (function(n) {
					var a = [];
					for(var i = 0; i < n; i++) {
						a.push(i);
					};
					return a;
				})(50),
				Select_value: 'Apple',
			};
		},
		computed: { //计算属性
			checkbox_all: {
				get() {
					return this.Checkbox_checked1.length == this.data.length;
				},
				set(value) {
					if(value) {
						this.Checkbox_checked1 = this.data.slice();
					} else {
						this.Checkbox_checked1 = [];
					};
				},
			},
		},
		watch: { //观察者

		},
		components: { //子组件
			//			Icon() {
			//				return import('@c/Icon');
			//			},
			Icon,
			Button() {
				return import('@c/Button');
			},
			Modal() {
				return import('@c/Modal');
			},
			Radio() {
				return import('@c/Radio');
			},
			Checkbox,
			Select() {
				return import('@c/Select');
			},
			
		},
		methods: { //事件方法
			openMessage(type) {
				import('@a/js/message').then(function(message) {
					if(type == 'loading') {
						var m = message.loading('loading...', 0);
						setTimeout(function() {
							m();
							message.success('loading success');
						}, 3000);
					} else {
						var m = message[type](type);
					}
				});
			},
			openRenderMessage() {
				var vm = this;
				import('@a/js/message').then(function(message) {
					message.default(
						<p><span>测试</span><strong style="color:deepskyblue">VNode</strong><span>消息</span></p>
					)
				});

			},
			Modal_1_ok(event) {
				setTimeout((function() {
					//					this.Modal_1 = false;
				}).bind(this), 1000);
				import('@a/js/message').then(function(message) {
					message.success('Modal_1_ok');
				});
			},
			Modal_1_cancel(event) {
				//				this.Modal_1 = false;
				import('@a/js/message').then(function(message) {
					message.info('Modal_1_cancel');
				});
			},
		},
		filters: { //过滤器

		},
		beforeRouteEnter(to, fo, next) { //即将进入路由
			next();
		},
		beforeCreate() { //即将开始创vue实例

		},
		created() { //实例创建完毕
			import('@a/js/wxjs-sdk.js').then(function(wx) {
				wx.onMenuShareAll({
					title: '分享标题',
					desc: '分享描述',
					link: location.href,
					imgUrl: 'http://120.76.192.13:10201/h5/static/logo.png',
					mobile: '13650830957',
					success() {
						console.log('分享成功');
					},
					cancel() {
						console.log('取消分享');
					},
				}).then(function(...p) {
					console.log('设置成功', p);
				}, function(error) {
					console.warn('设置失败', error);
				})
			})
		},
		beforeMount() { //即将进行数据挂载

		},
		mounted() { //挂载完成插入页面

		},
		beforeRouteUpdate(to, fo, next) { //即将更新路由
			next();
		},
		beforeUpdate() { //数据即将更新

		},
		updated() { //数据更新完成

		},
		beforeRouteLeave(to, fo, next) { //即将离开路由
			next();
		},
		beforeDestroy() { //即将销毁

		},
		destroyed() { //销毁完成

		},
	};
	export default component;
</script>

<style module lang="stylus">
	.home {
		color: #000;
		font-size: 0.8rem;
		height: auto;
		min-height: 100%;
		background-color: #eee;
		padding-bottom: 10rem;
		position: relative;
		/*height: 100%;*/
		/*overflow: auto;*/
		.modal-skin {
			color: salmon;
			max-width: 80% !important;
		}
		.select-option {
			background-color: #eee;
			padding: .2rem;
			&.active {
				background-color: salmon;
				color: white;
			}
		}
	}
</style>