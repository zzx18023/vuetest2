<template>
	<div :class="$style.nav6">
		<div :class="$style.titleImg">
			<img src="./title0.png" />
		</div>
		<box :class="[$style.box,$style.box0]">
			<span slot="title">迁移宫</span>
			<div :class="$style.pendant"></div>
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
		name: 'nav6', //组件名称
		props: {

		},
		data() {
			return {
				data: {
					content0: [
						'迁移宫用来推断一个人的出外境况，个人才能的发挥和活动力表现举动、对外关系的吉凶，例如旅游、移民、搬迁、行车安全、外出灾祸、社交能力、人际关系、调职、专业等，迁移宫对命宫有很大的影响力，因外出的活动力和运程对命运的影响巨大，迁移宫中的星曜越是安定，整个人一生也是安详，反之则越是奔波动荡，多灾多难；命宫对迁移宫更有主宰力量，先天的个性很重要；',
						'迁移宫也是个人才能及个性的阳面， 即给人的感觉魅力， 吉凶可直接决定人际关系优劣； ',
					],
					content1: [{
						title: '命宫主星',
						content: ['贪狼'],
						type: 0,
					}, {
						title: '主要辅星',
						content: ['解神', '天哭', '天虚', '灾煞'],
						type: 1,
					}, {
						title: '三方宫主星',
						content: ['紫微', '七杀', '破军'],
						type: 0,
					}, {
						title: '三方宫辅星',
						content: ['化权', '禄存', '地空', '地劫', '天姚', '天马', '孤辰'],
						type: 1,
					}],
					content2: [
						'贪狼星有才艺歌舞天赋，且极其擅长交际公关，即命主出外的桃花很旺，易得异性的青睐和爱慕，且对异性缘难有抵抗力，往往耳根软就在此时，迁移宫之格局构成杀破狼，出外有益整体运程的发展提升，且个人喜欢尝试新鲜事物，对时尚的事物及场所包括高端享受型、消费性、娱乐性的节目具有浓厚的兴趣，喜欢冒险和创新，故出外与人易打交道，能够接触到高端大气高档次的人物及物质，但内心的色欲往往难以控制，在两性关系上是软肋，所以给人的感觉往往目的性和欲望太过强烈，贪得无厌!',
					],
					content3: [
						'三方宫的化权和天姚、天马能够激发个人对诸事的欲望和追求的主动性，您不愿退缩，更加愿意承担责任或主动收揽责任，尤其是情感方面拿得起但不会放下，也可以说是从开始并没有想到拿起，而有种轻浮的意味；出外有不错的异性粉丝，在交际方面可以凭借才艺和歌唱类天赋赢得众人的掌声；',
					],
					content4: [
						'您的欲望太过分的暴露与众人面前，尤其在异性的交往中，往往对桃花的身体享受相当渴望，但真正无法建立感情，而对已婚人士来说婚姻感情彼此的安全感比较欠缺，要多带伴侣旅行或出入公众场所，建立双方的公信力，要注重在精神或身心灵方面夫妻的共同修行提升，同时可以恭请夫妻和合符坠引动能量及磁场，祝福婚姻美满幸福；',
					],
					content5: [{
						title: '人生波动指数',
						value: 80,
						content: '您的迁移宫格局是杀破狼，明显的是变动不安和动荡起伏的运程，故一生难得安稳，行运过程的贪念比较重，不会满足当下任何的物质或精神，总是会在不断的尝试，所以面临环境的变化和挫折反而是你的机会；',
					}, {
						title: '社交活动指数',
						value: 98,
						content: '迁移宫主星贪狼本身最擅长的就是交际和公关，才艺歌唱等琴棋书画类有天赋，尤其在舞台上或众人面前更加体现自身的魅力，是一流的社交家；',
					}, {
						title: '人脉拓展指数',
						value: 95,
						content: '您的命局是主动性的，不会甘于平凡或屈就他人帐下，在人脉资源平台的开创力方面非常强，也会有很好的领导力，更实际的是也能带领大家获取实际位置或名誉身份地位，指数爆棚；',
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
	.nav6 {
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
					width: 4.2rem;
					height: 3.575rem;
					background-image: url(./pendant0.png);
					background-size: 100% 100%;
					position: absolute;
					top: 0;
					right: 0;
					z-index: 0;
					transform: translate(10%, -50%);
				}
			}
			&.box1 {
			}
			&.box2{
				.pendant {
					width: 4.2rem;
					height: 3.575rem;
					background-image: url(./pendant0.png);
					background-size: 100% 100%;
					position: absolute;
					bottom: 0;
					right: 0;
					z-index: 0;
					transform: translate(10%, 30%);
				}
			}
			&.box3{
				.pendant {
					width: 17.625rem;
					height:2.15rem;
					background-image: url(./pendant1.png);
					background-size: 100% 100%;
					position: absolute;
					bottom: 0;
					right: 0;
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