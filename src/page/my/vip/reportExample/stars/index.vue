<template>
	<ul :class="$style.stars">
		<li v-for="(v,i) in data">
			<title2 :class="$style.title">{{v.title}}</title2>
			<p :class="$style['color'+v.type]">
				<span v-for="(v,i) in v.content">{{v}}</span>
			</p>
		</li>
	</ul>
</template>

<script>
	var component = {
		name: 'stars', //组件名称
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
			title2() {
				return import('../title2')
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
	.stars {
		>li {
			display: flex;
			align-items: center;
			.title {
				flex: 0 0 auto;
			}
			>p {
				flex: 1 1 auto;
				margin-left: .5rem;
				display: flex;
				flex-wrap: wrap;
				align-items: center;
				>span {
					&:after {
						content: '、';
					}
					&:last-child {
						&:after {
							content: '';
						}
					}
				}
				&.color0 {
					color: #f12626;
				}
				&.color1 {
					color: #ab1fdf;
				}
				&.color2 {
					color: #3f96d3;
				}
			}
			+li {
				margin-top: .5rem;
			}
		}
	}
</style>