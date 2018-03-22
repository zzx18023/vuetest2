<template>
	<div :class="$style.nav3">
		<div :class="$style.titleImg">
			<img src="./title0.png" />
		</div>
		<box :class="[$style.box,$style.box0]">
			<div :class="$style.pendant"></div>
			<span slot="title">子女宫</span>
			<p v-for="(v,i) in data.content0" v-html="v" :class="$style.p"></p>
		</box>
		<div :class="$style.titleImg">
			<img src="./title1.png" />
		</div>
		<box :class="[$style.box,$style.box1]">
			<stars :data="data.content1"></stars>
		</box>
		<div :class="$style.titleImg">
			<img src="./title2.png" />
		</div>
		<box :class="[$style.box,$style.box2]">
			<div :class="$style.pendant"></div>
			<p v-for="(v,i) in data.content2" v-html="v" :class="$style.p"></p>
		</box>
		<div :class="$style.titleImg">
			<img src="./title3.png" />
		</div>
		<box :class="[$style.box,$style.box3]">
			<div :class="$style.pendant"></div>
			<p v-for="(v,i) in data.content3" v-html="v" :class="$style.p"></p>
		</box>
		<div :class="$style.titleImg">
			<img src="./title4.png" />
		</div>
		<box :class="[$style.box,$style.box4]" v-for="(v,i) in data.content4" :key="i">
			<p v-html="v" :class="$style.p"></p>
		</box>
		<div :class="$style.titleImg">
			<img src="./title5.png" />
		</div>
		<box :class="[$style.box,$style.box5]">
			<ColumnarGraphGroup :data="data.content5"></ColumnarGraphGroup>
		</box>
		<box :class="[$style.box,$style.box6]" v-for="(v,i) in data.content5" :key="'box6'+i">
			<p :class="$style.title">
				<span>{{v.title}}</span>
			</p>
			<div :class="[$style.num,$style['color'+i]]">
				{{v.value}}
			</div>
			<p v-html="v.content" :class="$style.p"></p>
		</box>
	</div>
</template>

<script>
	var component = {
		name: 'nav3', //组件名称
		props: {

		},
		data() {
			return {
				data: {
					content0: [
						'子女宫用来判断个人子女的多寡，子女的个性、资质、学识、成就、发展、健康以及子女是否孝顺和自己的缘分深浅如何，而子女宫与田宅宫有很深的渊源，居家生活的状况优劣直接影响到子女的先后天生活情况，同时用来判断自己的性欲和性生活情况；',
						'同时子女宫也来判断个人的合作运程及上下属的关系，尤其是下属及团队发展状况，也表示未来你的企业下属是否得力、团队下级是否有助等情况，也是夫妻感情和家运的润滑剂；',
					],
					content1: [{
						title: '命宫主星',
						content: ['太阳天梁'],
						type: 0,
					}, {
						title: '主要辅星',
						content: ['文昌', '天喜', '天德', '天福', '化忌', '截空', '咸池', '喜神'],
						type: 1,
					}, {
						title: '三方宫主星',
						content: ['太阴'],
						type: 0,
					}, {
						title: '三方宫辅星',
						content: ['左辅', '文曲', '天魁', '擎羊', '火星', '陀罗', '红鸾'],
						type: 1,
					}],
					content2: [
						'您和子女的缘分比较淡薄，尤其儿子，且能够生儿子的概率极低，一旦运程得到儿子则个人运程被刑冲，子女的个性比较直爽，一生行事有正义感，眼睛揉不得沙子，不能接受别人的背叛，对诸事有自我的绝对主观判断，但内心较为固执，自己所认可的事宜即使再大的风险也要进入，往往会在37岁之前面临较大的坎坷和磨难，后天运程可以从事教育、演讲、营销、餐饮、宗教、命理师类职业，只要多做教导可成就非凡；',
					],
					content3: [
						'您的子女宫由于化忌入主，添丁添富贵比较难，子嗣无多且易有先天的遗传疾病，尤其在心脏、脑、血管方面，逢天喜、擎羊、火星、陀罗会照三方四正宫，一般没有疾病，若遇到流年或大限运程不佳，则容易有突发病或中风、脑供血不足的现象，而在个人三高问题需要做好保养和调理，未来子女宫运程走到鸡年、兔年都会受到煞星的冲击而健康有碍；',
					],
					content4: [
						'由于子女宫的太阳化忌，所以后天个人多去西方国家或地区，居住宜南方或西南方补助命局所缺乏的火，而在个人修行方面需要多提升心态和大脑的精神层次来缓解火忌的危害；',
					],
					content5: [{
						title: '添丁添富指数',
						value: 58,
						content: '子女宫化忌逢截空，个人桃花旺且在两性方面有相当多的机会，但添丁增富贵的机率比较低，子嗣不多，您的伴侣身体易有障碍，同样个人在生殖方面的保健需要加强，而子嗣大多都是债主，需要您给孩子的付出比较多，而子女的运程受到你的影响也较为坎坷；',
					}, {
						title: '期望值及成就指数',
						value: 65,
						content: '个人对子女较为器重，希望自己的能力和产业能够得子嗣继承，望子成龙望女成凤的心态极其强，但是遗憾子女的成就并不能完全名利双收，一生更加看重子女的健康和名气即可，整体获得精神上的满足感和他人的认可则就会有成就；',
					}, {
						title: '子女沟通管教指数',
						value: 72,
						content: '您的个性是非常高傲和主观的，而内心的掌控欲很强，总是有很强的强加思维，20岁之前能够很好沟通，但是一旦子女思想成熟便个性十足，难以管教，往往从十几岁开始就学会教导您，所以总有老大的思维和做派；',
					}],
				},
			};
		},
		computed: { //计算属性
			data_computed() {
				return {

				}
			}
		},
		watch: { //观察者

		},
		components: { //子组件
			titleImg() {
				return import('../titleImg')
			},
			box() {
				return import('../box')
			},
			stars() {
				return import('../stars')
			},
			ColumnarGraphGroup() {
				return import('../ColumnarGraphGroup')
			}

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
	.nav3 {
		padding-left: .5rem;
		padding-right: @padding-left;
		overflow-x: hidden;
		.title-img {
			margin-top: .5rem;
			img {
				width: 100%;
				display: block;
			}
		}
		.box {
			margin-top: 1rem;
			.p {
				position: relative;
				strong {
					color: red;
					text-decoration: underline;
				}
			}
			&.box0 {
				margin-top: 2rem;
				.pendant {
					width: 2.4rem;
					height: 3.125rem;
					background-image: url(./pendant0.png);
					background-size: 100% 100%;
					position: absolute;
					top: 0;
					right: 0;
					z-index: 0;
					transform: translate(0%, -50%);
				}
			}
			&.box1 {}
			&.box2 {
				.pendant {
						width: 2.4rem;
					height: 3.125rem;
					background-image: url(./pendant0.png);
					background-size: 100% 100%;
					position: absolute;
					bottom: 0;
					right: 0;
					z-index: 0;
					transform: translate(0%, 10%);
				}
			}
			&.box3 {
				padding-bottom: 3rem;
				.pendant {
					width: 17.675rem;
					height: 2.475rem;
					background-image: url(./pendant1.png);
					background-size: 100% 100%;
					position: absolute;
					bottom: 0;
					left: 0;
					z-index: 0;
					transform: translate(0%, 0%);
				}
			}
			&.box2,
			&.box3,
			&.box4 {
				.p {
					strong {
						color: red;
						text-decoration: underline;
					}
					+.p {
						margin-top: .5rem;
					}
				}
			}
			&.box6 {
				.title {
					text-align: center;
					span {
						display: inline-block;
						position: relative;
						padding: 0 2rem;
						&:after {
							content: '';
							display: inline-block;
							width: 1.75rem;
							height: 0.9rem;
							background-image: url(../TransverseProgressBarTitle/titleIcon.png);
							background-size: 100% 100%;
							position: absolute;
							top: 50%;
							right: 0;
							transform: translate(0, -50%);
						}
						&:before {
							content: '';
							display: inline-block;
							width: 1.75rem;
							height: 0.9rem;
							background-image: url(../TransverseProgressBarTitle/titleIcon.png);
							background-size: 100% 100%;
							position: absolute;
							top: 50%;
							left: 0;
							transform: translate(0, -50%)rotateY(180deg);
						}
					}
				}
				.num {
					width: 100%;
					height: 3.025rem;
					background-size: 100% auto;
					background-repeat: no-repeat;
					background-position: center center;
					text-align: center;
					color: white;
					font-size: 1.2rem;
					line-height: 3.025rem;
					margin: auto;
					margin-top: .5rem;
					margin-bottom: .5rem;
					&.color0 {
						background-image: url(./num0_bg.png);
					}
					&.color1 {
						background-image: url(./num1_bg.png);
					}
					&.color2 {
						background-image: url(./num2_bg.png);
					}
				}
				.TransverseProgressBarC {
					margin-top: .5rem;
					margin-bottom: 1rem;
				}
				.p {
					strong {
						color: red;
						text-decoration: underline;
					}
				}
			}
		}
	}
</style>