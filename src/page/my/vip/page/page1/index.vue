<template>
	<div class="introduce1">
		<div class="des">
			<p>VIP会员可在<strong class="red">【命理】 、【风水】、【学堂】</strong>里</p>
			<p>免费使用以下功能内容。</p>
		</div>
		<ul class="list">
			<li v-for="(v,i) in list">
				<box :index="i" :title="v.title">
					<div class="content">
						<div class="l">
							<img :src="v.img" class="img" />
						</div>
						<div class="r">
							<p class="price"><span class="originalPrice">{{v.originalPrice}}&nbsp;&nbsp;</span><span class="vipPrice">{{v.vipPrice}}</span></p>
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
	import img4 from './img4.png'

	var component = {
		name: 'introduce1', //组件名称
		props: {},
		data: function() {
			return {
				list: [{
					title: '玄机密码',
					img: img1,
					originalPrice: '按次收费',
					vipPrice: '免费',
					text: ['运用周易的六十四卦象来测算出用户当前使用的号码好坏！', 'VIP会用可以不限次数的使用，还可以帮身旁的亲朋好友测算！'],
				}, {
					title: '八字择日',
					img: img2,
					originalPrice: '按次收费',
					vipPrice: '免费',
					text: ['精准的分析，结合八字挑选最适合用户结婚、开市、出行等黄道吉日！'],
				}, {
					title: '课程学习',
					img: img3,
					originalPrice: '按次收费',
					vipPrice: '免费',
					text: ['专业的命理风水老师多年经验总结录制成视频，内容囊括每年的生肖运势分析、居家风水布局、流年九宫飞星、流年太岁等知识点！'],
				}
//				, {
//					title: '生日修改',
//					img: img4,
//					originalPrice: '按次收费',
//					vipPrice: '免费',
//					text: ['修改生日，可以帮亲朋好友测算，一人付费，多人收益！'],
//				}
				],
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
				return import('../box');
			},
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
	.introduce1 {
		.des {
			font-size: 0.75rem;
			color: #3d1700;
			text-align: center;
			padding: 1rem 0;
			line-height: 1.5;
			.red {
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