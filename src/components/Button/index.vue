<template>
	<button :class="$style.button" @click="$emit('click',$event)" :disabled="disabled"><slot /></button>
</template>

<script>
	var component = {
		name: 'Button', //组件名称
		props: {
			disabled: {
				type: Boolean,
				'default': false,
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
	.button {
		display: inline-block;
		padding: 0.2em 0.4em;
		background-color: #f7f7f7;
		border: 0.0625em solid #dddee1;
		border-radius: .2em;
		color: inherit;
		font-size: inherit;
		&:focus {
			outline: none;
			box-shadow: 0 0 0 0.0625em rgba(45, 140, 240, .2);
		}
		&:disabled {
			color: #bbbec4;
			background-color: #f7f7f7;
			border-color: #dddee1;
		}
	}
</style>