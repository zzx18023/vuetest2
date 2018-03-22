<template>
	<div :class="$style.catalog">
		<h2 :class="$style.title">
			index of /{{page}}
		</h2>
		<ul :class="$style.list">
			<router-link v-if="page" :to="{name:'目录',params:{page:homePage}}" tag="li">
				<img src="./folder-home.png" :class="$style.icon" />
				<div :class="$style.content">
					<p :class="$style.name">index of /{{homePage}}</p>
					<p :class="$style.path">/catalog{{homePage?'/'+homePage:''}}</p>
				</div>
			</router-link>
			<template v-for="(v,i) in list">
				<router-link v-if="v.children" :to="{name: '目录',params:{page:(page?page+'/':'')+v.path}}" tag="li" :key="i">
					<img src="./folder.png" :class="$style.icon" />
					<div :class="$style.content">
						<p :class="$style.name">{{v.name||'-'}}</p>
						<p :class="$style.path">{{v.path||'-'}}</p>
					</div>
				</router-link>
				<router-link v-else :to="{path:'/'+page+'/'+v.path}" tag="li" :key="i">
					<img src="./html.png" :class="$style.icon" />
					<div :class="$style.content">
						<p :class="$style.name">{{v.name||'-'}}</p>
						<p :class="$style.path">{{v.path||'-'}}</p>
					</div>
				</router-link>
			</template>
		</ul>
	</div>

</template>

<script>
	function getList(list, page) {
		if(page.length) {
			var thispage = page.shift();
			var thislist = list.find(function(v, i) {
				return v.path === thispage
			});
			if(thislist && thislist.children instanceof Array) {
				return getList(thislist.children, page)
			} else {
				return []
			}
		} else {
			return list;
		}
	};

	var component = {
		name: 'catalog', //组件名称
		props: {
			page: {
				type: String,
				//				default: ''
			},
		},
		data: function() {
			return {

			};
		},
		computed: { //计算属性
			homePage() {
				var lastindex = this.page.lastIndexOf('/');
				if(lastindex > 0) {
					return this.page.slice(0, lastindex);
				} else {
					return undefined;
				}
			},
			list() {
				var list = this.$router.options.routes[0].children;
				if(this.page) {
					var page = this.page.split('/')
				} else {
					var page = [];
				}
				return getList(list, page)
			},
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

<style lang="stylus" module>
	.catalog {
		padding: .5rem;
		height: 100%;
		overflow: auto;
		display: flex;
		flex-direction: column;
		.title {
			flex: 0 0 auto;
		}
		.list {
			flex: 1 1 auto;
			height: 100%;
			overflow: auto;
			margin-top: .5rem;
			padding: .25rem;
			>li {
				padding: .5rem;
				font-size: 0.8rem;
				border-bottom: 0.025rem solid #ddd;
				text-decoration: none;
				transition: all 3s;
				display: flex;
				align-items: center;
				.icon {
					margin-right: .5rem;
				}
				.content {
					.name {
						color: #337ab7;
					}
					.path {
						font-size: .6rem;
						color: #555;
						text-decoration: underline;
					}
				}
				&:hover {
					border-color: transparent;
					box-shadow: 2px 2px 10px 0px #aaa;
					border-radius: 4px;
					transform: translate(-2px, -2px);
					background-color: #f5f5f5;
					transition: all .3s;
				}
				+li {
					margin-top: .5rem;
				}
			}
		}
	}
</style>