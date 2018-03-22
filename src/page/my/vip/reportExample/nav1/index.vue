<template>
	<div :class="$style.nav1">
		<div :class="$style.titleImg">
			<img src="./title0.png" />
		</div>
		<box :class="[$style.box,$style.box0]">
			<div :class="$style.pendant"></div>
			<span slot="title">兄弟宫</span>
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
		name: 'nav1', //组件名称
		props: {

		},
		data() {
			return {
				data: {
					content0: [
						'兄弟宫用来判断个人与兄弟姐妹之间彼此的缘分厚薄，手足之情的浓淡，以及对个人是否有助益；亦来推论个人的内在（家庭）人际关系，而仆役宫则反映外在（社会）人际关系，两宫对照参看可显示个人的内外交际能力、手腕及因果；此外，一个可能没有兄弟姐妹，但一定有朋友，此时仆役宫更加反映其交际关系；同时要参照疾厄宫和田宅宫，因同父母所生血缘相同，自身的身体健康可反映他们的身体体质，田宅或许来自父母的分产，彼此会常走动；',
						'同时兄弟宫野代表一个人的现金流，资金去向何处；',
					],
					content1: [{
						title: '兄弟宫主星',
						content: ['天机'],
						type: 0,
					}, {
						title: '主要辅星',
						content: ['右弼', '铃星', '天巫'],
						type: 1,
					}, {
						title: '三方宫主星',
						content: ['太阴', '天同', '巨门'],
						type: 0,
					}, {
						title: '三方宫辅星',
						content: ['化禄', '化科', '阴煞'],
						type: 1,
					}],
					content2: [
						'您的一生能够借助的兄弟姐妹的厄助力相当薄弱，本身兄弟姐妹的能力有限，往往还不如您个人的成就，而且一生与兄弟姐妹的来往断断续续，而本宫的化忌入主仆役冲煞兄弟宫，所以要记得时刻补助自己的贵人运相当重要，在居家风水的布局上要摆放<strong>龙龟</strong>（玄武）阵法达到风水镇宅、催贵的效果；天机星本身有自己的执着善念，哪怕自身再贫穷也不会在兄弟姐妹面前展示，往往给人盛气凌人的感觉，所以他人也不敢靠近，而后天运程中您的财富也是多面临周转，守护的根基不深，要打消靠家族的念头，靠自己发家才是正道。',
					],
					content3: [
						'您的兄弟宫得右弼、文曲、天钺、左辅会照三方四正宫，一生交际广泛而朋友多，但每颗吉星都有相应的煞星冲击，尤其朋友真正的助益无多，反而你还要为他们承担责任；巨门和擎羊火星拱照，被人算计的比较多，尤其需要注意生肖鸡、羊、兔，是一生的债主，还不清的因果债。',
					],
					content4: [
						'您的命局没有很好的贵人和兄弟的辅佐，器重右弼、天魁夹临命宫，可以借助其力量，但极其微弱，多提升自己才是重点，无论从精神层面还是物质层面都需要自行建立雄厚的基础，才能吸引到别人的关注，而把自己放到高的位置上，与人相处要懂得放下身段，需要培养内心的臣子概念；',
					],
					content5: [{
						title: '手足情感指数',
						value: 72,
						content: '您与兄弟姐妹在后天来往的时间不多，彼此的情感比较淡薄，互相能够借力不强，所以手足情感是普通的；',
					}, {
						title: '互相沟通',
						value: 92,
						content: '您总是经常能够收到兄弟姐妹借钱或要求办事的电话，只有在危难或需要帮助的时候才会想到你，而他们对您的难处也极为敏感，往往都是躲避的，所以多借助礼佛、僧道之修行增强为佳；',
					}, {
						title: '资金流动',
						value: 87,
						content: '您的命局赚钱能力很强，但存钱不易，运程面对兄弟姐妹的借贷不能推脱，所以资金往往流入他人的口袋或解决他人的问题，而居家风水的财库和环境的根基被煞星所冲破，聚财不吉；',
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
	.nav1 {
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
				z-index: 1;
				position: relative;
				strong {
					color: red;
					text-decoration: underline;
				}
			}
			&.box0 {
				margin-top: 2rem;
			}
			&.box0 {
				padding-bottom: 2rem;
				.pendant {
					width: 5.85rem;
					height: 3.225rem;
					background-image: url(./pendant0.png);
					background-size: 100% 100%;
					position: absolute;
					bottom: 0;
					right: 0;
					z-index: 0;
					transform: translate(10%,10%);
				}
			}
			&.box2 {
				.pendant {
					width: 5.2rem;
					height: 4.35rem;
					background-image: url(./pendant1.png);
					background-size: 100% 100%;
					position: absolute;
					top: 0;
					right: 0;
					transform: translate(10%,-20%);
				}
			}
			&.box3 {
				padding-bottom: 4rem;
				.pendant {
					width: 6.275rem;
					height: 6.625rem;
					background-image: url(./pendant2.png);
					background-size: 100% 100%;
					position: absolute;
					bottom: 0;
					right: 0;
					z-index: 0;
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