<template>
	<label :class="$style.checkboxWrap">
		<i  v-if="icon" :class="{[$style.checkbox]:true,[$style.checked]:isChecked&&!indeterminate,[$style.disabled]:disabled,[$style.indeterminate]:indeterminate}"></i>
		<input type="checkbox" :class="$style.checkboxInput" :value="value" :checked="isChecked" @change="inputChange" :disabled="disabled"/>
		<slot :checked="isChecked"/>
	</label>
</template>

<script>
	var component = {
		name: 'Checkbox', //组件名称
		model: {
			prop: 'checked',
			event: 'change',
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
			indeterminate: {
				type: Boolean,
				'default': false,
			},
		},
		data() {
			return {

			};
		},
		computed: { //计算属性
			isChecked() {
				if(this.checked instanceof Array) {
					return this.checked.includes(this.value);
				} else {
					return this.value === this.checked;
				};
			},
		},
		watch: { //观察者

		},
		components: { //子组件

		},
		methods: { //事件方法
			inputChange(event) {
				if(this.checked instanceof Array) {
					if(this.checked.includes(this.value)) {
						this.checked.splice(this.checked.indexOf(this.value), 1);
					} else {
						this.checked.push(this.value);
					};
					this.$emit('change', this.checked);
				} else {
					this.$emit('change', event.target.checked);
				}
			}
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
	.checkbox-wrap {
		display: inline-block;
		position: relative;
		.checkbox {
			vertical-align: -0.15em;
			display: inline-block;
			width: 1em;
			height: 1em;
			border: 0.05em solid #ddd;
			position: relative;
			transition: all .3s;
			background-color: #fff;
			&:after {
				content: '';
				position: absolute;
				display: block;
				width: 0;
				height: 0;
				transition: transform 0s,border .3s,width .3s,height .3s,background .3s;
				top: 50%;
				left: 50%;
				transform: translate(-50%, -50%)rotateZ(0deg);
				/*background-color: #2d8cf0;*/
			}
			&.checked {
				border-color: #2d8cf0;
				&:after {
					width: 100%;
					height: 50%;
					/*background-color: transparent;*/
					border-left: 0.1em solid #2d8cf0;
					border-bottom: @border-left;
					transform: translate(-40%, -100%)rotateZ(-45deg);
					/*transform: translate(0, 0)rotateZ(-45deg);*/
				}
			}
			&.indeterminate {
				/*background-color: salmon;*/
				border-color: #2d8cf0;
				&:after {
					width: 80%;
					height: 30%;
					background-color: #2d8cf0;
					/*border: none;*/
					transform: translate(-50%, -50%);
				}
			}
			&.disabled {
				border-color: #ddd;
				background-color: #f3f3f3;
				&:after {
					border-color: #ccc;
				}
				&.indeterminate {
					&:after {
						background-color: #ccc;
					}
				}
			}
		}
		.checkbox-input {
			display: none;
		}
		
	}
</style>