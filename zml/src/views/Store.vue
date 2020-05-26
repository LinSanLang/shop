<template>
	<div style="position: relative;">
		<div class="header">
				  <van-icon name="arrow-left" size="25" @click="goUp" />
				  <div @click="goSearch" class="search1">
					  <van-search  :disabled="true" placeholder="搜索店铺内商品" />
				  </div>
				  <van-icon size="25" name="ellipsis" />
		</div>
		<div class="head">
			<img style="width: 100%;" src="img/storeTop.png" alt="">
		</div>
		
		
		<div class="body2">
			<div>
				<div style="text-align: left; padding: 10px; width: 100%;">
					店铺排行榜
					<van-tabs title-active-color="#ED5564" v-model="active">
					  <van-tab title="收藏排行">
						  <router-link :to="'/detail6/'+10">
							  <img style="width: 100%;" src="img/store1.png" alt="">
						  </router-link>
						
					  </van-tab>
					  <van-tab title="销量排行">
						  <router-link :to="'/detail6/'+10">
							  <img style="width: 100%;" src="img/store1.png" alt="">
						  </router-link>
						  
					  </van-tab>
					</van-tabs>
				</div>
				
			</div>
			<!-- 分割用 -->
			<div style="background: rgb(245,245,245); width: 100%;height: 10px;">
				
			</div>
			<div style="text-align: left; padding: 10px; width: 100%;">
				店主推荐
				<van-divider />
			</div>
			<div style="display: flex; flex-wrap: wrap; justify-content: space-around;">
				<div style=" width: 176px;height: 230px; padding-bottom: 10px; margin-bottom: 20px;  " v-for="(item,index) in datas.rec_goods_list">
					<router-link :to="'/detail5/'+item.goods_id">
						<div>
							<img style="width: 100%;" :src="item.goods_image_url" alt="">
						</div>
						<div style="font-size: 12px; height: 30px; overflow: auto;text-align: left; color: #555;">
							{{item.goods_name}}
						</div>
						<div style="color: #DB4453; text-align: left; font-size: 12px;">
							￥{{item.goods_price}}
						</div>
						<van-divider />
					</router-link>
					
				</div>
			</div>
		</div>
		
		<br>
		<br>
		
		<div class="foot">
			<van-row>
			  <van-col span="8">店铺介绍</van-col>
			  <van-col class="two" span="8">免费领卷</van-col>
			  <van-col span="8">联系客服</van-col>
			</van-row>
		</div>
	</div>
</template>

<script>
	import {dataStore1} from '@/data.js'
	export default{
		data(){
			return{
				datas:"",
				active:0,
				
			}
		},
		created() {
			this.datas=dataStore1.datas
		},
		methods:{
			goSearch(){
				this.$router.push("/search")			  
			},
			goUp(){
				this.$router.go(-1)
			}
		}
	}
</script>

<style scoped="scoped" lang="less">
	*{
		box-sizing: border-box;
	}
	.foot{
		position:fixed;
		width: 100%;
		bottom: 0;
		z-index:10;
		.van-col--8{
			line-height: 44px;
			height: 44px;
			background: rgb(245,245,245);
		}
	}
	.van-row{
		border-top: 1px #CCC solid;
		border-bottom: 1px #CCC solid;
	}
	.two{
		border-left: 1px #CCC solid;
		border-right: 1px #CCC solid;
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
