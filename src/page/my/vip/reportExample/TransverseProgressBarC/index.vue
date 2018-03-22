<template>
	<div :class="$style.TransverseProgressBarC">
		<div :class="[$style.icon,$style['color'+type]]">
			{{value}}
		</div>
		<TransverseProgressBar :value="value" :type="type" :class="$style.bar"></TransverseProgressBar>
	</div>
</template>

<script>
	var component = {
		name: 'TransverseProgressBarC', //组件名称
		props: {
			value: {
				type: Number,
				'default' () {
					return 0;
				},
				validator(value) {
					return value >= 0 && value <= 100;
				},
			},
			type: {
				type: Number,
				'default' () {
					return 0;
				},
				validator(value) {
					return value >= 0 && value <= 5;
				},
			},
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
			TransverseProgressBar() {
				return import('../TransverseProgressBar')
			},
		},
		methods: { //事件方法

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
	.TransverseProgressBarC {
		display: flex;
		align-items: center;
		.icon {
			flex: 0 0 auto;
			width: 3rem;
			height: 3.025rem;
			background-size: 100% 100%;
			line-height:@height ;
			text-align: center;
			font-size: 1.2rem;
			color: white;
			&.color0 {
				background-image: url(./bg0.png);
			}
			&.color1 {
				background-image: url(./bg1.png);
			}
			&.color2 {
				background-image: url(./bg2.png);
			}
			&.color3 {
				background-image: url(./bg3.png);
			}
			&.color4 {
				background-image: url(./bg4.png);
			}
			&.color5 {
				background-image: url(./bg5.png);
			}
			z-index: 1;
		}
		.bar {
			flex: 1 1 auto;
			margin-left: -.4rem;
			z-index: 0;
		}
	}
</style>