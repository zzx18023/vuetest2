<template>
	<div :class="$style.TransverseProgressBar">
		<div :class="[$style.Bar,$style['color'+type]]" :style="{width:value+'%'}">
			<div :class="$style.r">

			</div>
		</div>
	</div>
</template>

<script>
	var component = {
		name: 'TransverseProgressBar', //组件名称
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
	.TransverseProgressBar {
		background-color: #a29081;
		border: 0.075rem solid white;
		border-radius: 0.25rem;
		height: 1.4rem;
		.Bar {
			width: 50%;
			height: 100%;
			/*background-color: #fd6725;*/
			background-image: url(./bar0.png);
			background-size: 100% 100%;
			border-radius: 0.25rem;
			position: relative;
			&.color0 {
				background-image: url(./bar0.png);
			}
			&.color1 {
				background-image: url(./bar1.png);
			}
			&.color2 {
				background-image: url(./bar2.png);
			}
			&.color3 {
				background-image: url(./bar3.png);
			}
			&.color4 {
				background-image: url(./bar4.png);
			}
			&.color5 {
				background-image: url(./bar5.png);
			}
			.r {
				width: 0.925rem;
				height: 0.925rem;
				background-image: url(./R.png);
				background-size: 100% 100%;
				position: absolute;
				top: 50%;
				right: 0;
				transform: translate(50%, -50%);
			}
		}
	}
</style>