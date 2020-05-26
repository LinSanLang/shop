<template>
  <div class="category">
	  <!-- 开头的搜索框 -->
	  <div class="header">
		  <van-icon name="arrow-left" size="25" @click="goUp" />
		  <div @click="goSearch" class="search1">
			  <van-search  :disabled="true" placeholder="请输入关键词" v-model="value" />
		  </div>
		  <van-icon size="25" name="ellipsis" />
	  </div>
	  
	  <div class="body">
		  <div class="left">
			  <van-sidebar v-model="activeKey" >
				<van-sidebar-item title="品牌推荐" @change="onChange" />
			    <van-sidebar-item @change="onChange" v-for="(item,index) in datas2.class_list" :title="item.gc_name" />
			  </van-sidebar>
		  </div>
		  <div class="right" ref="right">
			  
			  <!-- 品牌推荐数据显示 -->
			  <div  v-for="(item,index) in datas1.brand_list" v-if="0==activeKey">
				  <div class="shop">
					  <router-link to="/shoplist">
						  <img :src="item.brand_pic" alt="">
						  <p>{{item.brand_name}}</p>
					  </router-link>
					  
				  </div>
			  </div>
			  
			  <!-- 家用电器数据显示-->
			  <div v-for="(item,index) in datas3.class_list" class="rightCon1" v-if="1==activeKey">
				  <van-cell :title="item.gc_name" is-link />
				  <div class="rightCon2">
					  <div v-for="(item1,index) in item.child" >
						  <div class="shop">
							  <router-link to="/gosearch">
								  <img style="width: 44px;height: 44px;" :src="datasImg1[parseInt(Math.random()*datasImg1.length)]" alt="">
								  <p style="margin: 0;padding: 0;">{{item1.gc_name}}</p>
							  </router-link>
							  <!-- <img style="width: 44px;height: 44px;" src="https://www.taokubuy.com/data/upload/shop/common/category-pic-895.jpg" alt="">
							  <p style="margin: 0;padding: 0;">{{item1.gc_name}}</p> -->
						  </div> 
					  </div>
				  </div>
			  </div>
			  
			  <!-- 手机数码数据显示 -->
			  <div v-for="(item,index) in datas4.class_list" class="rightCon1" v-if="2==activeKey">
			  		<van-cell :title="item.gc_name" is-link />
			  		<div class="rightCon2">
			  			<div v-for="(item1,index) in item.child" >
			  				<div class="shop">
								<router-link to="/gosearch">
									<img style="width: 44px;height: 44px;" :src="datasImg2[parseInt(Math.random()*datasImg2.length)]" alt="">
									<p style="margin: 0;padding: 0;">{{item1.gc_name}}</p>		
								</router-link>	
			  				</div> 
			  			</div>		  					  
			  		</div>		  
			  </div>
			  
			  <!-- 电脑办公数据显示 -->
			  <div v-for="(item,index) in datas5.class_list" class="rightCon1" v-if="3==activeKey">
			  		<van-cell :title="item.gc_name" is-link />
			  		<div class="rightCon2">
			  			<div v-for="(item1,index) in item.child" >
			  				<div class="shop">
								<router-link to="/gosearch">
									<img style="width: 44px;height: 44px;" :src="datasImg3[parseInt(Math.random()*datasImg3.length)]" alt="">
									<p style="margin: 0;padding: 0;">{{item1.gc_name}}</p>	
								</router-link>	
			  				</div> 
			  			</div>		  					  
			  		</div>		  
			  </div>
			  
			  <div v-for="(item,index) in datas6.class_list" class="rightCon1" v-if="4==activeKey">
			  		<van-cell :title="item.gc_name" is-link />
			  		<div class="rightCon2">
			  			<div v-for="(item1,index) in item.child" >
			  				<div class="shop">
								<router-link to="/gosearch">
									<img style="width: 44px;height: 44px;" :src="datasImg4[parseInt(Math.random()*datasImg4.length)]" alt="">
									<p style="margin: 0;padding: 0;">{{item1.gc_name}}</p>
								</router-link>	
			  				</div> 
			  			</div>		  					  
			  		</div>		  
			  </div>
			  
		  </div>
	  </div>

  </div>
 
</template>

<style>
/* 	.right>div{
		height: 80px;
	} */
</style>

<style scoped="scoped" lang="less">
	// .header{
	// 	display: flex;
	// }
	*{
		box-sizing: border-box;
	}
	.van-tab:active{
		color: #ED5564;
	}
	.van-sidebar-item--select{
		border: none;
		color: #ED5564;
	}
	.van-cell{
		// border-color: #F5F5F5;
		background-color: #FCFCFC;
	}
	.category{
		.header{
			display: flex;
			justify-content: space-around;
			align-items: center;
			.search1{
				width: 80%;
			}
		}
		.body{
			display:flex;
			position:absolute;
			left: 0;
			top: 50px;
			right: 0;
			bottom: 50px;
			.left{
				overflow-y: auto;
				width: 25%;
			}
			.left::-webkit-scorollbar{
				display: none;
			}
			.right{
				overflow-y: auto;
				width: 75%;
				display:flex;
				justify-content: space-around;
				flex-wrap: wrap;
				align-content: flex-start;
				.rightCon1{
					width: 100%;
				}
				.rightCon2{
					display: flex;
					flex-wrap: wrap;
					// justify-content: space-around;
					.shop{
						margin-left: 10px;
						width: 80px;height: 80px;
						img{
							width: 100%;
						}
						p{
							font-size: 0.5rem;
							line-height: 1rem;
							white-space: nowrap;
							text-overflow: ellipsis;
							text-align: center;
							overflow: hidden;    
						}
					}
				}
				.shop{
					width: 80px;height: 80px;
					color:#000000;
					a:active{
						color:#000000;
					}
					a{
						color:#000000;
					}
					a:visited{
						color:#000000;
					}
					img{
						width: 100%;
					}
					p{
						font-size: 0.5rem;
						line-height: 1rem;
						white-space: nowrap;
						text-overflow: ellipsis;
						text-align: center;
						overflow: hidden;    
					}
				}
				
			}
			.right::-webkit-scorollbar{
				display: none;
			}
		}
	}
	


</style>

<script>
	import {dataCategory1,dataCategory2,dataCategory3,dataCategory4,dataCategory5,dataCategory6} from '@/data.js'
	export default {
		data(){
			return{
				value:"",
				activeKey: 0,
				datas1:"",
				datas2:"",
				datas3:"",
				datasImg1:[
					"https://www.taokubuy.com/data/upload/shop/common/category-pic-898.jpg",
					"https://www.taokubuy.com/data/upload/shop/common/category-pic-1642.jpg",
					"https://www.taokubuy.com/data/upload/shop/common/category-pic-905.jpg",
					"https://www.taokubuy.com/data/upload/shop/common/category-pic-1643.jpg",
					"https://www.taokubuy.com/data/upload/shop/common/category-pic-1595.jpg",
					"https://www.taokubuy.com/data/upload/shop/common/category-pic-1350.jpg",
					"https://www.taokubuy.com/data/upload/shop/common/category-pic-1884.jpg",
					"https://www.taokubuy.com/data/upload/shop/common/category-pic-916.jpg",
					"https://www.taokubuy.com/data/upload/shop/common/category-pic-1610.jpg",
					"https://www.taokubuy.com/data/upload/shop/common/category-pic-918.jpg",
					"https://www.taokubuy.com/data/upload/shop/common/category-pic-919.jpg"
				],
				datasImg2:[
					"https://www.taokubuy.com/data/upload/shop/common/category-pic-1613.jpg",
					"https://www.taokubuy.com/data/upload/shop/common/category-pic-1294.jpg",
					"https://www.taokubuy.com/data/upload/shop/common/category-pic-1813.jpg",
					"https://www.taokubuy.com/data/upload/shop/common/category-pic-528.jpg",
					"https://www.taokubuy.com/data/upload/shop/common/category-pic-509.jpg",
					"https://www.taokubuy.com/data/upload/shop/common/category-pic-1295.jpg",
					"https://www.taokubuy.com/data/upload/shop/common/category-pic-2034.jpg",
					"https://www.taokubuy.com/data/upload/shop/common/category-pic-509.jpg",
					"https://www.taokubuy.com/data/upload/shop/common/category-pic-512.jpg",
					"https://www.taokubuy.com/data/upload/shop/common/category-pic-1313.jpg"
				],
				datasImg3:[
					"https://www.taokubuy.com/data/upload/shop/common/category-pic-695.jpg",
					"https://www.taokubuy.com/data/upload/shop/common/category-pic-671.jpg",
					"https://www.taokubuy.com/data/upload/shop/common/category-pic-678.jpg",
					"https://www.taokubuy.com/data/upload/shop/common/category-pic-702.jpg",
					"https://www.taokubuy.com/data/upload/shop/common/category-pic-708.jpg",
					"https://www.taokubuy.com/data/upload/shop/common/category-pic-699.jpg",
					"https://www.taokubuy.com/data/upload/shop/common/category-pic-693.jpg",
					"https://www.taokubuy.com/data/upload/shop/common/category-pic-677.jpg",
					"https://www.taokubuy.com/data/upload/shop/common/category-pic-1715.jpg"
				],
				datasImg4:[
					"https://www.taokubuy.com/data/upload/shop/common/category-pic-1262.jpg",
					"https://www.taokubuy.com/data/upload/shop/common/category-pic-1267.jpg",
					"https://www.taokubuy.com/data/upload/shop/common/category-pic-1268.jpg",
					"https://www.taokubuy.com/data/upload/shop/common/category-pic-1261.jpg",
					"https://www.taokubuy.com/data/upload/shop/common/category-pic-1291.jpg",
					"https://www.taokubuy.com/data/upload/shop/common/category-pic-1302.jpg",
					"https://www.taokubuy.com/data/upload/shop/common/category-pic-1412.jpg",
					"https://www.taokubuy.com/data/upload/shop/common/category-pic-1426.jpg",
					"https://www.taokubuy.com/data/upload/shop/common/category-pic-1528.jpg",
					"https://www.taokubuy.com/data/upload/shop/common/category-pic-1428.jpg",
					"https://www.taokubuy.com/data/upload/shop/common/category-pic-1299.jpg"
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
			  onChange(index) {
			  // 在左侧点击时需要控制右侧滚动条位置
			  // 通过$refs 找到需要控制的dom元素  控制元素的滚动条到顶部
			    this.$refs.right.scrollTo(0,0); 
				// console.log(this.activeKey)
			  },
			    
		},
		created() {
			this.datas1=dataCategory1.datas;
			this.datas2=dataCategory2.datas;
			this.datas3=dataCategory3.datas;
			this.datas4=dataCategory4.datas;
			this.datas5=dataCategory5.datas;
			this.datas6=dataCategory6.datas;
			// console.log(this.datas1)
			// console.log(this.datas2)
		}

	}
</script>