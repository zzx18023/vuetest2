<template>
	<transition :enter-class="$style.enter" :enter-active-class="$style.enterActive" :leave-to-class="$style.leaveTo" :leave-active-class="$style.leaveActive">
		<div :class="$style.modalWrap" v-if="visibility" @click.self="maskCancel?cancel($event):null">
			<div :class="[$style.modal,skinClass]">
				<div v-if="header" :class="$style.header">
					<span :class="$style.title">
					<slot name="header" v-if="$slots.header"/>
					<span v-else>Modal</span>
					</span>
					<Icon type="close" v-if="closeBtn" @click="cancel"></Icon>
				</div>
				<div :class="$style.body">
					<slot />
				</div>
				<div v-if="footer" :class="{[$style.footer]:true,[$style.default]:!$slots.footer}">
					<slot name="footer" v-if="$slots.footer" />
					<template v-else>
						<Button @click="ok" v-if="okBtn" :class="$style.okBtn">{{okText}}</Button>
						<Button @click="cancel" v-if="cancelBtn" :class="$style.cancelBtn">{{cancelText}}</Button>
					</template>
				</div>
			</div>
		</div>
	</transition>
</template>

<script>
	var component = {
		name: 'Modal', //组件名称
		model: {
			prop: 'visibility',
			event: 'change',
		},
		props: {
			visibility: {
				type: Boolean,
				'default': false,
			},
			noClose: {
				type: Boolean,
				'default': false,
			},
			closeBtn: {
				type: Boolean,
				'default': true,
			},
			okBtn: {
				type: Boolean,
				'default': true,
			},
			cancelBtn: {
				type: Boolean,
				'default': true,
			},
			okText: {
				type: String,
				'default': '确定',
			},
			cancelText: {
				type: String,
				'default': '取消',
			},
			header: {
				type: Boolean,
				'default': true,
			},
			footer: {
				type: Boolean,
				'default': true,
			},
			maskCancel: {
				type: Boolean,
				'default': true,
			},
			skinClass: String,
		},
		data() {
			return {

			};
		},
		computed: { //计算属性

		},
		watch: { //观察者

		},
		components: { //子组件
			Button() {
				return import('@c/Button');
			},
			Icon() {
				return import('@c/Icon');
			},
		},
		methods: { //事件方法
			ok() {
				if(this.visibility) { //防止双击
					if(!this.noClose) {
						this.$emit('change', false);
					};
					this.$emit('on-ok');
				};
			},
			cancel(event) {
				if(this.visibility) {
					if(!this.noClose) {
						this.$emit('change', false);
					};
					this.$emit('on-cancel');
				};
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
	.modal-wrap {
		overflow: hidden;
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, .5);
		font-size: 0.8rem;
		z-index: 100;
		.modal {
			display: inline-flex;
			flex-direction: column;
			align-content: center;
			justify-content: center;
			background-color: white;
			position: relative;
			border-radius: .2rem;
			top: 50%;
			left: 50%;
			max-width: 100%;
			max-height: 100%;
			transform: translate(-50%, -50%);
			.header {
				flex: 0 0 auto;
				padding: .2rem;
				border-bottom: 0.025rem solid #ddd;
				display: flex;
				align-items: center;
				.title {
					flex: 1 1 auto;
				}
			}
			.body {
				flex: 1 1 auto;
				padding: .2rem;
				overflow: auto;
			}
			.footer {
				flex: 0 0 auto;
				padding: .2rem;
				border-top: 0.025rem solid #ddd;
				&.default {
					display: flex;
					justify-content: space-around;
					.ok-btn{
						background-color: deepskyblue;
						color: white;
					}
					.cancel-btn{
						/*background-color: red;*/
						color: #495060;
					}
				}
			}
		}
		&.enter-active {
			transition: opacity .3s;
			.modal {
				transition: transform .3s;
			}
		}
		&.leave-active {
			transition: opacity .5s;
			.modal {
				transition: transform .5s;
			}
		}
		&.enter {
			opacity: 0;
			.modal {
				transform: translate(-50%, -50%)translateY(1rem)scale(.5);
			}
		}
		&.leave-to {
			opacity: 0;
			.modal {
				transform: translate(-50%, -50%)translateY(-1rem);
			}
		}
	}
	.home{
		
		color: #000;
	}
</style>