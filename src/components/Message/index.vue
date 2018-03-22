<script>
	//	function MessageData(data, duration) {
	//		this.id = id++;
	//		this.data = data;
	//		this.over = false;
	//		if(duration !== 0) {
	//			this.t = setTimeout((function() {
	//				this.end();
	//			}).bind(this), duration);
	//		};
	//	};
	//	MessageData.prototype.end = function() {
	//		if(this.t) {
	//			clearTimeout(this.t);
	//		};
	//		this.over = true;
	//	};

	class MessageData {
		constructor(data, duration) {
			this.id = id++;
			this.data = data;
			this.over = false;
			if(duration !== 0) {
				this.t = setTimeout((function() {
					this.end();
				}).bind(this), duration);
			};
		}

		end() {
			if(this.t) {
				clearTimeout(this.t);
			};
			this.over = true;
		}
	}

	import Message from './Message'
	import Icon from '@c/Icon'
	var id = 0;
	var component = {
		name: 'MessageList', //组件名称
		props: {

		},
		data() {
			return {
				list: [],
			};
		},
		computed: { //计算属性
			vList() {
				return this.list.filter(function(v, i) {
					return !v.over;
				}).slice(-10);
			},
		},
		watch: { //观察者

		},
		components: { //子组件
			Message,
			Icon,
		},
		methods: { //事件方法
			default(vnode, duration = 3000) {
				var vm = this;
				var messageData = new MessageData(vnode, duration);
				vm.list.push(messageData);
				return messageData.end.bind(messageData);
			},
			info(vnode, duration) {
				var vm = this;
				return this.default(
					<p>
						<Icon
						class={vm.$style.icon}
						type="info"
						style={{color: 'deepskyblue',}}
						/>
						{vnode}
					</p>,
					duration
				)
			},
			success(vnode, duration) {
				var vm = this;
				return this.default(
					<p>
						<Icon
						class={vm.$style.icon}
						type="success"
						style={{color: 'yellowgreen',}}
						/>
						{vnode}
					</p>,
					duration
				)
			},
			warning(vnode, duration) {
				var vm = this;
				return this.default(
					<p>
						<Icon
						class={vm.$style.icon}
						ype="warning"
						tyle={{color: 'orange',}}
						/>
						{vnode}
					</p>,
					duration
				)
			},
			error(vnode, duration) {
				var vm = this;
				return this.default(
					<p>
						<Icon
						class={vm.$style.icon}
						type="error"
						style={{color: 'red',}}
						/>
						{vnode}
					</p>,
					duration
				)
			},
			loading(vnode, duration) {
				var vm = this;
				return this.default(
					<p>
						<Icon
						class={[vm.$style.icon, vm.$style.loadingAnimation]}
						type="loading"
						style={{color: 'white',}}
						/>
						{vnode}
					</p>,
					duration
				)
			},

		},
		render(h) {
			var vm = this;
			if(this.vList.length) {
				return(
					<transitionGroup
					class={vm.$style.messageList}
					tag="ul"
					enterClass={vm.$style.listEnter}
					enterClass={vm.$style.listEnter}
					enterActiveClass={vm.$style.listEnterActive}
					leaveToClass={vm.$style.listLeaveTo}
					leaveActiveClass={vm.$style.listLeaveActive}
					moveClass={vm.$style.listMove}
					>
						{vm.vList.map(function (v,i) {
							return (
								<li key={v.id}>
									<Message>
										{v.data}
									</Message>
								</li>
							)
						})}
					</transitionGroup>
				)

				//				return h('transitionGroup', {
				//					'class': [vm.$style.messageList],
				//					props: {
				//						tag: 'ul',
				//						enterClass: vm.$style.listEnter,
				//						enterActiveClass: vm.$style.listEnterActive,
				//						leaveToClass: vm.$style.listLeaveTo,
				//						leaveActiveClass: vm.$style.listLeaveActive,
				//						moveClass: vm.$style.listMove,
				//					},
				//				}, this.vList.map(function(v, i) {
				//					return h('li', {
				//						key: v.id,
				//					}, [h('Message', [v.data(h)])]);
				//				}));
			}
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
	.message-list {
		position: fixed;
		top: 0;
		left: 0;
		bottom: 10%;
		right: 0;
		width: 100%;
		height: 100% - @bottom;
		pointer-events: none;
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
		z-index: 1000;
		>li {
			text-align: center;
			opacity: 1;
			position: relative;
			+li {
				margin-top: .2rem;
			}
			&.list-enter-active,
			&.list-leave-active {
				transition: opacity .3s, transform .3s;
			}
			&.list-enter {
				opacity: 0;
				transform: translateY(1rem);
			}
			&.list-leave-to {
				opacity: 0;
				transform: translateY(-1rem);
			}
			&.list-move {
				transition: transform .3s;
			}
			.icon {
				margin-right: .2rem;
			}
			.loading-animation {
				animation: rotate 1s steps(8) infinite;
				@keyframes rotate {
					from {
						transform: rotateZ(0deg);
					}
					to {
						transform: rotateZ(360deg);
					}
				}
			}
		}
	}
</style>