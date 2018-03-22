<template>
	<div :class="$style.avatarWrap">
		<proportional-box :Proportion="207/186">
			<div :class="{[$style.avatar]:true,[$style.vip]:vip}">
				<div :class="$style.imgBox">
					<proportional-box :Proportion="1">
						<img :src="src" alt="avatar" :class="$style.img" />
					</proportional-box>
				</div>
			</div>
		</proportional-box>
	</div>
</template>

<script>
	var component = {
		name: 'Avatar', //组件名称
		props: {
			src: {
				type: String,
			},
			vip: {
				type: Boolean,
				'default' () {
					return false;
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
			ProportionalBox() {
				return import('@c/ProportionalBox')
			}
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
	.avatar-wrap {
		.avatar {
			width: 100%;
			height: 100%;
			position: relative;
			&.vip:after {
				content: '';
				display: block;
				background-image: url(./VipBorder.png);
				background-size: 100% 100%;
				position: absolute;
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;
			}
			.img-box {
				position: absolute;
				width: 80%;
				top: 50%;
				left: 50%;
				transform: translate(-50%, -46%);
				.img {
					/*padding: 19% 10% 12% 10%;*/
					width: 100%;
					height: 100%;
					border-radius: 50%;
					object-fit: cover;
				}
			}
		}
	}
</style>