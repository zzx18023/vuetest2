<template>
	<div :class="$style.nav10">
		<div :class="$style.titleImg">
			<img src="./title0.png" />
		</div>
		<box :class="[$style.box,$style.box0]">
			<span slot="title">福德宫</span>
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
		name: 'nav10', //组件名称
		props: {

		},
		data() {
			return {
				data: {
					content0: [
						'福德宫反映一个人的思维方式及精神层面的状况，因果修行的福报、寿命的长短、能否享乐的情况、精神道德行为、人生观、情绪稳定等与精神有关的吉凶起伏状态，而福德必须参照财帛同看，因为经济状况的好坏直接决定能否享福及晚年精神生活；',
						'福德宫也代表一个人的前世修行，为行为的思想世界及诸事的起因，也代表对财富的灵感及所不能被他人发现的金钱观，更主要的是个人的生活态度及精神世界。',
					],
					content1: [{
						title: '福德宫主星',
						content: ['破军/身宫'],
						type: 0,
					}, {
						title: '主要辅星',
						content: ['禄存', '天寿', '天马', '八座', '孤辰'],
						type: 1,
					}, {
						title: '三方宫主星',
						content: ['武曲天相', '七杀', '贪狼'],
						type: 0,
					}, {
						title: '三方宫辅星',
						content: ['化科', '解神', '凤阁', '天刑', '寡宿', '地空', '白虎'],
						type: 1,
					}],
					content2: [
						'您的内心精神世界对新鲜领域有独特的好奇心，一生不会甘于平凡，必然希望有所作为或展露头角，身宫入宫，较为重视精神层面，从不固执或传统拘泥，变动性极强，尤其在思维逻辑及创意方面，有着破军独有的冲杀力及放荡不羁，往往对异性的诱惑难以抵抗，也可以说从内心层面就有很强的尝试欲望和贪念，往往对于个人觊觎的事宜都会想方设法实现或得到，从不认输，但往往过度倚重个人的精神思维，而看不清楚现实，诸事都希望速战速决或被自我所掌控，一生要更加需要注重精神和身心的修行，要多多拜文昌帝君提升自我精神世界的根基和思维的稳定性。',
					],
					content3: [
						'禄存临身，注重精神世界的享受，尤其喜好尝试新鲜领域事物，晚年有禄有福但身心不闲，受到孤辰及三方寡宿星的影响，个人做事喜欢独来独往，内心世界不愿与人苟同，要么独立成事，要么与黑道军警有接触而彰显价值及风采；此宫之格局复合杀破狼，故思想上不会甘于平庸，有极其远大的理想和愿景，与身边的相处必然本性全然显露，常会有天马行空的跳跃式思维，但有助于行运的开创及创意，多懂得补助修行及根基，可恭请文昌帝君补助格局的木性智慧；',
					],
					content4: [
						'破军的损耗性质过度强烈，尤其影响到一生的思维方式及判断力，精神世界永远会想到发生变化而不求稳定，往往会有内心的矛盾点，却不被任何人知晓，独立承担，一旦运程逢破或被冲击例如壬干之年限，则后果相当严重却无法收场，多修行心性即可；',
						'您禄马交持格局入主福德，精神世界天马行空，常有思想上的飞跃和幻想，尤其在两性方面，导致命局婚姻受到外界的威胁难以长久幸福，而孤辰的主观性和独我个性影响到与伴侣的共同沟通和承担，往往自我决断或冲动行事，和合彼此因果缘分为最佳。',
					],
					content5: [{
						title: '物质欲望指数  ',
						value: 80,
						content: '您的精神世界不会拘泥于传统，更加注重现实物质的充实感，禄存天马同宫，与其说注重物质不如说更加看重新鲜和创意，精神层面从来都是想到啥做啥，从不顾虑后果，故有天马行空，但身宫同宫，加重对物质现实世界的求知欲；',
					}, {
						title: '精神欲望指数',
						value: 85,
						content: '您的后天运程身宫与福德同宫，禄存孤辰同逢，不喜与人合作或同流合污，甚至自己常有拒人千里之外，有脱俗出尘的人生观，能完全自力更生，且常孤芳自赏、淡泊名利，与宗教修行身心灵有极深的缘分，在精神层面多花费时间自我享受孤独，内心孤高贫困，易与僧道结缘，多修行或皈依最佳；',
					}, {
						title: '享乐欲望指数',
						value: 90,
						content: '您的福德宫破军耗星及享乐星宿入宫，最擅长的即是享乐，且从来不会拘泥于固定或传统的模式，必须要有创新或新颖的娱乐性节目才能满足其内心欲望，对人生生活的追求很高，尤其是色情娱乐方面，破军之水性一旦逢禄或三方宫得贪狼化禄则更甚，对于时尚型的节目和娱乐酒店、夜场等有着浓厚的兴致，是一个先天的享乐主义者；',
					}, {
						title: '名权欲望指数  ',
						value: 98,
						content: '您的命宫帝王星更加增强福德思想破军之好胜心，表面圆滑喜好交友沟通，但内心世界有着英雄主义独特的侠义豪情风骨，不会甘于被迫陷害或屈就，一旦被打压必然找机会反击，且能够让对方身败名裂甚至生命危机，故一生对名誉和权力的追求达到极致，对于您的命局来说，只有权力稳操在手才有安全感，而无论任何领域的人士，内心都有此份欲望和激情，时机成熟必然鲤鱼跃龙门般一飞冲天；',
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
	.nav10 {
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
					width: 3.925rem;
					height: 2.25rem;
					background-image: url(./pendant0.png);
					background-size: 100% 100%;
					position: absolute;
					top: 0;
					right: 0;
					z-index: 0;
					transform: translate(10%, -50%);
				}
			}
			&.box1 {}
			&.box2 {
				padding-bottom: 2rem;
				.pendant {
					width: 6.6rem;
					height: 2rem;
					max-width: 100%;
					background-image: url(./pendant1.png);
					background-size: 100% 100%;
					position: absolute;
					bottom: 0;
					left: 0;
					z-index: 0;
					transform: translate(0%, 10%);
				}
			}
			&.box3 {
				padding-bottom: 3rem;
				.pendant {
					width: 5.775rem;
					height: 4.275rem;
					max-width: 100%;
					background-image: url(./pendant2.png);
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