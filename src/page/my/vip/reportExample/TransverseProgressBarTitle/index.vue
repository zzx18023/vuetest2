<template>
	<div :class="$style.TransverseProgressBarTitle">
		<div :class="$style.title">{{title}}</div>
		<div :class="$style.barW">
			<TransverseProgressBar :value="value" :type="type" :class="$style.bar"></TransverseProgressBar>
			<span :class="$style.value">{{value}}</span>
		</div>
	</div>
</template>

<script>
	var component = {
		name: 'TransverseProgressBarTitle', //组件名称
		props: {
			title: String,
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
.TransverseProgressBarTitle{
	.title{
		font-size: 0.9rem;
		&:before{
			content: '';
			display: inline-block;
			width: 1.75rem;
			height: 0.9rem;
			background-image: url(./titleIcon.png);
			background-size: 100% 100%;
			margin-right: .5rem;
		}
	}
	.barW{
		display: flex;
		align-items: center;
		.bar{
			flex: 1 1 auto;
		}
		.value{
			flex: 0 0 auto;
			margin-left: .5rem;
			font-size: 1.2rem;
		}
	}
	+.TransverseProgressBarTitle{
		margin-top: .5rem;
	}
}
</style>