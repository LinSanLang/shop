<template>
	<div class="big">
		<div class="header">
				  <van-icon name="arrow-left" size="20" @click="goUp" />
				  <div @click="goSearch" class="search1">
					  <van-search  :disabled="true" placeholder="请输入关键词" />
				  </div>
				  <van-icon name="ellipsis" />
		</div>
		<div>
			<van-dropdown-menu>
			  <van-dropdown-item v-model="value" :options="option" />
			  <van-dropdown-item title="筛选" ref="item">
			    <van-switch-cell v-model="switch1" title="包邮" />
			    <van-switch-cell v-model="switch2" title="团购" />
			    <van-button block type="info" @click="onConfirm">确认</van-button>
			  </van-dropdown-item>
			</van-dropdown-menu>
		</div>
		<div class="body">
			<img src="img/search-img.png" alt="">
			<van-button @click="goUp"  type="default">重新选择</van-button>
		</div>
	</div>
	
</template>

<script>
	export default{
		data(){
			return{
				value: 0,
				switch1: false,
				switch2: false,
				option: [
				  { text: '综合排序', value: 0 },
				  { text: '价格从高到底', value: 1 },
				  { text: '价格从底到高', value: 2 },
				  { text: '人气排序', value: 3 }
				]
				     
			}
		},
		methods:{
			  goSearch(){
				  this.$router.push("/search")
			  },
			  goUp(){
				  this.$router.go(-1)
			  },
			  onConfirm() {
			       this.$refs.item.toggle();
			     } 

			    
		},
	}
</script>

<style scoped="scoped" lang="less">
	// .big{
	// 	background: rgb(245,245,245);
	// }
	.body{
		width: 100%;height: 540px;
		background: rgb(245,245,245);
	}
	.header{
		display: flex;
		justify-content: space-around;
		align-items: center;
		.search1{
			width: 80%;
		}
	}
</style>
