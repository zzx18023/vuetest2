<template>
	<div class="introduce3">
		<div class="des">普通用户与<strong>VIP</strong>会员对比，<strong>VIP</strong>的优势一目了然。</div>
		<div class="content">
			<p class="title"><span>产品服务</span><span>普通用户</span><span><strong>VIP会员</strong></span></p>
			<ul class="list">
				<li v-for="(v,i) in list">
					<table>
						<thead :style="{backgroundColor: v.theadBgc}">
							<tr>
								<th v-for="(v,i) in v.thead">{{v}}</th>
							</tr>
						</thead>
						<tbody>
							<tr v-for="(v,i) in v.tbody">
								<td v-for="(v,i) in v" :style="{ color : ( typeof v === 'object' ) ? v.color : undefined }">
									{{ ( typeof v === 'object' ) ? v.value : v }}
								</td>
							</tr>
						</tbody>
					</table>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	var component = {
		name: 'introduce3', //组件名称
		props: {},
		data: function() {
			return {
				list: [{
					theadBgc: '#7801f2',
					thead: ['紫微流年运势 总价值238元', '无', '免费送'],
					tbody: [
						['2018流年运势总分析', '—', '✔'],
						['2018流年事业发展分析', '—', '✔'],
						['2018流年感情走势分析', '—', '✔'],
						['2018流年财富收支分析', '—', '✔'],
						['2018流年每月运势分析', '—', '✔'],
					],
				}, {
					theadBgc: '#d301f2',
					thead: ['紫微先天命格详解 总价值96元', '部分', '完整'],
					tbody: [
						['先天命运玄机详解', '✔', '✔'],
						['健康玄机详解', '✔', '✔'],
						['感情玄机详解 价值12元', '—', '✔'],
						['事业玄机详解 价值18元', '—', '✔'],
						['财富玄机详解 价值28元', '—', '✔'],
						['玄机锦囊详解 价值38元', '—', '✔'],
					],
				}, {
					theadBgc: '#f25001',
					thead: ['八字流年大运详解 总价值38元', '部分', '完整'],
					tbody: [
						['八字命盘分析', '✔', '✔'],
						['事业、爱情、性格、养生分析', '✔', '✔'],
						['命宫神煞、四柱算命分析', '✔', '✔'],
						['八字2018流年运势分析 价值12元', '—', '✔'],
						['八字十年大运分析 价值26元', '—', '✔'],
					],
				}, {
					theadBgc: '#0183f2',
					thead: ['功能免费 无价', '收费', '免费'],
					tbody: [
						['每次玄机密码测算', '收费', {
							value: '免费',
							color: 'red',
						}],
						['每次八字择日', '—', {
							value: '免费',
							color: 'red',
						}],
						['特定课程学习', '收费', {
							value: '免费',
							color: 'red',
						}],
						['每次修改生日信息', '收费', {
							value: '免费',
							color: 'red',
						}],
					],
				}, {
					theadBgc: '#f2a501',
					thead: ['VIP专享福利', '无', '专享'],
					tbody: [
						['送万寿宫天师家族当代族长亲手 画制的【平安化煞灵符】一张', '—', '✔'],
						['所有商品 8折优惠', '—', '✔'],
						['好友收益反馈', '5%', {
							value: '10%',
							color: 'red',
						}],
					],
				}, {
					theadBgc: '#e327d4',
					thead: ['亲子教育 总价值88元', '无', '专享'],
					tbody: [
						['全面分析子女的个性、能力', '—', '✔'],
						['早发现小孩的人格特性', '—', '✔'],
						['解读父母如何与孩子相处', '—', '✔'],
						['怎样有效的对子女进行教育', '—', '✔'],
						['了解子女的人际关系', '—', '✔'],
						['子女的财运分析', '—', '✔'],
						['怎样帮助子女进行理财教育', '—', '✔'],
						['需要注意子女情感的地方', '—', '✔'],
						['深入剖析子女的事业潜能', '—', '✔'],
						['给父母的建议', '—', '✔'],
					],
				}, {
					theadBgc: '#f23a01',
					thead: ['尊贵祈福   无价', '部分', '专享'],
					tbody: [
						['祈福法会', '✔', '✔'],
						['大年初五接财神法会', '—', '✔'],
					],
				}]
			};
		},
		computed: { //计算属性

		},
		watch: { //观察者

		},
		methods: { //事件方法

		},
		components: { //子组件

		},
		beforeCreate: function() { //即将开始创vue实例

		},
		created: function() { //实例创建完毕

		},
		beforeMount: function() { //即将进行数据挂载

		},
		mounted: function() { //挂载完成插入页面

		},
		beforeUpdate: function() { //数据即将更新

		},
		updated: function() { //数据更新完成

		},
		beforeDestroy: function() { //即将销毁

		},
		destroyed: function() { //销毁完成

		},
	};
	export default component;
</script>

<style scoped lang="stylus">
	.introduce3 {
		.des {
			font-size: 0.75rem;
			color: #3d1700;
			text-align: center;
			padding: 1rem 0;
			line-height: 1.5;
			strong {
				color: red;
			}
		}
		.content {
			background-color: #fffef7;
			padding: .5rem;
			text-align: center;
			bl=6 2 2;
			.title {
				font-size: 0.75rem;
				display: flex;
				span {
					padding: .5rem 0;
					flex: 1 1 auto;
				}
				span:nth-of-type(1) {
					width: bl[0]*10%;
				}
				span:nth-of-type(2) {
					width: bl[1]*10%;
				}
				span:nth-of-type(3) {
					width: bl[2]*10%;
					strong {
						color: red;
					}
				}
			}
			.list {
				li {
					table {
						font-size: 0.65rem;
						border-collapse: collapse;
						width: 100%;
						thead {
							background-color: red;
							color: #fffc00;
							tr {
								th {
									border: 0.05rem solid black;
									padding: .5rem 0;
								}
								th:nth-of-type(1) {
									width: bl[0]*10%;
								}
								th:nth-of-type(2) {
									width: bl[1]*10%;
								}
								th:nth-of-type(3) {
									width: bl[2]*10%;
								}
							}
						}
						tbody {
							color: #3d1700;
							tr {
								td {
									padding: .5rem 0;
									border: 0.05rem solid black;
								}
								/*td:nth-of-type(3){
									color: red;
								}*/
							}
						}
					}
					+li {
						margin-top: .5rem;
					}
				}
			}
		}
	}
</style>