<template>
	<div class="introduce4">
		<div class="des">
			<p>成为VIP，获取亲子教育的<strong class="red">专属秘笈</strong></p>
		</div>
		<ul class="list">
			<li v-for="(v,i) in list">
				<box :index="i" :title="v.title">
					<div class="content">
						<div class="l">
							<img :src="v.img" class="img" />
						</div>
						<div class="r">
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
		name: 'introduce4', //组件名称
		props: {},
		data: function() {
			return {
				list: [{
					title: '了解自己的小孩',
					img: img1,
					text: ['你真的了解自己的小孩吗？Ta是活泼好动？还是天赋异禀呢？','运用紫微斗数，全面分析子女的个性、能力及性格'],
				}, {
					title: '培养TA的交际能力',
					img: img2,
					text: ['交际能力是指人在发展过程中起着重要作用的一种能力。','提前知道子女的交际能力，有针对性的进行引导、教育'],
				}, {
					title: '发掘TA的潜力',
					img: img3,
					text: ['人的潜能是发掘出来的，想靠它自己呈现出来还是比较困难','发掘子女的情商能力，发掘子女的IQ能力培养子女的理财能力'],
				}, {
					title: '给父母的建议',
					img: img4,
					text: ['江山易改本性难移，孩子的成长很快，不能从小培养，长大了就很难再改变了','结合小孩的分析，给与其父母一些建议。'],
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
	.introduce4 {
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