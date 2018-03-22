<template>
	<div :class="$style.proportionalBox" :style="{paddingBottom:Proportion*100+'%'}">
		<div :class="$style.proportionalBody">
			<slot />	
		</div>
	</div>
</template>

<script>
	var component = {
		name: 'ProportionalBox', //组件名称
		props: {
			Proportion: {
				type: Number,
				'default' () {
					return 1;
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
	.proportionalBox {
		width: 100%;
		height: 0px;
		padding-bottom: 100%;
		position: relative;
		.proportionalBody {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			/*background-color: rgba(0, 0, 0, .5);*/
		}
	}
</style>