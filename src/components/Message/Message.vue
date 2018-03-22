<template>
	<div :class="$style.message">
		<slot />
	</div>
</template>

<script>
	var component = {
		name: 'Message', //组件名称
		props: {
			
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
			Icon() {
				return import('@c/Icon')
			}
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
	.message {
		color: white;
		background-color: rgba(0, 0, 0, .5);
		display: inline-block;
		padding: .2rem;
		border-radius: .2rem;
		align-items: center;
		font-size: 0.8rem;
	}
</style>