<template>
	<div :class="$style.ColumnarGraphGroup">
		<div :class="$style.box">
			<ColumnarGraph v-for="(v,i) in data" :key="i" :value="v.value" :type="i" :class="$style.ColumnarGraph"></ColumnarGraph>
		</div>
	</div>
</template>

<script>
	var component = {
		name: 'ColumnarGraphGroup', //组件名称
		props: {
			data: Array,
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
			ColumnarGraph() {
				return import('../ColumnarGraph')
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
	.ColumnarGraphGroup {
		padding-top: 2.875rem;
		.box {
			display: flex;
			background-image: url(./bg.png);
			background-size: 100% 100%;
			width: 100%;
			height: 9.1rem;
			padding-left: 2rem;
			justify-content: space-around;
			align-items: flex-end;
			.ColumnarGraph {
				
			}
		}
	}
</style>