<template>
	<div class="introduce5">
		<div class="des">
			<p><strong>VIP</strong>独享的尊贵祈福<strong>尊贵祈福</strong></p>
		</div>
		<ul class="list">
			<li v-for="(v,i) in list">
				<box :index="i" :title="v.title">
					<div class="content">
						<div class="l">
							<img :src="v.img" class="img" />
						</div>
						<div class="r">
							<p class="price"><span class="originalPrice" v-if="v.originalPrice">{{v.originalPrice}}&nbsp;&nbsp;</span><span class="vipPrice" v-if="v.vipPrice">{{v.vipPrice}}</span></p>
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
	var component = {
		name: 'introduce5', //组件名称
		props: {},
		data: function() {
			return {
				list: [{
					title: '祈福法会',
					img: img1,
					originalPrice: '',
					vipPrice: '福缘无价',
					text: ['万寿宫有祈福法会时，会对当年有效的VIP用户，进行免费祈福'],
				}, {
					title: '接财神法会',
					img: img2,
					originalPrice: '',
					vipPrice: '福缘无价',
					text: ['万寿宫每年对当年有效的VIP会员，大年初五进行免费接财神法会'],
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
	.introduce5 {
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