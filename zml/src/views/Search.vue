<template>
	<div class="search" style="position: relative;">
		<div class="header">
			<div class="one">
				<van-icon name="arrow-left" size="25" @click="onClickLeft" />
			</div>
			<div class="search1">
				<van-search v-model="value" placeholder="请输入关键词" />				  
			</div>
			<div class="two">
				<van-icon size="25" @click="onClickRight" name="search" /> 				 
			</div>
		</div>
		<!-- <div class="header" style="position: relative;">
			<van-nav-bar
			  left-arrow
			  @click-left="onClickLeft"
			  @click-right="onClickRight"
			>
			<div class="search1">
			</div>
			<van-search class="sou" placeholder="请输入搜索关键词" v-model="value" slot="title" />
			<van-icon name="search" slot="right" />
			</van-nav-bar>
		</div> -->
		<div class="other" style="position: relative;">
			<p>热门搜索</p>
			<div class="lists">
				<van-tag class="list" plain :type="color[parseInt(Math.random()*color.length)]" v-for="item in 1" @click="downTag">搜索标签</van-tag>
			</div>
			<p>最近搜索</p>
			<div class="lists">
				<van-tag class="list" plain :type="color[parseInt(Math.random()*color.length)]" v-for="item in historySearch" @click="downTag">{{item}}</van-tag>
			</div>
			<div class="clear" @click="clear">
				清空历史
			</div>
		</div>
		


		
	</div>
	
</template>

<script>
	export default {
	  methods: {
		  clear(){
			  this.searchHistory=[]
		  },
	    onClickLeft() {
	      // this.$toast('返回上一级');
		  this.$router.go(-1); 
	    },
	    onClickRight() {
			if(this.value){
				this.$toast(`搜索了${this.value}`);
				this.searchHistory.unshift(this.value)
				localStorage.setItem("searchHistory",JSON.stringify(this.searchHistory))
			}
			else{
				this.$toast(`输入为空无法搜索`);
			}
	      
	    },
		downTag(){
			this.$toast(`点击了标签`);
		}
	  },
	  computed:{
		historySearch(){
			return this.searchHistory
		}  
	  },
	  data(){
		  return{
			  value:"",
			  color:["primary","success","danger","warning"],
			  searchHistory:JSON.parse(localStorage.getItem("historySearch"))||[],
			  
		  }
	  }
	}
</script>

<style scoped="scoped" lang="less">
	.header{
		width: 100%;
		display: flex;
		justify-content: space-around;
		align-items: center;
		.search1{
			width: 80%;
		}
	}
	.other{
		img{
			width: 100%;
		}
	}
	.lists{
		padding: 20px;
		display: flex;
		flex-wrap: wrap;
		.list{
			margin: 10px;
			padding: 10px;
		}
	}

	
	.clear{
		width: 200px;height: 40px;
		background: rgba(238,238,238,0.5);
		position: relative;
		line-height: 40px;
		left: 85px;
	}

</style>
