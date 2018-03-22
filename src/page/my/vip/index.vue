<template>
	<div :class="$style.vip">
		<div :class="[$style.scrollBox,scrolling?$style.scrolling:'']" @scroll="scroll" ref="scrollBox">
			<div :class="$style.header">
				<Avatar :src="headicon" :class="$style.avatar" :vip="true"></Avatar>
				<div :class="$style.userBox">
					<p :class="$style.name">{{userData.nickname||'玄机风水'}}</p>
					<p :class="$style.desc" v-if="!share">
						<template v-if="userData.vip==1">
							您的VIP有效期到{{vip_past_time}}
						</template>
						<template v-else>
							开通<strong>VIP</strong>，享特权
						</template>
					</p>
				</div>
				<Button :class="$style.shareButton" v-if="!share" @click="openShare"><icon type="share"/>&nbsp;分享</Button>
			</div>
			<div :class="$style.details">
				<div :class="$style.desc">
					<p :class="$style.p1">总价值{{originalPrice}}元,现活动</p>
					<p :class="$style.p2">￥<strong>{{presentPrice}}</strong>立享一年<strong>VIP</strong>特权</p>
				</div>
				<div :class="[$style.gift,$style.gift0]">
					<div :class="$style.title">1</div>
					<p :class="$style.text">送价值￥238的先天运势报告寄到家 </p>
					<router-link :to="{name:'查看报告案例'}" :class="$style.btn" tag="button">查看报告案例>></router-link>
					<!--<Button :class="$style.btn">查看报告案例>></Button>-->
				</div>
				<div :class="[$style.gift,$style.gift1]">
					<div :class="$style.title">2</div>
					<ul :class="$style.giftList">
						<li v-for="(v,i) in gift">
							<img :src="v.img" />
							<p>{{v.title}}</p>
						</li>
					</ul>
					<p :class="$style.desc">(天师祖庙天师家族族长张明熹亲手画)</p>
					<router-link :to="{name:'查看灵符'}" :class="$style.btn" tag="button">查看灵符>></router-link>
					<!--<Button :class="$style.btn">查看灵符>></Button>-->
				</div>
			</div>
			<div :class="$style.btnbox">
				<ul :class="[$style.btnlist,btnlist_fixed?$style.fixed:'',btnlist_fixed&&scrolling?$style.scrolling:'']" ref="btnlist">
					<router-link :to="{params:{page: i},query:$route.query}" tag="li" v-for="(v,i) in btn" replace :key="i" :class="[$style.li,(page==i?$style.active:'')]">
						<!--<li v-for="(v,i) in btn">-->
						<p>
							<template v-if="typeof v === 'object'">
								{{v.value}}
							</template>
							<template v-else="">
								{{v}}
							</template>
						</p>
						<span :class="$style.corner" v-if="v.corner">{{v.corner}}</span>
						<!--</li>-->
					</router-link>
				</ul>
				<div :class="$style.btnListShadow" v-if="btnlist_fixed" :style="{height: btnlist_clientHeight+'px'}">

				</div>
			</div>
			<div :class="$style.introduceBox">
				<component :is="'page'+page"></component>
			</div>
		</div>
		<div :class="[$style.footer,scrolling?$style.scrolling:'']" v-if="userData.vip==0&&!share||1">
			<div :class="$style.text">
				<p>总价值：{{originalPrice}}</p>
				<p>一年VIP特权{{presentPrice}}</p>
			</div>
			<!--<router-link :to="{name:'原生-购买VIP'}" :class="$style.btn" tag="Button" >立即开通</router-link>-->
			<router-link :to="{name:'原生-我的主页'}" :class="$style.btn" tag="button">立即开通</router-link>
			<!--<Button :class="$style.btn">立即开通</Button>-->
		</div>
	</div>
</template>

<script>
	function getOffsetToRoot(el) {
		var obj = {
			offsetTop: el.offsetTop,
			offsetLeft: el.offsetLeft,
		};
		if(el.offsetParent) {
			var obj2 = getOffsetToRoot(el.offsetParent);
			obj.offsetTop += obj2.offsetTop;
			obj.offsetLeft += obj2.offsetLeft;
		}
		return obj;
	}

	function getScrollToRoot(el) {
		var obj = {
			scrollTop: el.scrollTop,
			scrollLeft: el.scrollLeft,
		};
		//		console.log(el);
		//		console.log(1, obj);
		if(el.parentElement) {
			var obj2 = getScrollToRoot(el.parentElement);
			//			console.log(2, obj2);
			obj.scrollTop += obj2.scrollTop;
			obj.scrollLeft += obj2.scrollLeft;
		}
		return obj;
	}

	//	console.log(process.env);
	var component = {
		name: 'vip', //组件名称
		props: {
			mobile: String,
			share: Boolean,
			page: {
				type: Number,
				'default': 0,
				validator: function(value) {
					return value >= 0 && value <= 5;
				},
			},
		},
		data() {
			return {
				userData: {},
				vip_past_time: '0000-00-00',
				originalPrice: 1088,
				presentPrice: 197,
				gift: [{
					img: require('./gift1.png'),
					title: '提问券×2',
				}, {
					img: require('./gift2.png'),
					title: '平安符或太岁符×1',
				}, {
					img: require('./gift3.png'),
					title: '玄玉9800',
				}],
				btn: ['测算特权', '功能特权', '折扣特权', '功能对比', {
					value: '亲子教育',
					corner: 'NEW'
				}, {
					value: '尊贵祈福',
					corner: 'NEW'
				}],
				btnActive: 0,
				btnlist_offsetTop: 0,
				btnlist_clientHeight: 0,
				btnlist_fixed: false,
				scrolling: false,
				scrolling_t: 0,

			};
		},
		computed: { //计算属性
			headicon() {
				if(this.userData.headicon) {
					return process.env.staticUrl + '/' + this.userData.headicon;
				} else {
					return require('@a/image/logo.png');
				}
			},
			shareData() {
				return {
					title: '分享标题', //分享标题
					desc: '分享描述', //分享描述
					link: 'http://xxxx.com', // 分享链接
					imgUrl: 'http://xxxx.png', // 分享图标
					fromType: 6, //分享来源类型，用于记录
				};
			},
		},
		watch: { //观察者
			userData(value) {
				console.log(value);
			},

		},
		components: { //子组件
			Avatar() {
				return import('@c/Avatar')
			},
			Button() {
				return import('@c/Button')
			},
			//			iButton(){
			//				return import('@c/iButton')
			//			},
			Icon() {
				return import('@c/Icon')
			},
			page0() {
				return import('./page/page0')
			},
			page1() {
				return import('./page/page1')
			},
			page2() {
				return import('./page/page2')
			},
			page3() {
				return import('./page/page3')
			},
			page4() {
				return import('./page/page4')
			},
			page5() {
				return import('./page/page5')
			},

		},
		methods: { //事件方法
			rightButtonClick() {
				alert('rightButtonClick')
			},
			scroll(event) {
				this.scrolling = true;
				clearTimeout(this.scrolling_t)
				this.scrolling_t = setTimeout((function() {
					this.scrolling = false;
				}).bind(this), 100);

				var scrollTop = event.target.scrollTop;
				if(this.btnlist_fixed) {
					if(scrollTop < this.btnlist_offsetTop) {
						this.btnlist_fixed = false;
					}
				} else {
					var btnlist = this.$refs.btnlist;
					var btnlist_offsetTop = getOffsetToRoot(btnlist).offsetTop;
					var btnlist_clientHeight = btnlist.clientHeight;
					if(scrollTop > btnlist_offsetTop) {
						this.btnlist_fixed = true;
						this.btnlist_offsetTop = btnlist_offsetTop;
						this.btnlist_clientHeight = btnlist_clientHeight;

					}
				}

			},
			openShare(event) {
				var vm = this;
				import('@a/js/appjs-sdk.js').then(function(appjs) {
					return appjs.openShare(vm.shareData).then(function(data) {
						console.log(data);
					}, function(data) {
						console.log(data);
					})
				});
			},
		},
		filters: { //过滤器

		},
		beforeRouteEnter(to, fo, next) { //即将进入路由
			next();
		},
		beforeCreate() { //即将开始创vue实例
			this.$emit('upTitle', 'VIP');
		},
		created() { //实例创建完毕
			var vm = this;
			import('@a/js/appjs-sdk.js').then(function(appjs) {
				appjs.getUserInfo().then(function(data) {
					vm.$set(vm, 'userData', data)
				});
				appjs.setRightButton({
					id: 1,
					text: '帮助说明'
				});
			})
		},
		beforeMount() { //即将进行数据挂载

		},
		mounted() { //挂载完成插入页面
			window.addEventListener('rightbuttonclick', this.rightButtonClick);
		},
		beforeRouteUpdate(to, fo, next) { //即将更新路由
			//			var vm = this;
			//			import('@a/js/appjs-sdk.js').then(function(appjs) {
			//				appjs.getUserInfo().then(function(data) {
			//					vm.$set(vm, 'userData', data)
			//				});
			//				appjs.setRightButton({
			//					id: 1,
			//					text: '帮助说明'
			//				});
			//			})
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
			window.removeEventListener('rightbuttonclick', this.rightButtonClick);
		},
		destroyed() { //销毁完成

		},
	};
	export default component;
</script>

<style module lang="stylus">
	.vip {
		height: 100%;
		display: flex;
		flex-direction: column;
		overflow: hidden;
		.scrollBox {
			flex: 1 1 auto;
			overflow: auto;
			position: relative;
			/*margin-bottom: 3.75rem;*/
			padding-bottom: 3.75rem;
			/*transition: all 500ms;*/
			&.scrolling {
				/*margin-bottom: 0;*/
				/*transition: all 500ms;*/
			}
			.header {
				background-image: url(./me_vip_bg.png);
				background-size: 100% 100%;
				padding: 0.625rem;
				display: flex;
				align-items: center;
				position: relative;
				.avatar {
					width: 4.65rem;
				}
				.userBox {
					margin-left: .5rem;
					margin-top: 1rem;
					.name {
						font-size: 0.875rem;
						color: #ff5f16;
					}
					.desc {
						margin-top: 0.5rem;
						font-size: 0.625rem;
						color: #b1926c;
						strong {
							color: red;
							font-size: .9rem;
						}
					}
				}
				.shareButton {
					position: absolute;
					top: 0;
					right: 0;
					top: 0.4rem;
					right: 0.3rem;
					background-color: #ffb05b;
					color: white;
					padding-left: .5rem;
					padding-right: @padding-left ;
				}
			}
			.details {
				background-image: url(./me_vip_bg2.png);
				background-size: 100% 100%;
				overflow: hidden;
				padding: 1rem 0;
				>.desc {
					color: #7d5522;
					/*margin-top: 1rem;*/
					font-weight: bold;
					text-align: center;
					text-shadow: 0 0.075em #fff7e0, 0.075em 0 #fff7e0, -0.075em 0 #fff7e0, 0 -0.075em #fff7e0, 0 0.15em rgba(65, 23, 0, .25);
					.p1 {
						font-size: 1rem;
					}
					.p2 {
						margin-top: 0.65rem;
						font-size: 1.3rem;
						strong {
							color: red;
						}
					}
				}
				.gift {
					margin-top: 1rem;
					.title {
						background-image: url(./title_num_bg.png);
						background-size: 100% 100%;
						text-align: center;
						color: white;
						height: 1.625rem;
						line-height: @height;
					}
					.btn {
						background-image: url(./btnbg.png);
						background-size: 100% 100%;
						width: 16.25rem;
						height: 2.625rem;
						color: white;
						font-size: 0.95rem;
						position: relative;
						background-color: transparent;
						border: none;
						margin-top: 1rem;
						display: block;
						margin: auto;
						margin-top: .5rem;
						&:after {
							content: '';
							display: block;
							position: absolute;
							top: 1rem;
							right: 1rem;
							/*transform: translate(-50%,0%);*/
							background-image: url(souzi.png);
							background-size: 100% 100%;
							width: 1.7rem;
							height: 2.6rem;
							animation: mymove 1s infinite alternate;
							@keyframes mymove {
								to {
									transform: translateY(.2rem);
								}
							}
						}
					}
				}
				.gift0 {
					.text {
						font-size: 0.864rem;
						color: #ff4200;
						text-align: center;
						margin-top: .5rem;
					}
				}
				.gift1 {
					.giftList {
						margin-top: .5rem;
						display: flex;
						/*padding: 0 1.25rem;*/
						>li {
							position: relative;
							width: (100%/3);
							text-align: center;
							>img {
								width: 4.5rem;
								height: @width;
								border: 0.25rem solid #f9d03d;
								border-radius: 50%;
								overflow: hidden;
								object-fit: contain;
								background-image: linear-gradient(#aca793, #a2895c);
							}
							>p {
								font-size: 0.72rem;
								color: #ff4200;
								margin-top: 0.25rem;
							}
							+li:before {
								content: '+';
								position: absolute;
								top: 1.8rem;
								left: -0.4rem;
								color: #ec9916;
								font-size: 1.2rem;
							}
						}
					}
					>.desc {
						text-align: center;
						font-size: 0.625rem;
						color: #8a4b00;
						margin-top: 0.375rem;
					}
				}
			}
			.btnbox {
				margin-top: 0.35rem;
				background-image: url(./title1.png);
				background-size: 100% auto;
				background-repeat: no-repeat;
				background-position: top center;
				padding-top: 3.975rem;
				position: relative;
				.btnlist {
					display: flex;
					flex-wrap: wrap;
					align-items: center;
					padding: .5rem;
					position: relative;
					&.fixed {
						position: fixed;
						/*position: absolute;*/
						top: 0;
						left: 0;
						width: 100%;
						z-index: 1;
						background-color: #fff;
						transition: all 500ms;
						/*transition-property: all;*/
						/*transition-duration: 500ms;*/
						&.scrolling {
							transform: translateY(-100%);
							/*transition: all 500ms;*/
						}
					}
					li {
						jg=.5rem;
						width: "calc((100% - %s)/3)" % (jg*2);
						margin-left: jg;
						margin-top: jg;
						background-color: #ff8400;
						color: white;
						padding: 0.4rem;
						text-align: center;
						border-radius: 0.5rem;
						box-shadow: 0 0.1rem rgba(106, 52, 9, 0.5);
						font-size: 1rem;
						font-weight: bold;
						overflow: hidden;
						position: relative;
						cursor: pointer;
						transform-style: preserve-3d;
						&:nth-of-type(3n+1) {
							margin-left: 0;
						}
						&:nth-of-type(-n+3) {
							margin-top: 0;
						}
						&.active {
							background-color: #954300;
						}
						&:active {
							transform: translateY(.1rem);
						}
						.corner {
							position: absolute;
							display: block;
							width: 2rem;
							background-color: red;
							font-size: 0.4rem;
							text-align: center;
							padding: .5rem 0 0 0;
							top: 0;
							right: 0;
							transform: translateX(50%)translateY(-50%)rotateZ(45deg)translateY(50%);
						}
					}
				}
				.btn-list-shadow {}
			}
			.introduceBox {
				margin-top: 0.35rem;
				background-image: url(./title1.png);
				background-size: 100% auto;
				background-repeat: no-repeat;
				background-position: top center;
				padding-top: 3.975rem;
			}
		}
		.footer {
			flex: 0 0 auto;
			border-top: 0.05rem solid #eee;
			display: flex;
			padding: .5rem;
			align-items: center;
			position: absolute;
			bottom: 0;
			left: 0;
			width: 100%;
			background-color: #fff;
			transition: all 500ms;
			&.scrolling {
				transform: translateY(100%);
				/*transition: all 500ms;*/
			}
			.text {
				flex: 1 1 auto;
				text-align: center;
				p:first-child {
					color: #946c5b;
					font-size: 0.75rem;
					text-decoration: line-through;
				}
				p:last-child {
					margin-top: 0.5rem;
					color: #ff9d33;
					font-size: 0.9rem;
				}
			}
			.btn {
				margin-left: 1rem;
				flex: 0 0 auto;
				font-size: 1rem;
				color: white;
				background-color: #ff9d33;
				padding: 0.5rem 1.5rem;
				border: none;
				border-radius: .2rem;
				&:focus {
					outline: none;
				}
			}
		}
	}
</style>