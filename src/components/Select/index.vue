<template>
	<div :class="$style.select" tabindex="-1" @focus="optionv=true" @blur="optionv=false">
		<input type="text" :value="value" :class="$style.selectInput" :readonly="true" @focus="optionv=true" @blur="optionv=false" />
		<div :class="[$style.optionBox,upClass]" v-if="optionv" ref="optionBox">
			<slot />
		</div>
	</div>
</template>

<script>
	function getOffsetFormRoot(dom) {
		var {
			offsetTop,
			offsetLeft,
			offsetParent,
			scrollTop,
			scrollLeft,
		} = dom;

		var rData = {
			offsetTop: offsetTop - scrollTop,
			offsetLeft: offsetLeft - scrollLeft,
		};
		if(offsetParent) {
			var offsetParent_off = getOffsetFormRoot(offsetParent);
			rData.offsetTop += offsetParent_off.offsetTop;
			rData.offsetLeft += offsetParent_off.offsetLeft;
		};
		return rData;
	};
	var component = {
		name: 'Select', //组件名称
		model: {
			prop: 'value',
			event: 'change',
		},
		props: {
			value: null,
			data: {
				type: Array,
				'default': [],

			},
		},
		data() {
			return {
				optionv: false,
				up: false,
			};
		},
		computed: { //计算属性
			upClass() {
				if(this.up) {
					return this.$style.up
				} else {
					return this.$style.down
				}
			},
		},
		watch: { //观察者
			optionv(value) {
				if(value) {
					var el = this.$el;
					console.dir(el);
					console.log(this.$refs.optionBox);
					//XXX 初始化时optionBox不存在
					var el_h = el.clientHeight;
					var el_b = getOffsetFormRoot(el).offsetTop + el_h+this.$refs.optionBox.clientHeight;
					console.log(el_b);
					var v_b = document.documentElement.scrollTop + document.documentElement.clientHeight;
					this.up = el_b > v_b;
				};
			},
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
	.select {
		/*cursor: pointer;*/
		display: inline-block;
		width: 10rem;
		/*border: 0.05rem solid #ccc;*/
		position: relative;
		border-radius: 0.2rem;
		box-shadow: 0 0.05rem 0.075rem rgba(0, 0, 0, .2);
		background-color: white;
		&:focus {
			outline: none;
		}
		.select-input {
			display: block;
			width: 100%;
			height: 100%;
			border: none;
			background-color: transparent;
			padding: .25rem;
			border-radius: 0.2rem;
			&:focus {
				outline: none;
			}
		}
		.option-box {
			width: 100%;
			max-height: 10rem;
			overflow: auto;
			position: absolute;
			/*left: 0;*/
			background-color: white;
			border-radius: 0.2rem;
			&.down {
				top: calc(100% + 0.05rem);
			}
			&.up {
				bottom: calc(100% + .052rem);
			}
		}
	}
</style>