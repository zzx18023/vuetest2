<template>
	<div class="introduce2">
		<div class="des">
			<p>成为VIP，你还可以获得以下专属的<strong class="red">尊贵福利</strong></p>
		</div>
		<ul class="list">
			<li v-for="(v,i) in list">
				<box :index="i" :title="v.title">
					<div class="content">
						<div class="l">
							<img :src="v.img" class="img" />
						</div>
						<div class="r">
							<p class="price"><span class="originalPrice" v-if="v.originalPrice">{{v.originalPrice}}&nbsp;&nbsp;</span><span class="vipPrice">{{v.vipPrice}}</span></p>
							<div class="text">
								<p v-for="(v,i) in v.text">{{v}}</p>
							</div>
						</div>
					</div>
				</box>
			</li>
		</ul>
	</div>
</template>

<script>
	import img1 from './img1.png'
	import img2 from './img2.png'
	import img3 from './img3.png'

	var component = {
		name: 'introduce2', //组件名称
		props: {},
		data: function() {
			return {
				list: [{
					title: 'VIP 专属 送【平安符 或 太岁符】',
					img: img1,
					originalPrice: '',
					vipPrice: '结缘无价',
					text: ['只有在此页面直接开通成为VIP一年的用户，才送：天师祖庙天师家族族长张明熹亲手画制的【平安符 或 太岁符】一张'],
				}, {
					title: 'VIP 专属 8折优惠',
					img: img2,
					originalPrice: '原价',
					vipPrice: '八折',
					text: ['所有商品 8折优惠','后续不定期还会提供跟多的优惠折扣','甚至是更多的折扣服务内容哦！'],
				}, {
					title: 'VIP 专属  双倍收益',
					img: img3,
					originalPrice: '5%收益',
					vipPrice: '10% 收益',
					text: ['分享邀请的好友，每次消费都能有10%的收益，收益没有上限！！！'],
				}],
			};
		},
		computed: { //计算属性

		},
		watch: { //观察者

		},
		methods: { //事件方法

		},
		components: { //子组件
			box() {
				return import('../box')
			}

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
	.introduce2 {
		.des {
			font-size: 0.75rem;
			color: #3d1700;
			text-align: center;
			padding: 1rem 0;
			line-height: 1.5;
			strong {
				color: red;
			}
		}
		.list {
			li {
				.content {
					display: flex;
					.l {
						width: 9.025rem;
						flex: 0 0 auto;
						.img {
							width: 100%;
						}
					}
					.r {
						flex: 1 1 auto;
						margin-left: 0.5rem;
						.price {
							margin-top: .5rem;
							text-align: center;
							.originalPrice {
								font-size: 0.75rem;
								color: #ff7e00;
								text-decoration: line-through;
							}
							.vipPrice {
								margin-left: .5rem;
								font-size: 0.9rem;
								color: red;
							}
						}
						.text {
							margin-top: .5rem;
							color: #2b1705;
							font-size: 0.75rem;
							line-height: 1.5;
							p {
								text-indent: 2em;
							}
						}
					}
				}
				&:nth-of-type(2n) {
					.content {
						>.l {
							margin-left: 0.5rem;
							order: 2;
						}
						>.r {
							margin-left: 0;
						}
					}
				}
				+li {
					margin-top: 0.3rem;
				}
			}
		}
	}
</style>