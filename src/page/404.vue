<template>
	<div :class="$style.notFound">
		<h1 :class="$style.text">404 Not Found</h1>
		<p :class="$style.href">{{href}}</p>
	</div>
</template>

<script>
	var component = {
		name: 'notFound', //组件名称
		props: {
			
		},
		data() {
			return {

			};
		},
		computed: { //计算属性
			href() {
				return location.href
			}
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

<style lang="stylus" module>
	.notFound {
		text-align: center;
		overflow: auto;
		height: 100%;
		.text {
			margin-top: 1rem;
		}
		.href {
			word-wrap: break-word;
			margin-top: 1rem;
		}
	}
</style>