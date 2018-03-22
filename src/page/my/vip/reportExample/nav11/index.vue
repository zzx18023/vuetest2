<template>
	<div :class="$style.nav11">
		<div :class="$style.titleImg">
			<img src="./title0.png" />
		</div>
		<box :class="[$style.box,$style.box0]">
			<span slot="title">父母宫</span>
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
		name: 'nav11', //组件名称
		props: {

		},
		data() {
			return {
				data: {
					content0: [
						'父母宫可以看出家庭的背景，父母的身份地位、个人的出身家境、与父母关系情缘的厚薄、彼此沟通顺畅与否、父母祖辈的福佑深浅、父母长辈的健康状况、个人的早年运程吉凶、前世因果的福报等，也可反应父母的能力高低、个性及成就等，但父母宫需要结合疾厄、仆役和子女宫同看，因个人体质来自父母的遗传，身体发肤受之父母，个人体能也会受到父母关爱祖辈庇佑的程度，即后天的教育，深恐近朱者赤、近墨者黑。',
						'父母宫在命盘也反应个人的健康及出生家境贫富，是否能够得到父母祖辈的助益而少走弯路，依然相当重要，亦称对亲属长辈的态度和期望。',
					],
					content1: [{
						title: '疾厄宫主星',
						content: ['无（借对宫疾厄宫主星天同巨门）'],
						type: 1,
					}, {
						title: '主要辅星',
						content: ['天魁','天贵','陀罗','天空'],
						type: 0,
					}, {
						title: '三方宫辅星',
						content: ['天同巨门','太阴','太阳（化忌）天梁'],
						type: 1,
					}, {
						title: '其他主要辅星',
						content: ['天钺','文昌','天德','文曲','天喜','喜神','咸池','天官','大耗','化忌','天伤'],
						type: 2,
					}],
					content2: [
						'您跟父母长辈的关系并不深厚，先天极有孝心但父母能够提供的庇佑福禄和助益有限，而父母的能力也有限，本身多依靠自我，同样三方被太阳化忌所冲煞，更加不得祖辈的福荫，尤其家中男性长辈，自身亦刑克父亲及家族其他男性的健康，而个人对父母的物质条件要求和期望不可过高，所能继承的财产和福禄有限；且巨门暗星逢大耗、化忌、劫煞拱照，与父母长辈之间的争吵会比较多，不宜与父母长辈同居屋檐，而父母自身健康切记要注意肺部、心脏、血路、大肠方面的疾病，尤其运程走到马年、鸡年或刑冲破害太岁之年则更甚，命主要做<strong>祈福及消灾化煞</strong>的功德，亦可为父母<strong>捐香炉</strong>到道观寺庙得众善信祈祷福佑。',
					],
					content3: [
						'父母宫天魁天贵吉星入宫，可以得到外界的助力发挥其价值和才能，对于整体运程来说牛同样是命主的贵人，此宫的三方被化忌冲煞，最不利家中父亲的健康，而命主又与父亲刑冲，后天修行做功德过程需要多关注父亲，可以特意为父亲<strong>恭请香炉</strong>，尤其在马年和狗年及甲干之大限，做一生福报善德的积累，可以延缓疾病恶化延寿祈福。',
					],
					content4: [
						'对父母的依赖不可太强，要注重多沟通，凡事懂得包容，尤其在晚年对家人的唠叨要听得进去，多带长辈旅游散心，参加身心灵或宗教修行养生活动，若能常去参加祈福最佳；',
						'多留意父母的健康状况，尤其在父母的心脏、大肠、血管和头脑方面，与父亲的缘分需要多做功德才能积累彼此的因果福报，切记到农历八月和正月及逢虎年、马年和鸡年父亲健康及家中男性长辈极易恶化或突发；',
					],
					content5: [{
						title: '孝顺指数',
						value: 96,
						content: '命主先天格局紫微星为最有孝道的星宿，可不顾一切牺牲自身为父母，而天同、天魁天贵可以祝福与父母之间的福禄缘分深浅，期望通过个人的努力让父母安享天伦之乐，故多为父母祈福，可延伸贵人的助益，关键时刻得祖辈父母的庇佑。',
					}, {
						title: '自我独立指数',
						value: 80,
						content: '命局得帝王星的福禄，有天生的承担和独立能力，遇事可沉着冷静思考并给以方案，但由于个性不愿屈就往往会走极端的方法。',
					}, {
						title: '长辈沟通指数',
						value: 65,
						content: '父母能力有限，但是喜欢说话和唠叨，对您的叮嘱也很多，往往事必躬亲，但是个人的个性过于傲慢和高姿态，往往对于长辈的建议无法接受，更加喜欢冒险和尝试，所以对父母的依赖和仰仗并不多，尤其到中年以后更加难以沟通，有时候甚至会采取极端行径。',
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
	.nav11 {
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
					width:11.25rem;
					height:4.5rem;
					background-image: url(./pendant0.png);
					background-size: 100% 100%;
					position: absolute;
					bottom: 0;
					right: 0;
					z-index: 0;
					transform: translate(0%, 0%);
				}
			}
			&.box1 {}
			&.box2 {
				padding-bottom: 2rem;
				.pendant {
					width: 4.55rem;
					height:3.65rem;
					max-width: 100%;
					background-image: url(./pendant1.png);
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
					width:17.625rem;
					height: 5.05rem;
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