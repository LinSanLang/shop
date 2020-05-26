<template>
	<div style="position: relative;">
		<van-nav-bar
		  title="所有店铺"
		  left-arrow
		  @click-left="onClickLeft"
		  @click-right="onClickRight"
		>
		  <van-icon size="25px" name="ellipsis" slot="right" />
		  <van-icon size="25px" name="arrow-left" slot="left" />
		</van-nav-bar>
		<div style="display: flex;">
			<div style="width: 85%; align-items: center;">
				<van-search placeholder="输入店铺名称" v-model="value" />
			</div>
			
			<div style="width: 15%; height: 40px; text-align: left;line-height: 50px;" @click="onSearch">搜索</div>
			
		</div>
		<div>
			<div style="margin-left: 20px;margin-right: 20px; display: flex; padding-bottom: 20px;" v-for="(item,index) in datas.store_list">
				<div>
					<img style="width: 44px;height: 44px;" :src="item.store_avatar_url" alt="">
				</div>
				<div style="flex: 1;margin-left: 15px;text-align: left; border-bottom: 1px solid #EEE;">
					<div style="font-size: 14px;">
						{{item.store_name}}
					</div>
					<div style="font-size: 10px; color: #888;">
						粉丝：<span style="color: #000000;">{{item.store_collect}}</span>人
					</div>
				</div>
			</div>
			<!-- <div style="background: rgb(245,245,245); width: 100%;height: 380px;">
				
			</div> -->
			
		</div>
		<div style="position: absolute;width: 100%;bottom: -360px;">
			<van-pagination 
			  v-model="currentPage" 
			  :page-count="1"
			  mode="simple" 
			/>
		</div>
	</div>
</template>

<script>
	import {dataStoreList} from '@/data.js'
	export default{
		data(){
			return{
				datas:"",
				value:"",
				currentPage:1
			}
		},
		methods:{
			onClickLeft() {
			  // this.$toast('返回');
						this.$router.go(-1);
						
			},
			onClickRight() {
			  // this.$toast('按钮');
						// this.$router.push("/search")
			},
			onSearch(){
				if(this.value.length!=0){
					this.value=""
					this.$toast('点击了搜索');
				}
				else{
					this.$toast('输入为空');
				}
				
			}
		},
		created() {
			this.datas=dataStoreList.datas
		}
	}
</script>

<style scoped="scoped" lang="less">
	*{
		box-sizing: border-box;
	}
</style>
