<template>
	<label :class="$style.radioWrap">
		<i v-if="icon" :class="{[$style.radio]:true,[$style.checked]:isChecked,[$style.disabled]:disabled}"></i>
		<input :class="$style.radioInput" type="Radio" :name="name" :value="value" :checked="isChecked" @change="$emit('change',value)" :disabled="disabled"/>
		<slot :checked="isChecked" :value="value"/>
	</label>
</template>

<script>
	var component = {
		name: 'Radio', //组件名称
		model: {
			prop: 'checked',
			event: 'change'
		},
		props: {
			name: String,
			value: {
				type: null,
				'default': true,
			},
			checked: {
				type: null,
				'default': false,
			},
			disabled: {
				type: Boolean,
				'default': false,
			},
			icon: {
				type: Boolean,
				'default': true,
			},
		},
		data() {
			return {

			};
		},
		computed: { //计算属性
			isChecked() {
				return this.value === this.checked;
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
	.radio-wrap {
		display: inline-block;
		.radio {
			vertical-align: -0.15em;
			display: inline-block;
			width: 1em;
			height: 1em;
			border: 0.05rem solid #ddd;
			border-radius: 50%;
			position: relative;
			transition: border-color .3s;
			background-color: #fff;
			&:after {
				position: relative;
				content: '';
				display: block;
				width: 0;
				height: 0;
				transition: all .3s;
				top: 50%;
				left: 50%;
				transform: translate(-50%, -50%);
				background-color: #2d8cf0;
				border-radius: 50%;
			}
			&.checked {
				border-color: #2d8cf0;
				&:after {
					width: 60%;
					height: @width;
				}
			}
			&.disabled {
				border-color: #ddd;
				background-color: #f3f3f3;
				&.checked {
					&:after {
						background-color: #ccc;
					}
				}
			}
		}
		.radio-input {
			display: none;
		}
	}
</style>