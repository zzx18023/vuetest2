<template>
	<div class="reportExample" @scroll="scrollfn">
		<div class="Sbox">
			<header class="header">
				<div class="box">
					<p class="name">{{name}}</p>
					<p class="birthday">{{birthday}}</p>
				</div>
			</header>
			<ul class="nav" :class="{shrink:shrink,fixed:navfixed,visibility:!navfixed||navV}" ref="nav" @transitionend="upnavH" >
				<li v-for="(v,i) in navBtn" :class="{active:i==navActive}" @click="navActive=i">{{v}}</li>
				<i class="jt" @click="shrink=!shrink"></i>
			</ul>
			<div class="nav-shadow" :style="{height:navH+'px'}">

			</div>
			<component :is="'nav'+navActive" />
		</div>
		<div class="sample"></div>
	</div>
</template>

<script>
	var component = {
		name: 'reportExample', //组件名称
		props: {

		},
		data() {
			return {
				name: '刘大力（男）',
				birthday: '阳历1985年2月11日丑时',
				shrink: false,
				navBtn: ['命宫详解', '兄弟宫详解', '夫妻宫详解', '子女宫详解', '财帛宫详解', '疾厄宫详解', '迁移宫详解', '交友宫详解', '官禄宫详解', '田宅宫详解', '福德宫详解', '父母宫详解'],
				navActive: 0,
				navfixed: false,
				navT: 0,
				navH: 0,
				navV: true,
				jsq: 0,
			};
		},
		computed: { //计算属性

		},
		watch: { //观察者

		},
		components: { //子组件
			nav0() {
				return import('./nav0')
			},
			nav1() {
				return import('./nav1')
			},
			nav2() {
				return import('./nav2')
			},
			nav3() {
				return import('./nav3')
			},
			nav4() {
				return import('./nav4')
			},
			nav5() {
				return import('./nav5')
			},
			nav6() {
				return import('./nav6')
			},
			nav7() {
				return import('./nav7')
			},
			nav8() {
				return import('./nav8')
			},
			nav9() {
				return import('./nav9')
			},
			nav10() {
				return import('./nav10')
			},
			nav11() {
				return import('./nav11')
			},
		},
		methods: { //事件方法
			scrollfn(event) {
				var s = event.target.scrollTop;
				if(this.navfixed) {
					if(s < this.navT) {
						this.shrink = false;
						this.navfixed = false;
						this.navH = 0;
						this.navT = 0;
					}
					this.navV = false;
					if(this.jsq) {
						clearTimeout(this.jsq);
					}
					this.jsq = setTimeout((function() {
						this.navV = true;
						this.jsq=0;
					}).bind(this),100);
				} else {
					var rem = window.innerWidth / 375 * 20;
					var nt = this.$refs.nav.offsetTop + (rem * 2);
					if(s > nt) {
						this.shrink = true;
						this.navfixed = true;
						this.navH = this.$refs.nav.clientHeight;
						this.navT = nt;
					}
				}
			},
			upnavH(event) {
				if(this.navfixed) {
					this.navH = this.$refs.nav.clientHeight;
				}
			},
		},
		filters: { //过滤器

		},
		beforeRouteEnter(to, fo, next) { //即将进入路由
			next();
		},
		beforeCreate() { //即将开始创vue实例
			var vm = this;
			vm.$emit('upTitle', '完整的报告示例');
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

<style scoped lang="stylus">
	.reportExample {
		height: 100%;
		overflow-y: auto;
		.Sbox {
			background-color: #f5f4ec;
			position: relative;
			background-image: url(bgb.png);
			background-size: 100% auto;
			background-repeat: no-repeat;
			background-position: bottom;
			padding-bottom: 2rem;
			.header {
				background-image: url(headerBg.png);
				background-size: 100% auto;
				height: 6.875rem;
				overflow: auto;
				.box {
					width: 11.575rem;
					height: 4.2rem;
					background-image: url(headerBox.png);
					background-size: 100% 100%;
					margin: auto;
					margin-top: 2.125rem;
					text-align: center;
					font-size: 0.9rem;
					padding-top: 0.65rem;
					line-height: 1.5;
				}
			}
			.nav {
				height: 15.05rem;
				background-image: url(navBg.png);
				background-size: 100% auto;
				display: flex;
				flex-wrap: wrap;
				align-content: flex-start;
				justify-content: center;
				padding-top: 2.5rem;
				position: relative;
				transition: height .3s,opacity .3s;
				overflow: hidden;
				&.fixed {
					position: fixed;
					top: -2rem;
					left: 0;
					width: 100%;
					z-index: 2;
				}
				opacity: 0;
				&.visibility{
					opacity: 1;
				}
				>li {
					background-image: url(navBtn.png);
					background-size: 100% 100%;
					width: 5.825rem;
					height: 1.825rem;
					margin-top: 1.3rem;
					margin-left: 0.325rem;
					padding: 0.5rem;
					text-align: center;
					color: #6d2b19;
					transition: all .3s;
					&.active {
						background-image: url(navBtna.png);
						color: #fff4b7;
					}
					&:nth-of-type(-n+3) {
						margin-top: 0;
					}
					&:nth-of-type(3n+1) {
						margin-left: 0;
					}
				}
				.jt {
					background-image: url(jt.png);
					background-size: 100% 100%;
					width: 0.975rem;
					height: 0.975rem;
					position: absolute;
					bottom: .2rem;
					left: 50%;
					transform: translateX(-50%);
					transition: transform .3s;
					animation: mymove 1s infinite alternate;
					@keyframes mymove {
						to {
							bottom: 0rem;
						}
					}
				}
				&.shrink {
					height: 5.6rem;
					.jt {
						transform: translateX(-50%)rotateZ(180deg);
					}
				}
			}
			.nav-shadow {
				/*transition: height .3s;*/
			}
		}
		.sample{
			width: 6.525rem;
			height:5.2rem;
			position: fixed;
			bottom: 2rem;
			left: 50%;
			transform: translate(-50%,0);
			/*background-color: rgba(0,0,0,.5);*/
			z-index: 2;
			pointer-events: none;
			background-image: url(./shili.png);
			background-size: 100% 100%;
		}
	}
</style>