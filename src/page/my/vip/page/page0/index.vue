<template>
	<div class="introduce0">
		<div class="des">
			<p>VIP会员可在【命理】 → 紫微斗数、八字命盘里</p>
			<p>免费查看自己的以下命格内容。</p>
		</div>
		<ul class="list">
			<li v-for="(v,i) in list">
				<box :index="i" :title="v.title" :key="i">
					<img :src="v.img" class="img" />
					<p class="price"><span class="originalPrice">&nbsp;&nbsp;价值：</span><span class="originalPrice">{{v.originalPrice}}&nbsp;&nbsp;</span><span class="vipPrice">{{v.vipPrice}}</span></p>
					<p class="text">{{v.text}}</p>
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
		name: 'introduce0', //组件名称
		props: {

		},
		data: function() {
			return {
				list: [{
					title: '张译之- 紫微先天运势报告',
					img: img1,
					originalPrice: 238,
					vipPrice: '免费',
					text: '流年是算命的传统习俗，总结一年的得失，规划来年的美景。VIP专属特权，每年率先免费看到张译之老师精批的流年运势，包含流年详批、流年爱情、流年财运、流年事业、及12个月份的运势提醒，助您流年大吉！',
				}, {
					title: '张译之- 紫微先天命格详解',
					img: img2,
					originalPrice: 58,
					vipPrice: '免费',
					text: '是史上最完整、最正面的紫微命盘分析，针对命盘里的命宫、财富、官禄、夫妻，疾厄宫等以正确的现代观点剖析您的命盘，供您细心参考体会，让您对人生的各个面向有更明晰的认知，并提供老师建议给你参考。',
				}, {
					title: '张译之- 玄机锦囊',
					img: img3,
					originalPrice: 38,
					vipPrice: '免费',
					text: '生死由命，富贵在天。命由天定，运可改变，风水即不违背自然，这些都是外部的力量，人可以决定的是去积善成德，学习文化，学习做人，研读圣书。',
				}, {
					title: '张译之- 八字流年大运详解',
					img: img4,
					originalPrice: 38,
					vipPrice: '免费',
					text: '八字测算是传统文化中最古老而又最准确的算命方法，张译之老师通过将一个人的出生年月日时进行八字排盘变成由天干、地支所组成的八个字，再对这八个字的五行相生、十神关系等进行分析，测算出人一生的财运、婚姻、事业、健康等等。',
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
	.introduce0 {
		.des {
			font-size: 0.75rem;
			color: #3d1700;
			text-align: center;
			padding: 1rem 0;
			line-height: 1.5;
		}
		.list {
			li {
				.img {
					width: 100%;
				}
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
				}
				+li {
					margin-top: 0.3rem;
				}
			}
		}
	}
</style>