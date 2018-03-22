<template>
	<div :class="$style.nav7">
		<div :class="$style.titleImg">
			<img src="./title0.png" />
		</div>
		<box :class="[$style.box,$style.box0]">
			<div :class="$style.pendant"></div>
			<span slot="title">交友宫</span>
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
		name: 'nav7', //组件名称
		props: {

		},
		data() {
			return {
				color:['#d70707','#f05d2a','#4d69cb'],
				data: {
					content0: [
						'仆役宫即交友宫，用来判断与同事、合伙人、长官、朋友、部署之间的人际关系，以及他（她）们的人品，对自己是否有辅佐助益或破坏；仆役宫也间接的体现个人事业的大小，能否担任领导主管或高官，因为一呼百应或众叛亲离，对事业规模的影响差异很大，而此宫的状态要参照兄弟，了解到彼此的家庭背景及兄弟手足情感浓淡，可整体论述个人是否有外来的辅佐力量；',
'仆役宫也是兄弟宫的阳面，即可看到个人资金的表面情况，亦反应子女的赚钱理财方式和子女的财富承担能力，吉凶可直接决定事业的成就及名誉。',
					],
					content1: [{
							title: '交友宫主星',
							content: ['太阴'],
							type: 0,
						}, {
							title: '主要辅星',
							content: ['文曲','天伤','月德','恩光','小耗'],
							type: 1,
						}, {
							title: '三方宫主星',
							content: ['天机','太阳天梁'],
							type: 0,
						},
						{
							title: '三方宫辅星',
							content: ['右弼','天魁','文昌','铃星','化忌','陀罗','天贵','天巫','天喜','天福'],
							type: 1,
						}
					],
					content2: [
						'太阴星的个性心慈贤淑，持家有道，为内在精神及家宅星宿，而此时你的格局日元反叛，太阴之力无法发挥，身边的朋友交际圈大多都是隐藏的，没有明显的贵人辅佐，而身边都较为注重精神层面和家庭婚姻，是重情重义的人，日常所交际的朋友一般都在自己的领导之下，且对待朋友相当细致贴心，但是他人对你的助力并不明显，往往hi过分追求个人的精神和贞洁及内心而难以深交，往往都是各有所图，且斗比较有原则，有时会为某件事牺牲，过于注重细节和个人的名节，对命主的助力不大，往往需要你来支援；且彼此的想法和算计心比较重，都是各有目的；',
					],
					content3: [
						'文曲、右弼、天魁、文昌拱照仆役及三方宫，一生交际广泛，但是由于每颗吉星都有煞星冲击，且主星的力量落陷没有帮助，故一生真正能够借力的贵人极少；尤其化忌星冲照三方，太阴可借助之力度太阳却逢化忌，故交际宫的力度几乎完全不现，尤其要注意异性和烂桃花带来的麻烦和纠缠，此命局与生肖之间的关系最好撇清，是为命局永远的债主，不易有任何合作、借贷或事业上的牵扯，否则最终带来的是非相当多，且难以处理，甚至会威胁到自身的健康；',
					],
					content4: [
						'您的交际圈非常广泛，完全依赖于你对他人的帮助及贴心细致的关照，个人又有天生的领袖心态，更加不愿屈就接受别人的“施舍”，故高高在上的姿态难以调整，一生要懂得放下自己，提升别人的位置，尤其是在精神层面，而在格局的延伸法门修行上要注重个人红色、紫色磁场，同时居家的正北方和正南方要做好规划。',
					],
					content5: [{
						title: '部署缘指数  ',
						value: 90,
						content: '您的朋友圈交际能力非常强，能够凭借自身的魅力吸引朋友对你的信任和支持，先天的帝王风范能够在后天事业和人脉上有很好的展现，自我能够在极短的时间内统领团队，且与他人的协调度很好，自己往往都是主控者；',
					}, {
						title: '沟通指数',
						value: 88,
						content: '您的命局得到天机星拱照，且文曲才艺星入宫，天生在琴棋书画方面有天赋，稍加努力修习便可有所成就，且能够通过自身的才艺与朋友沟通交流，与陌生和团队上下属沟通顺利，并且能够很好的引导别人的思维想法，而要注意的是自身接受他人的说法的能力有所欠缺；',
					}, {
						title: '授权指数',
						value: 88,
						content: '由于天生的紫微帝王星入主，更加看重自身的权威，而自身也有很好的魅力和领导风范，尤其能够凭借自我的“颜值”赢得一席之地，极其喜欢授权发号施令或掌管下属事宜，在对长辈领导和领袖方面有独特的沟通方式，权威爆棚且能够发挥，尤其到紫微化权或天机、太阴化权时更加，大限流年逢壬干、丙干、戊干之时更加。',
					} ],
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
			RingProgressBar(){
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
	.nav7 {
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
					width: 5.175rem;
					height: 2.65rem;
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
					width:5.675rem;
					height: 3.1rem;
					background-image: url(./pendant1.png);
					background-size: 100% 100%;
					position: absolute;
					bottom: 0;
					left: 0;
					z-index: 0;
					transform: translate(0%, 50%);
				}
			}
			&.box3{
				padding-bottom: 2rem;
				.pendant {
					width: 5.475rem;
					height:4.875rem;
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
			&.box5{
				ul{
					display: flex;
					flex-wrap: wrap;
					>li{
						width: calc((100% - 2rem) / 3);
						.title{
							margin-top: .5rem;
							font-size: 0.75rem;
						}
						+li{
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
				.value{
					width: 7.275rem;
					height: 1.8rem;
					background-size: 100% 100%;
					margin: auto;
					line-height:@height ;
					font-size: 1.2rem;
					color: white;
					text-align: center;
					margin-top: .5rem;
					margin-bottom: .5rem;
					&.color0{
						background-image: url(color0.png);
					}
					&.color1{
						background-image: url(color1.png);
					}
					&.color2{
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