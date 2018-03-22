<template>
	<div :class="$style.StarScore">
		<div v-for="i in 5" :class="{[$style.star]:true,[$style.active]:i<=true_Star}">

		</div>
	</div>
</template>

<script>
	var component = {
		name: 'StarScore', //组件名称
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
		},
		data() {
			return {

			};
		},
		computed: { //计算属性
			true_Star() {
				return Math.ceil(this.value / 20)
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

<style module lang="stylus">
	.StarScore {
		display: flex;
		justify-content: space-between;
		.star {
			width: 1.1rem;
			height: 0.975rem;
			background-image: url(0.png);
			background-size: 100% 100%;
			&.active {
				background-image: url(1.png);
			}
		}
	}
</style>