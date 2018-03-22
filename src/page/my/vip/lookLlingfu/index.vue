<template>
	<div :class="$style.chaKanLingFu">
		<ul :class="$style.list">
			<li v-for="(v,i) in imgList"><img :src="v" alt="" /></li>
		</ul>
	</div>
</template>

<script>
	var imgList = []
	for(var i = 0; i < 10; i++) {
		imgList.push(require('./images/img_' + i + '.png'))
	}

	var component = {
		name: 'chaKanLingFu', //组件名称
		props: {

		},
		data() {
			return {
				imgList: imgList,
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
			this.$emit('upTitle','灵符')
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
	.chaKanLingFu {
		.list {
			li {
				img {
					width: 100%;
					display: block;
				}
			}
		}
	}
</style>