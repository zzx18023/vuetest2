<template>
	<div :class="$style.nav5">
		<div :class="$style.titleImg">
			<img src="./title0.png" />
		</div>
		<box :class="[$style.box,$style.box0]">
			<div :class="$style.pendant"></div>
			<span slot="title">疾厄宫</span>
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
			<ul>
				<li v-for="(v,i) in data.content5">
					<RingProgressBar :value="v.value" :color="color[i]" :key="'RingProgressBar'+i"></RingProgressBar>
					<p :class="$style.title" :style="{color:color[i]}">{{v.title}}</p>
				</li>
			</ul>
		</box>
		<box :class="[$style.box,$style.box6]" v-for="(v,i) in data.content5" :key="'box6'+i">
			<p :class="$style.title">
				<span>{{v.title}}</span>
			</p>
			<div :class="[$style.value,$style['color'+i]]">{{v.value}}</div>
			<p v-html="v.content" :class="$style.p"></p>
		</box>
	</div>
</template>

<script>
	var component = {
		name: 'nav5', //组件名称
		props: {

		},
		data() {
			return {
				color: ['#d70707', '#f05d2a', '#4d69cb'],
				data: {
					content0: [
						'疾厄宫反映一个人的身体健康状态及体质，并可推测身体内容易患哪方面的疾病和疾病的种类，以及车祸等意外灾害发生的可能性，亦须参照对宫父母宫，是否有相关的遗传问题，而个人的健康也能影响到父母的情绪及生活。',
						'疾厄宫野代表一个人的身体，可以反映对健康及自身的态度。',
					],
					content1: [{
							title: '疾厄宫主星',
							content: ['天同巨门'],
							type: 0,
						}, {
							title: '主要辅星',
							content: ['天钺、天使、台辅、大耗、天官'],
							type: 1,
						}, {
							title: '三方宫辅星',
							content: ['天机'],
							type: 0,
						},
						{
							title: '其他主要辅星',
							content: ['天魁、天贵、左辅、右弼、陀罗、擎羊、火星、铃星'],
							type: 2,
						}
					],
					content2: [
						'您的疾厄宫本身有福星拱照，可遇难呈祥逢凶化吉，个人也会采取相应的方法措施进行养生保健，日常会比较注重自身的饮食习惯，有不错的口福，唯独要注意易有暗藏的疾病，例如血压血糖、消化系统、泌尿系统方面的暗疾，尤其行运到鸡年、羊年、虎年及逢年份尾数是7的时候。',
					],
					content3: [
						'暗星逢大耗，个人纵欲过度往往会耗散经历，自幼体质不佳，早年坎坷和小病小灾比较多，三方陀罗、擎羊、铃星、火星的冲照，要多注意自身内涵的修行，且在思想中有自我的脾气，易因忙碌和应酬而忽视对健康的保健，同时辅星的影响告诫你要多关注家人的健康运。',
					],
					content4: [
						'您需要为祖先做超度亡灵的功德，到37岁后最好有皈依或宗教信仰可提升身心健康；',
						'父母祖辈的福佑较薄，可以为其做善德或到道观捐香炉得信众祈祷祝福；',
					],
					content5: [{
						title: '健康认知指数  ',
						value: 85,
						content: '您的命局本身就有天同福星拱照，天同有解厄、制化、延寿等保健功能，代表一生的福禄克可得天意祝福及行运庇佑，您自身对健康方面是比较看重的，在日常的养生、饮食、作息和保健方面有合理的规划，若遇到疾病或危难之事，更能及时制定相处合理的化解治疗方案，但切记莫要逞口舌之快或欺骗身边人，否则因巨门的暗性会导致不经意之间有隐藏性疾病的突发。',
					}, {
						title: '疾病承受指数',
						value: 78,
						content: '您自我有很好的生活作息规划，一旦纵欲过度便能及时控制，日常的病痛并不能打击到你，且对待病魔个人有足够的承受心理，同时会懂得看得开，在内心精神上有足够强大的支撑；但是切记要两性及生殖方面的问题莫要轻视。',
					}, {
						title: '就医耐性指数',
						value: 90,
						content: '天同乃益寿保生之星宿，本身自带福禄有享福的运势，尤其中晚年之前生活安定有充足的物质生活条件，一旦运程逢煞或灾即可自动发挥作用，也能很好的配合医疗及生活习惯，迅速康复，提醒在两性及心脑血管方面要提防突发。',
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
			RingProgressBar() {
				return import('../RingProgressBar')
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
	.nav5 {
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
					width: 2.825rem;
					height: 4.525rem;
					background-image: url(./pendant0.png);
					background-size: 100% 100%;
					position: absolute;
					top: 0;
					right: 0;
					z-index: 0;
					transform: translate(0%, 0%);
				}
			}
			&.box2 {
				padding-bottom: 2rem;
				.pendant {
					width: 4.05rem;
					height: 4.05rem;
					background-image: url(./pendant1.png);
					background-size: 100% 100%;
					position: absolute;
					bottom: 0;
					right: 0;
					z-index: 0;
					transform: translate(0%, 0%);
				}
			}
			&.box3 {
				padding-bottom: 2rem;
				.pendant {
					width: 18.725rem;
					max-width: 100%;
					height: 2.175rem;
					background-image: url(./pendant2.png);
					background-size: 100% 100%;
					position: absolute;
					bottom: 0;
					right: 0;
					z-index: 0;
					transform: translate(0%, 0%);
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
			&.box5 {
				ul {
					display: flex;
					flex-wrap: wrap;
					>li {
						width: calc((100% - 2rem) / 3);
						.title {
							margin-top: .5rem;
							font-size: 0.75rem;
						}
						+li {
							margin-left: 1rem;
						}
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
				.value {
					width: 7.275rem;
					height: 1.8rem;
					background-size: 100% 100%;
					margin: auto;
					line-height: @height ;
					font-size: 1.2rem;
					color: white;
					text-align: center;
					margin-top: .5rem;
					margin-bottom: .5rem;
					&.color0 {
						background-image: url(color0.png);
					}
					&.color1 {
						background-image: url(color1.png);
					}
					&.color2 {
						background-image: url(color2.png);
					}
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