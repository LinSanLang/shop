<template>
	<div class="big">
		<div v-show="!flag">
			<div class="goUpImg" @click="goUp" >
				<img src="img/goUp1.png" alt="" style="width: 100%;">
			</div>
			<div class="imgTwo">
				<!-- 三个点点标志 -->
				<van-icon class="img1" name="ellipsis" size="25" color="rgb(238,94,108)" />
				<!-- <img class="img1" src="img/more_r.png" alt=""> -->
				<!-- 爱心标志 -->
				<van-icon class="img2" name="like-o" size="25" color="rgb(238,94,108)" />
				<!-- <img class="img2" src="img/favorite_r.png" alt=""> -->
			</div>
			<!-- 轮播图 -->
			<div>
				<van-swipe :autoplay="3000" indicator-color="#ED5564">
				  <van-swipe-item v-for="(item,index) in dataImg" >
					  <img :src="item" style="width: 100%;" alt="">
				  </van-swipe-item>
				</van-swipe>
			</div>
			<!-- 分割线 -->
			<van-divider />
			<div class="name" style="text-align: left; margin: 10px;">
				<span>{{datas.goods_info.goods_name}}</span>
				<p>{{datas.goods_info.goods_jingle}}</p>
			</div>
			<div class="info">
				<span class="span1">￥{{datas.goods_info.goods_price}}</span>
				<span class="span2">销量:{{datas.goods_info.evaluation_count}}件</span>
			</div>
			
			<div @click="goAdress">
				<img style="width: 100%;" src="img/adress.png" alt="">
			</div>
			<!-- 分割线 -->
			<van-divider />
			<div @click="onClickButton">
				<img style="width: 100%;" src="img/def.png" alt="">
			</div>

			<van-popup v-model="show" position="bottom" :style="{ height: '80%' }">
				<div style="display: flex;">
					<div style="position: absolute; left: 20px;top: 20px;">
						<img :src="datas.spec_image[0]" alt="">
					</div>
					<div style="width: 246px;text-align: left; margin: 0; position: absolute; top: 20px; right: 20px;font-size: 12px;">
						{{datas.goods_info.goods_name}}
						<div style="position: absolute; font-size: 14px; color: #DB4453;">
							￥{{datas.goods_info.goods_price}}
						</div>
						<div style="position: absolute; right: 0px; color: #888; font-size: 10px;">
							库存：999件
						</div>
					</div>
					<!-- 空白处 -->
					<div style="position: absolute; top: 90px; height: 40px; width: 100%;border-top: 1px solid rgba(0,0,0,0.2); border-bottom: 1px solid rgba(0,0,0,0.2);">
						
					</div>
					<!-- 购物数量 -->
					<div style=" width: 100%; padding: 10px; position: absolute; top: 135px; display: flex; justify-content: space-between;">
							<div style="width: 30px; text-align: left; width: 70%; line-height: 30px;  color: #888; font-size: 10px;">
								购买数量
							</div>
							<div>
								<van-stepper v-model="buyNum" />
							</div>
							
						<!-- <van-button type="primary" @click="addCart">加入购物车</van-button> -->
					</div>
					<div style="position: absolute; bottom: 0;">
						<div class="foot">
							<van-goods-action>
							  <van-goods-action-icon icon="chat-o" text="客服" @click="onClickIcon" />
							  <van-goods-action-icon icon="cart-o" text="购物车" @click="goCart" :info="$store.getters.getGoodList.length" />
							  <van-goods-action-button type="warning" text="加入购物车" @click="addCart" />
							  <van-goods-action-button type="danger" text="立即购买" @click="onClickButton" />
							</van-goods-action>
						</div>
					</div>
				</div>
				
			</van-popup>

			
			
			<br>
			<br>
			<br>
			<br>
			<br>
			
			<!-- 商品导航栏 -->
			<div class="foot">
				<van-goods-action>
				  <van-goods-action-icon icon="chat-o" text="客服" @click="onClickIcon" />
				  <van-goods-action-icon icon="cart-o" text="购物车" @click="goCart" :info="$store.getters.getGoodList.length" />
				  <van-goods-action-button type="warning" text="加入购物车" @click="onClickButton" />
				  <van-goods-action-button type="danger" text="立即购买" @click="onClickButton" />
				</van-goods-action>
			</div>
		</div>
		
		<!-- 地址选择 -->
		<div v-show="flag" >
			<van-nav-bar
			  title="选择地址"
			  left-text="取消"
			  right-text="确认"
			  left-arrow
			  @click-left="onClickLeft"
			  @click-right="onClickRight"
			/>
			<van-area :area-list="areaList" confirm-button-text=" " cancel-button-text=" " />
		</div>
		
	</div>
	
	
	<!-- <div>{{datas.product_info.name}}</div> -->
</template>

<script>
	import {dataShop5} from '@/data.js'
	export default{
		data(){
			return{
				datas:"",
				show:false,
				buyNum:1,
				dataImg:[
					"https://www.taokubuy.com/data/upload/shop/store/goods/53/53_06209925111145159_1280.jpg",
					"https://www.taokubuy.com/data/upload/shop/store/goods/53/53_06209925991410230_1280.jpg",
					"https://www.taokubuy.com/data/upload/shop/store/goods/53/53_06209926007328973_1280.jpg",
					"https://www.taokubuy.com/data/upload/shop/store/goods/53/53_06209926028924035_1280.jpg",
					"https://www.taokubuy.com/data/upload/shop/store/goods/53/53_06209926053765904_1280.jpg"
				],
				areaList:
				{
				  province_list: {
				    110000: '北京市',
				    120000: '天津市'
				  },
				  city_list: {
				    110100: '北京市',
				    110200: '县',
				    120100: '天津市',
				    120200: '县'
				  },
				  county_list: {
				    110101: '东城区',
				    110102: '西城区',
				    110105: '朝阳区',
				    110106: '丰台区',
				    120101: '和平区',
				    120102: '河东区',
				    120103: '河西区',
				    120104: '南开区',
				    120105: '河北区',
				    // ....
				  }
				},
				flag:false
				
			}
		},
		methods:{
			goUp(){
				this.$router.go(-1)			  
			},
			goCart(){
				this.$router.push("/cart")
			},
			addCart(){
				this.$toast('已加入购物车');
				this.show=false;
				this.$store.commit("addGood",{id:this.datas.goods_info.gc_id_1,name:this.datas.goods_info.goods_name,num: this.buyNum,price:this.datas.goods_info.goods_price,img:this.datas.spec_image[0]} )
			},
			onClickIcon() {
			  this.$toast('点击了客服图标');
			},
			onClickButton() {
			  this.show=true
			},
			goAdress(){
				this.flag=true
			},
			onClickLeft() {
			  this.flag=false
			},
			onClickRight() {
			  this.flag=false
			}    
		},
		created() {
			this.datas=dataShop5.datas
		}

	}
</script>
 
<style scoped="scoped" lang="less">
	*{
		box-sizing: border-box;
	}
	.name{
		span{
			font-size: 15px;
		}
		p{
			margin: 0;
			font-size: 8px;
			color: #777;
		}
	}
	.info{
		display: flex;
		justify-content: space-between;
		margin: 10px;
		.span1{
			color: #DB4453;
			font-size: 20px;
		}
		.span2{
			font-size: 0.55rem;
		}
	}
	.goUpImg{
		border-radius: 50%;
		z-index: 100; 
		background-color: rgba(0,0,0,0.6);
		position: absolute;
		left: 20px;
		top: 20px; 
		width: 32px;
		height: 32px;
		// overflow: auto;
	}
	.imgTwo{
		position: relative;
		.img1{
			line-height: 32px;
			border-radius: 50%;
			z-index: 100; 
			background-color: rgba(0,0,0,0.6);
			position: absolute;
			width: 32px;
			height: 32px;
			overflow: auto;
			width: 30px;
			top: 20px;
			right: 20px;
			background: white;
		}
		.img2{
			line-height: 32px;
			border-radius: 50%;
			z-index: 100; 
			background-color: rgba(0,0,0,0.6);
			position: absolute;
			width: 32px;
			height: 32px;
			overflow: auto;
			top: 350px;right: 20px;
			background: white;
		}
		
	}

</style>
