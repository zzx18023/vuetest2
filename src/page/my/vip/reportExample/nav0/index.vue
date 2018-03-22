<template>
	<div :class="$style.nav0">
		<div :class="$style.titleImg">
			<img src="./title0.png" />
		</div>
		<box :class="[$style.box,$style.box0]">
			<div :class="$style.pendant_xh"></div>
			<span slot="title">命宫</span>
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
			<div :class="$style.pendant_xh"></div>
			<p v-for="(v,i) in data.content2" v-html="v" :class="$style.p"></p>
		</box>
		<div :class="$style.titleImg">
			<img src="./title3.png" />
		</div>
		<box :class="[$style.box,$style.box3]">
			<div :class="$style.pendant_bl"></div>
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
		name: 'nav0', //组件名称
		props: {

		},
		data() {
			return {
				data: {
					content0: [
						'是紫微斗数命盘十二宫中最重要的枢纽宫位，与命盘中的每一宫都相互关联，犹如一个人的头脑，是思想、计划和发号施令的地方，而其余十一个宫，相当于人的四肢百骸，虽分工合作各司其职，但必须由命宫统一指挥调配；命宫内诸星曜的吉凶配置，可以用来判断一个人先天的命运，即一生中命格的好坏会直接反映在命宫中，命宫的诸星曜特性，可以判断一个人的容貌、性格、品德、才能、机遇、思想精神、爱好、职业、适居环境或一生工作和事业发展的情况、人生顺逆成就等；',
						'命宫是显的、阳的，而对宫迁移宫则是隐的、阴的，观看一个先天的宿命、个性、才能、容貌等必须参看迁移所隐藏的含义，尤其是命宫无主星的情况，对宫内主星的吉凶，可反映先天命运的七成；而看一个人的命、财、官，则尚需参考命宫三合宫中的财帛宫和官禄宫，可全面反映一个人的经济能力、事业状态和出外运。',
					],
					content1: [{
						title: '命宫主星',
						content: ['紫微独坐'],
						type: 0,
					}, {
						title: '主要辅星',
						content: ['地劫'],
						type: 1,
					}, {
						title: '三方宫主星',
						content: ['贪狼', '武曲天相', '廉贞天府'],
						type: 0,
					}, {
						title: '三方宫辅星',
						content: ['化禄', '化科', '阴煞'],
						type: 1,
					}, {
						title: '其他主要辅星',
						content: ['天姚', '天刑', '龙池', '华盖', '解神'],
						type: 2,
					}],
					content2: [
						'你的命局紫微帝王星拱照，五官面色紫红或黄白色，腰背肥满，中高身材，长脸略带圆形，性情忠厚豪爽但多游不定，志气高傲，性情倔强、耳根软，喜听好话；高傲，不听话，好高骛远，不切实际而误事，或错失良机，有文艺修养，处事淡定，且社交圆滑，一生感情生活丰富，多变化且多异性缘中年精力旺盛，大利创业，晚年易受灾。本身得三方华盖、解神吉星拱照，对命理相术有兴趣，和宗教有深厚的缘分；一生异性缘旺而有相当的公关交际能力，个人魅力十足受到异性的青睐仰慕，桃花旺而难以控制欲望，加上地劫天姚煞星桃花星入侵，虚缘难断。',
						'命主有威严，行事稳重得文臣武将辅助有大成就，做事要求高标准高，但思想被捆绑难以突破，顾忌太多，处事犹豫且日月又反叛颠倒，良驹不得伯乐，格局太阳平闲化忌于酉，缺失光明线，刑冲男丁，恭请<strong>长生禄位</strong>帮助格局突破调整光明助力，同时居家风水方面要在正南方做好规划，可借助摆放红色饰品、佩戴<strong>千手观音本命佛</strong>调整，居住在东方和南方最佳。',
						'命宫三方四正的武曲化科、廉贞化禄拱照，诸事处理果断坚决刚毅，其格局构成紫府朝垣格，整体行运可以位列三公即任职企业高管、政府高官、外交官或团队领袖，尤其对待事业和财富的头脑意识极其强烈，有敏锐的市场嗅觉，可全力发展体现自我价值。',
					],
					content3: [
						'命宫地劫天姚落陷入侵，紫微之帝王星宿三方四正不得辅弼魁钺助益，反而增强其傲慢和独我主观的性质，往往以高冷的态度对待诸事人缘，使得自身孤立无援，成为孤君落寞皇帝，加上命局三方宫阴煞、天刑的迫害，一生在追求事业成就和财富价值、婚姻幸福的过程中，必然受到他方的背地插刀，导致成就平平；',
						'尤其对于帝王之价值而言，基本无法正常发挥，反而受到阴煞、灾煞、白虎凶星的困扰，使得皇帝磨难重重、坎坷不断，便彻底没有了皇帝的运程，若大限或流年再逢化忌，尤其是廉贞化忌、武曲化忌则更加会带来天刑、白虎之凶杀，甚至纠纷官司牢狱缠身，切记命局先天给自身恭请化煞符坠、化煞符来消解诸多煞星的囚困甚至迫害，居家要多摆放圆叶植物例如梅兰竹菊，要尽量避免尖叶植物例如仙人掌类，趋避小人引申贵人和命局之辉煌。',
					],
					content4: [
						'紫微帝王星有独我的主观意识，对人对事的态度相当高傲，要懂得放低姿态，拿得起同时懂得放得下才能成就自我价值，而皇帝必须有自我的果决和刚毅，莫被人情和语言所诱导而误入歧途，修行宗教及身心灵提升精神层面是修行之路；',
						'紫微帝王星有独我的主观意识，对人对事的态度相当高傲，要懂得放低姿态，拿得起同时懂得放得下才能成就自我价值，而皇帝必须有自我的果决和刚毅，莫被人情和语言所诱导而误入歧途，修行宗教及身心灵提升精神层面是修行之路；',
						'生年太阳化忌导致与男丁相克刑冲，尤其是父亲，一生与儿子的缘分极其淡薄不易添丁，而格局一旦得男丁便刑冲个人事业财富及婚姻，而太阳光明的化忌导致家运被冲击，福报祖德不得延续，多靠自我努力起家致富，个人福德因果业障深厚，命局恭请长生禄位借助地脉风水自然之灵性延伸命局解神华盖之庇佑。',
					],
					content5: [{
						title: '行动力指数',
						value: 72,
						content: '紫微帝王星有相当的主动权，掌管诸事及各领域人员即文臣武将之生死命脉，尤其在语言方面具有极强的权威性，加上格局印星、官星、财星拱照三方，且化禄化科得力，可以有极强的执行能力，但是必须有贵人辅佐方宜，遗憾三方四正辅弼魁钺昌曲无力，切记居家风水上要在东南方摆放<strong>龙龟</strong>及富贵祥瑞图、梅兰竹菊图最佳；',
					}, {
						title: '领导力指数',
						value: 92,
						content: '紫微是天生的帝王，具有领导之天赋异禀，而三方又得天相、廉贞（化禄）的辅佐，可以加强一生的领导威信，命局说话和委派任务是一流的，但个人具体落地执行力欠缺，即对权力有天赋的追求、压力有相当的承担；',
					}, {
						title: '创新应变力指数',
						value: 89,
						content: '紫微星拥有天生的美貌及外表，精通音律琴棋，文可治国担大任、武可安邦定天下，故有新颖的思维创意及对时代独到的眼光，有天生发觉商机的意识，对陌生环境的应变能力也很强，唯独缺乏能够落地生根的计划和执行者，三方宫无辅弼魁钺助益。',
					}, {
						title: '思维学习力指数 ',
						value: 87,
						content: '紫微是很有创新能力的星宿，思维从来不会传统或偏执己见，对新鲜领域和事物有极强的欲望和好奇心，思维的变化性和跳跃性极快，且能够很好的承上启下，而又善于思考，与多数人相比而言有独到的见解和认知，往往可以站在高处看清问题的关键所在，思维逻辑全面而新颖，进可攻退可守；但被天哭、天虚冲照，往往给人心神不宁的感觉，学习的主动不定，但在宗教玄学方面有独到的领悟力；',
					}, {
						title: '亲和容忍指数',
						value: 83,
						content: '你的个人光环总是鲜亮无比，在任何时候都可以脱颖而出，对待人事方面的亲和力度表面很强，能够迅速融入陌生的环境，建立与陌生人之间的友谊，但久而久之难免会想要御驾高峰，而个人的魅力同样会得到众人的认可，但对于异性的仰慕无法抗拒，往往会疏于情感防范，故有自我的执着，不懂变通，内心真正的孤独无人知晓，处事由于福德的破军而急躁欠缺耐性，不懂放低身份；',
					}, {
						title: '表达协调指数',
						value: 64,
						content: '你是一个帝王，乃天生的领袖，故有极佳的个人表达能力，但难免圆滑而无法迅速切入重点，总会有打太极的感觉，在诸事的果断决定上有所欠缺，加上地劫影响，给人的感觉往往都是有目的及贪念过重，协调配合方面不能放低自我的姿态；',
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
			TransverseProgressBarC(){
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
	.nav0 {
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
				.pendant_xh{
					position: absolute;
					top: 0;
					right: 0;
					transform: translateY(-80%);
				}
			}
			&.box1 {}
			&.box2{
				.pendant_xh{
					position: absolute;
					bottom: 0;
					right: 0;
					transform: translateY(20%);
				}
			}
			&.box3{
				padding-bottom: 3rem;
				.pendant_bl{
					position: absolute;
					bottom: 0;
					right: 0;
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
					font-size: 0.9rem;
					span {
						display: inline-block;
						position: relative;
						padding:0 2rem;
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
							transform: translate(0,-50%);
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
							transform: translate(0,-50%)rotateY(180deg);
						}
					}
				}
				.TransverseProgressBarC{
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
		.pendant_xh{
			width: 2.775rem;
			height: 3.375rem;
			background-image: url(xh.png);
			background-size: 100% 100%;
		}
		.pendant_bl{
			width: 17.625rem;
			height:2.825rem;
			background-image: url(bl.png);
			background-size: 100% 100%;
		}
	}
</style>