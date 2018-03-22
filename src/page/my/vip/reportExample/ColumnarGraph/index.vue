<template>
	<div :class="[$style.ColumnarGraph,$style['color'+type]]">
		<div :class="$style.box">
			<div :class="$style.jd" :style="{height:value+'%'}">
				<div :class="$style.title">{{value}}</div>
			</div>
		</div>
	</div>
</template>

<script>
	var component = {
		name: 'ColumnarGraph', //组件名称
		props: {
			value: {
				type: Number,
				default: 0,
				validator: function(value) {
					return value >= 0 && value <= 100
				},
			},
			type: {
				type: Number,
				default: 0,
				validator: function(value) {
					return value >= 0 && value <= 2
				},
			}
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
	.ColumnarGraph {
		width: 1.625rem;
		position: relative;
		background-image: url(color0_top.png);
		background-size: 100% auto;
		background-repeat: no-repeat;
		background-position: bottom center;
		padding-bottom: (0.425rem / 2);
		padding-top: 2.225rem;
		margin-left: .1rem;
		margin-right: .1rem;
		.box {
			width: 100%;
			height: 8.575rem;
			position: relative;
			.jd {
				width: 100%;
				height: 50%;
				background-image: url(color0.png);
				background-size: 100% 100%;
				position: absolute;
				bottom: 0;
				left: 0;
				&:after {
					content: '';
					display: block;
					width: 100%;
					height: .425rem;
					background-image: url(color0_top.png);
					background-size: 100% 100%;
					position: absolute;
					top: (-.425rem / 2);
					left: 0;
				}
				.title {
					width: 1.825rem;
					height: 2.225rem;
					background-image: url(color0_title.png);
					background-size: 100% 100%;
					color: white;
					font-size: 0.75rem;
					text-align: center;
					padding-top: .3rem;
					position: absolute;
					top: 0;
					left: 50%;
					transform: translate(-50%, -100%)translateY(-0.425rem / 2);
				}
			}
		}
		&.color0 {
			background-image: url(color0_top.png);
			.box {
				.jd {
					background-image: url(color0.png);
					&:after {
						background-image: url(color0_top.png);
					}
					.title {
						background-image: url(color0_title.png);
					}
				}
			}
		}
		&.color1 {
			background-image: url(color1_top.png);
			.box {
				.jd {
					background-image: url(color1.png);
					&:after {
						background-image: url(color1_top.png);
					}
					.title {
						background-image: url(color1_title.png);
					}
				}
			}
		}
		&.color2 {
			background-image: url(color2_top.png);
			.box {
				.jd {
					background-image: url(color2.png);
					&:after {
						background-image: url(color2_top.png);
					}
					.title {
						background-image: url(color2_title.png);
					}
				}
			}
		}
	}
</style>