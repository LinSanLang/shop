<template>
	<div class="big">
		<!-- 回到顶部 -->
		<div class="goTopImg" @click="backTop" v-show="btnFlag" >
			<img src="img/gotop_b.png" alt="">
		</div>
		
		<div class="header">
				  <van-icon name="arrow-left" size="25" @click="goUp" />
				  <div @click="goSearch" class="search1">
					  <van-search  :disabled="true" placeholder="请输入关键词" />
				  </div>
				  <van-icon size="25" name="ellipsis" />
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
		<div class="body1">
			<div v-for="(item,index) in datas.goods_list" >
				<router-link :to="'/detail1/'+item.goods_id" class="cont1" >
					<div>
						<img :src="item.goods_image_url" alt="">
					</div>
					<div style="display: flex; flex-direction: column; padding-bottom: 5px; justify-content: space-between;">
						<div style="text-align: left;font-size: 14px; padding-right: 15px; color: #000000;">
							{{item.goods_name}}
						</div>
						<div style="border-bottom:1px solid rgba(0,0,0,0.2) ;">
							<div style="text-align: left; color: #EC5464;">
								￥{{item.goods_promotion_price}}
							</div>
							<div style="display: flex; justify-content: space-between;padding-right: 15px; color: #999; font-size: 12px;">
								<div>
									销量：{{item.goods_salenum}}
								</div>
								<div>
									{{item.store_name}}
								</div>
							</div>
						</div>
						
					</div>
				</router-link>
				
			</div>
		</div>
		
		<br>
		<br>
		<br>
	</div>
	
	
</template>

<script>
	import {dataShopListShow} from '@/data.js'
	export default{
		data(){
			return{
				value:0,
				switch1: false,
				switch2: false,
				option: [
				  { text: '综合排序', value: 0 },
				  { text: '价格从高到底', value: 1 },
				  { text: '价格从底到高', value: 2 },
				  { text: '人气排序', value: 3 }
				],
				datas:"",
				btnFlag:false
			}
		},
		created() {
			this.datas=dataShopListShow.datas
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
			},
			// 点击图片回到顶部方法，加计时器是为了过渡顺滑
			backTop () {
			    const that = this
			    let timer = setInterval(() => {
			      let ispeed = Math.floor(-that.scrollTop / 5)
			      document.documentElement.scrollTop = document.body.scrollTop = that.scrollTop + ispeed
			      if (that.scrollTop === 0) {
			        clearInterval(timer)
			      }
			    }, 16)
			},
			   
			// 为了计算距离顶部的高度，当高度大于60显示回顶部图标，小于60则隐藏
			scrollToTop () {
			  const that = this
			  let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
			  that.scrollTop = scrollTop
			  if (that.scrollTop > 30) {
			    that.btnFlag = true
			  } else {
			    that.btnFlag = false
			  }
			}
			  
		},
		mounted () {
		  window.addEventListener('scroll', this.scrollToTop)
		},
		destroyed () {
		  window.removeEventListener('scroll', this.scrollToTop)
		},	
	}
	
</script>

<style scoped="scoped" lang="less">
	*{
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}
	.header{
		display: flex;
		justify-content: space-around;
		align-items: center;
		.search1{
			width: 80%;
		}
	}
	.cont1{
		display: flex;
		img{
			width: 100px;height: 100px;
		}
	}
	.big{
		position: relative;
		.goTopImg{
			padding-top: 10px;
			justify-content: space-around;
			background: rgb(255,255,255);
			border-radius: 50%;
			position: fixed;
			z-index: 10;
			width: 44px;
			height: 44px;
			bottom: 50px;
			right: 10px;
			img{
				width: 60%;
				opacity: 0.5;
			}
		}
	}
</style>
