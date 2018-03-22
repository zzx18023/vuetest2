<template>
	<div :class="$style.ringProgressBar">
		<div :class="$style.box">
			<svg :class="$style.svg">
				<circle :class="$style.circle1" cx="50%" cy="50%" r="45%"></circle>
				<circle :class="$style.circle2" cx="50%" cy="50%" r="45%" :style="{strokeDasharray:strokeDasharray,stroke:color}"></circle>
				<text :class="$style.text" x="50%" y="50%" :style="{fill:color}">{{value}}</text>
			</svg>
		</div>
	</div>
</template>

<script>
	var component = {
		name: 'ringProgressBar', //组件名称
		props: {
			value: Number,
			title: String,
			color: String,
		},
		data() {
			return {
				jd: .8,
				perimeter: 45 * 2 * Math.PI,

			};
		},
		computed: { //计算属性
			perimeter_jd() {
				return this.perimeter * this.value / 100
			},
			strokeDasharray() {
				return this.perimeter_jd + '% ' + this.perimeter + '% ';
			},
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
	.ring-progress-bar {
		width: 100%;
		position: relative;
		.box {
			height: 0;
			padding-bottom: 100%;
			position: relative;
			.svg {
				width: 100%;
				height: 100%;
				position: absolute;
				top: 0;
				left: 0;
				right: 0;
				bottom: 0;
				width: 100%;
				height: 100%;
				.circle1 {
					stroke: white;
					stroke-width: 10%;
					fill: none;
				}
				.circle2 {
					fill: none;
					stroke: #00A5E0;
					stroke-width: 10%;
					/*stroke-linecap: round;*/
					transition: all 1s;
					transform: rotateX(180deg)rotateZ(90deg);
					transform-origin: center center;
				}
				.text {
					fill: #00A5E0;
					font-size: 1.4rem;
					text-anchor: middle;
					dominant-baseline: middle;
				}
			}
		}
	}
</style>