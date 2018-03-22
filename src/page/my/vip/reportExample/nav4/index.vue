<template>
	<div :class="$style.nav4">
		<div :class="$style.titleImg">
			<img src="./title0.png" />
		</div>
		<box :class="[$style.box,$style.box0]">
			<div :class="$style.pendant"></div>
			<span slot="title">财帛宫</span>
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
			<TransverseProgressBarTitle v-for="(v,i) in data.content5" :key="i" :value="v.value" :type="i" :title="v.title">
			</TransverseProgressBarTitle>
		</box>
		<box :class="[$style.box,$style.box6]" v-for="(v,i) in data.content5" :key="'box6'+i">
			<p :class="$style.title">
				<span>{{v.title}}</span>
			</p>
			<TransverseProgressBarC :value="v.value" :type="i" :class="$style.TransverseProgressBarC"></TransverseProgressBarC>
			<p v-html="v.content" :class="$style.p"></p>
		</box>
	</div>
</template>

<script>
	var component = {
		name: 'nav4', //组件名称
		props: {

		},
		data() {
			return {
				data: {
					content0: [
						'财帛宫是生财宫，用来判断一个人的财运、理财方式及赚钱理财能力、收入高低、经济状况、能否蓄财等与钱财有关的事物，财帛宫需要参照福德宫、官禄宫一起看，看个人做事的环境及成就、以及是否有福分或积德，以及赚钱的心态，对生活的享乐程度、心态等精神生活，亦受到经济充裕与否即物质条件的影响，也会受到先天条件的影响，亦要参看命宫的情况。',
					],
					content1: [{
							title: '财帛宫主星',
							content: ['武曲天相'],
							type: 0,
						}, {
							title: '主要辅星',
							content: ['化科', '天刑', '截空', '蜚廉'],
							type: 1,
						}, {
							title: '三方宫主星',
							content: ['破军', '廉贞天府', '紫微'],
							type: 0,
						},
						{
							title: '三方宫辅星',
							content: ['禄存', '天马', '天姚', '孤辰', '化权', '化禄', '阴煞', '地劫'],
							type: 1,
						}
					],
					content2: [
						'您的武曲财星临财宫，易有实质性的进财，多以专门技能或艺术上得财利，且能够提升个人名望名气，且逢化科增添一生财富的光辉，加上先天对金钱数字有独特的敏锐度，有专管财富值功效，可为财务长、银行总监、税务长、理财师等，而赚钱能力相当强，对待钱财刚正不阿，财务进出相当公正，且能任劳任怨忠心耿耿，处理财务事宜谨慎周密而稳重，能够牺牲小我而替他人思考，喜好用钱和物质打抱不平、有天生的善心和助人之想；但财帛的感情宫逢贪狼，要注意一生的财富会花费在异性和伴侣身上，天相变相成为耗财星宿，武曲亦是投机快财，需要谨慎投资，要注意容易陷入卡债的问题，行运不好负债渡日。',
					],
					content3: [
						'您的财帛宫三方四正得禄权科拱照，且禄存入主身宫，构成紫府武廉相格局，一生必然在财富和名誉方面有富贵双全，且得到贵人相助，尤其化禄助力官禄之做事风格，可以增强您的赚钱企图及最终的收益，而化权可以让您的想法付诸于实践且身体力行，但是由于禄马交持必然在忙碌奔波和开创突破中寻求财富的机遇；财帛宫天刑、截空的入主，要注意后天投资的过程莫被他人利用自己的善心而遭陷害，或投机心理失误跌入破财深渊，尤其运程走到尾数是2的年份及牛年、虎年，理财及财务规划更加需要谨慎；',
					],
					content4: [
						'您的命盘财宫得财星助益而先天的财分很高，显得自身有对财务的不屑，加上有颗大爱和付出的心态，愿意倾囊所绶而不聚财富，同样要懂得放低自己的姿态，莫太过张扬而被人嫉妒或算计，一旦遇到生肖鸡、生肖羊或年份则伤害极大，切勿谨慎；',
						'您对财富的敏锐度很强，有很好的赚钱能力，但是要守好自己的财库和家运的根基，由于化忌冲煞田宅，导致后代能够继承自己产业的机会很少，子嗣的能力有所欠缺，个人欠债家运子女，需要恭请<strong>五路财神</strong>和<strong>长生禄位</strong>积累福报延伸祖辈带来的荫佑，同时做财库局的巩固和加强，可以让你的财富在中晚年得到丰裕的回报；',
					],
					content5: [{
						title: '赚钱能力指数  ',
						value: 90,
						content: '您个人对财富有天生的思维和睿智，不会放过任何的赚钱机会，内心有极强的统治领导和占有欲望，做事果决而刚毅，雷厉风行，从不拖拉，由于武曲的决断力可以带来先天的赚钱能力，在大事上有很好的远见和掌控大局的帝王风范；',
					}, {
						title: '风险承担指数',
						value: 95,
						content: '您个人对诸事进退适宜，从来不惧怕任何的风险，在风险来临前都能够很好的把控，当面临各种财务带来的危机，有能力获取财富的最佳渠道度过难过，不会冒进，尤其在财务上的承担能力是强的，且能够在为难时刻给他人助益；',
					}, {
						title: '理财蓄财指数',
						value: 70,
						content: '您的格局赚钱能力很强，但是在理财概念上比较欠缺，过于时尚和前沿而看不上传统的模式，故对金钱的存储没有想法，平时在日常的消费上也会相当大度，喜欢高端和上档次的物质享受，在吃喝玩乐等娱乐性节目消费很高，要恭请五路财神补助命局的财库；',
					}, {
						title: '正偏财指数  ',
						value: 90,
						content: '您的运程本身是五行行业都可从事，一生正财偏财两相宜，投资人有很好的项目和机遇，经商者有很好的合作机会，上班族有上司领导的赏识和器重，所以正偏都可以在适当时机获得收益，尤其运程逢猴年、龙年、鼠年、狗年最佳；',
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
			TransverseProgressBarTitle() {
				return import('../TransverseProgressBarTitle')
			},
			TransverseProgressBarC() {
				return import('../TransverseProgressBarC')
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
	.nav4 {
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
				strong {
					color: red;
					text-decoration: underline;
				}
			}
			&.box0 {
				margin-top: 2rem;
				.pendant {
					width:5.2rem;
					height: 2.225rem;
					background-image: url(./pendant0.png);
					background-size: 100% 100%;
					position: absolute;
					top: 0;
					right: 0;
					z-index: 0;
					transform: translate(20%, -50%);
				}
			}
			&.box2 {
				padding-bottom: 2rem;
				.pendant {
					width: 6.35rem;
					height: 2.275rem;
					background-image: url(./pendant1.png);
					background-size: 100% 100%;
					position: absolute;
					bottom: 0;
					left: 0;
					z-index: 0;
					transform: translate(0%, 0%);
				}
			}
			&.box3 {
				padding-bottom: 2rem;
				.pendant {
					width: 6.55rem;
					height: 4.3rem;
					background-image: url(./pendant2.png);
					background-size: 100% 100%;
					position: absolute;
					bottom: 0;
					right: 0;
					z-index: 0;
					transform: translate(0%, 10%);
				}
			}
			&.box1 {}
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
					font-size: 0.9rem;
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