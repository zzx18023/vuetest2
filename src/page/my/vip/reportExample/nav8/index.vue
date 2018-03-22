<template>
	<div :class="$style.nav8">
		<div :class="$style.titleImg">
			<img src="./title0.png" />
		</div>
		<box :class="[$style.box,$style.box0]">
			<span slot="title">官禄宫</span>
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
		name: 'nav8', //组件名称
		props: {

		},
		data() {
			return {
				data: {
					content0: [
						'官禄宫又称事业宫或功名学业宫，此宫位反映个人的事业成就大小、适宜职业、能否创业、读书优劣（古人学而优则仕，书读得好，才能做官，事业也容易成功）、职位高低、与长官的关系、升迁机会等有关事业运的吉凶，但同时要参看夫妻宫，财帛宫及交友宫，整体结合三方四正，才能更加灵验准确；',
						'官禄宫也代表一个人做事的方式方法，对待事业中各方面事宜、人际关系等态度，同时也是出外运程的成就表现形式，其最终的结果要参看财帛、田宅。',
					],
					content1: [{
						title: '官禄宫主星',
						content: ['廉贞天府'],
						type: 0,
					}, {
						title: '主要辅星',
						content: ['化禄', '华盖', '青龙', '龙池', '阴煞'],
						type: 1,
					}, {
						title: '三方宫辅星',
						content: ['七杀', '武曲天相', '紫微'],
						type: 0,
					}, {
						title: '其他主要辅星',
						content: ['化科', '天才', '地空', '地劫', '天刑', '截空', '天姚'],
						type: 2,
					}],
					content2: [
						'您的官禄宫廉贞官禄星入主逢化禄，口才佳、有文艺修养，处事淡定，且社交圆滑多变化且多异性缘，对命理相术有兴趣，和宗教有缘，事业上宜在民营大企业机构任职，但烦恼波折不免，宜经商亦适合侍从，具有活力，积极，有冲劲，加上库星，在技术才艺方面有特殊见地，超人发明，可创业办公司平稳发展，但不会横发，金钱、地位、婚姻、声誉、考试等都显吉兆，发财置业，事事如意，家中喜庆事多，添丁进喜。',
						'事业宫廉贞化禄增强官禄主星之性质， 一生可有多项事业体或同时兼顾多项领域， 尤其是在事业中对职责、 下属和团队的要求极高， 做事的标准高而带来不错的升迁运， 到猴年、 虎年、 鼠年、 龙年会有上司领导公司的赏识， 委以重任而充分发挥自我价值， 命局有益于从事政府尤其是军警、 外交官的人士。 ',
						'命局官禄事业适宜五行火土金领域， 例如土地房产、 矿石珠宝、 土载种植、 土木工程、 黄金期货、 金融银行、 债券外汇、 贸易物流、 美容餐饮、 宗教养生等领域， 事业方面一生可以助力的贵人有生肖虎、 龙、 猴， 而一生的债主阻碍有兔、 羊、 鸡， 行运切记要谨慎与男性的合作。 ',
					],
					content3: [
						'命局生年的化禄给事业增添分数，且官禄自宫化禄入主福德，提升个人对事业成就和价值的追求，廉贞主官禄，最喜化禄入主官禄宫；但是受到辰宫天罗的捆绑，加上阴煞凶星入侵，事业上自我要求高但付诸的时间行动不够，完全是由于个人的思想被天罗所困，而阴煞的出现会让您的运程走到丙干大限流年或戊干之时，自我做事的思维受到限制，难以卖出自身所设定的圈子，形如身体被倒捆四肢，有能力而无法施展；三方宫位格局所构成有助得力伴侣和婚姻，伴侣的开创能力可以激发个人的奋斗意志，被迫冲刺或奋勇直上，但是煞星的影响切记要注意与人之间的密切合作，尤其天刑、截空、地劫、地空的干扰，一旦能量走弱便给小人可乘之机，危害极大，事业方面能够借助风水上摆放猴龙鼠三合来旺行运的贵人。',
					],
					content4: [
						'您的格局是先天的领导者和政府高管，尤其适宜军警或司法部门、外交部门，您会在个人的努力下锋芒毕露，而22-31岁、42-51岁都是很好的时机，命宫的帝王会全然暴露，行运过程要懂得莫要溜须拍马过度奉承，否则会让人从中作梗，阴煞出现迫害；',
						'事业宫的官禄宫被本身化忌所刑冲，对待下属过度刚毅直接，有时甚至刻薄不通人情；',
						'您有很好的创意和做事能力，且考虑事情全面、行事稳重，亦有极佳的执行能力，雷厉风行，更好的发挥自己即可，但切记要懂得适当时机收敛或回报，莫一位冲刺不顾后果反而落空；',
					],
					content5: [{
						title: '企图创意心指数',
						value: 97,
						content: '您的企图心相当明显，往往会在不经意的时间暴露给所有人，而廉贞的个性又是非常强烈的，对诸事的欲望非常明显，凡出手必然希望有所回收，而天府又是择机而动，故有极强的目的性，同时无论新鲜领域还是传统领域都能被之接受，想法新颖而又复合时代的发展，勿须外力插手自我即可独立承担；口舌之快或欺骗身边人，否则因巨门的暗性会导致不经意之间有隐藏性疾病的突发。',
					}, {
						title: '责任感指数',
						value: 98,
						content: '廉贞星本是一国宰相，天府被赋予皇后即财富库房，拥有极强的包容心和宽广的胸怀，对任何事情都有自身慎重的考虑，不会轻易出手，一旦做事便能达到预想的效果，是企业或政府天生的领导者，个人的承担能力非常强，内心有过分的表现欲望，但进退得当，三方得天相印星拱照，所以责任感极佳。',
					}, {
						title: '决断力指数',
						value: 90,
						content: '廉贞星本是一国宰相，天府被赋予皇后即财富库房，拥有极强的包容心和宽广的胸怀，对任何事情都有自身慎重的考虑，不会轻易出手，一旦做事便能达到预想的效果，是企业或政府天生的领导者，个人的承担能力非常强，内心有过分的表现欲望，但进退得当，三方得天相印星拱照，所以责任感极佳。',
					}, {
						title: '主动性指数 ',
						value: 95,
						content: '事业方面的主动的化禄的气场带动，廉贞逢生年之化气所引动，想法时尚而主动性积极，个人有自我的主观判断，时机成熟之时也刚好发挥其主动开拓之力度，再加上有天府星的策划和守护，即可大力作为，五行之间又是相生，更加有益。',
					}, {
						title: '团队精神指数',
						value: 90,
						content: '您的事业方面有个人独特的魅力，无论外表还是内在处事能力都有极佳的粉丝，化禄更能让众人看到实际的物质收获，在领导团队方面有独到的天赋，从骨子里就是领袖，但要注意个人的姿态很高，难以放低身段，若是做下属或团队成员则必然不会甘心，有篡位的欲望冲动，当然时机成熟是也绝对不会放过，更需要加强个人的协调配合能力，凝聚核心力量才能更有成就。',
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
	.nav8 {
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
					width: 3.85rem;
					height:5.1rem;
					background-image: url(./pendant0.png);
					background-size: 100% 100%;
					position: absolute;
					bottom: 0;
					right: 0;
					z-index: 0;
					transform: translate(10%, 0%);
				}
			}
			&.box1 {
			}
			&.box2{
				.pendant {
					width:18.75rem;
					max-width: 100%;
					height: 7.2rem;
					background-image: url(./pendant1.png);
					background-size: 100% 100%;
					position: absolute;
					bottom: 0;
					left: 0;
					z-index: 0;
					transform: translate(0%, 0%);
				}
			}
			&.box3{
				padding-bottom: 2rem;
				.pendant {
					width: 6.275rem;
					height:6.275rem;
					background-image: url(./pendant2.png);
					background-size: 100% 100%;
					position: absolute;
					bottom: 0;
					right: 0;
					z-index: 0;
					transform: translate(10%, 10%);
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