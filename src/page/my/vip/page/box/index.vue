<template>
	<div class="box">
		<div class="index"><span>{{index|capitalize}}</span></div>
		<div class="title"><span>{{title}}</span></div>
		<div class="content">
			<slot />
		</div>
	</div>
</template>

<script>
	var component = {
		name: 'box', //组件名称
		props: {
			index: Number,
			title: String,
		},
		data: function() {
			return {

			};
		},
		computed: { //计算属性

		},
		watch: { //观察者

		},
		methods: { //事件方法

		},
		components: { //子组件

		},
		filters: {
			capitalize: function(value) {
				if(value < 9) {
					return '0' + (value + 1)
				} else {
					return(value + 1).toString()
				};
			},
		},
		beforeCreate: function() { //即将开始创vue实例

		},
		created: function() { //实例创建完毕

		},
		beforeMount: function() { //即将进行数据挂载

		},
		mounted: function() { //挂载完成插入页面

		},
		beforeUpdate: function() { //数据即将更新

		},
		updated: function() { //数据更新完成

		},
		beforeDestroy: function() { //即将销毁

		},
		destroyed: function() { //销毁完成

		},
	};
	export default component;
</script>

<style scoped lang="stylus">
	.box {
		padding: 0.35rem;
		padding-bottom: .7rem;
		background-color: #fffef7;
		.index {
			span {
				display: block;
				width: 2.625rem;
				height: 2.625rem;
				background-color: #e7ddc6;
				border-radius: 50%;
				line-height: 2.625rem;
				text-align: center;
				font-size: 1.5rem;
				font-weight: bold;
				color: #ff8400;
				margin: auto;
				position: relative;
				&:after {
					content: '';
					display: block;
					position: absolute;
					right: 0;
					bottom: 0;
					width: 2rem;
					height: 0.1rem;
					background-color: @color;
					transform: translateY(-0.9rem) translateX(0.6rem) rotateZ(-60deg);
				}
				&:before {
					content: '';
					display: block;
					position: absolute;
					right: 0;
					bottom: 0;
					width: 1rem;
					height: 0.1rem;
					background-color: @color;
					transform: translateY(-0.5rem) translateX(0.2rem) rotateZ(-60deg);
				}
			}
		}
		.title {
			text-align: center;
			margin-top: 0.75rem;
			span {
				display: inline-block;
				font-size: 1rem;
				color: #3d1700;
				position: relative;
				padding-bottom: .5rem;
				&:after {
					content: '';
					position: absolute;
					display: block;
					background-image: url(titlel.png);
					background-size: 100% 100%;
					width: 1.925rem;
					height: 0.95rem;
					bottom: 0;
					left: -@width;
				}
				&:before {
					content: '';
					position: absolute;
					display: block;
					background-image: url(titlel.png);
					background-size: 100% 100%;
					width: 1.925rem;
					height: 0.95rem;
					bottom: 0;
					right: -@width;
					transform: rotateY(180deg);
				}
			}
		}
		.content {
			margin-top: .5rem;
		}
	}
</style>