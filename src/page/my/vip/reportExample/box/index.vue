<template>
	<div :class="{[$style.box]:true,[$style.boxMT]:$slots.title}">
		<div :class="$style.title" v-if="$slots.title">
			<slot name="title" />
		</div>
		<div :class="$style.content">
			<slot />
		</div>
	</div>

</template>

<script>
	var component = {
		name: 'box', //组件名称
		props: {
			prop: {
				type: Number,
				'default' () {
					return 0;
				},
				validator(value) {
					return value >= 0;
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
	.box {
		/*margin-top: 1rem;*/
		/*background-image: url(./navBtna.png);*/
		padding: 1.25rem 1rem;
		position: relative;
		background-color: #f1ebde;
		.title {
			display: inline-block;
			font-size: 1rem;
			text-align: center;
			background-image: url(./boxTitleBg.png);
			background-size: 100% 100%;
			color: white;
			letter-spacing: .3rem;
			padding: 0.3rem (1.75rem - @letter-spacing) 0.3rem 1.75rem;
			position: absolute;
			top: 0;
			left: 50%;
			transform: translate(-50%, -50%);
		}
		.content {
			font-size: 0.75rem;
			line-height: 1.5;
		}
	}
	
	.boxMT{
		margin-top: 1rem;
	}
</style>