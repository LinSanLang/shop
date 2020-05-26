<template>
	
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
	<!-- 回到顶部 -->
	<div class="goTopImg" @click="backTop" v-show="btnFlag" >
		<img src="img/gotop_b.png" alt="">
	</div>
	<!-- 头部隐藏部分 -->
	<div class="hiddenTop" v-show="btnFlag">
		<img class="imgTop1" src="img/home_logo.png" alt="">
		<img @click="goSearch" class="imgTop2" src="img/sou.png" alt="">
		<img class="imgTop3" src="img/message_b.png" alt="">
	</div>

	<div class="header">
		<!-- 首页的搜索栏  vant引入-->
		<div @click="goSearch">
			<van-search :disabled="true" placeholder="请输入搜索关键词" />
		</div>
		
		<img src="https://www.taokubuy.com/data/upload/mobile/special/s0/s0_06281883894971427.jpg" style="width: 100%;" alt="">
		<div class="header-con1">
			<div @click="go1">
				<img src="img/mian.png" alt="">
				<p>发现好物</p>
			</div>
			<div @click="go1">
				<img src="img/fei.png" alt="">
				<p>全球优选</p>
			</div>
			<div @click="go1">
				<img src="img/kai.png" alt="">
				<p>兴民扶农</p>
			</div>
			<div @click="go2">
				<img src="img/wang.png" alt="">
				<p>企业采购</p>
			</div>
			<div @click="go2">
				<img src="img/dian.png" alt="">
				<p>工厂直供</p>
			</div>
		</div>
		<div class="header-con1">
			<div @click="go2">
				<img src="img/shang.png" alt="">
				<p>淘库国际</p>
			</div>
			<div @click="goStoreList">
				<img src="img/tao.png" alt="">
				<p>淘库小店</p>
			</div>
			<div @click="goInvite">
				<img src="img/ku.png" alt="">
				<p>邀请返利</p>
			</div>
			<div @click="goHong">
				<img src="img/shang2.png" alt="">
				<p>红包活动</p>
			</div>
			<div>
				<img src="img/cheng.png" alt="">
				<p>签到有奖</p>
			</div>
		</div>
	</div>
	
	<div v-for="(item,index) in datas">
		<!-- <div v-if="item.adv_list">
			<img style="width: 100%;" :src="item.adv_list.item[0].image" alt="">
		</div>
		 -->
		<div v-if="item.home1">
			<div v-if="item.home1.item['s0_06227652599101434.jpg']">
				<img style="width: 100%;" src="https://www.taokubuy.com/data/upload/mobile/special/s0/s0_06227652599101434.jpg" alt="">
			</div>
			<div v-else-if="item.home1.item['s0_06227649450396097.jpg']">
				<img style="width: 100%;" src="https://www.taokubuy.com/data/upload/mobile/special/s0/s0_06227649450396097.jpg" alt="">
			</div>
			<div v-else-if="item.home1.item['s0_06227655549051850.jpg']">
				<img style="width: 100%;" src="https://www.taokubuy.com/data/upload/mobile/special/s0/s0_06227655549051850.jpg" alt="">
			</div>
			<div v-else-if="item.home1.item['s0_06227657812210141.jpg']">
				<img style="width: 100%;" src="https://www.taokubuy.com/data/upload/mobile/special/s0/s0_06227657812210141.jpg" alt="">
			</div>
		</div>
		<div v-else-if="item.goods2">
			<van-cell-group>
			  <van-cell to="/shoplist" :title="item.goods2.title" value="更多" />
			</van-cell-group>
			<div class="showShop">
				<div v-for="(item1,index) in item.goods2.item">
					<router-link :to="'/detail/'+item1.goods_id">
						<!-- <div class="top">
							抢购
						</div> -->
						<img style="width: 120px;height: 120px;" :src="item1.goods_image" alt="">
						<span>￥{{item1.goods_promotion_price}}</span>
						<p>￥{{item1.goods_price}}</p>
					</router-link>
				</div>
			</div>
		</div>
		<div v-else-if="item.goods1">
			<van-cell-group>
			  <van-cell to="/shoplist1" :title="item.goods1.title" value="更多" />
			</van-cell-group>
			<div class="showShop">
				<div v-for="(item1,index) in item.goods1.item">
					<router-link :to="'/detail2/'+item1.goods_id">
						<img style="width: 120px;height: 120px;" :src="item1.goods_image" alt="">
						<span>￥{{item1.goods_promotion_price}}</span>
						<p>￥{{item1.goods_price}}</p>
					</router-link>
					
				</div>
			</div>
		</div>
		<div v-else-if="item.goods">
			<van-cell-group>
			  <van-cell to="/shoplist" :title="item.goods.title" value="更多" />
			</van-cell-group>
			<div class="showShop1">
				<div v-for="(item1,index) in item.goods.item">
					
					<router-link :to="'/detail3/'+item1.goods_id">
						<img style="width: 100%; height: 176px;" :src="item1.goods_image" alt="">
						<div class="one">
							<span>{{item1.goods_name}}</span>
						</div>
						<div class="two">
							<p>￥{{item1.goods_price}}</p>
						</div>
						
					</router-link>
					
				</div>
			</div>
		</div>
	</div>
	
	<br>
	<br>
	<br>
	<br>
	<br>

	<!-- <router-link :to="'/detail/'+item1.goods_id">

	</router-link> -->
	


  </div>
</template>
<style>
	.van-cell__title{
		text-align: left;
	}
</style>
<style scoped="scoped" lang="less">
	*{
		box-sizing: border-box;
	}
	.hiddenTop{
		z-index: 10;
		position: fixed;
		display: flex;
		padding-top: 5px;
		justify-content: space-around;
		background: rgb(201,21,35);
		height: 40px;
		width: 100%;
		.imgTop1{
			width: 60px;height: 30px;
		}
		.imgTop2{
			height: 30px;
		}
		.imgTop3{
			width: 26px;height: 26px;
		}
	}
	.home{
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
	.header{
		.header-con1{
			display: flex;
			justify-content: space-around;
			flex-wrap: wrap;
			img{
				width: 34px; height: 34px;
			}
			p{
				margin-top: 0;
				font-size: 0.6rem;
				// line-height: 0.9rem;
				color: #555;
			}
		}
	}
	
	
	.showShop{
		display: flex;
		width: 100%;
		overflow: auto;
		position:relative;
		span{
			color: #DB4453;
			font-size: 1em;
			font-weight: 600;
		}
		p{
			margin: 0;
			text-decoration: line-through;
			color: #777;
			font-size: 0.8em;
		}
	}
	.showShop1{
		display: flex;
		.one{
			height: 34px;
			span{
				font-size: 0.65rem;
				line-height: 0.8rem;
				color: #000000;
				height: 1.6rem;
				overflow: hidden;
			}
		}
		.two{
			text-align:left;
			p{
				color: #DB4453;
				font-size: 1em;
				font-weight: 600;
			}
		}
		
	}
</style>
<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import HomePage from '@/components/HomePage.vue'
import {data1} from '@/data.js'
export default {
  name: 'home',
  components: {
    HomePage
  },
  data(){
	  return{
		  datas:null,
		  homeValue:"",
		  // 控制回到顶部隐藏显示的变量
		  btnFlag:false
	  }
  },
  methods:{
	  goInvite(){
		  this.$router.push("/invite")
	  },
	  goStoreList(){
		  this.$router.push("/storelist")
	  },
	  go2(){
	  		  this.$router.push("/store")
	  },
	  go1(){
		  this.$router.push("/shoplist1")
	  },
	  goHong(){
			this.$router.push("/hongbao")
	  },
	  goSearch(){
		  this.$router.push("/search")
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
	    if (that.scrollTop > 60) {
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
   
   
  

  created() {
  	this.datas=data1.datas
  }

}
</script>
