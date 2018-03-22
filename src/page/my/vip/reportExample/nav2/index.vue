<template>
	<div :class="$style.nav2">
		<div :class="$style.titleImg">
			<img src="./title0.png" />
		</div>
		<box :class="[$style.box,$style.box0]">
			<div :class="$style.pendant"></div>
			<span slot="title">夫妻宫</span>
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
		name: 'nav2', //组件名称
		props: {

		},
		data() {
			return {
				data: {
					content0: [
						'夫妻宫用来判断个人恋爱状况、婚姻的早晚、配偶的背景、健康、个性、才貌、夫妻缘分、感情，婚姻生活是否美满，配偶对自己是否有助益；同时参看官禄宫，事业上的应酬常需夫妻相伴，所遇到诸多问题会咨询伴侣的意见，即家庭事业互为因果，故彼此是否有帮助会直接影响到家庭生活。',
						'夫妻状况还需参照迁移宫、福德宫，个人外出活动及活动力，内心精神的喜悲等心态能够影响夫妻生活相处的好坏，也会影响到一个人出外的行为，是否有福分享乐；同时邻宫子女宫、兄弟宫对它也很重要，因子女是否听话乖巧、兄嫂、弟媳能否和睦相处也会影响到婚姻的和谐程度。',
					],
					content1: [{
						title: '主要辅星',
						content: ['七杀'],
						type: 1,
					}, {
						title: '三方宫主星',
						content: ['地空', '寡宿', '旬空', '凤阁'],
						type: 0,
					}, {
						title: '三方宫辅星',
						content: ['廉贞', '天府', '破军', '贪狼'],
						type: 1,
					}, {
						title: '其他主要辅星',
						content: ['化禄', '禄存', '天马', '华盖', '解神', '阴煞', '孤辰', '化权', '天哭'],
						type: 2,
					}],
					content2: [
						'您的一生所遇到的异性都是极其有个性的人，往往自己欠下的感情债比较多，故不要在冲动下结婚,以晚婚为佳；配偶性格刚烈、是性情易变之人，很难避免双方的刑克，婚姻生活不愉悦，且伴侣容易受以外之伤，或遭受以外灾祸；个人对配偶要求过高，时有口舌，但是不算破格，一般问题不大，按命格夫妻年龄差距大，配偶为您的财星，如果感情破裂，就会变为劫财星，您的欲望桃花过于强烈，无法抵抗外面的引诱，一但桃花入侵，必开花结果，到时必定影响您的家运和财运；配偶有自我的个性，好冲好胜不甘平凡，您要懂得赞美和吹捧配偶，可以体现其价值，更有助于增进夫妻的感情提升家运，而本身你的福德宫是破格，所以因果中与配偶良缘的缘分比较浅，易被环境打击而婚破，要供奉长生禄位修行感情的因果福报，消解个人前世所犯下的业障福佑今生；',
					],
					content3: [
						'您的夫妻宫寡宿孤星入主，逢截空，三方被阴煞、孤辰入侵，感情极其容易有欲望桃花和第三者，在出去做事的过程交际应酬会被迫带入娱乐性场所，酒场、K吧会让您迷失心智，从而情感界限被破而出轨，自我的思想要谨慎把控与异性的距离，一旦有了第一次便后果难料，也会带来没完没了的感情纠缠，最终导致家破人亡妻离子散一场空空；您在感情上是一旦有心动就必然要结果的那种，所以情债比较多，多修行自身，或皈依最佳；',
					],
					content4: [
						'您的思想桃花欲望比较重，个人不懂得洁身自爱，尤其对于红尘酒吧、夜场、KTV等娱乐性质的场所有浓厚的兴趣，往往是主动犯错，所以对待感情的责任感不强。',
						'命局夫妻宫入主七杀，感情中彼此的沟通都很强势，彼此不懂退让，尤其是您的伴侣个性也是相当刚毅，在行运中多去参加夫妻共同的修行课程，每年规划同去旅游或参加亲子教育，拍全家福合家欢或庆祝结婚纪念日最佳。',
					],
					content5: [{
						title: '桃花指数',
						value: 95,
						content: '您的命局本身就是桃花星入主，身宫逢水星，一生出外的异性非常多,桃花旺盛，且个人的五官有极强的魅力，能够吸引到能力强和气质佳的异性对自身的爱慕，所以一生桃花泛滥，颜值爆棚。',
					}, {
						title: '掌控占有欲指数',
						value: 90,
						content: '在任何时候都不会忘记自己是皇帝，在婚姻中也是如此，总是希望别人按照自己的主观思维逻辑来做事，有掌控欲和占有欲，但是配偶也不是甘于被掌控的，所以情感上难免强硬对碰，家运常失合。',
					}, {
						title: '夫妻沟通指数',
						value: 78,
						content: '行运好的时候夫妻沟通相当顺畅，且您能够配偶浪漫和新鲜的创意，往往能够讨配偶的欢喜，例如到狗年、猴年、鼠年家运和谐；但是一旦行运不佳，则夫妻沟通相当不顺，甚至有暴力倾向，您的主观和强加意识完全不会被伴侣认同，彼此的冲击严重；此格局个人的尊严需要懂得放下，来维护他人的想法是关键。',
					}, {
						title: '感情稳定包容指数',
						value: 70,
						content: '您的感情宫位逢杀破狼格局，本身即是动荡不安变化多端的，所以一生欠缺稳定，共同修行身心灵或婚姻课程，同时记得夫妻同修长生禄为引申彼此因果的福报,无论物质和精神各方面统一为佳；要懂得配偶的个性和脾气都是从来冲动，不佳考虑不顾后果的，所以你更加需要包容和忍让。',
					}, {
						title: '情趣指数',
						value: 87,
						content: '您的命局紫微星有天赋才华和诗词歌赋的创意，个人的魅力在任何时候都体现十足，同时能够符合现代时尚感，从未落伍，所以在夫妻感情之间非常讲究给对方带来的情趣，所以也能够激起其他异性桃花的荷尔蒙。',
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
	.nav2 {
		overflow: hidden;
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
				z-index: 1;
				strong {
					color: red;
					text-decoration: underline;
				}
			}
			&.box0 {
				margin-top: 2rem;
				.pendant {
					width: 6.175rem;
					height: 3.75rem;
					background-image: url(./pendant0.png);
					background-size: 100% 100%;
					position: absolute;
					top: 0;
					right: 0;
					z-index: 0;
					transform: translate(0%, -10%);
				}
			}
			&.box2 {
				.pendant {
					width: 5.05rem;
					height: 5.9rem;
					background-image: url(./pendant1.png);
					background-size: 100% 100%;
					position: absolute;
					bottom: 0;
					right: 0;
					z-index: 0;
					transform: translate(10%, 50%);
				}
			}
			&.box3 {
				padding-bottom: 2rem;
				.pendant {
					width: 5.625rem;
					height: 2.475rem;
					background-image: url(./pendant2.png);
					background-size: 100% 100%;
					position: absolute;
					bottom: 0;
					left: 0;
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