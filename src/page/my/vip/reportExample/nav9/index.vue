<template>
	<div :class="$style.nav9">
		<div :class="$style.titleImg">
			<img src="./title0.png" />
		</div>
		<box :class="[$style.box,$style.box0]">
			<span slot="title">田宅宫</span>
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
			<p v-for="(v,i) in data.content5" :class="$style.p">
				<span :class="$style.title">{{v.title}}</span>
				<StarScore :class="$style.StarScore" :key="'StarScore'+i" :value="v.value"></StarScore>
				<span :class="$style.value">{{v.value}}</span>
			</p>
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
		name: 'nav9', //组件名称
		props: {

		},
		data() {
			return {
				data: {
					content0: [
						'田宅宫用来判断个人能否继承祖产或自置不动产，居住环境如何等有关土地和房屋的事宜，需参看子女宫，因子女的出生于与房屋的性生活有关，购置房产和居家环境风水也和子女的关系密切，而居家环境也影响到子女的求学和就业等，同时可以看到子女的表现及孝顺与否，也会影响到田宅的得失，不动产转增给子女或子女赠送不动产等情况，都可以直接或间接影响不动产的增加或减少；',
						'田宅宫也是命局一生财富的保险库，个人能够聚存多少财产或个人的理财状态都可从田宅宫反馈；同时也代表夫妻生活的和谐程度，也代表子女给外人的感觉如何。',
					],
					content1: [{
						title: '命宫主星',
						content: ['空（借对宫子女宫太阳天梁之力）'],
						type: 1,
					}, {
						title: '主要辅星',
						content: ['左辅', '擎羊', '火星', '红鸾', '封诰'],
						type: 0,
					}, {
						title: '三方宫主星',
						content: ['太阳天梁', '天同巨门', '天机'],
						type: 1,
					}, {
						title: '三方宫辅星',
						content: ['文昌', '天钺', '右弼', '铃星', '天喜', '天巫', '天德', '截空', '大耗'],
						type: 0,
					}],
					content2: [
						'您的田宅宫无正曜拱照，对宫太阳天梁冲照，但又逢太阳落陷化忌，个人后天无祖产继承，且购置房产会遇到阻碍和挫折，极其在房产方面与人发生纠纷，且家中女性较为强势而有掌控欲，往往导致家运中失去主导地位，有妻管严之象；后天居住环境不佳，易阴暗没有光明线，且居家风水外局和内局都会有问题，尤其居家的正西方和正东方有沟壑、坟地或火葬场、电塔等形煞导致命主与家中男丁相克，得男丁的概率极低，一旦得男丁则个人运程一落千丈甚至破产离异，故切记要给自己拜长生禄位积累功德福报，同时可以化解刑冲；天梁主寿可得子女后代的福禄，好好修行补助个人的福禄善德是修补命局的重点；',
					],
					content3: [
						'田宅宫组合格局有左辅、擎羊、火星入主，左辅星先天是贵人星，主导辅佐帝王，可为紫微大帝之股肱大臣，但遗憾孤坐田宅，增强在家运方面的操劳，而自我的个性被擎羊、火星压制，更加无法发挥，显得其力量相当薄弱，且不得家运和祖辈的庇佑，个人运程到中晚年才能爆发有极大价值；而左辅又是孤僻星宿，逢煞星、红鸾入宅，此命局在30所岁运限易为桃花添置房产或金屋藏娇，婚姻受到伴侣彼此的冲击而易给第三者介入的机会，婚姻常发生波折；擎羊和火星的组合导致家运常常失去和睦，屋宅受到风水环境影响的程度比较大，要多给祖辈祈福或超度亡灵尽孝道同时增加的福佑和功德；',
						'三方宫的化忌和天机动性导致个人在房产的追求不可过度强烈，且居家和家运各方面都不易稳定，常有搬家或变动的现象，尤其化忌星的冲煞相当严重，此命局一生与自身正缘的因果比较尴尬，若是女命则婚姻难成且不会满足婚姻的现状，晚年运程带给自身的疾病和烦恼比较多，适宜皈依或有宗教信仰增添善德；',
					],
					content4: [
						'您的田宅宫被化忌冲煞，且整体与房产、家宅和子嗣有关的事宜，都被天意为难，太阳光明线落陷且乌云遮盖难见天日，与家人的相处极易极端或掌控，给人凌驾于人上的感觉，有命令的意思和味道，且喜欢以老大自居，要懂得放下身段及个人的强势；',
						'田宅运不旺且总是动荡变化，切记一生务必要购置个人的房产稳固根基，而居住环境要做好风水布局策划，整体结合外部环境及内部格局协调居家的磁场，以此增强家宅运达到催财、发贵或旺家的功效；',
					],
					content5: [{
						title: '装潢讲究指数',
						value: 90,
						content: '您的居家装饰比较注重现实带来的视觉，由于本身帝王格局，所以从内到外的屋宅都期望如同皇宫一般的风格，尤其在选择装饰材料方面更高要求，若是在个人物质条件具备的情况下，居家装饰可以犹如皇宫一般金碧辉煌，一切的高端大气档次在你的居家体现得非常完美，故对生活条件的要求非常高端；',
					}, {
						title: '环境挑剔指数',
						value: 95,
						content: '您的田宅宫受到太阳化忌的影响，加上煞星擎羊火星入侵，故个人内心极其希望居家环境优雅而高端有帝王气质，但太阳被遮挡而环境最终不理想，且在风水上往往会出现比较严重的问题，尤其在阴宅、阳宅的西方和东方，导致男丁不旺，所以内心有自我的原则和标准，而往往无法实现；',
					}, {
						title: '置产投资指数',
						value: 75,
						content: '对房产投资没有很深的概念，更希望能够享受在当下，个人的理财投资观念也比较差，缺乏长远投资眼光，加上财帛宫的武曲化科，故钱财总是外露，有极好的财运但同样有耗财的精神享受主义观，一生能够在房产方面获得的财富收益并不是很多，若能以此改善则吉；',
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
			StarScore() {
				return import('../StarScore')
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
	.nav9 {
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
					width:3.525rem;
					height:3.425rem;
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
					width:3.525rem;
					height:3.425rem;
					max-width: 100%;
					background-image: url(./pendant0.png);
					background-size: 100% 100%;
					position: absolute;
					bottom: 0;
					right: 0;
					z-index: 0;
					transform: translate(0%, 10%);
				}
			}
			&.box3{
				padding-bottom: 2rem;
				.pendant {
					width: 17.625rem;
					height:2.45rem;
					max-width: 100%;
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
			&.box5 {
				.p {
					display: flex;
					align-items: center;
					.title {
						flex: 0 0 auto;
						width: 5.85rem;
						text-align: right;
						margin-right: .5rem;
						font-size: 0.65rem;
					}
					.StarScore {
						flex: 1 1 auto;
					}
					.value {
						margin-left: .5rem;
						flex: 0 0 auto;
						font-size: 0.9rem;
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
					background-size: auto 100%;
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
					&.color3 {
						background-image: url(./num3_bg.png);
					}
					&.color4 {
						background-image: url(./num4_bg.png);
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